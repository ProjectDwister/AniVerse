import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'the-margin' below with your exact GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/AniVerse/',
})
