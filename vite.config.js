import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/lista-de-produtos-com-carrinho/',
  plugins: [react()],
})
