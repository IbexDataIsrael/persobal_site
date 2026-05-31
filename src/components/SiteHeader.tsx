"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = navLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      onClick={() => setMenuOpen(false)}
      className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] lg:block"
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-background)]/95 px-5 py-4 backdrop-blur-sm lg:hidden">
        <a
          href="#"
          className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-[var(--color-foreground)]"
        >
          Zvi Naiman
        </a>
        <button
          type="button"
          className="text-[var(--color-foreground)]"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-background)] px-5 pt-24 lg:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-fraunces)] text-2xl font-medium text-[var(--color-foreground)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 text-sm text-[var(--color-accent)]"
              onClick={() => setMenuOpen(false)}
            >
              {profile.email}
            </a>
          </nav>
        </div>
      )}

      <aside className="sticky top-0 hidden h-screen flex-col border-r border-[var(--color-border)] bg-[var(--color-surface-muted)] px-8 py-10 lg:flex">
        <a href="#" className="group block">
          <span className="block font-[family-name:var(--font-fraunces)] text-xl font-semibold leading-tight text-[var(--color-foreground)]">
            Zvi
            <br />
            Naiman
          </span>
          <span className="mt-2 block text-xs leading-relaxed text-[var(--color-muted)]">
            Senior Full Stack Developer
          </span>
        </a>

        <nav className="mt-12 flex flex-col gap-4">{navItems}</nav>

        <div className="mt-auto space-y-3 border-t border-[var(--color-border)] pt-8">
          <a
            href={`mailto:${profile.email}`}
            className="block text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            {profile.email}
          </a>
          <a
            href="#contact"
            className="btn-primary w-full justify-center text-xs"
          >
            Get in touch
          </a>
        </div>
      </aside>
    </>
  );
}
