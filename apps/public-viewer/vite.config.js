import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
    plugins: [react()],
    base: mode === 'production' ? '/publicpolling/public-viewer/' : '/',
    server: {
        port: 3001,
        cors: true
    },
    build: {
        outDir: 'dist'
    }
}))
