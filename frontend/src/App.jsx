import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

export default function App() {
  const location = useLocation()
  const [theme, setTheme] = useState(() => localStorage.getItem('dz-autoelite-theme') || 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('dz-autoelite-theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-platinum transition-colors duration-300">
      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />
      <AnimatePresence mode="wait">
        <AppRoutes location={location} key={location.pathname} />
      </AnimatePresence>
      <Footer />
    </div>
  )
}
