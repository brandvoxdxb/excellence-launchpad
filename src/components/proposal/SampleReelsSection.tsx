import { motion } from "framer-motion";
import { ScriptCard } from "./ScriptCard";

const scripts = [
  {
    name: "Reel 1 – Product Intro",
    hook: "This is not just heat.",
    visual: "Slow-motion sauce pour + macro texture + food close-up",
    overlay: "Flavor comes first.",
    cta: "Explore the flavors on our website.",
    caption: "Heat is easy. Flavor is an art. This is hot sauce made to elevate every meal."
  },
  {
    name: "Reel 2 – Heat Education",
    hook: "Not all hot sauces are the same.",
    visual: "Heat scale graphic + bottle shots",
    overlay: "Mild. Bold. Fiery.",
    cta: "Comment your heat level.",
    caption: "Choose your heat. Pair it right. Enjoy every bite."
  },
  {
    name: "Reel 3 – Food Pairing",
    hook: "This combo never fails.",
    visual: "BBQ / grilled meat pairing + drizzle",
    overlay: "Perfect match.",
    cta: "Save this pairing.",
    caption: "One sauce. Endless possibilities."
  }
];

export const SampleReelsSection = () => {
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
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Content Preview</p>
            <h2 className="font-sora text-heading-1 mb-4">Sample Reel Scripts</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A taste of the content style and storytelling approach we'll use.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {scripts.map((script, i) => (
              <ScriptCard key={script.name} {...script} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
