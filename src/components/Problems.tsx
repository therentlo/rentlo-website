import type { Locale } from '../locales'
import { useReveal } from '../hooks/useReveal'

interface Props {
  locale: Locale
}

export function Problems({ locale }: Props) {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="py-[140px] md:py-20 relative" id="problems">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headRef} className="reveal max-w-[760px] mx-auto text-center mb-20">
          <span className="kicker">The old way</span>
          <h2 className="title">
            Three things<br />
            <span className="text-muted">that quietly eat your month.</span>
          </h2>
          <p className="lede">
            You didn't become a landlord to run a collections team. But every month, the same three things come back.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal grid md:grid-cols-1 lg:grid-cols-3 gap-px bg-line border border-line rounded-[24px] overflow-hidden"
        >
          <ProblemCard
            icon={<ClockIcon />}
            title={<>Tenants forget<br />to pay.</>}
            body={'Rent is due on the 1st. On the 5th, you\'re the bad guy typing “Hi, just checking in…” for the third month in a row.'}
            quote='"I hate sending that message more than they hate getting it."'
          />
          <ProblemCard
            icon={<FileStackIcon />}
            title={<>Receipts live<br />in four places.</>}
            body="Some are in WhatsApp. Some in email. One is a photo of a bank slip on your desk. At tax time, you are a detective."
            quote={locale.problem2Quote}
          />
          <ProblemCard
            icon={<ChartDownIcon />}
            title={<>You never see<br />the real picture.</>}
            body="Who's late? What did you actually collect this year? Is Unit B making money? The numbers are there — just scattered."
            quote={locale.problem3Quote}
          />
        </div>
      </div>
    </section>
  )
}

function ProblemCard({ icon, title, body, quote }: { icon: React.ReactNode; title: React.ReactNode; body: string; quote: string }) {
  return (
    <div className="bg-white px-9 py-11 flex flex-col gap-[18px] transition-colors hover:bg-canvas">
      <div className="w-11 h-11 rounded-xl bg-navy text-white flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-[22px] font-semibold text-navy tracking-[-0.02em] leading-[1.2] m-0">{title}</h3>
      <p className="text-muted text-[16px] leading-[1.55] m-0">{body}</p>
      <div className="mt-auto pt-5 border-t border-line-2 text-[14px] text-muted-2 italic leading-[1.5]">{quote}</div>
    </div>
  )
}

function ClockIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
}
function FileStackIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
}
function ChartDownIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>
}
