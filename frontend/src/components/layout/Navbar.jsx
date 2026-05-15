import { Menu, Moon, Search, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../brand/Logo'
import Button from '../ui/Button'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Inventory', to: '/inventory' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition duration-300 ${isActive ? 'bg-gold text-ink shadow-[0_12px_30px_rgba(216,178,95,0.22)]' : 'text-muted hover:bg-white/10 hover:text-platinum'}`

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/78 shadow-[0_12px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-colors duration-300">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo />
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/12 bg-white/8 text-platinum transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button to="/inventory" variant="secondary" className="px-4">
            <Search size={16} /> Browse cars
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/12 bg-white/8"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/12 bg-white/8"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/96 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
