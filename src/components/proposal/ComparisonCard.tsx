import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ComparisonCardProps {
  name: string;
  price: string;
  tagline: string;
  highlights: string[];
  bestFor: string;
  isPopular?: boolean;
  delay?: number;
}

export const ComparisonCard = ({ 
  name, 
  price, 
  tagline, 
  highlights, 
  bestFor, 
  isPopular = false,
  delay = 0 
}: ComparisonCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative p-6 lg:p-8 rounded-3xl border transition-all duration-300",
        isPopular 
          ? "bg-card border-accent/50 shadow-accent" 
          : "bg-card/50 border-border/50 hover:border-primary/30"
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent to-sauce-orange rounded-full text-xs font-bold text-accent-foreground">
          Recommended
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="font-sora font-bold text-xl mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm">{tagline}</p>
      </div>

      <div className="mb-6">
        <span className="font-sora font-bold text-4xl">{price}</span>
        <span className="text-muted-foreground text-sm ml-2">/ month</span>
      </div>

      <ul className="space-y-3 mb-8">
        {highlights.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0",
              isPopular ? "bg-accent/20" : "bg-primary/20"
            )}>
              <Check className={cn(
                "w-3 h-3",
                isPopular ? "text-accent" : "text-primary"
              )} />
            </div>
            <span className="text-sm text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-xs text-muted-foreground mb-4">
        Best for: <span className="text-foreground">{bestFor}</span>
      </p>

      <Button 
        variant={isPopular ? "hero" : "outline"} 
        size="lg" 
        className="w-full"
      >
        Select {name}
      </Button>
    </motion.div>
  );
};
