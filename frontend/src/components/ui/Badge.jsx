export default function Badge({ children, tone = 'default', className = '' }) {
  const tones = {
    default: 'border-white/12 bg-white/8 text-platinum',
    success: 'border-emerald-300/25 bg-emerald-400/10 text-emerald-200',
    warning: 'border-gold/30 bg-gold/10 text-gold',
    danger: 'border-rose-300/25 bg-rose-400/10 text-rose-200',
  }

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}>
      {children}
    </span>
  )
}
