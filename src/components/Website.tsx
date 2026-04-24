import { Link, useNavigate } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { cn } from '../lib/utils'

// ── SVG Logo ──────────────────────────────────────────────────────────────────
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

// ── Portfolio cards data ───────────────────────────────────────────────────────
const holdings = [
  {
    id: 1,
    label: 'Real Estate',
    name: 'Pacific Crest Properties',
    description:
      'A diversified Pacific Northwest real estate portfolio spanning commercial, mixed-use, and residential assets with long-duration leases and conservative leverage.',
    founded: '2004',
    region: 'Pacific Northwest',
  },
  {
    id: 2,
    label: 'Consumer',
    name: 'Ridgeline Provisions',
    description:
      'A premium outdoor and culinary brand with deep roots in the Pacific Northwest, serving discerning consumers who value craft, provenance, and lasting quality.',
    founded: '2011',
    region: 'North America',
  },
  {
    id: 3,
    label: 'Technology',
    name: 'Watershed Analytics',
    description:
      'An environmental intelligence platform delivering data-driven insights for sustainable resource management across municipal and enterprise clients.',
    founded: '2017',
    region: 'Global',
  },
]

// ── Navigation ────────────────────────────────────────────────────────────────
function Nav() {
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

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[var(--cfh-paper)] dark:bg-background overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-20">
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--cfh-teal)] font-sans mb-8 opacity-80">
          Est. 2004 · Pacific Northwest
        </p>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] mb-8">
          Enduring value
          <br />
          <em className="not-italic text-[var(--cfh-teal)]">across generations.</em>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base md:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed mb-12">
          We operate with quiet diligence, stewarding generational wealth with an eye toward
          enduring value, precision, and disciplined growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/portfolio')}
            className="px-8 py-3 bg-[var(--cfh-teal)] text-white text-sm tracking-widest uppercase font-sans hover:opacity-90 transition-opacity"
          >
            Explore Holdings
          </button>
          <button
            onClick={() => navigate('/inquiries')}
            className="px-8 py-3 border border-foreground/20 text-foreground text-sm tracking-widest uppercase font-sans hover:border-foreground/40 transition-colors bg-transparent"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Decorative rule */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-foreground/20" />
      </div>
    </section>
  )
}

// ── Portfolio Section ─────────────────────────────────────────────────────────
function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--cfh-teal)] font-sans mb-4">
            Current Holdings
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Our Portfolio
          </h2>
          <p className="font-sans text-base text-foreground/60 max-w-2xl leading-relaxed">
            We partner with exceptional founders and compelling brands that demonstrate clear
            fundamentals, resilient market positioning, and long-term vision.
          </p>
        </div>

        {/* Holdings grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {holdings.map(holding => (
            <div key={holding.id} className="bg-background p-8 lg:p-10 group">
              <div className="text-xs tracking-[0.25em] uppercase text-[var(--cfh-teal)] font-sans mb-4 opacity-70">
                {holding.label}
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                {holding.name}
              </h3>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed mb-8">
                {holding.description}
              </p>
              <div className="flex gap-6 text-xs text-foreground/40 font-sans">
                <span>Est. {holding.founded}</span>
                <span>{holding.region}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Principles Section ────────────────────────────────────────────────────────
function PrinciplesSection() {
  const principles = [
    {
      title: 'Patient Capital',
      body: 'We measure success in decades, not quarters. Our indefinite holding horizon enables us to act decisively when others cannot.',
    },
    {
      title: 'Operational Depth',
      body: 'We work alongside management to strengthen operations, build durable systems, and create lasting competitive advantage.',
    },
    {
      title: 'Selective Partnership',
      body: 'We invest selectively, concentrating capital in businesses we understand deeply and believe in unconditionally.',
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-[var(--cfh-paper)] dark:bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--cfh-teal)] font-sans mb-4">
            How We Operate
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Our Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {principles.map((p, i) => (
            <div key={i}>
              <div className="w-8 h-px bg-[var(--cfh-teal)] mb-6" />
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">{p.title}</h3>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Inquiries Section ─────────────────────────────────────────────────────────
function InquiriesSection() {
  return (
    <section id="inquiries" className="py-24 lg:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--cfh-teal)] font-sans mb-4">
          Get in Touch
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
          Inquiries
        </h2>
        <p className="font-sans text-base text-foreground/60 leading-relaxed mb-12">
          We welcome conversations with founders, advisors, and prospective partners who share
          our commitment to long-term thinking and thoughtful stewardship.
        </p>
        <a
          href="mailto:inquiries@cascadiafamilyholdings.com"
          className="inline-block px-10 py-3 bg-[var(--cfh-teal)] text-white text-sm tracking-widest uppercase font-sans hover:opacity-90 transition-opacity"
        >
          Send an Inquiry
        </a>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <CascadiaLogo className="w-6 h-6 text-[var(--cfh-teal)]" />
          <span className="text-xs tracking-[0.2em] uppercase text-foreground/50 font-sans">
            Cascadia Family Holdings
          </span>
        </div>
        <p className="text-xs text-foreground/40 font-sans">
          © {new Date().getFullYear()} Cascadia Family Holdings. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
interface WebsiteProps {
  section?: 'portfolio' | 'inquiries'
}

export function Website({ section }: WebsiteProps) {
  useEffect(() => {
    if (section === 'portfolio') {
      const el = document.getElementById('portfolio')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else if (section === 'inquiries') {
      const el = document.getElementById('inquiries')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [section])

  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <PortfolioSection />
        <PrinciplesSection />
        <InquiriesSection />
      </main>
      <Footer />
    </div>
  )
}
