import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "TechVentures Inc.",
    role: "CEO",
    content: "Their email management transformed my productivity. I went from drowning in 200+ daily emails to having a perfectly organized inbox. Response times improved by 75%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "GrowthLabs",
    role: "Marketing Director",
    content: "The email campaign management service doubled our open rates and tripled conversions. Their automation workflows saved us 15 hours per week.",
    rating: 5
  },
  {
    name: "Jessica Thompson",
    company: "Stellar Consulting",
    role: "Founder",
    content: "Best investment for my business. They handle everything from inbox organization to client communications. I can finally focus on strategy instead of email chaos.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <motion.section 
      id="testimonials"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background text-foreground z-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground dark:text-white leading-tight tracking-tight px-2">
            Trusted by <span className="text-primary">500+ Professionals</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2 dark:text-white/90">
            Real results—inbox zero achieved, response times reduced by 75%, and email productivity increased across all industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="relative bg-card/50 backdrop-blur-sm border border-[hsl(215,32%,91%)] dark:border-border/40 rounded-xl p-5 sm:p-6 md:p-8 hover:border-[hsl(var(--gold))]/60 dark:hover:border-[hsl(var(--gold))]/60 hover:shadow-[0_20px_60px_-15px_hsl(217_91%_60%/0.3),0_0_30px_hsl(217_91%_60%/0.1)] dark:hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.25),0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 hover:-translate-y-2 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.12, 
                ease: [0.23, 1, 0.32, 1],
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 30
                }
              }}
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1 * i, type: "spring", stiffness: 200 }}
                  >
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold drop-shadow-[0_2px_4px_rgba(59,130,246,0.3)]" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-5 md:mb-6 leading-relaxed dark:text-white/90">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-[hsl(220,40%,92%)] dark:border-border/50 pt-3 sm:pt-4">
                <p className="text-sm sm:text-base font-bold text-foreground">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-[hsl(215,32%,91%)] dark:border-border/40 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto hover:border-[hsl(var(--gold))]/70 dark:hover:border-[hsl(var(--gold))]/70 hover:shadow-[0_25px_70px_-15px_hsl(217_91%_60%/0.35),0_0_40px_hsl(217_91%_60%/0.15)] dark:hover:shadow-[0_25px_70px_-15px_rgba(59,130,246,0.3),0_0_40px_rgba(59,130,246,0.1)] transition-all duration-300 overflow-hidden group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="text-left">
            <span className="inline-block px-3 py-1 bg-card dark:bg-[hsl(250,45%,20%)]/50 text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              Success Story
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              Case Study: <span className="text-primary">75% Time Saved with Email Management</span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-6 leading-relaxed max-w-3xl">
              See how we helped a Fortune 500 executive achieve inbox zero and reduce email processing time from 4 hours to 1 hour daily.
            </p>
            <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] text-white hover:opacity-95 transition-all duration-300 hover:scale-105 font-semibold border-0">
              View Full Case Study
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};