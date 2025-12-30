import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlanToggle } from "./PlanToggle";
import { MapPin, Users, Zap } from "lucide-react";
import productOriginal from "@/assets/product-hot-sauce-original.jpg";
import productJalapeno from "@/assets/product-jalapeno.jpg";
import productDynamite from "@/assets/product-dynamite.jpg";
import productKetchup from "@/assets/product-hot-ketchup.jpg";

interface HeroSectionProps {
  selectedPlan: "A" | "B";
  onPlanChange: (plan: "A" | "B") => void;
  onNavigate: (index: number) => void;
}

export const HeroSection = ({ selectedPlan, onPlanChange, onNavigate }: HeroSectionProps) => {
  return (
    <section className="slider-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Animated glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-glow rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
                Digital Marketing Proposal
              </p>
              <h1 className="font-sora text-display-1 lg:text-[4.5rem] leading-[1.1] mb-4">
                Excellence{" "}
                <span className="text-gradient">Hot Sauce</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                12-Month Brand Growth Strategy for UAE's Boldest Flavor
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">All UAE Emirates</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-sm">50% EU + 50% Multinational</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
                <Zap className="w-4 h-4 text-sauce-amber" />
                <span className="text-sm">7 Platforms</span>
              </div>
            </motion.div>

            {/* Plan Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <PlanToggle selectedPlan={selectedPlan} onSelect={onPlanChange} />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" onClick={() => onNavigate(10)}>
                Approve Plan
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => onNavigate(4)}>
                Compare Plans
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs text-muted-foreground"
            >
              Prepared by <span className="text-foreground font-semibold">BRAND VOX</span>
            </motion.p>
          </div>

          {/* Hero Product Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl" />
              
              {/* Product showcase */}
              <div className="relative flex items-end justify-center gap-4">
                <motion.img
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  src={productJalapeno}
                  alt="Jalapeño Hot Sauce"
                  className="w-24 h-auto object-contain drop-shadow-2xl"
                />
                <motion.img
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  src={productOriginal}
                  alt="Original Hot Sauce"
                  className="w-40 h-auto object-contain drop-shadow-2xl z-10"
                />
                <motion.img
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  src={productDynamite}
                  alt="Dynamite Sauce"
                  className="w-28 h-auto object-contain drop-shadow-2xl"
                />
                <motion.img
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  src={productKetchup}
                  alt="Hot Ketchup"
                  className="w-24 h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
