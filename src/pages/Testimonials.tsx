import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const allTestimonials = [
  // Tech Solutions
  {
    id: 1,
    name: "Michael Chen",
    role: "CEO, TechStart Inc.",
    content: "HARTITUDEH Tech Solutions completely transformed our digital presence. Their team delivered a stunning website and mobile app that exceeded our expectations. The attention to detail and innovative approach sets them apart.",
    service: "Tech Solutions",
    rating: 5,
  },
  {
    id: 2,
    name: "Amanda Foster",
    role: "Marketing Director, BrandX",
    content: "The graphic design and branding work was exceptional. They captured our brand essence perfectly and delivered assets that truly stand out in the market.",
    service: "Tech Solutions",
    rating: 5,
  },
  {
    id: 3,
    name: "David Park",
    role: "Founder, CreativeFlow",
    content: "Their video editing team is phenomenal. The motion graphics and promotional videos they created helped us increase engagement by 300%.",
    service: "Tech Solutions",
    rating: 5,
  },
  // CryptoTech
  {
    id: 4,
    name: "Sarah Williams",
    role: "Crypto Investor",
    content: "The ROI from their crypto trading services has been exceptional. Their team is transparent, knowledgeable, and truly cares about client success. Highly recommended for anyone looking to enter the crypto space.",
    service: "CryptoTech",
    rating: 5,
  },
  {
    id: 5,
    name: "Robert Martinez",
    role: "Web3 Project Lead",
    content: "Their Web3 marketing strategies helped our project gain massive visibility. The airdrop campaign they managed was seamlessly executed and brought in thousands of new users.",
    service: "CryptoTech",
    rating: 5,
  },
  {
    id: 6,
    name: "Jennifer Liu",
    role: "Private Investor",
    content: "I was new to cryptocurrency and their team made the entire process simple and stress-free. Their managed trading service has provided consistent returns.",
    service: "CryptoTech",
    rating: 5,
  },
  // Homes & Properties
  {
    id: 7,
    name: "James Okonkwo",
    role: "Property Investor",
    content: "Found my dream investment property through their real estate team. The process was seamless from property viewing to final documentation. They truly understand the market.",
    service: "Homes & Properties",
    rating: 5,
  },
  {
    id: 8,
    name: "Patricia Adams",
    role: "First-time Homebuyer",
    content: "As a first-time buyer, I was nervous about the process. Their team guided me every step of the way and found me a beautiful home within my budget.",
    service: "Homes & Properties",
    rating: 5,
  },
  {
    id: 9,
    name: "Emmanuel Adeyemi",
    role: "Diaspora Client",
    content: "Being overseas, I needed a trustworthy partner to help me invest in property back home. HARTITUDEH delivered beyond my expectations with complete transparency.",
    service: "Homes & Properties",
    rating: 5,
  },
];

const filters = ["All", "Tech Solutions", "CryptoTech", "Homes & Properties"];

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

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTestimonials = activeFilter === "All"
    ? allTestimonials
    : allTestimonials.filter((t) => t.service === activeFilter);

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
              Client Stories
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              Trusted by{" "}
              <span className="text-gradient-gold">Hundreds</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Hear what our clients have to say about their experience with HARTITUDEH EMPIRE across all our service verticals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-lg z-40">
        <div className="container px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex-shrink-0 ${
                  activeFilter === filter
                    ? "bg-gold text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid / Carousel */}
      <section className="py-24">
        <div className="container px-4">
          {activeFilter === "All" ? (
            <motion.div
              key={activeFilter}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={fadeInUp}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/30">
                      {testimonial.service}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {filteredTestimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors h-full">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                          <span className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/30">
                            {testimonial.service}
                          </span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-8">
                  <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 border-gold/30 hover:bg-gold hover:text-primary-foreground" />
                  <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 border-gold/30 hover:bg-gold hover:text-primary-foreground" />
                </div>
              </Carousel>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-display font-bold mb-6"
            >
              Ready to Join Our Success Stories?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-10"
            >
              Start your journey with HARTITUDEH EMPIRE today and become our next success story.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started Today
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
