import type { Locale } from '../locales'
import { PhoneMock } from './PhoneMock'
import { MatchMock } from './MatchMock'
import { ReceiptMock } from './ReceiptMock'
import { useReveal } from '../hooks/useReveal'

interface Props {
  locale: Locale
}

function CheckIcon() {
  return (
    <svg className="w-[18px] h-[18px] text-teal flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function Features({ locale }: Props) {
  const headRef = useReveal()

  return (
    <section className="py-[140px] md:py-20 bg-canvas relative" id="features">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headRef} className="reveal max-w-[760px] mx-auto text-center mb-20">
          <span className="kicker">The Rentlo way</span>
          <h2 className="title">
            Three quiet habits,<br />
            <span className="text-muted">handled for you.</span>
          </h2>
          <p className="lede">
            Rentlo does the boring parts on a schedule — so you can do the landlord parts when you actually want to.
          </p>
        </div>

        <div className="flex flex-col" style={{ gap: '160px' }}>
          <FeatureBlock
            reverse={false}
            kicker="01 — Auto reminders"
            title="The polite nudge, sent on your behalf."
            lead={locale.f1Lead}
            bullets={[
              'Three soft touches — never nagging, never late.',
              'WhatsApp, email, or SMS — whichever your tenant actually reads.',
              'You see every message. You can edit every message.',
            ]}
            visual={
              <div className="rounded-[24px] min-h-[440px] overflow-hidden flex items-center justify-center p-10 bg-gradient-to-b from-[#F7FBFB] to-[#EEF7F6]">
                <PhoneMock locale={locale} />
              </div>
            }
          />

          <FeatureBlock
            reverse={true}
            kicker="02 — Payment matching"
            title="Payments find their own invoice."
            lead={locale.f2Lead}
            bullets={locale.f2List}
            visual={
              <div className="rounded-[24px] min-h-[440px] overflow-hidden flex items-center justify-center p-10 bg-gradient-to-b from-[#FAFBFC] to-[#F2F5F9]">
                <MatchMock locale={locale} />
              </div>
            }
          />

          <FeatureBlock
            reverse={false}
            kicker="03 — Tax-ready receipts"
            title={<>Every receipt, filed<br />the moment it's paid.</>}
            lead="Branded, bilingual, numbered. Stored forever — not in your inbox. Ready to hand to your accountant or the tax office on day one."
            bullets={[
              'Auto-emailed to the tenant the second the payment matches.',
              'Branded with your name — not ours.',
              locale.f3Export,
            ]}
            visual={<ReceiptMock locale={locale} />}
            visualClass="border border-line"
          />
        </div>

        {/* Metrics bar */}
        <MetricsBar />
      </div>
    </section>
  )
}

interface FeatureBlockProps {
  reverse: boolean
  kicker: string
  title: React.ReactNode
  lead: string
  bullets: string[]
  visual: React.ReactNode
  visualClass?: string
}

function FeatureBlock({ reverse, kicker, title, lead, bullets, visual, visualClass = '' }: FeatureBlockProps) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal feature-block gap-24 items-center"
      style={{ display: 'grid', gridTemplateColumns: reverse ? '1.1fr 1fr' : '1fr 1.1fr' }}
    >
      <div className={reverse ? 'order-2 md:order-none' : ''}>
        <span className="kicker">{kicker}</span>
        <h3
          className="font-semibold text-navy tracking-[-0.03em] mb-5 mt-0"
          style={{ fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: '1.05', textWrap: 'balance' as any }}
        >
          {title}
        </h3>
        <p className="text-[18.5px] text-muted leading-[1.55] tracking-[-0.005em] mb-8">{lead}</p>
        <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3 items-start text-[15.5px] text-ink-2 leading-[1.5]">
              <CheckIcon />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className={`relative rounded-[24px] min-h-[440px] overflow-hidden ${visualClass} ${reverse ? 'order-1 md:order-none' : ''}`}>
        {visual}
      </div>
    </div>
  )
}

function MetricsBar() {
  const ref = useReveal()
  const metrics = [
    { n: '94', u: '%', l: 'on-time payment rate after month 2' },
    { n: '3', u: 'min', l: 'to set up your first tenant' },
    { n: '0', u: '', l: 'awkward "hi, just checking…" messages' },
    { n: '4', u: 'hrs', l: 'saved per month, per 5 units' },
  ]

  return (
    <div
      ref={ref}
      className="reveal metrics-grid gap-px bg-line border border-line rounded-[20px] overflow-hidden mt-20"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}
    >
      {metrics.map((m, i) => (
        <div key={i} className="bg-white px-7 py-9 text-left">
          <div className="font-medium text-navy tracking-[-0.03em] leading-none mb-2" style={{ fontSize: 'clamp(36px,4vw,56px)' }}>
            {m.n}
            {m.u && <span className="text-[0.55em] text-teal font-medium">{m.u}</span>}
          </div>
          <div className="text-[13.5px] text-muted leading-[1.4]">{m.l}</div>
        </div>
      ))}
    </div>
  )
}
