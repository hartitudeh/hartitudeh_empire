import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Image as ImageIcon, Code, Video, Palette, Printer, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

type PortfolioCategory = "all" | "web" | "graphics" | "video" | "print";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  image: string;
  link?: string;
  isWebsite: boolean;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment integration and inventory management.",
    category: "web",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "https://example.com",
    isWebsite: true,
  },
  {
    id: "2",
    title: "Corporate Brand Identity",
    description: "Complete brand overhaul including logo, business cards, and brand guidelines.",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
    isWebsite: false,
  },
  {
    id: "3",
    title: "Real Estate Website",
    description: "Modern property listing website with virtual tour integration.",
    category: "web",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    link: "https://example.com",
    isWebsite: true,
  },
  {
    id: "4",
    title: "Promotional Video",
    description: "High-quality promotional video for product launch campaign.",
    category: "video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    isWebsite: false,
  },
  {
    id: "5",
    title: "Restaurant Menu Design",
    description: "Elegant menu design with food photography and print production.",
    category: "print",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    isWebsite: false,
  },
  {
    id: "6",
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication.",
    category: "web",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    link: "https://example.com",
    isWebsite: true,
  },
  {
    id: "7",
    title: "Event Branding Package",
    description: "Complete event branding including banners, flyers, and digital assets.",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
    isWebsite: false,
  },
  {
    id: "8",
    title: "Corporate Website Redesign",
    description: "Modern redesign of corporate website with improved UX and performance.",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "https://example.com",
    isWebsite: true,
  },
  {
    id: "9",
    title: "Social Media Animation",
    description: "Engaging animated content for social media marketing campaigns.",
    category: "video",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    isWebsite: false,
  },
  {
    id: "10",
    title: "Product Catalog",
    description: "Professional product catalog with photography and print layout.",
    category: "print",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    isWebsite: false,
  },
  {
    id: "11",
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling and records.",
    category: "web",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    link: "https://example.com",
    isWebsite: true,
  },
  {
    id: "12",
    title: "Album Cover Design",
    description: "Creative album artwork for music artist including vinyl packaging.",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&h=400&fit=crop",
    isWebsite: false,
  },
];

const categories = [
  { id: "all" as PortfolioCategory, label: "All Projects", icon: Filter },
  { id: "web" as PortfolioCategory, label: "Web Development", icon: Code },
  { id: "graphics" as PortfolioCategory, label: "Graphics", icon: Palette },
  { id: "video" as PortfolioCategory, label: "Video Editing", icon: Video },
  { id: "print" as PortfolioCategory, label: "Print", icon: Printer },
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

export default function TechPortfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="text-gold font-medium tracking-wide uppercase text-sm">
              Our Work
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
              Our <span className="text-gradient-gold">Portfolio</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Explore our collection of projects across web development, graphic design, video production, and print media.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sticky top-16 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gold text-background"
                    : "bg-card border border-border text-muted-foreground hover:border-gold/30 hover:text-foreground"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container px-4">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/30 transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    {item.isWebsite && item.link ? (
                      <Button variant="gold" size="sm" asChild>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Website
                        </a>
                      </Button>
                    ) : (
                      <Button variant="gold" size="sm" asChild>
                        <Link to="/tech-gallery">
                          <ImageIcon className="w-4 h-4 mr-2" />
                          View in Gallery
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-gold uppercase tracking-wide">
                    {categories.find(c => c.id === item.category)?.label}
                  </span>
                  <h3 className="text-lg font-display font-bold mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start Your Project?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-8">
              Let's create something amazing together. Contact us today to discuss your project requirements.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch
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
