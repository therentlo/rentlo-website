import {
  LegalLayout,
  H2,
  H3,
  Para,
  Ul,
  Callout,
  LegalTable,
  DocLink,
  InlineCode,
  ContactBox,
  FooterNote,
} from '../LegalLayout'

export function LegalCookies() {
  return (
    <LegalLayout
      title="Cookie Notice"
      effectiveDate="1 April 2026"
      lastUpdated="1 April 2026"
    >
      <Callout>
        We use cookies to keep you logged in, protect your account, and understand how people use
        Rentlo so we can improve it. We don't use cookies for advertising. You can control most of
        them through your browser settings.
      </Callout>

      {/* 1 */}
      <H2>1. What This Notice Covers</H2>
      <Para>
        This Cookie Notice explains how <strong>Rentlo</strong> uses cookies and similar
        technologies on therentlo.com.
      </Para>
      <Para>
        It supplements our <DocLink to="/legal/privacy">Privacy Policy</DocLink>. Read both
        together for the full picture.
      </Para>
      <Para>
        <strong>Rentlo</strong> is operated from 43, Lengkungan Sri Damak 11, Taman Sri Andalas,
        41200 Klang, Selangor, Malaysia.
      </Para>

      {/* 2 */}
      <H2>2. What Are Cookies?</H2>
      <Para>
        Cookies are small text files that websites save on your device. They help the site
        remember who you are and what you prefer.
      </Para>
      <Para>We also use similar technologies:</Para>
      <Ul
        items={[
          <><strong>Local storage</strong> — data stored in your browser that persists until you clear it</>,
          <><strong>Session storage</strong> — data that disappears when you close the browser tab</>,
          <><strong>Pixels and beacons</strong> — tiny images that help us track usage</>,
        ]}
      />
      <Para>
        For simplicity, we call all of these "cookies" in this notice.
      </Para>

      {/* 3 */}
      <H2>3. What Cookies We Use and Why</H2>
      <H3>Essential cookies (you can't turn these off)</H3>
      <Para>
        These make Rentlo work. Without them, you can't log in or use the platform.
      </Para>
      <LegalTable
        headers={['Cookie', 'What it does', 'How long it lasts']}
        rows={[
          [<InlineCode key="1">sb-*-auth-token</InlineCode>, 'Keeps you logged in (Supabase auth)', 'Session to 1 year'],
          [<InlineCode key="2">__cf_bm</InlineCode>, 'Cloudflare bot protection', '30 minutes'],
          [<InlineCode key="3">cf_clearance</InlineCode>, 'Cloudflare security verification', 'Up to 1 year'],
        ]}
      />
      <H3>Functional cookies (make things nicer)</H3>
      <Para>
        These remember your preferences so the experience feels smoother.
      </Para>
      <Para>
        <strong>Examples:</strong> language settings, dark/light mode, remembered email for faster
        login.
      </Para>
      <Para>
        <strong>Can you turn them off?</strong> Yes, but some convenience features won't work.
      </Para>
      <H3>Analytics cookies (help us improve)</H3>
      <Para>
        These show us how people use Rentlo — which pages get visited, which features get used,
        where things break.
      </Para>
      <Para>
        <strong>What we collect:</strong> Anonymised page views, feature usage counts, performance
        metrics (load times, errors).
      </Para>
      <Para>
        <strong>What we don't do:</strong> We don't track you across other websites. We don't build
        an advertising profile.
      </Para>
      <Para>
        <strong>Can you turn them off?</strong> Yes — see Section 5.
      </Para>

      {/* 4 */}
      <H2>4. Third-Party Services That Set Cookies</H2>
      <Para>Some cookies come from services we use to run Rentlo:</Para>
      <LegalTable
        headers={['Service', 'Why we use it', 'What cookies it may set']}
        rows={[
          ['Supabase', 'User authentication and sessions', 'Auth tokens'],
          [
            'Cloudflare',
            'Site security and content delivery',
            'Bot protection, security challenge cookies',
          ],
        ]}
      />
      <Para>
        <strong>We do not currently use:</strong>
      </Para>
      <Ul
        items={[
          'Google Analytics',
          'Meta Pixel or Facebook tracking',
          'Any advertising or marketing cookies',
        ]}
      />
      <Para>
        If we add these in the future, we'll update this notice and ask for your consent where
        required.
      </Para>

      {/* 5 */}
      <H2>5. How to Control Cookies</H2>
      <H3>Through your browser</H3>
      <Para>
        Every major browser lets you manage cookies. Here's where to look:
      </Para>
      <Ul
        items={[
          'Chrome: Settings → Privacy and Security → Cookies',
          'Firefox: Settings → Privacy & Security → Cookies and Site Data',
          'Safari: Preferences → Privacy',
          'Edge: Settings → Cookies and Site Permissions',
        ]}
      />
      <H3>What happens if you block cookies</H3>
      <LegalTable
        headers={['Cookie type', 'Effect of blocking']}
        rows={[
          [
            'Essential',
            <>
              <strong>You can't use Rentlo at all</strong> — login won't work
            </>,
          ],
          ['Functional', "Some preferences won't be remembered"],
          ['Analytics', 'No impact on your experience'],
        ]}
      />
      <H3>On mobile</H3>
      <Para>
        Mobile browsers and apps have their own cookie settings. Check your device's help
        documentation.
      </Para>

      {/* 6 */}
      <H2>6. Do Not Track</H2>
      <Para>
        Some browsers send a "Do Not Track" signal. There's no industry-wide standard for how to
        respond to it, so we currently don't respond to DNT signals. You can still control cookies
        through the methods described above.
      </Para>

      {/* 7 */}
      <H2>7. Children</H2>
      <Para>
        Rentlo is not for anyone under 18. We don't use cookies to collect data from minors.
      </Para>

      {/* 8 */}
      <H2>8. Changes to This Notice</H2>
      <Para>
        We may update this notice when we change the cookies we use, add new providers, or when
        the law requires it. Material changes will be communicated through the Service or by email.
        The "Last Updated" date reflects the latest revision.
      </Para>

      {/* 9 */}
      <H2>9. Contact</H2>
      <ContactBox />
      <Para>
        For broader privacy questions, see our{' '}
        <DocLink to="/legal/privacy">Privacy Policy</DocLink>.
      </Para>

      <FooterNote>This Cookie Notice is governed by the laws of Malaysia.</FooterNote>
    </LegalLayout>
  )
}
