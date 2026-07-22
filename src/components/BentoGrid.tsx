import Image from "next/image";
import { bentoImages, bentoStats } from "@/data/keyboard-data";

export default function BentoGrid() {
  return (
    <section className="mx-auto px-6 lg:px-60 py-20 sm:py-28">
      <div className="mb-12 max-w-xl">
        <p className="eyebrow mb-4">Anatomy</p>
        <h2 className="text-balance font-display text-3xl font-semibold text-ink-50 sm:text-4xl">
          Machined details, not marketing details.
        </h2>
      </div>

      <div className="grid grid-cols-2 auto-rows-[200px] gap-5 md:grid-cols-4 md:auto-rows-[260px]">
        
        <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-[1.5rem] border border-stroke">
          <Image
            src={bentoImages.primary.src}
            alt={bentoImages.primary.alt}
            fill
            sizes="(min-width: 768px) 45vw, 92vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-950/70 via-transparent to-transparent" />
          <span className="absolute bottom-5 left-5 font-mono text-xs uppercase tracking-wide2 text-ink-50/90">
            Function row · rotary knob
          </span>
        </div>

        <div className="group relative col-span-2 overflow-hidden rounded-[1.5rem] border border-stroke md:col-span-1">
          <Image
            src={bentoImages.tertiary.src}
            alt={bentoImages.tertiary.alt}
            fill
            sizes="(min-width: 768px) 22vw, 92vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {bentoStats.map((stat) => (
          <div
            key={stat.label}
            className="glass flex flex-col justify-between rounded-[1.5rem] p-6"
          >
            <span className="font-mono text-xs uppercase tracking-wide2 text-lime">
              {stat.label}
            </span>
            <div>
              <p className="font-display text-xl font-semibold text-ink-50 sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {stat.detail}
              </p>
            </div>
          </div>
        ))}

        <div className="group relative col-span-2 overflow-hidden rounded-[1.5rem] border border-stroke md:col-span-1">
          <Image
            src={bentoImages.secondary.src}
            alt={bentoImages.secondary.alt}
            fill
            sizes="(min-width: 768px) 22vw, 92vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
