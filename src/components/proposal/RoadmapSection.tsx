import { motion } from "framer-motion";
import { TimelineSection as Timeline } from "./TimelineSection";

const quarters = [
  {
    name: "Q1 – Foundation",
    items: ["Brand story & identity", "Content consistency", "SEO setup", "Audience awareness"]
  },
  {
    name: "Q2 – Authority",
    items: ["Education content", "Food pairing expertise", "Trust signals", "Community growth"]
  },
  {
    name: "Q3 – Conversion",
    items: ["Product differentiation", "Website traffic focus", "CTAs & offers", "Horeca outreach content"]
  },
  {
    name: "Q4 – Brand Maturity",
    items: ["Seasonal campaigns", "Lifestyle dominance", "Recap & brand proof", "Scale readiness"]
  }
];

export const RoadmapSection = () => {
  return (
    <section className="slider-section relative py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8 pb-8">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-12"
          >
            <p className="text-primary font-semibold mb-2 text-xs md:text-sm uppercase tracking-wide">Strategy</p>
            <h2 className="font-sora text-2xl md:text-heading-1 mb-3 md:mb-4">12-Month Roadmap</h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              A structured journey from brand foundation to market dominance.
            </p>
          </motion.div>

          <Timeline quarters={quarters} />
        </div>
      </div>
    </section>
  );
};
