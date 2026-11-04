import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://dickyferdyansyah.vercel.app',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
