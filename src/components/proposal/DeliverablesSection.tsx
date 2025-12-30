import { motion } from "framer-motion";
import { DeliverableTable } from "./DeliverableTable";

interface DeliverablesSectionProps {
  selectedPlan: "A" | "B";
}

const deliverables = [
  { platform: "Instagram", planA: "Primary + Reels + Posts + Stories", planB: "Higher frequency + premium reels + daily stories" },
  { platform: "Facebook", planA: "Cross-posting + community posts", planB: "Stronger community + daily stories" },
  { platform: "TikTok", planA: "8–10 short videos", planB: "12–14 short videos" },
  { platform: "Snapchat", planA: "6–8 BTS clips", planB: "10–12 BTS clips" },
  { platform: "YouTube", planA: "Shorts repurposed + 1 optional long video", planB: "2 long videos + 6 Shorts" },
  { platform: "LinkedIn", planA: "4–6 credibility posts", planB: "8–10 authority posts" },
  { platform: "Website/SEO", planA: "SEO setup + 2 blogs/month", planB: "Full SEO + 3–4 blogs/month + CRO" },
];

export const DeliverablesSection = ({ selectedPlan }: DeliverablesSectionProps) => {
  return (
    <section className="slider-section relative py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-start">
        <div className="w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">What You Get</p>
            <h2 className="font-sora text-heading-1 mb-4">Monthly Deliverables</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Platform-by-platform breakdown of content deliverables for each plan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-card border border-border/50"
          >
            <DeliverableTable rows={deliverables} selectedPlan={selectedPlan} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
