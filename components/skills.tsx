"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Smartphone, Database } from "lucide-react"

export function Skills() {
  const { t } = useLanguage()

  const skillSets = [
    {
      title: t("skills.frontend"),
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["React", "Angular", "Vue.js", "HTML5", "CSS3/SASS", "JavaScript/TypeScript"],
    },
    {
      title: t("skills.backend"),
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: ["Node.js", "Express", "NestJS", "REST APIs", "GraphQL", "Microservices"],
    },
    {
      title: t("skills.mobile"),
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      skills: ["React Native", "Flutter", "iOS", "Android", "Mobile UI/UX", "App Store Deployment"],
    },
    {
      title: t("skills.other"),
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["Firebase", "MongoDB", "PostgreSQL", "AWS", "Docker", "CI/CD", "Git"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t("skills.title")}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillSets.map((skillSet, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  {skillSet.icon}
                  <h3 className="text-xl font-semibold mt-2">{skillSet.title}</h3>
                </div>
                <ul className="space-y-2">
                  {skillSet.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
