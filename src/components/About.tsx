"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-rule py-16 sm:py-24">
      <div className="site-container-wide">
        <SectionHeading
          number="01"
          label="About"
          title="Building systems organizations rely on"
          description="Enterprise discipline — architecture, delivery, and teams that ship."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            className="space-y-5"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            {profile.summary.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-[1.75] text-[var(--color-muted)] first:text-[var(--color-foreground)]"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="card p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
                Education
              </p>
              <p className="mt-2 font-medium text-[var(--color-foreground)]">
                {profile.education.degree}
              </p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {profile.education.institution}
              </p>
            </div>

            <div className="card p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
                Languages
              </p>
              <ul className="mt-2 space-y-1">
                {profile.languages.map((lang) => (
                  <li key={lang} className="text-sm text-[var(--color-foreground)]">
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
