import { holdings } from '../data/holdings'

export default function Portfolio() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
          Current Holdings
        </p>
        <h1 className="text-3xl font-serif mb-4">Our Portfolio</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          We partner with exceptional founders and compelling brands that demonstrate
          clear fundamentals, resilient market positioning, and long-term vision.
        </p>

        {/* Holdings grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {holdings.map(holding => (
            <div key={holding.id} className="bg-background p-8 lg:p-10">
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
    </main>
  )
}
