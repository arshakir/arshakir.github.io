"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Eye, Play, Pause, ExternalLink, Code2, Monitor, Columns2, X, Sparkles } from "lucide-react"
import ShaderCanvas from "@/components/shader-canvas"
import CodeBlock from "@/components/code-block"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { getTagColorClass } from "@/components/projects-section"

import { cubeish } from "@/shaders/cubeish"
import { endless_tunnel } from "@/shaders/endless_tunnel"
import { time_warden } from "@/shaders/time_warden"
import { tranquil_waters } from "@/shaders/tranquil_waters"
import { nighttime_buildings } from "@/shaders/nighttime_buildings"

const prologue = `precision mediump float;
uniform float iTime;
uniform vec2 iResolution;
`

const epilogue = `
void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}`

const shaders = [
  {
    id: 1,
    title: "Cubeish",
    description: "Ray traced a red superellipsoid spinning around with specular lighting and reflections.",
    tags: ["Cube", "Raytracing", "Light"],
    shadertoyUrl: "https://www.shadertoy.com/view/XfyBDW",
    fragmentShader: cubeish,
    createdDate: "2024-12-14",
  },
  {
    id: 2,
    title: "Endless Tunnel",
    description: "Raymarched an infinite procedural tunnel with chromatic aberration and audio-reactive vibes.",
    tags: ["Tunnel", "Raymarching", "Chromatic Aberration", "Noise"],
    shadertoyUrl: "https://www.shadertoy.com/view/tcVGDh",
    fragmentShader: endless_tunnel,
    createdDate: "2025-05-29",
  },
  {
    id: 3,
    title: "Time Warden",
    description: "2D fragment shader rendering an animated glowing clock with reactive particle noise.",
    tags: ["2D", "Clock", "Glow", "Noise"],
    shadertoyUrl: "https://www.shadertoy.com/view/3cVGRt",
    fragmentShader: time_warden,
    createdDate: "2025-05-29",
  },
  {
    id: 4,
    title: "Tranquil Waters",
    description: "A peaceful procedural landscape generated entirely from mathematical height functions.",
    tags: ["Terrain", "Water", "Tree", "Lighting"],
    shadertoyUrl: "https://www.shadertoy.com/view/wcdXWH",
    fragmentShader: tranquil_waters,
    createdDate: "2025-06-11",
  },
  {
    id: 5,
    title: "Nighttime Buildings",
    description: "A generative nighttime cityscape produced by raymarching volumetric procedural buildings.",
    tags: ["Buildings", "Night", "Moon", "Raymarching"],
    shadertoyUrl: "https://www.shadertoy.com/view/wcdXz8",
    fragmentShader: nighttime_buildings,
    createdDate: "2025-06-11",
  },
]

type ShaderItem = (typeof shaders)[number]
type ModalView = "split" | "shader" | "code"

