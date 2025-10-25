import { ScrollReveal } from "./scroll-reveal";

export function AboutSection() {
  return (
    <section id="about" className="py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <ScrollReveal>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Sobre mí</h2>
              <div className="h-1 w-20 bg-accent rounded-full transition-all duration-500 hover:w-32"></div>
            </div>
          </ScrollReveal>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <ScrollReveal delay={100}>
              <p className="transition-all duration-300 hover:text-foreground">
                Soy un desarrollador full stack junior apasionado por crear aplicaciones web robustas y escalables. Mi
                enfoque se centra en escribir código limpio, mantenible y eficiente.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="transition-all duration-300 hover:text-foreground">
                Con experiencia en tecnologías modernas tanto del frontend como del backend, disfruto trabajando en
                proyectos que desafían mis habilidades y me permiten aprender constantemente. Me especializo en crear
                interfaces de usuario intuitivas y APIs RESTful eficientes.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="transition-all duration-300 hover:text-foreground">
                Actualmente estoy buscando oportunidades para contribuir a proyectos innovadores donde pueda aplicar mis
                conocimientos y seguir creciendo como desarrollador profesional.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
