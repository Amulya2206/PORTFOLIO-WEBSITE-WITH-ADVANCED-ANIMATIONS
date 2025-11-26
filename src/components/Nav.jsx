import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Nav() {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.from(navRef.current, { y: -50, opacity: 0, duration: 0.8, ease: 'power3.out' })
  }, [])

  return (
    <header ref={navRef} className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 w-[92%] max-w-4xl backdrop-blur-md bg-white/5 border border-white/6 rounded-2xl px-6 py-3 flex items-center justify-between">
      <div className="font-semibold tracking-tight">Anila — Creative Dev</div>
      <nav className="flex gap-4 text-sm opacity-90">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  )
}
