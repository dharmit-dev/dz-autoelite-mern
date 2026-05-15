import { Star } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const testimonials = [
  ['Aarav Mehta', 'Founder, SaaS operator', 'DZ AutoElite felt less like a dealer and more like a private buying desk. The inspection report and finance clarity made the decision easy.'],
  ['Naina Rao', 'Architect', 'I shortlisted three cars online, visited once, and drove home in a pristine Mercedes. Every promise matched the paperwork.'],
  ['Kabir Sethi', 'Product manager', 'The buying experience was polished without being pushy. Their team knew the car history better than most new-car showrooms.'],
]

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader align="center" eyebrow="Customer voices" title="Premium experience, not premium anxiety." description="Realistic concierge moments built around clarity, documentation, and confidence." />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map(([name, role, quote]) => (
          <article key={name} className="premium-ring rounded-lg bg-panel p-6 transition duration-300 hover:-translate-y-1">
            <div className="mb-5 flex text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
            <p className="leading-7 text-platinum">"{quote}"</p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-muted">{role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
