export type FactCheckStatus = 'Verified' | 'Disputed' | 'Unverified' | 'Not Reviewed';
export type Reliability = 'High' | 'Medium' | 'Low';

export interface NewsItem {
  id: number;
  country: string; // country id, matches Country.id
  topic: string; // topic id, matches Topic.id
  title: string;
  description: string;
  image: string;
  category: string;
  source: string;
  reliability: Reliability;
  factCheckStatus: FactCheckStatus;
  date: string; // YYYY-MM-DD
  isNewsOfDay?: boolean;
}

export const newsData: NewsItem[] = [
  // Latvia — source: Riga Post
  {
    id: 1,
    country: 'latvia',
    topic: 'economy',
    title: 'Government introduces new tax policy',
    description:
      'Riga confirms a reworked corporate tax framework aimed at small exporters, effective from the next fiscal quarter.',
    image: 'https://picsum.photos/seed/latvia1/640/400',
    category: 'Politics',
    source: 'Riga Post',
    reliability: 'Medium',
    factCheckStatus: 'Not Reviewed',
    date: '2026-07-03',
    isNewsOfDay: true,
  },
  {
    id: 2,
    country: 'latvia',
    topic: 'economy',
    title: 'Baltic rail link secures new EU funding round',
    description:
      'Rail Baltica receives an additional funding tranche, easing concerns over the 2030 completion timeline.',
    image: 'https://picsum.photos/seed/latvia2/640/400',
    category: 'Economy',
    source: 'Riga Post',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-07-01',
  },
  {
    id: 3,
    country: 'latvia',
    topic: 'defense',
    title: 'Latvia expands cyber-defense cooperation with NATO allies',
    description:
      'A joint task force will monitor cross-border disinformation campaigns ahead of regional elections.',
    image: 'https://picsum.photos/seed/latvia3/640/400',
    category: 'Security',
    source: 'Riga Post',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-27',
  },

  // Lithuania — source: Vilnius Times
  {
    id: 4,
    country: 'lithuania',
    topic: 'energy',
    title: 'Vilnius unveils cross-border energy grid upgrade',
    description:
      'The upgrade is designed to fully decouple the Baltic grid from legacy regional power dependencies by year-end.',
    image: 'https://picsum.photos/seed/lithuania1/640/400',
    category: 'Energy',
    source: 'Vilnius Times',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-07-02',
  },
  {
    id: 5,
    country: 'lithuania',
    topic: 'technology',
    title: 'Lithuanian court rules on data-privacy dispute',
    description:
      'A closely watched ruling clarifies how regional platforms must handle cross-border user data requests.',
    image: 'https://picsum.photos/seed/lithuania2/640/400',
    category: 'Society',
    source: 'Vilnius Times',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-29',
  },
  {
    id: 6,
    country: 'lithuania',
    topic: 'energy',
    title: 'Fact-checkers flag viral claim about fuel subsidies',
    description:
      'A widely shared post claiming subsidies were scrapped nationwide is rated misleading by independent reviewers.',
    image: 'https://picsum.photos/seed/lithuania3/640/400',
    category: 'Politics',
    source: 'Vilnius Times',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-24',
  },

  // Estonia — source: Tallinn Register
  {
    id: 7,
    country: 'estonia',
    topic: 'technology',
    title: 'Estonia pilots AI-assisted public consultation platform',
    description:
      'The e-governance pilot lets citizens submit and verify feedback on draft legislation in real time.',
    image: 'https://picsum.photos/seed/estonia1/640/400',
    category: 'Politics',
    source: 'Tallinn Register',
    reliability: 'Medium',
    factCheckStatus: 'Not Reviewed',
    date: '2026-07-03',
  },
  {
    id: 8,
    country: 'estonia',
    topic: 'economy',
    title: 'Tallinn tech sector reports record export quarter',
    description:
      'Estonian software exports climb on strong demand from Nordic and Baltic manufacturing partners.',
    image: 'https://picsum.photos/seed/estonia2/640/400',
    category: 'Economy',
    source: 'Tallinn Register',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-30',
  },
  {
    id: 9,
    country: 'estonia',
    topic: 'climate',
    title: 'Coastal monitoring network expands along the Gulf of Finland',
    description:
      'New sensor buoys aim to improve early warning for shipping traffic and environmental incidents.',
    image: 'https://picsum.photos/seed/estonia3/640/400',
    category: 'Environment',
    source: 'Tallinn Register',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-22',
  },

  // Poland — source: Warsaw Bulletin
  {
    id: 10,
    country: 'poland',
    topic: 'elections',
    title: 'Poland announces regional election monitoring initiative',
    description:
      'Independent observers will track polling irregularities and verify viral claims in real time this cycle.',
    image: 'https://picsum.photos/seed/poland1/640/400',
    category: 'Politics',
    source: 'Warsaw Bulletin',
    reliability: 'Medium',
    factCheckStatus: 'Not Reviewed',
    date: '2026-07-02',
  },
  {
    id: 11,
    country: 'poland',
    topic: 'energy',
    title: 'Warsaw energy summit addresses cross-border supply security',
    description:
      'Officials from five countries discussed contingency plans for winter grid stability.',
    image: 'https://picsum.photos/seed/poland2/640/400',
    category: 'Energy',
    source: 'Warsaw Bulletin',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-28',
  },
  {
    id: 12,
    country: 'poland',
    topic: 'immigration',
    title: 'Claim about closed border crossing rated false',
    description:
      'Verification teams found the crossing remains open, contradicting a rapidly spreading social post.',
    image: 'https://picsum.photos/seed/poland3/640/400',
    category: 'Security',
    source: 'Warsaw Bulletin',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-20',
  },

  // Germany — source: Berlin Ledger
  {
    id: 13,
    country: 'germany',
    topic: 'defense',
    title: 'Germany reaffirms Baltic Sea security commitments',
    description:
      'Defense officials outline expanded naval patrols alongside Baltic and Nordic partners.',
    image: 'https://picsum.photos/seed/germany1/640/400',
    category: 'Security',
    source: 'Berlin Ledger',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-07-01',
  },
  {
    id: 14,
    country: 'germany',
    topic: 'technology',
    title: 'Berlin think tank publishes regional disinformation report',
    description:
      'The report tracks how narratives spread across Baltic and Central European media ecosystems.',
    image: 'https://picsum.photos/seed/germany2/640/400',
    category: 'Society',
    source: 'Berlin Ledger',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-26',
  },
  {
    id: 15,
    country: 'germany',
    topic: 'economy',
    title: 'German-Baltic trade volume reaches new high',
    description:
      'Export data shows continued growth in machinery and technology trade with Baltic partners.',
    image: 'https://picsum.photos/seed/germany3/640/400',
    category: 'Economy',
    source: 'Berlin Ledger',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-18',
  },

  // Sweden — source: Stockholm Courier
  {
    id: 16,
    country: 'sweden',
    topic: 'defense',
    title: 'Sweden expands undersea cable protection program',
    description:
      'New monitoring assets aim to safeguard critical Baltic Sea infrastructure from sabotage risks.',
    image: 'https://picsum.photos/seed/sweden1/640/400',
    category: 'Security',
    source: 'Stockholm Courier',
    reliability: 'Medium',
    factCheckStatus: 'Not Reviewed',
    date: '2026-07-02',
  },
  {
    id: 17,
    country: 'sweden',
    topic: 'education',
    title: 'Stockholm hosts Nordic-Baltic media literacy forum',
    description:
      'Educators and journalists convened to discuss verification tools for classrooms and newsrooms.',
    image: 'https://picsum.photos/seed/sweden2/640/400',
    category: 'Society',
    source: 'Stockholm Courier',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-25',
  },
  {
    id: 18,
    country: 'sweden',
    topic: 'energy',
    title: 'Viral claim on energy price spike rated misleading',
    description:
      'Analysts found the cited figures conflated household and industrial rates.',
    image: 'https://picsum.photos/seed/sweden3/640/400',
    category: 'Economy',
    source: 'Stockholm Courier',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-19',
  },

  // Finland — source: Helsinki Signal
  {
    id: 19,
    country: 'finland',
    topic: 'immigration',
    title: 'Finland strengthens border monitoring cooperation',
    description:
      'A new joint unit will coordinate with Baltic states on cross-border security verification.',
    image: 'https://picsum.photos/seed/finland1/640/400',
    category: 'Security',
    source: 'Helsinki Signal',
    reliability: 'Medium',
    factCheckStatus: 'Not Reviewed',
    date: '2026-07-03',
  },
  {
    id: 20,
    country: 'finland',
    topic: 'technology',
    title: 'Helsinki startup raises funding for fact-checking tools',
    description:
      'The platform uses source-credibility scoring to help newsrooms triage viral claims faster.',
    image: 'https://picsum.photos/seed/finland2/640/400',
    category: 'Economy',
    source: 'Helsinki Signal',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-27',
  },
  {
    id: 21,
    country: 'finland',
    topic: 'energy',
    title: 'Finland-Estonia energy interconnector completes maintenance',
    description:
      'Operators confirm full capacity restored ahead of seasonal demand increases.',
    image: 'https://picsum.photos/seed/finland3/640/400',
    category: 'Energy',
    source: 'Helsinki Signal',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-21',
  },

  // Norway — source: Oslo Dispatch
  {
    id: 22,
    country: 'norway',
    topic: 'technology',
    title: 'Norway increases funding for regional media resilience',
    description:
      'Grants will support independent outlets verifying claims tied to Baltic Sea security incidents.',
    image: 'https://picsum.photos/seed/norway1/640/400',
    category: 'Politics',
    source: 'Oslo Dispatch',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-07-01',
  },
  {
    id: 23,
    country: 'norway',
    topic: 'climate',
    title: 'Oslo research group tracks Arctic shipping route claims',
    description:
      'A new dataset aims to separate verified traffic patterns from speculative reporting.',
    image: 'https://picsum.photos/seed/norway2/640/400',
    category: 'Environment',
    source: 'Oslo Dispatch',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-23',
  },
  {
    id: 24,
    country: 'norway',
    topic: 'energy',
    title: 'Norwegian energy exports to the Baltics hold steady',
    description:
      'Officials say supply commitments remain on track despite regional demand fluctuations.',
    image: 'https://picsum.photos/seed/norway3/640/400',
    category: 'Energy',
    source: 'Oslo Dispatch',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-17',
  },

  // Iceland — source: Reykjavik Journal
  {
    id: 25,
    country: 'iceland',
    topic: 'defense',
    title: 'Iceland expands North Atlantic maritime monitoring',
    description:
      'New coastal radar stations aim to verify shipping and fishing-fleet activity reports in real time.',
    image: 'https://picsum.photos/seed/iceland1/640/400',
    category: 'Security',
    source: 'Reykjavik Journal',
    reliability: 'Medium',
    factCheckStatus: 'Not Reviewed',
    date: '2026-07-02',
  },
  {
    id: 26,
    country: 'iceland',
    topic: 'energy',
    title: 'Claim on geothermal export deal rated unverified',
    description:
      'Reviewers say available data is insufficient to confirm the reported terms of the energy agreement.',
    image: 'https://picsum.photos/seed/iceland2/640/400',
    category: 'Economy',
    source: 'Reykjavik Journal',
    reliability: 'Low',
    factCheckStatus: 'Unverified',
    date: '2026-06-26',
  },
  {
    id: 27,
    country: 'iceland',
    topic: 'technology',
    title: 'Reykjavik think tank maps Nordic disinformation networks',
    description:
      'A new report traces coordinated narrative campaigns targeting Nordic and Baltic audiences.',
    image: 'https://picsum.photos/seed/iceland3/640/400',
    category: 'Society',
    source: 'Reykjavik Journal',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-16',
  },

  // Denmark — source: Copenhagen Standard
  {
    id: 28,
    country: 'denmark',
    topic: 'defense',
    title: 'Denmark backs joint Baltic Sea infrastructure fund',
    description:
      'The fund will finance security upgrades to shared undersea cables and pipelines.',
    image: 'https://picsum.photos/seed/denmark1/640/400',
    category: 'Security',
    source: 'Copenhagen Standard',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-07-01',
  },
  {
    id: 29,
    country: 'denmark',
    topic: 'technology',
    title: 'Copenhagen publishes source-credibility index',
    description:
      'The index ranks regional outlets on transparency, ownership, and correction history.',
    image: 'https://picsum.photos/seed/denmark2/640/400',
    category: 'Society',
    source: 'Copenhagen Standard',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-24',
  },
  {
    id: 30,
    country: 'denmark',
    topic: 'energy',
    title: 'Danish wind exports to Baltic grid hit new record',
    description:
      'Operators report a strong quarter for cross-border renewable energy transfers.',
    image: 'https://picsum.photos/seed/denmark3/640/400',
    category: 'Energy',
    source: 'Copenhagen Standard',
    reliability: 'High',
    factCheckStatus: 'Verified',
    date: '2026-06-15',
  },
];

