import { _ as t } from './PyTitle.xM0f2QSD.js';
import {
  d as e,
  H as s,
  c as r,
  w as a,
  r as l,
  a as p,
  b as i,
  e as o,
  t as u,
  N as n,
  E as x,
  A as d,
  O as c,
  Q as f,
  G as m,
  P as g,
} from './index-DHS_FSaD.js';
import { u as h, _ } from './usePaged.k-T3Y7I8.js';
import { f as y } from './index.BwehUw5u.js';
import './commonjsHelpers.lGe4XDVY.js';
const b = 'YYYY年MM月DD日',
  w = e({
    __name: 'redemption-record',
    setup(e) {
      const w = s();
      const { list: j, total: $ } = h(async function (t) {
        const e = await g.app.getOrderPage({
            params: { status: 30, type: 2, ...t },
          }),
          { code: s, data: r } = e || {};
        if (0 !== s || !r) throw new Error('获取数据失败');
        return {
          list: (r.list || []).map((t) => {
            var e;
            const s = [];
            return (
              null == (e = t.productsIssue) ||
                e.forEach((t) => {
                  s.push(t.name);
                }),
              {
                id: t.id,
                title: t.productSpuName,
                issuer: t.issuerName,
                pythroots: s.toString(),
                time: `${y(t.createTime, b)} - ${y(t.expireTime, b)}`,
                pic: t.productSpuPicUrl || '',
              }
            );
          }),
          total: r.total || 0,
        };
      });
      return (e, s) => {
        const g = x,
          h = o,
          y = _,
          b = m,
          k = t,
          P = l('layout-default-uni');
        return (
          p(),
          r(P, null, {
            default: a(() => [
              i(
                h,
                { class: 'px-30rpx py-40rpx pb-158rpx h-screen bg-white' },
                {
                  default: a(() => [
                    i(
                      h,
                      { class: 'flex justify-end' },
                      {
                        default: a(() => [
                          i(g, { text: `累计兑付${d($)}笔` }, null, 8, [
                            'text',
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                    0 === d($)
                      ? (p(),
                        r(h, { key: 0 }, { default: a(() => [i(y)]), _: 1 }))
                      : u('', !0),
                    (p(!0),
                    n(
                      c,
                      null,
                      f(
                        d(j),
                        (t) => (
                          p(),
                          r(
                            h,
                            {
                              key: t.id,
                              class:
                                'rounded-20rpx p-20rpx h-256rpx gap-18rpx b-2rpx b-[rgba(169,169,169,0.4)] mt-3 flex items-start border-solid',
                              onClick: (e) => {
                                return (
                                  (s = t.id),
                                  void w.push({
                                    name: 'profitDetail',
                                    params: { id: String(s) },
                                  })
                                );
                                var s;
                              },
                            },
                            {
                              default: a(() => [
                                i(
                                  h,
                                  {
                                    class:
                                      'w-96rpx h-96rpx rounded-8rpx p-16rpx bg-#F3F3F5 flex-shrink-0',
                                  },
                                  {
                                    default: a(() => [
                                      i(
                                        b,
                                        {
                                          width: '100%',
                                          height: '100%',
                                          round: '',
                                          radius: '10rpx',
                                          alt: '',
                                          src: t.pic,
                                        },
                                        null,
                                        8,
                                        ['src']
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ),
                                i(
                                  h,
                                  {
                                    class:
                                      'gap-10rpx mr-12rpx flex flex-grow flex-col',
                                  },
                                  {
                                    default: a(() => [
                                      i(
                                        h,
                                        {
                                          class:
                                            'mb-6rpx flex flex-row items-start justify-between',
                                        },
                                        {
                                          default: a(() => [
                                            i(
                                              k,
                                              { lines: 2, text: t.title },
                                              null,
                                              8,
                                              ['text']
                                            ),
                                            i(g, {
                                              text: '已兑付',
                                              class: 'text-green-500',
                                            }),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                      i(
                                        h,
                                        { class: 'gap-4rpx flex flex-col' },
                                        {
                                          default: a(() => [
                                            i(
                                              g,
                                              { text: `发行方: ${t.issuer}` },
                                              null,
                                              8,
                                              ['text']
                                            ),
                                            i(
                                              g,
                                              {
                                                text: `关联数根: ${t.pythroots} `,
                                              },
                                              null,
                                              8,
                                              ['text']
                                            ),
                                            i(
                                              g,
                                              { text: `${t.time}` },
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
                            1032,
                            ['onClick']
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
export { w as default };
