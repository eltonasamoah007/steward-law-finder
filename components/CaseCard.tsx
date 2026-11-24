import Link from "next/link";
import type { CaseSummary } from "@/data/cases";

export default function CaseCard({ item }: { item: CaseSummary }) {
  return (
    <Link
      href={`/cases/${item.slug}`}
      className="flex flex-1 flex-col rounded-xl border border-line bg-white p-5 shadow-card transition hover:border-slate-300 hover:shadow-card-hover"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="rounded bg-blue-50 px-2 py-1 text-xs font-semibold text-navy">
          {item.court}
        </span>
        <span className="text-sm text-muted">{item.year}</span>
      </div>
      <h3 className="mt-3 font-serif text-base font-semibold text-ink">
        {item.title}
      </h3>
      <p className="mt-1 text-sm leading-[22px] text-muted">{item.summary}</p>
    </Link>
  );
}