import { CountryPartyData } from '../types';

const UPDATED = '2026-07-04';

export const sweden: CountryPartyData = {
  countryId: 'sweden',
  parties: [
    { id: 'se-s', countryId: 'sweden', name: 'Sveriges Socialdemokratiska Arbetareparti', shortName: 'S', officialWebsite: 'https://www.socialdemokraterna.se/' },
    { id: 'se-sd', countryId: 'sweden', name: 'Sverigedemokraterna', shortName: 'SD', officialWebsite: 'https://www.sd.se/' },
    { id: 'se-m', countryId: 'sweden', name: 'Moderata Samlingspartiet', shortName: 'M', officialWebsite: 'https://moderaterna.se/' },
    { id: 'se-c', countryId: 'sweden', name: 'Centerpartiet', shortName: 'C', officialWebsite: 'https://www.centerpartiet.se/' },
  ],
  issues: [
    { id: 'se-crime', countryId: 'sweden', label: 'Crime & Law and Order' },
    { id: 'se-migration', countryId: 'sweden', label: 'Migration', topicId: 'immigration' },
    { id: 'se-climate', countryId: 'sweden', label: 'Climate', topicId: 'climate' },
    { id: 'se-welfare', countryId: 'sweden', label: 'Welfare' },
    { id: 'se-education', countryId: 'sweden', label: 'Education', topicId: 'education' },
    { id: 'se-healthcare', countryId: 'sweden', label: 'Healthcare', topicId: 'healthcare' },
  ],
  positions: [
    // Socialdemokraterna (S)
    { partyId: 'se-s', issueId: 'se-crime', stance: 'support', evidence: 'Proposes a Swedish "mafia law" with collective criminal liability for gang leaders, double sentences for gang criminals, and 50,000 police employees (34,000 officers) by 2032.', source: 'https://www.socialdemokraterna.se/var-politik/a-till-o/gangkriminalitet', lastUpdated: UPDATED },
    { partyId: 'se-s', issueId: 'se-migration', stance: 'partial', evidence: 'Has sharpened its migration stance toward restriction, criticizing the Moderates’ 2008 labor-immigration deregulation as fueling criminal-network exploitation of work permits.', source: 'https://www.socialdemokraterna.se/var-politik/a-till-o/migration-och-flyktingpolitik', lastUpdated: UPDATED },
    { partyId: 'se-s', issueId: 'se-climate', stance: 'support', evidence: 'Wants net-zero emissions by 2045, a fossil-fuel vehicle sales ban targeted for 2027, and Sweden to become a circular economy by 2035.', source: 'https://www.socialdemokraterna.se/var-politik/a-till-o/klimatpolitik', lastUpdated: UPDATED },
    { partyId: 'se-s', issueId: 'se-welfare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'se-s', issueId: 'se-education', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'se-s', issueId: 'se-healthcare', stance: 'support', evidence: 'Proposes a 2.4 billion kronor staffing investment to shorten care queues, a guaranteed fixed doctor contact for all residents, and a ban on private health insurance within publicly funded care.', source: 'https://www.socialdemokraterna.se/var-politik/a-till-o/sjukvard', lastUpdated: UPDATED },

    // Sverigedemokraterna (SD)
    { partyId: 'se-sd', issueId: 'se-crime', stance: 'support', evidence: 'Wants particularly long or indefinite sentences for gang-related crime, real life sentences, no early release, and a large increase in police numbers.', source: 'https://www.sd.se/vad-vi-vill/fangsla-och-utvisa/', lastUpdated: UPDATED },
    { partyId: 'se-sd', issueId: 'se-migration', stance: 'support', evidence: 'Aims for the strictest immigration legislation possible within EU asylum rules, near-zero direct asylum reception from outside the region, tighter family-reunification rules, and citizenship conditioned on language/self-sufficiency/residence duration.', source: 'https://www.sd.se/vad-vi-vill/en-strikt-invandringspolitik/', lastUpdated: UPDATED },
    { partyId: 'se-sd', issueId: 'se-climate', stance: 'partial', evidence: 'Under the Tidö Agreement, now backs Sweden’s 2045 net-zero goal but insists policy be globally focused and technology-driven and must not jeopardize national/household economies — previously opposed the same target.', source: 'https://www.svt.se/nyheter/inrikes/sd-staller-sig-bakom-sveriges-klimatmal--myxt3h', lastUpdated: UPDATED },
    { partyId: 'se-sd', issueId: 'se-welfare', stance: 'partial', evidence: 'Says welfare should prioritize Swedish citizens and "those who have contributed to the country," alongside broad commitments to functioning welfare.', source: 'https://www.sd.se/vastragotaland/vad-vi-vill/', lastUpdated: UPDATED },
    { partyId: 'se-sd', issueId: 'se-education', stance: 'partial', evidence: 'Emphasizes "order and knowledge" in schools and employing more support staff (school nurses, counsellors, psychologists); no detailed curriculum position found.', source: 'https://www.sd.se/vastragotaland/vad-vi-vill/', lastUpdated: UPDATED },
    { partyId: 'se-sd', issueId: 'se-healthcare', stance: 'partial', evidence: 'Frames welfare, including healthcare, as primarily for Swedish citizens, while calling for shorter waiting times, secure elderly care, and cheaper dental care.', source: 'https://sd.se/var-politik/sjukvardspolitik/', lastUpdated: UPDATED },

    // Moderaterna (M)
    { partyId: 'se-m', issueId: 'se-crime', stance: 'support', evidence: 'Leading the largest reform of Swedish criminal law since the penal code’s introduction: abolishing multiple-offense sentence discounts, ~50 penalty increases, double sentences for gang criminals, and a 40% police-budget increase 2023–2027.', source: 'https://moderaterna.se/var-politik/brott-och-straff/', lastUpdated: UPDATED },
    { partyId: 'se-m', issueId: 'se-migration', stance: 'support', evidence: 'Pursuing a "paradigm shift" — asylum-related permits at their lowest level since 1985, asylum seekers down 60% since 2022, a target of ~5,000 asylum seekers/year, and citizenship tied to Swedish-language/civics tests.', source: 'https://moderaterna.se/var-politik/migration/', lastUpdated: UPDATED },
    { partyId: 'se-m', issueId: 'se-climate', stance: 'support', evidence: 'Backs net-zero by 2045 at latest, a goal of 100% fossil-free electricity, and a major new nuclear-power expansion paired with hydropower for industry.', source: 'https://moderaterna.se/var-politik/klimat-miljo-och-energi/', lastUpdated: UPDATED },
    { partyId: 'se-m', issueId: 'se-welfare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'se-m', issueId: 'se-education', stance: 'support', evidence: 'Introducing a new national grading system from autumn 2028, pushing a knowledge-and-discipline model, reformed teacher education, and abolishing "Swedish as a second language" in favor of non-merit-graded basic language instruction.', source: 'https://moderaterna.se/var-politik/skola-och-utbildning/', lastUpdated: UPDATED },
    { partyId: 'se-m', issueId: 'se-healthcare', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // Centerpartiet (C)
    { partyId: 'se-c', issueId: 'se-crime', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'se-c', issueId: 'se-migration', stance: 'partial', evidence: 'Supports "regulated" immigration combining order with humanism — open labor immigration for both low- and high-skilled workers, more organized asylum reception, and a common EU refugee-responsibility-sharing policy.', source: 'https://www.centerpartiet.se/var-politik/politik-a-o/migration-och-integration', lastUpdated: UPDATED },
    { partyId: 'se-c', issueId: 'se-climate', stance: 'support', evidence: 'Wants climate neutrality by 2040 (ahead of the national 2045 target), a full fossil-fuel phase-out, large green-tech investment, and market-based new nuclear power without subsidies.', source: 'https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/klimat', lastUpdated: UPDATED },
    { partyId: 'se-c', issueId: 'se-welfare', stance: 'partial', evidence: 'General principle that welfare should function everywhere, be accessible regardless of location, and preserve self-determination for patients, students, and workers.', source: 'https://www.centerpartiet.se/var-politik/politik-a-o/vard-och-omsorg', lastUpdated: UPDATED },
    { partyId: 'se-c', issueId: 'se-education', stance: 'partial', evidence: 'Wants more teachers/educators, clearer knowledge requirements, and earlier interventions for struggling students, without detailed specifics found.', source: 'https://www.centerpartiet.se/lokal/varmland/kristinehamn/startsida/var-politik/skolan', lastUpdated: UPDATED },
    { partyId: 'se-c', issueId: 'se-healthcare', stance: 'support', evidence: 'Backs patients’ right to digital healthcare contact in primary care, a fixed-doctor-contact guarantee (passed 2022), shorter queues, and expanded patient choice especially in rural care centers.', source: 'https://www.centerpartiet.se/var-politik/politik-a-o/vard-och-omsorg/sjukvard', lastUpdated: UPDATED },
  ],
};
