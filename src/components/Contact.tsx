"use client";

import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--color-accent)] py-16 sm:py-24">
      <div className="site-container-wide">
        <SectionHeading
          number="05"
          label="Contact"
          title="Let's talk"
          description="Open to senior engineering roles, technical leadership, and challenging enterprise work."
          light
        />

        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="block rounded-md border border-white/20 bg-white/10 p-6 transition-colors hover:bg-white/15"
          >
            <span className="block text-xs text-[var(--color-accent-light)]">Email</span>
            <span className="mt-2 block text-sm font-medium text-[var(--color-surface)]">
              {profile.email}
            </span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/-/g, "")}`}
            className="block rounded-md border border-white/20 bg-white/10 p-6 transition-colors hover:bg-white/15"
          >
            <span className="block text-xs text-[var(--color-accent-light)]">Phone</span>
            <span className="mt-2 block text-sm font-medium text-[var(--color-surface)]">
              {profile.phone}
            </span>
          </a>
          <div className="rounded-md border border-white/20 bg-white/10 p-6">
            <p className="text-xs text-[var(--color-accent-light)]">Location</p>
            <p className="mt-2 text-sm font-medium text-[var(--color-surface)]">
              {profile.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
