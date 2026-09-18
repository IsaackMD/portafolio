import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { profile } from "../data/profile-data"
import { Button } from "./ui/button"

export function HomeSection() {
  return (
    <section id="hero" className="hero-section section-shell">
      <div className="hero-stage">
        <img className="hero-stage__image" src="/imgs/dev-workspace-night.png" alt="" width="1920" height="768" fetchPriority="high" />
        <div className="hero-stage__shade" />
        <div className="hero-stage__signature" aria-hidden="true">
          <span>Build.</span><span>Ship.</span><span>Improve.</span>
        </div>

        <div className="hero-profile">
          <div className="portrait-ring">
            <img src="/yo.jpg" alt="Kevin Sánchez" width="320" height="320" fetchPriority="high" />
            <span className="portrait-ring__status" />
          </div>
          <div className="hero-profile__copy">
            <div className="status-pill"><span /> Disponible para oportunidades</div>
            <p className="hero-kicker">Kevin Isaac Sánchez Benítez</p>
            <h1>Full Stack <strong>Developer.</strong></h1>
            <p>React, .NET y Node.js para convertir requerimientos reales en software que llega a producción.</p>
            <div className="hero-meta">
              <span><MapPin /> Pachuca de Soto, México</span>
              <a href={`mailto:${profile.email}`}><Mail /> {profile.email}</a>
            </div>
          </div>
        </div>

        <div className="hero-stage__socials" aria-label="Perfiles profesionales">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Correo electrónico"><Mail /></a>
          <Button asChild variant="outline" size="sm"><a href={profile.cv} download><Download /> CV</a></Button>
        </div>
      </div>
    </section>
  )
}
