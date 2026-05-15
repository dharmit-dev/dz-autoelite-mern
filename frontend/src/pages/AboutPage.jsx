import { motion } from 'framer-motion'
import {
  Award,
  ClipboardCheck,
  Handshake,
  ShieldCheck,
  Sparkles,
  Users,
  Car,
  Star,
  Headphones,
  BadgeCheck,
} from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import SectionHeader from '../components/ui/SectionHeader'

const principles = [
  [
    ShieldCheck,
    'Trust story',
    'Every listing is backed by ownership checks, verified service records, and transparent condition notes before reaching a buyer.',
  ],
  [
    ClipboardCheck,
    'Inspection philosophy',
    'Mechanical inspection, road testing, paint assessment, and refurbishment transparency are combined into one clear buyer-friendly report.',
  ],
  [
    Handshake,
    'Customer-first approach',
    'A dedicated specialist helps compare options, coordinate visits, explain pricing, and simplify the entire buying journey.',
  ],
]

const highlights = [
  {
    icon: Car,
    value: '500+',
    label: 'Cars delivered',
  },
  {
    icon: Star,
    value: '98%',
    label: 'Buyer satisfaction',
  },
  {
    icon: BadgeCheck,
    value: '214',
    label: 'Inspection checkpoints',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'Concierge support',
  },
]

const featureCards = [
  {
    icon: ShieldCheck,
    title: 'Certified selection',
    text: 'Every vehicle passes ownership verification, document checks, and a multi-point quality screening before listing.',
  },
  {
    icon: Award,
    title: 'Premium standards',
    text: 'Only vehicles meeting strict condition, mileage, and maintenance benchmarks are approved for our inventory.',
  },
  {
    icon: Users,
    title: 'Concierge guidance',
    text: 'Dedicated experts help buyers compare cars, understand pricing, and navigate documentation without pressure.',
  },
  {
    icon: Sparkles,
    title: 'Showroom-grade delivery',
    text: 'Every handover is prepared with detailing, verification, and a polished premium customer experience.',
  },
]

const team = [
  {
    name: 'Rhea Kapoor',
    role: 'Founder',
    image: '/team/founder.png',
    bio: 'Luxury retail strategist building a calmer, more transparent premium pre-owned buying experience.',
  },
  {
    name: 'Imran Shah',
    role: 'Inspection Director',
    image: '/team/inspection-director.png',
    bio: 'Former OEM service trainer leading inspection quality, mechanical checks, and refurbishment standards.',
  },
  {
    name: 'Devika Menon',
    role: 'Customer Experience Lead',
    image: '/team/customer-experience.png',
    bio: 'Concierge specialist focused on smooth shortlisting, paperwork coordination, and premium customer support.',
  },
]

export default function AboutPage() {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1800&q=80"
          alt="DZ AutoElite studio"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />

        <div className="relative mx-auto max-w-7xl px-4 py-28 text-white sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">
            About DZ AutoElite
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Premium pre-owned, built on inspection-led trust.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            A premium dealership experience where verified history, transparent
            pricing, expert inspections, and concierge guidance come together.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/8 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
          {highlights.map((item) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass flex items-center gap-4 rounded-xl p-5"
              >
                <Icon className="text-gold" size={28} />
                <div>
                  <p className="text-2xl font-bold text-platinum">{item.value}</p>
                  <p className="text-sm text-muted">{item.label}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* COMPANY VISION */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeader
          eyebrow="Company vision"
          title="Redefining trust in premium pre-owned cars."
          description="DZ AutoElite was created for buyers who want premium vehicles without unclear histories, rushed decisions, or hidden compromises. Every listing is curated for transparency and confidence."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {featureCards.map((card, index) => {
            const Icon = card.icon

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="premium-ring rounded-lg bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/8"
              >
                <Icon className="mb-5 text-gold" size={32} />
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {card.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-white/[0.035] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Operating principles"
            title="Trust is designed into the buying journey."
            description="A premium experience is not just how the showroom looks. It is how confidently a buyer understands the car before making a decision."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map(([Icon, title, text]) => (
              <article
                key={title}
                className="glass rounded-lg p-7 transition duration-300 hover:-translate-y-1"
              >
                <Icon className="mb-5 text-gold" size={34} />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Leadership"
          title="Specialists behind the selection."
          description="A focused team across sourcing, inspection, documentation, and premium customer experience."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="premium-ring overflow-hidden rounded-lg bg-panel transition duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                />

                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                  {member.role}
                </p>

                <h3 className="mt-2 text-2xl font-semibold">{member.name}</h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {member.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}