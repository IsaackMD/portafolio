import { Card } from "./ui/card"
import { ScrollReveal } from "./scroll-reveal"
import { Award, Briefcase, GraduationCap, Code2 } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Certificación de CSS Avanzado",
      organization: "Desafío Latam",
      date: "2025",
      description: "Curso completo de desarrollo de estilos para aplicaciones web con CSS",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Certificación EF SET B2",
      organization: "Microsoft Learn",
      date: "2023",
      description: "Certificado de test de idioma ingles",
      color: "from-blue-500 to-emerald-500",
    },
    {
      icon: Code2,
      title: "Google Cloud Computing Foundations Certificate",
      organization: "Google Cloud",
      date: "2024",
      description: "Certificación que ayuda a desarrollar competencias técnicas en computación en la nube",
      color: "from-blue-500 to-green-500",
    },
    {
      icon: Code2,
      title: "Implement Load Balancing on Compute Engine Skill ",
      organization: "Google Cloud",
      date: "2024",
      description: "Implementar equilibrio de carga en Compute Engine para demostrar habilidades en lo siguiente: escribir comandos gcloud y usar Cloud Shell, crear e implementar máquinas virtuales en Compute Engine, ejecutar aplicaciones en contenedores en Google Kubernetes Engine y configurar balanceadores de carga de red y HTTP.",
      color: "from-blue-500 to-green-500",
    },

  ]

  const experiences = [
    {
      icon: Briefcase,
      title: "Desarrollador Full Stack",
      company: "Gobierno del Estado de Hidalgo",
      period: "(Agosto 2025 – Actualidad)",
      description:
        "Desarrollo de aplicaciones web completas utilizando React, Node.js y bases de datos SQL. Implementación de APIs RESTful y gestión de bases de datos, junto a interfaces de usuario diseñadas para cumplir con las principales necesidades del usuario final.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Briefcase,
      title: "Desarrollador Web Jr. ",
      company: "Consorcio de Desarrollo Web (IMOVS)",
      period: "(Abril – Agosto 2025)",
      description:
        "Participe en el desarrollo de aplicaciones web para empresas de renombre dentro de aduanas, en cargado de desarrollar un sistema capas de cumplir con la funcionalidad de manejar registros de las transacciones que manejan, cumpliendo con la logica de negocio de la empresa.",
      technologies: ["C#", ".NET", "SQL Server", "ASP.NET Core"],
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: GraduationCap,
      title: "Prácticas Profesionales ",
      company: "Gobierno del Estado de Hidalgo",
      period: " (Enero – Abril 2025)",
      description:
        "Participe en el desarrollo de la aplicación web para la inscripción de menores de edad a curso de verano por parte de gobierno para los familiares que trabajan en gobhierno, de igual forma lidere el desarrollo de un sistema de inventarios interno para ayudar a solucionar la divergencia de información.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      color: "from-blue-500 to-emerald-500",
    },
  ]

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
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Experiencia</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Mi trayectoria en el desarrollo de software y proyectos realizados
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {experiences.map((experience, index) => {
                const Icon = experience.icon
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
                            <h3 className="text-2xl font-semibold text-balance">{experience.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                              <span className="font-medium">{experience.company}</span>
                              <span>•</span>
                              <span>{experience.period}</span>
                            </div>
                          </div>

                          <p className="text-muted-foreground text-pretty leading-relaxed">{experience.description}</p>

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
                )
              })}
            </div>
          </div>
          {/* Certificaciones y Cursos */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Certificaciones y Cursos</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Formación continua y certificaciones que respaldan mis habilidades técnicas
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
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
                          <h3 className="text-xl font-semibold text-balance">{achievement.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-medium">{achievement.organization}</span>
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
                )
              })}
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
