export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  id: "product" | "resources" | "company" | "legal";
  title: string;
  links: FooterLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    id: "product",
    title: "Product",
    links: [
      { label: "Case Law Search", href: "/cases" },
      { label: "Supreme Court Citator", href: "/citator" },
      { label: "Legislation Index", href: "/legislation" },
      { label: "Legal Templates", href: "/templates" },
      { label: "AI Case Briefs", href: "/ai-assistant" },
      { label: "Court Rules", href: "/court-rules" },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      { label: "Ghana Law Reports", href: "/law-reports" },
      { label: "Practice Guides", href: "/guides" },
      { label: "Judicial Service News", href: "/news" },
      { label: "Bar Association Review", href: "/bar-review" },
      { label: "Law Student Portal", href: "/students" },
      { label: "Research Help", href: "/help" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { label: "About Steward", href: "/about" },
      { label: "Editorial Board", href: "/editorial-board" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Press & Media", href: "/press" },
      { label: "Partner with Us", href: "/partners" },
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Citation Standards", href: "/citation-standards" },
      { label: "Copyright & Disclaimer", href: "/copyright" },
      { label: "Data Protection (Act 843)", href: "/data-protection" },
    ],
  },
];

export const socialLinks: FooterLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X/Twitter", href: "https://x.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
];

export const copyrightText = "© 2026 Steward Law Finder. Ghana.";
export const jurisdictionLabel = "Republic of Ghana Jurisdiction";