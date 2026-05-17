import type { BallotItem, Candidate, Citation, CountyMetric, IssueImpact } from "@/lib/types";

export const counties = ["Jefferson", "Madison", "Mobile", "Montgomery", "Tuscaloosa", "Baldwin"];
export const years = [2026, 2024];

export const citations: Citation[] = [
  {
    id: "al-sos",
    label: "Alabama Secretary of State - Elections",
    url: "https://www.sos.alabama.gov/alabama-votes",
    publisher: "Alabama Secretary of State",
    updatedAt: "2026-05-01",
  },
  {
    id: "legiscan",
    label: "Alabama Legislature Bill Information",
    url: "https://alison.legislature.state.al.us/",
    publisher: "Alabama Legislature",
    updatedAt: "2026-04-20",
  },
  {
    id: "fec",
    label: "Federal Election Commission Filings",
    url: "https://www.fec.gov/",
    publisher: "FEC",
    updatedAt: "2026-05-12",
  },
];

export const ballotItems: BallotItem[] = [
  {
    id: "amendment-school-funding",
    county: "Statewide",
    year: 2026,
    title: "Amendment 1: Education Trust Formula Update",
    officeOrMeasure: "Constitutional Amendment",
    officialSummary: "Adjusts the formula used to distribute state education trust funds.",
    plainEnglish: "This changes how state education money is split between growing and shrinking school systems.",
    whyItMatters: "It could shift per-student funding and impact class sizes, staffing, and local tax pressure.",
    supporterArguments: ["More accurately reflects current enrollment", "Improves budget predictability"],
    opponentArguments: ["Could disadvantage smaller districts", "May reduce flexibility for local needs"],
    impactedGroups: ["Parents", "Teachers", "Rural districts", "Urban districts"],
    citationIds: ["legiscan", "al-sos"],
  },
  {
    id: "county-transit-bond",
    county: "Jefferson",
    year: 2026,
    title: "Transit & Roads Bond Referendum",
    officeOrMeasure: "Local Referendum",
    officialSummary: "Authorizes county bonds for major transit corridor and road repair projects.",
    plainEnglish: "The county would borrow money to fix roads and add bus rapid transit routes.",
    whyItMatters: "Borrowing can speed infrastructure projects but adds long-term debt costs.",
    supporterArguments: ["Reduces congestion", "Creates construction jobs"],
    opponentArguments: ["Debt burden risk", "Uncertainty on execution quality"],
    impactedGroups: ["Commuters", "Small businesses", "Property taxpayers"],
    citationIds: ["al-sos"],
  },
];

export const candidates: Candidate[] = [
  {
    id: "gov-candidate-a",
    race: "Governor",
    countyScope: "Statewide",
    name: "Jordan Ellis",
    party: "Independent",
    bio: "Former municipal finance director focused on fiscal transparency.",
    website: "https://example.com/jordan-ellis",
    endorsements: ["Alabama Small Cities Coalition", "Civic Accountability Forum"],
    topIssues: ["Schools", "Healthcare", "Infrastructure"],
    positions: {
      Taxes: "Supports targeted credits for working families and audit-based spending controls.",
      Schools: "Backs teacher retention grants and statewide tutoring expansion.",
      Healthcare: "Supports rural clinic stabilization and telehealth reimbursement parity.",
    },
    votingHistory: "No legislative voting record; served in local appointed roles.",
    fundingSummary: "58% individual donors, 24% small business PACs, 18% self-funded.",
    quote: "Public trust starts with plain language and verifiable numbers.",
  },
  {
    id: "gov-candidate-b",
    race: "Governor",
    countyScope: "Statewide",
    name: "Casey Monroe",
    party: "Republican",
    bio: "State senator with a focus on economic development policy.",
    website: "https://example.com/casey-monroe",
    endorsements: ["Alabama Manufacturers Council", "State Law Enforcement Alliance"],
    topIssues: ["Jobs", "Policing", "Energy"],
    positions: {
      Taxes: "Supports maintaining current rates and broadening the business tax base.",
      Schools: "Supports workforce pathways and STEM-focused career academies.",
      Healthcare: "Supports public-private partnerships for rural emergency coverage.",
    },
    votingHistory: "Voted for broadband expansion bill and public safety grant package in 2025 session.",
    fundingSummary: "39% PACs, 41% individual donations, 20% major donors.",
    quote: "Good policy should be measurable, lawful, and clear to voters.",
  },
];

export const issueImpacts: IssueImpact[] = [
  {
    id: "taxes",
    title: "Taxes",
    dailyLife: "Tax policy affects take-home pay, sales costs, and municipal services.",
    localImpact: "Alabama households feel tax changes through utility bills, school budgets, and road maintenance.",
    examples: ["Grocery tax relief proposals", "Property tax reassessments", "Fuel tax and paving budgets"],
  },
  {
    id: "schools",
    title: "Schools",
    dailyLife: "School funding influences class sizes, after-school programs, and bus reliability.",
    localImpact: "District growth in Huntsville and suburban counties creates staffing and facility pressure.",
    examples: ["Teacher vacancies", "Career tech expansion", "Special education staffing"],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    dailyLife: "Access affects emergency response time, preventive care, and household cost risk.",
    localImpact: "Rural counties face hospital closure risks and higher travel times for care.",
    examples: ["OB-GYN access", "Mental health beds", "Telehealth coverage"],
  },
];

export const countyMetrics: CountyMetric[] = [
  { county: "Jefferson", turnout: 62, population: 665409, medianIncome: 61200, issuePriority: "Housing" },
  { county: "Madison", turnout: 68, population: 401288, medianIncome: 74200, issuePriority: "Schools" },
  { county: "Mobile", turnout: 58, population: 412992, medianIncome: 54100, issuePriority: "Jobs" },
  { county: "Montgomery", turnout: 55, population: 226486, medianIncome: 49800, issuePriority: "Healthcare" },
  { county: "Tuscaloosa", turnout: 60, population: 233024, medianIncome: 56300, issuePriority: "Schools" },
  { county: "Baldwin", turnout: 66, population: 269260, medianIncome: 64800, issuePriority: "Housing" },
];

export const methodology = {
  updatedAt: "2026-05-17",
  standards: [
    "Every factual claim is linked to an official source or primary document.",
    "Issue summaries are written in plain English and reviewed for neutrality.",
    "Candidate profiles prioritize public records and direct campaign statements.",
    "Data freshness timestamps are shown per source set.",
  ],
};
