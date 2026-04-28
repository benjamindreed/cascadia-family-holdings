import { Link } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { cn } from '../lib/utils'

function CascadiaLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 10L32 30H8L20 10Z" fill="var(--cfh-moss)" fillOpacity="0.8"/>
      <path d="M12 16L20 30H4L12 16Z" fill="var(--cfh-teal)" fillOpacity="0.9"/>
      <path d="M28 16L36 30H20L28 16Z" fill="var(--cfh-ink)" fillOpacity="0.9"/>
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
