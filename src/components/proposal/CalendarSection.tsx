import { motion } from "framer-motion";
import { CalendarMonth } from "./CalendarMonth";

const months = [
  {
    name: "Brand & Product Introduction",
    weekly_focus: [
      "Week 1: Brand story & positioning",
      "Week 2: Product intro & benefits",
      "Week 3: Ingredients & quality",
      "Week 4: Usage & food pairings"
    ],
    deliverables: {
      short_form_videos: 12,
      creative_posts: 10,
      story_frequency: "4–5/wk"
    }
  },
  {
    name: "Education & Trust",
    weekly_focus: [
      "Week 1: Heat levels explained",
      "Week 2: Food pairings deep dive",
      "Week 3: Cooking inspiration",
      "Week 4: Customer usage & FAQ"
    ],
    deliverables: {
      short_form_videos: 14,
      creative_posts: 12,
      story_frequency: "4–6/wk"
    }
  },
  {
    name: "Lifestyle & Authority",
    weekly_focus: [
      "Week 1: Daily meal usage",
      "Week 2: BBQ & gatherings",
      "Week 3: Multicultural dishes",
      "Week 4: Premium brand storytelling"
    ],
    deliverables: {
      short_form_videos: 16,
      creative_posts: 14,
      story_frequency: "daily"
    }
  }
];

export const CalendarSection = () => {
  return (
    <section className="slider-section relative py-20">
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-center pt-16">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Detailed Plan</p>
            <h2 className="font-sora text-heading-1 mb-4">3-Month Content Calendar</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Weekly themes and deliverables for the first quarter of execution.
            </p>
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {months.map((month, i) => (
              <CalendarMonth key={month.name} month={month} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
