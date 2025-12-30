import { motion } from "framer-motion";
import { ObjectiveCard } from "./ObjectiveCard";
import { 
  Award, 
  Eye, 
  Search, 
  TrendingUp, 
  BookOpen, 
  Layers 
} from "lucide-react";

const objectives = [
  { icon: Award, title: "Premium brand positioning in UAE" },
  { icon: Eye, title: "Consistent multi-platform visibility" },
  { icon: Search, title: "Higher product discovery & recall" },
  { icon: TrendingUp, title: "Organic website traffic growth" },
  { icon: BookOpen, title: "Education: flavor, heat & usage" },
  { icon: Layers, title: "Scalable content system for campaigns" },
];

export const ObjectivesSection = () => {
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
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Goals</p>
            <h2 className="font-sora text-heading-1 mb-4">Business Objectives</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our 12-month strategy is designed to achieve these core objectives for Excellence Hot Sauce.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {objectives.map((obj, i) => (
              <ObjectiveCard
                key={obj.title}
                icon={obj.icon}
                title={obj.title}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
