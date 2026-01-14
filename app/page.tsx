"use client";

import { motion } from "framer-motion";
import Footer from "./components/Footer";

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
      <section className="min-h-screen flex flex-col justify-center pt-20">
        <motion.div
          className="max-w-7xl mx-auto px-6 w-full"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="text-[var(--foreground-secondary)] text-base mb-8 font-medium"
          >
            Hi, I&apos;m Jacob
          </motion.p>
          <motion.h1
            variants={item}
            className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
          >
            I build{" "}
            <span className="gradient-text">digital experiences</span>
            <br />
            that people love
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-[var(--foreground-secondary)] max-w-2xl mb-12 leading-relaxed"
          >
            A software engineer passionate about creating elegant solutions to
            complex problems. Currently crafting amazing products at TechCorp.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-[var(--foreground)] text-[var(--background)] rounded-lg hover:opacity-90 transition-all shadow-sm hover:shadow-md"
            >
              Resume
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-[var(--border-color)] rounded-lg hover:bg-[var(--hover-bg)] transition-all"
            >
              Learn more
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.p variants={item} className="text-[var(--foreground-secondary)] text-sm font-medium mb-6 uppercase tracking-wide">
                About me
              </motion.p>
              <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
                Turning ideas into reality through code
              </motion.h2>
              <motion.div variants={item} className="space-y-6 text-base md:text-lg text-[var(--foreground-secondary)] leading-relaxed">
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
              <motion.div variants={item} className="flex flex-wrap gap-3 mt-10">
                <a
                  href="https://github.com/jjacobhw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[var(--foreground)] hover:opacity-60 transition-opacity"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/jacob-wei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[var(--foreground)] hover:opacity-60 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://devpost.com/jacobhwei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[var(--foreground)] hover:opacity-60 transition-opacity"
                  aria-label="Devpost"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853h-1.336z"/>
                  </svg>
                </a>
                <a
                  href="nowei.4102004@gmail.com"
                  className="p-2.5 text-[var(--foreground)] hover:opacity-60 transition-opacity"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/jacobhwei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[var(--foreground)] hover:opacity-60 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://open.spotify.com/user/tfqoqe1ernnp5a6vvas32mcw1?si=506afe1b7ef542f1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[var(--foreground)] hover:opacity-60 transition-opacity"
                  aria-label="Spotify"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="aspect-square rounded-2xl border border-[var(--border-color)] bg-[var(--background)] flex items-center justify-center shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
