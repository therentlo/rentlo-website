export type LocaleCode = 'MY' | 'KH' | 'XX'

export interface Tenant {
  av: string
  color: string
  name: string
  email: string
  prop: string
  amt: number
  due: string
  status: 'paid' | 'due' | 'over'
  label: string
}

export interface Locale {
  code: LocaleCode
  label: string
  flag: string
  currency: string
  currencyAfter: string
  fmtAmount: (n: number) => string
  eyebrow: string
  sub: string
  f1Lead: string
  f2Lead: string
  f2List: string[]
  f3Export: string
  problem2Quote: string
  problem3Quote: string
  banks: string[]
  dashUser: { name: string; initials: string; greet: string }
  dashKpi: { collected: number; outstanding: number; occ: string; occSub: string }
  dashBank: string
  dashRef: string
  tenants: Tenant[]
}

export const BANK_NAMES: Record<string, string> = {
  maybank: 'Maybank',
  cimb: 'CIMB',
  publicbank: 'Public Bank',
  rhb: 'RHB',
  hongleong: 'Hong Leong',
  duitnow: 'DuitNow',
  aba: 'ABA',
  acleda: 'ACLEDA',
  wing: 'Wing',
  bakong: 'Bakong',
  khqr: 'KHQR',
  truemoney: 'TrueMoney',
}

