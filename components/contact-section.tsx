"use client"

import { useState } from "react"
import { Mail, MessageSquare, Calendar, MapPin, Send, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Get in touch for collaborations or opportunities",
    action: "Send Email",
    href: "mailto:your.email@example.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "LinkedIn",
    description: "Connect with me professionally",
    action: "Connect",
    href: "https://linkedin.com/in/yourusername",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a time to discuss projects or opportunities",
    action: "Schedule",
    href: "https://calendly.com/yourusername",
    gradient: "from-green-500 to-teal-500",
  },
]

export function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg-primary dark:bg-dark-bg-primary relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-gradient-to-r from-light-accent-primary/5 to-light-accent-secondary/5 dark:from-dark-accent-primary/5 dark:to-dark-accent-secondary/5 rounded-full blur-3xl float" />
        <div
          className="absolute bottom-1/3 right-1/6 w-56 h-56 bg-gradient-to-r from-light-accent-secondary/5 to-light-accent-primary/5 dark:from-dark-accent-secondary/5 dark:to-dark-accent-primary/5 rounded-full blur-2xl float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-lg text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborating on projects, or sharing knowledge about
            cybersecurity and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={method.title}
              className="group relative overflow-hidden border-light-border dark:border-dark-border bg-light-bg-secondary dark:bg-dark-bg-secondary hover:shadow-glow transition-all duration-500 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <CardHeader className="text-center pb-4 relative z-10">
                <method.icon
                  className={`h-8 w-8 text-light-accent-primary dark:text-dark-accent-primary mx-auto mb-4 group-hover:scale-110 transition-all duration-300 ${hoveredCard === index ? "float" : ""}`}
                />
                <CardTitle className="text-lg text-light-text-primary dark:text-dark-text-primary group-hover:gradient-text transition-all">
                  {method.title}
                </CardTitle>
                <CardDescription className="text-light-text-muted dark:text-dark-text-muted">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <Button
                  asChild
                  className="w-full magnetic-btn bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary hover:shadow-medium text-white border-0 group"
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.action}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-center glass rounded-2xl p-8 animate-slide-in">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-light-accent-primary dark:text-dark-accent-primary" />
              <span className="text-light-text-muted dark:text-dark-text-muted">Based in Your City, Country</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-light-accent-primary dark:text-dark-accent-primary" />
              <span className="text-light-text-muted dark:text-dark-text-muted">Available for remote work</span>
            </div>
          </div>
          <p className="text-light-text-muted dark:text-dark-text-muted">
            Open to remote opportunities and collaborations worldwide
          </p>
        </div>
      </div>
    </section>
  )
}
