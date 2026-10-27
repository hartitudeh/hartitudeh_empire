import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Code, TrendingUp, Home, Shield, Zap, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/home/HeroCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Code,
    title: "Hartitudeh Tech Solutions",
    description: (
      <>
        Custom <span className="font-semibold text-foreground">software development</span>,{" "}
        <span className="font-semibold text-foreground">brand identity design</span>,{" "}
        <span className="font-semibold text-foreground">motion graphics</span>, and scalable{" "}
        <span className="font-semibold text-foreground">digital products</span> engineered to help businesses grow.
      </>
    ),
    href: "/tech-solutions",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "CryptoTech & Global Exchange",
    description: (
      <>
        Professional <span className="font-semibold text-foreground">crypto asset trading</span>,{" "}
        <span className="font-semibold text-foreground">ROI-structured investment plans</span>,{" "}
        <span className="font-semibold text-foreground">Web3 marketing</span>, and{" "}
        <span className="font-semibold text-foreground">airdrop campaign execution</span>.
      </>
    ),
    href: "/cryptotech",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Home,
    title: "Homes & Properties",
    description: (
      <>
        Verified <span className="font-semibold text-foreground">real estate investments</span> including{" "}
        <span className="font-semibold text-foreground">luxury residential sales</span>,{" "}
        <span className="font-semibold text-foreground">commercial leasing</span>, and{" "}
        <span className="font-semibold text-foreground">full-service property management</span>.
      </>
    ),
    href: "/homes-properties",
    color: "from-emerald-500 to-teal-500",
  },
];

const values = [
  {
    icon: Shield,
    title: "Trust",
    description: (
      <>
        Building lasting client partnerships through <span className="font-semibold text-foreground">complete accountability</span> and{" "}
        <span className="font-semibold text-foreground">proven reliability</span>.
      </>
    ),
  },
  {
    icon: Zap,
    title: "Innovation",
    description: (
      <>
        Engineering <span className="font-semibold text-foreground">modern digital architectures</span> and{" "}
        <span className="font-semibold text-foreground">forward-thinking strategies</span> that create lasting value.
      </>
    ),
  },
  {
    icon: Globe,
    title: "Excellence",
    description: (
      <>
        Delivering <span className="font-semibold text-foreground">world-class execution</span> and{" "}
        <span className="font-semibold text-foreground">measurable results</span> across every business vertical.
      </>
    ),
  },
  {
    icon: Users,
    title: "Transparency",
    description: (
      <>
        Maintaining <span className="font-semibold text-foreground">clear communication</span>,{" "}
        <span className="font-semibold text-foreground">verified documentation</span>, and honest dealings at every step.
      </>
    ),
  },
];

const testimonials = [
  {
    name: "Chinedu Okeke",
    role: "CTO, VendaPay",
    content: "HARTITUDEH Tech Solutions built our payment gateway API. The codebase is extremely clean, well-documented, and scales effortlessly under high transaction loads.",
    service: "Tech Solutions",
  },
  {
    name: "Oluwaseun Ajayi",
    role: "Crypto Investor",
    content: "Hartitudeh CryptoTech has made digital asset trading simple and accessible. Their exchange rates are very competitive, and customer support is incredibly responsive.",
    service: "CryptoTech",
  },
  {
    name: "Emeka Nwosu",
    role: "Real Estate Investor",
    content: "HARTITUDEH Homes & Properties helped me acquire high-yield properties in Lekki. Their legal team verified everything, and the transfer of deed was done in days.",
    service: "Homes & Properties",
  },
  {
    name: "Adebayo Oyelami",
    role: "Founder, FarmConnect",
    content: "Their UI/UX design team transformed our agricultural marketplace app. Since launching the redesign, user engagement has spiked by over 150%.",
    service: "Tech Solutions",
  },
  {
    name: "Chioma Nwachukwu",
    role: "Product Manager, EduSolve",
    content: "They delivered our mobile application on time and within budget. Their communication was outstanding throughout the project.",
    service: "Tech Solutions",
  },
  {
    name: "Folake Bakare",
    role: "Homeowner",
    content: "Buying our family's dream home through HARTITUDEH Homes & Properties was seamless. They guided us every step of the way.",
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
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed mb-4">
              As a <span className="font-semibold text-foreground">diversified multi-service conglomerate</span>,{" "}
              <span className="font-semibold text-foreground">HARTITUDEH EMPIRE</span> builds tailored{" "}
              <span className="font-semibold text-foreground">software solutions</span>, manages{" "}
              <span className="font-semibold text-foreground">digital wealth portfolios</span>, and curates{" "}
              <span className="font-semibold text-foreground">verified real estate assets</span> that empower individuals, startups, and enterprises to{" "}
              <span className="font-semibold text-foreground">scale with confidence</span>.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base leading-relaxed">
              We engineer specialized solutions across three high-growth sectors, delivering custom{" "}
              <Link to="/tech-solutions" className="text-[#19013b] hover:text-amber-600 font-semibold underline decoration-[#19013b]/30 transition-colors">
                enterprise software &amp; digital branding
              </Link>
              , secure{" "}
              <Link to="/cryptotech" className="text-[#19013b] hover:text-amber-600 font-semibold underline decoration-[#19013b]/30 transition-colors">
                crypto trading &amp; Web3 growth campaigns
              </Link>
              , and high-yield{" "}
              <Link to="/homes-properties" className="text-[#19013b] hover:text-amber-600 font-semibold underline decoration-[#19013b]/30 transition-colors">
                residential &amp; commercial property investments
              </Link>
              .
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
                className="group text-center p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-amber-400/20 transition-all duration-300 shadow-sm">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-gold transition-colors">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
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
            variants={fadeInUp}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
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
              <div className="flex justify-center gap-4 mt-10">
                <CarouselPrevious className="relative static translate-y-0 bg-card border-border hover:bg-gold hover:text-background hover:border-gold" />
                <CarouselNext className="relative static translate-y-0 bg-card border-border hover:bg-gold hover:text-background hover:border-gold" />
              </div>
            </Carousel>
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
              className="text-lg text-muted-foreground mb-10 leading-relaxed"
            >
              Whether you are launching a new business, scaling an existing enterprise, or building long-term wealth,{" "}
              <span className="font-semibold text-foreground">HARTITUDEH EMPIRE</span> is ready to deliver{" "}
              <span className="font-semibold text-foreground">world-class technology</span>,{" "}
              <span className="font-semibold text-foreground">crypto investments</span>, and{" "}
              <span className="font-semibold text-foreground">verified real estate solutions</span>.
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
