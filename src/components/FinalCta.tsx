import { ArrowRight } from "lucide-react";
import { finalCta } from "@/data/keyboard-data";

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
      <div className="glass relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
        <div className="relative">
          <h2 className="text-balance font-display text-3xl font-semibold text-ink-50 sm:text-5xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-balance text-ink-300">
            {finalCta.subheadline}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={finalCta.ctaPrimary.href}
              className="keycap-btn keycap-btn--primary"
            >
              {finalCta.ctaPrimary.label}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
            <a
              href={finalCta.ctaSecondary.href}
              className="keycap-btn keycap-btn--ghost"
            >
              {finalCta.ctaSecondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
