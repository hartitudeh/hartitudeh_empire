import { motion } from "motion/react";
import { ExternalLink, Gift, RefreshCw, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";

interface Airdrop {
  id: string;
  name: string;
  icon: string;
  description: string;
  status: "Active" | "Speculative" | "Upcoming";
  code: string | null;
  referral: string | null;
  requirements: string[];
  link: string;
}

const airdrops: Airdrop[] = [
  {
    id: "lio",
    name: "Lio",
    icon: "🦁",
    description: "Layer 2 scaling solution with mainnet live. Complete testnet transactions to qualify.",
    status: "Active",
    code: "PELUMIADEYEMI11E7O9CXVI78dY",
    referral: null,
    requirements: [
      "Download Lio app from Google Play",
      "Input the refer code and earn 1 lio",
      "Mine 4 more lio tokens everyday"
    ],
    link: "https://play.google.com/store"
  },
  {
    id: "sosovalue",
    name: "SoSoValue",
    icon: "⚡",
    description: "zkEVM rollup with active ecosystem. Interact with dApps to potentially qualify.",
    status: "Active",
    code: "27Y578K5",
    referral: null,
    requirements: [
      "Bridge to zkSync Era",
      "Use zkSync native dApps",
      "Complete multiple transactions"
    ],
    link: "https://sosovalue.com"
  },
  {
    id: "dotchain",
    name: "DOT Chain",
    icon: "🌐",
    description: "Omnichain interoperability protocol. Use LayerZero-powered bridges and apps.",
    status: "Active",
    code: null,
    referral: "Hartitudeh",
    requirements: [
      "Use Stargate Finance",
      "Try multiple LayerZero apps",
      "Bridge across chains"
    ],
    link: "https://dotchain.io"
  },
  {
    id: "qubit",
    name: "Qubit",
    icon: "🔮",
    description: "Explore MetaMask Snaps ecosystem for potential rewards.",
    status: "Speculative",
    code: null,
    referral: "DevHart",
    requirements: [
      "Install MetaMask Snaps",
      "Use Snaps features",
      "Provide feedback"
    ],
    link: "https://snaps.metamask.io"
  },
  {
    id: "sprout",
    name: "Sprout Network",
    icon: "🌱",
    description: "zkEVM Layer 2 with growing ecosystem. Early adopters may benefit.",
    status: "Active",
    code: null,
    referral: "Investorken",
    requirements: [
      "Bridge to Scroll",
      "Interact with Scroll dApps",
      "Maintain activity"
    ],
    link: "https://scroll.io"
  },
  {
    id: "tenaz",
    name: "Tenaz",
    icon: "⚡",
    description: "Coinbase's Layer 2 built on OP Stack. Active ecosystem development.",
    status: "Active",
    code: null,
    referral: "hartitudehcryptotech",
    requirements: [
      "Bridge to Base",
      "Use Base dApps",
      "Complete transactions"
    ],
    link: "https://base.org"
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
    transition: { staggerChildren: 0.1 },
  },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1 hover:bg-gold/20 rounded transition-colors"
    >
      {copied ? (
        <Check className="w-3 h-3 text-green-500" />
      ) : (
        <Copy className="w-3 h-3 text-muted-foreground" />
      )}
    </button>
  );
}

export default function AirdropsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-8 h-8 text-gold" />
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Latest <span className="text-gold">Airdrops</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Don't miss out on potential rewards. Here are the latest airdrop opportunities in the crypto space.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <RefreshCw className="w-4 h-4" />
            Updated Regularly
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {airdrops.map((airdrop) => (
            <motion.div
              key={airdrop.id}
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{airdrop.icon}</span>
                </div>
                <Badge 
                  variant={airdrop.status === "Active" ? "default" : "secondary"}
                  className={airdrop.status === "Active" 
                    ? "bg-gold/20 text-gold border border-gold/30 hover:bg-gold/30" 
                    : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  }
                >
                  {airdrop.status}
                </Badge>
              </div>

              <h3 className="font-display font-bold text-xl mb-2">{airdrop.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{airdrop.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {airdrop.code && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gold/10 border border-gold/30">
                    <span className="text-gold text-xs font-medium">Code 🎟️</span>
                    <span className="text-xs font-mono text-foreground">{airdrop.code}</span>
                    <CopyButton text={airdrop.code} />
                  </div>
                )}
                {airdrop.referral && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gold/10 border border-gold/30">
                    <span className="text-gold text-xs">👤</span>
                    <span className="text-xs font-mono text-foreground">{airdrop.referral}</span>
                    <CopyButton text={airdrop.referral} />
                  </div>
                )}
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-2 text-foreground">Requirements:</p>
                <ul className="space-y-1.5">
                  {airdrop.requirements.map((req, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-gold">.</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant="gold" 
                className="w-full"
                asChild
              >
                <a href={airdrop.link} target="_blank" rel="noopener noreferrer">
                  Join Airdrop
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}