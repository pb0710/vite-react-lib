import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import typescript from '@rollup/plugin-typescript'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'ViteReactLib'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React'
        },
        sourcemap: true
      }
    },
  },
  plugins: [reactRefresh(), typescript()]
})
