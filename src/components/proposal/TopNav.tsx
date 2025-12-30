import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import excellenceLogo from "@/assets/excellence-hotsauce-logo.png";
import brandvoxLogo from "@/assets/brandvox-logo.png";

interface TopNavProps {
  sections: { id: string; label: string }[];
  activeIndex: number;
  onNavigate: (index: number) => void;
}

export const TopNav = ({ sections, activeIndex, onNavigate }: TopNavProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="glass border-b border-border/30"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logos */}
            <div className="flex items-center gap-3 md:gap-4">
              <img 
                src={excellenceLogo} 
                alt="Excellence Hot Sauce" 
                className="h-8 md:h-10 w-auto object-contain"
              />
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-muted-foreground text-xs">by</span>
                <img 
                  src={brandvoxLogo} 
                  alt="Brand Vox" 
                  className="h-5 md:h-6 w-auto object-contain"
                />
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {sections.slice(0, 6).map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => onNavigate(index)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                    activeIndex === index 
                      ? "bg-primary/20 text-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {section.label}
                </button>
              ))}
              <span className="text-muted-foreground/50 px-1">•</span>
              {sections.slice(6, 12).map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => onNavigate(index + 6)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                    activeIndex === index + 6 
                      ? "bg-primary/20 text-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-2">
              <Button 
                variant="hero" 
                size="sm" 
                className="hidden sm:flex text-xs md:text-sm"
                onClick={() => onNavigate(sections.length - 1)}
              >
                Approve Plan
              </Button>
              <button 
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                <motion.div
                  animate={{ rotate: mobileOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-x-0 top-14 md:top-16 bg-background border-b border-border/30 z-40 overflow-hidden"
          >
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="container mx-auto px-4 py-4 max-h-[calc(100dvh-4rem)] overflow-y-auto"
            >
              <nav className="grid grid-cols-2 gap-2">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    onClick={() => {
                      onNavigate(index);
                      setMobileOpen(false);
                    }}
                    className={cn(
                      "px-3 py-2.5 text-left text-sm font-medium rounded-lg transition-colors",
                      activeIndex === index 
                        ? "bg-primary/20 text-primary border border-primary/30" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent"
                    )}
                  >
                    {section.label}
                  </motion.button>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-border/50 sm:hidden">
                <Button 
                  variant="hero" 
                  size="default" 
                  className="w-full"
                  onClick={() => {
                    onNavigate(sections.length - 1);
                    setMobileOpen(false);
                  }}
                >
                  Approve Plan
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-14 md:top-16 bg-background/60 backdrop-blur-sm z-30"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};