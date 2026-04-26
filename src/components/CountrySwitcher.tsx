import { useEffect, useRef, useState } from 'react'
import type { LocaleCode } from '../locales'
import { Flag } from './Flags'

const OPTIONS: { code: LocaleCode; label: string; flag: 'flag-my' | 'flag-kh' | 'flag-xx' }[] = [
  { code: 'MY', label: 'Malaysia', flag: 'flag-my' },
  { code: 'KH', label: 'Cambodia', flag: 'flag-kh' },
  { code: 'XX', label: 'Other / Generic', flag: 'flag-xx' },
]

interface Props {
  locale: LocaleCode
  onChange: (code: LocaleCode) => void
}

export function CountrySwitcher({ locale, onChange }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = OPTIONS.find((o) => o.code === locale) || OPTIONS[0]

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }}
        aria-expanded={open}
        className="inline-flex items-center gap-2 h-9 px-3 rounded-full text-[13.5px] font-medium text-ink-2 transition-colors hover:bg-canvas"
      >
        <Flag id={current.flag} />
        <span>{current.label}</span>
        <svg className="w-2.5 h-2.5 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-[calc(100%+6px)] right-0 bg-white border border-line rounded-xl p-1.5 min-w-[180px] shadow-md z-[60]">
          {OPTIONS.map((opt) => (
            <button
              key={opt.code}
              onClick={(e) => { e.stopPropagation(); onChange(opt.code); setOpen(false) }}
              className={`flex items-center gap-2.5 w-full text-left px-2.5 py-[9px] rounded-lg text-[14px] transition-colors ${
                opt.code === locale
                  ? 'bg-teal-50 text-teal-700 font-medium'
                  : 'text-ink-2 hover:bg-canvas hover:text-navy'
              }`}
            >
              <Flag id={opt.flag} />
              <span>{opt.label}</span>
              {opt.code === locale && (
                <svg className="ml-auto w-3.5 h-3.5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
