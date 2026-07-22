import Image from "next/image";
import { extraImages } from "@/data/keyboard-data";

export default function DetailStrip() {
  return (
    <section className=" py-20 sm:py-28 lg:w-[35%]">
      <div className="mb-12 max-w-xl">
        <p className="eyebrow mb-4">Close-ups</p>
        <h2 className="text-balance font-display text-3xl font-semibold text-ink-50 sm:text-4xl">
          Parts you'll notice after a week.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {extraImages.map((image) => (
          <figure
            key={image.src}
            className="group relative aspect-square overflow-hidden rounded-key border border-stroke"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 30vw, 92vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-base-950/85 to-transparent px-4 py-3 font-mono text-xs uppercase tracking-wide2 text-ink-50/90">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
