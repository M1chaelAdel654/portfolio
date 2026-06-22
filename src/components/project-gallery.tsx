"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ImagePlus } from "lucide-react";
import { Locale } from "@/types/portfolio";

interface ProjectGalleryProps {
  name: string;
  screenshots: string[];
  hasDetailedScreenshots: boolean;
  locale: Locale;
}

export function ProjectGallery({
  name,
  screenshots,
  hasDetailedScreenshots,
  locale
}: ProjectGalleryProps) {
  const safeScreenshots =
    screenshots.length > 0 ? screenshots : ["/images/project-placeholder.svg"];
  const [activeIndex, setActiveIndex] = useState(0);
  const total = safeScreenshots.length;

  const goPrev = () => setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () => setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
      <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10 bg-slate-950">
        <Image
          src={safeScreenshots[activeIndex]}
          alt={`${name} screenshot ${activeIndex + 1}`}
          width={1200}
          height={700}
          className="h-64 w-full object-cover md:h-72"
          priority={false}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-3 text-sm text-slate-200">
          {hasDetailedScreenshots
            ? locale === "en"
              ? "Project screenshot"
              : "لقطة شاشة للمشروع"
            : locale === "en"
              ? "Project screenshots will be added later"
              : "سيتم إضافة لقطات المشروع لاحقًا"}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous screenshot"
            className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next screenshot"
            className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:bg-white/10"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <span className="text-sm text-slate-300">
          {activeIndex + 1}/{total}
        </span>

        <div className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/20 px-3 py-1 text-xs text-slate-300">
          <ImagePlus className="h-3.5 w-3.5" />
          {locale === "en" ? "Replace with real screenshots" : "استبدلها بلقطات حقيقية"}
        </div>
      </div>
    </div>
  );
}
