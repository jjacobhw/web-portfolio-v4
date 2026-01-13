"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    color: "from-orange-400 to-pink-500",
    featured: true,
    rank: 1,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with drag-and-drop and real-time updates.",
    tags: ["React", "Socket.io", "MongoDB"],
    color: "from-blue-400 to-purple-500",
    featured: true,
    rank: 2,
  },
  {
    title: "AI-Powered Analytics",
    description:
      "Machine learning platform for predictive analytics and data visualization with real-time insights.",
    tags: ["Python", "TensorFlow", "React"],
    color: "from-purple-400 to-pink-500",
    featured: true,
    rank: 3,
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts and interactive maps.",
    tags: ["React", "Mapbox", "OpenWeather"],
    color: "from-green-400 to-cyan-500",
    featured: false,
    rank: 4,
  },
  {
    title: "API Gateway",
    description:
      "Lightweight API gateway with rate limiting, authentication, and request transformation.",
    tags: ["Go", "Redis", "Docker"],
    color: "from-yellow-400 to-orange-500",
    featured: false,
    rank: 5,
  },
  {
    title: "Social Media Dashboard",
    description:
      "Multi-platform social media management tool with scheduling and analytics features.",
    tags: ["Vue.js", "Node.js", "PostgreSQL"],
    color: "from-cyan-400 to-blue-500",
    featured: false,
    rank: 6,
  },
  {
    title: "Portfolio Builder",
    description:
      "Easy-to-use portfolio builder with customizable templates and drag-and-drop interface.",
    tags: ["React", "Firebase", "Tailwind"],
    color: "from-pink-400 to-rose-500",
    featured: false,
    rank: 7,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured).sort((a, b) => a.rank - b.rank);
  const otherProjects = projects.filter((p) => !p.featured).sort((a, b) => a.rank - b.rank);

  const FeaturedProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <motion.div
      key={index}
      variants={item}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-3xl overflow-hidden border-2 border-[var(--border-color)] hover:border-transparent transition-all hover:shadow-2xl"
    >
      {/* Enhanced gradient background for featured projects */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-20 transition-opacity`}
      />

      {/* Featured badge */}
      <div className="absolute top-6 right-6 z-10">
        <span className={`px-4 py-2 text-xs font-bold rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg`}>
          TOP {project.rank}
        </span>
      </div>

      <div className="relative p-10">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} mb-8 shadow-lg`}
        />
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-[var(--foreground-secondary)] text-lg mb-8 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm font-medium rounded-full bg-[var(--accent-secondary)] text-[var(--foreground-secondary)] hover:bg-[var(--border-color)] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <motion.div
      key={index}
      variants={item}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl overflow-hidden border border-[var(--border-color)] hover:border-transparent transition-all hover:shadow-xl"
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
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[var(--accent)] font-medium mb-4">Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold">Things I&apos;ve built</h1>
          <p className="text-[var(--foreground-secondary)] mt-4 text-lg">
            Showcasing my top projects and recent work
          </p>
        </motion.div>

        {/* Top Featured Projects - Hierarchy Structure */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full" />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>

          {/* First featured project - Full width, most prominent */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mb-8"
          >
            {featuredProjects.slice(0, 1).map((project, index) => (
              <FeaturedProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>

          {/* Second and third featured projects - Side by side */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {featuredProjects.slice(1, 3).map((project, index) => (
              <FeaturedProjectCard key={index + 1} project={project} index={index + 1} />
            ))}
          </motion.div>
        </motion.div>

        {/* Other Projects Section */}
        {otherProjects.length > 0 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-[var(--foreground-secondary)] to-transparent rounded-full" />
              <h2 className="text-2xl font-bold">Other Projects</h2>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  );
}
