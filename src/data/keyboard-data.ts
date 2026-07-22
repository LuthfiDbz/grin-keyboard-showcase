// Static product data for the GRAIN G75 showcase.
// Everything here is plain data — no client state, no fetching —
// so the page can be fully rendered at build time (SSG).

export const product = {
  brand: "GRAIN",
  name: "G75",
  fullName: "GRAIN G75",
  tagline: "A keyboard cut like an instrument.",
  description:
    "A 75% gasket-mounted keyboard machined from a single aluminum billet. Built for people who notice the difference between a switch that clicks and one that speaks.",
  price: "4,290,000",
  currency: "IDR",
  sku: "GRAIN-G75-CHR",
  availability: "InStock" as const,
  heroImage: "/images/hero.jpg",
};

export const heroContent = {
  eyebrow: "GRAIN / G75 · Gasket-Mounted 75%",
  headline: "Every keystroke, deliberate.",
  subheadline:
    "Precision-milled aluminum, a floating gasket mount, and PBT keycaps dyed to hold their color for a decade. This is the board you stop noticing — because it never lets you down.",
  ctaPrimary: { label: "Configure your G75", href: "#" },
  ctaSecondary: { label: "See the specs", href: "#specifications" },
};

export type BentoStat = {
  label: string;
  value: string;
  detail: string;
};

export const bentoStats: BentoStat[] = [
  {
    label: "Build",
    value: "CNC Aluminum",
    detail: "6063 billet, sandblasted and anodized in-house.",
  },
  {
    label: "Mount",
    value: "Gasket-Mount",
    detail: "Silicone gasket band isolates the plate from the case.",
  },
];

export const bentoImages = {
  primary: {
    src: "/images/bento-1.jpg",
    alt: "Close-up of the GRAIN G75 function row and rotary control knob",
  },
  secondary: {
    src: "/images/bento-2.jpg",
    alt: "GRAIN G75 keyboard angled view showing full keycap set and legends",
  },
  tertiary: {
    src: "/images/bento-3.jpg",
    alt: "GRAIN G75 keyboard front-facing on a felt desk mat",
  },
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export const deskGallery: GalleryImage[] = [
  {
    src: "/images/desk-1.jpg",
    alt: "GRAIN G75 keyboard on a wooden desk beside a wrist rest and EDC tools",
    caption: "Studio desk, late afternoon.",
  },
  {
    src: "/images/desk-2.jpg",
    alt: "GRAIN G75 keyboard on a felt desk mat next to a wireless mouse",
    caption: "Minimal setup, maximum focus.",
  },
  {
    src: "/images/desk-3.jpg",
    alt: "GRAIN G75 keyboard packaging and colorway on branded backdrop",
    caption: "Straight off the line.",
  },
];

export const extraImages: GalleryImage[] = [
  {
    src: "/images/extra-1.jpg",
    alt: "Detail shot of GRAIN G75 keyboard case corner and side profile",
    caption: "Case corner detail.",
  },
  {
    src: "/images/extra-2.jpg",
    alt: "Detail shot of GRAIN G75 arrow cluster and navigation keys",
    caption: "Navigation cluster.",
  },
  {
    src: "/images/extra-3.jpg",
    alt: "Close-up of GRAIN G75 keycap legends and rotary knob",
    caption: "Legend close-up.",
  },
  {
    src: "/images/extra-3.jpg",
    alt: "Close-up of GRAIN G75 keycap legends and rotary knob",
    caption: "Legend close-up.",
  },
];

export type SpecRow = {
  label: string;
  value: string;
};

export const specifications: SpecRow[] = [
  { label: "Layout", value: "75% — 84 keys" },
  { label: "Case material", value: "CNC-machined 6063 aluminum" },
  { label: "Mounting style", value: "Gasket mount, silicone isolation band" },
  { label: "Plate", value: "FR4 fiberglass, 1.2mm" },
  { label: "Switches", value: "Hot-swappable, 5-pin PCB" },
  { label: "Keycaps", value: "PBT, dye-sublimated, Cherry profile" },
  { label: "Stabilizers", value: "Screw-in, PCB-mount, factory-lubed" },
  {
    label: "Connectivity",
    value: "Tri-mode — 2.4GHz / Bluetooth 5.1 / USB-C wired",
  },
  { label: "Battery", value: "4000mAh, ~200 hrs (backlight off)" },
  { label: "Polling rate", value: "1000Hz wired · 125Hz wireless" },
  { label: "Firmware", value: "QMK / VIA compatible" },
  { label: "Extras", value: "Aluminum rotary knob — volume & media" },
  { label: "Weight", value: "1.35 kg" },
];

export const finalCta = {
  headline: "Built to be your last keyboard.",
  subheadline:
    "Every G75 is assembled, tuned, and sound-tested by hand before it ships.",
  ctaPrimary: { label: "Configure your G75", href: "#" },
  ctaSecondary: { label: "Talk to us", href: "#" },
};
