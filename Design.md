# Design.md — Panduan Desain

Gaya: **minimalis, terang/gelap, banyak ruang kosong.** Tujuannya agar pengunjung fokus pada karya, bukan dekorasi.

## 1. Prinsip

1. **Konten dulu.** Setiap elemen harus membantu orang memahami siapa saya dan apa karya saya.
2. **Sedikit tapi terbaik.** Satu halaman, 3-4 proyek, satu warna aksen.
3. **Tenang.** Tanpa animasi mencolok, efek 3D, atau elemen yang berebut perhatian.
4. **Cepat dan terbaca.** Mobile-first, kontras jelas, hierarki tegas.

## 2. Warna

Satu warna aksen, sisanya netral. Semua didefinisikan sebagai token CSS.

| Token         | Terang    | Gelap     | Pemakaian                        |
| ------------- | --------- | --------- | -------------------------------- |
| `--bg`        | `#FAFAF9` | `#0C0C0D` | Latar halaman                    |
| `--surface`   | `#FFFFFF` | `#161618` | Kartu                            |
| `--border`    | `#E7E5E4` | `#27272A` | Garis tipis                      |
| `--text`      | `#1C1917` | `#F4F4F5` | Teks utama                       |
| `--muted`     | `#57534E` | `#A1A1AA` | Teks sekunder                    |
| `--accent`    | `#2563EB` | `#60A5FA` | Tautan, tombol utama, fokus      |
| `--dot-color` | `#D6D3D1` | `#27272A` | Titik dot-grid dekoratif di Hero |

Aturan:

- Kontras teks minimal WCAG AA (4.5:1 untuk teks biasa).
- Aksen dipakai hemat: tombol utama, tautan, dan indikator fokus.
- Mode gelap mengikuti `prefers-color-scheme`, bisa diganti manual dan disimpan di `localStorage`.
- Token `--dot-color` hanya dipakai untuk dot-grid di section Hero.

## 3. Tipografi

- **Font utama**: Inter (variable), fallback `system-ui, sans-serif`.
- **Font monospace** (untuk label tech stack/kode): JetBrains Mono, fallback `ui-monospace, monospace`.
- Maksimal 2 keluarga font. Gunakan self-host dan `font-display: swap`.

| Peran             | Ukuran (mobile → desktop) | Berat | Line-height |
| ----------------- | ------------------------- | ----- | ----------- |
| H1 (nama)         | 36px → 56px               | 700   | 1.1         |
| H2 (judul bagian) | 24px → 32px               | 600   | 1.2         |
| H3 (judul proyek) | 18px → 20px               | 600   | 1.3         |
| Body              | 16px → 17px               | 400   | 1.6         |
| Label/kecil       | 13px → 14px               | 500   | 1.4         |

Lebar baris teks maksimal ±65 karakter (`max-w-prose`).

## 4. Spasi dan Layout

- Skala spasi kelipatan 4px (Tailwind default).
- Lebar konten maksimal **720-960px**, di tengah.
- Gutter samping: 16px (mobile), 24px (tablet), otomatis (desktop).
- Jarak antarbagian: 96px (desktop), 64px (mobile).
- Satu kolom di mobile; kartu proyek maksimal 2 kolom di desktop.
- Radius sudut: 12px untuk kartu, 8px untuk tombol.
- Bayangan: hindari; gunakan garis tipis (`--border`).

## 5. Struktur Halaman

```
┌──────────────────────────────┐
│ Header: nama · Proyek · Tentang · Kontak · [ID/EN] [tema] │
├──────────────────────────────┤
│ HERO (dot-grid bg, py-20/32) │
│ Role badge (monospace)        │
│ Nama (H1, line-break alami)  │
│ Tagline                       │
│ [GitHub] [LinkedIn] [CV]     │
├──────────────────────────────┤
│ PROYEK (3-4 kartu)           │
├──────────────────────────────┤
│ TENTANG (2-3 kalimat + stack)│
├──────────────────────────────┤
│ KONTAK (email + tautan)      │
└──────────────────────────────┘
│ FOOTER (copyright + sosial + back to top) │
```

