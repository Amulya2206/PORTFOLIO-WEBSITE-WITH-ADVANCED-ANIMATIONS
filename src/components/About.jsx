import React from 'react'

export default function About() {
  return (
    <div className="card-bg rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-3">About me</h2>
      <p className="text-slate-300 leading-relaxed">
        I'm a front-end developer focused on motion and interactive experiences. I enjoy turning complex data and product ideas into intuitive, performant interfaces.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Approach</h3>
          <p className="text-sm text-slate-300">Design-systems first, accessible by default, optimised for performance.</p>
        </div>
        <div>
          <h3 className="font-semibold">Toolkit</h3>
          <p className="text-sm text-slate-300">React, GSAP, Three.js, Vite, Tailwind, TypeScript</p>
        </div>
      </div>
    </div>
  )
}
