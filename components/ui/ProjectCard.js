import { motion } from "framer-motion";
import Image from "next/image";

/**
 * PROJECT CARD - Card de proyecto para BentoGrid
 *
 * Props:
 * - project: objeto con datos del proyecto
 *   {
 *     gancho: string (visible siempre)
 *     nombreProyecto: string (visible en hover)
 *     cliente: string (visible en hover)
 *     año: string (visible en hover)
 *     categoria: string (visible en hover)
 *     imagen: string (ruta de la imagen)
 *     size: 'large' | 'small' (para BentoGrid asimétrico)
 *   }
 *
 * Estados:
 * - Default: Imagen B&W + gancho visible
 * - Hover: Imagen color + elevación + info overlay
 *
 * Estructura flexible para agregar tags y otros datos a futuro.
 */

export default function ProjectCard({ project }) {
  const { gancho, nombreProyecto, cliente, año, categoria, imagen, size } =
    project;

  // Clases según tamaño (para BentoGrid)
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-700 ${sizeClasses[size]}`}
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.3,
        ease: [0.34, 1.56, 0.64, 1], // bounce-subtle
      }}>
      {/* Imagen con filtro grayscale */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={imagen}
          alt={nombreProyecto}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
        />

        {/* Overlay gradient (más visible en hover) */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-700/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      {/* Contenido - Gancho (siempre visible) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 group-hover:pb-8">
        <p className="text-body-lg font-medium text-white transition-opacity duration-300 group-hover:opacity-0">
          {gancho}
        </p>
      </div>

      {/* Overlay de información (visible en hover) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.1 }}
        className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-300 group-hover:translate-y-0">
        <div className="space-y-2 text-white">
          {/* Categoría */}
          <span className="text-caption font-medium uppercase tracking-wider text-cyan-300">
            {categoria}
          </span>

          {/* Nombre del proyecto */}
          <h3 className="text-h4 font-bold">{nombreProyecto}</h3>

          {/* Cliente y año */}
          <p className="text-body-sm text-neutral-100">
            {cliente} · {año}
          </p>

          {/* Espacio reservado para tags futuros */}
          {/* {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="rounded-full bg-white/20 px-3 py-1 text-caption"
                >
                  {tag}
                </span>
              ))}
            </div>
          )} */}
        </div>
      </motion.div>

      {/* Sombra de elevación (visible en hover) */}
      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-card-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  );
}
