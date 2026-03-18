import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, MapPin, DollarSign, Bed, Bath, Maximize, Image, Plus, X, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const STANDARD_FEATURES = [
  "Swimming Pool", "24/7 Security", "Backup Generator", "Solar Power",
  "Smart Home System", "CCTV", "Boys Quarters", "Gated Estate",
  "Parking Space", "Gym", "Fitted Kitchen", "Water Supply",
  "Elevator", "Air Conditioning", "Internet Ready", "Serviced",
  "Garden", "Balcony", "Terrace", "Rooftop",
];

const STANDARD_AMENITIES = [
  "School Nearby", "Hospital Access", "Shopping Center", "Restaurant",
  "Public Transport", "Playground", "Tennis Court", "Laundry Service",
  "Concierge", "Disabled Access", "Street Lights", "Drainage",
];

const listingSchema = z.object({
  title: z.string().trim().min(10, "Title must be at least 10 characters").max(120, "Title must be under 120 characters"),
  description: z.string().trim().min(30, "Description must be at least 30 characters").max(2000, "Description must be under 2000 characters"),
  location: z.string().trim().min(5, "Location must be at least 5 characters").max(200),
  price: z.coerce.number().positive("Price must be a positive number"),
  price_label: z.string().trim().min(1, "Price label is required (e.g. ₦85,000,000)").max(50),
  property_type: z.enum(["house", "apartment", "land", "commercial"], { required_error: "Select a property type" }),
  listing_type: z.enum(["sale", "rent", "lease"], { required_error: "Select a listing type" }),
  bedrooms: z.coerce.number().int().min(0).max(20).default(0),
  bathrooms: z.coerce.number().int().min(0).max(20).default(0),
  area: z.string().trim().min(1, "Area is required (e.g. 450 sqm)").max(50),
  image_url: z.string().url("Must be a valid image URL").or(z.literal("")).optional(),
  contact_name: z.string().trim().min(2, "Contact name is required").max(100),
  contact_phone: z.string().trim().min(7, "Valid phone number required").max(20),
  contact_email: z.string().email("Valid email required").or(z.literal("")).optional(),
});

