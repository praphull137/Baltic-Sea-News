import { CountryPartyData } from '../types';

const UPDATED = '2026-07-04';

export const denmark: CountryPartyData = {
  countryId: 'denmark',
  parties: [
    { id: 'dk-a', countryId: 'denmark', name: 'Socialdemokratiet', shortName: 'A', officialWebsite: 'https://www.socialdemokratiet.dk/' },
    { id: 'dk-f', countryId: 'denmark', name: 'SF – Socialistisk Folkeparti', shortName: 'SF', officialWebsite: 'https://sf.dk/' },
    { id: 'dk-v', countryId: 'denmark', name: 'Venstre', shortName: 'V', officialWebsite: 'https://www.venstre.dk/' },
    { id: 'dk-i', countryId: 'denmark', name: 'Liberal Alliance', shortName: 'I', officialWebsite: 'https://www.liberalalliance.dk/' },
  ],
  issues: [
    { id: 'dk-immigration', countryId: 'denmark', label: 'Immigration & Asylum Policy', topicId: 'immigration' },
    { id: 'dk-climate', countryId: 'denmark', label: 'Climate & Green Transition', topicId: 'climate' },
    { id: 'dk-welfare', countryId: 'denmark', label: 'Welfare & Elderly Care' },
    { id: 'dk-eu', countryId: 'denmark', label: 'EU Policy', topicId: 'foreign-policy' },
    { id: 'dk-tax', countryId: 'denmark', label: 'Taxation & Economy', topicId: 'economy' },
  ],
  positions: [
    // Socialdemokratiet
    { partyId: 'dk-a', issueId: 'dk-immigration', stance: 'support', evidence: 'Pursued an 18-point tightening package PM Mette Frederiksen described as "the strictest immigration policy in Europe," including proposals to end asylum applications in Denmark and move expulsion decisions to an administrative agency.', source: 'https://www.socialdemokratiet.dk/media/fkjkbmst/en-udlaendingepolitik-der-samler-danmark-5.pdf', lastUpdated: UPDATED },
    { partyId: 'dk-a', issueId: 'dk-climate', stance: 'partial', evidence: 'Backs a "fair" green transition combining fossil-free electricity investment (wind, nuclear) with support for households facing energy costs; no hard target beyond the existing 70%-by-2030 law was found.', source: 'https://www.socialdemokratiet.dk/det-vi-mener/finanspolitik/', lastUpdated: UPDATED },
    { partyId: 'dk-a', issueId: 'dk-welfare', stance: 'support', evidence: 'Increased the elderly check (ældrecheck) permanently by 5,000 kr and says welfare funding should scale with demographic change.', source: 'https://www.socialdemokratiet.dk/seneste-nyt/status-paa-dansk-udlaendingepolitik/', lastUpdated: UPDATED },
    { partyId: 'dk-a', issueId: 'dk-eu', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'dk-a', issueId: 'dk-tax', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // SF
    { partyId: 'dk-f', issueId: 'dk-immigration', stance: 'partial', evidence: 'Supports resuming quota-refugee intake and a common humane EU asylum system, while wanting to fix "unreasonable rules" that expel students but let some criminals stay; opposes closing asylum quotas entirely.', source: 'https://sf.dk/det-vil-vi/integration/', lastUpdated: UPDATED },
    { partyId: 'dk-f', issueId: 'dk-climate', stance: 'support', evidence: 'Wants Denmark climate-neutral by 2040 (ahead of the 70%-by-2030 law), doubling organic farming by 2030, halting cultivation on 65,000 hectares of the most climate-damaging soil, and a climate tax on agriculture.', source: 'https://sf.dk/en-aegte-klimaindsats-i-landbruget/', lastUpdated: UPDATED },
    { partyId: 'dk-f', issueId: 'dk-welfare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'dk-f', issueId: 'dk-eu', stance: 'support', evidence: 'Wants a "green and solidaristic Europe," backing joint EU solutions on climate, tax evasion, and refugee responsibility-sharing; the only Danish member of the European Greens.', source: 'https://sf.dk/det-vil-vi/eu-politik/', lastUpdated: UPDATED },
    { partyId: 'dk-f', issueId: 'dk-tax', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // Venstre
    { partyId: 'dk-v', issueId: 'dk-immigration', stance: 'support', evidence: 'Advocates a "strict and consistent" immigration policy, saying foreigners must respect Danish values, and links crime/insecurity to migration from specific regions.', source: 'https://www.venstre.dk/politik/politik-a-aa/udlaendingepolitik', lastUpdated: UPDATED },
    { partyId: 'dk-v', issueId: 'dk-climate', stance: 'partial', evidence: 'Frames climate policy around making Denmark "richer, greener and stronger" via green exports/technology, open to all future energy sources including new nuclear; emphasizes a global rather than purely national approach.', source: 'https://www.venstre.dk/politik/politik-a-aa/klimapolitik', lastUpdated: UPDATED },
    { partyId: 'dk-v', issueId: 'dk-welfare', stance: 'support', evidence: 'Co-negotiated the April 2024 elderly-care reform introducing a national "free choice guarantee" letting elderly pick care providers, and wants to ease private/free nursing-home establishment.', source: 'https://www.venstre.dk/politik/venstres-politiske-udspil/tryghed-og-vaerdighed-venstre-vil-sikre-en-langt-bedre-aeldrepleje', lastUpdated: UPDATED },
    { partyId: 'dk-v', issueId: 'dk-eu', stance: 'support', evidence: 'Backs strengthening EU external borders, offshore asylum reception centers, and closer EU defense cooperation within NATO; part of the Renew Europe group.', source: 'https://www.venstre.dk/nyheder/venstre-vil-styrke-eus-ydre-graenser', lastUpdated: UPDATED },
    { partyId: 'dk-v', issueId: 'dk-tax', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // Liberal Alliance
    { partyId: 'dk-i', issueId: 'dk-immigration', stance: 'partial', evidence: 'Platform is "open borders, closed coffers" — not opposed to immigration per se, but says taxpayers should not fund newcomers’/integration costs, and would exclude those undermining liberal democracy.', source: 'https://www.liberalalliance.dk/politik/udlaendingepolitik/', lastUpdated: UPDATED },
    { partyId: 'dk-i', issueId: 'dk-climate', stance: 'partial', evidence: 'Prioritizes global CO2 reductions over "symbolic" national politics, wants a global/EU-wide uniform CO2 tax, market-based tools, two new nuclear plants, and 0.2% of GDP to a climate research fund.', source: 'https://www.liberalalliance.dk/politik/klima/', lastUpdated: UPDATED },
    { partyId: 'dk-i', issueId: 'dk-welfare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'dk-i', issueId: 'dk-eu', stance: 'partial', evidence: 'Wants the EU to focus narrowly on peace/freedom/free trade and resist over-regulation, but supports a stronger EU security role and common external border/asylum reform; strong subsidiarity advocate.', source: 'https://www.liberalalliance.dk/politik/eu/', lastUpdated: UPDATED },
    { partyId: 'dk-i', issueId: 'dk-tax', stance: 'support', evidence: 'Core platform is "lower taxes, more freedom, less bureaucracy, higher growth."', source: 'https://www.liberalalliance.dk/wp-content/uploads/2024/04/Frihed-Fred-Fremgang-LAs-EU-program-2024.pdf', lastUpdated: UPDATED },
  ],
};
