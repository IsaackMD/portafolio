import { startTransition, useCallback, useState, ViewTransition } from 'react'
import { AboutSection } from '../components/about-section'
import { AnimatedBackground } from '../components/animated-background'
import { ContactSection } from '../components/contact-section'
import { CustomCursor } from '../components/custom-cursor'
import { ExperienceSection } from '../components/experience-section'
import { GithubActivity } from '../components/github-activity'
import { HomeSection } from '../components/home-section'
import { Navigation } from '../components/navigation'
import { ProjectsSection } from '../components/projects-section'
import { SkillsSection } from '../components/skills-section'
import { PortfolioLoader } from '../components/loading/portfolio-loader'

function shouldShowIntro() {
  try {
    return window.sessionStorage.getItem('portfolioIntroSeen') !== 'true'
  } catch {
    return true
  }
}

export function Portfolio() {
  const [showLoader, setShowLoader] = useState(shouldShowIntro)
  const completeIntro = useCallback(() => {
    try {
      window.sessionStorage.setItem('portfolioIntroSeen', 'true')
    } catch {
      // The loader can still complete when storage is unavailable.
    }
    startTransition(() => setShowLoader(false))
  }, [])

  return (
    <div className="min-h-screen overflow-clip">
      {showLoader ? (
        <ViewTransition exit="fade-out" default="none">
          <PortfolioLoader onComplete={completeIntro} />
        </ViewTransition>
      ) : null}
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <AnimatedBackground />
      <CustomCursor />
      <Navigation />
      <main id="main-content">
        <HomeSection />
        <AboutSection />
        <GithubActivity />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}
