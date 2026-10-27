import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Target, Eye, Heart, Award, Users, Globe, Building2, Cpu, Coins, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import CeoSection from "@/components/about/CeoSection";
import TeamSection from "@/components/about/TeamSection";

const values = [
  { 
    icon: Heart, 
    title: "Integrity & Trust", 
    description: (
      <>
        We uphold the <span className="font-semibold text-foreground">highest ethical standards</span>,{" "}
        <span className="font-semibold text-foreground">complete transparency</span>, and strict accountability in every client transaction.
      </>
    ),
  },
  { 
    icon: Target, 
    title: "Cutting-Edge Innovation", 
    description: (
      <>
        We actively engineer <span className="font-semibold text-foreground">next-generation software</span>,{" "}
        <span className="font-semibold text-foreground">Web3 strategies</span>, and modern real estate solutions to stay ahead of global trends.
      </>
    ),
  },
  { 
    icon: Award, 
    title: "Uncompromising Excellence", 
    description: (
      <>
        We reject cookie-cutter execution, delivering <span className="font-semibold text-foreground">exceptional quality</span> and{" "}
        <span className="font-semibold text-foreground">world-class service</span> across all verticals.
      </>
    ),
  },
  { 
    icon: Eye, 
    title: "Complete Transparency", 
    description: (
      <>
        We maintain <span className="font-semibold text-foreground">clear communication</span>,{" "}
        <span className="font-semibold text-foreground">verified documentation</span>, and dependable reporting for all stakeholders.
      </>
    ),
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
    description: (
      <>
        Your trusted partner in <span className="font-semibold text-foreground">enterprise digital transformation</span>. We engineer custom{" "}
        <span className="font-semibold text-foreground">web and mobile software</span>,{" "}
        <span className="font-semibold text-foreground">brand identities</span>,{" "}
        <span className="font-semibold text-foreground">motion graphics</span>, and high-impact digital products that elevate modern brands.
      </>
    ),
    href: "/tech-solutions",
    features: ["Custom Software & Mobile App Development", "Brand Identity & Graphic Design", "Video Production & Motion Graphics", "Print Media & Digital Marketing"],
  },
  {
    title: "Hartitudeh CryptoTech & Global Exchange",
    category: "Web3 & Digital Finance",
    icon: Coins,
    description: (
      <>
        Navigating the future of <span className="font-semibold text-foreground">global digital assets</span>. We provide professional{" "}
        <span className="font-semibold text-foreground">managed crypto trading</span>,{" "}
        <span className="font-semibold text-foreground">ROI-structured investment packages</span>,{" "}
        <span className="font-semibold text-foreground">Web3 project marketing</span>, and token campaign execution.
      </>
    ),
    href: "/cryptotech",
    features: ["Managed Crypto Asset Portfolios", "ROI Investment Management", "Web3 & Blockchain Marketing", "Airdrop Campaign Execution"],
  },
  {
    title: "Hartitudeh Homes & Properties",
    category: "Real Estate & Land Advisory",
    icon: Building2,
    description: (
      <>
        Building <span className="font-semibold text-foreground">sustainable wealth</span> through premium real estate. We deliver comprehensive property solutions including{" "}
        <span className="font-semibold text-foreground">luxury residential sales</span>,{" "}
        <span className="font-semibold text-foreground">commercial leasing</span>,{" "}
        <span className="font-semibold text-foreground">verified land acquisitions</span>, and full-spectrum property management.
      </>
    ),
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
              <span className="font-semibold text-foreground">HARTITUDEH EMPIRE</span> is a premier{" "}
              <span className="font-semibold text-foreground">multi-sector conglomerate</span> engineered to deliver{" "}
              <span className="font-semibold text-foreground">transformative software development</span>,{" "}
              <span className="font-semibold text-foreground">digital asset management</span>, and{" "}
              <span className="font-semibold text-foreground">high-value real estate opportunities</span> under one unified ecosystem.
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
                className="p-5 rounded-2xl bg-card border border-[#19013b] shadow-md text-center hover:border-amber-500 hover:shadow-lg transition-all"
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
                <span className="font-semibold text-foreground">HARTITUDEH EMPIRE</span> was created to help businesses and individuals{" "}
                <span className="font-semibold text-foreground">turn ambitious visions into high-performing assets</span>. Built on a foundation of visionary leadership, our conglomerate combines{" "}
                <span className="font-semibold text-foreground">technological precision</span>,{" "}
                <span className="font-semibold text-foreground">Web3 financial foresight</span>, and{" "}
                <span className="font-semibold text-foreground">tangible property investments</span>.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-8">
                Operating through three specialized divisions—
                <Link to="/tech-solutions" className="font-semibold text-[#19013b] underline decoration-[#19013b]/30 hover:text-amber-600 transition-colors">
                  Tech Solutions
                </Link>
                ,{" "}
                <Link to="/cryptotech" className="font-semibold text-[#19013b] underline decoration-[#19013b]/30 hover:text-amber-600 transition-colors">
                  CryptoTech &amp; Global Exchange
                </Link>
                , and{" "}
                <Link to="/homes-properties" className="font-semibold text-[#19013b] underline decoration-[#19013b]/30 hover:text-amber-600 transition-colors">
                  Homes &amp; Properties
                </Link>
                —we provide corporate entities, startups, and <span className="font-semibold text-foreground">diaspora investors</span> with end-to-end solutions designed for{" "}
                <span className="font-semibold text-foreground">long-term prosperity</span>.
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
                  desc: (
                    <>
                      Engineering <span className="font-semibold text-foreground">custom web applications</span>,{" "}
                      <span className="font-semibold text-foreground">digital branding</span>, and enterprise tools built to scale.
                    </>
                  ),
                  icon: Cpu,
                },
                {
                  title: "Crypto & Web3 Growth",
                  desc: (
                    <>
                      Professional <span className="font-semibold text-foreground">trading management</span>,{" "}
                      <span className="font-semibold text-foreground">structured ROI plans</span>, and blockchain token promotion.
                    </>
                  ),
                  icon: Coins,
                },
                {
                  title: "Real Estate & Properties",
                  desc: (
                    <>
                      Curating <span className="font-semibold text-foreground">verified residential estates</span>,{" "}
                      <span className="font-semibold text-foreground">commercial plots</span>, and property leasing across Nigeria.
                    </>
                  ),
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
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-3xl bg-background border border-border/80 shadow-md relative overflow-hidden group hover:border-amber-500/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To position <span className="font-semibold text-foreground">HARTITUDEH EMPIRE</span> as an{" "}
                <span className="font-semibold text-foreground">internationally recognized conglomerate</span> that empowers millions of individuals and businesses through{" "}
                <span className="font-semibold text-foreground">scalable technology</span>,{" "}
                <span className="font-semibold text-foreground">smart digital wealth creation</span>, and{" "}
                <span className="font-semibold text-foreground">premium real estate assets</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-3xl bg-background border border-border/80 shadow-md relative overflow-hidden group hover:border-amber-500/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#19013b]/10 border border-[#19013b]/30 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#19013b] dark:text-amber-400" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver <span className="font-semibold text-foreground">unmatched value</span> across technology, Web3 finance, and property sectors by enforcing{" "}
                <span className="font-semibold text-foreground">strict ethical standards</span>,{" "}
                <span className="font-semibold text-foreground">cutting-edge innovation</span>,{" "}
                <span className="font-semibold text-foreground">transparent management</span>, and client-first partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Verticals Deep Dive */}
      <section id="verticals" className="py-24">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase text-xs">
              Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
              Our Core Business Verticals
            </h2>
            <p className="text-muted-foreground mt-4 text-base">
              Each division operates as a <span className="font-semibold text-foreground">specialized powerhouse</span> while sharing the overarching{" "}
              <span className="font-semibold text-foreground">credibility, security, and enterprise infrastructure</span> of HARTITUDEH EMPIRE.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 max-w-5xl mx-auto"
          >
            {subBrands.map((brand, index) => (
              <div
                key={brand.title}
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
                    <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wider mb-4">
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
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase text-xs">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
              The Values That Guide Our Growth
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-background border border-[#19013b]/30 shadow-md text-center hover:border-amber-500 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#19013b] text-amber-400 flex items-center justify-center mx-auto mb-5 shadow-md">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO & Founder Section */}
      <CeoSection />

      {/* Team Leadership Section */}
      <TeamSection />

      {/* Corporate Call To Action */}
      <section className="py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#19013b] via-[#240254] to-[#19013b] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div>
              <Building2 className="w-14 h-14 text-amber-400 mx-auto mb-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Build Your Legacy With Us?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed text-base">
              Whether you are seeking <span className="font-semibold text-white">custom enterprise software</span>,{" "}
              <span className="font-semibold text-white">Web3 crypto management</span>, or{" "}
              <span className="font-semibold text-white">verified real estate investments</span>, our team is ready to{" "}
              <span className="font-semibold text-white">deliver measurable results</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-6 rounded-xl shadow-xl text-base" asChild>
                <Link to="/contact">
                  Contact Our Empire Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

