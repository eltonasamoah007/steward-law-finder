import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export type ListCardItem = {
  key: string;
  href: string;
  label: string;
  meta?: string; // small grey text on the right, e.g. a year
};

type ListCardProps = {
  title: string;
  icon: LucideIcon; // icon in the blue square next to the title
  rowIcon: LucideIcon; // icon at the start of every row
  trailingIcon?: LucideIcon; // optional icon at the end of every row
  items: ListCardItem[];
  footerLabel: string;
  footerHref: string;
};

export default function ListCard({
  title,
  icon: Icon,
  rowIcon: RowIcon,
  trailingIcon: TrailingIcon,
  items,
  footerLabel,
  footerHref,
}: ListCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-card">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-brand">
          <Icon size={20} strokeWidth={1.5} />
        </span>
        <h2 className="font-serif text-xl font-semibold text-navy">{title}</h2>
      </div>

      {/* Rows */}
      <ul className="mt-4 divide-y divide-line">
        {items.map((item) => (
          <li key={item.key}>
            <Link
              href={item.href}
              className="flex items-center gap-3 py-3 text-sm text-ink hover:text-brand"
            >
              <RowIcon size={18} strokeWidth={1.5} className="shrink-0 text-muted" />
              <span className="flex-1 font-medium">{item.label}</span>
              {item.meta && <span className="text-muted">{item.meta}</span>}
              {TrailingIcon && (
                <TrailingIcon size={18} strokeWidth={1.5} className="shrink-0 text-brand" />
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer link, pushed to the bottom of the card */}
      <Link
        href={footerHref}
        className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand hover:text-brand-dark"
      >
        {footerLabel}
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}