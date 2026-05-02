import { LegalLayout, H2, H3, Para, Ul, Callout, LegalTable, FooterNote } from '../LegalLayout'

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 text-[0.9em]">
      {children}
    </span>
  )
}

function SignatureBlock({
  party,
  fields,
}: {
  party: string
  fields: { label: string; value?: React.ReactNode }[]
}) {
  return (
    <div className="mb-0">
      <div className="bg-canvas border-b border-line px-4 py-2 rounded-t-[8px] border border-line">
        <span className="text-[12px] font-semibold text-muted uppercase tracking-[0.08em]">
          {party}
        </span>
      </div>
      <div className="border border-t-0 border-line rounded-b-[8px] p-5 flex flex-col gap-5">
        {fields.map(({ label, value }) => (
          <div key={label} className="flex gap-4 items-end">
            <span className="text-[14px] font-medium text-navy flex-shrink-0 w-[160px]">
              {label}
            </span>
            {value ? (
              <span className="text-[14px] text-ink-2 border-b border-line pb-0.5 flex-1">
                {value}
              </span>
            ) : (
              <div className="flex-1 border-b-2 border-dashed border-muted-2" style={{ height: 24 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function LegalTenantNotice() {
  return (
    <LegalLayout
      title="Tenant Privacy Notice"
      lastUpdated="Template — fill in before sharing"
    >
      {/* Template banner */}
      <div
        className="mb-8 rounded-[12px] border px-5 py-4 text-[14.5px] leading-[1.6]"
        style={{
          background: 'rgba(245,158,11,0.06)',
          borderColor: 'rgba(245,158,11,0.25)',
          color: '#92400e',
        }}
      >
        <strong className="block mb-1">This page is for landlords.</strong>
        It's a template you give to your tenants when you start managing their tenancy through
        Rentlo. Replace every{' '}
        <Placeholder>[BRACKETED SECTION]</Placeholder> with your own details before sharing it
        with your tenant.
      </div>

      {/* Effective date */}
      <Callout>
        <strong>Effective Date:</strong>{' '}
        <Placeholder>[DATE YOU GIVE THIS TO YOUR TENANT]</Placeholder>
      </Callout>

      {/* What This Notice Is About */}
      <H2>What This Notice Is About</H2>
      <Para>
        This notice explains how your landlord collects and uses your personal information in
        connection with your tenancy. Your landlord uses a platform called <strong>Rentlo</strong>{' '}
        to manage the tenancy — this notice explains what that means for your data and your rights.
      </Para>

      {/* Who Is Responsible */}
      <H2>Who Is Responsible for Your Data</H2>
      <H3>Your landlord (the person making decisions about your data)</H3>
      <Para>
        <strong>Name:</strong> <Placeholder>[YOUR FULL NAME]</Placeholder>
        <br />
        <strong>Email:</strong> <Placeholder>[YOUR EMAIL]</Placeholder>
        <br />
        <strong>Phone:</strong> <Placeholder>[YOUR PHONE NUMBER]</Placeholder>
      </Para>
      <Para>
        Your landlord is the <strong>Data Controller</strong> — they decide what data to collect,
        why, and how to use it.
      </Para>
      <H3>Rentlo (the platform that stores and processes your data)</H3>
      <Para>
        <strong>Rentlo</strong>
        <br />
        Address: 43, Lengkungan Sri Damak 11, Taman Sri Andalas, 41200 Klang, Selangor, Malaysia
        <br />
        Email:{' '}
        <a href="mailto:hey@therentlo.com" className="text-teal hover:underline">
          hey@therentlo.com
        </a>
      </Para>
      <Para>
        Rentlo is the <strong>Data Processor</strong> — they store and handle your data on your
        landlord's instructions. They do not use your data for their own purposes.
      </Para>

      {/* What Data */}
      <H2>What Data Your Landlord Collects</H2>
      <Para>To manage your tenancy, your landlord collects:</Para>
      <H3>Your identity</H3>
      <Ul items={['Full name', 'NRIC or passport number', 'Nationality']} />
      <H3>Your contact details</H3>
      <Ul
        items={[
          'Phone number',
          'Email address',
          'Permanent address (separate from the rental property)',
          'Emergency contact details',
        ]}
      />
      <H3>Your tenancy details</H3>
      <Ul
        items={[
          'Lease start and end dates',
          'Monthly rent and payment terms',
          'Security deposit amount',
          'Move-in condition report',
        ]}
      />
      <H3>Your payment information</H3>
      <Ul
        items={[
          'Bank account details (only if auto-debit is set up)',
          "Payment history (what you've paid, when)",
          'Outstanding balances',
        ]}
      />
      <H3>Communications</H3>
      <Ul
        items={[
          'Messages about the tenancy',
          'Maintenance requests you submit',
          'Reminders sent to you (rent due, receipts, etc.)',
        ]}
      />
      <H3>Documents</H3>
      <Ul
        items={[
          'Your tenancy agreement',
          'Supporting documents you provide (employer letter, proof of income, etc.)',
        ]}
      />

      {/* Why */}
      <H2>Why Your Data Is Collected</H2>
      <Para>Your landlord uses your data to:</Para>
      <Ul
        items={[
          'Verify your identity before renting to you',
          'Prepare and manage your tenancy agreement',
          'Send you rent invoices and receipts',
          'Send payment reminders',
          'Track payments and manage any arrears',
          'Communicate about maintenance and property issues',
          'Keep records required by law (tax records, LHDN reporting)',
          'Resolve disputes if they arise',
        ]}
      />

      {/* Legal Basis */}
      <H2>The Legal Basis for Using Your Data</H2>
      <Para>
        Under Malaysia's Personal Data Protection Act 2010 (PDPA), your landlord processes your
        data based on:
      </Para>
      <Ul
        items={[
          <><strong>Your consent</strong> — by signing the tenancy agreement and this notice</>,
          <><strong>The tenancy contract</strong> — managing the tenancy requires processing your data</>,
          <><strong>Legal requirements</strong> — Malaysian law requires certain records for tax and dispute resolution</>,
          <><strong>Legitimate interest</strong> — your landlord has a legitimate interest in managing their property and protecting against non-payment</>,
        ]}
      />

      {/* Who Else Sees */}
      <H2>Who Else Sees Your Data</H2>
      <H3>Rentlo (the property management platform)</H3>
      <Para>Rentlo stores your data and uses it to:</Para>
      <Ul
        items={[
          'Generate invoices and contracts',
          'Send automated reminders to you (email, and in future, WhatsApp)',
          'Provide your landlord with dashboards and reports',
        ]}
      />
      <Para>
        Rentlo does <strong>not</strong> sell your data, share it with advertisers, or use it for
        anything beyond managing your tenancy.
      </Para>
      <H3>Technology providers used by Rentlo</H3>
      <Para>Rentlo uses trusted companies to run their platform:</Para>
      <LegalTable
        headers={['Company', 'What they do', 'Location']}
        rows={[
          ['Supabase', 'Stores data securely', 'Singapore'],
          ['Cloudflare', 'Protects the platform', 'Global'],
          ['Resend', 'Sends emails', 'United States'],
          ['Google', 'Reads uploaded documents (OCR)', 'United States'],
        ]}
      />
      <Para>
        These providers process data only to keep the Rentlo platform running.
      </Para>
      <H3>Other parties (only when required)</H3>
      <Para>Your landlord may share your data with:</Para>
      <Ul
        items={[
          'Tax authorities (LHDN) — when legally required',
          'Their lawyer or accountant — for legitimate professional advice',
          'Authorities — only if compelled by law or court order',
          "Insurance providers — if making a claim that involves you (you'll be informed)",
          'A future buyer of the property — if the property is sold, with your awareness',
        ]}
      />
      <Para>
        Your data will <strong>not</strong> be shared for marketing or with anyone else without
        your specific consent.
      </Para>

      {/* Overseas */}
      <H2>Your Data Goes Overseas</H2>
      <Para>
        Some of Rentlo's technology providers are based outside Malaysia (Singapore, United
        States). Your data may be transferred to and stored in these countries.
      </Para>
      <Para>These transfers are protected by:</Para>
      <Ul
        items={[
          'Contracts requiring providers to protect your data',
          'Industry-standard security (encryption, access controls)',
          'Compliance with international data protection standards',
        ]}
      />
      <Para>By accepting this notice, you consent to these transfers.</Para>

      {/* How Long */}
      <H2>How Long Your Data Is Kept</H2>
      <LegalTable
        headers={['Period', 'What happens']}
        rows={[
          ['During your tenancy', 'Your data is kept and used for tenancy management'],
          [
            'After your tenancy ends',
            <>
              Kept for up to <strong>7 years</strong> (required by Malaysian tax law)
            </>,
          ],
          [
            'After 7 years',
            'Deleted or anonymised — unless needed for ongoing legal matters',
          ],
        ]}
      />

      {/* Rights */}
      <H2>Your Rights</H2>
      <Para>Under PDPA, you have the right to:</Para>
      <LegalTable
        headers={['Right', 'What it means']}
        rows={[
          [
            <strong key="a">Access</strong>,
            'Ask your landlord for a copy of the data they hold about you',
          ],
          [
            <strong key="b">Correction</strong>,
            "Ask your landlord to fix anything that's wrong",
          ],
          [
            <strong key="c">Withdraw consent</strong>,
            'Tell your landlord to stop processing (this may affect the tenancy)',
          ],
          [
            <strong key="d">Object</strong>,
            'Say no to specific processing (e.g., automated reminders)',
          ],
          [
            <strong key="e">Limit processing</strong>,
            "Ask your landlord to restrict how they use your data",
          ],
          [
            <strong key="f">Complain</strong>,
            "File a complaint with Malaysia's Personal Data Protection Department",
          ],
        ]}
      />
      <Para>
        <strong>To exercise your rights:</strong> Contact your landlord at{' '}
        <Placeholder>[YOUR EMAIL]</Placeholder>.
      </Para>
      <Para>
        <strong>If your landlord doesn't resolve it:</strong>
        <br />
        Personal Data Protection Department (PDPD)
        <br />
        Ministry of Digital, Malaysia
        <br />
        Website:{' '}
        <a
          href="https://www.pdp.gov.my"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal hover:underline"
        >
          www.pdp.gov.my
        </a>
      </Para>

      {/* Security */}
      <H2>How Your Data Is Protected</H2>
      <Para>Your data is protected through:</Para>
      <Ul
        items={[
          "Encrypted storage and transmission in Rentlo's platform",
          'Limited access — only your landlord (and their authorised team) can see your data',
          'Secure authentication and access controls',
          'Proper disposal of any printed documents containing your data',
        ]}
      />
      <Para>If a security breach affects your data, your landlord will:</Para>
      <Ul
        items={[
          'Notify you within a reasonable time',
          'Explain what happened and what steps to take',
          'Work with authorities to limit the impact',
        ]}
      />

      {/* Automated Messages */}
      <H2>Automated Messages You'll Receive</H2>
      <Para>
        Through Rentlo, you'll receive automated messages from your landlord including:
      </Para>
      <Ul
        items={[
          'Rent invoices',
          'Payment reminders (before the due date)',
          'Late payment notices',
          'Payment receipts',
          'Tenancy renewal notifications',
        ]}
      />
      <Para>
        These come via email (and possibly WhatsApp in the future). All messages will identify
        your landlord as the sender.
      </Para>
      <Para>
        You can opt out of non-essential messages, but you'll still receive critical notices like
        invoices, late payment notices, and legal notifications.
      </Para>

      {/* What If You Don't Agree */}
      <H2>What If You Don't Agree?</H2>
      <Para>If you don't accept this notice:</Para>
      <Ul
        items={[
          'Your landlord cannot manage your tenancy through Rentlo',
          'The tenancy would need to be managed manually (paper records, direct communication)',
          'This may affect the efficiency of rent tracking and communication',
        ]}
      />
      <Para>Talk to your landlord about any concerns before signing.</Para>

      {/* Changes */}
      <H2>Changes to This Notice</H2>
      <Para>This notice may be updated if:</Para>
      <Ul
        items={[
          'Your landlord changes how they manage the tenancy',
          'Legal requirements change',
          "Rentlo's platform or providers change",
        ]}
      />
      <Para>You'll receive a copy of any updated notice.</Para>

      {/* Contact */}
      <H2>Contact Your Landlord</H2>
      <Para>
        <Placeholder>[YOUR FULL NAME]</Placeholder>
        <br />
        Email: <Placeholder>[YOUR EMAIL]</Placeholder>
        <br />
        Phone: <Placeholder>[YOUR PHONE NUMBER]</Placeholder>
      </Para>

      {/* Acknowledgment */}
      <H2>Acknowledgment</H2>
      <Para>
        By signing below or accepting the tenancy agreement, you confirm that:
      </Para>
      <Ul
        items={[
          'You have read and understood this Privacy Notice',
          'You consent to the collection and use of your personal data as described',
          'You consent to the use of Rentlo as the property management platform',
          'You consent to cross-border data transfers as described',
        ]}
      />

      <div className="flex flex-col gap-4 my-8">
        <SignatureBlock
          party="Tenant"
          fields={[
            { label: 'Signature' },
            { label: 'Full Name' },
            { label: 'NRIC / Passport' },
            { label: 'Date' },
          ]}
        />
        <SignatureBlock
          party="Landlord"
          fields={[
            { label: 'Signature' },
            { label: 'Full Name', value: <Placeholder>[YOUR FULL NAME]</Placeholder> },
            { label: 'Date' },
          ]}
        />
      </div>

      <FooterNote>
        This template is provided by Rentlo for landlords managing tenancies through the Rentlo
        platform. Landlords must complete the bracketed sections and provide this notice to
        tenants before collecting their personal data. Rentlo is not responsible for how landlords
        use or modify this template.
      </FooterNote>
    </LegalLayout>
  )
}
