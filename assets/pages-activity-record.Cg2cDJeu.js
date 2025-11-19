import { _ as t } from './ActivityListItem.D98X2fse.js';
import { u as s, _ as i } from './usePaged.6WT1M_ey.js';
import {
  d as a,
  H as e,
  c as r,
  w as o,
  r as n,
  a as u,
  b as l,
  e as p,
  t as c,
  N as d,
  A as m,
  O as v,
  Q as h,
  P as f,
} from './index-DLEqDFWl.js';
import './wd-divider.Cn1jBh0-.js';
import './Avatar.vue_vue_type_script_setup_true_lang.C-tG9hQO.js';
import './PyTitle.DbeyPiIU.js';
import './index.BwehUw5u.js';
import './commonjsHelpers.lGe4XDVY.js';
const y = a({
  __name: 'record',
  setup(a) {
    const y = e(),
      g = (t) => ({
        id: (null == t ? void 0 : t.id) || Date.now().toString(),
        img: (null == t ? void 0 : t.picUrl) || '',
        title: (null == t ? void 0 : t.name) || '未命名数根',
      }),
      _ = (t) => {
        const s = [];
        t.issueProduct &&
          (Array.isArray(t.issueProduct)
            ? s.push(...t.issueProduct.map((t) => g(t)))
            : s.push(g(t.issueProduct)));
        const i = [];
        var a;
        t.issueVoucher &&
          (Array.isArray(t.issueVoucher)
            ? i.push(...t.issueVoucher.map((t) => g(t)))
            : i.push({
                id:
                  (null == (a = t.issueVoucher) ? void 0 : a.id) ||
                  Date.now().toString(),
                img: (null == a ? void 0 : a.picUrl) || '',
                title: (null == a ? void 0 : a.name) || '未命名权益',
              }));
        const e = [];
        return (
          t.attendedUsers &&
            t.attendedUsers.forEach((t) => {
              e.push(((t) => ({ avatar: null == t ? void 0 : t.avatar }))(t));
            }),
          { ...t, pythrootList: s, profitList: i, participants: e }
        );
      };
    const { list: x } = s(async function (t) {
      const s = await f.app.getActivityAttendancePage({ params: { ...t } }),
        { code: i, data: a } = s || {};
      if (0 !== i || !a) throw new Error('获取数据失败');
      return { list: (a.list || []).map((t) => _(t)), total: a.total || 0 };
    });
    return (s, a) => {
      const e = i,
        f = p,
        g = t,
        _ = n('layout-default-uni');
      return (
        u(),
        r(_, null, {
          default: o(() => [
            l(
              f,
              {
                class:
                  'px-30rpx pt-40rpx pb-158rpx gap-20rpx flex min-h-screen flex-col bg-white',
              },
              {
                default: o(() => [
                  0 === m(x).length
                    ? (u(),
                      r(f, { key: 0 }, { default: o(() => [l(e)]), _: 1 }))
                    : c('', !0),
                  (u(!0),
                  d(
                    v,
                    null,
                    h(
                      m(x),
                      (t) => (
                        u(),
                        r(
                          g,
                          {
                            key: t.id,
                            'attend-count': t.attendCount,
                            border: !0,
                            'show-status': !1,
                            'cover-img-src': t.picUrl || '',
                            title: t.name,
                            location: t.address || '',
                            'start-time': t.startTime,
                            'end-time': t.endTime,
                            participants: t.participants,
                            'pythroot-list': t.pythrootList,
                            'profit-list': t.profitList,
                            status: t.timeStatus,
                            'time-status': t.timeStatus,
                            onClick: (s) => {
                              return (
                                (i = t.id),
                                void y.push({
                                  name: 'activityDetail',
                                  params: { id: String(i) },
                                })
                              );
                              var i;
                            },
                          },
                          null,
                          8,
                          [
                            'attend-count',
                            'cover-img-src',
                            'title',
                            'location',
                            'start-time',
                            'end-time',
                            'participants',
                            'pythroot-list',
                            'profit-list',
                            'status',
                            'time-status',
                            'onClick',
                          ]
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
