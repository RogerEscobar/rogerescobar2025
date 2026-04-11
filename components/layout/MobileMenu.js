import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitch from "../ui/ThemeSwitch";
import { NAV_ITEMS } from "../../lib/constants";

/**
 * MOBILE MENU - Menú para mobile con barra toast superior
 *
 * Componentes:
 * 1. Barra toast fija en top con logo, botón menú y theme switch
 * 2. Overlay fullscreen que se despliega desde arriba
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

  // Scroll to top si estás en Home, navega si no
  const handleLogoClick = (e) => {
    if (router.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      {/* Barra Toast Superior Fija */}
      <div className="fixed left-0 right-0 top-4 z-50 px-4">
        <div className="mx-auto flex max-w-md items-center justify-between rounded-full bg-navy-600 px-4 py-3 shadow-lg">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="transition-opacity hover:opacity-80">
            <Image
              src="/images/logo/logo-icon.svg"
              alt="RE"
              width={32}
              height={32}
              priority
              className="h-8 w-8"
            />
          </Link>

          {/* Botón Menú */}
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-full px-6 py-2 font-medium text-neutral-100 transition-colors hover:bg-neutral-100/10"
            aria-label="Abrir menú">
            Menú
          </button>

          {/* Theme Switch */}
          <div className="flex items-center">
            <ThemeSwitch variant="nav" />
          </div>
        </div>
      </div>

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

            {/* Contenido del menú - Se despliega desde arriba */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
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
                          ? "text-magenta-300"
                          : "text-magenta-600 hover:text-magenta-500"
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
