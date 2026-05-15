import { Banknote, CarFront, FileCheck2, Handshake, ShieldCheck } from 'lucide-react'
import { useEffect, useState } from 'react'
import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import Testimonials from '../components/home/Testimonials'
import SectionHeader from '../components/ui/SectionHeader'
import CarCard from '../components/cars/CarCard'
import Button from '../components/ui/Button'
import PageTransition from '../components/ui/PageTransition'
import { CarCardSkeleton } from '../components/ui/LoadingSkeleton'
import { getCars } from '../services/carService'
import { emiFromPrice, formatCurrency } from '../utils/formatters'

const trust = [
  [ShieldCheck, 'Certified vehicles', 'Every vehicle passes a 214-point inspection with paint, mechanical, and history checks.'],
  [FileCheck2, 'Verified ownership', 'RC status, loan clearance, service history, and ownership records are reviewed before listing.'],
  [CarFront, 'Transparent inspections', 'Condition reports, road-test notes, and refurbishment visibility before you visit.'],
  [Banknote, 'Financing assistance', 'Curated lender offers with flexible tenures, quick documentation, and pre-approval support.'],
  [Handshake, 'Concierge support', 'A specialist helps shortlist, compare, book visits, and manage handover end to end.'],
]

export default function HomePage() {
  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    getCars({ sort: 'newest' })
      .then((data) => {
        if (mounted) setFeatured(data.slice(0, 3))
      })
      .catch(() => {
        if (mounted) setFeatured([])
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  const financeCar = featured[2] || featured[0]

  return (
    <PageTransition>
      <HeroSection />
      <StatsSection />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Featured inventory" title="Curated cars with boardroom polish and weekend soul." description="A quick look at our highest-confidence arrivals, each backed by inspection scoring and ownership checks." />
        <div className="grid gap-6 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => <CarCardSkeleton key={index} />)
            : featured.map((car) => <CarCard key={car.id} car={car} />)}
        </div>
      </section>

      <section className="bg-white/[0.035] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader align="center" eyebrow="Why choose DZ AutoElite" title="Built for buyers who care about details." description="A premium used-car experience needs trust, speed, and taste. We designed the process around all three." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {trust.map(([Icon, title, text]) => (
              <div key={title} className="premium-ring rounded-lg bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/8">
                <Icon className="mb-5 text-gold" size={32} />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <SectionHeader eyebrow="Finance preview" title="Premium ownership with lighter upfront commitment." description="Simulate a finance-ready offer before you ever step into the studio." />
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="glass rounded-lg p-5"><p className="text-sm text-muted">Vehicle</p><p className="mt-2 font-semibold">{financeCar ? `${financeCar.year} ${financeCar.brand} ${financeCar.model}` : 'Curated premium vehicle'}</p></div>
            <div className="glass rounded-lg p-5"><p className="text-sm text-muted">Price</p><p className="mt-2 font-semibold">{financeCar ? formatCurrency(financeCar.price) : 'On request'}</p></div>
            <div className="glass rounded-lg p-5"><p className="text-sm text-muted">Est. EMI</p><p className="mt-2 font-semibold">{financeCar ? `${formatCurrency(emiFromPrice(financeCar.price))}/mo` : 'Custom offer'}</p></div>
          </div>
        </div>
        <div className="glass flex flex-col justify-between rounded-lg p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Concierge financing</p>
          <h3 className="mt-4 text-3xl font-semibold">Pre-approved offers from partner lenders.</h3>
          <p className="mt-4 leading-7 text-muted">Compare down payments, tenures, and exchange support through a future-ready UI that can connect to real lender APIs later.</p>
          <Button to="/contact" className="mt-8">Request finance callback</Button>
        </div>
      </section>

      <Testimonials />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img className="h-full min-h-96 rounded-lg object-cover premium-ring" src="https://images.unsplash.com/photo-1562141961-cc1f9552e3ea?auto=format&fit=crop&w=1200&q=85" alt="Dealership lounge" />
        <div className="flex flex-col justify-center">
          <SectionHeader eyebrow="Our story" title="A dealership experience tuned for modern buyers." description="DZ AutoElite started with a simple idea: second-hand car buying should feel as refined as buying new, with richer transparency than most showrooms provide." />
          <Button to="/about" variant="secondary" className="w-fit">Meet DZ AutoElite</Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="glass overflow-hidden rounded-lg p-8 text-center md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Private buying desk</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Find your next premium drive.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">Tell us your budget, body style, and must-have features. DZ AutoElite will help you compare the right certified vehicles without the noise.</p>
          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input className="min-h-12 flex-1 rounded-lg border border-white/12 bg-ink px-4 text-platinum outline-none focus:border-gold" placeholder="Email address" />
            <Button to="/contact">Start consultation</Button>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
