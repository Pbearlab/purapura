import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `ssgOptions` is read by vite-react-ssg, which pre-renders every page to plain HTML at build time.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  ssgOptions: {
    dirStyle: 'nested', // /videos/index.html, so nginx can serve clean URLs
  },
})
