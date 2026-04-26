import type { Locale } from '../locales'
import { useReveal } from '../hooks/useReveal'

interface Props {
  locale: Locale
}

function CheckIcon() {
  return (
    <svg className="w-[15px] h-[15px] flex-shrink-0 mt-[3px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function Pricing({ locale }: Props) {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="py-[140px] md:py-20" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headRef} className="reveal max-w-[760px] mx-auto text-center mb-20">
          <span className="kicker">Pricing</span>
          <h2 className="title">
            One free tenant, forever.<br />
            <span className="text-muted">Grow when you grow.</span>
          </h2>
          <p className="lede">No setup fee. No card to start.</p>
        </div>

        <div ref={gridRef} className="reveal pricing-grid gap-4"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}
        >
          {locale.pricing.map((p) => (
            <div
              key={p.tier}
              className={`relative flex flex-col rounded-[20px] p-[32px_28px] border transition-all duration-[250ms] hover:-translate-y-[3px] ${
                p.pick
                  ? 'bg-navy border-navy text-white hover:bg-black hover:border-black'
                  : 'bg-white border-line hover:border-navy-3 hover:shadow-md'
              }`}
            >
              {p.pick && (
                <span className="absolute top-[-1px] right-7 bg-teal text-white text-[10.5px] font-semibold px-2.5 py-[5px] rounded-b-[8px] tracking-[0.06em] uppercase">
                  Most landlords
                </span>
              )}

              <div className={`text-[14px] font-medium mb-3.5 ${p.pick ? 'text-mint' : 'text-muted'}`}>{p.tier}</div>

              <div className={`text-[42px] font-medium tracking-[-0.03em] leading-none ${p.pick ? 'text-white' : 'text-navy'}`}>
                {p.amount}
                <span className={`text-[14px] font-normal ml-1 ${p.pick ? 'text-muted-2' : 'text-muted'}`}>{p.per}</span>
              </div>

              <div className={`text-[14px] font-medium mt-3.5 mb-[22px] ${p.pick ? 'text-white/80' : 'text-ink-2'}`}>{p.unit}</div>

              <ul className="list-none p-0 m-0 mb-7 flex flex-col gap-2.5 flex-1">
                {p.bullets.map((b, i) => (
                  <li key={i} className={`flex gap-2.5 text-[14px] leading-[1.5] items-start ${p.pick ? 'text-white/85 [&_svg]:text-mint' : 'text-ink-2 [&_svg]:text-teal'}`}>
                    <CheckIcon />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`w-full flex items-center justify-center h-10 px-[18px] rounded-full font-medium text-[14.5px] transition-all ${
                  p.pick
                    ? 'bg-white text-navy hover:bg-mint'
                    : 'text-navy hover:shadow-[inset_0_0_0_1px_#0B1220]'
                }`}
                style={p.pick ? {} : { boxShadow: 'inset 0 0 0 1px #EAEEF3' }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-9 text-muted text-[14.5px]">
          More than 40 tenants?{' '}
          <a href="mailto:hello@therentlo.com" className="text-teal font-medium border-b border-teal/30 hover:border-teal transition-colors">
            Talk to us about Portfolio+ →
          </a>
        </div>
      </div>
    </section>
  )
}
