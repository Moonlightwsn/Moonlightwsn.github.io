import {
  a4 as e,
  a5 as t,
  a6 as a,
  a7 as r,
  a8 as s,
  a9 as o,
  aa as n,
  ab as c,
  ac as l,
  ad as i,
  ae as d,
  af as u,
  ag as p,
  ah as f,
  ai as m,
  aj as x,
  ak as h,
  al as _,
  am as g,
  an as v,
  ao as E,
  ap as b,
  aq as y,
  ar as w,
  as as S,
  at as k,
  au as C,
  av as U,
  aw as R,
  ax as j,
  ay as T,
  az as N,
  aA as A,
  aB as O,
  aC as z,
  aD as H,
  aE as P,
  aF as F,
  aG as K,
  aH as D,
  aI as q,
  aJ as I,
  aK as L,
  d as W,
  H as G,
  C as M,
  P as Q,
  L as B,
  c as J,
  w as V,
  r as $,
  M as X,
  a as Y,
  b as Z,
  e as ee,
  v as te,
  E as ae,
  A as re,
  N as se,
  O as oe,
  Q as ne,
  t as ce,
  F as le,
  y as ie,
  T as de,
  aL as ue,
  G as pe,
  aM as fe,
  D as me,
  _ as xe,
} from './index-DHS_FSaD.js';
import { _ as he } from './GradientText.vue_vue_type_script_setup_true_lang.BumBaNTl.js';
import { _ as _e } from './PyTitle.xM0f2QSD.js';
import { u as ge } from './useRouteState.yLAYoRZd.js';
import { u as ve } from './usePageOptions.BWCXMlUM.js';
import './index.BwehUw5u.js';
import './commonjsHelpers.lGe4XDVY.js';
const Ee = (e, t) => {
  let a = D;
  return function (...r) {
    const s = e.bind(this, ...r),
      o = j(t) ? t : t(...r);
    a && H(a), o > 0 ? (a = b(s, o)) : s();
  };
};
var be, ye;
((ye = be || (be = {}))[(ye.USE_REQUEST = 1)] = 'USE_REQUEST'),
  (ye[(ye.USE_WATCHER = 2)] = 'USE_WATCHER'),
  (ye[(ye.USE_FETCHER = 3)] = 'USE_FETCHER');
const we = s('useRequest'),
  Se = s('useWatcher'),
  ke = s('useFetcher'),
  Ce = (e) =>
    ({ [be.USE_REQUEST]: we, [be.USE_WATCHER]: Se, [be.USE_FETCHER]: ke }[e]),
  Ue = 'success',
  Re = 'error',
  je = 'complete';
class Te {
  constructor(e, t) {
    (this.method = e), (this.args = t);
  }
  clone() {
    return { ...this };
  }
  static spawn(e, t) {
    return w(Te, e, t);
  }
}
class Ne extends Te {
  constructor(e, t, a) {
    super(e.method, e.args), (this.data = t), (this.fromCache = a);
  }
}
class Ae extends Te {
  constructor(e, t) {
    super(e.method, e.args), (this.error = t);
  }
}
class Oe extends Te {
  constructor(e, t, a, r, s) {
    super(e.method, e.args),
      (this.status = t),
      (this.data = a),
      (this.fromCache = 'error' !== t && r),
      (this.error = s);
  }
}
const ze = (e, t) => t(),
  He = {};
