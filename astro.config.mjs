// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Agregar la URL base para tu sitio
  site: 'http://localhost:4321', // Para desarrollo
  // site: 'https://tu-dominio.com', // Para producción
  
  vite: {
    ssr: {
      noExternal: ['@fontsource-variable/onest'], // Añadir la fuente aquí
    },
    optimizeDeps: {
      include: ['@fontsource-variable/onest']
    }
  },
});