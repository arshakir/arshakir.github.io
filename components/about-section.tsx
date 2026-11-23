"use client"

import { useState } from "react"
import { ExternalLink, Shield, Palette, Code, Trophy } from "lucide-react"

const skills = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "CTF competitions, penetration testing, and security research with focus on web application security and reverse engineering.",
    iconColor: "text-rose-400 dark:text-[#EBB9B9]",
    badgeBg: "bg-rose-500/10 dark:bg-rose-500/15 border-rose-500/25",
    hoverBorder: "hover:border-rose-400/40",
    barColor: "from-rose-500 to-rose-400 dark:from-[#EBB9B9] dark:to-[#cc9b9d]",
    link: "https://arshakir.github.io/ctfs",
  },
  {
    icon: Palette,
    title: "Shader Programming",
    description:
      "Creating stunning visual effects using GLSL, HLSL, and modern graphics APIs for games and interactive experiences.",
    iconColor: "text-cyan-400 dark:text-[#B8DEEB]",
    badgeBg: "bg-cyan-500/10 dark:bg-cyan-500/15 border-cyan-500/25",
    hoverBorder: "hover:border-cyan-400/40",
    barColor: "from-cyan-500 to-cyan-400 dark:from-[#B8DEEB] dark:to-[#95C2D1]",
    link: "/shaders/",
  },
  {
    icon: Code,
    title: "Programming Projects",
    description: "Building projects and applications using technologies from low-level systems in C to web development in Next.js.",
    iconColor: "text-indigo-400 dark:text-[#CDDBF9]",
    badgeBg: "bg-indigo-500/10 dark:bg-indigo-500/15 border-indigo-500/25",
    hoverBorder: "hover:border-indigo-400/40",
    barColor: "from-indigo-500 to-indigo-400 dark:from-[#CDDBF9] dark:to-[#B8C9EA]",
    link: "https://github.com/arshakir",
  },
  {
    icon: Trophy,
    title: "Competitive Programming",
    description: "Problem-solving through algorithmic challenges and participating in programming competitions.",
    iconColor: "text-amber-400 dark:text-[#E6DFB8]",
    badgeBg: "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/25",
    hoverBorder: "hover:border-amber-400/40",
    barColor: "from-amber-500 to-amber-400 dark:from-[#E6DFB8] dark:to-[#d1ba97]",
    link: "https://codeforces.com/profile/arshakir",
  },
]

export function AboutSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg-primary dark:bg-dark-bg-primary bg-tech-grid relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto animate-fade-in leading-relaxed">
            I'm a passionate technologist who loves diving deep into complex problems and creating elegant solutions. My
            journey spans across cybersecurity, graphics programming, web development, and low level programming.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`group relative p-6 rounded-xl bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border ${skill.hoverBorder} hover:shadow-glow transition-all duration-300 hover-lift animate-slide-in overflow-hidden flex flex-col justify-between`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.barColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div>
                {/* Floating Icon with Domain-Specific Color */}
                <div className="relative mb-4 flex items-center justify-between">
                  <div className={`p-2.5 rounded-lg border ${skill.badgeBg} ${skill.iconColor} group-hover:scale-105 transition-transform duration-300`}>
                    <skill.icon
                      className={`h-6 w-6 ${hoveredSkill === index ? "float" : ""}`}
                    />
                  </div>
                  <div className={`text-xs font-bold ${skill.iconColor} opacity-80 hover:opacity-100`}>
                    <a
                      href={skill.link}
                      target={skill.link.startsWith("http") ? "_blank" : undefined}
                      rel={skill.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label="Live link"
                      className="p-1.5 inline-block hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-light-text-primary dark:text-dark-text-primary group-hover:text-light-accent-primary dark:group-hover:text-dark-accent-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mt-5 h-1 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.barColor} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
