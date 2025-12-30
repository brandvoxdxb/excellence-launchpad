import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TopNav } from "@/components/proposal/TopNav";
import { SliderNav } from "@/components/proposal/SliderNav";
import { HeroSection } from "@/components/proposal/HeroSection";
import { ExecutiveSummarySection } from "@/components/proposal/ExecutiveSummarySection";
import { ObjectivesSection } from "@/components/proposal/ObjectivesSection";
import { PlatformsSection } from "@/components/proposal/PlatformsSection";
import { PlanComparisonSection } from "@/components/proposal/PlanComparisonSection";
import { DeliverablesSection } from "@/components/proposal/DeliverablesSection";
import { RoadmapSection } from "@/components/proposal/RoadmapSection";
import { CalendarSection } from "@/components/proposal/CalendarSection";
import { SampleReelsSection } from "@/components/proposal/SampleReelsSection";
import { KPIsSection } from "@/components/proposal/KPIsSection";
import { CommercialClaritySection } from "@/components/proposal/CommercialClaritySection";
import { ApprovalSection } from "@/components/proposal/ApprovalSection";
import { ScrollToTopButton } from "@/components/proposal/ScrollToTopButton";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";

const sections = [
  { id: "home", label: "Home" },
  { id: "summary", label: "Summary" },
  { id: "objectives", label: "Objectives" },
  { id: "platforms", label: "Platforms" },
  { id: "plans", label: "Plans" },
  { id: "deliverables", label: "Deliverables" },
  { id: "roadmap", label: "Roadmap" },
  { id: "calendar", label: "Calendar" },
  { id: "reels", label: "Reels" },
  { id: "kpis", label: "KPIs" },
  { id: "commercial", label: "Commercial" },
  { id: "approval", label: "Approve" },
];

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<"A" | "B">("B");
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { navigateToSection, goToNext, goToPrevious, swipeOffset, isSwiping } = useSectionNavigation({
    containerRef,
    sectionsCount: sections.length,
    activeIndex,
    setActiveIndex,
  });

  const handleNavigate = (index: number) => {
    navigateToSection(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sectionWidth = container.offsetWidth;
      const newIndex = Math.round(container.scrollLeft / sectionWidth);
      setActiveIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <TopNav sections={sections} activeIndex={activeIndex} onNavigate={handleNavigate} />
      <SliderNav sections={sections} activeIndex={activeIndex} onNavigate={handleNavigate} />
      
      <div ref={containerRef} className="slider-container h-screen" style={{ height: '100dvh' }}>
        <HeroSection selectedPlan={selectedPlan} onPlanChange={setSelectedPlan} onNavigate={handleNavigate} />
        <ExecutiveSummarySection />
        <ObjectivesSection />
        <PlatformsSection />
        <PlanComparisonSection />
        <DeliverablesSection selectedPlan={selectedPlan} />
        <RoadmapSection />
        <CalendarSection />
        <SampleReelsSection />
        <KPIsSection />
        <CommercialClaritySection />
        <ApprovalSection selectedPlan={selectedPlan} onPlanChange={setSelectedPlan} />
      </div>

      {/* Swipe indicator arrows - visible on mobile during swipe */}
      {isSwiping && Math.abs(swipeOffset) > 20 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-y-0 flex items-center pointer-events-none z-40 lg:hidden"
          style={{
            left: swipeOffset < 0 ? '8px' : 'auto',
            right: swipeOffset > 0 ? '8px' : 'auto',
          }}
        >
          <motion.div
            animate={{ 
              x: swipeOffset > 0 ? [0, 5, 0] : [0, -5, 0],
              scale: Math.min(Math.abs(swipeOffset) / 50, 1.2)
            }}
            transition={{ duration: 0.3 }}
            className="bg-primary/80 text-primary-foreground p-2 rounded-full backdrop-blur-sm"
          >
            {swipeOffset > 0 ? (
              <ChevronRight className="w-6 h-6" />
            ) : (
              <ChevronLeft className="w-6 h-6" />
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Mobile swipe hint - shown briefly on first load */}
      <SwipeHint />

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
};

// Component to show swipe hint on first visit
const SwipeHint = () => {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const hasSeenHint = localStorage.getItem('swipe-hint-seen');
    if (!hasSeenHint) {
      const timer = setTimeout(() => {
        setShowHint(true);
        localStorage.setItem('swipe-hint-seen', 'true');
        setTimeout(() => setShowHint(false), 3000);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!showHint) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 lg:hidden"
    >
      <div className="bg-card/90 backdrop-blur-md border border-border/50 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
        <motion.div
          animate={{ x: [0, 10, 0, -10, 0] }}
          transition={{ duration: 1.5, repeat: 1 }}
        >
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        </motion.div>
        <span className="text-xs text-muted-foreground">Swipe to navigate</span>
        <motion.div
          animate={{ x: [0, -10, 0, 10, 0] }}
          transition={{ duration: 1.5, repeat: 1 }}
        >
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
