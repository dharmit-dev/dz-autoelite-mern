export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)

export const formatShortPrice = (value) => {
  if (value >= 10000000) return `${(value / 10000000).toFixed(2)} Cr`
  return `${(value / 100000).toFixed(2)} L`
}

export const formatMileage = (value) => `${new Intl.NumberFormat('en-IN').format(value)} km`

export const emiFromPrice = (price) => Math.round((price * 0.82) / 60)
