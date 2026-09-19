import { useEffect, useState } from "react"
import { AsciiBackground } from "./ascii-background"
import { DatabaseLoader } from "./database-loader"
import { LoadingMessages } from "./loading-messages"

const duration = 2800
const reducedMotionDuration = 700

export function PortfolioLoader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const totalDuration = prefersReducedMotion ? reducedMotionDuration : duration
    const startedAt = performance.now()
    let frameId
    let finishTimeout
    let finishDelay

    const tick = (now) => {
      const elapsed = now - startedAt
      const nextProgress = Math.min(elapsed / totalDuration, 1) * 100
      setProgress(nextProgress)
      setMessageIndex(Math.min(Math.floor(nextProgress / 25), 4))
      if (nextProgress < 100) frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    finishTimeout = window.setTimeout(() => {
      setProgress(100)
      setMessageIndex(4)
      finishDelay = window.setTimeout(onComplete, prefersReducedMotion ? 80 : 300)
    }, totalDuration)

    return () => {
      cancelAnimationFrame(frameId)
      window.clearTimeout(finishTimeout)
      window.clearTimeout(finishDelay)
    }
  }, [onComplete])

  return (
    <div className="portfolio-loader" aria-label="Inicializando portfolio">
      <AsciiBackground />
      <div className="portfolio-loader__content">
        <DatabaseLoader progress={Math.round(progress)} />
        <LoadingMessages index={messageIndex} />
        <span className="portfolio-loader__hint">SYSTEM / KEVIN SANCHEZ / ONLINE</span>
      </div>
    </div>
  )
}
