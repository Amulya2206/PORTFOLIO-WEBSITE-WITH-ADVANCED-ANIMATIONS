import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.from('.intro-line', { y: 40, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out' })
      tl.from('.cta-btn', { scale: 0.9, opacity: 0, duration: 0.6 }, '<+0.2')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef}>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        <div className="intro-line">Hi — I'm <span className="text-emerald-300">Anila</span></div>
        <div className="intro-line">I design delightful web experiences</div>
      </h1>
      <p className="intro-line max-w-xl text-slate-300 mb-6">
        I build animated interfaces and interactive 3D demos using modern JS and web graphics libraries to bring ideas to life.
      </p>

      <div className="flex gap-3">
        <a href="#projects" className="cta-btn inline-block bg-emerald-400/10 border border-emerald-300/20 py-2 px-4 rounded-md text-emerald-200 hover:scale-[1.02] transition-transform">See Projects</a>
        <a href="#contact" className="cta-btn inline-block py-2 px-4 rounded-md bg-emerald-300 text-slate-900 font-medium shadow-md">Work with me</a>
      </div>

      <div className="mt-8 text-sm text-slate-400">
        <strong>Skills:</strong> React · GSAP · Three.js · Tailwind · TypeScript
      </div>
    </div>
  )
}
