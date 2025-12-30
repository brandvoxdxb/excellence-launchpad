import { motion } from "framer-motion";
import { ScriptCard } from "./ScriptCard";

const scripts = [
  {
    name: "Reel 1 – Product Intro",
    hook: "This is not just heat.",
    visual: "Slow-motion sauce pour over food",
    overlay: "Flavor comes first.",
    cta: "Explore the flavors on our website.",
    caption: "Heat is easy. Flavor is an art. This is hot sauce made to elevate every meal.",
    hashtags: "#ExcellenceHotSauce #FlavorFirst #UAEFood"
  },
  {
    name: "Reel 2 – Heat Level Education",
    hook: "Not all hot sauces are the same.",
    visual: "Side-by-side heat levels",
    overlay: "Mild. Bold. Fiery.",
    cta: "Comment your heat level.",
    caption: "Choose your heat. Pair it right. Enjoy every bite.",
    hashtags: "#HotSauceLovers #FoodEducation #UAEEats"
  },
  {
    name: "Reel 3 – Food Pairing",
    hook: "This combo never fails.",
    visual: "Grilled meat + sauce drizzle",
    overlay: "Perfect match.",
    cta: "Save this pairing.",
    caption: "One sauce. Endless possibilities.",
    hashtags: "#FoodPairing #BBQUAE #ExcellenceFlavor"
  },
  {
    name: "Reel 4 – Lifestyle Branding",
    hook: "Good food deserves good sauce.",
    visual: "Friends eating together",
    overlay: "Made for moments.",
    cta: "Tag someone who loves flavor.",
    caption: "From everyday meals to special moments. Excellence belongs on every table.",
    hashtags: "#FoodLifestyle #UAEFoodies #ExcellenceHotSauce"
  },
  {
    name: "Reel 5 – Customer Reaction",
    hook: "First taste reaction.",
    visual: "Customer tasting & smiling",
    overlay: "That flavor though…",
    cta: "Try it yourself.",
    caption: "Nothing beats an honest reaction.",
    hashtags: "#RealTaste #CustomerLove #HotSauce"
  }
];

export const SampleReelsSection = () => {
  return (
    <section className="slider-section relative py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-start">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Content Preview</p>
            <h2 className="font-sora text-heading-1 mb-4">Sample Reel Scripts & Captions</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A taste of the content style and storytelling approach we'll use across platforms.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {scripts.map((script, i) => (
              <ScriptCard key={script.name} {...script} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
