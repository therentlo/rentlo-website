import { Link } from 'react-router-dom'
import { LegalLayout, LegalTable, ContactBox } from '../LegalLayout'

const FOR_EVERYONE = [
  {
    to: '/legal/privacy',
    title: 'Privacy Policy',
    desc: 'How we collect, use, and protect your personal data. What we do and don\'t do with your information.',
  },
  {
    to: '/legal/terms',
    title: 'Terms of Service',
    desc: 'The rules for using Rentlo — what you can expect from us, what we expect from you, pricing, liability, and how disputes are handled.',
  },
  {
    to: '/legal/cookies',
    title: 'Cookie Notice',
    desc: 'What cookies and tracking technologies we use, why, and how you can control them.',
  },
]

const FOR_LANDLORDS = [
  {
    to: '/legal/dpa',
    title: 'Data Processing Agreement',
    desc: 'When you upload tenant data to Rentlo, this agreement governs who is responsible for what. It defines your role as Data Controller and ours as Data Processor.',
  },
  {
    to: '/legal/tenant-notice',
    title: 'Tenant Privacy Notice Template',
    desc: 'A ready-to-use template you can give to your tenants explaining how their data is handled through Rentlo. Fill in your details and share it before onboarding a tenant.',
  },
]

function DocCard({ to, title, desc }: { to: string; title: string; desc: string }) {
  return (
    <Link
      to={to}
      className="group flex flex-col gap-1.5 rounded-[12px] border border-line bg-white hover:border-teal/50 hover:bg-teal/[0.02] transition-all p-5"
    >
      <span className="font-semibold text-navy text-[16px] group-hover:text-teal transition-colors">
        {title} →
      </span>
      <span className="text-[14px] text-muted leading-[1.55]">{desc}</span>
    </Link>
  )
}

export function LegalHub() {
  return (
    <LegalLayout title="Legal" lastUpdated="1 April 2026" isHub>
      <p className="text-[17px] text-muted leading-[1.65] mb-10">
        Everything you need to know about how Rentlo handles your data, your rights, and how our
        service works — written in plain language.
      </p>

      {/* For Everyone */}
      <h2 className="text-[13px] font-semibold text-muted uppercase tracking-[0.08em] mb-4">
        For Everyone
      </h2>
      <div className="flex flex-col gap-3 mb-10">
        {FOR_EVERYONE.map((doc) => (
          <DocCard key={doc.to} {...doc} />
        ))}
      </div>

      {/* For Landlords */}
      <h2 className="text-[13px] font-semibold text-muted uppercase tracking-[0.08em] mb-4">
        For Landlords
      </h2>
      <div className="flex flex-col gap-3 mb-12">
        {FOR_LANDLORDS.map((doc) => (
          <DocCard key={doc.to} {...doc} />
        ))}
      </div>

      {/* Key Facts */}
      <h2 className="text-[13px] font-semibold text-muted uppercase tracking-[0.08em] mb-4">
        Key Facts at a Glance
      </h2>
      <LegalTable
        headers={['Question', 'Answer']}
        rows={[
          ['Do we sell your data?', <strong key="1">No. Never.</strong>],
          ['Do we use your data for advertising?', <strong key="2">No.</strong>],
          [
            'Where is your data stored?',
            <>
              <strong>Singapore</strong> (Supabase, AWS region)
            </>,
          ],
          [
            'Can you delete your data?',
            <>
              <strong>Yes</strong> — email us or use the app
            </>,
          ],
          [
            'Do we comply with PDPA?',
            <>
              <strong>Yes</strong> — including the 2024 amendments
            </>,
          ],
          [
            'Who is the Data Protection Officer?',
            <>
              <strong>Mah Yik Choong</strong>{' '}
              <a href="mailto:mah@therentlo.com" className="text-teal hover:underline">
                (mah@therentlo.com)
              </a>
            </>,
          ],
        ]}
      />

      <ContactBox />

      <p className="text-[13.5px] text-muted italic mt-8 pt-6 border-t border-line">
        All legal documents on this page are governed by the laws of Malaysia.
      </p>
    </LegalLayout>
  )
}
