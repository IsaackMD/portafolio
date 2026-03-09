import { Button } from "./ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import img from '../../public/yo.jpg'
export function HomeSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-balance">Desarrollador Full Stack</h1>
                <p className="text-xl text-muted-foreground">8+ meses de experiencia real</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Construyo aplicaciones web modernas y escalables utilizando las últimas tecnologías. Apasionado por
                crear soluciones eficientes tanto en el frontend como en el backend.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="gap-2 hover-glow">
                  <Mail className="w-4 h-4" />
                  Contactar
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-transparent hover-glow" onClick ={ ()=> window.open("https://github.com/IsaackMD")}>
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-125"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://mx.linkedin.com/in/kisb03?trk=people-guest_people_search-card"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-125"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-125"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient animate-float">
              <img src={img} width={1000} className="rounded-2xl"></img>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
