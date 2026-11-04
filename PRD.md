# PRD — Personal Portfolio Website

> Status: Draft v1 · Pemilik: Moch. Dicky Ferdyansyah · Terakhir diperbarui: 2026-11-04

## 1. Ringkasan

Website portofolio satu halaman untuk seorang **Fullstack Developer dan AI Engineer**. Tujuannya membuat recruiter dan hiring manager paham dalam 30-60 detik: siapa saya, saya bekerja di bidang apa, dan apa karya terbaik saya.

## 2. Tujuan dan Non-Tujuan

### Tujuan

- Menjadi "etalase" yang rapi, cepat, dan mudah dipindai.
- Menampilkan 3-4 proyek terbaik beserta dampaknya.
- Mengarahkan pengunjung ke kontak, GitHub, LinkedIn, dan CV.
- Mendukung dua bahasa (Indonesia dan Inggris).

### Non-Tujuan

- Bukan blog (tidak ada fitur tulisan di versi 1).
- Tidak ada demo AI interaktif di dalam situs.
- Tidak ada animasi berat, efek 3D, loading screen, atau musik.
- Tidak ada backend/database; situs sepenuhnya statis.

## 3. Target Pengguna

| Persona                   | Kebutuhan                                     | Waktu yang dimiliki |
| ------------------------- | --------------------------------------------- | ------------------- |
| Recruiter                 | Tahu peran, stack, dan kontak dengan cepat    | 30-60 detik         |
| Hiring manager / engineer | Menilai kualitas proyek dan kedalaman teknis  | 2-5 menit           |
| Kolega / klien potensial  | Melihat bukti pengalaman dan cara menghubungi | 1-2 menit           |

Banyak pengunjung membuka dari **ponsel**, jadi mobile-first.

## 4. Kebutuhan Fungsional

| ID  | Kebutuhan                                                           | Prioritas |
| --- | ------------------------------------------------------------------- | --------- |
| F1  | Hero: nama, peran, satu kalimat nilai, tombol GitHub/LinkedIn/CV    | Must      |
| F2  | Bagian Proyek: 3-4 kartu proyek                                     | Must      |
| F3  | Bagian Tentang: 2-3 kalimat plus daftar tech stack                  | Must      |
| F4  | Bagian Kontak: email dan tautan profil                              | Must      |
| F5  | Pergantian bahasa ID/EN (URL `/id` dan `/en`)                       | Must      |
| F6  | Mode terang/gelap, mengikuti preferensi sistem, bisa diganti manual | Should    |
| F7  | Tombol unduh CV (PDF)                                               | Should    |
| F8  | Metadata SEO dan Open Graph image                                   | Should    |
| F9  | Analitik ringan yang menjaga privasi (opsional)                     | Could     |

### Isi setiap kartu proyek

- Judul dan satu kalimat masalah yang diselesaikan
- Peran dan tech stack
- Hasil/dampak (gunakan angka bila ada)
- Tautan demo dan repo
- Satu screenshot

## 5. Kebutuhan Non-Fungsional

- **Performa**: skor Lighthouse ≥ 95 untuk Performance, Accessibility, Best Practices, SEO.
- **Ukuran**: JavaScript klien seminimal mungkin (target < 30 KB gzip).
- **Responsif**: nyaman dari lebar 320 px hingga desktop.
- **Aksesibilitas**: kontras WCAG AA, navigasi keyboard, teks alternatif gambar, `prefers-reduced-motion` dihormati.
- **Keamanan**: tanpa secret di repo; tautan eksternal memakai `rel="noopener noreferrer"`.

## 6. Informasi Arsitektur

Satu halaman dengan urutan: **Hero → Proyek → Tentang → Kontak**. Navigasi berupa anchor di header sederhana, ditambah pengalih bahasa dan tema.

## 7. Metrik Keberhasilan

- Teman non-teknis dapat menjawab "orang ini kerja di bidang apa dan apa karya terbaiknya?" setelah 30 detik.
- Semua tautan berfungsi (diperiksa otomatis di CI).
- Skor Lighthouse memenuhi target di mobile.
- Waktu muat penuh < 1 detik pada koneksi 4G.

## 8. Milestone

1. **M1 — Fondasi**: setup Astro, Tailwind, i18n, tema, layout.
2. **M2 — Konten**: tulis teks ID/EN, pilih proyek, siapkan screenshot dan CV.
3. **M3 — Polish**: aksesibilitas, SEO, OG image, uji Lighthouse.
4. **M4 — Rilis**: domain sendiri, deploy, cek semua tautan.

## 9. Risiko

| Risiko                                            | Mitigasi                           |
| ------------------------------------------------- | ---------------------------------- |
| Terlalu banyak proyek sehingga situs terasa penuh | Batasi 3-4 proyek                  |
| Terjemahan tidak konsisten                        | Semua teks di satu file per bahasa |
| Konten usang                                      | Tinjau tiap 3-6 bulan              |

## 10. Pertanyaan Terbuka

- Proyek mana yang akan ditampilkan?
