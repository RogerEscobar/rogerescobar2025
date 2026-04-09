import Head from "next/head";
import Container from "../components/ui/Container";

/**
 * Work - Página de proyectos
 *
 * Estructura grid simple para project cards
 * (Cards reales se crearán después)
 */

export default function Work() {
  // Placeholder de proyectos (reemplazar con datos reales)
  const projects = [
    { id: 1, title: "Proyecto 1", category: "UX/UI" },
    { id: 2, title: "Proyecto 2", category: "Branding" },
    { id: 3, title: "Proyecto 3", category: "Motion" },
  ];

  return (
    <>
      <Head>
        <title>Work - Roger Escobar</title>
        <meta
          name="description"
          content="Proyectos seleccionados de diseño y desarrollo"
        />
      </Head>

      <section className="py-section-sm md:py-section">
        <Container>
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Proyectos seleccionados
            </h1>
            <p className="text-lg text-muted md:text-xl">
              Casos de estudio y trabajos destacados
            </p>
          </div>

          {/* Grid de proyectos */}
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                {/* Placeholder de imagen */}
                <div className="mb-4 aspect-video w-full rounded-lg bg-foreground/5 transition-colors group-hover:bg-foreground/10" />

                <div>
                  <p className="mb-2 text-sm text-muted">{project.category}</p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
