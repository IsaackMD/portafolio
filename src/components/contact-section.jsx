import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { profile } from "../data/profile-data"
import { ScrollReveal } from "./scroll-reveal"
import { Button } from "./ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="section-shell contact-section">
      <ScrollReveal variant="scale">
        <div className="contact-console">
          <div>
            <span className="contact-console__prompt">kevin@portfolio:~$</span>
            <h2>Construyamos algo que llegue a <strong>producción.</strong></h2>
            <p>Estoy abierto a oportunidades Full Stack, Backend .NET y Frontend React donde pueda aportar ownership, criterio técnico y cercanía con el producto.</p>
          </div>
          <div className="contact-console__actions">
            <Button asChild size="lg"><a href={`mailto:${profile.email}`}><Mail /> Enviar correo</a></Button>
            <Button asChild size="lg" variant="outline"><a href={profile.cv} download><Download /> Descargar CV</a></Button>
            <div className="contact-socials">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ArrowUpRight /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub <ArrowUpRight /></a>
            </div>
          </div>
        </div>
      </ScrollReveal>
      <footer className="site-footer">
        <span className="footer-brand">&lt; K.<strong>S</strong> /&gt;</span>
        <span><MapPin /> Pachuca de Soto, México</span>
        <span>© 2026 {profile.name}</span>
      </footer>
    </section>
  )
}
