import { _ as t } from './BannerView.vue_vue_type_script_setup_true_lang.B49om_vb.js';
import { _ as a } from './ActivityListItem.BhbJ2ERX.js';
import { u as s, _ as i } from './usePaged.CD3wQfgj.js';
import {
  d as e,
  H as r,
  c as o,
  w as n,
  r as u,
  a as l,
  b as p,
  A as c,
  e as d,
  t as m,
  N as v,
  O as f,
  Q as y,
  P as _,
} from './index-weTBPgUB.js';
import { l as g } from './activity-banner.C3kWKCRr.js';
import { u as h } from './useLocation.CdoijD8W.js';
import './wd-divider.4zStWUYx.js';
import './Avatar.vue_vue_type_script_setup_true_lang.DYjFlo1Q.js';
import './PyTitle.DruDsr5W.js';
import './index.BwehUw5u.js';
import './commonjsHelpers.lGe4XDVY.js';
const w = e({
  __name: 'index',
  setup(e) {
    const w = r(),
      {
        update: x,
        longitude: b,
        latitude: j,
        hasFirstErrorToast: L,
        firstErrorToast: P,
      } = h(),
      A = (t) => ({
        id: (null == t ? void 0 : t.id) || Date.now().toString(),
        img: null == t ? void 0 : t.picUrl,
        title: (null == t ? void 0 : t.name) || '未命名数根',
      }),
      S = (t) => {
        const a = [];
        t.issueProduct &&
          (Array.isArray(t.issueProduct)
            ? a.push(...t.issueProduct.map((t) => A(t)))
            : a.push(A(t.issueProduct)));
        const s = [];
        var i;
        t.issueVoucher &&
          (Array.isArray(t.issueVoucher)
            ? s.push(...t.issueVoucher.map((t) => A(t)))
            : s.push({
                id:
                  (null == (i = t.issueVoucher) ? void 0 : i.id) ||
                  Date.now().toString(),
                img: null == i ? void 0 : i.picUrl,
                title: (null == i ? void 0 : i.name) || '未命名权益',
              }));
        const e = [];
        return (
          t.attendedUsers &&
            t.attendedUsers.forEach((t) => {
              e.push(((t) => ({ avatar: null == t ? void 0 : t.avatar }))(t));
            }),
          { ...t, pythrootList: a, profitList: s, participants: e }
        );
      };
    const { list: T } = s(async function (t) {
      const a = 'number' == typeof j.value ? String(j.value) : void 0,
        s = 'number' == typeof b.value ? String(b.value) : void 0;
      (a && s) || L.value
        ? await x({
            toast: !1,
            forceUpdate:
              'onPullDownRefresh' === (null == t ? void 0 : t.sourceType),
          })
        : (P(), await x({ toast: !0 }));
      const i = await _.app.getActivityPage({
          params: {
            type: 1,
            myLocationLatitude: a,
            myLocationLongitude: s,
            ...t,
          },
        }),
        { code: e, data: r } = i || {};
      if (0 !== e || !r) throw new Error('获取数据失败');
      let o = r.list || [];
      return (o = o.map((t) => S(t))), { list: o, total: r.total || 0 };
    });
    return (s, e) => {
      const r = i,
        _ = d,
        h = a,
        x = t,
        b = u('layout-tabbar-uni');
      return (
        l(),
        o(b, null, {
          default: n(() => [
            p(
              x,
              {
                'custom-class': 'pb-228rpx bg-#EFF2F5',
                'banner-height': '364rpx',
                'banner-src': c(g),
              },
              {
                default: n(() => [
                  p(
                    _,
                    {
                      class:
                        'p-30rpx gap-20rpx mt-[-278rpx] flex flex-col bg-transparent',
                    },
                    {
                      default: n(() => [
                        0 === c(T).length
                          ? (l(),
                            o(
                              _,
                              { key: 0, class: 'mt-260rpx' },
                              { default: n(() => [p(r)]), _: 1 }
                            ))
                          : m('', !0),
                        (l(!0),
                        v(
                          f,
                          null,
                          y(
                            c(T),
                            (t) => (
                              l(),
                              o(
                                h,
                                {
                                  key: t.id,
                                  'attend-count': t.attendCount,
                                  'cover-img-src': t.picUrl || '',
                                  title: t.name,
                                  location: t.address || '',
                                  'start-time': t.startTime,
                                  'end-time': t.endTime,
                                  participants: t.participants,
                                  'pythroot-list': t.pythrootList,
                                  'profit-list': t.profitList,
                                  distance: t.distance,
                                  'extra-button-text': '马上参与',
                                  'time-status': t.timeStatus,
                                  onJoinNow: (a) => {
                                    return (
                                      (s = t.id),
                                      void w.push({
                                        name: 'activityDetail',
                                        params: { id: String(s) },
                                      })
                                    );
                                    var s;
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
                                  'distance',
                                  'time-status',
                                  'onJoinNow',
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
              },
              8,
              ['banner-src']
            ),
          ]),
          _: 1,
        })
      );
    };
  },
});
export { w as default };
