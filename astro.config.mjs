import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://wglewis0721.github.io',
  base: '/voting-al-website/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
