// Party Policy Comparison Center — data layer.
//
// Structure: Country -> Parties / Policy Issues / Policy Positions (with
// Sources). Each country lives in its own file under ./countries/, sourced
// from real party manifestos, official websites, parliamentary records, and
// government publications — never invented. Positions we could not verify
// with a real source are explicitly marked stance: "unknown" rather than
// guessed.
//
// FUTURE READY: to swap a country's static data for a live feed (a party's
// website, a government API, an election dataset), replace that one file's
// export with an async fetch + cache and keep the same CountryPartyData
// shape — no UI component needs to change.

import { CountryPartyData, Party, PolicyIssue, PolicyPosition, Stance } from './types';
import { latvia } from './countries/latvia';
import { lithuania } from './countries/lithuania';
import { estonia } from './countries/estonia';
import { poland } from './countries/poland';
import { germany } from './countries/germany';
import { denmark } from './countries/denmark';
import { sweden } from './countries/sweden';
import { finland } from './countries/finland';
import { norway } from './countries/norway';
import { iceland } from './countries/iceland';

export * from './types';

export const allCountryPartyData: CountryPartyData[] = [
  latvia,
  lithuania,
  estonia,
  poland,
  germany,
  denmark,
  sweden,
  finland,
  norway,
  iceland,
];

const byCountry: Record<string, CountryPartyData> = Object.fromEntries(
  allCountryPartyData.map((c) => [c.countryId, c])
);

export const getCountryPartyData = (countryId: string | null): CountryPartyData | null =>
  countryId ? byCountry[countryId] ?? null : null;

export const getPartiesByCountry = (countryId: string | null): Party[] =>
  getCountryPartyData(countryId)?.parties ?? [];

export const getIssuesByCountry = (countryId: string | null): PolicyIssue[] =>
  getCountryPartyData(countryId)?.issues ?? [];

export const getPosition = (
  countryId: string | null,
  partyId: string,
  issueId: string
): PolicyPosition | null => {
  const data = getCountryPartyData(countryId);
  if (!data) return null;
  return data.positions.find((p) => p.partyId === partyId && p.issueId === issueId) ?? null;
};

export const getPositionsForParty = (countryId: string | null, partyId: string): PolicyPosition[] => {
  const data = getCountryPartyData(countryId);
  if (!data) return [];
  return data.positions.filter((p) => p.partyId === partyId);
};

export const getPositionsForIssue = (countryId: string | null, issueId: string): PolicyPosition[] => {
  const data = getCountryPartyData(countryId);
  if (!data) return [];
  return data.positions.filter((p) => p.issueId === issueId);
};

// A dense (party x issue) matrix for the comparison table — every cell
// filled, using stance "unknown" where no PolicyPosition record exists.
export interface ComparisonCell {
  issue: PolicyIssue;
  party: Party;
  stance: Stance;
  position: PolicyPosition | null;
}

export const getComparisonMatrix = (
  countryId: string | null,
  issueIds?: string[]
): { issues: PolicyIssue[]; parties: Party[]; matrix: ComparisonCell[][] } => {
  const data = getCountryPartyData(countryId);
  if (!data) return { issues: [], parties: [], matrix: [] };

  const issues = issueIds ? data.issues.filter((i) => issueIds.includes(i.id)) : data.issues;
  const parties = data.parties;

  const matrix = issues.map((issue) =>
    parties.map((party) => {
      const position = data.positions.find((p) => p.partyId === party.id && p.issueId === issue.id) ?? null;
      return { issue, party, stance: position?.stance ?? 'unknown', position };
    })
  );

  return { issues, parties, matrix };
};

// Counts how many verified (non-"unknown") positions exist for a country —
// used to show honest coverage rather than implying full data everywhere.
export const getVerifiedPositionCount = (countryId: string | null): number => {
  const data = getCountryPartyData(countryId);
  if (!data) return 0;
  return data.positions.filter((p) => p.stance !== 'unknown').length;
};
