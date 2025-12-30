import { motion } from "framer-motion";
import { IncludedVsAddon } from "./IncludedVsAddon";
import { Info } from "lucide-react";

const included = [
  "Organic social media management",
  "Content creation & publishing",
  "SEO content (blogs)",
  "Monthly reporting",
  "Google Ads execution (campaign setup & management)",
  "Meta Ads execution (campaign setup & management)"
];

const addOns = [
  "Google Ads spend (ad budget)",
  "Meta Ads spend (ad budget)",
  "Influencer marketing & food bloggers",
  "Professional photography/videography production",
  "Media buying budgets"
];

export const CommercialClaritySection = () => {
  return (
    <section className="slider-section relative py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-start">
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

          {/* Ad Spend Clarification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20"
          >
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-foreground mb-1">About Ads Execution & Spend</p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Execution is included:</strong> We provide full campaign setup, management, optimization, and reporting for Google Ads and Meta Ads within your plan budget.
                </p>
                <p className="text-muted-foreground mt-2">
                  <strong className="text-foreground">Only ad spend is additional:</strong> The actual advertising budget you choose to spend on the platforms (Google, Facebook, Instagram) is charged separately and goes directly to the ad platforms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
