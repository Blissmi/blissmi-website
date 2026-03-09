import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'figma:asset', replacement: path.resolve(__dirname, 'src/figma/assets') }
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
