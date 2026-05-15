import { SlidersHorizontal, RotateCcw, Sparkles } from 'lucide-react'
import { brands, fuelTypes, transmissions } from '../../data/cars'
import { formatShortPrice } from '../../utils/formatters'
import Button from '../ui/Button'

export default function FilterSidebar({
  filters,
  updateFilter,
  resetFilters,
}) {
  return (
    <aside className="glass sticky top-24 h-fit rounded-2xl border border-white/10 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-semibold text-platinum">
            <SlidersHorizontal size={20} className="text-gold" />
            Smart Filters
          </h2>
          <p className="mt-1 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
            <Sparkles size={12} className="text-gold" />
            Curate your shortlist
          </p>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/8 text-muted transition-all duration-300 hover:rotate-180 hover:text-platinum"
          onClick={resetFilters}
          aria-label="Reset filters"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      <div className="space-y-6">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-muted">
            Brand
          </span>

          <select
            className="w-full rounded-xl border border-white/12 bg-ink px-4 py-3 text-platinum outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
            value={filters.brand}
            onChange={(event) =>
              updateFilter('brand', event.target.value)
            }
          >
            <option>All</option>
            {brands.map((brand) => (
              <option key={brand}>{brand}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-muted">
            Fuel Type
          </span>

          <select
            className="w-full rounded-xl border border-white/12 bg-ink px-4 py-3 text-platinum outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
            value={filters.fuelType}
            onChange={(event) =>
              updateFilter('fuelType', event.target.value)
            }
          >
            <option>All</option>
            {fuelTypes.map((fuel) => (
              <option key={fuel}>{fuel}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-muted">
            Transmission
          </span>

          <select
            className="w-full rounded-xl border border-white/12 bg-ink px-4 py-3 text-platinum outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
            value={filters.transmission}
            onChange={(event) =>
              updateFilter('transmission', event.target.value)
            }
          >
            <option>All</option>
            {transmissions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-3 flex items-center justify-between text-sm">
            <span className="font-medium text-muted">Maximum Budget</span>
            <span className="rounded-full bg-gold/10 px-3 py-1 text-sm font-semibold text-gold">
              ₹{formatShortPrice(filters.maxPrice)}
            </span>
          </span>

          <input
            className="w-full cursor-pointer accent-gold"
            type="range"
            min="800000"
            max="5500000"
            step="50000"
            value={filters.maxPrice}
            onChange={(event) =>
              updateFilter('maxPrice', event.target.value)
            }
          />
        </label>

        <div className="rounded-xl border border-white/8 bg-white/5 p-4">
          <p className="text-sm font-medium text-platinum">
            Premium buying tip
          </p>
          <p className="mt-2 text-xs leading-6 text-muted">
            Narrow your shortlist by transmission + budget first for faster comparisons.
          </p>
        </div>

        <Button
          variant="secondary"
          className="w-full font-semibold"
          onClick={resetFilters}
        >
          Clear all filters
        </Button>
      </div>
    </aside>
  )
} 