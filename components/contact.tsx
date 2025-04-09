"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t("contact.title")}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {t("contact.name")}
                  </label>
                  <Input id="name" placeholder="name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    {t("contact.email")}
                  </label>
                  <Input id="email" type="email" placeholder="email" />
                </div>

                <div></div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    {t("contact.message")}
                  </label>
                  <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                  {t("contact.send")}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-foreground/70">henriqsantos629@gmail.com</p>
              </div>
            </div>  
        </div>
        </div>
      </div>
    </section>
  )
}
