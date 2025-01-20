import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      'msw/node': 'msw/lib/esm/node/index.js', // Adjust the path based on the actual structure
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
})