import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlanToggle } from "./PlanToggle";
import { CheckCircle, Download, Phone, MessageCircle, Target, RefreshCw, TrendingUp, Megaphone, LogOut } from "lucide-react";
import { usePdfDownload } from "@/hooks/usePdfDownload";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface ApprovalSectionProps {
  selectedPlan: "A" | "B";
  onPlanChange: (plan: "A" | "B") => void;
}

const PHONE_NUMBER = "+971542146456";
const WHATSAPP_MESSAGE = "Hi, I'm interested in the Excellence Hot Sauce marketing proposal.";

const strategyBenefits = [
  { icon: Target, text: "Build brand trust before selling aggressively" },
  { icon: RefreshCw, text: "Create reusable content assets" },
  { icon: TrendingUp, text: "Grow organically across all platforms" },
  { icon: Megaphone, text: "Support future paid ads and influencer campaigns" },
];

export const ApprovalSection = ({ selectedPlan, onPlanChange }: ApprovalSectionProps) => {
  const { generatePdf, isGenerating } = usePdfDownload();
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
    <section className="slider-section relative py-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-center pt-16">
        <div className="w-full max-w-3xl mx-auto relative">
          {/* Final Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 p-6 rounded-2xl bg-card/50 border border-border/50"
          >
            <h3 className="font-sora text-lg font-semibold mb-4 text-center">Final Note</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">This strategy is designed to:</p>
            <div className="grid sm:grid-cols-2 gap-3">
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
            <p className="text-xs text-center text-primary mt-4 font-medium">
              The first 3 months focus on foundation, education, and authority, ensuring Excellence Hot Sauce stands out in the UAE food market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center p-8 lg:p-12 rounded-3xl bg-card border border-border/50 shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </motion.div>

            <h2 className="font-sora text-heading-1 mb-4">Ready to Approve?</h2>
            <p className="text-muted-foreground mb-8">
              Select your preferred plan and let's begin the 12-month growth journey.
            </p>

            <div className="flex justify-center mb-8">
              <PlanToggle selectedPlan={selectedPlan} onSelect={onPlanChange} />
            </div>

            <div className="space-y-4">
              <Button variant="approve" size="xl" className="w-full">
                <CheckCircle className="w-5 h-5" />
                Approve {selectedPlan === "A" ? "Plan A – AED 8,000/mo" : "Plan B – AED 11,000/mo"}
              </Button>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                  onClick={generatePdf}
                  disabled={isGenerating}
                >
                  <Download className="w-4 h-4" />
                  {isGenerating ? "Generating..." : "Download PDF"}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </div>

              <Button variant="ghost" size="lg" className="w-full" onClick={handleCall}>
                <Phone className="w-4 h-4" />
                Call +971 542 146 456
              </Button>

              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full text-muted-foreground hover:text-destructive mt-4"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              Questions? Contact BRAND VOX to discuss customization options.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
