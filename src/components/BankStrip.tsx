import type { Locale } from '../locales'
import { BANK_NAMES } from '../locales'

interface Props {
  locale: Locale
}

export function BankStrip({ locale }: Props) {
  if (!locale.banks || locale.banks.length === 0) return null

  return (
    <section className="py-14 border-t border-b border-line bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center text-[12px] font-medium tracking-[0.14em] uppercase text-muted mb-7">
          Tenants pay the way they already do — any Malaysian bank or DuitNow QR.
        </div>
        <div className="flex justify-center items-center gap-2.5 flex-wrap">
          {locale.banks.map((b) => (
            <span
              key={b}
              className="inline-flex items-center h-[34px] px-4 rounded-full border border-line bg-white text-[13.5px] font-semibold text-navy tracking-[-0.01em] transition-all cursor-default hover:border-teal hover:text-teal hover:bg-teal-50"
            >
              {BANK_NAMES[b] || b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
