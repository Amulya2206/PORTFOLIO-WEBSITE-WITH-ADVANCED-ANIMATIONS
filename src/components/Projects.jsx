import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const cards = ref.current.querySelectorAll('.project-card')
    gsap.from(cards, {
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out'
    })
  }, [])

  return (
    <div ref={ref}>
      <h2 className="text-3xl font-bold mb-6">Selected projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <article key={p.id} className="project-card bg-gradient-to-br from-white/3 to-white/2 border border-white/6 rounded-2xl p-5 backdrop-blur-md" tabIndex={0} aria-labelledby={`proj-${p.id}-title`}>
            <h3 id={`proj-${p.id}-title`} className="font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-slate-300 mb-4">{p.desc}</p>
            <div className="flex gap-2 flex-wrap text-xs opacity-80">{p.tags.map(t => <span key={t} className="px-2 py-1 rounded-md bg-white/3">{t}</span>)}</div>
          </article>
        ))}
      </div>
    </div>
  )
}
