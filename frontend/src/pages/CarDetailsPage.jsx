import { ArrowLeft, BadgeCheck, Banknote, Calendar, Fuel, Gauge, History, Settings, ShieldCheck } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CarCard from '../components/cars/CarCard'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { CarCardSkeleton } from '../components/ui/LoadingSkeleton'
import PageTransition from '../components/ui/PageTransition'
import { getCarById } from '../services/carService'
import { emiFromPrice, formatCurrency, formatMileage } from '../utils/formatters'

export default function CarDetailsPage() {
  const { id } = useParams()
  const [car, setCar] = useState(null)
  const [similar, setSimilar] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError('')
    setActiveImage(0)

    getCarById(id)
      .then((response) => {
        if (mounted) {
          setCar(response.data)
          setSimilar(response.similar || [])
        }
      })
      .catch((apiError) => {
        if (mounted) {
          setCar(null)
          setSimilar([])
          setError(apiError.response?.data?.message || 'Unable to load vehicle details.')
        }
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [id])

  if (loading) {
    return (
      <PageTransition>
        <section className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="h-[62vh] min-h-96 animate-pulse rounded-lg bg-white/8 premium-ring" />
            <CarCardSkeleton />
          </div>
        </section>
      </PageTransition>
    )
  }

  if (!car) {
    return (
      <PageTransition>
        <section className="mx-auto max-w-4xl px-4 py-36 text-center">
          <h1 className="text-4xl font-semibold">Vehicle not found</h1>
          {error && <p className="mt-4 text-muted">{error}</p>}
          <Button to="/inventory" className="mt-6">Back to inventory</Button>
        </section>
      </PageTransition>
    )
  }

  const specs = [
    ['Year', car.year, Calendar],
    ['Mileage', formatMileage(car.mileage), Gauge],
    ['Fuel', car.fuelType, Fuel],
    ['Transmission', car.transmission, Settings],
    ['Ownership', car.ownership, History],
    ['Engine', car.engine, BadgeCheck],
  ]

  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <Link to="/inventory" className="mb-6 inline-flex items-center gap-2 text-sm text-muted hover:text-platinum"><ArrowLeft size={16} /> Back to inventory</Link>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="relative overflow-hidden rounded-lg premium-ring">
              <img className="h-[62vh] min-h-96 w-full object-cover" src={car.images[activeImage]} alt={`${car.brand} ${car.model}`} />
              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                <Badge tone={car.availability === 'Available' ? 'success' : 'warning'}>{car.availability}</Badge>
                <Badge>{car.inspectionScore}% inspection score</Badge>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {car.images.map((image, index) => (
                <button key={image} className={`h-28 overflow-hidden rounded-lg border ${activeImage === index ? 'border-gold' : 'border-white/10'}`} onClick={() => setActiveImage(index)}>
                  <img className="h-full w-full object-cover" src={image} alt={`${car.model} angle ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <aside className="glass h-fit rounded-lg p-6 lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">{car.brand}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">{car.year} {car.model}</h1>
            <p className="mt-4 leading-7 text-muted">{car.description}</p>
            <div className="my-6 border-y border-white/10 py-6">
              <p className="text-sm text-muted">Asking price</p>
              <p className="mt-1 text-4xl font-bold text-platinum">{formatCurrency(car.price)}</p>
              <p className="mt-2 text-sm text-gold">Estimated EMI {formatCurrency(emiFromPrice(car.price))}/month</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button to="/contact">Make inquiry</Button>
              <Button to="/contact" variant="secondary"><Banknote size={17} /> Finance offer</Button>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            <section className="premium-ring rounded-lg bg-panel p-6">
              <h2 className="mb-5 text-2xl font-semibold">Specifications</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {specs.map(([label, value, Icon]) => (
                  <div key={label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/6 p-4">
                    <Icon className="text-gold" size={20} />
                    <div>
                      <p className="text-sm text-muted">{label}</p>
                      <p className="font-semibold">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="premium-ring rounded-lg bg-panel p-6">
              <h2 className="mb-5 text-2xl font-semibold">Key features</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {car.features.map((feature) => (
                  <span key={feature} className="flex items-center gap-2 rounded-lg bg-white/7 px-4 py-3 text-sm"><ShieldCheck size={17} className="text-gold" /> {feature}</span>
                ))}
              </div>
            </section>

            <section className="premium-ring rounded-lg bg-panel p-6">
              <h2 className="mb-5 text-2xl font-semibold">Ownership and inspection</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {['Accident-free body report', 'Service records verified', 'RC and loan status checked'].map((item) => (
                  <div key={item} className="rounded-lg border border-emerald-300/20 bg-emerald-400/8 p-4 text-sm text-emerald-100">
                    <BadgeCheck className="mb-3" size={22} /> {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="glass rounded-lg p-6">
            <h2 className="text-xl font-semibold">Price clarity</h2>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between"><span className="text-muted">Ex-showroom equivalent</span><span>{formatCurrency(Math.round(car.price * 1.08))}</span></div>
              <div className="flex justify-between"><span className="text-muted">DZ AutoElite listed price</span><span>{formatCurrency(car.price)}</span></div>
              <div className="flex justify-between"><span className="text-muted">Documentation support</span><span>Included</span></div>
              <div className="flex justify-between border-t border-white/10 pt-4 font-semibold"><span>Estimated monthly EMI</span><span className="text-gold">{formatCurrency(emiFromPrice(car.price))}</span></div>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="mb-6 text-3xl font-semibold">Similar cars</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {similar.map((item) => <CarCard key={item.id} car={item} />)}
          </div>
        </section>
      </section>
    </PageTransition>
  )
}
