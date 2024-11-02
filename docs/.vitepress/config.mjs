import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenGL Tutorial - An Introduction on OpenGL with 2D Graphics",
  description: "OpenGL Tutorial - An Introduction on OpenGL with 2D Graphics article",
  base: "/opengl_tutorial_an_introduction_on_opengl_with_2D_graphics/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/opengl_tutorial_an_introduction_on_opengl_with_2D_graphics' }
    ]
  }
})
