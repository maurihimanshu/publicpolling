import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
    plugins: [react()],
    base: mode === 'production' ? '/publicpolling/content-manager/' : '/',
    server: {
        port: 3002,
        cors: true
    },
    build: {
        outDir: 'dist'
    }
}))
