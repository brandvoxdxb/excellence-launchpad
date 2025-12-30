import { motion } from "framer-motion";
import { AudienceDonut } from "./AudienceDonut";
import { Target, TrendingUp, Globe, Layers, Eye, Rocket, CheckCircle } from "lucide-react";

const strategyGoals = [
  "Build a strong premium brand presence",
  "Create consistent, high-quality content across all major platforms",
  "Educate consumers while driving product discovery",
  "Support long-term organic growth and future paid scaling"
];

const nodes = [
  { icon: Target, label: "Premium Brand Presence" },
  { icon: TrendingUp, label: "Multi-Platform Content" },
  { icon: Globe, label: "SEO Visibility" },
  { icon: Layers, label: "Scalable Growth" },
  { icon: Rocket, label: "Future Paid & Influencer Ready" },
];

export const ExecutiveSummarySection = () => {
  return (
    <section className="slider-section relative overflow-hidden py-20">
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-center pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Introduction</p>
              <h2 className="font-sora text-heading-1 mb-4">Excellence Hot Sauce</h2>
              <p className="text-lg text-foreground font-medium mb-2">is not just a condiment.</p>
              <p className="text-accent font-semibold text-xl">It is a flavor experience designed for modern, multicultural food lovers.</p>
            </div>
            
            <div className="space-y-3 text-muted-foreground">
              <p>
                The UAE market is highly competitive, visually driven, and taste-conscious. To stand out, a hot sauce brand must do more than sell heat. It must tell a story around <span className="text-foreground font-medium">quality, flavor, lifestyle, and culture</span>.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">This digital marketing strategy is designed to:</p>
              <ul className="space-y-2">
                {strategyGoals.map((goal, i) => (
                  <motion.li
                    key={goal}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{goal}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4">
              The strategy focuses on organic growth first, ensuring the brand builds trust, recall, and authority before investing heavily in ads or influencers.
            </p>

            {/* Diagram */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                {nodes.map((node, i) => (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <node.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{node.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Charts */}
          <div className="space-y-6">
            <AudienceDonut />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-4 rounded-xl bg-card border border-border/50 text-center">
                <Eye className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-sora font-bold">12</p>
                <p className="text-xs text-muted-foreground">Month Strategy</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border/50 text-center">
                <Globe className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-2xl font-sora font-bold">7</p>
                <p className="text-xs text-muted-foreground">Emirates Covered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
