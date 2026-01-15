"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[var(--background)]/80 backdrop-blur-lg border-[var(--border-color)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side - Resume Button (Desktop) & Mobile Menu Button */}
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--hover-bg)] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[var(--foreground)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Resume Button - Desktop */}
          <a
            href="https://drive.google.com/file/d/1uXJ_iz17oABK1PK_JYPsvV4-u4xbebym/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-4 py-2 text-sm font-medium bg-[var(--foreground)] text-[var(--background)] rounded-lg hover:opacity-90 transition-all"
          >
            Resume
          </a>
        </div>

        {/* Nav Links - Desktop (Centered) */}
        <div className="hidden md:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-base transition-colors relative ${
                pathname === item.href
                  ? "text-[var(--foreground)]"
                  : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <motion.span
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-[var(--accent)] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg border border-[var(--border-color)] hover:bg-[var(--accent-secondary)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg
                className="w-5 h-5 text-[var(--foreground)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-[var(--foreground)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[var(--background)] border-b border-[var(--border-color)]"
        >
          <div className="px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-base rounded-lg transition-colors ${
                  pathname === item.href
                    ? "text-[var(--foreground)] bg-[var(--hover-bg)]"
                    : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--hover-bg)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
