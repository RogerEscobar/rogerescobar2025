import Header from "./Header";
import Footer from "./Footer";

/**
 * LAYOUT - Wrapper principal para todas las páginas
 *
 * Estructura:
 * - Header (sticky top)
 * - Main content (flex-1 para empujar footer al fondo)
 * - Footer
 *
 * El min-h-screen + flex asegura que el footer siempre
 * esté al fondo, incluso en páginas con poco contenido.
 */

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
