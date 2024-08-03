import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/said-cli/',
  title: 'Said Cli',
  description: 'A VitePress Site',
  head: [['link', { rel: 'icon', href: '/said-cli/said.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '导航', link: '/' },
      { text: '模版', link: '/template/index' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/markdown-examples' },
          { text: '快速上手', link: '/api-examples' }
        ]
      },
      {
        text: '模板',
        items: [{ text: 'Vue 3', link: '/template/vue3' }]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/guizimo/said-cli' }]
  }
});
