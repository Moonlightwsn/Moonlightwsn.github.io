import { _ as t } from './PyTitle.BfA7NzL5.js';
import {
  d as e,
  c as s,
  w as r,
  r as a,
  a as l,
  b as u,
  e as x,
  t as o,
  N as p,
  E as n,
  A as d,
  O as i,
  Q as f,
  G as c,
  bz as m,
} from './index-CPSH10gF.js';
import { u as _, _ as g } from './usePaged.oYVLqR_Z.js';
import { f as h } from './index.BwehUw5u.js';
import './commonjsHelpers.lGe4XDVY.js';
const y = e({
  __name: 'index',
  setup(e) {
    const { list: y, total: b } = _(async function (t) {
      const e = await m.general.queryCheckoutRecord({ params: { ...t } }),
        { code: s, data: r } = e || {};
      if (0 !== s || !r) throw new Error('获取数据失败');
      return { list: r.list || [], total: r.total || 0 };
    });
    return (e, m) => {
      const _ = n,
        w = x,
        j = g,
        k = c,
        F = t,
        N = a('layout-default-uni');
      return (
        l(),
        s(N, null, {
          default: r(() => [
            u(
              w,
              { class: 'px-30rpx py-40rpx h-screen bg-white' },
              {
                default: r(() => [
                  u(
                    w,
                    { class: 'flex justify-end' },
                    {
                      default: r(() => [
                        u(_, { text: `累计核销${d(b)}笔` }, null, 8, ['text']),
                      ]),
                      _: 1,
                    }
                  ),
                  0 === d(b)
                    ? (l(),
                      s(w, { key: 0 }, { default: r(() => [u(j)]), _: 1 }))
                    : o('', !0),
                  (l(!0),
                  p(
                    i,
                    null,
                    f(
                      d(y),
                      (t) => (
                        l(),
                        s(
                          w,
                          {
                            key: t.id,
                            class:
                              'rounded-20rpx p-20rpx h-256rpx gap-18rpx b-2rpx b-[rgba(169,169,169,0.4)] mt-3 flex items-start border-solid',
                          },
                          {
                            default: r(() => [
                              t.productSpuPicUrl
                                ? (l(),
                                  s(
                                    w,
                                    {
                                      key: 0,
                                      class:
                                        'w-96rpx h-96rpx rounded-8rpx p-16rpx bg-#F3F3F5 flex-shrink-0',
                                    },
                                    {
                                      default: r(() => [
                                        u(
                                          k,
                                          {
                                            width: '100%',
                                            height: '100%',
                                            round: '',
                                            radius: '10rpx',
                                            alt: '',
                                            src: t.productSpuPicUrl,
                                          },
                                          null,
                                          8,
                                          ['src']
                                        ),
                                      ]),
                                      _: 2,
                                    },
                                    1024
                                  ))
                                : o('', !0),
                              u(
                                w,
                                {
                                  class:
                                    'gap-10rpx mr-12rpx flex flex-grow flex-col',
                                },
                                {
                                  default: r(() => [
                                    u(
                                      w,
                                      {
                                        class:
                                          'mb-6rpx flex flex-row items-start justify-between',
                                      },
                                      {
                                        default: r(() => [
                                          u(
                                            F,
                                            {
                                              lines: 2,
                                              text: t.productSpuName,
                                            },
                                            null,
                                            8,
                                            ['text']
                                          ),
                                          30 === t.status
                                            ? (l(),
                                              s(_, {
                                                key: 0,
                                                text: '已兑付',
                                                class: 'text-green-500',
                                              }))
                                            : o('', !0),
                                        ]),
                                        _: 2,
                                      },
                                      1024
                                    ),
                                    u(
                                      w,
                                      { class: 'gap-4rpx flex flex-col' },
                                      {
                                        default: r(() => [
                                          u(
                                            _,
                                            {
                                              text: `权益编号: ${t.productSpuNo} `,
                                            },
                                            null,
                                            8,
                                            ['text']
                                          ),
                                          u(
                                            _,
                                            {
                                              text: `核销时间: ${d(h)(
                                                t.finishTime,
                                                'YYYY年MM月DD日'
                                              )}`,
                                            },
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
                                  _: 2,
                                },
                                1024
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
});
export { y as default };
