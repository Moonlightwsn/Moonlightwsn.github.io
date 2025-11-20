import {
  m as e,
  f as t,
  g as s,
  d as a,
  u as l,
  c as i,
  a as n,
  e as r,
  n as o,
  h as u,
  w as c,
  j as d,
  _ as p,
  k as f,
  l as v,
  p as _,
  q as m,
  s as x,
  t as y,
  b as g,
  v as w,
  x as b,
  y as h,
  z as $,
  A as k,
  H as j,
  B as S,
  C,
  r as I,
  D as B,
  P as D,
  E as N,
  F as z,
  G as T,
  I as A,
  J as F,
} from './index-DHS_FSaD.js';
import { _ as U } from './BannerView.vue_vue_type_script_setup_true_lang.D5Aj_wyr.js';
import { _ as Y, a as G } from './wd-tab.Cl1aA3jW.js';
import { _ as H } from './Descriptions.vue_vue_type_script_setup_true_lang.BSu0njEX.js';
import { _ as L } from './PyTitle.xM0f2QSD.js';
import { u as P } from './useRouteState.yLAYoRZd.js';
import { u as R } from './usePageOptions.BWCXMlUM.js';
import { u as E } from './useLocation.BrH82ewt.js';
import { f as M } from './index.BwehUw5u.js';
import './wd-col.s3IDczvP.js';
import './commonjsHelpers.lGe4XDVY.js';
const q = {
    ...s,
    active: t(0),
    vertical: e(!1),
    dot: e(!1),
    space: String,
    alignCenter: e(!1),
  },
  J = Symbol('wd-steps'),
  O = p(
    a({
      name: 'wd-steps',
      options: {
        addGlobalClass: !0,
        virtualHost: !0,
        styleIsolation: 'shared',
      },
      props: q,
      setup(e) {
        const t = e,
          { linkChildren: s } = l(J);
        return (
          s({ props: t }),
          (e, t) => {
            const s = r;
            return (
              n(),
              i(
                s,
                {
                  class: u(
                    `wd-steps ${e.customClass} ${
                      e.vertical ? 'is-vertical' : ''
                    }`
                  ),
                  style: o(e.customStyle),
                },
                {
                  default: c(() => [d(e.$slots, 'default', {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ['class', 'style']
              )
            );
          }
        );
      },
    }),
    [['__scopeId', 'data-v-fdf5188c']]
  ),
  V = p(
    a({
      name: 'wd-step',
      options: {
        addGlobalClass: !0,
        virtualHost: !0,
        styleIsolation: 'shared',
      },
      props: {
        ...s,
        title: String,
        description: String,
        icon: String,
        status: String,
      },
      setup(e) {
        const t = e,
          { parent: s, index: a } = f(J),
          { translate: l } = v('steps'),
          p = _(() =>
            (function (e) {
              if (t.status) return t.status;
              if (s) {
                const { active: t } = s.props;
                return Number(t) > e
                  ? 'finished'
                  : Number(t) === e
                  ? 'process'
                  : 'wait';
              }
              return 'wait';
            })(a.value)
          ),
          j = _(() =>
            (function (e) {
              if (t.title) return t.title;
              switch (e) {
                case 'finished':
                  return l('finished');
                case 'error':
                  return l('failed');
                case 'process':
                  return l('process');
                default:
                  return l('wait');
              }
            })(p.value)
          ),
          S = _(() => {
            const e = {};
            if (s) {
              const { vertical: t, space: a } = s.props;
              t
                ? x(a) && (e.height = a)
                : (e.width = a || 100 / s.children.length + '%');
            }
            return `${m(e)}${t.customStyle}`;
          }),
          C = _(() => {
            if (x(s)) {
              const { vertical: e, alignCenter: t } = s.props;
              return Boolean(!e && t);
            }
            return !1;
          }),
          I = _(() => !!x(s) && Boolean(s.props.vertical)),
          B = _(() => !!x(s) && Boolean(s.props.dot)),
          D = _(() => (x(s) ? Number(s.children.length) : 0));
        return (e, t) => {
          const s = r,
            l = b;
          return p.value
            ? (n(),
              i(
                s,
                {
                  key: 0,
                  class: u(
                    `wd-step ${e.customClass} ${
                      p.value ? 'is-' + p.value : ''
                    } ${C.value ? 'is-center' : ''}  ${
                      I.value ? 'is-vertical' : ''
                    }`
                  ),
                  style: o(S.value),
                },
                {
                  default: c(() => [
                    g(
                      s,
                      {
                        class: u(
                          'wd-step__header  ' + (B.value ? 'is-dot' : '')
                        ),
                      },
                      {
                        default: c(() => [
                          g(
                            s,
                            {
                              class: u(
                                'wd-step__icon  ' +
                                  (B.value
                                    ? 'is-dot'
                                    : e.icon || e.$slots.icon
                                    ? 'is-icon'
                                    : 'is-text')
                              ),
                            },
                            {
                              default: c(() => [
                                B.value
                                  ? (n(),
                                    i(s, { key: 0, class: 'wd-step__dot' }))
                                  : e.$slots.icon
                                  ? d(e.$slots, 'icon', { key: 1 }, void 0, !0)
                                  : e.icon
                                  ? (n(),
                                    i(
                                      w,
                                      {
                                        key: 2,
                                        'custom-class': 'wd-step__icon-inner',
                                        name: e.icon,
                                      },
                                      null,
                                      8,
                                      ['name']
                                    ))
                                  : (n(),
                                    i(
                                      s,
                                      { key: 3, class: 'wd-step__icon-outer' },
                                      {
                                        default: c(() => [
                                          'finished' === p.value
                                            ? (n(),
                                              i(w, {
                                                key: 0,
                                                name: 'check-bold',
                                              }))
                                            : 'error' === p.value
                                            ? (n(),
                                              i(w, {
                                                key: 1,
                                                name: 'close-bold',
                                              }))
                                            : (n(),
                                              i(
                                                l,
                                                { key: 2 },
                                                {
                                                  default: c(() => [
                                                    h($(k(a) + 1), 1),
                                                  ]),
                                                  _: 1,
                                                }
                                              )),
                                        ]),
                                        _: 1,
                                      }
                                    )),
                              ]),
                              _: 3,
                            },
                            8,
                            ['class']
                          ),
                          k(a) < D.value - 1
                            ? (n(), i(s, { key: 0, class: 'wd-step__line' }))
                            : y('', !0),
                        ]),
                        _: 3,
                      },
                      8,
                      ['class']
                    ),
                    g(
                      s,
                      { class: 'wd-step__content' },
                      {
                        default: c(() => [
                          g(
                            s,
                            {
                              class: u(
                                'wd-step__title ' +
                                  (e.$slots.description || e.description
                                    ? 'is-description'
                                    : '')
                              ),
                            },
                            {
                              default: c(() => [
                                e.$slots.title
                                  ? d(e.$slots, 'title', { key: 0 }, void 0, !0)
                                  : (n(),
                                    i(
                                      l,
                                      { key: 1 },
                                      {
                                        default: c(() => [h($(j.value), 1)]),
                                        _: 1,
                                      }
                                    )),
                              ]),
                              _: 3,
                            },
                            8,
                            ['class']
                          ),
                          e.$slots.description || e.description
                            ? (n(),
                              i(
                                s,
                                { key: 0, class: 'wd-step__description' },
                                {
                                  default: c(() => [
                                    e.$slots.description
                                      ? d(
                                          e.$slots,
                                          'description',
                                          { key: 0 },
                                          void 0,
                                          !0
                                        )
                                      : (n(),
                                        i(
                                          l,
                                          { key: 1 },
                                          {
                                            default: c(() => [
                                              h($(e.description), 1),
                                            ]),
                                            _: 1,
                                          }
                                        )),
                                  ]),
                                  _: 3,
                                }
                              ))
                            : y('', !0),
                        ]),
                        _: 3,
                      }
                    ),
                  ]),
                  _: 3,
                },
                8,
                ['class', 'style']
              ))
            : y('', !0);
        };
      },
    }),
    [['__scopeId', 'data-v-b36f9026']]
  ),
  K = 'YYYY年MM月DD日',
  Q = p(
    a({
      __name: 'attendance',
      setup(e) {
        const t = j(),
          s = P(),
          { confirm: a } = S(),
          l = C(null),
          o = C('');
        R(async (e) => {
          if (null == e ? void 0 : e.id)
            try {
              const { id: t } = e,
                s = Number.parseInt(t, 10);
              if (Number.isNaN(s))
                return void B({ icon: 'error', title: '无效的活动ID' });
              const a = await D.app.getActivity({ params: { id: s } });
              (null == a ? void 0 : a.data)
                ? ((l.value = a.data),
                  (o.value = `${M(l.value.startTime, K)} - ${M(
                    l.value.endTime,
                    K
                  )}`))
                : ((l.value = null), B({ title: '没有获取到权益详情' }));
            } catch (t) {
              console.error('获取活动详情失败:', t),
                B({ icon: 'error', title: '获取活动详情失败，请稍后重试' });
            }
        });
        const { latitude: u, longitude: d, loading: p, update: f } = E(),
          v = _(() =>
            p.value
              ? '正在获取定位...'
              : 'number' == typeof u.value && 'number' == typeof d.value
              ? `纬度：${u.value.toFixed(6)}, 经度：${d.value.toFixed(6)}`
              : '请获取位置信息'
          ),
          m = (e = !1, t) => f({ toast: e, forceUpdate: t }),
          x = async () => {
            var e;
            const i =
              null == (e = null == l ? void 0 : l.value) ? void 0 : e.id;
            if (!i) return void B({ icon: 'error', title: '获取活动信息失败' });
            if ((await m(!0, !0), null === u.value || null === d.value))
              return void setTimeout(() => {
                B({ icon: 'error', title: '成功获取位置信息后才可以线上签到' });
              }, 2e3);
            A({ title: '签到提交中...' });
            const n = await D.app
              .createActivityAttendance({
                data: {
                  activityId: i,
                  locationLatitude: u.value.toString(),
                  locationLongitude: d.value.toString(),
                },
              })
              .catch((e) => {
                1008005009 === (null == e ? void 0 : e.code) &&
                  a({
                    title: '数字身份保护说明',
                    msg: '你的账号里数字资产（数根、权益）已经超出安全范围啦。为了保护好这些资产，需要先领取实名数字身份，之后就能顺利参加活动、获取新的数根和权益啦～',
                    cancelButtonText: '放弃',
                    confirmButtonText: '领取数字身份',
                    success() {
                      t.push({ name: 'digitalIdCard' });
                    },
                  });
              })
              .finally(() => {
                F();
              });
            0 === (null == n ? void 0 : n.code) &&
              (null == n ? void 0 : n.data) &&
              (B({ icon: 'success', title: '提交签到成功' }),
              (function (e, a) {
                const l = s.depositRouteState(a);
                t.replace({
                  name: 'activityResult',
                  params: { id: String(e), pageUUID: l },
                });
              })(i, n.data));
          };
        return (e, t) => {
          const s = T,
            a = L,
            u = r,
            d = w,
            p = N,
            f = H,
            _ = G,
            j = Y,
            S = V,
            C = O,
            B = b,
            D = z,
            A = U,
            F = I('layout-default-uni');
          return (
            n(),
            i(F, null, {
              default: c(() => [
                g(
                  A,
                  { 'custom-class': 'pb-154rpx' },
                  {
                    header: c(() => {
                      var e;
                      return [
                        (null == (e = l.value) ? void 0 : e.picUrl)
                          ? (n(),
                            i(
                              s,
                              {
                                key: 0,
                                src: l.value.picUrl,
                                width: '100%',
                                height: '364rpx',
                                mode: 'aspectFill',
                              },
                              null,
                              8,
                              ['src']
                            ))
                          : y('', !0),
                      ];
                    }),
                    default: c(() => [
                      g(
                        u,
                        { class: 'pt-10rpx px-30rpx h-full w-full bg-white' },
                        {
                          default: c(() => [
                            g(
                              u,
                              { class: 'activity-info' },
                              {
                                default: c(() => {
                                  var e;
                                  return [
                                    g(
                                      u,
                                      {
                                        class:
                                          'mb-16rpx gap-20rpx flex items-center justify-between',
                                      },
                                      {
                                        default: c(() => {
                                          var e;
                                          return [
                                            g(
                                              a,
                                              {
                                                text:
                                                  (null == (e = l.value)
                                                    ? void 0
                                                    : e.name) || '',
                                              },
                                              null,
                                              8,
                                              ['text']
                                            ),
                                            g(
                                              u,
                                              {
                                                class:
                                                  'px-16rpx py-8rpx text-28rpx rounded-full bg-blue-50 text-blue-400',
                                              },
                                              {
                                                default: c(() => [
                                                  h(' 进行中 '),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                          ];
                                        }),
                                        _: 1,
                                      }
                                    ),
                                    g(
                                      f,
                                      {
                                        data: [
                                          {
                                            label: '活动地址：',
                                            icon: 'location',
                                            value:
                                              null == (e = l.value)
                                                ? void 0
                                                : e.address,
                                          },
                                          {
                                            label: '活动时间：',
                                            icon: 'time',
                                            value: o.value,
                                          },
                                        ],
                                        'label-span': 10,
                                        'value-span': 14,
                                      },
                                      {
                                        label: c(({ item: e }) => [
                                          g(
                                            u,
                                            {
                                              class:
                                                'gap-20rpx inline-flex items-center',
                                            },
                                            {
                                              default: c(() => [
                                                g(
                                                  u,
                                                  {
                                                    class:
                                                      'w-36rpx h-36rpx inline-flex items-center justify-center',
                                                  },
                                                  {
                                                    default: c(() => [
                                                      g(
                                                        d,
                                                        {
                                                          name: e.icon,
                                                          size:
                                                            'location' ===
                                                            e.icon
                                                              ? '36rpx'
                                                              : '28rpx',
                                                        },
                                                        null,
                                                        8,
                                                        ['name', 'size']
                                                      ),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024
                                                ),
                                                g(
                                                  p,
                                                  { text: e.label },
                                                  null,
                                                  8,
                                                  ['text']
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ['data']
                                    ),
                                    g(
                                      u,
                                      { class: 'sign-step mt-60rpx' },
                                      {
                                        default: c(() => [
                                          g(
                                            u,
                                            { class: 'inline-flex' },
                                            {
                                              default: c(() => [
                                                g(
                                                  j,
                                                  { type: 'long' },
                                                  {
                                                    default: c(() => [
                                                      g(_, {
                                                        title: '签到步骤',
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          g(
                                            C,
                                            {
                                              class: 'mt-40rpx',
                                              active: 2,
                                              vertical: '',
                                              dot: '',
                                            },
                                            {
                                              default: c(() => [
                                                g(S, { title: '获取当前位置' }),
                                                g(S, { title: '提交签到' }),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    g(
                                      u,
                                      { class: 'current-location' },
                                      {
                                        default: c(() => [
                                          g(
                                            u,
                                            { class: 'inline-flex' },
                                            {
                                              default: c(() => [
                                                g(
                                                  j,
                                                  { type: 'long' },
                                                  {
                                                    default: c(() => [
                                                      g(_, {
                                                        title: '当前位置',
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          g(
                                            u,
                                            {
                                              class:
                                                'location-card mt-40rpx py-30rpx px-20rpx flex items-center justify-between rounded-lg bg-gray-100',
                                            },
                                            {
                                              default: c(() => [
                                                g(u, null, {
                                                  default: c(() => [
                                                    g(
                                                      u,
                                                      {
                                                        class:
                                                          'gap-300rpx flex items-center',
                                                      },
                                                      {
                                                        default: c(() => [
                                                          g(u, null, {
                                                            default: c(() => [
                                                              g(d, {
                                                                name: 'location',
                                                                size: '20',
                                                                color:
                                                                  '#60a5fa ',
                                                              }),
                                                              g(
                                                                B,
                                                                {
                                                                  class:
                                                                    'ml-2 font-medium',
                                                                },
                                                                {
                                                                  default: c(
                                                                    () => [
                                                                      h(
                                                                        '位置：'
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _: 1,
                                                                }
                                                              ),
                                                            ]),
                                                            _: 1,
                                                          }),
                                                          g(
                                                            D,
                                                            {
                                                              type: 'text',
                                                              class:
                                                                'text-blue-400',
                                                              onClick:
                                                                t[0] ||
                                                                (t[0] = (e) =>
                                                                  m(!1, !0)),
                                                            },
                                                            {
                                                              default: c(() => [
                                                                g(d, {
                                                                  name: 'refresh1',
                                                                }),
                                                                g(
                                                                  B,
                                                                  {
                                                                    class:
                                                                      'ml-1',
                                                                  },
                                                                  {
                                                                    default: c(
                                                                      () => [
                                                                        h(
                                                                          '重新获取'
                                                                        ),
                                                                      ]
                                                                    ),
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
                                                    g(
                                                      B,
                                                      {
                                                        class: 'text-gray-500',
                                                      },
                                                      {
                                                        default: c(() => [
                                                          h($(k(v)), 1),
                                                        ]),
                                                        _: 1,
                                                      }
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ];
                                }),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      g(
                        u,
                        {
                          class:
                            'py-36rpx px-54rpx z-999 fixed bottom-0 left-0 right-0 bg-white',
                        },
                        {
                          default: c(() => [
                            g(
                              D,
                              { class: 'w-full', onClick: x },
                              { default: c(() => [h(' 提交签到 ')]), _: 1 }
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
            })
          );
        };
      },
    }),
    [['__scopeId', 'data-v-38b3393d']]
  );
export { Q as default };
