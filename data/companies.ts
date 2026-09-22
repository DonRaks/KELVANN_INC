export interface Company {
  id: string;
  name: string;
  slug: string;
  status: 'active' | 'coming-soon';
  sector: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  href?: string;
  code: string;
}

export const companies: Company[] = [
  {
    id: 'kelvann-krystal',
    name: 'Kelvann Krystal Limited',
    slug: 'kelvann-krystal',
    status: 'active',
    sector: 'Core Subsidiary',
    tagline: 'Leading Strategic Operations and Industry Excellence',
    description:
      'The flagship subsidiary of Kelvann Group of Companies Nigeria Limited, dedicated to delivering specialized operations, sustainable value creation, and industry-leading standards.',
    highlights: [
      'Strategic Operational Arm',
      'Quality & Compliance Driven',
      'Sustainable Value Creation',
    ],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    href: '/companies/kelvann-krystal',
    code: '01',
  },
  {
    id: 'sector-expansion-01',
    name: 'Infrastructure & Engineering',
    slug: 'infrastructure-engineering',
    status: 'coming-soon',
    sector: 'Future Expansion',
    tagline: 'Building Foundational Capabilities',
    description:
      'Future corporate division planned under the Kelvann Group expansion roadmap to support large-scale infrastructure development and modernization.',
    highlights: ['Planned Division', 'Strategic Expansion', 'Modern Infrastructure'],
    image:
      'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1200&q=85',
    code: '02',
  },
  {
    id: 'sector-expansion-02',
    name: 'Technology & Digital Systems',
    slug: 'technology-systems',
    status: 'coming-soon',
    sector: 'Future Expansion',
    tagline: 'Enabling Enterprise Transformation',
    description:
      'Targeted technology division envisioned to empower group subsidiaries with next-generation digital architecture, automation, and enterprise solutions.',
    highlights: ['Envisioned Vertical', 'Digital Architecture', 'Process Automation'],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
    code: '03',
  },
  {
    id: 'sector-expansion-03',
    name: 'Energy & Sustainable Resources',
    slug: 'energy-resources',
    status: 'coming-soon',
    sector: 'Future Expansion',
    tagline: 'Pioneering Sustainable Industry',
    description:
      'Long-term strategic growth sector dedicated to exploring clean industrial energy solutions, efficiency frameworks, and resource optimization.',
    highlights: ['Long-Term Roadmap', 'Sustainable Frameworks', 'Industrial Efficiency'],
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85',
    code: '04',
  },
];
