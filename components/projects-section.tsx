"use client"

import { ExternalLink, Github, FileText, Palette, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "CTF Writeups Collection",
    description:
      "Comprehensive writeups for various Capture The Flag competitions, covering web exploitation, cryptography, reverse engineering, and forensics challenges.",
    icon: Shield,
    tags: ["Security", "CTF", "Writeups", "Analysis"],
    links: {
      live: "https://your-ctf-writeups.com",
      github: "https://github.com/yourusername/ctf-writeups",
    },
    featured: true,
    gradient:
      "from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary",
  },
  {
    title: "Shader Portfolio",
    description:
      "A collection of stunning visual effects and interactive shaders created with GLSL and WebGL, showcasing advanced graphics programming techniques.",
    icon: Palette,
    tags: ["GLSL", "WebGL", "Graphics", "Shaders"],
    links: {
      live: "https://your-shader-portfolio.com",
      github: "https://github.com/yourusername/shader-portfolio",
    },
    featured: true,
    gradient:
      "from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary",
  },
  {
    title: "Security Research Blog",
    description:
      "Technical blog covering vulnerability research, security analysis, and detailed explanations of complex security concepts.",
    icon: FileText,
    tags: ["Security", "Research", "Blog", "Tutorials"],
    links: {
      live: "https://your-security-blog.com",
    },
    featured: false,
    gradient:
      "from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary",
  },
  {
    title: "Interactive Web Demos",
    description:
      "Collection of interactive web applications demonstrating various programming concepts, algorithms, and creative coding projects.",
    icon: Globe,
    tags: ["JavaScript", "React", "Interactive", "Demos"],
    links: {
      live: "https://your-web-demos.com",
      github: "https://github.com/yourusername/web-demos",
    },
    featured: false,
    gradient:
      "from-light-accent-primary to-light-accent-secondary dark:from-dark-accent-primary dark:to-dark-accent-secondary",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg-tertiary dark:bg-dark-bg-tertiary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-light-text-muted dark:text-dark-text-muted max-w-3xl mx-auto">
            Explore my latest work in cybersecurity, graphics programming, and web development. Each project represents
            a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <Card
                key={project.title}
                className="border-light-border dark:border-dark-border bg-light-bg-secondary dark:bg-dark-bg-secondary hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <project.icon className="h-6 w-6 text-light-accent-primary dark:text-dark-accent-primary mr-2" />
                      <CardTitle className="text-xl text-light-text-primary dark:text-dark-text-primary">
                        {project.title}
                      </CardTitle>
                    </div>
                    <div className="flex space-x-2">
                      {project.links.github && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary"
                        >
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary"
                      >
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live project"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="text-base text-light-text-muted dark:text-dark-text-muted">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 text-light-accent-primary dark:text-dark-accent-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <Card
                key={project.title}
                className="border-light-border dark:border-dark-border bg-light-bg-secondary dark:bg-dark-bg-secondary hover:shadow-medium transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <project.icon className="h-5 w-5 text-light-accent-primary dark:text-dark-accent-primary mr-2" />
                      <CardTitle className="text-lg text-light-text-primary dark:text-dark-text-primary">
                        {project.title}
                      </CardTitle>
                    </div>
                    <div className="flex space-x-1">
                      {project.links.github && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary"
                        >
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                          >
                            <Github className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary"
                      >
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live project"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="text-sm text-light-text-muted dark:text-dark-text-muted">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 text-light-accent-primary dark:text-dark-accent-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}
