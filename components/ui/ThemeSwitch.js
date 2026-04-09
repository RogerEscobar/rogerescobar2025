import { useTheme } from "../ThemeProvider";

/**
 * THEME SWITCH - Botón de cambio de tema
 *
 * Props:
 * - variant: 'nav' (para header) o 'floating' (mobile bottom-left)
 *
 * Iconos:
 * - Light mode: 💡 Bombillo encendido
 * - Dark mode: 💡 Bombillo quebrado (apagado)
 *
 * Nota: Los SVGs son placeholders simples.
 * Reemplázalos con tus diseños personalizados.
 */

export default function ThemeSwitch({ variant = "nav" }) {
  const { theme, toggleTheme } = useTheme();

  // Estilos según variante
  const baseStyles =
    "group flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  const variantStyles = {
    // En el nav (desktop)
    nav: "w-10 h-10 rounded-lg hover:bg-foreground/5",
    // Flotante (mobile)
    floating:
      "fixed bottom-8 left-6 z-40 w-12 h-12 rounded-full bg-background border-2 border-foreground/10 shadow-lg hover:shadow-xl hover:scale-110",
  };

  return (
    <button
      onClick={toggleTheme}
      className={`${baseStyles} ${variantStyles[variant]}`}
      aria-label={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
      title={`Modo ${theme === "light" ? "oscuro" : "claro"}`}>
      {theme === "light" ? (
        // Bombillo encendido (light mode)
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground transition-transform group-hover:scale-110">
          {/* Rayos de luz */}
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Bombillo */}
          <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.2" />
          <path
            d="M12 8a4 4 0 0 1 2.5 7.1V17a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1.9A4 4 0 0 1 12 8z"
            fill="currentColor"
          />
        </svg>
      ) : (
        // Bombillo quebrado (dark mode)
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground transition-transform group-hover:scale-110">
          {/* Línea de quiebre */}
          <path
            d="M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Bombillo (sin rayos) */}
          <path
            d="M12 8a4 4 0 0 1 2.5 7.1V17a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1.9A4 4 0 0 1 12 8z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          {/* Base del bombillo */}
          <rect
            x="9.5"
            y="18"
            width="5"
            height="2"
            rx="0.5"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
      )}
    </button>
  );
}
