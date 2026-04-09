/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Usa clase 'dark' en <html> para tema oscuro
  theme: {
    extend: {
      // ============================================
      // COLORES - Tokens de Figma
      // ============================================
      colors: {
        // Brand colors
        red: {
          100: "#FF9380",
          300: "#FF5C3D",
          500: "#FF2800",
          600: "#B21C00",
          700: "#661000",
        },
        blue: {
          100: "#9EC8FA",
          300: "#60A4F6",
          500: "#2683F3",
          600: "#0B5EC1",
          700: "#073A79",
        },
        cyan: {
          100: "#8DFCF2",
          300: "#42FAEA",
          500: "#06EAD6",
          600: "#049F91",
          700: "#02544D",
        },
        navy: {
          100: "#5D50EC",
          300: "#2817D8",
          500: "#1B1093",
          600: "#110A5C",
          700: "#060320",
        },
        magenta: {
          100: "#F8B2FA",
          300: "#F26AF6",
          500: "#EC22F2",
          600: "#B70BBC",
          700: "#700774",
        },

        // System colors
        green: {
          100: "#D0EAD1",
          500: "#66BB6A",
          700: "#48854B",
        },
        yellow: {
          100: "#FFF2C8",
          500: "#FFD54F",
          700: "#B59738",
        },

        // Neutral colors
        neutral: {
          100: "#F1F1F1",
          300: "#DBDBDB",
          500: "#ABABAB",
          600: "#686868",
          700: "#1E1E1E",
        },

        // ============================================
        // TOKENS SEMÁNTICOS (para cambios fáciles)
        // ============================================
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
        },
        danger: {
          DEFAULT: "var(--color-danger)",
        },
        background: {
          DEFAULT: "var(--color-background)",
        },
        foreground: {
          DEFAULT: "var(--color-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
        },
      },

      // ============================================
      // TIPOGRAFÍA - Space Grotesk
      // ============================================
      fontFamily: {
        sans: [
          "var(--font-space-grotesk)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      fontSize: {
        // Roles semánticos
        display: [
          "3.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ], // 56px
        h1: [
          "3rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" },
        ], // 48px
        h2: ["2.25rem", { lineHeight: "1.25", fontWeight: "600" }], // 36px
        h3: ["1.875rem", { lineHeight: "1.3", fontWeight: "600" }], // 30px
        h4: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }], // 24px
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }], // 18px
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }], // 16px
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }], // 14px
        caption: ["0.75rem", { lineHeight: "1.4", fontWeight: "500" }], // 12px
      },

      // ============================================
      // ESPACIADO PERSONALIZADO
      // ============================================
      spacing: {
        section: "5rem", // 80px - Secciones grandes
        "section-sm": "3rem", // 48px - Secciones mobile
      },

      // ============================================
      // BREAKPOINTS (Mobile First)
      // ============================================
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      // ============================================
      // BORDER RADIUS
      // ============================================
      borderRadius: {
        sm: "0.25rem", // 4px
        md: "0.5rem", // 8px
        lg: "0.75rem", // 12px
        xl: "1rem", // 16px
        "2xl": "1.5rem", // 24px
        full: "9999px",
      },

      // ============================================
      // SOMBRAS (para elevaciones)
      // ============================================
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        "card-hover": "0 20px 40px -10px rgba(27, 16, 147, 0.2)", // Navy con opacidad
      },

      // ============================================
      // TRANSICIONES (para animaciones)
      // ============================================
      transitionDuration: {
        200: "200ms",
        250: "250ms",
        300: "300ms",
        500: "500ms",
      },
      transitionTimingFunction: {
        "bounce-subtle": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      // ============================================
      // ASPECT RATIOS (para imágenes/videos)
      // ============================================
      aspectRatio: {
        video: "16 / 9",
        square: "1 / 1",
        portrait: "4 / 5",
      },
    },
  },
  plugins: [],
};
