# Moch. Dicky Ferdyansyah — Portfolio

Website portofolio pribadi saya sebagai **Fullstack Developer** dan **AI Engineering**. Satu halaman, cepat, dua bahasa (Indonesia/Inggris), mode terang/gelap.

🔗 **Live**: https://dickyferdyansyah.vercel.app/

## Fitur

- Satu halaman ringkas: Hero, Proyek, Tentang, Kontak
- Dua bahasa (`/id` dan `/en`)
- Mode terang/gelap mengikuti preferensi sistem
- Statis penuh, JavaScript klien minimal
- Responsif dan mengutamakan mobile
- Target Lighthouse ≥ 95 di semua kategori

## Tech Stack

| Bagian          | Teknologi                               |
| --------------- | --------------------------------------- |
| Framework       | [Astro](https://astro.build)            |
| Styling         | [Tailwind CSS](https://tailwindcss.com) |
| Bahasa          | TypeScript                              |
| Package manager | pnpm                                    |
| Deploy          | [Vercel / Netlify / Cloudflare Pages]   |

## Memulai

Prasyarat: Node.js 20+ dan pnpm.

```bash
git clone https://github.com/[username]/[repo].git
cd [repo]
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
| `pnpm lint`    | Linting                         |
| `pnpm format`  | Format kode dengan Prettier     |

## Struktur Proyek

```
src/
├── components/   # Komponen UI
├── content/      # Data proyek
├── i18n/         # Teks per bahasa
├── layouts/      # Layout dasar
├── pages/        # /id dan /en
└── styles/       # Token tema dan CSS global
public/           # Aset statis (favicon, OG image, CV)
```

## Mengubah Konten

- **Teks UI**: edit `src/i18n/ui.ts` (ID dan EN).
- **Proyek**: tambah/ubah file di `src/content/projects/`. Tampilkan maksimal 4 proyek.
- **CV**: ganti file di `public/` (`cv-id.pdf`, `cv-en.pdf`).

## Dokumentasi

- [`PRD.md`](./PRD.md): tujuan, kebutuhan, dan metrik
- [`Design.md`](./Design.md): panduan desain dan token visual
- [`AGENTS.md`](./AGENTS.md): panduan untuk AI coding agent

## Deploy

Situs ini statis. Hubungkan repo ke platform hosting, lalu atur:

- **Build command**: `pnpm build`
- **Output directory**: `dist`

## Lisensi

Kode dilisensikan di bawah [MIT](./LICENSE). Konten (teks, gambar, dan CV) © Moch. Dicky Ferdyansyah, seluruh hak dilindungi.

## Kontak

[Email](mailto:[EMAIL_ADDRESS]) · [LinkedIn](https://linkedin.com/in/dickyferdyansyah) · [GitHub](https://github.com/DickyFerdy)
