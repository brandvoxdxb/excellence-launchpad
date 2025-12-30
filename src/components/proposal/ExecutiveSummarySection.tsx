import { motion } from "framer-motion";
import { AudienceDonut } from "./AudienceDonut";
import { Target, TrendingUp, Globe, Layers, Eye, Rocket } from "lucide-react";

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
              <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Overview</p>
              <h2 className="font-sora text-heading-1 mb-4">Executive Summary</h2>
            </div>
            <p className="text-muted-foreground text-body-lg leading-relaxed">
              Position Excellence Hot Sauce as a <span className="text-foreground font-medium">bold, premium, flavor-first brand</span> in the UAE through high-quality storytelling, multi-platform organic growth, and SEO-supported discovery.
            </p>
            <p className="text-muted-foreground">
              Our strategy focuses on building authentic connections with food enthusiasts across the Emirates, leveraging visual content that showcases the artistry behind each bottle.
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
