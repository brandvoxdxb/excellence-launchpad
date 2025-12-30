import { useEffect, useCallback, useRef, useState } from "react";

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
  const touchStartTime = useRef(0);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

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

  // Enhanced touch swipe navigation with visual feedback
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
      setIsSwiping(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isSwiping) return;
      
      const touchCurrentX = e.touches[0].clientX;
      const touchCurrentY = e.touches[0].clientY;
      const diffX = touchStartX.current - touchCurrentX;
      const diffY = touchStartY.current - touchCurrentY;

      // Only track horizontal swipes
      if (Math.abs(diffX) > Math.abs(diffY)) {
        // Limit the offset to create resistance at edges
        const maxOffset = 100;
        const dampedOffset = Math.sign(diffX) * Math.min(Math.abs(diffX) * 0.3, maxOffset);
        
        // Don't allow swiping past first/last section
        if ((activeIndex === 0 && diffX < 0) || 
            (activeIndex === sectionsCount - 1 && diffX > 0)) {
          setSwipeOffset(dampedOffset * 0.3); // Extra resistance at edges
        } else {
          setSwipeOffset(dampedOffset);
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      setIsSwiping(false);
      setSwipeOffset(0);

      if (isScrolling.current) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchStartX.current - touchEndX;
      const diffY = touchStartY.current - touchEndY;
      const timeDiff = Date.now() - touchStartTime.current;

      // Calculate velocity for quick flick gestures
      const velocity = Math.abs(diffX) / timeDiff;
      const isQuickFlick = velocity > 0.5 && timeDiff < 300;

      // Trigger navigation with lower threshold for quick flicks
      const swipeThreshold = isQuickFlick ? 30 : 50;

      // Only trigger if horizontal swipe is greater than vertical
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
        if (diffX > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }
    };

    const handleTouchCancel = () => {
      setIsSwiping(false);
      setSwipeOffset(0);
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    container.addEventListener("touchcancel", handleTouchCancel, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchCancel);
    };
  }, [containerRef, goToNext, goToPrevious, isSwiping, activeIndex, sectionsCount]);

  return { navigateToSection, goToNext, goToPrevious, swipeOffset, isSwiping };
};