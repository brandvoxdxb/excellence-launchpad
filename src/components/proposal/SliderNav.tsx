import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SliderNavProps {
  sections: { id: string; label: string }[];
  activeIndex: number;
  onNavigate: (index: number) => void;
}

export const SliderNav = ({ sections, activeIndex, onNavigate }: SliderNavProps) => {
  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => onNavigate(index)}
          className="group relative flex items-center justify-end gap-3"
          aria-label={`Go to ${section.label}`}
        >
          <span 
            className={cn(
              "text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap uppercase tracking-wide",
              activeIndex === index ? "text-accent" : "text-muted-foreground"
            )}
          >
            {section.label}
          </span>
          <div className="relative">
            <div 
              className={cn(
                "w-3 h-3 rounded-full border-2 transition-all duration-300",
                activeIndex === index 
                  ? "border-accent bg-accent scale-110" 
                  : "border-muted-foreground/50 hover:border-accent/50"
              )}
            />
            {activeIndex === index && (
              <motion.div
                layoutId="navDot"
                className="absolute inset-0 rounded-full bg-accent/30"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        </button>
      ))}
    </nav>
  );
};
