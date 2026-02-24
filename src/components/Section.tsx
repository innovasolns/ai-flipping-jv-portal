interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({
  children,
  title,
  subtitle,
  className = "",
  id,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-4 py-16 sm:px-6 sm:py-20 lg:py-24 ${
        dark ? "bg-surface" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        {title && (
          <div className="mb-12 text-center">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
