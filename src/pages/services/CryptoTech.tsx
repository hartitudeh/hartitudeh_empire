import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Coins, Megaphone, Gift, Shield, BarChart3, Lock, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { BrandThemeProvider } from "@/components/styled/ThemeProvider";
import CryptoHeroCarousel from "@/components/crypto/CryptoHeroCarousel";
import LiveCryptoMarket from "@/components/crypto/LiveCryptoMarket";
import AirdropsSection from "@/components/crypto/AirdropsSection";
import Web3AdsSection from "@/components/crypto/Web3AdsSection";

const services = [
  {
    icon: TrendingUp,
    title: "Managed Crypto Trading",
    description: (
      <>
        <span className="font-semibold text-foreground">Expert trading on your behalf</span> with proven strategies to <span className="font-semibold text-foreground">maximize returns</span> while <span className="font-semibold text-foreground">managing risk effectively</span>.
      </>
    ),
    features: ["Professional Trading Team", "Risk Management", "Regular Performance Reports", "Flexible Investment Options"],
  },
  {
    icon: BarChart3,
    title: "ROI-Based Investment Plans",
    description: (
      <>
        <span className="font-semibold text-foreground">Structured investment packages</span> designed to deliver <span className="font-semibold text-foreground">consistent returns</span> with <span className="font-semibold text-foreground">full transparency</span>.
      </>
    ),
    features: ["Multiple Investment Tiers", "Clear ROI Expectations", "Capital Protection Strategies", "Monthly Distributions"],
  },
  {
    icon: Megaphone,
    title: "Web3 Marketing & Promotion",
    description: (
      <>
        <span className="font-semibold text-foreground">Comprehensive marketing solutions</span> for blockchain projects looking to <span className="font-semibold text-foreground">increase visibility and adoption</span>.
      </>
    ),
    features: ["Community Building", "Social Media Management", "Influencer Partnerships", "PR & Media Coverage"],
  },
  {
    icon: Gift,
    title: "Airdrop Campaigns",
    description: (
      <>
        <span className="font-semibold text-foreground">End-to-end airdrop management</span> to <span className="font-semibold text-foreground">distribute tokens effectively</span> and <span className="font-semibold text-foreground">grow your project's community</span>.
      </>
    ),
    features: ["Campaign Planning", "Smart Contract Setup", "Distribution Management", "Community Engagement"],
  },
];

const trustFactors = [
  {
    icon: Shield,
    title: "Secure Custody",
    description: (
      <>
        <span className="font-semibold text-foreground">Industry-leading security protocols</span> for your digital assets.
      </>
    ),
  },
  {
    icon: Lock,
    title: "Full Transparency",
    description: (
      <>
        <span className="font-semibold text-foreground">Real-time access</span> to your portfolio and transactions.
      </>
    ),
  },
  {
    icon: BarChart3,
    title: "Proven Track Record",
    description: (
      <>
        <span className="font-semibold text-foreground">Consistent performance</span> across diverse market conditions.
      </>
    ),
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function CryptoTech() {
  return (
    <BrandThemeProvider brand="crypto">
      <Layout>
      {/* Hero Carousel Section */}
      <CryptoHeroCarousel />

      {/* Disclaimer */}
      <section className="py-6 bg-amber-500/10 border-y border-amber-500/20">
        <div className="container px-4">
          <div className="flex items-center gap-4 text-amber-500">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="text-sm">
              <strong>Important:</strong> Cryptocurrency investments carry inherent risks. Past performance is not indicative of future results. Please invest responsibly and only what you can afford to lose.
            </p>
          </div>
        </div>
      </section>

      {/* Live Crypto Market Section */}
      <LiveCryptoMarket />

      {/* Airdrops Section */}
      <AirdropsSection />

      {/* Overview */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="text-gold font-medium tracking-wide uppercase text-sm"
              >
                Overview
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6"
              >
                Your Gateway to Digital Wealth
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-6 leading-relaxed">
                <span className="font-semibold text-foreground">Hartitudeh CryptoTech & Global Exchange</span> provides <span className="font-semibold text-foreground">comprehensive cryptocurrency and Web3 services</span> for investors at all levels. Whether you're new to crypto or a seasoned investor, our <span className="font-semibold text-foreground">expert team</span> is here to help you navigate this exciting space.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 leading-relaxed">
                We combine <span className="font-semibold text-foreground">deep market expertise</span> with <span className="font-semibold text-foreground">rigorous risk management</span> to deliver <span className="font-semibold text-foreground">consistent results</span> while maintaining the highest standards of <span className="font-semibold text-foreground">security and transparency</span>.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {trustFactors.map((factor) => (
                <motion.div
                  key={factor.title}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <factor.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold mb-1">{factor.title}</h3>
                    <p className="text-muted-foreground text-sm">{factor.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Web3 Ads Section */}
      <Web3AdsSection />

      {/* Services */}
      <section id="services" className="py-24 bg-card">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-gold font-medium tracking-wide uppercase text-sm">
              Our Services
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-4">
              Comprehensive Crypto Solutions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-background border border-border hover:border-gold/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Plans Preview */}
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-gold font-medium tracking-wide uppercase text-sm">
              Investment Plans
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
              Start Your Investment Journey
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
              We offer <span className="font-semibold text-foreground">flexible investment options</span> to match your <span className="font-semibold text-foreground">goals and risk tolerance</span>. Contact our team to discuss the best plan for you.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto p-8 rounded-2xl bg-card border border-gold/30"
          >
            <div className="text-center">
              <Coins className="w-16 h-16 text-gold mx-auto mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4">Ready to Invest?</h3>
              <p className="text-muted-foreground mb-8">
                Our <span className="font-semibold text-foreground">investment specialists</span> are ready to create a <span className="font-semibold text-foreground">personalized plan</span> that aligns with your <span className="font-semibold text-foreground">financial goals</span>. Schedule a consultation to get started.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
    </BrandThemeProvider>
  );
}
