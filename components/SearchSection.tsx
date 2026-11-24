import Link from "next/link";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { popularSearches, searchFilters } from "@/data/search";

export default function SearchSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-4 pt-12 text-center md:px-8 md:pt-14">
      <h1 className="font-serif text-3xl font-bold text-ink md:text-[40px] md:leading-[48px]">
        Ghanaian law, found in seconds.
      </h1>
      <p className="mt-3 text-base text-muted">
        Search cases, law reports, guides, legislation and templates, all in one
        place.
      </p>

      {/* Search form: sends the visitor to /search?type=...&q=... */}
      <form
        action="/search"
        role="search"
        className="mx-auto mt-8 flex max-w-4xl flex-col gap-2 rounded-2xl border border-line bg-white p-2 shadow-card-hover focus-within:border-brand focus-within:ring-2 focus-within:ring-brand sm:flex-row sm:items-center sm:rounded-full"
      >
        {/* "All content" dropdown */}
        <div className="relative flex items-center sm:border-r sm:border-line">
          <SlidersHorizontal
            size={18}
            strokeWidth={1.5}
            className="pointer-events-none absolute left-4 text-muted"
          />
          <select
            name="type"
            aria-label="Content type"
            className="h-12 w-full cursor-pointer appearance-none bg-transparent pl-11 pr-9 text-left text-sm font-medium text-ink outline-none sm:w-auto"
          >
            {searchFilters.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            strokeWidth={1.5}
            className="pointer-events-none absolute right-3 text-ink"
          />
        </div>

        {/* Search box */}
        <div className="relative flex flex-1 items-center">
          <Search
            size={18}
            strokeWidth={1.5}
            className="pointer-events-none absolute left-4 text-muted"
          />
          <input
            type="search"
            name="q"
            aria-label="Search"
            placeholder="Search by case name, citation, legal principle or keyword..."
            className="h-12 w-full bg-transparent pl-12 pr-4 text-sm text-ink outline-none placeholder:text-muted"
          />
        </div>

        <button
          type="submit"
          className="h-12 rounded-xl bg-brand px-8 text-sm font-bold text-white hover:bg-brand-dark sm:rounded-full"
        >
          Search
        </button>
      </form>

      {/* Popular searches */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs font-medium text-muted">Popular searches:</span>
        {popularSearches.map((term) => (
          <Link
            key={term}
            href={`/search?q=${encodeURIComponent(term)}`}
            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-blue-100 hover:text-brand"
          >
            {term}
          </Link>
        ))}
      </div>
    </section>
  );
}