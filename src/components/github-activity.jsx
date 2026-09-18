import { useEffect, useMemo, useState } from "react"
import { ArrowUpRight, GitBranch, GitCommitHorizontal, Github, Users } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { SectionHeading } from "./section-heading"
import { Tooltip } from "./ui/tooltip"

const githubProfile = "https://github.com/IsaackMD"
const contributionChart = "https://ghchart.rshah.org/ff5a16/IsaackMD"
const contributionsApi = "https://github-contributions-api.jogruber.de/v4/IsaackMD?y=last"

const monthFormatter = new Intl.DateTimeFormat("es-MX", { month: "short", timeZone: "UTC" })
const dayFormatter = new Intl.DateTimeFormat("es-MX", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })

function formatContributionDay(day) {
  const contributionLabel = day.count === 1 ? "contribución" : "contribuciones"
  return `${day.count} ${contributionLabel} el ${dayFormatter.format(new Date(`${day.date}T00:00:00Z`))}`
}

function buildCalendarWeeks(contributions) {
  if (!contributions?.length) return []

  const firstDate = new Date(`${contributions[0].date}T00:00:00Z`)
  const paddedDays = [...Array(firstDate.getUTCDay()).fill(null), ...contributions]
  const weeks = []
  for (let index = 0; index < paddedDays.length; index += 7) weeks.push(paddedDays.slice(index, index + 7))
  return weeks
}

export function GithubActivity() {
  const [stats, setStats] = useState(null)
  const [activity, setActivity] = useState(null)
  const [chartFailed, setChartFailed] = useState(false)
  const calendarWeeks = useMemo(() => buildCalendarWeeks(activity?.contributions), [activity])

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

    fetch(contributionsApi, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub contributions unavailable")
        return response.json()
      })
      .then((data) => {
        const annualTotal = Object.values(data.total ?? {}).reduce((sum, value) => sum + Number(value || 0), 0)
        setActivity({ contributions: data.contributions, total: annualTotal })
      })
      .catch((error) => {
        if (error.name !== "AbortError") setActivity(null)
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
            {activity ? (
              <div className="github-calendar" aria-label={`${activity.total} contribuciones en el último año`}>
                <div className="github-calendar__summary">
                  <span><GitCommitHorizontal /> Actividad del último año</span>
                  <strong>{activity.total.toLocaleString("es-MX")} <small>contribuciones</small></strong>
                </div>
                <div className="github-calendar__viewport">
                  <div className="github-calendar__months" style={{ "--calendar-weeks": calendarWeeks.length }} aria-hidden="true">
                    {calendarWeeks.map((week, index) => {
                      const day = week.find(Boolean)
                      const previousDay = calendarWeeks[index - 1]?.find(Boolean)
                      const showMonth = day && (!previousDay || new Date(`${day.date}T00:00:00Z`).getUTCMonth() !== new Date(`${previousDay.date}T00:00:00Z`).getUTCMonth())
                      return <span key={day?.date ?? index}>{showMonth ? monthFormatter.format(new Date(`${day.date}T00:00:00Z`)).replace(".", "") : ""}</span>
                    })}
                  </div>
                  <div className="github-calendar__grid" style={{ "--calendar-weeks": calendarWeeks.length }}>
                    {calendarWeeks.flatMap((week, weekIndex) => week.map((day, dayIndex) => day ? (
                      <Tooltip
                        key={day.date}
                        content={formatContributionDay(day)}
                      >
                        <span
                          className="github-calendar__day"
                          data-level={day.level}
                          style={{ gridColumn: weekIndex + 1, gridRow: dayIndex + 1 }}
                        />
                      </Tooltip>
                    ) : <span key={`empty-${weekIndex}-${dayIndex}`} style={{ gridColumn: weekIndex + 1, gridRow: dayIndex + 1 }} />))}
                  </div>
                </div>
              </div>
            ) : chartFailed ? (
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
