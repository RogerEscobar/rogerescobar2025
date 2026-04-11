import Container from "../ui/Container";

/**
 * FOOTER - Pie de página minimalista
 *
 * Una sola línea con copyright y créditos
 * Fondo sólido Navy-600
 */

export default function Footer() {
  return (
    <footer className="bg-navy-600 py-6 text-body-sm text-neutral-100">
      <Container>
        <p className="text-center">
          © 2026 Diseñado por Roger Escobar asistido por Claude, guiado por
          criterio humano.
        </p>
      </Container>
    </footer>
  );
}
