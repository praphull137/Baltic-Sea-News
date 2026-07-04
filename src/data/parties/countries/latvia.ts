import { CountryPartyData } from '../types';

const UPDATED = '2026-07-04';

export const latvia: CountryPartyData = {
  countryId: 'latvia',
  parties: [
    { id: 'lv-jv', countryId: 'latvia', name: 'New Unity', shortName: 'JV', officialWebsite: 'https://www.jaunavienotiba.lv' },
    { id: 'lv-na', countryId: 'latvia', name: 'National Alliance "All For Latvia!"–"For Fatherland and Freedom/LNNK"', shortName: 'NA', officialWebsite: 'https://nacionalaapvieniba.lv' },
    { id: 'lv-zzs', countryId: 'latvia', name: 'Union of Greens and Farmers', shortName: 'ZZS', officialWebsite: 'https://zzs.lv' },
    { id: 'lv-pro', countryId: 'latvia', name: 'The Progressives', shortName: 'PRO', officialWebsite: 'https://progresivie.lv' },
  ],
  issues: [
    { id: 'lv-defense', countryId: 'latvia', label: 'Defense & NATO', topicId: 'defense' },
    { id: 'lv-ukraine', countryId: 'latvia', label: 'Support for Ukraine', topicId: 'foreign-policy' },
    { id: 'lv-education', countryId: 'latvia', label: 'Russian-Language Minority Education', topicId: 'education' },
    { id: 'lv-energy', countryId: 'latvia', label: 'Energy Security', topicId: 'energy' },
    { id: 'lv-border', countryId: 'latvia', label: 'Border Security', topicId: 'immigration' },
    { id: 'lv-tax', countryId: 'latvia', label: 'Taxation', topicId: 'economy' },
    { id: 'lv-healthcare', countryId: 'latvia', label: 'Healthcare', topicId: 'healthcare' },
    { id: 'lv-istanbul', countryId: 'latvia', label: 'Istanbul Convention' },
  ],
  positions: [
    // New Unity (JV)
    { partyId: 'lv-jv', issueId: 'lv-defense', stance: 'support', evidence: '2022 platform pledged to raise defense spending to 2.5% of GDP, is pro-NATO, and backed mandatory military service.', source: 'https://www.fpri.org/article/2022/09/latvian-parliamentary-elections/', lastUpdated: UPDATED },
    { partyId: 'lv-jv', issueId: 'lv-ukraine', stance: 'support', evidence: 'New Unity-led governments provided military aid packages including armored vehicles and co-led the international Drone Coalition for Ukraine.', source: 'https://www.mod.gov.lv/en/support-ukraine', lastUpdated: UPDATED },
    { partyId: 'lv-jv', issueId: 'lv-education', stance: 'support', evidence: '2022 platform backed completing the transition to Latvian-only instruction in primary/secondary schools.', source: 'https://www.fpri.org/article/2022/09/latvian-parliamentary-elections/', lastUpdated: UPDATED },
    { partyId: 'lv-jv', issueId: 'lv-energy', stance: 'support', evidence: '2022 platform called for "full energy independence from Russia" via LNG terminals and solar expansion.', source: 'https://www.fpri.org/article/2022/09/latvian-parliamentary-elections/', lastUpdated: UPDATED },
    { partyId: 'lv-jv', issueId: 'lv-border', stance: 'support', evidence: 'New Unity Interior Minister Rihards Kozlovskis said the completed Latvia–Belarus border fence was built "professionally and within the planned deadlines."', source: 'https://eng.lsm.lv/article/society/defense/31.07.2024-latvian-belarusian-border-fence-project-completed.a563367/', lastUpdated: UPDATED },
    { partyId: 'lv-jv', issueId: 'lv-tax', stance: 'unknown', evidence: 'No clear, citable tax-policy position found.', lastUpdated: UPDATED },
    { partyId: 'lv-jv', issueId: 'lv-healthcare', stance: 'support', evidence: 'As lead coalition party, approved a 2024 budget adding €275 million for healthcare (medicines, wait-list reduction, staff salaries).', source: 'https://www.fm.gov.lv/en/article/government-approves-budget2024-latvias-budget-security-and-sustainability', lastUpdated: UPDATED },
    { partyId: 'lv-jv', issueId: 'lv-istanbul', stance: 'support', evidence: 'PM Evika Siliņa’s New Unity broke with prior coalition partners specifically to secure a government able to ratify/retain the Convention.', source: 'https://freepolicybriefs.org/2025/11/17/latvia-istanbul-convention-withdrawal/', lastUpdated: UPDATED },

    // National Alliance (NA)
    { partyId: 'lv-na', issueId: 'lv-defense', stance: 'support', evidence: 'Firmly pro-NATO with backing for mandatory conscription; NA-affiliated Defence Minister oversaw progress toward the 2% GDP NATO spending target.', source: 'https://www.fpri.org/article/2022/09/latvian-parliamentary-elections/', lastUpdated: UPDATED },
    { partyId: 'lv-na', issueId: 'lv-ukraine', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lv-na', issueId: 'lv-education', stance: 'support', evidence: 'NA initiated the 2018 reform mandating a transition to Latvian as the sole language of instruction in minority schools.', source: 'https://www.npr.org/2018/10/28/654142363/a-new-law-in-latvia-aims-to-preserve-national-language-by-limiting-russian-in-sc', lastUpdated: UPDATED },
    { partyId: 'lv-na', issueId: 'lv-energy', stance: 'support', evidence: '2022 platform backed LNG and renewables for independence from Russia and floated exploring nuclear energy research.', source: 'https://www.fpri.org/article/2022/09/latvian-parliamentary-elections/', lastUpdated: UPDATED },
    { partyId: 'lv-na', issueId: 'lv-border', stance: 'support', evidence: 'In September 2025 submitted a Saeima bill demanding immediate closure of Latvia’s border with Russia and Belarus, citing drone incursions and Zapad-2025 exercises.', source: 'https://www.baltictimes.com/national_alliance_proposes_to_close_border_with_russia_and_belarus/', lastUpdated: UPDATED },
    { partyId: 'lv-na', issueId: 'lv-tax', stance: 'partial', evidence: '2022 platform pledged to cut VAT on food and reduce labor income tax and a non-taxable minimum pension; no clear stance on progressive vs. flat tax structure.', source: 'https://www.fpri.org/article/2022/09/latvian-parliamentary-elections/', lastUpdated: UPDATED },
    { partyId: 'lv-na', issueId: 'lv-healthcare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lv-na', issueId: 'lv-istanbul', stance: 'oppose', evidence: 'Has "long opposed [the Convention’s] gender terminology" and led the push that culminated in the Saeima’s 56–32 vote to withdraw (Oct 31, 2025).', source: 'https://freepolicybriefs.org/2025/11/17/latvia-istanbul-convention-withdrawal/', lastUpdated: UPDATED },

    // Union of Greens and Farmers (ZZS)
    { partyId: 'lv-zzs', issueId: 'lv-defense', stance: 'partial', evidence: '2022 platform backed raising defense spending to 2.7% of GDP but did not explicitly address NATO.', source: 'https://www.fpri.org/article/2022/09/latvian-parliamentary-elections/', lastUpdated: UPDATED },
    { partyId: 'lv-zzs', issueId: 'lv-ukraine', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lv-zzs', issueId: 'lv-education', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lv-zzs', issueId: 'lv-energy', stance: 'support', evidence: '2022 platform promoted renewable energy projects to achieve independence from Russian energy.', source: 'https://www.fpri.org/article/2022/09/latvian-parliamentary-elections/', lastUpdated: UPDATED },
    { partyId: 'lv-zzs', issueId: 'lv-border', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lv-zzs', issueId: 'lv-tax', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lv-zzs', issueId: 'lv-healthcare', stance: 'support', evidence: '2022 platform advocated higher senior pensions and increased salaries for health workers.', source: 'https://www.fpri.org/article/2022/09/latvian-parliamentary-elections/', lastUpdated: UPDATED },
    { partyId: 'lv-zzs', issueId: 'lv-istanbul', stance: 'partial', evidence: 'Initially backed ratification but reversed to vote for withdrawal alongside National Alliance, United List, and Latvia First in October 2025.', source: 'https://freepolicybriefs.org/2025/11/17/latvia-istanbul-convention-withdrawal/', lastUpdated: UPDATED },

    // The Progressives (PRO)
    { partyId: 'lv-pro', issueId: 'lv-defense', stance: 'support', evidence: '2022 platform favored deep NATO/EU defense collaboration and Baltic Sea security cooperation.', source: 'https://www.fpri.org/article/2022/09/latvian-parliamentary-elections/', lastUpdated: UPDATED },
    { partyId: 'lv-pro', issueId: 'lv-ukraine', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lv-pro', issueId: 'lv-education', stance: 'support', evidence: '2022 platform backed a unified, Latvian-language-based education system.', source: 'https://www.fpri.org/article/2022/09/latvian-parliamentary-elections/', lastUpdated: UPDATED },
    { partyId: 'lv-pro', issueId: 'lv-energy', stance: 'support', evidence: '2022 platform tied clean-energy investment to both energy independence and economic competitiveness.', source: 'https://www.fpri.org/article/2022/09/latvian-parliamentary-elections/', lastUpdated: UPDATED },
    { partyId: 'lv-pro', issueId: 'lv-border', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'lv-pro', issueId: 'lv-tax', stance: 'support', evidence: 'Proposes a progressive tax system with a tax-rate ladder, lower taxes under €1,000/month, higher rates on dividends/capital gains, and reduced VAT on food.', source: 'https://www.fpri.org/article/2022/09/latvian-parliamentary-elections/', lastUpdated: UPDATED },
    { partyId: 'lv-pro', issueId: 'lv-healthcare', stance: 'support', evidence: 'Platform calls for lowering out-of-pocket payments, expanding state-paid services, prioritizing prevention, and broader healthcare-finance reform.', source: 'https://www.rosalux.de/en/news/id/51100/a-progressive-turn-in-latvia', lastUpdated: UPDATED },
    { partyId: 'lv-pro', issueId: 'lv-istanbul', stance: 'support', evidence: 'As a governing coalition partner, supported ratification/retention of the Convention.', source: 'https://freepolicybriefs.org/2025/11/17/latvia-istanbul-convention-withdrawal/', lastUpdated: UPDATED },
  ],
};
