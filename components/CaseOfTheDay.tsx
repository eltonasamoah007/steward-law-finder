import Link from "next/link";
import { ArrowRight, Landmark, Star } from "lucide-react";
import type { FeaturedCase } from "@/data/cases";

export default function CaseOfTheDay({ item }: { item: FeaturedCase }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-white p-5 shadow-card">
      {/* Top row: badge and court / year */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-300 bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
          <Star size={14} strokeWidth={1.5} />
          Case of the Day
        </span>
        <span className="text-sm text-muted">
          {item.court} • {item.year}
        </span>
      </div>

      {/* Case name */}
      <h3 className="mt-4 font-serif text-lg font-semibold leading-7 text-ink md:text-xl md:leading-8">
        {item.title}
      </h3>

      {/* Citation and court chips */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand">
          {item.citation}
        </span>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-navy">
          {item.court}
        </span>
        <span className="text-sm text-muted">Year: {item.year}</span>
      </div>

      {/* Key point */}
      <div className="mt-4 rounded-lg border-l-2 border-brand bg-blue-50 p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-brand">
          Key point
        </p>
        <p className="mt-2 font-serif text-[15px] italic leading-[26px] text-muted">
          “{item.keyPoint}”
        </p>
      </div>

      {/* Bench and decision date, pushed to the bottom of the card */}
      <div className="mt-auto pt-6">
        <div className="flex items-start gap-3 border-t border-line pt-4 text-xs leading-5 text-muted">
          <Landmark size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-navy" />
          <p>
            <span className="font-semibold text-ink">Bench / Coram: </span>
            {item.bench} • Decided: {item.decided}
          </p>
        </div>
        <Link
          href={`/cases/${item.slug}`}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-dark"
        >
          Read case
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}