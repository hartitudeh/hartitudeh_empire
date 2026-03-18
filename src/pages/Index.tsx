import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Code, TrendingUp, Home, Shield, Zap, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/home/HeroCarousel";

const services = [
  {
    icon: Code,
    title: "Hartitudeh Tech Solutions",
    description: "Software development, graphic design, video editing, and digital innovation that brings your ideas to life.",
    href: "/tech-solutions",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "CryptoTech & Global Exchange",
    description: "Crypto trading, ROI-based investment management, Web3 marketing, and blockchain solutions.",
    href: "/cryptotech",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Home,
    title: "Homes & Properties",
    description: "Premium real estate opportunities including property sales, leasing, and investment consulting.",
    href: "/homes-properties",
    color: "from-emerald-500 to-teal-500",
  },
];

const values = [
  { icon: Shield, title: "Trust", description: "Building lasting relationships through transparency and reliability" },
  { icon: Zap, title: "Innovation", description: "Pioneering solutions that push boundaries and create value" },
  { icon: Globe, title: "Excellence", description: "Delivering world-class services across all our ventures" },
  { icon: Users, title: "Transparency", description: "Clear communication and honest dealings at every step" },
];

const testimonials = [
  {
    name: "Michael Chen",
    role: "CEO, TechStart Inc.",
    content: "HARTITUDEH EMPIRE transformed our digital presence completely. Their tech solutions team delivered beyond expectations.",
    service: "Tech Solutions",
  },
  {
    name: "Sarah Williams",
    role: "Crypto Investor",
    content: "The ROI from their crypto trading services has been exceptional. Trustworthy and professional.",
    service: "CryptoTech",
  },
  {
    name: "James Okonkwo",
    role: "Property Investor",
    content: "Found my dream investment property through their real estate team. Seamless experience from start to finish.",
    service: "Homes & Properties",
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
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Index() {
  return (
    <Layout>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* About Empire Summary */}
      <section className="py-24 bg-card">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-gold font-medium tracking-wide uppercase text-sm"
            >
              About The Empire
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6"
            >
              One Vision, Multiple Verticals
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg">
              HARTITUDEH EMPIRE is a multi-service enterprise built on trust, innovation, and excellence. We unite technology, cryptocurrency, and real estate under one powerful ecosystem, providing comprehensive solutions for individuals and businesses worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex justify-center"
          >
            <Button variant="goldOutline" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-gold font-medium tracking-wide uppercase text-sm"
            >
              Our Services
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-display font-bold mt-4"
            >
              Three Pillars of Excellence
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Link
                  to={service.href}
                  className="group block h-full p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_hsl(42_80%_55%/0.2)]"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold font-medium group-hover:gap-3 transition-all">
                    Explore Service
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-gold font-medium tracking-wide uppercase text-sm"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-display font-bold mt-4"
            >
              Built on Strong Foundations
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-gold font-medium tracking-wide uppercase text-sm"
            >
              Testimonials
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-display font-bold mt-4"
            >
              What Our Clients Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex justify-center mt-12"
          >
            <Button variant="goldOutline" asChild>
              <Link to="/testimonials">
                View All Testimonials
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        <div className="container px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-display font-bold mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-10"
            >
              Join thousands of satisfied clients who have trusted HARTITUDEH EMPIRE for their technology, investment, and real estate needs.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start With Us Today
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
