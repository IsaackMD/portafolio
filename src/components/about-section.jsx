import { capabilities } from "../data/profile-data"
import { ScrollReveal } from "./scroll-reveal"
import { SectionHeading } from "./section-heading"

function DeveloperProfile() {
  return (
    <div className="code-window" aria-label="Resumen técnico en formato JSON">
      <div className="code-window__bar"><span /><span /><span /><strong>developer.json</strong></div>
      <pre><code>{`{
  "title": "Full Stack Developer",
  "focus": [".NET", "React", "Node.js"],
  "strengths": [
    "Production systems",
    "Relational data",
    "API integration"
  ],
  "mindset": "Understand. Build. Validate.",
  "location": "Pachuca, MX"
}`}</code></pre>
    </div>
  )
}
export function AboutSection() {
  return (
    <section id="about" className="section-shell console-section about-section">
      <div className="section-marker">Perfil profesional</div>
      <div className="about-layout">
        <ScrollReveal variant="horizontal-left">
          <div className="about-copy">
            <SectionHeading
              title={<>Más que solo <span>código.</span></>}
              description="Soy Ingeniero en Tecnologías de la Información con experiencia profesional construyendo y evolucionando aplicaciones web en producción."
            />
            <p>Trabajo cerca de usuarios y especialistas para entender procesos, convertir reglas de negocio en software mantenible y acompañar la solución desde la base de datos hasta el despliegue.</p>
            <a className="outline-action" href="#experience">Conocer mi experiencia <span>→</span></a>
          </div>
        </ScrollReveal>

        <div className="about-capabilities">
          {capabilities.map((capability, index) => (
            <ScrollReveal key={capability.title} variant="vertical" delay={index * 90}>
              <article className="console-card capability-row">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{capability.title}</h3><p>{capability.description}</p></div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="horizontal-right" delay={170}>
          <DeveloperProfile />
        </ScrollReveal>
      </div>
    </section>
  )
}
