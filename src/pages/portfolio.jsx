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

export function Portfolio() {
  return (
    <div className="min-h-screen overflow-clip">
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
