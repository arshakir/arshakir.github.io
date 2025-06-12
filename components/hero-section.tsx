"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = ["Cybersecurity Enthusiast", "Systems Programmer", "Computer Graphics Artist", "Full-Stack Developer", "CTF Player", "Linux Enthusiast", "Security Researcher" ]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 morphing-bg relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-light-accent-primary/20 to-light-accent-secondary/20 dark:from-dark-accent-primary/20 dark:to-dark-accent-secondary/20 blur-3xl float"
          style={{
            left: mousePosition.x * 0.02 + "px",
            top: mousePosition.y * 0.02 + "px",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-light-accent-secondary/30 to-light-accent-primary/30 dark:from-dark-accent-secondary/30 dark:to-dark-accent-primary/30 blur-2xl float"
          style={{
            right: mousePosition.x * 0.01 + "px",
            bottom: mousePosition.y * 0.01 + "px",
            animationDelay: "2s",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <div className="mb-8">
          {/* Floating Avatar/Logo */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary p-1 float pulse-glow">
            <div className="w-full h-full rounded-full bg-light-bg-secondary dark:bg-dark-bg-secondary flex items-center justify-center">
              <span className="text-4xl font-bold gradient-text">AS</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Abdur-Rahman Shakir</span>
          </h1>

          {/* Animated Role Switcher */}
          <div className="h-16 flex items-center justify-center mb-8">
            <p className="text-xl sm:text-2xl text-light-text-secondary dark:text-dark-text-secondary">
              <span className="typing-animation inline-block min-w-0">{roles[currentRole]}</span>
            </p>
          </div>

          <p className="text-lg text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto leading-relaxed animate-slide-in">
            Passionate about exploring security, graphics programming, web technologies, and operating systems. I solve
            CTF challenges, create stunning visual effects, and build robust applications.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="group magnetic-btn bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary hover:shadow-glow text-white border-0 hover-lift"
          >
          <a
            href={"#projects"}
            aria-label="Live project"
          >
            View My Work
          </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="glass border-light-border dark:border-dark-border text-light-text-primary dark:text-dark-text-primary hover-lift magnetic-btn"
          >
            Download Resume
          </Button>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Github, href: "https://github.com/arshakir", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abdur-rahman-shakir-83a2a1261", label: "LinkedIn" },
            { icon: Mail, href: "mailto:arshakir999@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full glass hover:bg-light-accent-primary/10 dark:hover:bg-dark-accent-primary/10 transition-all duration-300 hover-lift"
              aria-label={label}
            >
              <Icon className="h-6 w-6 text-light-text-secondary dark:text-dark-text-secondary group-hover:text-light-accent-primary dark:group-hover:text-dark-accent-primary group-hover:scale-110 transition-all" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-light-text-muted dark:text-dark-text-muted" />
        </div>
      </div>
    </section>
  )
}
