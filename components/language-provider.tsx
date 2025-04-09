"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "pt" | "es"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": "Full Stack Developer",
    "hero.subtitle": "Building modern web and mobile applications",
    "hero.cta": "View My Work",
    "about.title": "About Me",
    "about.description":
      "I am a Full Stack Developer with expertise in React, React Native, Angular, Node.js, Firebase, and API integration. I specialize in building B2B and B2C applications with a focus on creating intuitive user experiences.",
    "skills.title": "My Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.mobile": "Mobile",
    "skills.other": "Other",
    "projects.title": "My Projects",
    "projects.viewAll": "View All Projects",
    "contact.title": "Get In Touch",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "footer.rights": "All rights reserved",
  },
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "hero.title": "Desenvolvedor Full Stack",
    "hero.subtitle": "Construindo aplicações web e mobile modernas",
    "hero.cta": "Ver Meu Trabalho",
    "about.title": "Sobre Mim",
    "about.description":
      "Sou um Desenvolvedor Full Stack com experiência em React, React Native, Angular, Node.js, Firebase e integração de APIs. Especializo-me em construir aplicações B2B e B2C com foco em criar experiências de usuário intuitivas.",
    "skills.title": "Minhas Habilidades",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.mobile": "Mobile",
    "skills.other": "Outros",
    "projects.title": "Meus Projetos",
    "projects.viewAll": "Ver Todos os Projetos",
    "contact.title": "Entre em Contato",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "footer.rights": "Todos os direitos reservados",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.title": "Desarrollador Full Stack",
    "hero.subtitle": "Construyendo aplicaciones web y móviles modernas",
    "hero.cta": "Ver Mi Trabajo",
    "about.title": "Sobre Mí",
    "about.description":
      "Soy un Desarrollador Full Stack con experiencia en React, React Native, Angular, Node.js, Firebase e integración de APIs. Me especializo en construir aplicaciones B2B y B2C con un enfoque en crear experiencias de usuario intuitivas.",
    "skills.title": "Mis Habilidades",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.mobile": "Móvil",
    "skills.other": "Otros",
    "projects.title": "Mis Proyectos",
    "projects.viewAll": "Ver Todos los Proyectos",
    "contact.title": "Ponerse en Contacto",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "footer.rights": "Todos los derechos reservados",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "pt", "es"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
