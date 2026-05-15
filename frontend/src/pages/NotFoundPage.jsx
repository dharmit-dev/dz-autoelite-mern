import Button from '../components/ui/Button'
import PageTransition from '../components/ui/PageTransition'

export default function NotFoundPage() {
  return (
    <PageTransition>
      <section className="grid min-h-[76vh] place-items-center px-4 pt-24 text-center">
        <div className="max-w-2xl">
          <p className="text-8xl font-black text-gold">404</p>
          <h1 className="mt-4 text-4xl font-semibold">This route took a wrong turn.</h1>
          <p className="mt-4 text-muted">The page you are looking for is not in the DZ AutoElite showroom.</p>
          <Button to="/inventory" className="mt-8">Browse inventory</Button>
        </div>
      </section>
    </PageTransition>
  )
}
