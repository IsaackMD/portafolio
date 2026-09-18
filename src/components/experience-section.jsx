import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react"
import { credentials, experiences } from "../data/profile-data"
import { ScrollReveal } from "./scroll-reveal"
import { SectionHeading } from "./section-heading"

function ExperienceItem({ experience }) {
  return (
    <article className="journey-item">
      <span className="journey-item__dot" />
      <time>{experience.period}</time>
      <h3>{experience.role}</h3>
      <strong>{experience.company}</strong>
      <p>{experience.summary}</p>
      <div className="tag-list">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
    </article>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell console-section journey-section">
      <div className="section-marker">Mi trayectoria</div>
      <ScrollReveal>
        <SectionHeading title={<>Experiencia y <span>formación.</span></>} description="Una trayectoria construida con sistemas reales, aprendizaje continuo y responsabilidad de principio a fin." />
      </ScrollReveal>

      <div className="journey-grid">
        <ScrollReveal variant="vertical">
          <article className="console-card journey-column journey-column--experience">
            <header><BriefcaseBusiness /><h3>Experiencia</h3></header>
            <div className="journey-timeline">{experiences.map((experience) => <ExperienceItem key={`${experience.company}-${experience.period}`} experience={experience} />)}</div>
          </article>
        </ScrollReveal>

        <ScrollReveal variant="vertical" delay={100}>
          <article className="console-card journey-column">
            <header><GraduationCap /><h3>Educación</h3></header>
            <div className="education-block">
              <time>2021 — 2024</time>
              <h4>Ingeniería en Tecnologías de la Información</h4>
              <p>Universidad Politécnica Metropolitana de Hidalgo</p>
              <span>Título y cédula profesional</span>
            </div>
          </article>
        </ScrollReveal>

        <ScrollReveal variant="vertical" delay={200}>
          <article className="console-card journey-column">
            <header><Award /><h3>Formación continua</h3></header>
            <div className="credentials-compact">
              {credentials.map((credential) => <div key={credential.title}><strong>{credential.title}</strong><span>{credential.issuer} · {credential.year}</span></div>)}
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  )
}
