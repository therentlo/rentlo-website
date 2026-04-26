import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: '#0D9488', 50: '#F0FDFA', 100: '#CCFBF1', 600: '#0B827A', 700: '#0A6F68' },
        mint: '#5EEAD4',
        navy: { DEFAULT: '#0B1220', 2: '#1A2332', 3: '#2B3A50' },
        ink: { DEFAULT: '#0A0F1C', 2: '#1F2937' },
        muted: { DEFAULT: '#64748B', 2: '#94A3B8' },
        line: { DEFAULT: '#EAEEF3', 2: '#F2F5F9' },
        canvas: '#FAFBFC',
        soft: '#F6F8FA',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        xl: '0 1px 0 rgba(15,23,42,.03), 0 30px 80px -20px rgba(15,23,42,.15), 0 12px 24px -12px rgba(15,23,42,.08)',
        lg: '0 1px 0 rgba(15,23,42,.03), 0 20px 50px -15px rgba(15,23,42,.12)',
        md: '0 1px 0 rgba(15,23,42,.03), 0 10px 30px -10px rgba(15,23,42,.08)',
        sm: '0 1px 0 rgba(15,23,42,.03), 0 4px 12px -4px rgba(15,23,42,.06)',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(.2,.7,.2,1)',
      },
    },
  },
} satisfies Config
