"use client"

import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import project_x from '../../public/imgs/project_x.png'
const techColors = {
  "React.js":
    "bg-[#61DAFB]/30 text-[#61DAFB] border-2 border-[#61DAFB]/50 hover:bg-[#61DAFB]/40 hover:border-[#61DAFB] hover:shadow-[0_0_20px_rgba(97,218,251,0.6)] hover:scale-105",
  "Node.js":
    "bg-[#339933]/30 text-[#339933] border-2 border-[#339933]/50 hover:bg-[#339933]/40 hover:border-[#339933] hover:shadow-[0_0_20px_rgba(51,153,51,0.6)] hover:scale-105",
  PostgreSQL:
    "bg-[#4169E1]/30 text-[#4169E1] border-2 border-[#4169E1]/50 hover:bg-[#4169E1]/40 hover:border-[#4169E1] hover:shadow-[0_0_20px_rgba(65,105,225,0.6)] hover:scale-105",
  "Express.js":
    "bg-white/20 text-white border-2 border-white/40 hover:bg-white/30 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-105",
  "C#": "bg-[#68217A]/30 text-[#9B4F96] border-2 border-[#68217A]/50 hover:bg-[#68217A]/40 hover:border-[#9B4F96] hover:shadow-[0_0_20px_rgba(155,79,150,0.6)] hover:scale-105",
  ".NET Core":
    "bg-[#512BD4]/30 text-[#7C4DFF] border-2 border-[#512BD4]/50 hover:bg-[#512BD4]/40 hover:border-[#7C4DFF] hover:shadow-[0_0_20px_rgba(124,77,255,0.6)] hover:scale-105",
  "SQL Server":
    "bg-[#CC2927]/30 text-[#FF4444] border-2 border-[#CC2927]/50 hover:bg-[#CC2927]/40 hover:border-[#FF4444] hover:shadow-[0_0_20px_rgba(255,68,68,0.6)] hover:scale-105",
  "Entity Framework":
    "bg-[#512BD4]/30 text-[#7C4DFF] border-2 border-[#512BD4]/50 hover:bg-[#512BD4]/40 hover:border-[#7C4DFF] hover:shadow-[0_0_20px_rgba(124,77,255,0.6)] hover:scale-105",
  MySQL:
    "bg-[#00758F]/30 text-[#4479A1] border-2 border-[#00758F]/50 hover:bg-[#00758F]/40 hover:border-[#4479A1] hover:shadow-[0_0_20px_rgba(68,121,161,0.6)] hover:scale-105",
  "Chart.js":
    "bg-[#FF6384]/30 text-[#FF6384] border-2 border-[#FF6384]/50 hover:bg-[#FF6384]/40 hover:border-[#FF6384] hover:shadow-[0_0_20px_rgba(255,99,132,0.6)] hover:scale-105",
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Landing Page Project X",
      description:
        "Landing page para mostrar los valores, misiones y visiones de la empresa con animaciones llamativas al usuario",
      technologies: ["React.js", "tailwindcss"],
      image: project_x,
      url: "https://melodious-banoffee-ebddd9.netlify.app",
      code: "https://github.com/IsaackMD/project_x"
    },
    {
      title: "Big Smoke Videogames",
      description:
        "Una Aplicación web robusta para comercio electrónico de videojuegos con gestión de productos, carritos de compra y procesamiento de órdenes.",
      technologies: ["Javascript", "HTML", "C#", "Boostrap","MySQL"],
      image: "https://raw.githubusercontent.com/IsaackMD/Big_Smoke_Videojuegos_NF/refs/heads/master/imgsProyecto/BgSmokeVideojuegosNF2.png",
      code: "https://github.com/IsaackMD/Big_Smoke_Videojuegos_NF"
    },
    {
      title: "Delivery Lions",
      description:
        "Panel de control interactivo con visualización de datos en tiempo real y generación de reportes personalizados.",
      technologies: ["React.js", "Node.js", "MySQL", "Chart.js"],
      image: "https://raw.githubusercontent.com/IsaackMD/deliveryLions/refs/heads/main/docs/imgsRef/Captura%20de%20pantalla%202025-03-27%20144146.png",
      code: "https://github.com/IsaackMD/deliveryLions"
    },
  ]

  return (
    <section id="projects" className="py-15 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <ScrollReveal>
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Proyectos Personales</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Algunos de los proyectos en los que he trabajado
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 150}>
                <Card className="overflow-hidden hover-lift hover:border-accent/50 transition-all duration-300 group">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2.5">
                      {project.technologies.map((tech) => (
                        <span color="warning" variant="shadow"
                          key={tech}
                          className={`px-3 py-1 text-sm font-bold rounded-lg transition-all duration-300 cursor-default backdrop-blur-sm ${
                            techColors[tech] ||
                            "bg-accent/30 text-accent border-2 border-accent/50 hover:bg-accent/40 hover:scale-105"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent hover-glow" onClick={() => window.open(project.code, "_blank")}>
                        <Github className="w-4 h-4" />
                        Código
                      </Button>
                      { project.url &&
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent hover-glow" target="_blank"
                      onClick ={ () => {
                        window.open(project.url)
                      }}

                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                      }
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
