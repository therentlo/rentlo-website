export type FlagId = 'flag-my' | 'flag-kh' | 'flag-xx'

interface FlagProps {
  id: FlagId
  large?: boolean
  className?: string
}

export function Flag({ id, large, className = '' }: FlagProps) {
  return (
    <span
      className={`inline-block rounded-[2px] overflow-hidden flex-shrink-0 ${large ? 'w-[22px] h-[16px]' : 'w-[18px] h-[13px]'} ${className}`}
      style={{ boxShadow: '0 0 0 1px rgba(15,23,42,.06)', verticalAlign: 'middle' }}
    >
      <svg width="100%" height="100%" display="block">
        <use href={`#${id}`} />
      </svg>
    </span>
  )
}

export function FlagDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        {/* Malaysia */}
        <symbol id="flag-my" viewBox="0 0 28 20">
          <rect width="28" height="20" fill="#CC0001" />
          <rect y="1.43" width="28" height="1.43" fill="#fff" />
          <rect y="4.29" width="28" height="1.43" fill="#fff" />
          <rect y="7.14" width="28" height="1.43" fill="#fff" />
          <rect y="10" width="28" height="1.43" fill="#fff" />
          <rect y="12.86" width="28" height="1.43" fill="#fff" />
          <rect y="15.71" width="28" height="1.43" fill="#fff" />
          <rect y="18.57" width="28" height="1.43" fill="#fff" />
          <rect width="14" height="11.43" fill="#010066" />
          <circle cx="4.5" cy="5.71" r="2.8" fill="#FFCC00" />
          <circle cx="5.5" cy="5.71" r="2.4" fill="#010066" />
          <path d="M8.5 3.8 l.3 1.6 1.5-.6-1.2 1.1 1.2 1.1-1.5-.6-.3 1.6-.3-1.6-1.5.6 1.2-1.1-1.2-1.1 1.5.6z" fill="#FFCC00" />
        </symbol>
        {/* Cambodia */}
        <symbol id="flag-kh" viewBox="0 0 28 20">
          <rect width="28" height="20" fill="#032EA1" />
          <rect y="5" width="28" height="10" fill="#E00025" />
          <g transform="translate(11 6.5)" fill="#fff" stroke="#032EA1" strokeWidth=".4">
            <rect x="0" y="3" width="6" height="4" />
            <polygon points="3,0 0.6,3 5.4,3" />
            <rect x="1.2" y="4.5" width="1" height="1.5" />
            <rect x="3.8" y="4.5" width="1" height="1.5" />
            <rect x="2.5" y="3.5" width="1" height="3.5" />
          </g>
        </symbol>
        {/* Generic globe */}
        <symbol id="flag-xx" viewBox="0 0 28 20">
          <rect width="28" height="20" fill="#EEF2F7" />
          <circle cx="14" cy="10" r="6" fill="none" stroke="#64748B" strokeWidth="1.2" />
          <ellipse cx="14" cy="10" rx="3" ry="6" fill="none" stroke="#64748B" strokeWidth="1.2" />
          <line x1="8" y1="10" x2="20" y2="10" stroke="#64748B" strokeWidth="1.2" />
        </symbol>
      </defs>
    </svg>
  )
}
