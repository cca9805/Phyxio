import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { configDefaults } from 'vitest/config'
import copy from 'rollup-plugin-copy'
import path from "path"


export default defineConfig({
  base: '',
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
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
      manualChunks(id) {
          // Vendor chunks - librerías grandes
          if (id.includes('node_modules')) {
            // Mantener React y todas sus dependencias juntas (incluyendo scheduler)
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router') || id.includes('scheduler')) {
              return 'react-vendor';
            }
            if (id.includes('katex') || id.includes('react-latex')) {
              return 'latex-vendor';
            }
            // Otras dependencias de node_modules
            return 'vendor';
          }
          
          // UI components used across many topics — isolate them so they don't end up in a large termodinámica chunk
          if (id.includes('src/components/TheoryV2') || id.includes('src/components/TheoryV2.jsx')) {
            return 'theory-v2';
          }
          if (id.includes('src/components/CalculadoraCommon') || id.includes('src/components/CalculadoraCommon.jsx')) {
            return 'calculadora-common';
          }
          // Chunks por categoría de física
          if (id.includes('src/data/mecanica/cinematica')) {
            return 'mecanica-cinematica';
          }
          if (id.includes('src/data/mecanica/dinamica')) {
            return 'mecanica-dinamica';
          }
          if (id.includes('src/data/mecanica/estatica')) {
            return 'mecanica-estatica';
          }
          if (id.includes('src/data/mecanica/ondas_mecanicas')) {
            return 'mecanica-ondas';
          }
          if (id.includes('src/data/mecanica/mecanica_analitica')) {
            return 'mecanica-analitica';
          }
          if (id.includes('src/data/termodinamica')) {
            // Split termodinámica into per-subdirectory chunks (e.g. 01_conceptos_fundamentales -> termo-01_conceptos_fundamentales)
              const match = id.match(/src[\\\/]data[\\\/]termodinamica[\\\/]([^\\\/]+)/);
            if (match && match[1]) {
              // sanitize chunk name
              const subdir = match[1].replace(/[^a-z0-9_\\-]/gi, '');
              return `termo-${subdir}`;
            }
            return 'termodinamica';
          }
          // Put the huge generated topics file into its own chunk so it doesn't inflate termodinámica chunks
          if (id.includes('src/data/topics.generated.js') || id.includes('topics.generated.js')) {
            return 'topics-data';
          }
          if (id.includes('src/data/mecanica_de_fluidos')) {
            return 'fluidos';
          }
          if (id.includes('src/data/optica')) {
            return 'optica';
          }
          if (id.includes('src/data/electromagnetismo')) {
            return 'electromagnetismo';
          }
          if (id.includes('src/data/acustica')) {
            return 'acustica';
          }
          if (id.includes('src/data/teoria_campos_clasicos')) {
            return 'teoria-campos';
          }
          if (id.includes('src/data/fisica_plasmas')) {
            return 'fisica-plasmas';
          }
        }
      }
    }
  },
  assetsInclude: ['**/*.md'],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      'katex': fileURLToPath(new URL('./node_modules/katex', import.meta.url))
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
    exclude: [...configDefaults.exclude, '**/tests-examples/**'],
  },
})
