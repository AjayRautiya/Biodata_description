import { Section } from '@/components/section'
import { education, experience, profile, projects, skills } from '@/lib/profile'

export function WhyItMatters() {
  return (
    <Section id="why" label="Why it matters">
      <p className="text-pretty text-2xl font-medium leading-snug text-blue-800 md:text-3xl">
        {profile.whyItMatters}
      </p>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="flex flex-col divide-y divide-blue-200">
        {experience.map((job) => (
          <li
            key={`${job.title}-${job.company}`}
            className="flex flex-col gap-1 py-4 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div>
              <p className="font-medium text-blue-900">{job.title}</p>
              <p className="text-sm text-blue-800">{job.company}</p>
            </div>
            <p className="shrink-0 font-mono text-xs text-blue-700">{job.period}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <div className="flex flex-col gap-8">
        {skills.map((group) => (
          <div key={group.group} className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-blue-900">{group.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-blue-200 px-3 py-1 text-sm text-blue-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="flex flex-col gap-3">
        {projects.map((project) => (
          <li key={project} className="text-lg text-blue-800">
            {project}
          </li>
        ))}
      </ul>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm font-medium text-blue-900 underline underline-offset-4 hover:text-blue-800"
      >
        See more on GitHub
      </a>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" label="Education">
      <ul className="flex flex-col gap-5">
        {education.map((item) => (
          <li key={item.title} className="flex flex-col gap-0.5">
            <p className="font-medium text-blue-900">{item.title}</p>
            <p className="text-sm text-blue-800">
              {item.place} · <span className="font-mono text-xs">{item.period}</span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Contact() {
  return (
    <Section id="contact" label="Read more">
      <dl className="grid gap-4 sm:grid-cols-[100px_1fr]">
        <dt className="text-sm text-blue-700">Email</dt>
        <dd>
          <a href={`mailto:${profile.email}`} className="text-blue-900 underline underline-offset-4 hover:text-blue-800">
            {profile.email}
          </a>
        </dd>
        <dt className="text-sm text-blue-700">LinkedIn</dt>
        <dd>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="break-all text-blue-900 underline underline-offset-4 hover:text-blue-800">
            linkedin.com/in/ajay-rautiya
          </a>
        </dd>
        <dt className="text-sm text-blue-700">GitHub</dt>
        <dd>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="break-all text-blue-900 underline underline-offset-4 hover:text-blue-800">
            github.com/AjayRautiya
          </a>
        </dd>
      </dl>
    </Section>
  )
}
