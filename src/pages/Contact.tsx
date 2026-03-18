import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@hartitudehempire.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Global Operations",
    description: "Multiple offices worldwide",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "24/7 Support Available",
    description: "For urgent inquiries",
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
    transition: { staggerChildren: 0.15 },
  },
};

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format phone number for WhatsApp (Nigeria country code)
    const whatsappNumber = "2347083777336";
    
    // Build the message with form data
    const messageText = `*New Contact Form Submission*

*Name:* ${formData.name.trim()}
*Email:* ${formData.email.trim()}
*Phone:* ${formData.phone.trim() || "Not provided"}
*Service Interest:* ${formData.service || "Not selected"}

*Message:*
${formData.message.trim()}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Please send the pre-filled message to complete your inquiry.",
    });
    
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              Let's Build Something{" "}
              <span className="text-gradient-gold">Great Together</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Have a question or ready to start your journey with us? We're here to help you succeed in technology, crypto investments, or real estate.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:border-gold/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display font-bold mb-1">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-card">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-display font-bold mb-4"
              >
                Send Us a Message
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground">
                Fill out the form below and our team will get back to you promptly.
              </motion.p>
            </motion.div>

            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border focus:border-gold"
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-gold"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background border-border focus:border-gold"
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Service Interest *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="w-full h-10 px-3 rounded-md bg-background border border-border text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  >
                    <option value="">Select a service</option>
                    <option value="tech">Tech Solutions</option>
                    <option value="crypto">CryptoTech & Global Exchange</option>
                    <option value="realestate">Homes & Properties</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Your Message *
                </label>
                <Textarea
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background border-border focus:border-gold resize-none"
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center pt-4">
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
