import { Html, Head, Main, NextScript } from "next/document";

/**
 * _document.js - HTML base del sitio
 *
 * Solo se ejecuta en el servidor
 * Aquí defines <html>, <head>, <body>
 * NO agregues lógica de React aquí
 */

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Meta tags globales, fuentes, etc */}
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
