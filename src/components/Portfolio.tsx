"use client";

import { motion } from "framer-motion";
import { portfolioItems } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Portfolio() {
  return (
    <section id="portfolio" className="section-rule bg-[var(--color-surface-muted)] py-16 sm:py-24">
      <div className="site-container-wide">
        <SectionHeading
          number="04"
          label="Portfolio"
          title="Selected work"
          description="Case studies and live demos coming soon."
        />

        <div className="space-y-4">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="card border-l-4 border-l-[var(--color-accent)] p-6 sm:p-8"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-[var(--color-muted)]">
                    0{i + 1} · Coming soon
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-xl font-medium text-[var(--color-foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>

                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary shrink-0 text-xs"
                  >
                    View project
                  </a>
                ) : (
                  <span className="shrink-0 text-xs text-[var(--color-muted)]">
                    Link available soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
