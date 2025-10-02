import React from 'react'
import { AnimatedBackground } from '../components/animated-background'
import { Navigation } from '../components/navigation'
import { HomeSection } from '../components/home-section'
export const Portfolio = () => {
  return (
    <div className="min-h-screen">
    <AnimatedBackground></AnimatedBackground>
    <Navigation></Navigation>
    <main>
     <HomeSection></HomeSection>   
    </main>
    </div>
  )
}
