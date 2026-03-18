import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Home, Key, Building2, FileText, MapPin, Shield, Clock, CheckCircle, Users, Search, ChevronLeft, ChevronRight, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import realEstateHero from "@/assets/real-estate-hero.jpg";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const teamMembers = [
  {
    name: "Adebayo Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
    description: "20+ years experience in Nigerian real estate market.",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Chioma Okonkwo",
    role: "Head of Sales",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
    description: "Expert in luxury property sales and client relations.",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Emeka Nwachukwu",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
    description: "Ensures seamless property management operations.",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Funke Adeyemi",
    role: "Legal Advisor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
    description: "Specializes in property law and documentation.",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Oluwaseun Bakare",
    role: "Investment Analyst",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    description: "Expert in market analysis and investment strategies.",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Ngozi Eze",
    role: "Client Relations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
    description: "Dedicated to exceptional customer experience.",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
];

const services = [
  {
    icon: Home,
    title: "Land Sales",
    description: "Premium plots and acres in prime locations across Nigeria. Verified titles and documentation.",
    features: ["Residential Plots", "Commercial Land", "Agricultural Land", "Estate Development", "Survey & Documentation"],
  },
  {
    icon: Key,
    title: "Property Leasing",
    description: "Long-term lease options for residential and commercial properties. Flexible terms.",
    features: ["Residential Leases", "Commercial Leases", "Office Spaces", "Warehouse Leasing", "Ground Rent"],
  },
  {
    icon: Building2,
    title: "Rentals",
    description: "Quality rental properties for every budget. From apartments to luxury homes.",
    features: ["Apartments", "Duplexes", "Terrace Houses", "Bungalows", "Serviced Apartments"],
  },
  {
    icon: FileText,
    title: "Property Management",
    description: "Professional management services for property owners. Maximize your investment returns.",
    features: ["Tenant Screening", "Rent Collection", "Maintenance", "Financial Reporting", "Legal Compliance"],
  },
  {
    icon: MapPin,
    title: "Real Estate Advisory",
    description: "Expert guidance for property investments. Make informed decisions with our insights.",
    features: ["Market Analysis", "Investment Strategy", "Due Diligence", "Valuation Services", "Portfolio Management"],
  },
];

const featuredLocations = [
  "Prime Urban Centers",
  "Growing Suburban Areas",
  "Commercial Districts",
  "Waterfront Properties",
  "Developing Regions",
  "International Markets",
];

const whyChooseUs = [
  { icon: Shield, title: "Verified Properties", description: "Every listing is thoroughly verified and documented" },
  { icon: Clock, title: "Quick Process", description: "Streamlined transactions with minimal delays" },
  { icon: Users, title: "Diaspora Friendly", description: "Special services for international clients and investors" },
];

const faqs = [
  {
    question: "How do I start the property buying process?",
    answer: "The process begins with understanding your needs and budget. Contact our team for a consultation where we'll discuss your requirements, show you available properties, and guide you through financing options, documentation, and closing procedures.",
  },
  {
    question: "What documents are required for property purchase?",
    answer: "Typically, you'll need valid identification (National ID, passport, or driver's license), proof of income, bank statements, and in some cases, a letter of employment. Our team will provide a comprehensive checklist based on your specific transaction.",
  },
  {
    question: "Do you offer property management services?",
    answer: "Yes! We provide comprehensive property management services including tenant screening, rent collection, property maintenance, and regular inspections. This is ideal for property owners who want hassle-free income from their investments.",
  },
  {
    question: "How do you verify property authenticity?",
    answer: "We conduct thorough due diligence on all properties including title verification at the land registry, survey plan authentication, and verification of all relevant approvals and permits. We ensure every property we list is legitimate and free of encumbrances.",
  },
  {
    question: "What areas do you cover?",
    answer: "We currently operate primarily in Lagos and surrounding areas including Lekki, Victoria Island, Ikoyi, Ajah, and the mainland. We're expanding to other Nigerian cities. Contact us to check coverage in your preferred location.",
  },
  {
    question: "Can I invest from abroad (diaspora)?",
    answer: "Absolutely! We specialize in helping diaspora clients invest in Nigerian real estate. We handle everything from property selection to legal documentation, and provide regular updates with photos and videos throughout the process.",
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
    transition: { staggerChildren: 0.15 },
  },
};

export default function HomesProperties() {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState<"buy" | "rent" | "lease">("buy");
  const [searchLocation, setSearchLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchLocation) params.set("search", searchLocation);
    if (propertyType) params.set("type", propertyType);
    if (searchType === "buy") params.set("listing", "sale");
    else if (searchType === "rent") params.set("listing", "rent");
    else if (searchType === "lease") params.set("listing", "lease");
    
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img
            src={realEstateHero}
            alt="Luxury real estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="container px-4 relative z-10 py-32">
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
              Welcome to Hartitudeh Homes & Properties
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
            >
              Find Your
              <span className="text-gradient-gold block">Perfect Home</span>
              <span className="text-foreground/80">With Confidence</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
            >
              Your trusted partner in premium real estate. We help you buy, sell, lease, 
              and rent properties with transparency and excellence.
            </motion.p>

            {/* Search Box */}
            <motion.div
              variants={fadeInUp}
              className="bg-card/90 backdrop-blur-lg rounded-2xl p-6 border border-border max-w-3xl mx-auto"
            >
              {/* Search Type Tabs */}
              <div className="flex gap-2 mb-6">
                {(["buy", "rent", "lease"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSearchType(type)}
                    className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
                      searchType === type
                        ? "bg-gradient-to-r from-gold to-gold-dark text-primary-foreground shadow-lg"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              {/* Search Fields */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex items-center gap-3 bg-background rounded-xl px-4 py-3 border border-border">
                  <MapPin className="w-5 h-5 text-gold" />
                  <input
                    type="text"
                    placeholder="Enter location..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex items-center gap-3 bg-background rounded-xl px-4 py-3 border border-border">
                  <Home className="w-5 h-5 text-gold" />
                  <select 
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="bg-transparent outline-none text-foreground appearance-none cursor-pointer pr-4"
                  >
                    <option value="">Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="land">Land</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                <Button variant="gold" size="lg" className="gap-2" onClick={handleSearch}>
                  <Search className="w-4 h-4" />
                  Search
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { value: "500+", label: "Properties" },
                { value: "1,200+", label: "Happy Clients" },
                { value: "10+", label: "Years Experience" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <FeaturedProperties />

      {/* Our Services Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-widest uppercase"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2"
            >
              Complete <span className="text-gradient-gold">Real Estate Solutions</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-gold group-hover:shadow-gold transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium tracking-widest uppercase"
            >
              Our Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2"
            >
              Meet The <span className="text-gradient-gold">Experts</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mt-4"
            >
              Our dedicated professionals are here to guide you through every step of your real estate journey.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {teamMembers.map((member, index) => (
                  <CarouselItem key={member.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-full">
                      <div className="relative mb-6 overflow-hidden rounded-xl">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {/* Social Links on Hover */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <a
                            href={member.socials.linkedin}
                            className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                          <a
                            href={member.socials.twitter}
                            className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                          <a
                            href={member.socials.instagram}
                            className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {member.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
                <CarouselNext className="relative static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.span
                variants={fadeInUp}
                className="text-primary text-sm font-medium tracking-widest uppercase"
              >
                FAQ
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2"
              >
                Frequently Asked <span className="text-gradient-gold">Questions</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground mt-4"
              >
                Find answers to common questions about our real estate services.
              </motion.p>
            </div>

            {/* FAQ Accordion */}
            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
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
                className="text-gold font-medium tracking-wide uppercase text-sm"
              >
                Overview
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6"
              >
                Your Trusted Real Estate Partner
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-6">
                Hartitudeh Homes & Properties is dedicated to making property ownership accessible and rewarding. Whether you're looking for your first home, an investment property, or commercial space, our experienced team is here to guide you.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8">
                We specialize in serving diverse clients including individuals, investors, diaspora communities, and businesses seeking quality real estate opportunities.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {whyChooseUs.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      {/* Locations */}
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
              Coverage
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
              Properties Across Key Markets
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
              We maintain a diverse portfolio of properties across strategic locations to meet various needs and investment goals.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {featuredLocations.map((location) => (
              <motion.div
                key={location}
                variants={fadeInUp}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <MapPin className="w-5 h-5 text-gold" />
                <span className="font-medium text-foreground">{location}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto bg-gradient-to-br from-gold/10 via-background to-gold/5 rounded-3xl border border-gold/20 p-10 md:p-16 text-center"
          >
            <motion.div variants={fadeInUp}>
              <Users className="w-14 h-14 text-gold mx-auto mb-6" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold mb-4">
              Want to <span className="text-gradient-gold">List Your Property</span>?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-4 max-w-xl mx-auto">
              Become a partner and list your property on our platform for free. All listings are reviewed to ensure they meet our quality standards before going live.
            </motion.p>
            <motion.ul variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold" /> Free listing</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold" /> Quality reviewed</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold" /> Wide exposure</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold" /> Partner support</li>
            </motion.ul>
            <motion.div variants={fadeInUp}>
              <Button variant="gold" size="xl" asChild>
                <Link to="/list-property">
                  List Your Property
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
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
            <motion.div variants={fadeInUp}>
              <Home className="w-16 h-16 text-gold mx-auto mb-6" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Find Your Perfect Property?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10">
              Whether you're buying, selling, leasing, or investing, our team is ready to help you achieve your real estate goals.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Our Team
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
