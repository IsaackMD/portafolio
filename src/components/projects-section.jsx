import { ArrowUpRight, ExternalLink } from "lucide-react"
import { projects } from "../data/profile-data"
import { ScrollReveal } from "./scroll-reveal"
import { SectionHeading } from "./section-heading"

function ProjectVisual({ accent }) {
  return (
    <div className={`project-visual project-visual--${accent}`} aria-hidden="true">
      <div className="project-visual__chrome"><span /><span /><span /></div>
      <div className="project-visual__sidebar" />
      <div className="project-visual__canvas">
        <i /><i /><i /><i />
        <b />
      </div>
    </div>
  )
}
function ProjectCard({ project, index }) {
  return (
    <article className="console-card project-card">
      <ProjectVisual accent={project.accent} />
      <div className="project-card__copy">
        <div className="project-card__meta"><span>{project.kind}</span><strong>0{index + 1}</strong></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card__impact">{project.impact}</div>
        <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        {project.demo ? <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Ver demo <ExternalLink /></a> : null}
      </div>
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell console-section projects-section">
      <div className="section-marker">Trabajo seleccionado</div>
      <div className="section-split">
        <ScrollReveal>
          <div>
            <SectionHeading title={<>Proyectos con <span>contexto.</span></>} description="Productos y casos que muestran cómo pienso, construyo y llevo soluciones a operación." />
            <a className="outline-action" href="https://github.com/IsaackMD" target="_blank" rel="noreferrer">Ver GitHub <ArrowUpRight /></a>
          </div>
        </ScrollReveal>
        <div className="projects-list">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} variant={index % 2 === 0 ? "horizontal-right" : "horizontal-left"} delay={index * 90}>
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
