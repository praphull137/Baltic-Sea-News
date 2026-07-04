import { CountryPartyData } from '../types';

const UPDATED = '2026-07-04';

export const estonia: CountryPartyData = {
  countryId: 'estonia',
  parties: [
    { id: 'ee-reform', countryId: 'estonia', name: 'Estonian Reform Party', shortName: 'Reformierakond', officialWebsite: 'https://reform.ee/' },
    { id: 'ee-e200', countryId: 'estonia', name: 'Estonia 200', shortName: 'Eesti 200', officialWebsite: 'https://eesti200.ee/' },
    { id: 'ee-centre', countryId: 'estonia', name: 'Estonian Centre Party', shortName: 'Keskerakond', officialWebsite: 'https://keskerakond.ee/' },
    { id: 'ee-ekre', countryId: 'estonia', name: 'Conservative People’s Party of Estonia', shortName: 'EKRE', officialWebsite: 'https://www.ekre.ee/' },
  ],
  issues: [
    { id: 'ee-defense', countryId: 'estonia', label: 'Defense Spending & NATO', topicId: 'defense' },
    { id: 'ee-education', countryId: 'estonia', label: 'Estonian-Language Education Transition', topicId: 'education' },
    { id: 'ee-ukraine', countryId: 'estonia', label: 'Support for Ukraine', topicId: 'foreign-policy' },
    { id: 'ee-cartax', countryId: 'estonia', label: 'Motor Vehicle Tax', topicId: 'economy' },
    { id: 'ee-russia-security', countryId: 'estonia', label: 'Russia-Related Security Measures', topicId: 'defense' },
    { id: 'ee-immigration', countryId: 'estonia', label: 'Immigration & Migration Policy', topicId: 'immigration' },
    { id: 'ee-budget', countryId: 'estonia', label: 'State Budget Deficit & Fiscal Policy', topicId: 'economy' },
  ],
  positions: [
    // Reform Party
    { partyId: 'ee-reform', issueId: 'ee-defense', stance: 'support', evidence: 'Reform-Eesti 200 coalition agreement and government decision set Estonia’s defense-spending baseline at at least 5% of GDP starting 2026.', source: 'https://valitsus.ee/en/news/estonia-raise-its-defence-budget-least-five-cent-its-gdp-next-year', lastUpdated: UPDATED },
    { partyId: 'ee-reform', issueId: 'ee-education', stance: 'support', evidence: 'As lead governing party, has publicly championed the Estonian-language education transition, framing it as a "moment of truth" for the coalition.', source: 'https://reform.ee/uudised/eestikeelne-haridus/', lastUpdated: UPDATED },
    { partyId: 'ee-reform', issueId: 'ee-ukraine', stance: 'support', evidence: 'PM Kristen Michal (Reform) said Ukraine must win the war even at high cost, and the government reaffirmed sustained aid "for as long as necessary."', source: 'https://valitsus.ee/uudised/kallas-et-ukraina-saaks-vormida-oma-vaprusest-voidu-peab-meie-toetus-kestma', lastUpdated: UPDATED },
    { partyId: 'ee-reform', issueId: 'ee-cartax', stance: 'support', evidence: 'Finance Minister Mart Võrklaev (Reform) publicly defended the tax as both an environmental measure and a legitimate ~€230m/year budget-revenue source.', source: 'https://reform.ee/uudised/mart-vorklaev-automaksu-eesmark-on-eelarvetulu-ja-sellest-avalikult-raakida-ei-tohiks-olla-tabu/', lastUpdated: UPDATED },
    { partyId: 'ee-reform', issueId: 'ee-russia-security', stance: 'support', evidence: 'The Reform-led government approved a bill empowering it to restrict real-estate ownership by Russian and Belarusian citizens on security grounds, effective 2027.', source: 'https://valitsus.ee/uudised/valitsus-piirab-venemaa-ja-valgevene-kodanike-voimalust-eestis-kinnisvara-omandada', lastUpdated: UPDATED },
    { partyId: 'ee-reform', issueId: 'ee-immigration', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'ee-reform', issueId: 'ee-budget', stance: 'partial', evidence: 'Proposed cutting the projected budget deficit from 4.8% to 4% of GDP (~€400m in cuts/new revenue) — a push its own coalition partner publicly rejected as unrealistic.', source: 'https://news.err.ee/1610068027/eesti-200-shoots-down-coalition-partner-s-fiscal-discipline-proposal', lastUpdated: UPDATED },

    // Eesti 200
    { partyId: 'ee-e200', issueId: 'ee-defense', stance: 'support', evidence: 'Party’s 2025-2027 coalition agreement commits to defense funding of at least 5% of GDP.', source: 'https://eesti200.ee/koalitsioonilepe-2025-2027/', lastUpdated: UPDATED },
    { partyId: 'ee-e200', issueId: 'ee-education', stance: 'support', evidence: 'Party member Kristina Kallas serves as Minister of Education and directly oversees implementation of the Estonian-language instruction transition.', source: 'https://www.hm.ee/en/node/234', lastUpdated: UPDATED },
    { partyId: 'ee-e200', issueId: 'ee-ukraine', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'ee-e200', issueId: 'ee-cartax', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'ee-e200', issueId: 'ee-russia-security', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'ee-e200', issueId: 'ee-immigration', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'ee-e200', issueId: 'ee-budget', stance: 'oppose', evidence: 'Interior Minister Igor Taro (Eesti 200) rejected Reform’s proposal to cut the deficit to 4% of GDP, calling it "empty rhetoric" given defense-spending commitments.', source: 'https://news.err.ee/1610068027/eesti-200-shoots-down-coalition-partner-s-fiscal-discipline-proposal', lastUpdated: UPDATED },

    // Centre Party
    { partyId: 'ee-centre', issueId: 'ee-defense', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'ee-centre', issueId: 'ee-education', stance: 'oppose', evidence: 'Party leaders stated they would never agree to transitioning Russian-language schools to Estonian while in coalition government, and voted against the 2022 transition legislation.', source: 'https://www.err.ee/958233/kolvart-rohutan-koalitsioon-isamaa-ja-ekre-ga-oli-ainus-voimalus-sailitada-venekeelne-haridus', lastUpdated: UPDATED },
    { partyId: 'ee-centre', issueId: 'ee-ukraine', stance: 'partial', evidence: 'Parliamentary group backs Ukraine’s restoration of recognized borders and EU/NATO aid, but several individual MPs declined to sign the Riigikogu’s February 2022 solidarity statement condemning Russia’s invasion.', source: 'https://www.postimees.ee/7461415/koik-keskerakondlased-avaldusega-ukraina-toetuseks-ei-uhinenud', lastUpdated: UPDATED },
    { partyId: 'ee-centre', issueId: 'ee-cartax', stance: 'oppose', evidence: 'Filed complaints in administrative court and submitted parliamentary bills to abolish the motor vehicle tax, calling it unconstitutional and harmful to large families and rural residents.', source: 'https://kesknadal.ee/2025/01/31/mihhail-kolvart-keskerakond-poordub-automaksu-tuhistamise-nimel-kohtusse/', lastUpdated: UPDATED },
    { partyId: 'ee-centre', issueId: 'ee-russia-security', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'ee-centre', issueId: 'ee-immigration', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'ee-centre', issueId: 'ee-budget', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // EKRE
    { partyId: 'ee-ekre', issueId: 'ee-defense', stance: 'partial', evidence: 'National-defense program calls for raising defense expenditure to at least 3% of GDP plus 0.5% for civilian defense — a real increase, but below the current 5%-of-GDP coalition target.', source: 'https://ekre.ee/ekre-riigikaitseprogramm-keskendub-iseseisva-kaitsevoime-tugevdamisele-ja-elanikkonnakaitsele/', lastUpdated: UPDATED },
    { partyId: 'ee-ekre', issueId: 'ee-education', stance: 'partial', evidence: 'Supports completing the Estonian-language transition, but wants non-Estonian-speaking children taught Estonian separately first, capped at ~20% non-Estonian-home-language pupils per class.', source: 'https://www.postimees.ee/8330770/valimisstuudio-hariduselu-tekitas-stuudios-kirgliku-debati', lastUpdated: UPDATED },
    { partyId: 'ee-ekre', issueId: 'ee-ukraine', stance: 'partial', evidence: 'Co-chair Martin Helme has said there is "a limit" to Estonia’s support for Ukraine, arguing Estonia should receive weapons from allies rather than deplete its own stocks.', source: 'https://www.postimees.ee/7700907/martin-helme-ukraina-toetamisel-on-piir-ees-ja-sellest-piirist-meie-ule-ei-laheks', lastUpdated: UPDATED },
    { partyId: 'ee-ekre', issueId: 'ee-cartax', stance: 'oppose', evidence: 'Organized protests against the motor vehicle tax and has positioned itself as defender of car owners against it.', source: 'https://uueduudised.ee/rene-kokk-kes-seisab-autoomaniku-kaitsel-muidugi-ekre/', lastUpdated: UPDATED },
    { partyId: 'ee-ekre', issueId: 'ee-russia-security', stance: 'support', evidence: 'Proposed closing Estonia-Russia border crossings, disarming Russian/Belarusian citizens in Estonia, and banning Russian citizens from buying property on security grounds.', source: 'https://majandus.postimees.ee/7879487/valitsus-ei-toetanud-ekre-ettepanekut-keelata-vene-kodanikel-eestis-kinnisvara-osta', lastUpdated: UPDATED },
    { partyId: 'ee-ekre', issueId: 'ee-immigration', stance: 'oppose', evidence: 'Population program calls for stopping immigration, returning immigrants (including Ukrainian refugees after the war ends), and opposing EU migrant relocation quotas.', source: 'https://www.ekre.ee/ekre-rahvastikuprogramm-paastame-eesti-rahvusriigi/', lastUpdated: UPDATED },
    { partyId: 'ee-ekre', issueId: 'ee-budget', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
  ],
};
