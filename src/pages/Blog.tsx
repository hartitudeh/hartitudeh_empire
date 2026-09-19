import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, User, MessageSquare, Search, Filter } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  category: string;
  source: string | null;
  published_at: string | null;
  created_at: string;
}

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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPosts();
    // Trigger news fetch on first load
    fetchLatestNews();
  }, []);

  const fetchLatestNews = async () => {
    try {
      await supabase.functions.invoke('fetch-news');
      // Refetch posts after news update
      fetchPosts();
    } catch (error) {
      console.error('Error fetching latest news:', error);
    }
  };

  const fetchPosts = async () => {
    try {
      let query = supabase
        .from('blog_posts')
        .select('id, title, description, image_url, category, source, published_at, created_at')
        .order('published_at', { ascending: false });

      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      if (searchQuery) {
        query = query.ilike('title', `%${searchQuery}%`);
      }

      const { data, error } = await query;

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory, searchQuery]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tech':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'crypto':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'real-estate':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      default:
        return 'bg-gold/10 text-gold border-gold/20';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="outline" className="mb-4 border-gold/50 text-gold">
              Our Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Latest <span className="text-gold">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest news and insights on Technology, Cryptocurrency, and Real Estate.
            </p>
          </motion.div>
        </div>
      </section>

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
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-xl overflow-hidden animate-pulse">
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
              <p className="text-muted-foreground text-lg">No articles found.</p>
              <Button variant="gold" className="mt-4" onClick={fetchLatestNews}>
                Refresh Articles
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 group h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image_url || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800'}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={getCategoryColor(post.category)}>
                            {post.category.replace('-', ' ').toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.published_at
                              ? format(new Date(post.published_at), 'MMM dd, yyyy')
                              : format(new Date(post.created_at), 'MMM dd, yyyy')}
                          </span>
                          {post.source && (
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.source}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}