function Pe(a, s, n = []) {
  const i = Ce(a.ht);
  let d = r(s, i, n);
  const { fs: f, ht: m, c: x } = a,
    { loading: h, data: _, error: v } = f,
    E = m === be.USE_FETCHER,
    { force: b = t, middleware: S = ze } = x,
    k = o(d),
    { id: C } = k,
    U = c(d),
    { abortLast: R = e } = x,
    j = !a.m;
  return (
    (a.m = d),
    (async () => {
      let r = F,
        o = t,
        c = N(u),
        k = F,
        T = F;
      const z = await A(d);
      let H = () => !!z,
        D = t;
      E ||
        (((e, t, a) => {
          const r = (He[e] = He[e] || {});
          r[t] || (r[t] = w(Set)), r[t].add(a);
        })(C, U, a),
        (r = () =>
          ((e, t, a) => {
            const r = He[e],
              s = r[t];
            r && s && (a ? s.delete(a) : s.clear(), 0 === s.size && K(r, t));
          })(C, U, a)));
      const q = (s) => {
          o = e;
          const { force: l = b, method: i = d } = s || {},
            u = p(l, [w(Te, d, n)]),
            m =
              (e) =>
              ({ loaded: t, total: a }) => {
                f[e].v = { loaded: t, total: a };
              };
          (d = i), (a.rf[U] = r), D || (h.v = !!u || !z);
          const { downloading: x, uploading: _ } = a.ro.trackedKeys;
          return (
            (k = x ? d.onDownload(m('downloading')) : k),
            (T = _ ? d.onUpload(m('uploading')) : T),
            (c = d.send(u)),
            (H = () => d.fromCache || t),
            c
          );
        },
        I = { method: d, cachedResponse: z, config: x, abort: () => d.abort() },
        L = () => m !== be.USE_WATCHER || !R || a.m === d,
        W = (a = e) => {
          a && j && (h.v = t), (D = a);
        },
        G = S(
          E
            ? {
                ...I,
                args: n,
                fetch: (e, ...t) => (
                  ((e, t) => {
                    e(l(t, P), 'expected a method instance.');
                  })(i, e),
                  Pe(a, e, t)
                ),
                proxyStates: O(f, 'data'),
                controlLoading: W,
              }
            : {
                ...I,
                args: n,
                send: (...e) => Pe(a, s, e),
                proxyStates: f,
                controlLoading: W,
              },
          q
        );
      let M = u;
      const Q = Te.spawn(d, n);
      try {
        const e = await G,
          r = (e) => (
            E
              ? a.c.updateState !== t &&
                g(
                  ((e, t) => {
                    const a = He[e] || {};
                    return a[t] ? Array.from(a[t]) : [];
                  })(C, U),
                  (t) => {
                    t.fs.data.v = e;
                  }
                )
              : L() && (_.v = e),
            L() &&
              ((v.v = u),
              !D && (h.v = t),
              a.em.emit(Ue, w(Ne, Q, e, H())),
              a.em.emit(je, w(Oe, Q, Ue, e, H(), u))),
            e
          );
        (M = e !== u ? r(e) : o ? await y(c, r, () => r(u)) : u),
          !o && !D && (h.v = t);
      } catch (B) {
        throw (
          (L() &&
            ((v.v = B),
            !D && (h.v = t),
            a.em.emit(Re, w(Ae, Q, B)),
            a.em.emit(je, w(Oe, Q, Re, u, H(), B))),
          B)
        );
      }
      return k(), T(), M;
    })()
  );
}
const Fe = (e) => e.current;
function Ke(s, N, A, O, H = t, P, D = 0) {
  var W;
  A = { ...A };
  let G = !!H,
    M = u;
  if (H)
    try {
      const e = r(N, Ce(s)),
        a = o(e),
        u = a.l1Cache.get(n(a.id, c(e)));
      if (u && !l(u, i)) {
        const [e, t] = u;
        (!t || t > d()) && (M = e);
      }
      G = !!p(null !== (W = A.force) && void 0 !== W ? W : t) || !M;
    } catch (he) {}
  const {
      create: Q,
      effectRequest: B,
      ref: J,
      objectify: V,
      exposeProvider: $,
      transformState2Proxy: X,
      __referingObj: Y,
    } = (function (
      r,
      s = { trackedKeys: {}, bindError: t, initialRequest: t, ...f() }
    ) {
      const o = (e) => (r.ref ? r.ref(e) : { current: e });
      s = o(s).current;
      const n = (e) => (r.export || q)(e, s),
        c = (t) => {
          if (!x(r.memorize)) return t;
          const a = r.memorize(t);
          return (a.memorized = e), a;
        },
        { dehydrate: i } = r,
        d = (e, t, a) =>
          e !== i(t, a, s) && s.trackedKeys[a] && r.update(e, t, a, s),
        u = (e) => U(e, (e) => (l(e, R) ? e.e : e)),
        p = [],
        m = {};
      return {
        create: (e, t) => (
          C(p, t),
          w(
            S,
            r.create(e, t, s),
            t,
            (e) => i(e, t, s),
            n,
            (e, a) => d(a, e, t)
          )
        ),
        computed: (t, a, o) => (
          g(a, (t) => {
            t.k && (m[t.k] = e);
          }),
          w(R, r.computed(t, u(a), o, s), o, (e) => i(e, o, s), n)
        ),
        effectRequest: (e) => r.effectRequest(e, s),
        ref: o,
        watch: (e, t) => r.watch(u(e), t, s),
        onMounted: (e) => r.onMounted(e, s),
        onUnmounted: (e) => r.onUnmounted(e, s),
        memorize: c,
        __referingObj: s,
        exposeProvider: (r) => {
          const o = {},
            n = {},
            i = [];
          for (const t in r) {
            const a = r[t];
            if (x(a) && !s.trackedKeys[t])
              o[t] = t.startsWith('on')
                ? (...e) => (a(...e), v)
                : a.memorized
                ? a
                : c(a);
            else {
              k(['uploading', 'downloading'], t) ||
                t.startsWith('__') ||
                C(i, t);
              const r = l(a, R);
              r && (n[t] = a.s),
                I.defineProperty(o, t, {
                  get: () => ((s.trackedKeys[t] = e), r ? a.e : a),
                  set: F,
                  enumerable: e,
                  configurable: e,
                });
            }
          }
          const { update: u, __proxyState: f } = o;
          (s.trackedKeys = { ...m }), (s.bindError = t);
          const { then: h } = o,
            _ = {
              __referingObj: s,
              update: c((e) => {
                z(e).forEach((t) => {
                  k(p, t)
                    ? d(e[t], n[t], t)
                    : t in o && x(u) && u({ [t]: e[t] });
                });
              }),
              __proxyState: c((t) =>
                k(p, t) && l(r[t], R) ? ((s.trackedKeys[t] = e), r[t]) : f(t)
              ),
              then(t, a) {
                g(i, (t) => {
                  s.trackedKeys[t] = e;
                });
                const r = () => {
                  K(v, 'then'), t(v);
                };
                x(h) ? h(r, a) : r();
              },
            },
            v = a(o, _);
          return v;
        },
        objectify: (e, t) =>
          e.reduce((e, a) => ((e[a.k] = t ? a[t] : a), e), {}),
        transformState2Proxy: (e, t) =>
          w(
            S,
            e,
            t,
            (e) => i(e, t, s),
            n,
            (e, a) => d(a, e, t)
          ),
      };
    })(m(), A.__referingObj),
    Z = { total: 0, loaded: 0 },
    { managedStates: ee = {} } = A,
    te = ((e, t) => {
      const a = {};
      for (const r in e) a[r] = t(e[r], r, e);
      return a;
    })(ee, (e, t) => X(e, t)),
    ae = Q(null != M ? M : x(O) ? O() : O, 'data'),
    re = Q(G, 'loading'),
    se = Q(u, 'error'),
    oe = Q({ ...Z }, 'downloading'),
    ne = Q({ ...Z }, 'uploading'),
    ce = V([ae, re, se, oe, ne]),
    le = h(),
    ie = Fe(
      J(
        ((e, t, a, r) => ({
          m: u,
          rf: {},
          fs: {},
          em: a,
          ht: e,
          c: t,
          ro: r,
          ms: {},
        }))(s, A, le, Y)
      )
    );
  (ie.fs = ce), (ie.em = le), (ie.c = A), (ie.ms = { ...ce, ...te });
  const de = (e = N, t) => Pe(ie, e, t),
    ue = J(u),
    pe = J(t),
    fe = Fe(J(_())),
    me = (t = Y, a) => {
      fe(() => {
        (T.ssr && !Fe(ue)) ||
          ((Y.initialRequest = pe.current = e),
          y(
            de(a),
            () => {
              var e;
              null === (e = Fe(ue)) || void 0 === e || e.resolve();
            },
            (e) => {
              var a;
              if (!t.bindError && !t.trackedKeys.error && !Fe(ue)) throw e;
              null === (a = Fe(ue)) || void 0 === a || a.reject(e);
            }
          ));
      });
    };
  J(
    Ee(
      (e, t, a) => me(t, a),
      (e) => (j(e) ? (L(D) ? D[e] : D) : 0)
    )
  ),
    B({
      handler: () => me(Y),
      removeStates: () => {
        g(v(ie.rf), (e) => e());
      },
      frontStates: { ...ce, ...te },
      watchingStates: P,
      immediate: null != H ? H : e,
    });
  const xe = $({
    ...V([ae, re, se, oe, ne]),
    abort: () => ie.m && ie.m.abort(),
    send: (e, t) => de(t, e),
    onSuccess(e) {
      le.on(Ue, e);
    },
    onError(t) {
      (Y.bindError = e), le.on(Re, t);
    },
    onComplete(e) {
      le.on(je, e);
    },
    then(e, t) {
      const { promise: a, resolve: r, reject: s } = E();
      (ue.current = { resolve: r, reject: s }),
        b(() => {
          !pe.current && r();
        }, 10),
        y(
          a,
          () => {
            e(xe);
          },
          t
        );
    },
  });
  return xe;
}
var De, qe, Ie, Le;
((qe = De || (De = {}))[(qe.CONNECTING = 0)] = 'CONNECTING'),
  (qe[(qe.OPEN = 1)] = 'OPEN'),
  (qe[(qe.CLOSED = 2)] = 'CLOSED'),
  ((Le = Ie || (Ie = {})).Open = 'open'),
  (Le.Error = 'error'),
  (Le.Message = 'message'),
  (Le.Close = 'close');
