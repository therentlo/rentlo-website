import type { Locale } from '../locales'

interface Props {
  locale: Locale
}

export function MatchMock({ locale }: Props) {
  const t = locale.tenants[0]
  const amt = locale.fmtAmount(t.amt)

  return (
    <div className="w-full max-w-[380px] flex flex-col gap-2.5">
      {/* Incoming */}
      <MatchRow>
        <div className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 bg-[#1E3A8A] text-white font-bold text-[11px]">
          {locale.dashBank}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[14px] font-semibold text-navy tracking-[-0.01em]">Incoming · {amt}</div>
          <div className="text-[12.5px] text-muted">
            From {t.name.toUpperCase()} · ref{' '}
            <code className="font-mono text-teal bg-teal-50/80 px-1.5 py-px rounded text-[11.5px]">{locale.dashRef}</code>
          </div>
        </div>
        <div className="text-[11px] text-muted-2 flex-shrink-0">10:02 PM</div>
      </MatchRow>

      {/* Arrow */}
      <div className="flex justify-center items-center py-0.5">
        <svg className="w-3.5 h-3.5 text-muted-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      {/* Matched */}
      <MatchRow highlight>
        <div className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 bg-teal text-white">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[14px] font-semibold text-navy tracking-[-0.01em]">Matched to INV-2026-041</div>
          <div className="text-[12.5px] text-muted">{t.prop} · {t.name} · {amt}</div>
        </div>
      </MatchRow>

      {/* Paid */}
      <MatchRow>
        <div className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 bg-green-600 text-white">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[14px] font-semibold text-navy tracking-[-0.01em]">Paid · receipt sent</div>
          <div className="text-[12.5px] text-muted">0.8 seconds after bank notification</div>
        </div>
      </MatchRow>
    </div>
  )
}

function MatchRow({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <div
      className={`flex gap-3 items-center p-[14px_16px] rounded-[14px] border ${highlight ? 'bg-teal-50 border-teal-100' : 'bg-white border-line'}`}
      style={{ boxShadow: '0 1px 0 rgba(15,23,42,.03), 0 4px 12px -4px rgba(15,23,42,.06)' }}
    >
      {children}
    </div>
  )
}
