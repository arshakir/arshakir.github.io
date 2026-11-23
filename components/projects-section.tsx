"use client"

import {
  ExternalLink,
  Github,
  Palette,
  Shield,
  AudioLines,
  BrainCog,
  Microchip,
  MemoryStick,
  Gamepad2,
  Terminal,
  Bot,
  Rocket,
  Globe,
  Layers,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Capture The Flag (CTF) Write-Up Collection",
    description:
      "Created and published detailed write-ups of solutions to cybersecurity Capture The Flag (CTF) challenges, explaining attack paths, tools used, and lessons learned across reverse engineering, pwn, cryptography, and forensics.",
    icon: Shield,
    accentColor: "text-rose-400 dark:text-[#EBB9B9]",
    badgeBg: "bg-rose-500/15 border-rose-500/30",
    cardHover: "hover:border-rose-400/40",
    topAccent: "from-rose-500/80 via-rose-400/40 to-transparent",
    tags: ["Security", "CTF", "Reverse Engineering", "Forensics", "Cryptography"],
    links: {
      live: "https://arshakir.github.io/ctfs",
      github: "https://github.com/arshakir/ctfs",
    },
    featured: true,
  },
  {
    title: "Shader Portfolio",
    description:
      "Created and shared a collection of real-time generative visuals using GLSL fragment shaders, exploring procedural patterns, lighting, ray tracing, and GPU programming techniques.",
    icon: Palette,
    accentColor: "text-cyan-400 dark:text-[#B8DEEB]",
    badgeBg: "bg-cyan-500/15 border-cyan-500/30",
    cardHover: "hover:border-cyan-400/40",
    topAccent: "from-cyan-400/80 via-cyan-300/40 to-transparent",
    tags: ["GLSL", "WebGL", "Computer Graphics", "Ray Tracing", "Shaders"],
    links: {
      live: "/shaders",
      github: "https://github.com/arshakir/shaders",
    },
    featured: true,
  },
  {
    title: "Atmosphere AR",
    description:
      "Developed and published an augmented reality application visualizing global atmospheric circulation at CISESS / UMD, anchoring real-time particle simulations and 35 years of ERA5 climate reanalysis data onto an interactive 3D globe.",
    icon: Globe,
    accentColor: "text-indigo-400 dark:text-[#CDDBF9]",
    badgeBg: "bg-indigo-500/15 border-indigo-500/30",
    cardHover: "hover:border-indigo-400/40",
    topAccent: "from-indigo-400/80 via-blue-300/40 to-transparent",
    tags: ["Unity", "C#", "Augmented Reality", "Shaders", "Climate Data"],
    links: {
      live: "https://xr.cisess.umd.edu/atmosphere-ar/",
    },
    featured: true,
  },
  {
    title: "PL/OS",
    description:
      "A research prototype operating system built around CML-style synchronous message passing, featuring private semantic processes communicating through channels, a cooperative kernel, and a relational specification hosted in Lean 4.",
    icon: Layers,
    accentColor: "text-indigo-400 dark:text-[#CDDBF9]",
    badgeBg: "bg-indigo-500/15 border-indigo-500/30",
    cardHover: "hover:border-indigo-400/40",
    topAccent: "from-indigo-400/80 via-blue-300/40 to-transparent",
    tags: ["Lean 4", "Operating Systems", "Formal Semantics", "Wasm", "Concurrency"],
    links: {},
    featured: true,
  },
  {
    title: "Tron XR Game",
    description:
      "Contributed to a Tron-inspired XR game under the UMD XR Club, developing physics-based disk throwing mechanics, rigged 3D models in Blender, and VR interactions with the Meta XR SDK and URP.",
    icon: Gamepad2,
    accentColor: "text-cyan-400 dark:text-[#B8DEEB]",
    badgeBg: "bg-cyan-500/15 border-cyan-500/30",
    cardHover: "hover:border-cyan-400/40",
    topAccent: "from-cyan-400/80 via-blue-300/40 to-transparent",
    tags: ["Unity", "C#", "Virtual Reality", "Meta XR SDK", "Blender"],
    links: {
      github: "https://github.com/andydiep04/tron_xr",
    },
    featured: true,
  },
  {
    title: "Racket Compiler (CMSC430, University of Maryland)",
    description:
      "Developed a compiler in Racket that translates a Racket-subset language into x86-64 assembly across 14 incremental language extensions, validated with paired interpreters and a custom C runtime system.",
    icon: Terminal,
    accentColor: "text-amber-300 dark:text-[#E6DFB8]",
    badgeBg: "bg-amber-500/15 border-amber-500/30",
    cardHover: "hover:border-amber-400/40",
    topAccent: "from-amber-400/80 via-amber-300/40 to-transparent",
    tags: ["Racket", "x86-64 Assembly", "C", "Compilers", "Runtime Systems"],
    links: {},
    featured: true,
  },
  {
    title: "Putt Planet — Real-Time Multiplayer 3D Game Engine",
    description:
      "Designed and implemented a zero-dependency, headless 240 Hz fixed-timestep physics engine in JavaScript and an authoritative real-time multiplayer backend using Three.js, React 19, and Cloudflare Workers.",
    icon: Rocket,
    accentColor: "text-cyan-400 dark:text-[#B8DEEB]",
    badgeBg: "bg-cyan-500/15 border-cyan-500/30",
    cardHover: "hover:border-cyan-400/40",
    topAccent: "from-cyan-400/80 via-blue-300/40 to-transparent",
    tags: ["JavaScript", "React 19", "Three.js", "GLSL", "Cloudflare Workers", "WebSockets"],
    links: {
      github: "https://github.com/SpikemenDan/putt-planet",
    },
    featured: true,
  },
  {
    title: "Custom Malloc Implementation",
    description:
      "Designed and implemented a custom memory allocator in C supporting malloc, calloc, realloc, and free, using a red-black tree for O(log n) free block allocation and fragmentation control.",
    icon: MemoryStick,
    accentColor: "text-indigo-400 dark:text-[#CDDBF9]",
    badgeBg: "bg-indigo-500/15 border-indigo-500/30",
    cardHover: "hover:border-indigo-400/40",
    topAccent: "from-indigo-400/80 via-blue-300/40 to-transparent",
    tags: ["C", "Memory Management", "Red-Black Tree", "Systems Programming"],
    links: {
      github: "https://github.com/arshakir/my_malloc",
    },
    featured: true,
  },
  {
    title: "DTMF Codec",
    description:
      "Wrote a Python library that encodes and decodes Dual-Tone Multi-Frequency (DTMF) signals using Fast Fourier Transforms (FFT) and signal synthesis.",
    icon: AudioLines,
    accentColor: "text-amber-300 dark:text-[#E6DFB8]",
    badgeBg: "bg-amber-500/15 border-amber-500/30",
    cardHover: "hover:border-amber-400/40",
    topAccent: "from-amber-400/80 via-amber-300/40 to-transparent",
    tags: ["Python", "Signal Processing", "FFT", "NumPy", "SciPy"],
    links: {
      github: "https://github.com/arshakir/dtmf-codec",
    },
    featured: true,
  },
  {
    title: "C++ ML Model to recognize MNIST number dataset",
    description:
      "Developed a fully connected feedforward neural network in C++ using Eigen for matrix operations to classify handwritten digits from the MNIST dataset at 95% accuracy.",
    icon: BrainCog,
    accentColor: "text-amber-300 dark:text-[#E6DFB8]",
    badgeBg: "bg-amber-500/15 border-amber-500/30",
    cardHover: "hover:border-amber-400/40",
    topAccent: "from-amber-400/80 via-amber-300/40 to-transparent",
    tags: ["C++", "Machine Learning", "Neural Networks", "Eigen"],
    links: {
      github: "https://github.com/arshakir/MNIST",
    },
    featured: true,
  },
  {
    title: "Over Terrain Vehicle",
    description:
      "Created an Arduino-powered vehicle to complete robotics challenges as part of a group engineering project, implementing motor control, obstacle avoidance, sensor integration, and 3D CAD design.",
    icon: Microchip,
    accentColor: "text-emerald-400 dark:text-[#B1DBA4]",
    badgeBg: "bg-emerald-500/15 border-emerald-500/30",
    cardHover: "hover:border-emerald-400/40",
    topAccent: "from-emerald-400/80 via-emerald-300/40 to-transparent",
    tags: ["C/C++", "Arduino", "Robotics", "Embedded", "Autodesk Fusion"],
    links: {},
    featured: true,
  },
  {
    title: "Robotics Lab (ENME480, University of Maryland)",
    description:
      "Developed ROS-based control software in Python for a UR3e robotic arm, implementing forward and inverse kinematics along with a computer vision pipeline for block localization and manipulation.",
    icon: Bot,
    accentColor: "text-emerald-400 dark:text-[#B1DBA4]",
    badgeBg: "bg-emerald-500/15 border-emerald-500/30",
    cardHover: "hover:border-emerald-400/40",
    topAccent: "from-emerald-400/80 via-emerald-300/40 to-transparent",
    tags: ["Python", "ROS", "UR3e Arm", "Kinematics", "Computer Vision"],
    links: {},
    featured: true,
  },
]

