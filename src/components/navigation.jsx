import { addTransitionType, startTransition, useEffect, useState, ViewTransition } from "react"
import { Download, Menu, X } from "lucide-react"
import { navigationItems, profile } from "../data/profile-data"
import { Button } from "./ui/button"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navigationItems.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    startTransition(() => {
      addTransitionType("nav-lateral")
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    })
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <nav className="site-nav" aria-label="Navegación principal" style={{ viewTransitionName: "persistent-nav" }}>
      <div className="site-nav__inner">
        <button className="brand-mark" onClick={() => scrollToSection("hero")} aria-label="Ir al inicio">
          <span>&lt;K.<b>S</b>/&gt;</span>
          <span className="brand-mark__text">Full Stack Developer</span>
        </button>

        <div className="site-nav__links">
          {navigationItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className="nav-link" aria-current={activeSection === item.id ? "page" : undefined}>
              {item.label}
              {activeSection === item.id ? (
                <ViewTransition name="active-nav-indicator" share="morph" default="none">
                  <span className="nav-link__indicator" />
                </ViewTransition>
              ) : null}
            </button>
          ))}
        </div>

        <Button asChild size="sm" className="site-nav__cv">
          <a href={profile.cv} download><Download /> Descargar CV</a>
        </Button>

        <button className="menu-toggle" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen ? (
        <div id="mobile-navigation" className="mobile-nav">
          {navigationItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} aria-current={activeSection === item.id ? "page" : undefined}>{item.label}</button>
          ))}
          <a href={profile.cv} download>Descargar CV</a>
        </div>
      ) : null}
    </nav>
  )
}
