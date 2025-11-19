import {
  d as e,
  B as t,
  H as n,
  b3 as r,
  C as i,
  p as a,
  c as o,
  w as s,
  r as l,
  P as c,
  D as u,
  a as d,
  b as p,
  A as f,
  e as m,
  t as g,
  G as v,
  F as h,
  y as x,
  E as y,
  n as _,
  N as w,
  O as S,
  Q as I,
  b7 as k,
} from './index-DLEqDFWl.js';
import { _ as b } from './BannerView.vue_vue_type_script_setup_true_lang.C9IVHeQj.js';
import {
  _ as A,
  a as T,
} from './HtmlCard.vue_vue_type_script_setup_true_lang.Xzk1ycfw.js';
import { _ as M } from './Avatar.vue_vue_type_script_setup_true_lang.C-tG9hQO.js';
import { _ as C } from './GradientText.vue_vue_type_script_setup_true_lang.7MJiORDR.js';
import { _ as P, P as B } from './profit-detail-card-bg.DM_Bi4xb.js';
import { _ as N } from './PyTitle.DbeyPiIU.js';
import { o as V } from './on-chain.ItkuIJXP.js';
import { T as E } from './ticket.Bwxup39T.js';
import { u as j } from './usePageOptions.zFe1iZJE.js';
import { g as O } from './commonjsHelpers.lGe4XDVY.js';
import { f as U } from './index.BwehUw5u.js';
var D,
  L = { exports: {} };
