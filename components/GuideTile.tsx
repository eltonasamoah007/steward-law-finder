import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PracticeGuide } from "@/data/guides";

export default function GuideTile({ guide }: { guide: PracticeGuide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group relative block h-[220px] overflow-hidden rounded-xl bg-linear-to-b from-slate-300 to-navy shadow-card transition hover:shadow-card-hover"
    >
      {guide.image && (
        <Image
          src={guide.image}
          alt={guide.imageAlt ?? ""}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Dark fade at the bottom so the title is always readable */}
      <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/30 to-transparent" />

      {/* Title and arrow */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
        <h3 className="font-serif text-xl font-bold text-white">{guide.title}</h3>
        <ArrowRight
          size={20}
          className="text-white transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}