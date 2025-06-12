"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-light-bg-secondary dark:bg-dark-bg-secondary border-t border-light-border dark:border-dark-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-light-text-muted dark:text-dark-text-muted flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> using Next.js & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
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
                  className="text-light-text-muted dark:text-dark-text-muted hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full glass hover:bg-light-accent-primary/10 dark:hover:bg-dark-accent-primary/10 transition-all duration-300 hover:scale-110 group"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 text-light-text-muted dark:text-dark-text-muted group-hover:text-light-accent-primary dark:group-hover:text-dark-accent-primary" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-light-border dark:border-dark-border text-center">
          <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
