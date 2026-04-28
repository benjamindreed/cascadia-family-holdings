import { Link } from 'react-router-dom'
import { Leaf, Shield, Globe, ArrowRight } from 'lucide-react'
import { holdings } from '../data/holdings'

const sectorIcon: Record<string, React.ReactNode> = {
  Consumer: <Leaf size={18} className="text-[var(--cfh-moss)]" />,
  Technology: <Globe size={18} className="text-[var(--cfh-ink-mute)]" />,
  Default: <Shield size={18} className="text-[var(--cfh-teal)]" />,
}

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
    <section className="relative py-28 md:py-40 lg:py-52 px-6 flex items-center justify-center min-h-[75vh] border-b border-[var(--cfh-stone-light)] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 opacity-80 mix-blend-multiply grayscale"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1703226313127-0dff2ff95f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--cfh-white)]/40" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--cfh-white)]/10 to-[var(--cfh-paper)] opacity-90" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="cfh-art text-5xl md:text-7xl mb-8 leading-tight text-[var(--cfh-ink)]">
          Enduring value across <br className="hidden md:block" /> generations.
        </h1>
        <p className="text-xl md:text-2xl text-[var(--cfh-ink-mute)] max-w-2xl mx-auto leading-relaxed mb-12">
          We operate with quiet diligence, stewarding generational wealth with an eye toward
          enduring value, precision, and disciplined growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/portfolio"
            className="bg-[var(--cfh-teal)] text-white px-8 py-3 rounded-sm text-sm font-medium hover:bg-[var(--cfh-ink)] transition-colors w-full sm:w-auto shadow-sm"
          >
            Explore Holdings
          </Link>
          <Link
            to="/inquiries"
            className="bg-[var(--cfh-white)] text-[var(--cfh-ink)] border border-[var(--cfh-moss)] px-8 py-3 rounded-sm text-sm font-medium hover:bg-[var(--cfh-paper-alt)] transition-colors w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

function PortfolioTeaser() {
  return (
    <section className="py-24 px-6 border-b border-[var(--cfh-stone-light)] bg-[var(--cfh-paper)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="cfh-caps text-[var(--cfh-moss)] mb-4">Current Holdings</div>
          <h2 className="cfh-art text-4xl text-[var(--cfh-ink)] mb-4">Our Portfolio</h2>
          <p className="text-[var(--cfh-ink-mute)] max-w-2xl">
            We partner with exceptional founders and compelling brands that demonstrate clear
            fundamentals, resilient market positioning, and long-term vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {holdings.map(holding => (
            <Link
              key={holding.id}
              to="/portfolio"
              className="bg-[var(--cfh-white)] border border-[var(--cfh-stone-light)] rounded-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 hover:border-[var(--cfh-teal)]"
            >
              <div className="p-8 pb-4">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-14 flex items-center justify-start">
                    <img
                      src={holding.logo}
                      alt={`${holding.name} logo`}
                      className="max-h-full max-w-[120px] object-contain"
                    />
                  </div>
                  <div className="bg-[var(--cfh-paper-alt)] px-3 py-1 rounded-sm text-[10px] font-medium uppercase tracking-widest border border-[var(--cfh-stone-light)] text-[var(--cfh-teal)] shadow-sm whitespace-nowrap">
                    {holding.status}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  {sectorIcon[holding.sector] ?? sectorIcon.Default}
                  <h3 className="cfh-art text-xl text-[var(--cfh-ink)] group-hover:text-[var(--cfh-teal)] transition-colors">
                    {holding.name}
                  </h3>
                </div>
              </div>
              <div className="px-8 pb-8 flex-1">
                <p className="text-[var(--cfh-ink-mute)] text-sm leading-relaxed">
                  {holding.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-[var(--cfh-teal)] hover:text-[var(--cfh-ink)] transition-colors font-medium"
          >
            View full portfolio <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function PrinciplesSection() {
  return (
    <section className="py-24 px-6 bg-[var(--cfh-white)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="cfh-caps text-[var(--cfh-moss)] mb-4">How We Operate</div>
          <h2 className="cfh-art text-4xl md:text-5xl text-[var(--cfh-ink)]">Our Principles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {principles.map((p, i) => (
            <div key={i}>
              <div className="w-8 h-px bg-[var(--cfh-teal)] mb-6" />
              <h3 className="cfh-art text-xl text-[var(--cfh-ink)] mb-4">{p.title}</h3>
              <p className="text-[var(--cfh-ink-mute)] text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[var(--cfh-ink)] text-[var(--cfh-white)] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="cfh-art text-2xl text-white">CFH</span>
          <div className="h-6 w-px bg-[var(--cfh-stone-dark)]" />
          <span className="text-sm text-[var(--cfh-stone)]">
            © {new Date().getFullYear()} Cascadia Family Holdings
          </span>
        </div>
        <div className="flex gap-6 text-sm text-[var(--cfh-stone)]">
          <Link to="/portfolio" className="hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link to="/inquiries" className="hover:text-white transition-colors">
            Inquiries
          </Link>
        </div>
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
