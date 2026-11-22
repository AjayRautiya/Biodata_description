export function Section({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="grid gap-4 border-t border-blue-300 py-12 md:grid-cols-[180px_1fr] md:gap-10"
    >
      <h2
        id={`${id}-heading`}
        className="font-mono text-xs uppercase tracking-[0.2em] text-blue-700"
      >
        {label}
      </h2>
      <div>{children}</div>
    </section>
  )
}
