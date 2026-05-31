"use client";

import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";

const stats = [
  { label: "Experience", value: "15+ years" },
  { label: "Focus", value: ".NET & Angular" },
  { label: "Location", value: profile.location },
  { label: "Languages", value: "EN · HE" },
] as const;

export function Hero() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="site-container-wide py-16 sm:py-24">
        <div>
          <p className="mb-6 text-sm text-[var(--color-muted)]">
            Available for senior engineering & leadership roles
          </p>

          <h1 className="max-w-lg font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.15] tracking-tight text-[var(--color-foreground)] sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--color-muted)]">
            {profile.title}. {profile.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#journey" className="btn-primary">
              View experience
              <ArrowRight size={16} />
            </a>
            <a href="/CV.pdf" download className="btn-secondary">
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="bg-[var(--color-surface-muted)] px-5 py-4">
              <p className="text-xs text-[var(--color-muted)]">{item.label}</p>
              <p className="mt-1 text-sm font-medium text-[var(--color-foreground)]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