(D = 'object' == typeof window && window),
  (L.exports = (function (e, t) {
    var n, r, i, a, o, s, l, c, u, d, p, f, m, g, v, h, x, y, _, w, S, I;
    if (e)
      return e.jWeixin
        ? e.jWeixin
        : ((n = {
            config: 'preVerifyJSAPI',
            onMenuShareTimeline: 'menu:share:timeline',
            onMenuShareAppMessage: 'menu:share:appmessage',
            onMenuShareQQ: 'menu:share:qq',
            onMenuShareWeibo: 'menu:share:weiboApp',
            onMenuShareQZone: 'menu:share:QZone',
            previewImage: 'imagePreview',
            getLocation: 'geoLocation',
            openProductSpecificView: 'openProductViewWithPid',
            addCard: 'batchAddCard',
            openCard: 'batchViewCard',
            chooseWXPay: 'getBrandWCPayRequest',
            openEnterpriseRedPacket: 'getRecevieBizHongBaoRequest',
            startSearchBeacons: 'startMonitoringBeacons',
            stopSearchBeacons: 'stopMonitoringBeacons',
            onSearchBeacons: 'onBeaconsInRange',
            consumeAndShareCard: 'consumedShareCard',
            openAddress: 'editAddress',
          }),
          (r = (function () {
            var e,
              t = {};
            for (e in n) t[n[e]] = e;
            return t;
          })()),
          (i = e.document),
          (a = i.title),
          (o = navigator.userAgent.toLowerCase()),
          (f = navigator.platform.toLowerCase()),
          (s = !(!f.match('mac') && !f.match('win'))),
          (l = -1 != o.indexOf('wxdebugger')),
          (c = -1 != o.indexOf('micromessenger')),
          (u = -1 != o.indexOf('android')),
          (d = -1 != o.indexOf('iphone') || -1 != o.indexOf('ipad')),
          (p = (f =
            o.match(/micromessenger\/(\d+\.\d+\.\d+)/) ||
            o.match(/micromessenger\/(\d+\.\d+)/))
            ? f[1]
            : ''),
          (m = {
            initStartTime: N(),
            initEndTime: 0,
            preVerifyStartTime: 0,
            preVerifyEndTime: 0,
          }),
          (g = {
            version: 1,
            appId: '',
            initTime: 0,
            preVerifyTime: 0,
            networkType: '',
            isPreVerifyOk: 1,
            systemType: d ? 1 : u ? 2 : -1,
            clientVersion: p,
            url: encodeURIComponent(location.href),
          }),
          (v = {}),
          (h = { _completes: [] }),
          (x = { state: 0, data: {} }),
          V(function () {
            m.initEndTime = N();
          }),
          (y = !1),
          (_ = []),
          (w = {
            config: function (t) {
              P('config', (v = t));
              var r = !1 !== v.check;
              V(function () {
                if (r)
                  k(
                    n.config,
                    {
                      verifyJsApiList: C(v.jsApiList),
                      verifyOpenTagList: C(v.openTagList),
                    },
                    ((h._complete = function (e) {
                      (m.preVerifyEndTime = N()), (x.state = 1), (x.data = e);
                    }),
                    (h.success = function (e) {
                      g.isPreVerifyOk = 0;
                    }),
                    (h.fail = function (e) {
                      h._fail ? h._fail(e) : (x.state = -1);
                    }),
                    (a = h._completes).push(function () {
                      B();
                    }),
                    (h.complete = function (e) {
                      for (var t = 0, n = a.length; t < n; ++t) a[t]();
                      h._completes = [];
                    }),
                    h)
                  ),
                    (m.preVerifyStartTime = N());
                else {
                  x.state = 1;
                  for (var e = h._completes, t = 0, i = e.length; t < i; ++t)
                    e[t]();
                  h._completes = [];
                }
                var a;
              }),
                w.invoke ||
                  ((w.invoke = function (t, n, r) {
                    e.WeixinJSBridge && WeixinJSBridge.invoke(t, A(n), r);
                  }),
                  (w.on = function (t, n) {
                    e.WeixinJSBridge && WeixinJSBridge.on(t, n);
                  }));
            },
            ready: function (e) {
              (0 != x.state || (h._completes.push(e), !c && v.debug)) && e();
            },
            error: function (e) {
              p < '6.0.2' || (-1 == x.state ? e(x.data) : (h._fail = e));
            },
            checkJsApi: function (e) {
              k(
                'checkJsApi',
                { jsApiList: C(e.jsApiList) },
                ((e._complete = function (e) {
                  u && (n = e.checkResult) && (e.checkResult = JSON.parse(n));
                  var t,
                    n = e,
                    i = n.checkResult;
                  for (t in i) {
                    var a = r[t];
                    a && ((i[a] = i[t]), delete i[t]);
                  }
                }),
                e)
              );
            },
            onMenuShareTimeline: function (e) {
              b(
                n.onMenuShareTimeline,
                {
                  complete: function () {
                    k(
                      'shareTimeline',
                      {
                        title: e.title || a,
                        desc: e.title || a,
                        img_url: e.imgUrl || '',
                        link: e.link || location.href,
                        type: e.type || 'link',
                        data_url: e.dataUrl || '',
                      },
                      e
                    );
                  },
                },
                e
              );
            },
            onMenuShareAppMessage: function (e) {
              b(
                n.onMenuShareAppMessage,
                {
                  complete: function (t) {
                    'favorite' === t.scene
                      ? k('sendAppMessage', {
                          title: e.title || a,
                          desc: e.desc || '',
                          link: e.link || location.href,
                          img_url: e.imgUrl || '',
                          type: e.type || 'link',
                          data_url: e.dataUrl || '',
                        })
                      : k(
                          'sendAppMessage',
                          {
                            title: e.title || a,
                            desc: e.desc || '',
                            link: e.link || location.href,
                            img_url: e.imgUrl || '',
                            type: e.type || 'link',
                            data_url: e.dataUrl || '',
                          },
                          e
                        );
                  },
                },
                e
              );
            },
            onMenuShareQQ: function (e) {
              b(
                n.onMenuShareQQ,
                {
                  complete: function () {
                    k(
                      'shareQQ',
                      {
                        title: e.title || a,
                        desc: e.desc || '',
                        img_url: e.imgUrl || '',
                        link: e.link || location.href,
                      },
                      e
                    );
                  },
                },
                e
              );
            },
            onMenuShareWeibo: function (e) {
              b(
                n.onMenuShareWeibo,
                {
                  complete: function () {
                    k(
                      'shareWeiboApp',
                      {
                        title: e.title || a,
                        desc: e.desc || '',
                        img_url: e.imgUrl || '',
                        link: e.link || location.href,
                      },
                      e
                    );
                  },
                },
                e
              );
            },
            onMenuShareQZone: function (e) {
              b(
                n.onMenuShareQZone,
                {
                  complete: function () {
                    k(
                      'shareQZone',
                      {
                        title: e.title || a,
                        desc: e.desc || '',
                        img_url: e.imgUrl || '',
                        link: e.link || location.href,
                      },
                      e
                    );
                  },
                },
                e
              );
            },
            updateTimelineShareData: function (e) {
              k(
                'updateTimelineShareData',
                { title: e.title, link: e.link, imgUrl: e.imgUrl },
                e
              );
            },
            updateAppMessageShareData: function (e) {
              k(
                'updateAppMessageShareData',
                {
                  title: e.title,
                  desc: e.desc,
                  link: e.link,
                  imgUrl: e.imgUrl,
                },
                e
              );
            },
            startRecord: function (e) {
              k('startRecord', {}, e);
            },
            stopRecord: function (e) {
              k('stopRecord', {}, e);
            },
            onVoiceRecordEnd: function (e) {
              b('onVoiceRecordEnd', e);
            },
            playVoice: function (e) {
              k('playVoice', { localId: e.localId }, e);
            },
            pauseVoice: function (e) {
              k('pauseVoice', { localId: e.localId }, e);
            },
            stopVoice: function (e) {
              k('stopVoice', { localId: e.localId }, e);
            },
            onVoicePlayEnd: function (e) {
              b('onVoicePlayEnd', e);
            },
            uploadVoice: function (e) {
              k(
                'uploadVoice',
                {
                  localId: e.localId,
                  isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
                },
                e
              );
            },
            downloadVoice: function (e) {
              k(
                'downloadVoice',
                {
                  serverId: e.serverId,
                  isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
                },
                e
              );
            },
            translateVoice: function (e) {
              k(
                'translateVoice',
                {
                  localId: e.localId,
                  isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
                },
                e
              );
            },
            chooseImage: function (e) {
              k(
                'chooseImage',
                {
                  scene: '1|2',
                  count: e.count || 9,
                  sizeType: e.sizeType || ['original', 'compressed'],
                  sourceType: e.sourceType || ['album', 'camera'],
                },
                ((e._complete = function (e) {
                  if (u) {
                    var t = e.localIds;
                    try {
                      t && (e.localIds = JSON.parse(t));
                    } catch (n) {}
                  }
                }),
                e)
              );
            },
            getLocation: function (e) {
              (e = e || {}),
                k(
                  n.getLocation,
                  { type: e.type || 'wgs84' },
                  ((e._complete = function (e) {
                    delete e.type;
                  }),
                  e)
                );
            },
            previewImage: function (e) {
              k(n.previewImage, { current: e.current, urls: e.urls }, e);
            },
            uploadImage: function (e) {
              k(
                'uploadImage',
                {
                  localId: e.localId,
                  isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
                },
                e
              );
            },
            downloadImage: function (e) {
              k(
                'downloadImage',
                {
                  serverId: e.serverId,
                  isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
                },
                e
              );
            },
            getLocalImgData: function (e) {
              !1 === y
                ? ((y = !0),
                  k(
                    'getLocalImgData',
                    { localId: e.localId },
                    ((e._complete = function (e) {
                      var t;
                      (y = !1),
                        0 < _.length &&
                          ((t = _.shift()), wx.getLocalImgData(t));
                    }),
                    e)
                  ))
                : _.push(e);
            },
            getNetworkType: function (e) {
              k(
                'getNetworkType',
                {},
                ((e._complete = function (e) {
                  var t = e,
                    n =
                      ((e = t.errMsg),
                      (t.errMsg = 'getNetworkType:ok'),
                      t.subtype);
                  if ((delete t.subtype, n)) t.networkType = n;
                  else {
                    n = e.indexOf(':');
                    var r = e.substring(n + 1);
                    switch (r) {
                      case 'wifi':
                      case 'edge':
                      case 'wwan':
                        t.networkType = r;
                        break;
                      default:
                        t.errMsg = 'getNetworkType:fail';
                    }
                  }
                }),
                e)
              );
            },
            openLocation: function (e) {
              k(
                'openLocation',
                {
                  latitude: e.latitude,
                  longitude: e.longitude,
                  name: e.name || '',
                  address: e.address || '',
                  scale: e.scale || 28,
                  infoUrl: e.infoUrl || '',
                },
                e
              );
            },
            hideOptionMenu: function (e) {
              k('hideOptionMenu', {}, e);
            },
            showOptionMenu: function (e) {
              k('showOptionMenu', {}, e);
            },
            closeWindow: function (e) {
              k('closeWindow', {}, (e = e || {}));
            },
            hideMenuItems: function (e) {
              k('hideMenuItems', { menuList: e.menuList }, e);
            },
            showMenuItems: function (e) {
              k('showMenuItems', { menuList: e.menuList }, e);
            },
            hideAllNonBaseMenuItem: function (e) {
              k('hideAllNonBaseMenuItem', {}, e);
            },
            showAllNonBaseMenuItem: function (e) {
              k('showAllNonBaseMenuItem', {}, e);
            },
            scanQRCode: function (e) {
              k(
                'scanQRCode',
                {
                  needResult: (e = e || {}).needResult || 0,
                  scanType: e.scanType || ['qrCode', 'barCode'],
                },
                ((e._complete = function (e) {
                  var t;
                  d &&
                    (t = e.resultStr) &&
                    ((t = JSON.parse(t)),
                    (e.resultStr =
                      t && t.scan_code && t.scan_code.scan_result));
                }),
                e)
              );
            },
            openAddress: function (e) {
              k(
                n.openAddress,
                {},
                ((e._complete = function (e) {
                  (e.postalCode = e.addressPostalCode),
                    delete e.addressPostalCode,
                    (e.provinceName = e.proviceFirstStageName),
                    delete e.proviceFirstStageName,
                    (e.cityName = e.addressCitySecondStageName),
                    delete e.addressCitySecondStageName,
                    (e.countryName = e.addressCountiesThirdStageName),
                    delete e.addressCountiesThirdStageName,
                    (e.detailInfo = e.addressDetailInfo),
                    delete e.addressDetailInfo;
                }),
                e)
              );
            },
            openProductSpecificView: function (e) {
              k(
                n.openProductSpecificView,
                {
                  pid: e.productId,
                  view_type: e.viewType || 0,
                  ext_info: e.extInfo,
                },
                e
              );
            },
            addCard: function (e) {
              for (
                var t = e.cardList, r = [], i = 0, a = t.length;
                i < a;
                ++i
              ) {
                var o = { card_id: (o = t[i]).cardId, card_ext: o.cardExt };
                r.push(o);
              }
              k(
                n.addCard,
                { card_list: r },
                ((e._complete = function (e) {
                  if ((t = e.card_list)) {
                    for (
                      var t, n = 0, r = (t = JSON.parse(t)).length;
                      n < r;
                      ++n
                    ) {
                      var i = t[n];
                      (i.cardId = i.card_id),
                        (i.cardExt = i.card_ext),
                        (i.isSuccess = !!i.is_succ),
                        delete i.card_id,
                        delete i.card_ext,
                        delete i.is_succ;
                    }
                    (e.cardList = t), delete e.card_list;
                  }
                }),
                e)
              );
            },
            chooseCard: function (e) {
              k(
                'chooseCard',
                {
                  app_id: v.appId,
                  location_id: e.shopId || '',
                  sign_type: e.signType || 'SHA1',
                  card_id: e.cardId || '',
                  card_type: e.cardType || '',
                  card_sign: e.cardSign,
                  time_stamp: e.timestamp + '',
                  nonce_str: e.nonceStr,
                },
                ((e._complete = function (e) {
                  (e.cardList = e.choose_card_info), delete e.choose_card_info;
                }),
                e)
              );
            },
            openCard: function (e) {
              for (
                var t = e.cardList, r = [], i = 0, a = t.length;
                i < a;
                ++i
              ) {
                var o = { card_id: (o = t[i]).cardId, code: o.code };
                r.push(o);
              }
              k(n.openCard, { card_list: r }, e);
            },
            consumeAndShareCard: function (e) {
              k(
                n.consumeAndShareCard,
                { consumedCardId: e.cardId, consumedCode: e.code },
                e
              );
            },
            chooseWXPay: function (e) {
              k(n.chooseWXPay, T(e), e), B({ jsApiName: 'chooseWXPay' });
            },
            openEnterpriseRedPacket: function (e) {
              k(n.openEnterpriseRedPacket, T(e), e);
            },
            startSearchBeacons: function (e) {
              k(n.startSearchBeacons, { ticket: e.ticket }, e);
            },
            stopSearchBeacons: function (e) {
              k(n.stopSearchBeacons, {}, e);
            },
            onSearchBeacons: function (e) {
              b(n.onSearchBeacons, e);
            },
            openEnterpriseChat: function (e) {
              k(
                'openEnterpriseChat',
                { useridlist: e.userIds, chatname: e.groupName },
                e
              );
            },
            launchMiniProgram: function (e) {
              k(
                'launchMiniProgram',
                {
                  targetAppId: e.targetAppId,
                  path: (function (e) {
                    var t;
                    if ('string' == typeof e && 0 < e.length)
                      return (
                        (t = e.split('?')[0]),
                        (t += '.html'),
                        void 0 !== (e = e.split('?')[1]) ? t + '?' + e : t
                      );
                  })(e.path),
                  envVersion: e.envVersion,
                },
                e
              );
            },
            openBusinessView: function (e) {
              k(
                'openBusinessView',
                {
                  businessType: e.businessType,
                  queryString: e.queryString || '',
                  envVersion: e.envVersion,
                },
                ((e._complete = function (e) {
                  if (u) {
                    var t = e.extraData;
                    if (t)
                      try {
                        e.extraData = JSON.parse(t);
                      } catch (n) {
                        e.extraData = {};
                      }
                  }
                }),
                e)
              );
            },
            miniProgram: {
              navigateBack: function (e) {
                (e = e || {}),
                  V(function () {
                    k(
                      'invokeMiniProgramAPI',
                      { name: 'navigateBack', arg: { delta: e.delta || 1 } },
                      e
                    );
                  });
              },
              navigateTo: function (e) {
                V(function () {
                  k(
                    'invokeMiniProgramAPI',
                    { name: 'navigateTo', arg: { url: e.url } },
                    e
                  );
                });
              },
              redirectTo: function (e) {
                V(function () {
                  k(
                    'invokeMiniProgramAPI',
                    { name: 'redirectTo', arg: { url: e.url } },
                    e
                  );
                });
              },
              switchTab: function (e) {
                V(function () {
                  k(
                    'invokeMiniProgramAPI',
                    { name: 'switchTab', arg: { url: e.url } },
                    e
                  );
                });
              },
              reLaunch: function (e) {
                V(function () {
                  k(
                    'invokeMiniProgramAPI',
                    { name: 'reLaunch', arg: { url: e.url } },
                    e
                  );
                });
              },
              postMessage: function (e) {
                V(function () {
                  k(
                    'invokeMiniProgramAPI',
                    { name: 'postMessage', arg: e.data || {} },
                    e
                  );
                });
              },
              getEnv: function (t) {
                V(function () {
                  t({ miniprogram: 'miniprogram' === e.__wxjs_environment });
                });
              },
            },
          }),
          (S = 1),
          (I = {}),
          i.addEventListener(
            'error',
            function (e) {
              var t, n, r;
              u ||
                ((r = (t = e.target).tagName),
                (n = t.src),
                'IMG' != r && 'VIDEO' != r && 'AUDIO' != r && 'SOURCE' != r) ||
                (-1 != n.indexOf('wxlocalresource://') &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  (r = t['wx-id']) || ((r = S++), (t['wx-id'] = r)),
                  I[r] ||
                    ((I[r] = !0),
                    wx.ready(function () {
                      wx.getLocalImgData({
                        localId: n,
                        success: function (e) {
                          t.src = e.localData;
                        },
                      });
                    }))));
            },
            !0
          ),
          i.addEventListener(
            'load',
            function (e) {
              var t;
              u ||
                ((t = (e = e.target).tagName),
                e.src,
                'IMG' != t && 'VIDEO' != t && 'AUDIO' != t && 'SOURCE' != t) ||
                ((t = e['wx-id']) && (I[t] = !1));
            },
            !0
          ),
          t && (e.wx = e.jWeixin = w),
          w);
    function k(t, n, r) {
      e.WeixinJSBridge
        ? WeixinJSBridge.invoke(t, A(n), function (e) {
            M(t, e, r);
          })
        : P(t, r);
    }
    function b(t, n, r) {
      e.WeixinJSBridge
        ? WeixinJSBridge.on(t, function (e) {
            r && r.trigger && r.trigger(e), M(t, e, n);
          })
        : P(t, r || n);
    }
    function A(e) {
      return (
        ((e = e || {}).appId = v.appId),
        (e.verifyAppId = v.appId),
        (e.verifySignType = 'sha1'),
        (e.verifyTimestamp = v.timestamp + ''),
        (e.verifyNonceStr = v.nonceStr),
        (e.verifySignature = v.signature),
        e
      );
    }
    function T(e) {
      return {
        timeStamp: e.timestamp + '',
        nonceStr: e.nonceStr,
        package: e.package,
        paySign: e.paySign,
        signType: e.signType || 'SHA1',
      };
    }
    function M(e, t, n) {
      ('openEnterpriseChat' != e && 'openBusinessView' !== e) ||
        (t.errCode = t.err_code),
        delete t.err_code,
        delete t.err_desc,
        delete t.err_detail;
      var i,
        a,
        o,
        s,
        l = t.errMsg;
      switch (
        (l ||
          ((l = t.err_msg),
          delete t.err_msg,
          (a = l),
          (s = r[(i = e)]) && (i = s),
          (s = 'ok'),
          a &&
            ((o = a.indexOf(':')),
            ('access denied' !=
              (s = (s = (s =
                -1 !=
                (s =
                  -1 !=
                  (s =
                    'failed' ==
                    (s = 'confirm' == (s = a.substring(o + 1)) ? 'ok' : s)
                      ? 'fail'
                      : s).indexOf('failed_')
                    ? s.substring(7)
                    : s).indexOf('fail_')
                  ? s.substring(5)
                  : s).replace(/_/g, ' ')).toLowerCase()) &&
              'no permission to execute' != s) ||
              (s = 'permission denied'),
            '' ==
              (s = 'config' == i && 'function not exist' == s ? 'ok' : s)) &&
            (s = 'fail'),
          (l = i + ':' + s),
          (t.errMsg = l)),
        (n = n || {})._complete && (n._complete(t), delete n._complete),
        (l = t.errMsg || ''),
        v.debug && !n.isInnerInvoke && alert(JSON.stringify(t)),
        (e = l.indexOf(':')),
        l.substring(e + 1))
      ) {
        case 'ok':
          n.success && n.success(t);
          break;
        case 'cancel':
          n.cancel && n.cancel(t);
          break;
        default:
          n.fail && n.fail(t);
      }
      n.complete && n.complete(t);
    }
    function C(e) {
      if (e) {
        for (var t = 0, r = e.length; t < r; ++t) {
          var i = e[t];
          (i = n[i]) && (e[t] = i);
        }
        return e;
      }
    }
    function P(e, t) {
      var n;
      !v.debug ||
        (t && t.isInnerInvoke) ||
        ((n = r[e]) && (e = n),
        t && t._complete && delete t._complete,
        console.log('"' + e + '",', t || ''));
    }
    function B(e) {
      var t;
      s ||
        l ||
        v.debug ||
        p < '6.0.2' ||
        g.systemType < 0 ||
        ((t = new Image()),
        (g.appId = v.appId),
        (g.initTime = m.initEndTime - m.initStartTime),
        (g.preVerifyTime = m.preVerifyEndTime - m.preVerifyStartTime),
        w.getNetworkType({
          isInnerInvoke: !0,
          success: function (n) {
            (g.networkType = n.networkType),
              (n =
                'https://open.weixin.qq.com/sdk/report?v=' +
                g.version +
                '&o=' +
                g.isPreVerifyOk +
                '&s=' +
                g.systemType +
                '&c=' +
                g.clientVersion +
                '&a=' +
                g.appId +
                '&n=' +
                g.networkType +
                '&i=' +
                g.initTime +
                '&p=' +
                g.preVerifyTime +
                '&u=' +
                g.url +
                '&jsapi_name=' +
                (e ? e.jsApiName : '')),
              (t.src = n);
          },
        }));
    }
    function N() {
      return new Date().getTime();
    }
    function V(t) {
      c &&
        (e.WeixinJSBridge
          ? t()
          : i.addEventListener &&
            i.addEventListener('WeixinJSBridgeReady', t, !1));
    }
    console.warn("can't use weixin-js-sdk in server side");
  })(D));
