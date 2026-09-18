import { useEffect, useRef, useState } from "react"

export function ScrollReveal({ children, className = "", delay = 0, variant = "vertical", repeat = true }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || !("IntersectionObserver" in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting && !repeat) observer.unobserve(node)
      },
      { threshold: 0.14, rootMargin: "-6% 0px -8%" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [repeat])

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${isVisible ? "reveal--visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  )
}
