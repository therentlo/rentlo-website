import type { LocaleCode } from './locales'
import { LOCALES } from './locales'
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

// Malaysia only until another country is live (country switcher hidden).
const locale: LocaleCode = 'MY'

export function App() {
  const L = LOCALES[locale]

  return (
    <>
      <FlagDefs />
      <Nav />
      <main>
        <Hero locale={L} />
        <BankStrip locale={L} />
        <Problems locale={L} />
        <Features locale={L} />
        <Pricing />
        <HowItWorks localeCode={locale} />
        <FAQ localeCode={locale} />
        <CTA localeCode={locale} />
      </main>
      <Footer />
    </>
  )
}
