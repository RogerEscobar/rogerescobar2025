import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import { ABOUT_CONTENT } from "../lib/constants";

/**
 * ABOUT - Página sobre mí
 *
 * Layout profesional tipo Yiko:
 * - Desktop: Grid 2 columnas (imagen | contenido)
 * - Mobile: Contenido primero, imagen al final
 *
 * Scroll largo con todas las secciones visibles.
 */

export default function About() {
  return (
    <>
      <Head>
        <title>About - Roger Escobar</title>
        <meta name="description" content={ABOUT_CONTENT.sections.intro.lead} />
      </Head>

      <section className="py-section-sm md:py-section">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            {/* Imagen (orden 2 en mobile, orden 1 en desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-700">
                <Image
                  src={ABOUT_CONTENT.image}
                  alt={ABOUT_CONTENT.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Contenido (orden 1 en mobile, orden 2 en desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 flex flex-col gap-10 md:order-2">
              {/* Intro */}
              <div>
                <h1 className="mb-2 text-h1">
                  {ABOUT_CONTENT.sections.intro.title}
                </h1>
                <p className="text-h4 font-medium text-muted">
                  {ABOUT_CONTENT.title}
                </p>
                <p className="mt-6 text-body-lg text-muted">
                  {ABOUT_CONTENT.sections.intro.lead}
                </p>
              </div>

              {/* Actualmente */}
              <div>
                <h2 className="mb-4 text-h3">
                  {ABOUT_CONTENT.sections.currently.title}
                </h2>
                <p className="text-body-lg text-muted">
                  {ABOUT_CONTENT.sections.currently.content}
                </p>
              </div>

              {/* Experiencia */}
              <div>
                <h2 className="mb-4 text-h3">
                  {ABOUT_CONTENT.sections.experience.title}
                </h2>
                <p className="text-body-lg text-muted">
                  {ABOUT_CONTENT.sections.experience.content}
                </p>
              </div>

              {/* Enfoque */}
              <div>
                <h2 className="mb-4 text-h3">
                  {ABOUT_CONTENT.sections.approach.title}
                </h2>
                <p className="text-body-lg text-muted">
                  {ABOUT_CONTENT.sections.approach.content}
                </p>
              </div>

              {/* Stack principal */}
              <div>
                <h2 className="mb-4 text-h3">Stack principal</h2>
                <div className="flex flex-wrap gap-3">
                  {ABOUT_CONTENT.stack.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full px-4 py-2 text-body-sm font-medium transition-colors hover:bg-foreground hover:text-background"
                      style={{
                        border: "1px solid var(--color-border)",
                        backgroundColor: "transparent",
                      }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