export const getNewsByCountry = (countryId: string | null) =>
  countryId ? newsData.filter((n) => n.country === countryId) : newsData;

export const getNewsByFilters = (countryId: string | null, topicId: string | null) =>
  newsData.filter(
    (n) => (countryId ? n.country === countryId : true) && (topicId ? n.topic === topicId : true)
  );

// Swap these for a live news/RSS/fact-check API call later without touching
// any component that calls them — the signatures stay the same.
export const getArticleCount = (countryId: string) =>
  newsData.filter((n) => n.country === countryId).length;

export const getArticlesThisWeek = (countryId: string) => {
  const latest = newsData.reduce((max, n) => (n.date > max ? n.date : max), '0000-00-00');
  const cutoff = new Date(`${latest}T00:00:00`);
  cutoff.setDate(cutoff.getDate() - 7);
  return newsData.filter((n) => n.country === countryId && new Date(`${n.date}T00:00:00`) >= cutoff)
    .length;
};

export const getActiveTopicCount = (countryId: string) =>
  new Set(newsData.filter((n) => n.country === countryId).map((n) => n.topic)).size;

export const getNewsOfTheDay = (countryId?: string | null, topicId?: string | null) => {
  const pool = getNewsByFilters(countryId ?? null, topicId ?? null);
  const source = pool.length > 0 ? pool : newsData;
  return source.find((n) => n.isNewsOfDay) || source.slice().sort((a, b) => (a.date < b.date ? 1 : -1))[0];
};

export const getNewsByDate = (date: string) =>
  newsData.filter((n) => n.date === date);

export const newsDates = Array.from(new Set(newsData.map((n) => n.date)));
