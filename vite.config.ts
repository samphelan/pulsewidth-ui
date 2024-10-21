import { defineConfig } from 'vitest/config'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ rollupTypes: true, tsconfigPath: './tsconfig.app.json' })],
  test: {
    //globals: true,
    environment: "jsdom",
    // ...
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'pulsewidth-ui',
      fileName: 'pulsewidth-ui'
    },
    rollupOptions: {
      external: ['react', 'react-dom','react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    }
  }
})
