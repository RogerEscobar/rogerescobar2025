/**
 * CONSTANTES DEL SITIO
 *
 * Centraliza todo el contenido textual del portafolio.
 * Cambiar copy aquí se refleja automáticamente en todo el sitio.
 */

// ============================================
// NAVEGACIÓN
// ============================================
export const NAV_ITEMS = [
  { name: "Proyectos", href: "/projects" },
  { name: "Experimentos IA", href: "/experiments" },
  { name: "About", href: "/about" },
];

// ============================================
// HOME PAGE
// ============================================
export const HOME_CONTENT = {
  hero: {
    title: "Diseño experiencias digitales con visión de producto",
    subtitle:
      "Mi killer combo: UX/UI + motion + código, para construir soluciones completas.",
  },
};

// ============================================
// PROYECTOS DESTACADOS (BentoGrid en Home)
// ============================================
export const FEATURED_PROJECTS = [
  {
    id: 1,
    gancho: "Optimizando experiencias de autoatención",
    nombreProyecto: "Kioscos Grupo Éxito",
    cliente: "Tekus SAS",
    año: "2019",
    categoria: "UX/UI",
    imagen: "/images/projects/exito-kioscos.jpg",
    size: "large", // Para BentoGrid asimétrico
  },
  {
    id: 2,
    gancho: "Simplificando flujos de compra complejos",
    nombreProyecto: "Proyecto 2",
    cliente: "Cliente 2",
    año: "2020",
    categoria: "Product Design",
    imagen: "/images/projects/proyecto-2.jpg",
    size: "small",
  },
  {
    id: 3,
    gancho: "Diseño de señalización interactiva",
    nombreProyecto: "Proyecto 3",
    cliente: "Cliente 3",
    año: "2021",
    categoria: "Digital Signage",
    imagen: "/images/projects/proyecto-3.jpg",
    size: "small",
  },
  {
    id: 4,
    gancho: "Mejorando la retención de información",
    nombreProyecto: "Proyecto 4",
    cliente: "Cliente 4",
    año: "2022",
    categoria: "E-Learning",
    imagen: "/images/projects/proyecto-4.jpg",
    size: "small",
  },
  {
    id: 5,
    gancho: "Transformando datos complejos en insights",
    nombreProyecto: "Proyecto 5",
    cliente: "Cliente 5",
    año: "2023",
    categoria: "Data Viz",
    imagen: "/images/projects/proyecto-5.jpg",
    size: "small",
  },
];

// ============================================
// PROYECTOS COMPLETOS (Página /proyectos)
// ============================================
export const ALL_PROJECTS = [
  {
    id: 1,
    gancho: "Optimizando experiencias de autoatención en retail",
    nombreProyecto: "Kioscos Grupo Éxito",
    cliente: "Tekus SAS",
    año: "2019",
    categoria: "UX/UI",
    descripcion: "Diseño de flujos de autoatención para puntos de venta.",
    imagen: "/images/projects/exito-kioscos.jpg",
    tags: ["UX Research", "Prototyping", "User Flows"],
  },
  {
    id: 2,
    gancho: "Segundo proyecto placeholder",
    nombreProyecto: "Proyecto 2",
    cliente: "Cliente 2",
    año: "2020",
    categoria: "Product Design",
    descripcion: "Descripción breve del proyecto.",
    imagen: "/images/projects/proyecto-2.jpg",
    tags: ["Figma", "Design System"],
  },
  // Agrega más proyectos aquí
];

// ============================================
// ABOUT PAGE
// ============================================
export const ABOUT_CONTENT = {
  name: "Roger Escobar",
  title: "Product Designer",
  image: "/images/about/img_profile.jpg",

  sections: {
    intro: {
      title: "Hola, soy Roger",
      lead: "Product Designer especializado en transformar necesidades de negocio en experiencias digitales funcionales y escalables.",
    },

    currently: {
      title: "Actualmente",
      content:
        "Creativo E-Learning & UX Designer en Emtelco, optimizando arquitecturas de información y diseñando módulos educativos interactivos.",
    },

    experience: {
      title: "Experiencia",
      content:
        "+10 años en diseño digital, con trayectoria en diseño de producto (UX/UI), motion design y producción audiovisual, sistemas de diseño y prototipado, e integración de IA generativa en workflows.",
    },

    approach: {
      title: "Enfoque",
      content:
        "Mi killer combo: UX/UI + Motion + Código. Facilitador entre stakeholders y desarrollo, aplicando metodologías de User Research y Design Thinking para soluciones centradas en el usuario.",
    },
  },

  stack: ["Figma", "After Effects", "Lottie", "HTML/CSS"],
};

// ============================================
// EXPERIMENTOS IA PAGE
// ============================================
export const EXPERIMENTS_CONTENT = {
  title: "Experimentos IA",
  description:
    "Un espacio para prototipos, agentes y aplicaciones construidas con IA. Próximamente: workflows con Claude, apps en Lovable, y más.",
  placeholder: "Coming soon",
};

// ============================================
// FOOTER
// ============================================
/* export const FOOTER_CONTENT = {
  copyright: "© 2026 Roger Escobar",
  location: "Based in Colombia",
  social: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rogerescobar",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/rogerescobar", // Reemplaza con tu usuario real
    },
  ],
}; */

// ============================================
// METADATA (SEO)
// ============================================
export const SITE_METADATA = {
  title: "Roger Escobar - Product Designer",
  description:
    "Diseño experiencias digitales con visión de producto. UX/UI + Motion + Código.",
  url: "https://rogerescobar.vercel.app",
  author: "Roger Escobar",
};
