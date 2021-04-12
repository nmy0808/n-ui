(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
  298(t, e, n) {
    n.d(e, 'd', (() => i)), n.d(e, 'a', (() => a)), n.d(e, 'i', (() => s)), n.d(e, 'f', (() => u)), n.d(e, 'g', (() => l)), n.d(e, 'h', (() => c)), n.d(e, 'b', (() => h)), n.d(e, 'e', (() => p)), n.d(e, 'k', (() => f)), n.d(e, 'l', (() => d)), n.d(e, 'c', (() => v)), n.d(e, 'j', (() => m)); n(66), n(42), n(299), n(300), n(162), n(65), n(91), n(27); var i = /#.*$/; const r = /\.(md|html)$/; var a = /\/$/; var s = /^[a-z]+:/i; function o(t) { return decodeURI(t).replace(i, '').replace(r, ''); } function u(t) { return s.test(t); } function l(t) { return /^mailto:/.test(t); } function c(t) { return /^tel:/.test(t); } function h(t) { if (u(t)) return t; const e = t.match(i); const n = e ? e[0] : ''; const r = o(t); return a.test(r) ? t : `${r}.html${n}`; } function p(t, e) { const n = decodeURIComponent(t.hash); const r = (function (t) { const e = t.match(i); if (e) return e[0]; }(e)); return (!r || n === r) && o(t.path) === o(e); } function f(t, e, n) { if (u(e)) return { type: 'external', path: e }; n && (e = (function (t, e, n) { const i = t.charAt(0); if (i === '/') return t; if (i === '?' || i === '#') return e + t; const r = e.split('/'); n && r[r.length - 1] || r.pop(); for (let a = t.replace(/^\//, '').split('/'), s = 0; s < a.length; s++) { const o = a[s]; o === '..' ? r.pop() : o !== '.' && r.push(o); }r[0] !== '' && r.unshift(''); return r.join('/'); }(e, n))); for (let i = o(e), r = 0; r < t.length; r++) if (o(t[r].regularPath) === i) return { ...t[r], type: 'page', path: h(t[r].path) }; return console.error('[vuepress] No matching page found for sidebar item "'.concat(e, '"')), {}; } function d(t, e, n, i) {
      const r = n.pages; const a = n.themeConfig; const s = i && a.locales && a.locales[i] || a; if ((t.frontmatter.sidebar || s.sidebar || a.sidebar) === 'auto') return g(t); const o = s.sidebar || a.sidebar; if (o) {
        const u = (function (t, e) { if (Array.isArray(e)) return { base: '/', config: e }; for (const n in e) if ((i = t, /(\.html|\/)$/.test(i) ? i : `${i}/`).indexOf(encodeURI(n)) === 0) return { base: n, config: e[n] }; let i; return {}; }(e, o)); const l = u.base; const c = u.config; return c === 'auto' ? g(t) : c ? c.map(((t) => (function t(e, n, i) {
          const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1; if (typeof e === 'string') return f(n, e, i); if (Array.isArray(e)) return Object.assign(f(n, e[0], i), { title: e[1] }); const a = e.children || []; return a.length === 0 && e.path ? Object.assign(f(n, e.path, i), { title: e.title }) : {
            type: 'group', path: e.path, title: e.title, sidebarDepth: e.sidebarDepth, initialOpenGroupIndex: e.initialOpenGroupIndex, children: a.map(((e) => t(e, n, i, r + 1))), collapsable: !1 !== e.collapsable,
          };
        }(t, r, l)))) : [];
      } return [];
    } function g(t) {
      const e = v(t.headers || []); return [{
        type: 'group',
        collapsable: !1,
        title: t.title,
        path: null,
        children: e.map(((e) => ({
          type: 'auto', title: e.title, basePath: t.path, path: `${t.path}#${e.slug}`, children: e.children || [],
        }))),
      }];
    } function v(t) { let e; return (t = t.map(((t) => ({ ...t })))).forEach(((t) => { t.level === 2 ? e = t : e && (e.children || (e.children = [])).push(t); })), t.filter(((t) => t.level === 2)); } function m(t) { return Object.assign(t, { type: t.items && t.items.length ? 'links' : 'link' }); }
  },
  299(t, e, n) {
    const i = n(158); const r = n(5); const a = n(13); const s = n(23); const o = n(160); const u = n(161); i('match', 1, ((t, e, n) => [function (e) { const n = s(this); const i = e == null ? void 0 : e[t]; return void 0 !== i ? i.call(e, n) : new RegExp(e)[t](String(n)); }, function (t) { const i = n(e, t, this); if (i.done) return i.value; const s = r(t); const l = String(this); if (!s.global) return u(s, l); const c = s.unicode; s.lastIndex = 0; for (var h, p = [], f = 0; (h = u(s, l)) !== null;) { const d = String(h[0]); p[f] = d, d === '' && (s.lastIndex = o(l, a(s.lastIndex), c)), f++; } return f === 0 ? null : p; }]));
  },
  300(t, e, n) {
    const i = n(158); const r = n(157); const a = n(5); const s = n(23); const o = n(95); const u = n(160); const l = n(13); const c = n(161); const h = n(68); const p = n(2); const f = [].push; const d = Math.min; const g = !p((() => !RegExp(4294967295, 'y'))); i('split', 2, ((t, e, n) => { let i; return i = 'abbc'.split(/(b)*/)[1] == 'c' || 'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || '.'.split(/()()/).length > 1 || ''.split(/.?/).length ? function (t, n) { const i = String(s(this)); const a = void 0 === n ? 4294967295 : n >>> 0; if (a === 0) return []; if (void 0 === t) return [i]; if (!r(t)) return e.call(i, t, a); for (var o, u, l, c = [], p = (t.ignoreCase ? 'i' : '') + (t.multiline ? 'm' : '') + (t.unicode ? 'u' : '') + (t.sticky ? 'y' : ''), d = 0, g = new RegExp(t.source, `${p}g`); (o = h.call(g, i)) && !((u = g.lastIndex) > d && (c.push(i.slice(d, o.index)), o.length > 1 && o.index < i.length && f.apply(c, o.slice(1)), l = o[0].length, d = u, c.length >= a));)g.lastIndex === o.index && g.lastIndex++; return d === i.length ? !l && g.test('') || c.push('') : c.push(i.slice(d)), c.length > a ? c.slice(0, a) : c; } : '0'.split(void 0, 0).length ? function (t, n) { return void 0 === t && n === 0 ? [] : e.call(this, t, n); } : e, [function (e, n) { const r = s(this); const a = e == null ? void 0 : e[t]; return void 0 !== a ? a.call(e, r, n) : i.call(String(r), e, n); }, function (t, r) { const s = n(i, t, this, r, i !== e); if (s.done) return s.value; const h = a(t); const p = String(this); const f = o(h, RegExp); const v = h.unicode; const m = (h.ignoreCase ? 'i' : '') + (h.multiline ? 'm' : '') + (h.unicode ? 'u' : '') + (g ? 'y' : 'g'); const b = new f(g ? h : `^(?:${h.source})`, m); const k = void 0 === r ? 4294967295 : r >>> 0; if (k === 0) return []; if (p.length === 0) return c(b, p) === null ? [p] : []; for (var _ = 0, x = 0, C = []; x < p.length;) { b.lastIndex = g ? x : 0; var $; const y = c(b, g ? p : p.slice(x)); if (y === null || ($ = d(l(b.lastIndex + (g ? 0 : x)), p.length)) === _)x = u(p, x, v); else { if (C.push(p.slice(_, x)), C.length === k) return C; for (let L = 1; L <= y.length - 1; L++) if (C.push(y[L]), C.length === k) return C; x = _ = $; } } return C.push(p.slice(_)), C; }]; }), !g);
  },
  301(t, e, n) {},
  302(t, e, n) {
    const i = n(0); const r = n(332).trim; i({ target: 'String', proto: !0, forced: n(333)('trim') }, { trim() { return r(this); } });
  },
  303(t, e) { t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff'; },
  304(t, e, n) { const i = n(8); const r = n(3); const a = n(94); const s = n(334); const o = n(7).f; const u = n(67).f; const l = n(157); const c = n(159); const h = n(165); const p = n(18); const f = n(2); const d = n(28).set; const g = n(164); const v = n(1)('match'); const m = r.RegExp; const b = m.prototype; const k = /a/g; const _ = /a/g; const x = new m(k) !== k; const C = h.UNSUPPORTED_Y; if (i && a('RegExp', !x || C || f((() => (_[v] = !1, m(k) != k || m(_) == _ || m(k, 'i') != '/a/i'))))) { for (var $ = function (t, e) { let n; const i = this instanceof $; const r = l(t); const a = void 0 === e; if (!i && r && t.constructor === $ && a) return t; x ? r && !a && (t = t.source) : t instanceof $ && (a && (e = c.call(t)), t = t.source), C && (n = !!e && e.indexOf('y') > -1) && (e = e.replace(/y/g, '')); const o = s(x ? new m(t, e) : m(t, e), i ? this : b, $); return C && n && d(o, { sticky: n }), o; }, y = function (t) { t in $ || o($, t, { configurable: !0, get() { return m[t]; }, set(e) { m[t] = e; } }); }, L = u(m), w = 0; L.length > w;)y(L[w++]); b.constructor = $, $.prototype = b, p(r, 'RegExp', $); }g('RegExp'); },
  305(t, e, n) {
    const i = n(18); const r = n(5); const a = n(2); const s = n(159); const o = RegExp.prototype; const u = o.toString; const l = a((() => u.call({ source: 'a', flags: 'b' }) != '/a/b')); const c = u.name != 'toString'; (l || c) && i(RegExp.prototype, 'toString', (function () { const t = r(this); const e = String(t.source); const n = t.flags; return `/${e}/${String(void 0 === n && t instanceof RegExp && !('flags' in o) ? s.call(t) : n)}`; }), { unsafe: !0 });
  },
  306(t, e, n) {},
  307(t, e, n) {},
  308(t, e, n) {},
  309(t, e, n) {},
  310(t, e, n) {},
  311(t, e, n) {},
  312(t, e) { t.exports = function (t) { return t == null; }; },
  313(t, e, n) {},
  314(t, e, n) {},
  315(t, e, n) {},
  316(t, e, n) {},
  317(t, e, n) {},
  318(t, e, n) {},
  326(t, e, n) {
    n.r(e); const i = n(298); const r = {
      name: 'SidebarGroup', components: { DropdownTransition: n(327).a }, props: ['item', 'open', 'collapsable', 'depth'], beforeCreate() { this.$options.components.SidebarLinks = n(326).default; }, methods: { isActive: i.e },
    }; const a = (n(346), n(41)); const s = Object(a.a)(r, (function () {
      const t = this; const e = t.$createElement; const n = t._self._c || e; return n('section', { staticClass: 'sidebar-group', class: [{ collapsable: t.collapsable, 'is-sub-group': t.depth !== 0 }, `depth-${t.depth}`] }, [t.item.path ? n('RouterLink', {
        staticClass: 'sidebar-heading clickable', class: { open: t.open, active: t.isActive(t.$route, t.item.path) }, attrs: { to: t.item.path }, nativeOn: { click(e) { return t.$emit('toggle'); } },
      }, [n('span', [t._v(t._s(t.item.title))]), t._v(' '), t.collapsable ? n('span', { staticClass: 'arrow', class: t.open ? 'down' : 'right' }) : t._e()]) : n('p', { staticClass: 'sidebar-heading', class: { open: t.open }, on: { click(e) { return t.$emit('toggle'); } } }, [n('span', [t._v(t._s(t.item.title))]), t._v(' '), t.collapsable ? n('span', { staticClass: 'arrow', class: t.open ? 'down' : 'right' }) : t._e()]), t._v(' '), n('DropdownTransition', [t.open || !t.collapsable ? n('SidebarLinks', {
        staticClass: 'sidebar-group-items',
        attrs: {
          items: t.item.children, 'sidebar-depth': t.item.sidebarDepth, 'initial-open-group-index': t.item.initialOpenGroupIndex, depth: t.depth + 1,
        },
      }) : t._e()], 1)], 1);
    }), [], !1, null, null, null).exports; n(347), n(65); function o(t, e, n, i, r) { const a = { props: { to: e, activeClass: '', exactActiveClass: '' }, class: { active: i, 'sidebar-link': !0 } }; return r > 2 && (a.style = { 'padding-left': `${r}rem` }), t('RouterLink', a, n); } function u(t, e, n, r, a) { const s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1; return !e || s > a ? null : t('ul', { class: 'sidebar-sub-headers' }, e.map(((e) => { const l = Object(i.e)(r, `${n}#${e.slug}`); return t('li', { class: 'sidebar-sub-header' }, [o(t, `${n}#${e.slug}`, e.title, l, e.level - 1), u(t, e.children, n, r, a, s + 1)]); }))); } const l = { functional: !0, props: ['item', 'sidebarDepth'], render(t, e) { const n = e.parent; const r = n.$page; const a = (n.$site, n.$route); const s = n.$themeConfig; const l = n.$themeLocaleConfig; const c = e.props; const h = c.item; const p = c.sidebarDepth; const f = Object(i.e)(a, h.path); const d = h.type === 'auto' ? f || h.children.some(((t) => Object(i.e)(a, `${h.basePath}#${t.slug}`))) : f; const g = h.type === 'external' ? (function (t, e, n) { return t('a', { attrs: { href: e, target: '_blank', rel: 'noopener noreferrer' }, class: { 'sidebar-link': !0 } }, [n, t('OutboundLink')]); }(t, h.path, h.title || h.path)) : o(t, h.path, h.title || h.path, d); const v = [r.frontmatter.sidebarDepth, p, l.sidebarDepth, s.sidebarDepth, 1].find(((t) => void 0 !== t)); const m = l.displayAllHeaders || s.displayAllHeaders; return h.type === 'auto' ? [g, u(t, h.children, h.basePath, a, v)] : (d || m) && h.headers && !i.d.test(h.path) ? [g, u(t, Object(i.c)(h.headers), h.path, a, v)] : g; } }; n(348); function c(t, e) { if (e.type === 'group') { const n = e.path && Object(i.e)(t, e.path); const r = e.children.some(((e) => (e.type === 'group' ? c(t, e) : e.type === 'page' && Object(i.e)(t, e.path)))); return n || r; } return !1; } const h = {
      name: 'SidebarLinks', components: { SidebarGroup: s, SidebarLink: Object(a.a)(l, void 0, void 0, !1, null, null, null).exports }, props: ['items', 'depth', 'sidebarDepth', 'initialOpenGroupIndex'], data() { return { openGroupIndex: this.initialOpenGroupIndex || 0 }; }, watch: { $route() { this.refreshIndex(); } }, created() { this.refreshIndex(); }, methods: { refreshIndex() { const t = (function (t, e) { for (let n = 0; n < e.length; n++) { const i = e[n]; if (c(t, i)) return n; } return -1; }(this.$route, this.items)); t > -1 && (this.openGroupIndex = t); }, toggleGroup(t) { this.openGroupIndex = t === this.openGroupIndex ? -1 : t; }, isActive(t) { return Object(i.e)(this.$route, t.regularPath); } },
    }; const p = Object(a.a)(h, (function () {
      const t = this; const e = t.$createElement; const n = t._self._c || e; return t.items.length ? n('ul', { staticClass: 'sidebar-links' }, t._l(t.items, ((e, i) => n('li', { key: i }, [e.type === 'group' ? n('SidebarGroup', {
        attrs: {
          item: e, open: i === t.openGroupIndex, collapsable: e.collapsable || e.collapsible, depth: t.depth,
        },
        on: { toggle(e) { return t.toggleGroup(i); } },
      }) : n('SidebarLink', { attrs: { 'sidebar-depth': t.sidebarDepth, item: e } })], 1))), 0) : t._e();
    }), [], !1, null, null, null); e.default = p.exports;
  },
  327(t, e, n) {
    const i = { name: 'DropdownTransition', methods: { setHeight(t) { t.style.height = `${t.scrollHeight}px`; }, unsetHeight(t) { t.style.height = ''; } } }; const r = (n(338), n(41)); const a = Object(r.a)(i, (function () { const t = this.$createElement; return (this._self._c || t)('transition', { attrs: { name: 'dropdown' }, on: { enter: this.setHeight, 'after-enter': this.unsetHeight, 'before-leave': this.setHeight } }, [this._t('default')], 2); }), [], !1, null, null, null); e.a = a.exports;
  },
  328(t, e, n) {
    const i = n(0); const r = n(329); i({ target: 'String', proto: !0, forced: n(330)('link') }, { link(t) { return r(this, 'a', 'href', t); } });
  },
  329(t, e, n) { const i = n(23); const r = /"/g; t.exports = function (t, e, n, a) { const s = String(i(t)); let o = `<${e}`; return n !== '' && (o += ` ${n}="${String(a).replace(r, '&quot;')}"`), `${o}>${s}</${e}>`; }; },
  330(t, e, n) { const i = n(2); t.exports = function (t) { return i((() => { const e = ''[t]('"'); return e !== e.toLowerCase() || e.split('"').length > 3; })); }; },
  331(t, e, n) {
    n(301);
  },
  332(t, e, n) { const i = n(23); const r = `[${n(303)}]`; const a = RegExp(`^${r}${r}*`); const s = RegExp(`${r + r}*$`); const o = function (t) { return function (e) { let n = String(i(e)); return 1 & t && (n = n.replace(a, '')), 2 & t && (n = n.replace(s, '')), n; }; }; t.exports = { start: o(1), end: o(2), trim: o(3) }; },
  333(t, e, n) { const i = n(2); const r = n(303); t.exports = function (t) { return i((() => !!r[t]() || '​᠎'[t]() != '​᠎' || r[t].name !== t)); }; },
  334(t, e, n) { const i = n(4); const r = n(163); t.exports = function (t, e, n) { let a; let s; return r && typeof (a = e.constructor) === 'function' && a !== n && i(s = a.prototype) && s !== n.prototype && r(t, s), t; }; },
  335(t, e, n) {
    let i; const r = n(0); const a = n(24).f; const s = n(13); const o = n(96); const u = n(23); const l = n(97); const c = n(20); const h = ''.endsWith; const p = Math.min; const f = l('endsWith'); r({ target: 'String', proto: !0, forced: !!(c || f || (i = a(String.prototype, 'endsWith'), !i || i.writable)) && !f }, { endsWith(t) { const e = String(u(this)); o(t); const n = arguments.length > 1 ? arguments[1] : void 0; const i = s(e.length); const r = void 0 === n ? i : p(s(n), i); const a = String(t); return h ? h.call(e, a, r) : e.slice(r - a.length, r) === a; } });
  },
  336(t, e, n) {
    n(306);
  },
  337(t, e, n) {
    n(307);
  },
  338(t, e, n) {
    n(308);
  },
  339(t, e, n) {
    n(309);
  },
  340(t, e, n) {
    n(310);
  },
  341(t, e, n) {
    n(311);
  },
  342(t, e, n) {
    n(313);
  },
  343(t, e, n) { const i = n(29); const r = n(14); const a = n(25); t.exports = function (t) { return typeof t === 'string' || !r(t) && a(t) && i(t) == '[object String]'; }; },
  344(t, e, n) {
    n(314);
  },
  345(t, e, n) {
    n(315);
  },
  346(t, e, n) {
    n(316);
  },
  347(t, e, n) {
    const i = n(0); const r = n(43).find; const a = n(93); let s = !0; 'find' in [] && Array(1).find((() => { s = !1; })), i({ target: 'Array', proto: !0, forced: s }, { find(t) { return r(this, t, arguments.length > 1 ? arguments[1] : void 0); } }), a('find');
  },
  348(t, e, n) {
    n(317);
  },
  349(t, e, n) {
    n(318);
  },
  357(t, e, n) {
    n.r(e); n(328), n(92); const i = n(298); const r = {
      name: 'NavLink',
      props: { item: { required: !0 } },
      computed: {
        link() { return Object(i.b)(this.item.link); }, exact() { const t = this; return this.$site.locales ? Object.keys(this.$site.locales).some(((e) => e === t.link)) : this.link === '/'; }, isNonHttpURI() { return Object(i.g)(this.link) || Object(i.h)(this.link); }, isBlankTarget() { return this.target === '_blank'; }, isInternal() { return !Object(i.f)(this.link) && !this.isBlankTarget; }, target() { return this.isNonHttpURI ? null : this.item.target ? this.item.target : Object(i.f)(this.link) ? '_blank' : ''; }, rel() { return this.isNonHttpURI || !1 === this.item.rel ? null : this.item.rel ? this.item.rel : this.isBlankTarget ? 'noopener noreferrer' : null; },
      },
      methods: { focusoutAction() { this.$emit('focusout'); } },
    }; const a = n(41); const s = Object(a.a)(r, (function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return t.isInternal ? n('RouterLink', { staticClass: 'nav-link', attrs: { to: t.link, exact: t.exact }, nativeOn: { focusout(e) { return t.focusoutAction(e); } } }, [t._v(`\n  ${t._s(t.item.text)}\n`)]) : n('a', { staticClass: 'nav-link external', attrs: { href: t.link, target: t.target, rel: t.rel }, on: { focusout: t.focusoutAction } }, [t._v(`\n  ${t._s(t.item.text)}\n  `), t.isBlankTarget ? n('OutboundLink') : t._e()], 1); }), [], !1, null, null, null).exports; const o = { name: 'Home', components: { NavLink: s }, computed: { data() { return this.$page.frontmatter; }, actionLink() { return { link: this.data.actionLink, text: this.data.actionText }; } } }; const u = (n(331), Object(a.a)(o, (function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('main', { staticClass: 'home', attrs: { 'aria-labelledby': t.data.heroText !== null ? 'main-title' : null } }, [n('header', { staticClass: 'hero' }, [t.data.heroImage ? n('img', { attrs: { src: t.$withBase(t.data.heroImage), alt: t.data.heroAlt || 'hero' } }) : t._e(), t._v(' '), t.data.heroText !== null ? n('h1', { attrs: { id: 'main-title' } }, [t._v(`\n      ${t._s(t.data.heroText || t.$title || 'Hello')}\n    `)]) : t._e(), t._v(' '), t.data.tagline !== null ? n('p', { staticClass: 'description' }, [t._v(`\n      ${t._s(t.data.tagline || t.$description || 'Welcome to your VuePress site')}\n    `)]) : t._e(), t._v(' '), t.data.actionText && t.data.actionLink ? n('p', { staticClass: 'action' }, [n('NavLink', { staticClass: 'action-button', attrs: { item: t.actionLink } })], 1) : t._e()]), t._v(' '), t.data.features && t.data.features.length ? n('div', { staticClass: 'features' }, t._l(t.data.features, ((e, i) => n('div', { key: i, staticClass: 'feature' }, [n('h2', [t._v(t._s(e.title))]), t._v(' '), n('p', [t._v(t._s(e.details))])]))), 0) : t._e(), t._v(' '), n('Content', { staticClass: 'theme-default-content custom' }), t._v(' '), t.data.footer ? n('div', { staticClass: 'footer' }, [t._v(`\n    ${t._s(t.data.footer)}\n  `)]) : t._e()], 1); }), [], !1, null, null, null).exports); const l = (n(302), n(27), n(299), n(42), n(166), n(167), n(162), n(66), n(304), n(305), n(65), n(300), n(335), n(169)); const c = n.n(l); const h = function (t, e) { const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; let i = c()(e, 'title', ''); return c()(e, 'frontmatter.tags') && (i += ' '.concat(e.frontmatter.tags.join(' '))), n && (i += ' '.concat(n)), p(t, i); }; var p = function (t, e) { const n = function (t) { return t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'); }; const i = new RegExp('[^\0-]'); const r = t.split(/\s+/g).map(((t) => t.trim())).filter(((t) => !!t)); if (i.test(t)) return r.some(((t) => e.toLowerCase().indexOf(t) > -1)); const a = t.endsWith(' '); return new RegExp(`${r.map(((t, e) => (r.length !== e + 1 || a ? '(?=.*\\b'.concat(n(t), '\\b)') : '(?=.*\\b'.concat(n(t), ')')))).join('')}.+`, 'gi').test(e); }; const f = {
      name: 'SearchBox',
      data() {
        return {
          query: '', focused: !1, focusIndex: 0, placeholder: void 0,
        };
      },
      computed: { showSuggestions() { return this.focused && this.suggestions && this.suggestions.length; }, suggestions() { const t = this.query.trim().toLowerCase(); if (t) { for (var e = this.$site.pages, n = this.$site.themeConfig.searchMaxSuggestions || 5, i = this.$localePath, r = [], a = 0; a < e.length && !(r.length >= n); a++) { const s = e[a]; if (this.getPageLocalePath(s) === i && this.isSearchable(s)) if (h(t, s))r.push(s); else if (s.headers) for (let o = 0; o < s.headers.length && !(r.length >= n); o++) { const u = s.headers[o]; u.title && h(t, s, u.title) && r.push({ ...s, path: `${s.path}#${u.slug}`, header: u }); } } return r; } }, alignRight() { return (this.$site.themeConfig.nav || []).length + (this.$site.repo ? 1 : 0) <= 2; } },
      mounted() { this.placeholder = this.$site.themeConfig.searchPlaceholder || '', document.addEventListener('keydown', this.onHotkey); },
      beforeDestroy() { document.removeEventListener('keydown', this.onHotkey); },
      methods: {
        getPageLocalePath(t) { for (const e in this.$site.locales || {}) if (e !== '/' && t.path.indexOf(e) === 0) return e; return '/'; }, isSearchable(t) { let e = null; return e === null || (e = Array.isArray(e) ? e : new Array(e)).filter(((e) => t.path.match(e))).length > 0; }, onHotkey(t) { t.srcElement === document.body && ['s', '/'].includes(t.key) && (this.$refs.input.focus(), t.preventDefault()); }, onUp() { this.showSuggestions && (this.focusIndex > 0 ? this.focusIndex-- : this.focusIndex = this.suggestions.length - 1); }, onDown() { this.showSuggestions && (this.focusIndex < this.suggestions.length - 1 ? this.focusIndex++ : this.focusIndex = 0); }, go(t) { this.showSuggestions && (this.$router.push(this.suggestions[t].path), this.query = '', this.focusIndex = 0); }, focus(t) { this.focusIndex = t; }, unfocus() { this.focusIndex = -1; },
      },
    }; const d = (n(336), Object(a.a)(f, (function () {
      const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', { staticClass: 'search-box' }, [n('input', {
        ref: 'input',
        class: { focused: t.focused },
        attrs: {
          'aria-label': 'Search', placeholder: t.placeholder, autocomplete: 'off', spellcheck: 'false',
        },
        domProps: { value: t.query },
        on: {
          input(e) { t.query = e.target.value; }, focus(e) { t.focused = !0; }, blur(e) { t.focused = !1; }, keyup: [function (e) { return !e.type.indexOf('key') && t._k(e.keyCode, 'enter', 13, e.key, 'Enter') ? null : t.go(t.focusIndex); }, function (e) { return !e.type.indexOf('key') && t._k(e.keyCode, 'up', 38, e.key, ['Up', 'ArrowUp']) ? null : t.onUp(e); }, function (e) { return !e.type.indexOf('key') && t._k(e.keyCode, 'down', 40, e.key, ['Down', 'ArrowDown']) ? null : t.onDown(e); }],
        },
      }), t._v(' '), t.showSuggestions ? n('ul', { staticClass: 'suggestions', class: { 'align-right': t.alignRight }, on: { mouseleave: t.unfocus } }, t._l(t.suggestions, ((e, i) => n('li', {
        key: i, staticClass: 'suggestion', class: { focused: i === t.focusIndex }, on: { mousedown(e) { return t.go(i); }, mouseenter(e) { return t.focus(i); } },
      }, [n('a', { attrs: { href: e.path }, on: { click(t) { t.preventDefault(); } } }, [n('span', { staticClass: 'page-title' }, [t._v(t._s(e.title || e.path))]), t._v(' '), e.header ? n('span', { staticClass: 'header' }, [t._v(`> ${t._s(e.header.title)}`)]) : t._e()])]))), 0) : t._e()]);
    }), [], !1, null, null, null).exports); const g = (n(337), Object(a.a)({}, (function () {
      const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', { staticClass: 'sidebar-button', on: { click(e) { return t.$emit('toggle-sidebar'); } } }, [n('svg', {
        staticClass: 'icon',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', role: 'img', viewBox: '0 0 448 512',
        },
      }, [n('path', { attrs: { fill: 'currentColor', d: 'M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z' } })])]);
    }), [], !1, null, null, null).exports); const v = n(39); const m = (n(168), n(327)); const b = n(170); const k = n.n(b); const _ = {
      name: 'DropdownLink', components: { NavLink: s, DropdownTransition: m.a }, props: { item: { required: !0 } }, data() { return { open: !1 }; }, computed: { dropdownAriaLabel() { return this.item.ariaLabel || this.item.text; } }, watch: { $route() { this.open = !1; } }, methods: { setOpen(t) { this.open = t; }, isLastItemOfArray(t, e) { return k()(e) === t; }, handleDropdown() { event.detail === 0 && this.setOpen(!this.open); } },
    }; const x = (n(339), {
      name: 'NavLinks',
      components: {
        NavLink: s,
        DropdownLink: Object(a.a)(_, (function () {
          const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', { staticClass: 'dropdown-wrapper', class: { open: t.open } }, [n('button', { staticClass: 'dropdown-title', attrs: { type: 'button', 'aria-label': t.dropdownAriaLabel }, on: { click: t.handleDropdown } }, [n('span', { staticClass: 'title' }, [t._v(t._s(t.item.text))]), t._v(' '), n('span', { staticClass: 'arrow down' })]), t._v(' '), n('button', { staticClass: 'mobile-dropdown-title', attrs: { type: 'button', 'aria-label': t.dropdownAriaLabel }, on: { click(e) { return t.setOpen(!t.open); } } }, [n('span', { staticClass: 'title' }, [t._v(t._s(t.item.text))]), t._v(' '), n('span', { staticClass: 'arrow', class: t.open ? 'down' : 'right' })]), t._v(' '), n('DropdownTransition', [n('ul', {
            directives: [{
              name: 'show', rawName: 'v-show', value: t.open, expression: 'open',
            }],
            staticClass: 'nav-dropdown',
          }, t._l(t.item.items, ((e, i) => n('li', { key: e.link || i, staticClass: 'dropdown-item' }, [e.type === 'links' ? n('h4', [t._v(`\n          ${t._s(e.text)}\n        `)]) : t._e(), t._v(' '), e.type === 'links' ? n('ul', { staticClass: 'dropdown-subitem-wrapper' }, t._l(e.items, ((i) => n('li', { key: i.link, staticClass: 'dropdown-subitem' }, [n('NavLink', { attrs: { item: i }, on: { focusout(n) { t.isLastItemOfArray(i, e.items) && t.isLastItemOfArray(e, t.item.items) && t.setOpen(!1); } } })], 1))), 0) : n('NavLink', { attrs: { item: e }, on: { focusout(n) { t.isLastItemOfArray(e, t.item.items) && t.setOpen(!1); } } })], 1))), 0)])], 1);
        }), [], !1, null, null, null).exports,
      },
      computed: {
        userNav() { return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []; }, nav() { const t = this; const e = this.$site.locales; if (e && Object.keys(e).length > 1) { const n = this.$page.path; const i = this.$router.options.routes; const r = this.$site.themeConfig.locales || {}; const a = { text: this.$themeLocaleConfig.selectText || 'Languages', ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language', items: Object.keys(e).map(((a) => { let s; const o = e[a]; const u = r[a] && r[a].label || o.lang; return o.lang === t.$lang ? s = n : (s = n.replace(t.$localeConfig.path, a), i.some(((t) => t.path === s)) || (s = a)), { text: u, link: s }; })) }; return [].concat(Object(v.a)(this.userNav), [a]); } return this.userNav; }, userLinks() { return (this.nav || []).map(((t) => Object.assign(Object(i.j)(t), { items: (t.items || []).map(i.j) }))); }, repoLink() { const t = this.$site.themeConfig.repo; return t ? /^https?:/.test(t) ? t : 'https://github.com/'.concat(t) : null; }, repoLabel() { if (this.repoLink) { if (this.$site.themeConfig.repoLabel) return this.$site.themeConfig.repoLabel; for (let t = this.repoLink.match(/^https?:\/\/[^/]+/)[0], e = ['GitHub', 'GitLab', 'Bitbucket'], n = 0; n < e.length; n++) { const i = e[n]; if (new RegExp(i, 'i').test(t)) return i; } return 'Source'; } },
      },
    }); const C = (n(340), Object(a.a)(x, (function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return t.userLinks.length || t.repoLink ? n('nav', { staticClass: 'nav-links' }, [t._l(t.userLinks, ((t) => n('div', { key: t.link, staticClass: 'nav-item' }, [t.type === 'links' ? n('DropdownLink', { attrs: { item: t } }) : n('NavLink', { attrs: { item: t } })], 1))), t._v(' '), t.repoLink ? n('a', { staticClass: 'repo-link', attrs: { href: t.repoLink, target: '_blank', rel: 'noopener noreferrer' } }, [t._v(`\n    ${t._s(t.repoLabel)}\n    `), n('OutboundLink')], 1) : t._e()], 2) : t._e(); }), [], !1, null, null, null).exports); function $(t, e) { return t.ownerDocument.defaultView.getComputedStyle(t, null)[e]; } const y = {
      name: 'Navbar',
      components: {
        SidebarButton: g, NavLinks: C, SearchBox: d, AlgoliaSearchBox: {},
      },
      data() { return { linksWrapMaxWidth: null }; },
      computed: { algolia() { return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}; }, isAlgoliaSearch() { return this.algolia && this.algolia.apiKey && this.algolia.indexName; } },
      mounted() { const t = this; const e = parseInt($(this.$el, 'paddingLeft')) + parseInt($(this.$el, 'paddingRight')); const n = function () { document.documentElement.clientWidth < 719 ? t.linksWrapMaxWidth = null : t.linksWrapMaxWidth = t.$el.offsetWidth - e - (t.$refs.siteName && t.$refs.siteName.offsetWidth || 0); }; n(), window.addEventListener('resize', n, !1); },
    }; const L = (n(341), Object(a.a)(y, (function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('header', { staticClass: 'navbar' }, [n('SidebarButton', { on: { 'toggle-sidebar': function (e) { return t.$emit('toggle-sidebar'); } } }), t._v(' '), n('RouterLink', { staticClass: 'home-link', attrs: { to: t.$localePath } }, [t.$site.themeConfig.logo ? n('img', { staticClass: 'logo', attrs: { src: t.$withBase(t.$site.themeConfig.logo), alt: t.$siteTitle } }) : t._e(), t._v(' '), t.$siteTitle ? n('span', { ref: 'siteName', staticClass: 'site-name', class: { 'can-hide': t.$site.themeConfig.logo } }, [t._v(t._s(t.$siteTitle))]) : t._e()]), t._v(' '), n('div', { staticClass: 'links', style: t.linksWrapMaxWidth ? { 'max-width': `${t.linksWrapMaxWidth}px` } : {} }, [t.isAlgoliaSearch ? n('AlgoliaSearchBox', { attrs: { options: t.algolia } }) : !1 !== t.$site.themeConfig.search && !1 !== t.$page.frontmatter.search ? n('SearchBox') : t._e(), t._v(' '), n('NavLinks', { staticClass: 'can-hide' })], 1)], 1); }), [], !1, null, null, null).exports); const w = n(312); const S = n.n(w); const O = {
      name: 'PageEdit',
      computed: {
        lastUpdated() { return this.$page.lastUpdated; }, lastUpdatedText() { return typeof this.$themeLocaleConfig.lastUpdated === 'string' ? this.$themeLocaleConfig.lastUpdated : typeof this.$site.themeConfig.lastUpdated === 'string' ? this.$site.themeConfig.lastUpdated : 'Last Updated'; }, editLink() { const t = S()(this.$page.frontmatter.editLink) ? this.$site.themeConfig.editLinks : this.$page.frontmatter.editLink; const e = this.$site.themeConfig; const n = e.repo; const i = e.docsDir; const r = void 0 === i ? '' : i; const a = e.docsBranch; const s = void 0 === a ? 'master' : a; const o = e.docsRepo; const u = void 0 === o ? n : o; return t && u && this.$page.relativePath ? this.createEditLink(n, u, r, s, this.$page.relativePath) : null; }, editLinkText() { return this.$themeLocaleConfig.editLinkText || this.$site.themeConfig.editLinkText || 'Edit this page'; },
      },
      methods: { createEditLink(t, e, n, r, a) { if (/bitbucket.org/.test(e)) return `${e.replace(i.a, '')}/src${'/'.concat(r, '/')}${n ? `${n.replace(i.a, '')}/` : ''}${a}${'?mode=edit&spa=0&at='.concat(r, '&fileviewer=file-view-default')}`; return /gitlab.com/.test(e) ? `${e.replace(i.a, '')}/-/edit${'/'.concat(r, '/')}${n ? `${n.replace(i.a, '')}/` : ''}${a}` : `${(i.i.test(e) ? e : 'https://github.com/'.concat(e)).replace(i.a, '')}/edit${'/'.concat(r, '/')}${n ? `${n.replace(i.a, '')}/` : ''}${a}`; } },
    }; const I = (n(342), Object(a.a)(O, (function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('footer', { staticClass: 'page-edit' }, [t.editLink ? n('div', { staticClass: 'edit-link' }, [n('a', { attrs: { href: t.editLink, target: '_blank', rel: 'noopener noreferrer' } }, [t._v(t._s(t.editLinkText))]), t._v(' '), n('OutboundLink')], 1) : t._e(), t._v(' '), t.lastUpdated ? n('div', { staticClass: 'last-updated' }, [n('span', { staticClass: 'prefix' }, [t._v(`${t._s(t.lastUpdatedText)}:`)]), t._v(' '), n('span', { staticClass: 'time' }, [t._v(t._s(t.lastUpdated))])]) : t._e()]); }), [], !1, null, null, null).exports); const E = n(343); const j = n.n(E); const N = { name: 'PageNav', props: ['sidebarItems'], computed: { prev() { return R(T.PREV, this); }, next() { return R(T.NEXT, this); } } }; var T = { NEXT: { resolveLink(t, e) { return P(t, e, 1); }, getThemeLinkConfig(t) { return t.nextLinks; }, getPageLinkConfig(t) { return t.frontmatter.next; } }, PREV: { resolveLink(t, e) { return P(t, e, -1); }, getThemeLinkConfig(t) { return t.prevLinks; }, getPageLinkConfig(t) { return t.frontmatter.prev; } } }; function R(t, e) { const n = e.$themeConfig; const r = e.$page; const a = e.$route; const s = e.$site; const o = e.sidebarItems; const u = t.resolveLink; const l = t.getThemeLinkConfig; const c = t.getPageLinkConfig; const h = l(n); const p = c(r); const f = S()(p) ? h : p; return !1 === f ? void 0 : j()(f) ? Object(i.k)(s.pages, f, a.path) : u(r, o); } function P(t, e, n) { const i = []; !(function t(e, n) { for (let i = 0, r = e.length; i < r; i++)e[i].type === 'group' ? t(e[i].children || [], n) : n.push(e[i]); }(e, i)); for (let r = 0; r < i.length; r++) { const a = i[r]; if (a.type === 'page' && a.path === decodeURIComponent(t.path)) return i[r + n]; } } const A = N; const D = (n(344), { components: { PageEdit: I, PageNav: Object(a.a)(A, (function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return t.prev || t.next ? n('div', { staticClass: 'page-nav' }, [n('p', { staticClass: 'inner' }, [t.prev ? n('span', { staticClass: 'prev' }, [t._v('\n      ←\n      '), t.prev.type === 'external' ? n('a', { staticClass: 'prev', attrs: { href: t.prev.path, target: '_blank', rel: 'noopener noreferrer' } }, [t._v(`\n        ${t._s(t.prev.title || t.prev.path)}\n\n        `), n('OutboundLink')], 1) : n('RouterLink', { staticClass: 'prev', attrs: { to: t.prev.path } }, [t._v(`\n        ${t._s(t.prev.title || t.prev.path)}\n      `)])], 1) : t._e(), t._v(' '), t.next ? n('span', { staticClass: 'next' }, [t.next.type === 'external' ? n('a', { attrs: { href: t.next.path, target: '_blank', rel: 'noopener noreferrer' } }, [t._v(`\n        ${t._s(t.next.title || t.next.path)}\n\n        `), n('OutboundLink')], 1) : n('RouterLink', { attrs: { to: t.next.path } }, [t._v(`\n        ${t._s(t.next.title || t.next.path)}\n      `)]), t._v('\n      →\n    ')], 1) : t._e()])]) : t._e(); }), [], !1, null, null, null).exports }, props: ['sidebarItems'] }); const U = (n(345), Object(a.a)(D, (function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('main', { staticClass: 'page' }, [t._t('top'), t._v(' '), n('Content', { staticClass: 'theme-default-content' }), t._v(' '), n('PageEdit'), t._v(' '), n('PageNav', t._b({}, 'PageNav', { sidebarItems: t.sidebarItems }, !1)), t._v(' '), t._t('bottom')], 2); }), [], !1, null, null, null).exports); const H = { name: 'Sidebar', components: { SidebarLinks: n(326).default, NavLinks: C }, props: ['items'] }; const W = (n(349), {
      name: 'Layout',
      components: {
        Home: u, Page: U, Sidebar: Object(a.a)(H, (function () { const t = this.$createElement; const e = this._self._c || t; return e('aside', { staticClass: 'sidebar' }, [e('NavLinks'), this._v(' '), this._t('top'), this._v(' '), e('SidebarLinks', { attrs: { depth: 0, items: this.items } }), this._v(' '), this._t('bottom')], 2); }), [], !1, null, null, null).exports, Navbar: L,
      },
      data() { return { isSidebarOpen: !1 }; },
      computed: {
        shouldShowNavbar() { const t = this.$site.themeConfig; return !1 !== this.$page.frontmatter.navbar && !1 !== t.navbar && (this.$title || t.logo || t.repo || t.nav || this.$themeLocaleConfig.nav); }, shouldShowSidebar() { const t = this.$page.frontmatter; return !t.home && !1 !== t.sidebar && this.sidebarItems.length; }, sidebarItems() { return Object(i.l)(this.$page, this.$page.regularPath, this.$site, this.$localePath); }, pageClasses() { const t = this.$page.frontmatter.pageClass; return [{ 'no-navbar': !this.shouldShowNavbar, 'sidebar-open': this.isSidebarOpen, 'no-sidebar': !this.shouldShowSidebar }, t]; },
      },
      mounted() { const t = this; this.$router.afterEach((() => { t.isSidebarOpen = !1; })); },
      methods: { toggleSidebar(t) { this.isSidebarOpen = typeof t === 'boolean' ? t : !this.isSidebarOpen, this.$emit('toggle-sidebar', this.isSidebarOpen); }, onTouchStart(t) { this.touchStart = { x: t.changedTouches[0].clientX, y: t.changedTouches[0].clientY }; }, onTouchEnd(t) { const e = t.changedTouches[0].clientX - this.touchStart.x; const n = t.changedTouches[0].clientY - this.touchStart.y; Math.abs(e) > Math.abs(n) && Math.abs(e) > 40 && (e > 0 && this.touchStart.x <= 80 ? this.toggleSidebar(!0) : this.toggleSidebar(!1)); } },
    }); const G = Object(a.a)(W, (function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', { staticClass: 'theme-container', class: t.pageClasses, on: { touchstart: t.onTouchStart, touchend: t.onTouchEnd } }, [t.shouldShowNavbar ? n('Navbar', { on: { 'toggle-sidebar': t.toggleSidebar } }) : t._e(), t._v(' '), n('div', { staticClass: 'sidebar-mask', on: { click(e) { return t.toggleSidebar(!1); } } }), t._v(' '), n('Sidebar', { attrs: { items: t.sidebarItems }, on: { 'toggle-sidebar': t.toggleSidebar }, scopedSlots: t._u([{ key: 'top', fn() { return [t._t('sidebar-top')]; }, proxy: !0 }, { key: 'bottom', fn() { return [t._t('sidebar-bottom')]; }, proxy: !0 }], null, !0) }), t._v(' '), t.$page.frontmatter.home ? n('Home') : n('Page', { attrs: { 'sidebar-items': t.sidebarItems }, scopedSlots: t._u([{ key: 'top', fn() { return [t._t('page-top')]; }, proxy: !0 }, { key: 'bottom', fn() { return [t._t('page-bottom')]; }, proxy: !0 }], null, !0) })], 1); }), [], !1, null, null, null); e.default = G.exports;
  },
}]);
