import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite's source entry lives in src/ so the repo root can hold the built
// site — GitHub Pages serves this repo's main branch root directly.
export default defineConfig({
  plugins: [react()],
  base: '/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
