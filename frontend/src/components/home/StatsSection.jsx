import { motion } from 'framer-motion'

const stats = [
  ['500+', 'cars delivered'],
  ['1200+', 'happy customers'],
  ['50+', 'partner dealers'],
  ['4.8/5', 'buyer rating'],
]

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([value, label], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="glass rounded-lg p-6"
          >
            <p className="text-4xl font-bold text-gold">{value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
