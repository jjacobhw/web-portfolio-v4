"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 py-8 px-6 md:px-16 lg:px-24 border-t border-[var(--border-color)]">
      <div className="max-w-6xl text-[var(--foreground-secondary)]">
        <p>&copy; {currentYear} Jacob Wei. All rights reserved.</p>
      </div>
    </footer>
  );
}
