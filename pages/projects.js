import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import { ALL_PROJECTS } from "../lib/constants";

/**
 * PROYECTOS - Página de proyectos completos
 *
 * Layout vertical tipo lista (Opción A - como Yiko)
 * Cada bloque muestra:
 * - Gancho (frase que explica el problema)
 * - Nombre del proyecto
 * - Cliente
 * - Imagen de referencia
 * - Tags (preparado para futuro)
 *
 * Sin enlaces a páginas internas por ahora.
 */

export default function Proyectos() {
  return (
    <>
      <Head>
        <title>Proyectos - Roger Escobar</title>
        <meta
          name="description"
          content="Casos de estudio y proyectos seleccionados de diseño de producto, UX/UI y motion design"
        />
      </Head>

      <section className="py-section-sm pt-24 md:py-section md:pt-28">
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24">
            <h1 className="mb-4 text-h1">Proyectos seleccionados</h1>
            <p className="text-body-lg text-muted md:text-h4">
              Casos de estudio donde combino UX/UI, motion y código para
              resolver problemas reales.
            </p>
          </motion.div>

          {/* Lista de proyectos */}
          <div className="space-y-24 md:space-y-32">
            {ALL_PROJECTS.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.21, 0.45, 0.27, 0.9],
                }}
                className="group">
                {/* Contenedor principal */}
                <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                  {/* Información del proyecto */}
                  <div className="flex flex-col justify-center space-y-6">
                    {/* Categoría */}
                    <span className="text-caption font-semibold uppercase tracking-wider text-accent">
                      {project.categoria}
                    </span>

                    {/* Gancho */}
                    <h2 className="text-h3 md:text-h2">{project.gancho}</h2>

                    {/* Nombre del proyecto + Cliente */}
                    <div className="space-y-2">
                      <h3 className="text-h4 font-bold text-foreground">
                        {project.nombreProyecto}
                      </h3>
                      <p className="text-body text-muted">
                        {project.cliente} · {project.año}
                      </p>
                    </div>

                    {/* Descripción */}
                    {project.descripcion && (
                      <p className="text-body-lg text-muted">
                        {project.descripcion}
                      </p>
                    )}

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border px-4 py-1 text-body-sm"
                            style={{ borderColor: "var(--color-border)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Imagen */}
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-700">
                    <Image
                      src={project.imagen}
                      alt={project.nombreProyecto}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Divisor (excepto último) */}
                {index < ALL_PROJECTS.length - 1 && (
                  <div
                    className="mt-24 h-px md:mt-32"
                    style={{ backgroundColor: "var(--color-border)" }}
                  />
                )}
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
