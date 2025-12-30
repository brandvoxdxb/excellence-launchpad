import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ObjectiveCardProps {
  icon: LucideIcon;
  title: string;
  delay?: number;
}

export const ObjectiveCard = ({ icon: Icon, title, delay = 0 }: ObjectiveCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02 }}
      className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <p className="text-sm font-medium text-foreground/90">{title}</p>
    </motion.div>
  );
};