export const LOCALES: Record<LocaleCode, Locale> = {
  MY: {
    code: 'MY',
    label: 'Malaysia',
    flag: 'flag-my',
    currency: 'RM',
    currencyAfter: '',
    fmtAmount: (n) => 'RM ' + n.toLocaleString('en-MY', { minimumFractionDigits: 0 }),
    eyebrow: 'Built for independent landlords in Malaysia',
    sub: 'Rentlo quietly sends the invoice, nudges the tenant, matches the payment, and files the receipt — so your Sunday stays a Sunday.',
    f1Lead: "Rentlo sends a friendly reminder before rent is due, on the day, and if it's late. In English or Bahasa Malaysia — in the tone you set.",
    f2Lead: 'Tenant transfers "RNT12A" via DuitNow. Rentlo sees it, matches it to Unit 12A, marks the invoice paid, and emails the receipt. You didn\'t lift a finger.',
    f2List: [
      'Works with Maybank, CIMB, Public Bank, RHB and DuitNow.',
      'Handles partial payments and early-bird pays.',
      'Receipts stored forever — bilingual, tax-ready.',
    ],
    f3Export: 'Export to PDF or CSV for your accountant — or LHDN.',
    problem2Quote: '"I paid an accountant RM 400 just to sort out screenshots."',
    problem3Quote: '"I thought I was up. Turns out I was down RM 2,400."',
    banks: ['maybank', 'cimb', 'publicbank', 'rhb', 'hongleong', 'duitnow'],
    dashUser: { name: 'Ahmad Mokhtar', initials: 'AM', greet: 'Good morning, Ahmad' },
    dashKpi: { collected: 18420, outstanding: 3840, occ: '11 / 12', occSub: '92% · 1 vacant' },
    dashBank: 'MBB',
    dashRef: 'RNT12A',
    tenants: [
      { av: 'AR', color: '#0D9488', name: 'Aisha Rahman', email: 'aisha@mail.com', prop: 'Unit 12A · The Park', amt: 1920, due: '1 Apr', status: 'paid', label: 'Paid' },
      { av: 'KL', color: '#6366F1', name: 'Kai Leong', email: 'kai@mail.com', prop: 'Unit 05B · Mont Kiara', amt: 2100, due: '1 Apr', status: 'paid', label: 'Paid' },
      { av: 'DO', color: '#EC4899', name: 'Daniel Ong', email: 'daniel.o@mail.com', prop: 'Unit 08B · The Park', amt: 1650, due: '1 Apr', status: 'due', label: 'Due in 3 days' },
      { av: 'FA', color: '#F59E0B', name: 'Farah Aziz', email: 'farah@mail.com', prop: 'Unit 14 · Bangsar', amt: 1350, due: '1 Apr', status: 'due', label: 'Due today' },
      { av: 'ML', color: '#10B981', name: 'Mei-Ling Tan', email: 'meiling@mail.com', prop: 'Unit 05C · Damansara', amt: 2200, due: '28 Mar', status: 'over', label: '5 days late' },
    ],
  },
  KH: {
    code: 'KH',
    label: 'Cambodia',
    flag: 'flag-kh',
    currency: '$',
    currencyAfter: '',
    fmtAmount: (n) => '$ ' + (n / 4.1).toLocaleString('en-US', { maximumFractionDigits: 0 }),
    eyebrow: 'Built for independent landlords in Cambodia',
    sub: 'Rentlo quietly sends the invoice, nudges the tenant, matches the payment, and files the receipt — so your Sunday stays a Sunday.',
    f1Lead: "Rentlo sends a friendly reminder before rent is due, on the day, and if it's late. In English or Khmer — in the tone you set.",
    f2Lead: 'Tenant scans KHQR and pays. Rentlo sees the transfer, matches it to the unit, marks the invoice paid, and emails the receipt. You didn\'t lift a finger.',
    f2List: [
      'Works with ABA, ACLEDA, Wing, Bakong and KHQR.',
      'Handles partial payments and early-bird pays.',
      'Receipts stored forever — bilingual, tax-ready.',
    ],
    f3Export: 'Export to PDF or CSV for your accountant — or GDT filings.',
    problem2Quote: '"I paid an accountant $100 just to sort out screenshots."',
    problem3Quote: '"I thought I was up. Turns out I was down $600."',
    banks: ['aba', 'acleda', 'wing', 'bakong', 'khqr', 'truemoney'],
    dashUser: { name: 'Sokha Chan', initials: 'SC', greet: 'Good morning, Sokha' },
    dashKpi: { collected: 4500, outstanding: 940, occ: '11 / 12', occSub: '92% · 1 vacant' },
    dashBank: 'ABA',
    dashRef: 'RNT07',
    tenants: [
      { av: 'BT', color: '#0D9488', name: 'Bunroeun Teng', email: 'bunroeun@mail.kh', prop: 'Apt 3 · St. 63 BKK1', amt: 550, due: '1 Apr', status: 'paid', label: 'Paid' },
      { av: 'SL', color: '#6366F1', name: 'Sreyleak Chan', email: 'sreyleak@mail.kh', prop: 'Apt 7 · BKK1', amt: 620, due: '1 Apr', status: 'paid', label: 'Paid' },
      { av: 'DO', color: '#EC4899', name: 'Dara Oum', email: 'dara@mail.kh', prop: 'Apt 2 · Toul Kork', amt: 480, due: '1 Apr', status: 'due', label: 'Due in 3 days' },
      { av: 'PN', color: '#F59E0B', name: 'Pisey Nov', email: 'pisey@mail.kh', prop: 'Apt 5 · Chamkarmon', amt: 400, due: '1 Apr', status: 'due', label: 'Due today' },
      { av: 'VS', color: '#10B981', name: 'Vichea Sao', email: 'vichea@mail.kh', prop: 'Apt 9 · Russian Mkt', amt: 650, due: '28 Mar', status: 'over', label: '5 days late' },
    ],
  },
  XX: {
    code: 'XX',
    label: 'Other',
    flag: 'flag-xx',
    currency: '$',
    currencyAfter: '',
    fmtAmount: (n) => '$ ' + (n / 4.1).toLocaleString('en-US', { maximumFractionDigits: 0 }),
    eyebrow: 'Built for independent landlords',
    sub: 'Rentlo quietly sends the invoice, nudges the tenant, matches the payment, and files the receipt — so your Sunday stays a Sunday.',
    f1Lead: "Rentlo sends a friendly reminder before rent is due, on the day, and if it's late — in the tone you set.",
    f2Lead: "Tenant transfers with a reference. Rentlo sees it, matches the unit, marks the invoice paid, and emails the receipt. You didn't lift a finger.",
    f2List: [
      'Connects to major regional banks and QR networks.',
      'Handles partial payments and early-bird pays.',
      'Receipts stored forever — bilingual, tax-ready.',
    ],
    f3Export: 'Export to PDF or CSV for your accountant.',
    problem2Quote: '"I paid an accountant a small fortune just to sort out screenshots."',
    problem3Quote: '"I thought I was up. Turns out I was behind."',
    banks: [],
    dashUser: { name: 'Alex Morgan', initials: 'AM', greet: 'Good morning, Alex' },
    dashKpi: { collected: 4500, outstanding: 940, occ: '11 / 12', occSub: '92% · 1 vacant' },
    dashBank: 'BANK',
    dashRef: 'RNT07',
    tenants: [
      { av: 'AR', color: '#0D9488', name: 'Aisha Rahman', email: 'aisha@mail.com', prop: 'Unit 12A', amt: 550, due: '1 Apr', status: 'paid', label: 'Paid' },
      { av: 'JM', color: '#6366F1', name: 'Jordan Mak', email: 'jordan@mail.com', prop: 'Unit 05B', amt: 620, due: '1 Apr', status: 'paid', label: 'Paid' },
      { av: 'DO', color: '#EC4899', name: 'Daniel Ong', email: 'daniel@mail.com', prop: 'Unit 08B', amt: 480, due: '1 Apr', status: 'due', label: 'Due in 3 days' },
      { av: 'FA', color: '#F59E0B', name: 'Farah Aziz', email: 'farah@mail.com', prop: 'Unit 14', amt: 400, due: '1 Apr', status: 'due', label: 'Due today' },
      { av: 'ML', color: '#10B981', name: 'Mei-Ling Tan', email: 'meiling@mail.com', prop: 'Unit 05C', amt: 650, due: '28 Mar', status: 'over', label: '5 days late' },
    ],
  },
}
