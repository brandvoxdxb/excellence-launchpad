import { motion } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin, 
  Globe,
  Smartphone
} from "lucide-react";

interface KPIMetric {
  channel: string;
  kpis: string[];
}

const channelIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Instagram/Facebook": Instagram,
  "TikTok/Snapchat": Smartphone,
  "YouTube": Youtube,
  "LinkedIn": Linkedin,
  "Website/SEO": Globe,
};

const channelColors: Record<string, string> = {
  "Instagram/Facebook": "from-pink-500/20 to-purple-500/20 border-pink-500/30",
  "TikTok/Snapchat": "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
  "YouTube": "from-red-500/20 to-orange-500/20 border-red-500/30",
  "LinkedIn": "from-blue-600/20 to-blue-400/20 border-blue-500/30",
  "Website/SEO": "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
};

interface KPICardProps {
  metric: KPIMetric;
  delay?: number;
}

export const KPICard = ({ metric, delay = 0 }: KPICardProps) => {
  const Icon = channelIcons[metric.channel] || Globe;
  const colorClasses = channelColors[metric.channel] || "from-primary/20 to-accent/20 border-primary/30";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`p-5 rounded-2xl bg-gradient-to-br ${colorClasses} border`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-foreground" />
        <h4 className="font-sora font-semibold text-sm">{metric.channel}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {metric.kpis.map((kpi, i) => (
          <span 
            key={i}
            className="px-2.5 py-1 rounded-full bg-background/50 text-xs text-foreground/80"
          >
            {kpi}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
