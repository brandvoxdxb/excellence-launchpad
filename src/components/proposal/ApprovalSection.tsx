import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlanToggle } from "./PlanToggle";
import { CheckCircle, Phone, MessageCircle, Target, RefreshCw, TrendingUp, Megaphone, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface ApprovalSectionProps {
  selectedPlan: "A" | "B";
  onPlanChange: (plan: "A" | "B") => void;
}

const PHONE_NUMBER = "+971542146456";
const WHATSAPP_MESSAGE = "Hi, I am interested in the Excellence Hot Sauce marketing proposal.";

const strategyBenefits = [
  { icon: Target, text: "Build brand trust before selling aggressively" },
  { icon: RefreshCw, text: "Create reusable content assets" },
  { icon: TrendingUp, text: "Grow organically across all platforms" },
  { icon: Megaphone, text: "Support future paid ads and influencer campaigns" },
];

export const ApprovalSection = ({ selectedPlan, onPlanChange }: ApprovalSectionProps) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const url = `https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <section className="slider-section relative py-6 sm:py-8 lg:py-12">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-start">
        <div className="w-full max-w-3xl mx-auto relative">
          {/* Final Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50"
          >
            <h3 className="font-sora text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center">Final Note</h3>
            <p className="text-xs sm:text-sm text-muted-foreground text-center mb-3 sm:mb-4">This strategy is designed to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {strategyBenefits.map((benefit, i) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-center gap-2 text-xs"
                >
                  <benefit.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs text-center text-primary mt-3 sm:mt-4 font-medium leading-relaxed">
              The first 3 months focus on foundation, education, and authority, ensuring Excellence Hot Sauce stands out in the UAE food market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-card border border-border/50 shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 sm:mb-6"
            >
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
            </motion.div>

            <h2 className="font-sora text-xl sm:text-2xl lg:text-heading-1 mb-3 sm:mb-4">Ready to Approve?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Select your preferred plan and let us begin the 12-month growth journey.
            </p>

            <div className="flex justify-center mb-6 sm:mb-8">
              <PlanToggle selectedPlan={selectedPlan} onSelect={onPlanChange} />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <Button variant="approve" size="xl" className="w-full text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="truncate">Approve {selectedPlan === "A" ? "Plan A – AED 8,000/mo" : "Plan B – AED 11,000/mo"}</span>
              </Button>

              <div className="flex gap-2 sm:gap-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 text-xs sm:text-sm"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                  <span className="sm:hidden">Chat</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 text-xs sm:text-sm"
                  onClick={handleCall}
                >
                  <Phone className="w-4 h-4" />
                  Call
                </Button>
              </div>

              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full text-muted-foreground hover:text-destructive mt-3 sm:mt-4 text-xs sm:text-sm"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </div>

            <p className="text-[10px] sm:text-xs text-muted-foreground mt-4 sm:mt-6">
              Questions? Contact BRAND VOX to discuss customization options.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
