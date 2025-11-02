"use client"
import { useEffect, useRef, useState } from "react"

export default function Skills() {
  const skillsData = {
    Languages: ["Python", "C++", "JavaScript", "HTML/CSS"],
    Databases: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"],
    "ML Frameworks": [
      "TensorFlow",
      "scikit-learn",
      "PyTorch",
      "OpenCV",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Plotly",
      "Streamlit",
    ],
    "Full Stack": ["React.js", "Node.js", "Express.js", "PHP", "FastAPI", "Tailwind CSS"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Vercel"],
    Others: ["Linux", "Windows", "Power BI", "MS Excel", "AWS"],
  }

  const [visibleCategories, setVisibleCategories] = useState({})
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryIndex = entry.target.getAttribute("data-index")
            setTimeout(() => {
              setVisibleCategories((prev) => ({ ...prev, [categoryIndex]: true }))
            }, 100)
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = skillsRef.current?.querySelectorAll("[data-index]")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-transparent">
      <div className="max-w-6xl w-full text-center" ref={skillsRef}>
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          Skills & Expertise
        </h2>

        {/* Categories */}
        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div
              key={categoryIndex}
              data-index={categoryIndex}
              className={`transform transition-all duration-700 ${
                visibleCategories[categoryIndex] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                {category}
              </h3>

              {/* Skill Tags */}
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2 rounded-lg bg-indigo-500/10 border border-indigo-400/40 
                               text-white text-sm font-medium drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] 
                               hover:border-indigo-400 hover:bg-indigo-500/20 transition-all 
                               transform hover:scale-110 duration-300 cursor-pointer"
                  >
                    {skill}
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
