import { motion } from "motion/react";
import { ArrowRight, Rocket, Coins, Cat, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Web3Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  features: string[];
  gradient: string;
  whatsappMessage: string;
}

const projects: Web3Project[] = [
  {
    id: "meta-whale",
    name: "META-WHALE",
    tagline: "The Future of Web3 Gaming",
    description: "Join the most exciting Web3 gaming ecosystem. META-WHALE combines blockchain technology with immersive gaming experiences for massive earning potential.",
    icon: <Rocket className="w-8 h-8" />,
    badge: "Web3 Project",
    badgeColor: "bg-blue-600",
    features: ["Play-to-Earn Mechanics", "NFT Collectibles", "Staking Rewards", "Community Governance"],
    gradient: "from-blue-600 via-purple-600 to-blue-600",
    whatsappMessage: "Hi! I'm interested in joining the META-WHALE project. Please share more details."
  },
  {
    id: "peanut-bread",
    name: "PEANUT BREAD TOKEN",
    tagline: "New Memecoin | Listed & Staked",
    description: "The tastiest memecoin in the crypto space! PEANUT BREAD TOKEN is freshly listed with attractive staking rewards. Don't miss out on this delicious opportunity.",
    icon: <Coins className="w-8 h-8" />,
    badge: "New Listing",
    badgeColor: "bg-amber-600",
    features: ["Listed on DEX", "High APY Staking", "Community Driven", "Deflationary Tokenomics"],
    gradient: "from-amber-500 via-orange-500 to-amber-500",
    whatsappMessage: "Hi! I want to invest in PEANUT BREAD TOKEN. Please tell me how to buy and stake."
  },
  {
    id: "kind-cat",
    name: "KIND CAT TOKEN",
    tagline: "Purr-fect Returns Await",
    description: "KIND CAT TOKEN is here to make the crypto world a kinder place. Invest in a community-first memecoin with real utility and charitable giving initiatives.",
    icon: <Cat className="w-8 h-8" />,
    badge: "Hot Token",
    badgeColor: "bg-pink-600",
    features: ["Charity Donations", "Auto-Staking", "Holder Rewards", "NFT Integration"],
    gradient: "from-pink-500 via-rose-500 to-pink-500",
    whatsappMessage: "Hi! I'm interested in KIND CAT TOKEN. How can I join and start earning?"
  },
];

const WHATSAPP_NUMBER = "2348067391989"; // Replace with your actual WhatsApp number

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

export default function Web3AdsSection() {
  const handleWhatsAppClick = (project: Web3Project) => {
    const encodedMessage = encodeURIComponent(project.whatsappMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-gold font-medium tracking-wide uppercase text-sm">
            Featured Projects
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-4 mb-4">
            Hot Web3 Opportunities
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these exclusive Web3 projects. Join our community and start your journey to digital wealth today.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group relative"
            >
              {/* Card with gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity blur-sm`} />
              <div className="relative p-8 rounded-2xl bg-background border border-border backdrop-blur-sm h-full flex flex-col">
                {/* Badge */}
                <Badge className={`${project.badgeColor} self-start mb-4`}>
                  {project.badge}
                </Badge>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 text-white`}>
                  {project.icon}
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-2xl mb-2">{project.name}</h3>
                <p className="text-gold text-sm font-medium mb-4">{project.tagline}</p>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{project.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant="gold"
                  className="w-full group/btn"
                  onClick={() => handleWhatsAppClick(project)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join via WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Have questions about these projects? Our team is available 24/7 to help you get started.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const message = encodeURIComponent("Hi! I want to learn more about your Web3 projects and investment opportunities.");
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
            }}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat With Us Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}