"use client"

import { useState } from "react"
import { Mail, MessageSquare, Send, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("arshakir999@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg-primary dark:bg-dark-bg-primary bg-tech-grid relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-[#B8DEEB]/10 dark:to-[#CDDBF9]/10 rounded-full blur-3xl float" />
        <div
          className="absolute bottom-1/3 right-1/6 w-56 h-56 bg-gradient-to-r from-emerald-500/10 to-amber-500/10 dark:from-[#B1DBA4]/10 dark:to-[#E6DFB8]/10 rounded-full blur-2xl float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, collaborating on projects, or sharing knowledge about
            systems programming, graphics, and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <Card
            className="group relative overflow-hidden border-light-border dark:border-dark-border bg-light-bg-secondary dark:bg-dark-bg-secondary hover:border-cyan-400/40 dark:hover:border-cyan-400/40 hover:shadow-glow transition-all duration-500 hover-lift animate-fade-in flex flex-col justify-between"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-[2.5px] w-full bg-gradient-to-r from-cyan-400/80 via-blue-400/40 to-transparent" />

            <CardHeader className="text-center pb-4 relative z-10">
              <div className="p-3 w-fit mx-auto rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 dark:text-[#B8DEEB] mb-4 group-hover:scale-110 transition-all duration-300">
                <Mail className={`h-7 w-7 ${hoveredCard === 0 ? "float" : ""}`} />
              </div>
              <CardTitle className="text-lg text-light-text-primary dark:text-dark-text-primary group-hover:text-cyan-400 dark:group-hover:text-[#B8DEEB] transition-colors">
                Email
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                arshakir999@gmail.com
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center relative z-10 space-y-2 pt-0">
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  asChild
                  className="flex-1 bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary hover:shadow-medium text-white dark:text-[#20202a] font-semibold border-0 group"
                >
                  <a href="mailto:arshakir999@gmail.com">
                    Send Email
                    <Send className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCopyEmail}
                  className="border-light-border dark:border-dark-border bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-secondary dark:text-dark-text-secondary hover:text-cyan-400 dark:hover:text-[#B8DEEB] cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400 mr-1.5" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-1.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* LinkedIn Card */}
          <Card
            className="group relative overflow-hidden border-light-border dark:border-dark-border bg-light-bg-secondary dark:bg-dark-bg-secondary hover:border-indigo-400/40 dark:hover:border-indigo-400/40 hover:shadow-glow transition-all duration-500 hover-lift animate-fade-in flex flex-col justify-between"
            style={{ animationDelay: "0.1s" }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-[2.5px] w-full bg-gradient-to-r from-indigo-400/80 via-blue-400/40 to-transparent" />

            <CardHeader className="text-center pb-4 relative z-10">
              <div className="p-3 w-fit mx-auto rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 dark:text-[#CDDBF9] mb-4 group-hover:scale-110 transition-all duration-300">
                <MessageSquare className={`h-7 w-7 ${hoveredCard === 1 ? "float" : ""}`} />
              </div>
              <CardTitle className="text-lg text-light-text-primary dark:text-dark-text-primary group-hover:text-indigo-400 dark:group-hover:text-[#CDDBF9] transition-colors">
                LinkedIn
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                Connect with me professionally
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center relative z-10 pt-0">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary hover:shadow-medium text-white dark:text-[#20202a] font-semibold border-0 group"
              >
                <a
                  href="https://www.linkedin.com/in/abdur-rahman-shakir-83a2a1261"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                  <Send className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
