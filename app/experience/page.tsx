"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";

const experiences = [
  {
    title: "Undergraduate Researcher",
    company: "AIEA Lab",
    period: "January 2026 - Present",
    location: "Santa Cruz, CA",
    description:
      "",
  },
  {
    title: "ML Engineer",
    company: "Inference.ai",
    period: "June 2025 - Sept. 2025",
    location: "Palo Alto, CA",
    description:
      "Freelance",
  },
  {
    title: "Data & Automation Intern",
    company: "Healthcare Practice IT",
    period: "June 2024 - Sept. 2024",
    location: "Orange County, CA",
    description:
      "",
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of California, Santa Cruz",
    period: "Sept. 2023 - June 2027",
    description:
      "",
  },
];

const techStack = {
  languages: ["Python", "TypeScript", "JavaScript", "C++", "C", "HTML", "LaTeX"],
  frameworks: ["React", "Next.js", "Node.js", "TailwindCSS", "FastAPI", "Flask"],
  ml: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Hugging Face"],
  tools: ["Docker", "GitHub", "Linux", "Nvidia H100/A100"],
  
};

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
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Experience() {
  const TimelineItem = ({
    title,
    subtitle,
    period,
    location,
    description,
    index,
  }: {
    title: string;
    subtitle: string;
    period: string;
    location?: string;
    description: string;
    index: number;
  }) => (
    <motion.div variants={item} className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[var(--accent)] shadow-lg" />

      {/* Timeline line */}
      <div className="absolute left-[7px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] to-transparent last:hidden" />

      {/* Content card */}
      <motion.div
        whileHover={{ x: 5 }}
        className="bg-[var(--background)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--accent)] transition-all hover:shadow-xl"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
          <div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-[var(--accent)] font-medium">{subtitle}</p>
          </div>
          <div className="text-right">
            <span className="text-[var(--foreground-secondary)] font-mono text-sm whitespace-nowrap">
              {period}
            </span>
            {location && (
              <p className="text-[var(--foreground-secondary)] text-sm mt-1">{location}</p>
            )}
          </div>
        </div>
        <p className="text-[var(--foreground-secondary)] leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
          <p className="text-[var(--foreground-secondary)] text-lg max-w-2xl">
          </p>
        </motion.div>

        {/* Dual Timeline Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-1 w-12 bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full" />
              <h2 className="text-3xl font-bold">Professional</h2>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative"
            >
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  title={exp.title}
                  subtitle={exp.company}
                  period={exp.period}
                  location={exp.location}
                  description={exp.description}
                  index={index}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-1 w-12 bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative"
            >
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  title={edu.school}
                  subtitle={edu.degree}
                  period={edu.period}
                  description={edu.description}
                  index={index}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-1 w-12 bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full" />
            <h2 className="text-3xl font-bold">Tech Stack</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, skills], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                className="bg-[var(--background)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--accent)] transition-all"
              >
                <h3 className="text-lg font-semibold mb-4 capitalize text-[var(--accent)]">
                  {category === "ml" ? "AI/ML" : category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-[var(--hover-bg)] rounded-lg text-[var(--foreground-secondary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
