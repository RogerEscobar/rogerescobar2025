import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Container from "../ui/Container";
import ThemeSwitch from "../ui/ThemeSwitch";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS } from "../../lib/constants";

/**
 * HEADER - Navegación principal del sitio
 *
 * Características:
 * - Sticky top (siempre visible al hacer scroll)
 * - Logo SVG que cambia según viewport (full en desktop, icon en mobile)
 * - Navegación horizontal en desktop
 * - Theme switch integrado (desktop: nav, mobile: flotante)
 * - Glassmorphism sutil (backdrop blur)
 * - Indicador de página activa
 *
 * Responsive:
 * - Desktop: Logo full + nav + theme switch
 * - Mobile: Logo icon + botón menú (toast)
 */

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <header
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm"
        style={{ borderBottom: "1px solid rgba(40, 23, 216, 0.2)" }}>
        <Container>
          <nav className="flex items-center justify-between py-4 md:py-6">
            {/* Logo */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="relative transition-opacity hover:opacity-80"
              aria-label="Roger Escobar - Home">
              {/* Logo completo (desktop) */}
              <div className="hidden md:block">
                <Image
                  src="/images/logo/logo-full.svg"
                  alt="Roger Escobar"
                  width={160}
                  height={48}
                  priority
                  className="h-12 w-auto"
                />
              </div>

              {/* Logo icon (mobile) */}
              <div className="md:hidden">
                <Image
                  src="/images/logo/logo-icon.svg"
                  alt="RE"
                  width={32}
                  height={32}
                  priority
                  className="h-8 w-8"
                />
              </div>
            </Link>

            {/* Navegación Desktop */}
            <div className="hidden items-center gap-8 md:flex">
              {/* Links */}
              <ul className="flex items-center gap-8">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-body transition-colors duration-200 ${
                        isActive(item.href)
                          ? "font-semibold text-magenta-300"
                          : "text-magenta-600 hover:text-magenta-500"
                      }`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Theme Switch */}
              <ThemeSwitch variant="nav" />
            </div>

            {/* Mobile: Solo muestra el botón de menú (MobileMenu maneja su propio botón) */}
            <div className="md:hidden">
              {/* El botón toast se renderiza desde MobileMenu */}
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu />
    </>
  );
}
