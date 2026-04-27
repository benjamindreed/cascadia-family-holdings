export interface Holding {
  id: number
  label: string
  name: string
  description: string
  founded: string
  region: string
}

export const holdings: Holding[] = [
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
