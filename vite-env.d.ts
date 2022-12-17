import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import svgLoader from 'vite-svg-loader';
import tsconfigPaths from 'vite-tsconfig-paths';

// import dts from 'vite-plugin-dts';

// import reactRefresh from '@vitejs/plugin-react-refresh';
// import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgLoader(), svgr()],
  server: {
    hmr: { overlay: false }
  }
});
