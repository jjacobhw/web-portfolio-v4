"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    color: "from-orange-400 to-pink-500",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with drag-and-drop and real-time updates.",
    tags: ["React", "Socket.io", "MongoDB"],
    color: "from-blue-400 to-purple-500",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts and interactive maps.",
    tags: ["React", "Mapbox", "OpenWeather"],
    color: "from-green-400 to-cyan-500",
    featured: false,
  },
  {
    title: "API Gateway",
    description:
      "Lightweight API gateway with rate limiting, authentication, and request transformation.",
    tags: ["Go", "Redis", "Docker"],
    color: "from-yellow-400 to-orange-500",
    featured: false,
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
  const [showOtherProjects, setShowOtherProjects] = useState(false);
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
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
  );

  return (
    <main className="min-h-screen pt-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[var(--accent)] font-medium mb-4">Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold">Things I&apos;ve built</h1>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Other Projects Dropdown */}
        {otherProjects.length > 0 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => setShowOtherProjects(!showOtherProjects)}
              className="flex items-center gap-3 text-xl font-bold mb-6 hover:text-[var(--accent)] transition-colors"
            >
              <span>Other Projects</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ rotate: showOtherProjects ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <polyline points="6 9 12 15 18 9" />
              </motion.svg>
            </button>

            <AnimatePresence>
              {showOtherProjects && (
                <motion.div
                  className="grid md:grid-cols-2 gap-8"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {otherProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <ProjectCard project={project} index={index} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  );
}
