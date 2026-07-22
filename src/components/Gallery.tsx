import Image from "next/image";
import { deskGallery } from "@/data/keyboard-data";

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto px-6 lg:px-60 py-20 sm:py-28">
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow mb-4">On the desk</p>
          <h2 className="text-balance font-display text-3xl font-semibold text-ink-50 sm:text-4xl">
            Where it actually lives.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-ink-500">
          Shot on real desks, not a studio backdrop — because that's where
          you'll spend eight hours a day with it.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {deskGallery.map((image) => (
          <figure
            key={image.src}
            className="group relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-stroke"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 30vw, 92vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-950/80 via-base-950/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <figcaption className="absolute bottom-4 left-4 translate-y-2 font-mono text-xs uppercase tracking-wide2 text-ink-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
