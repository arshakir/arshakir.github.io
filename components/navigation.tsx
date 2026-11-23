"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"

const rightNavItems = [
  { name: "Home", href: "/#home", section: "home" },
  { name: "About", href: "/#about", section: "about" },
  { name: "Projects", href: "/#projects", section: "projects" },
  { name: "Contact", href: "/#contact", section: "contact" },
]

const leftNavItems = [
  { name: "CTFs", href: "https://arshakir.github.io/ctfs", isExternal: true },
  { name: "Shaders", href: "/shaders", isExternal: false },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    if (!isHomePage) return

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["home", "about", "projects", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHomePage ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="relative inline-flex items-center gap-1 text-xl font-bold gradient-text hover:scale-105 transition-transform group"
            >
              <span>AS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-light-accent-primary dark:bg-dark-accent-primary -mt-3 shadow-xs group-hover:scale-125 transition-transform" />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              {leftNavItems.map((item) =>
                item.isExternal ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "text-light-accent-primary dark:text-dark-accent-primary"
                        : "text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary"
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary rounded-full" />
                    )}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {rightNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  isHomePage && activeSection === item.section
                    ? "text-light-accent-primary dark:text-dark-accent-primary"
                    : "text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary"
                }`}
              >
                {item.name}
                {isHomePage && activeSection === item.section && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary rounded-full" />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 text-light-text-primary dark:text-dark-text-primary hover:bg-light-accent-primary/10 dark:hover:bg-dark-accent-primary/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass rounded-lg shadow-medium mb-4 animate-fade-in border border-light-border dark:border-dark-border p-4 space-y-2">
            <div className="border-b border-light-border/40 dark:border-dark-border/40 pb-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-light-text-muted dark:text-dark-text-muted">
                External & Showcases
              </span>
              {leftNavItems.map((item) =>
                item.isExternal ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-colors text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-colors text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-light-text-muted dark:text-dark-text-muted">
                Navigation
              </span>
              {rightNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
