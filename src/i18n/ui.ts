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
    'about.title': 'Tentang Saya',
    'about.p1':
      'Saya seorang Fullstack Developer dan AI Engineer dengan fokus pada keandalan arsitektur perangkat lunak, integrasi model AI yang efisien, dan pengalaman pengguna yang cepat.',
    'about.p2':
      'Berpengalaman membangun aplikasi end-to-end: mulai dari pemodelan basis data, API backend yang tangguh, hingga antarmuka web modern yang aksesibel dan ringan.',
    'about.tech_title': 'Teknologi & Alat',
    'contact.title': 'Hubungi Saya',
    'contact.desc':
      'Tertarik berdiskusi seputar peluang kerja, proyek kolaborasi, atau rekayasa AI? Silakan hubungi saya melalui kanal di bawah ini.',
    'contact.email_btn': 'Kirim Email',
    'contact.github_btn': 'Profil GitHub',
    'contact.linkedin_btn': 'Profil LinkedIn',
    'footer.copyright':
      '© 2026 Moch. Dicky Ferdyansyah. Dibuat statis dengan Astro & Tailwind CSS.',
  },
  en: {
    'accessibility.skip_to_content': 'Skip to main content',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.theme_toggle': 'Toggle theme (light/dark)',
    'nav.lang_toggle': 'Beralih ke Bahasa Indonesia',
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
    'about.title': 'About Me',
    'about.p1':
      'I am a Fullstack Developer and AI Engineer specializing in resilient software architecture, efficient AI model integration, and fast, accessible user experiences.',
    'about.p2':
      'Experienced in building end-to-end applications: from database modeling and robust backend APIs to modern web frontends that are lightweight and accessible.',
    'about.tech_title': 'Technologies & Tools',
    'contact.title': 'Get In Touch',
    'contact.desc':
      'Interested in collaboration opportunities, full-time roles, or discussing AI engineering? Feel free to reach out through any channel below.',
    'contact.email_btn': 'Send Email',
    'contact.github_btn': 'GitHub Profile',
    'contact.linkedin_btn': 'LinkedIn Profile',
    'footer.copyright':
      '© 2026 Moch. Dicky Ferdyansyah. Statically built with Astro & Tailwind CSS.',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
