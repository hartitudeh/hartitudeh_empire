import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code, Palette, Video, Printer, Smartphone, Monitor, Lightbulb, CheckCircle, ChevronLeft, ChevronRight, ExternalLink, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import slideTech from "@/assets/slide-tech.jpg";
import slideRealEstate from "@/assets/slide-realestate.jpg";
import slideCrypto from "@/assets/slide-crypto.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const faqItems = [
  {
    question: "What services does Hartitudeh Tech Solutions offer?",
    answer: "We offer a comprehensive range of digital services including software development (web and mobile applications), graphic design and branding, video editing and motion graphics, and professional printing services. Our team handles everything from concept to delivery."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. We provide detailed timelines during the initial consultation and keep you updated throughout the development process."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer competitive pricing tailored to each project's requirements. We provide detailed quotes after understanding your needs during our initial consultation. We believe in transparent pricing with no hidden fees."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes! We provide post-launch support and maintenance packages to ensure your digital solutions continue to perform optimally. This includes bug fixes, updates, security patches, and feature enhancements as needed."
  },
  {
    question: "Can you work with existing designs or branding?",
    answer: "Absolutely! We're flexible and can work with your existing brand guidelines, designs, or start from scratch to create a completely new visual identity. Our goal is to bring your vision to life."
  },
  {
    question: "What technologies do you use for development?",
    answer: "We use modern, industry-standard technologies including React, TypeScript, Node.js, Python, and various cloud platforms. We select the best tech stack based on your project's specific requirements for optimal performance and scalability."
  },
];

const heroSlides = [
  {
    badge: "Software Development",
    title: "Building Digital",
    highlight: "Solutions",
    description: "Custom web and mobile applications built with cutting-edge technologies for maximum performance and scalability.",
    icon: Code,
    gradient: "from-blue-500/20 via-transparent to-cyan-500/20",
    background: slideTech,
  },
  {
    badge: "Graphic Design & Branding",
    title: "Creative Visual",
    highlight: "Identity",
    description: "Compelling visual identities and designs that capture your brand essence and resonate with your audience.",
    icon: Palette,
    gradient: "from-purple-500/20 via-transparent to-pink-500/20",
    background: heroBg,
  },
  {
    badge: "Video & Motion Graphics",
    title: "Stunning Video",
    highlight: "Production",
    description: "Professional video production and animation services that bring your stories to life with stunning visuals.",
    icon: Video,
    gradient: "from-orange-500/20 via-transparent to-red-500/20",
    background: slideRealEstate,
  },
  {
    badge: "Printing & Digital Media",
    title: "Premium Print",
    highlight: "Solutions",
    description: "High-quality printing solutions and digital media services for all your marketing and communication needs.",
    icon: Printer,
    gradient: "from-green-500/20 via-transparent to-teal-500/20",
    background: slideCrypto,
  },
];

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom web and mobile applications built with cutting-edge technologies for maximum performance and scalability.",
    features: ["Web Applications", "Mobile Apps (iOS & Android)", "API Development", "Cloud Solutions"],
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    description: "Compelling visual identities and designs that capture your brand essence and resonate with your audience.",
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "UI/UX Design"],
  },
  {
    icon: Video,
    title: "Video Editing & Motion Graphics",
    description: "Professional video production and animation services that bring your stories to life with stunning visuals.",
    features: ["Video Editing", "Motion Graphics", "Animation", "Social Media Content"],
  },
  {
    icon: Printer,
    title: "Printing & Digital Media",
    description: "High-quality printing solutions and digital media services for all your marketing and communication needs.",
    features: ["Business Cards", "Brochures & Flyers", "Banners & Signage", "Packaging Design"],
  },
];

