import { CountryPartyData } from '../types';

const UPDATED = '2026-07-04';

export const finland: CountryPartyData = {
  countryId: 'finland',
  parties: [
    { id: 'fi-kok', countryId: 'finland', name: 'Kansallinen Kokoomus', shortName: 'NCP / Kok', officialWebsite: 'https://www.kokoomus.fi' },
    { id: 'fi-ps', countryId: 'finland', name: 'Perussuomalaiset', shortName: 'Finns Party', officialWebsite: 'https://www.perussuomalaiset.fi' },
    { id: 'fi-sdp', countryId: 'finland', name: 'Suomen Sosialidemokraattinen Puolue', shortName: 'SDP', officialWebsite: 'https://www.sdp.fi' },
    { id: 'fi-kesk', countryId: 'finland', name: 'Suomen Keskusta', shortName: 'Centre Party', officialWebsite: 'https://keskusta.fi' },
  ],
  issues: [
    { id: 'fi-defense', countryId: 'finland', label: 'Defense & NATO Membership', topicId: 'defense' },
    { id: 'fi-immigration', countryId: 'finland', label: 'Immigration & Labor Migration', topicId: 'immigration' },
    { id: 'fi-education', countryId: 'finland', label: 'Education Funding & Policy', topicId: 'education' },
    { id: 'fi-energy', countryId: 'finland', label: 'Energy & Nuclear Power', topicId: 'energy' },
    { id: 'fi-tech', countryId: 'finland', label: 'Technology, AI & Digitalization', topicId: 'technology' },
    { id: 'fi-security', countryId: 'finland', label: 'National & Cyber Security', topicId: 'defense' },
  ],
  positions: [
    // Kokoomus (NCP)
    { partyId: 'fi-kok', issueId: 'fi-defense', stance: 'support', evidence: 'States "we are ready to make Finland a member state of NATO... working actively towards this objective" and commits to keeping defense spending at 2% of GDP.', source: 'https://www.kokoomus.fi/what-is-the-position-of-the-national-coalition-party-towards-nato/?lang=en', lastUpdated: UPDATED },
    { partyId: 'fi-kok', issueId: 'fi-immigration', stance: 'support', evidence: 'Seeks to significantly increase work-based immigration and has proposed a Canadian-style points-based immigration system, clashing publicly with coalition partner Finns Party over labor migration rules.', source: 'https://yle.fi/a/74-20029047', lastUpdated: UPDATED },
    { partyId: 'fi-kok', issueId: 'fi-education', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'fi-kok', issueId: 'fi-energy', stance: 'support', evidence: 'Platform emphasizes "cost-effective, market-based and technology-neutral climate policy" alongside affordable electricity access.', source: 'https://www.fortum.com/media/2023/04/broad-political-support-nuclear-power-and-renewable-energy-promising-starting-point-finnish-government-negotiations', lastUpdated: UPDATED },
    { partyId: 'fi-kok', issueId: 'fi-tech', stance: 'support', evidence: 'Program backs AI documentation tools and robotics in healthcare, and promoting digitalization/data skills among SMEs.', source: 'https://www.kokoomus.fi/national-coalition-party-election-program/?lang=en', lastUpdated: UPDATED },
    { partyId: 'fi-kok', issueId: 'fi-security', stance: 'unknown', evidence: 'Folded into its NATO commitment; no separate cyber/security-specific citable statement found.', lastUpdated: UPDATED },

    // Finns Party
    { partyId: 'fi-ps', issueId: 'fi-defense', stance: 'support', evidence: 'Historically favored military non-alignment, but backed NATO application after Russia’s 2022 invasion; parliament approved the application 188–8 with near-total cross-party support.', source: 'https://yle.fi/a/3-12449487', lastUpdated: UPDATED },
    { partyId: 'fi-ps', issueId: 'fi-immigration', stance: 'oppose', evidence: 'Party-led Interior Ministry drove restrictive citizenship reforms: extended residency requirement, fewer days allowed abroad, new citizenship/language tests, and an income requirement.', source: 'https://globalcit.eu/restrictive-citizenship-reform-in-finland-in-three-acts-a-paradigm-shift-driven-by-the-radical-right/', lastUpdated: UPDATED },
    { partyId: 'fi-ps', issueId: 'fi-education', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'fi-ps', issueId: 'fi-energy', stance: 'partial', evidence: 'Critical of the 2035 carbon-neutrality target; platform emphasizes domestic energy sources and proposes stricter wind-power permitting and an electricity price corridor.', source: 'https://www.fortum.com/media/2023/04/broad-political-support-nuclear-power-and-renewable-energy-promising-starting-point-finnish-government-negotiations', lastUpdated: UPDATED },
    { partyId: 'fi-ps', issueId: 'fi-tech', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'fi-ps', issueId: 'fi-security', stance: 'support', evidence: 'Official defense program states defense appropriations should be maintained at least at present levels and calls for protecting computer/telephone networks from attack.', source: 'https://www.perussuomalaiset.fi/wp-content/uploads/2013/12/ps_defence_final.pdf', lastUpdated: UPDATED },

    // SDP
    { partyId: 'fi-sdp', issueId: 'fi-defense', stance: 'support', evidence: 'PM Sanna Marin (SDP) led the shift from caution to applying for NATO membership in May 2022 and stated Finland would impose no conditions on membership.', source: 'https://valtioneuvosto.fi/en/-/10616/speech-delivered-by-prime-minister-sanna-marin-at-parliament-s-plenary-session-on-16-may-2022', lastUpdated: UPDATED },
    { partyId: 'fi-sdp', issueId: 'fi-immigration', stance: 'partial', evidence: 'Publicly rejected the Finns Party’s restrictive labor-immigration line alongside NCP, favoring continued work-based immigration.', source: 'https://yle.fi/a/74-20015447', lastUpdated: UPDATED },
    { partyId: 'fi-sdp', issueId: 'fi-education', stance: 'oppose', evidence: 'Vice-chair Nasima Razmyar criticized the Orpo government’s approved education cuts as broken promises, citing reduced teaching hours and weakened learning support.', source: 'https://www.sdp.fi/ajankohtaista/sdpn-varapuheenjohtaja-nasima-razmyar-hallituksen-koulutusleikkaukset-hyvaksytty-lupaukset-petetty/', lastUpdated: UPDATED },
    { partyId: 'fi-sdp', issueId: 'fi-energy', stance: 'support', evidence: 'Platform focuses on transitioning to renewable/emission-free energy, energy self-sufficiency, and proposed maximum electricity retail prices.', source: 'https://www.fortum.com/media/2023/04/broad-political-support-nuclear-power-and-renewable-energy-promising-starting-point-finnish-government-negotiations', lastUpdated: UPDATED },
    { partyId: 'fi-sdp', issueId: 'fi-tech', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'fi-sdp', issueId: 'fi-security', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // Centre Party
    { partyId: 'fi-kesk', issueId: 'fi-defense', stance: 'support', evidence: 'Parliamentary group unanimously backed the NATO application in 2022; then-Defense Minister Antti Kaikkonen (Centre) publicly supported accession.', source: 'https://yle.fi/a/3-12396421', lastUpdated: UPDATED },
    { partyId: 'fi-kesk', issueId: 'fi-immigration', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'fi-kesk', issueId: 'fi-education', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'fi-kesk', issueId: 'fi-energy', stance: 'support', evidence: 'Energy platform welcomes new nuclear power projects and small modular reactor piloting, aiming to strengthen domestic self-sufficiency and energy security.', source: 'https://keskusta.fi/ajankohtaista/uutiset/keskustan-energialinjaus-voimaa-ja-elinvoimaa-omasta-maasta-koko-maahan/', lastUpdated: UPDATED },
    { partyId: 'fi-kesk', issueId: 'fi-tech', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'fi-kesk', issueId: 'fi-security', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
  ],
};
