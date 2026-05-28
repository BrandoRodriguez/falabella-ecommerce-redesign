// @ts-check
import { defineConfig } from 'astro/config';
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.brandorodriguez.com',
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src")
      },
    },
  },
  devToolbar: {
    enabled: false
  }
});
