// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Section to configure .js files as JSX
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Specify conditions to create a manual chunk here
          if (id.includes('my-large-library')) {
            return 'my-large-library';
          }
        },
      },
    },
    chunkSizeWarningLimit: 10000, // Adjust the limit to your desired value (e.g., 1000 kBs)
  },
});
