import { Flag } from './Flags'

export function Footer() {
  return (
    <footer className="pt-20 pb-12 border-t border-line mt-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="foot-grid gap-14 mb-14" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr' }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 font-semibold text-[19px] tracking-[-0.02em] text-navy">
              <svg width="28" height="28" viewBox="0 0 64 64">
                <rect width="64" height="64" rx="14" fill="#0D9488" />
                <text x="32" y="44" textAnchor="middle" fontFamily="Poppins,system-ui,sans-serif" fontSize="40" fontWeight="700" fill="white">R</text>
              </svg>
              Rentlo
            </div>
            <p className="text-muted text-[15px] mt-5 mb-0 max-w-[300px] leading-[1.55]">
              The quiet property manager for independent landlords across Southeast Asia.
            </p>
            <div className="flex gap-4 text-muted text-[13.5px] mt-5">
              <span className="inline-flex gap-2 items-center">
                <Flag id="flag-my" />
                Malaysia
              </span>
              <span className="inline-flex gap-2 items-center">
                <Flag id="flag-kh" />
                Cambodia
              </span>
            </div>
          </div>

          {/* Product */}
          <FootCol title="Product">
            <FootLink href="#features">Features</FootLink>
            <FootLink href="#how">How it works</FootLink>
            <FootLink href="#pricing">Pricing</FootLink>
            <FootLink href="#faq">FAQ</FootLink>
          </FootCol>

          {/* Landlords */}
          <FootCol title="Landlords">
            <FootLink href="#cta">Join waitlist</FootLink>
            <FootLink href="mailto:hello@therentlo.com">Contact us</FootLink>
            <FootLink href="https://app.therentlo.com">Log in</FootLink>
          </FootCol>

          {/* Company */}
          <FootCol title="Company">
            <FootLink href="mailto:hello@therentlo.com">Email us</FootLink>
            <FootLink href="/privacy">Privacy</FootLink>
            <FootLink href="/terms">Terms</FootLink>
          </FootCol>
        </div>

        <div className="flex justify-between items-center pt-7 border-t border-line text-muted text-[13.5px] flex-wrap gap-4">
          <span>© 2026 Rentlo. Built for Southeast Asia.</span>
          <span>
            <a href="mailto:hello@therentlo.com" className="hover:text-teal transition-colors">
              hello@therentlo.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

function FootCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h5 className="text-[13px] font-semibold text-navy m-0 mb-[18px]">{title}</h5>
      <ul className="list-none p-0 m-0 flex flex-col gap-3">
        {children}
      </ul>
    </div>
  )
}

function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-muted text-[14.5px] transition-colors hover:text-teal">
        {children}
      </a>
    </li>
  )
}
