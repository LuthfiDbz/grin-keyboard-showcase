# GRAIN G75 — Mechanical Keyboard Showcase

Landing page portofolio: product showcase 100% statis (SSG) untuk mechanical
keyboard fiktif "GRAIN G75". Dibangun dengan fokus pada performa, SEO, dan
visual glassmorphism + bento grid — tanpa state management, tanpa 3D, tanpa
audio player.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (design token kustom di `tailwind.config.ts`)
- `next/font` — Space Grotesk (display), Inter (body), JetBrains Mono (data/label)
- `lucide-react` untuk ikon
- 100% Static Site Generation (`output: "export"` di `next.config.mjs`)

## Menjalankan secara lokal

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build statis (untuk hosting seperti Vercel/Netlify/S3/Cloudflare Pages)

```bash
npm run build
```

Hasil build statis akan ada di folder `out/`, siap di-deploy ke static hosting
mana pun.

## Struktur folder

```
src/
├─ app/
│  ├─ layout.tsx        # metadata SEO lengkap (OG, Twitter, JSON-LD) + font
│  ├─ page.tsx           # merangkai semua section
│  ├─ globals.css        # design tokens & utility class kustom
│  ├─ sitemap.ts         # sitemap.xml statis
│  └─ robots.ts          # robots.txt statis
├─ components/
│  ├─ Navbar.tsx
│  ├─ Hero.tsx
│  ├─ BentoGrid.tsx
│  ├─ Gallery.tsx         # desk setup gallery (hover zoom)
│  ├─ SpecsTable.tsx
│  ├─ DetailStrip.tsx     # 3 foto sisa (extra) sebagai close-up detail
│  ├─ FinalCta.tsx
│  └─ Footer.tsx
└─ data/
   └─ keyboard-data.ts    # semua copy & path aset foto (single source of truth)
public/
└─ images/                # hero.jpg, bento-1/2/3.jpg, desk-1/2/3.jpg, extra-1/2/3.jpg
```

## Sebelum deploy ke domain asli

Ganti nilai `SITE_URL` di `src/app/layout.tsx` dan URL di `src/app/sitemap.ts`
/ `src/app/robots.ts` dari `https://grain-keyboards.example.com` ke domain
sebenarnya. Isi juga `href="#"` pada tombol CTA dengan link checkout/konfigurator
Anda.

## Catatan performa

- Semua foto sudah di-resize & dikompres (total ±2.6MB untuk 10 foto,
  turun dari ±16.5MB asli) supaya LCP tetap cepat.
- `next/image` dengan `priority` hanya dipakai di hero; semua gambar lain
  lazy-load otomatis.
- Tidak ada JavaScript client-side yang tidak perlu — seluruh halaman adalah
  Server Component statis, animasi murni CSS (`prefers-reduced-motion`
  dihormati).
