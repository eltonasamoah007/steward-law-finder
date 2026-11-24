export type BannerSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  previewLabel: string;
  previewTitle: string;
  previewAnswer: string;
  previewTags: string[];
};

export const bannerSlides: BannerSlide[] = [
  {
    id: "ai-assistant",
    eyebrow: "NEW · STEWARD AI",
    title: "Ask a legal question. Get an answer backed by Ghanaian law.",
    description:
      "AI research grounded in statutes and reported cases, with sources you can verify.",
    ctaLabel: "Try AI Assistant",
    ctaHref: "/ai-assistant",
    previewLabel: "Steward AI Preview",
    previewTitle: "What are the requirements for a valid customary gift of land?",
    previewAnswer:
      "A valid gift of customary land requires clear intention to give, publicity of the gift, acceptance evidenced by presentation of aseda (earnest/token), and placing the donee in possession.",
    previewTags: ["[2018] 1 SCGLR 241", "Land Act 2020 § 14"],
  },
  {
    id: "law-reports",
    eyebrow: "LAW REPORTS",
    title: "Ghana's reported cases, searchable in seconds.",
    description:
      "Browse Supreme Court and Court of Appeal judgments with key points and citations.",
    ctaLabel: "Browse cases",
    ctaHref: "/cases",
    previewLabel: "Law Report Preview",
    previewTitle: "Republic v High Court (Criminal Division 9), Accra; Ex parte Origin 8 Ltd",
    previewAnswer:
      "Certiorari will lie where there is a patent error of law on the face of the record or a breach of natural justice.",
    previewTags: ["[2020-2022] 1 SCGLR 119", "Supreme Court"],
  },
];