import { motion } from "framer-motion";
import { PlatformCard } from "./PlatformCard";

const platforms = [
  { name: "Instagram", role: "Primary storytelling & product discovery", badge: "Core" },
  { name: "Facebook", role: "Community reach & cross-posting", badge: "Core" },
  { name: "TikTok", role: "Discovery & viral short-form", badge: "Growth" },
  { name: "Snapchat", role: "Behind-the-scenes lifestyle clips", badge: "Support" },
  { name: "YouTube", role: "Long-form + Shorts for authority", badge: "Authority" },
  { name: "LinkedIn", role: "B2B & horeca credibility", badge: "B2B" },
  { name: "Website", role: "SEO & conversion support", badge: "Conversion" },
];

export const PlatformsSection = () => {
  return (
    <section className="slider-section relative py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-start">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Channels</p>
            <h2 className="font-sora text-heading-1 mb-4">Platforms Covered</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A comprehensive multi-platform approach tailored to your audience's behavior.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {platforms.map((platform, i) => (
              <PlatformCard
                key={platform.name}
                name={platform.name}
                role={platform.role}
                badge={platform.badge}
                delay={i * 0.08}
              />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-muted-foreground mt-8"
          >
            Note: X (Twitter) is excluded from this strategy as per request.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
