import { Card } from "./ui/card";
import { ScrollReveal } from "./scroll-reveal";
import { Award, Briefcase, GraduationCap, Code2 } from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      icon: Code2,
      title: "Google Cloud Computing Foundations Certificate",
      organization: "Google Cloud",
      date: "2024",
      description:
        "Certificación enfocada en fundamentos de computación en la nube, incluyendo infraestructura, redes, almacenamiento, seguridad e introducción a servicios de Google Cloud.",
      color: "from-blue-500 to-green-500",
    },
    {
      icon: Code2,
      title: "Implement Load Balancing on Compute Engine",
      organization: "Google Cloud",
      date: "2024",
      description:
        "Implementación de balanceadores de carga en Google Cloud utilizando Compute Engine, Cloud Shell y gcloud CLI. Incluye despliegue de máquinas virtuales, configuración de aplicaciones y gestión de tráfico mediante balanceo HTTP y de red.",
      color: "from-blue-500 to-green-500",
    },
    {
      icon: Award,
      title: "EF SET English Certificate B2",
      organization: "EF Standard English Test",
      date: "2023",
      description:
        "Certificación de nivel B2 (Upper Intermediate) que acredita comprensión y comunicación en inglés en contextos profesionales y técnicos.",
      color: "from-blue-500 to-emerald-500",
    },
    {
      icon: GraduationCap,
      title: "Curso de CSS Avanzado",
      organization: "Desafío Latam",
      date: "2025",
      description:
        "Curso enfocado en desarrollo de interfaces modernas utilizando CSS avanzado, responsive design y buenas prácticas para aplicaciones web.",
      color: "from-green-500 to-emerald-500",
    },
  ];
  const experiences = [
    {
      icon: Briefcase,
      title: "Desarrollador Full Stack",
      company: "Gobierno del Estado de Hidalgo",
      period: "(Agosto 2025 – Actualidad)",
      description:
        "Desarrollo y mantenimiento de sistemas internos utilizados por dependencias gubernamentales. Lideré la reingeniería de un sistema de inventario tecnológico migrando una base de datos heredada de MongoDB a PostgreSQL, normalizando datos y eliminando duplicidad anual de registros. También participé en el desarrollo de RACI, una plataforma interna para gestión de actividades con autenticación de dos factores, chat en tiempo real mediante WebSockets, notificaciones push con Firebase Cloud Messaging y adjuntos de archivos. Actualmente trabajo en un sistema para la gestión de solicitudes de pre-adquisición de licencias que agiliza procesos administrativos para directores de área.",
      technologies: [
        "React",
        "JavaScript",
        "TypeScript",
        "Express",
        "PostgreSQL",
        "Sequelize",
        "WebSockets",
        "Firebase Cloud Messaging",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Briefcase,
      title: "Desarrollador .NET",
      company: "Consorcio de Desarrollo Web (IMOVS)",
      period: "(Abril – Agosto 2025)",
      description:
        "Participé en el desarrollo y mantenimiento de sistemas administrativos para el sector aduanal. Implementé consultas avanzadas en LINQ para consolidar información de productos, estados de recepción y excepciones. También modifiqué una API en ASP.NET para automatizar el cálculo de tarifas aduanales considerando peso, tiempo, tipo de mercancía y almacenamiento. Implementé Entity Framework Code First con migraciones para el versionamiento de bases de datos y participé en la migración de funcionalidades de GeneXus a una arquitectura basada en .NET y principios SOLID.",
      technologies: [
        "C#",
        ".NET",
        "ASP.NET",
        "Entity Framework",
        "LINQ",
        "SQL Server",
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: GraduationCap,
      title: "Prácticas Profesionales",
      company: "Gobierno del Estado de Hidalgo",
      period: "(Febrero – Septiembre 2024)",
      description:
        "Desarrollé una aplicación web para la inscripción de menores a cursos de verano institucionales utilizando Symfony y PostgreSQL. El sistema validaba automáticamente la identidad mediante CURP, permitía aprobar o rechazar solicitudes, asignar grupos por edades y gestionar la información de los participantes. Este proyecto ayudó a digitalizar y organizar el proceso de registro de manera más eficiente.",
      technologies: [
        "PHP",
        "Symfony",
        "PostgreSQL",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      color: "from-blue-500 to-emerald-500",
    },
  ];

  return (
    <section id="achievements" className="py-25 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-16">
          {/* Experiencia */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  Experiencia
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Mi trayectoria en el desarrollo de software y proyectos
                  realizados
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {experiences.map((experience, index) => {
                const Icon = experience.icon;
                return (
                  <ScrollReveal key={experience.title} delay={index * 100}>
                    <Card className="group relative p-8 hover-lift transition-all duration-500 overflow-hidden cursor-pointer">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      <div className="relative z-10 flex flex-col md:flex-row gap-6">
                        <div
                          className={`w-16 h-16 rounded-lg bg-gradient-to-br ${experience.color} flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <div className="flex-1 space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-semibold text-balance">
                              {experience.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                              <span className="font-medium">
                                {experience.company}
                              </span>
                              <span>•</span>
                              <span>{experience.period}</span>
                            </div>
                          </div>

                          <p className="text-muted-foreground text-pretty leading-relaxed">
                            {experience.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-foreground transition-all duration-300 hover:scale-105"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
          {/* Certificaciones y Cursos */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  Certificaciones y Cursos
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Formación continua y certificaciones que respaldan mis
                  habilidades técnicas
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <ScrollReveal key={achievement.title} delay={index * 100}>
                    <Card className="group relative p-6 space-y-4 hover-lift transition-all duration-500 overflow-hidden cursor-pointer h-full">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      ></div>

                      <div className="relative z-10 space-y-4">
                        <div
                          className={`w-14 h-14 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-balance">
                            {achievement.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-medium">
                              {achievement.organization}
                            </span>
                            <span>•</span>
                            <span>{achievement.date}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