const We = xe(
  W({
    __name: 'result',
    setup(t) {
      const r = G(),
        s = ge(),
        o = M(),
        { data: n, send: c } = (function (t, r = {}) {
          const { immediate: s = e, initialData: o } = r,
            n = Ke(be.USE_REQUEST, t, r, o, !!s),
            { send: c } = n;
          return a(n, { send: (...e) => c(e) });
        })(Q.app.getActivity, { immediate: !1 });
      function l() {
        r.replaceAll({ name: 'profit' });
      }
      ve(async (e) => {
        const { id: t, pageUUID: a } = e || {},
          r = Number.parseInt(t, 10);
        t &&
          !Number.isNaN(r) &&
          (a && (o.value = s.withdrawRouteState(a)), c({ params: { id: r } }));
      });
      const i = M(),
        d = M(0),
        u = M([0]);
      function p() {
        'number' == typeof i.value && (d.value = i.value);
      }
      function f() {
        d.value = 0;
      }
      function m() {
        ('miniprogram' === window.__wxjs_environment ||
          /micromessenger/i.test(window.navigator.userAgent)) &&
          me({
            icon: 'error',
            title: '微信内可以长按二维码来保存图片哦！',
            duration: 6e3,
          });
        const e = document.createElement('a');
        (e.download = '场印.png'),
          (e.href = fe),
          document.body.append(e),
          e.click(),
          e.remove();
      }
      return (
        B(() => {
          const e = X().windowHeight;
          (i.value = 1 * e), (u.value = [0, i.value]);
        }),
        (e, t) => {
          const a = te,
            s = _e,
            c = ae,
            i = he,
            x = ee,
            h = le,
            _ = pe,
            g = de,
            v = $('layout-default-uni');
          return (
            Y(),
            J(v, null, {
              default: V(() => [
                Z(
                  x,
                  {
                    class:
                      'p-64rpx bg-#f5f5f5 flex h-screen w-screen flex-col items-center justify-center',
                  },
                  {
                    default: V(() => [
                      Z(
                        x,
                        {
                          class:
                            'result-card bg-#fff rounded-24rpx py-64rpx px-32rpx gap-16rpx flex w-full flex-col items-center',
                        },
                        {
                          default: V(() => [
                            Z(a, {
                              name: 'check-outline',
                              size: '148rpx',
                              color: '#34d19d',
                            }),
                            Z(
                              x,
                              { class: 'gap-2rpx flex flex-col items-center' },
                              {
                                default: V(() => {
                                  var e, t;
                                  return [
                                    Z(s, { text: '恭喜您！' }),
                                    Z(
                                      c,
                                      {
                                        text: `已成功参加“${
                                          (null ==
                                          (t =
                                            null == (e = re(n))
                                              ? void 0
                                              : e.data)
                                            ? void 0
                                            : t.name) || ''
                                        }”活动`,
                                      },
                                      null,
                                      8,
                                      ['text']
                                    ),
                                    Z(
                                      x,
                                      {
                                        class: 'gap-4rpx mt-4rpx flex flex-col',
                                      },
                                      {
                                        default: V(() => {
                                          var e;
                                          return [
                                            (Y(!0),
                                            se(
                                              oe,
                                              null,
                                              ne(
                                                (
                                                  (null == (e = re(o))
                                                    ? void 0
                                                    : e.succeedProducts) || []
                                                ).filter(
                                                  (e) =>
                                                    e.id &&
                                                    2 ===
                                                      Number(e.productSpuType)
                                                ),
                                                (e) => (
                                                  Y(),
                                                  J(
                                                    x,
                                                    {
                                                      key: e.id,
                                                      class:
                                                        'bg-#FF6A001A rounded-96rpx py-4rpx px-12rpx',
                                                      onClick: (t) => {
                                                        return (
                                                          (a = e.id),
                                                          void r.push({
                                                            name: 'profitDetail',
                                                            params: {
                                                              id: String(a),
                                                            },
                                                          })
                                                        );
                                                        var a;
                                                      },
                                                    },
                                                    {
                                                      default: V(() => [
                                                        Z(
                                                          i,
                                                          {
                                                            'custom-class':
                                                              'text-24rpx leading-28rpx',
                                                            text: e.productSpuName,
                                                          },
                                                          null,
                                                          8,
                                                          ['text']
                                                        ),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1032,
                                                    ['onClick']
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ];
                                        }),
                                        _: 1,
                                      }
                                    ),
                                  ];
                                }),
                                _: 1,
                              }
                            ),
                            Z(
                              x,
                              {
                                class:
                                  'gap-24rpx px-24rpx mt-48rpx flex w-full flex-col',
                              },
                              {
                                default: V(() => {
                                  var e, t;
                                  return [
                                    (
                                      (null ==
                                      (t =
                                        null == (e = re(n)) ? void 0 : e.data)
                                        ? void 0
                                        : t.issueVoucher) || []
                                    ).length > 0
                                      ? (Y(),
                                        J(
                                          h,
                                          { key: 0, block: '', onClick: l },
                                          {
                                            default: V(() => [
                                              ie(' 查看我的权益 '),
                                            ]),
                                            _: 1,
                                          }
                                        ))
                                      : ce('', !0),
                                    Z(
                                      h,
                                      {
                                        block: '',
                                        plain: '',
                                        onClick: re(r).back,
                                      },
                                      {
                                        default: V(() => [ie('返回活动详情')]),
                                        _: 1,
                                      },
                                      8,
                                      ['onClick']
                                    ),
                                  ];
                                }),
                                _: 1,
                              }
                            ),
                            Z(
                              x,
                              { class: 'mt-24rpx' },
                              {
                                default: V(() => [
                                  Z(
                                    x,
                                    { class: 'text-24rpx text-#545454' },
                                    {
                                      default: V(() => [
                                        ie(' 提示：为方便下次使用，请及时 '),
                                        Z(c, {
                                          'custom-class': 'mx-4rpx',
                                          text: '[点我保存]',
                                          color: 'var(--wot-color-theme)',
                                          onClick: p,
                                        }),
                                        ie(' 网站 '),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      Z(
                        g,
                        {
                          'custom-class': '!z-999 bg-black rounded-none',
                          height: re(d),
                          'onUpdate:height':
                            t[0] ||
                            (t[0] = (e) => (ue(d) ? (d.value = e) : null)),
                          anchors: re(u),
                          'safe-area-inset-bottom': '',
                        },
                        {
                          default: V(() => [
                            Z(
                              x,
                              {
                                class:
                                  'gap-24rpx relative flex h-full w-full flex-col items-center',
                              },
                              {
                                default: V(() => [
                                  Z(
                                    x,
                                    { class: 'h-1062rpx w-750rpx relative' },
                                    {
                                      default: V(() => [
                                        Z(
                                          _,
                                          {
                                            src: re(fe),
                                            width: '100%',
                                            height: '100%',
                                          },
                                          null,
                                          8,
                                          ['src']
                                        ),
                                        Z(
                                          x,
                                          {
                                            class:
                                              'top-18rpx min-w-560rpx border-2rpx border-#ffffff66 rounded-32rpx py-4rpx px-24rpx bg-[rgba(241, 249, 255, 0.05)] absolute left-1/2 translate-x-[-50%] shadow-[0_4px_24rpx_0_rgba(0,0,0,0.08)]',
                                          },
                                          {
                                            default: V(() => [
                                              Z(c, {
                                                'custom-class': ' text-center ',
                                                text: '手机截图保存本页面，或点击“保存至相册”',
                                                size: '26rpx',
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                  Z(
                                    x,
                                    {
                                      class:
                                        'gap-24rpx bottom-24rpx sticky flex',
                                    },
                                    {
                                      default: V(() => [
                                        Z(
                                          h,
                                          { onClick: m },
                                          {
                                            default: V(() => [
                                              ie('保存至相册'),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        Z(
                                          h,
                                          { type: 'info', onClick: f },
                                          {
                                            default: V(() => [ie(' 取消 ')]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['height', 'anchors']
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            })
          );
        }
      );
    },
  }),
  [['__scopeId', 'data-v-003882e7']]
);
export { We as default };
