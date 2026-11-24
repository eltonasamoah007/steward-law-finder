import Link from "next/link";
import { BookOpen, Building2, Gavel, Scale } from "lucide-react";
import {
  copyrightText,
  footerColumns,
  jurisdictionLabel,
  socialLinks,
  type FooterColumn,
} from "@/data/footer";

// Icon shown beside each column heading
const columnIcons = {
  product: Scale,
  resources: BookOpen,
  company: Building2,
  legal: Gavel,
} satisfies Record<FooterColumn["id"], typeof Scale>;

export default function Footer() {
  return (
    <footer className="mt-12 bg-navy text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-8">
        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {footerColumns.map((column) => {
            const Icon = columnIcons[column.id];
            return (
              <nav key={column.id} aria-label={column.title}>
                <h2 className="flex items-center gap-2 font-serif text-lg font-semibold">
                  <Icon size={18} strokeWidth={1.5} className="text-gold" />
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-medium">{copyrightText}</p>
            <span className="inline-flex items-center gap-2 rounded border border-white/15 bg-black/20 px-2 py-1 text-xs font-bold text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {jurisdictionLabel}
            </span>
          </div>

          <ul className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}