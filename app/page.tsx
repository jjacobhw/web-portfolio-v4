"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="text-[var(--foreground-secondary)] text-lg mb-6"
          >
            Hi, I&apos;m Jacob
          </motion.p>
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            I build{" "}
            <span className="gradient-text">digital experiences</span>
            <br />
            that people love
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto mb-12"
          >
            A software engineer passionate about creating elegant solutions to
            complex problems. Currently crafting amazing products at TechCorp.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg font-medium bg-[var(--foreground)] text-[var(--background)] rounded-xl hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
            <a
              href="#about"
              className="px-8 py-4 text-lg font-medium border-2 border-[var(--border-color)] rounded-xl hover:border-[var(--foreground-secondary)] transition-colors"
            >
              Learn more
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.p variants={item} className="text-[var(--accent)] font-medium mb-4">
                About me
              </motion.p>
              <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-6">
                Turning ideas into reality through code
              </motion.h2>
              <motion.div variants={item} className="space-y-4 text-lg text-[var(--foreground-secondary)]">
                <p>
                  I&apos;m a software engineer with 5+ years of experience building
                  web applications. I specialize in React, TypeScript, and Node.js,
                  with a passion for creating intuitive user experiences.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me hiking trails, reading
                  sci-fi novels, or experimenting with new recipes in the kitchen.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] p-1">
                <div className="w-full h-full rounded-3xl bg-[var(--background)] flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-8 px-6 border-t border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto text-center text-[var(--foreground-secondary)]">
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
