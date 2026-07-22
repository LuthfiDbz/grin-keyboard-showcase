import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { heroContent, product } from "@/data/keyboard-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 lg:pt-36 sm:pt-40">
      <div className="mx-auto grid grid-cols-1 items-center gap-14 px-6 lg:px-60   pb-20 lg:grid-cols-[1.05fr_1fr] lg:pb-28">
        {/* Copy */}
        <div className="animate-rise">
          <p className="eyebrow mb-6">{heroContent.eyebrow}</p>
          <h1 className="text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink-50 sm:text-6xl lg:text-[3.6rem]">
            {heroContent.headline}
          </h1>
          <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-ink-300 sm:text-lg">
            {heroContent.subheadline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={heroContent.ctaPrimary.href}
              className="keycap-btn keycap-btn--primary"
            >
              {heroContent.ctaPrimary.label}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
            <a
              href={heroContent.ctaSecondary.href}
              className="keycap-btn keycap-btn--ghost"
            >
              {heroContent.ctaSecondary.label}
            </a>
          </div>

          <div className="mt-14 flex items-center gap-3 text-ink-500">
            <ChevronDown className="h-4 w-4 animate-bounce" strokeWidth={2} />
            <span className="font-mono text-xs uppercase tracking-wide2">
              Scroll to explore
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div
          className="animate-rise relative aspect-[4/3] w-full lg:-rotate-1"
          style={{ animationDelay: "120ms" }}
        >
          <div className="glass absolute inset-0 -z-10 translate-x-3 translate-y-4 rounded-[1.75rem] lg:translate-x-5 lg:translate-y-6" />
          <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-stroke shadow-keycap">
            <Image
              src={product.heroImage}
              alt="GRAIN G75 mechanical keyboard, top-down detail of function row, backspace, and enter keycaps"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-950/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
