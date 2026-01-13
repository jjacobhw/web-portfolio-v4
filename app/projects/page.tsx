"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    color: "from-orange-400 to-pink-500",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with drag-and-drop and real-time updates.",
    tags: ["React", "Socket.io", "MongoDB"],
    color: "from-blue-400 to-purple-500",
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts and interactive maps.",
    tags: ["React", "Mapbox", "OpenWeather"],
    color: "from-green-400 to-cyan-500",
  },
  {
    title: "API Gateway",
    description:
      "Lightweight API gateway with rate limiting, authentication, and request transformation.",
    tags: ["Go", "Redis", "Docker"],
    color: "from-yellow-400 to-orange-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <main className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[var(--accent)] font-medium mb-4">Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold">Things I&apos;ve built</h1>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl overflow-hidden border border-[var(--border-color)] hover:border-transparent transition-all hover:shadow-2xl"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />

              <div className="relative p-8">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} mb-6`}
                />
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                <p className="text-[var(--foreground-secondary)] mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-[var(--accent-secondary)] text-[var(--foreground-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 px-6 border-t border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto text-center text-[var(--foreground-secondary)]">
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