export function getTagColorClass(tag: string): string {
  const t = tag.toLowerCase()
  // Coral: Security, CTF, Forensics, Cryptography, Reverse Engineering
  if (
    t.includes("security") ||
    t.includes("ctf") ||
    t.includes("reverse") ||
    t.includes("crypto") ||
    t.includes("forensics")
  ) {
    return "bg-rose-500/10 dark:bg-rose-500/15 text-rose-600 dark:text-[#EBB9B9] border-rose-500/30"
  }
  // Ice Cyan: Shaders, WebGL, GLSL, Graphics, 3D, AR, VR, Unity, Blender
  if (
    t.includes("shader") ||
    t.includes("glsl") ||
    t.includes("webgl") ||
    t.includes("graphics") ||
    t.includes("ray") ||
    t.includes("xr") ||
    t.includes("vr") ||
    t.includes("unity") ||
    t.includes("blender")
  ) {
    return "bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-[#B8DEEB] border-cyan-500/30"
  }
  // Soft Periwinkle Blue: Systems, C, C++, Assembly, Memory, Operating Systems, Wasm, Lean
  if (
    t === "c" ||
    t === "c++" ||
    t === "c/c++" ||
    t.includes("assembly") ||
    t.includes("memory") ||
    t.includes("operating") ||
    t.includes("runtime") ||
    t.includes("wasm") ||
    t.includes("lean") ||
    t.includes("systems")
  ) {
    return "bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-700 dark:text-[#CDDBF9] border-indigo-500/30"
  }
  // Sage Green: Python, React, JavaScript, TypeScript, ROS, Robotics, Embedded, Arduino
  if (
    t.includes("python") ||
    t.includes("react") ||
    t.includes("javascript") ||
    t.includes("typescript") ||
    t.includes("ros") ||
    t.includes("robotics") ||
    t.includes("arduino") ||
    t.includes("embedded")
  ) {
    return "bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-[#B1DBA4] border-emerald-500/30"
  }
  // Warm Amber: ML, Neural Networks, Math, FFT, Signal, Algorithms, Compilers, Eigen, Racket
  if (
    t.includes("learning") ||
    t.includes("neural") ||
    t.includes("eigen") ||
    t.includes("fft") ||
    t.includes("signal") ||
    t.includes("compiler") ||
    t.includes("racket") ||
    t.includes("formal") ||
    t.includes("tree") ||
    t.includes("climate") ||
    t.includes("concurrency")
  ) {
    return "bg-amber-500/10 dark:bg-amber-500/15 text-amber-700 dark:text-[#E6DFB8] border-amber-500/30"
  }
  return "bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 text-light-accent-primary dark:text-[#B8DEEB] border-light-accent-primary/20 dark:border-dark-accent-primary/20"
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg-tertiary dark:bg-dark-bg-primary bg-tech-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Explore my work across systems programming, graphics, robotics, cybersecurity, and full-stack development.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid with Symmetric Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-stretch">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group relative overflow-hidden border-light-border dark:border-dark-border bg-light-bg-secondary dark:bg-dark-bg-secondary ${project.cardHover} hover:shadow-glow transition-all duration-300 animate-fade-in flex flex-col justify-between h-full hover:-translate-y-1`}
              style={{ animationDelay: `${(index % 6) * 0.1}s` }}
            >
              {/* Top Accent Strip */}
              <div className={`h-[2.5px] w-full bg-gradient-to-r ${project.topAccent}`} />

              <CardHeader className="flex-1 pb-4">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg border ${project.badgeBg} ${project.accentColor} group-hover:scale-105 transition-transform duration-200`}>
                      <project.icon className="h-5 w-5 shrink-0" />
                    </div>
                    <CardTitle className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary leading-snug group-hover:text-light-accent-primary dark:group-hover:text-dark-accent-primary transition-colors duration-200">
                      {project.title}
                    </CardTitle>
                  </div>

                  {/* Clean, visible action links */}
                  <div className="flex items-center gap-2 shrink-0">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary border border-light-border dark:border-dark-border hover:border-light-accent-primary/40 dark:hover:border-dark-accent-primary/40 transition-all duration-200"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Code</span>
                      </a>
                    )}

                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target={project.links.live.startsWith("http") ? "_blank" : undefined}
                        rel={project.links.live.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label="Live project"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-[#B1DBA4] hover:bg-emerald-500/20 dark:hover:bg-emerald-500/25 border border-emerald-500/30 transition-all duration-200 shadow-xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live</span>
                        <ExternalLink className="h-3 w-3 ml-0.5 opacity-80" />
                      </a>
                    )}
                  </div>
                </div>

                <CardDescription className="text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary leading-relaxed font-normal">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-2">
                <div className="flex flex-wrap gap-2 pt-3 border-t border-light-border/50 dark:border-dark-border/50">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-xs font-medium rounded-full border transition-colors ${getTagColorClass(tag)}`}
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
