import BannerCarousel from "@/components/BannerCarousel";
import SearchSection from "@/components/SearchSection";
import RecentCases from "@/components/RecentCases";
import PracticeGuides from "@/components/PracticeGuides";
import LegislationTemplates from "@/components/LegislationTemplates";

export default function Home() {
  return (
    <main>
      <BannerCarousel />
      <SearchSection />
      <RecentCases />
      <PracticeGuides />
      <LegislationTemplates />
    </main>
  );
}