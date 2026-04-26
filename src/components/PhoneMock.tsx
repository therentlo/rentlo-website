import type { Locale } from '../locales'

interface Props {
  locale: Locale
}

export function PhoneMock({ locale }: Props) {
  const t = locale.tenants[0]
  const amt = locale.fmtAmount(t.amt)
  const name = t.name.split(' ')[0]
  const ref = locale.dashRef

  return (
    <div className="w-[280px] bg-white rounded-[28px] p-[22px_18px]" style={{ boxShadow: '0 1px 0 rgba(15,23,42,.03), 0 20px 50px -15px rgba(15,23,42,.12), 0 0 0 1px rgba(15,23,42,.04)' }}>
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-line-2 mb-3.5 px-1">
        <div className="flex gap-2 items-center">
          <div className="w-7 h-7 rounded-full bg-teal text-white flex items-center justify-center font-semibold text-[11px]">{t.av}</div>
          <div>
            <strong className="text-[13px] font-semibold text-navy tracking-[-0.01em] block">{name}</strong>
            <span className="text-[10.5px] text-muted-2 block">WhatsApp · {t.prop.split('·')[0].trim()}</span>
          </div>
        </div>
        <div className="text-[10.5px] text-muted-2">Auto</div>
      </div>

      {/* Messages */}
      <Msg side="us">
        Hi {name} — gentle reminder, April rent of {amt} is due 1 Apr. Pay anytime with ref <strong>{ref}</strong>. Thanks!
        <Time>29 Mar, 9:00 AM · Rentlo</Time>
      </Msg>
      <Msg side="them">
        Noted, transferring tonight 👍<Time>10:14 AM</Time>
      </Msg>
      <Msg side="us" paid>
        ✓ Received {amt}. Receipt sent to your email.<Time>1 Apr, 10:02 PM</Time>
      </Msg>
    </div>
  )
}

function Msg({ side, paid, children }: { side: 'us' | 'them'; paid?: boolean; children: React.ReactNode }) {
  const base = 'max-w-[85%] rounded-[14px] px-3 py-2.5 text-[13.5px] leading-[1.4] mb-2 tracking-[-0.005em]'
  const them = 'bg-line-2 text-navy rounded-bl-[4px]'
  const us = paid ? 'bg-green-600 text-white rounded-br-[4px] ml-auto' : 'bg-teal text-white rounded-br-[4px] ml-auto'
  return (
    <div className={`${base} ${side === 'them' ? them : us}`}>{children}</div>
  )
}

function Time({ children }: { children: React.ReactNode }) {
  return <span className="block text-[10px] opacity-70 mt-1 font-medium">{children}</span>
}
