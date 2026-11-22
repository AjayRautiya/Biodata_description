import { Hero } from '@/components/hero'
import {
  Contact,
  Education,
  Experience,
  Projects,
  Skills,
  WhyItMatters,
} from '@/components/profile-sections'
import { profile } from '@/lib/profile'

export default function Page() {
  return (
    <div className="min-h-screen bg-blue-100 text-blue-900">
      <main className="mx-auto max-w-4xl px-6">
        <Hero />
        <WhyItMatters />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="mx-auto max-w-4xl border-t border-blue-300 px-6 py-8 text-sm text-blue-700">
        Made by {profile.name}
      </footer>
    </div>
  )
}
