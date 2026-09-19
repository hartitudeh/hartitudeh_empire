import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import slideTech from "@/assets/slide-tech.jpg";
import slideCrypto from "@/assets/slide-crypto.jpg";
import slideRealEstate from "@/assets/slide-realestate.jpg";

const slides = [
  {
    badge: "EMPIRE",
    title: "HARTITUDEH EMPIRE",
    subtitle: "One Empire, Endless Possibilities",
    description: "A diversified holding company driving innovation across technology, cryptocurrency, and real estate. Your trusted partner for success.",
    services: ["Tech Solutions", "Crypto Trading", "Real Estate", "Investment Advisory"],
    cta: { text: "Discover More", href: "/about" },
    background: heroBg,
  },
  {
    badge: "TECHNOLOGY",
    title: "Tech Solutions",
    subtitle: "Digital Innovation That Delivers",
    description: "Software development, graphic design, video editing, and cutting-edge digital solutions that transform your business vision into reality.",
    services: ["Software Development", "Graphic Design", "Video Editing", "Web Development"],
    cta: { text: "Explore Tech", href: "/tech-solutions" },
    background: slideTech,
  },
  {
    badge: "CRYPTO",
    title: "CryptoTech & Exchange",
    subtitle: "Secure Your Digital Future",
    description: "Expert crypto trading, ROI-based investment management, Web3 marketing, and blockchain solutions for the modern investor.",
    services: ["Crypto Trading", "Investment Management", "Web3 Marketing", "Blockchain"],
    cta: { text: "Start Trading", href: "/cryptotech" },
    background: slideCrypto,
  },
  {
    badge: "REAL ESTATE",
    title: "Homes & Properties",
    subtitle: "Premium Real Estate Opportunities",
    description: "Discover exceptional property investments, from luxury homes to commercial real estate. Expert guidance for property sales, leasing, and consulting.",
    services: ["Property Sales", "Leasing", "Investment Consulting", "Property Management"],
    cta: { text: "View Properties", href: "/homes-properties" },
    background: slideRealEstate,
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slide.background}
            alt="Slide background"
            className="w-full h-full object-cover"
          />
          {/* Sharp High-Contrast Vignette Overlays */}
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/60" />
        </motion.div>
      </AnimatePresence>

      {/* Side Arrow Navigation - Left */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md flex items-center justify-center hover:bg-gold hover:text-slate-950 hover:border-gold transition-all duration-300 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Side Arrow Navigation - Right */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md flex items-center justify-center hover:bg-gold hover:text-slate-950 hover:border-gold transition-all duration-300 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-16 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Welcome text with sparkles */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm md:text-base tracking-widest uppercase">
                Welcome to HARTITUDEH EMPIRE
              </span>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 font-semibold tracking-wide backdrop-blur-md shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                {slide.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-amber-400 mb-4 tracking-wide drop-shadow-md"
            >
              {slide.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-3xl text-white font-medium mb-4 drop-shadow-sm"
            >
              {slide.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-200 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
            >
              {slide.description}
            </motion.p>

            {/* Service Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-10"
            >
              {slide.services.map((service) => (
                <span
                  key={service}
                  className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-sm text-white backdrop-blur-md hover:border-amber-400/50 transition-colors shadow-sm"
                >
                  {service}
                </span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to={slide.cta.href}>
                  {slide.cta.text}
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-amber-400 shadow-md"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
