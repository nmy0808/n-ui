module.exports = {
  // dest: '/n-ui/',
  title: 'n-ui',
  description: '一套小巧的 Vue 组件',
  // -- 注释下面两项
  // base: 'nmy-ui',
  // configureWebpack: {
  //   output: {
  //     publicPath: 'https://nmy0808.github.io/nmy-ui/',
  //   }
  // },
  // --
  themeConfig: {
    nav: [
      { text: 'github', link: 'https://www.baidu.com' },
      { text: 'vue3.0版本', link: 'https://www.taobao.com.com' }
    ],
    sidebar: [
      '/',
      '/install/',
      {
        title: '组件',
        children: [
          '/components/layout/',
          '/components/basic/',
          '/components/form/',
          '/components/navigation/',
          '/components/viewport/',
          '/components/feedback/',
          '/components/other/',
          '/components/directives/',
        ],
        collapsable: true, // 可选的, 默认值是 true,
      }
    ]
  },
}
