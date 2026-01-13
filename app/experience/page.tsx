"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";

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
    title: "Data & Automation Intern",
    company: "Healthcare Practice IT",
    period: "June 2024 - September 2024",
    description:
      "Developed client websites using modern web technologies and participated in agile development processes.",
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    period: "2027 - 2029",
    description:
      "Specialized in distributed systems and machine learning. Thesis on optimizing microservices communication patterns.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of California, Santa Cruz",
    period: "September 2023 - June 2027",
    description:
      "Graduated with honors. Focused on software engineering and algorithms. Active member of the coding club.",
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
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Experience() {
  const TimelineItem = ({
    title,
    subtitle,
    period,
    description,
    index,
  }: {
    title: string;
    subtitle: string;
    period: string;
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
          <span className="text-[var(--foreground-secondary)] font-mono text-sm whitespace-nowrap">
            {period}
          </span>
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
      </div>

      <Footer />
    </main>
  );
}
