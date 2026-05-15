import { Heart, Gauge, Fuel, Settings, MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { formatMileage, formatShortPrice } from '../../utils/formatters'

export default function CarCard({ car, view = 'grid' }) {
  const tone =
    car.availability === 'Available'
      ? 'success'
      : car.availability === 'Reserved'
      ? 'warning'
      : 'danger'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`premium-ring group overflow-hidden rounded-2xl bg-panel/95 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${
        view === 'list' ? 'md:grid md:grid-cols-[320px_1fr]' : ''
      }`}
    >
      <Link
        to={`/inventory/${car.id}`}
        className="relative block h-60 overflow-hidden bg-white/5"
      >
        <img
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <Badge tone={tone}>{car.availability}</Badge>
          <Badge>{car.inspectionScore}% inspected</Badge>
        </div>

        <button
          className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-ink"
          aria-label="Favorite"
        >
          <Heart size={18} />
        </button>
      </Link>

      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
              {car.brand}
            </p>

            <Link
              to={`/inventory/${car.id}`}
              className="mt-1 block text-xl font-semibold text-platinum transition-colors duration-300 hover:text-gold"
            >
              {car.year} {car.model}
            </Link>
          </div>

          <p className="whitespace-nowrap text-right text-2xl font-bold text-platinum">
            ₹{formatShortPrice(car.price)}
          </p>
        </div>

        <p className="mb-5 min-h-12 text-sm leading-6 text-muted">
          {car.summary}
        </p>

        <div className="mb-6 grid grid-cols-2 gap-3 text-sm text-platinum">
          <span className="flex items-center gap-2 rounded-xl bg-white/6 px-3 py-3 transition hover:bg-white/10">
            <Gauge size={16} className="shrink-0 text-gold" />
            <span className="truncate">{formatMileage(car.mileage)}</span>
          </span>

          <span className="flex items-center gap-2 rounded-xl bg-white/6 px-3 py-3 transition hover:bg-white/10">
            <Fuel size={16} className="shrink-0 text-gold" />
            <span className="truncate">{car.fuelType}</span>
          </span>

          <span className="flex items-center gap-2 rounded-xl bg-white/6 px-3 py-3 transition hover:bg-white/10">
            <Settings size={16} className="shrink-0 text-gold" />
            <span className="truncate">{car.transmission}</span>
          </span>

          <span className="flex items-center gap-2 rounded-xl bg-white/6 px-3 py-3 transition hover:bg-white/10">
            <MapPin size={16} className="shrink-0 text-gold" />
            <span className="truncate">{car.location}</span>
          </span>
        </div>

        <Button to={`/inventory/${car.id}`} className="w-full font-semibold">
          View premium details <ArrowRight size={16} />
        </Button>
      </div>
    </motion.article>
  )
}