const portfolioItems = [
  {
    id: "1",
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "https://example.com",
    isWebsite: true,
  },
  {
    id: "2",
    title: "Corporate Brand Identity",
    category: "Graphics",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
    isWebsite: false,
  },
  {
    id: "3",
    title: "Real Estate Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    link: "https://example.com",
    isWebsite: true,
  },
  {
    id: "4",
    title: "Promotional Video",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    isWebsite: false,
  },
  {
    id: "5",
    title: "Restaurant Menu Design",
    category: "Print",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    isWebsite: false,
  },
  {
    id: "6",
    title: "Mobile Banking App",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    link: "https://example.com",
    isWebsite: true,
  },
];

const whyChooseUs = [
  "Experienced team of developers and designers",
  "Cutting-edge technologies and best practices",
  "Agile development methodology",
  "Transparent communication and updates",
  "On-time delivery guarantee",
  "Post-launch support and maintenance",
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

export default function TechSolutions() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <Layout>
      {/* Hero Carousel Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        {/* Animated Background Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].background}
              alt={heroSlides[currentSlide].badge}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/80" />
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Gradient Overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].gradient}`}
          />
        </AnimatePresence>

        {/* Content */}
        <div className="container px-4 relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Badge with Icon */}
                <div className="flex items-center justify-center gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium">
                    {(() => {
                      const IconComponent = heroSlides[currentSlide].icon;
                      return <IconComponent className="w-4 h-4" />;
                    })()}
                    {heroSlides[currentSlide].badge}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold">
                  {heroSlides[currentSlide].title}{" "}
                  <span className="text-gradient-gold">{heroSlides[currentSlide].highlight}</span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  {heroSlides[currentSlide].description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button variant="hero" asChild>
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="heroOutline" asChild>
                    <a href="#services">View Services</a>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-background/40 transition-colors z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-background/40 transition-colors z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-gold"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
                Your Partner in Digital Transformation
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-6">
                At Hartitudeh Tech Solutions, we specialize in turning your ideas into digital reality. Our team of skilled developers, designers, and creative professionals work together to deliver solutions that not only meet but exceed expectations.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8">
                Whether you're a startup looking to establish your digital presence, an SME ready to scale, or an individual with a vision, we have the expertise and creativity to bring your projects to life.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-card border border-border text-center">
                <Monitor className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="text-2xl font-display font-bold text-foreground">200+</p>
                <p className="text-muted-foreground text-sm">Projects Completed</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-card border border-border text-center">
                <Smartphone className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="text-2xl font-display font-bold text-foreground">50+</p>
                <p className="text-muted-foreground text-sm">Mobile Apps Built</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-card border border-border text-center">
                <Lightbulb className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="text-2xl font-display font-bold text-foreground">15+</p>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-card border border-border text-center">
                <Code className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="text-2xl font-display font-bold text-foreground">100%</p>
                <p className="text-muted-foreground text-sm">Client Satisfaction</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-card">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-gold font-medium tracking-wide uppercase text-sm">
              Our Services
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-4">
              What We Offer
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-background border border-border hover:border-gold/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
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
              Our Work
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-4">
              Our Portfolio
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore some of our recent projects across web development, graphic design, video production, and print media.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item) => (
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
                    {item.category}
                  </span>
                  <h3 className="text-lg font-display font-bold mt-2">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Portfolio Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/tech-portfolio">
                View All Portfolio
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-gold font-medium tracking-wide uppercase text-sm">
              Got Questions?
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-4">
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <AccordionItem value={`item-${index}`} className="border border-border rounded-xl px-6 bg-card">
                    <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card">
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
                Why Choose Us
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-display font-bold mt-4 mb-8"
              >
                Excellence in Every Pixel
              </motion.h2>
              <motion.div variants={staggerContainer} className="space-y-4">
                {whyChooseUs.map((item) => (
                  <motion.div key={item} variants={fadeInUp} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-background border border-border text-center"
            >
              <h3 className="text-2xl font-display font-bold mb-4">Ready to Start?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your project and create something amazing together. Our team is ready to bring your vision to life.
              </p>
              <Button variant="gold" asChild>
                <Link to="/contact">
                  Contact Tech Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
