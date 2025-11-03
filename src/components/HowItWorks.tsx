import { motion, useReducedMotion } from "framer-motion";
import { Lightbulb, Palette, Layers, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    step: "Step 1",
    title: "Discovery & Strategy",
    description: "We dive deep into your brand, goals, and target audience. Define creative direction, style preferences, and project scope."
  },
  {
    icon: Palette,
    step: "Step 2",
    title: "Concept & Design",
    description: "Our designers create initial concepts and mockups. You review and provide feedback to refine the creative direction."
  },
  {
    icon: Layers,
    step: "Step 3",
    title: "Refinement & Polish",
    description: "We iterate based on your feedback, perfecting every detail. Multiple revision rounds ensure the design exceeds expectations."
  },
  {
    icon: Rocket,
    step: "Step 4",
    title: "Delivery & Launch",
    description: "Final files delivered in all required formats. Ongoing support available for updates, variations, and new projects."
  }
];

export const HowItWorks = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.section 
      id="how-it-works"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background z-20 min-h-[600px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: prefersReducedMotion ? 0.5 : 1.0, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="mb-10 sm:mb-16 md:mb-20 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white text-sm font-semibold rounded-full mb-4">
            How We Work (4 Steps)
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[hsl(222,47%,20%)] dark:text-foreground">
            How We <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent">Execute</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            From concept to delivery in 3–7 days for most projects. Collaborative process, stunning results, and exceptional quality.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative mb-12 sm:mb-16 last:mb-0"
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : (index % 2 === 0 ? -16 : 16), rotateY: 0 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: prefersReducedMotion ? 0.45 : 0.7, delay: index * 0.15, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <div className={`flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div 
                  className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] flex items-center justify-center text-white ring-1 ring-[hsl(var(--gold))]/30 shadow-[0_12px_30px_-12px_hsl(217_91%_60%/0.35)] relative group"
                  whileHover={prefersReducedMotion ? { scale: 1.02 } : { scale: 1.06, rotate: 6 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 rounded-full bg-[hsl(var(--gold))]/20 blur-md group-hover:blur-lg transition-all duration-500" />
                  <step.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white relative z-10" />
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 bg-[hsl(250,100%,98%)] dark:bg-[hsl(250,45%,20%)] text-[hsl(var(--gold))] dark:text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-2 border-[hsl(var(--gold))] dark:border-[hsl(var(--gold))]">
                    {index + 1}
                  </div>
                </motion.div>
                
                <motion.div 
                  className={[
                    "relative flex-1 bg-card border-2 rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-9 transition-all duration-300 group",
                    "dark:bg-card",
                    "text-[hsl(222,47%,20%)] dark:text-white",
                    "border-[hsl(250,40%,92%)] dark:border-[hsl(250,30%,35%)]/50",
                    "hover:border-[hsl(var(--gold))] dark:hover:border-[hsl(var(--gold))]",
                    "hover:shadow-[0_16px_40px_-14px_hsl(217_91%_60%/0.25)] dark:hover:shadow-[0_16px_40px_-14px_rgba(0,0,0,0.35)]",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold))]",
                    index % 2 === 1 ? 'md:text-right' : ''
                  ].join(' ')}
                  whileHover={{ y: -4, scale: 1.01 }}
                  tabIndex={0}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[hsl(var(--gold))]/10 dark:from-[hsl(var(--gold))]/20 via-[hsl(250,100%,98%)]/10 dark:via-[hsl(250,45%,20%)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))] font-semibold text-sm uppercase tracking-wider mb-3 inline-block px-3 py-1 bg-card dark:bg-[hsl(250,45%,20%)]/50 rounded-full">
                    {step.step}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[hsl(222,47%,20%)] dark:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[hsl(215,20%,35%)] dark:text-white leading-relaxed text-base sm:text-base md:text-lg">
                    {step.description}
                  </p>
                  
                  {/* Decorative corner */}
                  <div className={`absolute ${index % 2 === 1 ? 'top-0 left-0 border-t-2 border-l-2 rounded-tl-xl sm:rounded-tl-2xl' : 'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl sm:rounded-br-2xl'} w-12 h-12 sm:w-16 sm:h-16 border-[hsl(var(--gold))]/0 group-hover:border-[hsl(var(--gold))]/50 transition-all duration-500`} />
                </motion.div>
              </div>
              
              {index < steps.length - 1 && (
                <motion.div 
                  className="absolute left-16 top-32 w-0.5 h-16 bg-gradient-to-b from-[hsl(222,47%,20%)] via-[hsl(222,35%,25%)] to-[hsl(222,30%,30%)] hidden md:block"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: prefersReducedMotion ? 0.3 : 0.5, delay: index * 0.15 + 0.3 }}
                />
              )}
            </motion.div>
          ))}
          <motion.div 
            className="mt-8 sm:mt-12 flex justify-center"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 0.5 }}
          >
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] text-white hover:opacity-95 hover:scale-105 transition-all duration-300 font-semibold shadow-lg">
              Book Strategy Call
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};