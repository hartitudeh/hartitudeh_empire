import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Code, Palette, Video, Printer, Smartphone, Monitor, Lightbulb, CheckCircle, ChevronLeft, ChevronRight, ExternalLink, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import { BrandThemeProvider } from "@/components/styled/ThemeProvider";
import slideTech from "@/assets/slide-tech.jpg";
import slideRealEstate from "@/assets/slide-realestate.jpg";
import slideCrypto from "@/assets/slide-crypto.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import htVideo from "@/assets/HT-Video.mp4";

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
    badge: "Hartitudeh Tech",
    title: "Hartitudeh Tech",
    highlight: "Solutions",
    description: (
      <>
        We provide <span className="font-semibold text-white">custom software development services</span>, building tailored{" "}
        <span className="font-semibold text-white">enterprise applications</span>,{" "}
        <span className="font-semibold text-white">high-impact brand identities</span>, and{" "}
        <span className="font-semibold text-white">motion graphics</span> that help businesses{" "}
        <span className="font-semibold text-white">streamline operations</span> and <span className="font-semibold text-white">grow</span>.
      </>
    ),
    icon: Code,
    gradient: "from-blue-500/10 via-transparent to-cyan-500/10",
    background: slideTech,
    video: htVideo,
  },
  {
    badge: "Software Development",
    title: "Building Digital",
    highlight: "Solutions",
    description: (
      <>
        Custom <span className="font-semibold text-white">web and mobile applications</span> engineered with{" "}
        <span className="font-semibold text-white">modern cloud architectures</span> for maximum{" "}
        <span className="font-semibold text-white">performance, security, and scalability</span>.
      </>
    ),
    icon: Code,
    gradient: "from-blue-500/20 via-transparent to-cyan-500/20",
    background: slideTech,
  },
  {
    badge: "Graphic Design & Branding",
    title: "Creative Visual",
    highlight: "Identity",
    description: (
      <>
        High-impact logos, <span className="font-semibold text-white">brand identities</span>, and{" "}
        <span className="font-semibold text-white">custom visual design systems</span> that help your business stand out and establish{" "}
        <span className="font-semibold text-white">global credibility</span>.
      </>
    ),
    icon: Palette,
    gradient: "from-purple-500/20 via-transparent to-pink-500/20",
    background: heroBg,
  },
  {
    badge: "Video & Motion Graphics",
    title: "Stunning Video",
    highlight: "Production",
    description: (
      <>
        High-converting <span className="font-semibold text-white">video content</span>,{" "}
        <span className="font-semibold text-white">2D/3D motion graphics</span>, and promotional showcases designed to{" "}
        <span className="font-semibold text-white">captivate and convert viewers</span>.
      </>
    ),
    icon: Video,
    gradient: "from-orange-500/20 via-transparent to-red-500/20",
    background: slideRealEstate,
  },
  {
    badge: "Printing & Digital Media",
    title: "Premium Print",
    highlight: "Solutions",
    description: (
      <>
        Precision <span className="font-semibold text-white">commercial printing</span>,{" "}
        <span className="font-semibold text-white">corporate branding collateral</span>, and large-format signage for{" "}
        <span className="font-semibold text-white">unforgettable brand presence</span>.
      </>
    ),
    icon: Printer,
    gradient: "from-green-500/20 via-transparent to-teal-500/20",
    background: slideCrypto,
  },
];

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: (
      <>
        Custom <span className="font-semibold text-foreground">web applications</span>,{" "}
        <span className="font-semibold text-foreground">native &amp; cross-platform mobile apps</span>, and{" "}
        <span className="font-semibold text-foreground">enterprise software systems</span> engineered for speed, security, and scale.
      </>
    ),
    features: ["Web Applications", "Mobile Apps (iOS & Android)", "API Development", "Cloud Solutions"],
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    description: (
      <>
        High-impact logos, <span className="font-semibold text-foreground">brand identities</span>, and custom{" "}
        <span className="font-semibold text-foreground">UI/UX design systems</span> that help brands stand out and establish{" "}
        <span className="font-semibold text-foreground">global credibility</span>.
      </>
    ),
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "UI/UX Design"],
  },
  {
    icon: Video,
    title: "Video Editing & Motion Graphics",
    description: (
      <>
        High-converting <span className="font-semibold text-foreground">video production</span>, promotional showcases, and{" "}
        <span className="font-semibold text-foreground">dynamic motion graphics</span> designed to{" "}
        <span className="font-semibold text-foreground">inspire and convert viewers</span>.
      </>
    ),
    features: ["Video Editing", "Motion Graphics", "Animation", "Social Media Content"],
  },
  {
    icon: Printer,
    title: "Printing & Digital Media",
    description: (
      <>
        Premium <span className="font-semibold text-foreground">corporate printing solutions</span>,{" "}
        <span className="font-semibold text-foreground">custom packaging</span>, and high-visibility{" "}
        <span className="font-semibold text-foreground">marketing collateral</span> built to elevate your physical brand presence.
      </>
    ),
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
    }, 10000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const isVideoSlide = Boolean(heroSlides[currentSlide].video);

  return (
    <BrandThemeProvider brand="tech">
      <Layout>
      {/* Hero Carousel Section */}
      <section className="relative min-h-[85vh] py-24 lg:py-0 lg:h-[85vh] overflow-hidden bg-[#020817] flex items-center">
        {/* Animated Background Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: isVideoSlide ? 1 : 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].background}
              alt={heroSlides[currentSlide].badge}
              className={`w-full h-full object-cover ${isVideoSlide ? "opacity-25" : ""}`}
            />
            {/* High-Contrast Vignette Overlays */}
            <div className={`absolute inset-0 ${isVideoSlide ? "bg-[#020817]/85" : "bg-slate-950/60"}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/60" />
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
            className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].gradient} pointer-events-none`}
          />
        </AnimatePresence>

        {/* Content */}
        <div className="container px-6 md:px-16 relative z-10 h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isVideoSlide ? (
              <motion.div
                key="video-slide"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center"
              >
                {/* Left Column: Write-up */}
                <div className="text-center lg:text-left space-y-6">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/40 bg-amber-400/15 text-amber-300 text-sm font-semibold tracking-wide backdrop-blur-md shadow-sm">
                      <Code className="w-4 h-4 text-amber-400" />
                      {heroSlides[currentSlide].badge}
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-wide leading-tight drop-shadow-md">
                    {heroSlides[currentSlide].title}{" "}
                    <span className="text-amber-400">{heroSlides[currentSlide].highlight}</span>
                  </h1>

                  <p className="text-base md:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-sm">
                    We provide <span className="font-semibold text-white">custom software development services</span>, building tailored{" "}
                    <span className="font-semibold text-white">enterprise applications</span>,{" "}
                    <span className="font-semibold text-white">high-converting web &amp; mobile apps</span>,{" "}
                    <span className="font-semibold text-white">iconic brand identities</span>, and{" "}
                    <span className="font-semibold text-white">motion graphics</span> that help businesses{" "}
                    <span className="font-semibold text-white">solve problems, streamline operations, and grow</span>.
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                    {["Web & Mobile Apps", "UI/UX & Branding", "Video & Motion", "Print Media"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs font-medium text-white backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                    <Button variant="hero" size="xl" asChild>
                      <Link to="/contact">
                        Start Your Project
                        <ArrowRight className="w-5 h-5 ml-1" />
                      </Link>
                    </Button>
                    <Button variant="heroOutline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-slate-950" asChild>
                      <a href="#services">View Services</a>
                    </Button>
                  </div>
                </div>

                {/* Right Column: HT-Video */}
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] aspect-square rounded-3xl overflow-hidden border border-cyan-400/30 shadow-[0_0_50px_rgba(6,182,212,0.25)] bg-[#020817]">
                    <video
                      src={heroSlides[currentSlide].video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto text-center space-y-6"
              >
                {/* Badge with Icon */}
                <div className="flex items-center justify-center gap-3">
                  <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-amber-400/40 bg-amber-400/15 text-amber-300 text-sm font-semibold tracking-wide backdrop-blur-md shadow-sm">
                    {(() => {
                      const IconComponent = heroSlides[currentSlide].icon;
                      return <IconComponent className="w-4 h-4 text-amber-400" />;
                    })()}
                    {heroSlides[currentSlide].badge}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-wide drop-shadow-md">
                  {heroSlides[currentSlide].title}{" "}
                  <span className="text-amber-400">{heroSlides[currentSlide].highlight}</span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                  {heroSlides[currentSlide].description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Link>
                  </Button>
                  <Button variant="heroOutline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-slate-950" asChild>
                    <a href="#services">View Services</a>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-gold hover:text-slate-950 hover:border-gold transition-all duration-300 z-20 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-gold hover:text-slate-950 hover:border-gold transition-all duration-300 z-20 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-amber-400 shadow-md"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
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
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-6 leading-relaxed">
                As a <span className="font-semibold text-foreground">custom software and digital solutions agency</span>,{" "}
                <span className="font-semibold text-foreground">Hartitudeh Tech Solutions</span> builds tailored{" "}
                <span className="font-semibold text-foreground">web applications</span>,{" "}
                <span className="font-semibold text-foreground">mobile apps</span>, and{" "}
                <span className="font-semibold text-foreground">brand identity systems</span>. Our engineering and creative teams help businesses{" "}
                <span className="font-semibold text-foreground">automate workflows</span> and scale through{" "}
                <span className="font-semibold text-foreground">high-performance digital engineering</span>.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 leading-relaxed">
                From <span className="font-semibold text-foreground">enterprise software platforms</span> and{" "}
                <span className="font-semibold text-foreground">e-commerce storefronts</span> to{" "}
                <span className="font-semibold text-foreground">promotional video production</span> and{" "}
                <span className="font-semibold text-foreground">premium corporate printing</span>, we help startups, SMEs, and global organizations build a{" "}
                <span className="font-semibold text-foreground">commanding market presence</span>.
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
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
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
            <motion.p variants={fadeInUp} className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              Explore our <span className="font-semibold text-foreground">custom software projects</span>,{" "}
              <span className="font-semibold text-foreground">corporate brand identities</span>,{" "}
              <span className="font-semibold text-foreground">video productions</span>, and digital experiences engineered to solve real business challenges.
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
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you are launching a <span className="font-semibold text-foreground">custom web platform</span>, building a{" "}
                <span className="font-semibold text-foreground">mobile application</span>, or elevating your{" "}
                <span className="font-semibold text-foreground">brand identity</span>, our team is ready to bring your vision to life.
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
    </BrandThemeProvider>
  );
}
