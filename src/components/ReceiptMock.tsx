import type { Locale } from '../locales'

interface Props {
  locale: Locale
}

export function ReceiptMock({ locale }: Props) {
  const t = locale.tenants[0]
  const amt = locale.fmtAmount(t.amt)

  return (
    <div className="flex items-center justify-center p-8 bg-gradient-to-b from-[#FAFBFC] to-[#F2F5F9] rounded-[20px] min-h-[440px] sm:min-h-0">
      <div
        className="w-full max-w-[340px] bg-white rounded-[18px] p-7 text-[14px]"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(15,23,42,.04), 0 1px 0 rgba(15,23,42,.03), 0 20px 50px -15px rgba(15,23,42,.12)' }}
      >
        {/* Top row */}
        <div className="flex justify-between items-start mb-[22px]">
          <div className="flex items-center gap-2">
            <span className="w-[26px] h-[26px] rounded-[8px] bg-teal text-white flex items-center justify-center font-bold text-[13px]">R</span>
            <span className="font-semibold text-navy text-[14px]">Rentlo</span>
          </div>
          <div className="text-right">
            <div className="text-[10.5px] text-muted-2 uppercase tracking-[0.06em] font-medium mb-[3px]">Receipt no.</div>
            <div className="font-mono text-[11.5px] text-navy">RC-2026-04-{t.av}001</div>
          </div>
        </div>

        {/* Paid by */}
        <div className="mb-[18px] pb-[18px] border-b border-dashed border-line">
          <div className="text-[10.5px] text-muted-2 uppercase tracking-[0.06em] font-medium">Paid by</div>
          <div className="text-[14.5px] font-medium text-navy mt-1">{t.name}</div>
          <div className="text-[12.5px] text-muted mt-0.5">{t.prop}</div>
        </div>

        {/* Line items */}
        <div className="mb-[18px] pb-[18px] border-b border-dashed border-line space-y-2">
          <div className="flex justify-between text-[13.5px]">
            <span className="text-muted">April rent</span>
            <span className="text-navy font-medium font-mono">{amt}</span>
          </div>
          <div className="flex justify-between text-[13.5px]">
            <span className="text-muted">Period</span>
            <span className="text-navy font-medium">1 Apr – 30 Apr 2026</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-baseline mb-[22px]">
          <span className="text-[10.5px] text-muted-2 uppercase tracking-[0.06em] font-medium">Total paid</span>
          <span className="text-[22px] font-semibold text-navy tracking-[-0.02em] font-mono">{amt}</span>
        </div>

        {/* Filed badge */}
        <div className="flex items-center gap-2 text-[12.5px] text-teal-700 bg-teal-50 rounded-[10px] px-3 py-2.5">
          <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Filed in your records · tax-ready
        </div>
      </div>
    </div>
  )
}
