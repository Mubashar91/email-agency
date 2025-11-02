import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, TrendingUp, FileText, Settings, BarChart3, Link } from "lucide-react";
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
    title: "Brand Identit y 101: Logo, Color, Type, Voice",
    excerpt: "A practical framework for building a memorable brand system that scales across print and digital.",
    content: `
      <h2>Core Elements</h2>
      <ul>
        <li>Logo systems and lockups</li>
        <li>Color palette with accessible contrast</li>
        <li>Typography pairings and hierarchy</li>
        <li>Voice, tone, and usage rules</li>
      </ul>
      <p>Codify your brand in a concise guidelines doc to keep quality consistent.</p>
    `,
    author: "Design Team",
    date: "October 15, 2025",
    readTime: "7 min read",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "UI/UX Redesign: Increase Conversions with Clarity",
    excerpt: "How to restructure pages, simplify flows, and improve visual hierarchy to boost conversion rates.",
    content: `
      <h2>What Moves the Needle</h2>
      <ul>
        <li>Reduce cognitive load with clear sections</li>
        <li>Primary action prominence and spacing</li>
        <li>Consistent components and states</li>
        <li>Microcopy that removes friction</li>
      </ul>
    `,
    author: "Product Design",
    date: "October 8, 2025",
    readTime: "6 min read",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1524646432689-5df3f03a2c1c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Color Theory for Modern Brands",
    excerpt: "Choosing vibrant palettes that feel premium, accessible, and flexible across light/dark modes.",
    content: `
      <h2>Practical Tips</h2>
      <ul>
        <li>Pick a vibrant brand hue + neutral base</li>
        <li>Verify AA/AAA contrast for text</li>
        <li>Design complementary hover/active states</li>
        <li>Test in real components, not swatches</li>
      </ul>
    `,
    author: "Visual Design",
    date: "September 28, 2025",
    readTime: "5 min read",
    category: "Color",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Design Systems: Ship Faster with Consistency",
    excerpt: "Build a component library and guidelines to scale design quality across teams.",
    content: `
      <h2>System Foundations</h2>
      <ul>
        <li>Tokenize color, type, and spacing</li>
        <li>Reusable components with states</li>
        <li>Usage guidelines and do/don'ts</li>
        <li>Versioning and governance</li>
      </ul>
    `,
    author: "Systems Team",
    date: "September 15, 2025",
    readTime: "8 min read",
    category: "Design Systems",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Motion Graphics for Social: Stop the Scroll",
    excerpt: "Turn static assets into short, impactful animations optimized for platforms.",
    content: `
      <h2>Motion Checklist</h2>
      <ul>
        <li>Hook in first 2 seconds</li>
        <li>Readable typography with safe margins</li>
        <li>On-brand color and rhythm</li>
        <li>Export presets per platform</li>
      </ul>
    `,
    author: "Motion Lab",
    date: "August 30, 2025",
    readTime: "9 min read",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Typography Pairings That Elevate Your Brand",
    excerpt: "Practical serif/sans pairings with scale and rhythm that feel modern and timeless.",
    content: `
      <h2>Type Principles</h2>
      <ul>
        <li>Limit families and define a scale</li>
        <li>Contrast headings and body thoughtfully</li>
        <li>Line-height and measure for readability</li>
        <li>Fallbacks for web performance</li>
      </ul>
    `,
    author: "Type Studio",
    date: "August 12, 2025",
    readTime: "8 min read",
    category: "Typography",
    image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=800&auto=format&fit=crop&q=80"
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
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-[hsl(270,80%,65%)] via-[hsl(260,85%,60%)] to-[hsl(220,90%,60%)] text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            Latest Insights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-[hsl(250,50%,20%)] dark:text-foreground">
            Blog & <span className="bg-gradient-to-r from-[hsl(270,80%,65%)] to-[hsl(220,90%,60%)] bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Design playbooks for brand identity, UI/UX, typography, color, motion, and systems—built to elevate your visuals and conversions.
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-[hsl(250,100%,98%)] dark:bg-gradient-to-br dark:from-[hsl(250,50%,15%)] dark:via-[hsl(250,50%,18%)] dark:to-[hsl(250,50%,20%)] border-2 border-[hsl(250,40%,92%)] dark:border-[hsl(250,30%,35%)]/50 rounded-xl sm:rounded-xl lg:rounded-2xl overflow-hidden hover:border-[hsl(270,80%,65%)] dark:hover:border-[hsl(270,80%,65%)] hover:shadow-[0_30px_80px_-20px_rgba(167,139,250,0.35)] dark:hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer w-full flex flex-col hover:-translate-y-1"
                onClick={() => navigate(`/blog/${post.id}`)}
                whileHover={{ y: -8 }}
              >
                {/* Hover glow border */}
                <div className="pointer-events-none absolute -inset-px rounded-xl sm:rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[hsl(270,80%,65%)]/20 via-transparent to-[hsl(220,90%,60%)]/20" />
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(270,80%,65%)] to-transparent opacity-60" />
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
                    <span className="px-2.5 py-1 sm:px-3 backdrop-blur-[2px] bg-[hsl(250,100%,98%)]/90 dark:bg-[hsl(270,80%,65%)] text-[hsl(250,50%,20%)] dark:text-white text-[10px] sm:text-xs font-bold rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-[hsl(270,80%,65%)] dark:text-[hsl(270,80%,75%)] mb-2 sm:mb-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 text-[hsl(250,50%,20%)] dark:text-white transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[hsl(250,30%,50%)] dark:text-[hsl(270,80%,85%)] mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-[hsl(240,40%,92%)] dark:border-[hsl(240,30%,35%)]/50">
                    <span className="text-[10px] sm:text-xs text-[hsl(260,80%,60%)] dark:text-[hsl(260,80%,75%)] truncate">By {post.author}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[hsl(250,100%,98%)] dark:bg-white/10 text-[hsl(270,80%,65%)] dark:text-white border border-[hsl(270,80%,65%)]/30 dark:border-white/20 hover:bg-gradient-to-r hover:from-[hsl(270,80%,65%)] hover:to-[hsl(220,90%,60%)] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm">
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
