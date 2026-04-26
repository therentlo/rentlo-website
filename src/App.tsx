import { useEffect, useState } from 'react'
import type { LocaleCode } from './locales'
import { LOCALES } from './locales'
import { detectCountry } from './lib/detectCountry'
import { FlagDefs } from './components/Flags'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { BankStrip } from './components/BankStrip'
import { Problems } from './components/Problems'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  const [locale, setLocale] = useState<LocaleCode>('MY')

  useEffect(() => {
    // Respect stored user choice; otherwise detect
    const stored = localStorage.getItem('rentlo.country') as LocaleCode | null
    if (stored && LOCALES[stored]) {
      setLocale(stored)
      return
    }
    detectCountry().then((code) => setLocale(code))
  }, [])

  function handleLocaleChange(code: LocaleCode) {
    setLocale(code)
    localStorage.setItem('rentlo.country', code)
  }

  const L = LOCALES[locale]

  return (
    <>
      <FlagDefs />
      <Nav locale={locale} onLocaleChange={handleLocaleChange} />
      <main>
        <Hero locale={L} />
        <BankStrip locale={L} />
        <Problems locale={L} />
        <Features locale={L} />
        <Pricing locale={L} />
        <HowItWorks localeCode={locale} />
        <FAQ localeCode={locale} />
        <CTA localeCode={locale} />
      </main>
      <Footer />
    </>
  )
}
