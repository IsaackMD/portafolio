import { ScrollReveal } from "./scroll-reveal";
import ReactIcon from '../../public/icons/react.webp';
import JavaScriptIcon from '../../public/icons/javascript.webp';
import TypescriptIcon from '../../public/icons/ts.webp';
import HTML5Icon from '../../public/icons/html.webp';
import CSS3Icon from '../../public/icons/css.webp';
import TailwindIcon from '../../public/icons/tailwind.png';
import BootstrapIcon from '../../public/icons/boostrap.webp';
import NodeIcon from '../../public/icons/node.webp';
import PostgreSQLIcon from '../../public/icons/postgre.webp'
import GitIcon from '../../public/icons/git.png';
import GitHubIcon from '../../public/icons/github.svg';
// import CSharpIcon from '../../public/icons/csharp.svg';
import DotNetIcon from '../../public/icons/csharp.svg';
import symfonyIcon from '../../public/icons/symfony.png';
import Hero from '../../public/icons/HeroUI.webp';
import SQLServerIcon from '../../public/icons/sqlserver.png';
import SequelizeIcon from '../../public/icons/sequelize.png';


export function SkillsSection() {
  const skills = [
    // Frontend
    { name: "React Js", icon: ReactIcon, category: "Frontend" },
    { name: "Javascript", icon: JavaScriptIcon, category: "Frontend" },
    { name: "Typescript", icon: TypescriptIcon, category: "Frontend" },
    { name: "HTML5", icon: HTML5Icon, category: "Frontend" },
    { name: "CSS3", icon: CSS3Icon, category: "Frontend" },
    { name: "Tailwind CSS", icon: TailwindIcon, category: "Frontend" },
    { name: "Bootstrap", icon: BootstrapIcon, category: "Frontend" },
    { name: "Hero UI", icon: Hero, category: "Frontend" },

    // Backend
    { name: "Node Js", icon: NodeIcon, category: "Backend" },
    // { name: "C#", icon: CSharpIcon, category: "Backend" },
    { name: ".NET Core", icon: DotNetIcon, category: "Backend" },
    { name: ".NET Framework", icon: DotNetIcon, category: "Backend" },
    { name: "Symfony", icon: symfonyIcon, category: "Backend" },
    { name: "Sequelize", icon: SequelizeIcon, category: "Backend" },
    // { name: "Java", icon: JavaIcon, category: "Backend" },

    // Bases de Datos
    { name: "PostgreSQL", icon: PostgreSQLIcon, category: "Database" },
    { name: "SQL Server", icon: SQLServerIcon, category: "Database" },
    // { name: "MySQL", icon: MySQLIcon, category: "Database" },

    // Herramientas
    { name: "Git", icon: GitIcon, category: "Tools" },
    { name: "GitHub", icon: GitHubIcon, category: "Tools" },
    // { name: "Spring Boot", icon: SpringBootIcon, category: "Tools" },
    // { name: "NetBeans", icon: NetBeansIcon, category: "Tools" },
  ]

  const categories = [
    { id: "Frontend", title: "FRONTEND", color: "from-blue-500 to-cyan-500" },
    { id: "Backend", title: "BACKEND", color: "from-green-500 to-emerald-500" },
    { id: "Database", title: "BASES DE DATOS", color: "from-purple-500 to-pink-500" },
    { id: "Tools", title: "HERRAMIENTAS", color: "from-orange-500 to-red-500" },
  ]

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-12">
          <ScrollReveal>
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Stack Tecnológico</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Tecnologías y herramientas con las que trabajo para crear soluciones completas
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12">
            {categories.map((category, categoryIndex) => (
              <div key={category.id} className="space-y-8">
                <ScrollReveal delay={categoryIndex * 100}>
                  <h3 className="text-xl font-bold text-center tracking-wider">{category.title}</h3>
                </ScrollReveal>

                <div className="flex flex-col items-center gap-8">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill, index) => {
                      // const Icon = skill.icon
                      return (
                        <ScrollReveal key={skill.name} delay={categoryIndex * 100 + index * 50}>
                          <div className="group flex flex-col items-center gap-3 cursor-pointer transition-all duration-500 hover:scale-110">
                            <div className="transition-all duration-500 group-hover:-translate-y-2">
                              <img
                                src={skill.icon}
                                className="w-20 h-20 transition-all duration-500 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                              />
                            </div>
                            <span className="text-sm font-semibold transition-all duration-300 group-hover:text-foreground group-hover:scale-105 text-center">
                              {skill.name}
                            </span>
                          </div>
                        </ScrollReveal>
                      )
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
