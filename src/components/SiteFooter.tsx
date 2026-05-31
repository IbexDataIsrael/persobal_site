import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-8">
      <div className="site-container-wide flex flex-col gap-2 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {profile.name}
        </p>
        <p className="text-xs">Built with Next.js</p>
      </div>
    </footer>
  );
}
