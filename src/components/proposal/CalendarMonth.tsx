import { motion } from "framer-motion";
import { Video, Image, MessageCircle } from "lucide-react";

interface MonthData {
  name: string;
  weekly_focus: string[];
  deliverables: {
    short_form_videos: number;
    creative_posts: number;
    story_frequency: string;
  };
}

interface CalendarMonthProps {
  month: MonthData;
  index: number;
}

export const CalendarMonth = ({ month, index }: CalendarMonthProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] p-6 rounded-2xl bg-card border border-border/50"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
          {index + 1}
        </span>
        <h4 className="font-sora font-semibold">{month.name}</h4>
      </div>

      <div className="space-y-2 mb-6">
        {month.weekly_focus.map((week, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-primary text-xs mt-1">•</span>
            <p className="text-xs text-muted-foreground">{week}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border/50">
        <div className="text-center">
          <Video className="w-4 h-4 mx-auto mb-1 text-primary" />
          <p className="font-bold text-lg">{month.deliverables.short_form_videos}</p>
          <p className="text-[10px] text-muted-foreground">Videos</p>
        </div>
        <div className="text-center">
          <Image className="w-4 h-4 mx-auto mb-1 text-accent" />
          <p className="font-bold text-lg">{month.deliverables.creative_posts}</p>
          <p className="text-[10px] text-muted-foreground">Posts</p>
        </div>
        <div className="text-center">
          <MessageCircle className="w-4 h-4 mx-auto mb-1 text-emerald-500" />
          <p className="font-bold text-sm">{month.deliverables.story_frequency}</p>
          <p className="text-[10px] text-muted-foreground">Stories</p>
        </div>
      </div>
    </motion.div>
  );
};
