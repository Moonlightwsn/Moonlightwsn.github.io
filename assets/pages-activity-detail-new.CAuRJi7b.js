import {
  d as e,
  B as t,
  H as a,
  p as l,
  C as r,
  K as s,
  L as o,
  c as n,
  w as u,
  r as i,
  M as c,
  a as d,
  b as p,
  e as v,
  n as A,
  A as m,
  E as f,
  t as g,
  N as x,
  O as y,
  Q as h,
  R as w,
  F as b,
  y as B,
  z as k,
  S as C,
  T as U,
  U as S,
  V as _,
  W as R,
  D as j,
  P as I,
  X as V,
} from './index-DLEqDFWl.js';
import { _ as Q } from './BannerView.vue_vue_type_script_setup_true_lang.C9IVHeQj.js';
import { _ as E } from './QrScannerView.B5i1LtQ0.js';
import {
  _ as N,
  a as T,
} from './HtmlCard.vue_vue_type_script_setup_true_lang.Xzk1ycfw.js';
import { _ as z } from './GradientText.vue_vue_type_script_setup_true_lang.7MJiORDR.js';
import { _ as O } from './Avatar.vue_vue_type_script_setup_true_lang.C-tG9hQO.js';
import { _ as D } from './PyTitle.DbeyPiIU.js';
import { G as P } from './gift.CnwWG0IK.js';
import { T as F } from './ticket.Bwxup39T.js';
import { u as H } from './usePageOptions.zFe1iZJE.js';
import { u as M } from './useRouteState.yPs3ogZU.js';
import { u as K } from './useLocation.Ci_CoSrE.js';
import { f as J } from './index.BwehUw5u.js';
import './commonjsHelpers.lGe4XDVY.js';
const W = 'YYYY年MM月DD日 HH时mm分',
  L = e({
    __name: 'detail-new',
    setup(e) {
      const { confirm: L } = t(),
        Z = a(),
        X = M(),
        { longitude: Y, latitude: G, update: q } = K(),
        $ = l(() => {
          var e, t;
          return [
            {
              key: 'pythroot',
              icon: F,
              title: '可领数根',
              bg: '#29A2FB1A',
              products:
                (null == (e = ae.value) ? void 0 : e.issueProduct) || [],
            },
            {
              key: 'profit',
              icon: P,
              title: '可领权益',
              bg: '#FF6A001A',
              products:
                (null == (t = ae.value) ? void 0 : t.issueVoucher) || [],
            },
          ];
        }),
        ee = r(),
        te = r(),
        ae = r(null),
        le = r(!1),
        re = r(),
        se = r({ errorMsg: '', flag: !1 }),
        oe = l(() => {
          var e;
          if ('boolean' != typeof re.value) return '';
          if (re.value) return '已参与';
          const t = Number(null == (e = ae.value) ? void 0 : e.type);
          return 0 === t
            ? '线下扫码'
            : 1 === t
            ? '签到参与'
            : 2 === t
            ? '立即领取'
            : '';
        });
      function ne(e, t) {
        const a = X.depositRouteState(t);
        Z.push({
          name: 'activityResult',
          params: { id: String(e), pageUUID: a },
        });
      }
      async function ue() {
        var e;
        if ('preview' === te.value) return;
        if (!S().value)
          return void L({
            title: '用户未登录',
            msg: '请登录后再来参加活动！',
            cancelButtonText: '继续浏览',
            confirmButtonText: '去登录',
            success() {
              _(Z.route.value), R();
            },
          });
        if (!(null == (e = ae.value) ? void 0 : e.id))
          return void j({
            icon: 'error',
            title: '活动数据未加载完成，请稍后重试',
          });
        if (!se.value.flag)
          return void (1008005009 === se.value.errorCode
            ? L({
                title: '数字身份保护说明',
                msg: '你的账号里数字资产（数根、权益）已经超出安全范围啦。为了保护好这些资产，需要先领取实名数字身份，之后就能顺利参加活动、获取新的数根和权益啦～',
                cancelButtonText: '放弃',
                confirmButtonText: '领取数字身份',
                success() {
                  Z.push({ name: 'digitalIdCard' });
                },
              })
            : se.value.errorMsg &&
              j({ icon: 'error', title: se.value.errorMsg }));
        const { id: t, type: a } = ae.value;
        switch (a) {
          case 0:
            'number' == typeof de.value && (pe.value = de.value);
            break;
          case 1:
            Z.push({ name: 'activityAttendance', params: { id: String(t) } });
            break;
          case 2: {
            le.value = !0;
            const e = await I.app
              .createActivityAttendance({ data: { activityId: t } })
              .catch((e) => {
                1008005009 === (null == e ? void 0 : e.code) &&
                  L({
                    title: '数字身份保护说明',
                    msg: '你的账号里数字资产（数根、权益）已经超出安全范围啦。为了保护好这些资产，需要先领取实名数字身份，之后就能顺利参加活动、获取新的数根和权益啦～',
                    cancelButtonText: '放弃',
                    confirmButtonText: '领取数字身份',
                    success() {
                      Z.push({ name: 'digitalIdCard' });
                    },
                  });
              })
              .finally(() => (le.value = !1));
            0 === (null == e ? void 0 : e.code) &&
              (null == e ? void 0 : e.data) &&
              (j({ icon: 'success', title: '签到成功' }),
              (re.value = !0),
              ne(t, e.data));
            break;
          }
        }
      }
      function ie(e) {
        var t;
        const a = S();
        !(function () {
          const e = Date.now(),
            { endTime: t } = ae.value || {},
            a = Number(t);
          if (Number.isNaN(a) || !(e < a)) throw new Error('活动已过期');
          if (re.value) throw new Error('您已参加过该活动');
        })(),
          L({
            title: '参加活动',
            msg: `确认要参加${
              (null == (t = ae.value) ? void 0 : t.name) || ''
            }活动么？`,
            confirmButtonText: a.value ? '确认参加' : '登录并参加',
            cancelButtonText: '放弃',
            success() {
              a.value
                ? (async function (e) {
                    var t;
                    const a =
                      null == (t = null == ae ? void 0 : ae.value)
                        ? void 0
                        : t.id;
                    if (e && a)
                      try {
                        await q({ toast: !0, forceUpdate: !0 });
                        const t = await I.app
                          .createActivityAttendanceWithQRCode({
                            data: {
                              machineCode: e,
                              locationLongitude:
                                null === Y.value ? void 0 : String(Y.value),
                              locationLatitude:
                                null === G.value ? void 0 : String(G.value),
                            },
                          })
                          .catch((e) => {
                            1008005009 === (null == e ? void 0 : e.code) &&
                              L({
                                title: '数字身份保护说明',
                                msg: '你的账号里数字资产（数根、权益）已经超出安全范围啦。为了保护好这些资产，需要先领取实名数字身份，之后就能顺利参加活动、获取新的数根和权益啦～',
                                cancelButtonText: '放弃',
                                confirmButtonText: '领取数字身份',
                                success() {
                                  Z.push({ name: 'digitalIdCard' });
                                },
                              });
                          });
                        0 === (null == t ? void 0 : t.code) &&
                          (null == t ? void 0 : t.data) &&
                          (j({ icon: 'success', title: '参加活动成功' }),
                          ne(a, t.data));
                      } catch (l) {
                        j({ icon: 'error', title: l.message || '未知错误' });
                      }
                  })(e)
                : (_(Z.route.value), R());
            },
          });
      }
      async function ce() {
        var e;
        if (null == (e = ee.value) ? void 0 : e.id)
          try {
            let e = function () {
              'scanQrcode' === te.value && l && ie(l);
            };
            const { id: t, scene: a, machineCode: l } = ee.value;
            te.value = a || void 0;
            const r = Number.parseInt(t, 10);
            if (Number.isNaN(r))
              return void j({ icon: 'error', title: '无效的活动ID' });
            await (async function (e) {
              const t = await ('preview' === te.value
                ? I.app.previewActivity
                : I.app.getActivity)({ params: { id: e } });
              return (
                (null == t ? void 0 : t.data)
                  ? (ae.value = t.data)
                  : ((ae.value = null),
                    j({ icon: 'error', title: '没有获取到权益详情' })),
                ae.value
              );
            })(r),
              await (async function (e) {
                var t, a, l, r;
                const s = S();
                if (!s.value || 'preview' === te.value)
                  return (
                    (re.value = !1),
                    (se.value.flag = !1),
                    (se.value.errorCode = void 0),
                    void (se.value.errorMsg = '')
                  );
                const o = await I.app
                  .checkActivityAttended({
                    params: { activityId: e },
                    meta: { ignore: { unauthorized: !0, showToast: !0 } },
                  })
                  .catch(
                    (e) => (
                      (401 !== (null == e ? void 0 : e.code) &&
                        403 !== (null == e ? void 0 : e.code)) ||
                        (s.value = ''),
                      {
                        code: -1,
                        data: {
                          attendanceFlag: !1,
                          canAttendanceFlag: !1,
                          code: void 0,
                          msg: '',
                        },
                      }
                    )
                  );
                return (
                  (re.value =
                    (null == (t = null == o ? void 0 : o.data)
                      ? void 0
                      : t.attendanceFlag) || !1),
                  (se.value.flag =
                    (null == (a = null == o ? void 0 : o.data)
                      ? void 0
                      : a.canAttendanceFlag) || !1),
                  (se.value.errorCode =
                    null == (l = null == o ? void 0 : o.data)
                      ? void 0
                      : l.code),
                  (se.value.errorMsg =
                    (null == (r = null == o ? void 0 : o.data)
                      ? void 0
                      : r.msg) || ''),
                  re.value
                );
              })(r),
              setTimeout(() => {
                e();
              }, 0);
          } catch (t) {
            j({ icon: 'error', title: t.message || '未知错误' });
          }
      }
      H(async (e) => {
        (ee.value = e), ce();
      }),
        s(() => {
          ce();
        });
      const de = r(),
        pe = r(0),
        ve = r([0]);
      function Ae() {
        pe.value = 0;
      }
      async function me(e = '') {
        try {
          const { path: t, queryParams: a } = V(e);
          if ('/pages/checkout/qrcode' !== t) throw new Error('不合法的二维码');
          await (async function (e) {
            var t;
            if (!e) throw new Error('没有识别到活动');
            const a = await I.app.queryQRCodeInfo({
                params: { machineCode: e, manualCode: '' },
              }),
              { entityId: l, type: r } = a.data || {};
            if (!l || 1 !== Number(r)) throw new Error('不合法的二维码');
            Ae(),
              l === (null == (t = ae.value) ? void 0 : t.id)
                ? ie(e)
                : Z.replace({
                    name: 'activityDetail',
                    params: {
                      id: String(l),
                      scene: 'scanQrcode',
                      machineCode: e,
                    },
                  });
          })(null == a ? void 0 : a.machineCode);
        } catch (t) {
          Ae(), j({ icon: 'error', title: t.message || '不合法的二维码' });
        }
      }
      return (
        o(() => {
          const e = c().windowHeight;
          (de.value = 0.9 * e), (ve.value = [0, de.value]);
        }),
        (e, t) => {
          const a = D,
            l = v,
            r = N,
            s = f,
            o = O,
            c = z,
            S = T,
            _ = b,
            R = E,
            j = U,
            I = Q,
            V = i('layout-default-uni');
          return (
            d(),
            n(V, null, {
              default: u(() => {
                var e;
                return [
                  p(
                    I,
                    {
                      'custom-class': 'h-screen bg-#f5f5f5 pb-154rpx',
                      'banner-class':
                        'rounded-b-100rpx overflow-hidden !left-1/2 !translate-x-[-50%] !w-811rpx ',
                      'banner-height': '422rpx',
                      'banner-src': null == (e = ae.value) ? void 0 : e.picUrl,
                    },
                    {
                      default: u(() => [
                        p(
                          l,
                          { class: 'px-36rpx mt-[-96rpx]' },
                          {
                            default: u(() => {
                              var e;
                              return [
                                p(
                                  l,
                                  {
                                    class:
                                      'min-h-600rpx pt-26rpx px-40rpx pb-64rpx flex w-full flex-col',
                                    style: A({
                                      backgroundImage: `url(${m(
                                        '/assets/activity-detail-card-bg-Xors4_7S.png'
                                      )})`,
                                      backgroundSize: '100% 100%',
                                    }),
                                  },
                                  {
                                    default: u(() => {
                                      var e;
                                      return [
                                        p(
                                          a,
                                          {
                                            'custom-class': '!font-600',
                                            color: '#37445D',
                                            'line-height': 'normal',
                                            size: '34rpx',
                                            text:
                                              null == (e = ae.value)
                                                ? void 0
                                                : e.name,
                                          },
                                          null,
                                          8,
                                          ['text']
                                        ),
                                        p(l, {
                                          class:
                                            'my-18rpx bg-#E2E2E2 h-2rpx w-full scale-y-50',
                                        }),
                                        p(
                                          l,
                                          { class: 'gap-12rpx flex flex-col' },
                                          {
                                            default: u(() => [
                                              p(
                                                l,
                                                {
                                                  class:
                                                    'gap-14rpx flex items-start',
                                                },
                                                {
                                                  default: u(() => {
                                                    var e;
                                                    return [
                                                      p(
                                                        l,
                                                        {
                                                          class:
                                                            'w-168rpx flex flex-shrink-0 items-center',
                                                        },
                                                        {
                                                          default: u(() => [
                                                            p(
                                                              r,
                                                              {
                                                                src: m(
                                                                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALoSURBVHgBrZXPTxpREMdndh+JNWnC3ZiCPdfQxCrpRQiY9Fa8tdUWuPUmvfUm3nor3LzJD2N6pLcmgqxJD4gmgn+A7MHeadJYE2GnMyj08VObdJIlvHkzn533nXmAcA8LBCLuK5hyy/cpuGpaVqF5Vw5O2lwIryVMwJccFujfoZrjOOnjg73MP4H9gVceMl1l3vUQwCEHFZBhHSSgj30R9i3zwsb2dbBifbHvBAvUUa5TRGwiOfFKcdca+fIXMQ+1nTIRuQnbweP9vdpYcK9SA+HBtfHUsjITtezCwSF40Db74g090DFVUo6PphHUg6R5z1be+OTR4yvfMrbEEoL7UrUS+l4fGJAbhZCRhK5riRt4qR42DDJP5VkKvW3oL5BYAyjNyRuBQMw9BPaH1wOsi9uBdrrrWwy9jnDIZ/5qsZar3MCgyIRklkU2rSRLcn+plm8I7PCJudtNvQmI5gZ/1qrF/Gq1tFuQRor2skem6h1d/JJrAg2DOyCCwWZ5CZyvukO0l9EjRE9fLtBPHsVhKXijKU3o52KDD74Mg0boQSJ7IPaRMLor9ReMIoF7gbU+uZ1dRMgSwc5ieH3TaLWyHaZysTw8OUqlurnSH5YC2jeM/oqnWqrW0Ykg0vVV9vMZfuEWP0kGNjoPYAwdiOuTw2Mc4yrsE+0yGbp2MjasXVTveKWYS6IyvTIVDkJ8umV4Kwf5TK9ajuVbGuWTZXVhlL7gqlO/XU6UK9vhZbAHv6nOhhFGSu1ItdPXRkr3m/rCtmtXs3NP6qxucmZuHn6cnx3CBGNtNzk2ZhDFv5dztbFgsYvzM3t2zie/IclZr8++aNTro6ByI1nJT6z51lEpvz24b45KujivWzOP573j4P7QWhTQ2OaxS1dLuY+jGCPBYixDoQvXZelUylBucrZazL0flz/xH6QDCq2nuDkbBJTEm5uVkEqPSrnEpLw7wWL+8Lskgzdvlx+OivkU/C97vhLzyQ27b/wfWV5Kjq47K7QAAAAASUVORK5CYII='
                                                                ),
                                                              },
                                                              null,
                                                              8,
                                                              ['src']
                                                            ),
                                                            p(s, {
                                                              'custom-class':
                                                                'flex-shrink-0 ml-10rpx',
                                                              text: '活动地址：',
                                                              color: '#37445D',
                                                              size: '27rpx',
                                                            }),
                                                          ]),
                                                          _: 1,
                                                        }
                                                      ),
                                                      p(
                                                        s,
                                                        {
                                                          'custom-class':
                                                            'font-300',
                                                          text:
                                                            (null ==
                                                            (e = ae.value)
                                                              ? void 0
                                                              : e.address) ||
                                                            '-',
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
                                              p(
                                                l,
                                                {
                                                  class:
                                                    'gap-14rpx flex items-start',
                                                },
                                                {
                                                  default: u(() => [
                                                    p(
                                                      l,
                                                      {
                                                        class:
                                                          'w-168rpx flex flex-shrink-0 items-center',
                                                      },
                                                      {
                                                        default: u(() => [
                                                          p(
                                                            r,
                                                            {
                                                              src: m(
                                                                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgBpVQ9T9tgEL577XagDNnbKh97iysVyFarmLkZK5SQ8A/arVucrVvpL2iUIGZ3TijO1NB0aOieGgnmgtSPAezj7oVICbHBgmdIfK/vHt9799whJOC5U7YNoiooZRNBBgEyAPSDAAKKos+DL9vNuDiMJ8JP/CbH5gER+fwcaGcSUrTZXgCCIKKwcZV4irDolOsE6HIWPQXk9rtbPsRgcXXNUmS4/PgqAtgcdNtvZ5yEbNmp0JKz7kJKFNlXYhadyofxmaG/+HKthqg2ObvGt27LTUt4OBr6jwsW8jXfPSo8OTka/ezrKy+vVH6BQtjrtPJXg2y7lPljzlvfE66v453KLpfJmjsz8mpppVySBoQUbcQ5/zPmbQNwF64BAjVEBf/N05pimwkxSMqAFGbgBlw2zydQtuICZFkaQ7grmINltSAZ5kWwcFcgBVI6M62/yGPSjjB8NuhszyQihL+RMJtE9ODU8P7eC2PO7wdTB4Q5/g1MHqEeIVTZiO2y7zeP+a8JNwHhBV9hKE3xpOUyw3BLFO3XOWa0WMqe0i1n2bDW6nBLRIbpCke/024qne2FqO3JmUydHe8ARKyKuMXWs3w42g/GM/mw8BSORvu9tGSynbghH/e67fc6uWmHdV5dVJddFyJtJE2P3pkAdb0bhWyn9Wb8bmbBFlcrNZJ6EuWEGGSkkA60M1FWNjif59jn2OBSfd3Z8ibjERKgl4aCEkZoEV7olOt0ojc4gDcXmv6lpKZwDuAa6iTxZNykAAAAAElFTkSuQmCC'
                                                              ),
                                                            },
                                                            null,
                                                            8,
                                                            ['src']
                                                          ),
                                                          p(s, {
                                                            'custom-class':
                                                              'flex-shrink-0 ml-14rpx',
                                                            text: '活动时间：',
                                                            color: '#37445D',
                                                            size: '27rpx',
                                                          }),
                                                        ]),
                                                        _: 1,
                                                      }
                                                    ),
                                                    p(
                                                      l,
                                                      {
                                                        class:
                                                          'flex flex-grow flex-col',
                                                      },
                                                      {
                                                        default: u(() => {
                                                          var e, t;
                                                          return [
                                                            p(
                                                              s,
                                                              {
                                                                'custom-class':
                                                                  'font-300',
                                                                text: m(J)(
                                                                  null ==
                                                                    (e =
                                                                      ae.value)
                                                                    ? void 0
                                                                    : e.startTime,
                                                                  W
                                                                ),
                                                              },
                                                              null,
                                                              8,
                                                              ['text']
                                                            ),
                                                            p(
                                                              s,
                                                              {
                                                                'custom-class':
                                                                  'font-300',
                                                                text: m(J)(
                                                                  null ==
                                                                    (t =
                                                                      ae.value)
                                                                    ? void 0
                                                                    : t.endTime,
                                                                  W
                                                                ),
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
                                                }
                                              ),
                                              p(
                                                l,
                                                {
                                                  class:
                                                    'gap-14rpx flex items-center',
                                                },
                                                {
                                                  default: u(() => {
                                                    var e, t;
                                                    return [
                                                      p(
                                                        l,
                                                        {
                                                          class:
                                                            'w-168rpx flex flex-shrink-0 items-center',
                                                        },
                                                        {
                                                          default: u(() => [
                                                            p(
                                                              r,
                                                              {
                                                                src: m(
                                                                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD1SURBVHgBlVBLTgJBEH1VRYzs5gh6AsaFsrQx4163qJEjeAVvoDdASFzrGhJ76WfhcAO9waxg0zNFQxhoPsmEt+hU9XuVl/eAChhzFYV7rRyayc0DIPeAZlD8Kek/AecTpSNPH5c6nj2nF+2OksR1x62vYb9VcP7sCVt3tWtPj4zpROsOIiDNU2t72Wz9GbymgbMdH6jx49vSQUQslBvYAQKllMOs9gXOkttfgr5s5vCSBhPePwf97lpofzpSleh72DuZ57psx6IcHTp5srabbbVEqmlRuCUR5gjB5SBOLRPH2AfN5O6jSsObH2HnlQe+pUdUYAoqSVReBzLi1AAAAABJRU5ErkJggg=='
                                                                ),
                                                              },
                                                              null,
                                                              8,
                                                              ['src']
                                                            ),
                                                            p(s, {
                                                              'custom-class':
                                                                'flex-shrink-0 ml-10rpx',
                                                              text: '主办方：',
                                                              color: '#37445D',
                                                              size: '27rpx',
                                                            }),
                                                          ]),
                                                          _: 1,
                                                        }
                                                      ),
                                                      (
                                                        null == (e = ae.value)
                                                          ? void 0
                                                          : e.sponsorLogoUrl
                                                      )
                                                        ? (d(),
                                                          n(
                                                            o,
                                                            {
                                                              key: 0,
                                                              'custom-class':
                                                                'flex-shrink-0',
                                                              src: ae.value
                                                                .sponsorLogoUrl,
                                                              border: !0,
                                                              size: '72rpx',
                                                            },
                                                            null,
                                                            8,
                                                            ['src']
                                                          ))
                                                        : g('', !0),
                                                      p(
                                                        s,
                                                        {
                                                          'custom-class':
                                                            'font-300',
                                                          lines: 2,
                                                          text:
                                                            null ==
                                                            (t = ae.value)
                                                              ? void 0
                                                              : t.sponsorName,
                                                          color: '#000000',
                                                          size: '27rpx',
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
                                          }
                                        ),
                                        p(
                                          l,
                                          {
                                            class:
                                              'mt-70rpx gap-16rpx flex flex-col',
                                          },
                                          {
                                            default: u(() => [
                                              (d(!0),
                                              x(
                                                y,
                                                null,
                                                h(
                                                  m($),
                                                  (e) => (
                                                    d(),
                                                    n(
                                                      l,
                                                      { key: e.key },
                                                      {
                                                        default: u(() => [
                                                          p(
                                                            l,
                                                            {
                                                              class:
                                                                'gap-24rpx mb-28rpx flex items-center',
                                                            },
                                                            {
                                                              default: u(() => [
                                                                p(
                                                                  r,
                                                                  {
                                                                    src: e.icon,
                                                                    width:
                                                                      '36rpx',
                                                                    height:
                                                                      '36rpx',
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ['src']
                                                                ),
                                                                p(
                                                                  a,
                                                                  {
                                                                    text: e.title,
                                                                    color:
                                                                      '#37445D',
                                                                    size: '27rpx',
                                                                    'line-height':
                                                                      'normal',
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
                                                          p(
                                                            l,
                                                            {
                                                              class:
                                                                'flex flex-row flex-wrap',
                                                            },
                                                            {
                                                              default: u(() => [
                                                                (d(!0),
                                                                x(
                                                                  y,
                                                                  null,
                                                                  h(
                                                                    e.products,
                                                                    (t) => (
                                                                      d(),
                                                                      n(
                                                                        l,
                                                                        {
                                                                          key: t.id,
                                                                          class:
                                                                            'max-w-1/2 mb-16rpx basis-1/2',
                                                                        },
                                                                        {
                                                                          default:
                                                                            u(
                                                                              () => [
                                                                                p(
                                                                                  l,
                                                                                  {
                                                                                    class:
                                                                                      'pr-24rpx pl-80rpx py-2rpx relative inline-flex max-w-full rounded-full',
                                                                                    style:
                                                                                      A(
                                                                                        {
                                                                                          background:
                                                                                            e.bg,
                                                                                        }
                                                                                      ),
                                                                                    onClick:
                                                                                      (
                                                                                        a
                                                                                      ) =>
                                                                                        (function (
                                                                                          e,
                                                                                          t
                                                                                        ) {
                                                                                          if (
                                                                                            'preview' !==
                                                                                            te.value
                                                                                          )
                                                                                            switch (
                                                                                              t
                                                                                            ) {
                                                                                              case 'profit':
                                                                                                Z.push(
                                                                                                  {
                                                                                                    name: 'profitDetail',
                                                                                                    params:
                                                                                                      {
                                                                                                        pId: String(
                                                                                                          e
                                                                                                        ),
                                                                                                        type: 'product',
                                                                                                      },
                                                                                                  }
                                                                                                );
                                                                                                break;
                                                                                              case 'pythroot':
                                                                                                Z.push(
                                                                                                  {
                                                                                                    name: 'pythrootDetail',
                                                                                                    params:
                                                                                                      {
                                                                                                        pId: String(
                                                                                                          e
                                                                                                        ),
                                                                                                        type: 'product',
                                                                                                      },
                                                                                                  }
                                                                                                );
                                                                                            }
                                                                                        })(
                                                                                          t.productId,
                                                                                          e.key
                                                                                        ),
                                                                                  },
                                                                                  {
                                                                                    default:
                                                                                      u(
                                                                                        () => [
                                                                                          t.picUrl
                                                                                            ? (d(),
                                                                                              n(
                                                                                                o,
                                                                                                {
                                                                                                  key: 0,
                                                                                                  'custom-class':
                                                                                                    '!absolute top-1/2 left-0 translate-y-[-50%] bg-#f5f5f5',
                                                                                                  src: t.picUrl,
                                                                                                  border:
                                                                                                    !0,
                                                                                                  size: '60rpx',
                                                                                                },
                                                                                                null,
                                                                                                8,
                                                                                                [
                                                                                                  'src',
                                                                                                ]
                                                                                              ))
                                                                                            : g(
                                                                                                '',
                                                                                                !0
                                                                                              ),
                                                                                          p(
                                                                                            c,
                                                                                            {
                                                                                              'custom-class':
                                                                                                'min-w-120rpx  leading-38rpx text-center font-500 text-24rpx truncate',
                                                                                              text: t.name,
                                                                                              from:
                                                                                                'pythroot' ===
                                                                                                e.key
                                                                                                  ? '#09DAFF'
                                                                                                  : void 0,
                                                                                              to:
                                                                                                'pythroot' ===
                                                                                                e.key
                                                                                                  ? '#29A2FB'
                                                                                                  : void 0,
                                                                                            },
                                                                                            null,
                                                                                            8,
                                                                                            [
                                                                                              'text',
                                                                                              'from',
                                                                                              'to',
                                                                                            ]
                                                                                          ),
                                                                                        ]
                                                                                      ),
                                                                                    _: 2,
                                                                                  },
                                                                                  1032,
                                                                                  [
                                                                                    'style',
                                                                                    'onClick',
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          _: 2,
                                                                        },
                                                                        1024
                                                                      )
                                                                    )
                                                                  ),
                                                                  128
                                                                )),
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
                                      ];
                                    }),
                                    _: 1,
                                  },
                                  8,
                                  ['style']
                                ),
                                p(
                                  S,
                                  {
                                    'custom-class': 'mx-8rpx mt-28rpx',
                                    title: '详细介绍',
                                    'dompurify-html':
                                      (null == (e = ae.value)
                                        ? void 0
                                        : e.description) ||
                                      '<p>暂无详细介绍</p>',
                                  },
                                  null,
                                  8,
                                  ['dompurify-html']
                                ),
                              ];
                            }),
                            _: 1,
                          }
                        ),
                        p(
                          l,
                          {
                            class:
                              'py-36rpx px-54rpx z-999 fixed bottom-0 left-0 right-0',
                          },
                          {
                            default: u(() => [
                              w(
                                p(
                                  _,
                                  {
                                    class:
                                      'w-full !opacity-100 shadow-[2rpx_2rpx_2rpx_0_rgba(0,0,0,0.15)]',
                                    onClick: ue,
                                    block: '',
                                    loading: le.value,
                                    disabled: re.value,
                                    type: re.value ? 'info' : 'primary',
                                  },
                                  { default: u(() => [B(k(m(oe)), 1)]), _: 1 },
                                  8,
                                  ['loading', 'disabled', 'type']
                                ),
                                [[C, Boolean(m(oe))]]
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        p(
                          j,
                          {
                            'custom-class': '!z-1000 bg-black rounded-none',
                            height: pe.value,
                            'onUpdate:height':
                              t[0] || (t[0] = (e) => (pe.value = e)),
                            anchors: ve.value,
                            'safe-area-inset-bottom': '',
                          },
                          {
                            default: u(() => [
                              'number' == typeof de.value && pe.value > 100
                                ? (d(), n(R, { key: 0, onResult: me }))
                                : g('', !0),
                            ]),
                            _: 1,
                          },
                          8,
                          ['height', 'anchors']
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ['banner-src']
                  ),
                ];
              }),
              _: 1,
            })
          );
        }
      );
    },
  });
export { L as default };
