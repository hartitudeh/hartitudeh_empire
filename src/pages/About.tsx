import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart, Award, Users, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import CeoSection from "@/components/about/CeoSection";

const values = [
  { icon: Heart, title: "Integrity", description: "We uphold the highest ethical standards in all our dealings." },
  { icon: Target, title: "Innovation", description: "We constantly push boundaries to deliver cutting-edge solutions." },
  { icon: Award, title: "Excellence", description: "We strive for perfection in every service we provide." },
  { icon: Eye, title: "Transparency", description: "We believe in open, honest communication with all stakeholders." },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "3", label: "Business Verticals" },
  { value: "50+", label: "Team Members" },
  { value: "10+", label: "Countries Reached" },
];

const subBrands = [
  {
    title: "Hartitudeh Tech Solutions",
    description: "Your partner in digital transformation. We specialize in software development, graphic design, video editing, and comprehensive digital solutions that bring your imagination to life.",
    href: "/tech-solutions",
    features: ["Web & Mobile Development", "Graphic Design & Branding", "Video Editing & Motion Graphics", "Digital Media Solutions"],
  },
  {
    title: "Hartitudeh CryptoTech & Global Exchange",
    description: "Navigating the future of finance. We offer crypto trading services, ROI-based investment management, Web3 marketing, and airdrop campaign solutions.",
    href: "/cryptotech",
    features: ["Managed Crypto Trading", "ROI Investment Plans", "Web3 Project Marketing", "Airdrop Campaigns"],
  },
  {
    title: "Hartitudeh Homes & Properties",
    description: "Building your future through real estate. We provide comprehensive property services including sales, leasing, rentals, and investment consulting.",
    href: "/homes-properties",
    features: ["Property Sales", "Land & House Leasing", "Property Rentals", "Real Estate Consulting"],
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

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6"
            >
              About Us
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              The Story of{" "}
              <span className="text-gradient-gold">HARTITUDEH EMPIRE</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A diversified emporium delivering technology, digital innovation, crypto investment solutions, and real estate opportunities — all under one trusted ecosystem.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
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
                Who We Are
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6"
              >
                A Unified Vision for Diverse Excellence
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-6">
                HARTITUDEH EMPIRE stands as a beacon of innovation and trust in the modern business landscape. Founded with the vision of creating a multi-faceted enterprise that serves diverse needs, we have grown into a comprehensive solution provider.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8">
                Our empire encompasses three powerful verticals: Technology & Creative Services, Cryptocurrency & Web3 Solutions, and Real Estate. Each division operates with autonomy while benefiting from the collective strength, credibility, and resources of the HARTITUDEH brand.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button variant="gold" asChild>
                  <Link to="/contact">
                    Get In Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="p-6 rounded-2xl bg-card border border-border text-center"
                >
                  <p className="text-4xl font-display font-bold text-gold mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-card">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="p-8 rounded-2xl bg-background border border-border"
            >
              <motion.div variants={fadeInUp} className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </motion.div>
              <motion.h3 variants={fadeInUp} className="text-2xl font-display font-bold mb-4">Our Vision</motion.h3>
              <motion.p variants={fadeInUp} className="text-muted-foreground">
                To become the most trusted and innovative multi-sector enterprise, empowering individuals and businesses worldwide through technology, financial growth, and property ownership.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="p-8 rounded-2xl bg-background border border-border"
            >
              <motion.div variants={fadeInUp} className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </motion.div>
              <motion.h3 variants={fadeInUp} className="text-2xl font-display font-bold mb-4">Our Mission</motion.h3>
              <motion.p variants={fadeInUp} className="text-muted-foreground">
                To deliver exceptional value across technology, cryptocurrency, and real estate sectors, maintaining the highest standards of integrity, innovation, and customer satisfaction in every interaction.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
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
              What We Do
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-4">
              Our Business Verticals
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {subBrands.map((brand, index) => (
              <motion.div
                key={brand.title}
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <span className="text-gold font-medium text-sm">0{index + 1}</span>
                    <h3 className="text-2xl font-display font-bold mt-2 mb-4">{brand.title}</h3>
                    <p className="text-muted-foreground mb-6">{brand.description}</p>
                    <Button variant="goldOutline" size="sm" asChild>
                      <Link to={brand.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="lg:w-80">
                    <h4 className="font-semibold mb-4 text-foreground">Key Services:</h4>
                    <ul className="space-y-2">
                      {brand.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-card">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-gold font-medium tracking-wide uppercase text-sm">
              Our Values
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-4">
              The Principles We Live By
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-background border border-border text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CEO Section */}
      <CeoSection />

      {/* CTA */}
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Partner With Us?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10">
              Whether you need cutting-edge technology, crypto investment opportunities, or prime real estate, we're here to help you succeed.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Our Team
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
