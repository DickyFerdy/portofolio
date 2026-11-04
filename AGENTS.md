# AGENTS.md

Panduan untuk AI coding agent (Claude Code, Cursor, Copilot, dll.) yang bekerja di repo ini. Baca seluruhnya sebelum mengubah apa pun.

## Proyek

Website portofolio satu halaman untuk Fullstack Developer dan AI Engineer. Statis, cepat, dua bahasa (ID/EN), mode terang/gelap. Detail kebutuhan ada di `PRD.md`, detail visual di `Design.md`.

**Prinsip utama: sedikit tapi terbaik.** Jangan menambah fitur, animasi, atau dependensi yang tidak diminta.

## Tech Stack

- **Framework**: Astro (output statis)
- **Styling**: Tailwind CSS
- **Bahasa**: TypeScript (strict)
- **Package manager**: pnpm
- **Hosting**: Vercel

## Perintah

```bash
pnpm install        # pasang dependensi
pnpm dev            # dev server di localhost:4321
pnpm build          # build produksi ke ./dist
pnpm preview        # pratinjau hasil build
pnpm check          # astro check (tipe)
pnpm lint           # ESLint
pnpm format         # Prettier
```

Jalankan `pnpm check && pnpm lint && pnpm build` sebelum menyatakan tugas selesai.

## Struktur Direktori

```
src/
├── components/     # Komponen Astro (Hero, ProjectCard, Footer, ...)
├── content/        # Data proyek (frontmatter + markdown)
├── i18n/           # ui.ts (string UI) dan utils.ts per bahasa
├── layouts/        # Layout dasar
├── pages/
│   ├── id/index.astro
│   └── en/index.astro
└── styles/         # global.css, token tema
public/             # favicon, og-image, cv-id.pdf, cv-en.pdf
```

## Aturan Kode

- Gunakan komponen `.astro` untuk semua yang statis. Pakai JavaScript klien **hanya** untuk pengalih tema dan bahasa.
- Jangan menambahkan framework UI (React, Vue, dll.) tanpa persetujuan eksplisit.
- Warna, spasi, dan font diambil dari token di `Design.md`; jangan hardcode nilai acak.
- Gunakan kelas utilitas Tailwind; hindari CSS kustom kecuali untuk token dan kasus yang tidak bisa dengan utilitas.
- Semua teks yang tampil ke pengguna harus lewat `src/i18n/ui.ts` atau content collection. Jangan menulis teks langsung di komponen.
- Setiap `<img>` wajib punya `alt`, `width`, `height`, dan `loading="lazy"` (kecuali di atas fold).
- Tautan eksternal: `target="_blank" rel="noopener noreferrer"`.
- Hormati `prefers-reduced-motion` dan `prefers-color-scheme`.

## Konten dan Bahasa

- Dua bahasa: `/id` dan `/en`. Setiap perubahan teks harus diterapkan di **kedua** bahasa.
- Nada: ringkas, konkret, tanpa jargon berlebihan. Hasil dengan angka lebih baik dari klaim kabur.
- Maksimal 4 proyek. Jika diminta menambah, tanyakan proyek mana yang diganti.
- Jangan menulis klaim, angka, atau pengalaman yang tidak diberikan pemilik. Gunakan placeholder `[ISI: ...]` bila data belum ada.

## Target Kualitas

- Lighthouse ≥ 95 di semua kategori (mobile).
- JS klien < 30 KB gzip.
- Kontras WCAG AA, bisa dinavigasi keyboard.
- Tidak ada tautan rusak.

## Yang Tidak Boleh Dilakukan

- Menambahkan bar persentase skill, loading screen, musik, efek 3D, atau animasi berat.
- Menambahkan backend, database, atau layanan pihak ketiga tanpa persetujuan.
- Meng-commit secret, file `.env`, atau data pribadi selain yang memang ditampilkan di situs.
- Mengubah struktur halaman (Hero → Proyek → Tentang → Kontak) tanpa persetujuan.
- Menambah dependensi besar untuk masalah kecil.

## Alur Kerja

1. Baca `PRD.md` dan `Design.md` untuk konteks.
2. Buat perubahan sekecil mungkin yang menyelesaikan tugas.
3. Jalankan pengecekan (`check`, `lint`, `build`).
4. Jelaskan perubahan dalam 1-3 kalimat; sebutkan bila ada yang belum bisa diverifikasi.

Commit memakai format Conventional Commits (`feat:`, `fix:`, `docs:`, `style:`, `chore:`).

## Bila Ragu

Tanyakan dulu daripada menebak, terutama untuk konten pribadi, pilihan desain besar, atau penambahan dependensi.
