import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="glass border-b border-border/30"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logos */}
            <div className="flex items-center gap-4">
              <img 
                src={excellenceLogo} 
                alt="Excellence Hot Sauce" 
                className="h-10 w-auto object-contain"
              />
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-muted-foreground text-xs">by</span>
                <img 
                  src={brandvoxLogo} 
                  alt="Brand Vox" 
                  className="h-6 w-auto object-contain brightness-0 invert opacity-80 hue-rotate-[20deg] saturate-150"
                  style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(100%) saturate(1000%) hue-rotate(-10deg)' }}
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

            {/* CTA */}
            <div className="flex items-center gap-2">
              <Button variant="hero" size="sm" className="hidden sm:flex">
                Approve Plan
              </Button>
              <button 
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-background/95 backdrop-blur-xl z-40"
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    onNavigate(index);
                    setMobileOpen(false);
                  }}
                  className={cn(
                    "px-4 py-3 text-left font-medium rounded-lg transition-colors",
                    activeIndex === index 
                      ? "bg-primary/20 text-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {section.label}
                </button>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-border">
              <Button variant="hero" size="lg" className="w-full">
                Approve Plan
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};
