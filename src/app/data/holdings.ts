export interface Holding {
  id: number
  name: string
  description: string
  logo: string
  sector: string
  status: string
}

export const holdings: Holding[] = [
  {
    id: 1,
    name: 'Eco Car Cafe',
    description:
      'PNW premier auto care provider and the nations only organic, all natural, carbon neutral auto detailer. Full service auto care including detailing, maintenance plans, coatings, tint, and paint protection film.',
    logo: '/eco.png',
    sector: 'Consumer',
    status: 'Active Holding',
  },
  {
    id: 2,
    name: 'Sara Jolie Skincare',
    description:
      'Handmade natural skincare that your body craves. 100% chemical and preservative free, sourced from plant derived, non-GMO, organic ingredients.',
    logo: '/sarajolie.jpg',
    sector: 'Consumer',
    status: 'Active Holding',
  },
  {
    id: 3,
    name: 'Atsignhandle LLC',
    description:
      'Boutique software firm specializing in custom application development of DeFi tooling and agentic solutions.',
    logo: '/atsignhandle.jpg',
    sector: 'Technology',
    status: 'Active Holding',
  },
  {
    id: 4,
    name: 'Reed Vault Collectibles',
    description:
      'Family-run collectibles business dealing in trading cards, comics, and memorabilia. Four siblings curating the best finds — honest grading, ships in three days, 30-day returns, no questions asked.',
    logo: '/reedvault.svg',
    sector: 'Consumer',
    status: 'Active Holding',
  },
  {
    id: 5,
    name: 'Procedura Systems',
    description:
      'Publisher of premium operating systems for professional practices — trades contractors, transaction coordinators, med-spa operators, and local service businesses. Tiered tools from standalone task templates to AI-agent workflow systems.',
    logo: '/procedura.svg',
    sector: 'Technology',
    status: 'Active Holding',
  },
]
