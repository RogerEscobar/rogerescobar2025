import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Layout from "../components/layout/Layout";

/**
 * _app.js - Wrapper global de Next.js
 *
 * Estructura:
 * 1. ThemeProvider - Maneja temas claro/oscuro
 * 2. Layout - Header + Main + Footer en todas las páginas
 * 3. Component - La página actual
 */

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
