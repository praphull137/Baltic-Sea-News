export interface Topic {
  id: string;
  label: string;
}

export const topics: Topic[] = [
  { id: 'climate', label: 'Climate' },
  { id: 'energy', label: 'Energy' },
  { id: 'economy', label: 'Economy' },
  { id: 'education', label: 'Education' },
  { id: 'immigration', label: 'Immigration' },
  { id: 'youth', label: 'Youth' },
  { id: 'housing', label: 'Housing' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'foreign-policy', label: 'Foreign Policy' },
  { id: 'defense', label: 'Defense' },
  { id: 'technology', label: 'Technology' },
  { id: 'elections', label: 'Elections' },
];

export const getTopicById = (id: string | null) =>
  topics.find((t) => t.id === id) || null;
