"use client"

import { useState, useEffect } from "react"

export function Navigation() {
    const [activeSection, setActiveSection] = useState("hero")
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            const sections = ["hero", "about", "skills", "projects", "contact"]
            const current = sections.find((section) => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-[#0b0b12]/90 backdrop-blur-md border-b border-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
                : "bg-[#0b0b12]/70 backdrop-blur-sm border-b border-white/5"
                }`}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold transition-all duration-300 hover:scale-110 hover:text-accent cursor-pointer">
                        Portfolio
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        {[
                            { id: "hero", label: "Inicio" },
                            { id: "about", label: "Sobre mí" },
                            { id: "skills", label: "Habilidades" },
                            { id: "projects", label: "Proyectos" },
                            { id: "contact", label: "Contacto" },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm transition-all duration-300 relative group ${activeSection === item.id
                                    ? "text-foreground font-medium"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {item.label}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav >
    )
}
