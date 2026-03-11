"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Subtle animated grid in background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    let frame = 0
    let raf: number

    const draw = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)
      ctx.strokeStyle = "rgba(99, 179, 255, 0.08)"
      ctx.lineWidth = 1

      const gridSize = 60
      const offset = (frame * 0.3) % gridSize

      for (let x = -gridSize + (offset % gridSize); x < width + gridSize; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = -gridSize + (offset % gridSize); y < height + gridSize; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
      frame++
      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen bg-[#0d1117] flex flex-col justify-center overflow-hidden pt-16">
      {/* Animated grid */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Blue glow orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Trusted by 10 AI automation agencies
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-5xl mx-auto">
          White-label your AI workflows. <span className="text-blue-400">Get paid.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Connect Vapi, Retell, Make, or n8n. In 60 seconds, your client gets a branded portal with their
          data — under your name, your logo, your domain. Zero Getflowetic branding.
        </p>

        {/* Brand promise callout */}
        <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70">
          <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>
            During your trial, clients see Getflowetic. <strong className="text-white font-semibold">The moment you pay, it&apos;s 100% yours.</strong>
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-colors shadow-lg shadow-blue-600/20"
          >
            Start free — 7 days, no card
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-base transition-colors"
          >
            Sign in
          </Link>
        </div>

        {/* Platform logos row */}
        <div className="mt-14 flex items-center justify-center gap-8 flex-wrap">
          <span className="text-white/30 text-sm uppercase tracking-widest font-medium">Works with</span>
          {["Vapi", "Retell", "Make", "n8n"].map((platform) => (
            <span
              key={platform}
              className="px-4 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white/60 text-sm font-medium"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
        aria-hidden="true"
      />
    </section>
  )
}
