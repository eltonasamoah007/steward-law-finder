import { BookOpen, Download, File, FileText } from "lucide-react";
import { legislationItems, templateItems } from "@/data/resources";
import ListCard from "@/components/ListCard";

export default function LegislationTemplates() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-8 md:px-8">
      <div className="grid gap-4 md:grid-cols-2">
        <ListCard
          title="Legislation"
          icon={BookOpen}
          rowIcon={File}
          items={legislationItems.map((item) => ({
            key: item.slug,
            href: `/legislation/${item.slug}`,
            label: item.title,
            meta: String(item.year),
          }))}
          footerLabel="Browse legislation"
          footerHref="/legislation"
        />

        <ListCard
          title="Templates"
          icon={FileText}
          rowIcon={FileText}
          trailingIcon={Download}
          items={templateItems.map((item) => ({
            key: item.slug,
            href: `/templates/${item.slug}`,
            label: item.title,
          }))}
          footerLabel="Browse templates"
          footerHref="/templates"
        />
      </div>
    </section>
  );
}