import { Leaf, Shield, Globe } from 'lucide-react'
import { holdings } from '../data/holdings'

const sectorIcon: Record<string, React.ReactNode> = {
  Consumer: <Leaf size={18} className="text-[var(--cfh-moss)]" />,
  Technology: <Globe size={18} className="text-[var(--cfh-ink-mute)]" />,
  Default: <Shield size={18} className="text-[var(--cfh-teal)]" />,
}

export default function Portfolio() {
  return (
    <main className="min-h-screen py-24 px-6 bg-[var(--cfh-paper)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="cfh-caps text-[var(--cfh-moss)] mb-4">Current Holdings</div>
          <h1 className="cfh-art text-4xl md:text-5xl text-[var(--cfh-ink)] mb-4">Our Portfolio</h1>
          <p className="text-[var(--cfh-ink-mute)] max-w-2xl">
            We partner with exceptional founders and compelling brands that demonstrate clear
            fundamentals, resilient market positioning, and long-term vision.
          </p>
        </div>

        {/* Holdings grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {holdings.map(holding => (
            <div
              key={holding.id}
              className="bg-[var(--cfh-white)] border border-[var(--cfh-stone-light)] rounded-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 hover:border-[var(--cfh-teal)]"
            >
              <div className="p-8 pb-4">
                {/* Logo + badge row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="h-16 flex items-center justify-start">
                    <img
                      src={holding.logo}
                      alt={`${holding.name} logo`}
                      className="max-h-full max-w-[140px] object-contain"
                    />
                  </div>
                  <div className="bg-[var(--cfh-paper-alt)] px-3 py-1 rounded-sm text-[10px] font-medium uppercase tracking-widest border border-[var(--cfh-stone-light)] text-[var(--cfh-teal)] shadow-sm whitespace-nowrap">
                    {holding.status}
                  </div>
                </div>

                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-4">
                  {sectorIcon[holding.sector] ?? sectorIcon.Default}
                  <h3 className="cfh-art text-2xl text-[var(--cfh-ink)] group-hover:text-[var(--cfh-teal)] transition-colors">
                    {holding.name}
                  </h3>
                </div>
              </div>

              <div className="px-8 pb-8 flex-1">
                <p className="text-[var(--cfh-ink-mute)] text-sm leading-relaxed">
                  {holding.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
