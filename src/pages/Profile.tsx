import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { User, Mail, Phone, Building2, CheckCircle, XCircle, AlertCircle, Camera, FileText, Settings, LogOut, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Profile() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>({
    display_name: "",
    phone: "",
    bio: "",
    role: "blog_user",
    avatar_url: "",
  });
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saveLoading, setSaveLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Access Denied",
          description: "Please log in to view your profile dashboard.",
          variant: "destructive",
        });
        navigate("/login");
        return;
      }
      
      setUser(session.user);
      await fetchProfile(session.user.id, session.user.email);
      await fetchUserListings(session.user.id);
      setLoading(false);
    };

    checkUser();
  }, [navigate]);

  const fetchProfile = async (userId: string, email: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setProfile({
          display_name: data.display_name || "",
          phone: data.phone || "",
          bio: data.bio || "",
          role: data.role || "blog_user",
          avatar_url: data.avatar_url || "",
        });
      } else {
        // Fallback or create profile if profile doesn't exist
        const defaultName = email.split("@")[0];
        setProfile({
          display_name: defaultName,
          phone: "",
          bio: "",
          role: "blog_user",
          avatar_url: "",
        });
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  };

  const fetchUserListings = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("partner_listings")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setListings(data || []);
    } catch (err) {
      console.error("Error fetching listings:", err);
    }
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSaveLoading(true);
    try {
      // Upsert profile record
      const { error } = await supabase
        .from("profiles")
        .upsert({
          user_id: user.id,
          email: user.email,
          display_name: profile.display_name,
          phone: profile.phone,
          bio: profile.bio,
          role: profile.role,
          avatar_url: profile.avatar_url,
          updated_at: new Date().toISOString(),
        }, { onConflict: "user_id" });

      if (error) throw error;

      toast({
        title: "Profile Updated",
        description: "Your profile information has been saved successfully.",
      });
    } catch (err: any) {
      toast({
        title: "Update Failed",
        description: err.message || "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaveLoading(false);
    }
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Profile picture must be less than 2MB.",
        variant: "destructive",
      });
      return;
    }

    setUploadLoading(true);
    try {
      const fileExt = file.name.split(".").pop();
      const filePath = `${user.id}/${Date.now()}.${fileExt}`;

      // Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      // Save public URL to local state
      setProfile((prev: any) => ({ ...prev, avatar_url: publicUrl }));

      // Update database profile
      const { error: dbError } = await supabase
        .from("profiles")
        .upsert({
          user_id: user.id,
          avatar_url: publicUrl,
          email: user.email,
          updated_at: new Date().toISOString(),
        }, { onConflict: "user_id" });

      if (dbError) throw dbError;

      toast({
        title: "Avatar Uploaded",
        description: "Your profile picture has been updated successfully.",
      });
    } catch (err: any) {
      toast({
        title: "Upload Failed",
        description: err.message || "Failed to upload avatar. Please check bucket settings.",
        variant: "destructive",
      });
    } finally {
      setUploadLoading(false);
    }
  };

  const markAsSold = async (listingId: string) => {
    try {
      const { error } = await supabase
        .from("partner_listings")
        .update({ is_sold: true })
        .eq("id", listingId);

      if (error) throw error;

      // Update local listing state
      setListings((prevListings) =>
        prevListings.map((l) => (l.id === listingId ? { ...l, is_sold: true } : l))
      );

      toast({
        title: "Property Marked as Sold!",
        description: "The listing will now display a SOLD OUT stamp immediately.",
      });
    } catch (err: any) {
      toast({
        title: "Update Failed",
        description: err.message || "Failed to mark property as sold.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Logged Out", description: "You have successfully logged out." });
    navigate("/");
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-24 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Left Column: Profile Card */}
            <motion.div variants={fadeInUp} className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" onClick={handleLogout} className="text-muted-foreground hover:text-red-500">
                    <LogOut className="w-5 h-5" />
                  </Button>
                </div>

                {/* Profile Picture Upload */}
                <div className="relative w-32 h-32 mx-auto mb-6 group">
                  <div className="w-full h-full rounded-full border-2 border-gold/30 overflow-hidden bg-muted flex items-center justify-center">
                    {profile.avatar_url ? (
                      <img src={profile.avatar_url} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-16 h-16 text-muted-foreground" />
                    )}
                  </div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploadLoading}
                    className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-gold hover:bg-gold-dark text-primary-foreground flex items-center justify-center border border-border shadow-lg transition-transform group-hover:scale-110"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleAvatarUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  {uploadLoading && (
                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center text-xs text-white">
                      Uploading...
                    </div>
                  )}
                </div>

                <h2 className="text-2xl font-display font-bold text-foreground mb-1">
                  {profile.display_name || "Guest User"}
                </h2>
                <p className="text-sm text-muted-foreground mb-4">{user?.email}</p>
                
                <div className="flex justify-center gap-2">
                  <Badge variant="outline" className="bg-gold/10 border-gold/30 text-gold uppercase text-xs">
                    {profile.role === "partner" ? "Property Partner" : "Blog Reader"}
                  </Badge>
                </div>
              </div>

              {/* Profile Details Form */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-gold" />
                  Profile Settings
                </h3>

                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase">Display Name</label>
                    <Input
                      value={profile.display_name}
                      onChange={(e) => setProfile({ ...profile, display_name: e.target.value })}
                      placeholder="Display Name"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase">Phone Number</label>
                    <Input
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      placeholder="e.g. +234 811 298 9898"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase">Account Type</label>
                    <select
                      value={profile.role}
                      onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                      className="w-full h-10 px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-1 focus:ring-gold text-sm mt-1"
                    >
                      <option value="blog_user">Blog Reader Only</option>
                      <option value="partner">Real Estate Partner / Seller</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase">Short Bio</label>
                    <Textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      placeholder="A short description about yourself..."
                      rows={3}
                      className="mt-1 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="gold" className="w-full" disabled={saveLoading}>
                    {saveLoading ? "Saving..." : "Save Profile Details"}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Right Column: Listings Management */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                  <h3 className="text-xl font-display font-bold flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-gold" />
                    My Property Listings
                  </h3>
                  {profile.role === "partner" && (
                    <Button variant="gold" size="sm" onClick={() => navigate("/list-property")}>
                      List New Property
                    </Button>
                  )}
                </div>

                {listings.length === 0 ? (
                  <div className="text-center py-16">
                    <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h4 className="text-lg font-bold">No Listings Found</h4>
                    <p className="text-muted-foreground max-w-sm mx-auto mt-2 text-sm">
                      {profile.role === "partner"
                        ? "You haven't listed any properties yet. Click the button above to submit your first listing!"
                        : "Switch your account type to 'Real Estate Partner' to start listing and managing properties."}
                    </p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {listings.map((item) => (
                      <Card key={item.id} className="overflow-hidden bg-background/50 border-border hover:border-gold/30 transition-all flex flex-col h-full relative">
                        {/* Sold Out badge stamp in corner */}
                        {item.is_sold && (
                          <div className="absolute top-2 left-2 z-20 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                            Sold Out
                          </div>
                        )}

                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={item.image_url || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 right-2">
                            {item.status === "approved" && (
                              <Badge className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" /> Approved
                              </Badge>
                            )}
                            {item.status === "pending" && (
                              <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> Pending Review
                              </Badge>
                            )}
                            {item.status === "rejected" && (
                              <Badge className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-1">
                                <XCircle className="w-3 h-3" /> Rejected
                              </Badge>
                            )}
                          </div>
                        </div>

                        <CardContent className="p-4 flex flex-col justify-between flex-grow space-y-3">
                          <div>
                            <h4 className="font-display font-semibold text-sm line-clamp-1">{item.title}</h4>
                            <p className="text-xs text-muted-foreground">{item.location}</p>
                            <p className="text-gold font-bold font-display text-sm mt-1">{item.price_label}</p>
                          </div>

                          <div className="flex flex-col gap-1.5 pt-2 border-t border-border">
                            {item.status === "approved" && !item.is_sold && (
                              <Button
                                size="sm"
                                variant="gold"
                                onClick={() => markAsSold(item.id)}
                                className="w-full flex items-center justify-center gap-1 text-xs"
                              >
                                <Tag className="w-3 h-3" /> Mark as SOLD OUT
                              </Button>
                            )}

                            {item.is_sold && (
                              <div className="w-full text-center py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase rounded flex items-center justify-center gap-1">
                                <CheckCircle className="w-3.5 h-3.5" /> Stamp Applied: Sold Out
                              </div>
                            )}

                            {item.commission_amount && (
                              <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                                <span>Commission Paid (10%):</span>
                                <span className="font-semibold">₦{item.commission_amount.toLocaleString()}</span>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
