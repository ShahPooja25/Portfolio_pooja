"use client"
import { useState } from "react"

import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Brain Tumor Detection",
      description:
        "Fine-tuned a VGG16 CNN in TensorFlow to classify MRI brain scans into 4 tumor categories with high precision and recall. Applied image augmentation and preprocessing using OpenCV, and evaluated model performance using precision-recall metrics and visualization tools like scikit-learn, Pandas, and Matplotlib.",
      technologies: ["Python", "TensorFlow", "OpenCV", "scikit-learn"],
      gradient: "from-purple-600 to-blue-600",
      borderColor: "border-purple-400/30",
      github: "https://github.com/ShahPooja25/Brain-Tumor-Detection",
      live: "https://brain-tumor-detection.vercel.app/",
      images: [
        "/braint1.png",
        "/braint2.png",
        "/braint3.png",
      ],
    },
    {
      title: "Civic-Circle",
      description:
        "Developed a scalable MERN stack web platform for NGOs to host social events and match volunteers using collaborative filtering. Integrated authentication, role-based access, a smart calendar, chatbot, and accessibility modules.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      gradient: "from-blue-600 to-cyan-600",
      borderColor: "border-blue-400/30",
      github: "https://github.com/ShahPooja25/Civic-Circle",
      live: "https://civic-circle.vercel.app/",
      images: [
        "/cc1.png",
        "/cc2.png",
        "/cc3.png",
        "/cc5.png",
      ],
    },
    {
      title: "YogaInsight",
      description:
        "Built a real-time yoga posture analysis system using Python and OpenCV. Recognized 40+ yoga postures using MediaPipe landmark extraction and trained a scikit-learn model on 50,000+ samples, achieving 95% accuracy.",
      technologies: ["Python", "OpenCV", "MediaPipe", "scikit-learn"],
      gradient: "from-cyan-600 to-pink-600",
      borderColor: "border-cyan-400/30",
      github: "https://github.com/ShahPooja25/YogaInsight",
      live: "https://yogainsight-ai.vercel.app/",
      images: [
        "/yogainsight1.png",
        "/yogainsight2.png",
        "/yogainsight3.png",
      ],
    },
    {
      title: "SpectraSnap AI",
      description:
        " Developed a mobile-first PWA for biometric analysis with 92% accuracy in gender and age estimation using TensorFlow and OpenCV. Integrated YOLOv8 for multi-object recognition, achieving <150ms inference latency and reducing misclassifications by 25% across varied lighting conditions.",
      technologies: ["Python", "OpenCV", "TensorFlow", "YOLOv8"],
      gradient: "from-cyan-600 to-pink-600",
      borderColor: "border-cyan-400/30",
      github: "https://github.com/ShahPooja25/AGE-DETECTION",
      live: "https://github.com/ShahPooja25/AGE-DETECTION",
      images: [
        "/spectrasnapai.png",
        
      ],
    },
    {
      title: "SmartBotAI",
      description:
        " Built a multimodal AI chatbot using HuggingFace Transformers and Gemini API capable of processing both text and images with context-aware responses. Designed a responsive React.js UI with real-time image rendering for educational and support-focused applications.",
      technologies: ["HuggingFace", "Gemini API", "React.js", "JavaScript"],
      gradient: "from-cyan-600 to-pink-600",
      borderColor: "border-cyan-400/30",
      github: "https://github.com/ShahPooja25/CHATBOT",
      live: "https://smartaibotpooja.netlify.app/",
      images: [
        "/smartai1.png",
      ],
    },
  ]

  // Track current image index for each project
  const [currentImage, setCurrentImage] = useState({})

  const handleNextImage = (index, total) => {
    setCurrentImage((prev) => ({
      ...prev,
      [index]: prev[index] + 1 < total ? prev[index] + 1 : 0,
    }))
  }

  const handlePrevImage = (index, total) => {
    setCurrentImage((prev) => ({
      ...prev,
      [index]: prev[index] - 1 >= 0 ? prev[index] - 1 : total - 1,
    }))
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10">
      <div className="max-w-6xl w-full z-20">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const current = currentImage[index] || 0
            return (
              <div
                key={index}
                className={`rounded-xl overflow-hidden border ${project.borderColor} hover:border-opacity-100 transition-all hover:shadow-lg hover:shadow-purple-500/30 bg-slate-900/60 backdrop-blur-sm`}
              >
                {/* Image Carousel */}
                <div className="relative w-full h-64 md:h-72 overflow-hidden group">
                  <img
                    src={project.images[current]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  {/* Arrows */}
                  <button
                    onClick={() =>
                      handlePrevImage(index, project.images.length)
                    }
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() =>
                      handleNextImage(index, project.images.length)
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-2 right-3 bg-black/50 text-xs text-white px-2 py-1 rounded-lg">
                    {current + 1}/{project.images.length}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-5">
                  <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    {project.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/10 text-white text-sm border border-white/30 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-purple-300 transition"
                      >
                        <Github size={20} /> Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-purple-300 transition"
                      >
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
