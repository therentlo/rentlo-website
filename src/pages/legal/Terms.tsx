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

export function LegalTerms() {
  return (
    <LegalLayout
      title="Terms of Service"
      effectiveDate="1 April 2026"
      lastUpdated="1 April 2026"
    >
      <Callout>
        Rentlo is a tool for landlords to manage properties, tenants, and rent. You own your data.
        We provide the software. Don't do anything illegal with it. If something goes wrong, our
        liability is limited. Read on for the full picture.
      </Callout>

      {/* 1 */}
      <H2>1. What You're Agreeing To</H2>
      <Para>
        These Terms of Service ("Terms") are a legal agreement between you and <strong>Rentlo</strong>.
        By creating an account or using Rentlo at therentlo.com, you agree to everything on this
        page.
      </Para>
      <Para>If you don't agree, don't use the Service.</Para>
      <Para>These Terms work together with our:</Para>
      <Ul
        items={[
          <DocLink to="/legal/privacy">Privacy Policy</DocLink>,
          <DocLink to="/legal/cookies">Cookie Notice</DocLink>,
          <DocLink to="/legal/dpa">Data Processing Agreement</DocLink>,
        ]}
      />
      <Para>
        If anything in those documents conflicts with these Terms, these Terms take priority —
        except for data protection matters, where the DPA wins.
      </Para>
      <Para>
        <strong>Rentlo</strong> is operated by Mah Yik Choong from 43, Lengkungan Sri Damak 11,
        Taman Sri Andalas, 41200 Klang, Selangor, Malaysia. Email: hey@therentlo.com.
      </Para>

      {/* 2 */}
      <H2>2. What Rentlo Is (and Isn't)</H2>
      <Para>
        <strong>Rentlo is</strong> a software platform that helps independent landlords manage
        rental properties, tenants, leases, invoicing, and payments — all in one place.
      </Para>
      <Para>
        <strong>Rentlo is not:</strong>
      </Para>
      <Ul
        items={[
          "A property management company — we don't manage your property for you",
          "A real estate agent — we don't find tenants or negotiate leases",
          "A law firm — our templates are tools, not legal advice",
          "A bank or payment institution — we generate invoices and QR codes, but payments go directly to your bank account",
          "An insurance provider — we don't guarantee tenant behaviour or rent payment",
        ]}
      />
      <Callout>
        <strong>In plain language:</strong> We give you the tools. You make the decisions. If you
        need legal, financial, or property advice, consult a professional.
      </Callout>

      {/* 3 */}
      <H2>3. Who Can Use Rentlo</H2>
      <Para>To use Rentlo, you must:</Para>
      <Ul
        items={[
          'Be at least 18 years old',
          'Have the legal right to enter contracts',
          'Be a property owner, authorised manager, or someone legally entitled to manage rental properties',
          'Give us accurate information when you sign up',
          'Follow the law in your jurisdiction',
        ]}
      />
      <Para>We can refuse service or close accounts that don't meet these requirements.</Para>

      {/* 4 */}
      <H2>4. Your Account</H2>
      <Para>
        <strong>You're responsible for your account.</strong> That means:
      </Para>
      <Ul
        items={[
          'Keep your login credentials private',
          'Everything that happens under your account is on you',
          'Tell us immediately if someone accesses your account without permission (email hey@therentlo.com)',
        ]}
      />
      <Para>
        We're not liable if someone gets into your account because you shared your password or
        didn't secure it.
      </Para>

      {/* 5 */}
      <H2>5. Plans and Pricing</H2>
      <H3>How billing works</H3>
      <Para>
        Rentlo offers tiered subscription plans based on how many tenants you manage. Current
        pricing is at therentlo.com/pricing.
      </Para>
      <Ul
        items={[
          'Subscriptions are billed monthly in advance',
          'Payment is due on or before the renewal date',
          'We currently accept bank transfer; future payment methods (payment gateways, direct debit) will be announced',
        ]}
      />
      <H3>Founding Members</H3>
      <Para>
        The first <strong>50 paying customers</strong> get permanent discounted pricing — as long
        as you stay continuously subscribed. Here's how it works:
      </Para>
      <Ul
        items={[
          'Your rate is locked at whatever was shown when you first paid',
          <>If your subscription lapses for more than <strong>30 days</strong>, the founding rate is gone</>,
          "Founding pricing doesn't transfer if you cancel and create a new account",
          'Founding Members are exempt from future price increases',
        ]}
      />
      <H3>Free tier</H3>
      <Para>
        We offer a free tier for managing <strong>one tenant</strong>. It's provided as-is, with
        no uptime or support guarantees.
      </Para>
      <H3>What happens if you don't pay</H3>
      <LegalTable
        headers={['Timeline', 'What happens']}
        rows={[
          ['Due date passes', '7-day grace period — everything works normally'],
          [
            'After 7 days',
            <>
              Your account goes <strong>read-only</strong> (you can view data but can't create or
              edit)
            </>,
          ],
          ['After 30 days', <><strong>Account is suspended</strong> (no access)</>],
          [
            'After 90 days',
            <>
              Account and <strong>all data may be permanently deleted</strong>
            </>,
          ],
        ]}
      />
      <H3>Refunds</H3>
      <Para>
        <strong>All payments are non-refundable.</strong> If you cancel mid-cycle, your access
        continues until the end of the paid period, but no money comes back.
      </Para>
      <H3>Price changes</H3>
      <Para>
        We can change pricing for new customers anytime. For existing paying customers, we'll give
        at least <strong>30 days' notice</strong> before any price increase. Founding Members are
        exempt.
      </Para>

      {/* 6 */}
      <H2>6. Rules of Use</H2>
      <Para>
        Use Rentlo for its intended purpose — managing rental properties lawfully. Here's what you{' '}
        <strong>must not</strong> do:
      </Para>
      <Ul
        items={[
          'Upload tenant data without their consent',
          'Use Rentlo to harass, threaten, or deceive anyone',
          'Upload false, fraudulent, or misleading information',
          'Facilitate rental scams or illegal subletting',
          "Try to access other users' accounts or data",
          'Reverse-engineer, decompile, or scrape the Service',
          'Resell or redistribute Rentlo without our written permission',
          'Upload viruses, malware, or harmful code',
        ]}
      />
      <Callout>
        <strong>Consequence:</strong> Violations can lead to immediate suspension or termination
        with no refund.
      </Callout>

      {/* 7 */}
      <H2>7. Your Data, Your Ownership</H2>
      <H3>You own your content</H3>
      <Para>
        Everything you upload — property details, tenant information, documents — is yours. We
        don't claim ownership of it.
      </Para>
      <H3>What you let us do with it</H3>
      <Para>By uploading content, you give Rentlo a limited licence to:</Para>
      <Ul
        items={[
          <>
            <strong>Store and process</strong> it to deliver the Service
          </>,
          <>
            <strong>Back it up</strong> for security and disaster recovery
          </>,
          <>
            <strong>Anonymise and aggregate</strong> it for product analytics (nothing personally
            identifiable leaves our systems)
          </>,
        ]}
      />
      <Para>
        This licence ends when you delete the content or close your account — except where the
        law says we must keep records.
      </Para>
      <H3>You're responsible for what you upload</H3>
      <Para>
        We don't review or verify your content. If you upload something inaccurate, illegal, or
        harmful, that's on you.
      </Para>

      {/* 8 */}
      <H2>8. Tenant Data — This Is Important</H2>
      <Para>
        When you upload tenant personal data to Rentlo, a specific legal framework kicks in under
        PDPA:
      </Para>
      <Ul
        items={[
          <>
            <strong>You are the Data Controller</strong> — you decide what to collect and why
          </>,
          <>
            <strong>Rentlo is your Data Processor</strong> — we handle data on your instructions
            only
          </>,
          <>
            <strong>You must get tenant consent</strong> before uploading their data
          </>,
          <>
            <strong>You must give tenants a privacy notice</strong> — we provide a{' '}
            <DocLink to="/legal/tenant-notice">template</DocLink> you can use
          </>,
          <>
            <strong>You handle tenant requests</strong> — if a tenant asks to see, correct, or
            delete their data, you respond
          </>,
        ]}
      />
      <Para>
        Our <DocLink to="/legal/dpa">Data Processing Agreement</DocLink> sets out the full details.
        It's incorporated into these Terms.
      </Para>
      <Callout>
        <strong>Bottom line:</strong> If you upload tenant data without proper consent and we get
        a regulatory complaint or fine because of it, you indemnify us. That means you cover the
        cost.
      </Callout>

      {/* 9 */}
      <H2>9. Rentlo's Intellectual Property</H2>
      <Para>
        The software, design, logo, text, and all other materials in Rentlo belong to us. You
        may not:
      </Para>
      <Ul
        items={[
          'Copy, modify, or create derivative works from the Service',
          'Use our branding without written permission',
          'Remove copyright or trademark notices',
        ]}
      />
      <Para>
        You're getting a licence to use the software while your subscription is active — not
        ownership of it.
      </Para>

      {/* 10 */}
      <H2>10. Availability and Support</H2>
      <H3>We aim for always-on, but we don't guarantee it</H3>
      <Para>
        We try to keep Rentlo running 24/7, but outages can happen due to:
      </Para>
      <Ul
        items={[
          "Planned maintenance (we'll try to warn you)",
          'Emergency fixes or security patches',
          'Our infrastructure providers going down (Supabase, Cloudflare, etc.)',
          'Events outside our control (natural disasters, internet outages)',
        ]}
      />
      <H3>No SLA during early stage</H3>
      <Para>
        While Rentlo is in its early operational phase, we don't commit to specific uptime
        percentages or response times. SLAs may come with future paid tiers.
      </Para>
      <H3>Support</H3>
      <Para>
        Email us at <strong>hey@therentlo.com</strong>. We aim to reply within{' '}
        <strong>48 business hours</strong> during the early stage. This is best-effort, not a
        guarantee.
      </Para>

      {/* 11 */}
      <H2>11. We Can Change Things</H2>
      <Para>We may, at any time:</Para>
      <Ul
        items={[
          'Add, change, or remove features',
          'Update the interface or workflows',
          <>Discontinue part of the Service (with <strong>30 days' notice</strong>)</>,
          <>Shut down the entire Service (with <strong>90 days' notice</strong>)</>,
        ]}
      />
      <Para>
        For changes that significantly reduce functionality you rely on, we'll tell you in advance.
      </Para>

      {/* 12 */}
      <H2>12. Ending Your Subscription</H2>
      <H3>You cancel</H3>
      <Para>
        You can cancel anytime via your account settings or by emailing hey@therentlo.com. Your
        access continues until the end of your current billing period.
      </Para>
      <H3>We cancel</H3>
      <Para>
        We can suspend or terminate your account immediately if you:
      </Para>
      <Ul
        items={[
          'Break these Terms',
          "Don't pay what you owe",
          'Engage in fraud or illegal activity',
          'Harm the platform or other users',
        ]}
      />
      <H3>What happens next</H3>
      <Ul
        items={[
          <>You have <strong>30 days</strong> to export your data after termination</>,
          "After 30 days, we may delete everything (except what the law says we must keep)",
          'The sections on intellectual property, indemnification, liability limits, and governing law survive termination',
        ]}
      />

      {/* 13 */}
      <H2>13. Tenancy Agreement Templates — Disclaimer</H2>
      <Para>
        Rentlo provides tenancy agreement templates as a convenience feature.
      </Para>
      <Callout>
        <strong>These templates are not legal advice.</strong> They are starting points that you
        must review, customise, and verify for your specific situation. Rentlo does not guarantee
        that any template is suitable for your property, jurisdiction, or tenancy arrangement.
      </Callout>
      <Para>You are responsible for:</Para>
      <Ul
        items={[
          'Reviewing and adapting every template before use',
          'Ensuring compliance with the Contracts Act 1950 and relevant state laws',
          <>
            <strong>Stamping the agreement with LHDN</strong> under the Stamp Act 1949 —
            unstamped agreements are not admissible as evidence in court
          </>,
          'Seeking professional legal advice for complex arrangements',
        ]}
      />
      <Para>
        Rentlo is not liable for any loss, dispute, or legal consequence arising from your use of
        our templates.
      </Para>

      {/* 14 */}
      <H2>14. Warranties — What We Do and Don't Promise</H2>
      <Para>
        <strong>We provide Rentlo "as is" and "as available."</strong> This means:
      </Para>
      <Ul
        items={[
          "We don't promise it will always work perfectly",
          "We don't promise it's error-free or uninterrupted",
          "We don't promise the data in your account is 100% accurate (you enter it)",
          "We don't promise our templates will hold up in every legal situation",
        ]}
      />
      <Callout>
        <strong>In plain language:</strong> We build and maintain the platform with care, but no
        software is perfect. Use your own judgement too.
      </Callout>
      <Para>
        Some jurisdictions don't allow full warranty exclusions. If that applies to you, these
        exclusions only go as far as the law allows.
      </Para>

      {/* 15 */}
      <H2>15. Liability — What We're Responsible For (and What We're Not)</H2>
      <H3>Things we're NOT liable for</H3>
      <Para>
        To the maximum extent permitted by Malaysian law, Rentlo is not responsible for:
      </Para>
      <Ul
        items={[
          'Indirect, incidental, or consequential damages',
          'Lost profits, revenue, or business opportunities',
          'Lost data (keep your own backups)',
          'Problems caused by our infrastructure providers',
          'Disputes between you and your tenants',
          'Tenants not paying their rent',
        ]}
      />
      <H3>Our maximum liability</H3>
      <Para>
        If we are liable, the most you can claim is the <strong>greater of:</strong>
      </Para>
      <Ul
        items={[
          <>What you paid Rentlo in the <strong>12 months before the claim</strong>, or</>,
          <><strong>RM500</strong></>,
        ]}
      />
      <H3>Your consumer rights are protected</H3>
      <Para>
        Nothing in these Terms removes rights you have under Malaysian consumer protection law
        that can't legally be excluded.
      </Para>

      {/* 16 */}
      <H2>16. You Cover Us (Indemnification)</H2>
      <Para>
        You agree to cover Rentlo's costs (including legal fees) if we face claims because:
      </Para>
      <Ul
        items={[
          'You broke these Terms',
          'You broke the law',
          'You uploaded tenant data without consent',
          'You and your tenant had a dispute',
          'You misused the Service',
        ]}
      />

      {/* 17 */}
      <H2>17. Things Outside Our Control (Force Majeure)</H2>
      <Para>We're not liable for failures caused by things we can't control:</Para>
      <Ul
        items={[
          'Natural disasters, pandemics',
          'War, civil unrest, terrorism',
          'Government actions or new regulations',
          'Internet or telecom outages',
          'Our providers going down (Supabase, Cloudflare, etc.)',
          'Power failures',
        ]}
      />

      {/* 18 */}
      <H2>18. Resolving Disputes</H2>
      <H3>Step 1: Talk to us</H3>
      <Para>
        Email hey@therentlo.com. Most issues can be resolved through a direct conversation.
      </Para>
      <H3>Step 2: Mediation</H3>
      <Para>
        If talking doesn't work, we'll try mediation under the{' '}
        <strong>Asian International Arbitration Centre (AIAC)</strong> Mediation Rules.
      </Para>
      <H3>Step 3: Court</H3>
      <Para>
        If mediation fails, disputes go to the <strong>courts of Selangor, Malaysia</strong>. You
        agree to their exclusive jurisdiction.
      </Para>

      {/* 19 */}
      <H2>19. Governing Law</H2>
      <Para>These Terms are governed by the <strong>laws of Malaysia</strong>.</Para>

      {/* 20 */}
      <H2>20. Changes to These Terms</H2>
      <Para>We may update these Terms from time to time. When we make material changes:</Para>
      <Ul
        items={[
          <>We'll email you at least <strong>14 days</strong> before they take effect</>,
          'We\'ll update the "Last Updated" date at the top',
          'Continuing to use Rentlo after the change means you accept the new Terms',
          'If you disagree, cancel before the change takes effect',
        ]}
      />

      {/* 21 */}
      <H2>21. Final Details</H2>
      <Ul
        items={[
          <>
            <strong>Entire agreement.</strong> These Terms (plus the Privacy Policy, Cookie Notice,
            and DPA) are the whole deal between you and us.
          </>,
          <>
            <strong>Severability.</strong> If one part of these Terms is found unenforceable, the
            rest still stands.
          </>,
          <>
            <strong>No waiver.</strong> If we don't enforce something once, it doesn't mean we've
            given up the right to enforce it later.
          </>,
          <>
            <strong>Assignment.</strong> You can't transfer your account or rights without our
            written consent. We can transfer ours to a successor company.
          </>,
          <>
            <strong>Notices.</strong> Send legal notices in writing to hey@therentlo.com and to
            our registered address.
          </>,
        ]}
      />

      {/* 22 */}
      <H2>22. Contact</H2>
      <ContactBox />

      <FooterNote>
        By using Rentlo, you confirm you've read, understood, and agree to these Terms of Service.
      </FooterNote>
    </LegalLayout>
  )
}
