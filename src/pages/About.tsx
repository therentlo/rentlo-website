import { LegalLayout, H2, Para } from './LegalLayout'

// B4.3 — the About page was live on therentlo.com but not in git. Text taken
// from the live site on 2026-10-16, with the wording Mah approved that day:
// no "tax-ready", no automatic payment matching (the landlord marks it paid),
// no "no onboarding call" (the pilot sets landlords up personally), Malaysia
// instead of Southeast Asia. The "Where we're headed" vision is kept.
export function About() {
  return (
    <LegalLayout title="About Rentlo" isHub>
      <H2>Why we exist</H2>
      <Para>
        We've been tenants. We've been landlords. We've watched rent collection happen the same way
        for years — WhatsApp messages, bank transfer screenshots, Excel spreadsheets, and a prayer
        that everything adds up at tax time.
      </Para>
      <Para>
        The tools that exist today fall into two camps. The good ones are built for property
        companies with 500 units and a dedicated accounts team — bloated, expensive, and designed
        for people who aren't you. The cheap ones are stitched together from five different apps
        that don't talk to each other — one for invoices, one for reminders, one for receipts, one
        for tracking, and your phone's camera roll for everything else.
      </Para>
      <Para>
        Independent landlords — the ones managing 5, 10, 30 units on their own — deserve better
        than both.
      </Para>

      <H2>What Rentlo does</H2>
      <Para>
        Rentlo is a quiet rent collection tool for independent landlords in Malaysia. It sends the
        invoice before rent is due and a polite reminder if it's late — by WhatsApp and email. When
        your tenant sends the payment slip, Rentlo finds the invoice and tells you. You mark it
        paid, and the receipt goes out by itself.
      </Para>
      <Para>
        No training manual. No features you'll never use. You add a tenant, set the rent, and
        Rentlo handles the rest.
      </Para>

      <H2>Where we're headed</H2>
      <Para>
        Independent landlords run the rental economy — but have almost no tools built for them.
        The friction is the same everywhere: chasing payments, messy records, tax season panic.
        We're starting in Malaysia.
      </Para>
      <Para>
        Our longer-term vision is to become rental financial infrastructure for the region. That
        means helping landlords not just collect rent, but build a financial track record from it —
        credit passports for tenants, deposit-free renting, and working capital for landlords, all
        built on verified rental cash flow.
      </Para>
      <Para>
        But first, we're making sure every landlord can collect rent without chasing it. That's
        the foundation everything else depends on.
      </Para>

      <H2>Get in touch</H2>
      <Para>
        We're onboarding our first wave of landlords now. If you manage rental properties and want
        to stop chasing rent, we'd like to hear from you.
      </Para>
      <div className="mt-8 mb-4 rounded-[14px] border border-line bg-canvas px-6 py-5">
        <div className="flex flex-col gap-2.5 text-[15.5px]">
          <p className="m-0 text-ink-2">
            <span className="text-muted inline-block w-[80px]">Email</span>
            <a href="mailto:hey@therentlo.com" className="text-teal font-medium hover:underline">
              hey@therentlo.com
            </a>
          </p>
          <p className="m-0 text-ink-2">
            <span className="text-muted inline-block w-[80px]">Website</span>
            <a href="https://therentlo.com" className="text-teal font-medium hover:underline">
              therentlo.com
            </a>
          </p>
          <p className="m-0 text-ink-2">
            <span className="text-muted inline-block w-[80px]">Built in</span>
            Malaysia
          </p>
        </div>
      </div>
    </LegalLayout>
  )
}
