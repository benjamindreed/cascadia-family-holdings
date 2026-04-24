import { Link } from 'react-router-dom'

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

function Hero() {
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
          <Link
            to="/portfolio"
            className="px-8 py-3 bg-[var(--cfh-teal)] text-white text-sm tracking-widest uppercase font-sans hover:opacity-90 transition-opacity"
          >
            Explore Holdings
          </Link>
          <Link
            to="/inquiries"
            className="px-8 py-3 border border-foreground/20 text-foreground text-sm tracking-widest uppercase font-sans hover:border-foreground/40 transition-colors bg-transparent"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Decorative rule */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-foreground/20" />
      </div>
    </section>
  )
}

function PortfolioTeaser() {
  return (
    <section className="py-24 lg:py-32 bg-background">
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
            <Link
              key={holding.id}
              to="/portfolio"
              className="bg-background p-8 lg:p-10 group block hover:bg-muted/30 transition-colors"
            >
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function PrinciplesSection() {
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

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[var(--cfh-teal)]"
            aria-hidden="true"
          >
            <path d="M24 6L40 36H8L24 6Z" fill="currentColor" opacity="0.85" />
            <path d="M13 36L22 20L31 36H13Z" fill="currentColor" opacity="0.5" />
            <path d="M24 28L27 36H21L24 28Z" fill="currentColor" opacity="0.3" />
          </svg>
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

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioTeaser />
      <PrinciplesSection />
      <Footer />
    </main>
  )
}