const R = O(L.exports),
  W = 'YYYY年MM月DD日 HH时mm分',
  F = e({
    __name: 'detail-new',
    setup(e) {
      const { confirm: O } = t(),
        D = n(),
        { verifyStatus: L } = r(),
        F = i(null),
        Q = i(),
        J = i(),
        z = i(),
        Y = i();
      function q() {
        0 !== L.value
          ? D.push({
              name: 'evidence',
              params: { type: '2', id: String(Q.value) },
            })
          : O({
              title: '数字身份保护说明',
              msg: '您还未领取数字身份，您的权益无法进行上链保护，请尽快领取数字身份哦~',
              cancelButtonText: '放弃',
              confirmButtonText: '领取数字身份',
              success() {
                D.push({ name: 'digitalIdCard' });
              },
            });
      }
      j(async (e) => {
        var t, n;
        const { id: r, pId: i, type: a } = e || {};
        if (((Q.value = Number(r)), (J.value = Number(i)), 'product' === a)) {
          F.value = 'product';
          const e = await c.appSpu.getSpuDetail({ params: { id: J.value } });
          (null == e ? void 0 : e.data) && (Y.value = e.data);
        } else {
          F.value = 'order';
          const e = await c.app.getOrderDetail({
            params: { orderId: Q.value },
          });
          (null == e ? void 0 : e.data) && (z.value = e.data),
            0 === (null == (t = z.value) ? void 0 : t.status) &&
              '2' === (null == (n = z.value) ? void 0 : n.redemptionMethod) &&
              (ne.value = !0);
        }
        z.value ||
          Y.value ||
          ((z.value = void 0),
          (Y.value = void 0),
          u({ icon: 'error', title: '没有获取到权益详情' }));
      });
      const H = a(() => {
          var e, t, n, r, i;
          if (
            '1' ===
            (null == (e = null == z ? void 0 : z.value)
              ? void 0
              : e.redemptionMethod)
          ) {
            if (
              0 ===
              (null == (t = null == z ? void 0 : z.value) ? void 0 : t.status)
            )
              return '权益已领取，快去使用吧';
            if (
              30 ===
              (null == (n = null == z ? void 0 : z.value) ? void 0 : n.status)
            )
              return '权益已核销';
          } else if (
            '2' ===
              (null == (r = null == z ? void 0 : z.value)
                ? void 0
                : r.redemptionMethod) &&
            30 ===
              (null == (i = null == z ? void 0 : z.value) ? void 0 : i.status)
          )
            return '专属活动链接已经生成';
          return '';
        }),
        Z = a(() => {
          var e, t, n, r, i;
          return (
            ('2' ===
              (null == (e = null == z ? void 0 : z.value)
                ? void 0
                : e.redemptionMethod) &&
              30 ===
                (null == (t = null == z ? void 0 : z.value)
                  ? void 0
                  : t.status) &&
              (null == (n = null == z ? void 0 : z.value)
                ? void 0
                : n.redemptionUrl)) ||
            ('1' ===
              (null == (r = null == z ? void 0 : z.value)
                ? void 0
                : r.redemptionMethod) &&
              0 ===
                (null == (i = null == z ? void 0 : z.value)
                  ? void 0
                  : i.status))
          );
        });
      function X() {
        var e, t, n, r;
        (null == (e = z.value) ? void 0 : e.id) &&
        '1' === (null == (t = z.value) ? void 0 : t.redemptionMethod)
          ? D.push({ name: 'profitQRCode', params: { id: String(z.value.id) } })
          : (null == (n = z.value) ? void 0 : n.redemptionUrl) &&
            '2' === (null == (r = z.value) ? void 0 : r.redemptionMethod) &&
            ('miniprogram' === window.__wxjs_environment
              ? R.miniProgram.navigateTo({
                  url: `/pages/transfers/index?url=${encodeURIComponent(
                    z.value.redemptionUrl
                  )}`,
                })
              : (window.location.href = z.value.redemptionUrl));
      }
      const G = a(() => {
        var e, t;
        return (
          '2' ===
            (null == (e = null == z ? void 0 : z.value)
              ? void 0
              : e.redemptionMethod) &&
          0 === (null == (t = null == z ? void 0 : z.value) ? void 0 : t.status)
        );
      });
      async function K(e) {
        var t;
        if ('number' != typeof (null == (t = z.value) ? void 0 : t.id)) return;
        e
          ? (ne.value = !0)
          : (async () => {
              await c.app.checkout({ params: { orderId: z.value.id } }),
                setTimeout(() => {
                  z.value && ((z.value.status = 30), (ne.value = !1));
                }, 600);
            })();
      }
      const $ = a(() => {
          var e, t, n, r, i, a, o;
          return F.value
            ? 'product' === F.value
              ? {
                  productSpuNo: null == (e = Y.value) ? void 0 : e.productNo,
                  productSpuCategoryName:
                    null == (t = Y.value) ? void 0 : t.categoryName,
                  productSpuName: null == (n = Y.value) ? void 0 : n.name,
                  productSpuPicUrl: null == (r = Y.value) ? void 0 : r.picUrl,
                  productSpuIssuedQuantity:
                    null == (i = Y.value) ? void 0 : i.issuedQuantity,
                  issuerName: null == (a = Y.value) ? void 0 : a.issuerName,
                  productSpuDescription:
                    null == (o = Y.value) ? void 0 : o.description,
                  createTime: void 0,
                  expireTime: void 0,
                  chainStatus: void 0,
                  productsIssue: [],
                }
              : z.value
            : null;
        }),
        ee = a(() => {
          var e;
          return (
            window &&
            window.self === window.top &&
            (0 === L.value ||
              (1 === L.value &&
                1 === (null == (e = $.value) ? void 0 : e.chainStatus)))
          );
        }),
        te = i(!1),
        ne = i(!1);
      return (e, t) => {
        const n = v,
          r = m,
          i = N,
          a = P,
          c = h,
          u = y,
          j = C,
          O = A,
          L = M,
          R = T,
          Q = k,
          J = b,
          Y = l('layout-default-uni');
        return (
          d(),
          o(Y, null, {
            default: s(() => [
              p(
                J,
                {
                  'custom-class':
                    'h-screen bg-#f5f5f5 pb-32rpx ' +
                    (f(te) ? 'overflow-hidden' : ''),
                  'banner-class':
                    'rounded-b-96rpx overflow-hidden !left-1/2 !translate-x-[-50%] !w-811rpx ',
                  'banner-height': '434rpx',
                  'banner-src': f('/assets/profit-detail-banner-1aq6fCNd.png'),
                },
                {
                  default: s(() => [
                    p(
                      r,
                      { class: 'px-36rpx mt-[-346rpx]' },
                      {
                        default: s(() => {
                          var e;
                          return [
                            p(
                              r,
                              {
                                class:
                                  'rounded-20rpx bg-#fff shadow-[0rpx_4rpx_8rpx_0rpx_rgba(203,203,203,0.25)]',
                              },
                              {
                                default: s(() => [
                                  p(
                                    r,
                                    {
                                      class:
                                        'h-504rpx rounded-20rpx border-6rpx w-full overflow-hidden border-solid border-transparent',
                                    },
                                    {
                                      default: s(() => {
                                        var e;
                                        return [
                                          p(
                                            n,
                                            {
                                              src:
                                                null == (e = f($))
                                                  ? void 0
                                                  : e.productSpuPicUrl,
                                              width: '100%',
                                              height: '100%',
                                              mode: 'aspectFill',
                                            },
                                            null,
                                            8,
                                            ['src']
                                          ),
                                        ];
                                      }),
                                      _: 1,
                                    }
                                  ),
                                  p(
                                    r,
                                    {
                                      class:
                                        'pt-18rpx pb-28rpx px-40rpx flex w-full flex-col',
                                    },
                                    {
                                      default: s(() => {
                                        var e;
                                        return [
                                          p(
                                            i,
                                            {
                                              'custom-class': '!font-600',
                                              color: '#37445D',
                                              'line-height': 'normal',
                                              size: '34rpx',
                                              text:
                                                null == (e = f($))
                                                  ? void 0
                                                  : e.productSpuName,
                                            },
                                            null,
                                            8,
                                            ['text']
                                          ),
                                          p(r, {
                                            class:
                                              'my-18rpx bg-#E2E2E2 h-2rpx w-full scale-y-50',
                                          }),
                                          p(
                                            r,
                                            {
                                              class: 'gap-16rpx flex flex-col',
                                            },
                                            {
                                              default: s(() => {
                                                var e, t, n, r, i;
                                                return [
                                                  p(
                                                    a,
                                                    {
                                                      label: '权益编号：',
                                                      value:
                                                        null == (e = f($))
                                                          ? void 0
                                                          : e.productSpuNo,
                                                    },
                                                    null,
                                                    8,
                                                    ['value']
                                                  ),
                                                  p(
                                                    a,
                                                    {
                                                      label: '分类：',
                                                      value:
                                                        null == (t = f($))
                                                          ? void 0
                                                          : t.productSpuCategoryName,
                                                    },
                                                    null,
                                                    8,
                                                    ['value']
                                                  ),
                                                  p(
                                                    a,
                                                    {
                                                      label: '发放方：',
                                                      value:
                                                        null == (n = f($))
                                                          ? void 0
                                                          : n.issuerName,
                                                    },
                                                    null,
                                                    8,
                                                    ['value']
                                                  ),
                                                  'order' === f(F)
                                                    ? (d(),
                                                      o(
                                                        a,
                                                        {
                                                          key: 0,
                                                          label: '发放时间：',
                                                          value: f(U)(
                                                            null == (r = f($))
                                                              ? void 0
                                                              : r.createTime,
                                                            W
                                                          ),
                                                        },
                                                        null,
                                                        8,
                                                        ['value']
                                                      ))
                                                    : g('', !0),
                                                  'order' === f(F)
                                                    ? (d(),
                                                      o(
                                                        a,
                                                        {
                                                          key: 1,
                                                          label: '到期时间：',
                                                          value: f(U)(
                                                            null == (i = f($))
                                                              ? void 0
                                                              : i.expireTime,
                                                            W
                                                          ),
                                                        },
                                                        null,
                                                        8,
                                                        ['value']
                                                      ))
                                                    : g('', !0),
                                                ];
                                              }),
                                              _: 1,
                                            }
                                          ),
                                          f(ee)
                                            ? (d(),
                                              o(
                                                c,
                                                {
                                                  key: 0,
                                                  class: 'mt-20rpx',
                                                  block: '',
                                                  plain: '',
                                                  onClick: q,
                                                },
                                                {
                                                  default: s(() => [
                                                    p(
                                                      n,
                                                      {
                                                        class: 'mr-10rpx',
                                                        width: '24rpx',
                                                        height: '24rpx',
                                                        src: f(V),
                                                      },
                                                      null,
                                                      8,
                                                      ['src']
                                                    ),
                                                    x('链上信息 '),
                                                  ]),
                                                  _: 1,
                                                }
                                              ))
                                            : g('', !0),
                                        ];
                                      }),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            'order' === f(F)
                              ? (d(),
                                o(
                                  r,
                                  {
                                    key: 0,
                                    class: 'mt-16rpx h-232rpx relative w-full',
                                  },
                                  {
                                    default: s(() => [
                                      p(
                                        r,
                                        {
                                          class:
                                            'h-232rpx w-712rpx absolute right-0 top-0',
                                        },
                                        {
                                          default: s(() => [
                                            p(
                                              n,
                                              {
                                                width: '100%',
                                                height: '100%',
                                                src: f(
                                                  '/assets/profit-link-item-bg-BbczpOor.png'
                                                ),
                                              },
                                              null,
                                              8,
                                              ['src']
                                            ),
                                            f(Z)
                                              ? (d(),
                                                o(
                                                  r,
                                                  {
                                                    key: 0,
                                                    class:
                                                      'right-48rpx w-118rpx h-118rpx bottom-38rpx absolute inline-flex items-center justify-center',
                                                    onClick: X,
                                                  },
                                                  {
                                                    default: s(() => {
                                                      var e;
                                                      return [
                                                        p(
                                                          n,
                                                          {
                                                            'custom-class':
                                                              '!absolute z-0',
                                                            width: '100%',
                                                            height: '100%',
                                                            src: f(
                                                              '/assets/profit-link-item-btn-DmEO1j0N.png'
                                                            ),
                                                          },
                                                          null,
                                                          8,
                                                          ['src']
                                                        ),
                                                        p(
                                                          i,
                                                          {
                                                            'custom-class':
                                                              'z-1 text-center text-shadow-md text-shadow-color-amber',
                                                            text:
                                                              '' +
                                                              ('2' ===
                                                              (null ==
                                                              (e = f(z))
                                                                ? void 0
                                                                : e.redemptionMethod)
                                                                ? '去看看'
                                                                : '去使用'),
                                                            color: '#fff',
                                                            size: '32rpx',
                                                          },
                                                          null,
                                                          8,
                                                          ['text']
                                                        ),
                                                      ];
                                                    }),
                                                    _: 1,
                                                  }
                                                ))
                                              : g('', !0),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      f(H)
                                        ? (d(),
                                          o(
                                            u,
                                            {
                                              key: 0,
                                              'custom-class':
                                                'right-200rpx top-122rpx absolute',
                                              color: '#fff',
                                              text: f(H),
                                              size: '20rpx',
                                            },
                                            null,
                                            8,
                                            ['text']
                                          ))
                                        : g('', !0),
                                      f(G)
                                        ? (d(),
                                          o(
                                            r,
                                            {
                                              key: 1,
                                              class:
                                                'right-110rpx top-98rpx h-72rpx w-272rpx rounded-16rpx absolute flex items-center justify-center',
                                              style: _({
                                                background:
                                                  'linear-gradient(0deg, #FFF 0%, #FFF 100%), linear-gradient(92deg, #FF9B58 0%, #F75200 100%)',
                                              }),
                                              onClick:
                                                t[0] || (t[0] = (e) => K(!0)),
                                            },
                                            {
                                              default: s(() => [
                                                p(j, {
                                                  'custom-class':
                                                    'font-600 text-24rpx ',
                                                  from: '#FF9855',
                                                  to: '#F75402',
                                                  text: '生成专属权益链接',
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                            8,
                                            ['style']
                                          ))
                                        : g('', !0),
                                    ]),
                                    _: 1,
                                  }
                                ))
                              : g('', !0),
                            'order' === f(F)
                              ? (d(),
                                o(
                                  r,
                                  { key: 1, class: 'mt-12rpx' },
                                  {
                                    default: s(() => {
                                      var e, t;
                                      return [
                                        p(
                                          r,
                                          {
                                            class:
                                              'gap-8rpx mb-38rpx flex items-center',
                                          },
                                          {
                                            default: s(() => [
                                              p(
                                                O,
                                                {
                                                  src: f(E),
                                                  width: '38rpx',
                                                  height: '38rpx',
                                                },
                                                null,
                                                8,
                                                ['src']
                                              ),
                                              p(i, {
                                                text: '关联数根',
                                                color: '#37445D',
                                                size: '27rpx',
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        (
                                          (null == (e = f($))
                                            ? void 0
                                            : e.productsIssue) || []
                                        ).length <= 0
                                          ? (d(),
                                            o(
                                              r,
                                              {
                                                key: 0,
                                                class:
                                                  'mb-38rpx flex justify-center',
                                              },
                                              {
                                                default: s(() => [
                                                  p(u, { text: '无关联数根' }),
                                                ]),
                                                _: 1,
                                              }
                                            ))
                                          : (d(!0),
                                            w(
                                              S,
                                              { key: 1 },
                                              I(
                                                (null == (t = f($))
                                                  ? void 0
                                                  : t.productsIssue) || [],
                                                (e) => (
                                                  d(),
                                                  o(
                                                    r,
                                                    {
                                                      key: e.id,
                                                      class:
                                                        'mb-8rpx flex flex-nowrap',
                                                      onClick: (t) => {
                                                        var n;
                                                        (n = e.productId) &&
                                                          D.push({
                                                            name: 'pythrootDetail',
                                                            params: {
                                                              pId: String(n),
                                                              type: 'product',
                                                            },
                                                          });
                                                      },
                                                    },
                                                    {
                                                      default: s(() => [
                                                        p(r, {
                                                          class:
                                                            'w-76rpx flex-shrink-0',
                                                        }),
                                                        p(
                                                          r,
                                                          {
                                                            class:
                                                              'h-162rpx pt-16rpx pb-24rpx pl-76rpx pr-56rpx relative flex flex-grow',
                                                            style: _({
                                                              backgroundImage: `url(${f(
                                                                B
                                                              )})`,
                                                              backgroundSize:
                                                                '100% 100%',
                                                            }),
                                                          },
                                                          {
                                                            default: s(() => [
                                                              e.picUrl
                                                                ? (d(),
                                                                  o(
                                                                    L,
                                                                    {
                                                                      key: 0,
                                                                      'custom-class':
                                                                        '!absolute top-0 left-0 translate-x-[-50%] bg-#b8e1ff flex-shrink-0',
                                                                      'border-color':
                                                                        '#29A2FB',
                                                                      'border-size':
                                                                        '2rpx',
                                                                      border:
                                                                        '',
                                                                      size: '152rpx',
                                                                      src: e.picUrl,
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ['src']
                                                                  ))
                                                                : g('', !0),
                                                              p(r, {
                                                                class:
                                                                  'border-2rpx border-#E3E3E3 mx-48rpx scale-x-1/2 h-full w-0 flex-shrink-0 border-dashed',
                                                              }),
                                                              p(
                                                                r,
                                                                {
                                                                  class:
                                                                    'gap-4rpx flex h-full flex-grow flex-col',
                                                                },
                                                                {
                                                                  default: s(
                                                                    () => [
                                                                      p(
                                                                        i,
                                                                        {
                                                                          'custom-class':
                                                                            'mb-4rpx',
                                                                          text: e.name,
                                                                          color:
                                                                            '#5D4037',
                                                                          size: '27rpx',
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['text']
                                                                      ),
                                                                      p(
                                                                        a,
                                                                        {
                                                                          'label-class':
                                                                            '!font-normal',
                                                                          label:
                                                                            '发行方：',
                                                                          'label-size':
                                                                            '24rpx',
                                                                          'label-color':
                                                                            '#5D4037',
                                                                          'value-class':
                                                                            '!font-200',
                                                                          value:
                                                                            e.issuerName,
                                                                          'value-lines': 1,
                                                                        },
                                                                        null,
                                                                        8,
                                                                        [
                                                                          'value',
                                                                        ]
                                                                      ),
                                                                      p(
                                                                        a,
                                                                        {
                                                                          'label-class':
                                                                            '!font-normal',
                                                                          label:
                                                                            '发行量：',
                                                                          'label-size':
                                                                            '24rpx',
                                                                          'label-color':
                                                                            '#5D4037',
                                                                          'value-class':
                                                                            '!font-200',
                                                                          value:
                                                                            String(
                                                                              e.issuedQuantity
                                                                            ),
                                                                          'value-lines': 1,
                                                                        },
                                                                        null,
                                                                        8,
                                                                        [
                                                                          'value',
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _: 2,
                                                                },
                                                                1024
                                                              ),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          ['style']
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
                                ))
                              : g('', !0),
                            p(
                              R,
                              {
                                'custom-class': 'mx-8rpx mt-32rpx',
                                title: '详细介绍',
                                'dompurify-html':
                                  (null == (e = f($))
                                    ? void 0
                                    : e.productSpuDescription) ||
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
                      Q,
                      { show: f(ne), 'z-index': 100 },
                      {
                        default: s(() => [
                          p(
                            r,
                            {
                              class:
                                'w-603rpx h-560rpx translate-[-50%] fixed left-1/2 top-1/2',
                            },
                            {
                              default: s(() => [
                                p(
                                  n,
                                  {
                                    width: '100%',
                                    height: '100%',
                                    src: f(
                                      '/assets/profit-link-modal-bg-x4kqO2lf.png'
                                    ),
                                  },
                                  null,
                                  8,
                                  ['src']
                                ),
                                p(
                                  r,
                                  {
                                    class:
                                      'h-72rpx w-272rpx rounded-16rpx bottom-42rpx absolute left-1/2 flex translate-x-[-50%] items-center justify-center',
                                    style: _({
                                      background:
                                        'linear-gradient(92deg, #FF9B58 0%, #F75200 100%)',
                                    }),
                                    onClick: t[1] || (t[1] = (e) => K(!1)),
                                  },
                                  {
                                    default: s(() => [
                                      p(j, {
                                        'custom-class': 'font-600 text-24rpx ',
                                        from: '#FFF',
                                        to: '#FFF',
                                        text: '生成专属权益链接',
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['style']
                                ),
                                p(
                                  n,
                                  {
                                    'custom-class':
                                      '!absolute right-0 top--44rpx',
                                    width: '40rpx',
                                    height: '40rpx',
                                    src: f(
                                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADdSURBVHgBrZSBEYMgDEW5TuAojMIIbKIb6CZ1A92AboAbdIRf0qMt5RIB9d3ljgvkB5IcSjEA6ILZYPdgHj9c9FlVSzhsgj1RxheFw4ER7fSSWI/jjLmYxXlMKuiZAw8hkOq7Cv5Out0aE2n8N4jWOu45Js7Sxixk05lo7uOYpUycqBZuneIV9vmKVoi9uamrCaJb6XYNT3ZSU4ByUzjRWRobVzE2CxNnPz8Ll23BztMYn0/raHAemzdnwnEGqeMD2plUYYyoSb5CiOprVMN8kjCNVPrrbNFHex0X9wIQ34jB834AYQAAAABJRU5ErkJggg=='
                                    ),
                                    onClick:
                                      t[2] || (t[2] = (e) => (ne.value = !1)),
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
                        _: 1,
                      },
                      8,
                      ['show']
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['custom-class', 'banner-src']
              ),
            ]),
            _: 1,
          })
        );
      };
    },
  });
export { F as default };
