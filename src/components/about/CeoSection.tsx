import { motion } from "framer-motion";
import { Linkedin, Twitter, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  { year: "2019", event: "Founded Hartitudeh Empire with a vision to bridge technology, finance, and real estate." },
  { year: "2021", event: "Launched Hartitudeh Tech Solutions, delivering digital transformation for businesses across Africa." },
  { year: "2022", event: "Expanded into cryptocurrency and Web3 with Hartitudeh CryptoTech & Global Exchange." },
  { year: "2023", event: "Entered the real estate sector with Hartitudeh Homes & Properties." },
  { year: "2025", event: "Grew to 50+ team members serving 500+ clients across 10+ countries." },
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
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl border-2 border-gold/30 overflow-hidden mx-auto bg-card">
                <Avatar className="w-full h-full rounded-2xl">
                  <AvatarImage src="" alt="Adeyemi Pelumi Obaloluwa" className="object-cover" />
                  <AvatarFallback className="text-5xl font-display bg-gold/10 text-gold rounded-2xl w-full h-full">
                    APO
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                <span className="text-gold font-display font-bold text-sm text-center leading-tight">CEO &<br />Founder</span>
              </div>
            </motion.div>

            <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-display font-bold mt-4">
              Adeyemi Pelumi Obaloluwa
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-gold font-medium mt-1">
              Founder & Chief Executive Officer
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mt-5">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
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
              <p className="text-muted-foreground mb-4">
                Adeyemi Pelumi Obaloluwa is a dynamic entrepreneur, tech enthusiast, and visionary leader who founded HARTITUDEH EMPIRE with a single, audacious goal — to build a diversified enterprise that empowers individuals and businesses through technology, finance, and real estate.
              </p>
              <p className="text-muted-foreground mb-4">
                Starting from humble beginnings, Pelumi identified a gap in the market for a trusted, all-in-one solution provider that could serve the evolving needs of a digital-first generation. What began as a passion for technology and innovation quickly evolved into a multi-vertical empire spanning three continents.
              </p>
              <p className="text-muted-foreground">
                Under his leadership, Hartitudeh Empire has grown from a solo venture into a thriving enterprise with over 50 team members, serving 500+ clients across 10+ countries. His hands-on approach, relentless work ethic, and commitment to excellence have been the driving forces behind the company's rapid growth and reputation for delivering results.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-card border border-border mb-8">
              <h4 className="text-lg font-display font-bold mb-4 text-gold">Vision for the Future</h4>
              <p className="text-muted-foreground">
                Pelumi envisions HARTITUDEH EMPIRE becoming a global household name — a trusted ecosystem where anyone can access world-class technology services, build wealth through smart crypto investments, and secure their future through premium real estate. The next chapter includes expanding into new markets, launching innovative fintech products, and establishing a Hartitudeh Academy to train the next generation of African entrepreneurs.
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
