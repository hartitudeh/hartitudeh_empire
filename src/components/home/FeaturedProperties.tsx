import { motion } from "motion/react";
import { MapPin, Bed, Bath, Maximize, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const properties = [
  {
    id: 1,
    title: "Luxury Waterfront Mansion - Banana Island",
    type: "house",
    purpose: "sale",
    location: "Banana Island, Ikoyi, Lagos",
    price: "₦350,000,000",
    size: "450 sqm",
    bedrooms: 5,
    bathrooms: 5,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
    features: ["Waterfront View", "Smart Home System", "Swimming Pool", "24/7 Security", "Boys Quarters"],
  },
  {
    id: 2,
    title: "Prime Commercial Land - Lekki Phase 1",
    type: "land",
    purpose: "sale",
    location: "Lekki Phase 1, Lagos",
    price: "₦85,000,000",
    size: "600 sqm",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070",
    features: ["C of O Available", "Fenced & Gated", "Direct Road Access", "Commercial Zone"],
  },
  {
    id: 3,
    title: "Modern 3-Bedroom Apartment - Victoria Island",
    type: "house",
    purpose: "lease",
    location: "Victoria Island, Lagos",
    price: "₦5,500,000/year",
    size: "180 sqm",
    bedrooms: 3,
    bathrooms: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
    features: ["Serviced Building", "Gym & Pool", "Backup Generator", "Concierge"],
  },
  {
    id: 4,
    title: "Residential Land Plot - Abuja GRA",
    type: "land",
    purpose: "sale",
    location: "Gwarinpa Estate, Abuja",
    price: "₦28,000,000",
    size: "500 sqm",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2032",
    features: ["Title: R of O", "Electricity Available", "Good Drainage", "Secure Estate"],
  },
  {
    id: 5,
    title: "Semi-Detached House - Chevron Estate",
    type: "house",
    purpose: "sale",
    location: "Chevron Estate, Lekki, Lagos",
    price: "₦245,000,000",
    size: "450 sqm",
    bedrooms: 4,
    bathrooms: 4,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    features: ["Gated Estate", "Swimming Pool", "Smart Security", "Boys Quarters"],
  },
  {
    id: 6,
    title: "Commercial Office Space - Ikeja",
    type: "commercial",
    purpose: "lease",
    location: "Ikeja GRA, Lagos",
    price: "₦12,000,000/year",
    size: "300 sqm",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    features: ["Open Plan", "10-Car Parking", "24/7 Security", "Conference Room"],
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
    transition: { staggerChildren: 0.1 },
  },
};

const FeaturedProperties = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="text-center md:text-left">
            <motion.span
              variants={fadeInUp}
              className="text-gold font-medium tracking-wide uppercase text-sm"
            >
              Featured Listings
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-display font-bold mt-4"
            >
              Discover Premium{" "}
              <span className="text-gradient-gold">Properties</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeInUp}>
            <Button variant="goldOutline" asChild>
              <Link to="/properties">
                View All Properties
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {properties.map((property) => (
            <motion.div key={property.id} variants={fadeInUp}>
              <Link to={`/property/${property.id}`}>
                <Card className="overflow-hidden bg-card border border-border/80 shadow-md hover:shadow-2xl hover:border-amber-500/40 transition-all duration-300 group cursor-pointer rounded-2xl flex flex-col h-full">
                  <CardHeader className="p-0 relative">
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Subtle dark vignette overlay for top badges & price pill contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                      {/* Badges */}
                      <div className="absolute top-3.5 right-3.5 flex gap-2 z-10">
                        <Badge
                          className={`${
                            property.purpose === "sale"
                              ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold shadow-lg border border-amber-300/40 text-xs px-2.5 py-0.5"
                              : "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold shadow-lg border border-emerald-400/40 text-xs px-2.5 py-0.5"
                          }`}
                        >
                          {property.purpose === "sale" ? "For Sale" : "For Rent"}
                        </Badge>
                        <Badge className="bg-slate-900/80 backdrop-blur-md text-slate-200 font-medium shadow-lg border border-slate-700/60 text-xs px-2.5 py-0.5">
                          {property.type === "land" && "Land"}
                          {property.type === "house" && "Residential"}
                          {property.type === "commercial" && "Commercial"}
                        </Badge>
                      </div>

                      {/* Floating Glass Price Pill */}
                      <div className="absolute bottom-3.5 left-3.5 z-10 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-800 shadow-xl flex items-baseline gap-2 group-hover:border-amber-500/50 transition-colors">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Price</span>
                        <span className="text-xl md:text-2xl font-display font-bold text-amber-400">
                          {property.price}
                        </span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-display font-bold text-lg mb-1.5 line-clamp-1 group-hover:text-amber-600 transition-colors">
                          {property.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                          <span className="line-clamp-1">{property.location}</span>
                        </div>
                      </div>

                      {/* Property Details */}
                      <div className="flex items-center gap-4 text-xs font-medium text-foreground py-2 px-3 rounded-lg bg-secondary/50 border border-border/60">
                        <div className="flex items-center gap-1.5">
                          <Maximize className="w-3.5 h-3.5 text-amber-500" />
                          {property.size}
                        </div>
                        {property.bedrooms && (
                          <div className="flex items-center gap-1.5">
                            <Bed className="w-3.5 h-3.5 text-amber-500" />
                            {property.bedrooms} Beds
                          </div>
                        )}
                        {property.bathrooms && (
                          <div className="flex items-center gap-1.5">
                            <Bath className="w-3.5 h-3.5 text-amber-500" />
                            {property.bathrooms} Baths
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5">
                        {property.features.slice(0, 3).map((feature, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-[11px] bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-400 font-medium"
                          >
                            {feature}
                          </Badge>
                        ))}
                        {property.features.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-[11px] bg-amber-500/15 border-amber-500/30 text-amber-600 font-semibold"
                          >
                            +{property.features.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* View Details */}
                    <div className="pt-2 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-amber-600 group-hover:text-amber-500 transition-colors">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
