import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/publicpolling/content-manager/',
    server: {
        port: 3002,
        cors: true
    },
    build: {
        outDir: 'dist'
    }
})