export default function ShaderPortfolioPage() {
  const [selectedShader, setSelectedShader] = useState<ShaderItem | null>(null)
  const [playingGridShader, setPlayingGridShader] = useState<number | null>(null)
  const [isModalPlaying, setIsModalPlaying] = useState<boolean>(true)
  const [modalView, setModalView] = useState<ModalView>("split")
  const { resolvedTheme } = useTheme()

  const currentTheme = resolvedTheme === "dark" ? "dark" : "light"

  const handleOpenModal = (shader: ShaderItem) => {
    setSelectedShader(shader)
    setIsModalPlaying(true)
    setModalView("split")
  }

  const handleToggleGridPlay = (shaderId: number) => {
    setPlayingGridShader((prev) => (prev === shaderId ? null : shaderId))
  }

  return (
    <div className="min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary text-light-text-primary dark:text-dark-text-primary flex flex-col justify-between">
      <Navigation />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 text-light-accent-primary dark:text-dark-accent-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-light-accent-primary/20 dark:border-dark-accent-primary/20">
            <Sparkles className="h-3.5 w-3.5" />
            GLSL & WebGL Gallery
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Creative <span className="gradient-text">Shaders</span>
          </h1>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
            A collection of real-time generative visuals, ray marching experiments, and procedural simulations
            written directly in GLSL fragment shaders. Run shaders in the grid or inspect their source code.
          </p>
        </section>

        {/* Shader Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {shaders.map((shader, index) => {
            const isPlaying = playingGridShader === shader.id

            return (
              <Card
                key={shader.id}
                className="group relative overflow-hidden border-light-border dark:border-dark-border bg-light-bg-secondary dark:bg-dark-bg-secondary hover:border-light-accent-primary/40 dark:hover:border-dark-accent-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in flex flex-col justify-between h-full hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <CardTitle className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary group-hover:text-light-accent-primary dark:group-hover:text-dark-accent-primary transition-colors">
                      {shader.title}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-light-accent-primary/10 dark:hover:bg-dark-accent-primary/10 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleToggleGridPlay(shader.id)
                      }}
                      aria-label={isPlaying ? "Pause shader" : "Play shader"}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                  </div>
                  <CardDescription className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                    {shader.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pt-0">
                  {/* Canvas Container */}
                  <div
                    className="aspect-video w-full rounded-xl overflow-hidden relative border border-light-border dark:border-dark-border/80 cursor-pointer bg-black/10 dark:bg-black/40 group/canvas"
                    onClick={() => handleToggleGridPlay(shader.id)}
                  >
                    <ShaderCanvas
                      fragmentShader={prologue + shader.fragmentShader + epilogue}
                      isPlaying={isPlaying}
                      className="w-full h-full"
                    />

                    {/* Play Overlay */}
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover/canvas:bg-black/35 transition-colors">
                        <div className="rounded-full p-3 bg-light-accent-primary/90 dark:bg-dark-accent-primary/90 text-white dark:text-[#20202a] shadow-lg group-hover/canvas:scale-110 transition-transform">
                          <Play className="h-5 w-5 fill-current ml-0.5" />
                        </div>
                      </div>
                    )}

                    {isPlaying && (
                      <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[10px] font-medium text-green-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Running
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {shader.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-0.5 text-xs font-medium rounded-full border transition-colors ${getTagColorClass(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2 border-t border-light-border/40 dark:border-dark-border/40">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs font-medium border-light-border dark:border-dark-border bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary cursor-pointer"
                      onClick={() => handleOpenModal(shader)}
                    >
                      <Eye className="h-3.5 w-3.5 mr-1.5" />
                      View Details & Code
                    </Button>

                    <a
                      href={shader.shadertoyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on ShaderToy"
                      className="p-1.5 rounded-lg border border-light-border dark:border-dark-border bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-colors shrink-0"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </section>
      </main>

      {/* Single Page-Level Modal for Shader & Source Code */}
      <Dialog open={!!selectedShader} onOpenChange={(open) => !open && setSelectedShader(null)}>
        <DialogContent className="fixed inset-2 sm:inset-4 md:inset-6 lg:inset-8 !max-w-none !w-auto max-h-none h-auto p-0 gap-0 overflow-hidden rounded-2xl border border-light-border dark:border-dark-border bg-light-bg-secondary dark:bg-dark-bg-secondary translate-x-0 translate-y-0 [&>button]:hidden shadow-2xl flex flex-col z-50">
          {selectedShader && (
            <div className="flex flex-col h-full min-h-0">
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-light-border dark:border-dark-border shrink-0 bg-light-bg-primary dark:bg-dark-bg-primary">
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className="min-w-0">
                    <DialogTitle className="text-lg sm:text-xl font-bold text-light-text-primary dark:text-dark-text-primary truncate">
                      {selectedShader.title}
                    </DialogTitle>
                    <DialogDescription className="text-xs text-light-text-secondary dark:text-dark-text-secondary truncate hidden sm:block">
                      {selectedShader.description}
                    </DialogDescription>
                  </div>
                </div>

                {/* View Mode Toggle Controls */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 p-1 rounded-lg bg-light-bg-tertiary dark:bg-dark-bg-tertiary border border-light-border dark:border-dark-border">
                    {/* Split View button (Desktop only) */}
                    <button
                      type="button"
                      onClick={() => setModalView("split")}
                      className={`hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                        modalView === "split"
                          ? "bg-light-accent-primary dark:bg-dark-accent-primary text-white dark:text-[#20202a] shadow-xs"
                          : "text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary"
                      }`}
                    >
                      <Columns2 className="h-3.5 w-3.5" />
                      <span>Split</span>
                    </button>

                    {/* Shader View */}
                    <button
                      type="button"
                      onClick={() => setModalView("shader")}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                        modalView === "shader"
                          ? "bg-light-accent-primary dark:bg-dark-accent-primary text-white dark:text-[#20202a] shadow-xs"
                          : "text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary"
                      }`}
                    >
                      <Monitor className="h-3.5 w-3.5" />
                      <span>Shader</span>
                    </button>

                    {/* Code View */}
                    <button
                      type="button"
                      onClick={() => setModalView("code")}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                        modalView === "code"
                          ? "bg-light-accent-primary dark:bg-dark-accent-primary text-white dark:text-[#20202a] shadow-xs"
                          : "text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary"
                      }`}
                    >
                      <Code2 className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </button>
                  </div>

                  <a
                    href={selectedShader.shadertoyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-light-border dark:border-dark-border hover:border-light-accent-primary dark:hover:border-dark-accent-primary text-light-accent-primary dark:text-dark-accent-primary transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>ShaderToy</span>
                  </a>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary cursor-pointer"
                    onClick={() => setSelectedShader(null)}
                    aria-label="Close modal"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Modal Body Container with min-h-0 for native scrolling */}
              <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden bg-light-bg-secondary dark:bg-dark-bg-secondary">
                {/* Left Pane: Shader Visualizer & Controls */}
                {(modalView === "split" || modalView === "shader") && (
                  <div
                    className={`flex flex-col min-h-0 p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-light-border dark:border-dark-border bg-light-bg-primary/40 dark:bg-dark-bg-primary/40 ${
                      modalView === "split" ? "lg:w-1/2 flex-1" : "w-full flex-1"
                    }`}
                  >
                    {/* Live WebGL Canvas */}
                    <div className="flex-1 min-h-[260px] sm:min-h-[320px] lg:min-h-0 w-full rounded-xl overflow-hidden relative border border-light-border dark:border-dark-border bg-black/60 shadow-inner">
                      <ShaderCanvas
                        fragmentShader={prologue + selectedShader.fragmentShader + epilogue}
                        isPlaying={isModalPlaying}
                        className="w-full h-full"
                      />

                      {/* Status indicator badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-xs text-xs font-medium text-white shadow-md">
                        <span
                          className={`w-2 h-2 rounded-full ${isModalPlaying ? "bg-green-400 animate-pulse" : "bg-yellow-400"}`}
                        />
                        <span>{isModalPlaying ? "60 FPS" : "Paused"}</span>
                      </div>
                    </div>

                    {/* Bottom Control Bar */}
                    <div className="mt-4 pt-3 border-t border-light-border/50 dark:border-dark-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shrink-0">
                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          onClick={() => setIsModalPlaying((p) => !p)}
                          className="px-4 py-2 rounded-lg font-medium bg-light-accent-primary dark:bg-dark-accent-primary text-white dark:text-[#20202a] hover:opacity-90 shadow-sm cursor-pointer"
                        >
                          {isModalPlaying ? (
                            <>
                              <Pause className="h-4 w-4 mr-1.5" />
                              Pause Animation
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 mr-1.5" />
                              Resume Animation
                            </>
                          )}
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {selectedShader.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2.5 py-0.5 text-xs font-medium rounded-full border transition-colors ${getTagColorClass(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Right Pane: GLSL Code Inspector with Native Smooth Scrolling */}
                {(modalView === "split" || modalView === "code") && (
                  <div
                    className={`flex flex-col min-h-0 bg-light-bg-secondary dark:bg-dark-bg-secondary ${
                      modalView === "split" ? "lg:w-1/2 flex-1" : "w-full flex-1"
                    }`}
                  >
                    {/* Code Header Bar */}
                    <div className="px-4 py-2.5 border-b border-light-border dark:border-dark-border flex items-center justify-between shrink-0 bg-light-bg-tertiary/40 dark:bg-dark-bg-tertiary/40 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                          fragment_shader.glsl
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 text-light-accent-primary dark:text-dark-accent-primary font-mono text-[11px]">
                          GLSL ES 1.0
                        </span>
                      </div>
                      <span className="text-light-text-muted dark:text-dark-text-muted text-xs">
                        {(prologue + selectedShader.fragmentShader + epilogue).split("\n").length} lines
                      </span>
                    </div>

                    {/* Scrollable Code Viewport - Native Scrolling */}
                    <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto p-4 sm:p-5">
                      <CodeBlock
                        code={prologue + selectedShader.fragmentShader + epilogue}
                        language="glsl"
                        theme={currentTheme}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
