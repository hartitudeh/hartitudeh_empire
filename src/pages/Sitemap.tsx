import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Home, Briefcase, Key, User, Shield, ChevronRight, Map } from "lucide-react";
import Layout from "@/components/layout/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const sitemapGroups = [
  {
    title: "Core Navigation",
    icon: Home,
    description: "Main pages and company overview",
    links: [
      { label: "Home / Welcome Page", path: "/" },
      { label: "About Hartitudeh", path: "/about" },
      { label: "Client Testimonials", path: "/testimonials" },
      { label: "Contact Us", path: "/contact" },
      { label: "Company Blog & News", path: "/blog" },
    ],
  },
  {
    title: "Our Business Verticals",
    icon: Briefcase,
    description: "Technology, crypto, and real estate services",
    links: [
      { label: "Hartitudeh Tech Solutions", path: "/tech-solutions" },
      { label: "Hartitudeh CryptoTech & Exchange", path: "/cryptotech" },
      { label: "Hartitudeh Homes & Properties", path: "/homes-properties" },
    ],
  },
  {
    title: "Real Estate Portal",
    icon: Key,
    description: "Explore listings and partner programs",
    links: [
      { label: "Browse Properties For Sale / Rent", path: "/properties" },
      { label: "List Your Property (Partner Program)", path: "/list-property" },
    ],
  },
  {
    title: "Members & Account Area",
    icon: User,
    description: "User profile dashboard and access control",
    links: [
      { label: "Sign In to Account", path: "/login" },
      { label: "Register / Create Account", path: "/signup" },
      { label: "Member Dashboard / Profile", path: "/profile" },
    ],
  },
  {
    title: "Legal & Compliance",
    icon: Shield,
    description: "Terms of service and privacy agreements",
    links: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
    ],
  },
];

export default function Sitemap() {
  return (
    <Layout>
      <section className="py-24 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-4"
            >
              Directory Map
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-display font-bold mb-4 flex items-center justify-center gap-3"
            >
              <Map className="w-10 h-10 text-gold" />
              Empire <span className="text-gradient-gold">Sitemap</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground"
            >
              Easy navigation across all portals, business divisions, and member areas of the Hartitudeh Empire ecosystem.
            </motion.p>
          </motion.div>

          {/* Links Directory */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {sitemapGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={fadeInUp}
                className="bg-card border border-border rounded-2xl p-6 hover:border-gold/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4 border-b border-border pb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <group.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">{group.title}</h3>
                    <p className="text-xs text-muted-foreground">{group.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-gold transition-colors text-sm group"
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-4px] group-hover:translate-x-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
