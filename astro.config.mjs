import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import bookshop from "@bookshop/astro-bookshop";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import alpine from "@astrojs/alpinejs";
import awsAmplify from "astro-aws-amplify";

// https://astro.build/config
export default defineConfig({
  site: "main.d1wskm2jzur1zr.amplifyapp.com/",
  integrations: [react(), tailwind(), bookshop(), alpine(), mdx()],
  adapter: awsAmplify(),
  output: "server",
});
