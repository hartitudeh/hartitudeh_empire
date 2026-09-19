import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Target, Eye, Heart, Award, Users, Globe, Building2, Cpu, Coins, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import CeoSection from "@/components/about/CeoSection";
import TeamSection from "@/components/about/TeamSection";

const values = [
  { 
    icon: Heart, 
    title: "Integrity & Trust", 
    description: "We uphold the highest ethical standards, transparency, and accountability in every client transaction and partnership." 
  },
  { 
    icon: Target, 
    title: "Cutting-Edge Innovation", 
    description: "We constantly pioneer new technologies, Web3 strategies, and modern real estate solutions to stay ahead of global trends." 
  },
  { 
    icon: Award, 
    title: "Uncompromising Excellence", 
    description: "We deliver exceptional quality and world-class service across all our technology, crypto, and property verticals." 
  },
  { 
    icon: Eye, 
    title: "Complete Transparency", 
    description: "We maintain clear, open communication, transparent pricing, and dependable reporting for all stakeholders." 
  },
];

const stats = [
  { value: "500+", label: "Clients & Investors Served", icon: Users },
  { value: "3", label: "Core Business Divisions", icon: Building2 },
  { value: "30+", label: "Dedicated Professionals", icon: Award },
  { value: "22+", label: "Nigerian States Reached", icon: Globe },
  { value: "10+", label: "Global Markets & Countries", icon: ShieldCheck },
];

