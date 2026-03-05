import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Bed, Bath, Maximize, Calendar, CheckCircle, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";

const properties = [
  {
    id: 1,
    title: "Luxury Waterfront Mansion - Banana Island",
    type: "house",
    purpose: "sale",
    location: "Banana Island, Ikoyi, Lagos",
    price: "₦350,000,000",
    pricePerSqm: "₦777,778/sqm",
    size: "450 sqm",
    bedrooms: 5,
    bathrooms: 5,
    yearBuilt: 2022,
    description: "Stunning waterfront mansion with panoramic views, smart home technology, and premium finishes throughout. This exceptional property offers the ultimate in luxury living with direct waterfront access and breathtaking views of the Lagos Lagoon.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
    ],
    features: ["Waterfront View", "Smart Home System", "Swimming Pool", "24/7 Security", "Boys Quarters", "Home Theater", "Wine Cellar", "Gym"],
    amenities: ["Backup Generator", "Solar Panels", "CCTV", "Gated Estate", "Coastal Access"],
  },
  {
    id: 2,
    title: "Prime Commercial Land - Lekki Phase 1",
    type: "land",
    purpose: "sale",
    location: "Lekki Phase 1, Lagos",
    price: "₦85,000,000",
    pricePerSqm: "₦141,667/sqm",
    size: "600 sqm",
    description: "Premium commercial land in high-traffic business district with C of O and excellent ROI potential. Strategically located for maximum visibility and accessibility.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2032",
    ],
    features: ["C of O Available", "Fenced & Gated", "Direct Road Access", "Commercial Zone", "High Visibility"],
    amenities: ["Electricity", "Water Supply", "Drainage", "Street Lights"],
  },
  {
    id: 3,
    title: "Modern 3-Bedroom Apartment - Victoria Island",
    type: "house",
    purpose: "lease",
    location: "Victoria Island, Lagos",
    price: "₦5,500,000/year",
    monthlyPrice: "₦458,333/month",
    size: "180 sqm",
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2023,
    description: "Contemporary apartment in serviced building with premium amenities, gym, pool, and concierge service. Perfect for professionals seeking comfort and convenience.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    ],
    features: ["Serviced Building", "Gym & Pool", "Backup Generator", "Concierge", "Parking Space"],
    amenities: ["24/7 Security", "Restaurant", "Laundry Service", "Lobby"],
  },
  {
    id: 4,
    title: "Residential Land Plot - Abuja GRA",
    type: "land",
    purpose: "sale",
    location: "Gwarinpa Estate, Abuja",
    price: "₦28,000,000",
    pricePerSqm: "₦56,000/sqm",
    size: "500 sqm",
    description: "Well-positioned residential plot in secure, developed estate with excellent infrastructure. Ideal for building your dream home.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2032",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2032",
    ],
    features: ["Title: R of O", "Electricity Available", "Good Drainage", "Secure Estate", "Tarred Roads"],
    amenities: ["School Nearby", "Shopping Center", "Hospital Access", "Security"],
  },
  {
    id: 5,
    title: "Semi-Detached House - Chevron Estate",
    type: "house",
    purpose: "sale",
    location: "Chevron Estate, Lekki, Lagos",
    price: "₦245,000,000",
    pricePerSqm: "₦544,444/sqm",
    size: "450 sqm",
    bedrooms: 4,
    bathrooms: 4,
    yearBuilt: 2020,
    description: "Beautifully finished semi-detached house in prestigious gated estate with excellent security. Features modern architecture and premium finishes.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
    ],
    features: ["Gated Estate", "Swimming Pool", "Smart Security", "Boys Quarters", "Fitted Kitchen"],
    amenities: ["Tennis Court", "Estate Gym", "Playground", "24/7 Security"],
  },
  {
    id: 6,
    title: "Commercial Office Space - Ikeja",
    type: "commercial",
    purpose: "lease",
    location: "Ikeja GRA, Lagos",
    price: "₦12,000,000/year",
    monthlyPrice: "₦1,000,000/month",
    size: "300 sqm",
    description: "Premium office space in commercial hub with parking, modern amenities, and professional environment. Ideal for corporate headquarters.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
    ],
    features: ["Open Plan", "10-Car Parking", "24/7 Security", "Conference Room", "Pantry"],
    amenities: ["Backup Power", "Air Conditioning", "Internet Ready", "Disabled Access"],
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

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Property Not Found</h1>
            <p className="text-muted-foreground mb-8">The property you're looking for doesn't exist.</p>
            <Button variant="gold" onClick={() => navigate("/homes-properties")}>
              Back to Properties
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container">
            <Button
              variant="ghost"
              className="mb-4 text-foreground hover:text-gold"
              onClick={() => navigate("/homes-properties")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 -mt-24 relative z-10">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-2 space-y-8"
            >
              {/* Header */}
              <motion.div
                variants={fadeInUp}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    className={`${
                      property.purpose === "sale"
                        ? "bg-gold text-primary-foreground border-gold"
                        : "bg-emerald-500 text-white border-emerald-500"
                    }`}
                  >
                    {property.purpose === "sale" ? "For Sale" : "For Rent"}
                  </Badge>
                  <Badge variant="outline" className="border-border">
                    {property.type === "land" && "Land"}
                    {property.type === "house" && "Residential"}
                    {property.type === "commercial" && "Commercial"}
                  </Badge>
                </div>

                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  {property.title}
                </h1>

                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="w-5 h-5 text-gold" />
                  {property.location}
                </div>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-gold" />
                    <span>{property.size}</span>
                  </div>
                  {property.bedrooms && (
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-gold" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-gold" />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                  )}
                  {property.yearBuilt && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-gold" />
                      <span>Built {property.yearBuilt}</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                variants={fadeInUp}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h2 className="text-xl font-display font-bold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                variants={fadeInUp}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h2 className="text-xl font-display font-bold mb-6">Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Amenities */}
              {property.amenities && (
                <motion.div
                  variants={fadeInUp}
                  className="bg-card rounded-2xl p-8 border border-border"
                >
                  <h2 className="text-xl font-display font-bold mb-6">Amenities</h2>
                  <div className="flex flex-wrap gap-3">
                    {property.amenities.map((amenity, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-4 py-2 bg-gold/10 border-gold/30 text-gold"
                      >
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Gallery */}
              {property.gallery && property.gallery.length > 1 && (
                <motion.div
                  variants={fadeInUp}
                  className="bg-card rounded-2xl p-8 border border-border"
                >
                  <h2 className="text-xl font-display font-bold mb-6">Gallery</h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {property.gallery.map((img, index) => (
                      <div key={index} className="aspect-video rounded-xl overflow-hidden">
                        <img
                          src={img}
                          alt={`${property.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              {/* Price Card */}
              <motion.div
                variants={fadeInUp}
                className="bg-card rounded-2xl p-8 border border-border sticky top-24"
              >
                <p className="text-sm text-muted-foreground mb-1">Price</p>
                <p className="text-3xl font-display font-bold text-gradient-gold mb-2">
                  {property.price}
                </p>
                {property.pricePerSqm && (
                  <p className="text-sm text-muted-foreground mb-6">
                    {property.pricePerSqm}
                  </p>
                )}
                {property.monthlyPrice && (
                  <p className="text-sm text-muted-foreground mb-6">
                    {property.monthlyPrice}
                  </p>
                )}

                <div className="space-y-3">
                  <Button variant="gold" className="w-full gap-2" asChild>
                    <Link to="/contact">
                      <Phone className="w-4 h-4" />
                      Contact Agent
                    </Link>
                  </Button>
                  <Button variant="goldOutline" className="w-full gap-2" asChild>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <a href="mailto:properties@hartitudeh.com">
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
