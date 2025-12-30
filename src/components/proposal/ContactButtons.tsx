import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+971542146456";
const WHATSAPP_MESSAGE = "Hi, I'm interested in the Excellence Hot Sauce marketing proposal.";

export const ContactButtons = () => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
    >
      <Button
        onClick={handleWhatsApp}
        size="lg"
        className="rounded-full w-14 h-14 p-0 bg-[#25D366] hover:bg-[#20BD5C] shadow-lg hover:shadow-xl transition-all"
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
      
      <Button
        onClick={handleCall}
        size="lg"
        className="rounded-full w-14 h-14 p-0 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
        title="Call +971 542 146 456"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </Button>
    </motion.div>
  );
};
