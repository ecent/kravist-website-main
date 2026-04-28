import NavigationBar from "@/components/sections/NavigationBar";
import FooterSection from "@/components/sections/FooterSection";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy | Kravist"
        description="How Kravist Pte. Ltd. collects, uses, and protects your personal data in compliance with Singapore's PDPA."
        url="https://kravist.sg/privacy"
      />
      <NavigationBar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">
            <strong>Last updated:</strong> 28 April 2026
          </p>

          <p className="mb-8 text-foreground/90 leading-relaxed">
            This Privacy Policy explains how Kravist Pte. Ltd. ("Kravist", "we", "us") collects, uses, and protects your personal data when you visit kravist.sg, sign up for our classes or programs, or otherwise interact with us. We comply with Singapore's Personal Data Protection Act (PDPA).
          </p>

          <Section title="Who we are">
            <p>
              Kravist Pte. Ltd. operates Kravist, a Krav Maga self-defence gym at 11 Irving Place, Tai Seng Point, #02-04, Singapore 369551. We can be contacted at <a href="mailto:info@kravist.sg" className="text-orange-500 hover:underline">info@kravist.sg</a>.
            </p>
          </Section>

          <Section title="Personal data we collect">
            <p>We collect personal data you provide to us directly and data generated through your use of our services, including:</p>
            <ul>
              <li><strong>Contact details:</strong> name, email address, phone number, and (for minors) parent or legal guardian details.</li>
              <li><strong>Membership and training records:</strong> classes attended, packages purchased, term enrolment, grading progress, and similar.</li>
              <li><strong>Payment information:</strong> processed by our payment provider (Stripe). We do not store full card numbers on our own systems.</li>
              <li><strong>Health and medical information:</strong> any medical conditions, injuries, or medications you disclose to us as relevant to safe participation in training.</li>
              <li><strong>Photos and video:</strong> taken during classes, events, and gradings, where consent has been given (per our Membership Agreement).</li>
              <li><strong>Website usage data:</strong> standard analytics data such as pages visited, device type, and approximate location, collected via Google Analytics.</li>
            </ul>
          </Section>

          <Section title="How we collect personal data">
            <ul>
              <li>Directly from you, when you fill out a form on our website, sign up via our member app, contact us by email or phone, or interact with us in person.</li>
              <li>From your use of our website (cookies and analytics).</li>
              <li>From third parties acting on your behalf (e.g., a parent enrolling a child).</li>
            </ul>
          </Section>

          <Section title="Why we collect personal data">
            <p>We use personal data for the following purposes:</p>
            <ul>
              <li>Managing your membership, class bookings, and training records.</li>
              <li>Communicating with you about classes, schedule changes, term updates, and member-relevant information.</li>
              <li>Processing payments and managing refunds.</li>
              <li>Marketing our services to you (you may opt out at any time).</li>
              <li>Promoting Kravist via photos and video on our website and social media, where consent has been given.</li>
              <li>Complying with legal, regulatory, and accounting obligations.</li>
              <li>Ensuring the safety of our students and instructors during training.</li>
            </ul>
          </Section>

          <Section title="Who we share personal data with">
            <p>We share personal data with third-party service providers who help us operate Kravist. These currently include:</p>
            <ul>
              <li><strong>Vibefam &amp; PushPress</strong> — our member management, booking, and communications platform.</li>
              <li><strong>Stripe</strong> — our payment processor.</li>
              <li><strong>Mailchimp</strong> — our email marketing platform.</li>
              <li><strong>Supabase and Resend</strong> — for processing website contact form submissions.</li>
              <li><strong>Google (Google Analytics)</strong> — for website usage analytics.</li>
              <li><strong>Meta (Facebook / Instagram)</strong> — for advertising, where applicable.</li>
            </ul>
            <p>We require these providers to handle your personal data in line with applicable law and our agreements with them. We do not sell your personal data.</p>
            <p>We may also disclose personal data where required by law, regulation, or court order.</p>
          </Section>

          <Section title="How long we keep personal data">
            <p>We retain personal data for as long as you are a member or enquirer of Kravist, and for a reasonable period afterwards as needed to meet legal, accounting, and operational requirements. When personal data is no longer needed, we take reasonable steps to delete or anonymise it.</p>
          </Section>

          <Section title="How we protect personal data">
            <p>We take reasonable administrative, technical, and physical measures to protect personal data from unauthorised access, use, or disclosure. While no system is perfectly secure, we work with reputable service providers and review our practices regularly.</p>
          </Section>

          <Section title="Your rights under the PDPA">
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access</strong> the personal data we hold about you.</li>
              <li><strong>Correct</strong> any personal data that is inaccurate or incomplete.</li>
              <li><strong>Withdraw consent</strong> for the collection, use, or disclosure of your personal data, including for marketing communications. Withdrawing consent for certain types of data may affect our ability to continue providing services to you.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href="mailto:info@kravist.sg" className="text-orange-500 hover:underline">info@kravist.sg</a>.</p>
          </Section>

          <Section title="Data Protection Officer">
            <p>Our Data Protection Officer can be contacted at <a href="mailto:info@kravist.sg" className="text-orange-500 hover:underline">info@kravist.sg</a>.</p>
          </Section>

          <Section title="Cookies">
            <p>Our website uses cookies for analytics and to improve your browsing experience. By using our website, you consent to the use of cookies. You can disable cookies in your browser settings, though some site features may not work as intended.</p>
          </Section>

          <Section title="Changes to this policy">
            <p>We may update this Privacy Policy from time to time. The "Last updated" date at the top will reflect the most recent change. Material changes will be communicated where appropriate.</p>
          </Section>

          <Section title="Contact">
            <p>For any questions about this Privacy Policy or our handling of personal data, contact us at <a href="mailto:info@kravist.sg" className="text-orange-500 hover:underline">info@kravist.sg</a>.</p>
          </Section>

          <p className="mt-12 text-sm text-muted-foreground">Kravist Pte. Ltd., April 2026</p>
        </article>
      </main>

      <FooterSection />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{title}</h2>
    <div className="space-y-4 text-foreground/90 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-4">
      {children}
    </div>
  </section>
);

export default Privacy;
