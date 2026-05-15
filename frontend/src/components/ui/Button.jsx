import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-gold text-ink hover:bg-[#efc970] shadow-[0_18px_45px_rgba(216,178,95,0.25)]',
  secondary: 'border border-white/15 bg-white/8 text-platinum hover:bg-white/14',
  ghost: 'text-platinum hover:bg-white/10',
}

export default function Button({ children, to, variant = 'primary', className = '', ...props }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
