import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlanToggle } from "./PlanToggle";
import { CheckCircle, Download, Phone, MessageCircle } from "lucide-react";

interface ApprovalSectionProps {
  selectedPlan: "A" | "B";
  onPlanChange: (plan: "A" | "B") => void;
}

export const ApprovalSection = ({ selectedPlan, onPlanChange }: ApprovalSectionProps) => {
  return (
    <section className="slider-section relative py-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-center pt-16">
        <div className="w-full max-w-2xl mx-auto relative">
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
                <Button variant="outline" size="lg" className="flex-1">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </div>

              <Button variant="ghost" size="lg" className="w-full">
                <Phone className="w-4 h-4" />
                Book a Call
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
