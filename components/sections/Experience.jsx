"use client"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "HumbleWalking",
      year: "June 2025 – July 2025",
      description:
        "Engineered and launched the official HumbleWalking platform — a full-stack MERN application with 10+ REST APIs for scalable data management. Designed and implemented a responsive mobile-first UI/UX, boosting user engagement by 40%, and deployed a production-ready app supporting 500+ users.",
      highlights: [
        "MERN Stack",
        "REST APIs",
        "UI/UX Design",
        "Scalable Architecture",
        "Real-time Data Tracking",
      ],
      color: "from-purple-500/20 to-blue-500/20",
      borderColor: "border-purple-400/30",
    },
    {
      role: "Web Developer Intern – HRMS",
      company: "SpaceEcE Foundation",
      year: "Dec 2024 – Jan 2025",
      description:
        "Architected and developed a scalable HR Management System using the LAMP stack for 1,000+ employees, covering attendance, task scheduling, and expense tracking. Optimized performance by 30% and improved data accuracy, enhancing HR dashboard efficiency and usability.",
      highlights: ["LAMP Stack", "MySQL", "PHP", "HR Dashboard", "Performance Optimization"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/30",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10">
      <div className="max-w-5xl w-full z-20">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          Experience
        </h2>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg bg-gradient-to-br ${exp.color} border ${exp.borderColor} 
                         hover:border-opacity-100 transition-all hover:shadow-lg hover:shadow-blue-500/30 relative z-10`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <Briefcase
                    className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                      {exp.role}
                    </h3>
                    <p className="text-white text-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  <Calendar size={18} />
                  <span className="whitespace-nowrap">{exp.year}</span>
                </div>
              </div>

              <p className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/10 text-white text-sm 
                               border border-white/40 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
