import Link from "next/link";
import { product } from "@/data/keyboard-data";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-5 gap-10">
        <div className="glass flex items-center gap-2 rounded-full px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-lime" />
          <span className="font-display text-sm font-semibold tracking-wide2 text-ink-50">
            {product.brand}
          </span>
        </div>
        <nav className="glass hidden items-center gap-8 rounded-full px-6 py-2 sm:flex">
          <Link
            href="#specifications"
            className="text-sm text-ink-300 transition-colors hover:text-lime-bright"
          >
            Specs
          </Link>
          <Link
            href="#gallery"
            className="text-sm text-ink-300 transition-colors hover:text-lime-bright"
          >
            Gallery
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-ink-50 transition-colors hover:text-lime-bright"
          >
            Configure
          </Link>
        </nav>
      </div>
    </header>
  );
}
