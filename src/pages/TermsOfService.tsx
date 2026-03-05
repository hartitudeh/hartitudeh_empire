import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function TermsOfService() {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeInUp}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of <span className="text-gold">Service</span>
            </h1>
            <p className="text-muted-foreground mb-2">Last updated: March 5, 2026</p>
            <div className="h-1 w-20 bg-gradient-to-r from-gold to-gold-dark rounded-full mb-12" />
          </motion.div>

          <motion.div {...fadeInUp} className="prose prose-invert max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using any services provided by Hartitudeh Empire, including our technology solutions, cryptocurrency exchange platform, and real estate services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">2. Services Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hartitudeh Empire operates three primary divisions:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li><strong className="text-foreground">Hartitudeh Tech Solutions</strong> — Software development, UI/UX design, cloud solutions, and digital innovation services.</li>
                <li><strong className="text-foreground">Hartitudeh CryptoTech & Global Exchange</strong> — Cryptocurrency trading, staking, Web3 development, and blockchain advisory services.</li>
                <li><strong className="text-foreground">Hartitudeh Homes & Properties</strong> — Real estate listings, property management, investment advisory, and development services.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information and promptly update it as necessary.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">4. Cryptocurrency Services Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cryptocurrency trading involves substantial risk of loss. Past performance does not guarantee future results. The value of digital assets can fluctuate significantly, and you may lose some or all of your investment. Hartitudeh Empire does not provide financial, investment, or legal advice. All trading decisions are made at your own risk.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">5. Real Estate Services Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Property listings and valuations provided through our platform are for informational purposes only and do not constitute professional appraisal or legal advice. We recommend engaging qualified professionals for property inspections, legal review, and financial assessment before making real estate decisions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, images, software, and other materials, is the property of Hartitudeh Empire or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">7. Prohibited Conduct</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Using our services for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempting to gain unauthorized access to our systems or other users' accounts</li>
                <li>Engaging in market manipulation, fraud, or money laundering through our crypto exchange</li>
                <li>Transmitting malware, viruses, or other harmful code</li>
                <li>Interfering with the proper functioning of our services</li>
                <li>Impersonating another person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Hartitudeh Empire shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services. Our total liability shall not exceed the amount you paid to us in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">9. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Hartitudeh Empire, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">10. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your access to our services at any time, with or without cause, and with or without notice. Upon termination, your right to use our services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising under these Terms shall be resolved through binding arbitration or in the courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">12. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Updated terms will be posted on this page with a revised date. Continued use of our services after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">13. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                <strong className="text-foreground">Hartitudeh Empire</strong><br />
                Email: info@hartitudehempire.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
