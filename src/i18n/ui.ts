export const languages = {
  id: 'Bahasa Indonesia',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'id';

export const ui = {
  id: {
    'accessibility.skip_to_content': 'Lewati ke konten utama',
    'nav.projects': 'Proyek',
    'nav.about': 'Tentang',
    'nav.contact': 'Kontak',
    'nav.theme_toggle': 'Ganti tema (terang/gelap)',
    'nav.lang_toggle': 'Switch to English',
    'nav.menu_open': 'Buka menu navigasi',
    'nav.menu_close': 'Tutup menu navigasi',
    'meta.title': 'Moch. Dicky Ferdyansyah — Fullstack Developer & AI Engineer',
    'meta.description':
      'Portofolio Moch. Dicky Ferdyansyah: Fullstack Developer dan AI Engineer. Menampilkan karya terbaik, kedalaman teknis, dan kontak.',
    'hero.role': 'Fullstack Developer · AI Engineer',
    'hero.tagline':
      'Membangun sistem web berkinerja tinggi dan solusi AI terukur yang menyelesaikan masalah nyata dengan efisien.',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'hero.cv': 'Unduh CV',
    'hero.cv_file': '/cv-id.pdf',
    'projects.title': 'Proyek Pilihan',
    'projects.subtitle':
      'Maksimal 4 proyek terbaik yang berfokus pada arsitektur bersih dan dampak terukur.',
    'projects.demo': 'Demo',
    'projects.repo': 'Repositori',
    'projects.impact_label': 'Dampak',
    'projects.image_placeholder': 'Tangkapan layar proyek belum tersedia',
    'about.title': 'Tentang Saya',
    'about.p1':
      'Saya adalah mahasiswa Teknik Informatika di UPN "Veteran" Jawa Timur dengan fokus utama pada Full-Stack Development dan Artificial Intelligence. Berbekal ketertarikan mendalam di bidang teknologi, saya aktif mengeksplorasi bagaimana integrasi algoritma cerdas dan rekayasa perangkat lunak modern dapat menyelesaikan berbagai masalah kompleks.',
    'about.p2':
      'Saya berfokus pada pengembangan aplikasi secara end-to-end—mulai dari perancangan basis data yang tangguh, pemrosesan backend API, hingga antarmuka frontend yang cepat dan intuitif. Tujuan saya adalah mengintegrasikan model AI secara efisien ke dalam aplikasi web berkinerja tinggi yang memberikan pengalaman pengguna terbaik.',
    'about.tech_title': 'Teknologi & Alat',
    'contact.title': 'Hubungi Saya',
    'contact.desc':
      'Tertarik berdiskusi seputar peluang kerja, proyek kolaborasi, atau rekayasa AI? Silakan hubungi saya melalui kanal di bawah ini.',
    'contact.email_btn': 'Kirim Email',
    'contact.email_via': 'atau langsung via',
    'contact.github_btn': 'GitHub',
    'contact.linkedin_btn': 'LinkedIn',
    'footer.copyright': '© 2026 Moch. Dicky Ferdyansyah.',
    'footer.built_with': 'Dibangun dengan Astro & Tailwind CSS.',
    'footer.back_top': 'Kembali ke atas',
  },
  en: {
    'accessibility.skip_to_content': 'Skip to main content',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.theme_toggle': 'Toggle theme (light/dark)',
    'nav.lang_toggle': 'Beralih ke Bahasa Indonesia',
    'nav.menu_open': 'Open navigation menu',
    'nav.menu_close': 'Close navigation menu',
    'meta.title': 'Moch. Dicky Ferdyansyah — Fullstack Developer & AI Engineer',
    'meta.description':
      'Portfolio of Moch. Dicky Ferdyansyah: Fullstack Developer and AI Engineer. Highlighting selected projects, technical depth, and contact.',
    'hero.role': 'Fullstack Developer · AI Engineer',
    'hero.tagline':
      'Building high-performance web systems and scalable AI solutions that solve real-world problems efficiently.',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'hero.cv': 'Download CV',
    'hero.cv_file': '/cv-en.pdf',
    'projects.title': 'Featured Projects',
    'projects.subtitle':
      'Curated selection of top projects focused on clean architecture and measurable impact.',
    'projects.demo': 'Demo',
    'projects.repo': 'Repository',
    'projects.impact_label': 'Impact',
    'projects.image_placeholder': 'Project screenshot not yet available',
    'about.title': 'About Me',
    'about.p1':
      'I am an Informatics student at UPN "Veteran" Jawa Timur with a strong focus on Full-Stack Development and Artificial Intelligence. Driven by a passion for technology, I continuously explore how smart algorithms and modern software engineering can work together to solve complex problems.',
    'about.p2':
      'I specialize in building end-to-end applications—from robust database modeling and scalable backend APIs to lightweight, accessible frontends. My goal is to seamlessly integrate efficient AI models into high-performance web applications that deliver exceptional user experiences.',
    'about.tech_title': 'Technologies & Tools',
    'contact.title': 'Get In Touch',
    'contact.desc':
      'Interested in collaboration opportunities, full-time roles, or discussing AI engineering? Feel free to reach out through any channel below.',
    'contact.email_btn': 'Send Email',
    'contact.email_via': 'or directly via',
    'contact.github_btn': 'GitHub',
    'contact.linkedin_btn': 'LinkedIn',
    'footer.copyright': '© 2026 Moch. Dicky Ferdyansyah.',
    'footer.built_with': 'Built with Astro & Tailwind CSS.',
    'footer.back_top': 'Back to top',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
