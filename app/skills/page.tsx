"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go"] },
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "GraphQL"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes"] },
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

const categoryVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

export default function Skills() {
  return (
    <main className="min-h-screen pt-24 px-6 flex flex-col">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[var(--accent)] font-medium mb-4">Skills</p>
          <h1 className="text-4xl md:text-5xl font-bold">My toolkit</h1>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={categoryVariant}>
              <h2 className="text-lg font-bold mb-4 text-[var(--foreground-secondary)]">
                {skill.category}
              </h2>
              <motion.div
                className="space-y-3"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {skill.items.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={skillItem}
                    whileHover={{ x: 5 }}
                    className="px-4 py-3 bg-[var(--background)] rounded-xl border border-[var(--border-color)] font-medium hover:border-[var(--foreground-secondary)] transition-colors cursor-default"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-8 px-6 border-t border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto text-center text-[var(--foreground-secondary)]">
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
