export function AnimatedBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-background__glow ambient-background__glow--one" />
      <div className="ambient-background__glow ambient-background__glow--two" />
      <div className="ambient-background__texture" />
    </div>
  )
}
