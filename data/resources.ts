export type LegislationItem = {
  slug: string;
  title: string;
  year: number;
};

export type TemplateItem = {
  slug: string;
  title: string;
};

export const legislationItems: LegislationItem[] = [
  { slug: "land-act-2020", title: "Land Act, 2020 (Act 1036)", year: 2020 },
  { slug: "companies-act-2019", title: "Companies Act, 2019 (Act 992)", year: 2019 },
  {
    slug: "criminal-offences-amendment-act-2023",
    title: "Criminal Offences (Amendment) Act, 2023 (Act 1101)",
    year: 2023,
  },
];

export const templateItems: TemplateItem[] = [
  {
    slug: "deed-of-assignment",
    title: "Deed of Assignment (Customary / Leasehold Land)",
  },
  {
    slug: "tenancy-agreement",
    title: "Standard Residential & Commercial Tenancy Agreement",
  },
  {
    slug: "executive-employment-contract",
    title: "Senior Executive Employment Contract",
  },
];