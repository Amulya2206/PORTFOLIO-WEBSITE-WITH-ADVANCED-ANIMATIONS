import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ThreeScene from './components/ThreeScene'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 antialiased">
      <Nav />

      <main className="pt-24">
        <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Hero />
          <div className="w-full h-80 lg:h-96 bg-gradient-to-b from-transparent to-black/50 rounded-2xl flex items-center justify-center shadow-xl">
            <ThreeScene />
          </div>
        </section>

        <section id="about" className="max-w-4xl mx-auto px-6 py-12">
          <About />
        </section>

        <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
          <Projects />
        </section>

        <section id="contact" className="max-w-3xl mx-auto px-6 py-12">
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  )
}
