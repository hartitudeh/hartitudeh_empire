import { motion } from "motion/react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Team1 from "@/assets/ceo.jpg";
import Team2 from "@/assets/team2.jpg";

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

const teamMembers = [
  {
    name: "Adeyemi Pelumi Obaloluwa",
    role: "CEO & Founder",
    image: Team1,
    description: "Visionary entrepreneur driving technology, finance, and real estate growth.",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Akinlabi Hammad",
    role: "Head of Sales",
    image: Team2,
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

export default function TeamSection() {
  return (
    <section className="py-24 bg-card/50 overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-gold font-medium tracking-wide uppercase text-sm">
            Our Team
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-4">
            Meet The <span className="text-gradient-gold">Experts</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground mt-4">
            Our dedicated professionals are here to guide you and deliver excellence across all our business verticals.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
              {teamMembers.map((member) => (
                <CarouselItem key={member.name} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <div className="group p-6 bg-background border border-border hover:border-gold/30 rounded-2xl transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="relative mb-6 overflow-hidden rounded-xl aspect-[4/3]">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Social Links on Hover */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <a
                            href={member.socials.linkedin}
                            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-gold hover:text-background hover:border-gold transition-all duration-300"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                          <a
                            href={member.socials.twitter}
                            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-gold hover:text-background hover:border-gold transition-all duration-300"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                          <a
                            href={member.socials.instagram}
                            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-gold hover:text-background hover:border-gold transition-all duration-300"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      
                      <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gold text-sm font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.description}
                      </p>
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
      </div>
    </section>
  );
}
