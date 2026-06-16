import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
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
    name: "Chinedu Okeke",
    role: "CTO, VendaPay",
    content: "HARTITUDEH Tech Solutions built our payment gateway API. The codebase is extremely clean, well-documented, and scales effortlessly under high transaction loads.",
    service: "Tech Solutions",
    rating: 5,
  },
  {
    id: 2,
    name: "Adebayo Oyelami",
    role: "Founder, FarmConnect",
    content: "Their UI/UX design team transformed our agricultural marketplace app. Since launching the redesign, user engagement has spiked by over 150% and bounce rates dropped significantly.",
    service: "Tech Solutions",
    rating: 5,
  },
  {
    id: 3,
    name: "Chioma Nwachukwu",
    role: "Product Manager, EduSolve",
    content: "They delivered our mobile application on time and within budget. Their communication was outstanding, and their engineering team demonstrated immense technical competence.",
    service: "Tech Solutions",
    rating: 5,
  },
  {
    id: 4,
    name: "Olumide Alao",
    role: "CEO, Alao Logistics",
    content: "From day one, their consulting team understood our logistics challenges. They delivered a custom database and CRM platform that has saved us thousands of operation hours.",
    service: "Tech Solutions",
    rating: 5,
  },
  {
    id: 5,
    name: "Amina Bello",
    role: "Creative Director, ModeNouveau",
    content: "The branding identity and e-commerce website they built for our luxury fashion brand helped us successfully position our services to premium international clients.",
    service: "Tech Solutions",
    rating: 5,
  },
  {
    id: 6,
    name: "Marcus Vance",
    role: "Operations Lead, GlobalFlow",
    content: "High-quality software delivery and superb Agile project management. They handled our complex database migration without a single minute of downtime.",
    service: "Tech Solutions",
    rating: 5,
  },
  {
    id: 7,
    name: "Babajide Balogun",
    role: "Founder, LagosHub",
    content: "The custom portal built by Hartitudeh Tech Solutions is robust, secure, and lightning-fast. They are hands-down the best software development agency in the region.",
    service: "Tech Solutions",
    rating: 5,
  },
  {
    id: 8,
    name: "Funmilayo Adebayo",
    role: "Marketing Lead, QuickFoods",
    content: "Our landing page conversion rate doubled within weeks of launching the new responsive website they engineered. Their SEO optimization was spot on.",
    service: "Tech Solutions",
    rating: 5,
  },
  {
    id: 9,
    name: "Kelechi Onyekwere",
    role: "Tech Lead, PayNaija",
    content: "We outsourced our complex frontend migration to their team. The React/Tailwind architecture they implemented is clean, modular, and extremely easy to maintain.",
    service: "Tech Solutions",
    rating: 5,
  },
  {
    id: 10,
    name: "Sarah Jenkins",
    role: "Founder, Bloom Media",
    content: "Working with Hartitudeh was an absolute pleasure. They took the time to understand our target demographic and delivered a beautiful, highly interactive web portfolio.",
    service: "Tech Solutions",
    rating: 5,
  },
  {
    id: 11,
    name: "Yusuf Ibrahim",
    role: "CEO, NorthernAgro",
    content: "Their software engineers successfully automated our warehouse and supply chain inventory tracking system. Complete transparency and utmost professionalism.",
    service: "Tech Solutions",
    rating: 5,
  },
  {
    id: 12,
    name: "Temitope Shonibare",
    role: "COO, FinTech Africa",
    content: "Their security integration and penetration testing services for our financial app were top-notch. They provided clear insights that helped secure our infrastructure.",
    service: "Tech Solutions",
    rating: 5,
  },

  // CryptoTech
  {
    id: 13,
    name: "Oluwaseun Ajayi",
    role: "Crypto Investor",
    content: "Hartitudeh CryptoTech has made digital asset trading simple and accessible. Their exchange rates are very competitive, and customer support is incredibly responsive.",
    service: "CryptoTech",
    rating: 5,
  },
  {
    id: 14,
    name: "Elena Rostova",
    role: "Web3 Consultant",
    content: "Their smart contract auditing services are extremely detailed. The audit report helped us patch critical vulnerabilities prior to deploying our token on mainnet.",
    service: "CryptoTech",
    rating: 5,
  },
  {
    id: 15,
    name: "Chidi Uzoma",
    role: "Day Trader",
    content: "I have been using their OTC global exchange platform for months. The transaction speed is impressive, and the security protocols give me absolute peace of mind.",
    service: "CryptoTech",
    rating: 5,
  },
  {
    id: 16,
    name: "Ngozi Okafor",
    role: "Retail Investor",
    content: "Their crypto market signals and educational courses helped me navigate the market successfully. A trustworthy guide for anyone looking to build wealth in crypto.",
    service: "CryptoTech",
    rating: 5,
  },
  {
    id: 17,
    name: "Adebisi Adeleke",
    role: "Founder, GigaDAO",
    content: "They coordinated our Web3 community management and token relaunch strategy. The marketing campaign they deployed created incredible organic engagement.",
    service: "CryptoTech",
    rating: 5,
  },
  {
    id: 18,
    name: "Tunde Bakare",
    role: "Crypto Yield Farmer",
    content: "Their passive income yield options and staking guides are fantastic. I feel completely secure trusting Hartitudeh with my long-term digital asset holding.",
    service: "CryptoTech",
    rating: 5,
  },
  {
    id: 19,
    name: "Zainab Musa",
    role: "E-commerce Merchant",
    content: "Integrating crypto payment processing on my online boutique was seamless with their custom checkout solutions. My clients love the speed and convenience.",
    service: "CryptoTech",
    rating: 5,
  },
  {
    id: 20,
    name: "David Larson",
    role: "Individual Trader",
    content: "Their execution speed and platform liquidity are top-notch. I've recommended Hartitudeh Global Exchange to several fellow traders.",
    service: "CryptoTech",
    rating: 5,
  },
  {
    id: 21,
    name: "Kofi Mensah",
    role: "Web3 Developer",
    content: "Their robust API for market data and real-time exchange rates is highly stable and incredibly easy to integrate into third-party dApps.",
    service: "CryptoTech",
    rating: 5,
  },
  {
    id: 22,
    name: "Efe Omowole",
    role: "Asset Manager",
    content: "Outstanding consulting. Their quantitative analysis of market cycles and risk management guidelines are invaluable assets to our trading group.",
    service: "CryptoTech",
    rating: 5,
  },
  {
    id: 23,
    name: "Abike Tinubu",
    role: "NFT Collector",
    content: "The launchpad and blockchain advisory team at Hartitudeh are amazing. They helped us organize, mint, and distribute our art collection securely.",
    service: "CryptoTech",
    rating: 5,
  },
  {
    id: 24,
    name: "Robert Miller",
    role: "DeFi Enthusiast",
    content: "Their customer service is outstanding. They walked me through setting up secure cold storage wallets and multi-signature security for my portfolio.",
    service: "CryptoTech",
    rating: 5,
  },

  // Homes & Properties
  {
    id: 25,
    name: "Emeka Nwosu",
    role: "Real Estate Investor",
    content: "HARTITUDEH Homes & Properties helped me acquire high-yield properties in Lekki. Their legal team verified everything, and the transfer of deed was done in days.",
    service: "Homes & Properties",
    rating: 5,
  },
  {
    id: 26,
    name: "Bisi Alabi",
    role: "Homeowner",
    content: "We purchased our beautiful family home in Lagos through their agency. Transparent terms, no hidden agency fees, and they went above and beyond for us.",
    service: "Homes & Properties",
    rating: 5,
  },
  {
    id: 27,
    name: "Chloe Henderson",
    role: "Diaspora Buyer",
    content: "Buying real estate from abroad can be nerve-wracking, but Hartitudeh provided detailed video walkthroughs, surveyor reports, and legal representation. Exceptional trust!",
    service: "Homes & Properties",
    rating: 5,
  },
  {
    id: 28,
    name: "Jide Soyinka",
    role: "Developer, PrimeSpace",
    content: "We partnered with their sales arm to market our luxury apartments. Their network of qualified buyers is impressive; they sold out our phase 1 in record time.",
    service: "Homes & Properties",
    rating: 5,
  },
  {
    id: 29,
    name: "Nkechi Egwu",
    role: "First-time Buyer",
    content: "Their flexible payment structure made owning a home in a premium estate possible for me. They answered all my questions patiently throughout the purchase.",
    service: "Homes & Properties",
    rating: 5,
  },
  {
    id: 30,
    name: "Yemi Sowemimo",
    role: "Corporate Client",
    content: "They secured our corporate headquarters lease in Abuja. Their team negotiated terms that were highly favorable and ensured the handover was flawless.",
    service: "Homes & Properties",
    rating: 5,
  },
  {
    id: 31,
    name: "Amara Eke",
    role: "Property Investor",
    content: "Their property management service is outstanding. My rental yields are collected on time, maintenance issues are solved instantly, and occupancy is always at 100%.",
    service: "Homes & Properties",
    rating: 5,
  },
  {
    id: 32,
    name: "Ibrahim Danjuma",
    role: "Land Buyer",
    content: "I bought multiple acres of commercial land through Hartitudeh. Their due diligence checks with the Ministry of Lands were fast, thorough, and highly secure.",
    service: "Homes & Properties",
    rating: 5,
  },
  {
    id: 33,
    name: "Pierre Dubois",
    role: "Expat Investor",
    content: "Excellent advisory on rental yield potential and capital appreciation. Hartitudeh's research team provided comprehensive data that made our investment decision easy.",
    service: "Homes & Properties",
    rating: 5,
  },
  {
    id: 34,
    name: "Folake Olatunji",
    role: "Diaspora Investor",
    content: "They are the gold standard of real estate in Nigeria. I received my Certificate of Occupancy and allocation documents without a single issue while in London.",
    service: "Homes & Properties",
    rating: 5,
  },
  {
    id: 35,
    name: "Uche Uzodinma",
    role: "Joint Venture Partner",
    content: "Co-developing an estate with Hartitudeh has been extremely profitable. They are organized, communicate effectively, and maintain the highest ethical standards.",
    service: "Homes & Properties",
    rating: 5,
  },
  {
    id: 36,
    name: "Christian Bauer",
    role: "Real Estate Investor",
    content: "The luxury property portfolio at Hartitudeh is outstanding. Their agents possess deep local market insight and maintain world-class communication.",
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
