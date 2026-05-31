type SectionHeadingProps = {
  number: string;
  label: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  number,
  label,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p
        className={`mb-2 font-mono text-xs tracking-wide ${
          light ? "text-[var(--color-accent-light)]/70" : "text-[var(--color-muted)]"
        }`}
      >
        {number} · {label}
      </p>
      <h2
        className={`font-[family-name:var(--font-fraunces)] text-3xl font-semibold leading-snug tracking-tight sm:text-4xl ${
          light ? "text-[var(--color-surface)]" : "text-[var(--color-foreground)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 max-w-xl text-base leading-relaxed ${
            light ? "text-[var(--color-accent-light)]" : "text-[var(--color-muted)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
