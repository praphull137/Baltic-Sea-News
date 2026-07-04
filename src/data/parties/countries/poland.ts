import { CountryPartyData } from '../types';

const UPDATED = '2026-07-04';

export const poland: CountryPartyData = {
  countryId: 'poland',
  parties: [
    { id: 'pl-pis', countryId: 'poland', name: 'Prawo i Sprawiedliwość', shortName: 'PiS', officialWebsite: 'https://pis.org.pl/' },
    { id: 'pl-ko', countryId: 'poland', name: 'Koalicja Obywatelska', shortName: 'KO', officialWebsite: 'https://koalicjaobywatelska.pl/' },
    { id: 'pl-td', countryId: 'poland', name: 'Trzecia Droga (Polska 2050 + PSL)', shortName: 'Trzecia Droga', officialWebsite: 'https://polska2050.pl/' },
    { id: 'pl-lewica', countryId: 'poland', name: 'Nowa Lewica', shortName: 'Lewica', officialWebsite: 'https://lewica.org.pl/' },
  ],
  issues: [
    { id: 'pl-abortion', countryId: 'poland', label: 'Abortion Rights' },
    { id: 'pl-judicial', countryId: 'poland', label: 'Judicial Reform' },
    { id: 'pl-migration', countryId: 'poland', label: 'Migration & Border Policy', topicId: 'immigration' },
    { id: 'pl-eu', countryId: 'poland', label: 'EU Relations & Rule-of-Law', topicId: 'foreign-policy' },
    { id: 'pl-energy', countryId: 'poland', label: 'Energy Policy', topicId: 'energy' },
    { id: 'pl-defense', countryId: 'poland', label: 'Defense Spending & Ukraine Support', topicId: 'defense' },
    { id: 'pl-lgbt', countryId: 'poland', label: 'LGBT Rights & Civil Partnerships' },
    { id: 'pl-tax', countryId: 'poland', label: 'Taxes & Economic Policy', topicId: 'economy' },
  ],
  positions: [
    // PiS
    { partyId: 'pl-pis', issueId: 'pl-abortion', stance: 'oppose', evidence: '225 PiS MPs voted in June 2022 to reject a citizen bill legalizing abortion to 12 weeks; no liberalization proposed in its 2023 program.', source: 'https://oko.press/aborcja-programy-wyborcze', lastUpdated: UPDATED },
    { partyId: 'pl-pis', issueId: 'pl-judicial', stance: 'oppose', evidence: 'Criticizes the 2025 "rule of law act" invalidating post-2018 KRS resolutions and neo-judge appointments.', source: 'https://dorzeczy.pl/opinie/818708/krs-miazdzy-projekt-zurka-uzurpacja-kompetencji-sadu.html', lastUpdated: UPDATED },
    { partyId: 'pl-pis', issueId: 'pl-migration', stance: 'support', evidence: 'Built the 2022 Belarus border wall and backs suspension of asylum applications there.', source: 'https://www.rp.pl/cudzoziemcy/art42331051-zawieszenie-prawa-do-azylu-sejm-zdecydowal-ws-wniosku-rzadu-donalda-tuska', lastUpdated: UPDATED },
    { partyId: 'pl-pis', issueId: 'pl-eu', stance: 'oppose', evidence: 'Leader Kaczyński called the EU’s rule-of-law conditionality mechanism a political-pressure tool exceeding treaty powers.', source: 'https://oko.press/unia-nie-zamierza-odbierac-polsce-suwerennosci-weto-pis-nie-ma-sensu-tresc-projektu', lastUpdated: UPDATED },
    { partyId: 'pl-pis', issueId: 'pl-energy', stance: 'oppose', evidence: 'A 2021 pact funds coal mines through 2049; PiS-backed president Nawrocki pledged a referendum to reject the EU Green Deal.', source: 'https://energetyka24.com/elektroenergetyka/wiadomosci/nawrocki-u-mentzena-musimy-odrzucic-zielony-lad-w-referendum', lastUpdated: UPDATED },
    { partyId: 'pl-pis', issueId: 'pl-defense', stance: 'partial', evidence: 'Backs high defense spending, but Kaczyński ties Ukraine’s EU accession to resolving historical disputes (Volhynia).', source: 'https://dorzeczy.pl/opinie/910501/list-kaczynskiego-pis-chodzi-o-akcesje-ukrainy-do-ue.html', lastUpdated: UPDATED },
    { partyId: 'pl-pis', issueId: 'pl-lgbt', stance: 'oppose', evidence: 'The only major party not to answer a media survey on civil partnerships, consistent with its record.', source: 'https://tvn24.pl/premium/bede-zwiazki-partnerskie-po-wyborach-wiekszosc-partii-na-tak-jedna-milczy-st7388164', lastUpdated: UPDATED },
    { partyId: 'pl-pis', issueId: 'pl-tax', stance: 'partial', evidence: '"Polski Ład" raised the tax-free PIT threshold and family benefits (800+), but also restored income tax on 13th/14th pensions.', source: 'https://tvn24.pl/biznes/pieniadze/jakie-podatki-wprowadzil-pis-przez-8-lat-rzadow-daniny-oplaty-skladki-najwazniejsze-zmiany-lista-st7349130', lastUpdated: UPDATED },

    // KO
    { partyId: 'pl-ko', issueId: 'pl-abortion', stance: 'support', evidence: '"100 concrete actions" program pledges abortion to 12 weeks legal, safe, and accessible, with no hospital refusal via conscience clause.', source: 'https://polityka.se.pl/wiadomosci/100-konkretow-na-100-dni-propozycje-programowe-ko-na-wybory-2023-pelna-lista-13-10-aa-gq5j-79Wh-8Tyf.html', lastUpdated: UPDATED },
    { partyId: 'pl-ko', issueId: 'pl-judicial', stance: 'support', evidence: '2023 program pledges liquidating the "neo-KRS," reconstituting it constitutionally, and separating the Justice Minister/Prosecutor General roles.', source: 'https://www.rp.pl/sady-i-trybunaly/art39240901-wymiar-sprawiedliwosci-w-programach-partii-pytamy-o-ustroj-krs-i-prokurature', lastUpdated: UPDATED },
    { partyId: 'pl-ko', issueId: 'pl-migration', stance: 'support', evidence: 'The KO-led Tusk government proposed the law suspending asylum claims at the Belarus border.', source: 'https://www.rp.pl/cudzoziemcy/art42331051-zawieszenie-prawa-do-azylu-sejm-zdecydowal-ws-wniosku-rzadu-donalda-tuska', lastUpdated: UPDATED },
    { partyId: 'pl-ko', issueId: 'pl-eu', stance: 'support', evidence: 'Campaigned on restoring judicial independence to unlock roughly €137bn in frozen EU funds.', source: 'https://ec.europa.eu/regional_policy/whats-new/newsroom/29-02-2024-poland-s-efforts-to-restore-rule-of-law-pave-the-way-for-accessing-up-to-eur137-billion-in-eu-funds_en', lastUpdated: UPDATED },
    { partyId: 'pl-ko', issueId: 'pl-energy', stance: 'support', evidence: '2023 program targets 68% renewable electricity by 2030 plus an audit of the nuclear program.', source: 'https://biznesalert.pl/koalicja-obywatelska-program-oze-audyt-atom-polska/', lastUpdated: UPDATED },
    { partyId: 'pl-ko', issueId: 'pl-defense', stance: 'support', evidence: '2025 budget allocates a record 4.7% of GDP (~187bn zł) to defense.', source: 'https://www.rp.pl/polityka/art41034711-donald-tusk-przygotowalismy-budzet-budowy-i-sily-prawie-190-mld-zl-na-obronnosc', lastUpdated: UPDATED },
    { partyId: 'pl-ko', issueId: 'pl-lgbt', stance: 'support', evidence: 'Program pledges a civil-partnership law.', source: 'https://www.gazetaprawna.pl/wiadomosci/kraj/artykuly/11253292,zwiazki-partnerskie-sejm-poparcie-koalicji.html', lastUpdated: UPDATED },
    { partyId: 'pl-ko', issueId: 'pl-tax', stance: 'support', evidence: '2023 program promised raising the tax-free PIT threshold to 60,000 zł plus other cuts.', source: 'https://tvn24.pl/wybory-parlamentarne-2023/wybory-parlamentarne-2023program-wyborczy-koalicji-obywatelskiej-obnizki-podatkow-kwota-wolna-do-60-tys-zl-podwyzki-w-budzetowce-lista-obietnic-st7335728', lastUpdated: UPDATED },

    // Trzecia Droga
    { partyId: 'pl-td', issueId: 'pl-abortion', stance: 'partial', evidence: 'Proposed a referendum (return to the pre-2020 compromise, then a citizens’ panel) rather than legislation; failed to gather enough signatures.', source: 'https://oko.press/referendum-aborcyjne-pomysl-holowni-kosiniaka-kamysza-na-pierwsze-100-dni', lastUpdated: UPDATED },
    { partyId: 'pl-td', issueId: 'pl-judicial', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'pl-td', issueId: 'pl-migration', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'pl-td', issueId: 'pl-eu', stance: 'partial', evidence: 'Pro-EU, campaigned on unblocking KPO funds, but PSL leader said Poland can’t uncritically accept everything Brussels proposes.', source: 'https://www.rp.pl/polityka/art40185771-wybory-do-pe-polska-2050-i-psl-ida-razem-jest-trzecia-droga-do-europy', lastUpdated: UPDATED },
    { partyId: 'pl-td', issueId: 'pl-energy', stance: 'partial', evidence: 'Polska 2050 dropped large-scale nuclear in favor of small modular reactors plus renewables.', source: 'https://energetyka24.com/elektroenergetyka/bez-atomu-za-to-z-optymizmem-energetyka-wedlug-holowni-analiza', lastUpdated: UPDATED },
    { partyId: 'pl-td', issueId: 'pl-defense', stance: 'support', evidence: 'Deputy PM/Defense Minister Kosiniak-Kamysz: "without Poland there is no aid to Ukraine today."', source: 'https://www.gov.pl/web/obrona-narodowa/wicepremier-w-kosiniak--kamysz-bedziemy-wspierac-wszystkie-dzialania-ktore-zmierzaja-do-sprawiedliwego-pokoju-na-ukrainie', lastUpdated: UPDATED },
    { partyId: 'pl-td', issueId: 'pl-lgbt', stance: 'partial', evidence: 'Polska 2050 backed a civil-partnership bill; PSL rejected Lewica’s draft and pushed a narrower proposal ahead of an October 2025 compromise.', source: 'https://www.infor.pl/prawo/nowosci-prawne/7368936,nie-bedzie-ustawy-o-zwiazkach-partnerskich-psl-i-lewica-oglaszaja-nowy-projekt-dotyczacy-zwiazkow-nieformalnych.html', lastUpdated: UPDATED },
    { partyId: 'pl-td', issueId: 'pl-tax', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },

    // Lewica
    { partyId: 'pl-lewica', issueId: 'pl-abortion', stance: 'support', evidence: 'Sejm club submitted bills decriminalizing abortion assistance and legalizing abortion to 12 weeks with no reason required.', source: 'https://tvn24.pl/polska/aborcja-i-przepisy-prawa-lewica-wniosla-projekty-w-sprawie-przepisow-aborcyjnych-w-sprawie-dekryminalizacji-pomocnictwa-w-aborcji-i-przerywania-ciazy-do-12-tygodnia-st7437993', lastUpdated: UPDATED },
    { partyId: 'pl-lewica', issueId: 'pl-judicial', stance: 'unknown', evidence: 'No clear, citable party-level position found.', lastUpdated: UPDATED },
    { partyId: 'pl-lewica', issueId: 'pl-migration', stance: 'partial', evidence: 'Traditionally opposed extending the Belarus-border asylum suspension, though by May 2025 a Lewica MP said the party "accepts" the extension.', source: 'https://oko.press/sejm-przedluza-zawieszenie-prawa-do-azylu', lastUpdated: UPDATED },
    { partyId: 'pl-lewica', issueId: 'pl-eu', stance: 'support', evidence: 'Program calls for a "strong Poland in a strong EU," a roadmap to euro adoption, and support for Ukraine/Moldova/Georgia/Western Balkans EU accession.', source: 'https://lewica.org.pl/aktualnosci/10837-europa-dla-ciebie-prezentacja-programu-wyborczego', lastUpdated: UPDATED },
    { partyId: 'pl-lewica', issueId: 'pl-energy', stance: 'support', evidence: 'Calls for a coal exit by 2035, 30 Baltic offshore wind farms by 2030, and 5,000 new onshore turbines.', source: 'https://lewica.org.pl/aktualnosci/7672-lewica-zaprezentowala-wizje-polski-bez-wegla-z-czystym-powietrzem-niezalezna-energetycznie-i-ze-sprawiedliwa-transformacj', lastUpdated: UPDATED },
    { partyId: 'pl-lewica', issueId: 'pl-defense', stance: 'support', evidence: 'Parliamentary club welcomed record defense spending while urging health/education/housing not be sacrificed.', source: 'https://klub-lewica.org.pl/aktualnosci/trela-o-wykonaniu-budzetu-rekordowe-wydatki-na-obrone-narodowa-ochrone-zdrowia-i-programy-spoleczne/', lastUpdated: UPDATED },
    { partyId: 'pl-lewica', issueId: 'pl-lgbt', stance: 'support', evidence: 'Filed bills for full marriage equality and civil partnerships regardless of sex (July 2025 first reading).', source: 'https://wydarzenia.interia.pl/kraj/news-kompromis-ws-zwiazkow-partnerskich-psl-i-lewica-przedstawily,nId,22432065', lastUpdated: UPDATED },
    { partyId: 'pl-lewica', issueId: 'pl-tax', stance: 'support', evidence: 'Proposes progressive PIT (up to 40% above 500,000 zł), progressive CIT, and a unified 15% VAT.', source: 'https://lewica.org.pl/aktualnosci/6804-vat-15-progresywny-pit-i-cit-propozycje-podatkowe-nowej-lewicy', lastUpdated: UPDATED },
  ],
};
