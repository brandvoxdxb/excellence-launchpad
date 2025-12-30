import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface ScrollToTopButtonProps {
  containerRef?: React.RefObject<HTMLDivElement>;
}

export const ScrollToTopButton = ({ containerRef }: ScrollToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check all slider sections for scroll position
      const sections = document.querySelectorAll('.slider-section');
      let anyScrolled = false;
      
      sections.forEach((section) => {
        if (section.scrollTop > 200) {
          anyScrolled = true;
        }
      });
      
      setIsVisible(anyScrolled);
    };

    // Add scroll listeners to all slider sections
    const sections = document.querySelectorAll('.slider-section');
    sections.forEach((section) => {
      section.addEventListener('scroll', handleScroll);
    });

    return () => {
      sections.forEach((section) => {
        section.removeEventListener('scroll', handleScroll);
      });
    };
  }, []);

  const scrollToTop = () => {
    // Find the currently visible section and scroll it to top
    const sections = document.querySelectorAll('.slider-section');
    sections.forEach((section) => {
      if (section.scrollTop > 0) {
        section.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 flex items-center justify-center backdrop-blur-sm border border-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300"
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
