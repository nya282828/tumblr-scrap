import { defineConfig } from 'vite';
import {ViteEjsPlugin} from "vite-plugin-ejs";
import browserslist from 'browserslist';
import {browserslistToTargets} from 'lightningcss';

export default defineConfig({
  root: './src',
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    }
  },
  build: {
    outDir: '../dist',
    cssMinify: 'lightningcss',
    rollupOptions: {
      input: './src/index.html', 
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
   },
  },
  plugins: [
    ViteEjsPlugin(),
  ],
});