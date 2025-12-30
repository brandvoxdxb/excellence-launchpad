import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  suffix?: string;
  delay?: number;
}

export const MetricCard = ({ icon: Icon, label, value, suffix, delay = 0 }: MetricCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <p className="text-muted-foreground text-sm mb-1">{label}</p>
        <p className="font-sora font-bold text-2xl">
          {value}
          {suffix && <span className="text-muted-foreground text-base ml-1">{suffix}</span>}
        </p>
      </div>
    </motion.div>
  );
};
