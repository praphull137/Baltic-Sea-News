import { CountryPartyData } from '../types';

const UPDATED = '2026-07-04';

export const germany: CountryPartyData = {
  countryId: 'germany',
  parties: [
    { id: 'de-cdu', countryId: 'germany', name: 'Christlich Demokratische Union / Christlich-Soziale Union', shortName: 'CDU/CSU', officialWebsite: 'https://www.cdu.de' },
    { id: 'de-afd', countryId: 'germany', name: 'Alternative für Deutschland', shortName: 'AfD', officialWebsite: 'https://www.afd.de' },
    { id: 'de-spd', countryId: 'germany', name: 'Sozialdemokratische Partei Deutschlands', shortName: 'SPD', officialWebsite: 'https://www.spd.de' },
    { id: 'de-gruene', countryId: 'germany', name: 'Bündnis 90/Die Grünen', shortName: 'Grüne', officialWebsite: 'https://www.gruene.de' },
  ],
  issues: [
    { id: 'de-immigration', countryId: 'germany', label: 'Immigration & Asylum Policy', topicId: 'immigration' },
    { id: 'de-energy', countryId: 'germany', label: 'Energy Transition & Climate Policy', topicId: 'climate' },
    { id: 'de-housing', countryId: 'germany', label: 'Housing & Affordable Rent Policy', topicId: 'housing' },
    { id: 'de-eu', countryId: 'germany', label: 'EU Integration', topicId: 'foreign-policy' },
    { id: 'de-defense', countryId: 'germany', label: 'Debt Brake Reform & Defense Spending', topicId: 'defense' },
    { id: 'de-wage', countryId: 'germany', label: 'Minimum Wage' },
    { id: 'de-economy', countryId: 'germany', label: 'Economic Competitiveness', topicId: 'economy' },
  ],
  positions: [
    // CDU/CSU
    { partyId: 'de-cdu', issueId: 'de-immigration', stance: 'support', evidence: 'Coalition agreement commits to ending irregular migration, rejecting asylum seekers at the border, suspending family reunification for subsidiary-protection holders for 2 years, and expanding the safe-country list.', source: 'https://www.cdu.de/aktuelles/cdu-deutschlands/wir-machen-schluss-mit-illegaler-migration/', lastUpdated: UPDATED },
    { partyId: 'de-cdu', issueId: 'de-energy', stance: 'partial', evidence: '2025 manifesto keeps nuclear power open (SMR/Gen IV research, possible plant restarts), a "technology-open" approach, while still targeting 2045 climate neutrality.', source: 'https://www.cdu.de/app/uploads/2025/01/km_btw_2025_wahlprogramm_langfassung_ansicht.pdf', lastUpdated: UPDATED },
    { partyId: 'de-cdu', issueId: 'de-housing', stance: 'support', evidence: 'Coalition agreement launches a "Wohnungsbau-Turbo," boosts social housing funding, and extends the rent brake (Mietpreisbremse) to end of 2029.', source: 'https://www.koalitionsvertrag2025.de/', lastUpdated: UPDATED },
    { partyId: 'de-cdu', issueId: 'de-eu', stance: 'partial', evidence: 'Favors an EU of strong nation-states with reduced bureaucracy, but also backs deeper EU defense integration and the 2050 EU climate-neutrality goal.', source: 'https://www.europawahl-bw.de/europawahlprogramm-cdu', lastUpdated: UPDATED },
    { partyId: 'de-cdu', issueId: 'de-defense', stance: 'support', evidence: 'Co-passed the March 18, 2025 constitutional amendment exempting defense spending above 1% of GDP from the debt brake, creating a €500bn special fund.', source: 'https://www.bundestag.de/dokumente/textarchiv/2025/kw12-de-sondersitzung-1056916', lastUpdated: UPDATED },
    { partyId: 'de-cdu', issueId: 'de-wage', stance: 'partial', evidence: 'Coalition agreement commits only to an independent wage commission; states €15/hour is "achievable" in 2026 but disputes it being guaranteed.', source: 'https://www.lto.de/recht/hintergruende/h/mindestlohn-koalitionsvertrag-15-euro-streit-tarifautonomie-eu-richtlinie', lastUpdated: UPDATED },
    { partyId: 'de-cdu', issueId: 'de-economy', stance: 'support', evidence: '"Wirtschaftswende" plan proposes lower corporate taxes, abolishing the solidarity surcharge, and a "one-in-two-out" bureaucracy brake.', source: 'https://www.cdu.de/aktuelles/wirtschaft/politikwechsel-fuer-ein-neues-wohlstandsversprechen/', lastUpdated: UPDATED },

    // SPD
    { partyId: 'de-spd', issueId: 'de-immigration', stance: 'support', evidence: 'Co-negotiated and signed the 2025 coalition agreement with the same restrictive measures as CDU/CSU.', source: 'https://www.cdu.de/aktuelles/cdu-deutschlands/wir-machen-schluss-mit-illegaler-migration/', lastUpdated: UPDATED },
    { partyId: 'de-spd', issueId: 'de-energy', stance: 'support', evidence: '2025 government program commits to 2045 climate neutrality, accelerated wind/solar buildout, capped grid fees (3 ct/kWh), and a Klimageld rebate.', source: 'https://mehr.spd.de/custom-static-assets/documents/Regierungsprogramm.pdf', lastUpdated: UPDATED },
    { partyId: 'de-spd', issueId: 'de-housing', stance: 'support', evidence: 'Joint coalition agreement commits to the Wohnungsbau-Turbo, increased social housing funds, and rent-brake extension to 2029.', source: 'https://www.koalitionsvertrag2025.de/', lastUpdated: UPDATED },
    { partyId: 'de-spd', issueId: 'de-eu', stance: 'support', evidence: 'Program calls for Dublin reform toward solidarity-based distribution, removing EU decision blockages, and an EU minimum-wage directive.', source: 'https://www.spd.de/programm/zukunftsprogramm/uebersicht/iv-souveraenes-europa-in-der-welt', lastUpdated: UPDATED },
    { partyId: 'de-spd', issueId: 'de-defense', stance: 'support', evidence: 'Co-authored and voted for the March 2025 constitutional amendment and the associated special fund.', source: 'https://www.bundestag.de/dokumente/textarchiv/2025/kw12-de-sondersitzung-1056916', lastUpdated: UPDATED },
    { partyId: 'de-spd', issueId: 'de-wage', stance: 'support', evidence: 'Maintains the minimum wage will reach €15/hour by 2026, contrasting with the Union’s more cautious reading of the same coalition text.', source: 'https://www.vorwaerts.de/inland/koalitionsvertrag-steigt-der-mindestlohn-auf-15-euro-oder-nicht', lastUpdated: UPDATED },
    { partyId: 'de-spd', issueId: 'de-economy', stance: 'unknown', evidence: 'No clear, citable party-level position found distinct from the coalition agreement.', lastUpdated: UPDATED },

    // AfD
    { partyId: 'de-afd', issueId: 'de-immigration', stance: 'oppose', evidence: '2025 manifesto calls for "remigration," permanent border controls, ending family reunification, and withdrawal from the UN Refugee/Migration Pacts.', source: 'https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf', lastUpdated: UPDATED },
    { partyId: 'de-afd', issueId: 'de-energy', stance: 'oppose', evidence: 'Rejects the Paris Agreement, disputes anthropogenic climate change, and demands ending renewables subsidies while restarting nuclear/extending coal plants.', source: 'https://www.afd.de/energie-umwelt-klima/', lastUpdated: UPDATED },
    { partyId: 'de-afd', issueId: 'de-housing', stance: 'oppose', evidence: 'Rejects rent caps and price brakes, calls for deregulating building standards, and full tax exemption on first-home purchases.', source: 'https://www.afd.de/wahlprogramm-bauen-wohnen-mieten/', lastUpdated: UPDATED },
    { partyId: 'de-afd', issueId: 'de-eu', stance: 'oppose', evidence: 'Demands German withdrawal from the euro, reintroducing the Deutsche Mark, and reforming the EU into a loose "union of nations" or an orderly withdrawal.', source: 'https://politik.watson.de/politik/deutschland/136357675-afd-wahlprogramm-2025-die-plaene-zu-euro-ausstieg-abtreibung-migration', lastUpdated: UPDATED },
    { partyId: 'de-afd', issueId: 'de-defense', stance: 'oppose', evidence: 'Voted against the March 2025 debt-brake amendment and filed an unsuccessful emergency Constitutional Court complaint over the truncated deliberation.', source: 'https://www.bundestag.de/dokumente/textarchiv/2025/kw12-de-sondersitzung-1056916', lastUpdated: UPDATED },
    { partyId: 'de-afd', issueId: 'de-wage', stance: 'partial', evidence: 'Opposes politically set wage increases, wanting the minimum wage set solely by an independent commission.', source: 'https://www.bundestag.de/presse/hib/kurzmeldungen-1010234', lastUpdated: UPDATED },
    { partyId: 'de-afd', issueId: 'de-economy', stance: 'support', evidence: 'Proposes a flat 25% income-tax rate, abolishing the solidarity surcharge and inheritance/property tax, and cutting business regulation.', source: 'https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf', lastUpdated: UPDATED },

    // Grüne
    { partyId: 'de-gruene', issueId: 'de-immigration', stance: 'partial', evidence: 'Upholds the individual right to asylum and non-refoulement, opposes permanent internal border controls, but wants more structured legal migration pathways.', source: 'https://www.gruene.de/themen/einwanderung-gestalten', lastUpdated: UPDATED },
    { partyId: 'de-gruene', issueId: 'de-energy', stance: 'support', evidence: '2025 program calls for 100% climate-neutral electricity by 2035, a coal phase-out by 2030, and ending domestic oil/gas extraction.', source: 'https://cms.gruene.de/uploads/assets/20241216_BTW25_Programmentwurf_DINA4_digital.pdf', lastUpdated: UPDATED },
    { partyId: 'de-gruene', issueId: 'de-housing', stance: 'support', evidence: 'Wants a permanent nationwide rent brake, closed loopholes, rent freezes in tight markets, and expanded social/non-profit housing funding.', source: 'https://www.gruene-bundestag.de/unsere-politik/was-unsere-politik-fuer-dich-bedeutet/bezahlbares-wohnen-faire-mieten-statt-staendiger-preisexplosion/', lastUpdated: UPDATED },
    { partyId: 'de-gruene', issueId: 'de-eu', stance: 'support', evidence: 'Pushes continued EU enlargement with reform, a "strategically sovereign" EU, and integrated European rail/power/hydrogen infrastructure.', source: 'https://www.gruene-bundestag.de/unsere-politik/unsere-ziele/europa/', lastUpdated: UPDATED },
    { partyId: 'de-gruene', issueId: 'de-defense', stance: 'partial', evidence: 'Supplied the decisive votes for the March 2025 debt-brake amendment after negotiating its expansion to cover civil protection, intelligence, and Ukraine aid.', source: 'https://www.bpb.de/kurz-knapp/hintergrund-aktuell/560839/grundgesetzaenderung-fuer-verteidigung-und-sondervermoegen/', lastUpdated: UPDATED },
    { partyId: 'de-gruene', issueId: 'de-wage', stance: 'support', evidence: 'Calls for raising the minimum wage toward €15, anchoring an EU rule at 60% of median wage, and extending coverage to under-18s.', source: 'https://www.bundestagswahl-bw.de/wahlprogramm-gruene', lastUpdated: UPDATED },
    { partyId: 'de-gruene', issueId: 'de-economy', stance: 'partial', evidence: 'Proposes a "Deutschlandfonds" and a temporary 10% investment premium, plus an investment-screening law against foreign takeovers of strategic industries.', source: 'https://www.gruene.de/themen/die-wirtschaft-st%C3%A4rken', lastUpdated: UPDATED },
  ],
};
