"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = ["Cybersecurity Enthusiast", "Systems Programmer", "Computer Graphics Artist", "Full-Stack Developer", "CTF Player", "Linux Enthusiast", "Security Researcher" ]

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const currentFullRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 35 : 75

    if (!isDeleting && displayText === currentFullRole) {
      // Hold on the fully typed word for 2.2 seconds
      const holdTimer = setTimeout(() => setIsDeleting(true), 2200)
      return () => clearTimeout(holdTimer)
    }

    if (isDeleting && displayText === "") {
      // Word completely deleted, brief pause then start typing next word
      const nextTimer = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }, 350)
      return () => clearTimeout(nextTimer)
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentFullRole.substring(0, prev.length - 1)
          : currentFullRole.substring(0, prev.length + 1)
      )
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 morphing-bg bg-tech-grid relative overflow-hidden"
    >
      {/* Animated Multi-Color Ambient Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ice Cyan / Blue Ambient Sphere */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 dark:from-[#B8DEEB]/15 dark:to-[#CDDBF9]/15 blur-3xl float"
          style={{
            left: mousePosition.x * 0.02 + "px",
            top: mousePosition.y * 0.02 + "px",
          }}
        />
        {/* Sage Green / Warm Amber Ambient Sphere */}
        <div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-emerald-500/15 to-amber-500/15 dark:from-[#B1DBA4]/15 dark:to-[#E6DFB8]/15 blur-3xl float"
          style={{
            right: mousePosition.x * 0.01 + "px",
            bottom: mousePosition.y * 0.01 + "px",
            animationDelay: "2s",
          }}
        />
        {/* Subtle Coral Accent Glow */}
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-rose-500/10 to-indigo-500/10 dark:from-[#EBB9B9]/10 dark:to-[#CDDBF9]/10 blur-2xl float"
          style={{
            left: "40%",
            top: "20%",
            animationDelay: "3.5s",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <div className="mb-8">
          {/* Floating Avatar/Logo with Multi-Stop Palette Ring */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-tr from-[#B8DEEB] via-[#CDDBF9] to-[#B1DBA4] p-1 float pulse-glow">
            <div className="w-full h-full rounded-full bg-light-bg-secondary dark:bg-dark-bg-secondary flex items-center justify-center">
              <span className="text-4xl font-bold gradient-text">AS</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Abdur-Rahman Shakir</span>
          </h1>

          {/* Terminal Typewriter Status Pill */}
          <div className="h-16 flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full bg-light-bg-secondary/90 dark:bg-dark-bg-secondary/90 border border-light-border dark:border-dark-border shadow-xs backdrop-blur-xs min-w-[280px] sm:min-w-[340px] justify-center transition-all">
              {/* Perfectly Centered Radar Dot */}
              <div className="relative flex h-2 w-2 items-center justify-center shrink-0 self-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </div>

              {/* Typed Role Text + Blinking Terminal Cursor */}
              <div className="flex items-center text-sm sm:text-base font-mono text-light-text-secondary dark:text-dark-text-secondary leading-none">
                <span>{displayText}</span>
                <span className="inline-block w-[2px] h-3.5 sm:h-4 bg-cyan-400 dark:bg-[#B8DEEB] ml-0.5 animate-pulse shrink-0" />
              </div>
            </div>
          </div>

          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto leading-relaxed animate-slide-in">
            Passionate about exploring security, graphics programming, web technologies, and operating systems. I solve
            CTF challenges, create visual effects, and build robust systems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="group magnetic-btn bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary hover:shadow-glow text-white dark:text-[#20202a] font-semibold border-0 hover-lift"
          >
          <a
            href={"#projects"}
            aria-label="View Projects"
          >
            View My Work
          </a>
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
