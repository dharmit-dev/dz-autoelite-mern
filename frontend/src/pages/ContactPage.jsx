import { CalendarClock, Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../components/contact/ContactForm'
import PageTransition from '../components/ui/PageTransition'

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Contact
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
            Visit our premium studio or request a consultation.
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted">
            Tell DZ AutoElite what you are looking for. Our specialists will
            help you shortlist the right premium pre-owned vehicle with full
            transparency and concierge support.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="glass rounded-lg p-5 transition duration-300 hover:-translate-y-1">
              <MapPin className="mb-3 text-gold" />
              <div>
                <p className="font-semibold text-platinum">Visit our studio</p>
                <p className="mt-1 text-sm text-muted">
                  DZ AutoElite Experience Studio, Ahmedabad, Gujarat
                </p>
              </div>
            </div>

            <div className="glass rounded-lg p-5 transition duration-300 hover:-translate-y-1">
              <Phone className="mb-3 text-gold" />
              <div>
                <p className="font-semibold text-platinum">Call us</p>
                <p className="mt-1 text-sm text-muted">
                  +91 99999 99999
                </p>
              </div>
            </div>

            <div className="glass rounded-lg p-5 transition duration-300 hover:-translate-y-1">
              <Mail className="mb-3 text-gold" />
              <div>
                <p className="font-semibold text-platinum">Email support</p>
                <p className="mt-1 text-sm text-muted">
                  support@dzautoelite.com
                </p>
              </div>
            </div>

            <div className="glass rounded-lg p-5 transition duration-300 hover:-translate-y-1">
              <CalendarClock className="mb-3 text-gold" />
              <div>
                <p className="font-semibold text-platinum">Working hours</p>
                <p className="mt-1 text-sm text-muted">
                  Monday – Saturday | 10:00 AM – 7:30 PM
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid min-h-64 place-items-center rounded-lg border border-white/12 bg-[linear-gradient(135deg,rgba(216,178,95,0.14),rgba(103,232,249,0.08))] p-6 text-center">
            <div>
              <p className="text-lg font-semibold text-platinum">
                Premium showroom experience
              </p>
              <p className="mt-2 max-w-sm text-sm text-muted">
                Personalized appointments, curated shortlists, transparent
                walkthroughs, and expert assistance throughout your buying
                journey.
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>
    </PageTransition>
  )
}