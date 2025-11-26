import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12 text-center text-slate-500 text-sm">
      © {new Date().getFullYear()} Anila — Built with React, GSAP & Three.js
    </footer>
  )
}
