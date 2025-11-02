"use client"

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10">
      <div className="max-w-6xl w-full z-20">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ✅ Image Section */}
          <div className="flex justify-center items-center">
            <div className="relative w-full h-80 md:h-108">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-2xl" />
              <img
                src="/pooja_portfolio.jpg" // ✅ image should be in the public folder
                alt="Pooja Shah"
                className="relative w-full h-full object-cover rounded-2xl border-2 border-cyan-400/40 shadow-2xl shadow-blue-500/30"
              />
            </div>
          </div>

          {/* ✅ About Text */}
          <div className="space-y-10">
            {/* Description */}
            <div className="space-y-6 text-white text-lg leading-relaxed drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <p>
                I’m a{" "}
                <span className="font-semibold text-purple-300">
                  Passionate Machine Learning Engineer and Full Stack Developer
                </span>{" "}
                with hands-on expertise in the{" "}
                <span className="text-blue-300">MERN Stack, SQL and Artificial Intelligence</span>
                . I specialize in designing and deploying
                end-to-end machine learning pipelines, encompassing data engineering, model training, and deployment.
              </p>

              <p>
                My work focuses on transforming complex, unstructured datasets into actionable, scalable solutions 
                bridging the gap between AI research and real-world applications. I enjoy crafting intelligent systems
                that make data-driven decision-making effortless.
              </p>

              <p>
                Beyond development, I’m deeply curious about innovation in AI, open-source collaboration, and
                staying ahead of emerging technologies that shape the future of intelligent systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
