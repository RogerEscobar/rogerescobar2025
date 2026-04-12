import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * SCROLL INDICATOR - Indicador de scroll minimalista
 *
 * Línea vertical con dot animado que invita a hacer scroll.
 * Usa Intersection Observer para detectar si el hero está visible.
 * Visible solo cuando al menos 50% del hero está en viewport.
 */

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const heroSection = document.querySelector("#hero-section");

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Visible solo si al menos 50% del hero está en viewport
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.9 }, // Visible solo si 90% del hero está en viewport
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-16 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 md:bottom-12">
      {/* Línea vertical */}
      <div className="h-16 w-px bg-muted opacity-30" />

      {/* Dot animado */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-2 w-2 rounded-full bg-cyan-500"
      />
    </motion.div>
  );
}
