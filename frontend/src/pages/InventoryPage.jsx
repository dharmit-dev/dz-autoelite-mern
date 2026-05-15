import { Grid2X2, List, Search } from 'lucide-react'
import { useState } from 'react'
import CarCard from '../components/cars/CarCard'
import FilterSidebar from '../components/cars/FilterSidebar'
import PageTransition from '../components/ui/PageTransition'
import { CarCardSkeleton } from '../components/ui/LoadingSkeleton'
import Button from '../components/ui/Button'
import { useInventory } from '../hooks/useInventory'

export default function InventoryPage() {
  const { filteredCars, filters, loading, error, updateFilter, resetFilters } = useInventory()
  const [view, setView] = useState('grid')

  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">Live inventory</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Find the right pre-owned car.</h1>
            <p className="mt-4 max-w-2xl text-muted">Search, filter, and compare certified vehicles with realistic marketplace interactions.</p>
          </div>
          <div className="flex rounded-lg border border-white/12 bg-white/8 p-1">
            <button className={`grid h-10 w-10 place-items-center rounded-md ${view === 'grid' ? 'bg-gold text-ink' : 'text-muted'}`} onClick={() => setView('grid')} aria-label="Grid view"><Grid2X2 size={18} /></button>
            <button className={`grid h-10 w-10 place-items-center rounded-md ${view === 'list' ? 'bg-gold text-ink' : 'text-muted'}`} onClick={() => setView('list')} aria-label="List view"><List size={18} /></button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <FilterSidebar filters={filters} updateFilter={updateFilter} resetFilters={resetFilters} />
          <div>
            <div className="mb-5 grid gap-3 md:grid-cols-[1fr_220px]">
              <label className="relative block">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                <input className="min-h-12 w-full rounded-lg border border-white/12 bg-white/8 pl-12 pr-4 text-platinum outline-none focus:border-gold" value={filters.search} onChange={(event) => updateFilter('search', event.target.value)} placeholder="Search BMW, diesel, Mumbai..." />
              </label>
              <select className="min-h-12 rounded-lg border border-white/12 bg-ink px-4 text-platinum outline-none focus:border-gold" value={filters.sort} onChange={(event) => updateFilter('sort', event.target.value)}>
                <option value="newest">Sort by newest</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
              </select>
            </div>

            <div className="mb-5 flex items-center justify-between text-sm text-muted">
              <span>{loading ? 'Loading curated vehicles...' : `${filteredCars.length} vehicles found`}</span>
            </div>

            {error && (
              <div className="mb-5 rounded-lg border border-rose-300/25 bg-rose-400/10 p-4 text-sm text-rose-100">
                {error}
              </div>
            )}

            {loading ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => <CarCardSkeleton key={index} />)}
              </div>
            ) : filteredCars.length ? (
              <div className={`grid gap-6 ${view === 'grid' ? 'md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredCars.map((car) => <CarCard key={car.id} car={car} view={view} />)}
              </div>
            ) : (
              <div className="glass rounded-lg p-10 text-center">
                <h2 className="text-2xl font-semibold">No matching vehicles</h2>
                <p className="mx-auto mt-3 max-w-md text-muted">Try a wider budget, another brand, or clear filters to see the full DZ AutoElite collection.</p>
                <Button className="mt-6" onClick={resetFilters}>Reset filters</Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
