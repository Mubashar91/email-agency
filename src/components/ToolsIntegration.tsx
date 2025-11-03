import { motion } from "framer-motion";

const tools = [
  { name: "Google Ads", category: "Ads" },
  { name: "Meta Ads", category: "Ads" },
  { name: "TikTok Ads", category: "Ads" },
  { name: "Snapchat Ads", category: "Ads" },
  { name: "LinkedIn Ads", category: "Ads" },
  { name: "X Ads (Twitter)", category: "Ads" },
  { name: "GA4", category: "Analytics" },
  { name: "Google Tag Manager", category: "Analytics" },
  { name: "Looker Studio", category: "Analytics" },
  { name: "Supermetrics", category: "Analytics" },
  { name: "Segment", category: "CDP" },
  { name: "Mixpanel", category: "Product" },
  { name: "Hotjar", category: "UX" },
  { name: "Meta Pixel", category: "Tracking" },
  { name: "LinkedIn Insight Tag", category: "Tracking" },
  { name: "TikTok Pixel", category: "Tracking" },
  { name: "Server‑Side GTM", category: "Tracking" },
  { name: "Shopify/GA", category: "Ecom" }
];

const categories = ["Ads", "Analytics", "Tracking", "CDP", "Product", "UX", "Ecom"];

export const ToolsIntegration = () => {
  return (
    <motion.section 
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background z-60"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
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
            Seamless <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent">Ad & Analytics Integrations</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
            We connect platforms end‑to‑end—ads, pixels, GA4/GTM, and dashboards—so budgets flow into measurable revenue.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {tools.slice(0, 18).map((tool, index) => (
              <motion.div 
                key={index}
                className="bg-card border-2 border-[hsl(215,32%,91%)] dark:border-[hsl(250,30%,35%)]/50 rounded-lg p-3 sm:p-4 text-center hover:border-[hsl(var(--gold))] dark:hover:border-[hsl(var(--gold))] hover:shadow-[0_10px_30px_-10px_hsl(217_91%_60%/0.25)] dark:hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              >
                <p className="text-sm sm:text-base font-semibold text-[hsl(222,47%,20%)] dark:text-white transition-colors">
                  {tool.name}
                </p>
                <p className="text-[10px] sm:text-xs text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))] mt-1">
                  {tool.category}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-card border-2 border-[hsl(215,32%,91%)] dark:border-[hsl(250,30%,35%)]/50 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg text-[hsl(222,47%,20%)] dark:text-white mb-3 sm:mb-4">
              <span className="font-bold text-[hsl(var(--gold))] dark:text-[hsl(var(--gold))]">Using a different system?</span> We adapt. 
            </p>
            <p className="text-sm sm:text-base text-[hsl(215,20%,35%)] dark:text-white">
              Share your format or API—CSV, Sheets, CRM, or DB. We'll match your workflow end‑to‑end.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};