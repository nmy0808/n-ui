module.exports = {
  // base: 'n-ui',
  // dest: '/n-ui/',
  title: 'n-ui',
  description: '一套小巧的 Vue 组件',
  // configureWebpack: {
  //   output: {
  //     publicPath: 'https://nmy0808.github.io/n-ui/',
  //   }
  // },
  themeConfig: {
    nav: [
      { text: 'github', link: 'https://www.baidu.com' },
      { text: 'vue3.0版本', link: 'https://www.taobao.com.com' }
    ],
    sidebar: [
      '/',
      '/install/',
      {
        title: '基础',
        children: ['/components/','/components/README2'],
        collapsable: false, // 可选的, 默认值是 true,
      }
    ]
  },
}