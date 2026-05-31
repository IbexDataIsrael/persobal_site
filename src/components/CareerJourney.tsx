"use client";

import { motion } from "framer-motion";
import { career } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function CareerJourney() {
  return (
    <section id="journey" className="section-rule bg-[var(--color-surface-muted)] py-16 sm:py-24">
      <div className="site-container-wide">
        <SectionHeading
          number="02"
          label="Experience"
          title="Career history"
          description="Public sector, enterprise, and product delivery — from integrations to technical leadership."
        />

        <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {career.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.period}`}
              className="grid gap-4 py-8 sm:grid-cols-[9rem_1fr] sm:gap-8"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <div>
                <time className="font-mono text-xs text-[var(--color-muted)]">{role.period}</time>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-medium text-[var(--color-foreground)]">
                  {role.company}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-accent)]">{role.role}</p>

                {role.highlight && (
                  <p className="mt-3 text-sm font-medium text-[var(--color-foreground)]">
                    {role.highlight}
                  </p>
                )}

                <ul className="mt-4 space-y-2">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--color-muted)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
