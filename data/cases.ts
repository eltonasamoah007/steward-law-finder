export type FeaturedCase = {
  slug: string;
  title: string;
  court: string;
  year: number;
  citation: string;
  keyPoint: string;
  bench: string;
  decided: string;
};

export type CaseSummary = {
  slug: string;
  title: string;
  court: string;
  year: number;
  summary: string;
};

export const caseOfTheDay: FeaturedCase = {
  slug: "republic-v-high-court-ex-parte-origin-8",
  title: "Republic v High Court (Criminal Division 9), Accra; Ex parte Origin 8 Ltd",
  court: "Supreme Court",
  year: 2022,
  citation: "[2020-2022] 1 SCGLR 119",
  keyPoint:
    "An application for certiorari will lie where there is a patent error of law on the face of the record or where the trial court acted in breach of natural justice, rendering the proceedings an absolute nullity.",
  bench:
    "Dotse JSC (Presiding), Baffoe-Bonnie, Pwamang, Amegatcher, Lovelace-Johnson JSC",
  decided: "Jan 24, 2022",
};

export const recentCases: CaseSummary[] = [
  {
    slug: "kpebu-v-attorney-general-no-2",
    title: "Kpebu v Attorney-General (No 2)",
    court: "Supreme Court",
    year: 2020,
    summary:
      "Constitutional validity of statutory provisions restricting right to bail under Section 96(7) of Act 30.",
  },
  {
    slug: "menns-v-the-republic",
    title: "Menns v The Republic",
    court: "Court of Appeal",
    year: 2023,
    summary:
      "Sentencing guidelines and mitigation factors in narcotics offences under the Narcotics Control Commission Act.",
  },
  {
    slug: "cal-bank-v-universal-merchant-trust",
    title: "Cal Bank PLC v Universal Merchant Trust",
    court: "High Court (Commercial)",
    year: 2023,
    summary:
      "Directors’ fiduciary duties and ostensible authority under Section 172 of the Companies Act, 2019 (Act 992).",
  },
];