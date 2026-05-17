export type Citation = {
  id: string;
  label: string;
  url: string;
  publisher: string;
  updatedAt: string;
};

export type BallotItem = {
  id: string;
  county: string;
  year: number;
  title: string;
  officeOrMeasure: string;
  officialSummary: string;
  plainEnglish: string;
  whyItMatters: string;
  supporterArguments: string[];
  opponentArguments: string[];
  impactedGroups: string[];
  citationIds: string[];
};

export type Candidate = {
  id: string;
  race: string;
  countyScope: string;
  name: string;
  party: string;
  bio: string;
  website: string;
  endorsements: string[];
  topIssues: string[];
  positions: Record<string, string>;
  votingHistory: string;
  fundingSummary: string;
  quote: string;
};

export type IssueImpact = {
  id: string;
  title: string;
  dailyLife: string;
  localImpact: string;
  examples: string[];
};

export type CountyMetric = {
  county: string;
  turnout: number;
  population: number;
  medianIncome: number;
  issuePriority: "Schools" | "Healthcare" | "Jobs" | "Housing";
};
