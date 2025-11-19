import { _ as e } from './Descriptions.vue_vue_type_script_setup_true_lang.DalXk59w.js';
import { _ as a } from './wd-divider.CBD4btG5.js';
import {
  g as l,
  $ as s,
  m as t,
  f as c,
  d as u,
  l as o,
  C as r,
  a0 as n,
  o as d,
  p as i,
  q as p,
  bc as h,
  c as m,
  a as f,
  e as v,
  n as _,
  h as x,
  w as y,
  b,
  j as w,
  t as g,
  v as k,
  x as C,
  y as j,
  z as V,
  A as D,
  a2 as $,
  _ as F,
  a_ as I,
  B as S,
  bd as E,
  r as z,
  N as A,
  O as L,
  Q as O,
  G as T,
  F as N,
  aO as P,
  be as U,
} from './index-CPSH10gF.js';
import { _ as Y } from './PyTitle.BfA7NzL5.js';
import { u as W, _ as B } from './usePaged.oYVLqR_Z.js';
import { _ as G, a as H } from './wd-tab.BOepz-a_.js';
import { f as M } from './index.BwehUw5u.js';
import './wd-col.CAuQrG6g.js';
import './commonjsHelpers.lGe4XDVY.js';
const q = F(
    u({
      name: 'wd-search',
      options: {
        virtualHost: !0,
        addGlobalClass: !0,
        styleIsolation: 'shared',
      },
      props: {
        ...l,
        customInputClass: s(''),
        modelValue: s(''),
        useSuffixSlot: t(!1),
        placeholder: String,
        cancelTxt: String,
        light: t(!1),
        hideCancel: t(!1),
        disabled: t(!1),
        maxlength: c(-1),
        placeholderLeft: t(!1),
        focus: t(!1),
        focusWhenClear: t(!1),
        placeholderStyle: String,
        placeholderClass: s(''),
      },
      emits: [
        'update:modelValue',
        'change',
        'clear',
        'search',
        'focus',
        'blur',
        'cancel',
      ],
      setup(e, { emit: a }) {
        const l = e,
          s = a,
          { translate: t } = o('search'),
          c = r(!1),
          u = r(!1),
          F = r(''),
          I = r(!0),
          S = r(!1);
        n(
          () => l.modelValue,
          (e) => {
            (F.value = e), e && (u.value = !0);
          },
          { immediate: !0 }
        ),
          n(
            () => l.focus,
            (e) => {
              if (e) {
                if (l.disabled) return;
                L();
              }
            }
          ),
          d(() => {
            l.focus && L();
          });
        const E = i(
            () =>
              `wd-search  ${l.light ? 'is-light' : ''}  ${
                l.hideCancel ? 'is-without-cancel' : ''
              } ${l.customClass}`
          ),
          z = i(() => {
            const e = { display: '' === F.value && I.value ? 'flex' : 'none' };
            return p(e);
          });
        async function A(e) {
          (u.value = e), await h(), (c.value = e);
        }
        async function L() {
          l.disabled || (await h(100), (I.value = !1), A(!0));
        }
        function O(e) {
          (F.value = e.detail.value),
            s('update:modelValue', e.detail.value),
            s('change', { value: e.detail.value });
        }
        async function T() {
          (F.value = ''),
            l.focusWhenClear && ((S.value = !0), (c.value = !1)),
            await h(),
            l.focusWhenClear
              ? ((I.value = !1), A(!0))
              : ((I.value = !0), A(!1)),
            s('change', { value: '' }),
            s('update:modelValue', ''),
            s('clear');
        }
        function N({ detail: { value: e } }) {
          s('search', { value: e });
        }
        function P() {
          (I.value = !1), s('focus', { value: F.value });
        }
        async function U() {
          await h(150),
            S.value
              ? (S.value = !1)
              : ((I.value = !F.value),
                (u.value = !I.value),
                (c.value = !1),
                s('blur', { value: F.value }));
        }
        function Y() {
          s('cancel', { value: F.value });
        }
        return (e, a) => {
          const l = C,
            s = v,
            o = $;
          return (
            f(),
            m(
              s,
              { class: x(E.value), style: _(e.customStyle) },
              {
                default: y(() => [
                  b(
                    s,
                    { class: 'wd-search__block' },
                    {
                      default: y(() => [
                        w(e.$slots, 'prefix', {}, void 0, !0),
                        b(
                          s,
                          { class: 'wd-search__field' },
                          {
                            default: y(() => [
                              e.placeholderLeft
                                ? g('', !0)
                                : (f(),
                                  m(
                                    s,
                                    {
                                      key: 0,
                                      style: _(z.value),
                                      class: 'wd-search__cover',
                                      onClick: L,
                                    },
                                    {
                                      default: y(() => [
                                        b(k, {
                                          name: 'search',
                                          'custom-class':
                                            'wd-search__search-icon',
                                        }),
                                        b(
                                          l,
                                          {
                                            class: x(
                                              `wd-search__placeholder-txt ${e.placeholderClass}`
                                            ),
                                          },
                                          {
                                            default: y(() => [
                                              j(
                                                V(
                                                  e.placeholder ||
                                                    D(t)('search')
                                                ),
                                                1
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ['class']
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ['style']
                                  )),
                              u.value || F.value || e.placeholderLeft
                                ? (f(),
                                  m(k, {
                                    key: 1,
                                    name: 'search',
                                    'custom-class':
                                      'wd-search__search-left-icon',
                                  }))
                                : g('', !0),
                              u.value || F.value || e.placeholderLeft
                                ? (f(),
                                  m(
                                    o,
                                    {
                                      key: 2,
                                      placeholder:
                                        e.placeholder || D(t)('search'),
                                      'placeholder-class': `wd-search__placeholder-txt ${e.placeholderClass}`,
                                      'placeholder-style': e.placeholderStyle,
                                      'confirm-type': 'search',
                                      modelValue: F.value,
                                      'onUpdate:modelValue':
                                        a[0] || (a[0] = (e) => (F.value = e)),
                                      class: x([
                                        'wd-search__input',
                                        e.customInputClass,
                                      ]),
                                      onFocus: P,
                                      onInput: O,
                                      onBlur: U,
                                      onConfirm: N,
                                      disabled: e.disabled,
                                      maxlength: e.maxlength,
                                      focus: c.value,
                                    },
                                    null,
                                    8,
                                    [
                                      'placeholder',
                                      'placeholder-class',
                                      'placeholder-style',
                                      'modelValue',
                                      'class',
                                      'disabled',
                                      'maxlength',
                                      'focus',
                                    ]
                                  ))
                                : g('', !0),
                              F.value
                                ? (f(),
                                  m(k, {
                                    key: 3,
                                    'custom-class':
                                      'wd-search__clear wd-search__clear-icon',
                                    name: 'error-fill',
                                    onClick: T,
                                  }))
                                : g('', !0),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 3,
                    }
                  ),
                  e.hideCancel
                    ? g('', !0)
                    : w(
                        e.$slots,
                        'suffix',
                        { key: 0 },
                        () => [
                          b(
                            s,
                            { class: 'wd-search__cancel', onClick: Y },
                            {
                              default: y(() => [
                                j(V(e.cancelTxt || D(t)('cancel')), 1),
                              ]),
                              _: 1,
                            }
                          ),
                        ],
                        !0
                      ),
                ]),
                _: 3,
              },
              8,
              ['class', 'style']
            )
          );
        };
      },
    }),
    [['__scopeId', 'data-v-7650d631']]
  ),
  Q = F(
    u({
      __name: 'auth',
      setup(l) {
        const s = [
            { key: '999', title: '全部' },
            { key: '1', title: '已授权' },
            { key: '0', title: '未授权' },
          ],
          t = I({ name: '', tab: '999' });
        const { list: c, reload: u } = W(async function (e) {
            const a = await P.app.getAppAuthPage({
                params: {
                  ...e,
                  name: t.name || void 0,
                  status: '999' === t.tab ? void 0 : Number(t.tab),
                },
              }),
              { code: l, data: s } = a || {};
            if (0 !== l || !s) throw new Error('获取数据失败');
            return s;
          }),
          o = U(u, 600);
        n(
          () => t.name,
          (e, a) => {
            e !== a && o();
          }
        ),
          n(
            () => t.tab,
            (e, a) => {
              e !== a && u();
            }
          );
        const { confirm: r } = S(),
          { loading: d, close: i } = E();
        function p(e, a) {
          if (!e) return;
          const l = 0 === a ? 1 : 0;
          r({
            title: '提示',
            msg:
              0 === a
                ? '确认要授权给该商户么？'
                : '确认取消授权？取消后该商户无法再为您发放到场数字存根，可能会影响您后续相关权益领取。',
            success: async () => {
              d('正在更新...'),
                await P.app.updateAppAuthTenant({ data: { id: e, status: l } });
              const a = c.value.findIndex((a) => a.id === e);
              -1 !== a && c.value.splice(a, 1, { ...c.value[a], status: l }),
                i();
            },
          });
        }
        return (l, u) => {
          const o = q,
            r = H,
            n = G,
            d = v,
            i = B,
            h = T,
            _ = Y,
            x = N,
            w = a,
            k = e,
            C = z('layout-default-uni');
          return (
            f(),
            m(C, null, {
              default: y(() => [
                b(
                  d,
                  {
                    class:
                      'tenant-auth pt-54rpx pb-158rpx px-30rpx min-h-screen w-screen bg-white',
                  },
                  {
                    default: y(() => [
                      b(d, null, {
                        default: y(() => [
                          b(
                            o,
                            {
                              'custom-class':
                                'border-#DFE6ED border-solid border-2rpx rounded-100rpx',
                              placeholder: '搜索授权商户',
                              modelValue: D(t).name,
                              'onUpdate:modelValue':
                                u[0] || (u[0] = (e) => (D(t).name = e)),
                              'hide-cancel': '',
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          b(
                            n,
                            {
                              type: 'long',
                              modelValue: D(t).tab,
                              'onUpdate:modelValue':
                                u[1] || (u[1] = (e) => (D(t).tab = e)),
                              class: 'mb-16rpx',
                            },
                            {
                              default: y(() => [
                                (f(),
                                A(
                                  L,
                                  null,
                                  O(s, (e) =>
                                    b(
                                      r,
                                      {
                                        key: e.key,
                                        title: `${e.title}`,
                                        name: e.key,
                                      },
                                      null,
                                      8,
                                      ['title', 'name']
                                    )
                                  ),
                                  64
                                )),
                              ]),
                              _: 1,
                            },
                            8,
                            ['modelValue']
                          ),
                        ]),
                        _: 1,
                      }),
                      0 === D(c).length
                        ? (f(),
                          m(d, { key: 0 }, { default: y(() => [b(i)]), _: 1 }))
                        : g('', !0),
                      (f(!0),
                      A(
                        L,
                        null,
                        O(
                          D(c),
                          (e) => (
                            f(),
                            m(
                              d,
                              {
                                key: e.id,
                                class:
                                  'bg-#EFF2F5 rounded-18rpx py-30rpx px-34rpx mb-20rpx',
                              },
                              {
                                default: y(() => [
                                  b(
                                    d,
                                    { class: 'gap-24rpx flex items-center' },
                                    {
                                      default: y(() => [
                                        b(
                                          h,
                                          {
                                            'custom-class':
                                              'rounded-10rpx overflow-hidden flex-shrink-0',
                                            src: e.authObjectLogoUrl,
                                            width: '80rpx',
                                            height: '80rpx',
                                          },
                                          null,
                                          8,
                                          ['src']
                                        ),
                                        b(
                                          _,
                                          {
                                            text: e.authObjectName,
                                            size: '36rpx',
                                            'line-height': '54rpx',
                                          },
                                          null,
                                          8,
                                          ['text']
                                        ),
                                        b(d, { class: 'flex-grow' }),
                                        0 === e.status
                                          ? (f(),
                                            m(
                                              x,
                                              {
                                                key: 0,
                                                'custom-class': 'flex-shrink-0',
                                                size: 'small',
                                                onClick: (a) =>
                                                  p(e.id, e.status),
                                              },
                                              {
                                                default: y(() => [
                                                  j(' 去授权 '),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ['onClick']
                                            ))
                                          : g('', !0),
                                        1 === e.status
                                          ? (f(),
                                            m(
                                              x,
                                              {
                                                key: 1,
                                                'custom-class': 'flex-shrink-0',
                                                size: 'small',
                                                type: 'error',
                                                plain: '',
                                                onClick: (a) =>
                                                  p(e.id, e.status),
                                              },
                                              {
                                                default: y(() => [
                                                  j(' 取消授权 '),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ['onClick']
                                            ))
                                          : g('', !0),
                                      ]),
                                      _: 2,
                                    },
                                    1024
                                  ),
                                  b(w, {
                                    class: '!my-20rpx !mx-0 !p-0',
                                    dashed: '',
                                    color: '#DFE6ED',
                                  }),
                                  b(
                                    k,
                                    {
                                      'value-color': '#333',
                                      data: [
                                        {
                                          label: '授权内容：',
                                          value: '到场证明',
                                        },
                                        {
                                          label: '授权时间：',
                                          value: D(M)(
                                            e.authTime,
                                            'YYYY年MM月DD日'
                                          ),
                                        },
                                        {
                                          label: '商户DID：',
                                          value: e.authObjectDid,
                                        },
                                      ],
                                    },
                                    null,
                                    8,
                                    ['data']
                                  ),
                                ]),
                                _: 2,
                              },
                              1024
                            )
                          )
                        ),
                        128
                      )),
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
    [['__scopeId', 'data-v-9988d62d']]
  );
export { Q as default };
