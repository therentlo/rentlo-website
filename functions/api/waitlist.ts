// Minimal inline types — avoids needing @cloudflare/workers-types in the build
interface KVNamespace {
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>
}

interface Env {
  WAITLIST: KVNamespace
  RESEND_API_KEY: string
}

interface EventContext<E = Env> {
  request: Request
  env: E
}

type PagesFunction<E = Env> = (ctx: EventContext<E>) => Response | Promise<Response>

const CORS = {
  'Access-Control-Allow-Origin': 'https://therentlo.com',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  })
}

export const onRequestOptions: PagesFunction = () =>
  new Response(null, { status: 204, headers: CORS })

export const onRequestPost: PagesFunction = async ({ request, env }) => {
  let body: {
    email?: string
    phone?: string
    country?: string
    honeypot?: string
    loadTime?: number
  }

  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  // Bot checks
  if (body.honeypot) {
    return json({ success: true }) // silent discard
  }
  if (typeof body.loadTime === 'number' && Date.now() - body.loadTime < 2000) {
    return json({ success: true }) // silent discard
  }

  const email = (body.email ?? '').trim()
  const phone = (body.phone ?? '').trim()
  const country = (body.country ?? 'XX').slice(0, 4)

  if (!email && !phone) {
    return json({ error: 'Email or phone required' }, 400)
  }

  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  const entry = JSON.stringify({
    email,
    phone,
    country,
    ip: request.headers.get('cf-connecting-ip') ?? '',
    ua: request.headers.get('user-agent')?.slice(0, 200) ?? '',
    ts: Date.now(),
  })

  // Store in KV
  try {
    await env.WAITLIST.put(key, entry)
  } catch (err) {
    console.error('KV write failed', err)
    return json({ error: 'Storage error' }, 500)
  }

  // Notify via Resend
  if (env.RESEND_API_KEY) {
    const timestamp = new Date().toLocaleString('en-GB', {
      timeZone: 'Asia/Kuala_Lumpur',
      dateStyle: 'full',
      timeStyle: 'short',
    })

    const body = [
      'New waitlist signup on therentlo.com',
      '',
      `Email:    ${email || '—'}`,
      `Phone:    ${phone || '—'}`,
      `Country:  ${country}`,
      `Time:     ${timestamp} (MYT)`,
    ].join('\n')

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Rentlo <noreply@therentlo.com>',
        to: ['hey@therentlo.com'],
        subject: '🏠 New waitlist signup — therentlo.com',
        text: body,
      }),
    }).catch((err) => console.error('Resend failed', err))
  }

  return json({ success: true })
}
