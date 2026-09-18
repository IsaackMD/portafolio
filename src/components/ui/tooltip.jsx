import { cloneElement, useEffect, useId, useState } from "react"
import { createPortal } from "react-dom"

export function Tooltip({ children, content }) {
  const tooltipId = useId()
  const [position, setPosition] = useState(null)

  useEffect(() => {
    if (!position) return undefined

    const hideTooltip = () => setPosition(null)
    window.addEventListener("scroll", hideTooltip, true)
    window.addEventListener("resize", hideTooltip)
    return () => {
      window.removeEventListener("scroll", hideTooltip, true)
      window.removeEventListener("resize", hideTooltip)
    }
  }, [position])

  const showTooltip = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const placement = rect.top > 72 ? "top" : "bottom"
    setPosition({
      left: Math.min(Math.max(rect.left + rect.width / 2, 90), window.innerWidth - 90),
      top: placement === "top" ? rect.top - 10 : rect.bottom + 10,
      placement,
    })
  }

  const hideTooltip = () => setPosition(null)
  const trigger = cloneElement(children, {
    "aria-describedby": position ? tooltipId : undefined,
    onMouseEnter: (event) => {
      children.props.onMouseEnter?.(event)
      showTooltip(event)
    },
    onMouseLeave: (event) => {
      children.props.onMouseLeave?.(event)
      hideTooltip()
    },
    onFocus: (event) => {
      children.props.onFocus?.(event)
      showTooltip(event)
    },
    onBlur: (event) => {
      children.props.onBlur?.(event)
      hideTooltip()
    },
  })

  return (
    <>
      {trigger}
      {position ? createPortal(
        <span
          id={tooltipId}
          role="tooltip"
          className={`app-tooltip app-tooltip--${position.placement}`}
          style={{ left: position.left, top: position.top }}
        >
          {content}
        </span>,
        document.body,
      ) : null}
    </>
  )
}
