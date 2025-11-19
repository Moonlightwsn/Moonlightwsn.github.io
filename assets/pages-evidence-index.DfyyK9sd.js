import { _ as l } from './BgView.DTt5YIWJ.js';
import { _ as t } from './Ticket.vue_vue_type_script_setup_true_lang.VARiqhpj.js';
import {
  d as a,
  C as e,
  p as s,
  c as u,
  w as r,
  r as n,
  a as o,
  b as d,
  e as c,
  E as x,
  A as p,
  G as f,
  P as i,
  _,
} from './index-DLEqDFWl.js';
import { _ as m, a as v } from './wd-col.D7LsMSrj.js';
import { _ as g } from './PyTitle.DbeyPiIU.js';
import { u as b } from './usePageOptions.zFe1iZJE.js';
import { f as h } from './index.BwehUw5u.js';
import './wd-divider.Cn1jBh0-.js';
import './commonjsHelpers.lGe4XDVY.js';
const j = _(
  a({
    __name: 'index',
    setup(a) {
      const _ = e(),
        j = e(),
        k = e();
      b((l) => {
        const { type: t, id: a } = l;
        (j.value = Number(a)),
          (_.value = Number(t)),
          (async function () {
            if (!j.value) return;
            const l = await i.app.getChainInfo({
              params: { id: j.value, type: 'order' },
            });
            0 === (null == l ? void 0 : l.code) &&
              (null == l ? void 0 : l.data) &&
              (k.value = l.data);
          })();
      });
      const D = s(() => (1 === _.value ? '数根' : 2 === _.value ? '权益' : '')),
        w = s(() =>
          1 === _.value ? '数字存根' : 2 === _.value ? '数字权益' : ''
        );
      return (a, e) => {
        const s = c,
          i = g,
          _ = x,
          b = v,
          j = m,
          I = f,
          y = t,
          P = l,
          H = n('layout-default-uni');
        return (
          o(),
          u(H, null, {
            default: r(() => [
              d(
                P,
                { 'custom-class': 'pb-228rpx' },
                {
                  default: r(() => [
                    d(s, { class: 'bg-#1B88F3 h-20rpx rounded-20rpx w-full' }),
                    d(
                      s,
                      { class: 'px-16rpx mt-[-16rpx]' },
                      {
                        default: r(() => [
                          d(
                            y,
                            { 'custom-class': 'ticket-bg' },
                            {
                              content: r(() => [
                                d(
                                  s,
                                  { class: 'gap-30rpx relative flex flex-col' },
                                  {
                                    default: r(() => [
                                      d(
                                        s,
                                        { class: 'gap-12rpx flex flex-col' },
                                        {
                                          default: r(() => [
                                            d(
                                              i,
                                              {
                                                text: p(w),
                                                size: '40rpx',
                                                'line-height': '60rpx',
                                              },
                                              null,
                                              8,
                                              ['text']
                                            ),
                                            d(i, {
                                              text: 'on-chain digital root',
                                              bold: !1,
                                            }),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      d(
                                        s,
                                        { class: 'gap-8rpx flex flex-col' },
                                        {
                                          default: r(() => [
                                            d(j, null, {
                                              default: r(() => [
                                                d(
                                                  b,
                                                  { span: 8 },
                                                  {
                                                    default: r(() => [
                                                      d(
                                                        _,
                                                        {
                                                          text: `${p(D)}编号：`,
                                                        },
                                                        null,
                                                        8,
                                                        ['text']
                                                      ),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                d(
                                                  b,
                                                  {
                                                    span: 16,
                                                    'custom-class': 'break-all',
                                                  },
                                                  {
                                                    default: r(() => {
                                                      var l;
                                                      return [
                                                        d(
                                                          _,
                                                          {
                                                            text:
                                                              null == (l = p(k))
                                                                ? void 0
                                                                : l.chainProductId,
                                                            color: '#333',
                                                          },
                                                          null,
                                                          8,
                                                          ['text']
                                                        ),
                                                      ];
                                                    }),
                                                    _: 1,
                                                  }
                                                ),
                                              ]),
                                              _: 1,
                                            }),
                                            d(j, null, {
                                              default: r(() => [
                                                d(
                                                  b,
                                                  { span: 8 },
                                                  {
                                                    default: r(() => [
                                                      d(
                                                        _,
                                                        {
                                                          text: `${p(D)}名称：`,
                                                        },
                                                        null,
                                                        8,
                                                        ['text']
                                                      ),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                d(
                                                  b,
                                                  {
                                                    span: 16,
                                                    'custom-class': 'break-all',
                                                  },
                                                  {
                                                    default: r(() => {
                                                      var l;
                                                      return [
                                                        d(
                                                          _,
                                                          {
                                                            text:
                                                              null == (l = p(k))
                                                                ? void 0
                                                                : l.chainProductName,
                                                            color: '#333',
                                                          },
                                                          null,
                                                          8,
                                                          ['text']
                                                        ),
                                                      ];
                                                    }),
                                                    _: 1,
                                                  }
                                                ),
                                              ]),
                                              _: 1,
                                            }),
                                            d(j, null, {
                                              default: r(() => [
                                                d(
                                                  b,
                                                  { span: 8 },
                                                  {
                                                    default: r(() => [
                                                      d(_, {
                                                        text: '持有人DID：',
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                d(
                                                  b,
                                                  {
                                                    span: 16,
                                                    'custom-class': 'break-all',
                                                  },
                                                  {
                                                    default: r(() => {
                                                      var l;
                                                      return [
                                                        d(
                                                          _,
                                                          {
                                                            text:
                                                              null == (l = p(k))
                                                                ? void 0
                                                                : l.holderDid,
                                                            lines: 2,
                                                            color: '#333',
                                                          },
                                                          null,
                                                          8,
                                                          ['text']
                                                        ),
                                                      ];
                                                    }),
                                                    _: 1,
                                                  }
                                                ),
                                              ]),
                                              _: 1,
                                            }),
                                            d(j, null, {
                                              default: r(() => [
                                                d(
                                                  b,
                                                  { span: 8 },
                                                  {
                                                    default: r(() => [
                                                      d(_, {
                                                        text: '发放方DID：',
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                d(
                                                  b,
                                                  {
                                                    span: 16,
                                                    'custom-class': 'break-all',
                                                  },
                                                  {
                                                    default: r(() => {
                                                      var l;
                                                      return [
                                                        d(
                                                          _,
                                                          {
                                                            text:
                                                              null == (l = p(k))
                                                                ? void 0
                                                                : l.did,
                                                            lines: 2,
                                                            color: '#333',
                                                          },
                                                          null,
                                                          8,
                                                          ['text']
                                                        ),
                                                      ];
                                                    }),
                                                    _: 1,
                                                  }
                                                ),
                                              ]),
                                              _: 1,
                                            }),
                                            d(j, null, {
                                              default: r(() => [
                                                d(
                                                  b,
                                                  { span: 8 },
                                                  {
                                                    default: r(() => [
                                                      d(_, {
                                                        text: '发放方签名：',
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                d(
                                                  b,
                                                  {
                                                    span: 16,
                                                    'custom-class': 'break-all',
                                                  },
                                                  {
                                                    default: r(() => {
                                                      var l;
                                                      return [
                                                        d(
                                                          _,
                                                          {
                                                            text:
                                                              null == (l = p(k))
                                                                ? void 0
                                                                : l.signature,
                                                            lines: 4,
                                                            color: '#333',
                                                          },
                                                          null,
                                                          8,
                                                          ['text']
                                                        ),
                                                      ];
                                                    }),
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
                                      d(
                                        I,
                                        {
                                          'custom-class':
                                            '!absolute top-10rpx right-10rpx',
                                          src: p(
                                            '/assets/on-chain-success-KxxSf_v_.png'
                                          ),
                                          width: '160rpx',
                                          height: '160rpx',
                                        },
                                        null,
                                        8,
                                        ['src']
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              extra: r(() => [
                                d(
                                  s,
                                  { class: 'gap-40rpx flex flex-col' },
                                  {
                                    default: r(() => [
                                      d(
                                        s,
                                        { class: 'gap-12rpx flex flex-col' },
                                        {
                                          default: r(() => [
                                            d(i, { text: '上链交易信息' }),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      d(
                                        s,
                                        { class: 'gap-8rpx flex flex-col' },
                                        {
                                          default: r(() => [
                                            d(j, null, {
                                              default: r(() => [
                                                d(
                                                  b,
                                                  { span: 8 },
                                                  {
                                                    default: r(() => [
                                                      d(_, {
                                                        text: '交易ID：',
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                d(
                                                  b,
                                                  {
                                                    span: 16,
                                                    'custom-class': 'break-all',
                                                  },
                                                  {
                                                    default: r(() => {
                                                      var l;
                                                      return [
                                                        d(
                                                          _,
                                                          {
                                                            text:
                                                              null == (l = p(k))
                                                                ? void 0
                                                                : l.txId,
                                                            lines: 2,
                                                            color: '#333',
                                                          },
                                                          null,
                                                          8,
                                                          ['text']
                                                        ),
                                                      ];
                                                    }),
                                                    _: 1,
                                                  }
                                                ),
                                              ]),
                                              _: 1,
                                            }),
                                            d(j, null, {
                                              default: r(() => [
                                                d(
                                                  b,
                                                  { span: 8 },
                                                  {
                                                    default: r(() => [
                                                      d(_, {
                                                        text: '区块高度：',
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                d(
                                                  b,
                                                  { span: 16 },
                                                  {
                                                    default: r(() => {
                                                      var l;
                                                      return [
                                                        d(
                                                          _,
                                                          {
                                                            text: (
                                                              (null ==
                                                              (l = p(k))
                                                                ? void 0
                                                                : l.blockHeight) ||
                                                              ''
                                                            ).toString(),
                                                            color: '#333',
                                                          },
                                                          null,
                                                          8,
                                                          ['text']
                                                        ),
                                                      ];
                                                    }),
                                                    _: 1,
                                                  }
                                                ),
                                              ]),
                                              _: 1,
                                            }),
                                            d(j, null, {
                                              default: r(() => [
                                                d(
                                                  b,
                                                  { span: 8 },
                                                  {
                                                    default: r(() => [
                                                      d(_, {
                                                        text: '上链时间：',
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                d(
                                                  b,
                                                  { span: 16 },
                                                  {
                                                    default: r(() => {
                                                      var l;
                                                      return [
                                                        d(
                                                          _,
                                                          {
                                                            text:
                                                              p(h)(
                                                                null ==
                                                                  (l = p(k))
                                                                  ? void 0
                                                                  : l.blockTimestamp,
                                                                'YYYY年MM月DD日 HH时mm分ss秒'
                                                              ) || '',
                                                            color: '#333',
                                                          },
                                                          null,
                                                          8,
                                                          ['text']
                                                        ),
                                                      ];
                                                    }),
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
            ]),
            _: 1,
          })
        );
      };
    },
  }),
  [['__scopeId', 'data-v-902e9b39']]
);
export { j as default };