type ListingForm = z.infer<typeof listingSchema>;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ListProperty() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [customFeature, setCustomFeature] = useState("");

  const form = useForm<ListingForm>({
    resolver: zodResolver(listingSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      price: 0,
      price_label: "",
      bedrooms: 0,
      bathrooms: 0,
      area: "",
      image_url: "",
      contact_name: "",
      contact_phone: "",
      contact_email: "",
    },
  });

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });
  }, []);

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const addCustomFeature = () => {
    const trimmed = customFeature.trim();
    if (trimmed && !selectedFeatures.includes(trimmed)) {
      setSelectedFeatures((prev) => [...prev, trimmed]);
      setCustomFeature("");
    }
  };

  const onSubmit = async (data: ListingForm) => {
    if (!user) {
      toast({ title: "Please log in", description: "You need to be logged in to list a property.", variant: "destructive" });
      navigate("/login");
      return;
    }

    if (selectedFeatures.length < 2) {
      toast({ title: "Add more features", description: "Please select at least 2 features to match our listing standards.", variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("partner_listings").insert({
      user_id: user.id,
      title: data.title,
      description: data.description,
      location: data.location,
      price: data.price,
      price_label: data.price_label,
      property_type: data.property_type,
      listing_type: data.listing_type,
      bedrooms: data.bedrooms,
      bathrooms: data.bathrooms,
      area: data.area,
      image_url: data.image_url || null,
      features: selectedFeatures,
      amenities: selectedAmenities,
      contact_name: data.contact_name,
      contact_phone: data.contact_phone,
      contact_email: data.contact_email || null,
    });
    setLoading(false);

    if (error) {
      toast({ title: "Error", description: "Failed to submit listing. Please try again.", variant: "destructive" });
      return;
    }

    setSubmitted(true);
    toast({ title: "Listing Submitted!", description: "Your property listing is under review. We'll notify you once approved." });
  };

  if (!user) {
    return (
      <Layout>
        <section className="min-h-screen flex items-center justify-center py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center max-w-md mx-auto px-4">
            <Building2 className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="text-3xl font-display font-bold mb-4">Partner With Us</h1>
            <p className="text-muted-foreground mb-8">
              Sign in to list your property on Hartitudeh Homes & Properties. Your listing will be reviewed to match our quality standards.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="gold" onClick={() => navigate("/login")}>Sign In</Button>
              <Button variant="goldOutline" onClick={() => navigate("/signup")}>Create Account</Button>
            </div>
          </motion.div>
        </section>
      </Layout>
    );
  }

  if (submitted) {
    return (
      <Layout>
        <section className="min-h-screen flex items-center justify-center py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center max-w-md mx-auto px-4">
            <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="text-3xl font-display font-bold mb-4">Listing Submitted!</h1>
            <p className="text-muted-foreground mb-8">
              Your property is under review. Our team will verify the details and approve your listing within 24-48 hours. You'll be notified once it goes live.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="gold" onClick={() => { setSubmitted(false); form.reset(); setSelectedFeatures([]); setSelectedAmenities([]); }}>
                List Another Property
              </Button>
              <Button variant="goldOutline" onClick={() => navigate("/homes-properties")}>
                Back to Properties
              </Button>
            </div>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-gold" onClick={() => navigate("/homes-properties")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homes & Properties
            </Button>

            <div className="mb-10">
              <span className="inline-block px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-4">
                Partner Program
              </span>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
                List Your <span className="text-gradient-gold">Property</span>
              </h1>
              <p className="text-muted-foreground max-w-xl">
                Submit your property listing to be featured on our platform. All listings are reviewed to ensure they meet our quality standards.
              </p>
            </div>

            {/* Standards Notice */}
            <div className="bg-gold/5 border border-gold/20 rounded-xl p-6 mb-10">
              <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gold" />
                Listing Standards
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li>• Clear, descriptive title (10+ chars)</li>
                <li>• Detailed description (30+ chars)</li>
                <li>• Accurate location information</li>
                <li>• Correct pricing in Naira (₦)</li>
                <li>• At least 2 property features</li>
                <li>• Valid contact information</li>
                <li>• High-quality property image URL</li>
                <li>• Accurate property dimensions</li>
              </ul>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Property Details */}
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6">
                  <h2 className="text-xl font-display font-bold flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-gold" />
                    Property Details
                  </h2>

                  <FormField control={form.control} name="title" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Title</FormLabel>
                      <FormControl><Input placeholder="e.g. Luxury 4-Bedroom Duplex - Lekki Phase 1" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="description" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl><Textarea placeholder="Describe your property in detail..." rows={5} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="property_type" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Type</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="land">Land</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="listing_type" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Listing Type</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Select listing" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sale">For Sale</SelectItem>
                            <SelectItem value="rent">For Rent</SelectItem>
                            <SelectItem value="lease">For Lease</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </div>

                {/* Location & Pricing */}
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6">
                  <h2 className="text-xl font-display font-bold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold" />
                    Location & Pricing
                  </h2>

                  <FormField control={form.control} name="location" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl><Input placeholder="e.g. Lekki Phase 1, Lagos" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="price" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price (in Naira, numbers only)</FormLabel>
                        <FormControl><Input type="number" placeholder="e.g. 85000000" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="price_label" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price Display Label</FormLabel>
                        <FormControl><Input placeholder="e.g. ₦85,000,000 or ₦5,500,000/year" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </div>

                {/* Specifications */}
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6">
                  <h2 className="text-xl font-display font-bold flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-gold" />
                    Specifications
                  </h2>

                  <div className="grid sm:grid-cols-3 gap-6">
                    <FormField control={form.control} name="area" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Area / Size</FormLabel>
                        <FormControl><Input placeholder="e.g. 450 sqm" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="bedrooms" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bedrooms</FormLabel>
                        <FormControl><Input type="number" min={0} max={20} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="bathrooms" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bathrooms</FormLabel>
                        <FormControl><Input type="number" min={0} max={20} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="image_url" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Image URL</FormLabel>
                      <FormControl><Input placeholder="https://example.com/property-image.jpg" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                {/* Features & Amenities */}
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6">
                  <h2 className="text-xl font-display font-bold flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    Features & Amenities
                  </h2>

                  <div>
                    <p className="text-sm font-medium mb-3">Features (select at least 2)</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {STANDARD_FEATURES.map((feature) => (
                        <Badge
                          key={feature}
                          variant="outline"
                          className={`cursor-pointer transition-all ${
                            selectedFeatures.includes(feature)
                              ? "bg-gold/20 border-gold text-gold"
                              : "bg-secondary/50 border-border text-muted-foreground hover:border-gold/50"
                          }`}
                          onClick={() => toggleFeature(feature)}
                        >
                          {selectedFeatures.includes(feature) && <CheckCircle className="w-3 h-3 mr-1" />}
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add custom feature..."
                        value={customFeature}
                        onChange={(e) => setCustomFeature(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addCustomFeature())}
                        className="max-w-xs"
                      />
                      <Button type="button" variant="outline" size="icon" onClick={addCustomFeature}>
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    {selectedFeatures.filter((f) => !STANDARD_FEATURES.includes(f)).length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {selectedFeatures.filter((f) => !STANDARD_FEATURES.includes(f)).map((f) => (
                          <Badge key={f} className="bg-gold/20 border-gold text-gold gap-1">
                            {f}
                            <X className="w-3 h-3 cursor-pointer" onClick={() => toggleFeature(f)} />
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-3">Amenities (optional)</p>
                    <div className="flex flex-wrap gap-2">
                      {STANDARD_AMENITIES.map((amenity) => (
                        <Badge
                          key={amenity}
                          variant="outline"
                          className={`cursor-pointer transition-all ${
                            selectedAmenities.includes(amenity)
                              ? "bg-gold/20 border-gold text-gold"
                              : "bg-secondary/50 border-border text-muted-foreground hover:border-gold/50"
                          }`}
                          onClick={() => toggleAmenity(amenity)}
                        >
                          {selectedAmenities.includes(amenity) && <CheckCircle className="w-3 h-3 mr-1" />}
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6">
                  <h2 className="text-xl font-display font-bold">Contact Information</h2>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="contact_name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="Your full name" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="contact_phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl><Input placeholder="+234..." {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="contact_email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email (optional)</FormLabel>
                      <FormControl><Input placeholder="email@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <Button type="submit" variant="gold" size="xl" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Property Listing"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
