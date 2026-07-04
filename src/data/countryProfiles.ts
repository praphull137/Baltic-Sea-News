export type CivicEventType =
  | 'Registration Deadline'
  | 'Early Voting Begins'
  | 'Political Debate'
  | 'Public Consultation'
  | 'Election Day';

export interface CivicEvent {
  type: CivicEventType;
  label: string;
  date: string; // YYYY-MM-DD
}

export interface Election {
  name: string;
  registrationDeadline: string;
  earlyVotingStart: string;
  electionDay: string;
}

export interface CountryProfile {
  id: string;
  population: string;
  gdp: string;
  euMember: boolean;
  parliamentName: string;
  election: Election;
  civicEvents: CivicEvent[];
}

// All figures are illustrative/mock, consistent with the rest of this
// demo platform's dataset — not sourced from a live statistics feed.
const base: Record<
  string,
  Omit<CountryProfile, 'id' | 'civicEvents'> & { debate: string; consultation: string }
> = {
  latvia: {
    population: '1.8M',
    gdp: '$47B',
    euMember: true,
    parliamentName: 'Saeima',
    election: {
      name: 'Saeima Election',
      registrationDeadline: '2026-08-10',
      earlyVotingStart: '2026-09-20',
      electionDay: '2026-10-14',
    },
    debate: '2026-09-29',
    consultation: '2026-08-25',
  },
  lithuania: {
    population: '2.7M',
    gdp: '$81B',
    euMember: true,
    parliamentName: 'Seimas',
    election: {
      name: 'Seimas Election',
      registrationDeadline: '2026-09-01',
      earlyVotingStart: '2026-10-10',
      electionDay: '2026-11-05',
    },
    debate: '2026-10-22',
    consultation: '2026-09-18',
  },
  estonia: {
    population: '1.3M',
    gdp: '$40B',
    euMember: true,
    parliamentName: 'Riigikogu',
    election: {
      name: 'Riigikogu Election',
      registrationDeadline: '2027-01-15',
      earlyVotingStart: '2027-02-20',
      electionDay: '2027-03-07',
    },
    debate: '2027-02-24',
    consultation: '2027-01-30',
  },
  poland: {
    population: '37M',
    gdp: '$850B',
    euMember: true,
    parliamentName: 'Sejm',
    election: {
      name: 'Sejm Election',
      registrationDeadline: '2027-08-01',
      earlyVotingStart: '2027-09-15',
      electionDay: '2027-10-15',
    },
    debate: '2027-09-30',
    consultation: '2027-08-20',
  },
  germany: {
    population: '84M',
    gdp: '$4.5T',
    euMember: true,
    parliamentName: 'Bundestag',
    election: {
      name: 'Bundestag Election',
      registrationDeadline: '2027-04-10',
      earlyVotingStart: '2027-05-15',
      electionDay: '2027-06-06',
    },
    debate: '2027-05-22',
    consultation: '2027-04-25',
  },
  denmark: {
    population: '5.9M',
    gdp: '$400B',
    euMember: true,
    parliamentName: 'Folketing',
    election: {
      name: 'Folketing Election',
      registrationDeadline: '2026-09-15',
      earlyVotingStart: '2026-10-15',
      electionDay: '2026-11-03',
    },
    debate: '2026-10-20',
    consultation: '2026-09-28',
  },
  sweden: {
    population: '10.5M',
    gdp: '$590B',
    euMember: true,
    parliamentName: 'Riksdag',
    election: {
      name: 'Riksdag Election',
      registrationDeadline: '2026-07-20',
      earlyVotingStart: '2026-08-25',
      electionDay: '2026-09-13',
    },
    debate: '2026-08-30',
    consultation: '2026-08-05',
  },
  finland: {
    population: '5.6M',
    gdp: '$300B',
    euMember: true,
    parliamentName: 'Eduskunta',
    election: {
      name: 'Eduskunta Election',
      registrationDeadline: '2027-02-15',
      earlyVotingStart: '2027-03-25',
      electionDay: '2027-04-18',
    },
    debate: '2027-04-02',
    consultation: '2027-03-05',
  },
  norway: {
    population: '5.5M',
    gdp: '$500B',
    euMember: false,
    parliamentName: 'Storting',
    election: {
      name: 'Storting Election',
      registrationDeadline: '2027-07-20',
      earlyVotingStart: '2027-08-20',
      electionDay: '2027-09-08',
    },
    debate: '2027-08-26',
    consultation: '2027-08-01',
  },
  iceland: {
    population: '380K',
    gdp: '$30B',
    euMember: false,
    parliamentName: 'Althingi',
    election: {
      name: 'Althingi Election',
      registrationDeadline: '2027-08-01',
      earlyVotingStart: '2027-09-01',
      electionDay: '2027-09-25',
    },
    debate: '2027-09-12',
    consultation: '2027-08-15',
  },
};

export const countryProfiles: CountryProfile[] = Object.entries(base).map(
  ([id, { debate, consultation, election, ...rest }]) => ({
    id,
    ...rest,
    election,
    civicEvents: [
      {
        type: 'Registration Deadline',
        label: `Voter registration closes`,
        date: election.registrationDeadline,
      },
      {
        type: 'Public Consultation',
        label: `Public consultation on election procedures`,
        date: consultation,
      },
      {
        type: 'Early Voting Begins',
        label: `Early voting begins`,
        date: election.earlyVotingStart,
      },
      {
        type: 'Political Debate',
        label: `Leaders' debate ahead of the ${election.name}`,
        date: debate,
      },
      {
        type: 'Election Day',
        label: election.name,
        date: election.electionDay,
      },
    ],
  })
);

export const getCountryProfile = (countryId: string | null) =>
  countryProfiles.find((c) => c.id === countryId) || null;
