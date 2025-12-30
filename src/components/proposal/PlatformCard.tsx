import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin, 
  Globe,
  Smartphone
} from "lucide-react";

const platformIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Facebook,
  TikTok: Smartphone,
  Snapchat: Smartphone,
  YouTube: Youtube,
  LinkedIn: Linkedin,
  Website: Globe,
};

const badgeColors: Record<string, string> = {
  Core: "bg-primary/20 text-primary border-primary/30",
  Growth: "bg-accent/20 text-accent border-accent/30",
  Support: "bg-muted text-muted-foreground border-border",
  Authority: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  B2B: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Conversion: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

interface PlatformCardProps {
  name: string;
  role: string;
  badge: string;
  delay?: number;
}

export const PlatformCard = ({ name, role, badge, delay = 0 }: PlatformCardProps) => {
  const Icon = platformIcons[name] || Globe;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
      className="group relative p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
          <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
        </div>
        <span className={cn(
          "px-2 py-1 text-[10px] font-semibold rounded-full border",
          badgeColors[badge] || badgeColors.Support
        )}>
          {badge}
        </span>
      </div>
      <h4 className="font-sora font-semibold text-lg mb-1">{name}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{role}</p>
    </motion.div>
  );
};
