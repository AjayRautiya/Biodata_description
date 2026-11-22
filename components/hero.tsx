import { profile } from '@/lib/profile'

export function Hero() {
  return (
    <header className="flex flex-col gap-8 pb-16 pt-20 md:pt-28">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-700">
        {profile.role} · {profile.location}
      </p>
      <h1 className="text-balance text-5xl font-semibold tracking-tight text-blue-900 md:text-7xl">
        {profile.name}
      </h1>
      <div className="flex max-w-2xl flex-col gap-3 text-lg leading-relaxed text-blue-800">
        {profile.summary.map((line) => (
          <p key={line} className="text-pretty">
            {line}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-blue-800 px-5 py-2.5 text-sm font-medium text-blue-50 transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
        >
          Email me
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-blue-400 px-5 py-2.5 text-sm font-medium text-blue-800 transition-colors hover:bg-blue-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
        >
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-blue-400 px-5 py-2.5 text-sm font-medium text-blue-800 transition-colors hover:bg-blue-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}
