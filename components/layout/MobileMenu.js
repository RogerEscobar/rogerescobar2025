import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitch from "../ui/ThemeSwitch";
import { NAV_ITEMS } from "../../lib/constants";

/**
 * MOBILE MENU - Menú fullscreen para mobile
 *
 * Componentes:
 * 1. Botón toast flotante (bottom-center) que dice "Menú"
 * 2. Overlay fullscreen con navegación grande
 * 3. Theme switch flotante (bottom-left)
 *
 * Animación:
 * - Botón toast se expande circularmente
 * - Overlay sube desde abajo (slide from bottom)
 * - Items aparecen con stagger
 *
 * Responsive:
 * - Solo visible en mobile (oculto en md:)
 */

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Detectar si la ruta está activa
  const isActive = (href) => {
    if (href === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(href);
  };

  return (
    <div className="md:hidden">
      {/* Botón Toast Flotante */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-1/2 z-40 -translate-x-1/2 rounded-full bg-foreground px-8 py-4 font-medium text-background shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir menú">
        Menú
      </motion.button>

      {/* Theme Switch Flotante (siempre visible en mobile) */}
      <ThemeSwitch variant="floating" />

      {/* Overlay Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-background"
              onClick={() => setIsOpen(false)}
            />

            {/* Contenido del menú */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
              {/* Botón cerrar */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 transition-colors hover:bg-foreground/10"
                aria-label="Cerrar menú">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Navegación */}
              <nav className="flex flex-col items-center gap-8">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.1,
                      duration: 0.3,
                    }}>
                    <Link
                      href={item.href}
                      className={`text-4xl font-bold transition-colors ${
                        isActive(item.href)
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      }`}>
                      {item.name.toUpperCase()}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Indicador visual de página activa */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-12 text-caption text-muted">
                {NAV_ITEMS.find((item) => isActive(item.href))?.name || "Home"}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
