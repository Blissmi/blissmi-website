import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import path from 'path'

export default defineConfig({
  plugins: [react()],
=======
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
>>>>>>> feature/components-refactor
  resolve: {
    alias: [
      { find: 'figma:asset', replacement: path.resolve(__dirname, 'src/figma/assets') }
    ]
<<<<<<< HEAD
  },
  server: {
    host: '0.0.0.0',
    port: 5173
=======
>>>>>>> feature/components-refactor
  }
})
