import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Palette, Video, Printer, Filter } from "lucide-react";
import Layout from "@/components/layout/Layout";

type GalleryCategory = "all" | "graphics" | "video" | "print";

interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Corporate Brand Identity",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Event Branding Package",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Album Cover Design",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    title: "Social Media Graphics",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    title: "Logo Collection",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    title: "Poster Design",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: "7",
    title: "Promotional Video Frame",
    category: "video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
  },
  {
    id: "8",
    title: "Motion Graphics Sample",
    category: "video",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
  },
  {
    id: "9",
    title: "Animation Storyboard",
    category: "video",
    image: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=800&h=600&fit=crop",
  },
  {
    id: "10",
    title: "Restaurant Menu Design",
    category: "print",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
  },
  {
    id: "11",
    title: "Product Catalog",
    category: "print",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
  },
  {
    id: "12",
    title: "Business Card Collection",
    category: "print",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop",
  },
  {
    id: "13",
    title: "Brochure Design",
    category: "print",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
  },
  {
    id: "14",
    title: "Package Design",
    category: "print",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&h=600&fit=crop",
  },
  {
    id: "15",
    title: "Infographic Design",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
];

const categories = [
  { id: "all" as GalleryCategory, label: "All", icon: Filter },
  { id: "graphics" as GalleryCategory, label: "Graphics", icon: Palette },
  { id: "video" as GalleryCategory, label: "Video", icon: Video },
  { id: "print" as GalleryCategory, label: "Print", icon: Printer },
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

export default function TechGallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const currentIndex = selectedImage ? filteredItems.findIndex(item => item.id === selectedImage.id) : -1;

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;
    const newIndex = direction === "next" 
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="text-gold font-medium tracking-wide uppercase text-sm">
              Creative Works
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
              Our <span className="text-gradient-gold">Gallery</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Browse through our creative works including graphic designs, video production stills, and print materials.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sticky top-16 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gold text-background"
                    : "bg-card border border-border text-muted-foreground hover:border-gold/30 hover:text-foreground"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container px-4">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span className="text-xs font-medium text-gold uppercase tracking-wide">
                        {categories.find(c => c.id === item.category)?.label}
                      </span>
                      <h3 className="text-white font-display font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-gold hover:text-background transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-gold hover:text-background transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage("next"); }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-gold hover:text-background transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent rounded-b-xl">
                <span className="text-xs font-medium text-gold uppercase tracking-wide">
                  {categories.find(c => c.id === selectedImage.category)?.label}
                </span>
                <h3 className="text-xl font-display font-bold text-white">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
