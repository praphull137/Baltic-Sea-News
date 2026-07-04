export interface Region {
  id: string;
  name: string;
  isoNumeric: string;
  description: string;
}

export const REGIONS: Region[] = [
  {
    id: 'denmark',
    name: 'Denmark',
    isoNumeric: '208',
    description: 'Nordic democracy, Baltic access point, and regional media actor.',
  },
  {
    id: 'estonia',
    name: 'Estonia',
    isoNumeric: '233',
    description: 'Digital society, Baltic security voice, and civic innovation hub.',
  },
  {
    id: 'finland',
    name: 'Finland',
    isoNumeric: '246',
    description: 'Nordic resilience, border security, education, and public trust.',
  },
  {
    id: 'germany',
    name: 'Germany',
    isoNumeric: '276',
    description: 'Major Baltic Sea stakeholder through its northern coastal regions.',
  },
  {
    id: 'iceland',
    name: 'Iceland',
    isoNumeric: '352',
    description: 'Nordic civic perspective connected to regional democratic cooperation.',
  },
  {
    id: 'latvia',
    name: 'Latvia',
    isoNumeric: '428',
    description: 'Baltic political center with strong regional security relevance.',
  },
  {
    id: 'lithuania',
    name: 'Lithuania',
    isoNumeric: '440',
    description: 'Baltic democracy, civic mobilization, and regional policy voice.',
  },
  {
    id: 'norway',
    name: 'Norway',
    isoNumeric: '578',
    description: 'Nordic security, energy, maritime policy, and democratic governance.',
  },
  {
    id: 'poland',
    name: 'Poland',
    isoNumeric: '616',
    description: 'Key Baltic Sea actor with strong regional political influence.',
  },
  {
    id: 'sweden',
    name: 'Sweden',
    isoNumeric: '752',
    description: 'Nordic democracy, Baltic security partner, and media innovation hub.',
  },
];

export function getRegionById(regionId: string | null | undefined) {
  if (!regionId) return null;
  return REGIONS.find((region) => region.id === regionId) ?? null;
}