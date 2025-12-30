import { useEffect, useCallback, useRef } from "react";

interface UseSectionNavigationProps {
  containerRef: React.RefObject<HTMLDivElement>;
  sectionsCount: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const useSectionNavigation = ({
  containerRef,
  sectionsCount,
  activeIndex,
  setActiveIndex,
}: UseSectionNavigationProps) => {
  const isScrolling = useRef(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const navigateToSection = useCallback(
    (index: number) => {
      const container = containerRef.current;
      if (!container || index < 0 || index >= sectionsCount) return;

      isScrolling.current = true;
      const sectionWidth = container.offsetWidth;
      container.scrollTo({ left: index * sectionWidth, behavior: "smooth" });

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    },
    [containerRef, sectionsCount]
  );

  const goToNext = useCallback(() => {
    if (activeIndex < sectionsCount - 1) {
      navigateToSection(activeIndex + 1);
    }
  }, [activeIndex, sectionsCount, navigateToSection]);

  const goToPrevious = useCallback(() => {
    if (activeIndex > 0) {
      navigateToSection(activeIndex - 1);
    }
  }, [activeIndex, navigateToSection]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          goToNext();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          goToPrevious();
          break;
        case "Home":
          e.preventDefault();
          navigateToSection(0);
          break;
        case "End":
          e.preventDefault();
          navigateToSection(sectionsCount - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, navigateToSection, sectionsCount]);

  // Touch swipe navigation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchStartX.current - touchEndX;
      const diffY = touchStartY.current - touchEndY;

      // Only trigger if horizontal swipe is greater than vertical
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [containerRef, goToNext, goToPrevious]);

  return { navigateToSection, goToNext, goToPrevious };
};
