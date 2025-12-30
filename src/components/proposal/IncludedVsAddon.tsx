import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface IncludedVsAddonProps {
  included: string[];
  addOns: string[];
}

export const IncludedVsAddon = ({ included, addOns }: IncludedVsAddonProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <Check className="w-4 h-4 text-emerald-400" />
          </div>
          <h4 className="font-sora font-semibold text-emerald-400">Included in Plan</h4>
        </div>
        <ul className="space-y-3">
          {included.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-6 rounded-2xl bg-secondary/50 border border-border/50"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-accent text-sm font-bold">+</span>
          </div>
          <h4 className="font-sora font-semibold text-accent">Available Add-ons</h4>
        </div>
        <ul className="space-y-3">
          {addOns.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-accent mt-0.5">•</span>
              <span className="text-sm text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
