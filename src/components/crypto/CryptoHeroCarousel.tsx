import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, TrendingUp, Coins, BarChart3, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import slideCrypto from "@/assets/slide-crypto.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import slideTech from "@/assets/slide-tech.jpg";

const slides = [
  {
    badge: "CRYPTOTECH",
    title: "Hartitudeh CryptoTech",
    subtitle: "& Global Exchange",
    description: "Navigate the future of finance with expert crypto trading, investment management, and Web3 solutions designed for sustainable growth.",
    services: ["Crypto Trading", "Investment Management", "Web3 Marketing", "Blockchain"],
    cta: { text: "Start Investing", href: "/contact" },
    background: slideCrypto,
    icon: TrendingUp,
  },
  {
    badge: "TRADING",
    title: "Managed Crypto",
    subtitle: "Trading Solutions",
    description: "Expert trading on your behalf with proven strategies to maximize returns while managing risk effectively.",
    services: ["Professional Trading Team", "Risk Management", "Performance Reports", "Flexible Options"],
    cta: { text: "Start Trading", href: "/contact" },
    background: heroBg,
    icon: BarChart3,
  },
  {
    badge: "INVESTMENTS",
    title: "ROI-Based",
    subtitle: "Investment Plans",
    description: "Structured investment packages designed to deliver consistent returns with full transparency and capital protection.",
    services: ["Multiple Investment Tiers", "Clear ROI Expectations", "Capital Protection", "Monthly Distributions"],
    cta: { text: "View Plans", href: "/contact" },
    background: slideTech,
    icon: Coins,
  },
  {
    badge: "WEB3",
    title: "Web3 Marketing",
    subtitle: "& Airdrop Campaigns",
    description: "Comprehensive marketing solutions for blockchain projects looking to increase visibility and grow their community.",
    services: ["Community Building", "Social Media", "Influencer Partnerships", "Airdrop Management"],
    cta: { text: "Get Started", href: "/contact" },
    background: slideCrypto,
    icon: Gift,
  },
];

export default function CryptoHeroCarousel() {
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
  const IconComponent = slide.icon;

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
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
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
                Cryptocurrency & Web3 Solutions
              </span>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>

            {/* Badge with Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 font-semibold tracking-wide backdrop-blur-md shadow-sm">
                <IconComponent className="w-4 h-4 text-amber-400" />
                {slide.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-amber-400 mb-2 tracking-wide drop-shadow-md"
            >
              {slide.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl text-white font-display font-bold mb-6 drop-shadow-sm"
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

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to={slide.cta.href}>
                  {slide.cta.text}
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-slate-950" asChild>
                <a href="#crypto-market">View Live Market</a>
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
