import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, User, ArrowLeft, MessageSquare, Send, Trash2, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import {
  getBlogPostById,
  getRelatedPosts,
  BlogPost,
} from "@/services/blogService";

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
  user_id: string;
}

interface UserState {
  id: string;
  email?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserState | null>(null);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (id) {
      fetchPostAndRelated(id);
      fetchComments(id);
    }
    checkUser();
  }, [id]);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      setUser(session.user);
      const { data: profile } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("user_id", session.user.id)
        .maybeSingle();
      if (profile?.display_name) {
        setAuthorName(profile.display_name);
      }
    }

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
  };

  const fetchPostAndRelated = async (postId: string) => {
    setLoading(true);
    try {
      const singlePost = await getBlogPostById(postId);
      setPost(singlePost);

      if (singlePost) {
        const related = await getRelatedPosts(singlePost.category, singlePost.id, 3);
        setRelatedPosts(related);
      }
    } catch (error) {
      console.error("Error fetching blog post:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async (postId: string) => {
    try {
      const { data, error } = await supabase
        .from("blog_comments")
        .select("*")
        .eq("post_id", postId)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setComments(data as Comment[]);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to comment on this post.",
        variant: "destructive",
      });
      return;
    }

    if (!newComment.trim() || !authorName.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your name and comment.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase.from("blog_comments").insert({
        post_id: id,
        user_id: user.id,
        author_name: authorName.trim(),
        content: newComment.trim(),
      });

      if (error) throw error;

      toast({
        title: "Comment Posted",
        description: "Your comment has been added successfully.",
      });

      setNewComment("");
      if (id) fetchComments(id);
    } catch (error: any) {
      console.error("Error posting comment:", error);
      toast({
        title: "Error",
        description: "Failed to post comment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    try {
      const { error } = await supabase
        .from("blog_comments")
        .delete()
        .eq("id", commentId);

      if (error) throw error;

      toast({
        title: "Comment Deleted",
        description: "Your comment has been removed.",
      });

      if (id) fetchComments(id);
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast({
        title: "Error",
        description: "Failed to delete comment.",
        variant: "destructive",
      });
    }
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

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-pulse">
              <div className="h-8 bg-muted rounded w-1/4 mb-4" />
              <div className="h-12 bg-muted rounded mb-4" />
              <div className="h-96 bg-muted rounded mb-8" />
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded" />
                <div className="h-4 bg-muted rounded w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog">
              <Button variant="gold">Back to Blog</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Post Header */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-8"
            >
              <Badge className={getCategoryColor(post.category)}>
                {post.category.replace("-", " ").toUpperCase()}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.published_at
                    ? format(new Date(post.published_at), "MMMM dd, yyyy")
                    : format(new Date(post.created_at), "MMMM dd, yyyy")}
                </span>
                {post.source && (
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.source}
                  </span>
                )}
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <img
                src={post.image_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200"}
                alt={post.title}
                className="w-full h-[350px] md:h-[480px] object-cover rounded-2xl shadow-md"
              />
            </motion.div>

            {/* Post Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-12"
            >
              {post.description && (
                <p className="text-xl text-foreground font-medium mb-8 leading-relaxed italic border-l-4 border-gold pl-6 py-1 bg-gold/5 rounded-r-lg">
                  {post.description}
                </p>
              )}
              
              <div className="text-foreground/90 leading-relaxed text-lg space-y-6">
                {(post.content || post.description || "").split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {post.source && (
                <div className="mt-12 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Article courtesy of <span className="text-gold font-semibold">{post.source}</span>
                  </p>
                </div>
              )}
            </motion.div>

            {/* Comments Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="border-t border-border pt-12 mb-16"
            >
              <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-gold" />
                Discussion & Comments ({comments.length})
              </h2>

              {/* Comment Form */}
              {user ? (
                <form onSubmit={handleSubmitComment} className="mb-12">
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Your Name</label>
                      <Input
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Your Comment</label>
                      <Textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write your comment..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" variant="gold" disabled={submitting}>
                      <Send className="w-4 h-4 mr-2" />
                      {submitting ? "Posting..." : "Post Comment"}
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="bg-card border border-border rounded-xl p-6 mb-12 text-center">
                  <p className="text-muted-foreground mb-4">
                    Please log in to share your thoughts and join the conversation.
                  </p>
                  <Link to="/login">
                    <Button variant="gold">Login to Comment</Button>
                  </Link>
                </div>
              )}

              {/* Comments List */}
              <div className="space-y-6">
                {comments.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8 italic">
                    No comments yet. Be the first to join the conversation!
                  </p>
                ) : (
                  comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="bg-card border border-border rounded-xl p-6 shadow-sm"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarFallback className="bg-gold/20 text-gold font-bold">
                              {comment.author_name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{comment.author_name}</h4>
                            <p className="text-xs text-muted-foreground">
                              {format(new Date(comment.created_at), "MMM dd, yyyy • h:mm a")}
                            </p>
                          </div>
                        </div>
                        {user?.id === comment.user_id && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteComment(comment.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      <p className="mt-4 text-foreground/90 leading-relaxed">{comment.content}</p>
                    </div>
                  ))
                )}
              </div>
            </motion.div>

            {/* Related Articles Section */}
            {relatedPosts.length > 0 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="border-t border-border pt-12"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gold font-bold">Keep Reading</span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-1">
                      Related Articles
                    </h2>
                  </div>
                  <Button variant="ghost" className="text-gold hover:text-gold/80" asChild>
                    <Link to="/blog">
                      View All Articles
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relPost) => (
                    <div
                      key={relPost.id}
                      className="bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={relPost.image_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800"}
                            alt={relPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className={getCategoryColor(relPost.category)}>
                              {relPost.category.replace("-", " ").toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {relPost.published_at
                              ? format(new Date(relPost.published_at), "MMM dd, yyyy")
                              : format(new Date(relPost.created_at), "MMM dd, yyyy")}
                          </p>
                          <h4 className="font-bold text-base mb-2 group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                            {relPost.title}
                          </h4>
                          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                            {relPost.description}
                          </p>
                        </div>
                      </div>
                      <div className="p-5 pt-0">
                        <Button variant="goldOutline" size="sm" className="w-full group/btn" asChild>
                          <Link to={`/blog/${relPost.id}`}>
                            Read Article
                            <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
}