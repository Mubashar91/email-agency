import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Mail, Inbox, Filter, Settings, BarChart3, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  seoTopics?: never;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Inbox Zero: Strategies for Email Management Success",
    excerpt: "Master the art of inbox organization with proven strategies for achieving and maintaining inbox zero.",
    content: `
      <h2>Key Strategies</h2>
      <ul>
        <li>Priority-based email sorting</li>
        <li>Automated filtering and labeling</li>
        <li>Response templates and workflows</li>
        <li>Daily review and maintenance</li>
      </ul>
    `,
    author: "Email Team",
    date: "October 15, 2025",
    readTime: "7 min read",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Email Automation: Save Hours Every Week",
    excerpt: "Implement smart automation rules and filters to streamline your email workflow and boost productivity.",
    content: `
      <h2>Automation Tips</h2>
      <ul>
        <li>Smart filters and auto-labels</li>
        <li>Scheduled send and follow-ups</li>
        <li>Template responses for common queries</li>
        <li>Priority inbox configuration</li>
      </ul>
    `,
    author: "Automation Team",
    date: "October 8, 2025",
    readTime: "6 min read",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Email Security Best Practices for Businesses",
    excerpt: "Protect your business communications with essential email security measures and protocols.",
    content: `
      <h2>Security Essentials</h2>
      <ul>
        <li>Two-factor authentication setup</li>
        <li>Phishing detection and prevention</li>
        <li>Encryption and secure protocols</li>
        <li>Regular security audits</li>
      </ul>
    `,
    author: "Security Team",
    date: "September 28, 2025",
    readTime: "5 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Professional Email Etiquette Guide",
    excerpt: "Master the art of professional email communication with these essential etiquette tips and templates.",
    content: `
      <h2>Key Points</h2>
      <ul>
        <li>Subject line best practices</li>
        <li>Professional tone and formatting</li>
        <li>Response time expectations</li>
        <li>Email signature standards</li>
      </ul>
    `,
    author: "Communication Team",
    date: "September 15, 2025",
    readTime: "8 min read",
    category: "Etiquette",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Email Campaign Management: From Strategy to Execution",
    excerpt: "Learn how to plan, execute, and optimize email campaigns that drive engagement and conversions.",
    content: `
      <h2>Campaign Steps</h2>
      <ul>
        <li>Audience segmentation strategies</li>
        <li>Content planning and scheduling</li>
        <li>A/B testing and optimization</li>
        <li>Performance tracking and analytics</li>
      </ul>
    `,
    author: "Campaign Team",
    date: "August 30, 2025",
    readTime: "9 min read",
    category: "Campaigns",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Email Analytics: Measuring What Matters",
    excerpt: "Track the right metrics to understand email performance and make data-driven decisions.",
    content: `
      <h2>Key Metrics</h2>
      <ul>
        <li>Open rates and click-through rates</li>
        <li>Response time analytics</li>
        <li>Email volume and patterns</li>
        <li>Productivity measurements</li>
      </ul>
    `,
    author: "Analytics Team",
    date: "August 12, 2025",
    readTime: "8 min read",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  }
];

export const Blog = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="blog"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="relative mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            Email Insights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-[hsl(222,47%,11%)] dark:text-foreground">
            Blog & <span className="bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent">Email Guides</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Expert email management strategies, automation tips, security best practices, and productivity guides to master your inbox.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="group relative bg-card/80 backdrop-blur-sm border border-[hsl(215,32%,91%)] dark:border-border/40 rounded-2xl overflow-hidden hover:border-[hsl(var(--gold))]/60 dark:hover:border-[hsl(var(--gold))]/60 hover:shadow-[0_30px_80px_-20px_hsl(217_91%_60%/0.35),0_0_40px_hsl(217_91%_60%/0.15)] dark:hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.3),0_0_40px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-pointer w-full flex flex-col hover:-translate-y-2"
                onClick={() => navigate(`/blog/${post.id}`)}
                whileHover={{ 
                  y: -6, 
                  scale: 1.01,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.5
                  }
                }}
              >
                {/* Hover glow border */}
                <div className="pointer-events-none absolute -inset-px rounded-xl sm:rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[hsl(var(--gold))]/20 via-transparent to-[hsl(var(--brand-blue))]/20" />
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(217,91%,65%)] to-transparent opacity-60" />
                {/* Image */}
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle image gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-1 sm:px-3 backdrop-blur-[2px] bg-card/90 dark:bg-[hsl(var(--gold))] text-[hsl(222,47%,20%)] dark:text-white text-[10px] sm:text-xs font-bold rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))] mb-2 sm:mb-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 text-[hsl(222,47%,20%)] dark:text-white transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[hsl(220,30%,50%)] dark:text-white mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-[hsl(240,40%,92%)] dark:border-[hsl(240,30%,35%)]/50">
                    <span className="text-[10px] sm:text-xs text-[hsl(var(--brand-blue))] dark:text-[hsl(var(--brand-blue))] truncate">By {post.author}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card dark:bg-white/10 text-[hsl(var(--gold))] dark:text-white border border-[hsl(var(--gold))]/30 dark:border-white/20 hover:bg-gradient-to-r hover:from-[hsl(var(--gold))] hover:to-[hsl(var(--brand-blue))] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm">
                        <span className="hidden sm:inline">Read</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
