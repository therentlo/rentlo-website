import type { Locale } from '../locales'
import { Flag } from './Flags'
import { useReveal } from '../hooks/useReveal'

interface Props {
  locale: Locale
}

export function Hero({ locale }: Props) {
  const ref = useReveal()

  return (
    <section className="relative overflow-hidden pt-[72px] bg-gradient-to-b from-white to-[#F7FBFB]">
      {/* Background radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(40% 50% at 85% 10%,rgba(13,148,136,.08),transparent 70%),radial-gradient(35% 40% at 10% 20%,rgba(94,234,212,.06),transparent 70%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div ref={ref} className="reveal text-center pt-10 pb-16 flex flex-col items-center">
          {/* Eyebrow */}
          <span
            className="inline-flex items-center gap-2.5 py-[7px] pl-3 pr-4 rounded-full text-teal-700 text-[13.5px] font-medium tracking-[-0.005em] border leading-none"
            style={{ background: 'rgba(13,148,136,.08)', borderColor: 'rgba(13,148,136,.15)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" style={{ boxShadow: '0 0 0 4px rgba(13,148,136,.12)' }} />
            {locale.eyebrow}
            {locale.code !== 'XX' && (
              <Flag id={locale.flag as any} className="ml-1" />
            )}
          </span>

          {/* Headline */}
          <h1
            className="text-navy font-semibold tracking-[-0.035em] mt-7 mb-7"
            style={{
              fontSize: 'clamp(44px,7vw,92px)',
              lineHeight: '1.08',
              textWrap: 'balance' as any,
            }}
          >
            Stop chasing rent.<br />
            <span
              style={{
                background: 'linear-gradient(135deg,#0D9488 0%,#0EA89A 50%,#14B8A6 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Start collecting it.
            </span>
          </h1>

          {/* Sub-copy */}
          <p
            className="text-muted font-normal tracking-[-0.005em] max-w-[620px] mx-auto mb-9"
            style={{ fontSize: 'clamp(18px,1.8vw,22px)', lineHeight: '1.5', textWrap: 'pretty' as any }}
          >
            {locale.sub}
          </p>

          {/* CTAs */}
          <div className="flex gap-2.5 items-center flex-wrap justify-center">
            <a
              href="#cta"
              className="inline-flex items-center gap-1.5 h-[52px] px-[26px] rounded-full font-medium text-[15.5px] bg-teal text-white transition-all hover:bg-teal-600 hover:-translate-y-px hover:shadow-[0_8px_20px_-6px_rgba(13,148,136,.45)]"
            >
              Join the waitlist
              <svg className="w-[15px] h-[15px] transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#how"
              className="inline-flex items-center h-[52px] px-[26px] rounded-full font-medium text-[15.5px] text-navy transition-all hover:shadow-[inset_0_0_0_1px_#0B1220]"
              style={{ boxShadow: 'inset 0 0 0 1px #EAEEF3' }}
            >
              See how it works
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex gap-6 mt-6 text-muted text-[13px] flex-wrap justify-center">
            {['No credit card', 'Ready in 3 minutes', 'Works on your phone'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard stage */}
      <div className="mt-12 relative pb-24 sm:pb-16" style={{ paddingBottom: '96px' }}>
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            inset: '-40px 0 40px 0',
            background: 'radial-gradient(60% 70% at 50% 40%,rgba(13,148,136,.12),transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <DashStage locale={locale} />
        </div>
      </div>
    </section>
  )
}

function DashStage({ locale }: { locale: Locale }) {
  const fmt = locale.fmtAmount
  const u = locale.dashUser
  const kpi = locale.dashKpi
  const tenants = locale.tenants
  const chartMax = locale.code === 'MY' ? '24k' : '6k'
  const chartMid = locale.code === 'MY' ? '16k' : '4k'
  const chartLo = locale.code === 'MY' ? '8k' : '2k'
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const bars = [[60,10],[72,8],[55,20],[80,6],[85,5],[78,9],[90,4],[82,7],[86,3],[74,12],[88,2],[70,30]]

  return (
    <div
      className="rounded-[18px] overflow-hidden bg-white"
      style={{ boxShadow: '0 1px 0 rgba(15,23,42,.03), 0 30px 80px -20px rgba(15,23,42,.15), 0 12px 24px -12px rgba(15,23,42,.08), 0 0 0 1px rgba(15,23,42,.04)' }}
    >
      <div className="grid" style={{ gridTemplateColumns: '232px minmax(0,1fr)', fontSize: '13px', lineHeight: '1.4' }}>
        {/* Sidebar — hidden on small screens */}
        <div className="hidden lg:flex flex-col gap-0.5 border-r border-line bg-canvas p-[20px_14px]">
          <div className="flex items-center gap-2 font-semibold text-navy mx-2 mb-5 text-[15px] tracking-[-0.01em]">
            <svg width="22" height="22" viewBox="0 0 64 64">
              <rect width="64" height="64" rx="14" fill="#0D9488" />
              <text x="32" y="44" textAnchor="middle" fontFamily="Poppins,system-ui,sans-serif" fontSize="40" fontWeight="700" fill="white">R</text>
            </svg>
            Rentlo
          </div>

          <SideLabel>Overview</SideLabel>
          <SideItem active icon={<GridIcon />}>Dashboard</SideItem>
          <SideItem icon={<HomeIcon />}>Properties</SideItem>
          <SideItem icon={<UsersIcon />} badge="2">Tenants</SideItem>
          <SideItem icon={<FileIcon />}>Invoices</SideItem>
          <SideItem icon={<CardIcon />}>Payments</SideItem>
          <SideLabel>Insight</SideLabel>
          <SideItem icon={<ChartIcon />}>Reports</SideItem>
          <SideItem icon={<SettingsIcon />}>Settings</SideItem>

          <div className="mt-auto pt-3 border-t border-line flex gap-2.5 items-center px-3">
            <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center font-semibold text-[11px] text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg,#F7B955,#E8A33D)' }}>
              {u.initials}
            </div>
            <div className="flex flex-col min-w-0">
              <strong className="text-[12.5px] font-semibold text-navy truncate">{u.name}</strong>
              <span className="text-[11px] text-muted truncate">3 properties</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="p-[24px_28px] bg-white min-w-0">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
            <div>
              <h1 className="text-[22px] font-semibold text-navy tracking-[-0.02em]">{u.greet} 👋</h1>
              <div className="text-[12.5px] text-muted mt-0.5">Here's what April looks like for you.</div>
            </div>
            <div className="flex gap-2 items-center flex-shrink-0">
              <div className="hidden sm:flex bg-[#F4F6F9] rounded-[9px] px-3 py-2 text-[12px] text-muted items-center gap-2 min-w-[200px]">
                <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>
                <span>Search tenants, invoices…</span>
              </div>
              <div className="w-[34px] h-[34px] rounded-[9px] bg-[#F4F6F9] flex items-center justify-center relative">
                <svg className="w-[15px] h-[15px] text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>
                <span className="absolute top-[7px] right-[7px] w-1.5 h-1.5 rounded-full bg-red-500" />
              </div>
              <button className="bg-navy text-white rounded-[9px] px-3.5 py-2 text-[12.5px] font-medium flex items-center gap-1.5 whitespace-nowrap">
                <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12h14"/></svg>
                New invoice
              </button>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid gap-px bg-line border border-line rounded-xl overflow-hidden mb-5" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
            <KpiCard label="Collected · April" value={fmt(kpi.collected)} delta={<><ArrowUp />+12.4%</>} deltaClass="text-green-600" />
            <KpiCard label="Outstanding" value={fmt(kpi.outstanding)} valueStyle={{ color: '#D97706' }} delta={<><ArrowDown />2 tenants late</>} deltaClass="text-red-500" />
            <KpiCard label="Occupancy" value={kpi.occ} delta={kpi.occSub} deltaClass="text-muted" />
            <KpiCard label="On-time rate" value="94%" delta={<><ArrowUp />+6 pts YTD</>} deltaClass="text-green-600" />
          </div>

          {/* Chart + Status row */}
          <div className="grid gap-3.5 mb-3.5" style={{ gridTemplateColumns: '1.6fr 1fr' }}>
            {/* Collections chart */}
            <div className="border border-line rounded-xl p-[18px] bg-white min-w-0">
              <div className="flex justify-between items-center mb-4 gap-3">
                <h3 className="text-[14px] font-semibold text-navy tracking-[-0.01em]">Collections this year</h3>
                <div className="flex gap-0.5 bg-[#F4F6F9] rounded-[7px] p-0.5 text-[11px] flex-shrink-0">
                  {['Week', 'Month', 'Year'].map((t) => (
                    <span key={t} className={`px-2.5 py-1 rounded-[5px] cursor-pointer font-medium ${t === 'Month' ? 'bg-white text-navy font-semibold shadow-sm' : 'text-muted'}`}>{t}</span>
                  ))}
                </div>
              </div>
              {/* Bar chart */}
              <div className="h-[170px] relative pl-[34px]">
                <div className="absolute left-0 top-0 bottom-5 flex flex-col justify-between text-[10px] text-muted">
                  <span>{chartMax}</span><span>{chartMid}</span><span>{chartLo}</span><span>0</span>
                </div>
                <div className="absolute left-[34px] right-0 top-0 bottom-5">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0,1,2,3].map(i => <div key={i} className="h-px bg-line-2" />)}
                  </div>
                  <div className="absolute inset-0 flex items-end gap-1.5 px-1">
                    {bars.map(([p, pd], i) => (
                      <div key={i} className="flex-1 flex gap-[3px] items-end h-full">
                        <div className="flex-1 rounded-t-[3px] bg-teal" style={{ height: `${p}%` }} />
                        <div className="flex-1 rounded-t-[3px] bg-[#CBD5E1]" style={{ height: `${pd}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute left-[34px] right-0 bottom-0 flex gap-1.5 text-[10px] text-muted px-1">
                  {months.map((m) => <span key={m} className="flex-1 text-center">{m}</span>)}
                </div>
              </div>
              <div className="flex gap-4 mt-3.5 text-[11px] text-muted font-medium">
                <span className="inline-flex gap-1.5 items-center"><span className="w-2 h-2 rounded-[2px] bg-teal" />Collected</span>
                <span className="inline-flex gap-1.5 items-center"><span className="w-2 h-2 rounded-[2px] bg-[#CBD5E1]" />Outstanding</span>
              </div>
            </div>

            {/* Status donut */}
            <div className="border border-line rounded-xl p-[18px] bg-white min-w-0">
              <h3 className="text-[14px] font-semibold text-navy tracking-[-0.01em] mb-4">Status · April</h3>
              <div className="grid gap-5 items-center" style={{ gridTemplateColumns: 'auto 1fr' }}>
                <div className="relative w-[120px] h-[120px] flex-shrink-0">
                  <svg className="w-[120px] h-[120px]" viewBox="0 0 42 42">
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#F1F4F8" strokeWidth="6" />
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#0D9488" strokeWidth="6" strokeDasharray="68 100" transform="rotate(-90 21 21)" />
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#D97706" strokeWidth="6" strokeDasharray="22 100" strokeDashoffset="-68" transform="rotate(-90 21 21)" />
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#DC2626" strokeWidth="6" strokeDasharray="10 100" strokeDashoffset="-90" transform="rotate(-90 21 21)" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <strong className="text-[20px] text-navy font-semibold tracking-[-0.02em] leading-none">11/12</strong>
                    <span className="text-[10.5px] text-muted mt-0.5">paid</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 text-[12.5px] min-w-0">
                  {[{ color: '#0D9488', label: 'Paid', v: 8 }, { color: '#D97706', label: 'Due soon', v: 3 }, { color: '#DC2626', label: 'Overdue', v: 1 }].map((r) => (
                    <div key={r.label} className="flex justify-between items-center gap-3">
                      <span className="flex gap-2 items-center text-navy font-medium">
                        <span className="w-2 h-2 rounded-[2px] flex-shrink-0" style={{ background: r.color }} />
                        {r.label}
                      </span>
                      <span className="text-muted font-medium">{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity */}
              <div className="border-t border-line-2 pt-3.5 mt-4">
                <div className="text-[11px] font-semibold text-muted mb-3 tracking-[0.04em] uppercase">Recent activity</div>
                <div className="flex flex-col gap-3.5">
                  <ActItem type="pay" text={<><strong>{firstName(tenants[0])}.</strong> paid {fmt(tenants[0].amt)}</>} sub={`${unitOf(tenants[0])} · 2 min ago`} />
                  <ActItem type="rm" text={<>Reminder sent to <strong>{firstName(tenants[2])}.</strong></>} sub={`${unitOf(tenants[2])} · 1 hr ago`} />
                  <ActItem type="inv" text={<>May invoices scheduled · <strong>12 tenants</strong></>} sub="Today, 08:00" />
                </div>
              </div>
            </div>
          </div>

          {/* Tenant table */}
          <div className="border border-line rounded-xl p-[18px] bg-white min-w-0">
            <div className="flex justify-between items-center mb-4 gap-3">
              <h3 className="text-[14px] font-semibold text-navy tracking-[-0.01em]">Tenants · April invoices</h3>
              <div className="flex gap-0.5 bg-[#F4F6F9] rounded-[7px] p-0.5 text-[11px] flex-shrink-0">
                {['All', 'Late', 'Paid'].map((t) => (
                  <span key={t} className={`px-2.5 py-1 rounded-[5px] cursor-pointer font-medium ${t === 'All' ? 'bg-white text-navy font-semibold shadow-sm' : 'text-muted'}`}>{t}</span>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto -mx-[18px] -mb-[18px] px-[18px] pb-[18px]">
              <table className="w-full border-collapse text-[12.5px]" style={{ minWidth: '560px' }}>
                <thead>
                  <tr>
                    {['Tenant', 'Property', 'Amount', 'Due', 'Status'].map((h) => (
                      <th key={h} className="text-left text-[11px] font-semibold text-muted py-2 pr-3 border-b border-line tracking-[0.02em] uppercase whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tenants.map((t) => (
                    <tr key={t.name}>
                      <td className="py-3 pr-3 border-b border-line-2 last:border-0">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center font-semibold text-[11px] text-white flex-shrink-0" style={{ background: t.color }}>{t.av}</div>
                          <div className="min-w-0">
                            <strong className="block font-semibold text-navy text-[13px] tracking-[-0.005em] whitespace-nowrap">{t.name}</strong>
                            <small className="text-muted text-[11.5px] whitespace-nowrap">{t.email}</small>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 pr-3 border-b border-line-2 text-ink-2 whitespace-nowrap">{t.prop}</td>
                      <td className="py-3 pr-3 border-b border-line-2 font-semibold text-navy font-mono text-[12.5px] whitespace-nowrap">{fmt(t.amt)}</td>
                      <td className="py-3 pr-3 border-b border-line-2">{t.due}</td>
                      <td className="py-3 border-b border-line-2">
                        <span className={`inline-flex items-center gap-1 px-[9px] py-[3px] rounded-full text-[11px] font-medium whitespace-nowrap pill-${t.status}`}>
                          <span className="w-[5px] h-[5px] rounded-full bg-current" />
                          {t.label}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function firstName(t: { name: string; av: string }) {
  const parts = t.name.split(' ')
  return parts[0] + ' ' + parts[parts.length - 1][0] + '.'
}
function unitOf(t: { prop: string }) {
  return t.prop.split('·')[0].trim()
}

function KpiCard({ label, value, delta, deltaClass, valueStyle }: { label: string; value: string; delta?: React.ReactNode; deltaClass?: string; valueStyle?: React.CSSProperties }) {
  return (
    <div className="bg-white px-[18px] py-4 min-w-0">
      <div className="text-[11.5px] text-muted font-medium truncate">{label}</div>
      <div className="text-[22px] font-semibold text-navy mt-1 tracking-[-0.02em] leading-[1.1] truncate" style={valueStyle}>{value}</div>
      {delta && <div className={`text-[11px] mt-1.5 flex items-center gap-1 font-medium whitespace-nowrap ${deltaClass}`}>{delta}</div>}
    </div>
  )
}

function ArrowUp() {
  return <svg className="w-[11px] h-[11px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
}
function ArrowDown() {
  return <svg className="w-[11px] h-[11px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
}

function ActItem({ type, text, sub }: { type: 'pay' | 'rm' | 'inv'; text: React.ReactNode; sub: string }) {
  const styles = {
    pay: { bg: '#E6F7EE', color: '#107A3F', icon: <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5"/></svg> },
    rm: { bg: '#EEF2FF', color: '#6366F1', icon: <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
    inv: { bg: '#F0FDFA', color: '#0A6F68', icon: <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg> },
  }
  const s = styles[type]
  return (
    <div className="flex gap-2.5 items-start">
      <div className="w-7 h-7 rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-[12.5px] text-navy leading-[1.4] m-0">{text}</p>
        <span className="text-[11px] text-muted mt-0.5 block">{sub}</span>
      </div>
    </div>
  )
}

function SideLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[10.5px] font-semibold text-muted tracking-[0.08em] uppercase px-2 pt-4 pb-2">{children}</div>
}

function SideItem({ children, active, icon, badge }: { children: React.ReactNode; active?: boolean; icon: React.ReactNode; badge?: string }) {
  return (
    <a className={`flex items-center gap-[11px] px-2.5 py-2 rounded-lg font-medium text-[13px] transition-all cursor-pointer ${active ? 'bg-white text-navy font-semibold shadow-sm [&_svg]:text-teal' : 'text-ink-2 hover:bg-white hover:text-navy'}`}>
      <span className="w-[15px] h-[15px] flex-shrink-0 text-muted [&_svg]:w-full [&_svg]:h-full">{icon}</span>
      {children}
      {badge && <span className="ml-auto bg-red-500 text-white text-[10.5px] font-semibold px-1.5 py-px rounded-full">{badge}</span>}
    </a>
  )
}

function GridIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> }
function HomeIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-6 9 6v11a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/></svg> }
function UsersIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="17" cy="7" r="3"/></svg> }
function FileIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg> }
function CardIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg> }
function ChartIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg> }
function SettingsIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/></svg> }
