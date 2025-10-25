import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado")
  }

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <ScrollReveal>
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Contacto</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <Card className="p-6 space-y-4 hover-lift hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 transition-all duration-300 hover:bg-accent/20 hover:scale-110">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">tu.email@ejemplo.com</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <Card className="p-6 space-y-4 hover-lift hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 transition-all duration-300 hover:bg-accent/20 hover:scale-110">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Card className="p-6 space-y-4 hover-lift hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 transition-all duration-300 hover:bg-accent/20 hover:scale-110">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Ubicación</h3>
                      <p className="text-sm text-muted-foreground">Ciudad, País</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={150}>
              <Card className="p-6 hover-lift transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  <Button type="submit" className="w-full hover-glow">
                    Enviar Mensaje
                  </Button>
                </form>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
