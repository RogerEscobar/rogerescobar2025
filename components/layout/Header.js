import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import ThemeSwitch from "../ui/ThemeSwitch";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS } from "../../lib/constants";

/**
 * HEADER - Navegación principal del sitio (Desktop)
 *
 * Características:
 * - Pill menu completo (logo + nav + theme switch)
 * - Fixed top con glassmorphism
 * - Estados: muted → navy hover → navy + magenta line activo
 * - Oculto en mobile (MobileMenu toma control)
 */

export default function Header() {
  const router = useRouter();

  // Función para detectar si la ruta está activa
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
    }
  };

  return (
    <>
      {/* Header Desktop - Pill completo */}
      <div className="fixed left-0 right-0 top-4 z-50 hidden md:block">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="flex items-center justify-between rounded-full px-6 py-3"
            style={{
              background: "rgba(17, 10, 92, 0.15)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(96, 80, 236, 0.3)",
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}>
            {/* Logo */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="relative transition-opacity hover:opacity-80"
              aria-label="Roger Escobar - Home">
              <Image
                src="/images/logo/logo-full.svg"
                alt="Roger Escobar"
                width={160}
                height={48}
                priority
                className="h-12 w-auto"
              />
            </Link>

            {/* Navegación con nuevos estados: magenta oscuro → brillante → cyan activo */}
            <nav className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <div key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`text-body font-semibold transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-cyan-500"
                        : "text-magenta-600 hover:text-magenta-300"
                    }`}>
                    {item.name}
                  </Link>
                  {/* Línea cyan indicadora de activo */}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-cyan-500" />
                  )}
                </div>
              ))}
            </nav>

            {/* Theme Switch */}
            <ThemeSwitch variant="nav" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </>
  );
}
