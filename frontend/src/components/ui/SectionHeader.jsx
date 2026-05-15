import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`mx-auto mb-10 max-w-3xl ${align === 'center' ? 'text-center' : ''}`}
    >
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-platinum md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p>}
    </motion.div>
  )
}
