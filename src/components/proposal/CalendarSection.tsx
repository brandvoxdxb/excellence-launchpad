import { motion } from "framer-motion";
import { Video, Image, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const months = [
  {
    name: "Month 1 – Brand & Product Introduction",
    theme: "Who we are & what makes us different",
    weekly_focus: [
      "Week 1: Brand story & positioning",
      "Week 2: Product introduction",
      "Week 3: Ingredients & quality",
      "Week 4: Usage & food pairings"
    ],
    deliverables: {
      short_form_videos: 12,
      creative_posts: 10,
      story_frequency: "4–5/wk"
    },
    videos: [
      "Brand introduction reel",
      "Founder / brand message (text-overlay style)",
      "Product close-up slow motion",
      "Heat level explanation",
      "Ingredient highlight",
      "Sauce texture & pour shots",
      "Home cooking usage",
      "Grill / BBQ pairing",
      "Snack pairing",
      "Kitchen lifestyle reel",
      '"Why Excellence?" concept reel',
      "Customer first-impression reel"
    ],
    posts: [
      "Brand philosophy",
      "Product variants",
      "Ingredient breakdown",
      "Heat scale chart",
      "Food pairing guide",
      "Lifestyle imagery",
      "Quote-based brand post",
      "Behind-the-scenes",
      "Product benefits",
      "Call-to-action post"
    ]
  },
  {
    name: "Month 2 – Education & Trust",
    theme: "Flavor, heat & food expertise",
    weekly_focus: [
      "Week 1: Heat levels explained",
      "Week 2: Food pairings",
      "Week 3: Cooking inspiration",
      "Week 4: Customer usage"
    ],
    deliverables: {
      short_form_videos: 14,
      creative_posts: 12,
      story_frequency: "4–6/wk"
    },
    videos: [
      "Mild vs hot explanation",
      "Flavor profile reel",
      "Meat pairing reel",
      "Chicken pairing reel",
      "Seafood pairing reel",
      "Vegetarian pairing reel",
      "Snack dip reel",
      "Kitchen experiment reel",
      "Before/after food taste reel",
      "Recipe-style reel",
      "Home cook feature",
      '"How to use hot sauce properly"',
      "Myth-busting reel",
      "Customer reaction reel"
    ],
    posts: [
      "Heat scale education",
      "Pairing carousel",
      "Cooking tips",
      "Sauce storage tips",
      "FAQ post",
      "Customer feedback",
      "Lifestyle imagery",
      "Brand trust post",
      "Behind-the-scenes",
      "Product close-ups",
      "Food plating visuals",
      "CTA post"
    ]
  },
  {
    name: "Month 3 – Lifestyle & Brand Authority",
    theme: "Everyday use & premium positioning",
    weekly_focus: [
      "Week 1: Daily food habits",
      "Week 2: BBQ & gatherings",
      "Week 3: Multicultural usage",
      "Week 4: Brand lifestyle"
    ],
    deliverables: {
      short_form_videos: 16,
      creative_posts: 14,
      story_frequency: "daily"
    },
    videos: [
      "Daily meal usage reel",
      "Breakfast pairing",
      "Lunch pairing",
      "Dinner pairing",
      "BBQ slow-motion reel",
      "Friends & food reel",
      "Party snack reel",
      "Sauce on street food",
      "International dish pairing",
      "Kitchen aesthetic reel",
      "Product shelf styling",
      "Premium slow-motion pour",
      "Brand mood reel",
      "Customer repeat usage",
      "Editorial brand reel",
      "Month recap reel"
    ],
    posts: [
      "Lifestyle moments",
      "BBQ visuals",
      "Multicultural dishes",
      "Premium product shots",
      "Brand quotes",
      "Food inspiration",
      "Customer highlights",
      "Kitchen aesthetics",
      "Packaging visuals",
      "Sauce textures",
      "Cooking moments",
      "Community post",
      "CTA post",
      "Month recap"
    ]
  }
];

const CalendarMonthCard = ({ month, index }: { month: typeof months[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border/50"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
          {index + 1}
        </span>
        <h4 className="font-sora font-semibold text-sm">{month.name}</h4>
      </div>
      
      <p className="text-xs text-primary mb-4 italic">Theme: {month.theme}</p>

      <div className="space-y-2 mb-4">
        {month.weekly_focus.map((week, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-primary text-xs mt-1">•</span>
            <p className="text-xs text-muted-foreground">{week}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 py-4 border-y border-border/50">
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

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 text-xs text-primary mt-4 hover:underline"
      >
        {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        {expanded ? "Hide" : "View"} Content Breakdown
      </button>

      <div className={cn(
        "overflow-hidden transition-all duration-300",
        expanded ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
      )}>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1">
              <Video className="w-3 h-3 text-primary" />
              Short-Form Videos ({month.videos.length})
            </p>
            <div className="grid grid-cols-2 gap-1">
              {month.videos.map((video, i) => (
                <p key={i} className="text-[10px] text-muted-foreground">• {video}</p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1">
              <Image className="w-3 h-3 text-accent" />
              Static / Carousel Posts ({month.posts.length})
            </p>
            <div className="grid grid-cols-2 gap-1">
              {month.posts.map((post, i) => (
                <p key={i} className="text-[10px] text-muted-foreground">• {post}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const CalendarSection = () => {
  return (
    <section className="slider-section relative py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-16 sm:pt-20">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-8"
          >
            <p className="text-primary font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wide">3-Month Content Calendar</p>
            <h2 className="font-sora text-xl sm:text-2xl lg:text-heading-1 mb-3 sm:mb-4">Multi-Platform Content Plan</h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-1 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground mb-2">
              <span>• Same core content adapted per platform</span>
              <span>• Short-form video is the primary driver</span>
              <span>• Visual consistency across all channels</span>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4 sm:gap-6 overflow-x-auto pb-4">
            {months.map((month, i) => (
              <CalendarMonthCard key={month.name} month={month} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
