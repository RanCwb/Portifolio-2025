"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl logo-text text-primary">
              DevPortfolio
            </Link>
            <p className="mt-2 text-sm text-foreground/70">
              &copy; {currentYear} {t("footer.rights")}
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/RanCwb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rancwb/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/rancwb/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
