import React from 'react'
import { AnimatedBackground } from '../components/animated-background'
import { Navigation } from '../components/navigation'
import { HomeSection } from '../components/home-section'
import { AboutSection } from '../components/about-section'
import { SkillsSection } from '../components/skills-section'
import { AchievementsSection } from '../components/archievements-section'
import { ProjectsSection } from '../components/projects-section'
import { ContactSection } from '../components/contact-section'
export const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground></AnimatedBackground>
      <Navigation></Navigation>
      <main>
        <HomeSection></HomeSection>
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
        <AchievementsSection></AchievementsSection>
        <ProjectsSection></ProjectsSection>
        <ContactSection></ContactSection>
      </main>
    </div>
  )
}
