(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
  325(e, t, a) {},
  356(e, t, a) {
    a(325);
  },
  361(e, t, a) {
    a.r(t); a(65), a(27), a(91); const o = {
      name: 'CodeGroup', data() { return { codeTabs: [], activeCodeTabIndex: -1 }; }, watch: { activeCodeTabIndex(e) { this.activateCodeTab(e); } }, mounted() { this.loadTabs(); }, methods: { changeCodeTab(e) { this.activeCodeTabIndex = e; }, loadTabs() { const e = this; this.codeTabs = (this.$slots.default || []).filter(((e) => Boolean(e.componentOptions))).map(((t, a) => (t.componentOptions.propsData.active === '' && (e.activeCodeTabIndex = a), { title: t.componentOptions.propsData.title, elm: t.elm }))), this.activeCodeTabIndex === -1 && this.codeTabs.length > 0 && (this.activeCodeTabIndex = 0), this.activateCodeTab(0); }, activateCodeTab(e) { this.codeTabs.forEach(((e) => { e.elm && e.elm.classList.remove('theme-code-block__active'); })), this.codeTabs[e].elm && this.codeTabs[e].elm.classList.add('theme-code-block__active'); } },
    }; const n = (a(356), a(41)); const c = Object(n.a)(o, (function () { const e = this; const t = e.$createElement; const a = e._self._c || t; return a('ClientOnly', [a('div', { staticClass: 'theme-code-group' }, [a('div', { staticClass: 'theme-code-group__nav' }, [a('ul', { staticClass: 'theme-code-group__ul' }, e._l(e.codeTabs, ((t, o) => a('li', { key: t.title, staticClass: 'theme-code-group__li' }, [a('button', { staticClass: 'theme-code-group__nav-tab', class: { 'theme-code-group__nav-tab-active': o === e.activeCodeTabIndex }, on: { click(t) { return e.changeCodeTab(o); } } }, [e._v(`\n            ${e._s(t.title)}\n          `)])]))), 0)]), e._v(' '), e._t('default'), e._v(' '), e.codeTabs.length < 1 ? a('pre', { staticClass: 'pre-blank' }, [e._v('// Make sure to add code blocks to your code group')]) : e._e()], 2)]); }), [], !1, null, 'deefee04', null); t.default = c.exports;
  },
}]);
