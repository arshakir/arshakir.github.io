"use client"

import { useState } from "react"
import { ExternalLink, Shield, Palette, Code, Trophy, Zap, Target } from "lucide-react"

const skills = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "CTF competitions, penetration testing, and security research with focus on web application security and reverse engineering.",
    color: "from-red-500 to-orange-500",
    link: "ctfs",
  },
  {
    icon: Palette,
    title: "Shader Programming",
    description:
      "Creating stunning visual effects using GLSL, HLSL, and modern graphics APIs for games and interactive experiences.",
    color: "from-purple-500 to-pink-500",
    link:"shaders"
  },
  {
    icon: Code,
    title: "Programming Projects",
    description: "Buildings projects and applications using technologies from low level programming in C to web development in Next.js",
    color: "from-blue-500 to-cyan-500",
    link:"https://github.com/arshakir"

  },
  {
    icon: Trophy,
    title: "Competitive Programming",
    description: "Problem-solving through algorithmic challenges and participating in programming competitions.",
    color: "from-yellow-500 to-orange-500",
    link: "https://codeforces.com/profile/arshakir"
  },
]

export function AboutSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg-primary dark:bg-dark-bg-primary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-light-text-muted dark:text-dark-text-muted max-w-3xl mx-auto animate-fade-in">
            I'm a passionate technologist who loves diving deep into complex problems and creating elegant solutions. My
            journey spans across cybersecurity, graphics programming, web development, and low level programming.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative p-6 rounded-xl bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border hover:shadow-glow transition-all duration-500 hover-lift animate-slide-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Floating Icon */}
              <div className="relative mb-4">
                <skill.icon
                  className={`h-8 w-8 text-light-accent-primary dark:text-dark-accent-primary group-hover:scale-110 transition-all duration-300 ${hoveredSkill === index ? "float" : ""}`}
                />
                <div className="absolute top-0 right-0 text-xs font-bold text-light-accent-primary dark:text-dark-accent-primary opacity-70">
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live project"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>

                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-light-text-primary dark:text-dark-text-primary group-hover:text-light-accent-primary dark:group-hover:text-dark-accent-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-light-text-muted dark:text-dark-text-muted group-hover:text-light-text-secondary dark:group-hover:text-dark-text-secondary transition-colors">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="mt-4 h-1 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
