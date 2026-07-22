import { product } from "@/data/keyboard-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stroke">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-lime" />
          <span className="font-display text-sm font-semibold tracking-wide2 text-ink-50">
            {product.brand}
          </span>
        </div>
        <p className="font-mono text-xs uppercase tracking-wide2 text-ink-500">
          © {year} {product.brand} Keyboards. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