const subBrands = [
  {
    title: "Hartitudeh Tech Solutions",
    category: "Software & Digital Media",
    icon: Cpu,
    description: "Your trusted partner in enterprise digital transformation. We engineer custom web and mobile software, brand identities, motion graphics, and high-impact digital solutions that elevate modern brands.",
    href: "/tech-solutions",
    features: ["Custom Software & Mobile App Development", "Brand Identity & Graphic Design", "Video Production & Motion Graphics", "Print Media & Digital Marketing"],
  },
  {
    title: "Hartitudeh CryptoTech & Global Exchange",
    category: "Web3 & Digital Finance",
    icon: Coins,
    description: "Navigating the future of global digital assets. We provide professional managed crypto trading, ROI-structured investment packages, Web3 project marketing, and token campaign execution.",
    href: "/cryptotech",
    features: ["Managed Crypto Asset Portfolios", "ROI Investment Management", "Web3 & Blockchain Marketing", "Airdrop Campaign Execution"],
  },
  {
    title: "Hartitudeh Homes & Properties",
    category: "Real Estate & Land Advisory",
    icon: Building2,
    description: "Building sustainable wealth through premium real estate. We deliver comprehensive property solutions including luxury residential sales, commercial leasing, land acquisitions, and property management.",
    href: "/homes-properties",
    features: ["Luxury Residential & Land Sales", "Commercial Property Leasing", "Diaspora Real Estate Advisory", "Full-Spectrum Property Management"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export default function About() {
  return (
    <Layout>
      {/* Hero Header Section */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-card via-background to-background border-b border-border">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-6"
            >
              About HARTITUDEH EMPIRE
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
            >
              Pioneering Innovation in <br />
              <span className="text-gradient-gold">Technology, Finance & Real Estate</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              HARTITUDEH EMPIRE is a premier multi-sector conglomerate engineered to deliver transformative software development, digital asset management, and high-value real estate opportunities under one unified ecosystem.
            </motion.p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16 max-w-5xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="p-5 rounded-2xl bg-card border border-border/80 shadow-md text-center hover:border-amber-500/40 transition-all"
              >
                <stat.icon className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-display font-bold text-gradient-gold mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Corporate Overview: Who We Are */}
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
                className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase text-xs"
              >
                Corporate Overview
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6 leading-tight"
              >
                A Unified Vision for <br />
                <span className="text-gradient-gold">Diverse Excellence</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-5">
                HARTITUDEH EMPIRE stands as a benchmark of growth and reliability in the contemporary commercial landscape. Built on a foundation of visionary leadership, our conglomerate combines technological precision, Web3 foresight, and tangible property assets.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-8">
                Operating through three specialized divisions—<strong>Tech Solutions</strong>, <strong>CryptoTech & Global Exchange</strong>, and <strong>Homes & Properties</strong>—we provide individuals, corporate entities, diaspora investors, and ambitious projects with end-to-end solutions designed for long-term prosperity.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button className="bg-[#19013b] hover:bg-[#2b0363] text-white font-bold px-6 py-2.5 rounded-xl shadow-md" asChild>
                  <Link to="/contact">
                    Partner With Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-border font-semibold rounded-xl" asChild>
                  <a href="#verticals">Explore Divisions</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Strategic Pillars Feature Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {[
                {
                  title: "Technology & Software",
                  desc: "Engineering custom web applications, digital branding, and enterprise tools for scale.",
                  icon: Cpu,
                },
                {
                  title: "Crypto & Web3 Growth",
                  desc: "Professional trading management, structured investment ROI plans, and token promotion.",
                  icon: Coins,
                },
                {
                  title: "Real Estate & Properties",
                  desc: "Curating verified residential estates, commercial plots, and property leasing across Nigeria.",
                  icon: Building2,
                },
              ].map((pillar) => (
                <motion.div
                  key={pillar.title}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-amber-500/40 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#19013b] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <pillar.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">{pillar.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-gradient-to-b from-card via-card to-background border-y border-border">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="p-8 rounded-3xl bg-background border border-border/80 shadow-md relative overflow-hidden group hover:border-amber-500/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To position HARTITUDEH EMPIRE as an internationally renowned multi-sector conglomerate that empowers millions of individuals and businesses through scalable technology, smart digital wealth creation, and premium real estate assets.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="p-8 rounded-3xl bg-background border border-border/80 shadow-md relative overflow-hidden group hover:border-amber-500/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#19013b]/10 border border-[#19013b]/30 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#19013b] dark:text-amber-400" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver unmatched value across technology, Web3 finance, and property sectors by enforcing strict ethical standards, cutting-edge innovation, transparent management, and client-first relationship building in all operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Verticals Deep Dive */}
      <section id="verticals" className="py-24">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span variants={fadeInUp} className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase text-xs">
              Ecosystem
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-3">
              Our Core Business Verticals
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mt-4 text-base">
              Each division operates as a specialized powerhouse while sharing the overarching credibility, security, and infrastructure of HARTITUDEH EMPIRE.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8 max-w-5xl mx-auto"
          >
            {subBrands.map((brand, index) => (
              <motion.div
                key={brand.title}
                variants={fadeInUp}
                className="p-8 md:p-10 rounded-3xl bg-card border border-border/80 shadow-md hover:shadow-xl hover:border-amber-500/40 transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                        Division 0{index + 1}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">{brand.category}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">{brand.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{brand.description}</p>

                    <Button variant="outline" className="border-[#19013b] text-[#19013b] hover:bg-[#19013b] hover:text-white font-bold rounded-xl gap-2 mt-2" asChild>
                      <Link to={brand.href}>
                        Explore Division
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="lg:w-80 w-full p-6 rounded-2xl bg-secondary/40 border border-border/60">
                    <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      Key Offerings
                    </h4>
                    <ul className="space-y-2.5">
                      {brand.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                          <span>{feature}</span>
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

      {/* Core Values */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span variants={fadeInUp} className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase text-xs">
              Our Principles
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-3">
              The Values That Guide Our Growth
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-background border border-border/80 shadow-sm text-center hover:border-amber-500/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#19013b] text-amber-400 flex items-center justify-center mx-auto mb-5 shadow-md">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CEO & Founder Section */}
      <CeoSection />

      {/* Team Leadership Section */}
      <TeamSection />

      {/* Corporate Call To Action */}
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto bg-gradient-to-r from-[#19013b] via-[#240254] to-[#19013b] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <motion.div variants={fadeInUp}>
              <Building2 className="w-14 h-14 text-amber-400 mx-auto mb-6" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Build Your Legacy With Us?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-200 max-w-xl mx-auto mb-10 leading-relaxed text-base">
              Whether you are seeking custom enterprise software, Web3 crypto management, or verified real estate investments, our team is ready to deliver.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-6 rounded-xl shadow-xl text-base" asChild>
                <Link to="/contact">
                  Contact Our Empire Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

