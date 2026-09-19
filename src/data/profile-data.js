export const profile = {
  name: "Kevin Isaac Sánchez Benítez",
  shortName: "Kevin Sánchez",
  role: "Full Stack Developer",
  location: "Pachuca de Soto, Hidalgo",
  email: "sanchezbisaack@gmail.com",
  phone: "+527791254656",
  github: "https://github.com/IsaackMD",
  linkedin: "https://linkedin.com/in/kisb03",
  website: "https://acabeck.com",
  cv: "/cv/CV_Kevin_Sanchez_FullStack_NET_React.pdf",
}

export const navigationItems = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Perfil" },
  { id: "projects", label: "Proyectos" },
  { id: "experience", label: "Experiencia" },
  { id: "skills", label: "Stack" },
  { id: "contact", label: "Contacto" },
]

export const highlights = [
  { value: "2 años", label: "experiencia profesional" },
  { value: "8+", label: "sistemas en producción y evolución" },
  { value: "Full stack", label: "del requerimiento al despliegue" },
]

export const capabilities = [
  {
    eyebrow: "Producto",
    title: "Entrega end-to-end",
    description:
      "Convierto requerimientos y reglas de negocio en flujos, modelos de datos, APIs e interfaces listas para operar.",
  },
  {
    eyebrow: "Ingeniería",
    title: "Evolución sin interrupciones",
    description:
      "Trabajo sobre sistemas productivos y legacy, preservando la operación mientras modernizo módulos y procesos.",
  },
  {
    eyebrow: "Infraestructura",
    title: "Despliegue con contexto",
    description:
      "Administro entornos Linux con Docker, Nginx, SSL y AWS para llevar el software más allá de localhost.",
  },
]

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Gobierno del Estado de Hidalgo",
    period: "Jul 2025 — Actualidad",
    summary:
      "Responsabilidad end-to-end sobre sistemas institucionales: análisis con usuarios, diseño de datos, backend, frontend, pruebas, despliegue y mantenimiento.",
    outcomes: [
      "Desarrollo de un sistema de proyectos y tareas en producción para aproximadamente 20 usuarios, con Kanban, WebSockets y notificaciones.",
      "Modernización de un inventario tecnológico y migración MongoDB → PostgreSQL con limpieza, deduplicación y normalización de decenas de miles de registros.",
      "Evolución de una plataforma clínica en producción con agenda, expedientes y módulos de Nutrición y Psicología.",
    ],
    technologies: ["React", "TypeScript", "Node.js", ".NET", "PostgreSQL", "Docker"],
  },
  {
    role: "Desarrollador .NET",
    company: "JC&JF Cargo",
    period: "Sep 2024 — Jul 2025",
    summary:
      "Ownership funcional de un módulo operativo independiente dentro de una plataforma de logística y comercio exterior.",
    outcomes: [
      "Evolución de flujos de revalidación, tránsito, salidas, previos y generación de tickets junto a usuarios operativos.",
      "Integración de una biblioteca CFDI al flujo de facturación y generación de reportes PDF/Excel.",
      "Modernización gradual de componentes legacy en ASP.NET Web Forms hacia soluciones .NET modernas.",
    ],
    technologies: ["C#", ".NET 6", "ASP.NET Core MVC", "EF Core", "SQL Server"],
  },
  {
    role: "Estancia profesional",
    company: "Gobierno del Estado de Hidalgo",
    period: "Abr 2024 — Jun 2024",
    summary:
      "Construcción de una plataforma documental que continuó en operación después de la estancia profesional.",
    outcomes: [
      "Registro, revisión y dictaminación de solicitudes con carga de documentos PDF y validaciones de CURP.",
      "Clasificación de archivos y descarga masiva ZIP para un volumen aproximado de 150 solicitudes diarias.",
    ],
    technologies: ["PHP", "Symfony", "PostgreSQL", "JavaScript"],
  },
]

export const projects = [
  {
    kind: "Producto independiente",
    title: "FitAdminPro",
    description:
      "Plataforma multi-tenant para administrar gimnasios. Construí prácticamente todo el frontend y gestiono la infraestructura cloud; el piloto real administra cerca de 110 miembros.",
    impact: "Cliente piloto en operación",
    technologies: ["React", "TypeScript", ".NET 8", "PostgreSQL", "AWS", "Docker"],
    demo: "https://fitadminpro.acabeck.com/login",
    accent: "cyan",
    images: [
      "/imgs/fit-admin-pro/dashboard_fitadmin.png",
      "/imgs/fit-admin-pro/configuracion_fitadmin.png",
    ],
  },
  {
    kind: "Caso de producción",
    title: "Gestión de proyectos y tareas",
    description:
      "Aplicación full stack con proyectos, tareas, subtareas, tablero Kanban, dashboards, trazabilidad, 2FA/TOTP y comunicación en tiempo real.",
    impact: "~20 usuarios internos",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "WebSockets", "FCM"],
    accent: "violet",
    images: [
      "/imgs/Gestion_Proyectos_Tareas/Gestion_proyectos_tareas.png",
    ],
  },
  {
    kind: "Modernización de datos",
    title: "Inventario tecnológico",
    description:
      "Migración por lotes desde MongoDB hacia un modelo relacional normalizado, con deduplicación, catálogos cacheados y validación progresiva por ambientes.",
    impact: "Decenas de miles de registros",
    technologies: ["Python", "PostgreSQL", "Sequelize", "React", "Express"],
    accent: "amber",
    images: [
      "/imgs/SIRIT/SIRIT.png",
    ],
  },
]

export const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces modulares, accesibles y conectadas a APIs.",
    skills: ["React", "TypeScript", "JavaScript", "Vite", "React Router", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "APIs, reglas de negocio, autenticación e integraciones.",
    skills: ["C#", ".NET 8", "ASP.NET Core", "Node.js", "Express", "PHP / Symfony"],
  },
  {
    title: "Datos",
    description: "Modelado relacional, migraciones y transacciones.",
    skills: ["PostgreSQL", "SQL Server", "MongoDB", "EF Core", "Sequelize", "LINQ"],
  },
  {
    title: "Cloud & Delivery",
    description: "Operación y despliegues controlados en infraestructura real.",
    skills: ["AWS EC2", "Docker", "Nginx", "Linux", "SSL / TLS", "Git / GitHub"],
  },
]

export const credentials = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    year: "2026",
    url: "/imgs/Certificado/AWS_Cloud_Practitioner.pdf",
  },
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "AWS Skill Builder",
    year: "2026",
    url: "https://www.credly.com/badges/7770c19f-6a1f-4164-bf51-9a3f6df354b3/linked_in_profile",
  },
  {
    title: "Cloud Computing Foundations",
    issuer: "Google Cloud",
    year: "2024",
    url: "https://www.credly.com/badges/890402d1-0762-4950-b257-53b380c2efc4/linked_in_profile",
  },
  {
    title: "English B2 Upper Intermediate",
    issuer: "EF SET",
    year: "2024",
    url: "https://cert.efset.org/HAedfP?trk=public_profile_see-credential",
  },
]
