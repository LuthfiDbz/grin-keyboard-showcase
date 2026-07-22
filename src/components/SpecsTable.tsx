import { specifications } from "@/data/keyboard-data";

export default function SpecsTable() {
  return (
    <section
      id="specifications"
      className="py-20 sm:py-28 lg:w-[35%]"
    >
      <div className="mb-12 max-w-xl">
        <p className="eyebrow mb-4">Specifications</p>
        <h2 className="text-balance font-display text-3xl font-semibold text-ink-50 sm:text-4xl">
          Everything under the keycaps.
        </h2>
      </div>

      <div className="glass overflow-hidden rounded-[1.5rem]">
        <dl>
          {specifications.map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 ${
                i !== specifications.length - 1 ? "border-b border-stroke" : ""
              }`}
            >
              <dt className="font-mono text-xs uppercase tracking-wide2 text-ink-500">
                {row.label}
              </dt>
              <dd className="font-body text-base font-medium text-ink-50 sm:text-right">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
