import { skillGroups } from "../data/profile-data"
import { ScrollReveal } from "./scroll-reveal"
import { SectionHeading } from "./section-heading"

const iconMap = {
  React: "/icons/react.webp",
  TypeScript: "/icons/ts.webp",
  JavaScript: "/icons/javascript.webp",
  "Tailwind CSS": "/icons/tailwind.png",
  "C#": "/icons/csharp.svg",
  PostgreSQL: "/icons/postgre.webp",
  "SQL Server": "/icons/sqlserver.png",
  Sequelize: "/icons/sequelize.png",
  "Git / GitHub": "/icons/github.svg",
}

function TechnologyChip({ item }) {
  return (
    <div className="skill-chip">
      {iconMap[item.skill] ? <img src={iconMap[item.skill]} alt="" width="22" height="22" loading="lazy" /> : <span>{item.skill.slice(0, 2)}</span>}
      <strong>{item.skill}</strong>
    </div>
  )
}

export function SkillsSection() {
  const skills = skillGroups.flatMap((group) => group.skills.map((skill) => ({ skill, group: group.title })))
  const rows = [skills.slice(0, 8), skills.slice(8, 16), skills.slice(16)]

  return (
    <section id="skills" className="section-shell console-section skills-section">
      <div className="section-marker">Stack técnico</div>
      <div className="skills-heading">
        <ScrollReveal><SectionHeading title={<>Herramientas con las que <span>construyo.</span></>} description="Un stack en evolución, elegido por el problema y no por la moda." /></ScrollReveal>
      </div>
      <ScrollReveal className="skills-streams" variant="scale">
        <p className="sr-only">Tecnologías: {skills.map(({ skill }) => skill).join(", ")}.</p>
        {rows.map((row, rowIndex) => (
          <div className={`skills-stream skills-stream--${rowIndex % 2 === 0 ? "forward" : "reverse"}`} key={rowIndex}>
            <div className="skills-track">
              <div className="skills-track__set">
                {row.map((item) => <TechnologyChip item={item} key={`${item.group}-${item.skill}`} />)}
              </div>
              <div className="skills-track__set" aria-hidden="true">
                {row.map((item) => <TechnologyChip item={item} key={`copy-${item.group}-${item.skill}`} />)}
              </div>
            </div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  )
}
