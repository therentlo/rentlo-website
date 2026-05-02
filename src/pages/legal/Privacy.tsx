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

export function LegalPrivacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="1 April 2026"
      lastUpdated="1 April 2026"
    >
      <Callout>
        We collect your data to run Rentlo. We don't sell it. We don't use it for ads. We keep it
        secure. You can ask us to delete it. That's the summary — the rest of this page explains
        exactly how it all works.
      </Callout>

      {/* 1 */}
      <H2>1. Who We Are</H2>
      <Para>
        <strong>Rentlo</strong> is a property management platform that helps landlords manage
        tenants, rent, and properties — all from one place.
      </Para>
      <Para>
        <strong>Our address:</strong> 43, Lengkungan Sri Damak 11, Taman Sri Andalas, 41200 Klang,
        Selangor, Malaysia
        <br />
        <strong>Email:</strong>{' '}
        <a href="mailto:hey@therentlo.com" className="text-teal hover:underline">
          hey@therentlo.com
        </a>
        <br />
        <strong>Data Protection Officer:</strong>{' '}
        <a href="mailto:mah@therentlo.com" className="text-teal hover:underline">
          Mah Yik Choong (mah@therentlo.com)
        </a>
      </Para>
      <Para>
        We follow the <strong>Personal Data Protection Act 2010 (PDPA)</strong> of Malaysia,
        including its 2024 amendments.
      </Para>

      {/* 2 */}
      <H2>2. What We Collect</H2>
      <Para>We collect different things depending on who you are.</Para>
      <H3>If you're a landlord (our customer)</H3>
      <Para>When you sign up and use Rentlo, we collect:</Para>
      <Ul
        items={[
          <><strong>Your identity</strong> — full name, NRIC or passport number</>,
          <><strong>Your contact details</strong> — email address, phone number</>,
          <><strong>Your payment info</strong> — billing details, bank account (for receiving rent)</>,
          <><strong>Your property info</strong> — addresses, rental amounts, lease terms</>,
          <><strong>Your activity</strong> — which features you use, when you log in, what you click</>,
        ]}
      />
      <H3>If you're a tenant (managed by a landlord using Rentlo)</H3>
      <Para>Your landlord uploads your data to Rentlo. This typically includes:</Para>
      <Ul
        items={[
          <><strong>Your identity</strong> — name, NRIC or passport number</>,
          <><strong>Your contact details</strong> — phone number, email</>,
          <><strong>Your tenancy details</strong> — lease dates, rent amount, deposit paid</>,
          <><strong>Your payment history</strong> — what you've paid, what's outstanding</>,
          <><strong>Your documents</strong> — tenancy agreements, supporting documents your landlord uploaded</>,
        ]}
      />
      <Callout>
        <strong>Important:</strong> Your landlord decides what data to upload about you. They are
        responsible for getting your consent before they do. If you have questions about your data,
        start with your landlord — they are the one who controls it.
      </Callout>
      <H3>What we collect automatically (everyone)</H3>
      <Para>When you visit therentlo.com, we automatically pick up:</Para>
      <Ul
        items={[
          'Your IP address and rough location',
          'Your device type and browser',
          'Which pages you visit and how long you stay',
          <>Cookies (see our <DocLink to="/legal/cookies">Cookie Notice</DocLink> for details)</>,
        ]}
      />

      {/* 3 */}
      <H2>3. Why We Use Your Data</H2>
      <Para>Here's exactly what we do with your data — and nothing else:</Para>
      <LegalTable
        headers={['What we do', 'Why']}
        rows={[
          ['Run your account', "You can't use Rentlo without an account"],
          ['Process your subscription', 'We need to bill you and send receipts'],
          ['Send you service emails', 'Password resets, security alerts, important updates'],
          ['Generate invoices and contracts', 'This is a core feature of Rentlo'],
          ['Send reminders to tenants', 'On your behalf — rent due, payment received, etc.'],
          [
            'Improve the product',
            'We look at usage patterns (anonymised) to fix bugs and build better features',
          ],
          ['Stay legal', 'Tax records, LHDN reporting, responding to court orders'],
          ['Keep things secure', 'Fraud detection, blocking unauthorised access'],
        ]}
      />
      <Para>
        <strong>What we never do:</strong>
      </Para>
      <Ul
        items={[
          'Sell your data to anyone',
          'Share your data with advertisers',
          'Build a profile of you for targeted ads',
          "Let third parties use your data for their own purposes",
        ]}
      />

      {/* 4 */}
      <H2>4. Our Legal Basis (Why We're Allowed to Do This)</H2>
      <Para>Under PDPA, we need a lawful reason to process your data. Here are ours:</Para>
      <Ul
        items={[
          <><strong>You agreed to it</strong> — by using Rentlo, you accepted this policy</>,
          <><strong>It's needed for the service</strong> — we can't run your account without processing your data</>,
          <><strong>The law requires it</strong> — Malaysian tax law says we must keep certain records</>,
          <><strong>It's in our legitimate interest</strong> — improving security, preventing fraud, and making the product better</>,
        ]}
      />

      {/* 5 */}
      <H2>5. Who Sees Your Data</H2>
      <Para>We don't share your data widely. Here's the full list of who may see it:</Para>
      <H3>Our technology providers</H3>
      <Para>
        These companies help us run Rentlo. They process data on our behalf, under strict
        agreements:
      </Para>
      <LegalTable
        headers={['Provider', 'What they do', "Where they're based"]}
        rows={[
          ['Supabase', 'Stores your data, handles login', 'Singapore'],
          ['Cloudflare', 'Protects the site, delivers pages fast', 'Global'],
          ['Resend', 'Sends emails (invoices, alerts)', 'United States'],
          ['Google (Gemini API)', 'Reads documents you upload via OCR', 'United States'],
        ]}
      />
      <Para>
        <strong>Coming soon</strong> (we'll update this list when they go live):
      </Para>
      <LegalTable
        headers={['Provider', 'What they do', "Where they're based"]}
        rows={[
          ['Curlec', 'Collects rent via direct debit', 'Malaysia'],
          ['Meta (WhatsApp Business)', 'Sends tenant notifications', 'Global'],
        ]}
      />
      <H3>When the law requires it</H3>
      <Para>We may hand over your data if:</Para>
      <Ul
        items={[
          'A court orders us to',
          'A regulator (like the PDP Commissioner) requires it',
          "It's necessary to prevent fraud or protect someone's safety",
        ]}
      />
      <H3>If we sell the business</H3>
      <Para>
        If Rentlo is ever acquired or merged with another company, your data may transfer to the
        new owner. We'll tell you before that happens.
      </Para>

      {/* 6 */}
      <H2>6. Your Data Goes Overseas — Here's Why</H2>
      <Para>
        Some of our providers are outside Malaysia. Your data may be stored or processed in{' '}
        <strong>Singapore</strong> and the <strong>United States</strong>.
      </Para>
      <Para>We make sure these transfers are safe by:</Para>
      <Ul
        items={[
          'Choosing providers with strong security certifications (SOC 2, ISO 27001 where available)',
          'Signing contracts that require them to protect your data',
          "Only transferring what's operationally necessary",
        ]}
      />
      <Para>By using Rentlo, you consent to these transfers.</Para>

      {/* 7 */}
      <H2>7. How Long We Keep Your Data</H2>
      <Para>We don't keep your data forever. Here's the breakdown:</Para>
      <LegalTable
        headers={['Data type', 'How long we keep it']}
        rows={[
          ['Your account data', 'As long as your account is active'],
          [
            'Tenant data uploaded by you',
            'While your account is active + 7 years after (tax/legal requirements)',
          ],
          ['Payment and billing records', '7 years (required by Malaysian tax law)'],
          ['Support messages', '3 years from your last message'],
          ['Inactive accounts', '12 months after your last login — then we delete it'],
        ]}
      />
      <Para>
        You can ask us to delete things earlier (see Section 10), but we may need to keep some
        records if the law says so.
      </Para>

      {/* 8 */}
      <H2>8. How We Keep Your Data Safe</H2>
      <Para>We take security seriously:</Para>
      <Ul
        items={[
          <><strong>Everything is encrypted</strong> — in transit (HTTPS) and at rest (in the database)</>,
          <><strong>Access is restricted</strong> — only authorised people can see personal data</>,
          <><strong>We use strong authentication</strong> — passwords must meet minimum standards</>,
          <><strong>Our providers are vetted</strong> — we choose providers with established security track records</>,
          <><strong>We review regularly</strong> — security practices are checked and updated</>,
        ]}
      />
      <Para>
        No system is 100% bulletproof, but we work hard to minimise risk. If something does go
        wrong, see Section 11.
      </Para>

      {/* 9 */}
      <H2>9. Landlords: Your Responsibilities</H2>
      <Para>
        This section is critical if you're using Rentlo to manage tenants.
      </Para>
      <Para>
        When you upload tenant data to Rentlo, <strong>you become the Data Controller</strong>{' '}
        under PDPA. Rentlo is your <strong>Data Processor</strong> — we handle the data on your
        instructions.
      </Para>
      <H3>Get consent first</H3>
      <Para>
        Before you upload a tenant's IC, phone number, or any personal details, you must tell them
        what you're doing and get their agreement.
      </Para>
      <H3>Give them a privacy notice</H3>
      <Para>
        We provide a{' '}
        <DocLink to="/legal/tenant-notice">Tenant Privacy Notice template</DocLink> you can use.
        Fill in your details and give it to your tenants.
      </Para>
      <H3>Keep data accurate</H3>
      <Para>
        If a tenant's details change, update them. Don't upload data you don't need.
      </Para>
      <H3>Handle their requests</H3>
      <Para>
        If a tenant asks to see, correct, or delete their data — that's your job to respond. We'll
        help you technically (export tools, deletion features), but the obligation is yours.
      </Para>
      <H3>Tell them about breaches</H3>
      <Para>
        If there's ever a data incident affecting their information, you need to notify them.
      </Para>
      <Callout>
        If you skip these steps and we get a complaint or fine because of it,{' '}
        <strong>you're responsible for the cost</strong> — not us. That's in our{' '}
        <DocLink to="/legal/terms">Terms of Service</DocLink> and{' '}
        <DocLink to="/legal/dpa">Data Processing Agreement</DocLink> too.
      </Callout>

      {/* 10 */}
      <H2>10. Your Rights</H2>
      <Para>Under PDPA, you can:</Para>
      <LegalTable
        headers={['Right', 'What it means']}
        rows={[
          [<strong key="a">Access</strong>, 'Ask us for a copy of the data we hold about you'],
          [<strong key="b">Correction</strong>, "Tell us to fix anything that's wrong"],
          [
            <strong key="c">Deletion</strong>,
            'Ask us to delete your data (subject to legal retention)',
          ],
          [
            <strong key="d">Withdraw consent</strong>,
            "Tell us to stop processing — but this may mean you can't use Rentlo",
          ],
          [<strong key="e">Object</strong>, 'Say no to specific types of processing'],
          [
            <strong key="f">Portability</strong>,
            'Get your data in a format you can take elsewhere',
          ],
          [
            <strong key="g">Complain</strong>,
            "File a complaint with Malaysia's PDP Department",
          ],
        ]}
      />
      <Para>
        <strong>How to exercise your rights:</strong> Email{' '}
        <a href="mailto:mah@therentlo.com" className="text-teal hover:underline">
          mah@therentlo.com
        </a>
        . We'll respond within 21 days.
      </Para>
      <Para>
        <strong>Where to complain if we don't resolve it:</strong>
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

      {/* 11 */}
      <H2>11. If Something Goes Wrong (Data Breaches)</H2>
      <Para>
        If we discover a breach that affects your personal data and could cause you harm:
      </Para>
      <Ul
        items={[
          "We'll email you within 72 hours of finding out",
          "We'll tell you what happened, what data was affected, and what we're doing about it",
          "We'll notify the PDP Commissioner if required by law",
          "We'll take immediate action to contain and fix the problem",
        ]}
      />

      {/* 12 */}
      <H2>12. Children</H2>
      <Para>
        Rentlo is not for anyone under 18. We don't knowingly collect data from minors. If we find
        out we have, we'll delete it.
      </Para>

      {/* 13 */}
      <H2>13. Changes to This Policy</H2>
      <Para>
        We may update this policy when laws change, we add new features, or we switch providers.
        If we make a material change:
      </Para>
      <Ul
        items={[
          "We'll email you at least 14 days before it takes effect",
          'We\'ll update the "Last Updated" date at the top',
          'If you keep using Rentlo after the change, that counts as acceptance',
          'If you disagree, you can cancel your subscription before the change kicks in',
        ]}
      />

      {/* 14 */}
      <H2>14. Questions?</H2>
      <ContactBox />

      <FooterNote>
        This Privacy Policy is governed by the laws of Malaysia. Disputes will be resolved in the
        courts of Selangor.
      </FooterNote>
    </LegalLayout>
  )
}
