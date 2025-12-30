import { useState, useRef, useEffect } from "react";
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

  const handleNavigate = (index: number) => {
    const container = containerRef.current;
    if (container) {
      const sectionWidth = container.offsetWidth;
      container.scrollTo({ left: index * sectionWidth, behavior: "smooth" });
    }
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
      
      <div ref={containerRef} className="slider-container h-screen">
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
    </div>
  );
};

export default Index;
