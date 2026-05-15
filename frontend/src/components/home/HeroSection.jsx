import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from '../ui/Button'

export default function HeroSection() {
  const [heroSrc, setHeroSrc] = useState(
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1800&q=88'
  )

  return (
    <section className="hero-readable relative min-h-[92vh] overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={heroSrc}
        alt="Premium DZ AutoElite vehicle studio"
        onError={() => setHeroSrc('/brand/hero-fallback.svg')}
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,13,0.96)_0%,rgba(7,9,13,0.68)_43%,rgba(7,9,13,0.2)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-platinum backdrop-blur"
          >
            <Sparkles size={16} className="text-gold" />
            Certified pre-owned. Built on trust.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Certified pre-owned cars, reimagined for modern buyers.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl"
          >
            DZ AutoElite curates inspected, finance-ready vehicles from trusted
            owners and partner dealers, delivering full transparency with a
            premium buying experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 rounded-xl border border-white/12 bg-black/20 p-2 backdrop-blur sm:w-fit sm:flex-row"
          >
            <Button
              to="/inventory"
              className="shadow-[0_18px_50px_rgba(216,178,95,0.34)]"
            >
              Explore inventory <ArrowRight size={17} />
            </Button>

            <Button to="/contact" variant="secondary">
              Book private consultation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-10 grid gap-3 sm:grid-cols-3"
          >
            {[
              '214-point checks',
              'EMI from 8.9%',
              '7-day exchange',
            ].map((item) => (
              <span
                key={item}
                className="glass flex items-center gap-2 rounded-lg px-4 py-3 text-sm text-platinum"
              >
                <ShieldCheck size={17} className="text-gold" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}