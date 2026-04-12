import Head from "next/head";
import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import { EXPERIMENTS_CONTENT } from "../lib/constants";

/**
 * EXPERIMENTOS IA - Sandbox para prototipos con IA
 *
 * Página temporal "en construcción" preparada para galería futura.
 * Por ahora muestra título + descripción + grid placeholder.
 */

export default function ExperimentosIA() {
  return (
    <>
      <Head>
        <title>Experimentos IA - Roger Escobar</title>
        <meta name="description" content={EXPERIMENTS_CONTENT.description} />
      </Head>

      <section className="py-section-sm pt-24 md:py-section md:pt-28">
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:mb-24">
            <h1 className="mb-6 text-h1">{EXPERIMENTS_CONTENT.title}</h1>
            <p className="mx-auto max-w-2xl text-body-lg text-muted md:text-h4">
              {EXPERIMENTS_CONTENT.description}
            </p>
          </motion.div>

          {/* Grid Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholders (3 items) */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group flex aspect-video cursor-not-allowed items-center justify-center rounded-xl border-2 border-dashed transition-colors"
                style={{ borderColor: "var(--color-border)" }}>
                <div className="text-center">
                  <p className="text-h4 text-muted opacity-50">
                    {EXPERIMENTS_CONTENT.placeholder}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mensaje adicional */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center">
            <p className="text-body text-muted">
              Este espacio se llenará pronto con prototipos, agentes y
              aplicaciones construidas con IA.
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
