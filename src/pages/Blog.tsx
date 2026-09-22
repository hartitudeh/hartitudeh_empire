import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, User, Search, ArrowRight, RefreshCw } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import {
  fetchAllBlogPosts,
  triggerDailyNewsFetch,
  BlogPost,
} from "@/services/blogService";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categories = [
  { id: "all", name: "All Posts" },
  { id: "tech", name: "Technology" },
  { id: "crypto", name: "Crypto" },
  { id: "real-estate", name: "Real Estate" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadData();
  }, [selectedCategory, searchQuery]);

  const loadData = async () => {
    setLoading(true);
    // Background sync daily news
    triggerDailyNewsFetch().catch(() => {});
    
    const data = await fetchAllBlogPosts(selectedCategory, searchQuery);
    setPosts(data);
    setLoading(false);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await triggerDailyNewsFetch();
    const data = await fetchAllBlogPosts(selectedCategory, searchQuery);
    setPosts(data);
    setRefreshing(false);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "tech":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "crypto":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case "real-estate":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      default:
        return "bg-gold/10 text-gold border-gold/30";
    }
  };

  const featuredPosts = posts.slice(0, 5);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-background via-muted/20 to-background border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="outline" className="mb-4 border-gold/50 text-gold px-4 py-1">
              Daily Updated Blog & News
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Latest <span className="text-gold">Insights & Articles</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore daily updated industry insights, expert analyses, and tech trends across Technology, Cryptocurrency, and Real Estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Daily Carousel Section */}
      {featuredPosts.length > 0 && !searchQuery && selectedCategory === "all" && (
        <section className="py-12 bg-muted/10 border-b border-border/60">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold font-bold">Featured Today</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-1">
                  Daily Trending Articles
                </h2>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={refreshing}
                className="border-gold/30 hover:border-gold text-foreground"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? "animate-spin text-gold" : ""}`} />
                {refreshing ? "Updating..." : "Sync Daily Feed"}
              </Button>
            </div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {featuredPosts.map((post) => (
                  <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 h-full flex flex-col justify-between group shadow-sm hover:shadow-md">
                      <div>
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={post.image_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800"}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className={getCategoryColor(post.category)}>
                              {post.category.replace("-", " ").toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {post.published_at
                                ? format(new Date(post.published_at), "MMM dd, yyyy")
                                : format(new Date(post.created_at), "MMM dd, yyyy")}
                            </span>
                            {post.source && (
                              <span className="flex items-center gap-1">
                                <User className="w-3.5 h-3.5" />
                                {post.source}
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                            {post.description}
                          </p>
                        </div>
                      </div>
                      <div className="px-6 pb-6 pt-2">
                        <Button variant="goldOutline" size="sm" className="w-full group/btn" asChild>
                          <Link to={`/blog/${post.id}`}>
                            Read Full Details
                            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative static translate-y-0 bg-card border-border hover:bg-gold hover:text-background" />
                <CarouselNext className="relative static translate-y-0 bg-card border-border hover:bg-gold hover:text-background" />
              </div>
            </Carousel>
          </div>
        </section>
      )}

      {/* Filters Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "gold" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="font-medium"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-2xl overflow-hidden animate-pulse border border-border">
                  <div className="h-48 bg-muted" />
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-muted rounded w-1/4" />
                    <div className="h-6 bg-muted rounded" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">No articles found matching your criteria.</p>
              <Button variant="gold" onClick={handleRefresh}>
                Refresh Blog Feed
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
                >
                  <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 group h-full flex flex-col justify-between shadow-sm hover:shadow-md">
                    <div>
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={post.image_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={getCategoryColor(post.category)}>
                            {post.category.replace("-", " ").toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.published_at
                              ? format(new Date(post.published_at), "MMM dd, yyyy")
                              : format(new Date(post.created_at), "MMM dd, yyyy")}
                          </span>
                          {post.source && (
                            <span className="flex items-center gap-1">
                              <User className="w-3.5 h-3.5" />
                              {post.source}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                          {post.description}
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-2">
                      <Button variant="gold" className="w-full font-semibold group/btn" asChild>
                        <Link to={`/blog/${post.id}`}>
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}