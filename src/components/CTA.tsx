import { useRef, useState } from 'react'
import type { LocaleCode } from '../locales'
import { useReveal } from '../hooks/useReveal'

interface Props {
  localeCode: LocaleCode
}

export function CTA({ localeCode }: Props) {
  const ref = useReveal()
  const loadTime = useRef(Date.now())
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const honeypot = (form.elements.namedItem('website') as HTMLInputElement).value

    if (honeypot) return // bot

    if (!email.trim() && !phone.trim()) {
      setError('Please enter your email or phone number.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          phone: phone.trim(),
          country: localeCode,
          honeypot,
          loadTime: loadTime.current,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  return (
    <section className="py-20" id="cta">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-[32px] px-12 py-24 text-center text-white sm:rounded-[24px] sm:px-7 sm:py-12"
          style={{ background: '#0B1220' }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(40% 60% at 20% 100%,rgba(13,148,136,.5),transparent 65%),radial-gradient(50% 60% at 85% 0%,rgba(94,234,212,.2),transparent 65%)',
            }}
          />
          <div className="relative z-10">
            <h2
              className="font-semibold tracking-[-0.035em] leading-none mb-5 text-white"
              style={{ fontSize: 'clamp(36px,5vw,68px)', textWrap: 'balance' as any }}
            >
              Your next rent day,<br />handled.
            </h2>
            <p className="text-muted-2 text-[20px] tracking-[-0.005em] mx-auto mb-10 max-w-[500px]">
              Join the pilot and we'll reach out personally to set up your first tenant. Free during the pilot. No card, no catch.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 max-w-[420px] mx-auto"
              >
                {/* Honeypot — hidden from humans, visible to bots */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    top: '-9999px',
                    opacity: 0,
                    height: 0,
                    width: 0,
                  }}
                />

                <div
                  className="rounded-[14px] p-[7px] flex flex-col gap-1"
                  style={{
                    background: 'rgba(255,255,255,.08)',
                    border: '1px solid rgba(255,255,255,.12)',
                  }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    aria-label="Email address"
                    className="bg-transparent border-0 outline-none text-white text-[15.5px] px-4 py-2.5 placeholder-muted w-full"
                  />
                  <div style={{ height: '1px', background: 'rgba(255,255,255,.08)', margin: '0 4px' }} />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="012-345 6789 (optional)"
                    aria-label="Phone number"
                    className="bg-transparent border-0 outline-none text-white text-[15.5px] px-4 py-2.5 placeholder-muted w-full"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-[13.5px] text-center -mt-1">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-1.5 h-[50px] px-[18px] rounded-[12px] bg-teal text-white font-semibold text-[15px] tracking-[-0.01em] transition-all hover:bg-teal-600 hover:-translate-y-[1px] hover:shadow-lg disabled:opacity-70"
                >
                  {loading ? 'Joining…' : 'Join the pilot'}
                  {!loading && (
                    <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-mint text-[16px] font-medium mt-4">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                You're on the list. We'll be in touch shortly.
              </div>
            )}

            <div className="text-[#64748B] text-[13px] mt-5">
              By joining, you agree to our Terms and Privacy Policy.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
