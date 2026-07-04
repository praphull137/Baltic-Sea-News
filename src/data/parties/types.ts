// Shared types for the Party Policy Comparison Center.
//
// Data is organized one file per country (see ./countries/<id>.ts) so that
// updating or replacing a single country's data — or later swapping it for a
// live feed from a party website, government API, or election dataset — never
// requires touching any other country or any UI component.

export type Stance = 'support' | 'oppose' | 'partial' | 'unknown';

export interface Party {
  id: string;
  countryId: string;
  name: string; // full official party name
  shortName: string; // common abbreviation
  officialWebsite: string;
}

export interface PolicyIssue {
  id: string;
  countryId: string;
  label: string;
  // Optional link to the site-wide topic taxonomy (src/data/topics.ts) so
  // party positions can cross-reference news/fact-checks tagged with the
  // same topic elsewhere in the app.
  topicId?: string;
}

export interface PolicyPosition {
  partyId: string;
  issueId: string;
  stance: Stance;
  // One factual sentence describing the evidence for this stance.
  evidence: string;
  // Real source URL (official manifesto, party website, parliamentary
  // record, or government/news reporting of an official statement).
  // Omitted when stance is "unknown" — there is nothing to cite.
  source?: string;
  lastUpdated: string; // YYYY-MM-DD — when this position was last verified
}

export interface CountryPartyData {
  countryId: string;
  parties: Party[];
  issues: PolicyIssue[];
  positions: PolicyPosition[];
}
