import { CountryPartyData } from '../types';

const UPDATED = '2026-07-04';

export const iceland: CountryPartyData = {
  countryId: 'iceland',
  parties: [
    { id: 'is-samfylkingin', countryId: 'iceland', name: 'Samfylkingin – Jafnaðarflokkur Íslands', shortName: 'Samfylkingin', officialWebsite: 'https://xs.is/' },
    { id: 'is-sjalfstaedis', countryId: 'iceland', name: 'Sjálfstæðisflokkurinn', shortName: 'Sjálfstæðisflokkurinn', officialWebsite: 'https://xd.is/' },
    { id: 'is-vidreisn', countryId: 'iceland', name: 'Viðreisn', shortName: 'Viðreisn', officialWebsite: 'https://vidreisn.is/' },
    { id: 'is-flokkurfolksins', countryId: 'iceland', name: 'Flokkur fólksins', shortName: 'Flokkur fólksins', officialWebsite: 'https://flokkurfolksins.is/' },
  ],
  issues: [
    { id: 'is-eu', countryId: 'iceland', label: 'EU/EEA Relations & Accession Referendum', topicId: 'foreign-policy' },
    { id: 'is-fisheries', countryId: 'iceland', label: 'Fisheries Policy (Quotas & Fees)' },
    { id: 'is-immigration', countryId: 'iceland', label: 'Immigration & Asylum Policy', topicId: 'immigration' },
    { id: 'is-energy', countryId: 'iceland', label: 'Energy Policy', topicId: 'energy' },
    { id: 'is-healthcare', countryId: 'iceland', label: 'Healthcare', topicId: 'healthcare' },
    { id: 'is-cost-of-living', countryId: 'iceland', label: 'Cost of Living & Housing', topicId: 'housing' },
  ],
  positions: [
    // Samfylkingin
    { partyId: 'is-samfylkingin', issueId: 'is-eu', stance: 'support', evidence: 'Led the coalition (with Viðreisn and the People’s Party) that scheduled the 29 August 2026 referendum on resuming EU accession talks; the main pro-EU force in Iceland.', source: 'https://en.wikipedia.org/wiki/2026_Icelandic_European_Union_membership_negotiations_referendum', lastUpdated: UPDATED },
    { partyId: 'is-samfylkingin', issueId: 'is-fisheries', stance: 'support', evidence: 'Party officials argued the 2025 fishing-fee increase is a fairness matter ensuring the public gets full resource rent from fish stocks.', source: 'https://xs.is/frettir/2025/07/mergur-veidigjaldamalsins', lastUpdated: UPDATED },
    { partyId: 'is-samfylkingin', issueId: 'is-immigration', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'is-samfylkingin', issueId: 'is-energy', stance: 'partial', evidence: 'Environment/Energy Minister proposed fast-tracking approval of new power plants (1.8 TWh/yr) and pledged 5 TWh/yr of added production over a decade, including for data centers and land-based fish farming.', source: 'https://www.bloomberg.com/news/articles/2025-01-16/iceland-energy-minister-plans-to-speed-up-new-power-plants', lastUpdated: UPDATED },
    { partyId: 'is-samfylkingin', issueId: 'is-healthcare', stance: 'unknown', evidence: 'Party site lists "strong welfare services" as a pillar but no specific healthcare commitments were found.', lastUpdated: UPDATED },
    { partyId: 'is-samfylkingin', issueId: 'is-cost-of-living', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // Sjálfstæðisflokkurinn
    { partyId: 'is-sjalfstaedis', issueId: 'is-eu', stance: 'oppose', evidence: 'Leader Guðrún Hafsteinsdóttir wrote "Iceland is not for sale," opposing EU membership talks, and sought to delay the referendum for "adequate discussion."', source: 'https://www.icelandreview.com/news/independence-party-proposes-delay-to-eu-referendum/', lastUpdated: UPDATED },
    { partyId: 'is-sjalfstaedis', issueId: 'is-fisheries', stance: 'oppose', evidence: 'MPs voted as a bloc against the 2025 fishing-fee reform; leader Hafsteinsdóttir called sharing fisheries with other countries "totally unacceptable."', source: 'https://weareaquaculture.com/featured/iceland-passes-new-fishing-fee-law-within-a-divided-country', lastUpdated: UPDATED },
    { partyId: 'is-sjalfstaedis', issueId: 'is-immigration', stance: 'partial', evidence: 'The party’s youth wing adopted a 2025 platform to pause new asylum processing, revise family reunification, and require civic integration tests, reflecting a hardening stance within the party.', source: 'https://www.mbl.is/frettir/innlent/2025/10/07/sus_vill_stodva_afgreidslu_haelisumsokna/', lastUpdated: UPDATED },
    { partyId: 'is-sjalfstaedis', issueId: 'is-energy', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'is-sjalfstaedis', issueId: 'is-healthcare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'is-sjalfstaedis', issueId: 'is-cost-of-living', stance: 'support', evidence: 'Official platform proposes lowering construction costs via simplified building regulations, higher VAT refunds, expanded land supply/growth boundaries, and lower interest rates via budget surpluses.', source: 'https://xd.is/malefnin/husnaedismal/', lastUpdated: UPDATED },

    // Viðreisn
    { partyId: 'is-vidreisn', issueId: 'is-eu', stance: 'support', evidence: 'Described as leading the pro-EU position; its voters show the strongest backing for restarting accession talks in the referendum.', source: 'https://www.icelandreview.com/news/gallup-finds-strong-political-differences-over-icelands-eu-talks/', lastUpdated: UPDATED },
    { partyId: 'is-vidreisn', issueId: 'is-fisheries', stance: 'unknown', evidence: 'Official platform lists "Fisheries" as a policy section but no specific position text was found.', lastUpdated: UPDATED },
    { partyId: 'is-vidreisn', issueId: 'is-immigration', stance: 'unknown', evidence: 'Party MPs voted against a restrictive 2023 immigration bill, but no citable primary-source statement of the party’s own position was found (treat with reduced confidence).', lastUpdated: UPDATED },
    { partyId: 'is-vidreisn', issueId: 'is-energy', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'is-vidreisn', issueId: 'is-healthcare', stance: 'support', evidence: 'Official policy states waiting lists (especially for GPs) are "far too much of a problem," calls for equal access regardless of wealth, and prioritizes strengthening Landspítali.', source: 'https://vidreisn.is/stefnan/heilbrigdismal/', lastUpdated: UPDATED },
    { partyId: 'is-vidreisn', issueId: 'is-cost-of-living', stance: 'partial', evidence: 'States it aims to bring down inflation and address the housing shortage caused by high interest rates.', source: 'https://vidreisn.is/stefnan/', lastUpdated: UPDATED },

    // Flokkur fólksins
    { partyId: 'is-flokkurfolksins', issueId: 'is-eu', stance: 'partial', evidence: 'Leader Inga Sæland is frequently Eurosceptic and critical of EU/international obligations, yet the party sits in the coalition government that itself scheduled the referendum.', source: "https://en.wikipedia.org/wiki/People's_Party_(Iceland)", lastUpdated: UPDATED },
    { partyId: 'is-flokkurfolksins', issueId: 'is-fisheries', stance: 'partial', evidence: 'Calls for expanding coastal/handline fishing rights for small boats and opposes the current regional quota system, favoring increased local community access to marine resources.', source: 'https://flokkurfolksins.is/priorities/', lastUpdated: UPDATED },
    { partyId: 'is-flokkurfolksins', issueId: 'is-immigration', stance: 'oppose', evidence: 'Official priorities call for aligning asylum law with Nordic standards, monitoring borders via airlines, and deporting asylum seekers who commit crimes.', source: 'https://flokkurfolksins.is/priorities/', lastUpdated: UPDATED },
    { partyId: 'is-flokkurfolksins', issueId: 'is-energy', stance: 'partial', evidence: 'Demands "full price" be paid for access to national resources and commits to keeping the National Power Company (Landsvirkjun) in public ownership; opposes foreign billionaire land purchases.', source: 'https://flokkurfolksins.is/priorities/', lastUpdated: UPDATED },
    { partyId: 'is-flokkurfolksins', issueId: 'is-healthcare', stance: 'support', evidence: 'Priorities include funding increases, Nordic-aligned wage parity to fix staffing shortages, eliminating treatment waiting lists, and free school psychological services.', source: 'https://flokkurfolksins.is/priorities/', lastUpdated: UPDATED },
    { partyId: 'is-flokkurfolksins', issueId: 'is-cost-of-living', stance: 'support', evidence: 'Priorities propose raising the tax-free monthly threshold to ISK 450,000, fixed non-indexed mortgage interest rates, and removing housing costs from the CPI to curb inflation.', source: 'https://flokkurfolksins.is/priorities/', lastUpdated: UPDATED },
  ],
};
