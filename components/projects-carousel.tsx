"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import dashboard from "../assets/dashboard.jpeg"

export function ProjectsCarousel() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleProjects, setVisibleProjects] = useState(1)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A dashboard for an e-commerce platform with real-time analytics, product management, and user accounts.",
      image: dashboard,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://products-dashboard-two.vercel.app/",
      githubUrl: "https://github.com/RanCwb/products-dashboard",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Angular", "Firebase", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Healthcare Mobile App",
      description: "A mobile application for healthcare providers to manage patient records and appointments.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React Native", "Node.js", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Platform",
      description: "A platform for real estate listings with advanced search, filtering, and user accounts.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Express", "MongoDB", "Google Maps API"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "A dashboard for managing and analyzing social media accounts and campaigns.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Vue.js", "Node.js", "Chart.js", "Social Media APIs"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleProjects(3)
      } else if (window.innerWidth >= 768) {
        setVisibleProjects(2)
      } else {
        setVisibleProjects(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleProjects >= projects.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, projects.length - visibleProjects) : prevIndex - 1))
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t("projects.title")}</h2>

        <div className="relative">
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
          </div>

          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)`,
                width: `${(projects.length / visibleProjects) * 100}%`,
              }}
            >
              {projects.map((project, index) => (
                <div key={index} className="px-4" style={{ width: `${(100 / projects.length) * visibleProjects}%` }}>
                  <Card className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-foreground/70 mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <a href="#" className="flex items-center">
              {t("projects.viewAll")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
