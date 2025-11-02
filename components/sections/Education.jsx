"use client"
import { BookOpen, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      school: "K. J. Somaiya Institute of Technology (KJSIT)",
      year: "June 2022 – June 2026",
      description: "Current CGPA: 8.5/10 — Focused on Software Development, AI, and Web Technologies.",
      color: "from-purple-500/20 to-blue-500/20",
      borderColor: "border-purple-400/30",
    },
    {degree: "Higher Secondary Education",
      school: "S.S & L.S Patkar College of Science, Mumbai",
      year: "June 2020 – June 2022",
      description: "With Physics, Chemistry, Mathematics (PCM) and Bifocal Computer Science.",
      color: "from-purple-500/20 to-blue-500/20",
      borderColor: "border-purple-400/30",
    },
    {degree: "Senior Secondary Education",
      school: "Vivek Education Society's School, Mumbai",
      year: "June 2008 – June 2020",
      description: "Securing 10th Board with 92%",
      color: "from-purple-500/20 to-blue-500/20",
      borderColor: "border-purple-400/30",
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10">
      <div className="max-w-5xl w-full z-20">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          Education
        </h2>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg bg-gradient-to-br ${item.color} border ${item.borderColor} 
                         hover:border-opacity-100 transition-all hover:shadow-lg hover:shadow-purple-500/30 relative z-10`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <BookOpen
                    className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                      {item.degree}
                    </h3>
                    <p className="text-white text-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                      {item.school}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  <Calendar size={18} />
                  <span className="whitespace-nowrap">{item.year}</span>
                </div>
              </div>
              <p className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
