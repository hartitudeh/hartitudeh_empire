import { motion } from "motion/react";
import { Linkedin, Twitter, Globe, Youtube, Instagram, Facebook } from "lucide-react";
import ceoImage from "../../assets/ceo.jpg";


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

const milestones = [
  {
    year: "2019",
    event: (
      <>
        Founded <span className="font-semibold text-foreground">Hartitudeh Empire</span> with a vision to bridge{" "}
        <span className="font-semibold text-foreground">technology, finance, and real estate</span>.
      </>
    ),
  },
  {
    year: "2021",
    event: (
      <>
        Launched <span className="font-semibold text-foreground">Hartitudeh Tech Solutions</span>, delivering{" "}
        <span className="font-semibold text-foreground">digital transformation</span> for businesses across Africa.
      </>
    ),
  },
  {
    year: "2022",
    event: (
      <>
        Expanded into <span className="font-semibold text-foreground">cryptocurrency and Web3</span> with{" "}
        <span className="font-semibold text-foreground">Hartitudeh CryptoTech &amp; Global Exchange</span>.
      </>
    ),
  },
  {
    year: "2023",
    event: (
      <>
        Entered the <span className="font-semibold text-foreground">premium real estate sector</span> with{" "}
        <span className="font-semibold text-foreground">Hartitudeh Homes &amp; Properties</span>.
      </>
    ),
  },
  {
    year: "2025",
    event: (
      <>
        Scaled to <span className="font-semibold text-foreground">30+ dedicated professionals</span> serving{" "}
        <span className="font-semibold text-foreground">500+ clients across 10+ countries</span>.
      </>
    ),
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/hartitudehempire", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/in/adeyemi-pelumi-obaloluwa", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/hartitudehtech", label: "Twitter" },
  { icon: Globe, href: "https://hartitudehempire.com", label: "Website" },
  { icon: Youtube, href: "https://youtube.com/@hartitudeh", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/hartitudehempire", label: "Instagram" },
];

export default function CeoSection() {
  return (
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
            Leadership
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-4">
            Meet The Visionary
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* CEO Photo & Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-2 text-center"
          >
             <motion.div variants={fadeInUp} className="relative inline-block mb-6">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl border-2 border-gold/30 overflow-hidden mx-auto bg-card">
                <img 
                  src={ceoImage}
                  alt="Adeyemi Pelumi Obaloluwa" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm text-center leading-tight">CEO &<br />Founder</span>
              </div> */}
            </motion.div>

            <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-display font-bold mt-4">
              Adeyemi Pelumi Obaloluwa
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-gold font-medium mt-1">
              Founder & Chief Executive Officer
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-card border border-border hover:border-gold/50 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-muted-foreground hover:text-gold transition-colors" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Biography */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-3"
          >
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-card border border-border mb-8">
              <h4 className="text-lg font-display font-bold mb-4 text-gold">The Journey</h4>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                <span className="font-semibold text-foreground">Adeyemi Pelumi Obaloluwa</span> is a dynamic entrepreneur, technology strategist, and visionary leader who founded{" "}
                <span className="font-semibold text-foreground">HARTITUDEH EMPIRE</span> with a single, audacious goal — to build a{" "}
                <span className="font-semibold text-foreground">diversified enterprise</span> that empowers individuals and businesses through{" "}
                <span className="font-semibold text-foreground">technology, finance, and real estate</span>.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Starting from humble beginnings, Pelumi identified a critical market gap for a{" "}
                <span className="font-semibold text-foreground">trusted, all-in-one solution provider</span> built for a digital-first generation. What began as a passion for{" "}
                <span className="font-semibold text-foreground">software innovation</span> quickly evolved into a{" "}
                <span className="font-semibold text-foreground">multi-vertical empire</span> serving clients globally.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Under his leadership, Hartitudeh Empire has scaled into a thriving conglomerate with{" "}
                <span className="font-semibold text-foreground">30+ dedicated professionals</span>, serving{" "}
                <span className="font-semibold text-foreground">500+ clients across 22+ states and 10+ countries</span>. His hands-on execution and{" "}
                <span className="font-semibold text-foreground">uncompromising commitment to excellence</span> drive the company's reputation for delivering results.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-card border border-border mb-8">
              <h4 className="text-lg font-display font-bold mb-4 text-gold">Vision for the Future</h4>
              <p className="text-muted-foreground leading-relaxed">
                Pelumi envisions <span className="font-semibold text-foreground">HARTITUDEH EMPIRE</span> becoming a{" "}
                <span className="font-semibold text-foreground">global household name</span> — a trusted ecosystem where anyone can access{" "}
                <span className="font-semibold text-foreground">world-class technology services</span>, build wealth through{" "}
                <span className="font-semibold text-foreground">smart crypto investments</span>, and secure their future through{" "}
                <span className="font-semibold text-foreground">verified real estate</span>, while training the next generation of African innovators.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-display font-bold mb-5 text-gold">Key Milestones</h4>
              <div className="space-y-4">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-4 items-start">
                    <span className="text-sm font-bold text-gold bg-gold/10 border border-gold/30 px-3 py-1 rounded-full whitespace-nowrap">
                      {m.year}
                    </span>
                    <p className="text-muted-foreground text-sm">{m.event}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
