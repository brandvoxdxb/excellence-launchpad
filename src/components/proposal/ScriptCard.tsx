import { motion } from "framer-motion";
import { Play, Quote, Eye, MousePointerClick } from "lucide-react";

interface ScriptCardProps {
  name: string;
  hook: string;
  visual: string;
  overlay: string;
  cta: string;
  caption: string;
  hashtags?: string;
  delay?: number;
}

export const ScriptCard = ({ name, hook, visual, overlay, cta, caption, hashtags, delay = 0 }: ScriptCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <Play className="w-3 h-3 text-primary-foreground" fill="currentColor" />
        </div>
        <h4 className="font-sora font-semibold text-xs">{name}</h4>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <p className="text-muted-foreground flex items-center gap-1 mb-1">
            <Quote className="w-3 h-3 text-accent" />
            Hook (0–3s)
          </p>
          <p className="text-foreground font-medium italic">"{hook}"</p>
        </div>

        <div>
          <p className="text-muted-foreground flex items-center gap-1 mb-1">
            <Eye className="w-3 h-3 text-primary" />
            Visual
          </p>
          <p className="text-muted-foreground">{visual}</p>
        </div>

        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <p className="text-[10px] text-muted-foreground mb-1">Text Overlay</p>
          <p className="text-primary font-semibold">"{overlay}"</p>
        </div>

        <div>
          <p className="text-muted-foreground flex items-center gap-1 mb-1">
            <MousePointerClick className="w-3 h-3 text-accent" />
            CTA
          </p>
          <p className="text-accent text-[10px]">{cta}</p>
        </div>

        <div className="pt-2 border-t border-border/50">
          <p className="text-[10px] text-muted-foreground mb-1">Caption</p>
          <p className="text-foreground text-[10px] leading-relaxed">{caption}</p>
          {hashtags && (
            <p className="text-primary text-[9px] mt-1">{hashtags}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
