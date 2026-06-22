"use client";

import { Locale } from "@/types/portfolio";

interface LanguageToggleProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
}

export function LanguageToggle({ locale, onChange }: LanguageToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-white/20 bg-slate-900/70 p-1 backdrop-blur">
      <button
        type="button"
        onClick={() => onChange("en")}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          locale === "en"
            ? "bg-brand-500 text-white"
            : "text-slate-300 hover:text-white"
        }`}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => onChange("ar")}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          locale === "ar"
            ? "bg-brand-500 text-white"
            : "text-slate-300 hover:text-white"
        }`}
      >
        العربية
      </button>
    </div>
  );
}
