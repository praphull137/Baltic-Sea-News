import { countries } from './countries';
import { topics } from './topics';

export type Stance = 'support' | 'oppose' | 'mixed';

export interface PartyStance {
  topicId: string;
  stance: Stance;
  note: string;
}

export interface Party {
  id: string;
  countryId: string;
  name: string;
  descriptor: string;
  stances: PartyStance[];
}

interface Archetype {
  name: string;
  descriptor: string;
  stances: Record<string, { stance: Stance; note: string }>;
}

// Three generic, deliberately neutral party archetypes reused across every
// country. Names are placeholders (Party A/B/C) — this is illustrative mock
// data, not a description of any real political party.
const archetypes: Archetype[] = [
  {
    name: 'Party A',
    descriptor: 'Centrist party focused on market reform and EU integration.',
    stances: {
      climate: { stance: 'mixed', note: 'Favors market-based incentives over binding targets.' },
      energy: { stance: 'support', note: 'Backs diversifying supply through cross-border interconnectors.' },
      economy: { stance: 'support', note: 'Prioritizes deregulation and export competitiveness.' },
      education: { stance: 'mixed', note: 'Supports funding increases tied to outcome-based reform.' },
      immigration: { stance: 'support', note: 'Favors streamlined, skills-based immigration pathways.' },
      youth: { stance: 'mixed', note: 'Backs apprenticeship programs over direct subsidies.' },
      housing: { stance: 'mixed', note: 'Prefers zoning reform over rent controls.' },
      healthcare: { stance: 'mixed', note: 'Supports public-private partnership models.' },
      'foreign-policy': { stance: 'support', note: 'Advocates deeper regional and EU cooperation.' },
      defense: { stance: 'support', note: 'Backs steady increases to meet alliance commitments.' },
      technology: { stance: 'support', note: 'Favors light-touch regulation to attract investment.' },
      elections: { stance: 'support', note: 'Supports current electoral rules with minor transparency reforms.' },
    },
  },
  {
    name: 'Party B',
    descriptor: 'Conservative party emphasizing fiscal caution and national security.',
    stances: {
      climate: { stance: 'oppose', note: 'Opposes binding targets it views as costly to industry.' },
      energy: { stance: 'support', note: 'Backs energy independence, including domestic sources.' },
      economy: { stance: 'mixed', note: 'Prioritizes balanced budgets over stimulus spending.' },
      education: { stance: 'mixed', note: 'Favors local control over centralized curricula.' },
      immigration: { stance: 'oppose', note: 'Favors stricter controls and slower intake.' },
      youth: { stance: 'mixed', note: 'Supports vocational training over university subsidies.' },
      housing: { stance: 'oppose', note: 'Opposes rent controls, favors private development incentives.' },
      healthcare: { stance: 'mixed', note: 'Supports core public coverage with private supplements.' },
      'foreign-policy': { stance: 'mixed', note: 'Favors bilateral deals over broader multilateral pacts.' },
      defense: { stance: 'support', note: 'Advocates significant increases to defense spending.' },
      technology: { stance: 'mixed', note: 'Supports innovation with stronger data-sovereignty rules.' },
      elections: { stance: 'support', note: 'Backs stricter voter-identification requirements.' },
    },
  },
  {
    name: 'Party C',
    descriptor: 'Progressive party focused on environmental and social policy.',
    stances: {
      climate: { stance: 'support', note: 'Backs binding emissions targets and green subsidies.' },
      energy: { stance: 'support', note: 'Prioritizes renewable buildout over fossil infrastructure.' },
      economy: { stance: 'mixed', note: 'Favors redistribution alongside growth policies.' },
      education: { stance: 'support', note: 'Backs increased public funding and free access.' },
      immigration: { stance: 'support', note: 'Favors expanded asylum and family-reunification pathways.' },
      youth: { stance: 'support', note: 'Backs direct subsidies and expanded youth housing support.' },
      housing: { stance: 'support', note: 'Backs rent controls and public housing investment.' },
      healthcare: { stance: 'support', note: 'Advocates fully public, universally funded coverage.' },
      'foreign-policy': { stance: 'support', note: 'Favors multilateral institutions and climate diplomacy.' },
      defense: { stance: 'oppose', note: 'Favors redirecting spending toward social programs.' },
      technology: { stance: 'mixed', note: 'Supports innovation paired with stronger consumer protections.' },
      elections: { stance: 'support', note: 'Backs lowering the voting age and expanding mail-in voting.' },
    },
  },
];

export const parties: Party[] = countries.flatMap((country) =>
  archetypes.map((archetype, index) => ({
    id: `${country.id}-party-${index + 1}`,
    countryId: country.id,
    name: archetype.name,
    descriptor: archetype.descriptor,
    stances: topics.map((topic) => ({
      topicId: topic.id,
      ...archetype.stances[topic.id],
    })),
  }))
);

export const getPartiesByCountry = (countryId: string | null) =>
  countryId ? parties.filter((p) => p.countryId === countryId) : [];
