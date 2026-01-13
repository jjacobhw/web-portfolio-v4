"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Leading development of microservices architecture serving 1M+ daily users. Mentoring junior developers and implementing CI/CD pipelines.",
  },
  {
    title: "Software Engineer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description:
      "Built React-based dashboard applications and developed RESTful APIs using Node.js and Express.",
  },
  {
    title: "Junior Developer",
    company: "WebAgency",
    period: "2019 - 2020",
    description:
      "Developed client websites using modern web technologies and participated in agile development processes.",
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    period: "2017 - 2019",
    description:
      "Specialized in distributed systems and machine learning. Thesis on optimizing microservices communication patterns.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of California, Berkeley",
    period: "2013 - 2017",
    description:
      "Graduated with honors. Focused on software engineering and algorithms. Active member of the coding club.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <main className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Education Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[var(--accent)] font-medium mb-4">Education</p>
          <h1 className="text-4xl md:text-5xl font-bold">Where I&apos;ve studied</h1>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-[var(--background)] rounded-2xl p-8 border border-[var(--border-color)] hover:border-[var(--foreground-secondary)] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{edu.degree}</h2>
                  <p className="text-[var(--accent)] font-medium">{edu.school}</p>
                </div>
                <span className="text-[var(--foreground-secondary)] font-mono text-sm">
                  {edu.period}
                </span>
              </div>
              <p className="text-[var(--foreground-secondary)] text-lg">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="text-center mb-16 mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[var(--accent)] font-medium mb-4">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold">Where I&apos;ve worked</h2>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-[var(--background)] rounded-2xl p-8 border border-[var(--border-color)] hover:border-[var(--foreground-secondary)] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{exp.title}</h2>
                  <p className="text-[var(--accent)] font-medium">{exp.company}</p>
                </div>
                <span className="text-[var(--foreground-secondary)] font-mono text-sm">
                  {exp.period}
                </span>
              </div>
              <p className="text-[var(--foreground-secondary)] text-lg">
                {exp.description}
              </p>
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
