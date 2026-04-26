import type { LocaleCode } from '../locales'
import { useReveal } from '../hooks/useReveal'

interface Props {
  localeCode: LocaleCode
}

export function HowItWorks({ localeCode }: Props) {
  const headRef = useReveal()
  const gridRef = useReveal()

  const payVia =
    localeCode === 'MY' ? 'DuitNow / their bank' :
    localeCode === 'KH' ? 'KHQR / their bank' :
    'their bank'

  const steps = [
    { n: '01', t: 'Add your tenant', body: 'Name, unit, rent amount, due day. Three minutes the first time. Zero next month.', time: '~3 min', mine: true },
    { n: '02', t: 'Rentlo sends the reminder', body: 'A polite nudge before rent is due, on the day, and if it is late. In the language and tone you set.', time: 'Automatic', mine: false },
    { n: '03', t: 'Tenant pays', body: `Through ${payVia}, with a unique reference. Rentlo watches for it.`, time: 'Their schedule', mine: false },
    { n: '04', t: 'Receipt filed automatically', body: 'Match found, invoice marked paid, branded receipt emailed, dashboard updated. You did nothing.', time: '< 1 sec', mine: false },
  ]

  return (
    <section className="py-[140px] md:py-20 bg-canvas" id="how">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headRef} className="reveal max-w-[760px] mx-auto text-center mb-20">
          <span className="kicker">How it works</span>
          <h2 className="title">
            Four steps.<br />
            <span className="text-muted">Three of them aren't yours.</span>
          </h2>
          <p className="lede">
            From setting up a tenant to filing the receipt — here's exactly what happens and which parts you actually do.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal how-grid gap-px bg-line border border-line rounded-[24px] overflow-hidden"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}
        >
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-white px-7 py-8 flex flex-col gap-2.5 transition-colors hover:bg-canvas min-h-[240px]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] font-medium text-teal tracking-[0.06em]">{s.n}</span>
                <span className="text-[10.5px] text-muted-2 font-medium uppercase tracking-[0.06em]">{s.time}</span>
              </div>
              <h3 className="text-[18.5px] font-semibold text-navy tracking-[-0.015em] leading-[1.3] mt-1.5 mb-0">{s.t}</h3>
              <p className="text-[14.5px] text-muted leading-[1.55] m-0">{s.body}</p>
              <div className={`mt-auto pt-3.5 inline-flex items-center gap-1.5 text-[12px] font-medium ${s.mine ? 'text-navy' : 'text-teal-700'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${s.mine ? 'bg-navy' : 'bg-teal'}`} />
                {s.mine ? 'Your part' : 'Rentlo handles it'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
