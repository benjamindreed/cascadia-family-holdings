import { Link } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { cn } from '../lib/utils'

function CascadiaLogo() {
  return (
    <svg viewBox="0 0 200 130" className="h-9 w-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M 12 118 L 60 42 L 78 70 L 46 118 Z" fill="#8A9A7E" />
      <path d="M 92 118 L 140 48 L 196 118 Z" fill="#2E5F66" />
      <path d="M 40 118 L 96 18 L 110 38 L 108 52 L 118 44 L 152 118 Z" fill="#0E2A2D" />
      <path d="M 50 118 L 78 70 L 88 88 L 66 118 Z" fill="#0E2A2D" opacity="0.55" />
    </svg>
  )
}

export function Nav() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--cfh-white)]/95 backdrop-blur-md border-b border-[var(--cfh-stone-light)]',
        scrolled ? 'shadow-sm' : ''
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Wordmark */}
          <Link to="/" className="flex items-center gap-3 group">
            <CascadiaLogo />
            <div className="flex flex-col leading-none">
              <span className="cfh-art text-xl leading-none text-[var(--cfh-ink)] tracking-tight">
                CASCADIA
              </span>
              <span className="cfh-caps text-[8px] text-[var(--cfh-teal)] tracking-wider">
                Family Holdings
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/portfolio"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors font-sans uppercase"
            >
              Portfolio
            </Link>
            <Link
              to="/inquiries"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors font-sans uppercase"
            >
              Inquiries
            </Link>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-full text-foreground/60 hover:text-foreground hover:bg-muted transition-all"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-full text-foreground/60"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              className="w-8 h-8 flex items-center justify-center rounded-full text-foreground/60"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-4">
            <Link
              to="/portfolio"
              onClick={() => setMenuOpen(false)}
              className="block text-sm tracking-wide text-foreground/70 hover:text-foreground font-sans uppercase"
            >
              Portfolio
            </Link>
            <Link
              to="/inquiries"
              onClick={() => setMenuOpen(false)}
              className="block text-sm tracking-wide text-foreground/70 hover:text-foreground font-sans uppercase"
            >
              Inquiries
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
