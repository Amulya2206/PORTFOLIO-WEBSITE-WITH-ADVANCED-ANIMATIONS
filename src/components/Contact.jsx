import React from 'react'

export default function Contact() {
  return (
    <div className="card-bg rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-3">Let's build something</h2>
      <p className="text-slate-300 mb-6">Interested in working together? Drop a message — I usually reply within a day.</p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
        <input placeholder="Your name" className="p-3 rounded-md bg-transparent border border-white/6" />
        <input placeholder="Email" className="p-3 rounded-md bg-transparent border border-white/6" />
        <textarea placeholder="Project brief" className="md:col-span-2 p-3 rounded-md bg-transparent border border-white/6 h-28" />
        <button type="submit" className="md:col-span-2 py-3 rounded-md bg-emerald-300 text-slate-900 font-medium shadow-md">Send message</button>
      </form>
    </div>
  )
}
