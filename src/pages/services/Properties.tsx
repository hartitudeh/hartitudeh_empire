import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Layout from "@/components/layout/Layout";
import { MapPin, Bed, Bath, Maximize, Search, ChevronRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allProperties = [
  {
    id: 1,
    title: "Luxury Waterfront Mansion - Banana Island",
    location: "Banana Island, Ikoyi, Lagos",
    price: "₦350,000,000",
    priceValue: 350000000,
    type: "For Sale",
    propertyType: "house",
    beds: 5,
    baths: 5,
    area: "450 sqm",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
    features: ["Waterfront View", "Smart Home System", "Swimming Pool", "24/7 Security"],
  },
  {
    id: 2,
    title: "Prime Commercial Land - Lekki Phase 1",
    location: "Lekki Phase 1, Lagos",
    price: "₦85,000,000",
    priceValue: 85000000,
    type: "For Sale",
    propertyType: "land",
    beds: 0,
    baths: 0,
    area: "600 sqm",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070",
    features: ["C of O Available", "Fenced & Gated", "Direct Road Access"],
  },
  {
    id: 3,
    title: "Modern 3-Bedroom Apartment - Victoria Island",
    location: "Victoria Island, Lagos",
    price: "₦5,500,000/year",
    priceValue: 5500000,
    type: "For Rent",
    propertyType: "apartment",
    beds: 3,
    baths: 3,
    area: "180 sqm",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
    features: ["Serviced Building", "Gym & Pool", "Backup Generator", "Concierge"],
  },
  {
    id: 4,
    title: "Residential Land Plot - Abuja GRA",
    location: "Gwarinpa Estate, Abuja",
    price: "₦28,000,000",
    priceValue: 28000000,
    type: "For Sale",
    propertyType: "land",
    beds: 0,
    baths: 0,
    area: "500 sqm",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2032",
    features: ["Title: R of O", "Electricity Available", "Good Drainage", "Secure Estate"],
  },
  {
    id: 5,
    title: "Semi-Detached House - Chevron Estate",
    location: "Chevron Estate, Lekki, Lagos",
    price: "₦245,000,000",
    priceValue: 245000000,
    type: "For Sale",
    propertyType: "house",
    beds: 4,
    baths: 4,
    area: "450 sqm",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    features: ["Gated Estate", "Swimming Pool", "Smart Security", "Boys Quarters"],
  },
  {
    id: 6,
    title: "Commercial Office Space - Ikeja",
    location: "Ikeja GRA, Lagos",
    price: "₦12,000,000/year",
    priceValue: 12000000,
    type: "For Rent",
    propertyType: "commercial",
    beds: 0,
    baths: 2,
    area: "300 sqm",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    features: ["Open Plan", "10-Car Parking", "24/7 Security", "Conference Room"],
  },
  {
    id: 7,
    title: "Penthouse Suite - Eko Atlantic",
    location: "Eko Atlantic City, Lagos",
    price: "₦450,000,000",
    priceValue: 450000000,
    type: "For Sale",
    propertyType: "apartment",
    beds: 4,
    baths: 5,
    area: "350 sqm",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980",
    features: ["Ocean View", "Private Elevator", "Smart Home", "Rooftop Terrace"],
  },
  {
    id: 8,
    title: "Duplex with Garden - Magodo",
    location: "Magodo Phase 2, Lagos",
    price: "₦120,000,000",
    priceValue: 120000000,
    type: "For Sale",
    propertyType: "house",
    beds: 5,
    baths: 5,
    area: "380 sqm",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070",
    features: ["Large Garden", "BQ", "Solar Power", "CCTV Security"],
  },
  {
    id: 9,
    title: "Retail Shop Space - Surulere",
    location: "Surulere, Lagos",
    price: "₦15,000,000/year",
    priceValue: 15000000,
    type: "For Lease",
    propertyType: "commercial",
    beds: 0,
    baths: 1,
    area: "150 sqm",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070",
    features: ["High Foot Traffic", "Street Facing", "Power Backup", "Storage Room"],
  },
  {
    id: 10,
    title: "Spacious Family Home - Ikeja",
    location: "Ikeja GRA, Lagos",
    price: "₦95,000,000",
    priceValue: 95000000,
    type: "For Sale",
    propertyType: "house",
    beds: 6,
    baths: 4,
    area: "500 sqm",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070",
    features: ["Corner Piece", "Compound Space", "Newly Renovated", "Quiet Area"],
  },
  {
    id: 11,
    title: "Modern Office Complex - Lekki",
    location: "Lekki Phase 1, Lagos",
    price: "₦120,000,000/year",
    priceValue: 120000000,
    type: "For Lease",
    propertyType: "commercial",
    beds: 0,
    baths: 6,
    area: "800 sqm",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070",
    features: ["Corporate Grade", "Ample Parking", "Fiber Internet", "Elevator"],
  },
  {
    id: 12,
    title: "Affordable Land Plot - Badagry",
    location: "Badagry, Lagos",
    price: "₦20,000,000",
    priceValue: 20000000,
    type: "For Sale",
    propertyType: "land",
    beds: 0,
    baths: 0,
    area: "600 sqm",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070",
    features: ["Gazette Title", "Near Expressway", "Developing Area", "Investment Opportunity"],
  },
  {
    id: 13,
    title: "Executive 4-Bedroom Terrace - Oniru",
    location: "Oniru Estate, Victoria Island, Lagos",
    price: "₦180,000,000",
    priceValue: 180000000,
    type: "For Sale",
    propertyType: "house",
    beds: 4,
    baths: 4,
    area: "280 sqm",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
    features: ["Serviced Estate", "Modern Finishes", "Swimming Pool", "Gym Access"],
  },
  {
    id: 14,
    title: "Luxury Villa - Asokoro",
    location: "Asokoro, Abuja",
    price: "₦550,000,000",
    priceValue: 550000000,
    type: "For Sale",
    propertyType: "house",
    beds: 6,
    baths: 7,
    area: "800 sqm",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    features: ["Diplomatic Zone", "Cinema Room", "Wine Cellar", "Staff Quarters"],
  },
  {
    id: 15,
    title: "Cozy Studio Apartment - Yaba",
    location: "Yaba, Lagos",
    price: "₦1,800,000/year",
    priceValue: 1800000,
    type: "For Rent",
    propertyType: "apartment",
    beds: 1,
    baths: 1,
    area: "45 sqm",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    features: ["Fully Furnished", "Tech Hub Area", "Serviced", "Internet Included"],
  },
  {
    id: 16,
    title: "Warehouse Complex - Apapa",
    location: "Apapa Industrial Area, Lagos",
    price: "₦80,000,000/year",
    priceValue: 80000000,
    type: "For Lease",
    propertyType: "commercial",
    beds: 0,
    baths: 4,
    area: "2000 sqm",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    features: ["High Ceiling", "Loading Bay", "24/7 Access", "Security"],
  },
  {
    id: 17,
    title: "Beachfront Land - Epe",
    location: "Epe, Lagos",
    price: "₦150,000,000",
    priceValue: 150000000,
    type: "For Sale",
    propertyType: "land",
    beds: 0,
    baths: 0,
    area: "2500 sqm",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073",
    features: ["Beachfront", "C of O", "Resort Potential", "Serene Location"],
  },
  {
    id: 18,
    title: "Smart Home - Ajah",
    location: "Ajah, Lekki, Lagos",
    price: "₦75,000,000",
    priceValue: 75000000,
    type: "For Sale",
    propertyType: "house",
    beds: 4,
    baths: 3,
    area: "250 sqm",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084",
    features: ["Smart Technology", "Solar Power", "Modern Kitchen", "Estate Living"],
  },
  {
    id: 19,
    title: "2-Bedroom Flat - Maryland",
    location: "Maryland, Lagos",
    price: "₦2,500,000/year",
    priceValue: 2500000,
    type: "For Rent",
    propertyType: "apartment",
    beds: 2,
    baths: 2,
    area: "120 sqm",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070",
    features: ["Gated Compound", "Prepaid Meter", "Water Supply", "Parking"],
  },
  {
    id: 20,
    title: "Commercial Plaza - Opebi",
    location: "Opebi, Ikeja, Lagos",
    price: "₦650,000,000",
    priceValue: 650000000,
    type: "For Sale",
    propertyType: "commercial",
    beds: 0,
    baths: 8,
    area: "1500 sqm",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    features: ["Multi-Tenant", "Elevator", "Central Location", "High Yield"],
  },
  {
    id: 21,
    title: "Farmland Investment - Ibeju Lekki",
    location: "Ibeju Lekki, Lagos",
    price: "₦35,000,000",
    priceValue: 35000000,
    type: "For Sale",
    propertyType: "land",
    beds: 0,
    baths: 0,
    area: "5000 sqm",
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=2071",
    features: ["Agricultural Land", "Water Source", "Road Access", "Near Airport"],
  },
  {
    id: 22,
    title: "Maisonette - Ikoyi",
    location: "Old Ikoyi, Lagos",
    price: "₦8,000,000/year",
    priceValue: 8000000,
    type: "For Rent",
    propertyType: "apartment",
    beds: 3,
    baths: 3,
    area: "200 sqm",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    features: ["Two Levels", "Private Entrance", "Garden Area", "Quiet Neighborhood"],
  },
  {
    id: 23,
    title: "Corner Shop - Festac",
    location: "Festac Town, Lagos",
    price: "₦5,000,000/year",
    priceValue: 5000000,
    type: "For Lease",
    propertyType: "commercial",
    beds: 0,
    baths: 1,
    area: "80 sqm",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
    features: ["Corner Position", "High Visibility", "Customer Parking", "Ready to Use"],
  },
  {
    id: 24,
    title: "Bungalow - Maitama",
    location: "Maitama, Abuja",
    price: "₦320,000,000",
    priceValue: 320000000,
    type: "For Sale",
    propertyType: "house",
    beds: 4,
    baths: 4,
    area: "600 sqm",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070",
    features: ["Large Compound", "Boys Quarters", "Landscaped Garden", "Prime Location"],
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
    transition: { staggerChildren: 0.05 },
  },
};

const Properties = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [listingType, setListingType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  // Initialize filters from URL params
  useEffect(() => {
    const search = searchParams.get("search");
    const type = searchParams.get("type");
    const listing = searchParams.get("listing");
    
    if (search) setSearchQuery(search);
    if (type) setPropertyType(type);
    if (listing) setListingType(listing);
  }, [searchParams]);

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPropertyType =
      propertyType === "all" || property.propertyType === propertyType;
    const matchesListingType =
      listingType === "all" ||
      (listingType === "sale" && property.type === "For Sale") ||
      (listingType === "rent" && property.type === "For Rent") ||
      (listingType === "lease" && property.type === "For Lease");
    
    let matchesPrice = true;
    if (priceRange === "under50m") matchesPrice = property.priceValue < 50000000;
    else if (priceRange === "50to100m") matchesPrice = property.priceValue >= 50000000 && property.priceValue < 100000000;
    else if (priceRange === "100to500m") matchesPrice = property.priceValue >= 100000000 && property.priceValue < 500000000;
    else if (priceRange === "over500m") matchesPrice = property.priceValue >= 500000000;

    return matchesSearch && matchesPropertyType && matchesListingType && matchesPrice;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setPropertyType("all");
    setListingType("all");
    setPriceRange("all");
  };

  const getPropertyTypeLabel = (type: string) => {
    switch (type) {
      case "land": return "Land";
      case "house": return "Residential";
      case "apartment": return "Residential";
      case "commercial": return "Commercial";
      default: return type;
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          >
            <div className="text-center md:text-left">
              <motion.h1
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-display font-bold"
              >
                Discover Premium{" "}
                <span className="text-gradient-gold">Properties</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground mt-4 max-w-xl"
              >
                Explore our curated collection of premium properties across Nigeria
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 bg-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            {/* Property Type */}
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="w-full md:w-40 h-12">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="land">Land</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>

            {/* Listing Type */}
            <Select value={listingType} onValueChange={setListingType}>
              <SelectTrigger className="w-full md:w-40 h-12">
                <SelectValue placeholder="Listing Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Listings</SelectItem>
                <SelectItem value="sale">For Sale</SelectItem>
                <SelectItem value="rent">For Rent</SelectItem>
                <SelectItem value="lease">For Lease</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full md:w-44 h-12">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under50m">Under ₦50M</SelectItem>
                <SelectItem value="50to100m">₦50M - ₦100M</SelectItem>
                <SelectItem value="100to500m">₦100M - ₦500M</SelectItem>
                <SelectItem value="over500m">Over ₦500M</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProperties.length} properties
            </p>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-4">No properties match your filters.</p>
              <button 
                onClick={clearFilters}
                className="text-gold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProperties.map((property) => (
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
                                property.type === "For Sale"
                                  ? "bg-gold/90 text-primary-foreground border-gold"
                                  : "bg-emerald-500/90 text-white border-emerald-500"
                              }`}
                            >
                              {property.type}
                            </Badge>
                            <Badge variant="outline" className="bg-background/80 border-border text-foreground">
                              {getPropertyTypeLabel(property.propertyType)}
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
                            {property.area}
                          </div>
                          {property.beds > 0 && (
                            <div className="flex items-center gap-1">
                              <Bed className="w-4 h-4" />
                              {property.beds}
                            </div>
                          )}
                          {property.baths > 0 && (
                            <div className="flex items-center gap-1">
                              <Bath className="w-4 h-4" />
                              {property.baths}
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
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Properties;
