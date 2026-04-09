import Head from "next/head";
import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import ProjectCard from "../components/ui/ProjectCard";
import {
  HOME_CONTENT,
  FEATURED_PROJECTS,
  SITE_METADATA,
} from "../lib/constants";

/**
 * HOME - Página principal
 *
 * Estructura:
 * 1. Hero - Título + subtítulo + CTAs
 * 2. BentoGrid - 5 proyectos destacados con animación cinematográfica
 *
 * Animaciones aplicando principio de staging:
 * - Hero aparece primero
 * - Proyecto grande (staging principal)
 * - Proyectos pequeños en cascada
 */

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_METADATA.title}</title>
        <meta name="description" content={SITE_METADATA.description} />
      </Head>

      {/* Hero Section */}
      <section className="py-section-sm md:py-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex min-h-[60vh] flex-col justify-center gap-6 md:gap-8">
            {/* Título */}
            <h1 className="text-display text-balance">
              {HOME_CONTENT.hero.title}
            </h1>

            {/* Subtítulo */}
            <p className="max-w-2xl text-body-lg text-muted md:text-h4">
              {HOME_CONTENT.hero.subtitle}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* BentoGrid Section - Proyectos Destacados */}
      <section className="py-section-sm md:py-section">
        <Container>
          {/* Grid asimétrico: 1 grande (2x2) + 4 pequeños (1x1) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((project, index) => {
              // Staging: proyecto grande primero, luego cascada
              const delay = index === 0 ? 0.2 : 0.2 + index * 0.1;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay,
                    ease: [0.21, 0.45, 0.27, 0.9],
                  }}
                  className={
                    project.size === "large"
                      ? "md:col-span-2 md:row-span-2"
                      : ""
                  }>
                  <ProjectCard project={project} />
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
