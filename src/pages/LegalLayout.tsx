import { Link } from 'react-router-dom'
import rentloLogoNav from '../assets/rentlo-logo-nav.png'

// ── Layout ────────────────────────────────────────────────────────────────────

interface LayoutProps {
  title: string
  lastUpdated: string
  effectiveDate?: string
  isHub?: boolean
  children: React.ReactNode
}

export function LegalLayout({
  title,
  lastUpdated,
  effectiveDate,
  isHub = false,
  children,
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Sticky top nav */}
      <header
        className="sticky top-0 z-50 bg-white/90 border-b border-line"
        style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/">
            <img src={rentloLogoNav} alt="Rentlo" style={{ height: 22, width: 'auto' }} />
          </Link>
          {isHub ? (
            <Link to="/" className="text-[13.5px] text-muted hover:text-teal transition-colors">
              ← Back to Rentlo
            </Link>
          ) : (
            <Link to="/legal" className="text-[13.5px] text-muted hover:text-teal transition-colors">
              ← Legal hub
            </Link>
          )}
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 py-14 pb-28">
        <div className="max-w-[760px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-[13px] text-muted mb-8"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-teal transition-colors">
              Home
            </Link>
            <span className="text-muted-2">/</span>
            {isHub ? (
              <span className="text-navy">Legal</span>
            ) : (
              <>
                <Link to="/legal" className="hover:text-teal transition-colors">
                  Legal
                </Link>
                <span className="text-muted-2">/</span>
                <span className="text-navy">{title}</span>
              </>
            )}
          </nav>

          {/* Title */}
          <h1 className="text-[38px] font-semibold text-navy tracking-[-0.03em] leading-[1.1] mb-5">
            {title}
          </h1>

          {/* Dates */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[13.5px] text-muted mb-10 pb-8 border-b border-line">
            {effectiveDate && (
              <span>
                Effective{' '}
                <strong className="text-ink-2 font-medium">{effectiveDate}</strong>
              </span>
            )}
            <span>
              Last updated{' '}
              <strong className="text-ink-2 font-medium">{lastUpdated}</strong>
            </span>
          </div>

          {/* Page content */}
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-line py-8 bg-canvas">
        <div className="max-w-[760px] mx-auto px-6 flex flex-wrap gap-y-3 gap-x-6 items-center justify-between">
          <span className="text-[13px] text-muted">
            © 2026 Rentlo · Governed by the laws of Malaysia
          </span>
          <div className="flex flex-wrap gap-5">
            {[
              { to: '/legal', label: 'Legal hub' },
              { to: '/legal/privacy', label: 'Privacy' },
              { to: '/legal/terms', label: 'Terms' },
              { to: '/legal/cookies', label: 'Cookies' },
              { to: '/legal/dpa', label: 'DPA' },
              { to: '/legal/tenant-notice', label: 'Tenant Notice' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-[13px] text-muted hover:text-teal transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

// ── Heading helpers ───────────────────────────────────────────────────────────

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[21px] font-semibold text-navy tracking-[-0.02em] mt-12 mb-4 pb-3 border-b border-line-2">
      {children}
    </h2>
  )
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[17px] font-semibold text-navy tracking-[-0.01em] mt-7 mb-3">
      {children}
    </h3>
  )
}

// ── Text helpers ──────────────────────────────────────────────────────────────

export function Para({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15.5px] text-ink-2 leading-[1.7] mb-4">{children}</p>
  )
}

export function Ul({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="my-4 flex flex-col gap-2.5 list-none p-0">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[15.5px] text-ink-2 leading-[1.6] items-start">
          <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-teal/70 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-6 pl-5 pr-5 py-4 rounded-r-[8px] border-l-[3px] border-teal text-[15px] text-ink-2 leading-[1.65]"
      style={{ background: 'rgba(13,148,136,0.05)' }}
    >
      {children}
    </div>
  )
}

// ── Table helper ──────────────────────────────────────────────────────────────

export function LegalTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: React.ReactNode[][]
}) {
  return (
    <div className="overflow-x-auto my-6 rounded-[10px] border border-line">
      <table className="w-full text-[14px] border-collapse">
        <thead>
          <tr className="bg-canvas border-b border-line">
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left px-4 py-3 text-navy font-semibold text-[12px] uppercase tracking-[0.06em] whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-line last:border-0 ${
                i % 2 === 0 ? 'bg-white' : 'bg-canvas/50'
              }`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3 text-ink-2 leading-[1.55] align-top"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Misc helpers ──────────────────────────────────────────────────────────────

export function DocLink({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) {
  return (
    <Link to={to} className="text-teal font-medium hover:underline">
      {children}
    </Link>
  )
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-[13px] bg-canvas border border-line rounded px-1.5 py-0.5 text-navy">
      {children}
    </code>
  )
}

export function ContactBox() {
  return (
    <div className="mt-12 rounded-[14px] border border-line bg-canvas px-6 py-5">
      <p className="font-semibold text-navy text-[15px] mb-3 mt-0">Questions?</p>
      <div className="flex flex-col gap-1.5 text-[14.5px] text-muted">
        <p className="m-0">
          Email:{' '}
          <a href="mailto:hey@therentlo.com" className="text-teal hover:underline">
            hey@therentlo.com
          </a>
        </p>
        <p className="m-0">
          Data Protection Officer:{' '}
          <a href="mailto:mah@therentlo.com" className="text-teal hover:underline">
            mah@therentlo.com
          </a>
        </p>
        <p className="m-0">
          Address: 43, Lengkungan Sri Damak 11, Taman Sri Andalas, 41200 Klang, Selangor, Malaysia
        </p>
      </div>
    </div>
  )
}

export function FooterNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13.5px] text-muted italic mt-10 pt-6 border-t border-line">
      {children}
    </p>
  )
}

export function Hr() {
  return <hr className="border-0 border-t border-line my-10" />
}
