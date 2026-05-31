"use client";

import { motion } from "framer-motion";
import { techStacks } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function TechStack() {
  return (
    <section id="stack" className="section-rule py-16 sm:py-24">
      <div className="site-container-wide">
        <SectionHeading
          number="03"
          label="Stack"
          title="Technologies"
          description="From legacy modernization to greenfield microservices."
        />

        <div className="space-y-6">
          {techStacks.map((stack, i) => (
            <motion.div
              key={stack.category}
              className="grid gap-3 border-b border-[var(--color-border)] pb-6 last:border-0 last:pb-0 sm:grid-cols-[8rem_1fr] sm:gap-8"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <h3 className="text-sm font-semibold text-[var(--color-accent)]">
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
