import Head from "next/head";
import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import ProjectCard from "../components/ui/ProjectCard";
import ScrollIndicator from "../components/ui/ScrollIndicator";
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

      {/* Hero Section - Fullscreen con padding-top para pill menu */}
      <section
        id="hero-section"
        className="relative flex min-h-screen items-center pt-24 md:pt-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 md:gap-8">
            {/* Título */}
            <h1 className="text-display text-balance text-cyan-500">
              {HOME_CONTENT.hero.title}
            </h1>

            {/* Subtítulo */}
            <p className="max-w-2xl text-body-lg text-muted md:text-h4">
              {HOME_CONTENT.hero.subtitle}
            </p>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* BentoGrid Section - Proyectos Destacados */}
      <section className="py-section-sm md:py-section">
        {/* Container fullwidth para BentoGrid */}
        <div className="mx-auto w-full px-4 md:px-6 lg:px-8">
          {/* Grid asimétrico 6 columnas: 
              - Proyecto 1 (large): 4 cols × 2 rows
              - Proyectos 2-3: 2 cols × 1 row cada uno
              - Proyectos 4-5: 3 cols × 1 row cada uno
          */}
          <div className="grid grid-cols-1 gap-2 md:grid-cols-6 md:gap-2">
            {FEATURED_PROJECTS.map((project, index) => {
              // Staging: proyecto grande primero, luego cascada
              const delay = index === 0 ? 0.2 : 0.2 + index * 0.1;

              // Clases específicas por proyecto
              let gridClasses = "";
              if (project.size === "large") {
                gridClasses = "md:col-span-4 md:row-span-2";
              } else if (index === 1 || index === 2) {
                gridClasses = "md:col-span-2 md:row-span-1";
              } else {
                // Proyectos 4 y 5
                gridClasses = "md:col-span-3 md:row-span-1";
              }

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
                  className={gridClasses}>
                  <ProjectCard project={project} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
