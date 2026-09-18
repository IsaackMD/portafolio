import { useEffect, useRef, useState } from "react"
import { Award, BriefcaseBusiness, ExternalLink, GraduationCap } from "lucide-react"
import { credentials, experiences } from "../data/profile-data"
import { ScrollReveal } from "./scroll-reveal"
import { SectionHeading } from "./section-heading"

function ExperienceItem({ experience, index, active }) {
  return (
    <article className={`journey-item journey-item--${index % 2 === 0 ? "left" : "right"}${active ? " journey-item--active" : ""}`}>
      <span className="journey-item__dot" aria-hidden="true"><BriefcaseBusiness /></span>
      <div className="journey-item__content">
        <time>{experience.period}</time>
        <h3>{experience.role}</h3>
        <strong>{experience.company}</strong>
        <p>{experience.summary}</p>
        <div className="tag-list">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      </div>
    </article>
  )
}

export function ExperienceSection() {
  const timelineRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return undefined

    let frame = 0
    const updateProgress = () => {
      const rect = timeline.getBoundingClientRect()
      const lineInset = 48
      const startLine = window.innerHeight * 0.58
      const travel = Math.max(rect.height - lineInset * 2, 1)
      const travelled = startLine - (rect.top + lineInset)
      const nextProgress = Math.min(Math.max(travelled / travel, 0), 1)
      const nextActiveIndex = Math.floor(nextProgress * Math.max(experiences.length - 1, 1))

      timeline.style.setProperty("--journey-progress", nextProgress)
      timeline.style.setProperty("--journey-position", `${lineInset + nextProgress * travel}px`)
      setActiveIndex((currentIndex) => currentIndex === nextActiveIndex ? currentIndex : nextActiveIndex)
      frame = 0
    }
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
    }
  }, [])

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
            <div
              ref={timelineRef}
              className="journey-timeline"
            >
              <span className="journey-line" aria-hidden="true"><i /></span>
              <span className="journey-spark" aria-hidden="true" />
              {experiences.map((experience, index) => (
                <ExperienceItem
                  key={`${experience.company}-${experience.period}`}
                  experience={experience}
                  index={index}
                  active={index <= activeIndex}
                />
              ))}
            </div>
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
              {credentials.map((credential) => (
                <a
                  key={credential.title}
                  href={credential.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver certificado: ${credential.title}`}
                >
                  <span className="credential-copy">
                    <strong>{credential.title}</strong>
                    <span>{credential.issuer} · {credential.year}</span>
                  </span>
                  <ExternalLink aria-hidden="true" />
                </a>
              ))}
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  )
}
