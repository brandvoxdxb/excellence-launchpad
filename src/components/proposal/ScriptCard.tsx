import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";

interface ScriptCardProps {
  name: string;
  hook: string;
  visual: string;
  overlay: string;
  cta: string;
  caption: string;
  delay?: number;
}

export const ScriptCard = ({ name, hook, visual, overlay, cta, caption, delay = 0 }: ScriptCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-xs text-muted-foreground mb-1">{name}</p>
          <h4 className="font-sora font-bold text-lg">"{hook}"</h4>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Play className="w-4 h-4 text-primary" />
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <div>
          <span className="text-muted-foreground">Visual:</span>
          <p className="text-foreground/80">{visual}</p>
        </div>
        <div>
          <span className="text-muted-foreground">Overlay:</span>
          <p className="text-accent font-semibold">{overlay}</p>
        </div>
        <div>
          <span className="text-muted-foreground">CTA:</span>
          <p className="text-foreground/80">{cta}</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-start gap-2">
          <Quote className="w-4 h-4 text-primary/50 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground italic">{caption}</p>
        </div>
      </div>
    </motion.div>
  );
};
