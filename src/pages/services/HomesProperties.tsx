import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Home, Key, Building2, FileText, MapPin, Shield, Clock, CheckCircle, Users, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { BrandThemeProvider } from "@/components/styled/ThemeProvider";
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



const services = [
  {
    icon: Home,
    title: "Land Sales",
    description: (
      <>
        <span className="font-semibold text-foreground">Premium plots and acres</span> in prime locations across Nigeria with <span className="font-semibold text-foreground">verified titles and documentation</span>.
      </>
    ),
    features: ["Residential Plots", "Commercial Land", "Agricultural Land", "Estate Development", "Survey & Documentation"],
  },
  {
    icon: Key,
    title: "Property Leasing",
    description: (
      <>
        <span className="font-semibold text-foreground">Long-term lease options</span> for residential and commercial properties with <span className="font-semibold text-foreground">flexible terms</span>.
      </>
    ),
    features: ["Residential Leases", "Commercial Leases", "Office Spaces", "Warehouse Leasing", "Ground Rent"],
  },
  {
    icon: Building2,
    title: "Rentals",
    description: (
      <>
        <span className="font-semibold text-foreground">Quality rental properties</span> for every budget, ranging from <span className="font-semibold text-foreground">modern apartments to luxury homes</span>.
      </>
    ),
    features: ["Apartments", "Duplexes", "Terrace Houses", "Bungalows", "Serviced Apartments"],
  },
  {
    icon: FileText,
    title: "Property Management",
    description: (
      <>
        <span className="font-semibold text-foreground">Professional management services</span> for property owners designed to <span className="font-semibold text-foreground">maximize your investment returns</span>.
      </>
    ),
    features: ["Tenant Screening", "Rent Collection", "Maintenance", "Financial Reporting", "Legal Compliance"],
  },
  {
    icon: MapPin,
    title: "Real Estate Advisory",
    description: (
      <>
        <span className="font-semibold text-foreground">Expert guidance</span> for property investments so you can <span className="font-semibold text-foreground">make informed decisions</span> with our market insights.
      </>
    ),
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
  {
    icon: Shield,
    title: "Verified Properties",
    description: (
      <>
        Every listing is <span className="font-semibold text-foreground">thoroughly verified and documented</span>.
      </>
    ),
  },
  {
    icon: Clock,
    title: "Quick Process",
    description: (
      <>
        <span className="font-semibold text-foreground">Streamlined transactions</span> with minimal delays.
      </>
    ),
  },
  {
    icon: Users,
    title: "Diaspora Friendly",
    description: (
      <>
        <span className="font-semibold text-foreground">Dedicated concierge services</span> for international clients and investors.
      </>
    ),
  },
];

const faqs = [
  {
    question: "How do I start the property buying process?",
    answer: (
      <>
        The process begins with understanding your <span className="font-semibold text-foreground">specific needs and budget</span>. Contact our team for a <span className="font-semibold text-foreground">personalized consultation</span> where we'll discuss your requirements, showcase <span className="font-semibold text-foreground">verified properties</span>, and guide you through financing options, legal documentation, and closing procedures.
      </>
    ),
  },
  {
    question: "What documents are required for property purchase?",
    answer: (
      <>
        Typically, you'll need <span className="font-semibold text-foreground">valid government identification</span> (National ID, passport, or driver's license), <span className="font-semibold text-foreground">proof of income</span>, bank statements, and in some cases, a letter of employment. Our team provides a <span className="font-semibold text-foreground">comprehensive checklist</span> tailored to your specific transaction.
      </>
    ),
  },
  {
    question: "Do you offer property management services?",
    answer: (
      <>
        Yes! We provide <span className="font-semibold text-foreground">end-to-end property management services</span> including <span className="font-semibold text-foreground">tenant screening, rent collection, routine maintenance, and regular inspections</span>—ideal for property owners seeking <span className="font-semibold text-foreground">hassle-free passive income</span>.
      </>
    ),
  },
  {
    question: "How do you verify property authenticity?",
    answer: (
      <>
        We conduct <span className="font-semibold text-foreground">rigorous legal due diligence</span> on all properties, including <span className="font-semibold text-foreground">title verification at the land registry</span>, <span className="font-semibold text-foreground">survey plan authentication</span>, and verification of government approvals—ensuring every property is <span className="font-semibold text-foreground">100% legitimate and free of encumbrances</span>.
      </>
    ),
  },
  {
    question: "What areas do you cover?",
    answer: (
      <>
        We operate across <span className="font-semibold text-foreground">Lagos and prime surrounding corridors</span> including <span className="font-semibold text-foreground">Lekki, Victoria Island, Ikoyi, Ajah, and the Mainland</span>, as well as <span className="font-semibold text-foreground">Abuja and other major Nigerian cities</span>. Contact us to check availability in your preferred location.
      </>
    ),
  },
  {
    question: "Can I invest from abroad (diaspora)?",
    answer: (
      <>
        Absolutely! We specialize in helping <span className="font-semibold text-foreground">diaspora clients invest safely in Nigerian real estate</span>. We handle everything from <span className="font-semibold text-foreground">property selection to legal documentation</span> and provide <span className="font-semibold text-foreground">regular video and photo inspections</span> throughout the entire process.
      </>
    ),
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
    <BrandThemeProvider brand="real-estate">
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
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/60" />
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
              className="inline-block px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-sm font-medium mb-6"
            >
              Welcome to Hartitudeh Homes & Properties
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-white"
            >
              Find Your{" "}
              <span className="text-gradient-gold block">Perfect Home</span>
              <span className="text-white">With Confidence</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-300 max-w-xl mx-auto mb-10"
            >
              Your trusted partner in <span className="font-semibold text-white">premium real estate</span>. We help you <span className="font-semibold text-white">buy, sell, lease, and rent properties</span> with <span className="font-semibold text-white">transparency and excellence</span>.
            </motion.p>

            {/* Search Box */}
            <motion.div
              variants={fadeInUp}
              className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 shadow-2xl max-w-3xl mx-auto"
            >
              {/* Search Type Tabs */}
              <div className="flex gap-2 mb-6">
                {(["buy", "rent", "lease"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSearchType(type)}
                    className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
                      searchType === type
                        ? "bg-gradient-to-r from-gold to-gold-dark text-slate-950 shadow-lg"
                        : "bg-slate-800/80 text-slate-300 hover:text-white"
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              {/* Search Fields */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex items-center gap-3 bg-slate-950/90 rounded-xl px-4 py-3 border border-slate-800">
                  <MapPin className="w-5 h-5 text-gold" />
                  <input
                    type="text"
                    placeholder="Enter location..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="flex items-center gap-3 bg-slate-950/90 rounded-xl px-4 py-3 border border-slate-800">
                  <Home className="w-5 h-5 text-gold" />
                  <select 
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="bg-transparent outline-none text-white appearance-none cursor-pointer pr-4"
                  >
                    <option value="" className="bg-slate-900 text-white">Property Type</option>
                    <option value="house" className="bg-slate-900 text-white">House</option>
                    <option value="apartment" className="bg-slate-900 text-white">Apartment</option>
                    <option value="land" className="bg-slate-900 text-white">Land</option>
                    <option value="commercial" className="bg-slate-900 text-white">Commercial</option>
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
                  <div className="text-slate-300 text-sm mt-1">{stat.label}</div>
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
                Find clear answers to <span className="font-semibold text-foreground">common questions</span> about our <span className="font-semibold text-foreground">real estate services and property verification process</span>.
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
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-6 leading-relaxed">
                <span className="font-semibold text-foreground">Hartitudeh Homes & Properties</span> is dedicated to making <span className="font-semibold text-foreground">property ownership accessible and rewarding</span>. Whether you're looking for your <span className="font-semibold text-foreground">first home, a high-yield investment property, or prime commercial space</span>, our experienced team is here to guide you.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 leading-relaxed">
                We specialize in serving <span className="font-semibold text-foreground">diverse clients</span> including <span className="font-semibold text-foreground">individuals, institutional investors, diaspora communities, and corporate businesses</span> seeking verified real estate opportunities.
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
              We maintain a <span className="font-semibold text-foreground">diverse portfolio of verified properties</span> across <span className="font-semibold text-foreground">strategic locations</span> to meet your lifestyle and <span className="font-semibold text-foreground">long-term investment goals</span>.
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
              Become a partner and <span className="font-semibold text-foreground">list your property on our platform for free</span>. All listings are <span className="font-semibold text-foreground">rigorously reviewed</span> to ensure they meet our <span className="font-semibold text-foreground">quality and title standards</span> before going live.
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
              Whether you're <span className="font-semibold text-foreground">buying, selling, leasing, or investing</span>, our team is ready to help you <span className="font-semibold text-foreground">achieve your real estate goals</span>.
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
    </BrandThemeProvider>
  );
}
