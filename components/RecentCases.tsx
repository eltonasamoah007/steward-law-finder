import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseOfTheDay, recentCases } from "@/data/cases";
import CaseOfTheDay from "@/components/CaseOfTheDay";
import CaseCard from "@/components/CaseCard";

export default function RecentCases() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-8 md:px-8">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-bold text-navy">Recent Cases</h2>
        <Link
          href="/cases"
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          View all cases
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <CaseOfTheDay item={caseOfTheDay} />
        </div>
        <div className="flex flex-col gap-4 lg:col-span-2">
          {recentCases.map((item) => (
            <CaseCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}