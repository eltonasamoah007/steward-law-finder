export type PracticeGuide = {
  slug: string;
  title: string;
  image?: string; // optional: path inside /public, e.g. "/images/guides/employment.jpg"
  imageAlt?: string;
};

export const practiceGuides: PracticeGuide[] = [
  { slug: "employment", title: "Employment", image: "/images/guides/employment.png", imageAlt: "Colleagues in a meeting" },
  { slug: "contract", title: "Contract", image: "/images/guides/contract.png", imageAlt: "Partners signing a contract" },
  { slug: "litigation", title: "Litigation", image: "/images/guides/court.png", imageAlt: "Cout" },
  { slug: "property", title: "Property", image: "/images/guides/building.png", imageAlt: "Building" },
];