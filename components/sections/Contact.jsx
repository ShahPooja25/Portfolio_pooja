"use client"

import { useState } from "react"
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react"

export default function Contact() {
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    const response = await fetch("https://formspree.io/f/xblpqkpq", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })

    if (response.ok) {
      setStatus("SUCCESS")
      form.reset()
      setTimeout(() => setStatus(""), 4000)
    } else {
      setStatus("ERROR")
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full relative z-10">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <p className="text-center text-gray-300 text-lg mb-16">
          Have a project in mind or just want to say hello? I’d love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* ✅ Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-400/30 text-white placeholder-gray-500 focus:border-purple-400/60 focus:outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-400/30 text-white placeholder-gray-500 focus:border-purple-400/60 focus:outline-none transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-400/30 text-white placeholder-gray-500 focus:border-purple-400/60 focus:outline-none transition resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Send Message <Send size={20} />
            </button>

            {status === "SUCCESS" && (
              <p className="text-green-400 text-center pt-2">✅ Message sent successfully!</p>
            )}
            {status === "ERROR" && (
              <p className="text-red-400 text-center pt-2">❌ Oops! Something went wrong. Try again later.</p>
            )}
          </form>

          {/* ✅ Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>

            <a
              href="mailto:poojarshah25@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-purple-500/10 border border-purple-400/30 hover:border-purple-400/60 hover:bg-purple-500/20 transition group"
            >
              <Mail size={24} className="text-purple-400 group-hover:text-purple-300" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">poojarshah25@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/shahpooja25/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-blue-500/10 border border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-500/20 transition group"
            >
              <Linkedin size={24} className="text-blue-400 group-hover:text-blue-300" />
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="text-white font-medium">linkedin.com/in/shahpooja25</p>
              </div>
            </a>

            <a
              href="https://github.com/ShahPooja25"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-400/30 hover:border-cyan-400/60 hover:bg-cyan-500/20 transition group"
            >
              <Github size={24} className="text-cyan-400 group-hover:text-cyan-300" />
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <p className="text-white font-medium">github.com/ShahPooja25</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>
    </section>
  )
}
