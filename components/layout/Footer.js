import Container from "../ui/Container";
import { FOOTER_CONTENT } from "../../lib/constants";

/**
 * FOOTER - Pie de página simple
 *
 * Layout horizontal en ambas vistas (mobile y desktop)
 * según tu especificación.
 *
 * Contenido:
 * - Copyright
 * - Links sociales (LinkedIn, Instagram)
 * - Ubicación
 */

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-8 text-body-sm text-muted">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {/* Copyright */}
          <span>{FOOTER_CONTENT.copyright}</span>

          {/* Separador */}
          <span className="text-foreground/20">·</span>

          {/* Links sociales */}
          {FOOTER_CONTENT.social.map((link, index) => (
            <span key={link.name} className="flex items-center gap-4 md:gap-6">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground">
                {link.name}
              </a>
              {index < FOOTER_CONTENT.social.length - 1 && (
                <span className="text-foreground/20">·</span>
              )}
            </span>
          ))}

          {/* Separador */}
          <span className="text-foreground/20">·</span>

          {/* Ubicación */}
          <span>{FOOTER_CONTENT.location}</span>
        </div>
      </Container>
    </footer>
  );
}
