import {
  d as e,
  C as t,
  K as a,
  c as s,
  w as l,
  r,
  a as i,
  b as p,
  e as n,
  t as c,
  G as u,
  A as f,
  E as o,
  y as d,
  x,
  F as A,
  aO as m,
  I as v,
  J as h,
} from './index-DLEqDFWl.js';
import { _ as g } from './Descriptions.vue_vue_type_script_setup_true_lang.yy61rmva.js';
import { _ as w } from './PyTitle.DbeyPiIU.js';
import { f as z } from './index.BwehUw5u.js';
import './wd-col.D7LsMSrj.js';
import './commonjsHelpers.lGe4XDVY.js';
const C = e({
  __name: 'idcard',
  setup(e) {
    const C = t(null);
    a(() => {
      !(async function () {
        const e = await m.app.getUserDigitalInfo();
        0 === (null == e ? void 0 : e.code) &&
          (null == e ? void 0 : e.data) &&
          (C.value = e.data);
      })();
    });
    const K = t(!1);
    async function N() {
      var e, t;
      if (!K.value)
        try {
          v({ title: '加载中' }), (K.value = !0);
          const a = await m.app.caRegisterSign();
          if (0 === a.code && a.data) {
            const {
                baseUrl: s,
                path: l,
                clientId: r,
                timestamp: i,
                signature: p,
                redirectUri: n,
                appBizNo: c,
              } = a.data,
              u =
                ((e = `${s}${l}`),
                (t = {
                  client_env: 'h5',
                  client_id: r,
                  timestamp: i,
                  signature: p,
                  redirect_uri: n,
                  app_biz_no: c,
                }),
                `${e}?${new URLSearchParams({
                  ...t,
                  timestamp: t.timestamp.toString(),
                }).toString()}`);
            window.location.href = u;
          }
        } finally {
          h(), (K.value = !1);
        }
    }
    return (e, t) => {
      const a = u,
        m = w,
        v = o,
        h = n,
        b = g,
        B = x,
        y = A,
        U = r('layout-default-uni');
      return (
        i(),
        s(U, null, {
          default: l(() => [
            p(
              h,
              { class: 'pt-62rpx px-30rpx h-screen w-screen' },
              {
                default: l(() => {
                  var e;
                  return [
                    p(
                      h,
                      {
                        class:
                          'w-690rpx min-h-412rpx py-40rpx px-36rpx relative z-0',
                      },
                      {
                        default: l(() => [
                          p(
                            a,
                            {
                              'custom-class': '!absolute top-0 left-0 z--1',
                              src: f('/assets/digital-id-card-BkDaEUt7.png'),
                              width: '100%',
                              height: '100%',
                            },
                            null,
                            8,
                            ['src']
                          ),
                          p(
                            h,
                            { class: 'gap-8rpx flex h-full w-full flex-col' },
                            {
                              default: l(() => {
                                var e, t, a, r, n;
                                return [
                                  p(m, {
                                    text: '数字身份证书',
                                    color: '#fff',
                                    size: '40rpx',
                                    'line-height': '60rpx',
                                  }),
                                  p(v, {
                                    text: 'Decentralized ldentifer',
                                    color: '#ffffff99',
                                    size: '28rpx',
                                    'line-height': '42rpx',
                                  }),
                                  p(h, { class: 'h-22rpx' }),
                                  1 ===
                                  (null == (e = f(C)) ? void 0 : e.verifyStatus)
                                    ? (i(),
                                      s(
                                        b,
                                        {
                                          key: 0,
                                          color: '#fff',
                                          size: '28rpx',
                                          'line-height': '42rpx',
                                          'value-bold': '',
                                          'label-span': 6,
                                          'value-span': 18,
                                          data: [
                                            {
                                              label: '姓名：',
                                              value:
                                                null == (t = f(C))
                                                  ? void 0
                                                  : t.name,
                                            },
                                            {
                                              label: 'DID编号：',
                                              value:
                                                null == (a = f(C))
                                                  ? void 0
                                                  : a.did,
                                            },
                                            {
                                              label: '认证时间：',
                                              value: f(z)(
                                                null == (r = f(C))
                                                  ? void 0
                                                  : r.verifyTime,
                                                'YYYY年MM月DD日'
                                              ),
                                            },
                                            {
                                              label: '认证机构：',
                                              value:
                                                null == (n = f(C))
                                                  ? void 0
                                                  : n.certOrganization,
                                            },
                                          ],
                                        },
                                        null,
                                        8,
                                        ['data']
                                      ))
                                    : (i(),
                                      s(
                                        h,
                                        {
                                          key: 1,
                                          class: 'text-#fff text-26rpx',
                                        },
                                        {
                                          default: l(() => [
                                            p(h, null, {
                                              default: l(() => [
                                                d('您还未创建数字身份。'),
                                              ]),
                                              _: 1,
                                            }),
                                            p(h, null, {
                                              default: l(() => [
                                                d(
                                                  '为更好地守护您的权益安全，请您尽快创建实名数字身份哦～ '
                                                ),
                                              ]),
                                              _: 1,
                                            }),
                                            d(' 数字身份由 '),
                                            p(
                                              B,
                                              {
                                                class:
                                                  'text-34rpx mx-4rpx inline-block',
                                              },
                                              {
                                                default: l(() => [
                                                  d(' 上海市数字证书认证中心 '),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                            d(' 认证和颁发。 '),
                                          ]),
                                          _: 1,
                                        }
                                      )),
                                ];
                              }),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    p(
                      h,
                      { class: 'mt-60rpx' },
                      {
                        default: l(() => [
                          p(
                            h,
                            { class: 'gap-10rpx mb-12rpx flex items-center' },
                            {
                              default: l(() => [
                                p(
                                  a,
                                  {
                                    src: f(
                                      'data:image/png;base64,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'
                                    ),
                                    width: '40rpx',
                                    height: '40rpx',
                                  },
                                  null,
                                  8,
                                  ['src']
                                ),
                                p(m, {
                                  text: '数字身份说明',
                                  size: '36rpx',
                                  'line-height': '54rpx',
                                }),
                              ]),
                              _: 1,
                            }
                          ),
                          p(v, {
                            text: '您的数字身份(DID)是您在数字档案馆平台的唯一标识，用于验证身份和授权访问。数字身份证书采用区块链技术加密存储，确保您的个人信息安全可靠。通过数字身份，您可以安全地管理数字资产、授权信息共享，以及进行权益兑换等操作。',
                          }),
                        ]),
                        _: 1,
                      }
                    ),
                    1 !== (null == (e = f(C)) ? void 0 : e.verifyStatus)
                      ? (i(),
                        s(
                          h,
                          {
                            key: 0,
                            class:
                              'py-36rpx px-54rpx z-999 fixed bottom-0 left-0 right-0',
                          },
                          {
                            default: l(() => [
                              p(
                                y,
                                {
                                  class:
                                    'w-full !opacity-100 shadow-[2rpx_2rpx_2rpx_0_rgba(0,0,0,0.15)]',
                                  block: '',
                                  type: 'primary',
                                  disabled: f(K),
                                  onClick: N,
                                },
                                {
                                  default: l(() => [d(' 领取我的数字身份 ')]),
                                  _: 1,
                                },
                                8,
                                ['disabled']
                              ),
                            ]),
                            _: 1,
                          }
                        ))
                      : c('', !0),
                  ];
                }),
                _: 1,
              }
            ),
          ]),
          _: 1,
        })
      );
    };
  },
});
export { C as default };
