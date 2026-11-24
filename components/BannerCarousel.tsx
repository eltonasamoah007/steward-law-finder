"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { bannerSlides } from "@/data/banners";

const ROTATE_MS = 6000;

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = bannerSlides.length;

  // Auto-rotate every 6 seconds, unless the mouse is over the banner
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [paused, total, current]);

  const goPrev = () => setCurrent((current - 1 + total) % total);
  const goNext = () => setCurrent((current + 1) % total);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured"
      className="mx-auto max-w-[1440px] px-4 pt-6 md:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-navy to-brand shadow-card-hover">
        {/* All slides share one grid cell, so the tallest slide sets the height */}
        <div className="grid">
          {bannerSlides.map((slide, index) => (
            <div
              key={slide.id}
              inert={index !== current}
              className={`col-start-1 row-start-1 grid min-h-[340px] items-center gap-8 px-14 pb-16 pt-12 transition-opacity duration-500 md:grid-cols-[3fr_2fr] md:px-16 ${
                index === current ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-gold">
                  <Sparkles size={14} strokeWidth={1.5} />
                  {slide.eyebrow}
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white lg:text-4xl lg:leading-[44px]">
                  {slide.title}
                </h2>
                <p className="mt-3 max-w-xl text-base text-white/85">
                  {slide.description}
                </p>
                <Link
                  href={slide.ctaHref}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-navy hover:bg-canvas"
                >
                  {slide.ctaLabel}
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Preview card (hidden on small screens) */}
              <div className="hidden rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur md:block">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs font-medium text-white/80">
                    {slide.previewLabel}
                  </span>
                </div>
                <p className="ml-auto mt-4 max-w-[85%] rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-sm font-medium text-white">
                  {slide.previewTitle}
                </p>
                <div className="mt-4 rounded-lg bg-white/90 p-4">
                  <p className="text-sm leading-relaxed text-muted">
                    {slide.previewAnswer}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {slide.previewTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={goPrev}
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-navy/60 text-white hover:bg-navy"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={goNext}
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-navy/60 text-white hover:bg-navy"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {bannerSlides.map((s, index) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === current}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === current ? "w-6 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}