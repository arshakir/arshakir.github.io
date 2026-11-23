"use client"

import { useEffect, useRef, useCallback } from "react"

interface ShaderCanvasProps {
  fragmentShader: string
  isPlaying?: boolean
  className?: string
}

export default function ShaderCanvas({ fragmentShader, isPlaying = false, className = "" }: ShaderCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glRef = useRef<WebGLRenderingContext | null>(null)
  const programRef = useRef<WebGLProgram | null>(null)
  const positionBufferRef = useRef<WebGLBuffer | null>(null)
  const positionLocationRef = useRef<number>(-1)
  const timeLocationRef = useRef<WebGLUniformLocation | null>(null)
  const resolutionLocationRef = useRef<WebGLUniformLocation | null>(null)

  // Timing & Animation state refs (immune to closure staleness)
  const isPlayingRef = useRef<boolean>(isPlaying)
  const timeRef = useRef<number>(0)
  const lastFrameTimeRef = useRef<number | null>(null)
  const animationFrameIdRef = useRef<number | null>(null)

  // Keep isPlayingRef updated in sync with props
  isPlayingRef.current = isPlaying

  // Resize canvas to match display size
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const gl = glRef.current
    if (!canvas || !gl) return

    const displayWidth = canvas.clientWidth
    const displayHeight = canvas.clientHeight

    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      canvas.width = displayWidth
      canvas.height = displayHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
  }, [])

  // Draw a single frame at the given timestamp
  const drawFrame = useCallback(
    (timeValue: number) => {
      const canvas = canvasRef.current
      const gl = glRef.current
      const program = programRef.current
      if (!canvas || !gl || !program) return

      resizeCanvas()

      gl.useProgram(program)

      if (timeLocationRef.current) {
        gl.uniform1f(timeLocationRef.current, timeValue)
      }
      if (resolutionLocationRef.current) {
        gl.uniform2f(resolutionLocationRef.current, canvas.width, canvas.height)
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBufferRef.current)
      gl.enableVertexAttribArray(positionLocationRef.current)
      gl.vertexAttribPointer(positionLocationRef.current, 2, gl.FLOAT, false, 0, 0)

      gl.drawArrays(gl.TRIANGLES, 0, 6)
    },
    [resizeCanvas]
  )

  // Animation loop callback
  const loop = useCallback(
    (now: number) => {
      // If paused, terminate loop immediately
      if (!isPlayingRef.current) {
        animationFrameIdRef.current = null
        lastFrameTimeRef.current = null
        return
      }

      if (lastFrameTimeRef.current !== null) {
        const delta = (now - lastFrameTimeRef.current) * 0.001
        // Prevent huge time jump if tab was backgrounded
        timeRef.current += Math.min(delta, 0.1)
      }
      lastFrameTimeRef.current = now

      drawFrame(timeRef.current)

      animationFrameIdRef.current = requestAnimationFrame(loop)
    },
    [drawFrame]
  )

  // Effect 1: Initialize WebGL Program (ONLY runs when fragmentShader changes or mounts)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl =
      canvas.getContext("webgl", { preserveDrawingBuffer: false, powerPreference: "high-performance" }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null)
    if (!gl) {
      console.error("WebGL not supported")
      return
    }

    glRef.current = gl

    const vertexShaderSource = `
      attribute vec4 a_position;
      void main() {
        gl_Position = a_position;
      }
    `

    const createShader = (glCtx: WebGLRenderingContext, type: number, source: string) => {
      const shader = glCtx.createShader(type)
      if (!shader) return null

      glCtx.shaderSource(shader, source)
      glCtx.compileShader(shader)

      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error("Shader compile error:", glCtx.getShaderInfoLog(shader))
        glCtx.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader)

    if (!vertexShader || !fragShader) return

    const program = gl.createProgram()
    if (!program) return

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program))
      gl.deleteProgram(program)
      return
    }

    programRef.current = program
    gl.useProgram(program)

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)

    positionBufferRef.current = positionBuffer
    positionLocationRef.current = gl.getAttribLocation(program, "a_position")
    timeLocationRef.current = gl.getUniformLocation(program, "iTime")
    resolutionLocationRef.current = gl.getUniformLocation(program, "iResolution")

    // Render initial frame
    drawFrame(timeRef.current)

    // ResizeObserver for responsive canvas updates
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas()
      drawFrame(timeRef.current)
    })
    resizeObserver.observe(canvas)

    return () => {
      resizeObserver.disconnect()
      if (programRef.current && glRef.current) {
        glRef.current.deleteProgram(programRef.current)
        programRef.current = null
      }
    }
  }, [fragmentShader, drawFrame, resizeCanvas])

  // Effect 2: Handle Play/Pause toggles smoothly without tearing down WebGL program
  useEffect(() => {
    isPlayingRef.current = isPlaying

    if (isPlaying) {
      // Start or resume loop
      lastFrameTimeRef.current = null
      if (!animationFrameIdRef.current) {
        animationFrameIdRef.current = requestAnimationFrame(loop)
      }
    } else {
      // Stop loop immediately and freeze current frame
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
        animationFrameIdRef.current = null
      }
      lastFrameTimeRef.current = null
      drawFrame(timeRef.current)
    }

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
        animationFrameIdRef.current = null
      }
    }
  }, [isPlaying, loop, drawFrame])

  return <canvas ref={canvasRef} className={`${className} block w-full h-full`} />
}
