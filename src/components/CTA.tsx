import { useState } from 'react'
import type { LocaleCode } from '../locales'
import { submitWaitlist } from '../lib/submitWaitlist'
import { useReveal } from '../hooks/useReveal'

interface Props {
  localeCode: LocaleCode
}

export function CTA({ localeCode }: Props) {
  const ref = useReveal()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    try {
      await submitWaitlist(email.trim(), localeCode)
    } catch (_) {}
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section className="py-20" id="cta">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-[32px] px-12 py-24 text-center text-white sm:rounded-[24px] sm:px-7 sm:py-12"
          style={{ background: '#0B1220' }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(40% 60% at 20% 100%,rgba(13,148,136,.5),transparent 65%),radial-gradient(50% 60% at 85% 0%,rgba(94,234,212,.2),transparent 65%)',
            }}
          />
          <div className="relative z-10">
            <h2
              className="font-semibold tracking-[-0.035em] leading-none mb-5 text-white"
              style={{ fontSize: 'clamp(36px,5vw,68px)', textWrap: 'balance' as any }}
            >
              Your next rent day,<br />handled.
            </h2>
            <p className="text-muted-2 text-[20px] tracking-[-0.005em] mx-auto mb-10 max-w-[500px]">
              Join the waitlist and we'll reach out personally to set up your first tenant. Free forever. No card, no catch.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex gap-2 max-w-[480px] mx-auto rounded-[14px] p-[7px] sm:flex-col"
                style={{
                  background: 'rgba(255,255,255,.08)',
                  border: '1px solid rgba(255,255,255,.12)',
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="Email"
                  className="flex-1 bg-transparent border-0 outline-none text-white text-[15.5px] px-4 min-w-0 placeholder-muted sm:py-2"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 h-[46px] px-[18px] rounded-[9px] bg-teal text-white font-medium text-[14.5px] transition-colors hover:bg-teal-600 disabled:opacity-70 sm:w-full sm:justify-center"
                >
                  {loading ? 'Joining…' : 'Join waitlist'}
                  {!loading && (
                    <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-mint text-[16px] font-medium mt-4">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                You're on the list. We'll be in touch shortly.
              </div>
            )}

            <div className="text-[#64748B] text-[13px] mt-5">
              By joining, you agree to our Terms and Privacy Policy.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
