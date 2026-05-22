import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');

const prerenderedRoutePreviewPlugin = () => ({
  name: 'prerendered-route-preview',
  configurePreviewServer(server: any) {
    server.middlewares.use((req: any, _res: any, next: () => void) => {
      const requestUrl = req.url;

      if (!requestUrl) {
        next();
        return;
      }

      const [pathname] = requestUrl.split('?');
      if (pathname === '/styles/kids' || pathname === '/styles/kids/') {
        _res.statusCode = 301;
        _res.setHeader('Location', '/styles/family');
        _res.end();
        return;
      }
      if (!pathname || pathname === '/' || pathname.includes('.')) {
        next();
        return;
      }

      const normalizedPath = pathname.replace(/^\/+/, '');
      const prerenderedIndex = path.join(distDir, normalizedPath, 'index.html');

      if (fs.existsSync(prerenderedIndex)) {
        req.url = `${pathname.endsWith('/') ? pathname : `${pathname}/`}index.html`;
      }

      next();
    });
  },
});

export default defineConfig({
  plugins: [react(), prerenderedRoutePreviewPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
    'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || '')
  },
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
});
