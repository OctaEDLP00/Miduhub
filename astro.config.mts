import { defineConfig } from 'astro/config'

// import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  devToolbar: { enabled: false },
  integrations: [tailwind()],
  markdown: {
    gfm: true,
    shikiConfig: {
      theme: 'one-dark-pro',
    },
    syntaxHighlight: 'prism',
  },
  image: { service: { entrypoint: 'astro/assets/services/squoosh' } },
})
