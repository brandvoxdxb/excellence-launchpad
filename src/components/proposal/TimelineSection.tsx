import { motion } from "framer-motion";

interface Quarter {
  name: string;
  items: string[];
}

interface TimelineSectionProps {
  quarters: Quarter[];
}

const quarterColors = [
  "from-primary/80 to-primary",
  "from-accent/80 to-accent",
  "from-emerald-500/80 to-emerald-500",
  "from-blue-500/80 to-blue-500",
];

export const TimelineSection = ({ quarters }: TimelineSectionProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 hidden lg:block" />
      
      <div className="grid gap-4 md:gap-6 lg:gap-0">
        {quarters.map((quarter, index) => (
          <motion.div
            key={quarter.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative lg:w-1/2 ${
              index % 2 === 0 ? "lg:pr-8 xl:pr-12 lg:text-right" : "lg:pl-8 xl:pl-12 lg:ml-auto"
            }`}
          >
            {/* Dot */}
            <div className={`hidden lg:block absolute top-5 ${
              index % 2 === 0 ? "-right-[7px]" : "-left-[7px]"
            }`}>
              <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${quarterColors[index]}`} />
            </div>

            <div className="p-4 md:p-5 rounded-xl md:rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-colors">
              <div className={`inline-block px-2.5 py-1 rounded-full bg-gradient-to-r ${quarterColors[index]} text-[10px] md:text-xs font-bold text-white mb-3`}>
                {quarter.name}
              </div>
              <ul className={`space-y-1.5 md:space-y-2 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                {quarter.items.map((item, i) => (
                  <li key={i} className="text-xs md:text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
