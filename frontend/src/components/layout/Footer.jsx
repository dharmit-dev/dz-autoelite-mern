import { AtSign, BriefcaseBusiness, CalendarClock, Mail, MapPin, Phone, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../brand/Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-graphite transition-colors duration-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.25fr_0.75fr_0.8fr_1.1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Logo />
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Premium pre-owned vehicles, verified ownership, transparent inspections, and concierge guidance for buyers who expect more.
          </p>
          <div className="mt-5 flex gap-3 text-muted">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/8 transition hover:-translate-y-0.5 hover:text-gold"><AtSign size={18} /></span>
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/8 transition hover:-translate-y-0.5 hover:text-gold"><BriefcaseBusiness size={18} /></span>
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/8 transition hover:-translate-y-0.5 hover:text-gold"><Play size={18} /></span>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold text-platinum">Quick links</p>
          <div className="grid gap-3 text-sm text-muted">
            <Link to="/">Home</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold text-platinum">Services</p>
          <div className="grid gap-3 text-sm text-muted">
            <span>EMI assistance</span>
            <span>Trade-in support</span>
            <span>Inspection reports</span>
            <span>Ownership transfer</span>
          </div>
        </div>
        <div className="grid gap-3 text-sm text-muted">
          <p className="mb-1 text-sm font-semibold text-platinum">Visit the studio</p>
          <span className="flex gap-2"><MapPin size={17} className="text-gold" /> Bandra Kurla Complex, Mumbai</span>
          <span className="flex gap-2"><Phone size={17} className="text-gold" /> +91 98765 43210</span>
          <span className="flex gap-2"><Mail size={17} className="text-gold" /> concierge@dzautoelite.in</span>
          <span className="flex gap-2"><CalendarClock size={17} className="text-gold" /> Mon-Sat, 10:00 AM - 7:30 PM</span>
        </div>
      </div>
      <div className="border-t border-white/8 px-4 py-5 text-center text-xs text-muted">
        <img className="mr-2 inline h-5 w-5 align-[-5px]" src="/brand/dz-autoelite-logo.svg" alt="" /> DZ AutoElite MVP. Backend APIs, inventory, and inquiries connected.
      </div>
    </footer>
  )
}
