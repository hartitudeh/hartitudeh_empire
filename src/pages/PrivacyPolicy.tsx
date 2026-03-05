import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeInUp}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy <span className="text-gold">Policy</span>
            </h1>
            <p className="text-muted-foreground mb-2">Last updated: March 5, 2026</p>
            <div className="h-1 w-20 bg-gradient-to-r from-gold to-gold-dark rounded-full mb-12" />
          </motion.div>

          <motion.div {...fadeInUp} className="prose prose-invert max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hartitudeh Empire ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services across our technology solutions, cryptocurrency exchange, and real estate divisions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <h3 className="font-semibold text-foreground/90 text-lg mt-4 mb-2">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may collect personally identifiable information that you voluntarily provide, including but not limited to: name, email address, phone number, mailing address, payment information, and government-issued identification for KYC (Know Your Customer) compliance in our crypto exchange services.
              </p>
              <h3 className="font-semibold text-foreground/90 text-lg mt-4 mb-2">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you access our website, we may automatically collect certain information including your IP address, browser type, operating system, access times, pages viewed, and referring URL. We may also collect information about your device and usage patterns through cookies and similar technologies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To provide, operate, and maintain our services</li>
                <li>To process transactions and send related information</li>
                <li>To comply with legal obligations, including AML and KYC regulations</li>
                <li>To send promotional communications (with your consent)</li>
                <li>To respond to inquiries and provide customer support</li>
                <li>To improve our website, products, and services</li>
                <li>To detect and prevent fraud or unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share information with trusted third-party service providers who assist us in operating our website and services, conducting our business, or serving our users. We may also disclose information when required by law, to enforce our policies, or to protect our or others' rights, property, or safety.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">6. Cookies & Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings. Disabling cookies may affect some features of our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data, as well as the right to restrict or object to certain processing activities. To exercise these rights, please contact us at info@hartitudehempire.com.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy, please contact us at:
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
