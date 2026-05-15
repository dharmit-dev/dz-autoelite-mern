import { useEffect, useState } from 'react'
import { getCars } from '../services/carService'

const initialFilters = {
  search: '',
  brand: 'All',
  fuelType: 'All',
  transmission: 'All',
  maxPrice: 5500000,
  sort: 'newest',
}

export function useInventory() {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filters, setFilters] = useState(initialFilters)

  useEffect(() => {
    let mounted = true
    const timeoutId = setTimeout(() => {
      const params = {
        sort: filters.sort === 'price-low' ? 'price_asc' : filters.sort === 'price-high' ? 'price_desc' : 'newest',
        maxPrice: filters.maxPrice,
      }

      if (filters.search.trim()) params.search = filters.search.trim()
      if (filters.brand !== 'All') params.brand = filters.brand
      if (filters.fuelType !== 'All') params.fuelType = filters.fuelType
      if (filters.transmission !== 'All') params.transmission = filters.transmission

      setLoading(true)
      setError('')

      getCars(params)
        .then((data) => {
          if (mounted) setCars(data)
        })
        .catch((apiError) => {
          if (mounted) {
            setCars([])
            setError(apiError.response?.data?.message || 'Unable to load inventory. Please try again.')
          }
        })
        .finally(() => {
          if (mounted) setLoading(false)
        })
    }, 250)

    return () => {
      mounted = false
      clearTimeout(timeoutId)
    }
  }, [filters])

  const updateFilter = (key, value) => setFilters((current) => ({ ...current, [key]: value }))
  const resetFilters = () => setFilters(initialFilters)

  return { cars, filteredCars: cars, filters, loading, error, updateFilter, resetFilters }
}
