export type SearchFilter = {
  value: string;
  label: string;
};

export const searchFilters: SearchFilter[] = [
  { value: "all", label: "All content" },
  { value: "cases", label: "Cases" },
  { value: "law-reports", label: "Law reports" },
  { value: "guides", label: "Guides" },
  { value: "legislation", label: "Legislation" },
  { value: "templates", label: "Templates" },
];

export const popularSearches: string[] = [
  "stay of execution",
  "company registration",
  "land title",
];