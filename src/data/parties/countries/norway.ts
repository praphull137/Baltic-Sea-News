import { CountryPartyData } from '../types';

const UPDATED = '2026-07-04';

export const norway: CountryPartyData = {
  countryId: 'norway',
  parties: [
    { id: 'no-ap', countryId: 'norway', name: 'Arbeiderpartiet', shortName: 'Ap', officialWebsite: 'https://www.arbeiderpartiet.no' },
    { id: 'no-frp', countryId: 'norway', name: 'Fremskrittspartiet', shortName: 'FrP', officialWebsite: 'https://www.frp.no' },
    { id: 'no-h', countryId: 'norway', name: 'Høyre', shortName: 'H', officialWebsite: 'https://hoyre.no' },
    { id: 'no-sv', countryId: 'norway', name: 'Sosialistisk Venstreparti', shortName: 'SV', officialWebsite: 'https://www.sv.no' },
  ],
  issues: [
    { id: 'no-oil', countryId: 'norway', label: 'Oil & Gas Exploration', topicId: 'energy' },
    { id: 'no-climate', countryId: 'norway', label: 'Climate Policy & Emissions Targets', topicId: 'climate' },
    { id: 'no-immigration', countryId: 'norway', label: 'Immigration & Asylum Policy', topicId: 'immigration' },
    { id: 'no-eu', countryId: 'norway', label: 'EU Membership & EEA Agreement', topicId: 'foreign-policy' },
    { id: 'no-wealth-tax', countryId: 'norway', label: 'Wealth Tax & Taxation', topicId: 'economy' },
    { id: 'no-welfare', countryId: 'norway', label: 'Welfare State Financing' },
  ],
  positions: [
    // Arbeiderpartiet
    { partyId: 'no-ap', issueId: 'no-oil', stance: 'partial', evidence: 'Supports continued licensing on the Norwegian shelf with "stable and predictable" conditions, but rules out a 26th licensing round and opposes new petroleum activity in Skagerrak, the Møre fields, Iverryggen, Trænarevet, and near Jan Mayen this term.', source: 'https://www.arbeiderpartiet.no/politikken/olje-og-gass/', lastUpdated: UPDATED },
    { partyId: 'no-ap', issueId: 'no-climate', stance: 'partial', evidence: 'Targets cutting oil/gas production emissions 50% by 2030 and net zero by 2050 (vs. 2005 levels), while continuing production elsewhere.', source: 'https://www.arbeiderpartiet.no/politikken/olje-og-gass/', lastUpdated: UPDATED },
    { partyId: 'no-ap', issueId: 'no-immigration', stance: 'partial', evidence: 'States it is tightening immigration policy, prioritizes refugees via the UN quota system, and wants asylum processing partly reoriented toward "safe third country" concepts.', source: 'https://www.arbeiderpartiet.no/politikken/flyktning-og-asylpolitikk/', lastUpdated: UPDATED },
    { partyId: 'no-ap', issueId: 'no-eu', stance: 'support', evidence: 'Favors the EEA agreement over EU membership, would only revisit EU membership through a new party congress decision.', source: 'https://neitileu.no/aktuelt/dette-mener-partiene-om-sentrale-eu-eos-saker', lastUpdated: UPDATED },
    { partyId: 'no-ap', issueId: 'no-wealth-tax', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'no-ap', issueId: 'no-welfare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // Fremskrittspartiet
    { partyId: 'no-frp', issueId: 'no-oil', stance: 'support', evidence: 'Program confirms it wants to expand production, cut oil-company taxes, and open new exploration areas including Lofoten, Vesterålen, and Senja.', source: 'https://oilchange.org/blogs/norwayelection25/', lastUpdated: UPDATED },
    { partyId: 'no-frp', issueId: 'no-climate', stance: 'oppose', evidence: 'Analysis of its 2025-2029 program finds it does not meaningfully engage with climate change in fossil-fuel policy and dismisses international climate obligations.', source: 'https://oilchange.org/blogs/norwayelection25/', lastUpdated: UPDATED },
    { partyId: 'no-frp', issueId: 'no-immigration', stance: 'support', evidence: 'Official 2025-2029 program proposes ending in-Norway asylum applications at the border, processing all asylum seekers at centers outside Europe, and tightening family reunification.', source: 'https://www.frp.no/files/Program/2025/FrP-Partiprogram-2025-2029.pdf', lastUpdated: UPDATED },
    { partyId: 'no-frp', issueId: 'no-eu', stance: 'partial', evidence: 'Opposes Norwegian EU membership but supports keeping the EEA agreement, while pushing to renegotiate parts of it to limit "export" of Norwegian welfare benefits to EU labor migrants.', source: 'https://neitileu.no/aktuelt/dette-mener-partiene-om-sentrale-eu-eos-saker', lastUpdated: UPDATED },
    { partyId: 'no-frp', issueId: 'no-wealth-tax', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'no-frp', issueId: 'no-welfare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // Høyre
    { partyId: 'no-h', issueId: 'no-oil', stance: 'support', evidence: 'Frames oil/gas as essential for energy security, employment, and state income, and has pushed (with FrP) for opening Lofoten, Vesterålen, and Senja to petroleum activity.', source: 'https://oilchange.org/blogs/norwayelection25/', lastUpdated: UPDATED },
    { partyId: 'no-h', issueId: 'no-climate', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'no-h', issueId: 'no-immigration', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'no-h', issueId: 'no-eu', stance: 'support', evidence: 'Storting election program states it will work toward full Norwegian EU membership, calling it the only alternative to the EEA agreement, while defending the EEA in the meantime.', source: 'https://neitileu.no/aktuelt/dette-mener-partiene-om-sentrale-eu-eos-saker', lastUpdated: UPDATED },
    { partyId: 'no-h', issueId: 'no-wealth-tax', stance: 'oppose', evidence: 'Program pledges to remove the wealth tax on Norwegian workplaces/working capital, part of a pledged 50+ billion kroner in tax cuts.', source: 'https://hoyre.no/hoyres-skattelofte/', lastUpdated: UPDATED },
    { partyId: 'no-h', issueId: 'no-welfare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // SV
    { partyId: 'no-sv', issueId: 'no-oil', stance: 'oppose', evidence: 'Wants to stop searching for new oil/gas, end subsidies to oil companies, and make areas including Lofoten, Vesterålen, Senja, the Møre fields, and Jan Mayen permanently petroleum-free.', source: 'https://www.sv.no/sv-fra-a-til-a/olje-og-gass/', lastUpdated: UPDATED },
    { partyId: 'no-sv', issueId: 'no-climate', stance: 'support', evidence: 'Calls for offensive climate cuts, reduced shelf production, a higher CO2 tax, and electrification via offshore wind as part of ending new oil exploration.', source: 'https://www.sv.no/blog/a-aa/olje-og-gass/', lastUpdated: UPDATED },
    { partyId: 'no-sv', issueId: 'no-immigration', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'no-sv', issueId: 'no-eu', stance: 'partial', evidence: 'Has "frozen" the EEA membership question for the 2025-2029 period — not campaigning to leave or renegotiate it during this term.', source: 'https://neitileu.no/aktuelt/dette-mener-partiene-om-sentrale-eu-eos-saker', lastUpdated: UPDATED },
    { partyId: 'no-sv', issueId: 'no-wealth-tax', stance: 'support', evidence: 'Wants a more progressive wealth tax, removal of the share-valuation discount, higher taxation of expensive properties/holiday homes, and closing wealth-tax loopholes, while lowering taxes on low/ordinary incomes.', source: 'https://www.sv.no/blog/a-aa/formuesskatt/', lastUpdated: UPDATED },
    { partyId: 'no-sv', issueId: 'no-welfare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
  ],
};
