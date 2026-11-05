# Moch. Dicky Ferdyansyah — Portfolio

Website portofolio pribadi saya sebagai **Fullstack Developer** dan **AI Engineer**. Satu halaman, cepat, dua bahasa (Indonesia/Inggris), mode terang/gelap.

🔗 **Live**: https://dickyferdyansyah.vercel.app/

## Fitur

- Satu halaman ringkas: Hero, Proyek, Tentang, Kontak
- Dua bahasa (`/id` dan `/en`)
- Mode terang/gelap — mengikuti `prefers-color-scheme` sistem (CSS-only) dan bisa diubah manual (tersimpan di `localStorage`)
- Navigasi mobile responsif dengan hamburger menu
- Statis penuh, JavaScript klien minimal (< 30 KB gzip)
- Responsif dan mengutamakan mobile (mobile-first)
- Target Lighthouse ≥ 95 di semua kategori

## Tech Stack

| Bagian          | Teknologi                               |
| --------------- | --------------------------------------- |
| Framework       | [Astro](https://astro.build)            |
| Styling         | [Tailwind CSS](https://tailwindcss.com) |
| Bahasa          | TypeScript (strict)                     |
| Package manager | pnpm                                    |
| Deploy          | [Vercel](https://vercel.com)            |

## Memulai

Prasyarat: Node.js 20+ dan pnpm.

```bash
git clone https://github.com/DickyFerdy/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Buka http://localhost:4321.

## Perintah

| Perintah       | Fungsi                          |
| -------------- | ------------------------------- |
| `pnpm dev`     | Menjalankan dev server          |
| `pnpm build`   | Build produksi ke `./dist`      |
| `pnpm preview` | Pratinjau hasil build           |
| `pnpm check`   | Pengecekan tipe (`astro check`) |
| `pnpm lint`    | Linting (ESLint)                |
| `pnpm format`  | Format kode dengan Prettier     |

## Struktur Proyek

```
src/
├── components/   # Komponen UI (Header, Hero, ProjectCard, ...)
├── content/      # Data proyek (Markdown per bahasa)
│   └── projects/
│       ├── id/   # Markdown proyek bahasa Indonesia
│       └── en/   # Markdown proyek bahasa Inggris
├── i18n/         # ui.ts (semua teks UI) + utils.ts
├── layouts/      # BaseLayout.astro
├── pages/        # /id dan /en
└── styles/       # Token tema dan CSS global
public/           # Aset statis (favicon, OG image, CV PDF)
```

## Mengubah Konten

- **Teks UI**: edit `src/i18n/ui.ts` — wajib update kunci bahasa **ID dan EN** sekaligus.
- **Proyek**: tambah/ubah file Markdown di `src/content/projects/id/` dan `src/content/projects/en/`. Tampilkan maksimal 4 proyek.
- **CV**: ganti file di `public/` (`cv-id.pdf`, `cv-en.pdf`).
- **Screenshot proyek**: simpan di `public/projects/` format WebP, rasio 16:9. Perbarui field `image` di frontmatter Markdown.

## Dokumentasi

- [`PRD.md`](./PRD.md): tujuan, kebutuhan, dan metrik keberhasilan
- [`Design.md`](./Design.md): panduan desain, token visual, dan spec komponen
- [`AGENTS.md`](./AGENTS.md): panduan untuk AI coding agent

## Deploy

Situs ini statis. Hubungkan repo ke Vercel:

- **Build command**: `pnpm build`
- **Output directory**: `dist`
- **Install command**: `pnpm install`

## Lisensi

Kode dilisensikan di bawah [MIT](./LICENSE). Konten (teks, gambar, dan CV) © Moch. Dicky Ferdyansyah, seluruh hak dilindungi.

## Kontak

[Email](mailto:dickyferdyansyah.dev@gmail.com) · [LinkedIn](https://linkedin.com/in/dickyferdyansyah) · [GitHub](https://github.com/DickyFerdy)
