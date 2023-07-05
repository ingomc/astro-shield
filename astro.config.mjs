import { defineConfig } from 'astro/config';
import proxyMiddleware from './plugins/proxy-middleware.mjs';

// https://astro.build/config
export default /** @type {import('astro').AstroUserConfig} */ defineConfig({
  integrations: [
    proxyMiddleware("/shield", {
      target: "https://hukde-de.web.dmz.tuhuk.de",
      changeOrigin: true,
    }),
  ],
});