import { useState, useEffect } from 'react'
import { Menu, X, Home, Building2, Phone, FileDown } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-white' : 'text-white/80 hover:text-white'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/10 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-500/30" />
            <span className="text-white font-semibold tracking-wide">Aurelia Estates</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/#featured', 'Featured')}
            {navItem('/#contact', 'Contact')}
            {navItem('/admin', 'Admin')}
          </nav>

          <div className="flex md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="p-2 text-white/90 hover:text-white"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden backdrop-blur-xl bg-white/10 border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            <Link to="/" onClick={() => setOpen(false)} className="block px-3 py-2 text-white/90 hover:text-white">Home</Link>
            <a href="/#featured" onClick={() => setOpen(false)} className="block px-3 py-2 text-white/90 hover:text-white">Featured</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 text-white/90 hover:text-white">Contact</a>
            <Link to="/admin" onClick={() => setOpen(false)} className="block px-3 py-2 text-white/90 hover:text-white">Admin</Link>
          </div>
        </div>
      )}
    </header>
  )
}
