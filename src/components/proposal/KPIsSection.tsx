import { motion } from "framer-motion";
import { KPICard } from "./KPICard";

const kpiMetrics = [
  { channel: "Instagram/Facebook", kpis: ["Reach", "Engagement", "Saves", "Profile visits"] },
  { channel: "TikTok/Snapchat", kpis: ["Views", "Watch time", "Shares"] },
  { channel: "YouTube", kpis: ["Watch time", "Subscribers", "Shorts views"] },
  { channel: "LinkedIn", kpis: ["Profile visits", "Reach", "Enquiries"] },
  { channel: "Website/SEO", kpis: ["Organic traffic", "Product views", "Conversion clicks"] },
];

export const KPIsSection = () => {
  return (
    <section className="slider-section relative py-20">
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-center pt-16">
        <div className="w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Measurement</p>
            <h2 className="font-sora text-heading-1 mb-4">KPI Tracking</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              How we'll measure success across each platform and channel.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {kpiMetrics.map((metric, i) => (
              <KPICard key={metric.channel} metric={metric} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
