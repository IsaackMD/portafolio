import { useEffect, useState } from "react"
import { ArrowUpRight, GitBranch, Github, Users } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { SectionHeading } from "./section-heading"

const githubProfile = "https://github.com/IsaackMD"
const contributionChart = "https://ghchart.rshah.org/ff5a16/IsaackMD"

export function GithubActivity() {
  const [stats, setStats] = useState(null)
  const [chartFailed, setChartFailed] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    fetch("https://api.github.com/users/IsaackMD", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub profile unavailable")
        return response.json()
      })
      .then(({ public_repos: repositories, followers }) => setStats({ repositories, followers }))
      .catch((error) => {
        if (error.name !== "AbortError") setStats(null)
      })

    return () => controller.abort()
  }, [])

  return (
    <section id="github-activity" className="section-shell console-section github-section">
      <div className="section-marker">Actividad pública</div>
      <div className="github-heading">
        <ScrollReveal variant="horizontal-left">
          <SectionHeading
            title={<>Construyendo de forma <span>constante.</span></>}
            description="Una vista viva de mi trabajo público, experimentos y evolución técnica en GitHub."
          />
        </ScrollReveal>
        <ScrollReveal variant="horizontal-right" delay={90}>
          <a className="outline-action github-profile-link" href={githubProfile} target="_blank" rel="noreferrer">
            Ver perfil <ArrowUpRight />
          </a>
        </ScrollReveal>
      </div>

      <ScrollReveal variant="scale" delay={120}>
        <article className="github-panel">
          <header className="github-panel__header">
            <div className="github-identity">
              <span className="github-identity__icon"><Github /></span>
              <div><strong>IsaackMD</strong><small>Actividad pública en GitHub</small></div>
            </div>
            {stats ? (
              <div className="github-stats" aria-label={`${stats.repositories} repositorios públicos y ${stats.followers} seguidores`}>
                <span><GitBranch /> {stats.repositories} repos</span>
                <span><Users /> {stats.followers} seguidores</span>
              </div>
            ) : <span className="github-live"><i /> Datos en vivo</span>}
          </header>

          <div className="github-chart">
            {chartFailed ? (
              <div className="github-chart__fallback">
                <Github />
                <p>El calendario no está disponible en este momento.</p>
                <a href={githubProfile} target="_blank" rel="noreferrer">Ver actividad directamente en GitHub <ArrowUpRight /></a>
              </div>
            ) : (
              <img
                src={contributionChart}
                alt="Calendario de contribuciones públicas de IsaackMD en GitHub"
                loading="lazy"
                onError={() => setChartFailed(true)}
              />
            )}
          </div>
          <footer><span><i /> Sincronizado con actividad pública</span><span>Menos <b /><b /><b /><b /><b /> Más</span></footer>
        </article>
      </ScrollReveal>
    </section>
  )
}
