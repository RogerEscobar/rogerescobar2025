import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * SCROLL INDICATOR - Indicador de scroll minimalista
 *
 * Línea vertical con dot animado que invita a hacer scroll.
 * Siempre visible cuando el usuario está en la sección hero.
 * Desaparece al salir del hero, reaparece al volver.
 */

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Visible solo cuando estás en el hero (primer viewport)
      const isInHeroSection = window.scrollY < window.innerHeight;
      setIsVisible(isInHeroSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
