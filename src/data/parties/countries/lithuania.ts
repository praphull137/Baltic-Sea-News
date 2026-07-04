import { CountryPartyData } from '../types';

const UPDATED = '2026-07-04';

export const lithuania: CountryPartyData = {
  countryId: 'lithuania',
  parties: [
    { id: 'lt-lsdp', countryId: 'lithuania', name: 'Social Democratic Party of Lithuania', shortName: 'LSDP', officialWebsite: 'https://www.lsdp.lt' },
    { id: 'lt-tslkd', countryId: 'lithuania', name: 'Homeland Union – Lithuanian Christian Democrats', shortName: 'TS-LKD', officialWebsite: 'https://tsajunga.lt' },
    { id: 'lt-ppna', countryId: 'lithuania', name: 'Dawn of Nemunas', shortName: 'Nemuno Aušra', officialWebsite: 'https://nemunoausra.lt' },
    { id: 'lt-dsvl', countryId: 'lithuania', name: 'Union of Democrats "For Lithuania"', shortName: 'DSVL', officialWebsite: 'https://www.demokratai.lt' },
  ],
  issues: [
    { id: 'lt-defense', countryId: 'lithuania', label: 'Defense Spending & NATO', topicId: 'defense' },
    { id: 'lt-ukraine', countryId: 'lithuania', label: 'Support for Ukraine', topicId: 'foreign-policy' },
    { id: 'lt-migration', countryId: 'lithuania', label: 'Migration & Border Security', topicId: 'immigration' },
    { id: 'lt-russia', countryId: 'lithuania', label: 'Relations with Belarus/Russia', topicId: 'foreign-policy' },
    { id: 'lt-tax', countryId: 'lithuania', label: 'Taxation & Economic Policy', topicId: 'economy' },
    { id: 'lt-wage', countryId: 'lithuania', label: 'Minimum Wage & Social Policy' },
    { id: 'lt-healthcare', countryId: 'lithuania', label: 'Healthcare Funding & Reform', topicId: 'healthcare' },
    { id: 'lt-energy', countryId: 'lithuania', label: 'Energy Security', topicId: 'energy' },
  ],
  positions: [
    // LSDP
    { partyId: 'lt-lsdp', issueId: 'lt-defense', stance: 'support', evidence: 'Lithuania’s State Defence Council, under the LSDP-led government, decided in January 2025 to raise defense spending to 5-6% of GDP for 2026-2030.', source: 'https://www.euronews.com/my-europe/2025/01/17/lithuania-vows-to-raise-defence-spending-to-5-6-of-gdp-to-combat-threat-from-russia', lastUpdated: UPDATED },
    { partyId: 'lt-lsdp', issueId: 'lt-ukraine', stance: 'support', evidence: 'Lithuania’s 2026 National Security Strategy, adopted under the LSDP-led coalition, made spending at least 0.25% of GDP on military aid to Ukraine mandatory for the first time.', source: 'https://mezha.net/eng/bukvy/lithuania-s-2026-national-security-strategy-prioritizes-ukraine-support-and-regional-defense/amp/', lastUpdated: UPDATED },
    { partyId: 'lt-lsdp', issueId: 'lt-migration', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-lsdp', issueId: 'lt-russia', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-lsdp', issueId: 'lt-tax', stance: 'support', evidence: 'Proposal included a 35% income tax rate above €2,500/month, reduced tax for those earning up to €800, and raising corporate profit tax from 15% to 20%.', source: 'https://lithuaniatribune.com/leftist-manifesto-life-would-change-for-both-employees-and-oligarchs/', lastUpdated: UPDATED },
    { partyId: 'lt-lsdp', issueId: 'lt-wage', stance: 'support', evidence: 'Supports indexing the minimum monthly wage so it reaches 50% of the national average wage.', source: 'https://lithuaniatribune.com/leftist-manifesto-life-would-change-for-both-employees-and-oligarchs/', lastUpdated: UPDATED },
    { partyId: 'lt-lsdp', issueId: 'lt-healthcare', stance: 'support', evidence: 'The government programme endorsed under the LSDP-led coalition commits to increasing public health spending, slowing privatization, and improving geographic access to care.', source: 'https://eurohealthobservatory.who.int/monitors/health-systems-monitor/updates/hspm/lithuania-2013/health-and-health-care-in-the-new-government-s-programme', lastUpdated: UPDATED },
    { partyId: 'lt-lsdp', issueId: 'lt-energy', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // TS-LKD
    { partyId: 'lt-tslkd', issueId: 'lt-defense', stance: 'support', evidence: 'Campaigned on a "Defend and Grow" platform emphasizing defense increases; in 2026 presented an opposition "total defence" plan (conscription expansion, border fortifications, a "drone wall").', source: 'https://www.lrt.lt/en/news-in-english/19/2892189/lithuanian-opposition-presents-alternative-defence-plan-calling-for-total-defence-concept', lastUpdated: UPDATED },
    { partyId: 'lt-tslkd', issueId: 'lt-ukraine', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-tslkd', issueId: 'lt-migration', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-tslkd', issueId: 'lt-russia', stance: 'partial', evidence: 'Leader Laurynas Kasčiūnas said Lithuania must become a "prickly hedgehog" too costly for Russia to overcome, and that security "cannot rely on the illusion" of alliance commitments alone.', source: 'https://www.lrt.lt/en/news-in-english/19/2892189/lithuanian-opposition-presents-alternative-defence-plan-calling-for-total-defence-concept', lastUpdated: UPDATED },
    { partyId: 'lt-tslkd', issueId: 'lt-tax', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-tslkd', issueId: 'lt-wage', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-tslkd', issueId: 'lt-healthcare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-tslkd', issueId: 'lt-energy', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // Dawn of Nemunas
    { partyId: 'lt-ppna', issueId: 'lt-defense', stance: 'oppose', evidence: 'Described as the only major Lithuanian party markedly skeptical of NATO; leader Remigijus Žemaitaitis has criticized rising defence spending.', source: 'https://www.lrt.lt/en/news-in-english/19/2386559/we-created-him-behind-the-rise-of-zemaitaitis-and-nemunas-dawn', lastUpdated: UPDATED },
    { partyId: 'lt-ppna', issueId: 'lt-ukraine', stance: 'oppose', evidence: 'Leader Žemaitaitis has publicly questioned Lithuania’s support for Ukraine; party MPs voted against funding a military training facility near the Suwałki Gap.', source: 'https://www.lrt.lt/en/news-in-english/19/2386559/we-created-him-behind-the-rise-of-zemaitaitis-and-nemunas-dawn', lastUpdated: UPDATED },
    { partyId: 'lt-ppna', issueId: 'lt-migration', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-ppna', issueId: 'lt-russia', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-ppna', issueId: 'lt-tax', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-ppna', issueId: 'lt-wage', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-ppna', issueId: 'lt-healthcare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-ppna', issueId: 'lt-energy', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // DSVL
    { partyId: 'lt-dsvl', issueId: 'lt-defense', stance: 'partial', evidence: 'A governing coalition partner that adopted the 2026 National Security Strategy raising defense commitments, though no distinct DSVL-specific statement was found.', source: 'https://mezha.net/eng/bukvy/lithuania-s-2026-national-security-strategy-prioritizes-ukraine-support-and-regional-defense/amp/', lastUpdated: UPDATED },
    { partyId: 'lt-dsvl', issueId: 'lt-ukraine', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-dsvl', issueId: 'lt-migration', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-dsvl', issueId: 'lt-russia', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-dsvl', issueId: 'lt-tax', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-dsvl', issueId: 'lt-wage', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-dsvl', issueId: 'lt-healthcare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lt-dsvl', issueId: 'lt-energy', stance: 'partial', evidence: 'The coalition agreement DSVL co-signed — under which DSVL leads the energy ministry — commits to reintroducing a public electricity supplier.', source: 'https://www.osw.waw.pl/en/publikacje/analyses/2024-12-13/centre-left-government-forms-government-lithuania', lastUpdated: UPDATED },
  ],
};