## 6. Komponen

**Tombol**

- Utama: latar `--accent`, teks putih, tinggi 44px. Ikon sosial (GitHub, LinkedIn) menggunakan SVG branded bukan ikon generik.
- Sekunder: garis `--border`, teks `--text`.
- Fokus: ring 2px `--accent` dengan offset 2px.

**Kartu proyek**

- Latar `--surface`, garis `--border`, radius 12px, padding 20-24px.
- Isi (berurutan): screenshot tunggal (atau placeholder SVG jika belum ada), judul, satu kalimat masalah, hasil/dampak (via i18n), label stack, tautan Demo dan Repo.
- Hover: garis berubah ke `--accent`; tanpa lompatan atau zoom.
- **Placeholder gambar**: bila screenshot belum tersedia, tampilkan SVG ikon gambar dengan teks deskriptif (dari `i18n/ui.ts`, key `projects.image_placeholder`). Jangan tampilkan gambar rusak.

**Label stack**

- Teks monospace kecil, latar `--border` transparan, radius penuh. Tanpa ikon logo berwarna-warni.

**Header**

- Tinggi 56-64px, lengket di atas, latar `--bg` dengan garis bawah tipis.
- Desktop: nav link + pengalih bahasa + pengalih tema.
- Mobile (< 640px): nama + tombol bahasa + tombol tema + tombol hamburger. Menu dropdown muncul di bawah header, tanpa animasi selain show/hide.

**Footer**

- Dua kolom (mobile: satu kolom tengah): kiri = copyright + "built with", kanan = ikon GitHub + ikon LinkedIn + separator + "back to top".
- Ikon sosial di footer: ukuran 16px, warna `--muted`, hover ke `--text`.

**Kontak**

- Tombol utama: "Kirim Email" / "Send Email" tanpa alamat email di dalam teks tombol.
- Alamat email ditampilkan terpisah sebagai teks/tautan di bawah baris tombol.

## 7. Gerak (Motion)

- Hanya transisi halus 150-200ms untuk warna, garis, dan opasitas.
- Tidak ada animasi saat scroll, parallax, atau loading screen.
- Dot-grid di Hero: statis, CSS-only, tanpa animasi.
- Hormati `prefers-reduced-motion`: matikan semua transisi.

## 8. Gambar

- Satu screenshot per proyek, rasio 16:9, format WebP/AVIF.
- Wajib punya `alt`, `width`, `height`, dan `loading="lazy"`.
- Jika screenshot belum ada, gunakan placeholder SVG (lihat aturan Kartu Proyek).
- OG image 1200×630px: nama, peran, latar polos.

## 9. Aksesibilitas

- Struktur heading berurutan (satu H1).
- Semua elemen interaktif bisa diakses keyboard dengan indikator fokus jelas.
- Target sentuh minimal 44×44px.
- Tautan "Lewati ke konten" di awal halaman.
- Atribut `lang` sesuai bahasa halaman (`id` / `en`).
- Hamburger button mobile: `aria-expanded`, `aria-controls`, `aria-label` wajib ada.

## 10. Yang Dihindari

- Bar persentase skill
- Animasi berat, efek 3D, kursor kustom, musik
- Galeri screenshot besar
- Lebih dari satu warna aksen
- Teks di atas gambar yang mengurangi keterbacaan
- Alamat email di dalam teks tombol

## 11. Daftar Periksa Sebelum Rilis

- [ ] Teman non-teknis paham peran dan karya terbaik dalam 30 detik
- [ ] Lighthouse ≥ 95 (mobile)
- [ ] Kontras AA di mode terang dan gelap
- [ ] Semua tautan berfungsi
- [ ] Teks ID dan EN konsisten
- [ ] OG image dan favicon terpasang
- [ ] Screenshot proyek nyata sudah menggantikan placeholder
- [ ] CV PDF sudah diisi dan diperbarui
- [ ] Mobile nav berfungsi di semua breakpoint
- [ ] Dark mode otomatis dari preferensi sistem berjalan (tanpa JS pun CSS sudah merespons)
