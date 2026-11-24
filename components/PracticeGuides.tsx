import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { practiceGuides } from "@/data/guides";
import GuideTile from "@/components/GuideTile";

export default function PracticeGuides() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-8 md:px-8">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-bold text-navy">
          Practice Guides
        </h2>
        <Link
          href="/guides"
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Browse all guides
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {practiceGuides.map((guide) => (
          <GuideTile key={guide.slug} guide={guide} />
        ))}
      </div>
    </section>
  );
}