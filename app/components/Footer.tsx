"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 py-8 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 text-[var(--foreground-secondary)]">
        <p>&copy; {currentYear} Jacob Wei. All rights reserved.</p>
      </div>
    </footer>
  );
}
