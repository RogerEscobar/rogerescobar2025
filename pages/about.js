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
 * Título dinámico con efecto typewriter
 * Labels con línea cyan superior
 * Scroll largo con todas las secciones visibles.
 */

export default function About() {
  return (
    <>
      <Head>
        <title>About - Roger Escobar</title>
        <meta name="description" content={ABOUT_CONTENT.sections.intro.lead} />
      </Head>

      <section className="py-section-sm pt-24 md:py-section md:pt-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            {/* Imagen + LinkedIn (orden 2 en mobile, orden 1 en desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="order-2 flex flex-col gap-6 md:order-1">
              {/* Imagen */}
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

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/rogerescobar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-foreground hover:text-background"
                style={{ borderColor: "var(--color-border)" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>

              {/* Botón descarga CV */}
              <a
                href="/cv/roger-escobar-cv.pdf"
                download
                className="btn-secondary">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Descargar CV
              </a>
            </motion.div>

            {/* Contenido (orden 1 en mobile, orden 2 en desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 flex flex-col gap-10 md:order-2">
              {/* Intro con profile name */}
              <div>
                <h1 className="mb-2 text-h1 text-magenta-500 dark:text-cyan-500">
                  {ABOUT_CONTENT.sections.intro.title}
                </h1>

                <p className="mt-6 text-body-lg text-neutral-700 dark:text-neutral-300">
                  {ABOUT_CONTENT.sections.intro.lead}
                </p>
              </div>

              {/* Actualmente */}
              <div>
                <div className="mb-4">
                  <div className="mb-2 h-px w-20 bg-magenta-500 dark:bg-cyan-500" />
                  <p className="text-body font-semibold uppercase tracking-wide text-magenta-500 dark:text-cyan-500">
                    {ABOUT_CONTENT.sections.currently.title}
                  </p>
                </div>
                <p className="text-body-lg text-neutral-700 dark:text-neutral-300">
                  {ABOUT_CONTENT.sections.currently.content}
                </p>
              </div>

              {/* Experiencia */}
              <div>
                <div className="mb-4">
                  <div className="mb-2 h-px w-20 bg-magenta-500 dark:bg-cyan-500" />
                  <p className="text-body font-semibold uppercase tracking-wide text-magenta-500 dark:text-cyan-500">
                    {ABOUT_CONTENT.sections.experience.title}
                  </p>
                </div>
                <p className="text-body-lg text-neutral-700 dark:text-neutral-300">
                  {ABOUT_CONTENT.sections.experience.content}
                </p>
              </div>

              {/* Enfoque */}
              <div>
                <div className="mb-4">
                  <div className="mb-2 h-px w-20 bg-magenta-500 dark:bg-cyan-500" />
                  <p className="text-body font-semibold uppercase tracking-wide text-magenta-500 dark:text-cyan-500">
                    {ABOUT_CONTENT.sections.approach.title}
                  </p>
                </div>
                <p className="text-body-lg text-neutral-700 dark:text-neutral-300">
                  {ABOUT_CONTENT.sections.approach.content}
                </p>
              </div>

              {/* Stack principal */}
              <div>
                <div className="mb-4">
                  <div className="mb-2 h-px w-20 bg-magenta-500 dark:bg-cyan-500" />
                  <p className="text-body font-semibold uppercase tracking-wide text-magenta-500 dark:text-cyan-500">
                    Stack
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {ABOUT_CONTENT.stack.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full px-4 py-2 text-body-sm font-medium transition-colors hover:bg-foreground hover:text-magenta-500 dark:hover:text-cyan-500"
                      style={{
                        border: "2px solid var(--color-border)",
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
