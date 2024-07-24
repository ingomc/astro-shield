import { defineConfig } from 'astro/config';
import proxyMiddleware from './plugins/proxy-middleware.mjs';
import icon from "astro-icon";

export default /** @type {import('astro').AstroUserConfig} */defineConfig({
  integrations: [proxyMiddleware("/shield-develop", {
    target: "https://hukde-de.web.dmz.tuhuk.de",
    changeOrigin: true
  }), icon()]
});