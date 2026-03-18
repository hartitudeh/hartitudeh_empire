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
                <Card className="overflow-hidden bg-card border-border hover:border-gold/30 transition-all duration-300 group cursor-pointer">
                  <CardHeader className="p-0 relative">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge
                          variant="outline"
                          className={`${
                            property.purpose === "sale"
                              ? "bg-gold/90 text-primary-foreground border-gold"
                              : "bg-emerald-500/90 text-white border-emerald-500"
                          }`}
                        >
                          {property.purpose === "sale" ? "For Sale" : "For Rent"}
                        </Badge>
                        <Badge variant="outline" className="bg-background/80 border-border text-foreground">
                          {property.type === "land" && "Land"}
                          {property.type === "house" && "Residential"}
                          {property.type === "commercial" && "Commercial"}
                        </Badge>
                      </div>

                      {/* Price */}
                      <div className="absolute bottom-4 left-4">
                        <p className="text-xs text-muted-foreground">Price</p>
                        <p className="text-2xl font-display font-bold text-gold">
                          {property.price}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-5 space-y-4">
                    <div>
                      <h3 className="font-display font-bold text-lg mb-2 line-clamp-1 group-hover:text-gold transition-colors">
                        {property.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 text-gold" />
                        {property.location}
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Maximize className="w-4 h-4" />
                        {property.size}
                      </div>
                      {property.bedrooms && (
                        <div className="flex items-center gap-1">
                          <Bed className="w-4 h-4" />
                          {property.bedrooms}
                        </div>
                      )}
                      {property.bathrooms && (
                        <div className="flex items-center gap-1">
                          <Bath className="w-4 h-4" />
                          {property.bathrooms}
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {property.features.slice(0, 3).map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs bg-secondary/50 border-border text-muted-foreground"
                        >
                          {feature}
                        </Badge>
                      ))}
                      {property.features.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-gold/10 border-gold/30 text-gold"
                        >
                          +{property.features.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* View Details */}
                    <span className="inline-flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </span>
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
