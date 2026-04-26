export function Privacy() {
  return (
    <div className="max-w-[760px] mx-auto px-6 py-20">
      <h1 className="text-[36px] font-semibold text-navy tracking-[-0.03em] mb-4">Privacy Policy</h1>
      <p className="text-muted text-[15px] mb-8">Last updated: April 2026</p>
      <div className="prose text-ink-2 leading-[1.7]">
        <p>
          Rentlo ("we", "us", "our") is committed to protecting your personal information. This privacy policy explains
          what data we collect, how we use it, and your rights as a user.
        </p>
        <h2 className="text-[22px] font-semibold text-navy mt-8 mb-3">Data we collect</h2>
        <p>
          We collect the email address you provide when joining the waitlist, along with your detected or selected country.
          We do not collect financial data, bank credentials, or payment information during the waitlist phase.
        </p>
        <h2 className="text-[22px] font-semibold text-navy mt-8 mb-3">How we use your data</h2>
        <p>
          Your email is used solely to contact you about Rentlo's launch and onboarding. We will never sell your data
          to third parties or use it for unrelated marketing.
        </p>
        <h2 className="text-[22px] font-semibold text-navy mt-8 mb-3">Contact</h2>
        <p>
          Questions? Email us at{' '}
          <a href="mailto:hello@therentlo.com" className="text-teal font-medium">
            hello@therentlo.com
          </a>
        </p>
      </div>
      <div className="mt-12">
        <a href="/" className="text-teal font-medium hover:underline">← Back to Rentlo</a>
      </div>
    </div>
  )
}
