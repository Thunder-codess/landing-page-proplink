import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const previewPath = resolve(process.cwd(), 'src/preview.webp')

function previewAsset() {
  return {
    name: 'preview-asset',
    configureServer(server) {
      server.middlewares.use('/preview.webp', (_req, res) => {
        res.setHeader('Content-Type', 'image/webp')
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
        res.end(readFileSync(previewPath))
      })
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'preview.webp',
        source: readFileSync(previewPath),
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), previewAsset()],
})
