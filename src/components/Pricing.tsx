import { useReveal } from '../hooks/useReveal'

export function Pricing() {
  const ref = useReveal()

  return (
    <section className="py-[140px] md:py-20" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={ref} className="reveal max-w-[640px] mx-auto text-center">
          <span className="kicker">Pricing</span>
          <h2 className="title">
            Free while we're building<br />
            <span className="text-muted">this together.</span>
          </h2>
          <p className="text-[18px] text-muted-2 font-medium tracking-[-0.01em] mb-8">
            No tiers. No cards. No catch.
          </p>
          <p className="text-[16.5px] text-muted leading-[1.65] tracking-[-0.005em] mb-10 max-w-[520px] mx-auto">
            We're onboarding our first wave of landlords now. Everything is free during the pilot — invoices, reminders, matching, receipts. You help us get it right, you get it free. Pricing comes later, and early landlords will always get the best deal.
          </p>
          <a
            href="#cta"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-teal text-white font-semibold text-[15.5px] tracking-[-0.01em] transition-all hover:bg-teal-700 hover:-translate-y-[1px] hover:shadow-lg"
          >
            Join the pilot →
          </a>
          <p className="text-[13px] text-muted-2 mt-5">
            Limited to 50 landlords in Malaysia
          </p>
        </div>
      </div>
    </section>
  )
}
