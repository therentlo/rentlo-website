export function Terms() {
  return (
    <div className="max-w-[760px] mx-auto px-6 py-20">
      <h1 className="text-[36px] font-semibold text-navy tracking-[-0.03em] mb-4">Terms of Service</h1>
      <p className="text-muted text-[15px] mb-8">Last updated: April 2026</p>
      <div className="prose text-ink-2 leading-[1.7]">
        <p>
          By joining the Rentlo waitlist, you agree to receive communications from Rentlo about our product launch.
          You may unsubscribe at any time by emailing us.
        </p>
        <h2 className="text-[22px] font-semibold text-navy mt-8 mb-3">Waitlist</h2>
        <p>
          Joining the waitlist does not create an account or guarantee access to the Rentlo platform. We will contact
          waitlist members in the order they signed up as capacity becomes available.
        </p>
        <h2 className="text-[22px] font-semibold text-navy mt-8 mb-3">Intellectual property</h2>
        <p>
          All content on this site, including the Rentlo name, logo, and product design, is owned by Rentlo and may
          not be reproduced without written permission.
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
