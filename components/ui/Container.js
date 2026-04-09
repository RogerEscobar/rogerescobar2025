/**
 * CONTAINER - Contenedor responsivo reutilizable
 *
 * Props:
 * - children: contenido interno (requerido)
 * - className: clases adicionales (opcional)
 * - as: elemento HTML a renderizar (default: 'div')
 *
 * Comportamiento:
 * - Mobile: padding lateral 1rem (16px)
 * - Tablet: padding lateral 1.5rem (24px)
 * - Desktop: padding lateral 2rem (32px)
 * - Max-width: 1280px (xl breakpoint)
 * - Centrado automático
 *
 * Uso:
 * <Container>
 *   <h1>Contenido aquí</h1>
 * </Container>
 *
 * <Container as="section" className="py-20">
 *   <p>Sección con padding vertical</p>
 * </Container>
 */

export default function Container({
  children,
  className = "",
  as: Component = "div",
}) {
  return (
    <Component
      className={`mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  );
}
