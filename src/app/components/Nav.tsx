import { Link } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { cn } from '../lib/utils'

function CascadiaLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Mountain silhouette */}
      <path
        d="M24 6L40 36H8L24 6Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Secondary peak */}
      <path
        d="M13 36L22 20L31 36H13Z"
        fill="currentColor"
        opacity="0.5"
      />
      {/* Evergreen tree suggestion at base */}
      <path
        d="M24 28L27 36H21L24 28Z"
        fill="currentColor"
        opacity="0.3"
      />
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Wordmark */}
          <Link to="/" className="flex items-center gap-3 group">
            <CascadiaLogo className="w-8 h-8 text-[var(--cfh-teal)] flex-shrink-0" />
            <div className="flex flex-col leading-none">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/90 font-sans">
                Cascadia
              </span>
              <span className="text-xs tracking-[0.15em] uppercase text-foreground/60 font-sans">
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
