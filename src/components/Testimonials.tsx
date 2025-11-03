import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emma Rodriguez",
    company: "Luxe Beauty Co.",
    role: "Founder",
    content: "We scaled Meta + Google without sacrificing ROAS. The weekly creative tests and budget guardrails made growth predictable.",
    rating: 5
  },
  {
    name: "David Chen",
    company: "Peak Performance",
    role: "CEO",
    content: "LinkedIn + Search finally drove qualified SQLs at a lower blended CAC. Reporting was clear and actionable.",
    rating: 5
  },
  {
    name: "Sophie Martens",
    company: "Urban Eats",
    role: "Marketing Lead",
    content: "TikTok + Snapchat added real incremental orders. Creative iterations each week kept CPA trending down.",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2 text-[hsl(222,47%,11%)] dark:text-foreground">
            Trusted for <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent">Ad Performance</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
            Real results—lower CPA, higher ROAS, and faster learning loops across Google, Meta, TikTok, Snapchat, LinkedIn, and X.
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
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-card-foreground dark:text-white mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-[hsl(220,40%,92%)] dark:border-border/50 pt-3 sm:pt-4">
                <p className="text-sm sm:text-base font-bold text-[hsl(222,47%,20%)] dark:text-white">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-[hsl(217,91%,65%)] dark:text-[hsl(217,91%,75%)]">{testimonial.role}</p>
                <p className="text-xs sm:text-sm text-[hsl(220,90%,60%)] dark:text-white">{testimonial.company}</p>
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
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[hsl(250,50%,20%)] dark:text-white">
              Case Study: <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent">3.4x ROAS Scaling Across Channels</span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[hsl(220,30%,50%)] dark:text-white mb-5 sm:mb-6 leading-relaxed max-w-3xl">
              See how we combined PMAX + Meta creative testing to scale budget while improving CPA—validated in GA4.
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