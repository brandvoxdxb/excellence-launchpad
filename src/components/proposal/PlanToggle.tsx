import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PlanToggleProps {
  selectedPlan: "A" | "B";
  onSelect: (plan: "A" | "B") => void;
}

export const PlanToggle = ({ selectedPlan, onSelect }: PlanToggleProps) => {
  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-secondary/50 border border-border/50">
      <button
        onClick={() => onSelect("A")}
        className={cn(
          "relative px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
          selectedPlan === "A" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        )}
      >
        {selectedPlan === "A" && (
          <motion.div
            layoutId="planToggle"
            className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-lg"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">Plan A</span>
        <span className="relative z-10 ml-1 text-xs opacity-75">AED 8K</span>
      </button>
      <button
        onClick={() => onSelect("B")}
        className={cn(
          "relative px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
          selectedPlan === "B" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        )}
      >
        {selectedPlan === "B" && (
          <motion.div
            layoutId="planToggle"
            className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 rounded-lg"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">Plan B</span>
        <span className="relative z-10 ml-1 text-xs opacity-75">AED 11K</span>
      </button>
    </div>
  );
};
