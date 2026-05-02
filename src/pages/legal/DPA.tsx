import {
  LegalLayout,
  H2,
  H3,
  Para,
  Ul,
  Callout,
  LegalTable,
  DocLink,
  ContactBox,
  FooterNote,
} from '../LegalLayout'

export function LegalDPA() {
  return (
    <LegalLayout
      title="Data Processing Agreement"
      effectiveDate="1 April 2026"
      lastUpdated="1 April 2026"
    >
      <Callout>
        When you use Rentlo to manage tenants, you upload their personal data to our platform.
        Legally, <strong>you're the one responsible</strong> for that data (the "Data Controller").
        Rentlo processes it on your behalf (as your "Data Processor"). This agreement sets out what
        each of us must do.
      </Callout>

      {/* 1 */}
      <H2>1. What This Agreement Is</H2>
      <Para>
        This Data Processing Agreement ("DPA") is part of the{' '}
        <DocLink to="/legal/terms">Terms of Service</DocLink> between you (the "Landlord" or "Data
        Controller") and <strong>Rentlo</strong> (the "Data Processor").
      </Para>
      <Para>
        It governs how we handle the personal data of your tenants and other individuals whose
        information you upload to Rentlo.
      </Para>
      <Para>By using Rentlo to manage tenant data, you accept this DPA.</Para>

      {/* 2 */}
      <H2>2. Who's Who</H2>
      <H3>You — the Data Controller</H3>
      <Para>
        You're the landlord using Rentlo. You decide:
      </Para>
      <Ul
        items={[
          'What tenant data to collect',
          'Why you need it',
          'How long to keep it',
          'Who gets access within your account',
        ]}
      />
      <H3>Rentlo — the Data Processor</H3>
      <Para>
        <strong>Rentlo</strong>
        <br />
        Address: 43, Lengkungan Sri Damak 11, Taman Sri Andalas, 41200 Klang, Selangor, Malaysia
        <br />
        Contact:{' '}
        <a href="mailto:hey@therentlo.com" className="text-teal hover:underline">
          hey@therentlo.com
        </a>
        <br />
        Data Protection Officer:{' '}
        <a href="mailto:mah@therentlo.com" className="text-teal hover:underline">
          Mah Yik Choong (mah@therentlo.com)
        </a>
      </Para>
      <Para>
        We process tenant data <strong>only on your instructions</strong> — not for our own
        purposes.
      </Para>

      {/* 3 */}
      <H2>3. Key Terms</H2>
      <LegalTable
        headers={['Term', 'What it means']}
        rows={[
          [
            <strong key="1">Personal Data</strong>,
            'Any information that identifies or could identify a real person (PDPA definition)',
          ],
          [
            <strong key="2">Processing</strong>,
            'Anything done with personal data — collecting, storing, using, sharing, deleting',
          ],
          [
            <strong key="3">Data Subject</strong>,
            'The person the data is about — in this case, mostly tenants',
          ],
          [
            <strong key="4">PDPA</strong>,
            'Personal Data Protection Act 2010 of Malaysia',
          ],
          [
            <strong key="5">Subprocessor</strong>,
            'A third-party company we use to help process data on your behalf',
          ],
        ]}
      />

      {/* 4 */}
      <H2>4. What Data We Process</H2>
      <H3>Types of personal data</H3>
      <Para>Tenant data flowing through Rentlo may include:</Para>
      <Ul
        items={[
          <><strong>Identity:</strong> Name, NRIC/passport number</>,
          <><strong>Contact:</strong> Phone, email, address</>,
          <><strong>Financial:</strong> Bank details (for payment matching), payment history, outstanding balances</>,
          <><strong>Tenancy:</strong> Lease terms, deposit amounts, move-in/move-out dates</>,
          <><strong>Communications:</strong> Reminders sent, receipts generated</>,
          <><strong>Documents:</strong> Tenancy agreements, supporting documents you upload</>,
        ]}
      />
      <H3>Whose data</H3>
      <Ul
        items={[
          'Your tenants',
          'Co-tenants and occupants you list',
          'Guarantors (if you add them)',
          'Emergency contacts (if you add them)',
        ]}
      />
      <H3>What we use it for</H3>
      <Ul
        items={[
          'Tenancy management',
          'Rent invoicing and payment tracking',
          'Automated reminders (email, and in future, WhatsApp)',
          'Document storage and retrieval',
          'Compliance reporting (e.g., LHDN e-invoicing when applicable)',
        ]}
      />

      {/* 5 */}
      <H2>5. Your Responsibilities (Data Controller)</H2>
      <Para>
        As the Data Controller, <strong>you are legally responsible</strong> for the tenant data
        you upload. Here's what that means:
      </Para>
      <H3>Get a lawful basis</H3>
      <Para>
        You must have a valid reason under PDPA to collect and process tenant data. This could be:
      </Para>
      <Ul
        items={[
          'The tenant consented',
          "It's necessary to perform the tenancy agreement",
          "It's in your legitimate interest as a property manager",
        ]}
      />
      <H3>Tell your tenants</H3>
      <Para>
        Before uploading tenant data to Rentlo, you must give each tenant a privacy notice that
        explains:
      </Para>
      <Ul
        items={[
          'Who you are (the Data Controller)',
          'That you use Rentlo (the Data Processor)',
          'What data you collect and why',
          'Their rights under PDPA',
        ]}
      />
      <Para>
        We provide a{' '}
        <DocLink to="/legal/tenant-notice">Tenant Privacy Notice template</DocLink> you can use.
      </Para>
      <H3>Keep data accurate and minimal</H3>
      <Para>
        Only upload what you need for property management. Keep it current. Don't upload sensitive
        data (race, religion, health, political views) unless strictly necessary and legally
        justified.
      </Para>
      <H3>Handle tenant requests</H3>
      <Para>
        If a tenant asks to access, correct, or delete their data — <strong>that's your job</strong>.
        We'll provide the technical tools (data export, correction, deletion features in the app),
        but the legal obligation sits with you.
      </Para>
      <H3>Decide on retention</H3>
      <Para>
        You decide how long to keep tenant data in Rentlo. Delete or archive data you no longer
        need.
      </Para>

      {/* 6 */}
      <H2>6. Our Responsibilities (Data Processor)</H2>
      <Para>Here's what we commit to:</Para>
      <H3>We only process on your instructions</H3>
      <Para>
        We use tenant data solely to deliver the Service you signed up for. We don't use it for
        our own marketing, advertising, or profiling.
      </Para>
      <Para>
        The one exception: we may use <strong>anonymised, aggregated</strong> data (no personal
        identifiers) for product analytics and improvement.
      </Para>
      <H3>We keep it confidential</H3>
      <Ul
        items={[
          'Our team members with access to personal data are bound by confidentiality obligations',
          'Access is restricted on a need-to-know basis',
        ]}
      />
      <H3>We keep it secure</H3>
      <Para>We implement appropriate security measures including:</Para>
      <Ul
        items={[
          'Encryption in transit (HTTPS/TLS) and at rest',
          'Role-based access controls',
          'Regular security reviews',
          'Subprocessor due diligence',
          'Backup and disaster recovery',
        ]}
      />
      <Para>A more detailed list is available on request.</Para>
      <H3>We manage subprocessors carefully</H3>
      <Para>
        We use third-party companies (listed in Section 8) to help run Rentlo. Before adding a
        new subprocessor:
      </Para>
      <Ul
        items={[
          <>We'll <strong>notify you</strong> before engaging them</>,
          <>You have <strong>14 days to object</strong></>,
          "If we can't accommodate your objection, you may terminate your subscription",
          'Every subprocessor is contractually bound to data protection standards equivalent to this DPA',
        ]}
      />
      <H3>We help with tenant requests</H3>
      <Para>
        We'll provide reasonable technical assistance when you need to respond to a tenant's data
        request — exports, corrections, deletions through the platform. We may charge for
        assistance that goes significantly beyond standard features.
      </Para>
      <H3>We tell you about breaches</H3>
      <Para>If we become aware of a personal data breach affecting tenant data:</Para>
      <Ul
        items={[
          <>We'll <strong>notify you within 72 hours</strong> of becoming aware</>,
          "We'll tell you what happened, what data was affected, and the likely impact",
          "We'll take immediate steps to contain and fix the problem",
          "We'll cooperate with you on any regulatory or tenant notifications",
        ]}
      />
      <H3>We allow audits</H3>
      <Para>
        With at least <strong>30 days' notice</strong>, you can request information to verify
        we're complying with this DPA. We may charge reasonable costs for audits requiring
        significant time.
      </Para>

      {/* 7 */}
      <H2>7. How Long We Keep Tenant Data</H2>
      <Para>
        Tenant data is retained while your account is active and for{' '}
        <strong>7 years</strong> after termination, for tax and legal compliance purposes —
        unless you instruct us to delete it earlier.
      </Para>

      {/* 8 */}
      <H2>8. Our Subprocessors</H2>
      <Para>
        These companies help us run Rentlo. Each is contractually bound to protect personal data:
      </Para>
      <LegalTable
        headers={['Company', 'What they do', "Where they're based"]}
        rows={[
          ['Supabase Inc.', 'Database, authentication', 'Singapore (AWS)'],
          ['Cloudflare Inc.', 'DNS, security, CDN', 'Global'],
          ['Resend Inc.', 'Transactional email', 'United States'],
          ['Google LLC (Gemini API)', 'OCR document processing', 'United States'],
        ]}
      />
      <Para>
        <strong>Coming soon</strong> (we'll update this list and notify you before they go live):
      </Para>
      <LegalTable
        headers={['Company', "What they'll do", "Where they're based"]}
        rows={[
          ['Curlec Sdn Bhd', 'Direct debit, recurring payments', 'Malaysia'],
          ['Meta Platforms (WhatsApp Business API)', 'Tenant notifications', 'Global'],
        ]}
      />
      <Para>
        If we add a new subprocessor and you object within 14 days, and we can't address your
        concern, you may terminate your subscription.
      </Para>

      {/* 9 */}
      <H2>9. Cross-Border Data Transfers</H2>
      <Para>
        Some of our subprocessors are outside Malaysia. By using Rentlo, you consent to tenant
        data being transferred to:
      </Para>
      <Ul
        items={[
          <><strong>Singapore</strong> (Supabase database)</>,
          <><strong>United States</strong> (Resend, Google)</>,
          <><strong>Global edge networks</strong> (Cloudflare, for caching and security)</>,
        ]}
      />
      <Para>We protect these transfers through:</Para>
      <Ul
        items={[
          'Contractual obligations on every subprocessor',
          'Choosing providers with security certifications (SOC 2, ISO 27001 where applicable)',
          "Limiting transfers to what's operationally necessary",
        ]}
      />
      <Callout>
        <strong>Your responsibility:</strong> Make sure your tenant privacy notice tells tenants
        about these cross-border transfers.
      </Callout>

      {/* 10 */}
      <H2>10. Getting Your Data Back (and Deleting It)</H2>
      <H3>While you're a customer</H3>
      <Para>
        You can delete tenant data anytime through the app. Deletion is logical first (marked as
        deleted), then physical (removed from active systems) within <strong>30 days</strong>.
      </Para>
      <H3>When your subscription ends</H3>
      <Ul
        items={[
          <>You have <strong>30 days</strong> to export all your data in machine-readable format</>,
          'After 30 days, we delete your data from active systems within 60 days',
        ]}
      />
      <Para>
        <strong>Exceptions — we may keep:</strong>
      </Para>
      <Ul
        items={[
          'Data required by law (financial records for up to 7 years under Malaysian tax law)',
          'Backups that overwrite on a rolling cycle (typically within 90 days)',
          'Anonymised, aggregated data (no longer personally identifiable)',
        ]}
      />
      <Para>If you need faster deletion, let us know in writing.</Para>

      {/* 11 */}
      <H2>11. If Things Go Wrong (Indemnification)</H2>
      <Para>
        You cover Rentlo against claims, fines, or losses caused by:
      </Para>
      <Ul
        items={[
          'Failing to get valid tenant consent',
          'Not providing tenants with a privacy notice',
          'Uploading inaccurate or unlawful data',
          'Not responding to tenant data requests',
          'Breaching your obligations under this DPA',
        ]}
      />
      <Para>This indemnification survives even after your subscription ends.</Para>

      {/* 12 */}
      <H2>12. Liability Limits</H2>
      <Para>
        Our liability under this DPA follows the same limits set out in our{' '}
        <DocLink to="/legal/terms">Terms of Service</DocLink> (Section 15).
      </Para>

      {/* 13 */}
      <H2>13. How Long This DPA Lasts</H2>
      <Para>
        This DPA stays in effect for as long as we process tenant data on your behalf. It ends
        when:
      </Para>
      <Ul
        items={[
          'Your subscription terminates, and',
          'All tenant data has been returned, deleted, or fully anonymised',
        ]}
      />
      <Para>
        Confidentiality, indemnification, and liability sections survive termination.
      </Para>

      {/* 14 */}
      <H2>14. Changes</H2>
      <Para>
        We may update this DPA to reflect changes in law, new subprocessors, or security
        improvements. Material changes get <strong>30 days' notice</strong>. Continuing to use
        Rentlo after the effective date means you accept the update.
      </Para>

      {/* 15 */}
      <H2>15. Governing Law</H2>
      <Para>
        This DPA is governed by the <strong>laws of Malaysia</strong>. Disputes follow the
        resolution process in our <DocLink to="/legal/terms">Terms of Service</DocLink>.
      </Para>

      {/* 16 */}
      <H2>16. If Documents Conflict</H2>
      <Para>
        If there's a conflict between our legal documents, here's the priority:
      </Para>
      <Ul
        items={[
          <><strong>This DPA</strong> (for data protection matters)</>,
          <><strong>Terms of Service</strong> (for general matters)</>,
          <><strong>Privacy Policy</strong> (for how we handle your personal data, separate from tenant data)</>,
        ]}
      />

      {/* 17 */}
      <H2>17. Contact</H2>
      <ContactBox />

      <FooterNote>
        By using Rentlo to manage tenant data, you acknowledge you've read, understood, and agree
        to this Data Processing Agreement.
      </FooterNote>
    </LegalLayout>
  )
}
