import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { configDefaults } from 'vitest/config'
import copy from 'rollup-plugin-copy'
import path from 'path'

export default defineConfig({
  base: '',
  cacheDir: path.resolve(__dirname, 'node_modules/.vite'),
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'frontent/src/**/*', dest: 'dist/src' }
      ],
      hook: 'writeBundle'
    })
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replace(/\\/g, '/')

          if (normalizedId.includes('/node_modules/')) {
            if (
              normalizedId.includes('/node_modules/react/') ||
              normalizedId.includes('/node_modules/react-dom/') ||
              normalizedId.includes('/node_modules/scheduler/')
            ) {
              return 'react-vendor'
            }
            if (
              normalizedId.includes('/node_modules/react-router/') ||
              normalizedId.includes('/node_modules/react-router-dom/')
            ) {
              return 'router-vendor'
            }
            if (
              normalizedId.includes('/node_modules/react-markdown/') ||
              normalizedId.includes('/node_modules/remark-gfm/') ||
              normalizedId.includes('/node_modules/unified/') ||
              normalizedId.includes('/node_modules/rehype-') ||
              normalizedId.includes('/node_modules/remark-')
            ) {
              return 'markdown-vendor'
            }
            if (normalizedId.includes('/node_modules/lucide-react/')) {
              return 'ui-vendor'
            }
            if (normalizedId.includes('/node_modules/recharts/')) {
              return 'chart-vendor'
            }
            if (normalizedId.includes('/node_modules/katex/')) {
              return 'katex-vendor'
            }
            if (normalizedId.includes('/node_modules/mathjs/')) {
              return 'mathjs-vendor'
            }
            if (normalizedId.includes('/node_modules/bootstrap/')) {
              return 'bootstrap-vendor'
            }
            if (
              normalizedId.includes('/node_modules/yaml/') ||
              normalizedId.includes('/node_modules/js-yaml/')
            ) {
              return 'yaml-vendor'
            }
            return 'vendor'
          }

          if (normalizedId.includes('src/components/TheoryV2') || normalizedId.includes('src/components/TheoryV2.jsx')) {
            return 'theory-v2'
          }
          if (normalizedId.includes('src/components/CalculadoraCommon') || normalizedId.includes('src/components/CalculadoraCommon.jsx')) {
            return 'calculadora-common'
          }
          if (normalizedId.includes('src/data/mecanica/cinematica')) {
            return 'mecanica-cinematica'
          }
          if (normalizedId.includes('src/data/mecanica/dinamica')) {
            return 'mecanica-dinamica'
          }
          if (normalizedId.includes('src/data/mecanica/estatica')) {
            return 'mecanica-estatica'
          }
          if (normalizedId.includes('src/data/mecanica/ondas_mecanicas')) {
            return 'mecanica-ondas'
          }
          if (normalizedId.includes('src/data/mecanica/mecanica_analitica')) {
            return 'mecanica-analitica'
          }
          if (normalizedId.includes('src/data/termodinamica')) {
            const match = normalizedId.match(/src\/data\/termodinamica\/([^/]+)/)
            if (match && match[1]) {
              const subdir = match[1].replace(/[^a-z0-9_\-]/gi, '')
              return `termo-${subdir}`
            }
            return 'termodinamica'
          }
          if (normalizedId.includes('src/data/topics.generated.js') || normalizedId.includes('topics.generated.js')) {
            return 'topics-data'
          }
          if (normalizedId.includes('src/data/mecanica_de_fluidos')) {
            return 'fluidos'
          }
          if (normalizedId.includes('src/data/optica')) {
            return 'optica'
          }
          if (normalizedId.includes('src/data/electromagnetismo')) {
            return 'electromagnetismo'
          }
          if (normalizedId.includes('src/data/acustica')) {
            return 'acustica'
          }
          if (normalizedId.includes('src/data/teoria_campos_clasicos')) {
            return 'teoria-campos'
          }
          if (normalizedId.includes('src/data/fisica_plasmas')) {
            return 'fisica-plasmas'
          }
        }
      }
    }
  },
  assetsInclude: ['**/*.md'],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      katex: fileURLToPath(new URL('./node_modules/katex', import.meta.url))
    }
  },
  server: {
    fs: {
      strict: false
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
    globals: true,
    exclude: [...configDefaults.exclude, '**/tests-examples/**', 'dist/**']
  }
})
