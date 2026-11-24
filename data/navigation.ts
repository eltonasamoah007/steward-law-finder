export type NavLink = {
  label: string;
  href: string;
  badge?: string;
};

export const navLinks: NavLink[] = [
  { label: "Cases", href: "/cases" },
  { label: "Guides", href: "/guides" },
  { label: "Legislation", href: "/legislation" },
  { label: "Templates", href: "/templates" },
  { label: "AI Assistant", href: "/ai-assistant", badge: "New" },
];