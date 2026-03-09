import { ScrollReveal } from "./scroll-reveal";

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">

          {/* Titulo */}
          <ScrollReveal>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Sobre mí</h2>
              <div className="h-1 w-20 bg-accent rounded-full transition-all duration-500 hover:w-32"></div>
            </div>
          </ScrollReveal>

          {/* Card principal */}
          <ScrollReveal delay={100}>
            <div className="bg-card border rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy <span className="text-foreground font-semibold">Ingeniero en Tecnologías de la Información</span> 
                apasionado por construir soluciones escalables que impacten directamente 
                en la eficiencia operativa. Mi enfoque combina la robustez del 
                <span className="text-foreground font-medium"> Backend </span>
                (Node.js, .NET, PHP) con la interactividad del 
                <span className="text-foreground font-medium"> Frontend </span>
                (React, TypeScript), aplicando principios de 
                <span className="text-foreground font-medium"> Clean Architecture y SOLID</span>.
              </p>
            </div>
          </ScrollReveal>

          {/* Lo que aporto */}
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Lo que aporto a tu equipo</h3>

              <div className="grid md:grid-cols-3 gap-6">

                <div className="border rounded-lg p-5 hover:border-accent transition">
                  <h4 className="font-semibold mb-2">Optimización de Datos</h4>
                  <p className="text-sm text-muted-foreground">
                    Reingeniería y migración de arquitectura de MongoDB a PostgreSQL,
                    eliminando redundancia de datos mediante normalización avanzada
                    y sistemas de historial.
                  </p>
                </div>

                <div className="border rounded-lg p-5 hover:border-accent transition">
                  <h4 className="font-semibold mb-2">Comunicación en Tiempo Real</h4>
                  <p className="text-sm text-muted-foreground">
                    Implementación de WebSockets y Firebase Cloud Messaging para
                    flujos colaborativos y sistemas de notificaciones push.
                  </p>
                </div>

                <div className="border rounded-lg p-5 hover:border-accent transition">
                  <h4 className="font-semibold mb-2">Mentalidad Cloud & IA</h4>
                  <p className="text-sm text-muted-foreground">
                    Certificado por Google y Huawei Cloud, con interés en integrar
                    Inteligencia Artificial para automatizar procesos de negocio.
                  </p>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* Stack */}
          {/* <ScrollReveal delay={300}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Stack principal</h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                  "Sequelize",
                  ".NET Core",
                  "Symfony",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm border rounded-full bg-muted hover:bg-accent/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal> */}

        </div>
      </div>
    </section>
  );
}