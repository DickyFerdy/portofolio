# Moch. Dicky Ferdyansyah — Portfolio

Website portofolio pribadi sebagai **Fullstack Developer** dan **AI Engineer**. Didesain satu halaman, cepat, dwibahasa (Indonesia/Inggris), serta mendukung mode terang dan gelap.

🔗 **Live**: https://dickyferdyansyah.vercel.app/

---

## Fitur Utama

- **Satu Halaman Terstruktur**: Hero, Proyek Pilihan, Tentang Saya, dan Kontak.
- **Dwibahasa (i18n)**: Mendukung rute `/id` dan `/en` dengan konten tersinkronisasi.
- **Mode Terang/Gelap**:
  - Mengikuti preferensi sistem (`prefers-color-scheme`) tanpa JavaScript.
  - Pengalih manual dengan persistensi di `localStorage` tanpa FOUC (_Flash of Unstyled Content_).
- **Navigasi Responsif**: Header _sticky_ dengan menu dropdown _hamburger_ di perangkat _mobile_.
- **Performa Tinggi**: Statis penuh dengan JavaScript klien minimal (< 30 KB gzip) dan skor Lighthouse target ≥ 95.
- **Aksesibilitas (a11y)**: Memenuhi standar WCAG AA, navigasi penuh menggunakan keyboard, _skip link_, dan mematuhi preferensi _reduced motion_.

---

## Tech Stack

| Bagian          | Teknologi                               |
| --------------- | --------------------------------------- |
| Framework       | [Astro](https://astro.build) (Static)   |
| Styling         | [Tailwind CSS](https://tailwindcss.com) |
| Bahasa          | TypeScript (Strict mode)                |
| Package Manager | pnpm                                    |
| Hosting         | [Vercel](https://vercel.com)            |

---

## Memulai

### Prasyarat

- Node.js versi 20+
- pnpm

### Instalasi & Menjalankan Lokal

```bash
git clone https://github.com/DickyFerdy/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Buka [http://localhost:4321](http://localhost:4321) di peramban Anda.

---

## Perintah Tersedia

| Perintah       | Fungsi                                               |
| -------------- | ---------------------------------------------------- |
| `pnpm dev`     | Menjalankan _development server_ di `localhost:4321` |
| `pnpm build`   | Menghasilkan _build_ produksi statis ke `./dist`     |
| `pnpm preview` | Menjalankan _preview_ lokal dari hasil _build_       |
| `pnpm check`   | Pengecekan tipe TypeScript dan Astro (`astro check`) |
| `pnpm lint`    | Menjalankan ESLint                                   |
| `pnpm format`  | Format kode menggunakan Prettier                     |

---

## Struktur Direktori

```
src/
├── components/     # Komponen UI Astro (Header, Hero, ProjectCard, About, Contact, Footer)
├── content/        # Data proyek (Content Collection Markdown)
│   └── projects/
│       ├── id/     # Data proyek bahasa Indonesia
│       └── en/     # Data proyek bahasa Inggris
├── i18n/           # Kamus teks UI (ui.ts) dan utilitas rute (utils.ts)
├── layouts/        # Layout dasar (BaseLayout.astro)
├── pages/
│   ├── index.astro # Redirect root ke /id/
│   ├── id/         # Halaman bahasa Indonesia
│   └── en/         # Halaman bahasa Inggris
└── styles/         # global.css & token variabel CSS tema
public/             # Aset statis (favicon, OG image, CV PDF)
```

---

## Pengelolaan Konten

- **Teks UI**: Kelola string UI di `src/i18n/ui.ts`. Pastikan setiap penambahan atau perubahan diterapkan pada kedua bahasa (`id` dan `en`).
- **Proyek Pilihan**: Tambahkan atau ubah file Markdown di `src/content/projects/id/` dan `src/content/projects/en/`. Maksimal 4 proyek ditampilkan untuk menjaga fokus dan keringkasan halaman.
- **Berkas CV**: Letakkan file PDF terbaru di `public/cv-id.pdf` dan `public/cv-en.pdf`.
- **Tangkapan Layar Proyek**: Simpan di `public/projects/` dengan format WebP rasio 16:9.

---

## Dokumentasi Teknis

### 1. Prinsip Desain & UI

- **Sedikit tapi terbaik**: Desain minimalis tanpa framework UI berat (React/Vue/Svelte), tanpa animasi 3D, atau bar persentase kemampuan.
- **Hierarki Spasi & Grid**: Lebar kontainer maksimum `768px` di tengah. Jarak vertikal antar-bagian konsisten menggunakan kelipatan 4px Tailwind.
- **Tipografi**: Font sans utama menggunakan `Inter` dan monospace menggunakan `JetBrains Mono` untuk label _tech stack_ serta kode.

### 2. Sistem Warna & Dark Mode

Token warna didefinisikan menggunakan CSS variables di `src/styles/global.css`:

- `--bg`: Latar halaman (`#fafaf9` terang / `#0c0c0d` gelap)
- `--surface`: Kartu & wadah (`#ffffff` terang / `#161618` gelap)
- `--border`: Garis pembatas tipis (`#e7e5e4` terang / `#27272a` gelap)
- `--text`: Teks utama (`#1c1917` terang / `#f4f4f5` gelap)
- `--muted`: Teks sekunder (`#57534e` terang / `#a1a1aa` gelap)
- `--accent`: Warna aksen tautan & tombol fokus (`#2563eb` terang / `#60a5fa` gelap)
- `--dot-color`: Titik _dot-grid_ dekoratif di area Hero

Implementasi dark mode menggunakan mekanisme dua lapis:

1. **Lapisan CSS**: `@media (prefers-color-scheme: dark) { html:not(.light):not(.dark) { ... } }` merespons preferensi OS pengguna secara instan sebelum JS dieksekusi.
2. **Lapisan JavaScript**: Inline script pada `<head>` di `BaseLayout.astro` membaca `localStorage` dan menyematkan class `.dark` atau `.light` secara eksplisit pada `<html>`. Tombol pengalih tema mengubah class tersebut tanpa benturan spesifisitas.

### 3. Alur Kerja & Standar Kode

- Sebelum melakukan commit atau _pull request_, jalankan:
  ```bash
  pnpm check && pnpm lint && pnpm build
  ```
- Format pesan commit mengikuti standar **Conventional Commits**:
  - `feat:` untuk fitur baru
  - `fix:` untuk perbaikan bug
  - `docs:` untuk dokumentasi
  - `style:` untuk pemformatan/tampilan tanpa mengubah logika
  - `chore:` untuk pembaruan dependensi/konfigurasi

---

## Deploy

Situs ini berupa berkas statis murni (_Static Site Generation_). Konfigurasi pada platform hosting (Vercel):

- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

---

## Lisensi

Kode sumber dilisensikan di bawah [MIT](./LICENSE). Konten (teks, gambar, dan CV) © Moch. Dicky Ferdyansyah, seluruh hak dilindungi.

## Kontak

[Email](mailto:dickyferdyansyah.dev@gmail.com) · [LinkedIn](https://linkedin.com/in/dickyferdyansyah) · [GitHub](https://github.com/DickyFerdy)
