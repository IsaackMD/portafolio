import { useEffect, useRef, useState } from "react"
import { Circle, MousePointer2, Sparkles } from "lucide-react"
import { Tooltip } from "./ui/tooltip"

const cursorModes = ["dot", "ring", "system"]

export function CustomCursor() {
  const cursorRef = useRef(null)
  const [mode, setMode] = useState(() => localStorage.getItem("portfolio-cursor-v2") || "ring")
  const [hasFinePointer, setHasFinePointer] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)")
    const updatePointer = () => setHasFinePointer(media.matches)
    updatePointer()
    media.addEventListener("change", updatePointer)
    return () => media.removeEventListener("change", updatePointer)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const customEnabled = hasFinePointer && mode !== "system"
    root.classList.toggle("has-custom-cursor", customEnabled)
    localStorage.setItem("portfolio-cursor-v2", mode)

    if (!customEnabled) return undefined

    const cursor = cursorRef.current
    let frame = 0
    let x = -100
    let y = -100

    const render = () => {
      cursor.style.setProperty("--cursor-x", `${x}px`)
      cursor.style.setProperty("--cursor-y", `${y}px`)
      frame = 0
    }
    const move = (event) => {
      x = event.clientX
      y = event.clientY
      if (!frame) frame = requestAnimationFrame(render)
      cursor.classList.add("custom-cursor--visible")
      cursor.classList.toggle("custom-cursor--interactive", Boolean(event.target.closest("a, button, input, textarea, select, [role='button']")))
    }
    const show = () => cursor.classList.add("custom-cursor--visible")
    const hide = (event) => {
      if (!event.relatedTarget) cursor.classList.remove("custom-cursor--visible")
    }

    window.addEventListener("pointermove", move, { passive: true })
    document.documentElement.addEventListener("pointerenter", show)
    document.documentElement.addEventListener("pointerleave", hide)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", move)
      document.documentElement.removeEventListener("pointerenter", show)
      document.documentElement.removeEventListener("pointerleave", hide)
      root.classList.remove("has-custom-cursor")
    }
  }, [hasFinePointer, mode])

  const cycleMode = () => {
    const currentIndex = cursorModes.indexOf(mode)
    setMode(cursorModes[(currentIndex + 1) % cursorModes.length])
  }

  const nextMode = cursorModes[(cursorModes.indexOf(mode) + 1) % cursorModes.length]
  const labels = { dot: "punto de luz", ring: "aro luminoso", system: "cursor del sistema" }

  return (
    <>
      {hasFinePointer && mode !== "system" ? <span ref={cursorRef} className={`custom-cursor custom-cursor--${mode}`} aria-hidden="true" /> : null}
      {hasFinePointer ? (
        <Tooltip content={`Cambiar a ${labels[nextMode]}`}>
          <button className="cursor-toggle" type="button" onClick={cycleMode} aria-label={`Cambiar a ${labels[nextMode]}`}>
            {mode === "dot" ? <Sparkles /> : mode === "ring" ? <Circle /> : <MousePointer2 />}
            <span>{mode === "dot" ? "Punto" : mode === "ring" ? "Aro" : "Normal"}</span>
          </button>
        </Tooltip>
      ) : null}
    </>
  )
}
