export type Verdict = 'True' | 'False' | 'Misleading' | 'Unverified';

export interface FactCheck {
  id: number;
  country: string;
  topic: string; // topic id, matches Topic.id
  claim: string;
  verdict: Verdict;
  confidence: number; // 0-100
  date: string; // YYYY-MM-DD
  summary: string;
  sources: string[];
  isFactCheckOfDay?: boolean;
}

export const factChecksData: FactCheck[] = [
  {
    id: 1,
    country: 'latvia',
    topic: 'elections',
    claim: 'Election results manipulated',
    verdict: 'False',
    confidence: 96,
    date: '2026-07-03',
    summary:
      'Cross-referenced official tallies with independent observer reports; no statistical anomalies found.',
    sources: ['Central Election Commission tallies', 'OSCE observer mission report'],
    isFactCheckOfDay: true,
  },
  {
    id: 2,
    country: 'lithuania',
    topic: 'energy',
    claim: 'Fuel subsidies removed nationwide',
    verdict: 'Misleading',
    confidence: 76,
    date: '2026-06-24',
    summary:
      'Subsidies were reduced for one fuel category only; other categories remain unchanged.',
    sources: ['Ministry of Energy bulletin', 'Vilnius Times reporting'],
  },
  {
    id: 3,
    country: 'poland',
    topic: 'immigration',
    claim: 'Border crossing closed indefinitely',
    verdict: 'False',
    confidence: 91,
    date: '2026-06-20',
    summary:
      'The crossing remains operational; the claim originated from an outdated screenshot.',
    sources: ['Border Guard live status feed', 'Warsaw Bulletin field check'],
  },
  {
    id: 4,
    country: 'sweden',
    topic: 'energy',
    claim: 'Household energy prices doubled overnight',
    verdict: 'Misleading',
    confidence: 81,
    date: '2026-06-19',
    summary:
      'Figures cited combined industrial and household rates, overstating the household impact.',
    sources: ['Swedish Energy Markets Inspectorate data', 'Stockholm Courier rate comparison'],
  },
  {
    id: 5,
    country: 'iceland',
    topic: 'energy',
    claim: 'Geothermal export deal terms reported by anonymous sources',
    verdict: 'Unverified',
    confidence: 42,
    date: '2026-06-26',
    summary:
      'Independent energy-sector data does not yet corroborate the figures cited.',
    sources: ['Reykjavik Journal sourcing review', 'National Energy Authority (no comment on record)'],
  },
  {
    id: 6,
    country: 'estonia',
    topic: 'technology',
    claim: 'New e-governance platform stores data outside the EU',
    verdict: 'False',
    confidence: 89,
    date: '2026-06-30',
    summary:
      'Infrastructure audit confirms all data is hosted within EU-based data centers.',
    sources: ['Independent infrastructure audit', 'Estonian Information System Authority'],
  },
];

export const getFactChecksByCountry = (countryId: string | null) =>
  countryId
    ? factChecksData.filter((f) => f.country === countryId)
    : factChecksData;

export const getFactChecksByFilters = (countryId: string | null, topicId: string | null) =>
  factChecksData.filter(
    (f) => (countryId ? f.country === countryId : true) && (topicId ? f.topic === topicId : true)
  );

export const getFactChecksThisWeek = (countryId: string) => {
  const latest = factChecksData.reduce((max, f) => (f.date > max ? f.date : max), '0000-00-00');
  const cutoff = new Date(`${latest}T00:00:00`);
  cutoff.setDate(cutoff.getDate() - 7);
  return factChecksData.filter(
    (f) => f.country === countryId && new Date(`${f.date}T00:00:00`) >= cutoff
  ).length;
};

export const getFactCheckOfTheDay = (countryId?: string | null, topicId?: string | null) => {
  const pool = getFactChecksByFilters(countryId ?? null, topicId ?? null);
  const source = pool.length > 0 ? pool : factChecksData;
  return (
    source.find((f) => f.isFactCheckOfDay) ||
    source.slice().sort((a, b) => (a.date < b.date ? 1 : -1))[0]
  );
};
