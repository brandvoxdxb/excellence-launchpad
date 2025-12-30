import { motion } from "framer-motion";
import { IncludedVsAddon } from "./IncludedVsAddon";

const included = [
  "Organic social media management",
  "Content creation & publishing",
  "SEO content (blogs)",
  "Monthly reporting"
];

const addOns = [
  "Google Ads execution & spend",
  "Meta Ads execution & spend",
  "Influencer marketing & food bloggers",
  "Professional photography/videography production",
  "Media buying budgets"
];

export const CommercialClaritySection = () => {
  return (
    <section className="slider-section relative py-20">
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-center pt-16">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Transparency</p>
            <h2 className="font-sora text-heading-1 mb-4">Commercial Clarity</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              What's included in your plan vs. available add-ons.
            </p>
          </motion.div>

          <IncludedVsAddon included={included} addOns={addOns} />
        </div>
      </div>
    </section>
  );
};
