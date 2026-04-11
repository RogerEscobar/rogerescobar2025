import { createContext, useContext, useEffect, useState } from "react";

/**
 * THEME PROVIDER
 *
 * Maneja el estado del tema (light/dark) en todo el portafolio.
 * Guarda la preferencia en localStorage y aplica la clase 'dark' al <html>.
 *
 * Uso:
 * - Wrappea la app en _app.js
 * - Usa el hook useTheme() en cualquier componente
 */

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Detectar tema inicial (localStorage o preferencia del sistema)
  useEffect(() => {
    // Esperar a que el componente esté montado (evita hidratación mismatch)
    setMounted(true);

    // 1. Revisar localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // 2. Si no hay guardado, usar preferencia del sistema
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Aplicar tema al <html> y guardar en localStorage
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  // Función para alternar tema
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Prevenir flash de contenido sin estilo durante hidratación
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para usar el tema
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider");
  }

  return context;
}
