import { useState } from 'react'
import type { LocaleCode } from '../locales'
import { useReveal } from '../hooks/useReveal'

interface Props {
  localeCode: LocaleCode
}

export function FAQ({ localeCode }: Props) {
  const headRef = useReveal()
  const listRef = useReveal()
  const [openIndex, setOpenIndex] = useState(0)

  const banks =
    localeCode === 'MY' ? 'Maybank, CIMB, Public Bank, RHB, Hong Leong, and DuitNow' :
    localeCode === 'KH' ? 'ABA, ACLEDA, Wing, Bakong, KHQR, and TrueMoney' :
    'major regional banks and QR networks'

  const tax =
    localeCode === 'MY' ? 'LHDN-ready exports' :
    localeCode === 'KH' ? 'GDT-ready exports' :
    'tax-ready exports'

  const items = [
    {
      q: 'Which banks does Rentlo work with?',
      a: `Rentlo connects with ${banks}. If your tenants pay through any of these, we can match the payment to the right invoice automatically. We add new banks based on landlord requests — tell us yours.`,
    },
    {
      q: 'Is my financial data safe?',
      a: "We never see your bank login. Rentlo only reads incoming payment notifications you forward or connect, the same way your accountant might. Data is encrypted in transit and at rest, and you can export or delete everything at any time.",
    },
    {
      q: 'What if a tenant disputes a payment?',
      a: "Every receipt has a unique reference number that ties back to the original transfer, the date, and the amount. If anything is ever disputed, you have a clean paper trail in one place — no scrolling through WhatsApp screenshots.",
    },
    {
      q: "Do my tenants need to install an app?",
      a: "No. Tenants get reminders via WhatsApp, email, or SMS — whatever they already use — and they pay through their own banking app exactly as they do today. Rentlo runs entirely on your side.",
    },
    {
      q: 'How do I get my data out at tax time?',
      a: `One click exports a clean PDF or CSV of every receipt for any date range — formatted for your accountant or for ${tax}. No copy-pasting. No spreadsheet surgery.`,
    },
    {
      q: 'When can I actually start using it?',
      a: "We're onboarding our first wave of landlords now. Join the waitlist and we'll reach out personally — usually within a few days — to get you set up. Free for your first tenant, forever.",
    },
  ]

  return (
    <section className="py-[140px] md:py-20" id="faq">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headRef} className="reveal max-w-[760px] mx-auto text-center mb-20">
          <span className="kicker">FAQ</span>
          <h2 className="title">
            Honest answers<br />
            <span className="text-muted">to what landlords actually ask.</span>
          </h2>
        </div>

        <div ref={listRef} className="reveal max-w-[760px] mx-auto">
          {items.map((item, i) => (
            <div key={i} className={`border-b border-line ${i === items.length - 1 ? 'border-b-0' : ''}`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between py-6 text-left text-navy text-[17px] font-medium transition-colors hover:text-teal-700 bg-transparent border-0 cursor-pointer"
              >
                <span className="pr-6">{item.q}</span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full border border-line flex items-center justify-center text-ink-2 transition-all duration-300 ${
                    openIndex === i ? 'bg-navy border-navy text-white rotate-45' : ''
                  }`}
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-[350ms]"
                style={{ maxHeight: openIndex === i ? '400px' : '0', opacity: openIndex === i ? 1 : 0 }}
              >
                <p className="text-[15.5px] text-muted leading-[1.65] pb-6 pr-12 m-0">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-muted text-[14px] mt-12">
          More questions?{' '}
          <a href="mailto:hello@therentlo.com" className="text-teal-700 font-medium hover:underline">
            Email us — we read everything.
          </a>
        </div>
      </div>
    </section>
  )
}
