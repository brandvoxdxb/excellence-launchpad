import { motion } from "framer-motion";
import { ComparisonCard } from "./ComparisonCard";
import { ContentComparisonChart } from "./ContentComparisonChart";

const plans = [
  {
    name: "Plan A",
    price: "AED 8,000",
    tagline: "Organic Growth & Consistency",
    highlights: [
      "12 short-form videos",
      "10 creative posts",
      "Stories 4–5/week",
      "2 SEO blogs/month",
      "Monthly reporting"
    ],
    bestFor: "steady growth and strong foundation"
  },
  {
    name: "Plan B",
    price: "AED 11,000",
    tagline: "Premium Organic Dominance",
    highlights: [
      "16–18 short-form videos",
      "12–15 creative posts",
      "Daily stories",
      "3–4 SEO blogs/month",
      "Monthly + quarterly strategy"
    ],
    bestFor: "faster growth, authority, premium recall"
  }
];

export const PlanComparisonSection = () => {
  return (
    <section className="slider-section relative py-20">
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-center pt-16">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Pricing</p>
            <h2 className="font-sora text-heading-1 mb-4">Growth Plan Options</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose the plan that matches your growth ambitions. Both deliver premium quality.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ComparisonCard {...plans[0]} delay={0} />
            <ComparisonCard {...plans[1]} isPopular delay={0.15} />
            <ContentComparisonChart />
          </div>
        </div>
      </div>
    </section>
  );
};
