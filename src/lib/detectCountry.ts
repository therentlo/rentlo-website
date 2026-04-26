import type { LocaleCode } from '../locales'

export async function detectCountry(): Promise<LocaleCode> {
  // 1. localStorage override wins
  const override = localStorage.getItem('rentlo.country') as LocaleCode | null
  if (override === 'MY' || override === 'KH' || override === 'XX') return override

  // 2. Cloudflare-injected meta tag
  const meta = document.querySelector('meta[name="cf-country"]')
  const cc = meta?.getAttribute('content')?.toUpperCase()
  if (cc === 'MY' || cc === 'KH') return cc

  // 3. Browser timezone / language
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    if (tz.includes('Kuala_Lumpur')) return 'MY'
    if (tz.includes('Phnom_Penh')) return 'KH'
    const lang = (navigator.language || '').toLowerCase()
    if (lang.includes('-my') || lang.startsWith('ms')) return 'MY'
    if (lang.includes('-kh') || lang.startsWith('km')) return 'KH'
  } catch (_) {}

  return 'XX'
}
