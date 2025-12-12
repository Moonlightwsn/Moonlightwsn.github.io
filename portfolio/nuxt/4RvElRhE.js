const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './DxI0FDgE.js',
      './R3TmfU9N.js',
      './kuW0RAgf.js',
      './iik6CYzq.js',
      './DyxIxSqB.js',
      './B3IUMk7L.js',
      './DMorHVzM.js',
      './BH8YcVnb.js',
      './RC2Rr1fn.js',
      './4RXh6_1y.js',
      './TTxouw9S.js',
      './BIZ07s68.js',
      './iUS720Y_.js',
      './Bm28CouL.js',
      './index.phP7Mvgh.css',
      './o6hX00aX.js',
      './DQ4MqdIN.js',
      './ClG7r1jg.js',
      './CSsg7Wtx.js',
      './C4zH9VDq.js',
      './mdPOqrp9.js',
      './0m5Bkp5B.js',
      './CwwoKUeP.js',
      './DXJDY5R1.js',
      './CgxiuhtF.js',
      './Dxd13eqH.js',
      './Dp_7d_z1.js',
      './DGYt4JlI.js',
      './CrUIijsX.js',
      './NX46BqMR.js',
      './B-MhCWa1.js',
      './5wmR8ZVk.js',
      './Pre.DmpPSE9a.css',
      './CqHY3FKj.js',
      './zhvv6sgY.js',
      './D4Y_XwWu.js',
      './C5O4NGlM.js',
      './DUL-0ZoH.js',
      './20Pt5jed.js',
    ])
) => i.map((i) => d[i]);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === 'childList')
        for (const i of s.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function Fl(e) {
  const t = Object.create(null);
  for (const n of e.split(',')) t[n] = 1;
  return (n) => n in t;
}
const De = {},
  Hr = [],
  mn = () => {},
  Dd = () => !1,
  Jo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  zl = (e) => e.startsWith('onUpdate:'),
  st = Object.assign,
  Hl = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  gv = Object.prototype.hasOwnProperty,
  Ne = (e, t) => gv.call(e, t),
  he = Array.isArray,
  Ur = (e) => Qo(e) === '[object Map]',
  qd = (e) => Qo(e) === '[object Set]',
  mv = (e) => Qo(e) === '[object RegExp]',
  ye = (e) => typeof e == 'function',
  Ge = (e) => typeof e == 'string',
  Bn = (e) => typeof e == 'symbol',
  He = (e) => e !== null && typeof e == 'object',
  Ul = (e) => (He(e) || ye(e)) && ye(e.then) && ye(e.catch),
  Md = Object.prototype.toString,
  Qo = (e) => Md.call(e),
  vv = (e) => Qo(e).slice(8, -1),
  Nd = (e) => Qo(e) === '[object Object]',
  Wl = (e) =>
    Ge(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Wr = Fl(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Ei = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  yv = /-\w/g,
  At = Ei((e) => e.replace(yv, (t) => t.slice(1).toUpperCase())),
  bv = /\B([A-Z])/g,
  Vn = Ei((e) => e.replace(bv, '-$1').toLowerCase()),
  Pi = Ei((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ao = Ei((e) => (e ? `on${Pi(e)}` : '')),
  Ct = (e, t) => !Object.is(e, t),
  Oo = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  $d = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  _v = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Bd = (e) => {
    const t = Ge(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let su;
const Ti = () =>
  su ||
  (su =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
function nn(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = Ge(r) ? Cv(r) : nn(r);
      if (o) for (const s in o) t[s] = o[s];
    }
    return t;
  } else if (Ge(e) || He(e)) return e;
}
const wv = /;(?![^(]*\))/g,
  xv = /:([^]+)/,
  kv = /\/\*[^]*?\*\//g;
function Cv(e) {
  const t = {};
  return (
    e
      .replace(kv, '')
      .split(wv)
      .forEach((n) => {
        if (n) {
          const r = n.split(xv);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function re(e) {
  let t = '';
  if (Ge(e)) t = e;
  else if (he(e))
    for (let n = 0; n < e.length; n++) {
      const r = re(e[n]);
      r && (t += r + ' ');
    }
  else if (He(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
function tt(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ge(t) && (e.class = re(t)), n && (e.style = nn(n)), e;
}
const Ev =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Pv = Fl(Ev);
function Vd(e) {
  return !!e || e === '';
}
const jd = (e) => !!(e && e.__v_isRef === !0),
  et = (e) =>
    Ge(e)
      ? e
      : e == null
      ? ''
      : he(e) || (He(e) && (e.toString === Md || !ye(e.toString)))
      ? jd(e)
        ? et(e.value)
        : JSON.stringify(e, Fd, 2)
      : String(e),
  Fd = (e, t) =>
    jd(t)
      ? Fd(e, t.value)
      : Ur(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, o], s) => ((n[ia(r, s) + ' =>'] = o), n),
            {}
          ),
        }
      : qd(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => ia(n)) }
      : Bn(t)
      ? ia(t)
      : He(t) && !he(t) && !Nd(t)
      ? String(t)
      : t,
  ia = (e, t = '') => {
    var n;
    return Bn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
let mt;
class zd {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = mt),
      !t && mt && (this.index = (mt.scopes || (mt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = mt;
      try {
        return (mt = this), t();
      } finally {
        mt = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = mt), (mt = this));
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((mt = this.prevScope), (this.prevScope = void 0));
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Si(e) {
  return new zd(e);
}
function lo() {
  return mt;
}
function Ai(e, t = !1) {
  mt && mt.cleanups.push(e);
}
let Ke;
const aa = new WeakSet();
class Hd {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      mt && mt.active && mt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), aa.has(this) && (aa.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Wd(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), iu(this), Kd(this);
    const t = Ke,
      n = tn;
    (Ke = this), (tn = !0);
    try {
      return this.fn();
    } finally {
      Gd(this), (Ke = t), (tn = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Yl(t);
      (this.deps = this.depsTail = void 0),
        iu(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? aa.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Ba(this) && this.run();
  }
  get dirty() {
    return Ba(this);
  }
}
let Ud = 0,
  Ro,
  Io;
function Wd(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Io), (Io = e);
    return;
  }
  (e.next = Ro), (Ro = e);
}
function Kl() {
  Ud++;
}
function Gl() {
  if (--Ud > 0) return;
  if (Io) {
    let t = Io;
    for (Io = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Ro; ) {
    let t = Ro;
    for (Ro = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Kd(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Gd(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Yl(r), Tv(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = o);
  }
  (e.deps = t), (e.depsTail = n);
}
function Ba(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Yd(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Yd(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === $o) ||
    ((e.globalVersion = $o),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Ba(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = Ke,
    r = tn;
  (Ke = e), (tn = !0);
  try {
    Kd(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ct(o, e._value)) &&
      ((e.flags |= 128), (e._value = o), t.version++);
  } catch (o) {
    throw (t.version++, o);
  } finally {
    (Ke = n), (tn = r), Gd(e), (e.flags &= -3);
  }
}
function Yl(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (
    (r && ((r.nextSub = o), (e.prevSub = void 0)),
    o && ((o.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep) Yl(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Tv(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let tn = !0;
const Xd = [];
function Ln() {
  Xd.push(tn), (tn = !1);
}
function Dn() {
  const e = Xd.pop();
  tn = e === void 0 ? !0 : e;
}
function iu(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = Ke;
    Ke = void 0;
    try {
      t();
    } finally {
      Ke = n;
    }
  }
}
let $o = 0;
class Sv {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Oi {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0);
  }
  track(t) {
    if (!Ke || !tn || Ke === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ke)
      (n = this.activeLink = new Sv(Ke, this)),
        Ke.deps
          ? ((n.prevDep = Ke.depsTail),
            (Ke.depsTail.nextDep = n),
            (Ke.depsTail = n))
          : (Ke.deps = Ke.depsTail = n),
        Jd(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = Ke.depsTail),
        (n.nextDep = void 0),
        (Ke.depsTail.nextDep = n),
        (Ke.depsTail = n),
        Ke.deps === n && (Ke.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, $o++, this.notify(t);
  }
  notify(t) {
    Kl();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Gl();
    }
  }
}
function Jd(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Jd(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Us = new WeakMap(),
  mr = Symbol(''),
  Va = Symbol(''),
  Bo = Symbol('');
function vt(e, t, n) {
  if (tn && Ke) {
    let r = Us.get(e);
    r || Us.set(e, (r = new Map()));
    let o = r.get(n);
    o || (r.set(n, (o = new Oi())), (o.map = r), (o.key = n)), o.track();
  }
}
function On(e, t, n, r, o, s) {
  const i = Us.get(e);
  if (!i) {
    $o++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((Kl(), t === 'clear')) i.forEach(a);
  else {
    const l = he(e),
      u = l && Wl(n);
    if (l && n === 'length') {
      const c = Number(r);
      i.forEach((f, d) => {
        (d === 'length' || d === Bo || (!Bn(d) && d >= c)) && a(f);
      });
    } else
      switch (
        ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(Bo)), t)
      ) {
        case 'add':
          l ? u && a(i.get('length')) : (a(i.get(mr)), Ur(e) && a(i.get(Va)));
          break;
        case 'delete':
          l || (a(i.get(mr)), Ur(e) && a(i.get(Va)));
          break;
        case 'set':
          Ur(e) && a(i.get(mr));
          break;
      }
  }
  Gl();
}
function Av(e, t) {
  const n = Us.get(e);
  return n && n.get(t);
}
function Mr(e) {
  const t = Re(e);
  return t === e ? t : (vt(t, 'iterate', Bo), Ut(e) ? t : t.map(pt));
}
function Ri(e) {
  return vt((e = Re(e)), 'iterate', Bo), e;
}
const Ov = {
  __proto__: null,
  [Symbol.iterator]() {
    return la(this, Symbol.iterator, pt);
  },
  concat(...e) {
    return Mr(this).concat(...e.map((t) => (he(t) ? Mr(t) : t)));
  },
  entries() {
    return la(this, 'entries', (e) => ((e[1] = pt(e[1])), e));
  },
  every(e, t) {
    return kn(this, 'every', e, t, void 0, arguments);
  },
  filter(e, t) {
    return kn(this, 'filter', e, t, (n) => n.map(pt), arguments);
  },
  find(e, t) {
    return kn(this, 'find', e, t, pt, arguments);
  },
  findIndex(e, t) {
    return kn(this, 'findIndex', e, t, void 0, arguments);
  },
  findLast(e, t) {
    return kn(this, 'findLast', e, t, pt, arguments);
  },
  findLastIndex(e, t) {
    return kn(this, 'findLastIndex', e, t, void 0, arguments);
  },
  forEach(e, t) {
    return kn(this, 'forEach', e, t, void 0, arguments);
  },
  includes(...e) {
    return ca(this, 'includes', e);
  },
  indexOf(...e) {
    return ca(this, 'indexOf', e);
  },
  join(e) {
    return Mr(this).join(e);
  },
  lastIndexOf(...e) {
    return ca(this, 'lastIndexOf', e);
  },
  map(e, t) {
    return kn(this, 'map', e, t, void 0, arguments);
  },
  pop() {
    return vo(this, 'pop');
  },
  push(...e) {
    return vo(this, 'push', e);
  },
  reduce(e, ...t) {
    return au(this, 'reduce', e, t);
  },
  reduceRight(e, ...t) {
    return au(this, 'reduceRight', e, t);
  },
  shift() {
    return vo(this, 'shift');
  },
  some(e, t) {
    return kn(this, 'some', e, t, void 0, arguments);
  },
  splice(...e) {
    return vo(this, 'splice', e);
  },
  toReversed() {
    return Mr(this).toReversed();
  },
  toSorted(e) {
    return Mr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Mr(this).toSpliced(...e);
  },
  unshift(...e) {
    return vo(this, 'unshift', e);
  },
  values() {
    return la(this, 'values', pt);
  },
};
function la(e, t, n) {
  const r = Ri(e),
    o = r[t]();
  return (
    r !== e &&
      !Ut(e) &&
      ((o._next = o.next),
      (o.next = () => {
        const s = o._next();
        return s.done || (s.value = n(s.value)), s;
      })),
    o
  );
}
const Rv = Array.prototype;
function kn(e, t, n, r, o, s) {
  const i = Ri(e),
    a = i !== e && !Ut(e),
    l = i[t];
  if (l !== Rv[t]) {
    const f = l.apply(e, s);
    return a ? pt(f) : f;
  }
  let u = n;
  i !== e &&
    (a
      ? (u = function (f, d) {
          return n.call(this, pt(f), d, e);
        })
      : n.length > 2 &&
        (u = function (f, d) {
          return n.call(this, f, d, e);
        }));
  const c = l.call(i, u, r);
  return a && o ? o(c) : c;
}
function au(e, t, n, r) {
  const o = Ri(e);
  let s = n;
  return (
    o !== e &&
      (Ut(e)
        ? n.length > 3 &&
          (s = function (i, a, l) {
            return n.call(this, i, a, l, e);
          })
        : (s = function (i, a, l) {
            return n.call(this, i, pt(a), l, e);
          })),
    o[t](s, ...r)
  );
}
function ca(e, t, n) {
  const r = Re(e);
  vt(r, 'iterate', Bo);
  const o = r[t](...n);
  return (o === -1 || o === !1) && Xl(n[0])
    ? ((n[0] = Re(n[0])), r[t](...n))
    : o;
}
function vo(e, t, n = []) {
  Ln(), Kl();
  const r = Re(e)[t].apply(e, n);
  return Gl(), Dn(), r;
}
const Iv = Fl('__proto__,__v_isRef,__isVue'),
  Qd = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Bn)
  );
function Lv(e) {
  Bn(e) || (e = String(e));
  const t = Re(this);
  return vt(t, 'has', e), t.hasOwnProperty(e);
}
class Zd {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    if (n === '__v_skip') return t.__v_skip;
    const o = this._isReadonly,
      s = this._isShallow;
    if (n === '__v_isReactive') return !o;
    if (n === '__v_isReadonly') return o;
    if (n === '__v_isShallow') return s;
    if (n === '__v_raw')
      return r === (o ? (s ? sp : op) : s ? rp : np).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = he(t);
    if (!o) {
      let l;
      if (i && (l = Ov[n])) return l;
      if (n === 'hasOwnProperty') return Lv;
    }
    const a = Reflect.get(t, n, ze(t) ? t : r);
    if ((Bn(n) ? Qd.has(n) : Iv(n)) || (o || vt(t, 'get', n), s)) return a;
    if (ze(a)) {
      const l = i && Wl(n) ? a : a.value;
      return o && He(l) ? yn(l) : l;
    }
    return He(a) ? (o ? yn(a) : dt(a)) : a;
  }
}
class ep extends Zd {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const l = qn(s);
      if (
        (!Ut(r) && !qn(r) && ((s = Re(s)), (r = Re(r))),
        !he(t) && ze(s) && !ze(r))
      )
        return l || (s.value = r), !0;
    }
    const i = he(t) && Wl(n) ? Number(n) < t.length : Ne(t, n),
      a = Reflect.set(t, n, r, ze(t) ? t : o);
    return (
      t === Re(o) && (i ? Ct(r, s) && On(t, 'set', n, r) : On(t, 'add', n, r)),
      a
    );
  }
  deleteProperty(t, n) {
    const r = Ne(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && On(t, 'delete', n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Bn(n) || !Qd.has(n)) && vt(t, 'has', n), r;
  }
  ownKeys(t) {
    return vt(t, 'iterate', he(t) ? 'length' : mr), Reflect.ownKeys(t);
  }
}
class tp extends Zd {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Dv = new ep(),
  qv = new tp(),
  Mv = new ep(!0),
  Nv = new tp(!0),
  ja = (e) => e,
  as = (e) => Reflect.getPrototypeOf(e);
function $v(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      s = Re(o),
      i = Ur(s),
      a = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      u = o[e](...r),
      c = n ? ja : t ? Ws : pt;
    return (
      !t && vt(s, 'iterate', l ? Va : mr),
      {
        next() {
          const { value: f, done: d } = u.next();
          return d
            ? { value: f, done: d }
            : { value: a ? [c(f[0]), c(f[1])] : c(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ls(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function Bv(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw,
        i = Re(s),
        a = Re(o);
      e || (Ct(o, a) && vt(i, 'get', o), vt(i, 'get', a));
      const { has: l } = as(i),
        u = t ? ja : e ? Ws : pt;
      if (l.call(i, o)) return u(s.get(o));
      if (l.call(i, a)) return u(s.get(a));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && vt(Re(o), 'iterate', mr), o.size;
    },
    has(o) {
      const s = this.__v_raw,
        i = Re(s),
        a = Re(o);
      return (
        e || (Ct(o, a) && vt(i, 'has', o), vt(i, 'has', a)),
        o === a ? s.has(o) : s.has(o) || s.has(a)
      );
    },
    forEach(o, s) {
      const i = this,
        a = i.__v_raw,
        l = Re(a),
        u = t ? ja : e ? Ws : pt;
      return (
        !e && vt(l, 'iterate', mr),
        a.forEach((c, f) => o.call(s, u(c), u(f), i))
      );
    },
  };
  return (
    st(
      n,
      e
        ? {
            add: ls('add'),
            set: ls('set'),
            delete: ls('delete'),
            clear: ls('clear'),
          }
        : {
            add(o) {
              !t && !Ut(o) && !qn(o) && (o = Re(o));
              const s = Re(this);
              return (
                as(s).has.call(s, o) || (s.add(o), On(s, 'add', o, o)), this
              );
            },
            set(o, s) {
              !t && !Ut(s) && !qn(s) && (s = Re(s));
              const i = Re(this),
                { has: a, get: l } = as(i);
              let u = a.call(i, o);
              u || ((o = Re(o)), (u = a.call(i, o)));
              const c = l.call(i, o);
              return (
                i.set(o, s),
                u ? Ct(s, c) && On(i, 'set', o, s) : On(i, 'add', o, s),
                this
              );
            },
            delete(o) {
              const s = Re(this),
                { has: i, get: a } = as(s);
              let l = i.call(s, o);
              l || ((o = Re(o)), (l = i.call(s, o))), a && a.call(s, o);
              const u = s.delete(o);
              return l && On(s, 'delete', o, void 0), u;
            },
            clear() {
              const o = Re(this),
                s = o.size !== 0,
                i = o.clear();
              return s && On(o, 'clear', void 0, void 0), i;
            },
          }
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      n[o] = $v(o, e, t);
    }),
    n
  );
}
function Ii(e, t) {
  const n = Bv(e, t);
  return (r, o, s) =>
    o === '__v_isReactive'
      ? !e
      : o === '__v_isReadonly'
      ? e
      : o === '__v_raw'
      ? r
      : Reflect.get(Ne(n, o) && o in r ? n : r, o, s);
}
const Vv = { get: Ii(!1, !1) },
  jv = { get: Ii(!1, !0) },
  Fv = { get: Ii(!0, !1) },
  zv = { get: Ii(!0, !0) },
  np = new WeakMap(),
  rp = new WeakMap(),
  op = new WeakMap(),
  sp = new WeakMap();
function Hv(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function Uv(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Hv(vv(e));
}
function dt(e) {
  return qn(e) ? e : Li(e, !1, Dv, Vv, np);
}
function Zt(e) {
  return Li(e, !1, Mv, jv, rp);
}
function yn(e) {
  return Li(e, !0, qv, Fv, op);
}
function ur(e) {
  return Li(e, !0, Nv, zv, sp);
}
function Li(e, t, n, r, o) {
  if (!He(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const s = Uv(e);
  if (s === 0) return e;
  const i = o.get(e);
  if (i) return i;
  const a = new Proxy(e, s === 2 ? r : n);
  return o.set(e, a), a;
}
function vr(e) {
  return qn(e) ? vr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qn(e) {
  return !!(e && e.__v_isReadonly);
}
function Ut(e) {
  return !!(e && e.__v_isShallow);
}
function Xl(e) {
  return e ? !!e.__v_raw : !1;
}
function Re(e) {
  const t = e && e.__v_raw;
  return t ? Re(t) : e;
}
function Jl(e) {
  return (
    !Ne(e, '__v_skip') && Object.isExtensible(e) && $d(e, '__v_skip', !0), e
  );
}
const pt = (e) => (He(e) ? dt(e) : e),
  Ws = (e) => (He(e) ? yn(e) : e);
function ze(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function j(e) {
  return ip(e, !1);
}
function Pe(e) {
  return ip(e, !0);
}
function ip(e, t) {
  return ze(e) ? e : new Wv(e, t);
}
class Wv {
  constructor(t, n) {
    (this.dep = new Oi()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : Re(t)),
      (this._value = n ? t : pt(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || Ut(t) || qn(t);
    (t = r ? t : Re(t)),
      Ct(t, n) &&
        ((this._rawValue = t),
        (this._value = r ? t : pt(t)),
        this.dep.trigger());
  }
}
function JL(e) {
  e.dep && e.dep.trigger();
}
function y(e) {
  return ze(e) ? e.value : e;
}
function Ae(e) {
  return ye(e) ? e() : y(e);
}
const Kv = {
  get: (e, t, n) => (t === '__v_raw' ? e : y(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const o = e[t];
    return ze(o) && !ze(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function ap(e) {
  return vr(e) ? e : new Proxy(e, Kv);
}
class Gv {
  constructor(t) {
    (this.__v_isRef = !0), (this._value = void 0);
    const n = (this.dep = new Oi()),
      { get: r, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    (this._get = r), (this._set = o);
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function Zo(e) {
  return new Gv(e);
}
function Ot(e) {
  const t = he(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = lp(e, n);
  return t;
}
class Yv {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Av(Re(this._object), this._key);
  }
}
class Xv {
  constructor(t) {
    (this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0);
  }
  get value() {
    return (this._value = this._getter());
  }
}
function ot(e, t, n) {
  return ze(e)
    ? e
    : ye(e)
    ? new Xv(e)
    : He(e) && arguments.length > 1
    ? lp(e, t, n)
    : j(e);
}
function lp(e, t, n) {
  const r = e[t];
  return ze(r) ? r : new Yv(e, t, n);
}
class Jv {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Oi(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = $o - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Ke !== this))
      return Wd(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Yd(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Qv(e, t, n = !1) {
  let r, o;
  return ye(e) ? (r = e) : ((r = e.get), (o = e.set)), new Jv(r, o, n);
}
const cs = {},
  Ks = new WeakMap();
let fr;
function Zv(e, t = !1, n = fr) {
  if (n) {
    let r = Ks.get(n);
    r || Ks.set(n, (r = [])), r.push(e);
  }
}
function ey(e, t, n = De) {
  const {
      immediate: r,
      deep: o,
      once: s,
      scheduler: i,
      augmentJob: a,
      call: l,
    } = n,
    u = (m) => (o ? m : Ut(m) || o === !1 || o === 0 ? Jn(m, 1) : Jn(m));
  let c,
    f,
    d,
    p,
    h = !1,
    g = !1;
  if (
    (ze(e)
      ? ((f = () => e.value), (h = Ut(e)))
      : vr(e)
      ? ((f = () => u(e)), (h = !0))
      : he(e)
      ? ((g = !0),
        (h = e.some((m) => vr(m) || Ut(m))),
        (f = () =>
          e.map((m) => {
            if (ze(m)) return m.value;
            if (vr(m)) return u(m);
            if (ye(m)) return l ? l(m, 2) : m();
          })))
      : ye(e)
      ? t
        ? (f = l ? () => l(e, 2) : e)
        : (f = () => {
            if (d) {
              Ln();
              try {
                d();
              } finally {
                Dn();
              }
            }
            const m = fr;
            fr = c;
            try {
              return l ? l(e, 3, [p]) : e(p);
            } finally {
              fr = m;
            }
          })
      : (f = mn),
    t && o)
  ) {
    const m = f,
      w = o === !0 ? 1 / 0 : o;
    f = () => Jn(m(), w);
  }
  const _ = lo(),
    x = () => {
      c.stop(), _ && _.active && Hl(_.effects, c);
    };
  if (s && t) {
    const m = t;
    t = (...w) => {
      m(...w), x();
    };
  }
  let b = g ? new Array(e.length).fill(cs) : cs;
  const v = (m) => {
    if (!(!(c.flags & 1) || (!c.dirty && !m)))
      if (t) {
        const w = c.run();
        if (o || h || (g ? w.some((C, E) => Ct(C, b[E])) : Ct(w, b))) {
          d && d();
          const C = fr;
          fr = c;
          try {
            const E = [w, b === cs ? void 0 : g && b[0] === cs ? [] : b, p];
            (b = w), l ? l(t, 3, E) : t(...E);
          } finally {
            fr = C;
          }
        }
      } else c.run();
  };
  return (
    a && a(v),
    (c = new Hd(f)),
    (c.scheduler = i ? () => i(v, !1) : v),
    (p = (m) => Zv(m, !1, c)),
    (d = c.onStop =
      () => {
        const m = Ks.get(c);
        if (m) {
          if (l) l(m, 4);
          else for (const w of m) w();
          Ks.delete(c);
        }
      }),
    t ? (r ? v(!0) : (b = c.run())) : i ? i(v.bind(null, !0), !0) : c.run(),
    (x.pause = c.pause.bind(c)),
    (x.resume = c.resume.bind(c)),
    (x.stop = x),
    x
  );
}
function Jn(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !He(e) ||
    e.__v_skip ||
    ((n = n || new Map()), (n.get(e) || 0) >= t)
  )
    return e;
  if ((n.set(e, t), t--, ze(e))) Jn(e.value, t, n);
  else if (he(e)) for (let r = 0; r < e.length; r++) Jn(e[r], t, n);
  else if (qd(e) || Ur(e))
    e.forEach((r) => {
      Jn(r, t, n);
    });
  else if (Nd(e)) {
    for (const r in e) Jn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Jn(e[r], t, n);
  }
  return e;
}
function es(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    co(o, t, n);
  }
}
function rn(e, t, n, r) {
  if (ye(e)) {
    const o = es(e, t, n, r);
    return (
      o &&
        Ul(o) &&
        o.catch((s) => {
          co(s, t, n);
        }),
      o
    );
  }
  if (he(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++) o.push(rn(e[s], t, n, r));
    return o;
  }
}
function co(e, t, n, r = !0) {
  const o = t ? t.vnode : null,
    { errorHandler: s, throwUnhandledErrorInProduction: i } =
      (t && t.appContext.config) || De;
  if (t) {
    let a = t.parent;
    const l = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, l, u) === !1) return;
      }
      a = a.parent;
    }
    if (s) {
      Ln(), es(s, null, 10, [e, l, u]), Dn();
      return;
    }
  }
  ty(e, n, o, r, i);
}
function ty(e, t, n, r = !0, o = !1) {
  if (o) throw e;
  console.error(e);
}
const Et = [];
let pn = -1;
const Kr = [];
let Gn = null,
  Vr = 0;
const cp = Promise.resolve();
let Gs = null;
function Ze(e) {
  const t = Gs || cp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ny(e) {
  let t = pn + 1,
    n = Et.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      o = Et[r],
      s = Vo(o);
    s < e || (s === e && o.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function Ql(e) {
  if (!(e.flags & 1)) {
    const t = Vo(e),
      n = Et[Et.length - 1];
    !n || (!(e.flags & 2) && t >= Vo(n)) ? Et.push(e) : Et.splice(ny(t), 0, e),
      (e.flags |= 1),
      up();
  }
}
function up() {
  Gs || (Gs = cp.then(fp));
}
function Ys(e) {
  he(e)
    ? Kr.push(...e)
    : Gn && e.id === -1
    ? Gn.splice(Vr + 1, 0, e)
    : e.flags & 1 || (Kr.push(e), (e.flags |= 1)),
    up();
}
function lu(e, t, n = pn + 1) {
  for (; n < Et.length; n++) {
    const r = Et[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      Et.splice(n, 1),
        n--,
        r.flags & 4 && (r.flags &= -2),
        r(),
        r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Xs(e) {
  if (Kr.length) {
    const t = [...new Set(Kr)].sort((n, r) => Vo(n) - Vo(r));
    if (((Kr.length = 0), Gn)) {
      Gn.push(...t);
      return;
    }
    for (Gn = t, Vr = 0; Vr < Gn.length; Vr++) {
      const n = Gn[Vr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (Gn = null), (Vr = 0);
  }
}
const Vo = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function fp(e) {
  try {
    for (pn = 0; pn < Et.length; pn++) {
      const t = Et[pn];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        es(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; pn < Et.length; pn++) {
      const t = Et[pn];
      t && (t.flags &= -2);
    }
    (pn = -1),
      (Et.length = 0),
      Xs(),
      (Gs = null),
      (Et.length || Kr.length) && fp();
  }
}
let Pt = null,
  dp = null;
function Js(e) {
  const t = Pt;
  return (Pt = e), (dp = (e && e.type.__scopeId) || null), t;
}
function O(e, t = Pt, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && ni(-1);
    const s = Js(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Js(s), r._d && ni(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function hn(e, t, n, r) {
  const o = e.dirs,
    s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    s && (a.oldValue = s[i].value);
    let l = a.dir[r];
    l && (Ln(), rn(l, n, 8, [e.el, a, e, t]), Dn());
  }
}
const pp = Symbol('_vte'),
  hp = (e) => e.__isTeleport,
  Lo = (e) => e && (e.disabled || e.disabled === ''),
  cu = (e) => e && (e.defer || e.defer === ''),
  uu = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
  fu = (e) => typeof MathMLElement == 'function' && e instanceof MathMLElement,
  Fa = (e, t) => {
    const n = e && e.to;
    return Ge(n) ? (t ? t(n) : null) : n;
  },
  gp = {
    name: 'Teleport',
    __isTeleport: !0,
    process(e, t, n, r, o, s, i, a, l, u) {
      const {
          mc: c,
          pc: f,
          pbc: d,
          o: { insert: p, querySelector: h, createText: g, createComment: _ },
        } = u,
        x = Lo(t.props);
      let { shapeFlag: b, children: v, dynamicChildren: m } = t;
      if (e == null) {
        const w = (t.el = g('')),
          C = (t.anchor = g(''));
        p(w, n, r), p(C, n, r);
        const E = (R, D) => {
            b & 16 && c(v, R, D, o, s, i, a, l);
          },
          A = () => {
            const R = (t.target = Fa(t.props, h)),
              D = mp(R, t, g, p);
            R &&
              (i !== 'svg' && uu(R)
                ? (i = 'svg')
                : i !== 'mathml' && fu(R) && (i = 'mathml'),
              o &&
                o.isCE &&
                (
                  o.ce._teleportTargets || (o.ce._teleportTargets = new Set())
                ).add(R),
              x || (E(R, D), Rs(t, !1)));
          };
        x && (E(n, C), Rs(t, !0)),
          cu(t.props)
            ? ((t.el.__isMounted = !1),
              ct(() => {
                A(), delete t.el.__isMounted;
              }, s))
            : A();
      } else {
        if (cu(t.props) && e.el.__isMounted === !1) {
          ct(() => {
            gp.process(e, t, n, r, o, s, i, a, l, u);
          }, s);
          return;
        }
        (t.el = e.el), (t.targetStart = e.targetStart);
        const w = (t.anchor = e.anchor),
          C = (t.target = e.target),
          E = (t.targetAnchor = e.targetAnchor),
          A = Lo(e.props),
          R = A ? n : C,
          D = A ? w : E;
        if (
          (i === 'svg' || uu(C)
            ? (i = 'svg')
            : (i === 'mathml' || fu(C)) && (i = 'mathml'),
          m
            ? (d(e.dynamicChildren, m, R, o, s, i, a), oc(e, t, !0))
            : l || f(e, t, R, D, o, s, i, a, !1),
          x)
        )
          A
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : us(t, n, w, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const X = (t.target = Fa(t.props, h));
          X && us(t, X, null, u, 0);
        } else A && us(t, C, E, u, 1);
        Rs(t, x);
      }
    },
    remove(e, t, n, { um: r, o: { remove: o } }, s) {
      const {
        shapeFlag: i,
        children: a,
        anchor: l,
        targetStart: u,
        targetAnchor: c,
        target: f,
        props: d,
      } = e;
      if ((f && (o(u), o(c)), s && o(l), i & 16)) {
        const p = s || !Lo(d);
        for (let h = 0; h < a.length; h++) {
          const g = a[h];
          r(g, t, n, p, !!g.dynamicChildren);
        }
      }
    },
    move: us,
    hydrate: ry,
  };
function us(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: u, props: c } = e,
    f = s === 2;
  if ((f && r(i, t, n), (!f || Lo(c)) && l & 16))
    for (let d = 0; d < u.length; d++) o(u[d], t, n, 2);
  f && r(a, t, n);
}
function ry(
  e,
  t,
  n,
  r,
  o,
  s,
  {
    o: {
      nextSibling: i,
      parentNode: a,
      querySelector: l,
      insert: u,
      createText: c,
    },
  },
  f
) {
  function d(g, _, x, b) {
    (_.anchor = f(i(g), _, a(g), n, r, o, s)),
      (_.targetStart = x),
      (_.targetAnchor = b);
  }
  const p = (t.target = Fa(t.props, l)),
    h = Lo(t.props);
  if (p) {
    const g = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (h) d(e, t, g, g && i(g));
      else {
        t.anchor = i(e);
        let _ = g;
        for (; _; ) {
          if (_ && _.nodeType === 8) {
            if (_.data === 'teleport start anchor') t.targetStart = _;
            else if (_.data === 'teleport anchor') {
              (t.targetAnchor = _),
                (p._lpa = t.targetAnchor && i(t.targetAnchor));
              break;
            }
          }
          _ = i(_);
        }
        t.targetAnchor || mp(p, t, c, u), f(g && i(g), t, p, n, r, o, s);
      }
    Rs(t, h);
  } else h && t.shapeFlag & 16 && d(e, t, e, i(e));
  return t.anchor && i(t.anchor);
}
const Di = gp;
function Rs(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (
      t
        ? ((r = e.el), (o = e.anchor))
        : ((r = e.targetStart), (o = e.targetAnchor));
      r && r !== o;

    )
      r.nodeType === 1 && r.setAttribute('data-v-owner', n.uid),
        (r = r.nextSibling);
    n.ut();
  }
}
function mp(e, t, n, r) {
  const o = (t.targetStart = n('')),
    s = (t.targetAnchor = n(''));
  return (o[pp] = s), e && (r(o, e), r(s, e)), s;
}
const Sn = Symbol('_leaveCb'),
  fs = Symbol('_enterCb');
function vp() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Ye(() => {
      e.isMounted = !0;
    }),
    Sr(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ft = [Function, Array],
  yp = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ft,
    onEnter: Ft,
    onAfterEnter: Ft,
    onEnterCancelled: Ft,
    onBeforeLeave: Ft,
    onLeave: Ft,
    onAfterLeave: Ft,
    onLeaveCancelled: Ft,
    onBeforeAppear: Ft,
    onAppear: Ft,
    onAfterAppear: Ft,
    onAppearCancelled: Ft,
  },
  bp = (e) => {
    const t = e.subTree;
    return t.component ? bp(t.component) : t;
  },
  oy = {
    name: 'BaseTransition',
    props: yp,
    setup(e, { slots: t }) {
      const n = Xe(),
        r = vp();
      return () => {
        const o = t.default && Zl(t.default(), !0);
        if (!o || !o.length) return;
        const s = _p(o),
          i = Re(e),
          { mode: a } = i;
        if (r.isLeaving) return ua(s);
        const l = du(s);
        if (!l) return ua(s);
        let u = jo(l, i, r, n, (f) => (u = f));
        l.type !== rt && tr(l, u);
        let c = n.subTree && du(n.subTree);
        if (c && c.type !== rt && !Qt(c, l) && bp(n).type !== rt) {
          let f = jo(c, i, r, n);
          if ((tr(c, f), a === 'out-in' && l.type !== rt))
            return (
              (r.isLeaving = !0),
              (f.afterLeave = () => {
                (r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete f.afterLeave,
                  (c = void 0);
              }),
              ua(s)
            );
          a === 'in-out' && l.type !== rt
            ? (f.delayLeave = (d, p, h) => {
                const g = wp(r, c);
                (g[String(c.key)] = c),
                  (d[Sn] = () => {
                    p(), (d[Sn] = void 0), delete u.delayedLeave, (c = void 0);
                  }),
                  (u.delayedLeave = () => {
                    h(), delete u.delayedLeave, (c = void 0);
                  });
              })
            : (c = void 0);
        } else c && (c = void 0);
        return s;
      };
    },
  };
function _p(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== rt) {
        t = n;
        break;
      }
  }
  return t;
}
const sy = oy;
function wp(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function jo(e, t, n, r, o) {
  const {
      appear: s,
      mode: i,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: u,
      onAfterEnter: c,
      onEnterCancelled: f,
      onBeforeLeave: d,
      onLeave: p,
      onAfterLeave: h,
      onLeaveCancelled: g,
      onBeforeAppear: _,
      onAppear: x,
      onAfterAppear: b,
      onAppearCancelled: v,
    } = t,
    m = String(e.key),
    w = wp(n, e),
    C = (R, D) => {
      R && rn(R, r, 9, D);
    },
    E = (R, D) => {
      const X = D[1];
      C(R, D),
        he(R) ? R.every((M) => M.length <= 1) && X() : R.length <= 1 && X();
    },
    A = {
      mode: i,
      persisted: a,
      beforeEnter(R) {
        let D = l;
        if (!n.isMounted)
          if (s) D = _ || l;
          else return;
        R[Sn] && R[Sn](!0);
        const X = w[m];
        X && Qt(e, X) && X.el[Sn] && X.el[Sn](), C(D, [R]);
      },
      enter(R) {
        let D = u,
          X = c,
          M = f;
        if (!n.isMounted)
          if (s) (D = x || u), (X = b || c), (M = v || f);
          else return;
        let Z = !1;
        const G = (R[fs] = (Q) => {
          Z ||
            ((Z = !0),
            Q ? C(M, [R]) : C(X, [R]),
            A.delayedLeave && A.delayedLeave(),
            (R[fs] = void 0));
        });
        D ? E(D, [R, G]) : G();
      },
      leave(R, D) {
        const X = String(e.key);
        if ((R[fs] && R[fs](!0), n.isUnmounting)) return D();
        C(d, [R]);
        let M = !1;
        const Z = (R[Sn] = (G) => {
          M ||
            ((M = !0),
            D(),
            G ? C(g, [R]) : C(h, [R]),
            (R[Sn] = void 0),
            w[X] === e && delete w[X]);
        });
        (w[X] = e), p ? E(p, [R, Z]) : Z();
      },
      clone(R) {
        const D = jo(R, t, n, r, o);
        return o && o(D), D;
      },
    };
  return A;
}
function ua(e) {
  if (ts(e)) return (e = on(e)), (e.children = null), e;
}
function du(e) {
  if (!ts(e)) return hp(e.type) && e.children ? _p(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && ye(n.default)) return n.default();
  }
}
function tr(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), tr(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Zl(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Te
      ? (i.patchFlag & 128 && o++, (r = r.concat(Zl(i.children, t, a))))
      : (t || i.type !== rt) && r.push(a != null ? on(i, { key: a }) : i);
  }
  if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
function J(e, t) {
  return ye(e) ? st({ name: e.name }, t, { setup: e }) : e;
}
function xp() {
  const e = Xe();
  return e
    ? (e.appContext.config.idPrefix || 'v') + '-' + e.ids[0] + e.ids[1]++
    : '';
}
function ec(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function iy(e) {
  const t = Xe(),
    n = Pe(null);
  if (t) {
    const o = t.refs === De ? (t.refs = {}) : t.refs;
    Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (s) => (n.value = s),
    });
  }
  return n;
}
const Qs = new WeakMap();
function Gr(e, t, n, r, o = !1) {
  if (he(e)) {
    e.forEach((h, g) => Gr(h, t && (he(t) ? t[g] : t), n, r, o));
    return;
  }
  if (Zn(r) && !o) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      Gr(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? ac(r.component) : r.el,
    i = o ? null : s,
    { i: a, r: l } = e,
    u = t && t.r,
    c = a.refs === De ? (a.refs = {}) : a.refs,
    f = a.setupState,
    d = Re(f),
    p = f === De ? Dd : (h) => Ne(d, h);
  if (u != null && u !== l) {
    if ((pu(t), Ge(u))) (c[u] = null), p(u) && (f[u] = null);
    else if (ze(u)) {
      u.value = null;
      const h = t;
      h.k && (c[h.k] = null);
    }
  }
  if (ye(l)) es(l, a, 12, [i, c]);
  else {
    const h = Ge(l),
      g = ze(l);
    if (h || g) {
      const _ = () => {
        if (e.f) {
          const x = h ? (p(l) ? f[l] : c[l]) : l.value;
          if (o) he(x) && Hl(x, s);
          else if (he(x)) x.includes(s) || x.push(s);
          else if (h) (c[l] = [s]), p(l) && (f[l] = c[l]);
          else {
            const b = [s];
            (l.value = b), e.k && (c[e.k] = b);
          }
        } else
          h
            ? ((c[l] = i), p(l) && (f[l] = i))
            : g && ((l.value = i), e.k && (c[e.k] = i));
      };
      if (i) {
        const x = () => {
          _(), Qs.delete(e);
        };
        (x.id = -1), Qs.set(e, x), ct(x, n);
      } else pu(e), _();
    }
  }
}
function pu(e) {
  const t = Qs.get(e);
  t && ((t.flags |= 8), Qs.delete(e));
}
let hu = !1;
const Nr = () => {
    hu ||
      (console.error('Hydration completed but contains mismatches.'),
      (hu = !0));
  },
  ay = (e) => e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  ly = (e) => e.namespaceURI.includes('MathML'),
  ds = (e) => {
    if (e.nodeType === 1) {
      if (ay(e)) return 'svg';
      if (ly(e)) return 'mathml';
    }
  },
  zr = (e) => e.nodeType === 8;
function cy(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: o,
        nextSibling: s,
        parentNode: i,
        remove: a,
        insert: l,
        createComment: u,
      },
    } = e,
    c = (v, m) => {
      if (!m.hasChildNodes()) {
        n(null, v, m), Xs(), (m._vnode = v);
        return;
      }
      f(m.firstChild, v, null, null, null), Xs(), (m._vnode = v);
    },
    f = (v, m, w, C, E, A = !1) => {
      A = A || !!m.dynamicChildren;
      const R = zr(v) && v.data === '[',
        D = () => g(v, m, w, C, E, R),
        { type: X, ref: M, shapeFlag: Z, patchFlag: G } = m;
      let Q = v.nodeType;
      (m.el = v), G === -2 && ((A = !1), (m.dynamicChildren = null));
      let $ = null;
      switch (X) {
        case br:
          Q !== 3
            ? m.children === ''
              ? (l((m.el = o('')), i(v), v), ($ = v))
              : ($ = D())
            : (v.data !== m.children && (Nr(), (v.data = m.children)),
              ($ = s(v)));
          break;
        case rt:
          b(v)
            ? (($ = s(v)), x((m.el = v.content.firstChild), v, w))
            : Q !== 8 || R
            ? ($ = D())
            : ($ = s(v));
          break;
        case Is:
          if ((R && ((v = s(v)), (Q = v.nodeType)), Q === 1 || Q === 3)) {
            $ = v;
            const U = !m.children.length;
            for (let I = 0; I < m.staticCount; I++)
              U && (m.children += $.nodeType === 1 ? $.outerHTML : $.data),
                I === m.staticCount - 1 && (m.anchor = $),
                ($ = s($));
            return R ? s($) : $;
          } else D();
          break;
        case Te:
          R ? ($ = h(v, m, w, C, E, A)) : ($ = D());
          break;
        default:
          if (Z & 1)
            (Q !== 1 || m.type.toLowerCase() !== v.tagName.toLowerCase()) &&
            !b(v)
              ? ($ = D())
              : ($ = d(v, m, w, C, E, A));
          else if (Z & 6) {
            m.slotScopeIds = E;
            const U = i(v);
            if (
              (R
                ? ($ = _(v))
                : zr(v) && v.data === 'teleport start'
                ? ($ = _(v, v.data, 'teleport end'))
                : ($ = s(v)),
              t(m, U, null, w, C, ds(U), A),
              Zn(m) && !m.type.__asyncResolved)
            ) {
              let I;
              R
                ? ((I = z(Te)),
                  (I.anchor = $ ? $.previousSibling : U.lastChild))
                : (I = v.nodeType === 3 ? ft('') : z('div')),
                (I.el = v),
                (m.component.subTree = I);
            }
          } else
            Z & 64
              ? Q !== 8
                ? ($ = D())
                : ($ = m.type.hydrate(v, m, w, C, E, A, e, p))
              : Z & 128 &&
                ($ = m.type.hydrate(v, m, w, C, ds(i(v)), E, A, e, f));
      }
      return M != null && Gr(M, null, C, m), $;
    },
    d = (v, m, w, C, E, A) => {
      A = A || !!m.dynamicChildren;
      const {
          type: R,
          props: D,
          patchFlag: X,
          shapeFlag: M,
          dirs: Z,
          transition: G,
        } = m,
        Q = R === 'input' || R === 'option';
      if (Q || X !== -1) {
        Z && hn(m, null, w, 'created');
        let $ = !1;
        if (b(v)) {
          $ = Wp(null, G) && w && w.vnode.props && w.vnode.props.appear;
          const I = v.content.firstChild;
          if ($) {
            const ie = I.getAttribute('class');
            ie && (I.$cls = ie), G.beforeEnter(I);
          }
          x(I, v, w), (m.el = v = I);
        }
        if (M & 16 && !(D && (D.innerHTML || D.textContent))) {
          let I = p(v.firstChild, m, v, w, C, E, A);
          for (; I; ) {
            ps(v, 1) || Nr();
            const ie = I;
            (I = I.nextSibling), a(ie);
          }
        } else if (M & 8) {
          let I = m.children;
          I[0] ===
            `
` &&
            (v.tagName === 'PRE' || v.tagName === 'TEXTAREA') &&
            (I = I.slice(1));
          const { textContent: ie } = v;
          ie !== I &&
            ie !==
              I.replace(
                /\r\n|\r/g,
                `
`
              ) &&
            (ps(v, 0) || Nr(), (v.textContent = m.children));
        }
        if (D) {
          if (Q || !A || X & 48) {
            const I = v.tagName.includes('-');
            for (const ie in D)
              ((Q && (ie.endsWith('value') || ie === 'indeterminate')) ||
                (Jo(ie) && !Wr(ie)) ||
                ie[0] === '.' ||
                I) &&
                r(v, ie, null, D[ie], void 0, w);
          } else if (D.onClick) r(v, 'onClick', null, D.onClick, void 0, w);
          else if (X & 4 && vr(D.style)) for (const I in D.style) D.style[I];
        }
        let U;
        (U = D && D.onVnodeBeforeMount) && Dt(U, w, m),
          Z && hn(m, null, w, 'beforeMount'),
          ((U = D && D.onVnodeMounted) || Z || $) &&
            Zp(() => {
              U && Dt(U, w, m), $ && G.enter(v), Z && hn(m, null, w, 'mounted');
            }, C);
      }
      return v.nextSibling;
    },
    p = (v, m, w, C, E, A, R) => {
      R = R || !!m.dynamicChildren;
      const D = m.children,
        X = D.length;
      for (let M = 0; M < X; M++) {
        const Z = R ? D[M] : (D[M] = Bt(D[M])),
          G = Z.type === br;
        v
          ? (G &&
              !R &&
              M + 1 < X &&
              Bt(D[M + 1]).type === br &&
              (l(o(v.data.slice(Z.children.length)), w, s(v)),
              (v.data = Z.children)),
            (v = f(v, Z, C, E, A, R)))
          : G && !Z.children
          ? l((Z.el = o('')), w)
          : (ps(w, 1) || Nr(), n(null, Z, w, null, C, E, ds(w), A));
      }
      return v;
    },
    h = (v, m, w, C, E, A) => {
      const { slotScopeIds: R } = m;
      R && (E = E ? E.concat(R) : R);
      const D = i(v),
        X = p(s(v), m, D, w, C, E, A);
      return X && zr(X) && X.data === ']'
        ? s((m.anchor = X))
        : (Nr(), l((m.anchor = u(']')), D, X), X);
    },
    g = (v, m, w, C, E, A) => {
      if ((ps(v.parentElement, 1) || Nr(), (m.el = null), A)) {
        const X = _(v);
        for (;;) {
          const M = s(v);
          if (M && M !== X) a(M);
          else break;
        }
      }
      const R = s(v),
        D = i(v);
      return (
        a(v),
        n(null, m, D, R, w, C, ds(D), E),
        w && ((w.vnode.el = m.el), Bi(w, m.el)),
        R
      );
    },
    _ = (v, m = '[', w = ']') => {
      let C = 0;
      for (; v; )
        if (((v = s(v)), v && zr(v) && (v.data === m && C++, v.data === w))) {
          if (C === 0) return s(v);
          C--;
        }
      return v;
    },
    x = (v, m, w) => {
      const C = m.parentNode;
      C && C.replaceChild(v, m);
      let E = w;
      for (; E; )
        E.vnode.el === m && (E.vnode.el = E.subTree.el = v), (E = E.parent);
    },
    b = (v) => v.nodeType === 1 && v.tagName === 'TEMPLATE';
  return [c, f];
}
const gu = 'data-allow-mismatch',
  uy = { 0: 'text', 1: 'children', 2: 'class', 3: 'style', 4: 'attribute' };
function ps(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(gu); ) e = e.parentElement;
  const n = e && e.getAttribute(gu);
  if (n == null) return !1;
  if (n === '') return !0;
  {
    const r = n.split(',');
    return t === 0 && r.includes('children') ? !0 : r.includes(uy[t]);
  }
}
Ti().requestIdleCallback;
Ti().cancelIdleCallback;
function fy(e, t) {
  if (zr(e) && e.data === '[') {
    let n = 1,
      r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1) break;
      } else if (zr(r))
        if (r.data === ']') {
          if (--n === 0) break;
        } else r.data === '[' && n++;
      r = r.nextSibling;
    }
  } else t(e);
}
const Zn = (e) => !!e.type.__asyncLoader;
function H(e) {
  ye(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: o = 200,
    hydrate: s,
    timeout: i,
    suspensible: a = !0,
    onError: l,
  } = e;
  let u = null,
    c,
    f = 0;
  const d = () => (f++, (u = null), p()),
    p = () => {
      let h;
      return (
        u ||
        (h = u =
          t()
            .catch((g) => {
              if (((g = g instanceof Error ? g : new Error(String(g))), l))
                return new Promise((_, x) => {
                  l(
                    g,
                    () => _(d()),
                    () => x(g),
                    f + 1
                  );
                });
              throw g;
            })
            .then((g) =>
              h !== u && u
                ? u
                : (g &&
                    (g.__esModule || g[Symbol.toStringTag] === 'Module') &&
                    (g = g.default),
                  (c = g),
                  g)
            ))
      );
    };
  return J({
    name: 'AsyncComponentWrapper',
    __asyncLoader: p,
    __asyncHydrate(h, g, _) {
      let x = !1;
      (g.bu || (g.bu = [])).push(() => (x = !0));
      const b = () => {
          x || _();
        },
        v = s
          ? () => {
              const m = s(b, (w) => fy(h, w));
              m && (g.bum || (g.bum = [])).push(m);
            }
          : b;
      c ? v() : p().then(() => !g.isUnmounted && v());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const h = ht;
      if ((ec(h), c)) return () => hs(c, h);
      const g = (v) => {
        (u = null), co(v, h, 13, !r);
      };
      if ((a && h.suspense) || Zr)
        return p()
          .then((v) => () => hs(v, h))
          .catch((v) => (g(v), () => (r ? z(r, { error: v }) : null)));
      const _ = j(!1),
        x = j(),
        b = j(!!o);
      return (
        o &&
          setTimeout(() => {
            b.value = !1;
          }, o),
        i != null &&
          setTimeout(() => {
            if (!_.value && !x.value) {
              const v = new Error(`Async component timed out after ${i}ms.`);
              g(v), (x.value = v);
            }
          }, i),
        p()
          .then(() => {
            (_.value = !0), h.parent && ts(h.parent.vnode) && h.parent.update();
          })
          .catch((v) => {
            g(v), (x.value = v);
          }),
        () => {
          if (_.value && c) return hs(c, h);
          if (x.value && r) return z(r, { error: x.value });
          if (n && !b.value) return hs(n, h);
        }
      );
    },
  });
}
function hs(e, t) {
  const { ref: n, props: r, children: o, ce: s } = t.vnode,
    i = z(e, r, o);
  return (i.ref = n), (i.ce = s), delete t.vnode.ce, i;
}
const ts = (e) => e.type.__isKeepAlive,
  dy = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = Xe(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const b = t.default && t.default();
          return b && b.length === 1 ? b[0] : b;
        };
      const o = new Map(),
        s = new Set();
      let i = null;
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: u,
            um: c,
            o: { createElement: f },
          },
        } = r,
        d = f('div');
      (r.activate = (b, v, m, w, C) => {
        const E = b.component;
        u(b, v, m, 0, a),
          l(E.vnode, b, v, m, E, a, w, b.slotScopeIds, C),
          ct(() => {
            (E.isDeactivated = !1), E.a && Oo(E.a);
            const A = b.props && b.props.onVnodeMounted;
            A && Dt(A, E.parent, b);
          }, a);
      }),
        (r.deactivate = (b) => {
          const v = b.component;
          ei(v.m),
            ei(v.a),
            u(b, d, null, 1, a),
            ct(() => {
              v.da && Oo(v.da);
              const m = b.props && b.props.onVnodeUnmounted;
              m && Dt(m, v.parent, b), (v.isDeactivated = !0);
            }, a);
        });
      function p(b) {
        fa(b), c(b, n, a, !0);
      }
      function h(b) {
        o.forEach((v, m) => {
          const w = Ja(v.type);
          w && !b(w) && g(m);
        });
      }
      function g(b) {
        const v = o.get(b);
        v && (!i || !Qt(v, i)) ? p(v) : i && fa(i), o.delete(b), s.delete(b);
      }
      we(
        () => [e.include, e.exclude],
        ([b, v]) => {
          b && h((m) => Po(b, m)), v && h((m) => !Po(v, m));
        },
        { flush: 'post', deep: !0 }
      );
      let _ = null;
      const x = () => {
        _ != null &&
          (ti(n.subTree.type)
            ? ct(() => {
                o.set(_, gs(n.subTree));
              }, n.subTree.suspense)
            : o.set(_, gs(n.subTree)));
      };
      return (
        Ye(x),
        Mi(x),
        Sr(() => {
          o.forEach((b) => {
            const { subTree: v, suspense: m } = n,
              w = gs(v);
            if (b.type === w.type && b.key === w.key) {
              fa(w);
              const C = w.component.da;
              C && ct(C, m);
              return;
            }
            p(b);
          });
        }),
        () => {
          if (((_ = null), !t.default)) return (i = null);
          const b = t.default(),
            v = b[0];
          if (b.length > 1) return (i = null), b;
          if (!wr(v) || (!(v.shapeFlag & 4) && !(v.shapeFlag & 128)))
            return (i = null), v;
          let m = gs(v);
          if (m.type === rt) return (i = null), m;
          const w = m.type,
            C = Ja(Zn(m) ? m.type.__asyncResolved || {} : w),
            { include: E, exclude: A, max: R } = e;
          if ((E && (!C || !Po(E, C))) || (A && C && Po(A, C)))
            return (m.shapeFlag &= -257), (i = m), v;
          const D = m.key == null ? w : m.key,
            X = o.get(D);
          return (
            m.el && ((m = on(m)), v.shapeFlag & 128 && (v.ssContent = m)),
            (_ = D),
            X
              ? ((m.el = X.el),
                (m.component = X.component),
                m.transition && tr(m, m.transition),
                (m.shapeFlag |= 512),
                s.delete(D),
                s.add(D))
              : (s.add(D),
                R && s.size > parseInt(R, 10) && g(s.values().next().value)),
            (m.shapeFlag |= 256),
            (i = m),
            ti(v.type) ? v : m
          );
        }
      );
    },
  },
  py = dy;
function Po(e, t) {
  return he(e)
    ? e.some((n) => Po(n, t))
    : Ge(e)
    ? e.split(',').includes(t)
    : mv(e)
    ? ((e.lastIndex = 0), e.test(t))
    : !1;
}
function kp(e, t) {
  Ep(e, 'a', t);
}
function Cp(e, t) {
  Ep(e, 'da', t);
}
function Ep(e, t, n = ht) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((qi(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      ts(o.parent.vnode) && hy(r, t, n, o), (o = o.parent);
  }
}
function hy(e, t, n, r) {
  const o = qi(t, e, r, !0);
  wn(() => {
    Hl(r[t], o);
  }, n);
}
function fa(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function gs(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function qi(e, t, n = ht, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...i) => {
          Ln();
          const a = xr(n),
            l = rn(t, n, e, i);
          return a(), Dn(), l;
        });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const jn =
    (e) =>
    (t, n = ht) => {
      (!Zr || e === 'sp') && qi(e, (...r) => t(...r), n);
    },
  tc = jn('bm'),
  Ye = jn('m'),
  gy = jn('bu'),
  Mi = jn('u'),
  Sr = jn('bum'),
  wn = jn('um'),
  my = jn('sp'),
  vy = jn('rtg'),
  yy = jn('rtc');
function Pp(e, t = ht) {
  qi('ec', e, t);
}
const Tp = 'components';
function mu(e, t) {
  return Ap(Tp, e, !0, t) || e;
}
const Sp = Symbol.for('v-ndc');
function Tt(e) {
  return Ge(e) ? Ap(Tp, e, !1) || e : e || Sp;
}
function Ap(e, t, n = !0, r = !1) {
  const o = Pt || ht;
  if (o) {
    const s = o.type;
    {
      const a = Ja(s, !1);
      if (a && (a === t || a === At(t) || a === Pi(At(t)))) return s;
    }
    const i = vu(o[e] || s[e], t) || vu(o.appContext[e], t);
    return !i && r ? s : i;
  }
}
function vu(e, t) {
  return e && (e[t] || e[At(t)] || e[Pi(At(t))]);
}
function Ht(e, t, n, r) {
  let o;
  const s = n,
    i = he(e);
  if (i || Ge(e)) {
    const a = i && vr(e);
    let l = !1,
      u = !1;
    a && ((l = !Ut(e)), (u = qn(e)), (e = Ri(e))), (o = new Array(e.length));
    for (let c = 0, f = e.length; c < f; c++)
      o[c] = t(l ? (u ? Ws(pt(e[c])) : pt(e[c])) : e[c], c, void 0, s);
  } else if (typeof e == 'number') {
    o = new Array(e);
    for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, s);
  } else if (He(e))
    if (e[Symbol.iterator]) o = Array.from(e, (a, l) => t(a, l, void 0, s));
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l];
        o[l] = t(e[c], c, l, s);
      }
    }
  else o = [];
  return o;
}
function QL(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (he(r)) for (let o = 0; o < r.length; o++) e[r[o].name] = r[o].fn;
    else
      r &&
        (e[r.name] = r.key
          ? (...o) => {
              const s = r.fn(...o);
              return s && (s.key = r.key), s;
            }
          : r.fn);
  }
  return e;
}
function B(e, t, n = {}, r, o) {
  if (Pt.ce || (Pt.parent && Zn(Pt.parent) && Pt.parent.ce)) {
    const u = Object.keys(n).length > 0;
    return (
      t !== 'default' && (n.name = t),
      T(),
      L(Te, null, [z('slot', n, r && r())], u ? -2 : 64)
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), T();
  const i = s && Op(s(n)),
    a = n.key || (i && i.key),
    l = L(
      Te,
      { key: (a && !Bn(a) ? a : `_${t}`) + (!i && r ? '_fb' : '') },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !o && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
    s && s._c && (s._d = !0),
    l
  );
}
function Op(e) {
  return e.some((t) =>
    wr(t) ? !(t.type === rt || (t.type === Te && !Op(t.children))) : !0
  )
    ? e
    : null;
}
function Rp(e, t) {
  const n = {};
  for (const r in e) n[Ao(r)] = e[r];
  return n;
}
const za = (e) => (e ? (rh(e) ? ac(e) : za(e.parent)) : null),
  Do = st(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => za(e.parent),
    $root: (e) => za(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => qp(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Ql(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Ze.bind(e.proxy)),
    $watch: (e) => Fy.bind(e),
  }),
  da = (e, t) => e !== De && !e.__isScriptSetup && Ne(e, t),
  by = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0;
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: s,
        accessCache: i,
        type: a,
        appContext: l,
      } = e;
      let u;
      if (t[0] !== '$') {
        const p = i[t];
        if (p !== void 0)
          switch (p) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return s[t];
          }
        else {
          if (da(r, t)) return (i[t] = 1), r[t];
          if (o !== De && Ne(o, t)) return (i[t] = 2), o[t];
          if ((u = e.propsOptions[0]) && Ne(u, t)) return (i[t] = 3), s[t];
          if (n !== De && Ne(n, t)) return (i[t] = 4), n[t];
          Ha && (i[t] = 0);
        }
      }
      const c = Do[t];
      let f, d;
      if (c) return t === '$attrs' && vt(e.attrs, 'get', ''), c(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== De && Ne(n, t)) return (i[t] = 4), n[t];
      if (((d = l.config.globalProperties), Ne(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return da(o, t)
        ? ((o[t] = n), !0)
        : r !== De && Ne(r, t)
        ? ((r[t] = n), !0)
        : Ne(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((s[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: s,
          type: i,
        },
      },
      a
    ) {
      let l, u;
      return !!(
        n[a] ||
        (e !== De && a[0] !== '$' && Ne(e, a)) ||
        da(t, a) ||
        ((l = s[0]) && Ne(l, a)) ||
        Ne(r, a) ||
        Ne(Do, a) ||
        Ne(o.config.globalProperties, a) ||
        ((u = i.__cssModules) && u[a])
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Ne(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function un() {
  return Ip().slots;
}
function _y() {
  return Ip().attrs;
}
function Ip(e) {
  const t = Xe();
  return t.setupContext || (t.setupContext = sh(t));
}
function Fo(e) {
  return he(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function wy(e, t) {
  const n = Fo(e);
  for (const r in t) {
    if (r.startsWith('__skip')) continue;
    let o = n[r];
    o
      ? he(o) || ye(o)
        ? (o = n[r] = { type: o, default: t[r] })
        : (o.default = t[r])
      : o === null && (o = n[r] = { default: t[r] }),
      o && t[`__skip_${r}`] && (o.skipFactory = !0);
  }
  return n;
}
function xy(e, t) {
  return !e || !t
    ? e || t
    : he(e) && he(t)
    ? e.concat(t)
    : st({}, Fo(e), Fo(t));
}
function Lp(e) {
  const t = Xe();
  let n = e();
  return (
    Ya(),
    Ul(n) &&
      (n = n.catch((r) => {
        throw (xr(t), r);
      })),
    [n, () => xr(t)]
  );
}
let Ha = !0;
function ky(e) {
  const t = qp(e),
    n = e.proxy,
    r = e.ctx;
  (Ha = !1), t.beforeCreate && yu(t.beforeCreate, e, 'bc');
  const {
    data: o,
    computed: s,
    methods: i,
    watch: a,
    provide: l,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: d,
    beforeUpdate: p,
    updated: h,
    activated: g,
    deactivated: _,
    beforeDestroy: x,
    beforeUnmount: b,
    destroyed: v,
    unmounted: m,
    render: w,
    renderTracked: C,
    renderTriggered: E,
    errorCaptured: A,
    serverPrefetch: R,
    expose: D,
    inheritAttrs: X,
    components: M,
    directives: Z,
    filters: G,
  } = t;
  if ((u && Cy(u, r, null), i))
    for (const U in i) {
      const I = i[U];
      ye(I) && (r[U] = I.bind(n));
    }
  if (o) {
    const U = o.call(n, n);
    He(U) && (e.data = dt(U));
  }
  if (((Ha = !0), s))
    for (const U in s) {
      const I = s[U],
        ie = ye(I) ? I.bind(n, n) : ye(I.get) ? I.get.bind(n, n) : mn,
        Ee = !ye(I) && ye(I.set) ? I.set.bind(n) : mn,
        qe = S({ get: ie, set: Ee });
      Object.defineProperty(r, U, {
        enumerable: !0,
        configurable: !0,
        get: () => qe.value,
        set: (Se) => (qe.value = Se),
      });
    }
  if (a) for (const U in a) Dp(a[U], r, n, U);
  if (l) {
    const U = ye(l) ? l.call(n) : l;
    Reflect.ownKeys(U).forEach((I) => {
      bt(I, U[I]);
    });
  }
  c && yu(c, e, 'c');
  function $(U, I) {
    he(I) ? I.forEach((ie) => U(ie.bind(n))) : I && U(I.bind(n));
  }
  if (
    ($(tc, f),
    $(Ye, d),
    $(gy, p),
    $(Mi, h),
    $(kp, g),
    $(Cp, _),
    $(Pp, A),
    $(yy, C),
    $(vy, E),
    $(Sr, b),
    $(wn, m),
    $(my, R),
    he(D))
  )
    if (D.length) {
      const U = e.exposed || (e.exposed = {});
      D.forEach((I) => {
        Object.defineProperty(U, I, {
          get: () => n[I],
          set: (ie) => (n[I] = ie),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === mn && (e.render = w),
    X != null && (e.inheritAttrs = X),
    M && (e.components = M),
    Z && (e.directives = Z),
    R && ec(e);
}
function Cy(e, t, n = mn) {
  he(e) && (e = Ua(e));
  for (const r in e) {
    const o = e[r];
    let s;
    He(o)
      ? 'default' in o
        ? (s = $e(o.from || r, o.default, !0))
        : (s = $e(o.from || r))
      : (s = $e(o)),
      ze(s)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (i) => (s.value = i),
          })
        : (t[r] = s);
  }
}
function yu(e, t, n) {
  rn(he(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Dp(e, t, n, r) {
  let o = r.includes('.') ? Yp(n, r) : () => n[r];
  if (Ge(e)) {
    const s = t[e];
    ye(s) && we(o, s);
  } else if (ye(e)) we(o, e.bind(n));
  else if (He(e))
    if (he(e)) e.forEach((s) => Dp(s, t, n, r));
    else {
      const s = ye(e.handler) ? e.handler.bind(n) : t[e.handler];
      ye(s) && we(o, s, e);
    }
}
function qp(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: s,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    a = s.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !o.length && !n && !r
      ? (l = t)
      : ((l = {}), o.length && o.forEach((u) => Zs(l, u, i, !0)), Zs(l, t, i)),
    He(t) && s.set(t, l),
    l
  );
}
function Zs(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Zs(e, s, n, !0), o && o.forEach((i) => Zs(e, i, n, !0));
  for (const i in t)
    if (!(r && i === 'expose')) {
      const a = Ey[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Ey = {
  data: bu,
  props: _u,
  emits: _u,
  methods: To,
  computed: To,
  beforeCreate: wt,
  created: wt,
  beforeMount: wt,
  mounted: wt,
  beforeUpdate: wt,
  updated: wt,
  beforeDestroy: wt,
  beforeUnmount: wt,
  destroyed: wt,
  unmounted: wt,
  activated: wt,
  deactivated: wt,
  errorCaptured: wt,
  serverPrefetch: wt,
  components: To,
  directives: To,
  watch: Ty,
  provide: bu,
  inject: Py,
};
function bu(e, t) {
  return t
    ? e
      ? function () {
          return st(
            ye(e) ? e.call(this, this) : e,
            ye(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Py(e, t) {
  return To(Ua(e), Ua(t));
}
function Ua(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function wt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function To(e, t) {
  return e ? st(Object.create(null), e, t) : t;
}
function _u(e, t) {
  return e
    ? he(e) && he(t)
      ? [...new Set([...e, ...t])]
      : st(Object.create(null), Fo(e), Fo(t ?? {}))
    : t;
}
function Ty(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = st(Object.create(null), e);
  for (const r in t) n[r] = wt(e[r], t[r]);
  return n;
}
function Mp() {
  return {
    app: null,
    config: {
      isNativeTag: Dd,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Sy = 0;
function Ay(e, t) {
  return function (r, o = null) {
    ye(r) || (r = st({}, r)), o != null && !He(o) && (o = null);
    const s = Mp(),
      i = new WeakSet(),
      a = [];
    let l = !1;
    const u = (s.app = {
      _uid: Sy++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: fb,
      get config() {
        return s.config;
      },
      set config(c) {},
      use(c, ...f) {
        return (
          i.has(c) ||
            (c && ye(c.install)
              ? (i.add(c), c.install(u, ...f))
              : ye(c) && (i.add(c), c(u, ...f))),
          u
        );
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), u;
      },
      component(c, f) {
        return f ? ((s.components[c] = f), u) : s.components[c];
      },
      directive(c, f) {
        return f ? ((s.directives[c] = f), u) : s.directives[c];
      },
      mount(c, f, d) {
        if (!l) {
          const p = u._ceVNode || z(r, o);
          return (
            (p.appContext = s),
            d === !0 ? (d = 'svg') : d === !1 && (d = void 0),
            f && t ? t(p, c) : e(p, c, d),
            (l = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            ac(p.component)
          );
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l &&
          (rn(a, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(c, f) {
        return (s.provides[c] = f), u;
      },
      runWithContext(c) {
        const f = yr;
        yr = u;
        try {
          return c();
        } finally {
          yr = f;
        }
      },
    });
    return u;
  };
}
let yr = null;
function bt(e, t) {
  if (ht) {
    let n = ht.provides;
    const r = ht.parent && ht.parent.provides;
    r === n && (n = ht.provides = Object.create(r)), (n[e] = t);
  }
}
function $e(e, t, n = !1) {
  const r = Xe();
  if (r || yr) {
    let o = yr
      ? yr._context.provides
      : r
      ? r.parent == null || r.ce
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : void 0;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && ye(t) ? t.call(r && r.proxy) : t;
  }
}
function Ni() {
  return !!(Xe() || yr);
}
const Np = {},
  $p = () => Object.create(Np),
  Bp = (e) => Object.getPrototypeOf(e) === Np;
function Oy(e, t, n, r = !1) {
  const o = {},
    s = $p();
  (e.propsDefaults = Object.create(null)), Vp(e, t, o, s);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  n ? (e.props = r ? o : Zt(o)) : e.type.props ? (e.props = o) : (e.props = s),
    (e.attrs = s);
}
function Ry(e, t, n, r) {
  const {
      props: o,
      attrs: s,
      vnode: { patchFlag: i },
    } = e,
    a = Re(o),
    [l] = e.propsOptions;
  let u = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if ($i(e.emitsOptions, d)) continue;
        const p = t[d];
        if (l)
          if (Ne(s, d)) p !== s[d] && ((s[d] = p), (u = !0));
          else {
            const h = At(d);
            o[h] = Wa(l, a, h, p, e, !1);
          }
        else p !== s[d] && ((s[d] = p), (u = !0));
      }
    }
  } else {
    Vp(e, t, o, s) && (u = !0);
    let c;
    for (const f in a)
      (!t || (!Ne(t, f) && ((c = Vn(f)) === f || !Ne(t, c)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[c] !== void 0) &&
            (o[f] = Wa(l, a, f, void 0, e, !0))
          : delete o[f]);
    if (s !== a)
      for (const f in s) (!t || !Ne(t, f)) && (delete s[f], (u = !0));
  }
  u && On(e.attrs, 'set', '');
}
function Vp(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let l in t) {
      if (Wr(l)) continue;
      const u = t[l];
      let c;
      o && Ne(o, (c = At(l)))
        ? !s || !s.includes(c)
          ? (n[c] = u)
          : ((a || (a = {}))[c] = u)
        : $i(e.emitsOptions, l) ||
          ((!(l in r) || u !== r[l]) && ((r[l] = u), (i = !0)));
    }
  if (s) {
    const l = Re(n),
      u = a || De;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = Wa(o, l, f, u[f], e, !Ne(u, f));
    }
  }
  return i;
}
function Wa(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const a = Ne(i, 'default');
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ye(l)) {
        const { propsDefaults: u } = o;
        if (n in u) r = u[n];
        else {
          const c = xr(o);
          (r = u[n] = l.call(null, t)), c();
        }
      } else r = l;
      o.ce && o.ce._setProp(n, r);
    }
    i[0] &&
      (s && !a ? (r = !1) : i[1] && (r === '' || r === Vn(n)) && (r = !0));
  }
  return r;
}
const Iy = new WeakMap();
function jp(e, t, n = !1) {
  const r = n ? Iy : t.propsCache,
    o = r.get(e);
  if (o) return o;
  const s = e.props,
    i = {},
    a = [];
  let l = !1;
  if (!ye(e)) {
    const c = (f) => {
      l = !0;
      const [d, p] = jp(f, t, !0);
      st(i, d), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l) return He(e) && r.set(e, Hr), Hr;
  if (he(s))
    for (let c = 0; c < s.length; c++) {
      const f = At(s[c]);
      wu(f) && (i[f] = De);
    }
  else if (s)
    for (const c in s) {
      const f = At(c);
      if (wu(f)) {
        const d = s[c],
          p = (i[f] = he(d) || ye(d) ? { type: d } : st({}, d)),
          h = p.type;
        let g = !1,
          _ = !0;
        if (he(h))
          for (let x = 0; x < h.length; ++x) {
            const b = h[x],
              v = ye(b) && b.name;
            if (v === 'Boolean') {
              g = !0;
              break;
            } else v === 'String' && (_ = !1);
          }
        else g = ye(h) && h.name === 'Boolean';
        (p[0] = g), (p[1] = _), (g || Ne(p, 'default')) && a.push(f);
      }
    }
  const u = [i, a];
  return He(e) && r.set(e, u), u;
}
function wu(e) {
  return e[0] !== '$' && !Wr(e);
}
const nc = (e) => e === '_' || e === '_ctx' || e === '$stable',
  rc = (e) => (he(e) ? e.map(Bt) : [Bt(e)]),
  Ly = (e, t, n) => {
    if (t._n) return t;
    const r = O((...o) => rc(t(...o)), n);
    return (r._c = !1), r;
  },
  Fp = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (nc(o)) continue;
      const s = e[o];
      if (ye(s)) t[o] = Ly(o, s, r);
      else if (s != null) {
        const i = rc(s);
        t[o] = () => i;
      }
    }
  },
  zp = (e, t) => {
    const n = rc(t);
    e.slots.default = () => n;
  },
  Hp = (e, t, n) => {
    for (const r in t) (n || !nc(r)) && (e[r] = t[r]);
  },
  Dy = (e, t, n) => {
    const r = (e.slots = $p());
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (Hp(r, t, n), n && $d(r, '_', o, !0)) : Fp(t, r);
    } else t && zp(e, t);
  },
  qy = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = !0,
      i = De;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (s = !1)
          : Hp(o, t, n)
        : ((s = !t.$stable), Fp(t, o)),
        (i = t);
    } else t && (zp(e, t), (i = { default: 1 }));
    if (s) for (const a in o) !nc(a) && i[a] == null && delete o[a];
  },
  ct = Zp;
function My(e) {
  return Up(e);
}
function Ny(e) {
  return Up(e, cy);
}
function Up(e, t) {
  const n = Ti();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: o,
      patchProp: s,
      createElement: i,
      createText: a,
      createComment: l,
      setText: u,
      setElementText: c,
      parentNode: f,
      nextSibling: d,
      setScopeId: p = mn,
      insertStaticContent: h,
    } = e,
    g = (
      k,
      P,
      q,
      W = null,
      V = null,
      K = null,
      se = void 0,
      ne = null,
      ee = !!P.dynamicChildren
    ) => {
      if (k === P) return;
      k && !Qt(k, P) && ((W = N(k)), Se(k, V, K, !0), (k = null)),
        P.patchFlag === -2 && ((ee = !1), (P.dynamicChildren = null));
      const { type: Y, ref: me, shapeFlag: le } = P;
      switch (Y) {
        case br:
          _(k, P, q, W);
          break;
        case rt:
          x(k, P, q, W);
          break;
        case Is:
          k == null && b(P, q, W, se);
          break;
        case Te:
          M(k, P, q, W, V, K, se, ne, ee);
          break;
        default:
          le & 1
            ? w(k, P, q, W, V, K, se, ne, ee)
            : le & 6
            ? Z(k, P, q, W, V, K, se, ne, ee)
            : (le & 64 || le & 128) &&
              Y.process(k, P, q, W, V, K, se, ne, ee, de);
      }
      me != null && V
        ? Gr(me, k && k.ref, K, P || k, !P)
        : me == null && k && k.ref != null && Gr(k.ref, null, K, k, !0);
    },
    _ = (k, P, q, W) => {
      if (k == null) r((P.el = a(P.children)), q, W);
      else {
        const V = (P.el = k.el);
        P.children !== k.children && u(V, P.children);
      }
    },
    x = (k, P, q, W) => {
      k == null ? r((P.el = l(P.children || '')), q, W) : (P.el = k.el);
    },
    b = (k, P, q, W) => {
      [k.el, k.anchor] = h(k.children, P, q, W, k.el, k.anchor);
    },
    v = ({ el: k, anchor: P }, q, W) => {
      let V;
      for (; k && k !== P; ) (V = d(k)), r(k, q, W), (k = V);
      r(P, q, W);
    },
    m = ({ el: k, anchor: P }) => {
      let q;
      for (; k && k !== P; ) (q = d(k)), o(k), (k = q);
      o(P);
    },
    w = (k, P, q, W, V, K, se, ne, ee) => {
      if (
        (P.type === 'svg' ? (se = 'svg') : P.type === 'math' && (se = 'mathml'),
        k == null)
      )
        C(P, q, W, V, K, se, ne, ee);
      else {
        const Y = k.el && k.el._isVueCE ? k.el : null;
        try {
          Y && Y._beginPatch(), R(k, P, V, K, se, ne, ee);
        } finally {
          Y && Y._endPatch();
        }
      }
    },
    C = (k, P, q, W, V, K, se, ne) => {
      let ee, Y;
      const { props: me, shapeFlag: le, transition: pe, dirs: be } = k;
      if (
        ((ee = k.el = i(k.type, K, me && me.is, me)),
        le & 8
          ? c(ee, k.children)
          : le & 16 && A(k.children, ee, null, W, V, pa(k, K), se, ne),
        be && hn(k, null, W, 'created'),
        E(ee, k, k.scopeId, se, W),
        me)
      ) {
        for (const We in me)
          We !== 'value' && !Wr(We) && s(ee, We, null, me[We], K, W);
        'value' in me && s(ee, 'value', null, me.value, K),
          (Y = me.onVnodeBeforeMount) && Dt(Y, W, k);
      }
      be && hn(k, null, W, 'beforeMount');
      const Oe = Wp(V, pe);
      Oe && pe.beforeEnter(ee),
        r(ee, P, q),
        ((Y = me && me.onVnodeMounted) || Oe || be) &&
          ct(() => {
            Y && Dt(Y, W, k),
              Oe && pe.enter(ee),
              be && hn(k, null, W, 'mounted');
          }, V);
    },
    E = (k, P, q, W, V) => {
      if ((q && p(k, q), W)) for (let K = 0; K < W.length; K++) p(k, W[K]);
      if (V) {
        let K = V.subTree;
        if (
          P === K ||
          (ti(K.type) && (K.ssContent === P || K.ssFallback === P))
        ) {
          const se = V.vnode;
          E(k, se, se.scopeId, se.slotScopeIds, V.parent);
        }
      }
    },
    A = (k, P, q, W, V, K, se, ne, ee = 0) => {
      for (let Y = ee; Y < k.length; Y++) {
        const me = (k[Y] = ne ? Yn(k[Y]) : Bt(k[Y]));
        g(null, me, P, q, W, V, K, se, ne);
      }
    },
    R = (k, P, q, W, V, K, se) => {
      const ne = (P.el = k.el);
      let { patchFlag: ee, dynamicChildren: Y, dirs: me } = P;
      ee |= k.patchFlag & 16;
      const le = k.props || De,
        pe = P.props || De;
      let be;
      if (
        (q && ir(q, !1),
        (be = pe.onVnodeBeforeUpdate) && Dt(be, q, P, k),
        me && hn(P, k, q, 'beforeUpdate'),
        q && ir(q, !0),
        ((le.innerHTML && pe.innerHTML == null) ||
          (le.textContent && pe.textContent == null)) &&
          c(ne, ''),
        Y
          ? D(k.dynamicChildren, Y, ne, q, W, pa(P, V), K)
          : se || I(k, P, ne, null, q, W, pa(P, V), K, !1),
        ee > 0)
      ) {
        if (ee & 16) X(ne, le, pe, q, V);
        else if (
          (ee & 2 && le.class !== pe.class && s(ne, 'class', null, pe.class, V),
          ee & 4 && s(ne, 'style', le.style, pe.style, V),
          ee & 8)
        ) {
          const Oe = P.dynamicProps;
          for (let We = 0; We < Oe.length; We++) {
            const Fe = Oe[We],
              It = le[Fe],
              gt = pe[Fe];
            (gt !== It || Fe === 'value') && s(ne, Fe, It, gt, V, q);
          }
        }
        ee & 1 && k.children !== P.children && c(ne, P.children);
      } else !se && Y == null && X(ne, le, pe, q, V);
      ((be = pe.onVnodeUpdated) || me) &&
        ct(() => {
          be && Dt(be, q, P, k), me && hn(P, k, q, 'updated');
        }, W);
    },
    D = (k, P, q, W, V, K, se) => {
      for (let ne = 0; ne < P.length; ne++) {
        const ee = k[ne],
          Y = P[ne],
          me =
            ee.el && (ee.type === Te || !Qt(ee, Y) || ee.shapeFlag & 198)
              ? f(ee.el)
              : q;
        g(ee, Y, me, null, W, V, K, se, !0);
      }
    },
    X = (k, P, q, W, V) => {
      if (P !== q) {
        if (P !== De)
          for (const K in P) !Wr(K) && !(K in q) && s(k, K, P[K], null, V, W);
        for (const K in q) {
          if (Wr(K)) continue;
          const se = q[K],
            ne = P[K];
          se !== ne && K !== 'value' && s(k, K, ne, se, V, W);
        }
        'value' in q && s(k, 'value', P.value, q.value, V);
      }
    },
    M = (k, P, q, W, V, K, se, ne, ee) => {
      const Y = (P.el = k ? k.el : a('')),
        me = (P.anchor = k ? k.anchor : a(''));
      let { patchFlag: le, dynamicChildren: pe, slotScopeIds: be } = P;
      be && (ne = ne ? ne.concat(be) : be),
        k == null
          ? (r(Y, q, W),
            r(me, q, W),
            A(P.children || [], q, me, V, K, se, ne, ee))
          : le > 0 && le & 64 && pe && k.dynamicChildren
          ? (D(k.dynamicChildren, pe, q, V, K, se, ne),
            (P.key != null || (V && P === V.subTree)) && oc(k, P, !0))
          : I(k, P, q, me, V, K, se, ne, ee);
    },
    Z = (k, P, q, W, V, K, se, ne, ee) => {
      (P.slotScopeIds = ne),
        k == null
          ? P.shapeFlag & 512
            ? V.ctx.activate(P, q, W, se, ee)
            : G(P, q, W, V, K, se, ee)
          : Q(k, P, ee);
    },
    G = (k, P, q, W, V, K, se) => {
      const ne = (k.component = sb(k, W, V));
      if ((ts(k) && (ne.ctx.renderer = de), ib(ne, !1, se), ne.asyncDep)) {
        if ((V && V.registerDep(ne, $, se), !k.el)) {
          const ee = (ne.subTree = z(rt));
          x(null, ee, P, q), (k.placeholder = ee.el);
        }
      } else $(ne, k, P, q, V, K, se);
    },
    Q = (k, P, q) => {
      const W = (P.component = k.component);
      if (Yy(k, P, q))
        if (W.asyncDep && !W.asyncResolved) {
          U(W, P, q);
          return;
        } else (W.next = P), W.update();
      else (P.el = k.el), (W.vnode = P);
    },
    $ = (k, P, q, W, V, K, se) => {
      const ne = () => {
        if (k.isMounted) {
          let { next: le, bu: pe, u: be, parent: Oe, vnode: We } = k;
          {
            const Nt = Kp(k);
            if (Nt) {
              le && ((le.el = We.el), U(k, le, se)),
                Nt.asyncDep.then(() => {
                  k.isUnmounted || ne();
                });
              return;
            }
          }
          let Fe = le,
            It;
          ir(k, !1),
            le ? ((le.el = We.el), U(k, le, se)) : (le = We),
            pe && Oo(pe),
            (It = le.props && le.props.onVnodeBeforeUpdate) &&
              Dt(It, Oe, le, We),
            ir(k, !0);
          const gt = ha(k),
            Xt = k.subTree;
          (k.subTree = gt),
            g(Xt, gt, f(Xt.el), N(Xt), k, V, K),
            (le.el = gt.el),
            Fe === null && Bi(k, gt.el),
            be && ct(be, V),
            (It = le.props && le.props.onVnodeUpdated) &&
              ct(() => Dt(It, Oe, le, We), V);
        } else {
          let le;
          const { el: pe, props: be } = P,
            { bm: Oe, m: We, parent: Fe, root: It, type: gt } = k,
            Xt = Zn(P);
          if (
            (ir(k, !1),
            Oe && Oo(Oe),
            !Xt && (le = be && be.onVnodeBeforeMount) && Dt(le, Fe, P),
            ir(k, !0),
            pe && je)
          ) {
            const Nt = () => {
              (k.subTree = ha(k)), je(pe, k.subTree, k, V, null);
            };
            Xt && gt.__asyncHydrate ? gt.__asyncHydrate(pe, k, Nt) : Nt();
          } else {
            It.ce &&
              It.ce._def.shadowRoot !== !1 &&
              It.ce._injectChildStyle(gt);
            const Nt = (k.subTree = ha(k));
            g(null, Nt, q, W, k, V, K), (P.el = Nt.el);
          }
          if ((We && ct(We, V), !Xt && (le = be && be.onVnodeMounted))) {
            const Nt = P;
            ct(() => Dt(le, Fe, Nt), V);
          }
          (P.shapeFlag & 256 ||
            (Fe && Zn(Fe.vnode) && Fe.vnode.shapeFlag & 256)) &&
            k.a &&
            ct(k.a, V),
            (k.isMounted = !0),
            (P = q = W = null);
        }
      };
      k.scope.on();
      const ee = (k.effect = new Hd(ne));
      k.scope.off();
      const Y = (k.update = ee.run.bind(ee)),
        me = (k.job = ee.runIfDirty.bind(ee));
      (me.i = k),
        (me.id = k.uid),
        (ee.scheduler = () => Ql(me)),
        ir(k, !0),
        Y();
    },
    U = (k, P, q) => {
      P.component = k;
      const W = k.vnode.props;
      (k.vnode = P),
        (k.next = null),
        Ry(k, P.props, W, q),
        qy(k, P.children, q),
        Ln(),
        lu(k),
        Dn();
    },
    I = (k, P, q, W, V, K, se, ne, ee = !1) => {
      const Y = k && k.children,
        me = k ? k.shapeFlag : 0,
        le = P.children,
        { patchFlag: pe, shapeFlag: be } = P;
      if (pe > 0) {
        if (pe & 128) {
          Ee(Y, le, q, W, V, K, se, ne, ee);
          return;
        } else if (pe & 256) {
          ie(Y, le, q, W, V, K, se, ne, ee);
          return;
        }
      }
      be & 8
        ? (me & 16 && Qe(Y, V, K), le !== Y && c(q, le))
        : me & 16
        ? be & 16
          ? Ee(Y, le, q, W, V, K, se, ne, ee)
          : Qe(Y, V, K, !0)
        : (me & 8 && c(q, ''), be & 16 && A(le, q, W, V, K, se, ne, ee));
    },
    ie = (k, P, q, W, V, K, se, ne, ee) => {
      (k = k || Hr), (P = P || Hr);
      const Y = k.length,
        me = P.length,
        le = Math.min(Y, me);
      let pe;
      for (pe = 0; pe < le; pe++) {
        const be = (P[pe] = ee ? Yn(P[pe]) : Bt(P[pe]));
        g(k[pe], be, q, null, V, K, se, ne, ee);
      }
      Y > me ? Qe(k, V, K, !0, !1, le) : A(P, q, W, V, K, se, ne, ee, le);
    },
    Ee = (k, P, q, W, V, K, se, ne, ee) => {
      let Y = 0;
      const me = P.length;
      let le = k.length - 1,
        pe = me - 1;
      for (; Y <= le && Y <= pe; ) {
        const be = k[Y],
          Oe = (P[Y] = ee ? Yn(P[Y]) : Bt(P[Y]));
        if (Qt(be, Oe)) g(be, Oe, q, null, V, K, se, ne, ee);
        else break;
        Y++;
      }
      for (; Y <= le && Y <= pe; ) {
        const be = k[le],
          Oe = (P[pe] = ee ? Yn(P[pe]) : Bt(P[pe]));
        if (Qt(be, Oe)) g(be, Oe, q, null, V, K, se, ne, ee);
        else break;
        le--, pe--;
      }
      if (Y > le) {
        if (Y <= pe) {
          const be = pe + 1,
            Oe = be < me ? P[be].el : W;
          for (; Y <= pe; )
            g(null, (P[Y] = ee ? Yn(P[Y]) : Bt(P[Y])), q, Oe, V, K, se, ne, ee),
              Y++;
        }
      } else if (Y > pe) for (; Y <= le; ) Se(k[Y], V, K, !0), Y++;
      else {
        const be = Y,
          Oe = Y,
          We = new Map();
        for (Y = Oe; Y <= pe; Y++) {
          const $t = (P[Y] = ee ? Yn(P[Y]) : Bt(P[Y]));
          $t.key != null && We.set($t.key, Y);
        }
        let Fe,
          It = 0;
        const gt = pe - Oe + 1;
        let Xt = !1,
          Nt = 0;
        const mo = new Array(gt);
        for (Y = 0; Y < gt; Y++) mo[Y] = 0;
        for (Y = be; Y <= le; Y++) {
          const $t = k[Y];
          if (It >= gt) {
            Se($t, V, K, !0);
            continue;
          }
          let fn;
          if ($t.key != null) fn = We.get($t.key);
          else
            for (Fe = Oe; Fe <= pe; Fe++)
              if (mo[Fe - Oe] === 0 && Qt($t, P[Fe])) {
                fn = Fe;
                break;
              }
          fn === void 0
            ? Se($t, V, K, !0)
            : ((mo[fn - Oe] = Y + 1),
              fn >= Nt ? (Nt = fn) : (Xt = !0),
              g($t, P[fn], q, null, V, K, se, ne, ee),
              It++);
        }
        const nu = Xt ? $y(mo) : Hr;
        for (Fe = nu.length - 1, Y = gt - 1; Y >= 0; Y--) {
          const $t = Oe + Y,
            fn = P[$t],
            ru = P[$t + 1],
            ou = $t + 1 < me ? ru.el || ru.placeholder : W;
          mo[Y] === 0
            ? g(null, fn, q, ou, V, K, se, ne, ee)
            : Xt && (Fe < 0 || Y !== nu[Fe] ? qe(fn, q, ou, 2) : Fe--);
        }
      }
    },
    qe = (k, P, q, W, V = null) => {
      const { el: K, type: se, transition: ne, children: ee, shapeFlag: Y } = k;
      if (Y & 6) {
        qe(k.component.subTree, P, q, W);
        return;
      }
      if (Y & 128) {
        k.suspense.move(P, q, W);
        return;
      }
      if (Y & 64) {
        se.move(k, P, q, de);
        return;
      }
      if (se === Te) {
        r(K, P, q);
        for (let le = 0; le < ee.length; le++) qe(ee[le], P, q, W);
        r(k.anchor, P, q);
        return;
      }
      if (se === Is) {
        v(k, P, q);
        return;
      }
      if (W !== 2 && Y & 1 && ne)
        if (W === 0) ne.beforeEnter(K), r(K, P, q), ct(() => ne.enter(K), V);
        else {
          const { leave: le, delayLeave: pe, afterLeave: be } = ne,
            Oe = () => {
              k.ctx.isUnmounted ? o(K) : r(K, P, q);
            },
            We = () => {
              K._isLeaving && K[Sn](!0),
                le(K, () => {
                  Oe(), be && be();
                });
            };
          pe ? pe(K, Oe, We) : We();
        }
      else r(K, P, q);
    },
    Se = (k, P, q, W = !1, V = !1) => {
      const {
        type: K,
        props: se,
        ref: ne,
        children: ee,
        dynamicChildren: Y,
        shapeFlag: me,
        patchFlag: le,
        dirs: pe,
        cacheIndex: be,
      } = k;
      if (
        (le === -2 && (V = !1),
        ne != null && (Ln(), Gr(ne, null, q, k, !0), Dn()),
        be != null && (P.renderCache[be] = void 0),
        me & 256)
      ) {
        P.ctx.deactivate(k);
        return;
      }
      const Oe = me & 1 && pe,
        We = !Zn(k);
      let Fe;
      if ((We && (Fe = se && se.onVnodeBeforeUnmount) && Dt(Fe, P, k), me & 6))
        Ue(k.component, q, W);
      else {
        if (me & 128) {
          k.suspense.unmount(q, W);
          return;
        }
        Oe && hn(k, null, P, 'beforeUnmount'),
          me & 64
            ? k.type.remove(k, P, q, de, W)
            : Y && !Y.hasOnce && (K !== Te || (le > 0 && le & 64))
            ? Qe(Y, P, q, !1, !0)
            : ((K === Te && le & 384) || (!V && me & 16)) && Qe(ee, P, q),
          W && xe(k);
      }
      ((We && (Fe = se && se.onVnodeUnmounted)) || Oe) &&
        ct(() => {
          Fe && Dt(Fe, P, k), Oe && hn(k, null, P, 'unmounted');
        }, q);
    },
    xe = (k) => {
      const { type: P, el: q, anchor: W, transition: V } = k;
      if (P === Te) {
        Ve(q, W);
        return;
      }
      if (P === Is) {
        m(k);
        return;
      }
      const K = () => {
        o(q), V && !V.persisted && V.afterLeave && V.afterLeave();
      };
      if (k.shapeFlag & 1 && V && !V.persisted) {
        const { leave: se, delayLeave: ne } = V,
          ee = () => se(q, K);
        ne ? ne(k.el, K, ee) : ee();
      } else K();
    },
    Ve = (k, P) => {
      let q;
      for (; k !== P; ) (q = d(k)), o(k), (k = q);
      o(P);
    },
    Ue = (k, P, q) => {
      const { bum: W, scope: V, job: K, subTree: se, um: ne, m: ee, a: Y } = k;
      ei(ee),
        ei(Y),
        W && Oo(W),
        V.stop(),
        K && ((K.flags |= 8), Se(se, k, P, q)),
        ne && ct(ne, P),
        ct(() => {
          k.isUnmounted = !0;
        }, P);
    },
    Qe = (k, P, q, W = !1, V = !1, K = 0) => {
      for (let se = K; se < k.length; se++) Se(k[se], P, q, W, V);
    },
    N = (k) => {
      if (k.shapeFlag & 6) return N(k.component.subTree);
      if (k.shapeFlag & 128) return k.suspense.next();
      const P = d(k.anchor || k.el),
        q = P && P[pp];
      return q ? d(q) : P;
    };
  let ae = !1;
  const oe = (k, P, q) => {
      k == null
        ? P._vnode && Se(P._vnode, null, null, !0)
        : g(P._vnode || null, k, P, null, null, null, q),
        (P._vnode = k),
        ae || ((ae = !0), lu(), Xs(), (ae = !1));
    },
    de = {
      p: g,
      um: Se,
      m: qe,
      r: xe,
      mt: G,
      mc: A,
      pc: I,
      pbc: D,
      n: N,
      o: e,
    };
  let ke, je;
  return (
    t && ([ke, je] = t(de)), { render: oe, hydrate: ke, createApp: Ay(oe, ke) }
  );
}
function pa({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n;
}
function ir({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Wp(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function oc(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (he(r) && he(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = o[s] = Yn(o[s])), (a.el = i.el)),
        !n && a.patchFlag !== -2 && oc(i, a)),
        a.type === br && a.patchFlag !== -1 && (a.el = i.el),
        a.type === rt && !a.el && (a.el = i.el);
    }
}
function $y(e) {
  const t = e.slice(),
    n = [0];
  let r, o, s, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((o = n[n.length - 1]), e[o] < u)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        (a = (s + i) >> 1), e[n[a]] < u ? (s = a + 1) : (i = a);
      u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r));
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; ) (n[s] = i), (i = t[i]);
  return n;
}
function Kp(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Kp(t);
}
function ei(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const By = Symbol.for('v-scx'),
  Vy = () => $e(By);
function it(e, t) {
  return ns(e, null, t);
}
function Gp(e, t) {
  return ns(e, null, { flush: 'post' });
}
function jy(e, t) {
  return ns(e, null, { flush: 'sync' });
}
function we(e, t, n) {
  return ns(e, t, n);
}
function ns(e, t, n = De) {
  const { immediate: r, deep: o, flush: s, once: i } = n,
    a = st({}, n),
    l = (t && r) || (!t && s !== 'post');
  let u;
  if (Zr) {
    if (s === 'sync') {
      const p = Vy();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {};
      return (p.stop = mn), (p.resume = mn), (p.pause = mn), p;
    }
  }
  const c = ht;
  a.call = (p, h, g) => rn(p, c, h, g);
  let f = !1;
  s === 'post'
    ? (a.scheduler = (p) => {
        ct(p, c && c.suspense);
      })
    : s !== 'sync' &&
      ((f = !0),
      (a.scheduler = (p, h) => {
        h ? p() : Ql(p);
      })),
    (a.augmentJob = (p) => {
      t && (p.flags |= 4),
        f && ((p.flags |= 2), c && ((p.id = c.uid), (p.i = c)));
    });
  const d = ey(e, t, a);
  return Zr && (u ? u.push(d) : l && d()), d;
}
function Fy(e, t, n) {
  const r = this.proxy,
    o = Ge(e) ? (e.includes('.') ? Yp(r, e) : () => r[e]) : e.bind(r, r);
  let s;
  ye(t) ? (s = t) : ((s = t.handler), (n = t));
  const i = xr(this),
    a = ns(o, s.bind(r), n);
  return i(), a;
}
function Yp(e, t) {
  const n = t.split('.');
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
function zy(e, t, n = De) {
  const r = Xe(),
    o = At(t),
    s = Vn(t),
    i = Xp(e, o),
    a = Zo((l, u) => {
      let c,
        f = De,
        d;
      return (
        jy(() => {
          const p = e[o];
          Ct(c, p) && ((c = p), u());
        }),
        {
          get() {
            return l(), n.get ? n.get(c) : c;
          },
          set(p) {
            const h = n.set ? n.set(p) : p;
            if (!Ct(h, c) && !(f !== De && Ct(p, f))) return;
            const g = r.vnode.props;
            (g &&
              (t in g || o in g || s in g) &&
              (`onUpdate:${t}` in g ||
                `onUpdate:${o}` in g ||
                `onUpdate:${s}` in g)) ||
              ((c = p), u()),
              r.emit(`update:${t}`, h),
              Ct(p, h) && Ct(p, f) && !Ct(h, d) && u(),
              (f = p),
              (d = h);
          },
        }
      );
    });
  return (
    (a[Symbol.iterator] = () => {
      let l = 0;
      return {
        next() {
          return l < 2 ? { value: l++ ? i || De : a, done: !1 } : { done: !0 };
        },
      };
    }),
    a
  );
}
const Xp = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${At(t)}Modifiers`] || e[`${Vn(t)}Modifiers`];
function Hy(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || De;
  let o = n;
  const s = t.startsWith('update:'),
    i = s && Xp(r, t.slice(7));
  i &&
    (i.trim && (o = n.map((c) => (Ge(c) ? c.trim() : c))),
    i.number && (o = n.map(_v)));
  let a,
    l = r[(a = Ao(t))] || r[(a = Ao(At(t)))];
  !l && s && (l = r[(a = Ao(Vn(t)))]), l && rn(l, e, 6, o);
  const u = r[a + 'Once'];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), rn(u, e, 6, o);
  }
}
const Uy = new WeakMap();
function Jp(e, t, n = !1) {
  const r = n ? Uy : t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const s = e.emits;
  let i = {},
    a = !1;
  if (!ye(e)) {
    const l = (u) => {
      const c = Jp(u, t, !0);
      c && ((a = !0), st(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !s && !a
    ? (He(e) && r.set(e, null), null)
    : (he(s) ? s.forEach((l) => (i[l] = null)) : st(i, s),
      He(e) && r.set(e, i),
      i);
}
function $i(e, t) {
  return !e || !Jo(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Ne(e, t[0].toLowerCase() + t.slice(1)) || Ne(e, Vn(t)) || Ne(e, t));
}
function ha(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: o,
      propsOptions: [s],
      slots: i,
      attrs: a,
      emit: l,
      render: u,
      renderCache: c,
      props: f,
      data: d,
      setupState: p,
      ctx: h,
      inheritAttrs: g,
    } = e,
    _ = Js(e);
  let x, b;
  try {
    if (n.shapeFlag & 4) {
      const m = o || r,
        w = m;
      (x = Bt(u.call(w, m, c, f, p, d, h))), (b = a);
    } else {
      const m = t;
      (x = Bt(
        m.length > 1 ? m(f, { attrs: a, slots: i, emit: l }) : m(f, null)
      )),
        (b = t.props ? a : Ky(a));
    }
  } catch (m) {
    (qo.length = 0), co(m, e, 1), (x = z(rt));
  }
  let v = x;
  if (b && g !== !1) {
    const m = Object.keys(b),
      { shapeFlag: w } = v;
    m.length &&
      w & 7 &&
      (s && m.some(zl) && (b = Gy(b, s)), (v = on(v, b, !1, !0)));
  }
  return (
    n.dirs &&
      ((v = on(v, null, !1, !0)),
      (v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs)),
    n.transition && tr(v, n.transition),
    (x = v),
    Js(_),
    x
  );
}
function Wy(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (wr(o)) {
      if (o.type !== rt || o.children === 'v-if') {
        if (n) return;
        n = o;
      }
    } else return;
  }
  return n;
}
const Ky = (e) => {
    let t;
    for (const n in e)
      (n === 'class' || n === 'style' || Jo(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Gy = (e, t) => {
    const n = {};
    for (const r in e) (!zl(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Yy(e, t, n) {
  const { props: r, children: o, component: s } = e,
    { props: i, children: a, patchFlag: l } = t,
    u = s.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? xu(r, i, u) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (i[d] !== r[d] && !$i(u, d)) return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? xu(r, i, u)
        : !0
      : !!i;
  return !1;
}
function xu(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !$i(n, s)) return !0;
  }
  return !1;
}
function Bi({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const ti = (e) => e.__isSuspense;
let Ka = 0;
const Xy = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, n, r, o, s, i, a, l, u) {
      if (e == null) Jy(t, n, r, o, s, i, a, l, u);
      else {
        if (s && s.deps > 0 && !e.suspense.isInFallback) {
          (t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el);
          return;
        }
        Qy(e, t, n, r, o, i, a, l, u);
      }
    },
    hydrate: Zy,
    normalize: eb,
  },
  sc = Xy;
function zo(e, t) {
  const n = e.props && e.props[t];
  ye(n) && n();
}
function Jy(e, t, n, r, o, s, i, a, l) {
  const {
      p: u,
      o: { createElement: c },
    } = l,
    f = c('div'),
    d = (e.suspense = Qp(e, o, r, t, f, n, s, i, a, l));
  u(null, (d.pendingBranch = e.ssContent), f, null, r, d, s, i),
    d.deps > 0
      ? (zo(e, 'onPending'),
        zo(e, 'onFallback'),
        u(null, e.ssFallback, t, n, r, null, s, i),
        Yr(d, e.ssFallback))
      : d.resolve(!1, !0);
}
function Qy(e, t, n, r, o, s, i, a, { p: l, um: u, o: { createElement: c } }) {
  const f = (t.suspense = e.suspense);
  (f.vnode = t), (t.el = e.el);
  const d = t.ssContent,
    p = t.ssFallback,
    { activeBranch: h, pendingBranch: g, isInFallback: _, isHydrating: x } = f;
  if (g)
    (f.pendingBranch = d),
      Qt(g, d)
        ? (l(g, d, f.hiddenContainer, null, o, f, s, i, a),
          f.deps <= 0
            ? f.resolve()
            : _ && (x || (l(h, p, n, r, o, null, s, i, a), Yr(f, p))))
        : ((f.pendingId = Ka++),
          x ? ((f.isHydrating = !1), (f.activeBranch = g)) : u(g, o, f),
          (f.deps = 0),
          (f.effects.length = 0),
          (f.hiddenContainer = c('div')),
          _
            ? (l(null, d, f.hiddenContainer, null, o, f, s, i, a),
              f.deps <= 0
                ? f.resolve()
                : (l(h, p, n, r, o, null, s, i, a), Yr(f, p)))
            : h && Qt(h, d)
            ? (l(h, d, n, r, o, f, s, i, a), f.resolve(!0))
            : (l(null, d, f.hiddenContainer, null, o, f, s, i, a),
              f.deps <= 0 && f.resolve()));
  else if (h && Qt(h, d)) l(h, d, n, r, o, f, s, i, a), Yr(f, d);
  else if (
    (zo(t, 'onPending'),
    (f.pendingBranch = d),
    d.shapeFlag & 512
      ? (f.pendingId = d.component.suspenseId)
      : (f.pendingId = Ka++),
    l(null, d, f.hiddenContainer, null, o, f, s, i, a),
    f.deps <= 0)
  )
    f.resolve();
  else {
    const { timeout: b, pendingId: v } = f;
    b > 0
      ? setTimeout(() => {
          f.pendingId === v && f.fallback(p);
        }, b)
      : b === 0 && f.fallback(p);
  }
}
function Qp(e, t, n, r, o, s, i, a, l, u, c = !1) {
  const {
    p: f,
    m: d,
    um: p,
    n: h,
    o: { parentNode: g, remove: _ },
  } = u;
  let x;
  const b = tb(e);
  b && t && t.pendingBranch && ((x = t.pendingId), t.deps++);
  const v = e.props ? Bd(e.props.timeout) : void 0,
    m = s,
    w = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: i,
      container: r,
      hiddenContainer: o,
      deps: 0,
      pendingId: Ka++,
      timeout: typeof v == 'number' ? v : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !c,
      isHydrating: c,
      isUnmounted: !1,
      effects: [],
      resolve(C = !1, E = !1) {
        const {
          vnode: A,
          activeBranch: R,
          pendingBranch: D,
          pendingId: X,
          effects: M,
          parentComponent: Z,
          container: G,
          isInFallback: Q,
        } = w;
        let $ = !1;
        w.isHydrating
          ? (w.isHydrating = !1)
          : C ||
            (($ = R && D.transition && D.transition.mode === 'out-in'),
            $ &&
              (R.transition.afterLeave = () => {
                X === w.pendingId &&
                  (d(D, G, s === m ? h(R) : s, 0),
                  Ys(M),
                  Q && A.ssFallback && (A.ssFallback.el = null));
              }),
            R &&
              (g(R.el) === G && (s = h(R)),
              p(R, Z, w, !0),
              !$ && Q && A.ssFallback && (A.ssFallback.el = null)),
            $ || d(D, G, s, 0)),
          Yr(w, D),
          (w.pendingBranch = null),
          (w.isInFallback = !1);
        let U = w.parent,
          I = !1;
        for (; U; ) {
          if (U.pendingBranch) {
            U.effects.push(...M), (I = !0);
            break;
          }
          U = U.parent;
        }
        !I && !$ && Ys(M),
          (w.effects = []),
          b &&
            t &&
            t.pendingBranch &&
            x === t.pendingId &&
            (t.deps--, t.deps === 0 && !E && t.resolve()),
          zo(A, 'onResolve');
      },
      fallback(C) {
        if (!w.pendingBranch) return;
        const {
          vnode: E,
          activeBranch: A,
          parentComponent: R,
          container: D,
          namespace: X,
        } = w;
        zo(E, 'onFallback');
        const M = h(A),
          Z = () => {
            w.isInFallback && (f(null, C, D, M, R, null, X, a, l), Yr(w, C));
          },
          G = C.transition && C.transition.mode === 'out-in';
        G && (A.transition.afterLeave = Z),
          (w.isInFallback = !0),
          p(A, R, null, !0),
          G || Z();
      },
      move(C, E, A) {
        w.activeBranch && d(w.activeBranch, C, E, A), (w.container = C);
      },
      next() {
        return w.activeBranch && h(w.activeBranch);
      },
      registerDep(C, E, A) {
        const R = !!w.pendingBranch;
        R && w.deps++;
        const D = C.vnode.el;
        C.asyncDep
          .catch((X) => {
            co(X, C, 0);
          })
          .then((X) => {
            if (C.isUnmounted || w.isUnmounted || w.pendingId !== C.suspenseId)
              return;
            C.asyncResolved = !0;
            const { vnode: M } = C;
            Xa(C, X), D && (M.el = D);
            const Z = !D && C.subTree.el;
            E(C, M, g(D || C.subTree.el), D ? null : h(C.subTree), w, i, A),
              Z && ((M.placeholder = null), _(Z)),
              Bi(C, M.el),
              R && --w.deps === 0 && w.resolve();
          });
      },
      unmount(C, E) {
        (w.isUnmounted = !0),
          w.activeBranch && p(w.activeBranch, n, C, E),
          w.pendingBranch && p(w.pendingBranch, n, C, E);
      },
    };
  return w;
}
function Zy(e, t, n, r, o, s, i, a, l) {
  const u = (t.suspense = Qp(
      t,
      r,
      n,
      e.parentNode,
      document.createElement('div'),
      null,
      o,
      s,
      i,
      a,
      !0
    )),
    c = l(e, (u.pendingBranch = t.ssContent), n, u, s, i);
  return u.deps === 0 && u.resolve(!1, !0), c;
}
function eb(e) {
  const { shapeFlag: t, children: n } = e,
    r = t & 32;
  (e.ssContent = ku(r ? n.default : n)),
    (e.ssFallback = r ? ku(n.fallback) : z(rt));
}
function ku(e) {
  let t;
  if (ye(e)) {
    const n = _r && e._c;
    n && ((e._d = !1), T()), (e = e()), n && ((e._d = !0), (t = yt), eh());
  }
  return (
    he(e) && (e = Wy(e)),
    (e = Bt(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function Zp(e, t) {
  t && t.pendingBranch
    ? he(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ys(e);
}
function Yr(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e;
  let o = t.el;
  for (; !o && t.component; ) (t = t.component.subTree), (o = t.el);
  (n.el = o), r && r.subTree === n && ((r.vnode.el = o), Bi(r, o));
}
function tb(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const Te = Symbol.for('v-fgt'),
  br = Symbol.for('v-txt'),
  rt = Symbol.for('v-cmt'),
  Is = Symbol.for('v-stc'),
  qo = [];
let yt = null;
function T(e = !1) {
  qo.push((yt = e ? null : []));
}
function eh() {
  qo.pop(), (yt = qo[qo.length - 1] || null);
}
let _r = 1;
function ni(e, t = !1) {
  (_r += e), e < 0 && yt && t && (yt.hasOnce = !0);
}
function th(e) {
  return (
    (e.dynamicChildren = _r > 0 ? yt || Hr : null),
    eh(),
    _r > 0 && yt && yt.push(e),
    e
  );
}
function ge(e, t, n, r, o, s) {
  return th(kt(e, t, n, r, o, s, !0));
}
function L(e, t, n, r, o) {
  return th(z(e, t, n, r, o, !0));
}
function wr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const nh = ({ key: e }) => e ?? null,
  Ls = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? Ge(e) || ze(e) || ye(e)
        ? { i: Pt, r: e, k: t, f: !!n }
        : e
      : null
  );
function kt(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  s = e === Te ? 0 : 1,
  i = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && nh(t),
    ref: t && Ls(t),
    scopeId: dp,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Pt,
  };
  return (
    a
      ? (ic(l, n), s & 128 && e.normalize(l))
      : n && (l.shapeFlag |= Ge(n) ? 8 : 16),
    _r > 0 &&
      !i &&
      yt &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      yt.push(l),
    l
  );
}
const z = nb;
function nb(e, t = null, n = null, r = 0, o = null, s = !1) {
  if (((!e || e === Sp) && (e = rt), wr(e))) {
    const a = on(e, t, !0);
    return (
      n && ic(a, n),
      _r > 0 &&
        !s &&
        yt &&
        (a.shapeFlag & 6 ? (yt[yt.indexOf(e)] = a) : yt.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((cb(e) && (e = e.__vccOpts), t)) {
    t = ut(t);
    let { class: a, style: l } = t;
    a && !Ge(a) && (t.class = re(a)),
      He(l) && (Xl(l) && !he(l) && (l = st({}, l)), (t.style = nn(l)));
  }
  const i = Ge(e) ? 1 : ti(e) ? 128 : hp(e) ? 64 : He(e) ? 4 : ye(e) ? 2 : 0;
  return kt(e, t, n, r, o, i, s, !0);
}
function ut(e) {
  return e ? (Xl(e) || Bp(e) ? st({}, e) : e) : null;
}
function on(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: a, transition: l } = e,
    u = t ? te(o || {}, t) : o,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && nh(u),
      ref:
        t && t.ref
          ? n && s
            ? he(s)
              ? s.concat(Ls(t))
              : [s, Ls(t)]
            : Ls(t)
          : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Te ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && on(e.ssContent),
      ssFallback: e.ssFallback && on(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && r && tr(c, l.clone(c)), c;
}
function ft(e = ' ', t = 0) {
  return z(br, null, e, t);
}
function fe(e = '', t = !1) {
  return t ? (T(), L(rt, null, e)) : z(rt, null, e);
}
function Bt(e) {
  return e == null || typeof e == 'boolean'
    ? z(rt)
    : he(e)
    ? z(Te, null, e.slice())
    : wr(e)
    ? Yn(e)
    : z(br, null, String(e));
}
function Yn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : on(e);
}
function ic(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (he(t)) n = 16;
  else if (typeof t == 'object')
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ic(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Bp(t)
        ? (t._ctx = Pt)
        : o === 3 &&
          Pt &&
          (Pt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ye(t)
      ? ((t = { default: t, _ctx: Pt }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [ft(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function te(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === 'class')
        t.class !== r.class && (t.class = re([t.class, r.class]));
      else if (o === 'style') t.style = nn([t.style, r.style]);
      else if (Jo(o)) {
        const s = t[o],
          i = r[o];
        i &&
          s !== i &&
          !(he(s) && s.includes(i)) &&
          (t[o] = s ? [].concat(s, i) : i);
      } else o !== '' && (t[o] = r[o]);
  }
  return t;
}
function Dt(e, t, n, r = null) {
  rn(e, t, 7, [n, r]);
}
const rb = Mp();
let ob = 0;
function sb(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || rb,
    s = {
      uid: ob++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new zd(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: jp(r, o),
      emitsOptions: Jp(r, o),
      emit: null,
      emitted: null,
      propsDefaults: De,
      inheritAttrs: r.inheritAttrs,
      ctx: De,
      data: De,
      props: De,
      attrs: De,
      slots: De,
      refs: De,
      setupState: De,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (s.ctx = { _: s }),
    (s.root = t ? t.root : s),
    (s.emit = Hy.bind(null, s)),
    e.ce && e.ce(s),
    s
  );
}
let ht = null;
const Xe = () => ht || Pt;
let ri, Ga;
{
  const e = Ti(),
    t = (n, r) => {
      let o;
      return (
        (o = e[n]) || (o = e[n] = []),
        o.push(r),
        (s) => {
          o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
        }
      );
    };
  (ri = t('__VUE_INSTANCE_SETTERS__', (n) => (ht = n))),
    (Ga = t('__VUE_SSR_SETTERS__', (n) => (Zr = n)));
}
const xr = (e) => {
    const t = ht;
    return (
      ri(e),
      e.scope.on(),
      () => {
        e.scope.off(), ri(t);
      }
    );
  },
  Ya = () => {
    ht && ht.scope.off(), ri(null);
  };
function rh(e) {
  return e.vnode.shapeFlag & 4;
}
let Zr = !1;
function ib(e, t = !1, n = !1) {
  t && Ga(t);
  const { props: r, children: o } = e.vnode,
    s = rh(e);
  Oy(e, r, s, t), Dy(e, o, n || t);
  const i = s ? ab(e, t) : void 0;
  return t && Ga(!1), i;
}
function ab(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, by));
  const { setup: r } = n;
  if (r) {
    Ln();
    const o = (e.setupContext = r.length > 1 ? sh(e) : null),
      s = xr(e),
      i = es(r, e, 0, [e.props, o]),
      a = Ul(i);
    if ((Dn(), s(), (a || e.sp) && !Zn(e) && ec(e), a)) {
      if ((i.then(Ya, Ya), t))
        return i
          .then((l) => {
            Xa(e, l);
          })
          .catch((l) => {
            co(l, e, 0);
          });
      e.asyncDep = i;
    } else Xa(e, i);
  } else oh(e);
}
function Xa(e, t, n) {
  ye(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : He(t) && (e.setupState = ap(t)),
    oh(e);
}
function oh(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || mn);
  {
    const o = xr(e);
    Ln();
    try {
      ky(e);
    } finally {
      Dn(), o();
    }
  }
}
const lb = {
  get(e, t) {
    return vt(e, 'get', ''), e[t];
  },
};
function sh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, lb),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ac(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(ap(Jl(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Do) return Do[n](e);
          },
          has(t, n) {
            return n in t || n in Do;
          },
        }))
    : e.proxy;
}
function Ja(e, t = !0) {
  return ye(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function cb(e) {
  return ye(e) && '__vccOpts' in e;
}
const S = (e, t) => Qv(e, t, Zr);
function Be(e, t, n) {
  try {
    ni(-1);
    const r = arguments.length;
    return r === 2
      ? He(t) && !he(t)
        ? wr(t)
          ? z(e, null, [t])
          : z(e, t)
        : z(e, null, t)
      : (r > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : r === 3 && wr(n) && (n = [n]),
        z(e, t, n));
  } finally {
    ni(1);
  }
}
function ZL(e, t, n, r) {
  const o = n[r];
  if (o && ub(o, e)) return o;
  const s = t();
  return (s.memo = e.slice()), (s.cacheIndex = r), (n[r] = s);
}
function ub(e, t) {
  const n = e.memo;
  if (n.length != t.length) return !1;
  for (let r = 0; r < n.length; r++) if (Ct(n[r], t[r])) return !1;
  return _r > 0 && yt && yt.push(e), !0;
}
const fb = '3.5.24';
let Qa;
const Cu = typeof window < 'u' && window.trustedTypes;
if (Cu)
  try {
    Qa = Cu.createPolicy('vue', { createHTML: (e) => e });
  } catch {}
const ih = Qa ? (e) => Qa.createHTML(e) : (e) => e,
  db = 'http://www.w3.org/2000/svg',
  pb = 'http://www.w3.org/1998/Math/MathML',
  Tn = typeof document < 'u' ? document : null,
  Eu = Tn && Tn.createElement('template'),
  hb = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o =
        t === 'svg'
          ? Tn.createElementNS(db, e)
          : t === 'mathml'
          ? Tn.createElementNS(pb, e)
          : n
          ? Tn.createElement(e, { is: n })
          : Tn.createElement(e);
      return (
        e === 'select' &&
          r &&
          r.multiple != null &&
          o.setAttribute('multiple', r.multiple),
        o
      );
    },
    createText: (e) => Tn.createTextNode(e),
    createComment: (e) => Tn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Tn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === s || !(o = o.nextSibling));

        );
      else {
        Eu.innerHTML = ih(
          r === 'svg'
            ? `<svg>${e}</svg>`
            : r === 'mathml'
            ? `<math>${e}</math>`
            : e
        );
        const a = Eu.content;
        if (r === 'svg' || r === 'mathml') {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  zn = 'transition',
  yo = 'animation',
  eo = Symbol('_vtc'),
  ah = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  lh = st({}, yp, ah),
  gb = (e) => ((e.displayName = 'Transition'), (e.props = lh), e),
  mb = gb((e, { slots: t }) => Be(sy, ch(e), t)),
  ar = (e, t = []) => {
    he(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Pu = (e) => (e ? (he(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function ch(e) {
  const t = {};
  for (const M in e) M in ah || (t[M] = e[M]);
  if (e.css === !1) return t;
  const {
      name: n = 'v',
      type: r,
      duration: o,
      enterFromClass: s = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = s,
      appearActiveClass: u = i,
      appearToClass: c = a,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: p = `${n}-leave-to`,
    } = e,
    h = vb(o),
    g = h && h[0],
    _ = h && h[1],
    {
      onBeforeEnter: x,
      onEnter: b,
      onEnterCancelled: v,
      onLeave: m,
      onLeaveCancelled: w,
      onBeforeAppear: C = x,
      onAppear: E = b,
      onAppearCancelled: A = v,
    } = t,
    R = (M, Z, G, Q) => {
      (M._enterCancelled = Q), Wn(M, Z ? c : a), Wn(M, Z ? u : i), G && G();
    },
    D = (M, Z) => {
      (M._isLeaving = !1), Wn(M, f), Wn(M, p), Wn(M, d), Z && Z();
    },
    X = (M) => (Z, G) => {
      const Q = M ? E : b,
        $ = () => R(Z, M, G);
      ar(Q, [Z, $]),
        Tu(() => {
          Wn(Z, M ? l : s), dn(Z, M ? c : a), Pu(Q) || Su(Z, r, g, $);
        });
    };
  return st(t, {
    onBeforeEnter(M) {
      ar(x, [M]), dn(M, s), dn(M, i);
    },
    onBeforeAppear(M) {
      ar(C, [M]), dn(M, l), dn(M, u);
    },
    onEnter: X(!1),
    onAppear: X(!0),
    onLeave(M, Z) {
      M._isLeaving = !0;
      const G = () => D(M, Z);
      dn(M, f),
        M._enterCancelled ? (dn(M, d), Za(M)) : (Za(M), dn(M, d)),
        Tu(() => {
          M._isLeaving && (Wn(M, f), dn(M, p), Pu(m) || Su(M, r, _, G));
        }),
        ar(m, [M, G]);
    },
    onEnterCancelled(M) {
      R(M, !1, void 0, !0), ar(v, [M]);
    },
    onAppearCancelled(M) {
      R(M, !0, void 0, !0), ar(A, [M]);
    },
    onLeaveCancelled(M) {
      D(M), ar(w, [M]);
    },
  });
}
function vb(e) {
  if (e == null) return null;
  if (He(e)) return [ga(e.enter), ga(e.leave)];
  {
    const t = ga(e);
    return [t, t];
  }
}
function ga(e) {
  return Bd(e);
}
function dn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[eo] || (e[eo] = new Set())).add(t);
}
function Wn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[eo];
  n && (n.delete(t), n.size || (e[eo] = void 0));
}
function Tu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let yb = 0;
function Su(e, t, n, r) {
  const o = (e._endId = ++yb),
    s = () => {
      o === e._endId && r();
    };
  if (n != null) return setTimeout(s, n);
  const { type: i, timeout: a, propCount: l } = uh(e, t);
  if (!i) return r();
  const u = i + 'end';
  let c = 0;
  const f = () => {
      e.removeEventListener(u, d), s();
    },
    d = (p) => {
      p.target === e && ++c >= l && f();
    };
  setTimeout(() => {
    c < l && f();
  }, a + 1),
    e.addEventListener(u, d);
}
function uh(e, t) {
  const n = window.getComputedStyle(e),
    r = (h) => (n[h] || '').split(', '),
    o = r(`${zn}Delay`),
    s = r(`${zn}Duration`),
    i = Au(o, s),
    a = r(`${yo}Delay`),
    l = r(`${yo}Duration`),
    u = Au(a, l);
  let c = null,
    f = 0,
    d = 0;
  t === zn
    ? i > 0 && ((c = zn), (f = i), (d = s.length))
    : t === yo
    ? u > 0 && ((c = yo), (f = u), (d = l.length))
    : ((f = Math.max(i, u)),
      (c = f > 0 ? (i > u ? zn : yo) : null),
      (d = c ? (c === zn ? s.length : l.length) : 0));
  const p =
    c === zn &&
    /\b(?:transform|all)(?:,|$)/.test(r(`${zn}Property`).toString());
  return { type: c, timeout: f, propCount: d, hasTransform: p };
}
function Au(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Ou(n) + Ou(e[r])));
}
function Ou(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function Za(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function bb(e, t, n) {
  const r = e[eo];
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t);
}
const Ru = Symbol('_vod'),
  _b = Symbol('_vsh'),
  wb = Symbol(''),
  xb = /(?:^|;)\s*display\s*:/;
function kb(e, t, n) {
  const r = e.style,
    o = Ge(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (Ge(t))
        for (const i of t.split(';')) {
          const a = i.slice(0, i.indexOf(':')).trim();
          n[a] == null && Ds(r, a, '');
        }
      else for (const i in t) n[i] == null && Ds(r, i, '');
    for (const i in n) i === 'display' && (s = !0), Ds(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[wb];
      i && (n += ';' + i), (r.cssText = n), (s = xb.test(n));
    }
  } else t && e.removeAttribute('style');
  Ru in e && ((e[Ru] = s ? r.display : ''), e[_b] && (r.display = 'none'));
}
const Iu = /\s*!important$/;
function Ds(e, t, n) {
  if (he(n)) n.forEach((r) => Ds(e, t, r));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = Cb(e, t);
    Iu.test(n)
      ? e.setProperty(Vn(r), n.replace(Iu, ''), 'important')
      : (e[r] = n);
  }
}
const Lu = ['Webkit', 'Moz', 'ms'],
  ma = {};
function Cb(e, t) {
  const n = ma[t];
  if (n) return n;
  let r = At(t);
  if (r !== 'filter' && r in e) return (ma[t] = r);
  r = Pi(r);
  for (let o = 0; o < Lu.length; o++) {
    const s = Lu[o] + r;
    if (s in e) return (ma[t] = s);
  }
  return t;
}
const Du = 'http://www.w3.org/1999/xlink';
function qu(e, t, n, r, o, s = Pv(t)) {
  r && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Du, t.slice(6, t.length))
      : e.setAttributeNS(Du, t, n)
    : n == null || (s && !Vd(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, s ? '' : Bn(n) ? String(n) : n);
}
function Mu(e, t, n, r, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? ih(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === 'value' && s !== 'PROGRESS' && !s.includes('-')) {
    const a = s === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      l = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n);
    (a !== l || !('_value' in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let i = !1;
  if (n === '' || n == null) {
    const a = typeof e[t];
    a === 'boolean'
      ? (n = Vd(n))
      : n == null && a === 'string'
      ? ((n = ''), (i = !0))
      : a === 'number' && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(o || t);
}
function Eb(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Pb(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Nu = Symbol('_vei');
function Tb(e, t, n, r, o = null) {
  const s = e[Nu] || (e[Nu] = {}),
    i = s[t];
  if (r && i) i.value = r;
  else {
    const [a, l] = Sb(t);
    if (r) {
      const u = (s[t] = Rb(r, o));
      Eb(e, a, u, l);
    } else i && (Pb(e, a, i, l), (s[t] = void 0));
  }
}
const $u = /(?:Once|Passive|Capture)$/;
function Sb(e) {
  let t;
  if ($u.test(e)) {
    t = {};
    let r;
    for (; (r = e.match($u)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : Vn(e.slice(2)), t];
}
let va = 0;
const Ab = Promise.resolve(),
  Ob = () => va || (Ab.then(() => (va = 0)), (va = Date.now()));
function Rb(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    rn(Ib(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = Ob()), n;
}
function Ib(e, t) {
  if (he(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const Bu = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Lb = (e, t, n, r, o, s) => {
    const i = o === 'svg';
    t === 'class'
      ? bb(e, r, i)
      : t === 'style'
      ? kb(e, n, r)
      : Jo(t)
      ? zl(t) || Tb(e, t, n, r, s)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : Db(e, t, r, i)
        )
      ? (Mu(e, t, r),
        !e.tagName.includes('-') &&
          (t === 'value' || t === 'checked' || t === 'selected') &&
          qu(e, t, r, i, s, t !== 'value'))
      : e._isVueCE && (/[A-Z]/.test(t) || !Ge(r))
      ? Mu(e, At(t), r, s, t)
      : (t === 'true-value'
          ? (e._trueValue = r)
          : t === 'false-value' && (e._falseValue = r),
        qu(e, t, r, i));
  };
function Db(e, t, n, r) {
  if (r)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && Bu(t) && ye(n))
    );
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'autocorrect' ||
    (t === 'sandbox' && e.tagName === 'IFRAME') ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1;
  if (t === 'width' || t === 'height') {
    const o = e.tagName;
    if (o === 'IMG' || o === 'VIDEO' || o === 'CANVAS' || o === 'SOURCE')
      return !1;
  }
  return Bu(t) && Ge(n) ? !1 : t in e;
}
const fh = new WeakMap(),
  dh = new WeakMap(),
  oi = Symbol('_moveCb'),
  Vu = Symbol('_enterCb'),
  qb = (e) => (delete e.props.mode, e),
  Mb = qb({
    name: 'TransitionGroup',
    props: st({}, lh, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Xe(),
        r = vp();
      let o, s;
      return (
        Mi(() => {
          if (!o.length) return;
          const i = e.moveClass || `${e.name || 'v'}-move`;
          if (!Vb(o[0].el, n.vnode.el, i)) {
            o = [];
            return;
          }
          o.forEach(Nb), o.forEach($b);
          const a = o.filter(Bb);
          Za(n.vnode.el),
            a.forEach((l) => {
              const u = l.el,
                c = u.style;
              dn(u, i),
                (c.transform = c.webkitTransform = c.transitionDuration = '');
              const f = (u[oi] = (d) => {
                (d && d.target !== u) ||
                  ((!d || d.propertyName.endsWith('transform')) &&
                    (u.removeEventListener('transitionend', f),
                    (u[oi] = null),
                    Wn(u, i)));
              });
              u.addEventListener('transitionend', f);
            }),
            (o = []);
        }),
        () => {
          const i = Re(e),
            a = ch(i);
          let l = i.tag || Te;
          if (((o = []), s))
            for (let u = 0; u < s.length; u++) {
              const c = s[u];
              c.el &&
                c.el instanceof Element &&
                (o.push(c),
                tr(c, jo(c, a, r, n)),
                fh.set(c, { left: c.el.offsetLeft, top: c.el.offsetTop }));
            }
          s = t.default ? Zl(t.default()) : [];
          for (let u = 0; u < s.length; u++) {
            const c = s[u];
            c.key != null && tr(c, jo(c, a, r, n));
          }
          return z(l, null, s);
        }
      );
    },
  }),
  eD = Mb;
function Nb(e) {
  const t = e.el;
  t[oi] && t[oi](), t[Vu] && t[Vu]();
}
function $b(e) {
  dh.set(e, { left: e.el.offsetLeft, top: e.el.offsetTop });
}
function Bb(e) {
  const t = fh.get(e),
    n = dh.get(e),
    r = t.left - n.left,
    o = t.top - n.top;
  if (r || o) {
    const s = e.el.style;
    return (
      (s.transform = s.webkitTransform = `translate(${r}px,${o}px)`),
      (s.transitionDuration = '0s'),
      e
    );
  }
}
function Vb(e, t, n) {
  const r = e.cloneNode(),
    o = e[eo];
  o &&
    o.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }),
    n.split(/\s+/).forEach((a) => a && r.classList.add(a)),
    (r.style.display = 'none');
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: i } = uh(r);
  return s.removeChild(r), i;
}
const jb = ['ctrl', 'shift', 'alt', 'meta'],
  Fb = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => jb.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  In = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join('.');
    return (
      n[r] ||
      (n[r] = (o, ...s) => {
        for (let i = 0; i < t.length; i++) {
          const a = Fb[t[i]];
          if (a && a(o, t)) return;
        }
        return e(o, ...s);
      })
    );
  },
  zb = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  ph = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      r = t.join('.');
    return (
      n[r] ||
      (n[r] = (o) => {
        if (!('key' in o)) return;
        const s = Vn(o.key);
        if (t.some((i) => i === s || zb[i] === s)) return e(o);
      })
    );
  },
  hh = st({ patchProp: Lb }, hb);
let Mo,
  ju = !1;
function Hb() {
  return Mo || (Mo = My(hh));
}
function Ub() {
  return (Mo = ju ? Mo : Ny(hh)), (ju = !0), Mo;
}
const Wb = (...e) => {
    const t = Hb().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const o = mh(r);
        if (!o) return;
        const s = t._component;
        !ye(s) && !s.render && !s.template && (s.template = o.innerHTML),
          o.nodeType === 1 && (o.textContent = '');
        const i = n(o, !1, gh(o));
        return (
          o instanceof Element &&
            (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')),
          i
        );
      }),
      t
    );
  },
  Kb = (...e) => {
    const t = Ub().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const o = mh(r);
        if (o) return n(o, !0, gh(o));
      }),
      t
    );
  };
function gh(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml';
}
function mh(e) {
  return Ge(e) ? document.querySelector(e) : e;
}
const Gb =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Yb =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  Xb = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Jb(e, t) {
  if (
    e === '__proto__' ||
    (e === 'constructor' && t && typeof t == 'object' && 'prototype' in t)
  ) {
    Qb(e);
    return;
  }
  return t;
}
function Qb(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function si(e, t = {}) {
  if (typeof e != 'string') return e;
  if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf('\\') === -1)
    return e.slice(1, -1);
  const n = e.trim();
  if (n.length <= 9)
    switch (n.toLowerCase()) {
      case 'true':
        return !0;
      case 'false':
        return !1;
      case 'undefined':
        return;
      case 'null':
        return null;
      case 'nan':
        return Number.NaN;
      case 'infinity':
        return Number.POSITIVE_INFINITY;
      case '-infinity':
        return Number.NEGATIVE_INFINITY;
    }
  if (!Xb.test(e)) {
    if (t.strict) throw new SyntaxError('[destr] Invalid JSON');
    return e;
  }
  try {
    if (Gb.test(e) || Yb.test(e)) {
      if (t.strict) throw new Error('[destr] Possible prototype pollution');
      return JSON.parse(e, Jb);
    }
    return JSON.parse(e);
  } catch (r) {
    if (t.strict) throw r;
    return e;
  }
}
const vh = /#/g,
  yh = /&/g,
  bh = /\//g,
  Zb = /=/g,
  e0 = /\?/g,
  Vi = /\+/g,
  t0 = /%5e/gi,
  n0 = /%60/gi,
  r0 = /%7c/gi,
  o0 = /%20/gi,
  s0 = /%252f/gi;
function _h(e) {
  return encodeURI('' + e).replace(r0, '|');
}
function el(e) {
  return _h(typeof e == 'string' ? e : JSON.stringify(e))
    .replace(Vi, '%2B')
    .replace(o0, '+')
    .replace(vh, '%23')
    .replace(yh, '%26')
    .replace(n0, '`')
    .replace(t0, '^')
    .replace(bh, '%2F');
}
function ya(e) {
  return el(e).replace(Zb, '%3D');
}
function wh(e) {
  return _h(e)
    .replace(vh, '%23')
    .replace(e0, '%3F')
    .replace(s0, '%2F')
    .replace(yh, '%26')
    .replace(Vi, '%2B');
}
function Fu(e) {
  return wh(e).replace(bh, '%2F');
}
function ii(e = '') {
  try {
    return decodeURIComponent('' + e);
  } catch {
    return '' + e;
  }
}
function i0(e) {
  return ii(e.replace(Vi, ' '));
}
function a0(e) {
  return ii(e.replace(Vi, ' '));
}
function lc(e = '') {
  const t = Object.create(null);
  e[0] === '?' && (e = e.slice(1));
  for (const n of e.split('&')) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) continue;
    const o = i0(r[1]);
    if (o === '__proto__' || o === 'constructor') continue;
    const s = a0(r[2] || '');
    t[o] === void 0
      ? (t[o] = s)
      : Array.isArray(t[o])
      ? t[o].push(s)
      : (t[o] = [t[o], s]);
  }
  return t;
}
function l0(e, t) {
  return (
    (typeof t == 'number' || typeof t == 'boolean') && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((n) => `${ya(e)}=${el(n)}`).join('&')
        : `${ya(e)}=${el(t)}`
      : ya(e)
  );
}
function c0(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => l0(t, e[t]))
    .filter(Boolean)
    .join('&');
}
const u0 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  f0 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  d0 = /^([/\\]\s*){2,}[^/\\]/,
  p0 = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
  h0 = /\/$|\/\?|\/#/,
  g0 = /^\.?\//;
function sn(e, t = {}) {
  return (
    typeof t == 'boolean' && (t = { acceptRelative: t }),
    t.strict ? u0.test(e) : f0.test(e) || (t.acceptRelative ? d0.test(e) : !1)
  );
}
function m0(e) {
  return !!e && p0.test(e);
}
function tl(e = '', t) {
  return t ? h0.test(e) : e.endsWith('/');
}
function to(e = '', t) {
  if (!t) return (tl(e) ? e.slice(0, -1) : e) || '/';
  if (!tl(e, !0)) return e || '/';
  let n = e,
    r = '';
  const o = e.indexOf('#');
  o !== -1 && ((n = e.slice(0, o)), (r = e.slice(o)));
  const [s, ...i] = n.split('?');
  return (
    ((s.endsWith('/') ? s.slice(0, -1) : s) || '/') +
    (i.length > 0 ? `?${i.join('?')}` : '') +
    r
  );
}
function xh(e = '', t) {
  if (!t) return e.endsWith('/') ? e : e + '/';
  if (tl(e, !0)) return e || '/';
  let n = e,
    r = '';
  const o = e.indexOf('#');
  if (o !== -1 && ((n = e.slice(0, o)), (r = e.slice(o)), !n)) return r;
  const [s, ...i] = n.split('?');
  return s + '/' + (i.length > 0 ? `?${i.join('?')}` : '') + r;
}
function v0(e = '') {
  return e.startsWith('/');
}
function y0(e = '') {
  return v0(e) ? e : '/' + e;
}
function b0(e, t) {
  if (Ch(t) || sn(e)) return e;
  const n = to(t);
  return e.startsWith(n) ? e : kr(n, e);
}
function zu(e, t) {
  if (Ch(t)) return e;
  const n = to(t);
  if (!e.startsWith(n)) return e;
  const r = e.slice(n.length);
  return r[0] === '/' ? r : '/' + r;
}
function kh(e, t) {
  const n = cc(e),
    r = { ...lc(n.search), ...t };
  return (n.search = c0(r)), x0(n);
}
function Ch(e) {
  return !e || e === '/';
}
function _0(e) {
  return e && e !== '/';
}
function kr(e, ...t) {
  let n = e || '';
  for (const r of t.filter((o) => _0(o)))
    if (n) {
      const o = r.replace(g0, '');
      n = xh(n) + o;
    } else n = r;
  return n;
}
function Eh(...e) {
  const t = /\/(?!\/)/,
    n = e.filter(Boolean),
    r = [];
  let o = 0;
  for (const i of n)
    if (!(!i || i === '/')) {
      for (const [a, l] of i.split(t).entries())
        if (!(!l || l === '.')) {
          if (l === '..') {
            if (r.length === 1 && sn(r[0])) continue;
            r.pop(), o--;
            continue;
          }
          if (a === 1 && r[r.length - 1]?.endsWith(':/')) {
            r[r.length - 1] += '/' + l;
            continue;
          }
          r.push(l), o++;
        }
    }
  let s = r.join('/');
  return (
    o >= 0
      ? n[0]?.startsWith('/') && !s.startsWith('/')
        ? (s = '/' + s)
        : n[0]?.startsWith('./') && !s.startsWith('./') && (s = './' + s)
      : (s = '../'.repeat(-1 * o) + s),
    n[n.length - 1]?.endsWith('/') && !s.endsWith('/') && (s += '/'),
    s
  );
}
function w0(e, t) {
  return ii(to(e)) === ii(to(t));
}
const Ph = Symbol.for('ufo:protocolRelative');
function cc(e = '', t) {
  const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n) {
    const [, f, d = ''] = n;
    return {
      protocol: f.toLowerCase(),
      pathname: d,
      href: f + d,
      auth: '',
      host: '',
      search: '',
      hash: '',
    };
  }
  if (!sn(e, { acceptRelative: !0 })) return Hu(e);
  const [, r = '', o, s = ''] =
    e.replace(/\\/g, '/').match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) ||
    [];
  let [, i = '', a = ''] = s.match(/([^#/?]*)(.*)?/) || [];
  r === 'file:' && (a = a.replace(/\/(?=[A-Za-z]:)/, ''));
  const { pathname: l, search: u, hash: c } = Hu(a);
  return {
    protocol: r.toLowerCase(),
    auth: o ? o.slice(0, Math.max(0, o.length - 1)) : '',
    host: i,
    pathname: l,
    search: u,
    hash: c,
    [Ph]: !r,
  };
}
function Hu(e = '') {
  const [t = '', n = '', r = ''] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1);
  return { pathname: t, search: n, hash: r };
}
function x0(e) {
  const t = e.pathname || '',
    n = e.search ? (e.search.startsWith('?') ? '' : '?') + e.search : '',
    r = e.hash || '',
    o = e.auth ? e.auth + '@' : '',
    s = e.host || '';
  return (
    (e.protocol || e[Ph] ? (e.protocol || '') + '//' : '') + o + s + t + n + r
  );
}
class k0 extends Error {
  constructor(t, n) {
    super(t, n),
      (this.name = 'FetchError'),
      n?.cause && !this.cause && (this.cause = n.cause);
  }
}
function C0(e) {
  const t = e.error?.message || e.error?.toString() || '',
    n = e.request?.method || e.options?.method || 'GET',
    r = e.request?.url || String(e.request) || '/',
    o = `[${n}] ${JSON.stringify(r)}`,
    s = e.response
      ? `${e.response.status} ${e.response.statusText}`
      : '<no response>',
    i = `${o}: ${s}${t ? ` ${t}` : ''}`,
    a = new k0(i, e.error ? { cause: e.error } : void 0);
  for (const l of ['request', 'options', 'response'])
    Object.defineProperty(a, l, {
      get() {
        return e[l];
      },
    });
  for (const [l, u] of [
    ['data', '_data'],
    ['status', 'status'],
    ['statusCode', 'status'],
    ['statusText', 'statusText'],
    ['statusMessage', 'statusText'],
  ])
    Object.defineProperty(a, l, {
      get() {
        return e.response && e.response[u];
      },
    });
  return a;
}
const E0 = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']));
function Uu(e = 'GET') {
  return E0.has(e.toUpperCase());
}
function P0(e) {
  if (e === void 0) return !1;
  const t = typeof e;
  return t === 'string' || t === 'number' || t === 'boolean' || t === null
    ? !0
    : t !== 'object'
    ? !1
    : Array.isArray(e)
    ? !0
    : e.buffer || e instanceof FormData || e instanceof URLSearchParams
    ? !1
    : (e.constructor && e.constructor.name === 'Object') ||
      typeof e.toJSON == 'function';
}
const T0 = new Set([
    'image/svg',
    'application/xml',
    'application/xhtml',
    'application/html',
  ]),
  S0 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function A0(e = '') {
  if (!e) return 'json';
  const t = e.split(';').shift() || '';
  return S0.test(t)
    ? 'json'
    : t === 'text/event-stream'
    ? 'stream'
    : T0.has(t) || t.startsWith('text/')
    ? 'text'
    : 'blob';
}
function O0(e, t, n, r) {
  const o = R0(t?.headers ?? e?.headers, n?.headers, r);
  let s;
  return (
    (n?.query || n?.params || t?.params || t?.query) &&
      (s = { ...n?.params, ...n?.query, ...t?.params, ...t?.query }),
    { ...n, ...t, query: s, params: s, headers: o }
  );
}
function R0(e, t, n) {
  if (!t) return new n(e);
  const r = new n(t);
  if (e)
    for (const [o, s] of Symbol.iterator in e || Array.isArray(e)
      ? e
      : new n(e))
      r.set(o, s);
  return r;
}
async function ms(e, t) {
  if (t)
    if (Array.isArray(t)) for (const n of t) await n(e);
    else await t(e);
}
const I0 = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  L0 = new Set([101, 204, 205, 304]);
function Th(e = {}) {
  const {
    fetch: t = globalThis.fetch,
    Headers: n = globalThis.Headers,
    AbortController: r = globalThis.AbortController,
  } = e;
  async function o(a) {
    const l =
      (a.error && a.error.name === 'AbortError' && !a.options.timeout) || !1;
    if (a.options.retry !== !1 && !l) {
      let c;
      typeof a.options.retry == 'number'
        ? (c = a.options.retry)
        : (c = Uu(a.options.method) ? 0 : 1);
      const f = (a.response && a.response.status) || 500;
      if (
        c > 0 &&
        (Array.isArray(a.options.retryStatusCodes)
          ? a.options.retryStatusCodes.includes(f)
          : I0.has(f))
      ) {
        const d =
          typeof a.options.retryDelay == 'function'
            ? a.options.retryDelay(a)
            : a.options.retryDelay || 0;
        return (
          d > 0 && (await new Promise((p) => setTimeout(p, d))),
          s(a.request, { ...a.options, retry: c - 1 })
        );
      }
    }
    const u = C0(a);
    throw (Error.captureStackTrace && Error.captureStackTrace(u, s), u);
  }
  const s = async function (l, u = {}) {
      const c = {
        request: l,
        options: O0(l, u, e.defaults, n),
        response: void 0,
        error: void 0,
      };
      if (
        (c.options.method &&
          (c.options.method = c.options.method.toUpperCase()),
        c.options.onRequest &&
          (await ms(c, c.options.onRequest),
          c.options.headers instanceof n ||
            (c.options.headers = new n(c.options.headers || {}))),
        typeof c.request == 'string' &&
          (c.options.baseURL && (c.request = b0(c.request, c.options.baseURL)),
          c.options.query &&
            ((c.request = kh(c.request, c.options.query)),
            delete c.options.query),
          'query' in c.options && delete c.options.query,
          'params' in c.options && delete c.options.params),
        c.options.body && Uu(c.options.method))
      )
        if (P0(c.options.body)) {
          const p = c.options.headers.get('content-type');
          typeof c.options.body != 'string' &&
            (c.options.body =
              p === 'application/x-www-form-urlencoded'
                ? new URLSearchParams(c.options.body).toString()
                : JSON.stringify(c.options.body)),
            p || c.options.headers.set('content-type', 'application/json'),
            c.options.headers.has('accept') ||
              c.options.headers.set('accept', 'application/json');
        } else
          (('pipeTo' in c.options.body &&
            typeof c.options.body.pipeTo == 'function') ||
            typeof c.options.body.pipe == 'function') &&
            ('duplex' in c.options || (c.options.duplex = 'half'));
      let f;
      if (!c.options.signal && c.options.timeout) {
        const p = new r();
        (f = setTimeout(() => {
          const h = new Error(
            '[TimeoutError]: The operation was aborted due to timeout'
          );
          (h.name = 'TimeoutError'), (h.code = 23), p.abort(h);
        }, c.options.timeout)),
          (c.options.signal = p.signal);
      }
      try {
        c.response = await t(c.request, c.options);
      } catch (p) {
        return (
          (c.error = p),
          c.options.onRequestError && (await ms(c, c.options.onRequestError)),
          await o(c)
        );
      } finally {
        f && clearTimeout(f);
      }
      if (
        (c.response.body || c.response._bodyInit) &&
        !L0.has(c.response.status) &&
        c.options.method !== 'HEAD'
      ) {
        const p =
          (c.options.parseResponse ? 'json' : c.options.responseType) ||
          A0(c.response.headers.get('content-type') || '');
        switch (p) {
          case 'json': {
            const h = await c.response.text(),
              g = c.options.parseResponse || si;
            c.response._data = g(h);
            break;
          }
          case 'stream': {
            c.response._data = c.response.body || c.response._bodyInit;
            break;
          }
          default:
            c.response._data = await c.response[p]();
        }
      }
      return (
        c.options.onResponse && (await ms(c, c.options.onResponse)),
        !c.options.ignoreResponseError &&
        c.response.status >= 400 &&
        c.response.status < 600
          ? (c.options.onResponseError &&
              (await ms(c, c.options.onResponseError)),
            await o(c))
          : c.response
      );
    },
    i = async function (l, u) {
      return (await s(l, u))._data;
    };
  return (
    (i.raw = s),
    (i.native = (...a) => t(...a)),
    (i.create = (a = {}, l = {}) =>
      Th({ ...e, ...l, defaults: { ...e.defaults, ...l.defaults, ...a } })),
    i
  );
}
const ai = (function () {
    if (typeof globalThis < 'u') return globalThis;
    if (typeof self < 'u') return self;
    if (typeof window < 'u') return window;
    if (typeof global < 'u') return global;
    throw new Error('unable to locate global object');
  })(),
  D0 = ai.fetch
    ? (...e) => ai.fetch(...e)
    : () =>
        Promise.reject(new Error('[ofetch] global.fetch is not supported!')),
  q0 = ai.Headers,
  M0 = ai.AbortController,
  N0 = Th({ fetch: D0, Headers: q0, AbortController: M0 }),
  $0 = N0,
  B0 = () => window?.__NUXT__?.config || window?.useNuxtApp?.().payload?.config,
  uc = () => B0().app,
  V0 = () => uc().baseURL,
  j0 = () => uc().buildAssetsDir,
  fc = (...e) => Eh(Sh(), j0(), ...e),
  Sh = (...e) => {
    const t = uc(),
      n = t.cdnURL || t.baseURL;
    return e.length ? Eh(n, ...e) : n;
  };
(globalThis.__buildAssetsURL = fc), (globalThis.__publicAssetsURL = Sh);
globalThis.$fetch || (globalThis.$fetch = $0.create({ baseURL: V0() }));
'global' in globalThis || (globalThis.global = globalThis);
function nl(e, t = {}, n) {
  for (const r in e) {
    const o = e[r],
      s = n ? `${n}:${r}` : r;
    typeof o == 'object' && o !== null
      ? nl(o, t, s)
      : typeof o == 'function' && (t[s] = o);
  }
  return t;
}
const F0 = { run: (e) => e() },
  z0 = () => F0,
  Ah = typeof console.createTask < 'u' ? console.createTask : z0;
function H0(e, t) {
  const n = t.shift(),
    r = Ah(n);
  return e.reduce(
    (o, s) => o.then(() => r.run(() => s(...t))),
    Promise.resolve()
  );
}
function U0(e, t) {
  const n = t.shift(),
    r = Ah(n);
  return Promise.all(e.map((o) => r.run(() => o(...t))));
}
function ba(e, t) {
  for (const n of [...e]) n(t);
}
class W0 {
  constructor() {
    (this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this));
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != 'function') return () => {};
    const o = t;
    let s;
    for (; this._deprecatedHooks[t]; )
      (s = this._deprecatedHooks[t]), (t = s.to);
    if (s && !r.allowDeprecated) {
      let i = s.message;
      i ||
        (i =
          `${o} hook has been deprecated` +
          (s.to ? `, please use ${s.to}` : '')),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(i) ||
          (console.warn(i), this._deprecatedMessages.add(i));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, 'name', {
          get: () => '_' + t.replace(/\W+/g, '_') + '_hook_cb',
          configurable: !0,
        });
      } catch {}
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0));
      }
    );
  }
  hookOnce(t, n) {
    let r,
      o = (...s) => (
        typeof r == 'function' && r(), (r = void 0), (o = void 0), n(...s)
      );
    return (r = this.hook(t, o)), r;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n);
      r !== -1 && this._hooks[t].splice(r, 1),
        this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == 'string' ? { to: n } : n;
    const r = this._hooks[t] || [];
    delete this._hooks[t];
    for (const o of r) this.hook(t, o);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t) this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = nl(t),
      r = Object.keys(n).map((o) => this.hook(o, n[o]));
    return () => {
      for (const o of r.splice(0, r.length)) o();
    };
  }
  removeHooks(t) {
    const n = nl(t);
    for (const r in n) this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(H0, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(U0, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const o =
      this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && ba(this._before, o);
    const s = t(n in this._hooks ? [...this._hooks[n]] : [], r);
    return s instanceof Promise
      ? s.finally(() => {
          this._after && o && ba(this._after, o);
        })
      : (this._after && o && ba(this._after, o), s);
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(t);
          n !== -1 && this._before.splice(n, 1);
        }
      }
    );
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(t);
          n !== -1 && this._after.splice(n, 1);
        }
      }
    );
  }
}
function Oh() {
  return new W0();
}
function K0(e = {}) {
  let t,
    n = !1;
  const r = (i) => {
    if (t && t !== i) throw new Error('Context conflict');
  };
  let o;
  if (e.asyncContext) {
    const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    i
      ? (o = new i())
      : console.warn('[unctx] `AsyncLocalStorage` is not provided.');
  }
  const s = () => {
    if (o) {
      const i = o.getStore();
      if (i !== void 0) return i;
    }
    return t;
  };
  return {
    use: () => {
      const i = s();
      if (i === void 0) throw new Error('Context is not available');
      return i;
    },
    tryUse: () => s(),
    set: (i, a) => {
      a || r(i), (t = i), (n = !0);
    },
    unset: () => {
      (t = void 0), (n = !1);
    },
    call: (i, a) => {
      r(i), (t = i);
      try {
        return o ? o.run(i, a) : a();
      } finally {
        n || (t = void 0);
      }
    },
    async callAsync(i, a) {
      t = i;
      const l = () => {
          t = i;
        },
        u = () => (t === i ? l : void 0);
      rl.add(u);
      try {
        const c = o ? o.run(i, a) : a();
        return n || (t = void 0), await c;
      } finally {
        rl.delete(u);
      }
    },
  };
}
function G0(e = {}) {
  const t = {};
  return {
    get(n, r = {}) {
      return t[n] || (t[n] = K0({ ...e, ...r })), t[n];
    },
  };
}
const li =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof global < 'u'
      ? global
      : typeof window < 'u'
      ? window
      : {},
  Wu = '__unctx__',
  Y0 = li[Wu] || (li[Wu] = G0()),
  X0 = (e, t = {}) => Y0.get(e, t),
  Ku = '__unctx_async_handlers__',
  rl = li[Ku] || (li[Ku] = new Set());
function Xr(e) {
  const t = [];
  for (const o of rl) {
    const s = o();
    s && t.push(s);
  }
  const n = () => {
    for (const o of t) o();
  };
  let r = e();
  return (
    r &&
      typeof r == 'object' &&
      'catch' in r &&
      (r = r.catch((o) => {
        throw (n(), o);
      })),
    [r, n]
  );
}
const J0 = !1,
  Gu = !1,
  Q0 = !1,
  Yu = { id: '__nuxt-loader' },
  Z0 = {
    componentName: 'NuxtLink',
    prefetch: !0,
    prefetchOn: { visibility: !0 },
  },
  e_ = { deep: !1 },
  t_ = '#__nuxt',
  Rh = 'nuxt-app',
  Xu = 36e5,
  n_ = 'vite:preloadError';
function Ih(e = Rh) {
  return X0(e, { asyncContext: !1 });
}
const r_ = '__nuxt_plugin';
function o_(e) {
  let t = 0;
  const n = {
    _id: e.id || Rh || 'nuxt-app',
    _scope: Si(),
    provide: void 0,
    versions: {
      get nuxt() {
        return '4.2.1';
      },
      get vue() {
        return n.vueApp.version;
      },
    },
    payload: Zt({
      ...(e.ssrContext?.payload || {}),
      data: Zt({}),
      state: dt({}),
      once: new Set(),
      _errors: Zt({}),
    }),
    static: { data: {} },
    runWithContext(o) {
      return n._scope.active && !lo() ? n._scope.run(() => Ju(n, o)) : Ju(n, o);
    },
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {};
      t++;
      let o = !1;
      return () => {
        if (!o && ((o = !0), t--, t === 0))
          return (n.isHydrating = !1), n.callHook('app:suspense:resolve');
      };
    },
    _asyncDataPromises: {},
    _asyncData: Zt({}),
    _payloadRevivers: {},
    ...e,
  };
  {
    const o = window.__NUXT__;
    if (o)
      for (const s in o)
        switch (s) {
          case 'data':
          case 'state':
          case '_errors':
            Object.assign(n.payload[s], o[s]);
            break;
          default:
            n.payload[s] = o[s];
        }
  }
  (n.hooks = Oh()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (o, s) => {
      const i = '$' + o;
      vs(n, i, s), vs(n.vueApp.config.globalProperties, i, s);
    }),
    vs(n.vueApp, '$nuxt', n),
    vs(n.vueApp.config.globalProperties, '$nuxt', n);
  {
    window.addEventListener(n_, (s) => {
      n.callHook('app:chunkError', { error: s.payload }),
        s.payload.message.includes('Unable to preload CSS') &&
          s.preventDefault();
    }),
      (window.useNuxtApp ||= Le);
    const o = n.hook('app:error', (...s) => {
      console.error('[nuxt] error caught during app initialization', ...s);
    });
    n.hook('app:mounted', o);
  }
  const r = n.payload.config;
  return n.provide('config', r), n;
}
function s_(e, t) {
  t.hooks && e.hooks.addHooks(t.hooks);
}
async function i_(e, t) {
  if (typeof t == 'function') {
    const { provide: n } = (await e.runWithContext(() => t(e))) || {};
    if (n && typeof n == 'object') for (const r in n) e.provide(r, n[r]);
  }
}
async function a_(e, t) {
  const n = new Set(),
    r = [],
    o = [];
  let s,
    i = 0;
  async function a(l) {
    const u =
      l.dependsOn?.filter((c) => t.some((f) => f._name === c) && !n.has(c)) ??
      [];
    if (u.length > 0) r.push([new Set(u), l]);
    else {
      const c = i_(e, l)
        .then(async () => {
          l._name &&
            (n.add(l._name),
            await Promise.all(
              r.map(async ([f, d]) => {
                f.has(l._name) &&
                  (f.delete(l._name), f.size === 0 && (i++, await a(d)));
              })
            ));
        })
        .catch((f) => {
          if (!l.parallel && !e.payload.error) throw f;
          s ||= f;
        });
      l.parallel ? o.push(c) : await c;
    }
  }
  for (const l of t) s_(e, l);
  for (const l of t) await a(l);
  if ((await Promise.all(o), i))
    for (let l = 0; l < i; l++) await Promise.all(o);
  if (s) throw e.payload.error || s;
}
function Yt(e) {
  if (typeof e == 'function') return e;
  const t = e._name || e.name;
  return (
    delete e.name,
    Object.assign(e.setup || (() => {}), e, { [r_]: !0, _name: t })
  );
}
function Ju(e, t, n) {
  const r = () => t();
  return Ih(e._id).set(e), e.vueApp.runWithContext(r);
}
function Lh(e) {
  let t;
  return (
    Ni() && (t = Xe()?.appContext.app.$nuxt), (t ||= Ih(e).tryUse()), t || null
  );
}
function Le(e) {
  const t = Lh(e);
  if (!t) throw new Error('[nuxt] instance unavailable');
  return t;
}
function Ar(e) {
  return Le().$config;
}
function vs(e, t, n) {
  Object.defineProperty(e, t, { get: () => n });
}
function l_(e, t) {
  return { ctx: { table: e }, matchAll: (n) => qh(n, e) };
}
function Dh(e) {
  const t = {};
  for (const n in e)
    t[n] =
      n === 'dynamic'
        ? new Map(Object.entries(e[n]).map(([r, o]) => [r, Dh(o)]))
        : new Map(Object.entries(e[n]));
  return t;
}
function c_(e) {
  return l_(Dh(e));
}
function qh(e, t, n) {
  e.endsWith('/') && (e = e.slice(0, -1) || '/');
  const r = [];
  for (const [s, i] of Qu(t.wildcard))
    (e === s || e.startsWith(s + '/')) && r.push(i);
  for (const [s, i] of Qu(t.dynamic))
    if (e.startsWith(s + '/')) {
      const a = '/' + e.slice(s.length).split('/').splice(2).join('/');
      r.push(...qh(a, i));
    }
  const o = t.static.get(e);
  return o && r.push(o), r.filter(Boolean);
}
function Qu(e) {
  return [...e.entries()].sort((t, n) => t[0].length - n[0].length);
}
function _a(e) {
  if (e === null || typeof e != 'object') return !1;
  const t = Object.getPrototypeOf(e);
  return (t !== null &&
    t !== Object.prototype &&
    Object.getPrototypeOf(t) !== null) ||
    Symbol.iterator in e
    ? !1
    : Symbol.toStringTag in e
    ? Object.prototype.toString.call(e) === '[object Module]'
    : !0;
}
function ol(e, t, n = '.', r) {
  if (!_a(t)) return ol(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === '__proto__' || s === 'constructor') continue;
    const i = e[s];
    i != null &&
      ((r && r(o, s, i, n)) ||
        (Array.isArray(i) && Array.isArray(o[s])
          ? (o[s] = [...i, ...o[s]])
          : _a(i) && _a(o[s])
          ? (o[s] = ol(i, o[s], (n ? `${n}.` : '') + s.toString(), r))
          : (o[s] = i)));
  }
  return o;
}
function Mh(e) {
  return (...t) => t.reduce((n, r) => ol(n, r, '', e), {});
}
const Mt = Mh(),
  u_ = Mh((e, t, n) => {
    if (e[t] !== void 0 && typeof n == 'function') return (e[t] = n(e[t])), !0;
  });
function f_(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
class Zu extends Error {
  static __h3_error__ = !0;
  statusCode = 500;
  fatal = !1;
  unhandled = !1;
  statusMessage;
  data;
  cause;
  constructor(t, n = {}) {
    super(t, n), n.cause && !this.cause && (this.cause = n.cause);
  }
  toJSON() {
    const t = { message: this.message, statusCode: sl(this.statusCode, 500) };
    return (
      this.statusMessage && (t.statusMessage = Nh(this.statusMessage)),
      this.data !== void 0 && (t.data = this.data),
      t
    );
  }
}
function d_(e) {
  if (typeof e == 'string') return new Zu(e);
  if (p_(e)) return e;
  const t = new Zu(e.message ?? e.statusMessage ?? '', { cause: e.cause || e });
  if (f_(e, 'stack'))
    try {
      Object.defineProperty(t, 'stack', {
        get() {
          return e.stack;
        },
      });
    } catch {
      try {
        t.stack = e.stack;
      } catch {}
    }
  if (
    (e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = sl(e.statusCode, t.statusCode))
      : e.status && (t.statusCode = sl(e.status, t.statusCode)),
    e.statusMessage
      ? (t.statusMessage = e.statusMessage)
      : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage)
  ) {
    const n = t.statusMessage;
    Nh(t.statusMessage) !== n &&
      console.warn(
        '[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.'
      );
  }
  return (
    e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
  );
}
function p_(e) {
  return e?.constructor?.__h3_error__ === !0;
}
const h_ = /[^\u0009\u0020-\u007E]/g;
function Nh(e = '') {
  return e.replace(h_, '');
}
function sl(e, t = 200) {
  return !e ||
    (typeof e == 'string' && (e = Number.parseInt(e, 10)), e < 100 || e > 999)
    ? t
    : e;
}
const $h = Symbol('layout-meta'),
  Cr = Symbol('route');
import.meta.url.replace(/\/app\/.*$/, '/');
const _t = () => Le()?.$router,
  rs = () => (Ni() ? $e(Cr, Le()._route) : Le()._route);
const g_ = () => {
    try {
      if (Le()._processingMiddleware) return !0;
    } catch {
      return !1;
    }
    return !1;
  },
  m_ = (e, t) => {
    e ||= '/';
    const n =
      typeof e == 'string' ? e : 'path' in e ? il(e) : _t().resolve(e).href;
    if (t?.open) {
      const { target: l = '_blank', windowFeatures: u = {} } = t.open,
        c = [];
      for (const [f, d] of Object.entries(u))
        d !== void 0 && c.push(`${f.toLowerCase()}=${d}`);
      return open(n, l, c.join(', ')), Promise.resolve();
    }
    const r = sn(n, { acceptRelative: !0 }),
      o = t?.external || r;
    if (o) {
      if (!t?.external)
        throw new Error(
          'Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.'
        );
      const { protocol: l } = new URL(n, window.location.href);
      if (l && m0(l))
        throw new Error(`Cannot navigate to a URL with '${l}' protocol.`);
    }
    const s = g_();
    if (!o && s) {
      if (t?.replace) {
        if (typeof e == 'string') {
          const { pathname: l, search: u, hash: c } = cc(e);
          return {
            path: l,
            ...(u && { query: lc(u) }),
            ...(c && { hash: c }),
            replace: !0,
          };
        }
        return { ...e, replace: !0 };
      }
      return e;
    }
    const i = _t(),
      a = Le();
    return o
      ? (a._scope.stop(),
        t?.replace ? location.replace(n) : (location.href = n),
        s ? (a.isHydrating ? new Promise(() => {}) : !1) : Promise.resolve())
      : t?.replace
      ? i.replace(e)
      : i.push(e);
  };
function il(e) {
  return kh(e.path || '', e.query || {}) + (e.hash || '');
}
const Bh = '__nuxt_error',
  ji = () => ot(Le().payload, 'error'),
  dr = (e) => {
    const t = er(e);
    try {
      const n = ji();
      Le().hooks.callHook('app:error', t), (n.value ||= t);
    } catch {
      throw t;
    }
    return t;
  },
  Vh = async (e = {}) => {
    const t = Le(),
      n = ji();
    t.callHook('app:error:cleared', e),
      e.redirect && (await _t().replace(e.redirect)),
      (n.value = void 0);
  },
  jh = (e) => !!e && typeof e == 'object' && Bh in e,
  er = (e) => {
    const t = d_(e);
    return (
      Object.defineProperty(t, Bh, {
        value: !0,
        configurable: !1,
        writable: !1,
      }),
      t
    );
  };
function v_(e) {
  const t = b_(e),
    n = new ArrayBuffer(t.length),
    r = new DataView(n);
  for (let o = 0; o < n.byteLength; o++) r.setUint8(o, t.charCodeAt(o));
  return n;
}
const y_ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function b_(e) {
  e.length % 4 === 0 && (e = e.replace(/==?$/, ''));
  let t = '',
    n = 0,
    r = 0;
  for (let o = 0; o < e.length; o++)
    (n <<= 6),
      (n |= y_.indexOf(e[o])),
      (r += 6),
      r === 24 &&
        ((t += String.fromCharCode((n & 16711680) >> 16)),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255)),
        (n = r = 0));
  return (
    r === 12
      ? ((n >>= 4), (t += String.fromCharCode(n)))
      : r === 18 &&
        ((n >>= 2),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255))),
    t
  );
}
const __ = -1,
  w_ = -2,
  x_ = -3,
  k_ = -4,
  C_ = -5,
  E_ = -6;
function P_(e, t) {
  return T_(JSON.parse(e), t);
}
function T_(e, t) {
  if (typeof e == 'number') return o(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw new Error('Invalid input');
  const n = e,
    r = Array(n.length);
  function o(s, i = !1) {
    if (s === __) return;
    if (s === x_) return NaN;
    if (s === k_) return 1 / 0;
    if (s === C_) return -1 / 0;
    if (s === E_) return -0;
    if (i || typeof s != 'number') throw new Error('Invalid input');
    if (s in r) return r[s];
    const a = n[s];
    if (!a || typeof a != 'object') r[s] = a;
    else if (Array.isArray(a))
      if (typeof a[0] == 'string') {
        const l = a[0],
          u = t?.[l];
        if (u) {
          let c = a[1];
          return (
            typeof c != 'number' && (c = n.push(a[1]) - 1), (r[s] = u(o(c)))
          );
        }
        switch (l) {
          case 'Date':
            r[s] = new Date(a[1]);
            break;
          case 'Set':
            const c = new Set();
            r[s] = c;
            for (let p = 1; p < a.length; p += 1) c.add(o(a[p]));
            break;
          case 'Map':
            const f = new Map();
            r[s] = f;
            for (let p = 1; p < a.length; p += 2) f.set(o(a[p]), o(a[p + 1]));
            break;
          case 'RegExp':
            r[s] = new RegExp(a[1], a[2]);
            break;
          case 'Object':
            r[s] = Object(a[1]);
            break;
          case 'BigInt':
            r[s] = BigInt(a[1]);
            break;
          case 'null':
            const d = Object.create(null);
            r[s] = d;
            for (let p = 1; p < a.length; p += 2) d[a[p]] = o(a[p + 1]);
            break;
          case 'Int8Array':
          case 'Uint8Array':
          case 'Uint8ClampedArray':
          case 'Int16Array':
          case 'Uint16Array':
          case 'Int32Array':
          case 'Uint32Array':
          case 'Float32Array':
          case 'Float64Array':
          case 'BigInt64Array':
          case 'BigUint64Array': {
            const p = globalThis[l],
              h = new p(o(a[1]));
            r[s] = a[2] !== void 0 ? h.subarray(a[2], a[3]) : h;
            break;
          }
          case 'ArrayBuffer': {
            const p = a[1],
              h = v_(p);
            r[s] = h;
            break;
          }
          case 'Temporal.Duration':
          case 'Temporal.Instant':
          case 'Temporal.PlainDate':
          case 'Temporal.PlainTime':
          case 'Temporal.PlainDateTime':
          case 'Temporal.PlainMonthDay':
          case 'Temporal.PlainYearMonth':
          case 'Temporal.ZonedDateTime': {
            const p = l.slice(9);
            r[s] = Temporal[p].from(a[1]);
            break;
          }
          case 'URL': {
            const p = new URL(a[1]);
            r[s] = p;
            break;
          }
          case 'URLSearchParams': {
            const p = new URLSearchParams(a[1]);
            r[s] = p;
            break;
          }
          default:
            throw new Error(`Unknown type ${l}`);
        }
      } else {
        const l = new Array(a.length);
        r[s] = l;
        for (let u = 0; u < a.length; u += 1) {
          const c = a[u];
          c !== w_ && (l[u] = o(c));
        }
      }
    else {
      const l = {};
      r[s] = l;
      for (const u in a) {
        if (u === '__proto__')
          throw new Error('Cannot parse an object with a `__proto__` property');
        const c = a[u];
        l[u] = o(c);
      }
    }
    return r[s];
  }
  return o(0);
}
const S_ = new Set(['link', 'style', 'script', 'noscript']),
  A_ = new Set(['title', 'titleTemplate', 'script', 'style', 'noscript']),
  ef = new Set(['base', 'meta', 'link', 'style', 'script', 'noscript']),
  O_ = new Set([
    'title',
    'base',
    'htmlAttrs',
    'bodyAttrs',
    'meta',
    'link',
    'style',
    'script',
    'noscript',
  ]),
  R_ = new Set([
    'base',
    'title',
    'titleTemplate',
    'bodyAttrs',
    'htmlAttrs',
    'templateParams',
  ]),
  I_ = new Set([
    'key',
    'tagPosition',
    'tagPriority',
    'tagDuplicateStrategy',
    'innerHTML',
    'textContent',
    'processTemplateParams',
  ]),
  L_ = new Set(['templateParams', 'htmlAttrs', 'bodyAttrs']),
  dc = new Set([
    'theme-color',
    'google-site-verification',
    'og',
    'article',
    'book',
    'profile',
    'twitter',
    'author',
  ]),
  Ho = {
    META: new Set(['twitter']),
    OG: new Set(['og', 'book', 'article', 'profile', 'fb']),
    MEDIA: new Set(['ogImage', 'ogVideo', 'ogAudio', 'twitterImage']),
    HTTP_EQUIV: new Set(['contentType', 'defaultStyle', 'xUaCompatible']),
  },
  D_ = {
    articleExpirationTime: 'article:expiration_time',
    articleModifiedTime: 'article:modified_time',
    articlePublishedTime: 'article:published_time',
    bookReleaseDate: 'book:release_date',
    fbAppId: 'fb:app_id',
    ogAudioSecureUrl: 'og:audio:secure_url',
    ogAudioUrl: 'og:audio',
    ogImageSecureUrl: 'og:image:secure_url',
    ogImageUrl: 'og:image',
    ogSiteName: 'og:site_name',
    ogVideoSecureUrl: 'og:video:secure_url',
    ogVideoUrl: 'og:video',
    profileFirstName: 'profile:first_name',
    profileLastName: 'profile:last_name',
    profileUsername: 'profile:username',
    msapplicationConfig: 'msapplication-Config',
    msapplicationTileColor: 'msapplication-TileColor',
    msapplicationTileImage: 'msapplication-TileImage',
  },
  Fh = {
    appleItunesApp: {
      unpack: {
        entrySeparator: ', ',
        resolve: ({ key: e, value: t }) => `${Rn(e)}=${t}`,
      },
    },
    refresh: {
      metaKey: 'http-equiv',
      unpack: {
        entrySeparator: ';',
        resolve: ({ key: e, value: t }) => (e === 'seconds' ? `${t}` : void 0),
      },
    },
    robots: {
      unpack: {
        entrySeparator: ', ',
        resolve: ({ key: e, value: t }) =>
          typeof t == 'boolean' ? Rn(e) : `${Rn(e)}:${t}`,
      },
    },
    contentSecurityPolicy: {
      metaKey: 'http-equiv',
      unpack: {
        entrySeparator: '; ',
        resolve: ({ key: e, value: t }) => `${Rn(e)} ${t}`,
      },
    },
    charset: {},
  };
function Rn(e) {
  const t = e.replace(/([A-Z])/g, '-$1').toLowerCase(),
    n = t.indexOf('-');
  return n === -1
    ? t
    : Ho.META.has(t.slice(0, n)) || Ho.OG.has(t.slice(0, n))
    ? e.replace(/([A-Z])/g, ':$1').toLowerCase()
    : t;
}
function zh(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t, n]) => String(n) !== 'false' && t)
  );
}
function al(e) {
  return Array.isArray(e)
    ? e.map(al)
    : !e || typeof e != 'object'
    ? e
    : Object.fromEntries(Object.entries(e).map(([t, n]) => [Rn(t), al(n)]));
}
function Hh(e, t = {}) {
  const {
    entrySeparator: n = '',
    keyValueSeparator: r = '',
    wrapValue: o,
    resolve: s,
  } = t;
  return Object.entries(e)
    .map(([i, a]) => {
      if (s) {
        const u = s({ key: i, value: a });
        if (u !== void 0) return u;
      }
      const l =
        typeof a == 'object'
          ? Hh(a, t)
          : typeof a == 'number'
          ? a.toString()
          : typeof a == 'string' && o
          ? `${o}${a.replace(new RegExp(o, 'g'), `\\${o}`)}${o}`
          : a;
      return `${i}${r}${l}`;
    })
    .join(n);
}
function tf(e, t) {
  const n = zh(t),
    r = Rn(e),
    o = Uh(r);
  if (!dc.has(r)) return [{ [o]: r, ...n }];
  const s = Object.fromEntries(
    Object.entries(n).map(([i, a]) => [
      `${e}${i === 'url' ? '' : `${i[0].toUpperCase()}${i.slice(1)}`}`,
      a,
    ])
  );
  return ci(s || {}).sort((i, a) => (i[o]?.length || 0) - (a[o]?.length || 0));
}
function Uh(e) {
  if (Fh[e]?.metaKey === 'http-equiv' || Ho.HTTP_EQUIV.has(e))
    return 'http-equiv';
  const t = Rn(e),
    n = t.indexOf(':');
  return n === -1 ? 'name' : Ho.OG.has(t.slice(0, n)) ? 'property' : 'name';
}
function q_(e) {
  return D_[e] || Rn(e);
}
function M_(e, t) {
  return t === 'refresh'
    ? `${e.seconds};url=${e.url}`
    : Hh(al(e), {
        keyValueSeparator: '=',
        entrySeparator: ', ',
        resolve: ({ value: n, key: r }) =>
          n === null ? '' : typeof n == 'boolean' ? r : void 0,
        ...Fh[t]?.unpack,
      });
}
function ci(e) {
  const t = [],
    n = {};
  for (const [o, s] of Object.entries(e)) {
    if (Array.isArray(s)) {
      if (o === 'themeColor') {
        s.forEach((i) => {
          typeof i == 'object' &&
            i !== null &&
            t.push({ name: 'theme-color', ...i });
        });
        continue;
      }
      for (const i of s)
        if (typeof i == 'object' && i !== null) {
          const a = [],
            l = [];
          for (const [u, c] of Object.entries(i)) {
            const f = `${o}${u === 'url' ? '' : `:${u}`}`,
              d = ci({ [f]: c });
            (u === 'url' ? a : l).push(...d);
          }
          t.push(...a, ...l);
        } else t.push(...(typeof i == 'string' ? ci({ [o]: i }) : tf(o, i)));
      continue;
    }
    if (typeof s == 'object' && s)
      if (Ho.MEDIA.has(o)) {
        const i = o.startsWith('twitter') ? 'twitter' : 'og',
          a = o.replace(/^(og|twitter)/, '').toLowerCase(),
          l = i === 'twitter' ? 'name' : 'property';
        s.url && t.push({ [l]: `${i}:${a}`, content: s.url }),
          s.secureUrl &&
            t.push({ [l]: `${i}:${a}:secure_url`, content: s.secureUrl });
        for (const [u, c] of Object.entries(s))
          u !== 'url' &&
            u !== 'secureUrl' &&
            t.push({ [l]: `${i}:${a}:${u}`, content: c });
      } else dc.has(Rn(o)) ? t.push(...tf(o, s)) : (n[o] = zh(s));
    else n[o] = s;
  }
  const r = Object.entries(n).map(([o, s]) => {
    if (o === 'charset') return { charset: s === null ? '_null' : s };
    const i = Uh(o),
      a = q_(o),
      l =
        s === null
          ? '_null'
          : typeof s == 'object'
          ? M_(s, o)
          : typeof s == 'number'
          ? s.toString()
          : s;
    return i === 'http-equiv'
      ? { 'http-equiv': a, content: l }
      : { [i]: a, content: l };
  });
  return [...t, ...r].map((o) =>
    'content' in o && o.content === '_null' ? { ...o, content: null } : o
  );
}
const N_ = {
    key: 'flatMeta',
    hooks: {
      'entries:normalize': (e) => {
        const t = [];
        e.tags = e.tags
          .map((n) =>
            n.tag !== '_flatMeta'
              ? n
              : (t.push(
                  ci(n.props).map((r) => ({ ...n, tag: 'meta', props: r }))
                ),
                !1)
          )
          .filter(Boolean)
          .concat(...t);
      },
    },
  },
  $_ = ['name', 'property', 'http-equiv'],
  B_ = new Set(['viewport', 'description', 'keywords', 'robots']);
function Wh(e) {
  const t = e.split(':');
  return t.length ? dc.has(t[1]) : !1;
}
function ll(e) {
  const { props: t, tag: n } = e;
  if (R_.has(n)) return n;
  if (n === 'link' && t.rel === 'canonical') return 'canonical';
  if (t.charset) return 'charset';
  if (e.tag === 'meta') {
    for (const r of $_)
      if (t[r] !== void 0) {
        const o = t[r],
          s = o.includes(':'),
          i = B_.has(o),
          l = !(s || i) && e.key ? `:key:${e.key}` : '';
        return `${n}:${o}${l}`;
      }
  }
  if (e.key) return `${n}:key:${e.key}`;
  if (t.id) return `${n}:id:${t.id}`;
  if (A_.has(n)) {
    const r = e.textContent || e.innerHTML;
    if (r) return `${n}:content:${r}`;
  }
}
function nf(e) {
  const t = e._h || e._d;
  if (t) return t;
  const n = e.textContent || e.innerHTML;
  return (
    n ||
    `${e.tag}:${Object.entries(e.props)
      .map(([r, o]) => `${r}:${String(o)}`)
      .join(',')}`
  );
}
function ui(e, t, n) {
  typeof e === 'function' &&
    (!n || (n !== 'titleTemplate' && !(n[0] === 'o' && n[1] === 'n'))) &&
    (e = e());
  let o;
  if ((t && (o = t(n, e)), Array.isArray(o))) return o.map((s) => ui(s, t));
  if (o?.constructor === Object) {
    const s = {};
    for (const i of Object.keys(o)) s[i] = ui(o[i], t, i);
    return s;
  }
  return o;
}
function V_(e, t) {
  const n = e === 'style' ? new Map() : new Set();
  function r(o) {
    const s = o.trim();
    if (s)
      if (e === 'style') {
        const [i, ...a] = s.split(':').map((l) => l.trim());
        i && a.length && n.set(i, a.join(':'));
      } else
        s.split(' ')
          .filter(Boolean)
          .forEach((i) => n.add(i));
  }
  return (
    typeof t == 'string'
      ? e === 'style'
        ? t.split(';').forEach(r)
        : r(t)
      : Array.isArray(t)
      ? t.forEach((o) => r(o))
      : t &&
        typeof t == 'object' &&
        Object.entries(t).forEach(([o, s]) => {
          s && s !== 'false' && (e === 'style' ? n.set(o.trim(), s) : r(o));
        }),
    n
  );
}
function Kh(e, t) {
  return (
    (e.props = e.props || {}),
    t
      ? e.tag === 'templateParams'
        ? ((e.props = t), e)
        : (Object.entries(t).forEach(([n, r]) => {
            if (r === null) {
              e.props[n] = null;
              return;
            }
            if (n === 'class' || n === 'style') {
              e.props[n] = V_(n, r);
              return;
            }
            if (I_.has(n)) {
              if (
                ['textContent', 'innerHTML'].includes(n) &&
                typeof r == 'object'
              ) {
                let i = t.type;
                if (
                  (t.type || (i = 'application/json'),
                  !i?.endsWith('json') && i !== 'speculationrules')
                )
                  return;
                (t.type = i), (e.props.type = i), (e[n] = JSON.stringify(r));
              } else e[n] = r;
              return;
            }
            const o = String(r),
              s = n.startsWith('data-');
            o === 'true' || o === ''
              ? (e.props[n] = s ? o : !0)
              : !r && s && o === 'false'
              ? (e.props[n] = 'false')
              : r !== void 0 && (e.props[n] = r);
          }),
          e)
      : e
  );
}
function j_(e, t) {
  const n =
      typeof t == 'object' && typeof t != 'function'
        ? t
        : {
            [e === 'script' || e === 'noscript' || e === 'style'
              ? 'innerHTML'
              : 'textContent']: t,
          },
    r = Kh({ tag: e, props: {} }, n);
  return (
    r.key && S_.has(r.tag) && (r.props['data-hid'] = r._h = r.key),
    r.tag === 'script' &&
      typeof r.innerHTML == 'object' &&
      ((r.innerHTML = JSON.stringify(r.innerHTML)),
      (r.props.type = r.props.type || 'application/json')),
    Array.isArray(r.props.content)
      ? r.props.content.map((o) => ({
          ...r,
          props: { ...r.props, content: o },
        }))
      : r
  );
}
function F_(e, t) {
  if (!e) return [];
  typeof e == 'function' && (e = e());
  const n = (o, s) => {
    for (let i = 0; i < t.length; i++) s = t[i](o, s);
    return s;
  };
  e = n(void 0, e);
  const r = [];
  return (
    (e = ui(e, n)),
    Object.entries(e || {}).forEach(([o, s]) => {
      if (s !== void 0)
        for (const i of Array.isArray(s) ? s : [s]) r.push(j_(o, i));
    }),
    r.flat()
  );
}
const rf = (e, t) => (e._w === t._w ? e._p - t._p : e._w - t._w),
  of = { base: -10, title: 10 },
  z_ = { critical: -8, high: -1, low: 2 },
  sf = {
    meta: { 'content-security-policy': -30, charset: -20, viewport: -15 },
    link: {
      preconnect: 20,
      stylesheet: 60,
      preload: 70,
      modulepreload: 70,
      prefetch: 90,
      'dns-prefetch': 90,
      prerender: 90,
    },
    script: { async: 30, defer: 80, sync: 50 },
    style: { imported: 40, sync: 60 },
  },
  H_ = /@import/,
  bo = (e) => e === '' || e === !0;
function U_(e, t) {
  if (typeof t.tagPriority == 'number') return t.tagPriority;
  let n = 100;
  const r = z_[t.tagPriority] || 0,
    o = e.resolvedOptions.disableCapoSorting
      ? { link: {}, script: {}, style: {} }
      : sf;
  if (t.tag in of) n = of[t.tag];
  else if (t.tag === 'meta') {
    const s =
      t.props['http-equiv'] === 'content-security-policy'
        ? 'content-security-policy'
        : t.props.charset
        ? 'charset'
        : t.props.name === 'viewport'
        ? 'viewport'
        : null;
    s && (n = sf.meta[s]);
  } else
    t.tag === 'link' && t.props.rel
      ? (n = o.link[t.props.rel])
      : t.tag === 'script'
      ? bo(t.props.async)
        ? (n = o.script.async)
        : t.props.src &&
          !bo(t.props.defer) &&
          !bo(t.props.async) &&
          t.props.type !== 'module' &&
          !t.props.type?.endsWith('json')
        ? (n = o.script.sync)
        : bo(t.props.defer) &&
          t.props.src &&
          !bo(t.props.async) &&
          (n = o.script.defer)
      : t.tag === 'style' &&
        (n =
          t.innerHTML && H_.test(t.innerHTML)
            ? o.style.imported
            : o.style.sync);
  return (n || 100) + r;
}
function af(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    r = n.key || String(e.plugins.size + 1);
  e.plugins.get(r) || (e.plugins.set(r, n), e.hooks.addHooks(n.hooks || {}));
}
function W_(e = {}) {
  const t = Oh();
  t.addHooks(e.hooks || {});
  const n = !e.document,
    r = new Map(),
    o = new Map(),
    s = new Set(),
    i = {
      _entryCount: 1,
      plugins: o,
      dirty: !1,
      resolvedOptions: e,
      hooks: t,
      ssr: n,
      entries: r,
      headEntries() {
        return [...r.values()];
      },
      use: (a) => af(i, a),
      push(a, l) {
        const u = { ...(l || {}) };
        delete u.head;
        const c = u._index ?? i._entryCount++,
          f = { _i: c, input: a, options: u },
          d = {
            _poll(p = !1) {
              (i.dirty = !0), !p && s.add(c), t.callHook('entries:updated', i);
            },
            dispose() {
              r.delete(c) && i.invalidate();
            },
            patch(p) {
              (!u.mode ||
                (u.mode === 'server' && n) ||
                (u.mode === 'client' && !n)) &&
                ((f.input = p), r.set(c, f), d._poll());
            },
          };
        return d.patch(a), d;
      },
      async resolveTags() {
        const a = {
          tagMap: new Map(),
          tags: [],
          entries: [...i.entries.values()],
        };
        for (await t.callHook('entries:resolve', a); s.size; ) {
          const d = s.values().next().value;
          s.delete(d);
          const p = r.get(d);
          if (p) {
            const h = {
              tags: F_(p.input, e.propResolvers || []).map((g) =>
                Object.assign(g, p.options)
              ),
              entry: p,
            };
            await t.callHook('entries:normalize', h),
              (p._tags = h.tags.map(
                (g, _) => (
                  (g._w = U_(i, g)),
                  (g._p = (p._i << 10) + _),
                  (g._d = ll(g)),
                  g
                )
              ));
          }
        }
        let l = !1;
        a.entries
          .flatMap((d) =>
            (d._tags || []).map((p) => ({ ...p, props: { ...p.props } }))
          )
          .sort(rf)
          .reduce((d, p) => {
            const h = String(p._d || p._p);
            if (!d.has(h)) return d.set(h, p);
            const g = d.get(h);
            if (
              (p?.tagDuplicateStrategy ||
                (L_.has(p.tag) ? 'merge' : null) ||
                (p.key && p.key === g.key ? 'merge' : null)) === 'merge'
            ) {
              const x = { ...g.props };
              Object.entries(p.props).forEach(
                ([b, v]) =>
                  (x[b] =
                    b === 'style'
                      ? new Map([...(g.props.style || new Map()), ...v])
                      : b === 'class'
                      ? new Set([...(g.props.class || new Set()), ...v])
                      : v)
              ),
                d.set(h, { ...p, props: x });
            } else
              p._p >> 10 === g._p >> 10 && p.tag === 'meta' && Wh(h)
                ? (d.set(
                    h,
                    Object.assign([...(Array.isArray(g) ? g : [g]), p], p)
                  ),
                  (l = !0))
                : (p._w === g._w ? p._p > g._p : p?._w < g?._w) && d.set(h, p);
            return d;
          }, a.tagMap);
        const u = a.tagMap.get('title'),
          c = a.tagMap.get('titleTemplate');
        if (((i._title = u?.textContent), c)) {
          const d = c?.textContent;
          if (((i._titleTemplate = d), d)) {
            let p = typeof d == 'function' ? d(u?.textContent) : d;
            typeof p == 'string' &&
              !i.plugins.has('template-params') &&
              (p = p.replace('%s', u?.textContent || '')),
              u
                ? p === null
                  ? a.tagMap.delete('title')
                  : a.tagMap.set('title', { ...u, textContent: p })
                : ((c.tag = 'title'), (c.textContent = p));
          }
        }
        (a.tags = Array.from(a.tagMap.values())),
          l && (a.tags = a.tags.flat().sort(rf)),
          await t.callHook('tags:beforeResolve', a),
          await t.callHook('tags:resolve', a),
          await t.callHook('tags:afterResolve', a);
        const f = [];
        for (const d of a.tags) {
          const { innerHTML: p, tag: h, props: g } = d;
          if (
            O_.has(h) &&
            !(Object.keys(g).length === 0 && !d.innerHTML && !d.textContent) &&
            !(h === 'meta' && !g.content && !g['http-equiv'] && !g.charset)
          ) {
            if (h === 'script' && p) {
              if (g.type?.endsWith('json')) {
                const _ = typeof p == 'string' ? p : JSON.stringify(p);
                d.innerHTML = _.replace(/</g, '\\u003C');
              } else
                typeof p == 'string' &&
                  (d.innerHTML = p.replace(
                    new RegExp(`</${h}`, 'g'),
                    `<\\/${h}`
                  ));
              d._d = ll(d);
            }
            f.push(d);
          }
        }
        return f;
      },
      invalidate() {
        for (const a of r.values()) s.add(a._i);
        (i.dirty = !0), t.callHook('entries:updated', i);
      },
    };
  return (
    (e?.plugins || []).forEach((a) => af(i, a)),
    i.hooks.callHook('init', i),
    e.init?.forEach((a) => a && i.push(a)),
    i
  );
}
const K_ = (e, t) => (ze(t) ? Ae(t) : t),
  pc = 'usehead';
function G_(e) {
  return {
    install(n) {
      (n.config.globalProperties.$unhead = e),
        (n.config.globalProperties.$head = e),
        n.provide(pc, e);
    },
  }.install;
}
function Gh() {
  if (Ni()) {
    const e = $e(pc);
    if (!e)
      throw new Error(
        'useHead() was called without provide context, ensure you call it through the setup() function.'
      );
    return e;
  }
  throw new Error(
    'useHead() was called without provide context, ensure you call it through the setup() function.'
  );
}
function Yh(e, t = {}) {
  const n = t.head || Gh();
  return n.ssr ? n.push(e || {}, t) : Y_(n, e, t);
}
function Y_(e, t, n = {}) {
  const r = j(!1);
  let o;
  return (
    it(() => {
      const i = r.value ? {} : ui(t, K_);
      o ? o.patch(i) : (o = e.push(i, n));
    }),
    Xe() &&
      (Sr(() => {
        o.dispose();
      }),
      Cp(() => {
        r.value = !0;
      }),
      kp(() => {
        r.value = !1;
      })),
    o
  );
}
function X_(e = {}, t = {}) {
  (t.head || Gh()).use(N_);
  const { title: r, titleTemplate: o, ...s } = e;
  return Yh({ title: r, titleTemplate: o, _flatMeta: s }, t);
}
function Xh(e) {
  const t = e || Le();
  return (
    t.ssrContext?.head ||
    t.runWithContext(() => {
      if (Ni()) {
        const n = $e(pc);
        if (!n) throw new Error('[nuxt] [unhead] Missing Unhead instance.');
        return n;
      }
    })
  );
}
function hc(e, t = {}) {
  const n = t.head || Xh(t.nuxt);
  return Yh(e, { head: n, ...t });
}
function Jh(e, t = {}) {
  const n = t.head || Xh(t.nuxt);
  return X_(e, { head: n, ...t });
}
let qs, Ms;
function J_() {
  return (
    (qs = $fetch(fc(`builds/meta/${Ar().app.buildId}.json`), {
      responseType: 'json',
    })),
    qs
      .then((e) => {
        Ms = c_(e.matcher);
      })
      .catch((e) => {
        console.error('[nuxt] Error fetching app manifest.', e);
      }),
    qs
  );
}
function Fi() {
  return qs || J_();
}
async function gc(e) {
  const t = typeof e == 'string' ? e : e.path;
  if ((await Fi(), !Ms))
    return console.error('[nuxt] Error creating app manifest matcher.', Ms), {};
  try {
    return Mt({}, ...Ms.matchAll(t).reverse());
  } catch (n) {
    return console.error('[nuxt] Error matching route rules.', n), {};
  }
}
async function lf(e, t = {}) {
  if (!(await Zh(e))) return null;
  const r = await Z_(e, t);
  return (await Qh(r)) || null;
}
const Q_ = '_payload.json';
async function Z_(e, t = {}) {
  const n = new URL(e, 'http://localhost');
  if (n.host !== 'localhost' || sn(n.pathname, { acceptRelative: !0 }))
    throw new Error('Payload URL must not include hostname: ' + e);
  const r = Ar(),
    o = t.hash || (t.fresh ? Date.now() : r.app.buildId),
    s = r.app.cdnURL,
    i = s && (await Zh(e)) ? s : r.app.baseURL;
  return kr(i, n.pathname, Q_ + (o ? `?${o}` : ''));
}
async function Qh(e) {
  const t = fetch(e, { cache: 'force-cache' }).then((n) => n.text().then(eg));
  try {
    return await t;
  } catch (n) {
    console.warn('[nuxt] Cannot load payload ', e, n);
  }
  return null;
}
async function Zh(e = rs().path) {
  const t = Le();
  return (
    (e = e === '/' ? e : e.replace(/\/$/, '')),
    (await Fi()).prerendered.includes(e)
      ? !0
      : t.runWithContext(async () => {
          const r = await gc({ path: e });
          return !!r.prerender && !r.redirect;
        })
  );
}
let lr = null;
async function ew() {
  if (lr) return lr;
  const e = document.getElementById('__NUXT_DATA__');
  if (!e) return {};
  const t = await eg(e.textContent || ''),
    n = e.dataset.src ? await Qh(e.dataset.src) : void 0;
  return (
    (lr = { ...t, ...n, ...window.__NUXT__ }),
    lr.config?.public && (lr.config.public = dt(lr.config.public)),
    lr
  );
}
async function eg(e) {
  return await P_(e, Le()._payloadRevivers);
}
function tw(e, t) {
  Le()._payloadRevivers[e] = t;
}
const nw = [
    ['NuxtError', (e) => er(e)],
    [
      'EmptyShallowRef',
      (e) => Pe(e === '_' ? void 0 : e === '0n' ? BigInt(0) : si(e)),
    ],
    ['EmptyRef', (e) => j(e === '_' ? void 0 : e === '0n' ? BigInt(0) : si(e))],
    ['ShallowRef', (e) => Pe(e)],
    ['ShallowReactive', (e) => Zt(e)],
    ['Ref', (e) => j(e)],
    ['Reactive', (e) => dt(e)],
  ],
  rw = Yt({
    name: 'nuxt:revive-payload:client',
    order: -30,
    async setup(e) {
      let t, n;
      for (const [r, o] of nw) tw(r, o);
      Object.assign(
        e.payload,
        (([t, n] = Xr(() => e.runWithContext(ew))), (t = await t), n(), t)
      ),
        delete window.__NUXT__;
    },
  });
async function mc(e, t = {}) {
  const n = t.document || e.resolvedOptions.document;
  if (!n || !e.dirty) return;
  const r = { shouldRender: !0, tags: [] };
  if ((await e.hooks.callHook('dom:beforeRender', r), !!r.shouldRender))
    return (
      e._domUpdatePromise ||
        (e._domUpdatePromise = new Promise(async (o) => {
          const s = new Map(),
            i = new Promise((p) => {
              e.resolveTags().then((h) => {
                p(
                  h.map((g) => {
                    const _ = s.get(g._d) || 0,
                      x = {
                        tag: g,
                        id: (_ ? `${g._d}:${_}` : g._d) || nf(g),
                        shouldRender: !0,
                      };
                    return g._d && Wh(g._d) && s.set(g._d, _ + 1), x;
                  })
                );
              });
            });
          let a = e._dom;
          if (!a) {
            a = {
              title: n.title,
              elMap: new Map()
                .set('htmlAttrs', n.documentElement)
                .set('bodyAttrs', n.body),
            };
            for (const p of ['body', 'head']) {
              const h = n[p]?.children;
              for (const g of h) {
                const _ = g.tagName.toLowerCase();
                if (!ef.has(_)) continue;
                const x = Kh(
                  { tag: _, props: {} },
                  {
                    innerHTML: g.innerHTML,
                    ...(g
                      .getAttributeNames()
                      .reduce((b, v) => ((b[v] = g.getAttribute(v)), b), {}) ||
                      {}),
                  }
                );
                if (
                  ((x.key = g.getAttribute('data-hid') || void 0),
                  (x._d = ll(x) || nf(x)),
                  a.elMap.has(x._d))
                ) {
                  let b = 1,
                    v = x._d;
                  for (; a.elMap.has(v); ) v = `${x._d}:${b++}`;
                  a.elMap.set(v, g);
                } else a.elMap.set(x._d, g);
              }
            }
          }
          (a.pendingSideEffects = { ...a.sideEffects }), (a.sideEffects = {});
          function l(p, h, g) {
            const _ = `${p}:${h}`;
            (a.sideEffects[_] = g), delete a.pendingSideEffects[_];
          }
          function u({ id: p, $el: h, tag: g }) {
            const _ = g.tag.endsWith('Attrs');
            a.elMap.set(p, h),
              _ ||
                (g.textContent &&
                  g.textContent !== h.textContent &&
                  (h.textContent = g.textContent),
                g.innerHTML &&
                  g.innerHTML !== h.innerHTML &&
                  (h.innerHTML = g.innerHTML),
                l(p, 'el', () => {
                  h?.remove(), a.elMap.delete(p);
                }));
            for (const x in g.props) {
              if (!Object.prototype.hasOwnProperty.call(g.props, x)) continue;
              const b = g.props[x];
              if (x.startsWith('on') && typeof b == 'function') {
                const m = h?.dataset;
                if (m && m[`${x}fired`]) {
                  const w = x.slice(0, -5);
                  b.call(h, new Event(w.substring(2)));
                }
                h.getAttribute(`data-${x}`) !== '' &&
                  ((g.tag === 'bodyAttrs' ? n.defaultView : h).addEventListener(
                    x.substring(2),
                    b.bind(h)
                  ),
                  h.setAttribute(`data-${x}`, ''));
                continue;
              }
              const v = `attr:${x}`;
              if (x === 'class') {
                if (!b) continue;
                for (const m of b)
                  _ && l(p, `${v}:${m}`, () => h.classList.remove(m)),
                    !h.classList.contains(m) && h.classList.add(m);
              } else if (x === 'style') {
                if (!b) continue;
                for (const [m, w] of b)
                  l(p, `${v}:${m}`, () => {
                    h.style.removeProperty(m);
                  }),
                    h.style.setProperty(m, w);
              } else
                b !== !1 &&
                  b !== null &&
                  (h.getAttribute(x) !== b &&
                    h.setAttribute(x, b === !0 ? '' : String(b)),
                  _ && l(p, v, () => h.removeAttribute(x)));
            }
          }
          const c = [],
            f = { bodyClose: void 0, bodyOpen: void 0, head: void 0 },
            d = await i;
          for (const p of d) {
            const { tag: h, shouldRender: g, id: _ } = p;
            if (g) {
              if (h.tag === 'title') {
                (n.title = h.textContent),
                  l('title', '', () => (n.title = a.title));
                continue;
              }
              (p.$el = p.$el || a.elMap.get(_)),
                p.$el ? u(p) : ef.has(h.tag) && c.push(p);
            }
          }
          for (const p of c) {
            const h = p.tag.tagPosition || 'head';
            (p.$el = n.createElement(p.tag.tag)),
              u(p),
              (f[h] = f[h] || n.createDocumentFragment()),
              f[h].appendChild(p.$el);
          }
          for (const p of d) await e.hooks.callHook('dom:renderTag', p, n, l);
          f.head && n.head.appendChild(f.head),
            f.bodyOpen && n.body.insertBefore(f.bodyOpen, n.body.firstChild),
            f.bodyClose && n.body.appendChild(f.bodyClose);
          for (const p in a.pendingSideEffects) a.pendingSideEffects[p]();
          (e._dom = a),
            await e.hooks.callHook('dom:rendered', { renders: d }),
            o();
        }).finally(() => {
          (e._domUpdatePromise = void 0), (e.dirty = !1);
        })),
      e._domUpdatePromise
    );
}
function ow(e = {}) {
  const t = e.domOptions?.render || mc;
  e.document = e.document || (typeof window < 'u' ? document : void 0);
  const n =
    e.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML ||
    !1;
  return W_({
    ...e,
    plugins: [
      ...(e.plugins || []),
      { key: 'client', hooks: { 'entries:updated': t } },
    ],
    init: [n ? JSON.parse(n) : !1, ...(e.init || [])],
  });
}
function sw(e, t) {
  let n = 0;
  return () => {
    const r = ++n;
    t(() => {
      n === r && e();
    });
  };
}
function iw(e = {}) {
  const t = ow({
    domOptions: {
      render: sw(
        () => mc(t),
        (n) => setTimeout(n, 0)
      ),
    },
    ...e,
  });
  return (t.install = G_(t)), t;
}
const aw = { disableDefaults: !0 },
  lw = Yt({
    name: 'nuxt:head',
    enforce: 'pre',
    setup(e) {
      const t = iw(aw);
      e.vueApp.use(t);
      {
        let n = !0;
        const r = async () => {
          (n = !1), await mc(t);
        };
        t.hooks.hook('dom:beforeRender', (o) => {
          o.shouldRender = !n;
        }),
          e.hooks.hook('page:start', () => {
            n = !0;
          }),
          e.hooks.hook('page:finish', () => {
            e.isHydrating || r();
          }),
          e.hooks.hook('app:error', r),
          e.hooks.hook('app:suspense:resolve', r);
      }
    },
  });
const jr = typeof document < 'u';
function tg(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  );
}
function cw(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === 'Module' ||
    (e.default && tg(e.default))
  );
}
const Me = Object.assign;
function wa(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = an(o) ? o.map(e) : e(o);
  }
  return n;
}
const No = () => {},
  an = Array.isArray;
function cf(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
const ng = /#/g,
  uw = /&/g,
  fw = /\//g,
  dw = /=/g,
  pw = /\?/g,
  rg = /\+/g,
  hw = /%5B/g,
  gw = /%5D/g,
  og = /%5E/g,
  mw = /%60/g,
  sg = /%7B/g,
  vw = /%7C/g,
  ig = /%7D/g,
  yw = /%20/g;
function vc(e) {
  return e == null
    ? ''
    : encodeURI('' + e)
        .replace(vw, '|')
        .replace(hw, '[')
        .replace(gw, ']');
}
function bw(e) {
  return vc(e).replace(sg, '{').replace(ig, '}').replace(og, '^');
}
function cl(e) {
  return vc(e)
    .replace(rg, '%2B')
    .replace(yw, '+')
    .replace(ng, '%23')
    .replace(uw, '%26')
    .replace(mw, '`')
    .replace(sg, '{')
    .replace(ig, '}')
    .replace(og, '^');
}
function _w(e) {
  return cl(e).replace(dw, '%3D');
}
function ww(e) {
  return vc(e).replace(ng, '%23').replace(pw, '%3F');
}
function xw(e) {
  return ww(e).replace(fw, '%2F');
}
function Uo(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
const kw = /\/$/,
  Cw = (e) => e.replace(kw, '');
function xa(e, t, n = '/') {
  let r,
    o = {},
    s = '',
    i = '';
  const a = t.indexOf('#');
  let l = t.indexOf('?');
  return (
    (l = a >= 0 && l > a ? -1 : l),
    l >= 0 &&
      ((r = t.slice(0, l)),
      (s = t.slice(l, a > 0 ? a : t.length)),
      (o = e(s.slice(1)))),
    a >= 0 && ((r = r || t.slice(0, a)), (i = t.slice(a, t.length))),
    (r = Sw(r ?? t, n)),
    { fullPath: r + s + i, path: r, query: o, hash: Uo(i) }
  );
}
function Ew(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function uf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/';
}
function Pw(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    no(t.matched[r], n.matched[o]) &&
    ag(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function no(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ag(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Tw(e[n], t[n])) return !1;
  return !0;
}
function Tw(e, t) {
  return an(e) ? ff(e, t) : an(t) ? ff(t, e) : e === t;
}
function ff(e, t) {
  return an(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Sw(e, t) {
  if (e.startsWith('/')) return e;
  if (!e) return t;
  const n = t.split('/'),
    r = e.split('/'),
    o = r[r.length - 1];
  (o === '..' || o === '.') && r.push('');
  let s = n.length - 1,
    i,
    a;
  for (i = 0; i < r.length; i++)
    if (((a = r[i]), a !== '.'))
      if (a === '..') s > 1 && s--;
      else break;
  return n.slice(0, s).join('/') + '/' + r.slice(i).join('/');
}
const zt = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
let ul = (function (e) {
    return (e.pop = 'pop'), (e.push = 'push'), e;
  })({}),
  ka = (function (e) {
    return (e.back = 'back'), (e.forward = 'forward'), (e.unknown = ''), e;
  })({});
function Aw(e) {
  if (!e)
    if (jr) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Cw(e);
}
const Ow = /^[^#]+#/;
function Rw(e, t) {
  return e.replace(Ow, '#') + t;
}
function Iw(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const zi = () => ({ left: window.scrollX, top: window.scrollY });
function Lw(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      o =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = Iw(o, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function df(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const fl = new Map();
function Dw(e, t) {
  fl.set(e, t);
}
function qw(e) {
  const t = fl.get(e);
  return fl.delete(e), t;
}
function Mw(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function lg(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
let nt = (function (e) {
  return (
    (e[(e.MATCHER_NOT_FOUND = 1)] = 'MATCHER_NOT_FOUND'),
    (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = 'NAVIGATION_GUARD_REDIRECT'),
    (e[(e.NAVIGATION_ABORTED = 4)] = 'NAVIGATION_ABORTED'),
    (e[(e.NAVIGATION_CANCELLED = 8)] = 'NAVIGATION_CANCELLED'),
    (e[(e.NAVIGATION_DUPLICATED = 16)] = 'NAVIGATION_DUPLICATED'),
    e
  );
})({});
const cg = Symbol('');
nt.MATCHER_NOT_FOUND + '',
  nt.NAVIGATION_GUARD_REDIRECT + '',
  nt.NAVIGATION_ABORTED + '',
  nt.NAVIGATION_CANCELLED + '',
  nt.NAVIGATION_DUPLICATED + '';
function ro(e, t) {
  return Me(new Error(), { type: e, [cg]: !0 }, t);
}
function Cn(e, t) {
  return e instanceof Error && cg in e && (t == null || !!(e.type & t));
}
const Nw = ['params', 'query', 'hash'];
function $w(e) {
  if (typeof e == 'string') return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of Nw) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function Bw(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const n = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let r = 0; r < n.length; ++r) {
    const o = n[r].replace(rg, ' '),
      s = o.indexOf('='),
      i = Uo(s < 0 ? o : o.slice(0, s)),
      a = s < 0 ? null : Uo(o.slice(s + 1));
    if (i in t) {
      let l = t[i];
      an(l) || (l = t[i] = [l]), l.push(a);
    } else t[i] = a;
  }
  return t;
}
function pf(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    if (((n = _w(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (an(r) ? r.map((o) => o && cl(o)) : [r && cl(r)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o));
    });
  }
  return t;
}
function Vw(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = an(r)
        ? r.map((o) => (o == null ? null : '' + o))
        : r == null
        ? r
        : '' + r);
  }
  return t;
}
const jw = Symbol(''),
  hf = Symbol(''),
  yc = Symbol(''),
  bc = Symbol(''),
  dl = Symbol('');
function _o() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Xn(e, t, n, r, o, s = (i) => i()) {
  const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((a, l) => {
      const u = (d) => {
          d === !1
            ? l(ro(nt.NAVIGATION_ABORTED, { from: n, to: t }))
            : d instanceof Error
            ? l(d)
            : Mw(d)
            ? l(ro(nt.NAVIGATION_GUARD_REDIRECT, { from: t, to: d }))
            : (i &&
                r.enterCallbacks[o] === i &&
                typeof d == 'function' &&
                i.push(d),
              a());
        },
        c = s(() => e.call(r && r.instances[o], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((d) => l(d));
    });
}
function Ca(e, t, n, r, o = (s) => s()) {
  const s = [];
  for (const i of e)
    for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== 'beforeRouteEnter' && !i.instances[a]))
        if (tg(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(Xn(u, n, r, i, a, o));
        } else {
          let u = l();
          s.push(() =>
            u.then((c) => {
              if (!c)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${i.path}"`
                );
              const f = cw(c) ? c.default : c;
              (i.mods[a] = c), (i.components[a] = f);
              const d = (f.__vccOpts || f)[t];
              return d && Xn(d, n, r, i, a, o)();
            })
          );
        }
    }
  return s;
}
function Fw(e, t) {
  const n = [],
    r = [],
    o = [],
    s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const a = t.matched[i];
    a && (e.matched.find((u) => no(u, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((u) => no(u, l)) || o.push(l));
  }
  return [n, r, o];
}
let zw = () => location.protocol + '//' + location.host;
function ug(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf('#');
  if (s > -1) {
    let i = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      a = o.slice(i);
    return a[0] !== '/' && (a = '/' + a), uf(a, '');
  }
  return uf(n, e) + r + o;
}
function Hw(e, t, n, r) {
  let o = [],
    s = [],
    i = null;
  const a = ({ state: d }) => {
    const p = ug(e, location),
      h = n.value,
      g = t.value;
    let _ = 0;
    if (d) {
      if (((n.value = p), (t.value = d), i && i === h)) {
        i = null;
        return;
      }
      _ = g ? d.position - g.position : 0;
    } else r(p);
    o.forEach((x) => {
      x(n.value, h, {
        delta: _,
        type: ul.pop,
        direction: _ ? (_ > 0 ? ka.forward : ka.back) : ka.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function u(d) {
    o.push(d);
    const p = () => {
      const h = o.indexOf(d);
      h > -1 && o.splice(h, 1);
    };
    return s.push(p), p;
  }
  function c() {
    if (document.visibilityState === 'hidden') {
      const { history: d } = window;
      if (!d.state) return;
      d.replaceState(Me({}, d.state, { scroll: zi() }), '');
    }
  }
  function f() {
    for (const d of s) d();
    (s = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('pagehide', c),
      document.removeEventListener('visibilitychange', c);
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('pagehide', c),
    document.addEventListener('visibilitychange', c),
    { pauseListeners: l, listen: u, destroy: f }
  );
}
function gf(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? zi() : null,
  };
}
function Uw(e) {
  const { history: t, location: n } = window,
    r = { value: ug(e, n) },
    o = { value: t.state };
  o.value ||
    s(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function s(l, u, c) {
    const f = e.indexOf('#'),
      d =
        f > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(f)) + l
          : zw() + e + l;
    try {
      t[c ? 'replaceState' : 'pushState'](u, '', d), (o.value = u);
    } catch (p) {
      console.error(p), n[c ? 'replace' : 'assign'](d);
    }
  }
  function i(l, u) {
    s(
      l,
      Me({}, t.state, gf(o.value.back, l, o.value.forward, !0), u, {
        position: o.value.position,
      }),
      !0
    ),
      (r.value = l);
  }
  function a(l, u) {
    const c = Me({}, o.value, t.state, { forward: l, scroll: zi() });
    s(c.current, c, !0),
      s(l, Me({}, gf(r.value, l, null), { position: c.position + 1 }, u), !1),
      (r.value = l);
  }
  return { location: r, state: o, push: a, replace: i };
}
function Ww(e) {
  e = Aw(e);
  const t = Uw(e),
    n = Hw(e, t.state, t.location, t.replace);
  function r(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const o = Me(
    { location: '', base: e, go: r, createHref: Rw.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(o, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
let gr = (function (e) {
  return (
    (e[(e.Static = 0)] = 'Static'),
    (e[(e.Param = 1)] = 'Param'),
    (e[(e.Group = 2)] = 'Group'),
    e
  );
})({});
var lt = (function (e) {
  return (
    (e[(e.Static = 0)] = 'Static'),
    (e[(e.Param = 1)] = 'Param'),
    (e[(e.ParamRegExp = 2)] = 'ParamRegExp'),
    (e[(e.ParamRegExpEnd = 3)] = 'ParamRegExpEnd'),
    (e[(e.EscapeNext = 4)] = 'EscapeNext'),
    e
  );
})(lt || {});
const Kw = { type: gr.Static, value: '' },
  Gw = /[a-zA-Z0-9_]/;
function Yw(e) {
  if (!e) return [[]];
  if (e === '/') return [[Kw]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${u}": ${p}`);
  }
  let n = lt.Static,
    r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), (s = []);
  }
  let a = 0,
    l,
    u = '',
    c = '';
  function f() {
    u &&
      (n === lt.Static
        ? s.push({ type: gr.Static, value: u })
        : n === lt.Param || n === lt.ParamRegExp || n === lt.ParamRegExpEnd
        ? (s.length > 1 &&
            (l === '*' || l === '+') &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          s.push({
            type: gr.Param,
            value: u,
            regexp: c,
            repeatable: l === '*' || l === '+',
            optional: l === '*' || l === '?',
          }))
        : t('Invalid state to consume buffer'),
      (u = ''));
  }
  function d() {
    u += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== lt.ParamRegExp)) {
      (r = n), (n = lt.EscapeNext);
      continue;
    }
    switch (n) {
      case lt.Static:
        l === '/' ? (u && f(), i()) : l === ':' ? (f(), (n = lt.Param)) : d();
        break;
      case lt.EscapeNext:
        d(), (n = r);
        break;
      case lt.Param:
        l === '('
          ? (n = lt.ParamRegExp)
          : Gw.test(l)
          ? d()
          : (f(), (n = lt.Static), l !== '*' && l !== '?' && l !== '+' && a--);
        break;
      case lt.ParamRegExp:
        l === ')'
          ? c[c.length - 1] == '\\'
            ? (c = c.slice(0, -1) + l)
            : (n = lt.ParamRegExpEnd)
          : (c += l);
        break;
      case lt.ParamRegExpEnd:
        f(),
          (n = lt.Static),
          l !== '*' && l !== '?' && l !== '+' && a--,
          (c = '');
        break;
      default:
        t('Unknown state');
        break;
    }
  }
  return (
    n === lt.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`),
    f(),
    i(),
    o
  );
}
const mf = '[^/]+?',
  Xw = { sensitive: !1, strict: !1, start: !0, end: !0 };
var xt = (function (e) {
  return (
    (e[(e._multiplier = 10)] = '_multiplier'),
    (e[(e.Root = 90)] = 'Root'),
    (e[(e.Segment = 40)] = 'Segment'),
    (e[(e.SubSegment = 30)] = 'SubSegment'),
    (e[(e.Static = 40)] = 'Static'),
    (e[(e.Dynamic = 20)] = 'Dynamic'),
    (e[(e.BonusCustomRegExp = 10)] = 'BonusCustomRegExp'),
    (e[(e.BonusWildcard = -50)] = 'BonusWildcard'),
    (e[(e.BonusRepeatable = -20)] = 'BonusRepeatable'),
    (e[(e.BonusOptional = -8)] = 'BonusOptional'),
    (e[(e.BonusStrict = 0.7000000000000001)] = 'BonusStrict'),
    (e[(e.BonusCaseSensitive = 0.25)] = 'BonusCaseSensitive'),
    e
  );
})(xt || {});
const Jw = /[.+*?^${}()[\]/\\]/g;
function Qw(e, t) {
  const n = Me({}, Xw, t),
    r = [];
  let o = n.start ? '^' : '';
  const s = [];
  for (const u of e) {
    const c = u.length ? [] : [xt.Root];
    n.strict && !u.length && (o += '/');
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let p = xt.Segment + (n.sensitive ? xt.BonusCaseSensitive : 0);
      if (d.type === gr.Static)
        f || (o += '/'), (o += d.value.replace(Jw, '\\$&')), (p += xt.Static);
      else if (d.type === gr.Param) {
        const { value: h, repeatable: g, optional: _, regexp: x } = d;
        s.push({ name: h, repeatable: g, optional: _ });
        const b = x || mf;
        if (b !== mf) {
          p += xt.BonusCustomRegExp;
          try {
            `${b}`;
          } catch (m) {
            throw new Error(
              `Invalid custom RegExp for param "${h}" (${b}): ` + m.message
            );
          }
        }
        let v = g ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        f || (v = _ && u.length < 2 ? `(?:/${v})` : '/' + v),
          _ && (v += '?'),
          (o += v),
          (p += xt.Dynamic),
          _ && (p += xt.BonusOptional),
          g && (p += xt.BonusRepeatable),
          b === '.*' && (p += xt.BonusWildcard);
      }
      c.push(p);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += xt.BonusStrict;
  }
  n.strict || (o += '/?'),
    n.end ? (o += '$') : n.strict && !o.endsWith('/') && (o += '(?:/|$)');
  const i = new RegExp(o, n.sensitive ? '' : 'i');
  function a(u) {
    const c = u.match(i),
      f = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const p = c[d] || '',
        h = s[d - 1];
      f[h.name] = p && h.repeatable ? p.split('/') : p;
    }
    return f;
  }
  function l(u) {
    let c = '',
      f = !1;
    for (const d of e) {
      (!f || !c.endsWith('/')) && (c += '/'), (f = !1);
      for (const p of d)
        if (p.type === gr.Static) c += p.value;
        else if (p.type === gr.Param) {
          const { value: h, repeatable: g, optional: _ } = p,
            x = h in u ? u[h] : '';
          if (an(x) && !g)
            throw new Error(
              `Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`
            );
          const b = an(x) ? x.join('/') : x;
          if (!b)
            if (_)
              d.length < 2 &&
                (c.endsWith('/') ? (c = c.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${h}"`);
          c += b;
        }
    }
    return c || '/';
  }
  return { re: i, score: r, keys: s, parse: a, stringify: l };
}
function Zw(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === xt.Static + xt.Segment
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === xt.Static + xt.Segment
      ? 1
      : -1
    : 0;
}
function fg(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = Zw(r[n], o[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (vf(r)) return 1;
    if (vf(o)) return -1;
  }
  return o.length - r.length;
}
function vf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const ex = { strict: !1, end: !0, sensitive: !1 };
function tx(e, t, n) {
  const r = Qw(Yw(e.path), n),
    o = Me(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function nx(e, t) {
  const n = [],
    r = new Map();
  t = cf(ex, t);
  function o(f) {
    return r.get(f);
  }
  function s(f, d, p) {
    const h = !p,
      g = bf(f);
    g.aliasOf = p && p.record;
    const _ = cf(t, f),
      x = [g];
    if ('alias' in f) {
      const m = typeof f.alias == 'string' ? [f.alias] : f.alias;
      for (const w of m)
        x.push(
          bf(
            Me({}, g, {
              components: p ? p.record.components : g.components,
              path: w,
              aliasOf: p ? p.record : g,
            })
          )
        );
    }
    let b, v;
    for (const m of x) {
      const { path: w } = m;
      if (d && w[0] !== '/') {
        const C = d.record.path,
          E = C[C.length - 1] === '/' ? '' : '/';
        m.path = d.record.path + (w && E + w);
      }
      if (
        ((b = tx(m, d, _)),
        p
          ? p.alias.push(b)
          : ((v = v || b),
            v !== b && v.alias.push(b),
            h && f.name && !_f(b) && i(f.name)),
        dg(b) && l(b),
        g.children)
      ) {
        const C = g.children;
        for (let E = 0; E < C.length; E++) s(C[E], b, p && p.children[E]);
      }
      p = p || b;
    }
    return v
      ? () => {
          i(v);
        }
      : No;
  }
  function i(f) {
    if (lg(f)) {
      const d = r.get(f);
      d &&
        (r.delete(f),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(i),
        d.alias.forEach(i));
    } else {
      const d = n.indexOf(f);
      d > -1 &&
        (n.splice(d, 1),
        f.record.name && r.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(f) {
    const d = sx(f, n);
    n.splice(d, 0, f), f.record.name && !_f(f) && r.set(f.record.name, f);
  }
  function u(f, d) {
    let p,
      h = {},
      g,
      _;
    if ('name' in f && f.name) {
      if (((p = r.get(f.name)), !p))
        throw ro(nt.MATCHER_NOT_FOUND, { location: f });
      (_ = p.record.name),
        (h = Me(
          yf(
            d.params,
            p.keys
              .filter((v) => !v.optional)
              .concat(p.parent ? p.parent.keys.filter((v) => v.optional) : [])
              .map((v) => v.name)
          ),
          f.params &&
            yf(
              f.params,
              p.keys.map((v) => v.name)
            )
        )),
        (g = p.stringify(h));
    } else if (f.path != null)
      (g = f.path),
        (p = n.find((v) => v.re.test(g))),
        p && ((h = p.parse(g)), (_ = p.record.name));
    else {
      if (((p = d.name ? r.get(d.name) : n.find((v) => v.re.test(d.path))), !p))
        throw ro(nt.MATCHER_NOT_FOUND, { location: f, currentLocation: d });
      (_ = p.record.name),
        (h = Me({}, d.params, f.params)),
        (g = p.stringify(h));
    }
    const x = [];
    let b = p;
    for (; b; ) x.unshift(b.record), (b = b.parent);
    return { name: _, path: g, params: h, matched: x, meta: ox(x) };
  }
  e.forEach((f) => s(f));
  function c() {
    (n.length = 0), r.clear();
  }
  return {
    addRoute: s,
    resolve: u,
    removeRoute: i,
    clearRoutes: c,
    getRoutes: a,
    getRecordMatcher: o,
  };
}
function yf(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function bf(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: rx(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return Object.defineProperty(t, 'mods', { value: {} }), t;
}
function rx(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == 'object' ? n[r] : n;
  return t;
}
function _f(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function ox(e) {
  return e.reduce((t, n) => Me(t, n.meta), {});
}
function sx(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const s = (n + r) >> 1;
    fg(e, t[s]) < 0 ? (r = s) : (n = s + 1);
  }
  const o = ix(e);
  return o && (r = t.lastIndexOf(o, r - 1)), r;
}
function ix(e) {
  let t = e;
  for (; (t = t.parent); ) if (dg(t) && fg(e, t) === 0) return t;
}
function dg({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function wf(e) {
  const t = $e(yc),
    n = $e(bc),
    r = S(() => {
      const l = y(e.to);
      return t.resolve(l);
    }),
    o = S(() => {
      const { matched: l } = r.value,
        { length: u } = l,
        c = l[u - 1],
        f = n.matched;
      if (!c || !f.length) return -1;
      const d = f.findIndex(no.bind(null, c));
      if (d > -1) return d;
      const p = xf(l[u - 2]);
      return u > 1 && xf(c) === p && f[f.length - 1].path !== p
        ? f.findIndex(no.bind(null, l[u - 2]))
        : d;
    }),
    s = S(() => o.value > -1 && fx(n.params, r.value.params)),
    i = S(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        ag(n.params, r.value.params)
    );
  function a(l = {}) {
    if (ux(l)) {
      const u = t[y(e.replace) ? 'replace' : 'push'](y(e.to)).catch(No);
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => u),
        u
      );
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: S(() => r.value.href),
    isActive: s,
    isExactActive: i,
    navigate: a,
  };
}
function ax(e) {
  return e.length === 1 ? e[0] : e;
}
const lx = J({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
      viewTransition: Boolean,
    },
    useLink: wf,
    setup(e, { slots: t }) {
      const n = dt(wf(e)),
        { options: r } = $e(yc),
        o = S(() => ({
          [kf(e.activeClass, r.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [kf(
            e.exactActiveClass,
            r.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive,
        }));
      return () => {
        const s = t.default && ax(t.default(n));
        return e.custom
          ? s
          : Be(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              s
            );
      };
    },
  }),
  cx = lx;
function ux(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function fx(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == 'string') {
      if (r !== o) return !1;
    } else if (!an(o) || o.length !== r.length || r.some((s, i) => s !== o[i]))
      return !1;
  }
  return !0;
}
function xf(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const kf = (e, t, n) => e ?? t ?? n,
  dx = J({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = $e(dl),
        o = S(() => e.route || r.value),
        s = $e(hf, 0),
        i = S(() => {
          let u = y(s);
          const { matched: c } = o.value;
          let f;
          for (; (f = c[u]) && !f.components; ) u++;
          return u;
        }),
        a = S(() => o.value.matched[i.value]);
      bt(
        hf,
        S(() => i.value + 1)
      ),
        bt(jw, a),
        bt(dl, o);
      const l = j();
      return (
        we(
          () => [l.value, a.value, e.name],
          ([u, c, f], [d, p, h]) => {
            c &&
              ((c.instances[f] = u),
              p &&
                p !== c &&
                u &&
                u === d &&
                (c.leaveGuards.size || (c.leaveGuards = p.leaveGuards),
                c.updateGuards.size || (c.updateGuards = p.updateGuards))),
              u &&
                c &&
                (!p || !no(c, p) || !d) &&
                (c.enterCallbacks[f] || []).forEach((g) => g(u));
          },
          { flush: 'post' }
        ),
        () => {
          const u = o.value,
            c = e.name,
            f = a.value,
            d = f && f.components[c];
          if (!d) return Cf(n.default, { Component: d, route: u });
          const p = f.props[c],
            h = p
              ? p === !0
                ? u.params
                : typeof p == 'function'
                ? p(u)
                : p
              : null,
            _ = Be(
              d,
              Me({}, h, t, {
                onVnodeUnmounted: (x) => {
                  x.component.isUnmounted && (f.instances[c] = null);
                },
                ref: l,
              })
            );
          return Cf(n.default, { Component: _, route: u }) || _;
        }
      );
    },
  });
function Cf(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const pg = dx;
function px(e) {
  const t = nx(e.routes, e),
    n = e.parseQuery || Bw,
    r = e.stringifyQuery || pf,
    o = e.history,
    s = _o(),
    i = _o(),
    a = _o(),
    l = Pe(zt);
  let u = zt;
  jr &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const c = wa.bind(null, (N) => '' + N),
    f = wa.bind(null, xw),
    d = wa.bind(null, Uo);
  function p(N, ae) {
    let oe, de;
    return (
      lg(N) ? ((oe = t.getRecordMatcher(N)), (de = ae)) : (de = N),
      t.addRoute(de, oe)
    );
  }
  function h(N) {
    const ae = t.getRecordMatcher(N);
    ae && t.removeRoute(ae);
  }
  function g() {
    return t.getRoutes().map((N) => N.record);
  }
  function _(N) {
    return !!t.getRecordMatcher(N);
  }
  function x(N, ae) {
    if (((ae = Me({}, ae || l.value)), typeof N == 'string')) {
      const P = xa(n, N, ae.path),
        q = t.resolve({ path: P.path }, ae),
        W = o.createHref(P.fullPath);
      return Me(P, q, {
        params: d(q.params),
        hash: Uo(P.hash),
        redirectedFrom: void 0,
        href: W,
      });
    }
    let oe;
    if (N.path != null) oe = Me({}, N, { path: xa(n, N.path, ae.path).path });
    else {
      const P = Me({}, N.params);
      for (const q in P) P[q] == null && delete P[q];
      (oe = Me({}, N, { params: f(P) })), (ae.params = f(ae.params));
    }
    const de = t.resolve(oe, ae),
      ke = N.hash || '';
    de.params = c(d(de.params));
    const je = Ew(r, Me({}, N, { hash: bw(ke), path: de.path })),
      k = o.createHref(je);
    return Me(
      { fullPath: je, hash: ke, query: r === pf ? Vw(N.query) : N.query || {} },
      de,
      { redirectedFrom: void 0, href: k }
    );
  }
  function b(N) {
    return typeof N == 'string' ? xa(n, N, l.value.path) : Me({}, N);
  }
  function v(N, ae) {
    if (u !== N) return ro(nt.NAVIGATION_CANCELLED, { from: ae, to: N });
  }
  function m(N) {
    return E(N);
  }
  function w(N) {
    return m(Me(b(N), { replace: !0 }));
  }
  function C(N, ae) {
    const oe = N.matched[N.matched.length - 1];
    if (oe && oe.redirect) {
      const { redirect: de } = oe;
      let ke = typeof de == 'function' ? de(N, ae) : de;
      return (
        typeof ke == 'string' &&
          ((ke =
            ke.includes('?') || ke.includes('#') ? (ke = b(ke)) : { path: ke }),
          (ke.params = {})),
        Me(
          {
            query: N.query,
            hash: N.hash,
            params: ke.path != null ? {} : N.params,
          },
          ke
        )
      );
    }
  }
  function E(N, ae) {
    const oe = (u = x(N)),
      de = l.value,
      ke = N.state,
      je = N.force,
      k = N.replace === !0,
      P = C(oe, de);
    if (P)
      return E(
        Me(b(P), {
          state: typeof P == 'object' ? Me({}, ke, P.state) : ke,
          force: je,
          replace: k,
        }),
        ae || oe
      );
    const q = oe;
    q.redirectedFrom = ae;
    let W;
    return (
      !je &&
        Pw(r, de, oe) &&
        ((W = ro(nt.NAVIGATION_DUPLICATED, { to: q, from: de })),
        qe(de, de, !0, !1)),
      (W ? Promise.resolve(W) : D(q, de))
        .catch((V) =>
          Cn(V)
            ? Cn(V, nt.NAVIGATION_GUARD_REDIRECT)
              ? V
              : Ee(V)
            : I(V, q, de)
        )
        .then((V) => {
          if (V) {
            if (Cn(V, nt.NAVIGATION_GUARD_REDIRECT))
              return E(
                Me({ replace: k }, b(V.to), {
                  state: typeof V.to == 'object' ? Me({}, ke, V.to.state) : ke,
                  force: je,
                }),
                ae || q
              );
          } else V = M(q, de, !0, k, ke);
          return X(q, de, V), V;
        })
    );
  }
  function A(N, ae) {
    const oe = v(N, ae);
    return oe ? Promise.reject(oe) : Promise.resolve();
  }
  function R(N) {
    const ae = Ve.values().next().value;
    return ae && typeof ae.runWithContext == 'function'
      ? ae.runWithContext(N)
      : N();
  }
  function D(N, ae) {
    let oe;
    const [de, ke, je] = Fw(N, ae);
    oe = Ca(de.reverse(), 'beforeRouteLeave', N, ae);
    for (const P of de)
      P.leaveGuards.forEach((q) => {
        oe.push(Xn(q, N, ae));
      });
    const k = A.bind(null, N, ae);
    return (
      oe.push(k),
      Qe(oe)
        .then(() => {
          oe = [];
          for (const P of s.list()) oe.push(Xn(P, N, ae));
          return oe.push(k), Qe(oe);
        })
        .then(() => {
          oe = Ca(ke, 'beforeRouteUpdate', N, ae);
          for (const P of ke)
            P.updateGuards.forEach((q) => {
              oe.push(Xn(q, N, ae));
            });
          return oe.push(k), Qe(oe);
        })
        .then(() => {
          oe = [];
          for (const P of je)
            if (P.beforeEnter)
              if (an(P.beforeEnter))
                for (const q of P.beforeEnter) oe.push(Xn(q, N, ae));
              else oe.push(Xn(P.beforeEnter, N, ae));
          return oe.push(k), Qe(oe);
        })
        .then(
          () => (
            N.matched.forEach((P) => (P.enterCallbacks = {})),
            (oe = Ca(je, 'beforeRouteEnter', N, ae, R)),
            oe.push(k),
            Qe(oe)
          )
        )
        .then(() => {
          oe = [];
          for (const P of i.list()) oe.push(Xn(P, N, ae));
          return oe.push(k), Qe(oe);
        })
        .catch((P) => (Cn(P, nt.NAVIGATION_CANCELLED) ? P : Promise.reject(P)))
    );
  }
  function X(N, ae, oe) {
    a.list().forEach((de) => R(() => de(N, ae, oe)));
  }
  function M(N, ae, oe, de, ke) {
    const je = v(N, ae);
    if (je) return je;
    const k = ae === zt,
      P = jr ? history.state : {};
    oe &&
      (de || k
        ? o.replace(N.fullPath, Me({ scroll: k && P && P.scroll }, ke))
        : o.push(N.fullPath, ke)),
      (l.value = N),
      qe(N, ae, oe, k),
      Ee();
  }
  let Z;
  function G() {
    Z ||
      (Z = o.listen((N, ae, oe) => {
        if (!Ue.listening) return;
        const de = x(N),
          ke = C(de, Ue.currentRoute.value);
        if (ke) {
          E(Me(ke, { replace: !0, force: !0 }), de).catch(No);
          return;
        }
        u = de;
        const je = l.value;
        jr && Dw(df(je.fullPath, oe.delta), zi()),
          D(de, je)
            .catch((k) =>
              Cn(k, nt.NAVIGATION_ABORTED | nt.NAVIGATION_CANCELLED)
                ? k
                : Cn(k, nt.NAVIGATION_GUARD_REDIRECT)
                ? (E(Me(b(k.to), { force: !0 }), de)
                    .then((P) => {
                      Cn(P, nt.NAVIGATION_ABORTED | nt.NAVIGATION_DUPLICATED) &&
                        !oe.delta &&
                        oe.type === ul.pop &&
                        o.go(-1, !1);
                    })
                    .catch(No),
                  Promise.reject())
                : (oe.delta && o.go(-oe.delta, !1), I(k, de, je))
            )
            .then((k) => {
              (k = k || M(de, je, !1)),
                k &&
                  (oe.delta && !Cn(k, nt.NAVIGATION_CANCELLED)
                    ? o.go(-oe.delta, !1)
                    : oe.type === ul.pop &&
                      Cn(k, nt.NAVIGATION_ABORTED | nt.NAVIGATION_DUPLICATED) &&
                      o.go(-1, !1)),
                X(de, je, k);
            })
            .catch(No);
      }));
  }
  let Q = _o(),
    $ = _o(),
    U;
  function I(N, ae, oe) {
    Ee(N);
    const de = $.list();
    return (
      de.length ? de.forEach((ke) => ke(N, ae, oe)) : console.error(N),
      Promise.reject(N)
    );
  }
  function ie() {
    return U && l.value !== zt
      ? Promise.resolve()
      : new Promise((N, ae) => {
          Q.add([N, ae]);
        });
  }
  function Ee(N) {
    return (
      U ||
        ((U = !N),
        G(),
        Q.list().forEach(([ae, oe]) => (N ? oe(N) : ae())),
        Q.reset()),
      N
    );
  }
  function qe(N, ae, oe, de) {
    const { scrollBehavior: ke } = e;
    if (!jr || !ke) return Promise.resolve();
    const je =
      (!oe && qw(df(N.fullPath, 0))) ||
      ((de || !oe) && history.state && history.state.scroll) ||
      null;
    return Ze()
      .then(() => ke(N, ae, je))
      .then((k) => k && Lw(k))
      .catch((k) => I(k, N, ae));
  }
  const Se = (N) => o.go(N);
  let xe;
  const Ve = new Set(),
    Ue = {
      currentRoute: l,
      listening: !0,
      addRoute: p,
      removeRoute: h,
      clearRoutes: t.clearRoutes,
      hasRoute: _,
      getRoutes: g,
      resolve: x,
      options: e,
      push: m,
      replace: w,
      go: Se,
      back: () => Se(-1),
      forward: () => Se(1),
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: $.add,
      isReady: ie,
      install(N) {
        N.component('RouterLink', cx),
          N.component('RouterView', pg),
          (N.config.globalProperties.$router = Ue),
          Object.defineProperty(N.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => y(l),
          }),
          jr &&
            !xe &&
            l.value === zt &&
            ((xe = !0), m(o.location).catch((de) => {}));
        const ae = {};
        for (const de in zt)
          Object.defineProperty(ae, de, {
            get: () => l.value[de],
            enumerable: !0,
          });
        N.provide(yc, Ue), N.provide(bc, Zt(ae)), N.provide(dl, l);
        const oe = N.unmount;
        Ve.add(N),
          (N.unmount = function () {
            Ve.delete(N),
              Ve.size < 1 &&
                ((u = zt),
                Z && Z(),
                (Z = null),
                (l.value = zt),
                (xe = !1),
                (U = !1)),
              oe();
          });
      },
    };
  function Qe(N) {
    return N.reduce((ae, oe) => ae.then(() => R(oe)), Promise.resolve());
  }
  return Ue;
}
function hg(e) {
  return $e(bc);
}
const hx = /(:\w+)\([^)]+\)/g,
  gx = /(:\w+)[?+*]/g,
  mx = /:\w+/g,
  vx = (e, t) =>
    t.path
      .replace(hx, '$1')
      .replace(gx, '$1')
      .replace(mx, (n) => e.params[n.slice(1)]?.toString() || ''),
  pl = (e, t) => {
    const n = e.route.matched.find(
        (o) => o.components?.default === e.Component.type
      ),
      r = t ?? n?.meta.key ?? (n && vx(e.route, n));
    return typeof r == 'function' ? r(e.route) : r;
  },
  yx = (e, t) => ({ default: () => (e ? Be(py, e === !0 ? {} : e, t) : t) });
function _c(e) {
  return Array.isArray(e) ? e : [e];
}
const bx = 'modulepreload',
  _x = function (e, t) {
    return new URL(e, t).href;
  },
  Ef = {},
  F = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      let u = function (c) {
        return Promise.all(
          c.map((f) =>
            Promise.resolve(f).then(
              (d) => ({ status: 'fulfilled', value: d }),
              (d) => ({ status: 'rejected', reason: d })
            )
          )
        );
      };
      const i = document.getElementsByTagName('link'),
        a = document.querySelector('meta[property=csp-nonce]'),
        l = a?.nonce || a?.getAttribute('nonce');
      o = u(
        n.map((c) => {
          if (((c = _x(c, r)), c in Ef)) return;
          Ef[c] = !0;
          const f = c.endsWith('.css'),
            d = f ? '[rel="stylesheet"]' : '';
          if (r)
            for (let h = i.length - 1; h >= 0; h--) {
              const g = i[h];
              if (g.href === c && (!f || g.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${c}"]${d}`)) return;
          const p = document.createElement('link');
          if (
            ((p.rel = f ? 'stylesheet' : bx),
            f || (p.as = 'script'),
            (p.crossOrigin = ''),
            (p.href = c),
            l && p.setAttribute('nonce', l),
            document.head.appendChild(p),
            f)
          )
            return new Promise((h, g) => {
              p.addEventListener('load', h),
                p.addEventListener('error', () =>
                  g(new Error(`Unable to preload CSS for ${c}`))
                );
            });
        })
      );
    }
    function s(i) {
      const a = new Event('vite:preloadError', { cancelable: !0 });
      if (((a.payload = i), window.dispatchEvent(a), !a.defaultPrevented))
        throw i;
    }
    return o.then((i) => {
      for (const a of i || []) a.status === 'rejected' && s(a.reason);
      return t().catch(s);
    });
  },
  Ea = [
    {
      name: 'about',
      path: '/about',
      component: () =>
        F(
          () => import('./DxI0FDgE.js'),
          __vite__mapDeps([0, 1, 2, 3, 4]),
          import.meta.url
        ),
    },
    {
      name: 'index',
      path: '/',
      component: () =>
        F(
          () => import('./B3IUMk7L.js'),
          __vite__mapDeps([5, 1, 2, 3, 6, 4, 7, 8, 9, 10, 11, 12, 13, 14]),
          import.meta.url
        ),
    },
    {
      name: 'projects',
      path: '/projects',
      component: () =>
        F(
          () => import('./o6hX00aX.js'),
          __vite__mapDeps([15, 4, 6]),
          import.meta.url
        ),
    },
    {
      name: 'speaking',
      path: '/speaking',
      component: () =>
        F(
          () => import('./DQ4MqdIN.js'),
          __vite__mapDeps([16, 4]),
          import.meta.url
        ),
    },
    {
      name: 'blog',
      path: '/blog',
      component: () =>
        F(
          () => import('./ClG7r1jg.js'),
          __vite__mapDeps([17, 4, 7, 8, 6]),
          import.meta.url
        ),
    },
    {
      name: 'blog-slug',
      path: '/blog/:slug(.*)*',
      component: () =>
        F(
          () => import('./CSsg7Wtx.js'),
          __vite__mapDeps([18, 8, 2, 3]),
          import.meta.url
        ),
    },
  ],
  gg = (e, t) => ({
    default: () => (e ? Be(mb, e === !0 ? {} : e, t) : t.default?.()),
  }),
  wx = /(:\w+)\([^)]+\)/g,
  xx = /(:\w+)[?+*]/g,
  kx = /:\w+/g;
function Pf(e) {
  const t =
    e?.meta.key ??
    e.path
      .replace(wx, '$1')
      .replace(xx, '$1')
      .replace(kx, (n) => e.params[n.slice(1)]?.toString() || '');
  return typeof t == 'function' ? t(e) : t;
}
function Cx(e, t) {
  return e === t || t === zt
    ? !1
    : Pf(e) !== Pf(t)
    ? !0
    : !e.matched.every(
        (r, o) =>
          r.components &&
          r.components.default === t.matched[o]?.components?.default
      );
}
const Ex = {
  scrollBehavior(e, t, n) {
    const r = Le(),
      o = _t().options?.scrollBehaviorType ?? 'auto';
    if (e.path.replace(/\/$/, '') === t.path.replace(/\/$/, ''))
      return t.hash && !e.hash
        ? { left: 0, top: 0 }
        : e.hash
        ? { el: e.hash, top: mg(e.hash), behavior: o }
        : !1;
    if (
      (typeof e.meta.scrollToTop == 'function'
        ? e.meta.scrollToTop(e, t)
        : e.meta.scrollToTop) === !1
    )
      return !1;
    const i = r._runningTransition
      ? 'page:transition:finish'
      : 'page:loading:end';
    return new Promise((a) => {
      if (t === zt) {
        a(Tf(e, t, n, o));
        return;
      }
      r.hooks.hookOnce(i, () => {
        requestAnimationFrame(() => a(Tf(e, t, n, o)));
      });
    });
  },
};
function mg(e) {
  try {
    const t = document.querySelector(e);
    if (t)
      return (
        (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) +
        (Number.parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop
        ) || 0)
      );
  } catch {}
  return 0;
}
function Tf(e, t, n, r) {
  if (n) return n;
  const o = Cx(e, t);
  return e.hash
    ? { el: e.hash, top: mg(e.hash), behavior: o ? r : 'instant' }
    : { left: 0, top: 0 };
}
const Px = { hashMode: !1, scrollBehaviorType: 'auto' },
  Hn = { ...Px, ...Ex },
  Tx = async (e, t) => {
    let n, r;
    if (!e.meta?.validate) return;
    const o =
      (([n, r] = Xr(() => Promise.resolve(e.meta.validate(e)))),
      (n = await n),
      r(),
      n);
    if (o === !0) return;
    const s = er({
      fatal: !0,
      statusCode: (o && o.statusCode) || 404,
      statusMessage: (o && o.statusMessage) || `Page Not Found: ${e.fullPath}`,
      data: { path: e.fullPath },
    });
    return (
      typeof window < 'u' && window.history.pushState({}, '', t.fullPath), s
    );
  },
  Sx = async (e) => {
    let t, n;
    const r =
      (([t, n] = Xr(() => gc({ path: e.path }))), (t = await t), n(), t);
    if (r.redirect) {
      const o = r.redirect.includes('#') ? r.redirect : r.redirect + e.hash;
      return sn(o, { acceptRelative: !0 })
        ? ((window.location.href = o), !1)
        : o;
    }
  },
  Ax = [Tx, Sx],
  hl = {};
function Ox(e, t, n) {
  const { pathname: r, search: o, hash: s } = t,
    i = e.indexOf('#');
  if (i > -1) {
    const u = s.includes(e.slice(i)) ? e.slice(i).length : 1;
    let c = s.slice(u);
    return c[0] !== '/' && (c = '/' + c), zu(c, '');
  }
  const a = zu(r, e),
    l = !n || w0(a, n) ? a : n;
  return l + (l.includes('?') ? '' : o) + s;
}
const Rx = Yt({
    name: 'nuxt:router',
    enforce: 'pre',
    async setup(e) {
      let t,
        n,
        r = Ar().app.baseURL;
      const o = Hn.history?.(r) ?? Ww(r),
        s = Hn.routes
          ? (([t, n] = Xr(() => Hn.routes(Ea))), (t = await t), n(), t ?? Ea)
          : Ea;
      let i;
      const a = px({
        ...Hn,
        scrollBehavior: (_, x, b) => {
          if (x === zt) {
            i = b;
            return;
          }
          if (Hn.scrollBehavior) {
            if (
              ((a.options.scrollBehavior = Hn.scrollBehavior),
              'scrollRestoration' in window.history)
            ) {
              const v = a.beforeEach(() => {
                v(), (window.history.scrollRestoration = 'manual');
              });
            }
            return Hn.scrollBehavior(_, zt, i || b);
          }
        },
        history: o,
        routes: s,
      });
      'scrollRestoration' in window.history &&
        (window.history.scrollRestoration = 'auto'),
        e.vueApp.use(a);
      const l = Pe(a.currentRoute.value);
      a.afterEach((_, x) => {
        l.value = x;
      }),
        Object.defineProperty(
          e.vueApp.config.globalProperties,
          'previousRoute',
          { get: () => l.value }
        );
      const u = Ox(r, window.location, e.payload.path),
        c = Pe(a.currentRoute.value),
        f = () => {
          c.value = a.currentRoute.value;
        };
      e.hook('page:finish', f),
        a.afterEach((_, x) => {
          _.matched[_.matched.length - 1]?.components?.default ===
            x.matched[x.matched.length - 1]?.components?.default && f();
        });
      const d = {};
      for (const _ in c.value)
        Object.defineProperty(d, _, { get: () => c.value[_], enumerable: !0 });
      (e._route = Zt(d)), (e._middleware ||= { global: [], named: {} });
      const p = ji();
      a.afterEach(async (_, x, b) => {
        delete e._processingMiddleware,
          !e.isHydrating && p.value && (await e.runWithContext(Vh)),
          b && (await e.callHook('page:loading:end'));
      });
      try {
        ([t, n] = Xr(() => a.isReady())), await t, n();
      } catch (_) {
        ([t, n] = Xr(() => e.runWithContext(() => dr(_)))), await t, n();
      }
      const h =
        u !== a.currentRoute.value.fullPath
          ? a.resolve(u)
          : a.currentRoute.value;
      f();
      const g = e.payload.state._layout;
      return (
        a.beforeEach(async (_, x) => {
          await e.callHook('page:loading:start'),
            (_.meta = dt(_.meta)),
            e.isHydrating && g && !qn(_.meta.layout) && (_.meta.layout = g),
            (e._processingMiddleware = !0);
          {
            const b = new Set([...Ax, ...e._middleware.global]);
            for (const v of _.matched) {
              const m = v.meta.middleware;
              if (m) for (const w of _c(m)) b.add(w);
            }
            {
              const v = await e.runWithContext(() => gc({ path: _.path }));
              if (v.appMiddleware)
                for (const m in v.appMiddleware)
                  v.appMiddleware[m] ? b.add(m) : b.delete(m);
            }
            for (const v of b) {
              const m =
                typeof v == 'string'
                  ? e._middleware.named[v] ||
                    (await hl[v]?.().then((w) => w.default || w))
                  : v;
              if (!m) throw new Error(`Unknown route middleware: '${v}'.`);
              try {
                const w = await e.runWithContext(() => m(_, x));
                if (
                  !e.payload.serverRendered &&
                  e.isHydrating &&
                  (w === !1 || w instanceof Error)
                ) {
                  const C =
                    w ||
                    er({
                      statusCode: 404,
                      statusMessage: `Page Not Found: ${u}`,
                    });
                  return await e.runWithContext(() => dr(C)), !1;
                }
                if (w === !0) continue;
                if (w === !1) return w;
                if (w)
                  return (
                    jh(w) && w.fatal && (await e.runWithContext(() => dr(w))), w
                  );
              } catch (w) {
                const C = er(w);
                return C.fatal && (await e.runWithContext(() => dr(C))), C;
              }
            }
          }
        }),
        a.onError(async () => {
          delete e._processingMiddleware, await e.callHook('page:loading:end');
        }),
        a.afterEach((_) => {
          if (_.matched.length === 0)
            return e.runWithContext(() =>
              dr(
                er({
                  statusCode: 404,
                  fatal: !1,
                  statusMessage: `Page not found: ${_.fullPath}`,
                  data: { path: _.fullPath },
                })
              )
            );
        }),
        e.hooks.hookOnce('app:created', async () => {
          try {
            'name' in h && (h.name = void 0),
              await a.replace({ ...h, force: !0 }),
              (a.options.scrollBehavior = Hn.scrollBehavior);
          } catch (_) {
            await e.runWithContext(() => dr(_));
          }
        }),
        { provide: { router: a } }
      );
    },
  }),
  gl =
    globalThis.requestIdleCallback ||
    ((e) => {
      const t = Date.now(),
        n = {
          didTimeout: !1,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - t)),
        };
      return setTimeout(() => {
        e(n);
      }, 1);
    }),
  Ix =
    globalThis.cancelIdleCallback ||
    ((e) => {
      clearTimeout(e);
    }),
  Hi = (e) => {
    const t = Le();
    t.isHydrating
      ? t.hooks.hookOnce('app:suspense:resolve', () => {
          gl(() => e());
        })
      : gl(() => e());
  },
  Lx = Yt({
    name: 'nuxt:payload',
    setup(e) {
      const t = new Set();
      _t().beforeResolve(async (n, r) => {
        if (n.path === r.path) return;
        const o = await lf(n.path);
        if (o) {
          for (const s of t) delete e.static.data[s];
          for (const s in o.data)
            s in e.static.data || t.add(s), (e.static.data[s] = o.data[s]);
        }
      }),
        Hi(() => {
          e.hooks.hook('link:prefetch', async (n) => {
            const { hostname: r } = new URL(n, window.location.href);
            r === window.location.hostname &&
              (await lf(n).catch(() => {
                console.warn('[nuxt] Error preloading payload for', n);
              }));
          }),
            navigator.connection?.effectiveType !== 'slow-2g' &&
              setTimeout(Fi, 1e3);
        });
    },
  }),
  Dx = Yt(() => {
    const e = _t();
    Hi(() => {
      e.beforeResolve(async () => {
        await new Promise((t) => {
          setTimeout(t, 100),
            requestAnimationFrame(() => {
              setTimeout(t, 0);
            });
        });
      });
    });
  }),
  qx = Yt((e) => {
    let t;
    async function n() {
      let r;
      try {
        r = await Fi();
      } catch (o) {
        const s = o;
        if (!('status' in s && (s.status === 404 || s.status === 403))) throw s;
      }
      t && clearTimeout(t), (t = setTimeout(n, Xu));
      try {
        const o = await $fetch(fc('builds/latest.json') + `?${Date.now()}`);
        o.id !== r?.id &&
          (e.hooks.callHook('app:manifest:update', o), t && clearTimeout(t));
      } catch {}
    }
    Hi(() => {
      t = setTimeout(n, Xu);
    });
  });
function Mx(e = {}) {
  const t = e.path || window.location.pathname;
  let n = {};
  try {
    n = si(sessionStorage.getItem('nuxt:reload') || '{}');
  } catch {}
  if (e.force || n?.path !== t || n?.expires < Date.now()) {
    try {
      sessionStorage.setItem(
        'nuxt:reload',
        JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) })
      );
    } catch {}
    if (e.persistState)
      try {
        sessionStorage.setItem(
          'nuxt:reload:state',
          JSON.stringify({ state: Le().payload.state })
        );
      } catch {}
    window.location.pathname !== t
      ? (window.location.href = t)
      : window.location.reload();
  }
}
const Nx = Yt({
    name: 'nuxt:chunk-reload',
    setup(e) {
      const t = _t(),
        n = Ar(),
        r = new Set();
      t.beforeEach(() => {
        r.clear();
      }),
        e.hook('app:chunkError', ({ error: s }) => {
          r.add(s);
        });
      function o(s) {
        const i = kr(n.app.baseURL, s.fullPath);
        Mx({ path: i, persistState: !0 });
      }
      e.hook('app:manifest:update', () => {
        t.beforeResolve(o);
      }),
        t.onError((s, i) => {
          r.has(s) && o(i);
        });
    },
  }),
  $x = H(() =>
    F(() => import('./B2XEaXnQ.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Bx = H(() =>
    F(() => import('./CUA2ELmO.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Vx = H(() =>
    F(() => import('./CRh8rtra.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  jx = H(() =>
    F(
      () => import('./C4zH9VDq.js'),
      __vite__mapDeps([19, 9]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  Fx = H(() =>
    F(() => import('./BDsvq1n7.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  zx = H(() =>
    F(() => import('./EazXUjuE.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Hx = H(() =>
    F(() => import('./mMzvUnD7.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Ux = H(() =>
    F(
      () => import('./mdPOqrp9.js'),
      __vite__mapDeps([20, 21, 3]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  Wx = H(() =>
    F(() => import('./DukUJnku.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Kx = H(() =>
    F(() => import('./z308reDh.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Gx = H(() =>
    F(() => import('./SB3VIkq9.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Yx = H(() =>
    F(
      () => import('./CwwoKUeP.js'),
      __vite__mapDeps([22, 21, 3]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  Xx = H(() =>
    F(() => import('./Bho0cBcH.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Jx = H(() =>
    F(
      () => import('./DXJDY5R1.js'),
      __vite__mapDeps([23, 21, 3]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  Qx = H(() =>
    F(() => import('./NOQYQep1.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Zx = H(() =>
    F(() => import('./DP3Kjm7b.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  ek = H(() =>
    F(() => import('./di6GdC49.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  tk = H(() =>
    F(() => import('./BOilZuDC.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  nk = H(() =>
    F(() => import('./CvOTpjhU.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  rk = H(() =>
    F(() => import('./DxMyr7Yt.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  ok = H(() =>
    F(() => import('./Dp13yF0e.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  sk = H(() =>
    F(
      () => import('./CgxiuhtF.js'),
      __vite__mapDeps([24, 11, 12, 13, 25]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  ik = H(() =>
    F(() => import('./Bd-qSqKc.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  ak = H(() =>
    F(() => import('./Dxd13eqH.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  lk = H(() =>
    F(() => import('./COLdYNrY.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  ck = H(() =>
    F(() => import('./BV7VcJFY.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  uk = H(() =>
    F(() => import('./PtXuZUTk.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  fk = H(() =>
    F(
      () => import('./Dp_7d_z1.js'),
      __vite__mapDeps([26, 27, 13, 12, 25]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  dk = H(() =>
    F(() => import('./CMVPODJ3.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  pk = H(() =>
    F(() => import('./CT0hp0Ee.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  hk = H(() =>
    F(() => import('./CqJWyH9q.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  gk = H(() =>
    F(() => import('./BwOROgET.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  mk = H(() =>
    F(() => import('./C_O6uSca.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  vk = H(() =>
    F(
      () => import('./CrUIijsX.js'),
      __vite__mapDeps([28, 21, 3]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  yk = H(() =>
    F(() => import('./BJ-PaZUf.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  bk = H(() =>
    F(() => import('./eK2oqujG.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  _k = H(() =>
    F(() => import('./BWo__f3v.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  wk = H(() =>
    F(() => import('./CY2W1bf7.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  xk = H(() =>
    F(() => import('./Cxxk5oJb.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  kk = H(() =>
    F(() => import('./D9Ve35Tq.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Ck = H(() =>
    F(() => import('./DfPP_Qiz.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Ek = H(() =>
    F(() => import('./D-GzJA6O.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Pk = H(() =>
    F(() => import('./CfRbdlUu.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Tk = H(() =>
    F(() => import('./B_OhzTS0.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Sk = H(() =>
    F(() => import('./CwgXBrFc.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Ak = H(() =>
    F(() => import('./B2BTKQGZ.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Ok = H(() =>
    F(() => import('./B3rngx5Q.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Rk = H(() =>
    F(() => import('./DLWraMlp.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Ik = H(() =>
    F(() => import('./DmCxkQtj.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Lk = H(() =>
    F(
      () => import('./NX46BqMR.js'),
      __vite__mapDeps([29, 30, 6]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  Dk = H(() =>
    F(() => import('./CZV3QUDu.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  qk = H(() =>
    F(() => import('./B-c2yUCF.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Mk = H(() =>
    F(() => import('./l2Twz-pm.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Nk = H(() =>
    F(() => import('./BgFE9oO4.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  $k = H(() =>
    F(() => import('./DM-lpkdv.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Bk = H(() =>
    F(() => import('./DqO1hB-S.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Vk = H(() =>
    F(() => import('./jBIP5AR6.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  jk = H(() =>
    F(() => import('./9N8mfJiM.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Fk = H(() =>
    F(() => import('./CjNB47Dc.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  zk = H(() =>
    F(
      () => import('./5wmR8ZVk.js'),
      __vite__mapDeps([31, 25, 32]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  Hk = H(() =>
    F(() => import('./Df_8nZwP.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Uk = H(() =>
    F(() => import('./D1UFVosz.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Wk = H(() =>
    F(() => import('./CfhweUTc.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Kk = H(() =>
    F(() => import('./-6b6Uf6o.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Gk = H(() =>
    F(() => import('./CcnfE_m5.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Yk = H(() =>
    F(() => import('./Dx2zkssT.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Xk = H(() =>
    F(() => import('./DG42BJ27.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Jk = H(() =>
    F(() => import('./BSSFXpda.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Qk = H(() =>
    F(() => import('./DfjKaOLW.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  Zk = H(() =>
    F(
      () => import('./CqHY3FKj.js'),
      __vite__mapDeps([33, 10, 11, 12, 13]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  eC = H(() =>
    F(() => import('./B7k1aqNz.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  tC = H(() =>
    F(() => import('./BAek549h.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  nC = H(() =>
    F(() => import('./CHA1aero.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  rC = H(() =>
    F(() => import('./jafscli0.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  oC = H(() =>
    F(() => import('./Cn_DI3Nb.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  sC = H(() =>
    F(() => import('./BmCcqmgQ.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  iC = H(() =>
    F(() => import('./B_tE-cwx.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  aC = H(() =>
    F(() => import('./CaMGjUFP.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  lC = H(() =>
    F(() => import('./Cm2xxHRt.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  cC = H(() =>
    F(() => import('./mWDMlMhr.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  uC = H(() =>
    F(() => import('./DeUSuvf4.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  fC = H(() =>
    F(() => import('./CZYXOGHF.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  dC = H(() =>
    F(() => import('./CnoiG1Bf.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  pC = H(() =>
    F(() => import('./CEqeYjBL.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  hC = H(() =>
    F(() => import('./DxdE42Og.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  gC = H(() =>
    F(
      () => import('./zhvv6sgY.js'),
      __vite__mapDeps([34, 21, 3, 22]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  mC = H(() =>
    F(() => import('./CjTi99wc.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  vC = H(() =>
    F(
      () => import('./D4Y_XwWu.js'),
      __vite__mapDeps([35, 21, 3, 22]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  yC = H(() =>
    F(() => import('./OC06uI2y.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  bC = H(() =>
    F(
      () => import('./C5O4NGlM.js'),
      __vite__mapDeps([36, 21, 3, 22]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  _C = H(() =>
    F(() => import('./B94Qwzeu.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  wC = H(() =>
    F(
      () => import('./DUL-0ZoH.js'),
      __vite__mapDeps([37, 21, 3, 22]),
      import.meta.url
    ).then((e) => e.default || e.default || e)
  ),
  xC = H(() =>
    F(() => import('./BOJ_jfjV.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  kC = H(() =>
    F(() => import('./DxfIL7EO.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  CC = H(() =>
    F(() => import('./CPeGOIfk.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  EC = H(() =>
    F(() => import('./DMLaYfOI.js'), [], import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  PC = H(() =>
    F(() => Promise.resolve().then(() => rI), void 0, import.meta.url).then(
      (e) => e.default || e.default || e
    )
  ),
  TC = [
    ['ProseADVue', $x],
    ['ProseA', Bx],
    ['ProseAccordionDVue', Vx],
    ['ProseAccordion', jx],
    ['ProseAccordionItemDVue', Fx],
    ['ProseAccordionItem', zx],
    ['ProseBadgeDVue', Hx],
    ['ProseBadge', Ux],
    ['ProseBlockquoteDVue', Wx],
    ['ProseBlockquote', Kx],
    ['ProseCalloutDVue', Gx],
    ['ProseCallout', Yx],
    ['ProseCardDVue', Xx],
    ['ProseCard', Jx],
    ['ProseCardGroupDVue', Qx],
    ['ProseCardGroup', Zx],
    ['ProseCodeDVue', ek],
    ['ProseCode', tk],
    ['ProseCodeCollapseDVue', nk],
    ['ProseCodeCollapse', rk],
    ['ProseCodeGroupDVue', ok],
    ['ProseCodeGroup', sk],
    ['ProseCodeIconDVue', ik],
    ['ProseCodeIcon', ak],
    ['ProseCodePreviewDVue', lk],
    ['ProseCodePreview', ck],
    ['ProseCodeTreeDVue', uk],
    ['ProseCodeTree', fk],
    ['ProseCollapsibleDVue', dk],
    ['ProseCollapsible', pk],
    ['ProseEmDVue', hk],
    ['ProseEm', gk],
    ['ProseFieldDVue', mk],
    ['ProseField', vk],
    ['ProseFieldGroupDVue', yk],
    ['ProseFieldGroup', bk],
    ['ProseH1DVue', _k],
    ['ProseH1', wk],
    ['ProseH2DVue', xk],
    ['ProseH2', kk],
    ['ProseH3DVue', Ck],
    ['ProseH3', Ek],
    ['ProseH4DVue', Pk],
    ['ProseH4', Tk],
    ['ProseHrDVue', Sk],
    ['ProseHr', Ak],
    ['ProseIconDVue', Ok],
    ['ProseIcon', Rk],
    ['ProseImgDVue', Ik],
    ['ProseImg', Lk],
    ['ProseKbdDVue', Dk],
    ['ProseKbd', qk],
    ['ProseLiDVue', Mk],
    ['ProseLi', Nk],
    ['ProseOlDVue', $k],
    ['ProseOl', Bk],
    ['ProsePDVue', Vk],
    ['ProseP', jk],
    ['ProsePreDVue', Fk],
    ['ProsePre', zk],
    ['ProseScriptDVue', Hk],
    ['ProseScript', Uk],
    ['ProseStepsDVue', Wk],
    ['ProseSteps', Kk],
    ['ProseStrongDVue', Gk],
    ['ProseStrong', Yk],
    ['ProseTableDVue', Xk],
    ['ProseTable', Jk],
    ['ProseTabsDVue', Qk],
    ['ProseTabs', Zk],
    ['ProseTabsItemDVue', eC],
    ['ProseTabsItem', tC],
    ['ProseTbodyDVue', nC],
    ['ProseTbody', rC],
    ['ProseTdDVue', oC],
    ['ProseTd', sC],
    ['ProseThDVue', iC],
    ['ProseTh', aC],
    ['ProseTheadDVue', lC],
    ['ProseThead', cC],
    ['ProseTrDVue', uC],
    ['ProseTr', fC],
    ['ProseUlDVue', dC],
    ['ProseUl', pC],
    ['ProseCautionDVue', hC],
    ['ProseCaution', gC],
    ['ProseNoteDVue', mC],
    ['ProseNote', vC],
    ['ProseTipDVue', yC],
    ['ProseTip', bC],
    ['ProseWarningDVue', _C],
    ['ProseWarning', wC],
    ['ProseH5DVue', xC],
    ['ProseH5', kC],
    ['ProseH6DVue', CC],
    ['ProseH6', EC],
    ['Icon', PC],
  ],
  SC = Yt({
    name: 'nuxt:global-components',
    setup(e) {
      for (const [t, n] of TC)
        e.vueApp.component(t, n), e.vueApp.component('Lazy' + t, n);
    },
  }),
  Qn = {
    default: H(() =>
      F(() => import('./DgR_WjzH.js'), [], import.meta.url).then(
        (e) => e.default || e
      )
    ),
  };
function AC(e) {
  if (e?.__asyncLoader && !e.__asyncResolved) return e.__asyncLoader();
}
async function vg(e, t = _t()) {
  const { path: n, matched: r } = t.resolve(e);
  if (
    !r.length ||
    ((t._routePreloaded ||= new Set()), t._routePreloaded.has(n))
  )
    return;
  const o = (t._preloadPromises ||= []);
  if (o.length > 4) return Promise.all(o).then(() => vg(e, t));
  t._routePreloaded.add(n);
  for (const s of r) {
    const i = s.components?.default;
    if (typeof i != 'function') continue;
    const a = Promise.resolve(i())
      .catch(() => {})
      .finally(() => o.splice(o.indexOf(a)));
    o.push(a);
  }
  await Promise.all(o);
}
const OC = Yt({
  name: 'nuxt:prefetch',
  setup(e) {
    const t = _t();
    e.hooks.hook('app:mounted', () => {
      t.beforeEach(async (n) => {
        const r = n?.meta?.layout;
        r && typeof Qn[r] == 'function' && (await Qn[r]());
      });
    }),
      e.hooks.hook('link:prefetch', (n) => {
        if (sn(n)) return;
        const r = t.resolve(n);
        if (!r) return;
        const o = r.meta.layout;
        let s = _c(r.meta.middleware);
        s = s.filter((i) => typeof i == 'string');
        for (const i of s) typeof hl[i] == 'function' && hl[i]();
        typeof o == 'string' && o in Qn && AC(Qn[o]);
      });
  },
});
var ys = {
  inherit: 'inherit',
  current: 'currentcolor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  slate: {
    50: 'oklch(98.4% 0.003 247.858)',
    100: 'oklch(96.8% 0.007 247.896)',
    200: 'oklch(92.9% 0.013 255.508)',
    300: 'oklch(86.9% 0.022 252.894)',
    400: 'oklch(70.4% 0.04 256.788)',
    500: 'oklch(55.4% 0.046 257.417)',
    600: 'oklch(44.6% 0.043 257.281)',
    700: 'oklch(37.2% 0.044 257.287)',
    800: 'oklch(27.9% 0.041 260.031)',
    900: 'oklch(20.8% 0.042 265.755)',
    950: 'oklch(12.9% 0.042 264.695)',
  },
  gray: {
    50: 'oklch(98.5% 0.002 247.839)',
    100: 'oklch(96.7% 0.003 264.542)',
    200: 'oklch(92.8% 0.006 264.531)',
    300: 'oklch(87.2% 0.01 258.338)',
    400: 'oklch(70.7% 0.022 261.325)',
    500: 'oklch(55.1% 0.027 264.364)',
    600: 'oklch(44.6% 0.03 256.802)',
    700: 'oklch(37.3% 0.034 259.733)',
    800: 'oklch(27.8% 0.033 256.848)',
    900: 'oklch(21% 0.034 264.665)',
    950: 'oklch(13% 0.028 261.692)',
  },
  zinc: {
    50: 'oklch(98.5% 0 0)',
    100: 'oklch(96.7% 0.001 286.375)',
    200: 'oklch(92% 0.004 286.32)',
    300: 'oklch(87.1% 0.006 286.286)',
    400: 'oklch(70.5% 0.015 286.067)',
    500: 'oklch(55.2% 0.016 285.938)',
    600: 'oklch(44.2% 0.017 285.786)',
    700: 'oklch(37% 0.013 285.805)',
    800: 'oklch(27.4% 0.006 286.033)',
    900: 'oklch(21% 0.006 285.885)',
    950: 'oklch(14.1% 0.005 285.823)',
  },
  neutral: {
    50: 'oklch(98.5% 0 0)',
    100: 'oklch(97% 0 0)',
    200: 'oklch(92.2% 0 0)',
    300: 'oklch(87% 0 0)',
    400: 'oklch(70.8% 0 0)',
    500: 'oklch(55.6% 0 0)',
    600: 'oklch(43.9% 0 0)',
    700: 'oklch(37.1% 0 0)',
    800: 'oklch(26.9% 0 0)',
    900: 'oklch(20.5% 0 0)',
    950: 'oklch(14.5% 0 0)',
  },
  stone: {
    50: 'oklch(98.5% 0.001 106.423)',
    100: 'oklch(97% 0.001 106.424)',
    200: 'oklch(92.3% 0.003 48.717)',
    300: 'oklch(86.9% 0.005 56.366)',
    400: 'oklch(70.9% 0.01 56.259)',
    500: 'oklch(55.3% 0.013 58.071)',
    600: 'oklch(44.4% 0.011 73.639)',
    700: 'oklch(37.4% 0.01 67.558)',
    800: 'oklch(26.8% 0.007 34.298)',
    900: 'oklch(21.6% 0.006 56.043)',
    950: 'oklch(14.7% 0.004 49.25)',
  },
  red: {
    50: 'oklch(97.1% 0.013 17.38)',
    100: 'oklch(93.6% 0.032 17.717)',
    200: 'oklch(88.5% 0.062 18.334)',
    300: 'oklch(80.8% 0.114 19.571)',
    400: 'oklch(70.4% 0.191 22.216)',
    500: 'oklch(63.7% 0.237 25.331)',
    600: 'oklch(57.7% 0.245 27.325)',
    700: 'oklch(50.5% 0.213 27.518)',
    800: 'oklch(44.4% 0.177 26.899)',
    900: 'oklch(39.6% 0.141 25.723)',
    950: 'oklch(25.8% 0.092 26.042)',
  },
  orange: {
    50: 'oklch(98% 0.016 73.684)',
    100: 'oklch(95.4% 0.038 75.164)',
    200: 'oklch(90.1% 0.076 70.697)',
    300: 'oklch(83.7% 0.128 66.29)',
    400: 'oklch(75% 0.183 55.934)',
    500: 'oklch(70.5% 0.213 47.604)',
    600: 'oklch(64.6% 0.222 41.116)',
    700: 'oklch(55.3% 0.195 38.402)',
    800: 'oklch(47% 0.157 37.304)',
    900: 'oklch(40.8% 0.123 38.172)',
    950: 'oklch(26.6% 0.079 36.259)',
  },
  amber: {
    50: 'oklch(98.7% 0.022 95.277)',
    100: 'oklch(96.2% 0.059 95.617)',
    200: 'oklch(92.4% 0.12 95.746)',
    300: 'oklch(87.9% 0.169 91.605)',
    400: 'oklch(82.8% 0.189 84.429)',
    500: 'oklch(76.9% 0.188 70.08)',
    600: 'oklch(66.6% 0.179 58.318)',
    700: 'oklch(55.5% 0.163 48.998)',
    800: 'oklch(47.3% 0.137 46.201)',
    900: 'oklch(41.4% 0.112 45.904)',
    950: 'oklch(27.9% 0.077 45.635)',
  },
  yellow: {
    50: 'oklch(98.7% 0.026 102.212)',
    100: 'oklch(97.3% 0.071 103.193)',
    200: 'oklch(94.5% 0.129 101.54)',
    300: 'oklch(90.5% 0.182 98.111)',
    400: 'oklch(85.2% 0.199 91.936)',
    500: 'oklch(79.5% 0.184 86.047)',
    600: 'oklch(68.1% 0.162 75.834)',
    700: 'oklch(55.4% 0.135 66.442)',
    800: 'oklch(47.6% 0.114 61.907)',
    900: 'oklch(42.1% 0.095 57.708)',
    950: 'oklch(28.6% 0.066 53.813)',
  },
  lime: {
    50: 'oklch(98.6% 0.031 120.757)',
    100: 'oklch(96.7% 0.067 122.328)',
    200: 'oklch(93.8% 0.127 124.321)',
    300: 'oklch(89.7% 0.196 126.665)',
    400: 'oklch(84.1% 0.238 128.85)',
    500: 'oklch(76.8% 0.233 130.85)',
    600: 'oklch(64.8% 0.2 131.684)',
    700: 'oklch(53.2% 0.157 131.589)',
    800: 'oklch(45.3% 0.124 130.933)',
    900: 'oklch(40.5% 0.101 131.063)',
    950: 'oklch(27.4% 0.072 132.109)',
  },
  green: {
    50: 'oklch(98.2% 0.018 155.826)',
    100: 'oklch(96.2% 0.044 156.743)',
    200: 'oklch(92.5% 0.084 155.995)',
    300: 'oklch(87.1% 0.15 154.449)',
    400: 'oklch(79.2% 0.209 151.711)',
    500: 'oklch(72.3% 0.219 149.579)',
    600: 'oklch(62.7% 0.194 149.214)',
    700: 'oklch(52.7% 0.154 150.069)',
    800: 'oklch(44.8% 0.119 151.328)',
    900: 'oklch(39.3% 0.095 152.535)',
    950: 'oklch(26.6% 0.065 152.934)',
  },
  emerald: {
    50: 'oklch(97.9% 0.021 166.113)',
    100: 'oklch(95% 0.052 163.051)',
    200: 'oklch(90.5% 0.093 164.15)',
    300: 'oklch(84.5% 0.143 164.978)',
    400: 'oklch(76.5% 0.177 163.223)',
    500: 'oklch(69.6% 0.17 162.48)',
    600: 'oklch(59.6% 0.145 163.225)',
    700: 'oklch(50.8% 0.118 165.612)',
    800: 'oklch(43.2% 0.095 166.913)',
    900: 'oklch(37.8% 0.077 168.94)',
    950: 'oklch(26.2% 0.051 172.552)',
  },
  teal: {
    50: 'oklch(98.4% 0.014 180.72)',
    100: 'oklch(95.3% 0.051 180.801)',
    200: 'oklch(91% 0.096 180.426)',
    300: 'oklch(85.5% 0.138 181.071)',
    400: 'oklch(77.7% 0.152 181.912)',
    500: 'oklch(70.4% 0.14 182.503)',
    600: 'oklch(60% 0.118 184.704)',
    700: 'oklch(51.1% 0.096 186.391)',
    800: 'oklch(43.7% 0.078 188.216)',
    900: 'oklch(38.6% 0.063 188.416)',
    950: 'oklch(27.7% 0.046 192.524)',
  },
  cyan: {
    50: 'oklch(98.4% 0.019 200.873)',
    100: 'oklch(95.6% 0.045 203.388)',
    200: 'oklch(91.7% 0.08 205.041)',
    300: 'oklch(86.5% 0.127 207.078)',
    400: 'oklch(78.9% 0.154 211.53)',
    500: 'oklch(71.5% 0.143 215.221)',
    600: 'oklch(60.9% 0.126 221.723)',
    700: 'oklch(52% 0.105 223.128)',
    800: 'oklch(45% 0.085 224.283)',
    900: 'oklch(39.8% 0.07 227.392)',
    950: 'oklch(30.2% 0.056 229.695)',
  },
  sky: {
    50: 'oklch(97.7% 0.013 236.62)',
    100: 'oklch(95.1% 0.026 236.824)',
    200: 'oklch(90.1% 0.058 230.902)',
    300: 'oklch(82.8% 0.111 230.318)',
    400: 'oklch(74.6% 0.16 232.661)',
    500: 'oklch(68.5% 0.169 237.323)',
    600: 'oklch(58.8% 0.158 241.966)',
    700: 'oklch(50% 0.134 242.749)',
    800: 'oklch(44.3% 0.11 240.79)',
    900: 'oklch(39.1% 0.09 240.876)',
    950: 'oklch(29.3% 0.066 243.157)',
  },
  blue: {
    50: 'oklch(97% 0.014 254.604)',
    100: 'oklch(93.2% 0.032 255.585)',
    200: 'oklch(88.2% 0.059 254.128)',
    300: 'oklch(80.9% 0.105 251.813)',
    400: 'oklch(70.7% 0.165 254.624)',
    500: 'oklch(62.3% 0.214 259.815)',
    600: 'oklch(54.6% 0.245 262.881)',
    700: 'oklch(48.8% 0.243 264.376)',
    800: 'oklch(42.4% 0.199 265.638)',
    900: 'oklch(37.9% 0.146 265.522)',
    950: 'oklch(28.2% 0.091 267.935)',
  },
  indigo: {
    50: 'oklch(96.2% 0.018 272.314)',
    100: 'oklch(93% 0.034 272.788)',
    200: 'oklch(87% 0.065 274.039)',
    300: 'oklch(78.5% 0.115 274.713)',
    400: 'oklch(67.3% 0.182 276.935)',
    500: 'oklch(58.5% 0.233 277.117)',
    600: 'oklch(51.1% 0.262 276.966)',
    700: 'oklch(45.7% 0.24 277.023)',
    800: 'oklch(39.8% 0.195 277.366)',
    900: 'oklch(35.9% 0.144 278.697)',
    950: 'oklch(25.7% 0.09 281.288)',
  },
  violet: {
    50: 'oklch(96.9% 0.016 293.756)',
    100: 'oklch(94.3% 0.029 294.588)',
    200: 'oklch(89.4% 0.057 293.283)',
    300: 'oklch(81.1% 0.111 293.571)',
    400: 'oklch(70.2% 0.183 293.541)',
    500: 'oklch(60.6% 0.25 292.717)',
    600: 'oklch(54.1% 0.281 293.009)',
    700: 'oklch(49.1% 0.27 292.581)',
    800: 'oklch(43.2% 0.232 292.759)',
    900: 'oklch(38% 0.189 293.745)',
    950: 'oklch(28.3% 0.141 291.089)',
  },
  purple: {
    50: 'oklch(97.7% 0.014 308.299)',
    100: 'oklch(94.6% 0.033 307.174)',
    200: 'oklch(90.2% 0.063 306.703)',
    300: 'oklch(82.7% 0.119 306.383)',
    400: 'oklch(71.4% 0.203 305.504)',
    500: 'oklch(62.7% 0.265 303.9)',
    600: 'oklch(55.8% 0.288 302.321)',
    700: 'oklch(49.6% 0.265 301.924)',
    800: 'oklch(43.8% 0.218 303.724)',
    900: 'oklch(38.1% 0.176 304.987)',
    950: 'oklch(29.1% 0.149 302.717)',
  },
  fuchsia: {
    50: 'oklch(97.7% 0.017 320.058)',
    100: 'oklch(95.2% 0.037 318.852)',
    200: 'oklch(90.3% 0.076 319.62)',
    300: 'oklch(83.3% 0.145 321.434)',
    400: 'oklch(74% 0.238 322.16)',
    500: 'oklch(66.7% 0.295 322.15)',
    600: 'oklch(59.1% 0.293 322.896)',
    700: 'oklch(51.8% 0.253 323.949)',
    800: 'oklch(45.2% 0.211 324.591)',
    900: 'oklch(40.1% 0.17 325.612)',
    950: 'oklch(29.3% 0.136 325.661)',
  },
  pink: {
    50: 'oklch(97.1% 0.014 343.198)',
    100: 'oklch(94.8% 0.028 342.258)',
    200: 'oklch(89.9% 0.061 343.231)',
    300: 'oklch(82.3% 0.12 346.018)',
    400: 'oklch(71.8% 0.202 349.761)',
    500: 'oklch(65.6% 0.241 354.308)',
    600: 'oklch(59.2% 0.249 0.584)',
    700: 'oklch(52.5% 0.223 3.958)',
    800: 'oklch(45.9% 0.187 3.815)',
    900: 'oklch(40.8% 0.153 2.432)',
    950: 'oklch(28.4% 0.109 3.907)',
  },
  rose: {
    50: 'oklch(96.9% 0.015 12.422)',
    100: 'oklch(94.1% 0.03 12.58)',
    200: 'oklch(89.2% 0.058 10.001)',
    300: 'oklch(81% 0.117 11.638)',
    400: 'oklch(71.2% 0.194 13.428)',
    500: 'oklch(64.5% 0.246 16.439)',
    600: 'oklch(58.6% 0.253 17.585)',
    700: 'oklch(51.4% 0.222 16.935)',
    800: 'oklch(45.5% 0.188 13.697)',
    900: 'oklch(41% 0.159 10.272)',
    950: 'oklch(27.1% 0.105 12.094)',
  },
};
const RC = {
    global: {
      picture: {
        dark: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        light:
          'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'My profile picture',
      },
      meetingLink: 'https://cal.com/',
      email: 'ui-pro@nuxt.com',
      available: !0,
    },
    ui: {
      colors: { primary: 'blue', neutral: 'neutral' },
      pageHero: {
        slots: {
          container: 'py-18 sm:py-24 lg:py-32',
          title:
            'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
          description:
            'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted',
        },
      },
    },
    footer: {
      credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
      colorMode: !1,
      links: [
        {
          icon: 'i-simple-icons-discord',
          to: 'https://go.nuxt.com/discord',
          target: '_blank',
          'aria-label': 'Nuxt on Discord',
        },
        {
          icon: 'i-simple-icons-x',
          to: 'https://go.nuxt.com/x',
          target: '_blank',
          'aria-label': 'Nuxt on X',
        },
        {
          icon: 'i-simple-icons-github',
          to: 'https://github.com/nuxt/ui',
          target: '_blank',
          'aria-label': 'Nuxt UI on GitHub',
        },
      ],
    },
  },
  IC = {
    nuxt: {},
    ui: {
      colors: {
        primary: 'green',
        secondary: 'blue',
        success: 'green',
        info: 'blue',
        warning: 'yellow',
        error: 'red',
        neutral: 'slate',
      },
      icons: {
        arrowDown: 'i-lucide-arrow-down',
        arrowLeft: 'i-lucide-arrow-left',
        arrowRight: 'i-lucide-arrow-right',
        arrowUp: 'i-lucide-arrow-up',
        caution: 'i-lucide-circle-alert',
        check: 'i-lucide-check',
        chevronDoubleLeft: 'i-lucide-chevrons-left',
        chevronDoubleRight: 'i-lucide-chevrons-right',
        chevronDown: 'i-lucide-chevron-down',
        chevronLeft: 'i-lucide-chevron-left',
        chevronRight: 'i-lucide-chevron-right',
        chevronUp: 'i-lucide-chevron-up',
        close: 'i-lucide-x',
        copy: 'i-lucide-copy',
        copyCheck: 'i-lucide-copy-check',
        dark: 'i-lucide-moon',
        ellipsis: 'i-lucide-ellipsis',
        error: 'i-lucide-circle-x',
        external: 'i-lucide-arrow-up-right',
        eye: 'i-lucide-eye',
        eyeOff: 'i-lucide-eye-off',
        file: 'i-lucide-file',
        folder: 'i-lucide-folder',
        folderOpen: 'i-lucide-folder-open',
        hash: 'i-lucide-hash',
        info: 'i-lucide-info',
        light: 'i-lucide-sun',
        loading: 'i-lucide-loader-circle',
        menu: 'i-lucide-menu',
        minus: 'i-lucide-minus',
        panelClose: 'i-lucide-panel-left-close',
        panelOpen: 'i-lucide-panel-left-open',
        plus: 'i-lucide-plus',
        reload: 'i-lucide-rotate-ccw',
        search: 'i-lucide-search',
        stop: 'i-lucide-square',
        success: 'i-lucide-circle-check',
        system: 'i-lucide-monitor',
        tip: 'i-lucide-lightbulb',
        upload: 'i-lucide-upload',
        warning: 'i-lucide-triangle-alert',
      },
    },
    icon: {
      provider: 'iconify',
      class: '',
      aliases: {},
      iconifyApiEndpoint: 'https://api.iconify.design',
      localApiEndpoint: '/api/_nuxt_icon',
      fallbackToApi: !0,
      cssSelectorPrefix: 'i-',
      cssWherePseudo: !0,
      cssLayer: 'components',
      mode: 'css',
      attrs: { 'aria-hidden': !0 },
      collections: [
        'academicons',
        'akar-icons',
        'ant-design',
        'arcticons',
        'basil',
        'bi',
        'bitcoin-icons',
        'bpmn',
        'brandico',
        'bx',
        'bxl',
        'bxs',
        'bytesize',
        'carbon',
        'catppuccin',
        'cbi',
        'charm',
        'ci',
        'cib',
        'cif',
        'cil',
        'circle-flags',
        'circum',
        'clarity',
        'codicon',
        'covid',
        'cryptocurrency',
        'cryptocurrency-color',
        'dashicons',
        'devicon',
        'devicon-plain',
        'ei',
        'el',
        'emojione',
        'emojione-monotone',
        'emojione-v1',
        'entypo',
        'entypo-social',
        'eos-icons',
        'ep',
        'et',
        'eva',
        'f7',
        'fa',
        'fa-brands',
        'fa-regular',
        'fa-solid',
        'fa6-brands',
        'fa6-regular',
        'fa6-solid',
        'fad',
        'fe',
        'feather',
        'file-icons',
        'flag',
        'flagpack',
        'flat-color-icons',
        'flat-ui',
        'flowbite',
        'fluent',
        'fluent-emoji',
        'fluent-emoji-flat',
        'fluent-emoji-high-contrast',
        'fluent-mdl2',
        'fontelico',
        'fontisto',
        'formkit',
        'foundation',
        'fxemoji',
        'gala',
        'game-icons',
        'geo',
        'gg',
        'gis',
        'gravity-ui',
        'gridicons',
        'grommet-icons',
        'guidance',
        'healthicons',
        'heroicons',
        'heroicons-outline',
        'heroicons-solid',
        'hugeicons',
        'humbleicons',
        'ic',
        'icomoon-free',
        'icon-park',
        'icon-park-outline',
        'icon-park-solid',
        'icon-park-twotone',
        'iconamoon',
        'iconoir',
        'icons8',
        'il',
        'ion',
        'iwwa',
        'jam',
        'la',
        'lets-icons',
        'line-md',
        'logos',
        'ls',
        'lucide',
        'lucide-lab',
        'mage',
        'majesticons',
        'maki',
        'map',
        'marketeq',
        'material-symbols',
        'material-symbols-light',
        'mdi',
        'mdi-light',
        'medical-icon',
        'memory',
        'meteocons',
        'mi',
        'mingcute',
        'mono-icons',
        'mynaui',
        'nimbus',
        'nonicons',
        'noto',
        'noto-v1',
        'octicon',
        'oi',
        'ooui',
        'openmoji',
        'oui',
        'pajamas',
        'pepicons',
        'pepicons-pencil',
        'pepicons-pop',
        'pepicons-print',
        'ph',
        'pixelarticons',
        'prime',
        'ps',
        'quill',
        'radix-icons',
        'raphael',
        'ri',
        'rivet-icons',
        'si-glyph',
        'simple-icons',
        'simple-line-icons',
        'skill-icons',
        'solar',
        'streamline',
        'streamline-emojis',
        'subway',
        'svg-spinners',
        'system-uicons',
        'tabler',
        'tdesign',
        'teenyicons',
        'token',
        'token-branded',
        'topcoat',
        'twemoji',
        'typcn',
        'uil',
        'uim',
        'uis',
        'uit',
        'uiw',
        'unjs',
        'vaadin',
        'vs',
        'vscode-icons',
        'websymbol',
        'weui',
        'whh',
        'wi',
        'wpf',
        'zmdi',
        'zondicons',
      ],
      fetchTimeout: 1500,
    },
  },
  yg = u_(RC, IC);
function Je() {
  const e = Le();
  return (e._appConfig ||= dt(yg)), e._appConfig;
}
const LC = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function DC(e, t) {
  return e in ys && typeof ys[e] == 'object' && t in ys[e] ? ys[e][t] : '';
}
function qC(e, t) {
  return `${LC.map(
    (n) =>
      `--ui-color-${e}-${n}: var(--color-${
        t === 'neutral' ? 'old-neutral' : t
      }-${n}, ${DC(t, n)});`
  ).join(`
  `)}`;
}
function Sf(e, t) {
  return `--ui-${e}: var(--ui-color-${e}-${t});`;
}
const MC = Yt(() => {
    const e = Je(),
      t = Le(),
      n = S(() => {
        const { neutral: o, ...s } = e.ui.colors;
        return `@layer base {
  :root {
  ${Object.entries(e.ui.colors).map(([i, a]) => qC(i, a)).join(`
  `)}
  }
  :root, .light {
  ${Object.keys(s).map((i) => Sf(i, 500)).join(`
  `)}
  }
  .dark {
  ${Object.keys(s).map((i) => Sf(i, 400)).join(`
  `)}
  }
}`;
      }),
      r = {
        style: [
          { innerHTML: () => n.value, tagPriority: -2, id: 'nuxt-ui-colors' },
        ],
      };
    if (t.isHydrating && !t.payload.serverRendered) {
      const o = document.createElement('style');
      (o.innerHTML = n.value),
        o.setAttribute('data-nuxt-ui-colors', ''),
        document.head.appendChild(o),
        (r.script = [
          {
            innerHTML:
              "document.head.removeChild(document.querySelector('[data-nuxt-ui-colors]'))",
          },
        ]);
    }
    hc(r);
  }),
  NC = '__NUXT_COLOR_MODE__',
  Pa = 'nuxt-color-mode',
  $C = 'localStorage',
  BC = '$s';
function wc(...e) {
  const t = typeof e[e.length - 1] == 'string' ? e.pop() : void 0;
  typeof e[0] != 'string' && e.unshift(t);
  const [n, r] = e;
  if (!n || typeof n != 'string')
    throw new TypeError('[nuxt] [useState] key must be a string: ' + n);
  if (r !== void 0 && typeof r != 'function')
    throw new Error('[nuxt] [useState] init must be a function: ' + r);
  const o = BC + n,
    s = Le(),
    i = ot(s.payload.state, o);
  if (i.value === void 0 && r) {
    const a = r();
    if (ze(a)) return (s.payload.state[o] = a), a;
    i.value = a;
  }
  return i;
}
const En = window[NC] || {},
  VC = Yt((e) => {
    const t = wc('color-mode', () =>
      dt({
        preference: En.preference,
        value: En.value,
        unknown: !1,
        forced: !1,
      })
    ).value;
    _t().afterEach((s) => {
      const i = s.meta.colorMode;
      i && i !== 'system'
        ? ((t.value = i), (t.forced = !0))
        : (i === 'system' &&
            console.warn(
              'You cannot force the colorMode to system at the page level.'
            ),
          (t.forced = !1),
          (t.value =
            t.preference === 'system' ? En.getColorScheme() : t.preference));
    });
    let n;
    function r() {
      n ||
        !window.matchMedia ||
        ((n = window.matchMedia('(prefers-color-scheme: dark)')),
        n.addEventListener('change', () => {
          !t.forced &&
            t.preference === 'system' &&
            (t.value = En.getColorScheme());
        }));
    }
    function o(s, i) {
      switch (s) {
        case 'cookie':
          window.document.cookie = Pa + '=' + i;
          break;
        case 'sessionStorage':
          window.sessionStorage?.setItem(Pa, i);
          break;
        case 'localStorage':
        default:
          window.localStorage?.setItem(Pa, i);
      }
    }
    we(
      () => t.preference,
      (s) => {
        t.forced ||
          (s === 'system'
            ? ((t.value = En.getColorScheme()), r())
            : (t.value = s),
          o($C, s));
      },
      { immediate: !0 }
    ),
      we(
        () => t.value,
        (s, i) => {
          let a;
          (a = window.document.createElement('style')),
            a.appendChild(
              document.createTextNode(
                '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
              )
            ),
            window.document.head.appendChild(a),
            En.removeColorScheme(i),
            En.addColorScheme(s),
            window.getComputedStyle(a).opacity,
            document.head.removeChild(a);
        }
      ),
      t.preference === 'system' && r(),
      e.hook('app:mounted', () => {
        t.unknown &&
          ((t.preference = En.preference),
          (t.value = En.value),
          (t.unknown = !1));
      }),
      e.provide('colorMode', t);
  }),
  bg = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  os = (e, t, n, r = '') => {
    const o = e.split(':');
    if (e.slice(0, 1) === '@') {
      if (o.length < 2 || o.length > 3) return null;
      r = o.shift().slice(1);
    }
    if (o.length > 3 || !o.length) return null;
    if (o.length > 1) {
      const a = o.pop(),
        l = o.pop(),
        u = { provider: o.length > 0 ? o[0] : r, prefix: l, name: a };
      return t && !Ns(u) ? null : u;
    }
    const s = o[0],
      i = s.split('-');
    if (i.length > 1) {
      const a = { provider: r, prefix: i.shift(), name: i.join('-') };
      return t && !Ns(a) ? null : a;
    }
    if (n && r === '') {
      const a = { provider: r, prefix: '', name: s };
      return t && !Ns(a, n) ? null : a;
    }
    return null;
  },
  Ns = (e, t) => (e ? !!(((t && e.prefix === '') || e.prefix) && e.name) : !1),
  _g = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  fi = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  uo = Object.freeze({ ..._g, ...fi }),
  ml = Object.freeze({ ...uo, body: '', hidden: !1 });
function jC(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0),
    !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Af(e, t) {
  const n = jC(e, t);
  for (const r in ml)
    r in fi
      ? r in e && !(r in n) && (n[r] = fi[r])
      : r in t
      ? (n[r] = t[r])
      : r in e && (n[r] = e[r]);
  return n;
}
function FC(e, t) {
  const n = e.icons,
    r = e.aliases || Object.create(null),
    o = Object.create(null);
  function s(i) {
    if (n[i]) return (o[i] = []);
    if (!(i in o)) {
      o[i] = null;
      const a = r[i] && r[i].parent,
        l = a && s(a);
      l && (o[i] = [a].concat(l));
    }
    return o[i];
  }
  return Object.keys(n).concat(Object.keys(r)).forEach(s), o;
}
function zC(e, t, n) {
  const r = e.icons,
    o = e.aliases || Object.create(null);
  let s = {};
  function i(a) {
    s = Af(r[a] || o[a], s);
  }
  return i(t), n.forEach(i), Af(e, s);
}
function wg(e, t) {
  const n = [];
  if (typeof e != 'object' || typeof e.icons != 'object') return n;
  e.not_found instanceof Array &&
    e.not_found.forEach((o) => {
      t(o, null), n.push(o);
    });
  const r = FC(e);
  for (const o in r) {
    const s = r[o];
    s && (t(o, zC(e, o, s)), n.push(o));
  }
  return n;
}
const HC = { provider: '', aliases: {}, not_found: {}, ..._g };
function Ta(e, t) {
  for (const n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
  return !0;
}
function xg(e) {
  if (typeof e != 'object' || e === null) return null;
  const t = e;
  if (
    typeof t.prefix != 'string' ||
    !e.icons ||
    typeof e.icons != 'object' ||
    !Ta(e, HC)
  )
    return null;
  const n = t.icons;
  for (const o in n) {
    const s = n[o];
    if (!o || typeof s.body != 'string' || !Ta(s, ml)) return null;
  }
  const r = t.aliases || Object.create(null);
  for (const o in r) {
    const s = r[o],
      i = s.parent;
    if (!o || typeof i != 'string' || (!n[i] && !r[i]) || !Ta(s, ml))
      return null;
  }
  return t;
}
const Of = Object.create(null);
function UC(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: Object.create(null),
    missing: new Set(),
  };
}
function Er(e, t) {
  const n = Of[e] || (Of[e] = Object.create(null));
  return n[t] || (n[t] = UC(e, t));
}
function kg(e, t) {
  return xg(t)
    ? wg(t, (n, r) => {
        r ? (e.icons[n] = r) : e.missing.add(n);
      })
    : [];
}
function WC(e, t, n) {
  try {
    if (typeof n.body == 'string') return (e.icons[t] = { ...n }), !0;
  } catch {}
  return !1;
}
let Wo = !1;
function Cg(e) {
  return typeof e == 'boolean' && (Wo = e), Wo;
}
function xc(e) {
  const t = typeof e == 'string' ? os(e, !0, Wo) : e;
  if (t) {
    const n = Er(t.provider, t.prefix),
      r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function kc(e, t) {
  const n = os(e, !0, Wo);
  if (!n) return !1;
  const r = Er(n.provider, n.prefix);
  return t ? WC(r, n.name, t) : (r.missing.add(n.name), !0);
}
function KC(e, t) {
  if (typeof e != 'object') return !1;
  if ((typeof t != 'string' && (t = e.provider || ''), Wo && !t && !e.prefix)) {
    let o = !1;
    return (
      xg(e) &&
        ((e.prefix = ''),
        wg(e, (s, i) => {
          kc(s, i) && (o = !0);
        })),
      o
    );
  }
  const n = e.prefix;
  if (!Ns({ prefix: n, name: 'a' })) return !1;
  const r = Er(t, n);
  return !!kg(r, e);
}
function vl(e) {
  const t = xc(e);
  return t && { ...uo, ...t };
}
const Eg = Object.freeze({ width: null, height: null }),
  Pg = Object.freeze({ ...Eg, ...fi }),
  GC = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  YC = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Rf(e, t, n) {
  if (t === 1) return e;
  if (((n = n || 100), typeof e == 'number')) return Math.ceil(e * t * n) / n;
  if (typeof e != 'string') return e;
  const r = e.split(GC);
  if (r === null || !r.length) return e;
  const o = [];
  let s = r.shift(),
    i = YC.test(s);
  for (;;) {
    if (i) {
      const a = parseFloat(s);
      isNaN(a) ? o.push(s) : o.push(Math.ceil(a * t * n) / n);
    } else o.push(s);
    if (((s = r.shift()), s === void 0)) return o.join('');
    i = !i;
  }
}
function XC(e, t = 'defs') {
  let n = '';
  const r = e.indexOf('<' + t);
  for (; r >= 0; ) {
    const o = e.indexOf('>', r),
      s = e.indexOf('</' + t);
    if (o === -1 || s === -1) break;
    const i = e.indexOf('>', s);
    if (i === -1) break;
    (n += e.slice(o + 1, s).trim()),
      (e = e.slice(0, r).trim() + e.slice(i + 1));
  }
  return { defs: n, content: e };
}
function JC(e, t) {
  return e ? '<defs>' + e + '</defs>' + t : t;
}
function QC(e, t, n) {
  const r = XC(e);
  return JC(r.defs, t + r.content + n);
}
const ZC = (e) => e === 'unset' || e === 'undefined' || e === 'none';
function e1(e, t) {
  const n = { ...uo, ...e },
    r = { ...Pg, ...t },
    o = { left: n.left, top: n.top, width: n.width, height: n.height };
  let s = n.body;
  [n, r].forEach((g) => {
    const _ = [],
      x = g.hFlip,
      b = g.vFlip;
    let v = g.rotate;
    x
      ? b
        ? (v += 2)
        : (_.push(
            'translate(' +
              (o.width + o.left).toString() +
              ' ' +
              (0 - o.top).toString() +
              ')'
          ),
          _.push('scale(-1 1)'),
          (o.top = o.left = 0))
      : b &&
        (_.push(
          'translate(' +
            (0 - o.left).toString() +
            ' ' +
            (o.height + o.top).toString() +
            ')'
        ),
        _.push('scale(1 -1)'),
        (o.top = o.left = 0));
    let m;
    switch ((v < 0 && (v -= Math.floor(v / 4) * 4), (v = v % 4), v)) {
      case 1:
        (m = o.height / 2 + o.top),
          _.unshift('rotate(90 ' + m.toString() + ' ' + m.toString() + ')');
        break;
      case 2:
        _.unshift(
          'rotate(180 ' +
            (o.width / 2 + o.left).toString() +
            ' ' +
            (o.height / 2 + o.top).toString() +
            ')'
        );
        break;
      case 3:
        (m = o.width / 2 + o.left),
          _.unshift('rotate(-90 ' + m.toString() + ' ' + m.toString() + ')');
        break;
    }
    v % 2 === 1 &&
      (o.left !== o.top && ((m = o.left), (o.left = o.top), (o.top = m)),
      o.width !== o.height &&
        ((m = o.width), (o.width = o.height), (o.height = m))),
      _.length && (s = QC(s, '<g transform="' + _.join(' ') + '">', '</g>'));
  });
  const i = r.width,
    a = r.height,
    l = o.width,
    u = o.height;
  let c, f;
  i === null
    ? ((f = a === null ? '1em' : a === 'auto' ? u : a), (c = Rf(f, l / u)))
    : ((c = i === 'auto' ? l : i),
      (f = a === null ? Rf(c, u / l) : a === 'auto' ? u : a));
  const d = {},
    p = (g, _) => {
      ZC(_) || (d[g] = _.toString());
    };
  p('width', c), p('height', f);
  const h = [o.left, o.top, l, u];
  return (d.viewBox = h.join(' ')), { attributes: d, viewBox: h, body: s };
}
const t1 = /\sid="(\S+)"/g,
  n1 =
    'IconifyId' +
    Date.now().toString(16) +
    ((Math.random() * 16777216) | 0).toString(16);
let r1 = 0;
function o1(e, t = n1) {
  const n = [];
  let r;
  for (; (r = t1.exec(e)); ) n.push(r[1]);
  if (!n.length) return e;
  const o = 'suffix' + ((Math.random() * 16777216) | Date.now()).toString(16);
  return (
    n.forEach((s) => {
      const i = typeof t == 'function' ? t(s) : t + (r1++).toString(),
        a = s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      e = e.replace(
        new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', 'g'),
        '$1' + i + o + '$3'
      );
    }),
    (e = e.replace(new RegExp(o, 'g'), '')),
    e
  );
}
const yl = Object.create(null);
function Tg(e, t) {
  yl[e] = t;
}
function bl(e) {
  return yl[e] || yl[''];
}
function Cc(e) {
  let t;
  if (typeof e.resources == 'string') t = [e.resources];
  else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null;
  return {
    resources: t,
    path: e.path || '/',
    maxURL: e.maxURL || 500,
    rotate: e.rotate || 750,
    timeout: e.timeout || 5e3,
    random: e.random === !0,
    index: e.index || 0,
    dataAfterTimeout: e.dataAfterTimeout !== !1,
  };
}
const Ui = Object.create(null),
  wo = ['https://api.simplesvg.com', 'https://api.unisvg.com'],
  $s = [];
for (; wo.length > 0; )
  wo.length === 1 || Math.random() > 0.5
    ? $s.push(wo.shift())
    : $s.push(wo.pop());
Ui[''] = Cc({ resources: ['https://api.iconify.design'].concat($s) });
function Sg(e, t) {
  const n = Cc(t);
  return n === null ? !1 : ((Ui[e] = n), !0);
}
function Wi(e) {
  return Ui[e];
}
function s1() {
  return Object.keys(Ui);
}
const i1 = () => {
  let e;
  try {
    if (((e = fetch), typeof e == 'function')) return e;
  } catch {}
};
let di = i1();
function a1(e) {
  di = e;
}
function l1() {
  return di;
}
function c1(e, t) {
  const n = Wi(e);
  if (!n) return 0;
  let r;
  if (!n.maxURL) r = 0;
  else {
    let o = 0;
    n.resources.forEach((i) => {
      o = Math.max(o, i.length);
    });
    const s = t + '.json?icons=';
    r = n.maxURL - o - n.path.length - s.length;
  }
  return r;
}
function u1(e) {
  return e === 404;
}
const f1 = (e, t, n) => {
  const r = [],
    o = c1(e, t),
    s = 'icons';
  let i = { type: s, provider: e, prefix: t, icons: [] },
    a = 0;
  return (
    n.forEach((l, u) => {
      (a += l.length + 1),
        a >= o &&
          u > 0 &&
          (r.push(i),
          (i = { type: s, provider: e, prefix: t, icons: [] }),
          (a = l.length)),
        i.icons.push(l);
    }),
    r.push(i),
    r
  );
};
function d1(e) {
  if (typeof e == 'string') {
    const t = Wi(e);
    if (t) return t.path;
  }
  return '/';
}
const p1 = (e, t, n) => {
    if (!di) {
      n('abort', 424);
      return;
    }
    let r = d1(t.provider);
    switch (t.type) {
      case 'icons': {
        const s = t.prefix,
          a = t.icons.join(','),
          l = new URLSearchParams({ icons: a });
        r += s + '.json?' + l.toString();
        break;
      }
      case 'custom': {
        const s = t.uri;
        r += s.slice(0, 1) === '/' ? s.slice(1) : s;
        break;
      }
      default:
        n('abort', 400);
        return;
    }
    let o = 503;
    di(e + r)
      .then((s) => {
        const i = s.status;
        if (i !== 200) {
          setTimeout(() => {
            n(u1(i) ? 'abort' : 'next', i);
          });
          return;
        }
        return (o = 501), s.json();
      })
      .then((s) => {
        if (typeof s != 'object' || s === null) {
          setTimeout(() => {
            s === 404 ? n('abort', s) : n('next', o);
          });
          return;
        }
        setTimeout(() => {
          n('success', s);
        });
      })
      .catch(() => {
        n('next', o);
      });
  },
  h1 = { prepare: f1, send: p1 };
function g1(e) {
  const t = { loaded: [], missing: [], pending: [] },
    n = Object.create(null);
  e.sort((o, s) =>
    o.provider !== s.provider
      ? o.provider.localeCompare(s.provider)
      : o.prefix !== s.prefix
      ? o.prefix.localeCompare(s.prefix)
      : o.name.localeCompare(s.name)
  );
  let r = { provider: '', prefix: '', name: '' };
  return (
    e.forEach((o) => {
      if (
        r.name === o.name &&
        r.prefix === o.prefix &&
        r.provider === o.provider
      )
        return;
      r = o;
      const s = o.provider,
        i = o.prefix,
        a = o.name,
        l = n[s] || (n[s] = Object.create(null)),
        u = l[i] || (l[i] = Er(s, i));
      let c;
      a in u.icons
        ? (c = t.loaded)
        : i === '' || u.missing.has(a)
        ? (c = t.missing)
        : (c = t.pending);
      const f = { provider: s, prefix: i, name: a };
      c.push(f);
    }),
    t
  );
}
function Ag(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function m1(e) {
  e.pendingCallbacksFlag ||
    ((e.pendingCallbacksFlag = !0),
    setTimeout(() => {
      e.pendingCallbacksFlag = !1;
      const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
      if (!t.length) return;
      let n = !1;
      const r = e.provider,
        o = e.prefix;
      t.forEach((s) => {
        const i = s.icons,
          a = i.pending.length;
        (i.pending = i.pending.filter((l) => {
          if (l.prefix !== o) return !0;
          const u = l.name;
          if (e.icons[u]) i.loaded.push({ provider: r, prefix: o, name: u });
          else if (e.missing.has(u))
            i.missing.push({ provider: r, prefix: o, name: u });
          else return (n = !0), !0;
          return !1;
        })),
          i.pending.length !== a &&
            (n || Ag([e], s.id),
            s.callback(
              i.loaded.slice(0),
              i.missing.slice(0),
              i.pending.slice(0),
              s.abort
            ));
      });
    }));
}
let v1 = 0;
function y1(e, t, n) {
  const r = v1++,
    o = Ag.bind(null, n, r);
  if (!t.pending.length) return o;
  const s = { id: r, icons: t, callback: e, abort: o };
  return (
    n.forEach((i) => {
      (i.loaderCallbacks || (i.loaderCallbacks = [])).push(s);
    }),
    o
  );
}
function b1(e, t = !0, n = !1) {
  const r = [];
  return (
    e.forEach((o) => {
      const s = typeof o == 'string' ? os(o, t, n) : o;
      s && r.push(s);
    }),
    r
  );
}
var _1 = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1,
};
function w1(e, t, n, r) {
  const o = e.resources.length,
    s = e.random ? Math.floor(Math.random() * o) : e.index;
  let i;
  if (e.random) {
    let C = e.resources.slice(0);
    for (i = []; C.length > 1; ) {
      const E = Math.floor(Math.random() * C.length);
      i.push(C[E]), (C = C.slice(0, E).concat(C.slice(E + 1)));
    }
    i = i.concat(C);
  } else i = e.resources.slice(s).concat(e.resources.slice(0, s));
  const a = Date.now();
  let l = 'pending',
    u = 0,
    c,
    f = null,
    d = [],
    p = [];
  typeof r == 'function' && p.push(r);
  function h() {
    f && (clearTimeout(f), (f = null));
  }
  function g() {
    l === 'pending' && (l = 'aborted'),
      h(),
      d.forEach((C) => {
        C.status === 'pending' && (C.status = 'aborted');
      }),
      (d = []);
  }
  function _(C, E) {
    E && (p = []), typeof C == 'function' && p.push(C);
  }
  function x() {
    return {
      startTime: a,
      payload: t,
      status: l,
      queriesSent: u,
      queriesPending: d.length,
      subscribe: _,
      abort: g,
    };
  }
  function b() {
    (l = 'failed'),
      p.forEach((C) => {
        C(void 0, c);
      });
  }
  function v() {
    d.forEach((C) => {
      C.status === 'pending' && (C.status = 'aborted');
    }),
      (d = []);
  }
  function m(C, E, A) {
    const R = E !== 'success';
    switch (((d = d.filter((D) => D !== C)), l)) {
      case 'pending':
        break;
      case 'failed':
        if (R || !e.dataAfterTimeout) return;
        break;
      default:
        return;
    }
    if (E === 'abort') {
      (c = A), b();
      return;
    }
    if (R) {
      (c = A), d.length || (i.length ? w() : b());
      return;
    }
    if ((h(), v(), !e.random)) {
      const D = e.resources.indexOf(C.resource);
      D !== -1 && D !== e.index && (e.index = D);
    }
    (l = 'completed'),
      p.forEach((D) => {
        D(A);
      });
  }
  function w() {
    if (l !== 'pending') return;
    h();
    const C = i.shift();
    if (C === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          h(), l === 'pending' && (v(), b());
        }, e.timeout);
        return;
      }
      b();
      return;
    }
    const E = {
      status: 'pending',
      resource: C,
      callback: (A, R) => {
        m(E, A, R);
      },
    };
    d.push(E), u++, (f = setTimeout(w, e.rotate)), n(C, t, E.callback);
  }
  return setTimeout(w), x;
}
function Og(e) {
  const t = { ..._1, ...e };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === 'pending');
  }
  function o(a, l, u) {
    const c = w1(t, a, l, (f, d) => {
      r(), u && u(f, d);
    });
    return n.push(c), c;
  }
  function s(a) {
    return n.find((l) => a(l)) || null;
  }
  return {
    query: o,
    find: s,
    setIndex: (a) => {
      t.index = a;
    },
    getIndex: () => t.index,
    cleanup: r,
  };
}
function If() {}
const Sa = Object.create(null);
function x1(e) {
  if (!Sa[e]) {
    const t = Wi(e);
    if (!t) return;
    const n = Og(t),
      r = { config: t, redundancy: n };
    Sa[e] = r;
  }
  return Sa[e];
}
function Rg(e, t, n) {
  let r, o;
  if (typeof e == 'string') {
    const s = bl(e);
    if (!s) return n(void 0, 424), If;
    o = s.send;
    const i = x1(e);
    i && (r = i.redundancy);
  } else {
    const s = Cc(e);
    if (s) {
      r = Og(s);
      const i = e.resources ? e.resources[0] : '',
        a = bl(i);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), If) : r.query(t, o, n)().abort;
}
function Lf() {}
function k1(e) {
  e.iconsLoaderFlag ||
    ((e.iconsLoaderFlag = !0),
    setTimeout(() => {
      (e.iconsLoaderFlag = !1), m1(e);
    }));
}
function C1(e) {
  const t = [],
    n = [];
  return (
    e.forEach((r) => {
      (r.match(bg) ? t : n).push(r);
    }),
    { valid: t, invalid: n }
  );
}
function xo(e, t, n) {
  function r() {
    const o = e.pendingIcons;
    t.forEach((s) => {
      o && o.delete(s), e.icons[s] || e.missing.add(s);
    });
  }
  if (n && typeof n == 'object')
    try {
      if (!kg(e, n).length) {
        r();
        return;
      }
    } catch (o) {
      console.error(o);
    }
  r(), k1(e);
}
function Df(e, t) {
  e instanceof Promise
    ? e
        .then((n) => {
          t(n);
        })
        .catch(() => {
          t(null);
        })
    : t(e);
}
function E1(e, t) {
  e.iconsToLoad
    ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort())
    : (e.iconsToLoad = t),
    e.iconsQueueFlag ||
      ((e.iconsQueueFlag = !0),
      setTimeout(() => {
        e.iconsQueueFlag = !1;
        const { provider: n, prefix: r } = e,
          o = e.iconsToLoad;
        if ((delete e.iconsToLoad, !o || !o.length)) return;
        const s = e.loadIcon;
        if (e.loadIcons && (o.length > 1 || !s)) {
          Df(e.loadIcons(o, r, n), (c) => {
            xo(e, o, c);
          });
          return;
        }
        if (s) {
          o.forEach((c) => {
            const f = s(c, r, n);
            Df(f, (d) => {
              const p = d ? { prefix: r, icons: { [c]: d } } : null;
              xo(e, [c], p);
            });
          });
          return;
        }
        const { valid: i, invalid: a } = C1(o);
        if ((a.length && xo(e, a, null), !i.length)) return;
        const l = r.match(bg) ? bl(n) : null;
        if (!l) {
          xo(e, i, null);
          return;
        }
        l.prepare(n, r, i).forEach((c) => {
          Rg(n, c, (f) => {
            xo(e, c.icons, f);
          });
        });
      }));
}
const Ig = (e, t) => {
    const n = b1(e, !0, Cg()),
      r = g1(n);
    if (!r.pending.length) {
      let l = !0;
      return (
        t &&
          setTimeout(() => {
            l && t(r.loaded, r.missing, r.pending, Lf);
          }),
        () => {
          l = !1;
        }
      );
    }
    const o = Object.create(null),
      s = [];
    let i, a;
    return (
      r.pending.forEach((l) => {
        const { provider: u, prefix: c } = l;
        if (c === a && u === i) return;
        (i = u), (a = c), s.push(Er(u, c));
        const f = o[u] || (o[u] = Object.create(null));
        f[c] || (f[c] = []);
      }),
      r.pending.forEach((l) => {
        const { provider: u, prefix: c, name: f } = l,
          d = Er(u, c),
          p = d.pendingIcons || (d.pendingIcons = new Set());
        p.has(f) || (p.add(f), o[u][c].push(f));
      }),
      s.forEach((l) => {
        const u = o[l.provider][l.prefix];
        u.length && E1(l, u);
      }),
      t ? y1(t, r, s) : Lf
    );
  },
  P1 = (e) =>
    new Promise((t, n) => {
      const r = typeof e == 'string' ? os(e, !0) : e;
      if (!r) {
        n(e);
        return;
      }
      Ig([r || e], (o) => {
        if (o.length && r) {
          const s = xc(r);
          if (s) {
            t({ ...uo, ...s });
            return;
          }
        }
        n(e);
      });
    });
function T1(e, t, n) {
  Er('', t).loadIcons = e;
}
function S1(e, t) {
  const n = { ...e };
  for (const r in t) {
    const o = t[r],
      s = typeof o;
    r in Eg
      ? (o === null || (o && (s === 'string' || s === 'number'))) && (n[r] = o)
      : s === typeof n[r] && (n[r] = r === 'rotate' ? o % 4 : o);
  }
  return n;
}
const A1 = /[\s,]+/;
function O1(e, t) {
  t.split(A1).forEach((n) => {
    switch (n.trim()) {
      case 'horizontal':
        e.hFlip = !0;
        break;
      case 'vertical':
        e.vFlip = !0;
        break;
    }
  });
}
function R1(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, '');
  function r(o) {
    for (; o < 0; ) o += 4;
    return o % 4;
  }
  if (n === '') {
    const o = parseInt(e);
    return isNaN(o) ? 0 : r(o);
  } else if (n !== e) {
    let o = 0;
    switch (n) {
      case '%':
        o = 25;
        break;
      case 'deg':
        o = 90;
    }
    if (o) {
      let s = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(s) ? 0 : ((s = s / o), s % 1 === 0 ? r(s) : 0);
    }
  }
  return t;
}
function I1(e, t) {
  let n =
    e.indexOf('xlink:') === -1
      ? ''
      : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t) n += ' ' + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + '>' + e + '</svg>';
}
function L1(e) {
  return e
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/\s+/g, ' ');
}
function D1(e) {
  return 'data:image/svg+xml,' + L1(e);
}
function q1(e) {
  return 'url("' + D1(e) + '")';
}
const qf = { ...Pg, inline: !1 },
  M1 = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'aria-hidden': !0,
    role: 'img',
  },
  N1 = { display: 'inline-block' },
  _l = { backgroundColor: 'currentColor' },
  Lg = { backgroundColor: 'transparent' },
  Mf = { Image: 'var(--svg)', Repeat: 'no-repeat', Size: '100% 100%' },
  Nf = { webkitMask: _l, mask: _l, background: Lg };
for (const e in Nf) {
  const t = Nf[e];
  for (const n in Mf) t[e + n] = Mf[n];
}
const Bs = {};
['horizontal', 'vertical'].forEach((e) => {
  const t = e.slice(0, 1) + 'Flip';
  (Bs[e + '-flip'] = t),
    (Bs[e.slice(0, 1) + '-flip'] = t),
    (Bs[e + 'Flip'] = t);
});
function $f(e) {
  return e + (e.match(/^[-0-9.]+$/) ? 'px' : '');
}
const Bf = (e, t) => {
  const n = S1(qf, t),
    r = { ...M1 },
    o = t.mode || 'svg',
    s = {},
    i = t.style,
    a = typeof i == 'object' && !(i instanceof Array) ? i : {};
  for (let g in t) {
    const _ = t[g];
    if (_ !== void 0)
      switch (g) {
        case 'icon':
        case 'style':
        case 'onLoad':
        case 'mode':
        case 'ssr':
          break;
        case 'inline':
        case 'hFlip':
        case 'vFlip':
          n[g] = _ === !0 || _ === 'true' || _ === 1;
          break;
        case 'flip':
          typeof _ == 'string' && O1(n, _);
          break;
        case 'color':
          s.color = _;
          break;
        case 'rotate':
          typeof _ == 'string'
            ? (n[g] = R1(_))
            : typeof _ == 'number' && (n[g] = _);
          break;
        case 'ariaHidden':
        case 'aria-hidden':
          _ !== !0 && _ !== 'true' && delete r['aria-hidden'];
          break;
        default: {
          const x = Bs[g];
          x
            ? (_ === !0 || _ === 'true' || _ === 1) && (n[x] = !0)
            : qf[g] === void 0 && (r[g] = _);
        }
      }
  }
  const l = e1(e, n),
    u = l.attributes;
  if ((n.inline && (s.verticalAlign = '-0.125em'), o === 'svg')) {
    (r.style = { ...s, ...a }), Object.assign(r, u);
    let g = 0,
      _ = t.id;
    return (
      typeof _ == 'string' && (_ = _.replace(/-/g, '_')),
      (r.innerHTML = o1(l.body, _ ? () => _ + 'ID' + g++ : 'iconifyVue')),
      Be('svg', r)
    );
  }
  const { body: c, width: f, height: d } = e,
    p = o === 'mask' || (o === 'bg' ? !1 : c.indexOf('currentColor') !== -1),
    h = I1(c, { ...u, width: f + '', height: d + '' });
  return (
    (r.style = {
      ...s,
      '--svg': q1(h),
      width: $f(u.width),
      height: $f(u.height),
      ...N1,
      ...(p ? _l : Lg),
      ...a,
    }),
    Be('span', r)
  );
};
Cg(!0);
Tg('', h1);
if (typeof document < 'u' && typeof window < 'u') {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload,
      n = 'Invalid IconifyPreload syntax.';
    typeof t == 'object' &&
      t !== null &&
      (t instanceof Array ? t : [t]).forEach((r) => {
        try {
          (typeof r != 'object' ||
            r === null ||
            r instanceof Array ||
            typeof r.icons != 'object' ||
            typeof r.prefix != 'string' ||
            !KC(r)) &&
            console.error(n);
        } catch {
          console.error(n);
        }
      });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == 'object' && t !== null)
      for (let n in t) {
        const r = 'IconifyProviders[' + n + '] is invalid.';
        try {
          const o = t[n];
          if (typeof o != 'object' || !o || o.resources === void 0) continue;
          Sg(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
const $1 = { ...uo, body: '' },
  B1 = J(
    (e, { emit: t }) => {
      const n = j(null);
      function r() {
        n.value && (n.value.abort?.(), (n.value = null));
      }
      const o = j(!!e.ssr),
        s = j(''),
        i = Pe(null);
      function a() {
        const u = e.icon;
        if (typeof u == 'object' && u !== null && typeof u.body == 'string')
          return (s.value = ''), { data: u };
        let c;
        if (typeof u != 'string' || (c = os(u, !1, !0)) === null) return null;
        let f = xc(c);
        if (!f) {
          const h = n.value;
          return (
            (!h || h.name !== u) &&
              (f === null
                ? (n.value = { name: u })
                : (n.value = { name: u, abort: Ig([c], l) })),
            null
          );
        }
        r(),
          s.value !== u &&
            ((s.value = u),
            Ze(() => {
              t('load', u);
            }));
        const d = e.customise;
        if (d) {
          f = Object.assign({}, f);
          const h = d(f.body, c.name, c.prefix, c.provider);
          typeof h == 'string' && (f.body = h);
        }
        const p = ['iconify'];
        return (
          c.prefix !== '' && p.push('iconify--' + c.prefix),
          c.provider !== '' && p.push('iconify--' + c.provider),
          { data: f, classes: p }
        );
      }
      function l() {
        const u = a();
        u ? u.data !== i.value?.data && (i.value = u) : (i.value = null);
      }
      return (
        o.value
          ? l()
          : Ye(() => {
              (o.value = !0), l();
            }),
        we(() => e.icon, l),
        wn(r),
        () => {
          const u = i.value;
          if (!u) return Bf($1, e);
          let c = e;
          return (
            u.classes && (c = { ...e, class: u.classes.join(' ') }),
            Bf({ ...uo, ...u.data }, c)
          );
        }
      );
    },
    {
      props: [
        'icon',
        'mode',
        'ssr',
        'width',
        'height',
        'style',
        'color',
        'inline',
        'rotate',
        'hFlip',
        'horizontalFlip',
        'vFlip',
        'verticalFlip',
        'flip',
        'id',
        'ariaHidden',
        'customise',
        'title',
      ],
      emits: ['load'],
    }
  ),
  Vf = {
    getAPIConfig: Wi,
    setAPIModule: Tg,
    sendAPIQuery: Rg,
    setFetch: a1,
    getFetch: l1,
    listAPIProviders: s1,
  },
  V1 = Yt({
    name: '@nuxt/icon',
    setup() {
      const e = Ar(),
        t = Je().icon;
      Vf.setFetch($fetch.native);
      const n = [];
      if (t.provider === 'server') {
        const o = e.app?.baseURL?.replace(/\/$/, '') ?? '';
        n.push(o + (t.localApiEndpoint || '/api/_nuxt_icon')),
          (t.fallbackToApi === !0 || t.fallbackToApi === 'client-only') &&
            n.push(t.iconifyApiEndpoint);
      } else
        t.provider === 'none'
          ? Vf.setFetch(() => Promise.resolve(new Response()))
          : n.push(t.iconifyApiEndpoint);
      async function r(o, s) {
        try {
          const i = await $fetch(n[0] + '/' + s + '.json', {
            query: { icons: o.join(',') },
          });
          if (!i || i.prefix !== s || !i.icons)
            throw new Error('Invalid data' + JSON.stringify(i));
          return i;
        } catch (i) {
          return console.error('Failed to load custom icons', i), null;
        }
      }
      Sg('', { resources: n });
      for (const o of t.customCollections || []) o && T1(r, o);
    },
  }),
  j1 = [rw, lw, Rx, Lx, Dx, qx, Nx, SC, OC, MC, VC, V1],
  Dg = (e = 'RouteProvider') =>
    J({
      name: e,
      props: {
        route: { type: Object, required: !0 },
        vnode: Object,
        vnodeRef: Object,
        renderKey: String,
        trackRootNodes: Boolean,
      },
      setup(t) {
        const n = t.renderKey,
          r = t.route,
          o = {};
        for (const s in t.route)
          Object.defineProperty(o, s, {
            get: () => (n === t.renderKey ? t.route[s] : r[s]),
            enumerable: !0,
          });
        return (
          bt(Cr, Zt(o)),
          () => (t.vnode ? Be(t.vnode, { ref: t.vnodeRef }) : t.vnode)
        );
      },
    }),
  F1 = Dg(),
  jf = new WeakMap(),
  z1 = J({
    name: 'NuxtPage',
    inheritAttrs: !1,
    props: {
      name: { type: String },
      transition: { type: [Boolean, Object], default: void 0 },
      keepalive: { type: [Boolean, Object], default: void 0 },
      route: { type: Object },
      pageKey: { type: [Function, String], default: null },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      const o = Le(),
        s = j(),
        i = $e(Cr, null);
      let a;
      r({ pageRef: s });
      const l = $e($h, null);
      let u;
      const c = o.deferHydration();
      if (o.isHydrating) {
        const d = o.hooks.hookOnce('app:error', c);
        _t().beforeEach(d);
      }
      e.pageKey &&
        we(
          () => e.pageKey,
          (d, p) => {
            d !== p && o.callHook('page:loading:start');
          }
        );
      let f = !1;
      {
        const d = _t().beforeResolve(() => {
          f = !1;
        });
        Sr(() => {
          d();
        });
      }
      return () =>
        Be(
          pg,
          { name: e.name, route: e.route, ...t },
          {
            default: (d) => {
              const p = U1(i, d.route, d.Component),
                h = i && i.matched.length === d.route.matched.length;
              if (!d.Component) {
                if (u && !h) return u;
                c();
                return;
              }
              if (u && l && !l.isCurrent(d.route)) return u;
              if (p && i && (!l || l?.isCurrent(i))) return h ? u : null;
              const g = pl(d, e.pageKey),
                _ = W1(i, d.route, d.Component);
              !o.isHydrating &&
                a === g &&
                !_ &&
                Ze(() => {
                  (f = !0), o.callHook('page:loading:end');
                }),
                (a = g);
              const x = !!(e.transition ?? d.route.meta.pageTransition ?? Gu),
                b =
                  x &&
                  H1([
                    e.transition,
                    d.route.meta.pageTransition,
                    Gu,
                    {
                      onAfterLeave() {
                        delete o._runningTransition,
                          o.callHook('page:transition:finish', d.Component);
                      },
                    },
                  ]),
                v = e.keepalive ?? d.route.meta.keepalive ?? Q0;
              return (
                (u = gg(
                  x && b,
                  yx(
                    v,
                    Be(
                      sc,
                      {
                        suspensible: !0,
                        onPending: () => {
                          x && (o._runningTransition = !0),
                            o.callHook('page:start', d.Component);
                        },
                        onResolve: () => {
                          Ze(() =>
                            o
                              .callHook('page:finish', d.Component)
                              .then(() => {
                                if ((delete o._runningTransition, !f && !_))
                                  return (
                                    (f = !0), o.callHook('page:loading:end')
                                  );
                              })
                              .finally(c)
                          );
                        },
                      },
                      {
                        default: () => {
                          const m = {
                            key: g || void 0,
                            vnode: n.default ? K1(n.default, d) : d.Component,
                            route: d.route,
                            renderKey: g || void 0,
                            trackRootNodes: x,
                            vnodeRef: s,
                          };
                          if (!v) return Be(F1, m);
                          const w = d.Component.type,
                            C = w;
                          let E = jf.get(C);
                          return (
                            E || ((E = Dg(w.name || w.__name)), jf.set(C, E)),
                            Be(E, m)
                          );
                        },
                      }
                    )
                  )
                ).default()),
                u
              );
            },
          }
        );
    },
  });
function H1(e) {
  const t = [];
  for (const n of e)
    n &&
      t.push({
        ...n,
        onAfterLeave: n.onAfterLeave ? _c(n.onAfterLeave) : void 0,
      });
  return Mt(...t);
}
function U1(e, t, n) {
  if (!e) return !1;
  const r = t.matched.findIndex((o) => o.components?.default === n?.type);
  return !r || r === -1
    ? !1
    : t.matched
        .slice(0, r)
        .some(
          (o, s) => o.components?.default !== e.matched[s]?.components?.default
        ) ||
        (n &&
          pl({ route: t, Component: n }) !== pl({ route: e, Component: n }));
}
function W1(e, t, n) {
  return e
    ? t.matched.findIndex((o) => o.components?.default === n?.type) <
        t.matched.length - 1
    : !1;
}
function K1(e, t) {
  const n = e(t);
  return n.length === 1 ? Be(n[0]) : Be(Te, void 0, n);
}
function wl(e) {
  return typeof e == 'string' ? `'${e}'` : new G1().serialize(e);
}
const G1 = (function () {
  class e {
    #e = new Map();
    compare(n, r) {
      const o = typeof n,
        s = typeof r;
      return o === 'string' && s === 'string'
        ? n.localeCompare(r)
        : o === 'number' && s === 'number'
        ? n - r
        : String.prototype.localeCompare.call(
            this.serialize(n, !0),
            this.serialize(r, !0)
          );
    }
    serialize(n, r) {
      if (n === null) return 'null';
      switch (typeof n) {
        case 'string':
          return r ? n : `'${n}'`;
        case 'bigint':
          return `${n}n`;
        case 'object':
          return this.$object(n);
        case 'function':
          return this.$function(n);
      }
      return String(n);
    }
    serializeObject(n) {
      const r = Object.prototype.toString.call(n);
      if (r !== '[object Object]')
        return this.serializeBuiltInType(
          r.length < 10 ? `unknown:${r}` : r.slice(8, -1),
          n
        );
      const o = n.constructor,
        s = o === Object || o === void 0 ? '' : o.name;
      if (s !== '' && globalThis[s] === o)
        return this.serializeBuiltInType(s, n);
      if (typeof n.toJSON == 'function') {
        const i = n.toJSON();
        return (
          s +
          (i !== null && typeof i == 'object'
            ? this.$object(i)
            : `(${this.serialize(i)})`)
        );
      }
      return this.serializeObjectEntries(s, Object.entries(n));
    }
    serializeBuiltInType(n, r) {
      const o = this['$' + n];
      if (o) return o.call(this, r);
      if (typeof r?.entries == 'function')
        return this.serializeObjectEntries(n, r.entries());
      throw new Error(`Cannot serialize ${n}`);
    }
    serializeObjectEntries(n, r) {
      const o = Array.from(r).sort((i, a) => this.compare(i[0], a[0]));
      let s = `${n}{`;
      for (let i = 0; i < o.length; i++) {
        const [a, l] = o[i];
        (s += `${this.serialize(a, !0)}:${this.serialize(l)}`),
          i < o.length - 1 && (s += ',');
      }
      return s + '}';
    }
    $object(n) {
      let r = this.#e.get(n);
      return (
        r === void 0 &&
          (this.#e.set(n, `#${this.#e.size}`),
          (r = this.serializeObject(n)),
          this.#e.set(n, r)),
        r
      );
    }
    $function(n) {
      const r = Function.prototype.toString.call(n);
      return r.slice(-15) === '[native code] }'
        ? `${n.name || ''}()[native]`
        : `${n.name}(${n.length})${r.replace(/\s*\n\s*/g, '')}`;
    }
    $Array(n) {
      let r = '[';
      for (let o = 0; o < n.length; o++)
        (r += this.serialize(n[o])), o < n.length - 1 && (r += ',');
      return r + ']';
    }
    $Date(n) {
      try {
        return `Date(${n.toISOString()})`;
      } catch {
        return 'Date(null)';
      }
    }
    $ArrayBuffer(n) {
      return `ArrayBuffer[${new Uint8Array(n).join(',')}]`;
    }
    $Set(n) {
      return `Set${this.$Array(
        Array.from(n).sort((r, o) => this.compare(r, o))
      )}`;
    }
    $Map(n) {
      return this.serializeObjectEntries('Map', n.entries());
    }
  }
  for (const t of ['Error', 'RegExp', 'URL'])
    e.prototype['$' + t] = function (n) {
      return `${t}(${n})`;
    };
  for (const t of [
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
  ])
    e.prototype['$' + t] = function (n) {
      return `${t}[${n.join(',')}]`;
    };
  for (const t of ['BigInt64Array', 'BigUint64Array'])
    e.prototype['$' + t] = function (n) {
      return `${t}[${n.join('n,')}${n.length > 0 ? 'n' : ''}]`;
    };
  return e;
})();
function oo(e, t) {
  return e === t || wl(e) === wl(t);
}
function Rt(e, t) {
  const n = typeof e == 'string' && !t ? `${e}Context` : t,
    r = Symbol(n);
  return [
    (i) => {
      const a = $e(r, i);
      if (a || a === null) return a;
      throw new Error(
        `Injection \`${r.toString()}\` not found. Component must be used within ${
          Array.isArray(e)
            ? `one of the following components: ${e.join(', ')}`
            : `\`${e}\``
        }`
      );
    },
    (i) => (bt(r, i), i),
  ];
}
function St() {
  let e = document.activeElement;
  if (e == null) return null;
  for (
    ;
    e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null;

  )
    e = e.shadowRoot.activeElement;
  return e;
}
function qg(e, t, n) {
  const r = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
function Ec(e) {
  return e == null;
}
function Y1(e, t) {
  return Ec(e) ? !1 : Array.isArray(e) ? e.some((n) => oo(n, t)) : oo(e, t);
}
function Pc(e) {
  return e ? e.flatMap((t) => (t.type === Te ? Pc(t.children) : [t])) : [];
}
const X1 = ['INPUT', 'TEXTAREA'];
function Tc(e, t, n, r = {}) {
  if (!t || (r.enableIgnoredElement && X1.includes(t.nodeName))) return null;
  const {
      arrowKeyOptions: o = 'both',
      attributeName: s = '[data-reka-collection-item]',
      itemsArray: i = [],
      loop: a = !0,
      dir: l = 'ltr',
      preventScroll: u = !0,
      focus: c = !1,
    } = r,
    [f, d, p, h, g, _] = [
      e.key === 'ArrowRight',
      e.key === 'ArrowLeft',
      e.key === 'ArrowUp',
      e.key === 'ArrowDown',
      e.key === 'Home',
      e.key === 'End',
    ],
    x = p || h,
    b = f || d;
  if (
    !g &&
    !_ &&
    ((!x && !b) || (o === 'vertical' && b) || (o === 'horizontal' && x))
  )
    return null;
  const v = n ? Array.from(n.querySelectorAll(s)) : i;
  if (!v.length) return null;
  u && e.preventDefault();
  let m = null;
  return (
    b || x
      ? (m = Mg(v, t, { goForward: x ? h : l === 'ltr' ? f : d, loop: a }))
      : g
      ? (m = v.at(0) || null)
      : _ && (m = v.at(-1) || null),
    c && m?.focus(),
    m
  );
}
function Mg(e, t, n, r = e.length) {
  if (--r === 0) return null;
  const o = e.indexOf(t),
    s = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (s < 0 || s >= e.length)) return null;
  const i = (s + e.length) % e.length,
    a = e[i];
  return a
    ? a.hasAttribute('disabled') && a.getAttribute('disabled') !== 'false'
      ? Mg(e, a, n, r)
      : a
    : null;
}
const [Ng, J1] = Rt('ConfigProvider');
var Q1 = J({
    inheritAttrs: !1,
    __name: 'ConfigProvider',
    props: {
      dir: { type: String, required: !1, default: 'ltr' },
      locale: { type: String, required: !1, default: 'en' },
      scrollBody: { type: [Boolean, Object], required: !1, default: !0 },
      nonce: { type: String, required: !1, default: void 0 },
      useId: { type: Function, required: !1, default: void 0 },
    },
    setup(e) {
      const t = e,
        { dir: n, locale: r, scrollBody: o, nonce: s } = Ot(t);
      return (
        J1({ dir: n, locale: r, scrollBody: o, nonce: s, useId: t.useId }),
        (i, a) => B(i.$slots, 'default')
      );
    },
  }),
  Z1 = Q1;
function eE(e, t) {
  var n;
  const r = Pe();
  return (
    it(
      () => {
        r.value = e();
      },
      { ...t, flush: (n = void 0) != null ? n : 'sync' }
    ),
    yn(r)
  );
}
function tE(e, t) {
  let n, r, o;
  const s = Pe(!0),
    i = () => {
      (s.value = !0), o();
    };
  we(e, i, { flush: 'sync' });
  const a = typeof t == 'function' ? t : t.get,
    l = typeof t == 'function' ? void 0 : t.set,
    u = Zo(
      (c, f) => (
        (r = c),
        (o = f),
        {
          get() {
            return s.value && ((n = a(n)), (s.value = !1)), r(), n;
          },
          set(d) {
            l?.(d);
          },
        }
      )
    );
  return Object.isExtensible(u) && (u.trigger = i), u;
}
function Or(e) {
  return lo() ? (Ai(e), !0) : !1;
}
function nE() {
  const e = new Set(),
    t = (s) => {
      e.delete(s);
    };
  return {
    on: (s) => {
      e.add(s);
      const i = () => t(s);
      return Or(i), { off: i };
    },
    off: t,
    trigger: (...s) => Promise.all(Array.from(e).map((i) => i(...s))),
    clear: () => {
      e.clear();
    },
  };
}
function rE(e) {
  let t = !1,
    n;
  const r = Si(!0);
  return (...o) => (t || ((n = r.run(() => e(...o))), (t = !0)), n);
}
function oE(e) {
  let t = 0,
    n,
    r;
  const o = () => {
    (t -= 1), r && t <= 0 && (r.stop(), (n = void 0), (r = void 0));
  };
  return (...s) => (
    (t += 1), r || ((r = Si(!0)), (n = r.run(() => e(...s)))), Or(o), n
  );
}
function sE(e) {
  if (!ze(e)) return dt(e);
  const t = new Proxy(
    {},
    {
      get(n, r, o) {
        return y(Reflect.get(e.value, r, o));
      },
      set(n, r, o) {
        return (
          ze(e.value[r]) && !ze(o) ? (e.value[r].value = o) : (e.value[r] = o),
          !0
        );
      },
      deleteProperty(n, r) {
        return Reflect.deleteProperty(e.value, r);
      },
      has(n, r) {
        return Reflect.has(e.value, r);
      },
      ownKeys() {
        return Object.keys(e.value);
      },
      getOwnPropertyDescriptor() {
        return { enumerable: !0, configurable: !0 };
      },
    }
  );
  return dt(t);
}
function iE(e) {
  return sE(S(e));
}
function $g(e, ...t) {
  const n = t.flat(),
    r = n[0];
  return iE(() =>
    Object.fromEntries(
      typeof r == 'function'
        ? Object.entries(Ot(e)).filter(([o, s]) => !r(Ae(s), o))
        : Object.entries(Ot(e)).filter((o) => !n.includes(o[0]))
    )
  );
}
const Wt = typeof window < 'u' && typeof document < 'u';
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope;
const aE = (e) => typeof e < 'u',
  lE = Object.prototype.toString,
  cE = (e) => lE.call(e) === '[object Object]',
  pi = () => {},
  Ff = uE();
function uE() {
  var e, t;
  return (
    Wt &&
    ((e = window?.navigator) == null ? void 0 : e.userAgent) &&
    (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
      (((t = window?.navigator) == null ? void 0 : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(window?.navigator.userAgent)))
  );
}
function Bg(e, t) {
  function n(...r) {
    return new Promise((o, s) => {
      Promise.resolve(
        e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })
      )
        .then(o)
        .catch(s);
    });
  }
  return n;
}
const Vg = (e) => e();
function fE(e, t = {}) {
  let n,
    r,
    o = pi;
  const s = (l) => {
    clearTimeout(l), o(), (o = pi);
  };
  let i;
  return (l) => {
    const u = Ae(e),
      c = Ae(t.maxWait);
    return (
      n && s(n),
      u <= 0 || (c !== void 0 && c <= 0)
        ? (r && (s(r), (r = null)), Promise.resolve(l()))
        : new Promise((f, d) => {
            (o = t.rejectOnCancel ? d : f),
              (i = l),
              c &&
                !r &&
                (r = setTimeout(() => {
                  n && s(n), (r = null), f(i());
                }, c)),
              (n = setTimeout(() => {
                r && s(r), (r = null), f(l());
              }, u));
          })
    );
  };
}
function dE(e = Vg, t = {}) {
  const { initialState: n = 'active' } = t,
    r = pE(n === 'active');
  function o() {
    r.value = !1;
  }
  function s() {
    r.value = !0;
  }
  const i = (...a) => {
    r.value && e(...a);
  };
  return { isActive: yn(r), pause: o, resume: s, eventFilter: i };
}
function jg(e) {
  return Xe();
}
function Aa(e) {
  return Array.isArray(e) ? e : [e];
}
function pE(...e) {
  if (e.length !== 1) return ot(...e);
  const t = e[0];
  return typeof t == 'function' ? yn(Zo(() => ({ get: t, set: pi }))) : j(t);
}
function Sc(e, t = 1e4) {
  return Zo((n, r) => {
    let o = Ae(e),
      s;
    const i = () =>
      setTimeout(() => {
        (o = Ae(e)), r();
      }, Ae(t));
    return (
      Or(() => {
        clearTimeout(s);
      }),
      {
        get() {
          return n(), o;
        },
        set(a) {
          (o = a), r(), clearTimeout(s), (s = i());
        },
      }
    );
  });
}
function hE(e, t = 200, n = {}) {
  return Bg(fE(t, n), e);
}
function gE(e, t, n = {}) {
  const { eventFilter: r = Vg, ...o } = n;
  return we(e, Bg(r, t), o);
}
function zf(e, t, n = {}) {
  const { eventFilter: r, initialState: o = 'active', ...s } = n,
    {
      eventFilter: i,
      pause: a,
      resume: l,
      isActive: u,
    } = dE(r, { initialState: o });
  return {
    stop: gE(e, t, { ...s, eventFilter: i }),
    pause: a,
    resume: l,
    isActive: u,
  };
}
function mE(e, t, ...[n]) {
  const {
      flush: r = 'sync',
      deep: o = !1,
      immediate: s = !0,
      direction: i = 'both',
      transform: a = {},
    } = n || {},
    l = [],
    u = ('ltr' in a && a.ltr) || ((d) => d),
    c = ('rtl' in a && a.rtl) || ((d) => d);
  return (
    (i === 'both' || i === 'ltr') &&
      l.push(
        zf(
          e,
          (d) => {
            l.forEach((p) => p.pause()),
              (t.value = u(d)),
              l.forEach((p) => p.resume());
          },
          { flush: r, deep: o, immediate: s }
        )
      ),
    (i === 'both' || i === 'rtl') &&
      l.push(
        zf(
          t,
          (d) => {
            l.forEach((p) => p.pause()),
              (e.value = c(d)),
              l.forEach((p) => p.resume());
          },
          { flush: r, deep: o, immediate: s }
        )
      ),
    () => {
      l.forEach((d) => d.stop());
    }
  );
}
const tD = Ae;
function vE(e, t) {
  jg() && Sr(e, t);
}
function yE(e, t = !0, n) {
  jg() ? Ye(e, n) : t ? e() : Ze(e);
}
function Ac(e, t, n = {}) {
  const { immediate: r = !0, immediateCallback: o = !1 } = n,
    s = Pe(!1);
  let i = null;
  function a() {
    i && (clearTimeout(i), (i = null));
  }
  function l() {
    (s.value = !1), a();
  }
  function u(...c) {
    o && e(),
      a(),
      (s.value = !0),
      (i = setTimeout(() => {
        (s.value = !1), (i = null), e(...c);
      }, Ae(t)));
  }
  return (
    r && ((s.value = !0), Wt && u()),
    Or(l),
    { isPending: yn(s), start: u, stop: l }
  );
}
function bE(e = 1e3, t = {}) {
  const { controls: n = !1, callback: r } = t,
    o = Ac(r ?? pi, e, t),
    s = S(() => !o.isPending.value);
  return n ? { ready: s, ...o } : s;
}
function _E(e, t, n) {
  return we(e, t, { ...n, immediate: !0 });
}
const ss = Wt ? window : void 0;
function Kt(e) {
  var t;
  const n = Ae(e);
  return (t = n?.$el) != null ? t : n;
}
function Ko(...e) {
  const t = [],
    n = () => {
      t.forEach((a) => a()), (t.length = 0);
    },
    r = (a, l, u, c) => (
      a.addEventListener(l, u, c), () => a.removeEventListener(l, u, c)
    ),
    o = S(() => {
      const a = Aa(Ae(e[0])).filter((l) => l != null);
      return a.every((l) => typeof l != 'string') ? a : void 0;
    }),
    s = _E(
      () => {
        var a, l;
        return [
          (l = (a = o.value) == null ? void 0 : a.map((u) => Kt(u))) != null
            ? l
            : [ss].filter((u) => u != null),
          Aa(Ae(o.value ? e[1] : e[0])),
          Aa(y(o.value ? e[2] : e[1])),
          Ae(o.value ? e[3] : e[2]),
        ];
      },
      ([a, l, u, c]) => {
        if ((n(), !a?.length || !l?.length || !u?.length)) return;
        const f = cE(c) ? { ...c } : c;
        t.push(
          ...a.flatMap((d) => l.flatMap((p) => u.map((h) => r(d, p, h, f))))
        );
      },
      { flush: 'post' }
    ),
    i = () => {
      s(), n();
    };
  return Or(n), i;
}
function Fg() {
  const e = Pe(!1),
    t = Xe();
  return (
    t &&
      Ye(() => {
        e.value = !0;
      }, t),
    e
  );
}
function wE(e) {
  const t = Fg();
  return S(() => (t.value, !!e()));
}
function xE(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
    ? (t) => t.key === e
    : Array.isArray(e)
    ? (t) => e.includes(t.key)
    : () => !0;
}
function Oc(...e) {
  let t,
    n,
    r = {};
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (r = e[2]))
    : e.length === 2
    ? typeof e[1] == 'object'
      ? ((t = !0), (n = e[0]), (r = e[1]))
      : ((t = e[0]), (n = e[1]))
    : ((t = !0), (n = e[0]));
  const {
      target: o = ss,
      eventName: s = 'keydown',
      passive: i = !1,
      dedupe: a = !1,
    } = r,
    l = xE(t);
  return Ko(
    o,
    s,
    (c) => {
      (c.repeat && Ae(a)) || (l(c) && n(c));
    },
    i
  );
}
function zg(e, t = {}) {
  const {
      immediate: n = !0,
      fpsLimit: r = void 0,
      window: o = ss,
      once: s = !1,
    } = t,
    i = Pe(!1),
    a = S(() => (r ? 1e3 / Ae(r) : null));
  let l = 0,
    u = null;
  function c(p) {
    if (!i.value || !o) return;
    l || (l = p);
    const h = p - l;
    if (a.value && h < a.value) {
      u = o.requestAnimationFrame(c);
      return;
    }
    if (((l = p), e({ delta: h, timestamp: p }), s)) {
      (i.value = !1), (u = null);
      return;
    }
    u = o.requestAnimationFrame(c);
  }
  function f() {
    !i.value &&
      o &&
      ((i.value = !0), (l = 0), (u = o.requestAnimationFrame(c)));
  }
  function d() {
    (i.value = !1), u != null && o && (o.cancelAnimationFrame(u), (u = null));
  }
  return n && f(), Or(d), { isActive: yn(i), pause: d, resume: f };
}
function kE(e) {
  return JSON.parse(JSON.stringify(e));
}
function CE(e) {
  const t = Xe(),
    n = tE(
      () => null,
      () => t.proxy.$el
    );
  return Mi(n.trigger), Ye(n.trigger), n;
}
function hi(e, t, n = {}) {
  const { window: r = ss, ...o } = n;
  let s;
  const i = wE(() => r && 'ResizeObserver' in r),
    a = () => {
      s && (s.disconnect(), (s = void 0));
    },
    l = S(() => {
      const f = Ae(e);
      return Array.isArray(f) ? f.map((d) => Kt(d)) : [Kt(f)];
    }),
    u = we(
      l,
      (f) => {
        if ((a(), i.value && r)) {
          s = new ResizeObserver(t);
          for (const d of f) d && s.observe(d, o);
        }
      },
      { immediate: !0, flush: 'post' }
    ),
    c = () => {
      a(), u();
    };
  return Or(c), { isSupported: i, stop: c };
}
function nD(e = CE()) {
  const t = Pe(),
    n = () => {
      const r = Kt(e);
      r && (t.value = r.parentElement);
    };
  return yE(n), we(() => Ae(e), n), t;
}
function Mn(e, t, n, r = {}) {
  var o, s, i;
  const {
      clone: a = !1,
      passive: l = !1,
      eventName: u,
      deep: c = !1,
      defaultValue: f,
      shouldEmit: d,
    } = r,
    p = Xe(),
    h =
      n ||
      p?.emit ||
      ((o = p?.$emit) == null ? void 0 : o.bind(p)) ||
      ((i = (s = p?.proxy) == null ? void 0 : s.$emit) == null
        ? void 0
        : i.bind(p?.proxy));
  let g = u;
  t || (t = 'modelValue'), (g = g || `update:${t.toString()}`);
  const _ = (v) => (a ? (typeof a == 'function' ? a(v) : kE(v)) : v),
    x = () => (aE(e[t]) ? _(e[t]) : f),
    b = (v) => {
      d ? d(v) && h(g, v) : h(g, v);
    };
  if (l) {
    const v = x(),
      m = j(v);
    let w = !1;
    return (
      we(
        () => e[t],
        (C) => {
          w || ((w = !0), (m.value = _(C)), Ze(() => (w = !1)));
        }
      ),
      we(
        m,
        (C) => {
          !w && (C !== e[t] || c) && b(C);
        },
        { deep: c }
      ),
      m
    );
  } else
    return S({
      get() {
        return x();
      },
      set(v) {
        b(v);
      },
    });
}
const EE = oE(() => {
  const e = j(new Map()),
    t = j(),
    n = S(() => {
      for (const i of e.value.values()) if (i) return !0;
      return !1;
    }),
    r = Ng({ scrollBody: j(!0) });
  let o = null;
  const s = () => {
    (document.body.style.paddingRight = ''),
      (document.body.style.marginRight = ''),
      (document.body.style.pointerEvents = ''),
      document.documentElement.style.removeProperty('--scrollbar-width'),
      (document.body.style.overflow = t.value ?? ''),
      Ff && o?.(),
      (t.value = void 0);
  };
  return (
    we(
      n,
      (i, a) => {
        if (!Wt) return;
        if (!i) {
          a && s();
          return;
        }
        t.value === void 0 && (t.value = document.body.style.overflow);
        const l = window.innerWidth - document.documentElement.clientWidth,
          u = { padding: l, margin: 0 },
          c = r.scrollBody?.value
            ? typeof r.scrollBody.value == 'object'
              ? Mt(
                  {
                    padding:
                      r.scrollBody.value.padding === !0
                        ? l
                        : r.scrollBody.value.padding,
                    margin:
                      r.scrollBody.value.margin === !0
                        ? l
                        : r.scrollBody.value.margin,
                  },
                  u
                )
              : u
            : { padding: 0, margin: 0 };
        l > 0 &&
          ((document.body.style.paddingRight =
            typeof c.padding == 'number'
              ? `${c.padding}px`
              : String(c.padding)),
          (document.body.style.marginRight =
            typeof c.margin == 'number' ? `${c.margin}px` : String(c.margin)),
          document.documentElement.style.setProperty(
            '--scrollbar-width',
            `${l}px`
          ),
          (document.body.style.overflow = 'hidden')),
          Ff && (o = Ko(document, 'touchmove', (f) => TE(f), { passive: !1 })),
          Ze(() => {
            (document.body.style.pointerEvents = 'none'),
              (document.body.style.overflow = 'hidden');
          });
      },
      { immediate: !0, flush: 'sync' }
    ),
    e
  );
});
function PE(e) {
  const t = Math.random().toString(36).substring(2, 7),
    n = EE();
  n.value.set(t, e);
  const r = S({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o),
  });
  return (
    vE(() => {
      n.value.delete(t);
    }),
    r
  );
}
function Hg(e) {
  const t = window.getComputedStyle(e);
  if (
    t.overflowX === 'scroll' ||
    t.overflowY === 'scroll' ||
    (t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
    (t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
  )
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === 'BODY' ? !1 : Hg(n);
  }
}
function TE(e) {
  const t = e || window.event,
    n = t.target;
  return n instanceof Element && Hg(n)
    ? !1
    : t.touches.length > 1
    ? !0
    : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function Ug(e) {
  const t = Ng({ dir: j('ltr') });
  return S(() => e?.value || t.dir?.value || 'ltr');
}
function SE(e) {
  const t = Xe(),
    n = t?.type.emits,
    r = {};
  return (
    n?.length ||
      console.warn(
        `No emitted event found. Please check component: ${t?.type.__name}`
      ),
    n?.forEach((o) => {
      r[Ao(At(o))] = (...s) => e(o, ...s);
    }),
    r
  );
}
let Oa = 0;
function AE() {
  it((e) => {
    if (!Wt) return;
    const t = document.querySelectorAll('[data-reka-focus-guard]');
    document.body.insertAdjacentElement('afterbegin', t[0] ?? Hf()),
      document.body.insertAdjacentElement('beforeend', t[1] ?? Hf()),
      Oa++,
      e(() => {
        Oa === 1 &&
          document
            .querySelectorAll('[data-reka-focus-guard]')
            .forEach((n) => n.remove()),
          Oa--;
      });
  });
}
function Hf() {
  const e = document.createElement('span');
  return (
    e.setAttribute('data-reka-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.outline = 'none'),
    (e.style.opacity = '0'),
    (e.style.position = 'fixed'),
    (e.style.pointerEvents = 'none'),
    e
  );
}
function ve() {
  const e = Xe(),
    t = j(),
    n = S(() =>
      ['#text', '#comment'].includes(t.value?.$el.nodeName)
        ? t.value?.$el.nextElementSibling
        : Kt(t)
    ),
    r = Object.assign({}, e.exposed),
    o = {};
  for (const i in e.props)
    Object.defineProperty(o, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i],
    });
  if (Object.keys(r).length > 0)
    for (const i in r)
      Object.defineProperty(o, i, {
        enumerable: !0,
        configurable: !0,
        get: () => r[i],
      });
  Object.defineProperty(o, '$el', {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el,
  }),
    (e.exposed = o);
  function s(i) {
    (t.value = i),
      i &&
        (Object.defineProperty(o, '$el', {
          enumerable: !0,
          configurable: !0,
          get: () => (i instanceof Element ? i : i.$el),
        }),
        (e.exposed = o));
  }
  return { forwardRef: s, currentRef: t, currentElement: n };
}
function Fn(e) {
  const t = Xe(),
    n = Object.keys(t?.type.props ?? {}).reduce((o, s) => {
      const i = (t?.type.props[s]).default;
      return i !== void 0 && (o[s] = i), o;
    }, {}),
    r = ot(e);
  return S(() => {
    const o = {},
      s = t?.vnode.props ?? {};
    return (
      Object.keys(s).forEach((i) => {
        o[At(i)] = s[i];
      }),
      Object.keys({ ...n, ...o }).reduce(
        (i, a) => (r.value[a] !== void 0 && (i[a] = r.value[a]), i),
        {}
      )
    );
  });
}
function Gt(e, t) {
  const n = Fn(e),
    r = t ? SE(t) : {};
  return S(() => ({ ...n.value, ...r }));
}
function Wg(e, t) {
  const n = Sc(!1, 300),
    r = j(null),
    o = nE();
  function s() {
    (r.value = null), (n.value = !1);
  }
  function i(a, l) {
    const u = a.currentTarget,
      c = { x: a.clientX, y: a.clientY },
      f = OE(c, u.getBoundingClientRect()),
      d = RE(c, f),
      p = IE(l.getBoundingClientRect()),
      h = DE([...d, ...p]);
    (r.value = h), (n.value = !0);
  }
  return (
    it((a) => {
      if (e.value && t.value) {
        const l = (c) => i(c, t.value),
          u = (c) => i(c, e.value);
        e.value.addEventListener('pointerleave', l),
          t.value.addEventListener('pointerleave', u),
          a(() => {
            e.value?.removeEventListener('pointerleave', l),
              t.value?.removeEventListener('pointerleave', u);
          });
      }
    }),
    it((a) => {
      if (r.value) {
        const l = (u) => {
          if (!r.value || !(u.target instanceof Element)) return;
          const c = u.target,
            f = { x: u.clientX, y: u.clientY },
            d = e.value?.contains(c) || t.value?.contains(c),
            p = !LE(f, r.value),
            h = !!c.closest('[data-grace-area-trigger]');
          d ? s() : (p || h) && (s(), o.trigger());
        };
        e.value?.ownerDocument.addEventListener('pointermove', l),
          a(() => e.value?.ownerDocument.removeEventListener('pointermove', l));
      }
    }),
    { isPointerInTransit: n, onPointerExit: o.on }
  );
}
function OE(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return 'left';
    case o:
      return 'right';
    case n:
      return 'top';
    case r:
      return 'bottom';
    default:
      throw new Error('unreachable');
  }
}
function RE(e, t, n = 5) {
  const r = [];
  switch (t) {
    case 'top':
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case 'bottom':
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case 'left':
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case 'right':
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function IE(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function LE(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s].x,
      l = t[s].y,
      u = t[i].x,
      c = t[i].y;
    l > r != c > r && n < ((u - a) * (r - l)) / (c - l) + a && (o = !o);
  }
  return o;
}
function DE(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    qE(t)
  );
}
function qE(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1],
        i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1],
        i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var ME = function (e) {
    if (typeof document > 'u') return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  $r = new WeakMap(),
  bs = new WeakMap(),
  _s = {},
  Ra = 0,
  Kg = function (e) {
    return e && (e.host || Kg(e.parentNode));
  },
  NE = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Kg(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              'aria-hidden',
              n,
              'in not contained inside',
              e,
              '. Doing nothing'
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  $E = function (e, t, n, r) {
    var o = NE(t, Array.isArray(e) ? e : [e]);
    _s[n] || (_s[n] = new WeakMap());
    var s = _s[n],
      i = [],
      a = new Set(),
      l = new Set(o),
      u = function (f) {
        !f || a.has(f) || (a.add(f), u(f.parentNode));
      };
    o.forEach(u);
    var c = function (f) {
      !f ||
        l.has(f) ||
        Array.prototype.forEach.call(f.children, function (d) {
          if (a.has(d)) c(d);
          else
            try {
              var p = d.getAttribute(r),
                h = p !== null && p !== 'false',
                g = ($r.get(d) || 0) + 1,
                _ = (s.get(d) || 0) + 1;
              $r.set(d, g),
                s.set(d, _),
                i.push(d),
                g === 1 && h && bs.set(d, !0),
                _ === 1 && d.setAttribute(n, 'true'),
                h || d.setAttribute(r, 'true');
            } catch (x) {
              console.error('aria-hidden: cannot operate on ', d, x);
            }
        });
    };
    return (
      c(t),
      a.clear(),
      Ra++,
      function () {
        i.forEach(function (f) {
          var d = $r.get(f) - 1,
            p = s.get(f) - 1;
          $r.set(f, d),
            s.set(f, p),
            d || (bs.has(f) || f.removeAttribute(r), bs.delete(f)),
            p || f.removeAttribute(n);
        }),
          Ra--,
          Ra ||
            (($r = new WeakMap()),
            ($r = new WeakMap()),
            (bs = new WeakMap()),
            (_s = {}));
      }
    );
  },
  BE = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden');
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = ME(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live], script'))),
        $E(r, o, n, 'aria-hidden'))
      : function () {
          return null;
        };
  };
function VE(e) {
  let t;
  we(
    () => Kt(e),
    (n) => {
      n ? (t = BE(n)) : t && t();
    }
  ),
    wn(() => {
      t && t();
    });
}
function Rr(e, t = 'reka') {
  return e || `${t}-${xp?.()}`;
}
function jE(e) {
  const t = j(),
    n = S(() => t.value?.width ?? 0),
    r = S(() => t.value?.height ?? 0);
  return (
    Ye(() => {
      const o = Kt(e);
      if (o) {
        t.value = { width: o.offsetWidth, height: o.offsetHeight };
        const s = new ResizeObserver((i) => {
          if (!Array.isArray(i) || !i.length) return;
          const a = i[0];
          let l, u;
          if ('borderBoxSize' in a) {
            const c = a.borderBoxSize,
              f = Array.isArray(c) ? c[0] : c;
            (l = f.inlineSize), (u = f.blockSize);
          } else (l = o.offsetWidth), (u = o.offsetHeight);
          t.value = { width: l, height: u };
        });
        return s.observe(o, { box: 'border-box' }), () => s.unobserve(o);
      } else t.value = void 0;
    }),
    { width: n, height: r }
  );
}
function FE(e, t) {
  const n = j(e);
  function r(s) {
    return t[n.value][s] ?? n.value;
  }
  return {
    state: n,
    dispatch: (s) => {
      n.value = r(s);
    },
  };
}
function zE(e, t) {
  const n = j({}),
    r = j('none'),
    o = j(e),
    s = e.value ? 'mounted' : 'unmounted';
  let i;
  const a = t.value?.ownerDocument.defaultView ?? ss,
    { state: l, dispatch: u } = FE(s, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    }),
    c = (_) => {
      if (Wt) {
        const x = new CustomEvent(_, { bubbles: !1, cancelable: !1 });
        t.value?.dispatchEvent(x);
      }
    };
  we(
    e,
    async (_, x) => {
      const b = x !== _;
      if ((await Ze(), b)) {
        const v = r.value,
          m = ws(t.value);
        _
          ? (u('MOUNT'), c('enter'), m === 'none' && c('after-enter'))
          : m === 'none' || m === 'undefined' || n.value?.display === 'none'
          ? (u('UNMOUNT'), c('leave'), c('after-leave'))
          : x && v !== m
          ? (u('ANIMATION_OUT'), c('leave'))
          : (u('UNMOUNT'), c('after-leave'));
      }
    },
    { immediate: !0 }
  );
  const f = (_) => {
      const x = ws(t.value),
        b = x.includes(CSS.escape(_.animationName)),
        v = l.value === 'mounted' ? 'enter' : 'leave';
      if (
        _.target === t.value &&
        b &&
        (c(`after-${v}`), u('ANIMATION_END'), !o.value)
      ) {
        const m = t.value.style.animationFillMode;
        (t.value.style.animationFillMode = 'forwards'),
          (i = a?.setTimeout(() => {
            t.value?.style.animationFillMode === 'forwards' &&
              (t.value.style.animationFillMode = m);
          }));
      }
      _.target === t.value && x === 'none' && u('ANIMATION_END');
    },
    d = (_) => {
      _.target === t.value && (r.value = ws(t.value));
    },
    p = we(
      t,
      (_, x) => {
        _
          ? ((n.value = getComputedStyle(_)),
            _.addEventListener('animationstart', d),
            _.addEventListener('animationcancel', f),
            _.addEventListener('animationend', f))
          : (u('ANIMATION_END'),
            i !== void 0 && a?.clearTimeout(i),
            x?.removeEventListener('animationstart', d),
            x?.removeEventListener('animationcancel', f),
            x?.removeEventListener('animationend', f));
      },
      { immediate: !0 }
    ),
    h = we(l, () => {
      const _ = ws(t.value);
      r.value = l.value === 'mounted' ? _ : 'none';
    });
  return (
    wn(() => {
      p(), h();
    }),
    { isPresent: S(() => ['mounted', 'unmountSuspended'].includes(l.value)) }
  );
}
function ws(e) {
  return (e && getComputedStyle(e).animationName) || 'none';
}
var or = J({
  name: 'Presence',
  props: {
    present: { type: Boolean, required: !0 },
    forceMount: { type: Boolean },
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    const { present: r, forceMount: o } = Ot(e),
      s = j(),
      { isPresent: i } = zE(r, s);
    n({ present: i });
    let a = t.default({ present: i.value });
    a = Pc(a || []);
    const l = Xe();
    if (a && a?.length > 1) {
      const u = l?.parent?.type.name
        ? `<${l.parent.type.name} />`
        : 'component';
      throw new Error(
        [
          `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
          '',
          'Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.',
          'You can apply a few solutions:',
          [
            'Provide a single child element so that `presence` directive attach correctly.',
            'Ensure the first child is an actual element instead of a raw text node or comment node.',
          ].map((c) => `  - ${c}`).join(`
`),
        ].join(`
`)
      );
    }
    return () =>
      o.value || r.value || i.value
        ? Be(t.default({ present: i.value })[0], {
            ref: (u) => {
              const c = Kt(u);
              return (
                typeof c?.hasAttribute > 'u' ||
                  (c?.hasAttribute('data-reka-popper-content-wrapper')
                    ? (s.value = c.firstElementChild)
                    : (s.value = c)),
                c
              );
            },
          })
        : null;
  },
});
const Pr = J({
    name: 'PrimitiveSlot',
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n }) {
      return () => {
        if (!n.default) return null;
        const r = Pc(n.default()),
          o = r.findIndex((l) => l.type !== rt);
        if (o === -1) return r;
        const s = r[o];
        delete s.props?.ref;
        const i = s.props ? te(t, s.props) : t,
          a = on({ ...s, props: {} }, i);
        return r.length === 1 ? a : ((r[o] = a), r);
      };
    },
  }),
  HE = ['area', 'img', 'input'],
  _e = J({
    name: 'Primitive',
    inheritAttrs: !1,
    props: {
      asChild: { type: Boolean, default: !1 },
      as: { type: [String, Object], default: 'div' },
    },
    setup(e, { attrs: t, slots: n }) {
      const r = e.asChild ? 'template' : e.as;
      return typeof r == 'string' && HE.includes(r)
        ? () => Be(r, t)
        : r !== 'template'
        ? () => Be(e.as, t, { default: n.default })
        : () => Be(Pr, t, { default: n.default });
    },
  });
function Uf() {
  const e = j(),
    t = S(() =>
      ['#text', '#comment'].includes(e.value?.$el.nodeName)
        ? e.value?.$el.nextElementSibling
        : Kt(e)
    );
  return { primitiveElement: e, currentElement: t };
}
const [Gg, UE] = Rt('CollapsibleRoot');
var WE = J({
    __name: 'CollapsibleRoot',
    props: {
      defaultOpen: { type: Boolean, required: !1, default: !1 },
      open: { type: Boolean, required: !1, default: void 0 },
      disabled: { type: Boolean, required: !1 },
      unmountOnHide: { type: Boolean, required: !1, default: !0 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    emits: ['update:open'],
    setup(e, { expose: t, emit: n }) {
      const r = e,
        s = Mn(r, 'open', n, {
          defaultValue: r.defaultOpen,
          passive: r.open === void 0,
        }),
        { disabled: i, unmountOnHide: a } = Ot(r);
      return (
        UE({
          contentId: '',
          disabled: i,
          open: s,
          unmountOnHide: a,
          onOpenToggle: () => {
            i.value || (s.value = !s.value);
          },
        }),
        t({ open: s }),
        ve(),
        (l, u) => (
          T(),
          L(
            y(_e),
            {
              as: l.as,
              'as-child': r.asChild,
              'data-state': y(s) ? 'open' : 'closed',
              'data-disabled': y(i) ? '' : void 0,
            },
            {
              default: O(() => [B(l.$slots, 'default', { open: y(s) })]),
              _: 3,
            },
            8,
            ['as', 'as-child', 'data-state', 'data-disabled']
          )
        )
      );
    },
  }),
  KE = WE,
  GE = J({
    inheritAttrs: !1,
    __name: 'CollapsibleContent',
    props: {
      forceMount: { type: Boolean, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    emits: ['contentFound'],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = Gg();
      o.contentId ||= Rr(void 0, 'reka-collapsible-content');
      const s = j(),
        { forwardRef: i, currentElement: a } = ve(),
        l = j(0),
        u = j(0),
        c = S(() => o.open.value),
        f = j(c.value),
        d = j();
      we(
        () => [c.value, s.value?.present],
        async () => {
          await Ze();
          const h = a.value;
          if (!h) return;
          (d.value = d.value || {
            transitionDuration: h.style.transitionDuration,
            animationName: h.style.animationName,
          }),
            (h.style.transitionDuration = '0s'),
            (h.style.animationName = 'none');
          const g = h.getBoundingClientRect();
          (u.value = g.height),
            (l.value = g.width),
            f.value ||
              ((h.style.transitionDuration = d.value.transitionDuration),
              (h.style.animationName = d.value.animationName));
        },
        { immediate: !0 }
      );
      const p = S(() => f.value && o.open.value);
      return (
        Ye(() => {
          requestAnimationFrame(() => {
            f.value = !1;
          });
        }),
        Ko(a, 'beforematch', (h) => {
          requestAnimationFrame(() => {
            o.onOpenToggle(), r('contentFound');
          });
        }),
        (h, g) => (
          T(),
          L(
            y(or),
            {
              ref_key: 'presentRef',
              ref: s,
              present: h.forceMount || y(o).open.value,
              'force-mount': !0,
            },
            {
              default: O(({ present: _ }) => [
                z(
                  y(_e),
                  te(h.$attrs, {
                    id: y(o).contentId,
                    ref: y(i),
                    'as-child': n.asChild,
                    as: h.as,
                    hidden: _
                      ? void 0
                      : y(o).unmountOnHide.value
                      ? ''
                      : 'until-found',
                    'data-state': p.value
                      ? void 0
                      : y(o).open.value
                      ? 'open'
                      : 'closed',
                    'data-disabled': y(o).disabled?.value ? '' : void 0,
                    style: {
                      '--reka-collapsible-content-height': `${u.value}px`,
                      '--reka-collapsible-content-width': `${l.value}px`,
                    },
                  }),
                  {
                    default: O(() => [
                      !y(o).unmountOnHide.value || _
                        ? B(h.$slots, 'default', { key: 0 })
                        : fe('v-if', !0),
                    ]),
                    _: 2,
                  },
                  1040,
                  [
                    'id',
                    'as-child',
                    'as',
                    'hidden',
                    'data-state',
                    'data-disabled',
                    'style',
                  ]
                ),
              ]),
              _: 3,
            },
            8,
            ['present']
          )
        )
      );
    },
  }),
  YE = GE,
  XE = J({
    __name: 'CollapsibleTrigger',
    props: {
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'button' },
    },
    setup(e) {
      const t = e;
      ve();
      const n = Gg();
      return (r, o) => (
        T(),
        L(
          y(_e),
          {
            type: r.as === 'button' ? 'button' : void 0,
            as: r.as,
            'as-child': t.asChild,
            'aria-controls': y(n).contentId,
            'aria-expanded': y(n).open.value,
            'data-state': y(n).open.value ? 'open' : 'closed',
            'data-disabled': y(n).disabled?.value ? '' : void 0,
            disabled: y(n).disabled?.value,
            onClick: y(n).onOpenToggle,
          },
          { default: O(() => [B(r.$slots, 'default')]), _: 3 },
          8,
          [
            'type',
            'as',
            'as-child',
            'aria-controls',
            'aria-expanded',
            'data-state',
            'data-disabled',
            'disabled',
            'onClick',
          ]
        )
      );
    },
  }),
  JE = XE;
function QE({ type: e, defaultValue: t, modelValue: n }) {
  const r = n || t;
  return n !== void 0 || t !== void 0
    ? Array.isArray(r)
      ? 'multiple'
      : 'single'
    : e ?? 'single';
}
function ZE({ type: e, defaultValue: t, modelValue: n }) {
  return e || QE({ type: e, defaultValue: t, modelValue: n });
}
function eP({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === 'single' ? void 0 : [];
}
function tP(e, t) {
  const n = S(() => ZE(e)),
    r = Mn(e, 'modelValue', t, {
      defaultValue: eP(e),
      passive: e.modelValue === void 0,
      deep: !0,
    });
  function o(i) {
    if (n.value === 'single') r.value = oo(i, r.value) ? void 0 : i;
    else {
      const a = Array.isArray(r.value)
        ? [...(r.value || [])]
        : [r.value].filter(Boolean);
      if (Y1(a, i)) {
        const l = a.findIndex((u) => oo(u, i));
        a.splice(l, 1);
      } else a.push(i);
      r.value = a;
    }
  }
  const s = S(() => n.value === 'single');
  return { modelValue: r, changeModelValue: o, isSingle: s };
}
const [Rc, nP] = Rt('AccordionRoot');
var rP = J({
    __name: 'AccordionRoot',
    props: {
      collapsible: { type: Boolean, required: !1, default: !1 },
      disabled: { type: Boolean, required: !1, default: !1 },
      dir: { type: String, required: !1 },
      orientation: { type: String, required: !1, default: 'vertical' },
      unmountOnHide: { type: Boolean, required: !1, default: !0 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
      type: { type: String, required: !1 },
      modelValue: { type: null, required: !1 },
      defaultValue: { type: null, required: !1 },
    },
    emits: ['update:modelValue'],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        { dir: o, disabled: s, unmountOnHide: i } = Ot(n),
        a = Ug(o),
        { modelValue: l, changeModelValue: u, isSingle: c } = tP(n, r),
        { forwardRef: f, currentElement: d } = ve();
      return (
        nP({
          disabled: s,
          direction: a,
          orientation: n.orientation,
          parentElement: d,
          isSingle: c,
          collapsible: n.collapsible,
          modelValue: l,
          changeModelValue: u,
          unmountOnHide: i,
        }),
        (p, h) => (
          T(),
          L(
            y(_e),
            { ref: y(f), 'as-child': p.asChild, as: p.as },
            {
              default: O(() => [B(p.$slots, 'default', { modelValue: y(l) })]),
              _: 3,
            },
            8,
            ['as-child', 'as']
          )
        )
      );
    },
  }),
  Wf = rP,
  xl = (function (e) {
    return (e.Open = 'open'), (e.Closed = 'closed'), e;
  })(xl || {});
const [Yg, oP] = Rt('AccordionItem');
var sP = J({
    __name: 'AccordionItem',
    props: {
      disabled: { type: Boolean, required: !1 },
      value: { type: String, required: !0 },
      unmountOnHide: { type: Boolean, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    setup(e, { expose: t }) {
      const n = e,
        r = Rc(),
        o = S(() =>
          r.isSingle.value
            ? n.value === r.modelValue.value
            : Array.isArray(r.modelValue.value) &&
              r.modelValue.value.includes(n.value)
        ),
        s = S(() => r.disabled.value || n.disabled),
        i = S(() => (s.value ? '' : void 0)),
        a = S(() => (o.value ? xl.Open : xl.Closed));
      t({ open: o, dataDisabled: i });
      const { currentRef: l, currentElement: u } = ve();
      oP({
        open: o,
        dataState: a,
        disabled: s,
        dataDisabled: i,
        triggerId: '',
        currentRef: l,
        currentElement: u,
        value: S(() => n.value),
      });
      function c(f) {
        const d = f.target;
        if (
          Array.from(
            r.parentElement.value?.querySelectorAll(
              '[data-reka-collection-item]'
            ) ?? []
          ).findIndex((g) => g === d) === -1
        )
          return null;
        Tc(f, d, r.parentElement.value, {
          arrowKeyOptions: r.orientation,
          dir: r.direction.value,
          focus: !0,
        });
      }
      return (f, d) => (
        T(),
        L(
          y(KE),
          {
            'data-orientation': y(r).orientation,
            'data-disabled': i.value,
            'data-state': a.value,
            disabled: s.value,
            open: o.value,
            as: n.as,
            'as-child': n.asChild,
            'unmount-on-hide': y(r).unmountOnHide.value,
            onKeydown: ph(c, ['up', 'down', 'left', 'right', 'home', 'end']),
          },
          {
            default: O(() => [B(f.$slots, 'default', { open: o.value })]),
            _: 3,
          },
          8,
          [
            'data-orientation',
            'data-disabled',
            'data-state',
            'disabled',
            'open',
            'as',
            'as-child',
            'unmount-on-hide',
          ]
        )
      );
    },
  }),
  iP = sP,
  aP = J({
    __name: 'AccordionContent',
    props: {
      forceMount: { type: Boolean, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    setup(e) {
      const t = e,
        n = Rc(),
        r = Yg();
      return (
        ve(),
        (o, s) => (
          T(),
          L(
            y(YE),
            {
              role: 'region',
              'as-child': t.asChild,
              as: o.as,
              'force-mount': t.forceMount,
              'aria-labelledby': y(r).triggerId,
              'data-state': y(r).dataState.value,
              'data-disabled': y(r).dataDisabled.value,
              'data-orientation': y(n).orientation,
              style: {
                '--reka-accordion-content-width':
                  'var(--reka-collapsible-content-width)',
                '--reka-accordion-content-height':
                  'var(--reka-collapsible-content-height)',
              },
              onContentFound:
                s[0] || (s[0] = (i) => y(n).changeModelValue(y(r).value.value)),
            },
            { default: O(() => [B(o.$slots, 'default')]), _: 3 },
            8,
            [
              'as-child',
              'as',
              'force-mount',
              'aria-labelledby',
              'data-state',
              'data-disabled',
              'data-orientation',
            ]
          )
        )
      );
    },
  }),
  lP = aP,
  cP = J({
    __name: 'AccordionTrigger',
    props: {
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    setup(e) {
      const t = e,
        n = Rc(),
        r = Yg();
      r.triggerId ||= Rr(void 0, 'reka-accordion-trigger');
      function o() {
        const s = n.isSingle.value && r.open.value && !n.collapsible;
        r.disabled.value || s || n.changeModelValue(r.value.value);
      }
      return (s, i) => (
        T(),
        L(
          y(JE),
          {
            id: y(r).triggerId,
            ref: y(r).currentRef,
            'data-reka-collection-item': '',
            as: t.as,
            'as-child': t.asChild,
            'aria-disabled': y(r).disabled.value || void 0,
            'aria-expanded': y(r).open.value || !1,
            'data-disabled': y(r).dataDisabled.value,
            'data-orientation': y(n).orientation,
            'data-state': y(r).dataState.value,
            disabled: y(r).disabled.value,
            onClick: o,
          },
          { default: O(() => [B(s.$slots, 'default')]), _: 3 },
          8,
          [
            'id',
            'as',
            'as-child',
            'aria-disabled',
            'aria-expanded',
            'data-disabled',
            'data-orientation',
            'data-state',
            'disabled',
          ]
        )
      );
    },
  }),
  Kf = cP;
const uP = 'dismissableLayer.pointerDownOutside',
  fP = 'dismissableLayer.focusOutside';
function Xg(e, t) {
  const n = t.closest('[data-dismissable-layer]'),
    r =
      e.dataset.dismissableLayer === ''
        ? e
        : e.querySelector('[data-dismissable-layer]'),
    o = Array.from(
      e.ownerDocument.querySelectorAll('[data-dismissable-layer]')
    );
  return !!(n && (r === n || o.indexOf(r) < o.indexOf(n)));
}
function dP(e, t, n = !0) {
  const r = t?.value?.ownerDocument ?? globalThis?.document,
    o = j(!1),
    s = j(() => {});
  return (
    it((i) => {
      if (!Wt || !Ae(n)) return;
      const a = async (u) => {
          const c = u.target;
          if (!(!t?.value || !c)) {
            if (Xg(t.value, c)) {
              o.value = !1;
              return;
            }
            if (u.target && !o.value) {
              let d = function () {
                qg(uP, e, f);
              };
              const f = { originalEvent: u };
              u.pointerType === 'touch'
                ? (r.removeEventListener('click', s.value),
                  (s.value = d),
                  r.addEventListener('click', s.value, { once: !0 }))
                : d();
            } else r.removeEventListener('click', s.value);
            o.value = !1;
          }
        },
        l = window.setTimeout(() => {
          r.addEventListener('pointerdown', a);
        }, 0);
      i(() => {
        window.clearTimeout(l),
          r.removeEventListener('pointerdown', a),
          r.removeEventListener('click', s.value);
      });
    }),
    {
      onPointerDownCapture: () => {
        Ae(n) && (o.value = !0);
      },
    }
  );
}
function pP(e, t, n = !0) {
  const r = t?.value?.ownerDocument ?? globalThis?.document,
    o = j(!1);
  return (
    it((s) => {
      if (!Wt || !Ae(n)) return;
      const i = async (a) => {
        if (!t?.value) return;
        await Ze(), await Ze();
        const l = a.target;
        !t.value ||
          !l ||
          Xg(t.value, l) ||
          (a.target && !o.value && qg(fP, e, { originalEvent: a }));
      };
      r.addEventListener('focusin', i),
        s(() => r.removeEventListener('focusin', i));
    }),
    {
      onFocusCapture: () => {
        Ae(n) && (o.value = !0);
      },
      onBlurCapture: () => {
        Ae(n) && (o.value = !1);
      },
    }
  );
}
const Jt = dt({
  layersRoot: new Set(),
  layersWithOutsidePointerEventsDisabled: new Set(),
  branches: new Set(),
});
var hP = J({
    __name: 'DismissableLayer',
    props: {
      disableOutsidePointerEvents: { type: Boolean, required: !1, default: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
      'dismiss',
    ],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        { forwardRef: o, currentElement: s } = ve(),
        i = S(() => s.value?.ownerDocument ?? globalThis.document),
        a = S(() => Jt.layersRoot),
        l = S(() => (s.value ? Array.from(a.value).indexOf(s.value) : -1)),
        u = S(() => Jt.layersWithOutsidePointerEventsDisabled.size > 0),
        c = S(() => {
          const h = Array.from(a.value),
            [g] = [...Jt.layersWithOutsidePointerEventsDisabled].slice(-1),
            _ = h.indexOf(g);
          return l.value >= _;
        }),
        f = dP(async (h) => {
          const g = [...Jt.branches].some((_) => _?.contains(h.target));
          !c.value ||
            g ||
            (r('pointerDownOutside', h),
            r('interactOutside', h),
            await Ze(),
            h.defaultPrevented || r('dismiss'));
        }, s),
        d = pP((h) => {
          [...Jt.branches].some((_) => _?.contains(h.target)) ||
            (r('focusOutside', h),
            r('interactOutside', h),
            h.defaultPrevented || r('dismiss'));
        }, s);
      Oc('Escape', (h) => {
        l.value === a.value.size - 1 &&
          (r('escapeKeyDown', h), h.defaultPrevented || r('dismiss'));
      });
      let p;
      return (
        it((h) => {
          s.value &&
            (n.disableOutsidePointerEvents &&
              (Jt.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((p = i.value.body.style.pointerEvents),
                (i.value.body.style.pointerEvents = 'none')),
              Jt.layersWithOutsidePointerEventsDisabled.add(s.value)),
            a.value.add(s.value),
            h(() => {
              n.disableOutsidePointerEvents &&
                Jt.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (i.value.body.style.pointerEvents = p);
            }));
        }),
        it((h) => {
          h(() => {
            s.value &&
              (a.value.delete(s.value),
              Jt.layersWithOutsidePointerEventsDisabled.delete(s.value));
          });
        }),
        (h, g) => (
          T(),
          L(
            y(_e),
            {
              ref: y(o),
              'as-child': h.asChild,
              as: h.as,
              'data-dismissable-layer': '',
              style: nn({
                pointerEvents: u.value ? (c.value ? 'auto' : 'none') : void 0,
              }),
              onFocusCapture: y(d).onFocusCapture,
              onBlurCapture: y(d).onBlurCapture,
              onPointerdownCapture: y(f).onPointerDownCapture,
            },
            { default: O(() => [B(h.$slots, 'default')]), _: 3 },
            8,
            [
              'as-child',
              'as',
              'style',
              'onFocusCapture',
              'onBlurCapture',
              'onPointerdownCapture',
            ]
          )
        )
      );
    },
  }),
  Ki = hP,
  gP = J({
    __name: 'DismissableLayerBranch',
    props: {
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    setup(e) {
      const t = e,
        { forwardRef: n, currentElement: r } = ve();
      return (
        Ye(() => {
          Jt.branches.add(r.value);
        }),
        wn(() => {
          Jt.branches.delete(r.value);
        }),
        (o, s) => (
          T(),
          L(
            y(_e),
            te({ ref: y(n) }, t),
            { default: O(() => [B(o.$slots, 'default')]), _: 3 },
            16
          )
        )
      );
    },
  }),
  mP = gP;
const vP = rE(() => j([]));
function yP() {
  const e = vP();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && n?.pause(), (e.value = Gf(e.value, t)), e.value.unshift(t);
    },
    remove(t) {
      (e.value = Gf(e.value, t)), e.value[0]?.resume();
    },
  };
}
function Gf(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function bP(e) {
  return e.filter((t) => t.tagName !== 'A');
}
const Ia = 'focusScope.autoFocusOnMount',
  La = 'focusScope.autoFocusOnUnmount',
  Yf = { bubbles: !1, cancelable: !0 };
function Vs(e, { select: t = !1 } = {}) {
  const n = St();
  for (const r of e) if ((Kn(r, { select: t }), St() !== n)) return !0;
}
function _P(e) {
  const t = Ic(e),
    n = Xf(t, e),
    r = Xf(t.reverse(), e);
  return [n, r];
}
function Ic(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Xf(e, t) {
  for (const n of e) if (!wP(n, { upTo: t })) return n;
}
function wP(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === 'none') return !0;
    e = e.parentElement;
  }
  return !1;
}
function xP(e) {
  return e instanceof HTMLInputElement && 'select' in e;
}
function Kn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = St();
    e.focus({ preventScroll: !0 }), e !== n && xP(e) && t && e.select();
  }
}
var kP = J({
    __name: 'FocusScope',
    props: {
      loop: { type: Boolean, required: !1, default: !1 },
      trapped: { type: Boolean, required: !1, default: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    emits: ['mountAutoFocus', 'unmountAutoFocus'],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        { currentRef: o, currentElement: s } = ve(),
        i = j(null),
        a = yP(),
        l = dt({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        });
      it((c) => {
        if (!Wt) return;
        const f = s.value;
        if (!n.trapped) return;
        function d(_) {
          if (l.paused || !f) return;
          const x = _.target;
          f.contains(x) ? (i.value = x) : Kn(i.value, { select: !0 });
        }
        function p(_) {
          if (l.paused || !f) return;
          const x = _.relatedTarget;
          x !== null && (f.contains(x) || Kn(i.value, { select: !0 }));
        }
        function h(_) {
          f.contains(i.value) || Kn(f);
        }
        document.addEventListener('focusin', d),
          document.addEventListener('focusout', p);
        const g = new MutationObserver(h);
        f && g.observe(f, { childList: !0, subtree: !0 }),
          c(() => {
            document.removeEventListener('focusin', d),
              document.removeEventListener('focusout', p),
              g.disconnect();
          });
      }),
        it(async (c) => {
          const f = s.value;
          if ((await Ze(), !f)) return;
          a.add(l);
          const d = St();
          if (!f.contains(d)) {
            const h = new CustomEvent(Ia, Yf);
            f.addEventListener(Ia, (g) => r('mountAutoFocus', g)),
              f.dispatchEvent(h),
              h.defaultPrevented ||
                (Vs(bP(Ic(f)), { select: !0 }), St() === d && Kn(f));
          }
          c(() => {
            f.removeEventListener(Ia, (_) => r('mountAutoFocus', _));
            const h = new CustomEvent(La, Yf),
              g = (_) => {
                r('unmountAutoFocus', _);
              };
            f.addEventListener(La, g),
              f.dispatchEvent(h),
              setTimeout(() => {
                h.defaultPrevented || Kn(d ?? document.body, { select: !0 }),
                  f.removeEventListener(La, g),
                  a.remove(l);
              }, 0);
          });
        });
      function u(c) {
        if ((!n.loop && !n.trapped) || l.paused) return;
        const f = c.key === 'Tab' && !c.altKey && !c.ctrlKey && !c.metaKey,
          d = St();
        if (f && d) {
          const p = c.currentTarget,
            [h, g] = _P(p);
          h && g
            ? !c.shiftKey && d === g
              ? (c.preventDefault(), n.loop && Kn(h, { select: !0 }))
              : c.shiftKey &&
                d === h &&
                (c.preventDefault(), n.loop && Kn(g, { select: !0 }))
            : d === p && c.preventDefault();
        }
      }
      return (c, f) => (
        T(),
        L(
          y(_e),
          {
            ref_key: 'currentRef',
            ref: o,
            tabindex: '-1',
            'as-child': c.asChild,
            as: c.as,
            onKeydown: u,
          },
          { default: O(() => [B(c.$slots, 'default')]), _: 3 },
          8,
          ['as-child', 'as']
        )
      );
    },
  }),
  CP = kP,
  EP = J({
    __name: 'Teleport',
    props: {
      to: { type: null, required: !1, default: 'body' },
      disabled: { type: Boolean, required: !1 },
      defer: { type: Boolean, required: !1 },
      forceMount: { type: Boolean, required: !1 },
    },
    setup(e) {
      const t = Fg();
      return (n, r) =>
        y(t) || n.forceMount
          ? (T(),
            L(
              Di,
              { key: 0, to: n.to, disabled: n.disabled, defer: n.defer },
              [B(n.$slots, 'default')],
              8,
              ['to', 'disabled', 'defer']
            ))
          : fe('v-if', !0);
    },
  }),
  Gi = EP;
const Jf = 'data-reka-collection-item';
function sr(e = {}) {
  const { key: t = '', isProvider: n = !1 } = e,
    r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const c = j(new Map());
    (o = { collectionRef: j(), itemMap: c }), bt(r, o);
  } else o = $e(r);
  const s = (c = !1) => {
      const f = o.collectionRef.value;
      if (!f) return [];
      const d = Array.from(f.querySelectorAll(`[${Jf}]`)),
        h = Array.from(o.itemMap.value.values()).sort(
          (g, _) => d.indexOf(g.ref) - d.indexOf(_.ref)
        );
      return c ? h : h.filter((g) => g.ref.dataset.disabled !== '');
    },
    i = J({
      name: 'CollectionSlot',
      setup(c, { slots: f }) {
        const { primitiveElement: d, currentElement: p } = Uf();
        return (
          we(p, () => {
            o.collectionRef.value = p.value;
          }),
          () => Be(Pr, { ref: d }, f)
        );
      },
    }),
    a = J({
      name: 'CollectionItem',
      inheritAttrs: !1,
      props: { value: { validator: () => !0 } },
      setup(c, { slots: f, attrs: d }) {
        const { primitiveElement: p, currentElement: h } = Uf();
        return (
          it((g) => {
            if (h.value) {
              const _ = Jl(h.value);
              o.itemMap.value.set(_, { ref: h.value, value: c.value }),
                g(() => o.itemMap.value.delete(_));
            }
          }),
          () => Be(Pr, { ...d, [Jf]: '', ref: p }, f)
        );
      },
    }),
    l = S(() => Array.from(o.itemMap.value.values())),
    u = S(() => o.itemMap.value.size);
  return {
    getItems: s,
    reactiveItems: l,
    itemMapSize: u,
    CollectionSlot: i,
    CollectionItem: a,
  };
}
var PP = J({
    __name: 'VisuallyHidden',
    props: {
      feature: { type: String, required: !1, default: 'focusable' },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'span' },
    },
    setup(e) {
      return (t, n) => (
        T(),
        L(
          y(_e),
          {
            as: t.as,
            'as-child': t.asChild,
            'aria-hidden': t.feature === 'focusable' ? 'true' : void 0,
            'data-hidden': t.feature === 'fully-hidden' ? '' : void 0,
            tabindex: t.feature === 'fully-hidden' ? '-1' : void 0,
            style: {
              position: 'absolute',
              border: 0,
              width: '1px',
              height: '1px',
              padding: 0,
              margin: '-1px',
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              clipPath: 'inset(50%)',
              whiteSpace: 'nowrap',
              wordWrap: 'normal',
              top: '-1px',
              left: '-1px',
            },
          },
          { default: O(() => [B(t.$slots, 'default')]), _: 3 },
          8,
          ['as', 'as-child', 'aria-hidden', 'data-hidden', 'tabindex']
        )
      );
    },
  }),
  Yi = PP;
const [Jg, TP] = Rt('PopperRoot');
var SP = J({
    inheritAttrs: !1,
    __name: 'PopperRoot',
    setup(e) {
      const t = j();
      return (
        TP({ anchor: t, onAnchorChange: (n) => (t.value = n) }),
        (n, r) => B(n.$slots, 'default')
      );
    },
  }),
  Lc = SP,
  AP = J({
    __name: 'PopperAnchor',
    props: {
      reference: { type: null, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    setup(e) {
      const t = e,
        { forwardRef: n, currentElement: r } = ve(),
        o = Jg();
      return (
        Gp(() => {
          o.onAnchorChange(t.reference ?? r.value);
        }),
        (s, i) => (
          T(),
          L(
            y(_e),
            { ref: y(n), as: s.as, 'as-child': s.asChild },
            { default: O(() => [B(s.$slots, 'default')]), _: 3 },
            8,
            ['as', 'as-child']
          )
        )
      );
    },
  }),
  Xi = AP;
const OP = { key: 0, d: 'M0 0L6 6L12 0' },
  RP = {
    key: 1,
    d: 'M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0',
  };
var IP = J({
    __name: 'Arrow',
    props: {
      width: { type: Number, required: !1, default: 10 },
      height: { type: Number, required: !1, default: 5 },
      rounded: { type: Boolean, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'svg' },
    },
    setup(e) {
      const t = e;
      return (
        ve(),
        (n, r) => (
          T(),
          L(
            y(_e),
            te(t, {
              width: n.width,
              height: n.height,
              viewBox: n.asChild ? void 0 : '0 0 12 6',
              preserveAspectRatio: n.asChild ? void 0 : 'none',
            }),
            {
              default: O(() => [
                B(n.$slots, 'default', {}, () => [
                  n.rounded ? (T(), ge('path', RP)) : (T(), ge('path', OP)),
                ]),
              ]),
              _: 3,
            },
            16,
            ['width', 'height', 'viewBox', 'preserveAspectRatio']
          )
        )
      );
    },
  }),
  LP = IP;
function DP(e) {
  return e !== null;
}
function qP(e) {
  return {
    name: 'transformOrigin',
    options: e,
    fn(t) {
      const { placement: n, rects: r, middlewareData: o } = t,
        i = o.arrow?.centerOffset !== 0,
        a = i ? 0 : e.arrowWidth,
        l = i ? 0 : e.arrowHeight,
        [u, c] = kl(n),
        f = { start: '0%', center: '50%', end: '100%' }[c],
        d = (o.arrow?.x ?? 0) + a / 2,
        p = (o.arrow?.y ?? 0) + l / 2;
      let h = '',
        g = '';
      return (
        u === 'bottom'
          ? ((h = i ? f : `${d}px`), (g = `${-l}px`))
          : u === 'top'
          ? ((h = i ? f : `${d}px`), (g = `${r.floating.height + l}px`))
          : u === 'right'
          ? ((h = `${-l}px`), (g = i ? f : `${p}px`))
          : u === 'left' &&
            ((h = `${r.floating.width + l}px`), (g = i ? f : `${p}px`)),
        { data: { x: h, y: g } }
      );
    },
  };
}
function kl(e) {
  const [t, n = 'center'] = e.split('-');
  return [t, n];
}
const MP = ['top', 'right', 'bottom', 'left'],
  nr = Math.min,
  Vt = Math.max,
  gi = Math.round,
  xs = Math.floor,
  vn = (e) => ({ x: e, y: e }),
  NP = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  $P = { start: 'end', end: 'start' };
function Cl(e, t, n) {
  return Vt(e, nr(t, n));
}
function Nn(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function $n(e) {
  return e.split('-')[0];
}
function fo(e) {
  return e.split('-')[1];
}
function Dc(e) {
  return e === 'x' ? 'y' : 'x';
}
function qc(e) {
  return e === 'y' ? 'height' : 'width';
}
const BP = new Set(['top', 'bottom']);
function gn(e) {
  return BP.has($n(e)) ? 'y' : 'x';
}
function Mc(e) {
  return Dc(gn(e));
}
function VP(e, t, n) {
  n === void 0 && (n = !1);
  const r = fo(e),
    o = Mc(e),
    s = qc(o);
  let i =
    o === 'x'
      ? r === (n ? 'end' : 'start')
        ? 'right'
        : 'left'
      : r === 'start'
      ? 'bottom'
      : 'top';
  return t.reference[s] > t.floating[s] && (i = mi(i)), [i, mi(i)];
}
function jP(e) {
  const t = mi(e);
  return [El(e), t, El(t)];
}
function El(e) {
  return e.replace(/start|end/g, (t) => $P[t]);
}
const Qf = ['left', 'right'],
  Zf = ['right', 'left'],
  FP = ['top', 'bottom'],
  zP = ['bottom', 'top'];
function HP(e, t, n) {
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? Zf : Qf) : t ? Qf : Zf;
    case 'left':
    case 'right':
      return t ? FP : zP;
    default:
      return [];
  }
}
function UP(e, t, n, r) {
  const o = fo(e);
  let s = HP($n(e), n === 'start', r);
  return (
    o && ((s = s.map((i) => i + '-' + o)), t && (s = s.concat(s.map(El)))), s
  );
}
function mi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => NP[t]);
}
function WP(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Qg(e) {
  return typeof e != 'number'
    ? WP(e)
    : { top: e, right: e, bottom: e, left: e };
}
function vi(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function ed(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = gn(t),
    i = Mc(t),
    a = qc(i),
    l = $n(t),
    u = s === 'y',
    c = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    d = r[a] / 2 - o[a] / 2;
  let p;
  switch (l) {
    case 'top':
      p = { x: c, y: r.y - o.height };
      break;
    case 'bottom':
      p = { x: c, y: r.y + r.height };
      break;
    case 'right':
      p = { x: r.x + r.width, y: f };
      break;
    case 'left':
      p = { x: r.x - o.width, y: f };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (fo(t)) {
    case 'start':
      p[i] -= d * (n && u ? -1 : 1);
      break;
    case 'end':
      p[i] += d * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const KP = async (e, t, n) => {
  const {
      placement: r = 'bottom',
      strategy: o = 'absolute',
      middleware: s = [],
      platform: i,
    } = n,
    a = s.filter(Boolean),
    l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: f } = ed(u, r, l),
    d = r,
    p = {},
    h = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: _, fn: x } = a[g],
      {
        x: b,
        y: v,
        data: m,
        reset: w,
      } = await x({
        x: c,
        y: f,
        initialPlacement: r,
        placement: d,
        strategy: o,
        middlewareData: p,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (c = b ?? c),
      (f = v ?? f),
      (p = { ...p, [_]: { ...p[_], ...m } }),
      w &&
        h <= 50 &&
        (h++,
        typeof w == 'object' &&
          (w.placement && (d = w.placement),
          w.rects &&
            (u =
              w.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : w.rects),
          ({ x: c, y: f } = ed(u, d, l))),
        (g = -1));
  }
  return { x: c, y: f, placement: d, strategy: o, middlewareData: p };
};
async function Go(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: a, strategy: l } = e,
    {
      boundary: u = 'clippingAncestors',
      rootBoundary: c = 'viewport',
      elementContext: f = 'floating',
      altBoundary: d = !1,
      padding: p = 0,
    } = Nn(t, e),
    h = Qg(p),
    _ = a[d ? (f === 'floating' ? 'reference' : 'floating') : f],
    x = vi(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(_))) == null ||
          n
            ? _
            : _.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      })
    ),
    b =
      f === 'floating'
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    v = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(a.floating)),
    m = (await (s.isElement == null ? void 0 : s.isElement(v)))
      ? (await (s.getScale == null ? void 0 : s.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    w = vi(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: b,
            offsetParent: v,
            strategy: l,
          })
        : b
    );
  return {
    top: (x.top - w.top + h.top) / m.y,
    bottom: (w.bottom - x.bottom + h.bottom) / m.y,
    left: (x.left - w.left + h.left) / m.x,
    right: (w.right - x.right + h.right) / m.x,
  };
}
const GP = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = Nn(e, t) || {};
      if (u == null) return {};
      const f = Qg(c),
        d = { x: n, y: r },
        p = Mc(o),
        h = qc(p),
        g = await i.getDimensions(u),
        _ = p === 'y',
        x = _ ? 'top' : 'left',
        b = _ ? 'bottom' : 'right',
        v = _ ? 'clientHeight' : 'clientWidth',
        m = s.reference[h] + s.reference[p] - d[p] - s.floating[h],
        w = d[p] - s.reference[p],
        C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let E = C ? C[v] : 0;
      (!E || !(await (i.isElement == null ? void 0 : i.isElement(C)))) &&
        (E = a.floating[v] || s.floating[h]);
      const A = m / 2 - w / 2,
        R = E / 2 - g[h] / 2 - 1,
        D = nr(f[x], R),
        X = nr(f[b], R),
        M = D,
        Z = E - g[h] - X,
        G = E / 2 - g[h] / 2 + A,
        Q = Cl(M, G, Z),
        $ =
          !l.arrow &&
          fo(o) != null &&
          G !== Q &&
          s.reference[h] / 2 - (G < M ? D : X) - g[h] / 2 < 0,
        U = $ ? (G < M ? G - M : G - Z) : 0;
      return {
        [p]: d[p] + U,
        data: {
          [p]: Q,
          centerOffset: G - Q - U,
          ...($ && { alignmentOffset: U }),
        },
        reset: $,
      };
    },
  }),
  YP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: f = !0,
              fallbackPlacements: d,
              fallbackStrategy: p = 'bestFit',
              fallbackAxisSideDirection: h = 'none',
              flipAlignment: g = !0,
              ..._
            } = Nn(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const x = $n(o),
            b = gn(a),
            v = $n(a) === a,
            m = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            w = d || (v || !g ? [mi(a)] : jP(a)),
            C = h !== 'none';
          !d && C && w.push(...UP(a, g, h, m));
          const E = [a, ...w],
            A = await Go(t, _),
            R = [];
          let D = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((c && R.push(A[x]), f)) {
            const G = VP(o, i, m);
            R.push(A[G[0]], A[G[1]]);
          }
          if (
            ((D = [...D, { placement: o, overflows: R }]),
            !R.every((G) => G <= 0))
          ) {
            var X, M;
            const G = (((X = s.flip) == null ? void 0 : X.index) || 0) + 1,
              Q = E[G];
            if (
              Q &&
              (!(f === 'alignment' ? b !== gn(Q) : !1) ||
                D.every((I) =>
                  gn(I.placement) === b ? I.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: G, overflows: D },
                reset: { placement: Q },
              };
            let $ =
              (M = D.filter((U) => U.overflows[0] <= 0).sort(
                (U, I) => U.overflows[1] - I.overflows[1]
              )[0]) == null
                ? void 0
                : M.placement;
            if (!$)
              switch (p) {
                case 'bestFit': {
                  var Z;
                  const U =
                    (Z = D.filter((I) => {
                      if (C) {
                        const ie = gn(I.placement);
                        return ie === b || ie === 'y';
                      }
                      return !0;
                    })
                      .map((I) => [
                        I.placement,
                        I.overflows
                          .filter((ie) => ie > 0)
                          .reduce((ie, Ee) => ie + Ee, 0),
                      ])
                      .sort((I, ie) => I[1] - ie[1])[0]) == null
                      ? void 0
                      : Z[0];
                  U && ($ = U);
                  break;
                }
                case 'initialPlacement':
                  $ = a;
                  break;
              }
            if (o !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function td(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function nd(e) {
  return MP.some((t) => e[t] >= 0);
}
const XP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'hide',
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = 'referenceHidden', ...o } = Nn(e, t);
          switch (r) {
            case 'referenceHidden': {
              const s = await Go(t, { ...o, elementContext: 'reference' }),
                i = td(s, n.reference);
              return {
                data: { referenceHiddenOffsets: i, referenceHidden: nd(i) },
              };
            }
            case 'escaped': {
              const s = await Go(t, { ...o, altBoundary: !0 }),
                i = td(s, n.floating);
              return { data: { escapedOffsets: i, escaped: nd(i) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Zg = new Set(['left', 'top']);
async function JP(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = $n(n),
    a = fo(n),
    l = gn(n) === 'y',
    u = Zg.has(i) ? -1 : 1,
    c = s && l ? -1 : 1,
    f = Nn(t, e);
  let {
    mainAxis: d,
    crossAxis: p,
    alignmentAxis: h,
  } = typeof f == 'number'
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    a && typeof h == 'number' && (p = a === 'end' ? h * -1 : h),
    l ? { x: p * c, y: d * u } : { x: d * u, y: p * c }
  );
}
const QP = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: a } = t,
            l = await JP(t, e);
          return i === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: s + l.y, data: { ...l, placement: i } };
        },
      }
    );
  },
  ZP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: a = {
                fn: (_) => {
                  let { x, y: b } = _;
                  return { x, y: b };
                },
              },
              ...l
            } = Nn(e, t),
            u = { x: n, y: r },
            c = await Go(t, l),
            f = gn($n(o)),
            d = Dc(f);
          let p = u[d],
            h = u[f];
          if (s) {
            const _ = d === 'y' ? 'top' : 'left',
              x = d === 'y' ? 'bottom' : 'right',
              b = p + c[_],
              v = p - c[x];
            p = Cl(b, p, v);
          }
          if (i) {
            const _ = f === 'y' ? 'top' : 'left',
              x = f === 'y' ? 'bottom' : 'right',
              b = h + c[_],
              v = h - c[x];
            h = Cl(b, h, v);
          }
          const g = a.fn({ ...t, [d]: p, [f]: h });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [d]: s, [f]: i } },
          };
        },
      }
    );
  },
  eT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = Nn(e, t),
            c = { x: n, y: r },
            f = gn(o),
            d = Dc(f);
          let p = c[d],
            h = c[f];
          const g = Nn(a, t),
            _ =
              typeof g == 'number'
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (l) {
            const v = d === 'y' ? 'height' : 'width',
              m = s.reference[d] - s.floating[v] + _.mainAxis,
              w = s.reference[d] + s.reference[v] - _.mainAxis;
            p < m ? (p = m) : p > w && (p = w);
          }
          if (u) {
            var x, b;
            const v = d === 'y' ? 'width' : 'height',
              m = Zg.has($n(o)),
              w =
                s.reference[f] -
                s.floating[v] +
                ((m && ((x = i.offset) == null ? void 0 : x[f])) || 0) +
                (m ? 0 : _.crossAxis),
              C =
                s.reference[f] +
                s.reference[v] +
                (m ? 0 : ((b = i.offset) == null ? void 0 : b[f]) || 0) -
                (m ? _.crossAxis : 0);
            h < w ? (h = w) : h > C && (h = C);
          }
          return { [d]: p, [f]: h };
        },
      }
    );
  },
  tT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: s, platform: i, elements: a } = t,
            { apply: l = () => {}, ...u } = Nn(e, t),
            c = await Go(t, u),
            f = $n(o),
            d = fo(o),
            p = gn(o) === 'y',
            { width: h, height: g } = s.floating;
          let _, x;
          f === 'top' || f === 'bottom'
            ? ((_ = f),
              (x =
                d ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((x = f), (_ = d === 'end' ? 'top' : 'bottom'));
          const b = g - c.top - c.bottom,
            v = h - c.left - c.right,
            m = nr(g - c[_], b),
            w = nr(h - c[x], v),
            C = !t.middlewareData.shift;
          let E = m,
            A = w;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (A = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (E = b),
            C && !d)
          ) {
            const D = Vt(c.left, 0),
              X = Vt(c.right, 0),
              M = Vt(c.top, 0),
              Z = Vt(c.bottom, 0);
            p
              ? (A = h - 2 * (D !== 0 || X !== 0 ? D + X : Vt(c.left, c.right)))
              : (E =
                  g - 2 * (M !== 0 || Z !== 0 ? M + Z : Vt(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: A, availableHeight: E });
          const R = await i.getDimensions(a.floating);
          return h !== R.width || g !== R.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Ji() {
  return typeof window < 'u';
}
function Ir(e) {
  return Nc(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function jt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function xn(e) {
  var t;
  return (t = (Nc(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Nc(e) {
  return Ji() ? e instanceof Node || e instanceof jt(e).Node : !1;
}
function ln(e) {
  return Ji() ? e instanceof Element || e instanceof jt(e).Element : !1;
}
function bn(e) {
  return Ji() ? e instanceof HTMLElement || e instanceof jt(e).HTMLElement : !1;
}
function rd(e) {
  return !Ji() || typeof ShadowRoot > 'u'
    ? !1
    : e instanceof ShadowRoot || e instanceof jt(e).ShadowRoot;
}
const nT = new Set(['inline', 'contents']);
function is(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = cn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !nT.has(o);
}
const rT = new Set(['table', 'td', 'th']);
function oT(e) {
  return rT.has(Ir(e));
}
const sT = [':popover-open', ':modal'];
function Qi(e) {
  return sT.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const iT = ['transform', 'translate', 'scale', 'rotate', 'perspective'],
  aT = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'],
  lT = ['paint', 'layout', 'strict', 'content'];
function $c(e) {
  const t = Bc(),
    n = ln(e) ? cn(e) : e;
  return (
    iT.some((r) => (n[r] ? n[r] !== 'none' : !1)) ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!t && (n.filter ? n.filter !== 'none' : !1)) ||
    aT.some((r) => (n.willChange || '').includes(r)) ||
    lT.some((r) => (n.contain || '').includes(r))
  );
}
function cT(e) {
  let t = rr(e);
  for (; bn(t) && !so(t); ) {
    if ($c(t)) return t;
    if (Qi(t)) return null;
    t = rr(t);
  }
  return null;
}
function Bc() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none');
}
const uT = new Set(['html', 'body', '#document']);
function so(e) {
  return uT.has(Ir(e));
}
function cn(e) {
  return jt(e).getComputedStyle(e);
}
function Zi(e) {
  return ln(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function rr(e) {
  if (Ir(e) === 'html') return e;
  const t = e.assignedSlot || e.parentNode || (rd(e) && e.host) || xn(e);
  return rd(t) ? t.host : t;
}
function em(e) {
  const t = rr(e);
  return so(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : bn(t) && is(t)
    ? t
    : em(t);
}
function Yo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = em(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = jt(o);
  if (s) {
    const a = Pl(i);
    return t.concat(
      i,
      i.visualViewport || [],
      is(o) ? o : [],
      a && n ? Yo(a) : []
    );
  }
  return t.concat(o, Yo(o, [], n));
}
function Pl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function tm(e) {
  const t = cn(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = bn(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    a = gi(n) !== s || gi(r) !== i;
  return a && ((n = s), (r = i)), { width: n, height: r, $: a };
}
function Vc(e) {
  return ln(e) ? e : e.contextElement;
}
function Jr(e) {
  const t = Vc(e);
  if (!bn(t)) return vn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = tm(t);
  let i = (s ? gi(n.width) : n.width) / r,
    a = (s ? gi(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: i, y: a }
  );
}
const fT = vn(0);
function nm(e) {
  const t = jt(e);
  return !Bc() || !t.visualViewport
    ? fT
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function dT(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== jt(e)) ? !1 : t;
}
function Tr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = Vc(e);
  let i = vn(1);
  t && (r ? ln(r) && (i = Jr(r)) : (i = Jr(e)));
  const a = dT(s, n, r) ? nm(s) : vn(0);
  let l = (o.left + a.x) / i.x,
    u = (o.top + a.y) / i.y,
    c = o.width / i.x,
    f = o.height / i.y;
  if (s) {
    const d = jt(s),
      p = r && ln(r) ? jt(r) : r;
    let h = d,
      g = Pl(h);
    for (; g && r && p !== h; ) {
      const _ = Jr(g),
        x = g.getBoundingClientRect(),
        b = cn(g),
        v = x.left + (g.clientLeft + parseFloat(b.paddingLeft)) * _.x,
        m = x.top + (g.clientTop + parseFloat(b.paddingTop)) * _.y;
      (l *= _.x),
        (u *= _.y),
        (c *= _.x),
        (f *= _.y),
        (l += v),
        (u += m),
        (h = jt(g)),
        (g = Pl(h));
    }
  }
  return vi({ width: c, height: f, x: l, y: u });
}
function ea(e, t) {
  const n = Zi(e).scrollLeft;
  return t ? t.left + n : Tr(xn(e)).left + n;
}
function rm(e, t) {
  const n = e.getBoundingClientRect(),
    r = n.left + t.scrollLeft - ea(e, n),
    o = n.top + t.scrollTop;
  return { x: r, y: o };
}
function pT(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === 'fixed',
    i = xn(r),
    a = t ? Qi(t.floating) : !1;
  if (r === i || (a && s)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = vn(1);
  const c = vn(0),
    f = bn(r);
  if (
    (f || (!f && !s)) &&
    ((Ir(r) !== 'body' || is(i)) && (l = Zi(r)), bn(r))
  ) {
    const p = Tr(r);
    (u = Jr(r)), (c.x = p.x + r.clientLeft), (c.y = p.y + r.clientTop);
  }
  const d = i && !f && !s ? rm(i, l) : vn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + d.y,
  };
}
function hT(e) {
  return Array.from(e.getClientRects());
}
function gT(e) {
  const t = xn(e),
    n = Zi(e),
    r = e.ownerDocument.body,
    o = Vt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = Vt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + ea(e);
  const a = -n.scrollTop;
  return (
    cn(r).direction === 'rtl' && (i += Vt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: a }
  );
}
const od = 25;
function mT(e, t) {
  const n = jt(e),
    r = xn(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const c = Bc();
    (!c || (c && t === 'fixed')) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  const u = ea(r);
  if (u <= 0) {
    const c = r.ownerDocument,
      f = c.body,
      d = getComputedStyle(f),
      p =
        (c.compatMode === 'CSS1Compat' &&
          parseFloat(d.marginLeft) + parseFloat(d.marginRight)) ||
        0,
      h = Math.abs(r.clientWidth - f.clientWidth - p);
    h <= od && (s -= h);
  } else u <= od && (s += u);
  return { width: s, height: i, x: a, y: l };
}
const vT = new Set(['absolute', 'fixed']);
function yT(e, t) {
  const n = Tr(e, !0, t === 'fixed'),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = bn(e) ? Jr(e) : vn(1),
    i = e.clientWidth * s.x,
    a = e.clientHeight * s.y,
    l = o * s.x,
    u = r * s.y;
  return { width: i, height: a, x: l, y: u };
}
function sd(e, t, n) {
  let r;
  if (t === 'viewport') r = mT(e, n);
  else if (t === 'document') r = gT(xn(e));
  else if (ln(t)) r = yT(t, n);
  else {
    const o = nm(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return vi(r);
}
function om(e, t) {
  const n = rr(e);
  return n === t || !ln(n) || so(n)
    ? !1
    : cn(n).position === 'fixed' || om(n, t);
}
function bT(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Yo(e, [], !1).filter((a) => ln(a) && Ir(a) !== 'body'),
    o = null;
  const s = cn(e).position === 'fixed';
  let i = s ? rr(e) : e;
  for (; ln(i) && !so(i); ) {
    const a = cn(i),
      l = $c(i);
    !l && a.position === 'fixed' && (o = null),
      (
        s
          ? !l && !o
          : (!l && a.position === 'static' && !!o && vT.has(o.position)) ||
            (is(i) && !l && om(e, i))
      )
        ? (r = r.filter((c) => c !== i))
        : (o = a),
      (i = rr(i));
  }
  return t.set(e, r), r;
}
function _T(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === 'clippingAncestors'
        ? Qi(t)
          ? []
          : bT(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = i[0],
    l = i.reduce((u, c) => {
      const f = sd(t, c, o);
      return (
        (u.top = Vt(f.top, u.top)),
        (u.right = nr(f.right, u.right)),
        (u.bottom = nr(f.bottom, u.bottom)),
        (u.left = Vt(f.left, u.left)),
        u
      );
    }, sd(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function wT(e) {
  const { width: t, height: n } = tm(e);
  return { width: t, height: n };
}
function xT(e, t, n) {
  const r = bn(t),
    o = xn(t),
    s = n === 'fixed',
    i = Tr(e, !0, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = vn(0);
  function u() {
    l.x = ea(o);
  }
  if (r || (!r && !s))
    if (((Ir(t) !== 'body' || is(o)) && (a = Zi(t)), r)) {
      const p = Tr(t, !0, s, t);
      (l.x = p.x + t.clientLeft), (l.y = p.y + t.clientTop);
    } else o && u();
  s && !r && o && u();
  const c = o && !r && !s ? rm(o, a) : vn(0),
    f = i.left + a.scrollLeft - l.x - c.x,
    d = i.top + a.scrollTop - l.y - c.y;
  return { x: f, y: d, width: i.width, height: i.height };
}
function Da(e) {
  return cn(e).position === 'static';
}
function id(e, t) {
  if (!bn(e) || cn(e).position === 'fixed') return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return xn(e) === n && (n = n.ownerDocument.body), n;
}
function sm(e, t) {
  const n = jt(e);
  if (Qi(e)) return n;
  if (!bn(e)) {
    let o = rr(e);
    for (; o && !so(o); ) {
      if (ln(o) && !Da(o)) return o;
      o = rr(o);
    }
    return n;
  }
  let r = id(e, t);
  for (; r && oT(r) && Da(r); ) r = id(r, t);
  return r && so(r) && Da(r) && !$c(r) ? n : r || cT(e) || n;
}
const kT = async function (e) {
  const t = this.getOffsetParent || sm,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: xT(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function CT(e) {
  return cn(e).direction === 'rtl';
}
const ET = {
  convertOffsetParentRelativeRectToViewportRelativeRect: pT,
  getDocumentElement: xn,
  getClippingRect: _T,
  getOffsetParent: sm,
  getElementRects: kT,
  getClientRects: hT,
  getDimensions: wT,
  getScale: Jr,
  isElement: ln,
  isRTL: CT,
};
function im(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function PT(e, t) {
  let n = null,
    r;
  const o = xn(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const u = e.getBoundingClientRect(),
      { left: c, top: f, width: d, height: p } = u;
    if ((a || t(), !d || !p)) return;
    const h = xs(f),
      g = xs(o.clientWidth - (c + d)),
      _ = xs(o.clientHeight - (f + p)),
      x = xs(c),
      v = {
        rootMargin: -h + 'px ' + -g + 'px ' + -_ + 'px ' + -x + 'px',
        threshold: Vt(0, nr(1, l)) || 1,
      };
    let m = !0;
    function w(C) {
      const E = C[0].intersectionRatio;
      if (E !== l) {
        if (!m) return i();
        E
          ? i(!1, E)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      E === 1 && !im(u, e.getBoundingClientRect()) && i(), (m = !1);
    }
    try {
      n = new IntersectionObserver(w, { ...v, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(w, v);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function TT(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == 'function',
      layoutShift: a = typeof IntersectionObserver == 'function',
      animationFrame: l = !1,
    } = r,
    u = Vc(e),
    c = o || s ? [...(u ? Yo(u) : []), ...Yo(t)] : [];
  c.forEach((x) => {
    o && x.addEventListener('scroll', n, { passive: !0 }),
      s && x.addEventListener('resize', n);
  });
  const f = u && a ? PT(u, n) : null;
  let d = -1,
    p = null;
  i &&
    ((p = new ResizeObserver((x) => {
      let [b] = x;
      b &&
        b.target === u &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(d),
        (d = requestAnimationFrame(() => {
          var v;
          (v = p) == null || v.observe(t);
        }))),
        n();
    })),
    u && !l && p.observe(u),
    p.observe(t));
  let h,
    g = l ? Tr(e) : null;
  l && _();
  function _() {
    const x = Tr(e);
    g && !im(g, x) && n(), (g = x), (h = requestAnimationFrame(_));
  }
  return (
    n(),
    () => {
      var x;
      c.forEach((b) => {
        o && b.removeEventListener('scroll', n),
          s && b.removeEventListener('resize', n);
      }),
        f?.(),
        (x = p) == null || x.disconnect(),
        (p = null),
        l && cancelAnimationFrame(h);
    }
  );
}
const ST = QP,
  AT = ZP,
  ad = YP,
  OT = tT,
  RT = XP,
  IT = GP,
  LT = eT,
  DT = (e, t, n) => {
    const r = new Map(),
      o = { platform: ET, ...n },
      s = { ...o.platform, _c: r };
    return KP(e, t, { ...o, platform: s });
  };
function qT(e) {
  return e != null && typeof e == 'object' && '$el' in e;
}
function Tl(e) {
  if (qT(e)) {
    const t = e.$el;
    return Nc(t) && Ir(t) === '#comment' ? null : t;
  }
  return e;
}
function Fr(e) {
  return typeof e == 'function' ? e() : y(e);
}
function MT(e) {
  return {
    name: 'arrow',
    options: e,
    fn(t) {
      const n = Tl(Fr(e.element));
      return n == null ? {} : IT({ element: n, padding: e.padding }).fn(t);
    },
  };
}
function am(e) {
  return typeof window > 'u'
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ld(e, t) {
  const n = am(e);
  return Math.round(t * n) / n;
}
function NT(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted,
    o = S(() => {
      var E;
      return (E = Fr(n.open)) != null ? E : !0;
    }),
    s = S(() => Fr(n.middleware)),
    i = S(() => {
      var E;
      return (E = Fr(n.placement)) != null ? E : 'bottom';
    }),
    a = S(() => {
      var E;
      return (E = Fr(n.strategy)) != null ? E : 'absolute';
    }),
    l = S(() => {
      var E;
      return (E = Fr(n.transform)) != null ? E : !0;
    }),
    u = S(() => Tl(e.value)),
    c = S(() => Tl(t.value)),
    f = j(0),
    d = j(0),
    p = j(a.value),
    h = j(i.value),
    g = Pe({}),
    _ = j(!1),
    x = S(() => {
      const E = { position: p.value, left: '0', top: '0' };
      if (!c.value) return E;
      const A = ld(c.value, f.value),
        R = ld(c.value, d.value);
      return l.value
        ? {
            ...E,
            transform: 'translate(' + A + 'px, ' + R + 'px)',
            ...(am(c.value) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: p.value, left: A + 'px', top: R + 'px' };
    });
  let b;
  function v() {
    if (u.value == null || c.value == null) return;
    const E = o.value;
    DT(u.value, c.value, {
      middleware: s.value,
      placement: i.value,
      strategy: a.value,
    }).then((A) => {
      (f.value = A.x),
        (d.value = A.y),
        (p.value = A.strategy),
        (h.value = A.placement),
        (g.value = A.middlewareData),
        (_.value = E !== !1);
    });
  }
  function m() {
    typeof b == 'function' && (b(), (b = void 0));
  }
  function w() {
    if ((m(), r === void 0)) {
      v();
      return;
    }
    if (u.value != null && c.value != null) {
      b = r(u.value, c.value, v);
      return;
    }
  }
  function C() {
    o.value || (_.value = !1);
  }
  return (
    we([s, i, a, o], v, { flush: 'sync' }),
    we([u, c], w, { flush: 'sync' }),
    we(o, C, { flush: 'sync' }),
    lo() && Ai(m),
    {
      x: ur(f),
      y: ur(d),
      strategy: ur(p),
      placement: ur(h),
      middlewareData: ur(g),
      isPositioned: ur(_),
      floatingStyles: x,
      update: v,
    }
  );
}
const $T = {
    side: 'bottom',
    sideOffset: 0,
    sideFlip: !0,
    align: 'center',
    alignOffset: 0,
    alignFlip: !0,
    arrowPadding: 0,
    avoidCollisions: !0,
    collisionBoundary: () => [],
    collisionPadding: 0,
    sticky: 'partial',
    hideWhenDetached: !1,
    positionStrategy: 'fixed',
    updatePositionStrategy: 'optimized',
    prioritizePosition: !1,
  },
  [BT, VT] = Rt('PopperContent');
var jT = J({
    inheritAttrs: !1,
    __name: 'PopperContent',
    props: wy(
      {
        side: { type: null, required: !1 },
        sideOffset: { type: Number, required: !1 },
        sideFlip: { type: Boolean, required: !1 },
        align: { type: null, required: !1 },
        alignOffset: { type: Number, required: !1 },
        alignFlip: { type: Boolean, required: !1 },
        avoidCollisions: { type: Boolean, required: !1 },
        collisionBoundary: { type: null, required: !1 },
        collisionPadding: { type: [Number, Object], required: !1 },
        arrowPadding: { type: Number, required: !1 },
        sticky: { type: String, required: !1 },
        hideWhenDetached: { type: Boolean, required: !1 },
        positionStrategy: { type: String, required: !1 },
        updatePositionStrategy: { type: String, required: !1 },
        disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
        prioritizePosition: { type: Boolean, required: !1 },
        reference: { type: null, required: !1 },
        asChild: { type: Boolean, required: !1 },
        as: { type: null, required: !1 },
      },
      { ...$T }
    ),
    emits: ['placed'],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = Jg(),
        { forwardRef: s, currentElement: i } = ve(),
        a = j(),
        l = j(),
        { width: u, height: c } = jE(l),
        f = S(() => n.side + (n.align !== 'center' ? `-${n.align}` : '')),
        d = S(() =>
          typeof n.collisionPadding == 'number'
            ? n.collisionPadding
            : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }
        ),
        p = S(() =>
          Array.isArray(n.collisionBoundary)
            ? n.collisionBoundary
            : [n.collisionBoundary]
        ),
        h = S(() => ({
          padding: d.value,
          boundary: p.value.filter(DP),
          altBoundary: p.value.length > 0,
        })),
        g = S(() => ({ mainAxis: n.sideFlip, crossAxis: n.alignFlip })),
        _ = eE(() => [
          ST({
            mainAxis: n.sideOffset + c.value,
            alignmentAxis: n.alignOffset,
          }),
          n.prioritizePosition &&
            n.avoidCollisions &&
            ad({ ...h.value, ...g.value }),
          n.avoidCollisions &&
            AT({
              mainAxis: !0,
              crossAxis: !!n.prioritizePosition,
              limiter: n.sticky === 'partial' ? LT() : void 0,
              ...h.value,
            }),
          !n.prioritizePosition &&
            n.avoidCollisions &&
            ad({ ...h.value, ...g.value }),
          OT({
            ...h.value,
            apply: ({
              elements: M,
              rects: Z,
              availableWidth: G,
              availableHeight: Q,
            }) => {
              const { width: $, height: U } = Z.reference,
                I = M.floating.style;
              I.setProperty('--reka-popper-available-width', `${G}px`),
                I.setProperty('--reka-popper-available-height', `${Q}px`),
                I.setProperty('--reka-popper-anchor-width', `${$}px`),
                I.setProperty('--reka-popper-anchor-height', `${U}px`);
            },
          }),
          l.value && MT({ element: l.value, padding: n.arrowPadding }),
          qP({ arrowWidth: u.value, arrowHeight: c.value }),
          n.hideWhenDetached && RT({ strategy: 'referenceHidden', ...h.value }),
        ]),
        x = S(() => n.reference ?? o.anchor.value),
        {
          floatingStyles: b,
          placement: v,
          isPositioned: m,
          middlewareData: w,
        } = NT(x, a, {
          strategy: n.positionStrategy,
          placement: f,
          whileElementsMounted: (...M) =>
            TT(...M, {
              layoutShift: !n.disableUpdateOnLayoutShift,
              animationFrame: n.updatePositionStrategy === 'always',
            }),
          middleware: _,
        }),
        C = S(() => kl(v.value)[0]),
        E = S(() => kl(v.value)[1]);
      Gp(() => {
        m.value && r('placed');
      });
      const A = S(() => w.value.arrow?.centerOffset !== 0),
        R = j('');
      it(() => {
        i.value && (R.value = window.getComputedStyle(i.value).zIndex);
      });
      const D = S(() => w.value.arrow?.x ?? 0),
        X = S(() => w.value.arrow?.y ?? 0);
      return (
        VT({
          placedSide: C,
          onArrowChange: (M) => (l.value = M),
          arrowX: D,
          arrowY: X,
          shouldHideArrow: A,
        }),
        (M, Z) => (
          T(),
          ge(
            'div',
            {
              ref_key: 'floatingRef',
              ref: a,
              'data-reka-popper-content-wrapper': '',
              style: nn({
                ...y(b),
                transform: y(m) ? y(b).transform : 'translate(0, -200%)',
                minWidth: 'max-content',
                zIndex: R.value,
                '--reka-popper-transform-origin': [
                  y(w).transformOrigin?.x,
                  y(w).transformOrigin?.y,
                ].join(' '),
                ...(y(w).hide?.referenceHidden && {
                  visibility: 'hidden',
                  pointerEvents: 'none',
                }),
              }),
            },
            [
              z(
                y(_e),
                te({ ref: y(s) }, M.$attrs, {
                  'as-child': n.asChild,
                  as: M.as,
                  'data-side': C.value,
                  'data-align': E.value,
                  style: { animation: y(m) ? void 0 : 'none' },
                }),
                { default: O(() => [B(M.$slots, 'default')]), _: 3 },
                16,
                ['as-child', 'as', 'data-side', 'data-align', 'style']
              ),
            ],
            4
          )
        )
      );
    },
  }),
  jc = jT;
const FT = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' };
var zT = J({
    inheritAttrs: !1,
    __name: 'PopperArrow',
    props: {
      width: { type: Number, required: !1 },
      height: { type: Number, required: !1 },
      rounded: { type: Boolean, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'svg' },
    },
    setup(e) {
      const { forwardRef: t } = ve(),
        n = BT(),
        r = S(() => FT[n.placedSide.value]);
      return (o, s) => (
        T(),
        ge(
          'span',
          {
            ref: (i) => {
              y(n).onArrowChange(i);
            },
            style: nn({
              position: 'absolute',
              left: y(n).arrowX?.value ? `${y(n).arrowX?.value}px` : void 0,
              top: y(n).arrowY?.value ? `${y(n).arrowY?.value}px` : void 0,
              [r.value]: 0,
              transformOrigin: {
                top: '',
                right: '0 0',
                bottom: 'center 0',
                left: '100% 0',
              }[y(n).placedSide.value],
              transform: {
                top: 'translateY(100%)',
                right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                bottom: 'rotate(180deg)',
                left: 'translateY(50%) rotate(-90deg) translateX(50%)',
              }[y(n).placedSide.value],
              visibility: y(n).shouldHideArrow.value ? 'hidden' : void 0,
            }),
          },
          [
            z(
              LP,
              te(o.$attrs, {
                ref: y(t),
                style: { display: 'block' },
                as: o.as,
                'as-child': o.asChild,
                rounded: o.rounded,
                width: o.width,
                height: o.height,
              }),
              { default: O(() => [B(o.$slots, 'default')]), _: 3 },
              16,
              ['as', 'as-child', 'rounded', 'width', 'height']
            ),
          ],
          4
        )
      );
    },
  }),
  Fc = zT;
const [Lr, HT] = Rt('PopoverRoot');
var UT = J({
    __name: 'PopoverRoot',
    props: {
      defaultOpen: { type: Boolean, required: !1, default: !1 },
      open: { type: Boolean, required: !1, default: void 0 },
      modal: { type: Boolean, required: !1, default: !1 },
    },
    emits: ['update:open'],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        { modal: o } = Ot(n),
        s = Mn(n, 'open', r, {
          defaultValue: n.defaultOpen,
          passive: n.open === void 0,
        }),
        i = j(),
        a = j(!1);
      return (
        HT({
          contentId: '',
          triggerId: '',
          modal: o,
          open: s,
          onOpenChange: (l) => {
            s.value = l;
          },
          onOpenToggle: () => {
            s.value = !s.value;
          },
          triggerElement: i,
          hasCustomAnchor: a,
        }),
        (l, u) => (
          T(),
          L(y(Lc), null, {
            default: O(() => [
              B(l.$slots, 'default', {
                open: y(s),
                close: () => (s.value = !1),
              }),
            ]),
            _: 3,
          })
        )
      );
    },
  }),
  WT = UT,
  KT = J({
    __name: 'PopoverAnchor',
    props: {
      reference: { type: null, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    setup(e) {
      const t = e;
      ve();
      const n = Lr();
      return (
        tc(() => {
          n.hasCustomAnchor.value = !0;
        }),
        wn(() => {
          n.hasCustomAnchor.value = !1;
        }),
        (r, o) => (
          T(),
          L(
            y(Xi),
            tt(ut(t)),
            { default: O(() => [B(r.$slots, 'default')]), _: 3 },
            16
          )
        )
      );
    },
  }),
  GT = KT,
  YT = J({
    __name: 'PopoverArrow',
    props: {
      width: { type: Number, required: !1, default: 10 },
      height: { type: Number, required: !1, default: 5 },
      rounded: { type: Boolean, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'svg' },
    },
    setup(e) {
      const t = e;
      return (
        ve(),
        (n, r) => (
          T(),
          L(
            y(Fc),
            tt(ut(t)),
            { default: O(() => [B(n.$slots, 'default')]), _: 3 },
            16
          )
        )
      );
    },
  }),
  XT = YT,
  JT = J({
    __name: 'PopoverClose',
    props: {
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'button' },
    },
    setup(e) {
      const t = e;
      ve();
      const n = Lr();
      return (r, o) => (
        T(),
        L(
          y(_e),
          {
            type: r.as === 'button' ? 'button' : void 0,
            as: r.as,
            'as-child': t.asChild,
            onClick: o[0] || (o[0] = (s) => y(n).onOpenChange(!1)),
          },
          { default: O(() => [B(r.$slots, 'default')]), _: 3 },
          8,
          ['type', 'as', 'as-child']
        )
      );
    },
  }),
  QT = JT,
  ZT = J({
    __name: 'PopoverContentImpl',
    props: {
      trapFocus: { type: Boolean, required: !1 },
      side: { type: null, required: !1 },
      sideOffset: { type: Number, required: !1 },
      sideFlip: { type: Boolean, required: !1 },
      align: { type: null, required: !1 },
      alignOffset: { type: Number, required: !1 },
      alignFlip: { type: Boolean, required: !1 },
      avoidCollisions: { type: Boolean, required: !1 },
      collisionBoundary: { type: null, required: !1 },
      collisionPadding: { type: [Number, Object], required: !1 },
      arrowPadding: { type: Number, required: !1 },
      sticky: { type: String, required: !1 },
      hideWhenDetached: { type: Boolean, required: !1 },
      positionStrategy: { type: String, required: !1 },
      updatePositionStrategy: { type: String, required: !1 },
      disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
      prioritizePosition: { type: Boolean, required: !1 },
      reference: { type: null, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
      disableOutsidePointerEvents: { type: Boolean, required: !1 },
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
      'openAutoFocus',
      'closeAutoFocus',
    ],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = Fn($g(n, 'trapFocus', 'disableOutsidePointerEvents')),
        { forwardRef: s } = ve(),
        i = Lr();
      return (
        AE(),
        (a, l) => (
          T(),
          L(
            y(CP),
            {
              'as-child': '',
              loop: '',
              trapped: a.trapFocus,
              onMountAutoFocus: l[5] || (l[5] = (u) => r('openAutoFocus', u)),
              onUnmountAutoFocus:
                l[6] || (l[6] = (u) => r('closeAutoFocus', u)),
            },
            {
              default: O(() => [
                z(
                  y(Ki),
                  {
                    'as-child': '',
                    'disable-outside-pointer-events':
                      a.disableOutsidePointerEvents,
                    onPointerDownOutside:
                      l[0] || (l[0] = (u) => r('pointerDownOutside', u)),
                    onInteractOutside:
                      l[1] || (l[1] = (u) => r('interactOutside', u)),
                    onEscapeKeyDown:
                      l[2] || (l[2] = (u) => r('escapeKeyDown', u)),
                    onFocusOutside:
                      l[3] || (l[3] = (u) => r('focusOutside', u)),
                    onDismiss: l[4] || (l[4] = (u) => y(i).onOpenChange(!1)),
                  },
                  {
                    default: O(() => [
                      z(
                        y(jc),
                        te(y(o), {
                          id: y(i).contentId,
                          ref: y(s),
                          'data-state': y(i).open.value ? 'open' : 'closed',
                          'aria-labelledby': y(i).triggerId,
                          style: {
                            '--reka-popover-content-transform-origin':
                              'var(--reka-popper-transform-origin)',
                            '--reka-popover-content-available-width':
                              'var(--reka-popper-available-width)',
                            '--reka-popover-content-available-height':
                              'var(--reka-popper-available-height)',
                            '--reka-popover-trigger-width':
                              'var(--reka-popper-anchor-width)',
                            '--reka-popover-trigger-height':
                              'var(--reka-popper-anchor-height)',
                          },
                          role: 'dialog',
                        }),
                        { default: O(() => [B(a.$slots, 'default')]), _: 3 },
                        16,
                        ['id', 'data-state', 'aria-labelledby']
                      ),
                    ]),
                    _: 3,
                  },
                  8,
                  ['disable-outside-pointer-events']
                ),
              ]),
              _: 3,
            },
            8,
            ['trapped']
          )
        )
      );
    },
  }),
  lm = ZT,
  eS = J({
    __name: 'PopoverContentModal',
    props: {
      side: { type: null, required: !1 },
      sideOffset: { type: Number, required: !1 },
      sideFlip: { type: Boolean, required: !1 },
      align: { type: null, required: !1 },
      alignOffset: { type: Number, required: !1 },
      alignFlip: { type: Boolean, required: !1 },
      avoidCollisions: { type: Boolean, required: !1 },
      collisionBoundary: { type: null, required: !1 },
      collisionPadding: { type: [Number, Object], required: !1 },
      arrowPadding: { type: Number, required: !1 },
      sticky: { type: String, required: !1 },
      hideWhenDetached: { type: Boolean, required: !1 },
      positionStrategy: { type: String, required: !1 },
      updatePositionStrategy: { type: String, required: !1 },
      disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
      prioritizePosition: { type: Boolean, required: !1 },
      reference: { type: null, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
      disableOutsidePointerEvents: { type: Boolean, required: !1 },
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
      'openAutoFocus',
      'closeAutoFocus',
    ],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = Lr(),
        s = j(!1);
      PE(!0);
      const i = Gt(n, r),
        { forwardRef: a, currentElement: l } = ve();
      return (
        VE(l),
        (u, c) => (
          T(),
          L(
            lm,
            te(y(i), {
              ref: y(a),
              'trap-focus': y(o).open.value,
              'disable-outside-pointer-events': '',
              onCloseAutoFocus:
                c[0] ||
                (c[0] = In(
                  (f) => {
                    r('closeAutoFocus', f),
                      s.value || y(o).triggerElement.value?.focus();
                  },
                  ['prevent']
                )),
              onPointerDownOutside:
                c[1] ||
                (c[1] = (f) => {
                  r('pointerDownOutside', f);
                  const d = f.detail.originalEvent,
                    p = d.button === 0 && d.ctrlKey === !0,
                    h = d.button === 2 || p;
                  s.value = h;
                }),
              onFocusOutside: c[2] || (c[2] = In(() => {}, ['prevent'])),
            }),
            { default: O(() => [B(u.$slots, 'default')]), _: 3 },
            16,
            ['trap-focus']
          )
        )
      );
    },
  }),
  tS = eS,
  nS = J({
    __name: 'PopoverContentNonModal',
    props: {
      side: { type: null, required: !1 },
      sideOffset: { type: Number, required: !1 },
      sideFlip: { type: Boolean, required: !1 },
      align: { type: null, required: !1 },
      alignOffset: { type: Number, required: !1 },
      alignFlip: { type: Boolean, required: !1 },
      avoidCollisions: { type: Boolean, required: !1 },
      collisionBoundary: { type: null, required: !1 },
      collisionPadding: { type: [Number, Object], required: !1 },
      arrowPadding: { type: Number, required: !1 },
      sticky: { type: String, required: !1 },
      hideWhenDetached: { type: Boolean, required: !1 },
      positionStrategy: { type: String, required: !1 },
      updatePositionStrategy: { type: String, required: !1 },
      disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
      prioritizePosition: { type: Boolean, required: !1 },
      reference: { type: null, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
      disableOutsidePointerEvents: { type: Boolean, required: !1 },
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
      'openAutoFocus',
      'closeAutoFocus',
    ],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = Lr(),
        s = j(!1),
        i = j(!1),
        a = Gt(n, r);
      return (l, u) => (
        T(),
        L(
          lm,
          te(y(a), {
            'trap-focus': !1,
            'disable-outside-pointer-events': !1,
            onCloseAutoFocus:
              u[0] ||
              (u[0] = (c) => {
                r('closeAutoFocus', c),
                  c.defaultPrevented ||
                    (s.value || y(o).triggerElement.value?.focus(),
                    c.preventDefault()),
                  (s.value = !1),
                  (i.value = !1);
              }),
            onInteractOutside:
              u[1] ||
              (u[1] = async (c) => {
                r('interactOutside', c),
                  c.defaultPrevented ||
                    ((s.value = !0),
                    c.detail.originalEvent.type === 'pointerdown' &&
                      (i.value = !0));
                const f = c.target;
                y(o).triggerElement.value?.contains(f) && c.preventDefault(),
                  c.detail.originalEvent.type === 'focusin' &&
                    i.value &&
                    c.preventDefault();
              }),
          }),
          { default: O(() => [B(l.$slots, 'default')]), _: 3 },
          16
        )
      );
    },
  }),
  rS = nS,
  oS = J({
    __name: 'PopoverContent',
    props: {
      forceMount: { type: Boolean, required: !1 },
      side: { type: null, required: !1 },
      sideOffset: { type: Number, required: !1 },
      sideFlip: { type: Boolean, required: !1 },
      align: { type: null, required: !1 },
      alignOffset: { type: Number, required: !1 },
      alignFlip: { type: Boolean, required: !1 },
      avoidCollisions: { type: Boolean, required: !1 },
      collisionBoundary: { type: null, required: !1 },
      collisionPadding: { type: [Number, Object], required: !1 },
      arrowPadding: { type: Number, required: !1 },
      sticky: { type: String, required: !1 },
      hideWhenDetached: { type: Boolean, required: !1 },
      positionStrategy: { type: String, required: !1 },
      updatePositionStrategy: { type: String, required: !1 },
      disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
      prioritizePosition: { type: Boolean, required: !1 },
      reference: { type: null, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
      disableOutsidePointerEvents: { type: Boolean, required: !1 },
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
      'openAutoFocus',
      'closeAutoFocus',
    ],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = Lr(),
        s = Gt(n, r),
        { forwardRef: i } = ve();
      return (
        (o.contentId ||= Rr(void 0, 'reka-popover-content')),
        (a, l) => (
          T(),
          L(
            y(or),
            { present: a.forceMount || y(o).open.value },
            {
              default: O(() => [
                y(o).modal.value
                  ? (T(),
                    L(
                      tS,
                      te({ key: 0 }, y(s), { ref: y(i) }),
                      { default: O(() => [B(a.$slots, 'default')]), _: 3 },
                      16
                    ))
                  : (T(),
                    L(
                      rS,
                      te({ key: 1 }, y(s), { ref: y(i) }),
                      { default: O(() => [B(a.$slots, 'default')]), _: 3 },
                      16
                    )),
              ]),
              _: 3,
            },
            8,
            ['present']
          )
        )
      );
    },
  }),
  sS = oS,
  iS = J({
    __name: 'PopoverPortal',
    props: {
      to: { type: null, required: !1 },
      disabled: { type: Boolean, required: !1 },
      defer: { type: Boolean, required: !1 },
      forceMount: { type: Boolean, required: !1 },
    },
    setup(e) {
      const t = e;
      return (n, r) => (
        T(),
        L(
          y(Gi),
          tt(ut(t)),
          { default: O(() => [B(n.$slots, 'default')]), _: 3 },
          16
        )
      );
    },
  }),
  aS = iS,
  lS = J({
    __name: 'PopoverTrigger',
    props: {
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'button' },
    },
    setup(e) {
      const t = e,
        n = Lr(),
        { forwardRef: r, currentElement: o } = ve();
      return (
        (n.triggerId ||= Rr(void 0, 'reka-popover-trigger')),
        Ye(() => {
          n.triggerElement.value = o.value;
        }),
        (s, i) => (
          T(),
          L(
            Tt(y(n).hasCustomAnchor.value ? y(_e) : y(Xi)),
            { 'as-child': '' },
            {
              default: O(() => [
                z(
                  y(_e),
                  {
                    id: y(n).triggerId,
                    ref: y(r),
                    type: s.as === 'button' ? 'button' : void 0,
                    'aria-haspopup': 'dialog',
                    'aria-expanded': y(n).open.value,
                    'aria-controls': y(n).contentId,
                    'data-state': y(n).open.value ? 'open' : 'closed',
                    as: s.as,
                    'as-child': t.asChild,
                    onClick: y(n).onOpenToggle,
                  },
                  { default: O(() => [B(s.$slots, 'default')]), _: 3 },
                  8,
                  [
                    'id',
                    'type',
                    'aria-expanded',
                    'aria-controls',
                    'data-state',
                    'as',
                    'as-child',
                    'onClick',
                  ]
                ),
              ]),
              _: 3,
            }
          )
        )
      );
    },
  }),
  cS = lS,
  uS = J({
    __name: 'HoverCardArrow',
    props: {
      width: { type: Number, required: !1, default: 10 },
      height: { type: Number, required: !1, default: 5 },
      rounded: { type: Boolean, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'svg' },
    },
    setup(e) {
      const t = e;
      return (
        ve(),
        (n, r) => (
          T(),
          L(
            y(Fc),
            tt(ut(t)),
            { default: O(() => [B(n.$slots, 'default')]), _: 3 },
            16
          )
        )
      );
    },
  }),
  fS = uS;
const [zc, dS] = Rt('HoverCardRoot');
var pS = J({
    __name: 'HoverCardRoot',
    props: {
      defaultOpen: { type: Boolean, required: !1, default: !1 },
      open: { type: Boolean, required: !1, default: void 0 },
      openDelay: { type: Number, required: !1, default: 700 },
      closeDelay: { type: Number, required: !1, default: 300 },
    },
    emits: ['update:open'],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        { openDelay: o, closeDelay: s } = Ot(n);
      ve();
      const i = Mn(n, 'open', r, {
          defaultValue: n.defaultOpen,
          passive: n.open === void 0,
        }),
        a = j(0),
        l = j(0),
        u = j(!1),
        c = j(!1),
        f = j(!1),
        d = j();
      function p() {
        clearTimeout(l.value),
          (a.value = window.setTimeout(() => (i.value = !0), o.value));
      }
      function h() {
        clearTimeout(a.value),
          !u.value &&
            !c.value &&
            (l.value = window.setTimeout(() => (i.value = !1), s.value));
      }
      function g() {
        i.value = !1;
      }
      return (
        dS({
          open: i,
          onOpenChange(_) {
            i.value = _;
          },
          onOpen: p,
          onClose: h,
          onDismiss: g,
          hasSelectionRef: u,
          isPointerDownOnContentRef: c,
          isPointerInTransitRef: f,
          triggerElement: d,
        }),
        (_, x) => (
          T(),
          L(y(Lc), null, {
            default: O(() => [B(_.$slots, 'default', { open: y(i) })]),
            _: 3,
          })
        )
      );
    },
  }),
  hS = pS;
function Sl(e) {
  return (t) => (t.pointerType === 'touch' ? void 0 : e());
}
function gS(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) =>
        r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
var mS = J({
    __name: 'HoverCardContentImpl',
    props: {
      side: { type: null, required: !1 },
      sideOffset: { type: Number, required: !1 },
      sideFlip: { type: Boolean, required: !1 },
      align: { type: null, required: !1 },
      alignOffset: { type: Number, required: !1 },
      alignFlip: { type: Boolean, required: !1 },
      avoidCollisions: { type: Boolean, required: !1 },
      collisionBoundary: { type: null, required: !1 },
      collisionPadding: { type: [Number, Object], required: !1 },
      arrowPadding: { type: Number, required: !1 },
      sticky: { type: String, required: !1 },
      hideWhenDetached: { type: Boolean, required: !1 },
      positionStrategy: { type: String, required: !1 },
      updatePositionStrategy: { type: String, required: !1 },
      disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
      prioritizePosition: { type: Boolean, required: !1 },
      reference: { type: null, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
    ],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = Fn(n),
        { forwardRef: s, currentElement: i } = ve(),
        a = zc(),
        { isPointerInTransit: l, onPointerExit: u } = Wg(a.triggerElement, i);
      mE(a.isPointerInTransitRef, l, { direction: 'rtl' }),
        u(() => {
          a.onClose();
        });
      const c = j(!1);
      let f;
      it((p) => {
        if (c.value) {
          const h = document.body;
          (f = h.style.userSelect || h.style.webkitUserSelect),
            (h.style.userSelect = 'none'),
            (h.style.webkitUserSelect = 'none'),
            p(() => {
              (h.style.userSelect = f), (h.style.webkitUserSelect = f);
            });
        }
      });
      function d() {
        (c.value = !1),
          (a.isPointerDownOnContentRef.value = !1),
          Ze(() => {
            document.getSelection()?.toString() !== '' &&
              (a.hasSelectionRef.value = !0);
          });
      }
      return (
        Ye(() => {
          i.value &&
            (document.addEventListener('pointerup', d),
            gS(i.value).forEach((h) => h.setAttribute('tabindex', '-1')));
        }),
        wn(() => {
          document.removeEventListener('pointerup', d),
            (a.hasSelectionRef.value = !1),
            (a.isPointerDownOnContentRef.value = !1);
        }),
        (p, h) => (
          T(),
          L(
            y(Ki),
            {
              'as-child': '',
              'disable-outside-pointer-events': !1,
              onEscapeKeyDown: h[1] || (h[1] = (g) => r('escapeKeyDown', g)),
              onPointerDownOutside:
                h[2] || (h[2] = (g) => r('pointerDownOutside', g)),
              onFocusOutside:
                h[3] || (h[3] = In((g) => r('focusOutside', g), ['prevent'])),
              onDismiss: y(a).onDismiss,
            },
            {
              default: O(() => [
                z(
                  y(jc),
                  te(
                    { ...y(o), ...p.$attrs },
                    {
                      ref: y(s),
                      'data-state': y(a).open.value ? 'open' : 'closed',
                      style: {
                        userSelect: c.value ? 'text' : void 0,
                        WebkitUserSelect: c.value ? 'text' : void 0,
                        '--reka-hover-card-content-transform-origin':
                          'var(--reka-popper-transform-origin)',
                        '--reka-hover-card-content-available-width':
                          'var(--reka-popper-available-width)',
                        '--reka-hover-card-content-available-height':
                          'var(--reka-popper-available-height)',
                        '--reka-hover-card-trigger-width':
                          'var(--reka-popper-anchor-width)',
                        '--reka-hover-card-trigger-height':
                          'var(--reka-popper-anchor-height)',
                      },
                      onPointerdown:
                        h[0] ||
                        (h[0] = (g) => {
                          g.currentTarget.contains(g.target) && (c.value = !0),
                            (y(a).hasSelectionRef.value = !1),
                            (y(a).isPointerDownOnContentRef.value = !0);
                        }),
                    }
                  ),
                  { default: O(() => [B(p.$slots, 'default')]), _: 3 },
                  16,
                  ['data-state', 'style']
                ),
              ]),
              _: 3,
            },
            8,
            ['onDismiss']
          )
        )
      );
    },
  }),
  vS = mS,
  yS = J({
    __name: 'HoverCardContent',
    props: {
      forceMount: { type: Boolean, required: !1 },
      side: { type: null, required: !1 },
      sideOffset: { type: Number, required: !1 },
      sideFlip: { type: Boolean, required: !1 },
      align: { type: null, required: !1 },
      alignOffset: { type: Number, required: !1 },
      alignFlip: { type: Boolean, required: !1 },
      avoidCollisions: { type: Boolean, required: !1 },
      collisionBoundary: { type: null, required: !1 },
      collisionPadding: { type: [Number, Object], required: !1 },
      arrowPadding: { type: Number, required: !1 },
      sticky: { type: String, required: !1 },
      hideWhenDetached: { type: Boolean, required: !1 },
      positionStrategy: { type: String, required: !1 },
      updatePositionStrategy: { type: String, required: !1 },
      disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
      prioritizePosition: { type: Boolean, required: !1 },
      reference: { type: null, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
    ],
    setup(e, { emit: t }) {
      const o = Gt(e, t),
        { forwardRef: s } = ve(),
        i = zc();
      return (a, l) => (
        T(),
        L(
          y(or),
          { present: a.forceMount || y(i).open.value },
          {
            default: O(() => [
              z(
                vS,
                te(y(o), {
                  ref: y(s),
                  onPointerenter: l[0] || (l[0] = (u) => y(Sl)(y(i).onOpen)(u)),
                }),
                { default: O(() => [B(a.$slots, 'default')]), _: 3 },
                16
              ),
            ]),
            _: 3,
          },
          8,
          ['present']
        )
      );
    },
  }),
  bS = yS,
  _S = J({
    __name: 'HoverCardPortal',
    props: {
      to: { type: null, required: !1 },
      disabled: { type: Boolean, required: !1 },
      defer: { type: Boolean, required: !1 },
      forceMount: { type: Boolean, required: !1 },
    },
    setup(e) {
      const t = e;
      return (n, r) => (
        T(),
        L(
          y(Gi),
          tt(ut(t)),
          { default: O(() => [B(n.$slots, 'default')]), _: 3 },
          16
        )
      );
    },
  }),
  wS = _S,
  xS = J({
    __name: 'HoverCardTrigger',
    props: {
      reference: { type: null, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'a' },
    },
    setup(e) {
      const { forwardRef: t, currentElement: n } = ve(),
        r = zc();
      r.triggerElement = n;
      function o() {
        setTimeout(() => {
          !r.isPointerInTransitRef.value && !r.open.value && r.onClose();
        }, 0);
      }
      return (s, i) => (
        T(),
        L(
          y(Xi),
          { 'as-child': '', reference: s.reference },
          {
            default: O(() => [
              z(
                y(_e),
                {
                  ref: y(t),
                  'as-child': s.asChild,
                  as: s.as,
                  'data-state': y(r).open.value ? 'open' : 'closed',
                  'data-grace-area-trigger': '',
                  onPointerenter: i[0] || (i[0] = (a) => y(Sl)(y(r).onOpen)(a)),
                  onPointerleave: i[1] || (i[1] = (a) => y(Sl)(o)(a)),
                  onFocus: i[2] || (i[2] = (a) => y(r).onOpen()),
                  onBlur: i[3] || (i[3] = (a) => y(r).onClose()),
                },
                { default: O(() => [B(s.$slots, 'default')]), _: 3 },
                8,
                ['as-child', 'as', 'data-state']
              ),
            ]),
            _: 3,
          },
          8,
          ['reference']
        )
      );
    },
  }),
  kS = xS;
const [Dr, CS] = Rt(
  ['NavigationMenuRoot', 'NavigationMenuSub'],
  'NavigationMenuContext'
);
var ES = J({
    __name: 'NavigationMenuRoot',
    props: {
      modelValue: { type: String, required: !1, default: void 0 },
      defaultValue: { type: String, required: !1 },
      dir: { type: String, required: !1 },
      orientation: { type: String, required: !1, default: 'horizontal' },
      delayDuration: { type: Number, required: !1, default: 200 },
      skipDelayDuration: { type: Number, required: !1, default: 300 },
      disableClickTrigger: { type: Boolean, required: !1, default: !1 },
      disableHoverTrigger: { type: Boolean, required: !1, default: !1 },
      disablePointerLeaveClose: { type: Boolean, required: !1 },
      unmountOnHide: { type: Boolean, required: !1, default: !0 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'nav' },
    },
    emits: ['update:modelValue'],
    setup(e, { emit: t }) {
      const n = e,
        o = Mn(n, 'modelValue', t, {
          defaultValue: n.defaultValue ?? '',
          passive: n.modelValue === void 0,
        }),
        s = j(''),
        { forwardRef: i, currentElement: a } = ve(),
        l = j(),
        u = j(),
        c = j(),
        { getItems: f, CollectionSlot: d } = sr({
          key: 'NavigationMenu',
          isProvider: !0,
        }),
        {
          delayDuration: p,
          skipDelayDuration: h,
          dir: g,
          disableClickTrigger: _,
          disableHoverTrigger: x,
          unmountOnHide: b,
        } = Ot(n),
        v = Ug(g),
        m = Sc(!1, h),
        w = S(() => (o.value !== '' || m.value ? 150 : p.value)),
        C = hE((E) => {
          typeof E == 'string' && ((s.value = o.value), (o.value = E));
        }, w);
      return (
        it(() => {
          if (!o.value) return;
          const E = f().map((A) => A.ref);
          c.value = E.find((A) => A.id.includes(o.value));
        }),
        CS({
          isRootMenu: !0,
          modelValue: o,
          previousValue: s,
          baseId: Rr(void 0, 'reka-navigation-menu'),
          disableClickTrigger: _,
          disableHoverTrigger: x,
          dir: v,
          unmountOnHide: b,
          orientation: n.orientation,
          rootNavigationMenu: a,
          indicatorTrack: l,
          activeTrigger: c,
          onIndicatorTrackChange: (E) => {
            l.value = E;
          },
          viewport: u,
          onViewportChange: (E) => {
            u.value = E;
          },
          onTriggerEnter: (E) => {
            C(E);
          },
          onTriggerLeave: () => {
            (m.value = !0), C('');
          },
          onContentEnter: () => {
            C();
          },
          onContentLeave: () => {
            n.disablePointerLeaveClose || C('');
          },
          onItemSelect: (E) => {
            (s.value = o.value), (o.value = E);
          },
          onItemDismiss: () => {
            (s.value = o.value), (o.value = '');
          },
        }),
        (E, A) => (
          T(),
          L(y(d), null, {
            default: O(() => [
              z(
                y(_e),
                {
                  ref: y(i),
                  'aria-label': 'Main',
                  as: E.as,
                  'as-child': E.asChild,
                  'data-orientation': E.orientation,
                  dir: y(v),
                  'data-reka-navigation-menu': '',
                },
                {
                  default: O(() => [
                    B(E.$slots, 'default', { modelValue: y(o) }),
                  ]),
                  _: 3,
                },
                8,
                ['as', 'as-child', 'data-orientation', 'dir']
              ),
            ]),
            _: 3,
          })
        )
      );
    },
  }),
  PS = ES;
function ta(e) {
  return e ? 'open' : 'closed';
}
function cm(e, t) {
  return `${e}-trigger-${t}`;
}
function Hc(e, t) {
  return `${e}-content-${t}`;
}
const TS = 'navigationMenu.linkSelect',
  js = 'navigationMenu.rootContentDismiss';
function Al(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function um(e) {
  const t = St();
  return e.some((n) => (n === t ? !0 : (n.focus(), St() !== t)));
}
function SS(e) {
  return (
    e.forEach((t) => {
      (t.dataset.tabindex = t.getAttribute('tabindex') || ''),
        t.setAttribute('tabindex', '-1');
    }),
    () => {
      e.forEach((t) => {
        const n = t.dataset.tabindex;
        t.setAttribute('tabindex', n);
      });
    }
  );
}
function fm(e) {
  return (t) => (t.pointerType === 'mouse' ? e(t) : void 0);
}
const [Uc, AS] = Rt('NavigationMenuItem');
var OS = J({
    __name: 'NavigationMenuItem',
    props: {
      value: { type: String, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'li' },
    },
    setup(e) {
      const t = e;
      ve();
      const { getItems: n } = sr({ key: 'NavigationMenu' }),
        r = Dr(),
        o = Rr(t.value),
        s = j(),
        i = j(),
        a = Hc(r.baseId, o);
      let l = () => ({});
      const u = j(!1);
      async function c(h = 'start') {
        const g = document.getElementById(a);
        if (g) {
          l();
          const _ = Al(g);
          _.length && um(h === 'start' ? _ : _.reverse());
        }
      }
      function f() {
        const h = document.getElementById(a);
        if (h) {
          const g = Al(h);
          g.length && (l = SS(g));
        }
      }
      AS({
        value: o,
        contentId: a,
        triggerRef: s,
        focusProxyRef: i,
        wasEscapeCloseRef: u,
        onEntryKeyDown: c,
        onFocusProxyEnter: c,
        onContentFocusOutside: f,
        onRootContentClose: f,
      });
      function d() {
        r.onItemDismiss(), s.value?.focus();
      }
      function p(h) {
        const g = St();
        if (h.keyCode === 32 || h.key === 'Enter')
          if (r.modelValue.value === o) {
            d(), h.preventDefault();
            return;
          } else {
            h.target.click(), h.preventDefault();
            return;
          }
        const _ = n()
          .filter((b) => b.ref.parentElement?.hasAttribute('data-menu-item'))
          .map((b) => b.ref);
        if (!_.includes(g)) return;
        const x = Tc(h, g, void 0, { itemsArray: _, loop: !1 });
        x && x?.focus(), h.preventDefault(), h.stopPropagation();
      }
      return (h, g) => (
        T(),
        L(
          y(_e),
          {
            'as-child': h.asChild,
            as: h.as,
            'data-menu-item': '',
            onKeydown: ph(p, [
              'up',
              'down',
              'left',
              'right',
              'home',
              'end',
              'space',
            ]),
          },
          { default: O(() => [B(h.$slots, 'default')]), _: 3 },
          8,
          ['as-child', 'as']
        )
      );
    },
  }),
  RS = OS,
  IS = J({
    __name: 'NavigationMenuContentImpl',
    props: {
      disableOutsidePointerEvents: { type: Boolean, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
    ],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        { getItems: o } = sr({ key: 'NavigationMenu' }),
        { forwardRef: s, currentElement: i } = ve(),
        a = Dr(),
        l = Uc(),
        u = cm(a.baseId, l.value),
        c = Hc(a.baseId, l.value),
        f = j(null),
        d = S(() => {
          const b = o().map((A) => A.ref.id.split('trigger-')[1]);
          a.dir.value === 'rtl' && b.reverse();
          const v = b.indexOf(a.modelValue.value),
            m = b.indexOf(a.previousValue.value),
            w = l.value === a.modelValue.value,
            C = m === b.indexOf(l.value);
          if (!w && !C) return f.value;
          const E = (() => {
            if (v !== m) {
              if (w && m !== -1) return v > m ? 'from-end' : 'from-start';
              if (C && v !== -1) return v > m ? 'to-start' : 'to-end';
            }
            return null;
          })();
          return (f.value = E), E;
        });
      function p(b) {
        if (
          (r('focusOutside', b),
          r('interactOutside', b),
          b.detail.originalEvent.target.hasAttribute(
            'data-navigation-menu-trigger'
          ) && b.preventDefault(),
          !b.defaultPrevented)
        ) {
          l.onContentFocusOutside();
          const m = b.target;
          a.rootNavigationMenu?.value?.contains(m) && b.preventDefault();
        }
      }
      function h(b) {
        if ((r('pointerDownOutside', b), !b.defaultPrevented)) {
          const v = b.target,
            m = o().some((C) => C.ref.contains(v)),
            w = a.isRootMenu && a.viewport.value?.contains(v);
          (m || w || !a.isRootMenu) && b.preventDefault();
        }
      }
      it((b) => {
        const v = i.value;
        if (a.isRootMenu && v) {
          const m = () => {
            a.onItemDismiss(),
              l.onRootContentClose(),
              v.contains(St()) && l.triggerRef.value?.focus();
          };
          v.addEventListener(js, m), b(() => v.removeEventListener(js, m));
        }
      });
      function g(b) {
        r('escapeKeyDown', b),
          b.defaultPrevented ||
            (a.onItemDismiss(),
            l.triggerRef?.value?.focus(),
            (l.wasEscapeCloseRef.value = !0));
      }
      function _(b) {
        if (
          b.target.closest('[data-reka-navigation-menu]') !==
          a.rootNavigationMenu.value
        )
          return;
        const v = b.altKey || b.ctrlKey || b.metaKey,
          m = b.key === 'Tab' && !v,
          w = Al(b.currentTarget);
        if (m) {
          const E = St(),
            A = w.findIndex((X) => X === E),
            D = b.shiftKey ? w.slice(0, A).reverse() : w.slice(A + 1, w.length);
          if (um(D)) b.preventDefault();
          else {
            l.focusProxyRef.value?.focus();
            return;
          }
        }
        Tc(b, St(), void 0, {
          itemsArray: w,
          loop: !1,
          enableIgnoredElement: !0,
        })?.focus();
      }
      function x() {
        const b = new Event(js, { bubbles: !0, cancelable: !0 });
        i.value?.dispatchEvent(b);
      }
      return (b, v) => (
        T(),
        L(
          y(Ki),
          te(
            {
              id: y(c),
              ref: y(s),
              'aria-labelledby': y(u),
              'data-motion': d.value,
              'data-state': y(ta)(y(a).modelValue.value === y(l).value),
              'data-orientation': y(a).orientation,
            },
            n,
            {
              onKeydown: _,
              onEscapeKeyDown: g,
              onPointerDownOutside: h,
              onFocusOutside: p,
              onDismiss: x,
            }
          ),
          { default: O(() => [B(b.$slots, 'default')]), _: 3 },
          16,
          [
            'id',
            'aria-labelledby',
            'data-motion',
            'data-state',
            'data-orientation',
          ]
        )
      );
    },
  }),
  LS = IS,
  DS = J({
    inheritAttrs: !1,
    __name: 'NavigationMenuContent',
    props: {
      forceMount: { type: Boolean, required: !1 },
      disableOutsidePointerEvents: { type: Boolean, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    emits: [
      'escapeKeyDown',
      'pointerDownOutside',
      'focusOutside',
      'interactOutside',
    ],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = Gt($g(n, 'forceMount'), r),
        { forwardRef: s } = ve(),
        i = Dr(),
        a = Uc(),
        l = S(() => a.value === i.modelValue.value),
        u = S(() =>
          i.viewport.value && !i.modelValue.value && i.previousValue.value
            ? i.previousValue.value === a.value
            : !1
        );
      return (c, f) => (
        T(),
        L(
          Di,
          {
            to: y(Wt) && y(i).viewport.value ? y(i).viewport.value : 'body',
            disabled: y(Wt) && y(i).viewport.value ? !y(i).viewport.value : !0,
          },
          [
            z(
              y(or),
              {
                present: c.forceMount || l.value || u.value,
                'force-mount': !y(i).unmountOnHide.value,
              },
              {
                default: O(({ present: d }) => [
                  z(
                    LS,
                    te(
                      {
                        ref: y(s),
                        'data-state': y(ta)(l.value),
                        style: {
                          pointerEvents:
                            !l.value && y(i).isRootMenu ? 'none' : void 0,
                        },
                      },
                      { ...c.$attrs, ...y(o) },
                      {
                        hidden: !d,
                        onPointerenter:
                          f[0] ||
                          (f[0] = (p) => y(i).onContentEnter(y(a).value)),
                        onPointerleave:
                          f[1] ||
                          (f[1] = (p) => y(fm)(() => y(i).onContentLeave())(p)),
                        onPointerDownOutside:
                          f[2] || (f[2] = (p) => r('pointerDownOutside', p)),
                        onFocusOutside:
                          f[3] || (f[3] = (p) => r('focusOutside', p)),
                        onInteractOutside:
                          f[4] || (f[4] = (p) => r('interactOutside', p)),
                      }
                    ),
                    { default: O(() => [B(c.$slots, 'default')]), _: 2 },
                    1040,
                    ['data-state', 'style', 'hidden']
                  ),
                ]),
                _: 3,
              },
              8,
              ['present', 'force-mount']
            ),
          ],
          8,
          ['to', 'disabled']
        )
      );
    },
  }),
  qS = DS,
  MS = J({
    inheritAttrs: !1,
    __name: 'NavigationMenuIndicator',
    props: {
      forceMount: { type: Boolean, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    setup(e) {
      const t = e,
        { forwardRef: n } = ve(),
        r = Dr(),
        o = j(),
        s = S(() => r.orientation === 'horizontal'),
        i = S(() => !!r.modelValue.value),
        { activeTrigger: a } = r;
      function l() {
        a.value &&
          (o.value = {
            size: s.value ? a.value.offsetWidth : a.value.offsetHeight,
            position: s.value ? a.value.offsetLeft : a.value.offsetTop,
          });
      }
      return (
        it(() => {
          r.modelValue.value && l();
        }),
        hi(a, l),
        hi(r.indicatorTrack, l),
        (u, c) =>
          y(r).indicatorTrack.value
            ? (T(),
              L(
                Di,
                { key: 0, to: y(r).indicatorTrack.value },
                [
                  z(
                    y(or),
                    { present: u.forceMount || i.value },
                    {
                      default: O(() => [
                        z(
                          y(_e),
                          te(
                            {
                              ref: y(n),
                              'aria-hidden': 'true',
                              'data-state': i.value ? 'visible' : 'hidden',
                              'data-orientation': y(r).orientation,
                              'as-child': t.asChild,
                              as: u.as,
                              style: {
                                ...(o.value
                                  ? {
                                      '--reka-navigation-menu-indicator-size': `${o.value.size}px`,
                                      '--reka-navigation-menu-indicator-position': `${o.value.position}px`,
                                    }
                                  : {}),
                              },
                            },
                            u.$attrs
                          ),
                          { default: O(() => [B(u.$slots, 'default')]), _: 3 },
                          16,
                          [
                            'data-state',
                            'data-orientation',
                            'as-child',
                            'as',
                            'style',
                          ]
                        ),
                      ]),
                      _: 3,
                    },
                    8,
                    ['present']
                  ),
                ],
                8,
                ['to']
              ))
            : fe('v-if', !0)
      );
    },
  }),
  NS = MS,
  $S = J({
    __name: 'NavigationMenuLink',
    props: {
      active: { type: Boolean, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'a' },
    },
    emits: ['select'],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        { CollectionItem: o } = sr({ key: 'NavigationMenu' });
      ve();
      async function s(i) {
        const a = new CustomEvent(TS, {
          bubbles: !0,
          cancelable: !0,
          detail: { originalEvent: i },
        });
        if ((r('select', a), !a.defaultPrevented && !i.metaKey)) {
          const l = new CustomEvent(js, { bubbles: !0, cancelable: !0 });
          i.target?.dispatchEvent(l);
        }
      }
      return (i, a) => (
        T(),
        L(y(o), null, {
          default: O(() => [
            z(
              y(_e),
              {
                as: i.as,
                'data-active': i.active ? '' : void 0,
                'aria-current': i.active ? 'page' : void 0,
                'as-child': n.asChild,
                onClick: s,
              },
              { default: O(() => [B(i.$slots, 'default')]), _: 3 },
              8,
              ['as', 'data-active', 'aria-current', 'as-child']
            ),
          ]),
          _: 3,
        })
      );
    },
  }),
  qa = $S,
  BS = J({
    inheritAttrs: !1,
    __name: 'NavigationMenuList',
    props: {
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'ul' },
    },
    setup(e) {
      const t = e,
        n = Dr(),
        { forwardRef: r, currentElement: o } = ve();
      return (
        Ye(() => {
          n.onIndicatorTrackChange(o.value);
        }),
        (s, i) => (
          T(),
          L(
            y(_e),
            { ref: y(r), style: { position: 'relative' } },
            {
              default: O(() => [
                z(
                  y(_e),
                  te(s.$attrs, {
                    'as-child': t.asChild,
                    as: s.as,
                    'data-orientation': y(n).orientation,
                  }),
                  { default: O(() => [B(s.$slots, 'default')]), _: 3 },
                  16,
                  ['as-child', 'as', 'data-orientation']
                ),
              ]),
              _: 3,
            },
            512
          )
        )
      );
    },
  }),
  VS = BS;
const jS = ['aria-owns'];
var FS = J({
    inheritAttrs: !1,
    __name: 'NavigationMenuTrigger',
    props: {
      disabled: { type: Boolean, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'button' },
    },
    setup(e) {
      const t = e,
        n = Dr(),
        r = Uc(),
        { CollectionItem: o } = sr({ key: 'NavigationMenu' }),
        { forwardRef: s, currentElement: i } = ve(),
        a = j(''),
        l = j(''),
        u = Sc(!1, 300),
        c = j(!1),
        f = S(() => r.value === n.modelValue.value);
      Ye(() => {
        (r.triggerRef = i),
          (a.value = cm(n.baseId, r.value)),
          (l.value = Hc(n.baseId, r.value));
      });
      function d() {
        n.disableHoverTrigger.value ||
          ((c.value = !1), (r.wasEscapeCloseRef.value = !1));
      }
      function p(v) {
        if (!n.disableHoverTrigger.value && v.pointerType === 'mouse') {
          if (t.disabled || c.value || r.wasEscapeCloseRef.value || u.value)
            return;
          n.onTriggerEnter(r.value), (u.value = !0);
        }
      }
      function h(v) {
        if (!n.disableHoverTrigger.value && v.pointerType === 'mouse') {
          if (t.disabled) return;
          n.onTriggerLeave(), (u.value = !1);
        }
      }
      function g(v) {
        ((!('pointerType' in v) || v.pointerType === 'mouse') &&
          n.disableClickTrigger.value) ||
          u.value ||
          (f.value ? n.onItemSelect('') : n.onItemSelect(r.value),
          (c.value = f.value));
      }
      function _(v) {
        const w = {
          horizontal: 'ArrowDown',
          vertical: n.dir.value === 'rtl' ? 'ArrowLeft' : 'ArrowRight',
        }[n.orientation];
        f.value &&
          v.key === w &&
          (r.onEntryKeyDown(), v.preventDefault(), v.stopPropagation());
      }
      function x(v) {
        r.focusProxyRef.value = Kt(v);
      }
      function b(v) {
        const m = document.getElementById(r.contentId),
          w = v.relatedTarget,
          C = w === i.value,
          E = m?.contains(w);
        (C || !E) && r.onFocusProxyEnter(C ? 'start' : 'end');
      }
      return (v, m) => (
        T(),
        ge(
          Te,
          null,
          [
            z(y(o), null, {
              default: O(() => [
                z(
                  y(_e),
                  te(
                    {
                      id: a.value,
                      ref: y(s),
                      disabled: v.disabled,
                      'data-disabled': v.disabled ? '' : void 0,
                      'data-state': y(ta)(f.value),
                      'data-navigation-menu-trigger': '',
                      'aria-expanded': f.value,
                      'aria-controls': l.value,
                      'as-child': t.asChild,
                      as: v.as,
                    },
                    v.$attrs,
                    {
                      onPointerenter: d,
                      onPointermove: p,
                      onPointerleave: h,
                      onClick: g,
                      onKeydown: _,
                    }
                  ),
                  { default: O(() => [B(v.$slots, 'default')]), _: 3 },
                  16,
                  [
                    'id',
                    'disabled',
                    'data-disabled',
                    'data-state',
                    'aria-expanded',
                    'aria-controls',
                    'as-child',
                    'as',
                  ]
                ),
              ]),
              _: 3,
            }),
            f.value
              ? (T(),
                ge(
                  Te,
                  { key: 0 },
                  [
                    z(y(Yi), {
                      ref: x,
                      'aria-hidden': 'true',
                      tabindex: 0,
                      onFocus: b,
                    }),
                    y(n).viewport
                      ? (T(),
                        ge(
                          'span',
                          { key: 0, 'aria-owns': l.value },
                          null,
                          8,
                          jS
                        ))
                      : fe('v-if', !0),
                  ],
                  64
                ))
              : fe('v-if', !0),
          ],
          64
        )
      );
    },
  }),
  zS = FS,
  HS = J({
    inheritAttrs: !1,
    __name: 'NavigationMenuViewport',
    props: {
      forceMount: { type: Boolean, required: !1 },
      align: { type: String, required: !1, default: 'center' },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    setup(e) {
      const t = e,
        { forwardRef: n, currentElement: r } = ve(),
        o = Dr(),
        { activeTrigger: s, rootNavigationMenu: i, modelValue: a } = o,
        l = j(),
        u = j(),
        c = S(() => !!o.modelValue.value);
      we(r, () => {
        o.onViewportChange(r.value);
      });
      const f = j();
      we(
        [a, c],
        () => {
          Ze(() => {
            r.value &&
              requestAnimationFrame(() => {
                const p = r.value?.querySelector('[data-state=open]');
                f.value = p;
              });
          });
        },
        { immediate: !0 }
      );
      function d() {
        if (f.value && s.value && i.value) {
          const p = document.documentElement.offsetWidth,
            h = document.documentElement.offsetHeight,
            g = i.value.getBoundingClientRect(),
            _ = s.value.getBoundingClientRect(),
            { offsetWidth: x, offsetHeight: b } = f.value,
            v = _.left - g.left,
            m = _.top - g.top;
          let w = null,
            C = null;
          switch (t.align) {
            case 'start':
              (w = v), (C = m);
              break;
            case 'end':
              (w = v - x + _.width), (C = m - b + _.height);
              break;
            default:
              (w = v - x / 2 + _.width / 2), (C = m - b / 2 + _.height / 2);
          }
          const E = 10;
          w + g.left < E && (w = E - g.left);
          const A = w + g.left + x;
          A > p - E && ((w -= A - p + E), w < E - g.left && (w = E - g.left)),
            C + g.top < E && (C = E - g.top);
          const R = C + g.top + b;
          R > h - E && ((C -= R - h + E), C < E - g.top && (C = E - g.top)),
            (w = Math.round(w)),
            (C = Math.round(C)),
            (u.value = { left: w, top: C });
        }
      }
      return (
        hi(f, () => {
          f.value &&
            ((l.value = {
              width: f.value.offsetWidth,
              height: f.value.offsetHeight,
            }),
            d());
        }),
        hi([globalThis.document?.body, i], () => {
          d();
        }),
        (p, h) => (
          T(),
          L(
            y(or),
            {
              present: p.forceMount || c.value,
              'force-mount': !y(o).unmountOnHide.value,
              onAfterLeave:
                h[2] ||
                (h[2] = () => {
                  (l.value = void 0), (u.value = void 0);
                }),
            },
            {
              default: O(({ present: g }) => [
                z(
                  y(_e),
                  te(p.$attrs, {
                    ref: y(n),
                    as: p.as,
                    'as-child': p.asChild,
                    'data-state': y(ta)(c.value),
                    'data-orientation': y(o).orientation,
                    style: {
                      pointerEvents:
                        !c.value && y(o).isRootMenu ? 'none' : void 0,
                      '--reka-navigation-menu-viewport-width': l.value
                        ? `${l.value?.width}px`
                        : void 0,
                      '--reka-navigation-menu-viewport-height': l.value
                        ? `${l.value?.height}px`
                        : void 0,
                      '--reka-navigation-menu-viewport-left': u.value
                        ? `${u.value?.left}px`
                        : void 0,
                      '--reka-navigation-menu-viewport-top': u.value
                        ? `${u.value?.top}px`
                        : void 0,
                    },
                    hidden: !g,
                    onPointerenter:
                      h[0] ||
                      (h[0] = (_) =>
                        y(o).onContentEnter(y(o).modelValue.value)),
                    onPointerleave:
                      h[1] ||
                      (h[1] = (_) => y(fm)(() => y(o).onContentLeave())(_)),
                  }),
                  { default: O(() => [B(p.$slots, 'default')]), _: 2 },
                  1040,
                  [
                    'as',
                    'as-child',
                    'data-state',
                    'data-orientation',
                    'style',
                    'hidden',
                  ]
                ),
              ]),
              _: 3,
            },
            8,
            ['present', 'force-mount']
          )
        )
      );
    },
  }),
  US = HS;
const Xo = 100,
  [WS, KS] = Rt('ProgressRoot'),
  yi = (e) => typeof e == 'number';
function GS(e, t) {
  return Ec(e) || (yi(e) && !Number.isNaN(e) && e <= t && e >= 0)
    ? e
    : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Xo} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`),
      null);
}
function YS(e) {
  return yi(e) && !Number.isNaN(e) && e > 0
    ? e
    : (console.error(
        `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Xo}\`.`
      ),
      Xo);
}
var XS = J({
    __name: 'ProgressRoot',
    props: {
      modelValue: { type: [Number, null], required: !1 },
      max: { type: Number, required: !1, default: Xo },
      getValueLabel: {
        type: Function,
        required: !1,
        default: (e, t) => (yi(e) ? `${Math.round((e / t) * Xo)}%` : void 0),
      },
      getValueText: { type: Function, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    emits: ['update:modelValue', 'update:max'],
    setup(e, { emit: t }) {
      const n = e,
        r = t;
      ve();
      const o = Mn(n, 'modelValue', r, { passive: n.modelValue === void 0 }),
        s = Mn(n, 'max', r, { passive: n.max === void 0 });
      we(
        () => o.value,
        async (a) => {
          const l = GS(a, n.max);
          l !== a && (await Ze(), (o.value = l));
        },
        { immediate: !0 }
      ),
        we(
          () => n.max,
          (a) => {
            const l = YS(n.max);
            l !== a && (s.value = l);
          },
          { immediate: !0 }
        );
      const i = S(() =>
        Ec(o.value)
          ? 'indeterminate'
          : o.value === s.value
          ? 'complete'
          : 'loading'
      );
      return (
        KS({ modelValue: o, max: s, progressState: i }),
        (a, l) => (
          T(),
          L(
            y(_e),
            {
              'as-child': a.asChild,
              as: a.as,
              'aria-valuemax': y(s),
              'aria-valuemin': 0,
              'aria-valuenow': yi(y(o)) ? y(o) : void 0,
              'aria-valuetext': a.getValueText?.(y(o), y(s)),
              'aria-label': a.getValueLabel(y(o), y(s)),
              role: 'progressbar',
              'data-state': i.value,
              'data-value': y(o) ?? void 0,
              'data-max': y(s),
            },
            {
              default: O(() => [B(a.$slots, 'default', { modelValue: y(o) })]),
              _: 3,
            },
            8,
            [
              'as-child',
              'as',
              'aria-valuemax',
              'aria-valuenow',
              'aria-valuetext',
              'aria-label',
              'data-state',
              'data-value',
              'data-max',
            ]
          )
        )
      );
    },
  }),
  JS = XS,
  QS = J({
    __name: 'ProgressIndicator',
    props: {
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    setup(e) {
      const t = e,
        n = WS();
      return (
        ve(),
        (r, o) => (
          T(),
          L(
            y(_e),
            te(t, {
              'data-state': y(n).progressState.value,
              'data-value': y(n).modelValue?.value ?? void 0,
              'data-max': y(n).max.value,
            }),
            { default: O(() => [B(r.$slots, 'default')]), _: 3 },
            16,
            ['data-state', 'data-value', 'data-max']
          )
        )
      );
    },
  }),
  ZS = QS,
  eA = J({
    __name: 'ToastAnnounceExclude',
    props: {
      altText: { type: String, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    setup(e) {
      return (t, n) => (
        T(),
        L(
          y(_e),
          {
            as: t.as,
            'as-child': t.asChild,
            'data-reka-toast-announce-exclude': '',
            'data-reka-toast-announce-alt': t.altText || void 0,
          },
          { default: O(() => [B(t.$slots, 'default')]), _: 3 },
          8,
          ['as', 'as-child', 'data-reka-toast-announce-alt']
        )
      );
    },
  }),
  dm = eA;
const [na, tA] = Rt('ToastProvider');
var nA = J({
    inheritAttrs: !1,
    __name: 'ToastProvider',
    props: {
      label: { type: String, required: !1, default: 'Notification' },
      duration: { type: Number, required: !1, default: 5e3 },
      disableSwipe: { type: Boolean, required: !1 },
      swipeDirection: { type: String, required: !1, default: 'right' },
      swipeThreshold: { type: Number, required: !1, default: 50 },
    },
    setup(e) {
      const t = e,
        {
          label: n,
          duration: r,
          disableSwipe: o,
          swipeDirection: s,
          swipeThreshold: i,
        } = Ot(t);
      sr({ isProvider: !0 });
      const a = j(),
        l = j(0),
        u = j(!1),
        c = j(!1);
      if (t.label && typeof t.label == 'string' && !t.label.trim()) {
        const f =
          'Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.';
        throw new Error(f);
      }
      return (
        tA({
          label: n,
          duration: r,
          disableSwipe: o,
          swipeDirection: s,
          swipeThreshold: i,
          toastCount: l,
          viewport: a,
          onViewportChange(f) {
            a.value = f;
          },
          onToastAdd() {
            l.value++;
          },
          onToastRemove() {
            l.value--;
          },
          isFocusedToastEscapeKeyDownRef: u,
          isClosePausedRef: c,
        }),
        (f, d) => B(f.$slots, 'default')
      );
    },
  }),
  rA = nA,
  oA = J({
    __name: 'ToastAnnounce',
    setup(e) {
      const t = na(),
        n = bE(1e3),
        r = j(!1);
      return (
        zg(() => {
          r.value = !0;
        }),
        (o, s) =>
          y(n) || r.value
            ? (T(),
              L(
                y(Yi),
                { key: 0 },
                {
                  default: O(() => [
                    ft(et(y(t).label.value) + ' ', 1),
                    B(o.$slots, 'default'),
                  ]),
                  _: 3,
                }
              ))
            : fe('v-if', !0)
      );
    },
  }),
  sA = oA;
const iA = 'toast.swipeStart',
  aA = 'toast.swipeMove',
  lA = 'toast.swipeCancel',
  cA = 'toast.swipeEnd',
  Ol = 'toast.viewportPause',
  Rl = 'toast.viewportResume';
function ks(e, t, n) {
  const r = n.originalEvent.currentTarget,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
function cd(e, t, n = 0) {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    s = r > o;
  return t === 'left' || t === 'right' ? s && r > n : !s && o > n;
}
function uA(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function pm(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        uA(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === 'none',
          s = r.dataset.rekaToastAnnounceExclude === '';
        if (!o)
          if (s) {
            const i = r.dataset.rekaToastAnnounceAlt;
            i && t.push(i);
          } else t.push(...pm(r));
      }
    }),
    t
  );
}
const [fA, dA] = Rt('ToastRoot');
var pA = J({
    inheritAttrs: !1,
    __name: 'ToastRootImpl',
    props: {
      type: { type: String, required: !1 },
      open: { type: Boolean, required: !1, default: !1 },
      duration: { type: Number, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'li' },
    },
    emits: [
      'close',
      'escapeKeyDown',
      'pause',
      'resume',
      'swipeStart',
      'swipeMove',
      'swipeCancel',
      'swipeEnd',
    ],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        { forwardRef: o, currentElement: s } = ve(),
        { CollectionItem: i } = sr(),
        a = na(),
        l = j(null),
        u = j(null),
        c = S(() =>
          typeof n.duration == 'number' ? n.duration : a.duration.value
        ),
        f = j(0),
        d = j(c.value),
        p = j(0),
        h = j(c.value),
        g = zg(
          () => {
            const v = new Date().getTime() - f.value;
            h.value = Math.max(d.value - v, 0);
          },
          { fpsLimit: 60 }
        );
      function _(v) {
        v <= 0 ||
          v === Number.POSITIVE_INFINITY ||
          (Wt &&
            (window.clearTimeout(p.value),
            (f.value = new Date().getTime()),
            (p.value = window.setTimeout(x, v))));
      }
      function x(v) {
        const m = v?.pointerType === '';
        s.value?.contains(St()) && m && a.viewport.value?.focus(),
          m && (a.isClosePausedRef.value = !1),
          r('close');
      }
      const b = S(() => (s.value ? pm(s.value) : null));
      if (n.type && !['foreground', 'background'].includes(n.type)) {
        const v =
          'Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.';
        throw new Error(v);
      }
      return (
        it((v) => {
          const m = a.viewport.value;
          if (m) {
            const w = () => {
                _(d.value), g.resume(), r('resume');
              },
              C = () => {
                const E = new Date().getTime() - f.value;
                (d.value = d.value - E),
                  window.clearTimeout(p.value),
                  g.pause(),
                  r('pause');
              };
            return (
              m.addEventListener(Ol, C),
              m.addEventListener(Rl, w),
              () => {
                m.removeEventListener(Ol, C), m.removeEventListener(Rl, w);
              }
            );
          }
        }),
        we(
          () => [n.open, c.value],
          () => {
            (d.value = c.value),
              n.open && !a.isClosePausedRef.value && _(c.value);
          },
          { immediate: !0 }
        ),
        Oc('Escape', (v) => {
          r('escapeKeyDown', v),
            v.defaultPrevented ||
              ((a.isFocusedToastEscapeKeyDownRef.value = !0), x());
        }),
        Ye(() => {
          a.onToastAdd();
        }),
        wn(() => {
          a.onToastRemove();
        }),
        dA({ onClose: x }),
        (v, m) => (
          T(),
          ge(
            Te,
            null,
            [
              b.value
                ? (T(),
                  L(
                    sA,
                    {
                      key: 0,
                      role: 'alert',
                      'aria-live':
                        v.type === 'foreground' ? 'assertive' : 'polite',
                      'aria-atomic': 'true',
                    },
                    { default: O(() => [ft(et(b.value), 1)]), _: 1 },
                    8,
                    ['aria-live']
                  ))
                : fe('v-if', !0),
              y(a).viewport.value
                ? (T(),
                  L(
                    Di,
                    { key: 1, to: y(a).viewport.value },
                    [
                      z(y(i), null, {
                        default: O(() => [
                          z(
                            y(_e),
                            te(
                              {
                                ref: y(o),
                                role: 'alert',
                                'aria-live': 'off',
                                'aria-atomic': 'true',
                                tabindex: '0',
                              },
                              v.$attrs,
                              {
                                as: v.as,
                                'as-child': v.asChild,
                                'data-state': v.open ? 'open' : 'closed',
                                'data-swipe-direction':
                                  y(a).swipeDirection.value,
                                style: y(a).disableSwipe.value
                                  ? void 0
                                  : { userSelect: 'none', touchAction: 'none' },
                                onPointerdown:
                                  m[0] ||
                                  (m[0] = In(
                                    (w) => {
                                      y(a).disableSwipe.value ||
                                        (l.value = {
                                          x: w.clientX,
                                          y: w.clientY,
                                        });
                                    },
                                    ['left']
                                  )),
                                onPointermove:
                                  m[1] ||
                                  (m[1] = (w) => {
                                    if (y(a).disableSwipe.value || !l.value)
                                      return;
                                    const C = w.clientX - l.value.x,
                                      E = w.clientY - l.value.y,
                                      A = !!u.value,
                                      R = ['left', 'right'].includes(
                                        y(a).swipeDirection.value
                                      ),
                                      D = ['left', 'up'].includes(
                                        y(a).swipeDirection.value
                                      )
                                        ? Math.min
                                        : Math.max,
                                      X = R ? D(0, C) : 0,
                                      M = R ? 0 : D(0, E),
                                      Z = w.pointerType === 'touch' ? 10 : 2,
                                      G = { x: X, y: M },
                                      Q = { originalEvent: w, delta: G };
                                    A
                                      ? ((u.value = G),
                                        y(ks)(
                                          y(aA),
                                          ($) => r('swipeMove', $),
                                          Q
                                        ))
                                      : y(cd)(G, y(a).swipeDirection.value, Z)
                                      ? ((u.value = G),
                                        y(ks)(
                                          y(iA),
                                          ($) => r('swipeStart', $),
                                          Q
                                        ),
                                        w.target.setPointerCapture(w.pointerId))
                                      : (Math.abs(C) > Z || Math.abs(E) > Z) &&
                                        (l.value = null);
                                  }),
                                onPointerup:
                                  m[2] ||
                                  (m[2] = (w) => {
                                    if (y(a).disableSwipe.value) return;
                                    const C = u.value,
                                      E = w.target;
                                    if (
                                      (E.hasPointerCapture(w.pointerId) &&
                                        E.releasePointerCapture(w.pointerId),
                                      (u.value = null),
                                      (l.value = null),
                                      C)
                                    ) {
                                      const A = w.currentTarget,
                                        R = { originalEvent: w, delta: C };
                                      y(cd)(
                                        C,
                                        y(a).swipeDirection.value,
                                        y(a).swipeThreshold.value
                                      )
                                        ? y(ks)(
                                            y(cA),
                                            (D) => r('swipeEnd', D),
                                            R
                                          )
                                        : y(ks)(
                                            y(lA),
                                            (D) => r('swipeCancel', D),
                                            R
                                          ),
                                        A?.addEventListener(
                                          'click',
                                          (D) => D.preventDefault(),
                                          { once: !0 }
                                        );
                                    }
                                  }),
                              }
                            ),
                            {
                              default: O(() => [
                                B(v.$slots, 'default', {
                                  remaining: h.value,
                                  duration: c.value,
                                }),
                              ]),
                              _: 3,
                            },
                            16,
                            [
                              'as',
                              'as-child',
                              'data-state',
                              'data-swipe-direction',
                              'style',
                            ]
                          ),
                        ]),
                        _: 3,
                      }),
                    ],
                    8,
                    ['to']
                  ))
                : fe('v-if', !0),
            ],
            64
          )
        )
      );
    },
  }),
  hA = pA,
  gA = J({
    __name: 'ToastClose',
    props: {
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'button' },
    },
    setup(e) {
      const t = e,
        n = fA(),
        { forwardRef: r } = ve();
      return (o, s) => (
        T(),
        L(
          dm,
          { 'as-child': '' },
          {
            default: O(() => [
              z(
                y(_e),
                te(t, {
                  ref: y(r),
                  type: o.as === 'button' ? 'button' : void 0,
                  onClick: y(n).onClose,
                }),
                { default: O(() => [B(o.$slots, 'default')]), _: 3 },
                16,
                ['type', 'onClick']
              ),
            ]),
            _: 3,
          }
        )
      );
    },
  }),
  hm = gA,
  mA = J({
    __name: 'ToastAction',
    props: {
      altText: { type: String, required: !0 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    setup(e) {
      if (!e.altText)
        throw new Error('Missing prop `altText` expected on `ToastAction`');
      const { forwardRef: n } = ve();
      return (r, o) =>
        r.altText
          ? (T(),
            L(
              dm,
              { key: 0, 'alt-text': r.altText, 'as-child': '' },
              {
                default: O(() => [
                  z(
                    hm,
                    { ref: y(n), as: r.as, 'as-child': r.asChild },
                    { default: O(() => [B(r.$slots, 'default')]), _: 3 },
                    8,
                    ['as', 'as-child']
                  ),
                ]),
                _: 3,
              },
              8,
              ['alt-text']
            ))
          : fe('v-if', !0);
    },
  }),
  ud = mA,
  vA = J({
    __name: 'ToastDescription',
    props: {
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    setup(e) {
      const t = e;
      return (
        ve(),
        (n, r) => (
          T(),
          L(
            y(_e),
            tt(ut(t)),
            { default: O(() => [B(n.$slots, 'default')]), _: 3 },
            16
          )
        )
      );
    },
  }),
  yA = vA,
  bA = J({
    __name: 'ToastPortal',
    props: {
      to: { type: null, required: !1 },
      disabled: { type: Boolean, required: !1 },
      defer: { type: Boolean, required: !1 },
      forceMount: { type: Boolean, required: !1 },
    },
    setup(e) {
      const t = e;
      return (n, r) => (
        T(),
        L(
          y(Gi),
          tt(ut(t)),
          { default: O(() => [B(n.$slots, 'default')]), _: 3 },
          16
        )
      );
    },
  }),
  _A = bA,
  wA = J({
    __name: 'ToastRoot',
    props: {
      defaultOpen: { type: Boolean, required: !1, default: !0 },
      forceMount: { type: Boolean, required: !1 },
      type: { type: String, required: !1, default: 'foreground' },
      open: { type: Boolean, required: !1, default: void 0 },
      duration: { type: Number, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'li' },
    },
    emits: [
      'escapeKeyDown',
      'pause',
      'resume',
      'swipeStart',
      'swipeMove',
      'swipeCancel',
      'swipeEnd',
      'update:open',
    ],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        { forwardRef: o } = ve(),
        s = Mn(n, 'open', r, {
          defaultValue: n.defaultOpen,
          passive: n.open === void 0,
        });
      return (i, a) => (
        T(),
        L(
          y(or),
          { present: i.forceMount || y(s) },
          {
            default: O(() => [
              z(
                hA,
                te(
                  {
                    ref: y(o),
                    open: y(s),
                    type: i.type,
                    as: i.as,
                    'as-child': i.asChild,
                    duration: i.duration,
                  },
                  i.$attrs,
                  {
                    onClose: a[0] || (a[0] = (l) => (s.value = !1)),
                    onPause: a[1] || (a[1] = (l) => r('pause')),
                    onResume: a[2] || (a[2] = (l) => r('resume')),
                    onEscapeKeyDown:
                      a[3] || (a[3] = (l) => r('escapeKeyDown', l)),
                    onSwipeStart:
                      a[4] ||
                      (a[4] = (l) => {
                        r('swipeStart', l),
                          l.defaultPrevented ||
                            l.currentTarget.setAttribute('data-swipe', 'start');
                      }),
                    onSwipeMove:
                      a[5] ||
                      (a[5] = (l) => {
                        if ((r('swipeMove', l), !l.defaultPrevented)) {
                          const { x: u, y: c } = l.detail.delta,
                            f = l.currentTarget;
                          f.setAttribute('data-swipe', 'move'),
                            f.style.setProperty(
                              '--reka-toast-swipe-move-x',
                              `${u}px`
                            ),
                            f.style.setProperty(
                              '--reka-toast-swipe-move-y',
                              `${c}px`
                            );
                        }
                      }),
                    onSwipeCancel:
                      a[6] ||
                      (a[6] = (l) => {
                        if ((r('swipeCancel', l), !l.defaultPrevented)) {
                          const u = l.currentTarget;
                          u.setAttribute('data-swipe', 'cancel'),
                            u.style.removeProperty('--reka-toast-swipe-move-x'),
                            u.style.removeProperty('--reka-toast-swipe-move-y'),
                            u.style.removeProperty('--reka-toast-swipe-end-x'),
                            u.style.removeProperty('--reka-toast-swipe-end-y');
                        }
                      }),
                    onSwipeEnd:
                      a[7] ||
                      (a[7] = (l) => {
                        if ((r('swipeEnd', l), !l.defaultPrevented)) {
                          const { x: u, y: c } = l.detail.delta,
                            f = l.currentTarget;
                          f.setAttribute('data-swipe', 'end'),
                            f.style.removeProperty('--reka-toast-swipe-move-x'),
                            f.style.removeProperty('--reka-toast-swipe-move-y'),
                            f.style.setProperty(
                              '--reka-toast-swipe-end-x',
                              `${u}px`
                            ),
                            f.style.setProperty(
                              '--reka-toast-swipe-end-y',
                              `${c}px`
                            ),
                            (s.value = !1);
                        }
                      }),
                  }
                ),
                {
                  default: O(({ remaining: l, duration: u }) => [
                    B(i.$slots, 'default', {
                      remaining: l,
                      duration: u,
                      open: y(s),
                    }),
                  ]),
                  _: 3,
                },
                16,
                ['open', 'type', 'as', 'as-child', 'duration']
              ),
            ]),
            _: 3,
          },
          8,
          ['present']
        )
      );
    },
  }),
  xA = wA,
  kA = J({
    __name: 'ToastTitle',
    props: {
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    setup(e) {
      const t = e;
      return (
        ve(),
        (n, r) => (
          T(),
          L(
            y(_e),
            tt(ut(t)),
            { default: O(() => [B(n.$slots, 'default')]), _: 3 },
            16
          )
        )
      );
    },
  }),
  CA = kA,
  EA = J({
    __name: 'FocusProxy',
    emits: ['focusFromOutsideViewport'],
    setup(e, { emit: t }) {
      const n = t,
        r = na();
      return (o, s) => (
        T(),
        L(
          y(Yi),
          {
            'aria-hidden': 'true',
            tabindex: '0',
            style: { position: 'fixed' },
            onFocus:
              s[0] ||
              (s[0] = (i) => {
                const a = i.relatedTarget;
                !y(r).viewport.value?.contains(a) &&
                  n('focusFromOutsideViewport');
              }),
          },
          { default: O(() => [B(o.$slots, 'default')]), _: 3 }
        )
      );
    },
  }),
  fd = EA,
  PA = J({
    inheritAttrs: !1,
    __name: 'ToastViewport',
    props: {
      hotkey: { type: Array, required: !1, default: () => ['F8'] },
      label: {
        type: [String, Function],
        required: !1,
        default: 'Notifications ({hotkey})',
      },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'ol' },
    },
    setup(e) {
      const t = e,
        { hotkey: n, label: r } = Ot(t),
        { forwardRef: o, currentElement: s } = ve(),
        { CollectionSlot: i, getItems: a } = sr(),
        l = na(),
        u = S(() => l.toastCount.value > 0),
        c = j(),
        f = j(),
        d = S(() =>
          n.value.join('+').replace(/Key/g, '').replace(/Digit/g, '')
        );
      Oc(n.value, () => {
        s.value.focus();
      }),
        Ye(() => {
          l.onViewportChange(s.value);
        }),
        it((h) => {
          const g = s.value;
          if (u.value && g) {
            const _ = () => {
                if (!l.isClosePausedRef.value) {
                  const w = new CustomEvent(Ol);
                  g.dispatchEvent(w), (l.isClosePausedRef.value = !0);
                }
              },
              x = () => {
                if (l.isClosePausedRef.value) {
                  const w = new CustomEvent(Rl);
                  g.dispatchEvent(w), (l.isClosePausedRef.value = !1);
                }
              },
              b = (w) => {
                !g.contains(w.relatedTarget) && x();
              },
              v = () => {
                g.contains(St()) || x();
              },
              m = (w) => {
                const C = w.altKey || w.ctrlKey || w.metaKey;
                if (w.key === 'Tab' && !C) {
                  const A = St(),
                    R = w.shiftKey;
                  if (w.target === g && R) {
                    c.value?.focus();
                    return;
                  }
                  const M = p({
                      tabbingDirection: R ? 'backwards' : 'forwards',
                    }),
                    Z = M.findIndex((G) => G === A);
                  Vs(M.slice(Z + 1))
                    ? w.preventDefault()
                    : R
                    ? c.value?.focus()
                    : f.value?.focus();
                }
              };
            g.addEventListener('focusin', _),
              g.addEventListener('focusout', b),
              g.addEventListener('pointermove', _),
              g.addEventListener('pointerleave', v),
              g.addEventListener('keydown', m),
              window.addEventListener('blur', _),
              window.addEventListener('focus', x),
              h(() => {
                g.removeEventListener('focusin', _),
                  g.removeEventListener('focusout', b),
                  g.removeEventListener('pointermove', _),
                  g.removeEventListener('pointerleave', v),
                  g.removeEventListener('keydown', m),
                  window.removeEventListener('blur', _),
                  window.removeEventListener('focus', x);
              });
          }
        });
      function p({ tabbingDirection: h }) {
        const _ = a()
          .map((x) => x.ref)
          .map((x) => {
            const b = [x, ...Ic(x)];
            return h === 'forwards' ? b : b.reverse();
          });
        return (h === 'forwards' ? _.reverse() : _).flat();
      }
      return (h, g) => (
        T(),
        L(
          y(mP),
          {
            role: 'region',
            'aria-label':
              typeof y(r) == 'string'
                ? y(r).replace('{hotkey}', d.value)
                : y(r)(d.value),
            tabindex: '-1',
            style: nn({ pointerEvents: u.value ? void 0 : 'none' }),
          },
          {
            default: O(() => [
              u.value
                ? (T(),
                  L(
                    fd,
                    {
                      key: 0,
                      ref: (_) => {
                        c.value = y(Kt)(_);
                      },
                      onFocusFromOutsideViewport:
                        g[0] ||
                        (g[0] = () => {
                          const _ = p({ tabbingDirection: 'forwards' });
                          y(Vs)(_);
                        }),
                    },
                    null,
                    512
                  ))
                : fe('v-if', !0),
              z(y(i), null, {
                default: O(() => [
                  z(
                    y(_e),
                    te(
                      {
                        ref: y(o),
                        tabindex: '-1',
                        as: h.as,
                        'as-child': h.asChild,
                      },
                      h.$attrs
                    ),
                    { default: O(() => [B(h.$slots, 'default')]), _: 3 },
                    16,
                    ['as', 'as-child']
                  ),
                ]),
                _: 3,
              }),
              u.value
                ? (T(),
                  L(
                    fd,
                    {
                      key: 1,
                      ref: (_) => {
                        f.value = y(Kt)(_);
                      },
                      onFocusFromOutsideViewport:
                        g[1] ||
                        (g[1] = () => {
                          const _ = p({ tabbingDirection: 'backwards' });
                          y(Vs)(_);
                        }),
                    },
                    null,
                    512
                  ))
                : fe('v-if', !0),
            ]),
            _: 3,
          },
          8,
          ['aria-label', 'style']
        )
      );
    },
  }),
  TA = PA,
  SA = J({
    __name: 'TooltipArrow',
    props: {
      width: { type: Number, required: !1, default: 10 },
      height: { type: Number, required: !1, default: 5 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'svg' },
    },
    setup(e) {
      const t = e;
      return (
        ve(),
        (n, r) => (
          T(),
          L(
            y(Fc),
            tt(ut(t)),
            { default: O(() => [B(n.$slots, 'default')]), _: 3 },
            16
          )
        )
      );
    },
  }),
  AA = SA;
const [Wc, OA] = Rt('TooltipProvider');
var RA = J({
    inheritAttrs: !1,
    __name: 'TooltipProvider',
    props: {
      delayDuration: { type: Number, required: !1, default: 700 },
      skipDelayDuration: { type: Number, required: !1, default: 300 },
      disableHoverableContent: { type: Boolean, required: !1, default: !1 },
      disableClosingTrigger: { type: Boolean, required: !1 },
      disabled: { type: Boolean, required: !1 },
      ignoreNonKeyboardFocus: { type: Boolean, required: !1, default: !1 },
    },
    setup(e) {
      const t = e,
        {
          delayDuration: n,
          skipDelayDuration: r,
          disableHoverableContent: o,
          disableClosingTrigger: s,
          ignoreNonKeyboardFocus: i,
          disabled: a,
        } = Ot(t);
      ve();
      const l = j(!0),
        u = j(!1),
        { start: c, stop: f } = Ac(
          () => {
            l.value = !0;
          },
          r,
          { immediate: !1 }
        );
      return (
        OA({
          isOpenDelayed: l,
          delayDuration: n,
          onOpen() {
            f(), (l.value = !1);
          },
          onClose() {
            c();
          },
          isPointerInTransitRef: u,
          disableHoverableContent: o,
          disableClosingTrigger: s,
          disabled: a,
          ignoreNonKeyboardFocus: i,
        }),
        (d, p) => B(d.$slots, 'default')
      );
    },
  }),
  IA = RA;
const gm = 'tooltip.open',
  [ra, LA] = Rt('TooltipRoot');
var DA = J({
    __name: 'TooltipRoot',
    props: {
      defaultOpen: { type: Boolean, required: !1, default: !1 },
      open: { type: Boolean, required: !1, default: void 0 },
      delayDuration: { type: Number, required: !1, default: void 0 },
      disableHoverableContent: { type: Boolean, required: !1, default: void 0 },
      disableClosingTrigger: { type: Boolean, required: !1, default: void 0 },
      disabled: { type: Boolean, required: !1, default: void 0 },
      ignoreNonKeyboardFocus: { type: Boolean, required: !1, default: void 0 },
    },
    emits: ['update:open'],
    setup(e, { emit: t }) {
      const n = e,
        r = t;
      ve();
      const o = Wc(),
        s = S(
          () => n.disableHoverableContent ?? o.disableHoverableContent.value
        ),
        i = S(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value),
        a = S(() => n.disabled ?? o.disabled.value),
        l = S(() => n.delayDuration ?? o.delayDuration.value),
        u = S(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value),
        c = Mn(n, 'open', r, {
          defaultValue: n.defaultOpen,
          passive: n.open === void 0,
        });
      we(c, (v) => {
        o.onClose &&
          (v
            ? (o.onOpen(), document.dispatchEvent(new CustomEvent(gm)))
            : o.onClose());
      });
      const f = j(!1),
        d = j(),
        p = S(() =>
          c.value ? (f.value ? 'delayed-open' : 'instant-open') : 'closed'
        ),
        { start: h, stop: g } = Ac(
          () => {
            (f.value = !0), (c.value = !0);
          },
          l,
          { immediate: !1 }
        );
      function _() {
        g(), (f.value = !1), (c.value = !0);
      }
      function x() {
        g(), (c.value = !1);
      }
      function b() {
        h();
      }
      return (
        LA({
          contentId: '',
          open: c,
          stateAttribute: p,
          trigger: d,
          onTriggerChange(v) {
            d.value = v;
          },
          onTriggerEnter() {
            o.isOpenDelayed.value ? b() : _();
          },
          onTriggerLeave() {
            s.value ? x() : g();
          },
          onOpen: _,
          onClose: x,
          disableHoverableContent: s,
          disableClosingTrigger: i,
          disabled: a,
          ignoreNonKeyboardFocus: u,
        }),
        (v, m) => (
          T(),
          L(y(Lc), null, {
            default: O(() => [B(v.$slots, 'default', { open: y(c) })]),
            _: 3,
          })
        )
      );
    },
  }),
  qA = DA,
  MA = J({
    __name: 'TooltipContentImpl',
    props: {
      ariaLabel: { type: String, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
      side: { type: null, required: !1, default: 'top' },
      sideOffset: { type: Number, required: !1, default: 0 },
      align: { type: null, required: !1, default: 'center' },
      alignOffset: { type: Number, required: !1 },
      avoidCollisions: { type: Boolean, required: !1, default: !0 },
      collisionBoundary: { type: null, required: !1, default: () => [] },
      collisionPadding: { type: [Number, Object], required: !1, default: 0 },
      arrowPadding: { type: Number, required: !1, default: 0 },
      sticky: { type: String, required: !1, default: 'partial' },
      hideWhenDetached: { type: Boolean, required: !1, default: !1 },
      positionStrategy: { type: String, required: !1 },
      updatePositionStrategy: { type: String, required: !1 },
    },
    emits: ['escapeKeyDown', 'pointerDownOutside'],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = ra(),
        { forwardRef: s } = ve(),
        i = un(),
        a = S(() => i.default?.({})),
        l = S(() => {
          if (n.ariaLabel) return n.ariaLabel;
          let c = '';
          function f(d) {
            typeof d.children == 'string' && d.type !== rt
              ? (c += d.children)
              : Array.isArray(d.children) && d.children.forEach((p) => f(p));
          }
          return a.value?.forEach((d) => f(d)), c;
        }),
        u = S(() => {
          const { ariaLabel: c, ...f } = n;
          return f;
        });
      return (
        Ye(() => {
          Ko(window, 'scroll', (c) => {
            c.target?.contains(o.trigger.value) && o.onClose();
          }),
            Ko(window, gm, o.onClose);
        }),
        (c, f) => (
          T(),
          L(
            y(Ki),
            {
              'as-child': '',
              'disable-outside-pointer-events': !1,
              onEscapeKeyDown: f[0] || (f[0] = (d) => r('escapeKeyDown', d)),
              onPointerDownOutside:
                f[1] ||
                (f[1] = (d) => {
                  y(o).disableClosingTrigger.value &&
                    y(o).trigger.value?.contains(d.target) &&
                    d.preventDefault(),
                    r('pointerDownOutside', d);
                }),
              onFocusOutside: f[2] || (f[2] = In(() => {}, ['prevent'])),
              onDismiss: f[3] || (f[3] = (d) => y(o).onClose()),
            },
            {
              default: O(() => [
                z(
                  y(jc),
                  te(
                    { ref: y(s), 'data-state': y(o).stateAttribute.value },
                    { ...c.$attrs, ...u.value },
                    {
                      style: {
                        '--reka-tooltip-content-transform-origin':
                          'var(--reka-popper-transform-origin)',
                        '--reka-tooltip-content-available-width':
                          'var(--reka-popper-available-width)',
                        '--reka-tooltip-content-available-height':
                          'var(--reka-popper-available-height)',
                        '--reka-tooltip-trigger-width':
                          'var(--reka-popper-anchor-width)',
                        '--reka-tooltip-trigger-height':
                          'var(--reka-popper-anchor-height)',
                      },
                    }
                  ),
                  {
                    default: O(() => [
                      B(c.$slots, 'default'),
                      z(
                        y(Yi),
                        { id: y(o).contentId, role: 'tooltip' },
                        { default: O(() => [ft(et(l.value), 1)]), _: 1 },
                        8,
                        ['id']
                      ),
                    ]),
                    _: 3,
                  },
                  16,
                  ['data-state']
                ),
              ]),
              _: 3,
            }
          )
        )
      );
    },
  }),
  mm = MA,
  NA = J({
    __name: 'TooltipContentHoverable',
    props: {
      ariaLabel: { type: String, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
      side: { type: null, required: !1 },
      sideOffset: { type: Number, required: !1 },
      align: { type: null, required: !1 },
      alignOffset: { type: Number, required: !1 },
      avoidCollisions: { type: Boolean, required: !1 },
      collisionBoundary: { type: null, required: !1 },
      collisionPadding: { type: [Number, Object], required: !1 },
      arrowPadding: { type: Number, required: !1 },
      sticky: { type: String, required: !1 },
      hideWhenDetached: { type: Boolean, required: !1 },
      positionStrategy: { type: String, required: !1 },
      updatePositionStrategy: { type: String, required: !1 },
    },
    setup(e) {
      const n = Fn(e),
        { forwardRef: r, currentElement: o } = ve(),
        { trigger: s, onClose: i } = ra(),
        a = Wc(),
        { isPointerInTransit: l, onPointerExit: u } = Wg(s, o);
      return (
        (a.isPointerInTransitRef = l),
        u(() => {
          i();
        }),
        (c, f) => (
          T(),
          L(
            mm,
            te({ ref: y(r) }, y(n)),
            { default: O(() => [B(c.$slots, 'default')]), _: 3 },
            16
          )
        )
      );
    },
  }),
  $A = NA,
  BA = J({
    __name: 'TooltipContent',
    props: {
      forceMount: { type: Boolean, required: !1 },
      ariaLabel: { type: String, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
      side: { type: null, required: !1, default: 'top' },
      sideOffset: { type: Number, required: !1 },
      align: { type: null, required: !1 },
      alignOffset: { type: Number, required: !1 },
      avoidCollisions: { type: Boolean, required: !1 },
      collisionBoundary: { type: null, required: !1 },
      collisionPadding: { type: [Number, Object], required: !1 },
      arrowPadding: { type: Number, required: !1 },
      sticky: { type: String, required: !1 },
      hideWhenDetached: { type: Boolean, required: !1 },
      positionStrategy: { type: String, required: !1 },
      updatePositionStrategy: { type: String, required: !1 },
    },
    emits: ['escapeKeyDown', 'pointerDownOutside'],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = ra(),
        s = Gt(n, r),
        { forwardRef: i } = ve();
      return (a, l) => (
        T(),
        L(
          y(or),
          { present: a.forceMount || y(o).open.value },
          {
            default: O(() => [
              (T(),
              L(
                Tt(y(o).disableHoverableContent.value ? mm : $A),
                te({ ref: y(i) }, y(s)),
                { default: O(() => [B(a.$slots, 'default')]), _: 3 },
                16
              )),
            ]),
            _: 3,
          },
          8,
          ['present']
        )
      );
    },
  }),
  VA = BA,
  jA = J({
    __name: 'TooltipPortal',
    props: {
      to: { type: null, required: !1 },
      disabled: { type: Boolean, required: !1 },
      defer: { type: Boolean, required: !1 },
      forceMount: { type: Boolean, required: !1 },
    },
    setup(e) {
      const t = e;
      return (n, r) => (
        T(),
        L(
          y(Gi),
          tt(ut(t)),
          { default: O(() => [B(n.$slots, 'default')]), _: 3 },
          16
        )
      );
    },
  }),
  FA = jA,
  zA = J({
    __name: 'TooltipTrigger',
    props: {
      reference: { type: null, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: 'button' },
    },
    setup(e) {
      const t = e,
        n = ra(),
        r = Wc();
      n.contentId ||= Rr(void 0, 'reka-tooltip-content');
      const { forwardRef: o, currentElement: s } = ve(),
        i = j(!1),
        a = j(!1),
        l = S(() =>
          n.disabled.value
            ? {}
            : {
                click: g,
                focus: p,
                pointermove: f,
                pointerleave: d,
                pointerdown: c,
                blur: h,
              }
        );
      Ye(() => {
        n.onTriggerChange(s.value);
      });
      function u() {
        setTimeout(() => {
          i.value = !1;
        }, 1);
      }
      function c() {
        n.open && !n.disableClosingTrigger.value && n.onClose(),
          (i.value = !0),
          document.addEventListener('pointerup', u, { once: !0 });
      }
      function f(_) {
        _.pointerType !== 'touch' &&
          !a.value &&
          !r.isPointerInTransitRef.value &&
          (n.onTriggerEnter(), (a.value = !0));
      }
      function d() {
        n.onTriggerLeave(), (a.value = !1);
      }
      function p(_) {
        i.value ||
          (n.ignoreNonKeyboardFocus.value &&
            !_.target.matches?.(':focus-visible')) ||
          n.onOpen();
      }
      function h() {
        n.onClose();
      }
      function g() {
        n.disableClosingTrigger.value || n.onClose();
      }
      return (_, x) => (
        T(),
        L(
          y(Xi),
          { 'as-child': '', reference: _.reference },
          {
            default: O(() => [
              z(
                y(_e),
                te(
                  {
                    ref: y(o),
                    'aria-describedby': y(n).open.value
                      ? y(n).contentId
                      : void 0,
                    'data-state': y(n).stateAttribute.value,
                    as: _.as,
                    'as-child': t.asChild,
                    'data-grace-area-trigger': '',
                  },
                  Rp(l.value)
                ),
                { default: O(() => [B(_.$slots, 'default')]), _: 3 },
                16,
                ['aria-describedby', 'data-state', 'as', 'as-child']
              ),
            ]),
            _: 3,
          },
          8,
          ['reference']
        )
      );
    },
  }),
  HA = zA,
  UA = /\s+/g,
  Il = (e) => (typeof e != 'string' || !e ? e : e.replace(UA, ' ').trim()),
  bi = (...e) => {
    let t = [],
      n = (r) => {
        if (!r && r !== 0 && r !== 0n) return;
        if (Array.isArray(r)) {
          for (let s = 0, i = r.length; s < i; s++) n(r[s]);
          return;
        }
        let o = typeof r;
        if (o === 'string' || o === 'number' || o === 'bigint') {
          if (o === 'number' && r !== r) return;
          t.push(String(r));
        } else if (o === 'object') {
          let s = Object.keys(r);
          for (let i = 0, a = s.length; i < a; i++) {
            let l = s[i];
            r[l] && t.push(l);
          }
        }
      };
    for (let r = 0, o = e.length; r < o; r++) {
      let s = e[r];
      s != null && n(s);
    }
    return t.length > 0 ? Il(t.join(' ')) : void 0;
  },
  dd = (e) => (e === !1 ? 'false' : e === !0 ? 'true' : e === 0 ? '0' : e),
  Lt = (e) => {
    if (!e || typeof e != 'object') return !0;
    for (let t in e) return !1;
    return !0;
  },
  WA = (e, t) => {
    if (e === t) return !0;
    if (!e || !t) return !1;
    let n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let o = 0; o < n.length; o++) {
      let s = n[o];
      if (!r.includes(s) || e[s] !== t[s]) return !1;
    }
    return !0;
  },
  pd = (e, t) => {
    for (let n in t)
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        let r = t[n];
        n in e ? (e[n] = bi(e[n], r)) : (e[n] = r);
      }
    return e;
  },
  vm = (e, t) => {
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      Array.isArray(r) ? vm(r, t) : r && t.push(r);
    }
  },
  ym = (...e) => {
    let t = [];
    vm(e, t);
    let n = [];
    for (let r = 0; r < t.length; r++) t[r] && n.push(t[r]);
    return n;
  },
  Ll = (e, t) => {
    let n = {};
    for (let r in e) {
      let o = e[r];
      if (r in t) {
        let s = t[r];
        Array.isArray(o) || Array.isArray(s)
          ? (n[r] = ym(s, o))
          : typeof o == 'object' && typeof s == 'object' && o && s
          ? (n[r] = Ll(o, s))
          : (n[r] = s + ' ' + o);
      } else n[r] = o;
    }
    for (let r in t) r in e || (n[r] = t[r]);
    return n;
  },
  KA = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 };
function GA() {
  let e = null,
    t = {},
    n = !1;
  return {
    get cachedTwMerge() {
      return e;
    },
    set cachedTwMerge(r) {
      e = r;
    },
    get cachedTwMergeConfig() {
      return t;
    },
    set cachedTwMergeConfig(r) {
      t = r;
    },
    get didTwMergeConfigChange() {
      return n;
    },
    set didTwMergeConfigChange(r) {
      n = r;
    },
    reset() {
      (e = null), (t = {}), (n = !1);
    },
  };
}
var An = GA(),
  YA = (e) => {
    let t = (n, r) => {
      let {
          extend: o = null,
          slots: s = {},
          variants: i = {},
          compoundVariants: a = [],
          compoundSlots: l = [],
          defaultVariants: u = {},
        } = n,
        c = { ...KA, ...r },
        f = o?.base ? bi(o.base, n?.base) : n?.base,
        d = o?.variants && !Lt(o.variants) ? Ll(i, o.variants) : i,
        p =
          o?.defaultVariants && !Lt(o.defaultVariants)
            ? { ...o.defaultVariants, ...u }
            : u;
      !Lt(c.twMergeConfig) &&
        !WA(c.twMergeConfig, An.cachedTwMergeConfig) &&
        ((An.didTwMergeConfigChange = !0),
        (An.cachedTwMergeConfig = c.twMergeConfig));
      let h = Lt(o?.slots),
        g = Lt(s) ? {} : { base: bi(n?.base, h && o?.base), ...s },
        _ = h ? g : pd({ ...o?.slots }, Lt(g) ? { base: n?.base } : g),
        x = Lt(o?.compoundVariants) ? a : ym(o?.compoundVariants, a),
        b = (m) => {
          if (Lt(d) && Lt(s) && h) return e(f, m?.class, m?.className)(c);
          if (x && !Array.isArray(x))
            throw new TypeError(
              `The "compoundVariants" prop must be an array. Received: ${typeof x}`
            );
          if (l && !Array.isArray(l))
            throw new TypeError(
              `The "compoundSlots" prop must be an array. Received: ${typeof l}`
            );
          let w = (G, Q, $ = [], U) => {
              let I = $;
              if (typeof Q == 'string') {
                let ie = Il(Q).split(' ');
                for (let Ee = 0; Ee < ie.length; Ee++) I.push(`${G}:${ie[Ee]}`);
              } else if (Array.isArray(Q))
                for (let ie = 0; ie < Q.length; ie++) I.push(`${G}:${Q[ie]}`);
              else if (typeof Q == 'object' && typeof U == 'string' && U in Q) {
                let ie = Q[U];
                if (ie && typeof ie == 'string') {
                  let Ee = Il(ie).split(' '),
                    qe = [];
                  for (let Se = 0; Se < Ee.length; Se++)
                    qe.push(`${G}:${Ee[Se]}`);
                  I[U] = I[U] ? I[U].concat(qe) : qe;
                } else if (Array.isArray(ie) && ie.length > 0) {
                  let Ee = [];
                  for (let qe = 0; qe < ie.length; qe++)
                    Ee.push(`${G}:${ie[qe]}`);
                  I[U] = Ee;
                }
              }
              return I;
            },
            C = (G, Q = d, $ = null, U = null) => {
              let I = Q[G];
              if (!I || Lt(I)) return null;
              let ie = U?.[G] ?? m?.[G];
              if (ie === null) return null;
              let Ee = dd(ie),
                qe =
                  (Array.isArray(c.responsiveVariants) &&
                    c.responsiveVariants.length > 0) ||
                  c.responsiveVariants === !0,
                Se = p?.[G],
                xe = [];
              if (typeof Ee == 'object' && qe)
                for (let [Qe, N] of Object.entries(Ee)) {
                  let ae = I[N];
                  if (Qe === 'initial') {
                    Se = N;
                    continue;
                  }
                  (Array.isArray(c.responsiveVariants) &&
                    !c.responsiveVariants.includes(Qe)) ||
                    (xe = w(Qe, ae, xe, $));
                }
              let Ve = Ee != null && typeof Ee != 'object' ? Ee : dd(Se),
                Ue = I[Ve || 'false'];
              return typeof xe == 'object' && typeof $ == 'string' && xe[$]
                ? pd(xe, Ue)
                : xe.length > 0
                ? (xe.push(Ue), $ === 'base' ? xe.join(' ') : xe)
                : Ue;
            },
            E = () => {
              if (!d) return null;
              let G = Object.keys(d),
                Q = [];
              for (let $ = 0; $ < G.length; $++) {
                let U = C(G[$], d);
                U && Q.push(U);
              }
              return Q;
            },
            A = (G, Q) => {
              if (!d || typeof d != 'object') return null;
              let $ = [];
              for (let U in d) {
                let I = C(U, d, G, Q),
                  ie = G === 'base' && typeof I == 'string' ? I : I && I[G];
                ie && $.push(ie);
              }
              return $;
            },
            R = {};
          for (let G in m) {
            let Q = m[G];
            Q !== void 0 && (R[G] = Q);
          }
          let D = (G, Q) => {
              let $ = typeof m?.[G] == 'object' ? { [G]: m[G]?.initial } : {};
              return { ...p, ...R, ...$, ...Q };
            },
            X = (G = [], Q) => {
              let $ = [],
                U = G.length;
              for (let I = 0; I < U; I++) {
                let { class: ie, className: Ee, ...qe } = G[I],
                  Se = !0,
                  xe = D(null, Q);
                for (let Ve in qe) {
                  let Ue = qe[Ve],
                    Qe = xe[Ve];
                  if (Array.isArray(Ue)) {
                    if (!Ue.includes(Qe)) {
                      Se = !1;
                      break;
                    }
                  } else {
                    if ((Ue == null || Ue === !1) && (Qe == null || Qe === !1))
                      continue;
                    if (Qe !== Ue) {
                      Se = !1;
                      break;
                    }
                  }
                }
                Se && (ie && $.push(ie), Ee && $.push(Ee));
              }
              return $;
            },
            M = (G) => {
              let Q = X(x, G);
              if (!Array.isArray(Q)) return Q;
              let $ = {},
                U = e;
              for (let I = 0; I < Q.length; I++) {
                let ie = Q[I];
                if (typeof ie == 'string') $.base = U($.base, ie)(c);
                else if (typeof ie == 'object')
                  for (let Ee in ie) $[Ee] = U($[Ee], ie[Ee])(c);
              }
              return $;
            },
            Z = (G) => {
              if (l.length < 1) return null;
              let Q = {},
                $ = D(null, G);
              for (let U = 0; U < l.length; U++) {
                let { slots: I = [], class: ie, className: Ee, ...qe } = l[U];
                if (!Lt(qe)) {
                  let Se = !0;
                  for (let xe in qe) {
                    let Ve = $[xe],
                      Ue = qe[xe];
                    if (
                      Ve === void 0 ||
                      (Array.isArray(Ue) ? !Ue.includes(Ve) : Ue !== Ve)
                    ) {
                      Se = !1;
                      break;
                    }
                  }
                  if (!Se) continue;
                }
                for (let Se = 0; Se < I.length; Se++) {
                  let xe = I[Se];
                  Q[xe] || (Q[xe] = []), Q[xe].push([ie, Ee]);
                }
              }
              return Q;
            };
          if (!Lt(s) || !h) {
            let G = {};
            if (typeof _ == 'object' && !Lt(_)) {
              let Q = e;
              for (let $ in _)
                G[$] = (U) => {
                  let I = M(U),
                    ie = Z(U);
                  return Q(
                    _[$],
                    A($, U),
                    I ? I[$] : void 0,
                    ie ? ie[$] : void 0,
                    U?.class,
                    U?.className
                  )(c);
                };
            }
            return G;
          }
          return e(f, E(), X(x), m?.class, m?.className)(c);
        },
        v = () => {
          if (!(!d || typeof d != 'object')) return Object.keys(d);
        };
      return (
        (b.variantKeys = v()),
        (b.extend = o),
        (b.base = f),
        (b.slots = _),
        (b.variants = d),
        (b.defaultVariants = p),
        (b.compoundSlots = l),
        (b.compoundVariants = x),
        b
      );
    };
    return { tv: t, createTV: (n) => (r, o) => t(r, o ? Ll(n, o) : n) };
  };
const XA = (e, t) => {
    const n = new Array(e.length + t.length);
    for (let r = 0; r < e.length; r++) n[r] = e[r];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  JA = (e, t) => ({ classGroupId: e, validator: t }),
  bm = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  _i = '-',
  hd = [],
  QA = 'arbitrary..',
  ZA = (e) => {
    const t = tO(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        if (i.startsWith('[') && i.endsWith(']')) return eO(i);
        const a = i.split(_i),
          l = a[0] === '' && a.length > 1 ? 1 : 0;
        return _m(a, l, t);
      },
      getConflictingClassGroupIds: (i, a) => {
        if (a) {
          const l = r[i],
            u = n[i];
          return l ? (u ? XA(u, l) : l) : u || hd;
        }
        return n[i] || hd;
      },
    };
  },
  _m = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    const o = e[t],
      s = n.nextPart.get(o);
    if (s) {
      const u = _m(e, t + 1, s);
      if (u) return u;
    }
    const i = n.validators;
    if (i === null) return;
    const a = t === 0 ? e.join(_i) : e.slice(t).join(_i),
      l = i.length;
    for (let u = 0; u < l; u++) {
      const c = i[u];
      if (c.validator(a)) return c.classGroupId;
    }
  },
  eO = (e) =>
    e.slice(1, -1).indexOf(':') === -1
      ? void 0
      : (() => {
          const t = e.slice(1, -1),
            n = t.indexOf(':'),
            r = t.slice(0, n);
          return r ? QA + r : void 0;
        })(),
  tO = (e) => {
    const { theme: t, classGroups: n } = e;
    return nO(n, t);
  },
  nO = (e, t) => {
    const n = bm();
    for (const r in e) {
      const o = e[r];
      Kc(o, n, r, t);
    }
    return n;
  },
  Kc = (e, t, n, r) => {
    const o = e.length;
    for (let s = 0; s < o; s++) {
      const i = e[s];
      rO(i, t, n, r);
    }
  },
  rO = (e, t, n, r) => {
    if (typeof e == 'string') {
      oO(e, t, n);
      return;
    }
    if (typeof e == 'function') {
      sO(e, t, n, r);
      return;
    }
    iO(e, t, n, r);
  },
  oO = (e, t, n) => {
    const r = e === '' ? t : wm(t, e);
    r.classGroupId = n;
  },
  sO = (e, t, n, r) => {
    if (aO(e)) {
      Kc(e(r), t, n, r);
      return;
    }
    t.validators === null && (t.validators = []), t.validators.push(JA(n, e));
  },
  iO = (e, t, n, r) => {
    const o = Object.entries(e),
      s = o.length;
    for (let i = 0; i < s; i++) {
      const [a, l] = o[i];
      Kc(l, wm(t, a), n, r);
    }
  },
  wm = (e, t) => {
    let n = e;
    const r = t.split(_i),
      o = r.length;
    for (let s = 0; s < o; s++) {
      const i = r[s];
      let a = n.nextPart.get(i);
      a || ((a = bm()), n.nextPart.set(i, a)), (n = a);
    }
    return n;
  },
  aO = (e) => 'isThemeGetter' in e && e.isThemeGetter === !0,
  lO = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null);
    const o = (s, i) => {
      (n[s] = i), t++, t > e && ((t = 0), (r = n), (n = Object.create(null)));
    };
    return {
      get(s) {
        let i = n[s];
        if (i !== void 0) return i;
        if ((i = r[s]) !== void 0) return o(s, i), i;
      },
      set(s, i) {
        s in n ? (n[s] = i) : o(s, i);
      },
    };
  },
  Dl = '!',
  gd = ':',
  cO = [],
  md = (e, t, n, r, o) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: o,
  }),
  uO = (e) => {
    const { prefix: t, experimentalParseClassName: n } = e;
    let r = (o) => {
      const s = [];
      let i = 0,
        a = 0,
        l = 0,
        u;
      const c = o.length;
      for (let g = 0; g < c; g++) {
        const _ = o[g];
        if (i === 0 && a === 0) {
          if (_ === gd) {
            s.push(o.slice(l, g)), (l = g + 1);
            continue;
          }
          if (_ === '/') {
            u = g;
            continue;
          }
        }
        _ === '[' ? i++ : _ === ']' ? i-- : _ === '(' ? a++ : _ === ')' && a--;
      }
      const f = s.length === 0 ? o : o.slice(l);
      let d = f,
        p = !1;
      f.endsWith(Dl)
        ? ((d = f.slice(0, -1)), (p = !0))
        : f.startsWith(Dl) && ((d = f.slice(1)), (p = !0));
      const h = u && u > l ? u - l : void 0;
      return md(s, p, d, h);
    };
    if (t) {
      const o = t + gd,
        s = r;
      r = (i) =>
        i.startsWith(o) ? s(i.slice(o.length)) : md(cO, !1, i, void 0, !0);
    }
    if (n) {
      const o = r;
      r = (s) => n({ className: s, parseClassName: o });
    }
    return r;
  },
  fO = (e) => {
    const t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((n, r) => {
        t.set(n, 1e6 + r);
      }),
      (n) => {
        const r = [];
        let o = [];
        for (let s = 0; s < n.length; s++) {
          const i = n[s],
            a = i[0] === '[',
            l = t.has(i);
          a || l
            ? (o.length > 0 && (o.sort(), r.push(...o), (o = [])), r.push(i))
            : o.push(i);
        }
        return o.length > 0 && (o.sort(), r.push(...o)), r;
      }
    );
  },
  dO = (e) => ({
    cache: lO(e.cacheSize),
    parseClassName: uO(e),
    sortModifiers: fO(e),
    ...ZA(e),
  }),
  pO = /\s+/,
  hO = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
        sortModifiers: s,
      } = t,
      i = [],
      a = e.trim().split(pO);
    let l = '';
    for (let u = a.length - 1; u >= 0; u -= 1) {
      const c = a[u],
        {
          isExternal: f,
          modifiers: d,
          hasImportantModifier: p,
          baseClassName: h,
          maybePostfixModifierPosition: g,
        } = n(c);
      if (f) {
        l = c + (l.length > 0 ? ' ' + l : l);
        continue;
      }
      let _ = !!g,
        x = r(_ ? h.substring(0, g) : h);
      if (!x) {
        if (!_) {
          l = c + (l.length > 0 ? ' ' + l : l);
          continue;
        }
        if (((x = r(h)), !x)) {
          l = c + (l.length > 0 ? ' ' + l : l);
          continue;
        }
        _ = !1;
      }
      const b = d.length === 0 ? '' : d.length === 1 ? d[0] : s(d).join(':'),
        v = p ? b + Dl : b,
        m = v + x;
      if (i.indexOf(m) > -1) continue;
      i.push(m);
      const w = o(x, _);
      for (let C = 0; C < w.length; ++C) {
        const E = w[C];
        i.push(v + E);
      }
      l = c + (l.length > 0 ? ' ' + l : l);
    }
    return l;
  },
  gO = (...e) => {
    let t = 0,
      n,
      r,
      o = '';
    for (; t < e.length; )
      (n = e[t++]) && (r = xm(n)) && (o && (o += ' '), (o += r));
    return o;
  },
  xm = (e) => {
    if (typeof e == 'string') return e;
    let t,
      n = '';
    for (let r = 0; r < e.length; r++)
      e[r] && (t = xm(e[r])) && (n && (n += ' '), (n += t));
    return n;
  },
  ql = (e, ...t) => {
    let n, r, o, s;
    const i = (l) => {
        const u = t.reduce((c, f) => f(c), e());
        return (n = dO(u)), (r = n.cache.get), (o = n.cache.set), (s = a), a(l);
      },
      a = (l) => {
        const u = r(l);
        if (u) return u;
        const c = hO(l, n);
        return o(l, c), c;
      };
    return (s = i), (...l) => s(gO(...l));
  },
  mO = [],
  at = (e) => {
    const t = (n) => n[e] || mO;
    return (t.isThemeGetter = !0), t;
  },
  km = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Cm = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  vO = /^\d+\/\d+$/,
  yO = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  bO =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  _O = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  wO = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  xO =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Br = (e) => vO.test(e),
  Ce = (e) => !!e && !Number.isNaN(Number(e)),
  Un = (e) => !!e && Number.isInteger(Number(e)),
  Ma = (e) => e.endsWith('%') && Ce(e.slice(0, -1)),
  Pn = (e) => yO.test(e),
  kO = () => !0,
  CO = (e) => bO.test(e) && !_O.test(e),
  Em = () => !1,
  EO = (e) => wO.test(e),
  PO = (e) => xO.test(e),
  TO = (e) => !ce(e) && !ue(e),
  SO = (e) => po(e, Sm, Em),
  ce = (e) => km.test(e),
  cr = (e) => po(e, Am, CO),
  Na = (e) => po(e, LO, Ce),
  vd = (e) => po(e, Pm, Em),
  AO = (e) => po(e, Tm, PO),
  Cs = (e) => po(e, Om, EO),
  ue = (e) => Cm.test(e),
  ko = (e) => ho(e, Am),
  OO = (e) => ho(e, DO),
  yd = (e) => ho(e, Pm),
  RO = (e) => ho(e, Sm),
  IO = (e) => ho(e, Tm),
  Es = (e) => ho(e, Om, !0),
  po = (e, t, n) => {
    const r = km.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  ho = (e, t, n = !1) => {
    const r = Cm.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  Pm = (e) => e === 'position' || e === 'percentage',
  Tm = (e) => e === 'image' || e === 'url',
  Sm = (e) => e === 'length' || e === 'size' || e === 'bg-size',
  Am = (e) => e === 'length',
  LO = (e) => e === 'number',
  DO = (e) => e === 'family-name',
  Om = (e) => e === 'shadow',
  Ml = () => {
    const e = at('color'),
      t = at('font'),
      n = at('text'),
      r = at('font-weight'),
      o = at('tracking'),
      s = at('leading'),
      i = at('breakpoint'),
      a = at('container'),
      l = at('spacing'),
      u = at('radius'),
      c = at('shadow'),
      f = at('inset-shadow'),
      d = at('text-shadow'),
      p = at('drop-shadow'),
      h = at('blur'),
      g = at('perspective'),
      _ = at('aspect'),
      x = at('ease'),
      b = at('animate'),
      v = () => [
        'auto',
        'avoid',
        'all',
        'avoid-page',
        'page',
        'left',
        'right',
        'column',
      ],
      m = () => [
        'center',
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'left-top',
        'top-right',
        'right-top',
        'bottom-right',
        'right-bottom',
        'bottom-left',
        'left-bottom',
      ],
      w = () => [...m(), ue, ce],
      C = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      E = () => ['auto', 'contain', 'none'],
      A = () => [ue, ce, l],
      R = () => [Br, 'full', 'auto', ...A()],
      D = () => [Un, 'none', 'subgrid', ue, ce],
      X = () => ['auto', { span: ['full', Un, ue, ce] }, Un, ue, ce],
      M = () => [Un, 'auto', ue, ce],
      Z = () => ['auto', 'min', 'max', 'fr', ue, ce],
      G = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
        'baseline',
        'center-safe',
        'end-safe',
      ],
      Q = () => [
        'start',
        'end',
        'center',
        'stretch',
        'center-safe',
        'end-safe',
      ],
      $ = () => ['auto', ...A()],
      U = () => [
        Br,
        'auto',
        'full',
        'dvw',
        'dvh',
        'lvw',
        'lvh',
        'svw',
        'svh',
        'min',
        'max',
        'fit',
        ...A(),
      ],
      I = () => [e, ue, ce],
      ie = () => [...m(), yd, vd, { position: [ue, ce] }],
      Ee = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
      qe = () => ['auto', 'cover', 'contain', RO, SO, { size: [ue, ce] }],
      Se = () => [Ma, ko, cr],
      xe = () => ['', 'none', 'full', u, ue, ce],
      Ve = () => ['', Ce, ko, cr],
      Ue = () => ['solid', 'dashed', 'dotted', 'double'],
      Qe = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      N = () => [Ce, Ma, yd, vd],
      ae = () => ['', 'none', h, ue, ce],
      oe = () => ['none', Ce, ue, ce],
      de = () => ['none', Ce, ue, ce],
      ke = () => [Ce, ue, ce],
      je = () => [Br, 'full', ...A()];
    return {
      cacheSize: 500,
      theme: {
        animate: ['spin', 'ping', 'pulse', 'bounce'],
        aspect: ['video'],
        blur: [Pn],
        breakpoint: [Pn],
        color: [kO],
        container: [Pn],
        'drop-shadow': [Pn],
        ease: ['in', 'out', 'in-out'],
        font: [TO],
        'font-weight': [
          'thin',
          'extralight',
          'light',
          'normal',
          'medium',
          'semibold',
          'bold',
          'extrabold',
          'black',
        ],
        'inset-shadow': [Pn],
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
        perspective: [
          'dramatic',
          'near',
          'normal',
          'midrange',
          'distant',
          'none',
        ],
        radius: [Pn],
        shadow: [Pn],
        spacing: ['px', Ce],
        text: [Pn],
        'text-shadow': [Pn],
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', Br, ce, ue, _] }],
        container: ['container'],
        columns: [{ columns: [Ce, ce, ue, a] }],
        'break-after': [{ 'break-after': v() }],
        'break-before': [{ 'break-before': v() }],
        'break-inside': [
          { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
        ],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        sr: ['sr-only', 'not-sr-only'],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [
          { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
        ],
        'object-position': [{ object: w() }],
        overflow: [{ overflow: C() }],
        'overflow-x': [{ 'overflow-x': C() }],
        'overflow-y': [{ 'overflow-y': C() }],
        overscroll: [{ overscroll: E() }],
        'overscroll-x': [{ 'overscroll-x': E() }],
        'overscroll-y': [{ 'overscroll-y': E() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: R() }],
        'inset-x': [{ 'inset-x': R() }],
        'inset-y': [{ 'inset-y': R() }],
        start: [{ start: R() }],
        end: [{ end: R() }],
        top: [{ top: R() }],
        right: [{ right: R() }],
        bottom: [{ bottom: R() }],
        left: [{ left: R() }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: [Un, 'auto', ue, ce] }],
        basis: [{ basis: [Br, 'full', 'auto', a, ...A()] }],
        'flex-direction': [
          { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
        ],
        'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
        flex: [{ flex: [Ce, Br, 'auto', 'initial', 'none', ce] }],
        grow: [{ grow: ['', Ce, ue, ce] }],
        shrink: [{ shrink: ['', Ce, ue, ce] }],
        order: [{ order: [Un, 'first', 'last', 'none', ue, ce] }],
        'grid-cols': [{ 'grid-cols': D() }],
        'col-start-end': [{ col: X() }],
        'col-start': [{ 'col-start': M() }],
        'col-end': [{ 'col-end': M() }],
        'grid-rows': [{ 'grid-rows': D() }],
        'row-start-end': [{ row: X() }],
        'row-start': [{ 'row-start': M() }],
        'row-end': [{ 'row-end': M() }],
        'grid-flow': [
          { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
        ],
        'auto-cols': [{ 'auto-cols': Z() }],
        'auto-rows': [{ 'auto-rows': Z() }],
        gap: [{ gap: A() }],
        'gap-x': [{ 'gap-x': A() }],
        'gap-y': [{ 'gap-y': A() }],
        'justify-content': [{ justify: [...G(), 'normal'] }],
        'justify-items': [{ 'justify-items': [...Q(), 'normal'] }],
        'justify-self': [{ 'justify-self': ['auto', ...Q()] }],
        'align-content': [{ content: ['normal', ...G()] }],
        'align-items': [{ items: [...Q(), { baseline: ['', 'last'] }] }],
        'align-self': [{ self: ['auto', ...Q(), { baseline: ['', 'last'] }] }],
        'place-content': [{ 'place-content': G() }],
        'place-items': [{ 'place-items': [...Q(), 'baseline'] }],
        'place-self': [{ 'place-self': ['auto', ...Q()] }],
        p: [{ p: A() }],
        px: [{ px: A() }],
        py: [{ py: A() }],
        ps: [{ ps: A() }],
        pe: [{ pe: A() }],
        pt: [{ pt: A() }],
        pr: [{ pr: A() }],
        pb: [{ pb: A() }],
        pl: [{ pl: A() }],
        m: [{ m: $() }],
        mx: [{ mx: $() }],
        my: [{ my: $() }],
        ms: [{ ms: $() }],
        me: [{ me: $() }],
        mt: [{ mt: $() }],
        mr: [{ mr: $() }],
        mb: [{ mb: $() }],
        ml: [{ ml: $() }],
        'space-x': [{ 'space-x': A() }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': A() }],
        'space-y-reverse': ['space-y-reverse'],
        size: [{ size: U() }],
        w: [{ w: [a, 'screen', ...U()] }],
        'min-w': [{ 'min-w': [a, 'screen', 'none', ...U()] }],
        'max-w': [
          { 'max-w': [a, 'screen', 'none', 'prose', { screen: [i] }, ...U()] },
        ],
        h: [{ h: ['screen', 'lh', ...U()] }],
        'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...U()] }],
        'max-h': [{ 'max-h': ['screen', 'lh', ...U()] }],
        'font-size': [{ text: ['base', n, ko, cr] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [{ font: [r, ue, Na] }],
        'font-stretch': [
          {
            'font-stretch': [
              'ultra-condensed',
              'extra-condensed',
              'condensed',
              'semi-condensed',
              'normal',
              'semi-expanded',
              'expanded',
              'extra-expanded',
              'ultra-expanded',
              Ma,
              ce,
            ],
          },
        ],
        'font-family': [{ font: [OO, ce, t] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: [o, ue, ce] }],
        'line-clamp': [{ 'line-clamp': [Ce, 'none', ue, Na] }],
        leading: [{ leading: [s, ...A()] }],
        'list-image': [{ 'list-image': ['none', ue, ce] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'list-style-type': [{ list: ['disc', 'decimal', 'none', ue, ce] }],
        'text-alignment': [
          { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
        ],
        'placeholder-color': [{ placeholder: I() }],
        'text-color': [{ text: I() }],
        'text-decoration': [
          'underline',
          'overline',
          'line-through',
          'no-underline',
        ],
        'text-decoration-style': [{ decoration: [...Ue(), 'wavy'] }],
        'text-decoration-thickness': [
          { decoration: [Ce, 'from-font', 'auto', ue, cr] },
        ],
        'text-decoration-color': [{ decoration: I() }],
        'underline-offset': [{ 'underline-offset': [Ce, 'auto', ue, ce] }],
        'text-transform': [
          'uppercase',
          'lowercase',
          'capitalize',
          'normal-case',
        ],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: A() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              ue,
              ce,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              'normal',
              'nowrap',
              'pre',
              'pre-line',
              'pre-wrap',
              'break-spaces',
            ],
          },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', ue, ce] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: ie() }],
        'bg-repeat': [{ bg: Ee() }],
        'bg-size': [{ bg: qe() }],
        'bg-image': [
          {
            bg: [
              'none',
              {
                linear: [
                  { to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
                  Un,
                  ue,
                  ce,
                ],
                radial: ['', ue, ce],
                conic: [Un, ue, ce],
              },
              IO,
              AO,
            ],
          },
        ],
        'bg-color': [{ bg: I() }],
        'gradient-from-pos': [{ from: Se() }],
        'gradient-via-pos': [{ via: Se() }],
        'gradient-to-pos': [{ to: Se() }],
        'gradient-from': [{ from: I() }],
        'gradient-via': [{ via: I() }],
        'gradient-to': [{ to: I() }],
        rounded: [{ rounded: xe() }],
        'rounded-s': [{ 'rounded-s': xe() }],
        'rounded-e': [{ 'rounded-e': xe() }],
        'rounded-t': [{ 'rounded-t': xe() }],
        'rounded-r': [{ 'rounded-r': xe() }],
        'rounded-b': [{ 'rounded-b': xe() }],
        'rounded-l': [{ 'rounded-l': xe() }],
        'rounded-ss': [{ 'rounded-ss': xe() }],
        'rounded-se': [{ 'rounded-se': xe() }],
        'rounded-ee': [{ 'rounded-ee': xe() }],
        'rounded-es': [{ 'rounded-es': xe() }],
        'rounded-tl': [{ 'rounded-tl': xe() }],
        'rounded-tr': [{ 'rounded-tr': xe() }],
        'rounded-br': [{ 'rounded-br': xe() }],
        'rounded-bl': [{ 'rounded-bl': xe() }],
        'border-w': [{ border: Ve() }],
        'border-w-x': [{ 'border-x': Ve() }],
        'border-w-y': [{ 'border-y': Ve() }],
        'border-w-s': [{ 'border-s': Ve() }],
        'border-w-e': [{ 'border-e': Ve() }],
        'border-w-t': [{ 'border-t': Ve() }],
        'border-w-r': [{ 'border-r': Ve() }],
        'border-w-b': [{ 'border-b': Ve() }],
        'border-w-l': [{ 'border-l': Ve() }],
        'divide-x': [{ 'divide-x': Ve() }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': Ve() }],
        'divide-y-reverse': ['divide-y-reverse'],
        'border-style': [{ border: [...Ue(), 'hidden', 'none'] }],
        'divide-style': [{ divide: [...Ue(), 'hidden', 'none'] }],
        'border-color': [{ border: I() }],
        'border-color-x': [{ 'border-x': I() }],
        'border-color-y': [{ 'border-y': I() }],
        'border-color-s': [{ 'border-s': I() }],
        'border-color-e': [{ 'border-e': I() }],
        'border-color-t': [{ 'border-t': I() }],
        'border-color-r': [{ 'border-r': I() }],
        'border-color-b': [{ 'border-b': I() }],
        'border-color-l': [{ 'border-l': I() }],
        'divide-color': [{ divide: I() }],
        'outline-style': [{ outline: [...Ue(), 'none', 'hidden'] }],
        'outline-offset': [{ 'outline-offset': [Ce, ue, ce] }],
        'outline-w': [{ outline: ['', Ce, ko, cr] }],
        'outline-color': [{ outline: I() }],
        shadow: [{ shadow: ['', 'none', c, Es, Cs] }],
        'shadow-color': [{ shadow: I() }],
        'inset-shadow': [{ 'inset-shadow': ['none', f, Es, Cs] }],
        'inset-shadow-color': [{ 'inset-shadow': I() }],
        'ring-w': [{ ring: Ve() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: I() }],
        'ring-offset-w': [{ 'ring-offset': [Ce, cr] }],
        'ring-offset-color': [{ 'ring-offset': I() }],
        'inset-ring-w': [{ 'inset-ring': Ve() }],
        'inset-ring-color': [{ 'inset-ring': I() }],
        'text-shadow': [{ 'text-shadow': ['none', d, Es, Cs] }],
        'text-shadow-color': [{ 'text-shadow': I() }],
        opacity: [{ opacity: [Ce, ue, ce] }],
        'mix-blend': [
          { 'mix-blend': [...Qe(), 'plus-darker', 'plus-lighter'] },
        ],
        'bg-blend': [{ 'bg-blend': Qe() }],
        'mask-clip': [
          {
            'mask-clip': [
              'border',
              'padding',
              'content',
              'fill',
              'stroke',
              'view',
            ],
          },
          'mask-no-clip',
        ],
        'mask-composite': [
          { mask: ['add', 'subtract', 'intersect', 'exclude'] },
        ],
        'mask-image-linear-pos': [{ 'mask-linear': [Ce] }],
        'mask-image-linear-from-pos': [{ 'mask-linear-from': N() }],
        'mask-image-linear-to-pos': [{ 'mask-linear-to': N() }],
        'mask-image-linear-from-color': [{ 'mask-linear-from': I() }],
        'mask-image-linear-to-color': [{ 'mask-linear-to': I() }],
        'mask-image-t-from-pos': [{ 'mask-t-from': N() }],
        'mask-image-t-to-pos': [{ 'mask-t-to': N() }],
        'mask-image-t-from-color': [{ 'mask-t-from': I() }],
        'mask-image-t-to-color': [{ 'mask-t-to': I() }],
        'mask-image-r-from-pos': [{ 'mask-r-from': N() }],
        'mask-image-r-to-pos': [{ 'mask-r-to': N() }],
        'mask-image-r-from-color': [{ 'mask-r-from': I() }],
        'mask-image-r-to-color': [{ 'mask-r-to': I() }],
        'mask-image-b-from-pos': [{ 'mask-b-from': N() }],
        'mask-image-b-to-pos': [{ 'mask-b-to': N() }],
        'mask-image-b-from-color': [{ 'mask-b-from': I() }],
        'mask-image-b-to-color': [{ 'mask-b-to': I() }],
        'mask-image-l-from-pos': [{ 'mask-l-from': N() }],
        'mask-image-l-to-pos': [{ 'mask-l-to': N() }],
        'mask-image-l-from-color': [{ 'mask-l-from': I() }],
        'mask-image-l-to-color': [{ 'mask-l-to': I() }],
        'mask-image-x-from-pos': [{ 'mask-x-from': N() }],
        'mask-image-x-to-pos': [{ 'mask-x-to': N() }],
        'mask-image-x-from-color': [{ 'mask-x-from': I() }],
        'mask-image-x-to-color': [{ 'mask-x-to': I() }],
        'mask-image-y-from-pos': [{ 'mask-y-from': N() }],
        'mask-image-y-to-pos': [{ 'mask-y-to': N() }],
        'mask-image-y-from-color': [{ 'mask-y-from': I() }],
        'mask-image-y-to-color': [{ 'mask-y-to': I() }],
        'mask-image-radial': [{ 'mask-radial': [ue, ce] }],
        'mask-image-radial-from-pos': [{ 'mask-radial-from': N() }],
        'mask-image-radial-to-pos': [{ 'mask-radial-to': N() }],
        'mask-image-radial-from-color': [{ 'mask-radial-from': I() }],
        'mask-image-radial-to-color': [{ 'mask-radial-to': I() }],
        'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
        'mask-image-radial-size': [
          {
            'mask-radial': [
              { closest: ['side', 'corner'], farthest: ['side', 'corner'] },
            ],
          },
        ],
        'mask-image-radial-pos': [{ 'mask-radial-at': m() }],
        'mask-image-conic-pos': [{ 'mask-conic': [Ce] }],
        'mask-image-conic-from-pos': [{ 'mask-conic-from': N() }],
        'mask-image-conic-to-pos': [{ 'mask-conic-to': N() }],
        'mask-image-conic-from-color': [{ 'mask-conic-from': I() }],
        'mask-image-conic-to-color': [{ 'mask-conic-to': I() }],
        'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
        'mask-origin': [
          {
            'mask-origin': [
              'border',
              'padding',
              'content',
              'fill',
              'stroke',
              'view',
            ],
          },
        ],
        'mask-position': [{ mask: ie() }],
        'mask-repeat': [{ mask: Ee() }],
        'mask-size': [{ mask: qe() }],
        'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
        'mask-image': [{ mask: ['none', ue, ce] }],
        filter: [{ filter: ['', 'none', ue, ce] }],
        blur: [{ blur: ae() }],
        brightness: [{ brightness: [Ce, ue, ce] }],
        contrast: [{ contrast: [Ce, ue, ce] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', p, Es, Cs] }],
        'drop-shadow-color': [{ 'drop-shadow': I() }],
        grayscale: [{ grayscale: ['', Ce, ue, ce] }],
        'hue-rotate': [{ 'hue-rotate': [Ce, ue, ce] }],
        invert: [{ invert: ['', Ce, ue, ce] }],
        saturate: [{ saturate: [Ce, ue, ce] }],
        sepia: [{ sepia: ['', Ce, ue, ce] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none', ue, ce] }],
        'backdrop-blur': [{ 'backdrop-blur': ae() }],
        'backdrop-brightness': [{ 'backdrop-brightness': [Ce, ue, ce] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [Ce, ue, ce] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': ['', Ce, ue, ce] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [Ce, ue, ce] }],
        'backdrop-invert': [{ 'backdrop-invert': ['', Ce, ue, ce] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [Ce, ue, ce] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [Ce, ue, ce] }],
        'backdrop-sepia': [{ 'backdrop-sepia': ['', Ce, ue, ce] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': A() }],
        'border-spacing-x': [{ 'border-spacing-x': A() }],
        'border-spacing-y': [{ 'border-spacing-y': A() }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          {
            transition: [
              '',
              'all',
              'colors',
              'opacity',
              'shadow',
              'transform',
              'none',
              ue,
              ce,
            ],
          },
        ],
        'transition-behavior': [{ transition: ['normal', 'discrete'] }],
        duration: [{ duration: [Ce, 'initial', ue, ce] }],
        ease: [{ ease: ['linear', 'initial', x, ue, ce] }],
        delay: [{ delay: [Ce, ue, ce] }],
        animate: [{ animate: ['none', b, ue, ce] }],
        backface: [{ backface: ['hidden', 'visible'] }],
        perspective: [{ perspective: [g, ue, ce] }],
        'perspective-origin': [{ 'perspective-origin': w() }],
        rotate: [{ rotate: oe() }],
        'rotate-x': [{ 'rotate-x': oe() }],
        'rotate-y': [{ 'rotate-y': oe() }],
        'rotate-z': [{ 'rotate-z': oe() }],
        scale: [{ scale: de() }],
        'scale-x': [{ 'scale-x': de() }],
        'scale-y': [{ 'scale-y': de() }],
        'scale-z': [{ 'scale-z': de() }],
        'scale-3d': ['scale-3d'],
        skew: [{ skew: ke() }],
        'skew-x': [{ 'skew-x': ke() }],
        'skew-y': [{ 'skew-y': ke() }],
        transform: [{ transform: [ue, ce, '', 'none', 'gpu', 'cpu'] }],
        'transform-origin': [{ origin: w() }],
        'transform-style': [{ transform: ['3d', 'flat'] }],
        translate: [{ translate: je() }],
        'translate-x': [{ 'translate-x': je() }],
        'translate-y': [{ 'translate-y': je() }],
        'translate-z': [{ 'translate-z': je() }],
        'translate-none': ['translate-none'],
        accent: [{ accent: I() }],
        appearance: [{ appearance: ['none', 'auto'] }],
        'caret-color': [{ caret: I() }],
        'color-scheme': [
          {
            scheme: [
              'normal',
              'dark',
              'light',
              'light-dark',
              'only-dark',
              'only-light',
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              ue,
              ce,
            ],
          },
        ],
        'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
        'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
        resize: [{ resize: ['none', '', 'y', 'x'] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': A() }],
        'scroll-mx': [{ 'scroll-mx': A() }],
        'scroll-my': [{ 'scroll-my': A() }],
        'scroll-ms': [{ 'scroll-ms': A() }],
        'scroll-me': [{ 'scroll-me': A() }],
        'scroll-mt': [{ 'scroll-mt': A() }],
        'scroll-mr': [{ 'scroll-mr': A() }],
        'scroll-mb': [{ 'scroll-mb': A() }],
        'scroll-ml': [{ 'scroll-ml': A() }],
        'scroll-p': [{ 'scroll-p': A() }],
        'scroll-px': [{ 'scroll-px': A() }],
        'scroll-py': [{ 'scroll-py': A() }],
        'scroll-ps': [{ 'scroll-ps': A() }],
        'scroll-pe': [{ 'scroll-pe': A() }],
        'scroll-pt': [{ 'scroll-pt': A() }],
        'scroll-pr': [{ 'scroll-pr': A() }],
        'scroll-pb': [{ 'scroll-pb': A() }],
        'scroll-pl': [{ 'scroll-pl': A() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [
          {
            'will-change': ['auto', 'scroll', 'contents', 'transform', ue, ce],
          },
        ],
        fill: [{ fill: ['none', ...I()] }],
        'stroke-w': [{ stroke: [Ce, ko, cr, Na] }],
        stroke: [{ stroke: ['none', ...I()] }],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: [
          'inset-x',
          'inset-y',
          'start',
          'end',
          'top',
          'right',
          'bottom',
          'left',
        ],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-x',
          'border-w-y',
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-x',
          'border-color-y',
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        translate: ['translate-x', 'translate-y', 'translate-none'],
        'translate-none': [
          'translate',
          'translate-x',
          'translate-y',
          'translate-z',
        ],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
      orderSensitiveModifiers: [
        '*',
        '**',
        'after',
        'backdrop',
        'before',
        'details-content',
        'file',
        'first-letter',
        'first-line',
        'marker',
        'placeholder',
        'selection',
      ],
    };
  },
  qO = (
    e,
    {
      cacheSize: t,
      prefix: n,
      experimentalParseClassName: r,
      extend: o = {},
      override: s = {},
    }
  ) => (
    So(e, 'cacheSize', t),
    So(e, 'prefix', n),
    So(e, 'experimentalParseClassName', r),
    Ps(e.theme, s.theme),
    Ps(e.classGroups, s.classGroups),
    Ps(e.conflictingClassGroups, s.conflictingClassGroups),
    Ps(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers),
    So(e, 'orderSensitiveModifiers', s.orderSensitiveModifiers),
    Ts(e.theme, o.theme),
    Ts(e.classGroups, o.classGroups),
    Ts(e.conflictingClassGroups, o.conflictingClassGroups),
    Ts(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers),
    Rm(e, o, 'orderSensitiveModifiers'),
    e
  ),
  So = (e, t, n) => {
    n !== void 0 && (e[t] = n);
  },
  Ps = (e, t) => {
    if (t) for (const n in t) So(e, n, t[n]);
  },
  Ts = (e, t) => {
    if (t) for (const n in t) Rm(e, t, n);
  },
  Rm = (e, t, n) => {
    const r = t[n];
    r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
  },
  MO = (e, ...t) =>
    typeof e == 'function' ? ql(Ml, e, ...t) : ql(() => qO(Ml(), e), ...t),
  NO = ql(Ml);
var $O = (e) =>
    Lt(e)
      ? NO
      : MO({
          ...e,
          extend: {
            theme: e.theme,
            classGroups: e.classGroups,
            conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
            conflictingClassGroups: e.conflictingClassGroups,
            ...e.extend,
          },
        }),
  BO =
    (...e) =>
    (t) => {
      let n = bi(e);
      return !n || !t.twMerge
        ? n
        : ((!An.cachedTwMerge || An.didTwMergeConfigChange) &&
            ((An.didTwMergeConfigChange = !1),
            (An.cachedTwMerge = $O(An.cachedTwMergeConfig))),
          An.cachedTwMerge(n) || void 0);
    },
  { createTV: VO } = YA(BO);
const jO = yg,
  Ie = VO(jO.ui?.tv),
  FO = { base: 'min-h-[calc(100vh-var(--ui-header-height))]' },
  Im = {
    __name: 'UMain',
    props: {
      as: { type: null, required: !1 },
      class: { type: null, required: !1 },
    },
    setup(e) {
      const t = e,
        n = Je(),
        r = S(() => Ie({ extend: Ie(FO), ...(n.ui?.main || {}) }));
      return (o, s) => (
        T(),
        L(
          y(_e),
          { as: e.as, class: re(r.value({ class: t.class })) },
          { default: O(() => [B(o.$slots, 'default')]), _: 3 },
          8,
          ['as', 'class']
        )
      );
    },
  },
  zO = J({
    name: 'LayoutLoader',
    inheritAttrs: !1,
    props: { name: String, layoutProps: Object },
    setup(e, t) {
      return () => Be(Qn[e.name], e.layoutProps, t.slots);
    },
  }),
  HO = {
    name: { type: [String, Boolean, Object], default: null },
    fallback: { type: [String, Object], default: null },
  },
  UO = J({
    name: 'NuxtLayout',
    inheritAttrs: !1,
    props: HO,
    setup(e, t) {
      const n = Le(),
        r = $e(Cr),
        s = !r || r === rs() ? hg() : r,
        i = S(() => {
          let c = y(e.name) ?? s?.meta.layout ?? 'default';
          return c && !(c in Qn) && e.fallback && (c = y(e.fallback)), c;
        }),
        a = Pe();
      t.expose({ layoutRef: a });
      const l = n.deferHydration();
      if (n.isHydrating) {
        const c = n.hooks.hookOnce('app:error', l);
        _t().beforeEach(c);
      }
      let u;
      return () => {
        const c = i.value && i.value in Qn,
          f = s?.meta.layoutTransition ?? J0,
          d = u;
        return (
          (u = i.value),
          gg(c && f, {
            default: () =>
              Be(
                sc,
                {
                  suspensible: !0,
                  onResolve: () => {
                    Ze(l);
                  },
                },
                {
                  default: () =>
                    Be(
                      WO,
                      {
                        layoutProps: te(t.attrs, { ref: a }),
                        key: i.value || void 0,
                        name: i.value,
                        shouldProvide: !e.name,
                        isRenderingNewLayout: (p) => p !== d && p === i.value,
                        hasTransition: !!f,
                      },
                      t.slots
                    ),
                }
              ),
          }).default()
        );
      };
    },
  }),
  WO = J({
    name: 'NuxtLayoutProvider',
    inheritAttrs: !1,
    props: {
      name: { type: [String, Boolean] },
      layoutProps: { type: Object },
      hasTransition: { type: Boolean },
      shouldProvide: { type: Boolean },
      isRenderingNewLayout: { type: Function, required: !0 },
    },
    setup(e, t) {
      const n = e.name;
      e.shouldProvide &&
        bt($h, { isCurrent: (s) => n === (s.meta.layout ?? 'default') });
      const r = $e(Cr);
      if (r && r === rs()) {
        const s = hg(),
          i = {};
        for (const a in s) {
          const l = a;
          Object.defineProperty(i, l, {
            enumerable: !0,
            get: () => (e.isRenderingNewLayout(e.name) ? s[l] : r[l]),
          });
        }
        bt(Cr, Zt(i));
      }
      return () =>
        !n || (typeof n == 'string' && !(n in Qn))
          ? t.slots.default?.()
          : Be(zO, { key: n, layoutProps: e.layoutProps, name: n }, t.slots);
    },
  }),
  Lm = Symbol.for('nuxt:client-only'),
  Gc = J({
    name: 'ClientOnly',
    inheritAttrs: !1,
    props: ['fallback', 'placeholder', 'placeholderTag', 'fallbackTag'],
    setup(e, { slots: t, attrs: n }) {
      const r = Pe(!1);
      Ye(() => {
        r.value = !0;
      });
      const o = Xe();
      return (
        o && (o._nuxtClientOnly = !0),
        bt(Lm, !0),
        () => {
          if (r.value) {
            const l = t.default?.();
            return l && l.length === 1 ? [on(l[0], n)] : l;
          }
          const s = t.fallback || t.placeholder;
          if (s) return Be(s);
          const i = e.fallback || e.placeholder || '',
            a = e.fallbackTag || e.placeholderTag || 'span';
          return ge(a, n, i);
        }
      );
    },
  });
function go(e) {
  return lo() ? (Ai(e), !0) : !1;
}
function Yc(e) {
  let t = 0,
    n,
    r;
  const o = () => {
    (t -= 1), r && t <= 0 && (r.stop(), (n = void 0), (r = void 0));
  };
  return (...s) => (
    (t += 1), r || ((r = Si(!0)), (n = r.run(() => e(...s)))), go(o), n
  );
}
function KO(e, t) {
  if (typeof Symbol < 'u') {
    const n = { ...e };
    return (
      Object.defineProperty(n, Symbol.iterator, {
        enumerable: !1,
        value() {
          let r = 0;
          return { next: () => ({ value: t[r++], done: r > t.length }) };
        },
      }),
      n
    );
  } else return Object.assign([...t], e);
}
function GO(e) {
  if (!ze(e)) return dt(e);
  const t = new Proxy(
    {},
    {
      get(n, r, o) {
        return y(Reflect.get(e.value, r, o));
      },
      set(n, r, o) {
        return (
          ze(e.value[r]) && !ze(o) ? (e.value[r].value = o) : (e.value[r] = o),
          !0
        );
      },
      deleteProperty(n, r) {
        return Reflect.deleteProperty(e.value, r);
      },
      has(n, r) {
        return Reflect.has(e.value, r);
      },
      ownKeys() {
        return Object.keys(e.value);
      },
      getOwnPropertyDescriptor() {
        return { enumerable: !0, configurable: !0 };
      },
    }
  );
  return dt(t);
}
function Dm(e) {
  return GO(S(e));
}
function YO(e, ...t) {
  const n = t.flat(),
    r = n[0];
  return Dm(() =>
    Object.fromEntries(
      typeof r == 'function'
        ? Object.entries(Ot(e)).filter(([o, s]) => !r(Ae(s), o))
        : Object.entries(Ot(e)).filter((o) => !n.includes(o[0]))
    )
  );
}
const Xc = typeof window < 'u' && typeof document < 'u';
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope;
const XO = (e) => typeof e < 'u',
  JO = (e) => e != null,
  QO = Object.prototype.toString,
  ZO = (e) => QO.call(e) === '[object Object]',
  wi = () => {};
function qm(...e) {
  if (e.length !== 1) return ot(...e);
  const t = e[0];
  return typeof t == 'function' ? yn(Zo(() => ({ get: t, set: wi }))) : j(t);
}
function _n(e, ...t) {
  const n = t.flat(),
    r = n[0];
  return Dm(() =>
    Object.fromEntries(
      typeof r == 'function'
        ? Object.entries(Ot(e)).filter(([o, s]) => r(Ae(s), o))
        : n.map((o) => [o, qm(e, o)])
    )
  );
}
function eR(e, t) {
  function n(...r) {
    return new Promise((o, s) => {
      Promise.resolve(
        e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })
      )
        .then(o)
        .catch(s);
    });
  }
  return n;
}
const tR = (e) => e();
function nR(e, t = {}) {
  let n,
    r,
    o = wi;
  const s = (l) => {
    clearTimeout(l), o(), (o = wi);
  };
  let i;
  return (l) => {
    const u = Ae(e),
      c = Ae(t.maxWait);
    return (
      n && s(n),
      u <= 0 || (c !== void 0 && c <= 0)
        ? (r && (s(r), (r = void 0)), Promise.resolve(l()))
        : new Promise((f, d) => {
            (o = t.rejectOnCancel ? d : f),
              (i = l),
              c &&
                !r &&
                (r = setTimeout(() => {
                  n && s(n), (r = void 0), f(i());
                }, c)),
              (n = setTimeout(() => {
                r && s(r), (r = void 0), f(l());
              }, u));
          })
    );
  };
}
function rD(e = tR, t = {}) {
  const { initialState: n = 'active' } = t,
    r = qm(n === 'active');
  function o() {
    r.value = !1;
  }
  function s() {
    r.value = !0;
  }
  const i = (...a) => {
    r.value && e(...a);
  };
  return { isActive: yn(r), pause: o, resume: s, eventFilter: i };
}
function rR(e) {
  let t;
  function n() {
    return t || (t = e()), t;
  }
  return (
    (n.reset = async () => {
      const r = t;
      (t = void 0), r && (await r);
    }),
    n
  );
}
function Fs(e) {
  return Array.isArray(e) ? e : [e];
}
function oR(e) {
  const t = Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}
const sR = /-(\w)/g,
  iR = oR((e) => e.replace(sR, (t, n) => (n ? n.toUpperCase() : '')));
function aR(e) {
  return Xe();
}
function lR(e, t = 200, n = {}) {
  return eR(nR(t, n), e);
}
function cR(e, t = !0, n) {
  aR() ? Ye(e, n) : t ? e() : Ze(e);
}
function uR(e, t, n = {}) {
  const { immediate: r = !0, immediateCallback: o = !1 } = n,
    s = Pe(!1);
  let i;
  function a() {
    i && (clearTimeout(i), (i = void 0));
  }
  function l() {
    (s.value = !1), a();
  }
  function u(...c) {
    o && e(),
      a(),
      (s.value = !0),
      (i = setTimeout(() => {
        (s.value = !1), (i = void 0), e(...c);
      }, Ae(t)));
  }
  return (
    r && ((s.value = !0), Xc && u()),
    go(l),
    { isPending: ur(s), start: u, stop: l }
  );
}
function fR(e, t, n) {
  return we(e, t, { ...n, immediate: !0 });
}
function bd(e = {}) {
  const { inheritAttrs: t = !0 } = e,
    n = Pe(),
    r = J({
      setup(s, { slots: i }) {
        return () => {
          n.value = i.default;
        };
      },
    }),
    o = J({
      inheritAttrs: t,
      props: e.props,
      setup(s, { attrs: i, slots: a }) {
        return () => {
          var l;
          n.value;
          const u =
            (l = n.value) == null
              ? void 0
              : l.call(n, { ...(e.props == null ? dR(i) : s), $slots: a });
          return t && u?.length === 1 ? u[0] : u;
        };
      },
    });
  return KO({ define: r, reuse: o }, [r, o]);
}
function dR(e) {
  const t = {};
  for (const n in e) t[iR(n)] = e[n];
  return t;
}
const qr = Xc ? window : void 0,
  Mm = Xc ? window.navigator : void 0;
function io(e) {
  var t;
  const n = Ae(e);
  return (t = n?.$el) != null ? t : n;
}
function en(...e) {
  const t = [],
    n = () => {
      t.forEach((a) => a()), (t.length = 0);
    },
    r = (a, l, u, c) => (
      a.addEventListener(l, u, c), () => a.removeEventListener(l, u, c)
    ),
    o = S(() => {
      const a = Fs(Ae(e[0])).filter((l) => l != null);
      return a.every((l) => typeof l != 'string') ? a : void 0;
    }),
    s = fR(
      () => {
        var a, l;
        return [
          (l = (a = o.value) == null ? void 0 : a.map((u) => io(u))) != null
            ? l
            : [qr].filter((u) => u != null),
          Fs(Ae(o.value ? e[1] : e[0])),
          Fs(y(o.value ? e[2] : e[1])),
          Ae(o.value ? e[3] : e[2]),
        ];
      },
      ([a, l, u, c]) => {
        if ((n(), !a?.length || !l?.length || !u?.length)) return;
        const f = ZO(c) ? { ...c } : c;
        t.push(
          ...a.flatMap((d) => l.flatMap((p) => u.map((h) => r(d, p, h, f))))
        );
      },
      { flush: 'post' }
    ),
    i = () => {
      s(), n();
    };
  return go(n), i;
}
function pR() {
  const e = Pe(!1),
    t = Xe();
  return (
    t &&
      Ye(() => {
        e.value = !0;
      }, t),
    e
  );
}
function oa(e) {
  const t = pR();
  return S(() => (t.value, !!e()));
}
function Nm(e, t, n = {}) {
  const { window: r = qr, ...o } = n;
  let s;
  const i = oa(() => r && 'MutationObserver' in r),
    a = () => {
      s && (s.disconnect(), (s = void 0));
    },
    l = S(() => {
      const d = Ae(e),
        p = Fs(d).map(io).filter(JO);
      return new Set(p);
    }),
    u = we(
      l,
      (d) => {
        a(),
          i.value &&
            d.size &&
            ((s = new MutationObserver(t)), d.forEach((p) => s.observe(p, o)));
      },
      { immediate: !0, flush: 'post' }
    ),
    c = () => s?.takeRecords(),
    f = () => {
      u(), a();
    };
  return go(f), { isSupported: i, stop: f, takeRecords: c };
}
function hR(e, t, n = {}) {
  const { window: r = qr, document: o = r?.document, flush: s = 'sync' } = n;
  if (!r || !o) return wi;
  let i;
  const a = (c) => {
      i?.(), (i = c);
    },
    l = it(
      () => {
        const c = io(e);
        if (c) {
          const { stop: f } = Nm(
            o,
            (d) => {
              d
                .map((h) => [...h.removedNodes])
                .flat()
                .some((h) => h === c || h.contains(c)) && t(d);
            },
            { window: r, childList: !0, subtree: !0 }
          );
          a(f);
        }
      },
      { flush: s }
    ),
    u = () => {
      l(), a();
    };
  return go(u), u;
}
function oD(e = {}) {
  var t;
  const { window: n = qr, deep: r = !0, triggerOnRemoval: o = !1 } = e,
    s = (t = e.document) != null ? t : n?.document,
    i = () => {
      var u;
      let c = s?.activeElement;
      if (r)
        for (; c?.shadowRoot; )
          c = (u = c?.shadowRoot) == null ? void 0 : u.activeElement;
      return c;
    },
    a = Pe(),
    l = () => {
      a.value = i();
    };
  if (n) {
    const u = { capture: !0, passive: !0 };
    en(
      n,
      'blur',
      (c) => {
        c.relatedTarget === null && l();
      },
      u
    ),
      en(n, 'focus', l, u);
  }
  return o && hR(a, l, { document: s }), l(), a;
}
function _d(e, t = {}) {
  const { controls: n = !1, navigator: r = Mm } = t,
    o = oa(() => r && 'permissions' in r),
    s = Pe(),
    i = typeof e == 'string' ? { name: e } : e,
    a = Pe(),
    l = () => {
      var c, f;
      a.value =
        (f = (c = s.value) == null ? void 0 : c.state) != null ? f : 'prompt';
    };
  en(s, 'change', l, { passive: !0 });
  const u = rR(async () => {
    if (o.value) {
      if (!s.value)
        try {
          s.value = await r.permissions.query(i);
        } catch {
          s.value = void 0;
        } finally {
          l();
        }
      if (n) return Re(s.value);
    }
  });
  return u(), n ? { state: a, isSupported: o, query: u } : a;
}
function sD(e = {}) {
  const {
      navigator: t = Mm,
      read: n = !1,
      source: r,
      copiedDuring: o = 1500,
      legacy: s = !1,
    } = e,
    i = oa(() => t && 'clipboard' in t),
    a = _d('clipboard-read'),
    l = _d('clipboard-write'),
    u = S(() => i.value || s),
    c = Pe(''),
    f = Pe(!1),
    d = uR(() => (f.value = !1), o, { immediate: !1 });
  async function p() {
    let b = !(i.value && x(a.value));
    if (!b)
      try {
        c.value = await t.clipboard.readText();
      } catch {
        b = !0;
      }
    b && (c.value = _());
  }
  u.value && n && en(['copy', 'cut'], p, { passive: !0 });
  async function h(b = Ae(r)) {
    if (u.value && b != null) {
      let v = !(i.value && x(l.value));
      if (!v)
        try {
          await t.clipboard.writeText(b);
        } catch {
          v = !0;
        }
      v && g(b), (c.value = b), (f.value = !0), d.start();
    }
  }
  function g(b) {
    const v = document.createElement('textarea');
    (v.value = b ?? ''),
      (v.style.position = 'absolute'),
      (v.style.opacity = '0'),
      document.body.appendChild(v),
      v.select(),
      document.execCommand('copy'),
      v.remove();
  }
  function _() {
    var b, v, m;
    return (m =
      (v = (b = document?.getSelection) == null ? void 0 : b.call(document)) ==
      null
        ? void 0
        : v.toString()) != null
      ? m
      : '';
  }
  function x(b) {
    return b === 'granted' || b === 'prompt';
  }
  return { isSupported: u, text: c, copied: f, copy: h };
}
function gR(e) {
  return JSON.parse(JSON.stringify(e));
}
function mR(e, t, n = {}) {
  const { window: r = qr, ...o } = n;
  let s;
  const i = oa(() => r && 'ResizeObserver' in r),
    a = () => {
      s && (s.disconnect(), (s = void 0));
    },
    l = S(() => {
      const f = Ae(e);
      return Array.isArray(f) ? f.map((d) => io(d)) : [io(f)];
    }),
    u = we(
      l,
      (f) => {
        if ((a(), i.value && r)) {
          s = new ResizeObserver(t);
          for (const d of f) d && s.observe(d, o);
        }
      },
      { immediate: !0, flush: 'post' }
    ),
    c = () => {
      a(), u();
    };
  return go(c), { isSupported: i, stop: c };
}
const vR = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) =>
    e instanceof MouseEvent ? [e.movementX, e.movementY] : null,
};
function yR(e = {}) {
  const {
    type: t = 'page',
    touch: n = !0,
    resetOnTouchEnds: r = !1,
    initialValue: o = { x: 0, y: 0 },
    window: s = qr,
    target: i = s,
    scroll: a = !0,
    eventFilter: l,
  } = e;
  let u = null,
    c = 0,
    f = 0;
  const d = Pe(o.x),
    p = Pe(o.y),
    h = Pe(null),
    g = typeof t == 'function' ? t : vR[t],
    _ = (E) => {
      const A = g(E);
      (u = E),
        A && (([d.value, p.value] = A), (h.value = 'mouse')),
        s && ((c = s.scrollX), (f = s.scrollY));
    },
    x = (E) => {
      if (E.touches.length > 0) {
        const A = g(E.touches[0]);
        A && (([d.value, p.value] = A), (h.value = 'touch'));
      }
    },
    b = () => {
      if (!u || !s) return;
      const E = g(u);
      u instanceof MouseEvent &&
        E &&
        ((d.value = E[0] + s.scrollX - c), (p.value = E[1] + s.scrollY - f));
    },
    v = () => {
      (d.value = o.x), (p.value = o.y);
    },
    m = l ? (E) => l(() => _(E), {}) : (E) => _(E),
    w = l ? (E) => l(() => x(E), {}) : (E) => x(E),
    C = l ? () => l(() => b(), {}) : () => b();
  if (i) {
    const E = { passive: !0 };
    en(i, ['mousemove', 'dragover'], m, E),
      n &&
        t !== 'movement' &&
        (en(i, ['touchstart', 'touchmove'], w, E),
        r && en(i, 'touchend', v, E)),
      a && t === 'page' && en(s, 'scroll', C, E);
  }
  return { x: d, y: p, sourceType: h };
}
function iD(e, t = {}) {
  const {
      windowResize: n = !0,
      windowScroll: r = !0,
      handleOutside: o = !0,
      window: s = qr,
    } = t,
    i = t.type || 'page',
    { x: a, y: l, sourceType: u } = yR(t),
    c = Pe(e ?? s?.document.body),
    f = Pe(0),
    d = Pe(0),
    p = Pe(0),
    h = Pe(0),
    g = Pe(0),
    _ = Pe(0),
    x = Pe(!0);
  function b() {
    if (!s) return;
    const w = io(c);
    if (!w || !(w instanceof Element)) return;
    const { left: C, top: E, width: A, height: R } = w.getBoundingClientRect();
    (p.value = C + (i === 'page' ? s.pageXOffset : 0)),
      (h.value = E + (i === 'page' ? s.pageYOffset : 0)),
      (g.value = R),
      (_.value = A);
    const D = a.value - p.value,
      X = l.value - h.value;
    (x.value = A === 0 || R === 0 || D < 0 || X < 0 || D > A || X > R),
      (o || !x.value) && ((f.value = D), (d.value = X));
  }
  const v = [];
  function m() {
    v.forEach((w) => w()), (v.length = 0);
  }
  if (
    (cR(() => {
      b();
    }),
    s)
  ) {
    const { stop: w } = mR(c, b),
      { stop: C } = Nm(c, b, { attributeFilter: ['style', 'class'] }),
      E = we([c, a, l], b);
    v.push(w, C, E),
      en(document, 'mouseleave', () => (x.value = !0), { passive: !0 }),
      r && v.push(en('scroll', b, { capture: !0, passive: !0 })),
      n && v.push(en('resize', b, { passive: !0 }));
  }
  return {
    x: a,
    y: l,
    sourceType: u,
    elementX: f,
    elementY: d,
    elementPositionX: p,
    elementPositionY: h,
    elementHeight: g,
    elementWidth: _,
    isOutside: x,
    stop: m,
  };
}
function aD(e, t, n, r = {}) {
  var o, s, i;
  const {
      clone: a = !1,
      passive: l = !1,
      eventName: u,
      deep: c = !1,
      defaultValue: f,
      shouldEmit: d,
    } = r,
    p = Xe(),
    h =
      n ||
      p?.emit ||
      ((o = p?.$emit) == null ? void 0 : o.bind(p)) ||
      ((i = (s = p?.proxy) == null ? void 0 : s.$emit) == null
        ? void 0
        : i.bind(p?.proxy));
  let g = u;
  g = g || `update:${t.toString()}`;
  const _ = (v) => (a ? (typeof a == 'function' ? a(v) : gR(v)) : v),
    x = () => (XO(e[t]) ? _(e[t]) : f),
    b = (v) => {
      d ? d(v) && h(g, v) : h(g, v);
    };
  if (l) {
    const v = x(),
      m = j(v);
    let w = !1;
    return (
      we(
        () => e[t],
        (C) => {
          w || ((w = !0), (m.value = _(C)), Ze(() => (w = !1)));
        }
      ),
      we(
        m,
        (C) => {
          !w && (C !== e[t] || c) && b(C);
        },
        { deep: c }
      ),
      m
    );
  } else
    return S({
      get() {
        return x();
      },
      set(v) {
        b(v);
      },
    });
}
function bR(e, t) {
  const n = Nl(e),
    r = Nl(t);
  return $m(n, r);
}
function $m(e, t) {
  const n = [],
    r = new Set([...Object.keys(e.props || {}), ...Object.keys(t.props || {})]);
  if (e.props && t.props)
    for (const o of r) {
      const s = e.props[o],
        i = t.props[o];
      s && i
        ? n.push(...$m(e.props?.[o], t.props?.[o]))
        : (s || i) &&
          n.push(new wd((i || s).key, s ? 'removed' : 'added', i, s));
    }
  return (
    r.size === 0 &&
      e.hash !== t.hash &&
      n.push(new wd((t || e).key, 'changed', t, e)),
    n
  );
}
function Nl(e, t = '') {
  if (e && typeof e != 'object') return new xd(t, e, wl(e));
  const n = {},
    r = [];
  for (const o in e) (n[o] = Nl(e[o], t ? `${t}.${o}` : o)), r.push(n[o].hash);
  return new xd(t, e, `{${r.join(':')}}`, n);
}
class wd {
  constructor(t, n, r, o) {
    (this.key = t), (this.type = n), (this.newValue = r), (this.oldValue = o);
  }
  toString() {
    return this.toJSON();
  }
  toJSON() {
    switch (this.type) {
      case 'added':
        return `Added   \`${this.key}\``;
      case 'removed':
        return `Removed \`${this.key}\``;
      case 'changed':
        return `Changed \`${this.key}\` from \`${
          this.oldValue?.toString() || '-'
        }\` to \`${this.newValue.toString()}\``;
    }
  }
}
class xd {
  constructor(t, n, r, o) {
    (this.key = t), (this.value = n), (this.hash = r), (this.props = o);
  }
  toString() {
    return this.props
      ? `{${Object.keys(this.props).join(',')}}`
      : JSON.stringify(this.value);
  }
  toJSON() {
    const t = this.key || '.';
    return this.props
      ? `${t}({${Object.keys(this.props).join(',')}})`
      : `${t}(${this.value})`;
  }
}
function Bm(e, t) {
  const n = { ...e };
  for (const r of t) delete n[r];
  return n;
}
function pr(e, t, n) {
  typeof t == 'string' &&
    (t = t.split('.').map((o) => {
      const s = Number(o);
      return Number.isNaN(s) ? o : s;
    }));
  let r = e;
  for (const o of t) {
    if (r == null) return n;
    r = r[o];
  }
  return r !== void 0 ? r : n;
}
function lD(e) {
  const t = Number.parseFloat(e);
  return Number.isNaN(t) ? e : t;
}
function _R(e) {
  return Array.isArray(e[0]);
}
function xi(e, t) {
  return !e && !t ? '' : [...(Array.isArray(e) ? e : [e]), t].filter(Boolean);
}
function kd(e) {
  return e
    .map((t) => {
      if (!t.children || typeof t.children == 'string') return t.children || '';
      if (Array.isArray(t.children)) return kd(t.children);
      if (t.children.default) return kd(t.children.default());
    })
    .join('');
}
function cD(e, t) {
  return Object.entries(e).reduce(
    (n, [r, o]) => (
      (n[r] = typeof o == 'function' ? o({ class: t?.[r] }) : o), n
    ),
    t || {}
  );
}
function wR(e) {
  return (t, n) => xR(t, n, y(e));
}
function xR(e, t, n) {
  return pr(n, `messages.${e}`, e).replace(
    /\{(\w+)\}/g,
    (o, s) => `${t?.[s] ?? `{${s}}`}`
  );
}
function kR(e) {
  const t = S(() => y(e).name),
    n = S(() => y(e).code),
    r = S(() => y(e).dir),
    o = ze(e) ? e : j(e);
  return { lang: t, code: n, dir: r, locale: o, t: wR(e) };
}
function CR(e) {
  return Mt(e, { dir: 'ltr' });
}
const Cd = CR({
    name: 'English',
    code: 'en',
    messages: {
      alert: { close: 'Close' },
      authForm: {
        hidePassword: 'Hide password',
        showPassword: 'Show password',
        submit: 'Continue',
      },
      banner: { close: 'Close' },
      calendar: {
        nextMonth: 'Next month',
        nextYear: 'Next year',
        prevMonth: 'Previous month',
        prevYear: 'Previous year',
      },
      carousel: {
        dots: 'Choose slide to display',
        goto: 'Go to slide {slide}',
        next: 'Next',
        prev: 'Prev',
      },
      chatPrompt: { placeholder: 'Type your message here…' },
      chatPromptSubmit: { label: 'Send prompt' },
      colorMode: {
        dark: 'Dark',
        light: 'Light',
        switchToDark: 'Switch to dark mode',
        switchToLight: 'Switch to light mode',
        system: 'System',
      },
      commandPalette: {
        back: 'Back',
        close: 'Close',
        noData: 'No data',
        noMatch: 'No matching data',
        placeholder: 'Type a command or search…',
      },
      contentSearch: { links: 'Links', theme: 'Theme' },
      contentSearchButton: { label: 'Search…' },
      contentToc: { title: 'On this page' },
      dashboardSearch: { theme: 'Theme' },
      dashboardSearchButton: { label: 'Search…' },
      dashboardSidebarCollapse: {
        collapse: 'Collapse sidebar',
        expand: 'Expand sidebar',
      },
      dashboardSidebarToggle: { close: 'Close sidebar', open: 'Open sidebar' },
      error: { clear: 'Back to home' },
      fileUpload: { removeFile: 'Remove {filename}' },
      header: { close: 'Close menu', open: 'Open menu' },
      inputMenu: {
        create: 'Create "{label}"',
        noData: 'No data',
        noMatch: 'No matching data',
      },
      inputNumber: { decrement: 'Decrement', increment: 'Increment' },
      modal: { close: 'Close' },
      pricingTable: { caption: 'Pricing plan comparison' },
      prose: {
        codeCollapse: {
          closeText: 'Collapse',
          name: 'code',
          openText: 'Expand',
        },
        collapsible: {
          closeText: 'Hide',
          name: 'properties',
          openText: 'Show',
        },
        pre: { copy: 'Copy code to clipboard' },
      },
      selectMenu: {
        create: 'Create "{label}"',
        noData: 'No data',
        noMatch: 'No matching data',
        search: 'Search…',
      },
      slideover: { close: 'Close' },
      table: { noData: 'No data' },
      toast: { close: 'Close' },
    },
  }),
  Vm = Symbol.for('nuxt-ui.locale-context'),
  ER = (e) => {
    const t = e || ot($e(Vm, Cd));
    return kR(S(() => t.value || Cd));
  },
  Jc = Yc(ER),
  jm = Symbol('nuxt-ui.portal-target');
function Qc(e) {
  const t = $e(jm, void 0),
    n = S(() => (e.value === !0 ? t?.value : e.value)),
    r = S(() => (typeof n.value == 'boolean' ? !n.value : !1)),
    o = S(() => (typeof n.value == 'boolean' ? 'body' : n.value));
  return S(() => ({ to: o.value, disabled: r.value }));
}
const Fm = Symbol('nuxt-ui.toast-max');
function PR() {
  const e = wc('toasts', () => []),
    t = $e(Fm, void 0),
    n = j(!1),
    r = [],
    o = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  async function s() {
    if (!(n.value || r.length === 0)) {
      for (n.value = !0; r.length > 0; ) {
        const c = r.shift();
        await Ze(), (e.value = [...e.value, c].slice(-(t?.value ?? 5)));
      }
      n.value = !1;
    }
  }
  function i(c) {
    const f = { id: o(), open: !0, ...c };
    return r.push(f), s(), f;
  }
  function a(c, f) {
    const d = e.value.findIndex((p) => p.id === c);
    d !== -1 && (e.value[d] = { ...e.value[d], ...f });
  }
  function l(c) {
    const f = e.value.findIndex((d) => d.id === c);
    f !== -1 && (e.value[f] = { ...e.value[f], open: !1 }),
      setTimeout(() => {
        e.value = e.value.filter((d) => d.id !== c);
      }, 200);
  }
  function u() {
    e.value = [];
  }
  return { toasts: e, add: i, update: a, remove: l, clear: u };
}
const TR = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  zm = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  Zc = Object.freeze({ ...TR, ...zm });
Object.freeze({ ...Zc, body: '', hidden: !1 });
function SR(e) {
  const [t, n, r, o] = e;
  if (r !== o) {
    const s = Math.max(r, o);
    return [t - (s - r) / 2, n - (s - o) / 2, s, s];
  }
  return e;
}
const AR = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  OR = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function $l(e, t, n) {
  if (t === 1) return e;
  if (((n = n || 100), typeof e == 'number')) return Math.ceil(e * t * n) / n;
  if (typeof e != 'string') return e;
  const r = e.split(AR);
  if (r === null || !r.length) return e;
  const o = [];
  let s = r.shift(),
    i = OR.test(s);
  for (;;) {
    if (i) {
      const a = parseFloat(s);
      isNaN(a) ? o.push(s) : o.push(Math.ceil(a * t * n) / n);
    } else o.push(s);
    if (((s = r.shift()), s === void 0)) return o.join('');
    i = !i;
  }
}
const RR = Object.freeze({ width: null, height: null }),
  IR = Object.freeze({ ...RR, ...zm });
function LR(e, t = 'defs') {
  let n = '';
  const r = e.indexOf('<' + t);
  for (; r >= 0; ) {
    const o = e.indexOf('>', r),
      s = e.indexOf('</' + t);
    if (o === -1 || s === -1) break;
    const i = e.indexOf('>', s);
    if (i === -1) break;
    (n += e.slice(o + 1, s).trim()),
      (e = e.slice(0, r).trim() + e.slice(i + 1));
  }
  return { defs: n, content: e };
}
function DR(e, t) {
  return e ? '<defs>' + e + '</defs>' + t : t;
}
function qR(e, t, n) {
  const r = LR(e);
  return DR(r.defs, t + r.content + n);
}
const MR = (e) => e === 'unset' || e === 'undefined' || e === 'none';
function NR(e, t) {
  const n = { ...Zc, ...e },
    r = { ...IR, ...t },
    o = { left: n.left, top: n.top, width: n.width, height: n.height };
  let s = n.body;
  [n, r].forEach((g) => {
    const _ = [],
      x = g.hFlip,
      b = g.vFlip;
    let v = g.rotate;
    x
      ? b
        ? (v += 2)
        : (_.push(
            'translate(' +
              (o.width + o.left).toString() +
              ' ' +
              (0 - o.top).toString() +
              ')'
          ),
          _.push('scale(-1 1)'),
          (o.top = o.left = 0))
      : b &&
        (_.push(
          'translate(' +
            (0 - o.left).toString() +
            ' ' +
            (o.height + o.top).toString() +
            ')'
        ),
        _.push('scale(1 -1)'),
        (o.top = o.left = 0));
    let m;
    switch ((v < 0 && (v -= Math.floor(v / 4) * 4), (v = v % 4), v)) {
      case 1:
        (m = o.height / 2 + o.top),
          _.unshift('rotate(90 ' + m.toString() + ' ' + m.toString() + ')');
        break;
      case 2:
        _.unshift(
          'rotate(180 ' +
            (o.width / 2 + o.left).toString() +
            ' ' +
            (o.height / 2 + o.top).toString() +
            ')'
        );
        break;
      case 3:
        (m = o.width / 2 + o.left),
          _.unshift('rotate(-90 ' + m.toString() + ' ' + m.toString() + ')');
        break;
    }
    v % 2 === 1 &&
      (o.left !== o.top && ((m = o.left), (o.left = o.top), (o.top = m)),
      o.width !== o.height &&
        ((m = o.width), (o.width = o.height), (o.height = m))),
      _.length && (s = qR(s, '<g transform="' + _.join(' ') + '">', '</g>'));
  });
  const i = r.width,
    a = r.height,
    l = o.width,
    u = o.height;
  let c, f;
  i === null
    ? ((f = a === null ? '1em' : a === 'auto' ? u : a), (c = $l(f, l / u)))
    : ((c = i === 'auto' ? l : i),
      (f = a === null ? $l(c, u / l) : a === 'auto' ? u : a));
  const d = {},
    p = (g, _) => {
      MR(_) || (d[g] = _.toString());
    };
  p('width', c), p('height', f);
  const h = [o.left, o.top, l, u];
  return (d.viewBox = h.join(' ')), { attributes: d, viewBox: h, body: s };
}
function $R(e) {
  return e
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/\s+/g, ' ');
}
function BR(e) {
  return 'data:image/svg+xml,' + $R(e);
}
function VR(e) {
  return 'url("' + BR(e) + '")';
}
function jR(e, t) {
  let n =
    e.indexOf('xlink:') === -1
      ? ''
      : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t) n += ' ' + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + '>' + e + '</svg>';
}
function FR(e) {
  const t = { display: 'inline-block', width: '1em', height: '1em' },
    n = e.varName;
  switch ((e.pseudoSelector && (t.content = "''"), e.mode)) {
    case 'background':
      n && (t['background-image'] = 'var(--' + n + ')'),
        (t['background-repeat'] = 'no-repeat'),
        (t['background-size'] = '100% 100%');
      break;
    case 'mask':
      (t['background-color'] = 'currentColor'),
        n && (t['mask-image'] = t['-webkit-mask-image'] = 'var(--' + n + ')'),
        (t['mask-repeat'] = t['-webkit-mask-repeat'] = 'no-repeat'),
        (t['mask-size'] = t['-webkit-mask-size'] = '100% 100%');
      break;
  }
  return t;
}
function zR(e, t) {
  const n = {},
    r = t.varName,
    o = NR(e);
  let s = o.viewBox;
  s[2] !== s[3] &&
    (t.forceSquare ? (s = SR(s)) : (n.width = $l('1em', s[2] / s[3])));
  const i = jR(o.body.replace(/currentColor/g, t.color || 'black'), {
      viewBox: `${s[0]} ${s[1]} ${s[2]} ${s[3]}`,
      width: `${s[2]}`,
      height: `${s[3]}`,
    }),
    a = VR(i);
  if (r) n['--' + r] = a;
  else
    switch (t.mode) {
      case 'background':
        n['background-image'] = a;
        break;
      case 'mask':
        n['mask-image'] = n['-webkit-mask-image'] = a;
        break;
    }
  return n;
}
const $a = {
  selectorStart: { compressed: '{', compact: ' {', expanded: ' {' },
  selectorEnd: {
    compressed: '}',
    compact: `; }
`,
    expanded: `;
}
`,
  },
  rule: {
    compressed: '{key}:',
    compact: ' {key}: ',
    expanded: `
  {key}: `,
  },
};
function HR(e, t = 'expanded') {
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const { selector: o, rules: s } = e[r];
    let a =
        (o instanceof Array ? o.join(t === 'compressed' ? ',' : ', ') : o) +
        $a.selectorStart[t],
      l = !0;
    for (const u in s)
      l || (a += ';'), (a += $a.rule[t].replace('{key}', u) + s[u]), (l = !1);
    (a += $a.selectorEnd[t]), n.push(a);
  }
  return n.join(
    t === 'compressed'
      ? ''
      : `
`
  );
}
function UR(e, t = {}) {
  const n = t.customise ? t.customise(e.body) : e.body,
    r =
      t.mode ||
      (t.color || !n.includes('currentColor') ? 'background' : 'mask');
  let o = t.varName;
  o === void 0 && r === 'mask' && (o = 'svg');
  const s = { ...t, mode: r, varName: o };
  r === 'background' && delete s.varName;
  const i = { ...t.rules, ...FR(s), ...zR({ ...Zc, ...e, body: n }, s) },
    a = t.iconSelector || '.icon';
  return HR([{ selector: a, rules: i }], s.format);
}
async function WR(e, t) {
  if (!e) return null;
  const n = vl(e);
  return (
    n ||
    (await P1(e).catch(
      () => (console.warn(`[Icon] failed to load icon \`${e}\``), null)
    ),
    vl(e))
  );
}
function Hm(e) {
  const t = Je().icon,
    n = (t.collections || []).sort((r, o) => o.length - r.length);
  return S(() => {
    const r = e(),
      o = r.startsWith(t.cssSelectorPrefix)
        ? r.slice(t.cssSelectorPrefix.length)
        : r,
      s = t.aliases?.[o] || o;
    if (!s.includes(':')) {
      const i = n.find((a) => s.startsWith(a + '-'));
      return i ? i + ':' + s.slice(i.length + 1) : s;
    }
    return s;
  });
}
function Um(e, t) {
  if (e !== !1) return e === !0 || e === null ? t : e;
}
let Co;
function KR(e) {
  return e.replace(/([^\w-])/g, '\\$1');
}
function GR() {
  if (Co) return Co;
  Co = new Set();
  const e = (n) => {
      if (((n = n.replace(/^:where\((.*)\)$/, '$1').trim()), n.startsWith('.')))
        return n;
    },
    t = (n) => {
      if (n?.length)
        for (const r of n) {
          r?.cssRules && t(r.cssRules);
          const o = r?.selectorText;
          if (typeof o == 'string') {
            const s = e(o);
            s && Co.add(s);
          }
        }
    };
  if (typeof document < 'u')
    for (const n of document.styleSheets)
      try {
        const r = n.cssRules || n.rules;
        t(r);
      } catch {}
  return Co;
}
const YR = J({
    name: 'NuxtIconCss',
    props: {
      name: { type: String, required: !0 },
      customize: {
        type: [Function, Boolean, null],
        default: null,
        required: !1,
      },
    },
    setup(e) {
      const t = Le(),
        n = Je().icon,
        r = S(() => (e.name ? n.cssSelectorPrefix + e.name : ''));
      function o(a) {
        if (!a) return;
        const l = vl(a);
        if (l) return l;
        const u = t.payload?.data?.[a];
        if (u) return kc(a, u), u;
      }
      const s = S(() => '.' + KR(r.value));
      function i(a, l = !0) {
        let u = s.value;
        n.cssWherePseudo && (u = `:where(${u})`);
        const c = UR(a, {
          iconSelector: u,
          format: 'compressed',
          customise: Um(e.customize, n.customize),
        });
        return n.cssLayer && l ? `@layer ${n.cssLayer} { ${c} }` : c;
      }
      {
        const a = GR();
        async function l(u) {
          if (a.has(s.value) || typeof document > 'u') return;
          const c = document.createElement('style');
          c.textContent = i(u);
          const f = document.head.querySelector(
            'style, link[rel="stylesheet"]'
          );
          f ? document.head.insertBefore(c, f) : document.head.appendChild(c),
            a.add(s.value);
        }
        we(
          () => e.name,
          () => {
            if (a.has(s.value)) return;
            const u = o(e.name);
            u
              ? l(u)
              : WR(e.name)
                  .then((c) => {
                    c && l(c);
                  })
                  .catch(() => null);
          },
          { immediate: !0 }
        );
      }
      return () => Be('span', { class: ['iconify', r.value] });
    },
  }),
  XR = { trailing: !0 };
function JR(e, t = 25, n = {}) {
  if (((n = { ...XR, ...n }), !Number.isFinite(t)))
    throw new TypeError('Expected `wait` to be a finite number');
  let r,
    o,
    s = [],
    i,
    a;
  const l = (f, d) => (
      (i = QR(e, f, d)),
      i.finally(() => {
        if (((i = null), n.trailing && a && !o)) {
          const p = l(f, a);
          return (a = null), p;
        }
      }),
      i
    ),
    u = function (...f) {
      return (
        n.trailing && (a = f),
        i ||
          new Promise((d) => {
            const p = !o && n.leading;
            clearTimeout(o),
              (o = setTimeout(() => {
                o = null;
                const h = n.leading ? r : l(this, f);
                a = null;
                for (const g of s) g(h);
                s = [];
              }, t)),
              p ? ((r = l(this, f)), d(r)) : s.push(d);
          })
      );
    },
    c = (f) => {
      f && (clearTimeout(f), (o = null));
    };
  return (
    (u.isPending = () => !!o),
    (u.cancel = () => {
      c(o), (s = []), (a = null);
    }),
    (u.flush = () => {
      if ((c(o), !a || i)) return;
      const f = a;
      return (a = null), l(this, f);
    }),
    u
  );
}
async function QR(e, t, n) {
  return await e.apply(t, n);
}
function eu(...e) {
  const t = typeof e[e.length - 1] == 'string' ? e.pop() : void 0;
  Km(e[0], e[1]) && e.unshift(t);
  let [n, r, o = {}] = e,
    s = !1;
  const i = S(() => Ae(n));
  if (typeof i.value != 'string')
    throw new TypeError('[nuxt] [useAsyncData] key must be a string.');
  if (typeof r != 'function')
    throw new TypeError('[nuxt] [useAsyncData] handler must be a function.');
  const a = Le();
  (o.server ??= !0),
    (o.default ??= eI),
    (o.getCachedData ??= Ym),
    (o.lazy ??= !1),
    (o.immediate ??= !0),
    (o.deep ??= e_.deep),
    (o.dedupe ??= 'cancel'),
    o._functionName,
    a._asyncData[i.value];
  function l() {
    const h = { cause: 'initial', dedupe: o.dedupe };
    return (
      a._asyncData[i.value]?._init ||
        ((h.cachedData = o.getCachedData(i.value, a, { cause: 'initial' })),
        (a._asyncData[i.value] = Ed(a, i.value, r, o, h.cachedData))),
      () => a._asyncData[i.value].execute(h)
    );
  }
  const u = l(),
    c = a._asyncData[i.value];
  c._deps++;
  const f = o.server !== !1 && a.payload.serverRendered;
  {
    let h = function (m) {
      const w = a._asyncData[m];
      w?._deps && (w._deps--, w._deps === 0 && w?._off());
    };
    const g = Xe();
    if (
      (g && f && o.immediate && !g.sp && (g.sp = []),
      g && !g._nuxtOnBeforeMountCbs)
    ) {
      g._nuxtOnBeforeMountCbs = [];
      const m = g._nuxtOnBeforeMountCbs;
      tc(() => {
        m.forEach((w) => {
          w();
        }),
          m.splice(0, m.length);
      }),
        wn(() => m.splice(0, m.length));
    }
    const _ = g && (g._nuxtClientOnly || $e(Lm, !1));
    f && a.isHydrating && (c.error.value || c.data.value !== void 0)
      ? (c.status.value = c.error.value ? 'error' : 'success')
      : g &&
        ((!_ && a.payload.serverRendered && a.isHydrating) || o.lazy) &&
        o.immediate
      ? g._nuxtOnBeforeMountCbs.push(u)
      : o.immediate && c.status.value !== 'success' && u();
    const x = lo(),
      b = we(
        i,
        (m, w) => {
          if ((m || w) && m !== w) {
            s = !0;
            const C = a._asyncData[w]?.data.value !== void 0,
              E = a._asyncDataPromises[w] !== void 0,
              A = { cause: 'initial', dedupe: o.dedupe };
            if (!a._asyncData[m]?._init) {
              let R;
              w && C
                ? (R = a._asyncData[w].data.value)
                : ((R = o.getCachedData(m, a, { cause: 'initial' })),
                  (A.cachedData = R)),
                (a._asyncData[m] = Ed(a, m, r, o, R));
            }
            a._asyncData[m]._deps++,
              w && h(w),
              (o.immediate || C || E) && a._asyncData[m].execute(A),
              Ys(() => {
                s = !1;
              });
          }
        },
        { flush: 'sync' }
      ),
      v = o.watch
        ? we(o.watch, () => {
            s || c._execute({ cause: 'watch', dedupe: o.dedupe });
          })
        : () => {};
    x &&
      Ai(() => {
        b(), v(), h(i.value);
      });
  }
  const d = {
      data: Ss(() => a._asyncData[i.value]?.data),
      pending: Ss(() => a._asyncData[i.value]?.pending),
      status: Ss(() => a._asyncData[i.value]?.status),
      error: Ss(() => a._asyncData[i.value]?.error),
      refresh: (...h) =>
        a._asyncData[i.value]?._init
          ? a._asyncData[i.value].execute(...h)
          : l()(),
      execute: (...h) => d.refresh(...h),
      clear: () => {
        const h = a._asyncData[i.value];
        if (h?._abortController)
          try {
            h._abortController.abort(
              new DOMException('AsyncData aborted by user.', 'AbortError')
            );
          } finally {
            h._abortController = void 0;
          }
        Gm(a, i.value);
      },
    },
    p = Promise.resolve(a._asyncDataPromises[i.value]).then(() => d);
  return Object.assign(p, d), p;
}
function Ss(e) {
  return S({
    get() {
      return e()?.value;
    },
    set(t) {
      const n = e();
      n && (n.value = t);
    },
  });
}
function Wm(...e) {
  const t = typeof e[e.length - 1] == 'string' ? e.pop() : void 0;
  Km(e[0], e[1]) && e.unshift(t);
  const [n, r, o = {}] = e;
  return eu(n, r, { ...o, lazy: !0 }, null);
}
function Km(e, t) {
  return !(
    typeof e == 'string' ||
    (typeof e == 'object' && e !== null) ||
    (typeof e == 'function' && typeof t == 'function')
  );
}
function Gm(e, t) {
  t in e.payload.data && (e.payload.data[t] = void 0),
    t in e.payload._errors && (e.payload._errors[t] = void 0),
    e._asyncData[t] &&
      ((e._asyncData[t].data.value = y(e._asyncData[t]._default())),
      (e._asyncData[t].error.value = void 0),
      (e._asyncData[t].status.value = 'idle')),
    t in e._asyncDataPromises && (e._asyncDataPromises[t] = void 0);
}
function ZR(e, t) {
  const n = {};
  for (const r of t) n[r] = e[r];
  return n;
}
function Ed(e, t, n, r, o) {
  e.payload._errors[t] ??= void 0;
  const s = r.getCachedData !== Ym,
    i = n,
    a = r.deep ? j : Pe,
    l = o !== void 0,
    u = e.hook('app:data:refresh', async (f) => {
      (!f || f.includes(t)) && (await c.execute({ cause: 'refresh:hook' }));
    }),
    c = {
      data: a(l ? o : r.default()),
      pending: S(() => c.status.value === 'pending'),
      error: ot(e.payload._errors, t),
      status: Pe('idle'),
      execute: (...f) => {
        const [d, p = void 0] = f,
          h = d && p === void 0 && typeof d == 'object' ? d : {};
        if (e._asyncDataPromises[t] && (h.dedupe ?? r.dedupe) === 'defer')
          return e._asyncDataPromises[t];
        {
          const x =
            'cachedData' in h
              ? h.cachedData
              : r.getCachedData(t, e, { cause: h.cause ?? 'refresh:manual' });
          if (x !== void 0)
            return (
              (e.payload.data[t] = c.data.value = x),
              (c.error.value = void 0),
              (c.status.value = 'success'),
              Promise.resolve(x)
            );
        }
        c._abortController &&
          c._abortController.abort(
            new DOMException(
              'AsyncData request cancelled by deduplication',
              'AbortError'
            )
          ),
          (c._abortController = new AbortController()),
          (c.status.value = 'pending');
        const g = new AbortController(),
          _ = new Promise((x, b) => {
            try {
              const v = h.timeout ?? r.timeout,
                m = tI([c._abortController?.signal, h?.signal], g.signal, v);
              if (m.aborted) {
                const w = m.reason;
                b(
                  w instanceof Error
                    ? w
                    : new DOMException(String(w ?? 'Aborted'), 'AbortError')
                );
                return;
              }
              return (
                m.addEventListener(
                  'abort',
                  () => {
                    const w = m.reason;
                    b(
                      w instanceof Error
                        ? w
                        : new DOMException(String(w ?? 'Aborted'), 'AbortError')
                    );
                  },
                  { once: !0, signal: g.signal }
                ),
                Promise.resolve(i(e, { signal: m })).then(x, b)
              );
            } catch (v) {
              b(v);
            }
          })
            .then(async (x) => {
              let b = x;
              r.transform && (b = await r.transform(x)),
                r.pick && (b = ZR(b, r.pick)),
                (e.payload.data[t] = b),
                (c.data.value = b),
                (c.error.value = void 0),
                (c.status.value = 'success');
            })
            .catch((x) => {
              if (
                !(e._asyncDataPromises[t] && e._asyncDataPromises[t] !== _) &&
                !c._abortController?.signal.aborted
              ) {
                if (
                  typeof DOMException < 'u' &&
                  x instanceof DOMException &&
                  x.name === 'AbortError'
                ) {
                  c.status.value = 'idle';
                  return;
                }
                (c.error.value = er(x)),
                  (c.data.value = y(r.default())),
                  (c.status.value = 'error');
              }
            })
            .finally(() => {
              g.abort(), delete e._asyncDataPromises[t];
            });
        return (e._asyncDataPromises[t] = _), e._asyncDataPromises[t];
      },
      _execute: JR((...f) => c.execute(...f), 0, { leading: !0 }),
      _default: r.default,
      _deps: 0,
      _init: !0,
      _hash: void 0,
      _off: () => {
        u(),
          e._asyncData[t]?._init && (e._asyncData[t]._init = !1),
          s ||
            Ze(() => {
              e._asyncData[t]?._init ||
                (Gm(e, t), (c.execute = () => Promise.resolve()));
            });
      },
    };
  return c;
}
const eI = () => {},
  Ym = (e, t, n) => {
    if (t.isHydrating) return t.payload.data[e];
    if (n.cause !== 'refresh:manual' && n.cause !== 'refresh:hook')
      return t.static.data[e];
  };
function tI(e, t, n) {
  const r = e.filter((i) => !!i);
  if (typeof n == 'number' && n >= 0) {
    const i = AbortSignal.timeout?.(n);
    i && r.push(i);
  }
  if (AbortSignal.any) return AbortSignal.any(r);
  const o = new AbortController();
  for (const i of r)
    if (i.aborted) {
      const a = i.reason ?? new DOMException('Aborted', 'AbortError');
      try {
        o.abort(a);
      } catch {
        o.abort();
      }
      return o.signal;
    }
  const s = () => {
    const a =
      r.find((l) => l.aborted)?.reason ??
      new DOMException('Aborted', 'AbortError');
    try {
      o.abort(a);
    } catch {
      o.abort();
    }
  };
  for (const i of r) i.addEventListener?.('abort', s, { once: !0, signal: t });
  return o.signal;
}
const nI = J({
    name: 'NuxtIconSvg',
    props: {
      name: { type: String, required: !0 },
      customize: {
        type: [Function, Boolean, null],
        default: null,
        required: !1,
      },
    },
    setup(e, { slots: t }) {
      const n = Le(),
        r = Je().icon,
        o = Hm(() => e.name),
        s = 'i-' + o.value;
      if (o.value) {
        const i = n.payload.data[s];
        i && kc(o.value, i);
      }
      return () =>
        Be(
          B1,
          { icon: o.value, ssr: !0, customise: Um(e.customize, r.customize) },
          t
        );
    },
  }),
  Xm = J({
    name: 'NuxtIcon',
    props: {
      name: { type: String, required: !0 },
      mode: { type: String, required: !1, default: null },
      size: { type: [Number, String], required: !1, default: null },
      customize: {
        type: [Function, Boolean, null],
        default: null,
        required: !1,
      },
    },
    setup(e, { slots: t }) {
      const n = Le(),
        r = Je().icon,
        o = Hm(() => e.name),
        s = S(
          () =>
            n.vueApp?.component(o.value) ||
            ((e.mode || r.mode) === 'svg' ? nI : YR)
        ),
        i = S(() => {
          const a = e.size || r.size;
          return a ? { fontSize: Number.isNaN(+a) ? a : a + 'px' } : null;
        });
      return () =>
        Be(
          s.value,
          {
            ...r.attrs,
            name: o.value,
            class: r.class,
            style: i.value,
            customize: e.customize,
          },
          t
        );
    },
  }),
  rI = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Xm },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  qt = {
    __name: 'UIcon',
    props: {
      name: { type: [String, Object], required: !0 },
      mode: { type: String, required: !1 },
      size: { type: [String, Number], required: !1 },
      customize: { type: Function, required: !1 },
    },
    setup(e) {
      const n = Fn(_n(e, 'name', 'mode', 'size', 'customize'));
      return (r, o) => {
        const s = Xm;
        return typeof e.name == 'string'
          ? (T(), L(s, tt(te({ key: 0 }, y(n))), null, 16))
          : (T(), L(Tt(e.name), { key: 1 }));
      };
    },
  };
async function oI(e, t) {
  return await sI(t).catch(
    (r) => (
      console.error('Failed to get image meta for ' + t, r + ''),
      { width: 0, height: 0, ratio: 0 }
    )
  );
}
async function sI(e) {
  if (typeof Image > 'u') throw new TypeError('Image not supported');
  return new Promise((t, n) => {
    const r = new Image();
    (r.onload = () => {
      const o = { width: r.width, height: r.height, ratio: r.width / r.height };
      t(o);
    }),
      (r.onerror = (o) => n(o)),
      (r.src = e);
  });
}
function Pd(e) {
  return (t) => (t !== void 0 ? e[t] || t : e.missingValue);
}
function iI(e = {}) {
  const t = e.formatter,
    n = e.keyMap && typeof e.keyMap != 'function' ? Pd(e.keyMap) : e.keyMap,
    r = {};
  for (const o in e.valueMap) {
    const s = o,
      i = e.valueMap[s];
    r[s] = typeof i == 'object' ? Pd(i) : i;
  }
  return (o) => {
    const s = [];
    for (const i in o) {
      const a = i;
      if (typeof o[a] > 'u') continue;
      const l = typeof r[a] == 'function' ? r[a](o[a]) : o[a];
      s.push([n ? n(a) : a, l]);
    }
    return t
      ? s.map((i) => t(...i)).join(e.joinWith ?? '&')
      : new URLSearchParams(s).toString();
  };
}
function aI(e = '') {
  if (e === void 0 || !e.length) return [];
  const t = new Set();
  for (const n of e.split(' ')) {
    const r = Number.parseInt(n.replace('x', ''));
    r && t.add(r);
  }
  return Array.from(t);
}
function lI(e) {
  if (e.length === 0)
    throw new Error(
      '`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)'
    );
}
function ao(e = '') {
  if (typeof e == 'number') return e;
  if (typeof e == 'string' && e.replace('px', '').match(/^\d+$/g))
    return Number.parseInt(e, 10);
}
function cI(e) {
  const t = {};
  if (typeof e == 'string')
    for (const n of e.split(/[\s,]+/).filter((r) => r)) {
      const r = n.split(':');
      r.length !== 2
        ? (t['1px'] = r[0].trim())
        : (t[r[0].trim()] = r[1].trim());
    }
  else Object.assign(t, e);
  return t;
}
function uI(e) {
  const t = { options: e },
    n = (o, s = {}) => Jm(t, o, s),
    r = (o, s, i) => n(o, Mt({ modifiers: s }, i)).url;
  for (const o in e.presets)
    r[o] = (s, i, a) => r(s, i, { ...e.presets[o], ...a });
  return (
    (r.options = e),
    (r.getImage = n),
    (r.getMeta = (o, s) => fI(t, o, s)),
    (r.getSizes = (o, s) => pI(t, o, s)),
    (t.$img = r),
    r
  );
}
async function fI(e, t, n) {
  const r = Jm(e, t, { ...n });
  return typeof r.getMeta == 'function'
    ? await r.getMeta()
    : await oI(e, r.url);
}
function Jm(e, t, n) {
  if (t && typeof t != 'string')
    throw new TypeError(
      `input must be a string (received ${typeof t}: ${JSON.stringify(t)})`
    );
  if (!t || t.startsWith('data:')) return { url: t };
  const { setup: r, defaults: o } = dI(e, n.provider || e.options.provider),
    s = r(),
    i = Qm(e, n.preset);
  if (((t = sn(t) ? t : y0(t)), !s.supportsAlias)) {
    for (const c in e.options.alias)
      if (t.startsWith(c)) {
        const f = e.options.alias[c];
        f && (t = kr(f, t.slice(c.length)));
      }
  }
  if (s.validateDomains && sn(t)) {
    const c = cc(t).host;
    if (!e.options.domains.find((f) => f === c)) return { url: t };
  }
  const a = Mt(n, i, o),
    l = {
      ...a,
      modifiers: {
        ...a.modifiers,
        width: a.modifiers?.width ? ao(a.modifiers.width) : void 0,
        height: a.modifiers?.height ? ao(a.modifiers.height) : void 0,
      },
    },
    u = s.getImage(t, l, e);
  return (u.format ||= l.modifiers.format || ''), u;
}
function dI(e, t) {
  const n = e.options.providers[t];
  if (!n) throw new Error('Unknown provider: ' + t);
  return n;
}
function Qm(e, t) {
  if (!t) return {};
  if (!e.options.presets[t]) throw new Error('Unknown preset: ' + t);
  return e.options.presets[t];
}
function pI(e, t, n) {
  const r = Qm(e, n.preset),
    o = Mt(n, r),
    s = ao(o.modifiers?.width),
    i = ao(o.modifiers?.height),
    a = o.sizes ? cI(o.sizes) : {},
    l = o.densities?.trim(),
    u = l ? aI(l) : e.options.densities;
  lI(u);
  const c = s && i ? i / s : 0,
    f = [],
    d = [];
  if (Object.keys(a).length >= 1) {
    for (const x in a) {
      const b = Td(x, String(a[x]), i, c, e);
      if (b !== void 0) {
        f.push({
          size: b.size,
          screenMaxWidth: b.screenMaxWidth,
          media: `(max-width: ${b.screenMaxWidth}px)`,
        });
        for (const v of u)
          d.push({ width: b._cWidth * v, src: Sd(e, t, n, b, v) });
      }
    }
    hI(f);
  } else
    for (const x of u) {
      const b = Object.keys(a)[0];
      let v = b ? Td(b, String(a[b]), i, c, e) : void 0;
      v === void 0 &&
        (v = {
          size: '',
          screenMaxWidth: 0,
          _cWidth: n.modifiers?.width,
          _cHeight: n.modifiers?.height,
        }),
        d.push({ width: x, src: Sd(e, t, n, v, x) });
    }
  gI(d);
  const p = d[d.length - 1],
    h = f.length
      ? f.map((x) => `${x.media ? x.media + ' ' : ''}${x.size}`).join(', ')
      : void 0,
    g = h ? 'w' : 'x',
    _ = d.map((x) => `${x.src} ${x.width}${g}`).join(', ');
  return { sizes: h, srcset: _, src: p?.src };
}
function Td(e, t, n, r, o) {
  const s = (o.options.screens && o.options.screens[e]) || Number.parseInt(e),
    i = t.endsWith('vw');
  if ((!i && /^\d+$/.test(t) && (t = t + 'px'), !i && !t.endsWith('px')))
    return;
  let a = Number.parseInt(t);
  if (!s || !a) return;
  i && (a = Math.round((a / 100) * s));
  const l = r ? Math.round(a * r) : n;
  return { size: t, screenMaxWidth: s, _cWidth: a, _cHeight: l };
}
function Sd(e, t, n, r, o) {
  return e.$img(
    t,
    {
      ...n.modifiers,
      width: r._cWidth ? r._cWidth * o : void 0,
      height: r._cHeight ? r._cHeight * o : void 0,
    },
    n
  );
}
function hI(e) {
  e.sort((n, r) => n.screenMaxWidth - r.screenMaxWidth);
  let t = null;
  for (let n = e.length - 1; n >= 0; n--) {
    const r = e[n];
    r.media === t && e.splice(n, 1), (t = r.media);
  }
  for (let n = 0; n < e.length; n++) e[n].media = e[n + 1]?.media || '';
}
function gI(e) {
  e.sort((n, r) => n.width - r.width);
  let t = null;
  for (let n = e.length - 1; n >= 0; n--) {
    const r = e[n];
    r.width === t && e.splice(n, 1), (t = r.width);
  }
}
function mI(e) {
  let t;
  return () => t || ((t = typeof e == 'function' ? e() : e), t);
}
const vI = iI({
    keyMap: {
      format: 'f',
      width: 'w',
      height: 'h',
      resize: 's',
      quality: 'q',
      background: 'b',
      position: 'pos',
    },
    formatter: (e, t) => Fu(e) + '_' + Fu(t.toString()),
  }),
  yI = mI({
    validateDomains: !0,
    supportsAlias: !0,
    getImage(e, { modifiers: t, baseURL: n }, r) {
      t.width &&
        t.height &&
        ((t.resize = `${t.width}x${t.height}`),
        delete t.width,
        delete t.height);
      const o = vI(t) || '_';
      return (
        n || (n = kr(r.options.nuxt.baseURL, '/_ipx')),
        { url: kr(n, o, wh(e).replace(/\/{2,}/g, '/')) }
      );
    },
  }),
  bI = {
    screens: { sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 },
    presets: {},
    provider: 'ipxStatic',
    domains: [],
    alias: {},
    densities: [1, 2],
    format: ['webp'],
    provider: 'ipxStatic',
    providers: { ipxStatic: { setup: yI, defaults: {} } },
  },
  Zm = (e) => {
    const t = Ar(),
      n = Le();
    return (
      n.$img ||
      n._img ||
      (n._img = uI({
        ...bI,
        event: n.ssrContext?.event,
        nuxt: { baseURL: t.app.baseURL },
        runtimeConfig: t,
      }))
    );
  };
function _I(e) {
  performance?.mark?.('mark_feature_usage', { detail: { feature: e } });
}
const wI = (e) => {
    const t = Zm(),
      n = S(() => ({ provider: e.provider, preset: e.preset })),
      r = S(() => ({
        width: ao(e.width),
        height: ao(e.height),
        crossorigin:
          e.crossorigin === !0 ? 'anonymous' : e.crossorigin || void 0,
        nonce: e.nonce,
      })),
      o = S(() => ({
        ...e.modifiers,
        width: e.width,
        height: e.height,
        format: e.format,
        quality: e.quality || t.options.quality,
        background: e.background,
        fit: e.fit,
      }));
    return { providerOptions: n, normalizedAttrs: r, imageModifiers: o };
  },
  xI = ['src'],
  kI = {
    __name: 'NuxtImg',
    props: {
      custom: { type: Boolean, required: !1 },
      placeholder: { type: [Boolean, String, Number, Array], required: !1 },
      placeholderClass: { type: String, required: !1 },
      src: { type: String, required: !1 },
      format: { type: String, required: !1 },
      quality: { type: [String, Number], required: !1 },
      background: { type: String, required: !1 },
      fit: { type: String, required: !1 },
      modifiers: { type: Object, required: !1 },
      preset: { type: String, required: !1 },
      provider: { type: null, required: !1 },
      sizes: { type: [String, Object], required: !1 },
      densities: { type: String, required: !1 },
      preload: { type: [Boolean, Object], required: !1 },
      width: { type: [String, Number], required: !1 },
      height: { type: [String, Number], required: !1 },
      crossorigin: { type: [String, Boolean], required: !1 },
      nonce: { type: String, required: !1 },
    },
    emits: ['load', 'error'],
    setup(e, { expose: t, emit: n }) {
      const r = e,
        o = n,
        s = Zm(),
        { providerOptions: i, normalizedAttrs: a, imageModifiers: l } = wI(r),
        u = S(() =>
          s.getSizes(r.src, {
            ...i.value,
            sizes: r.sizes,
            densities: r.densities,
            modifiers: l.value,
          })
        ),
        c = j(!1),
        f = _y(),
        d = S(() => ({
          ...a.value,
          'data-nuxt-img': '',
          ...(!r.placeholder || c.value
            ? { sizes: u.value.sizes, srcset: u.value.srcset }
            : {}),
          ...f,
        })),
        p = S(() => {
          if (c.value) return !1;
          const b = r.placeholder === '' ? [10, 10] : r.placeholder;
          if (!b) return !1;
          if (typeof b == 'string') return b;
          const [v = 10, m = v, w = 50, C = 3] = Array.isArray(b)
            ? b
            : typeof b == 'number'
            ? [b]
            : [];
          return s(
            r.src,
            { ...l.value, width: v, height: m, quality: w, blur: C },
            i.value
          );
        }),
        h = S(() => (r.sizes ? u.value.src : s(r.src, l.value, i.value))),
        g = S(() => p.value || h.value),
        _ = Le().isHydrating,
        x = iy('imgEl');
      return (
        t({ imgEl: x }),
        Ye(() => {
          if (p.value || r.custom) {
            const b = new Image();
            h.value && (b.src = h.value),
              r.sizes &&
                ((b.sizes = u.value.sizes || ''), (b.srcset = u.value.srcset)),
              b.decode
                ? b
                    .decode()
                    .then(() => {
                      (c.value = !0), o('load', new Event('load'));
                    })
                    .catch((v) => {
                      o('error', v);
                    })
                : ((b.onload = (v) => {
                    (c.value = !0), o('load', v);
                  }),
                  (b.onerror = (v) => {
                    o('error', v);
                  })),
              _I('nuxt-image');
            return;
          }
          x.value &&
            (x.value.complete &&
              _ &&
              (x.value.getAttribute('data-error')
                ? o('error', new Event('error'))
                : o('load', new Event('load'))),
            (x.value.onload = (b) => {
              o('load', b);
            }),
            (x.value.onerror = (b) => {
              o('error', b);
            }));
        }),
        (b, v) =>
          e.custom
            ? B(
                b.$slots,
                'default',
                tt(
                  te(
                    { key: 1 },
                    { imgAttrs: d.value, isLoaded: c.value, src: g.value }
                  )
                )
              )
            : (T(),
              ge(
                'img',
                te(
                  {
                    key: 0,
                    ref_key: 'imgEl',
                    ref: x,
                    class: p.value ? e.placeholderClass : void 0,
                  },
                  d.value,
                  { src: g.value }
                ),
                null,
                16,
                xI
              ))
      );
    },
  },
  CI = Object.assign(kI, { __name: 'NuxtImg' }),
  Ad = Symbol('nuxt-ui.avatar-group');
function ev(e) {
  const t = $e(Ad, void 0),
    n = S(() => e.size ?? t?.value.size);
  return (
    bt(
      Ad,
      S(() => ({ size: n.value }))
    ),
    { size: n }
  );
}
const EI = {
    slots: {
      root: 'relative inline-flex items-center justify-center shrink-0',
      base: 'rounded-full ring ring-bg flex items-center justify-center text-inverted font-medium whitespace-nowrap',
    },
    variants: {
      color: {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        success: 'bg-success',
        info: 'bg-info',
        warning: 'bg-warning',
        error: 'bg-error',
        neutral: 'bg-inverted',
      },
      size: {
        '3xs': 'h-[4px] min-w-[4px] text-[4px]',
        '2xs': 'h-[5px] min-w-[5px] text-[5px]',
        xs: 'h-[6px] min-w-[6px] text-[6px]',
        sm: 'h-[7px] min-w-[7px] text-[7px]',
        md: 'h-[8px] min-w-[8px] text-[8px]',
        lg: 'h-[9px] min-w-[9px] text-[9px]',
        xl: 'h-[10px] min-w-[10px] text-[10px]',
        '2xl': 'h-[11px] min-w-[11px] text-[11px]',
        '3xl': 'h-[12px] min-w-[12px] text-[12px]',
      },
      position: {
        'top-right': 'top-0 right-0',
        'bottom-right': 'bottom-0 right-0',
        'top-left': 'top-0 left-0',
        'bottom-left': 'bottom-0 left-0',
      },
      inset: { false: '' },
      standalone: { false: 'absolute' },
    },
    compoundVariants: [
      {
        position: 'top-right',
        inset: !1,
        class: '-translate-y-1/2 translate-x-1/2 transform',
      },
      {
        position: 'bottom-right',
        inset: !1,
        class: 'translate-y-1/2 translate-x-1/2 transform',
      },
      {
        position: 'top-left',
        inset: !1,
        class: '-translate-y-1/2 -translate-x-1/2 transform',
      },
      {
        position: 'bottom-left',
        inset: !1,
        class: 'translate-y-1/2 -translate-x-1/2 transform',
      },
    ],
    defaultVariants: { size: 'md', color: 'primary', position: 'top-right' },
  },
  PI = Object.assign(
    { inheritAttrs: !1 },
    {
      __name: 'UChip',
      props: xy(
        {
          as: { type: null, required: !1 },
          text: { type: [String, Number], required: !1 },
          color: { type: null, required: !1 },
          size: { type: null, required: !1 },
          position: { type: null, required: !1 },
          inset: { type: Boolean, required: !1, default: !1 },
          standalone: { type: Boolean, required: !1, default: !1 },
          class: { type: null, required: !1 },
          ui: { type: null, required: !1 },
        },
        { show: { type: Boolean, default: !0 }, showModifiers: {} }
      ),
      emits: ['update:show'],
      setup(e) {
        const t = e,
          n = zy(e, 'show', { type: Boolean, default: !0 }),
          { size: r } = ev(t),
          o = Je(),
          s = S(() =>
            Ie({ extend: Ie(EI), ...(o.ui?.chip || {}) })({
              color: t.color,
              size: r.value,
              position: t.position,
              inset: t.inset,
              standalone: t.standalone,
            })
          );
        return (i, a) => (
          T(),
          L(
            y(_e),
            {
              as: e.as,
              class: re(s.value.root({ class: [t.ui?.root, t.class] })),
            },
            {
              default: O(() => [
                z(
                  y(Pr),
                  tt(ut(i.$attrs)),
                  { default: O(() => [B(i.$slots, 'default')]), _: 3 },
                  16
                ),
                n.value
                  ? (T(),
                    ge(
                      'span',
                      {
                        key: 0,
                        class: re(s.value.base({ class: t.ui?.base })),
                      },
                      [B(i.$slots, 'content', {}, () => [ft(et(e.text), 1)])],
                      2
                    ))
                  : fe('', !0),
              ]),
              _: 3,
            },
            8,
            ['as', 'class']
          )
        );
      },
    }
  ),
  TI = {
    slots: {
      root: 'inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated',
      image: 'h-full w-full rounded-[inherit] object-cover',
      fallback: 'font-medium leading-none text-muted truncate',
      icon: 'text-muted shrink-0',
    },
    variants: {
      size: {
        '3xs': { root: 'size-4 text-[8px]' },
        '2xs': { root: 'size-5 text-[10px]' },
        xs: { root: 'size-6 text-xs' },
        sm: { root: 'size-7 text-sm' },
        md: { root: 'size-8 text-base' },
        lg: { root: 'size-9 text-lg' },
        xl: { root: 'size-10 text-xl' },
        '2xl': { root: 'size-11 text-[22px]' },
        '3xl': { root: 'size-12 text-2xl' },
      },
    },
    defaultVariants: { size: 'md' },
  },
  sa = Object.assign(
    { inheritAttrs: !1 },
    {
      __name: 'UAvatar',
      props: {
        as: { type: null, required: !1 },
        src: { type: String, required: !1 },
        alt: { type: String, required: !1 },
        icon: { type: [String, Object], required: !1 },
        text: { type: String, required: !1 },
        size: { type: null, required: !1 },
        chip: { type: [Boolean, Object], required: !1 },
        class: { type: null, required: !1 },
        style: { type: null, required: !1 },
        ui: { type: null, required: !1 },
      },
      setup(e) {
        const t = e,
          n = S(() =>
            typeof t.as == 'string' || typeof t.as?.render == 'function'
              ? { root: t.as }
              : Mt(t.as, { root: 'span' })
          ),
          r = S(
            () =>
              t.text ||
              (t.alt || '')
                .split(' ')
                .map((c) => c.charAt(0))
                .join('')
                .substring(0, 2)
          ),
          o = Je(),
          { size: s } = ev(t),
          i = S(() =>
            Ie({ extend: Ie(TI), ...(o.ui?.avatar || {}) })({ size: s.value })
          ),
          a = S(
            () =>
              ({
                '3xs': 16,
                '2xs': 20,
                xs: 24,
                sm: 28,
                md: 32,
                lg: 36,
                xl: 40,
                '2xl': 44,
                '3xl': 48,
              }[t.size || 'md'])
          ),
          l = j(!1);
        we(
          () => t.src,
          () => {
            l.value && (l.value = !1);
          }
        );
        function u() {
          l.value = !0;
        }
        return (c, f) => (
          T(),
          L(
            Tt(t.chip ? PI : y(_e)),
            te(
              { as: n.value.root },
              t.chip
                ? typeof t.chip == 'object'
                  ? { inset: !0, ...t.chip }
                  : { inset: !0 }
                : {},
              {
                class: i.value.root({ class: [t.ui?.root, t.class] }),
                style: t.style,
              }
            ),
            {
              default: O(() => [
                e.src && !l.value
                  ? (T(),
                    L(
                      Tt(n.value.img || y(CI)),
                      te(
                        {
                          key: 0,
                          src: e.src,
                          alt: e.alt,
                          width: a.value,
                          height: a.value,
                        },
                        c.$attrs,
                        {
                          class: i.value.image({ class: t.ui?.image }),
                          onError: u,
                        }
                      ),
                      null,
                      16,
                      ['src', 'alt', 'width', 'height', 'class']
                    ))
                  : (T(),
                    L(
                      y(Pr),
                      tt(te({ key: 1 }, c.$attrs)),
                      {
                        default: O(() => [
                          B(c.$slots, 'default', {}, () => [
                            e.icon
                              ? (T(),
                                L(
                                  qt,
                                  {
                                    key: 0,
                                    name: e.icon,
                                    class: re(
                                      i.value.icon({ class: t.ui?.icon })
                                    ),
                                  },
                                  null,
                                  8,
                                  ['name', 'class']
                                ))
                              : (T(),
                                ge(
                                  'span',
                                  {
                                    key: 1,
                                    class: re(
                                      i.value.fallback({
                                        class: t.ui?.fallback,
                                      })
                                    ),
                                  },
                                  et(r.value || ' '),
                                  3
                                )),
                          ]),
                        ]),
                        _: 3,
                      },
                      16
                    )),
              ]),
              _: 3,
            },
            16,
            ['as', 'class', 'style']
          )
        );
      },
    }
  );
function tv(e) {
  const t = Je(),
    n = S(() => Ae(e)),
    r = S(
      () =>
        (n.value.icon && n.value.leading) ||
        (n.value.icon && !n.value.trailing) ||
        (n.value.loading && !n.value.trailing) ||
        !!n.value.leadingIcon
    ),
    o = S(
      () =>
        (n.value.icon && n.value.trailing) ||
        (n.value.loading && n.value.trailing) ||
        !!n.value.trailingIcon
    ),
    s = S(() =>
      n.value.loading
        ? n.value.loadingIcon || t.ui.icons.loading
        : n.value.leadingIcon || n.value.icon
    ),
    i = S(() =>
      n.value.loading && !r.value
        ? n.value.loadingIcon || t.ui.icons.loading
        : n.value.trailingIcon || n.value.icon
    );
  return {
    isLeading: r,
    isTrailing: o,
    leadingIconName: s,
    trailingIconName: i,
  };
}
const SI = Symbol('nuxt-ui.field-group');
function nv(e) {
  const t = $e(SI, void 0);
  return {
    orientation: S(() => t?.value.orientation),
    size: S(() => e?.size ?? t?.value.size),
  };
}
const AI = Symbol('nuxt-ui.form-options'),
  OI = Symbol('nuxt-ui.form-events'),
  Od = Symbol('nuxt-ui.form-field'),
  RI = Symbol('nuxt-ui.input-id'),
  II = Symbol('nuxt-ui.form-loading');
function uD(e, t) {
  const n = $e(AI, void 0),
    r = $e(OI, void 0),
    o = $e(Od, void 0),
    s = $e(RI, void 0);
  bt(Od, void 0),
    o &&
      s &&
      (t?.bind === !1 ? (s.value = void 0) : e?.id && (s.value = e?.id));
  function i(f, d, p) {
    r && o && d && r.emit({ type: f, name: d, eager: p });
  }
  function a() {
    i('blur', o?.value.name);
  }
  function l() {
    i('focus', o?.value.name);
  }
  function u() {
    i('change', o?.value.name);
  }
  const c = lR(() => {
    i('input', o?.value.name, o?.value.eagerValidation);
  }, o?.value.validateOnInputDelay ?? n?.value.validateOnInputDelay ?? 0);
  return {
    id: S(() => e?.id ?? s?.value),
    name: S(() => e?.name ?? o?.value.name),
    size: S(() => e?.size ?? o?.value.size),
    color: S(() => (o?.value.error ? 'error' : e?.color)),
    highlight: S(() => (o?.value.error ? !0 : e?.highlight)),
    disabled: S(() => n?.value.disabled || e?.disabled),
    emitFormBlur: a,
    emitFormInput: c,
    emitFormChange: u,
    emitFormFocus: l,
    ariaAttrs: S(() => {
      if (!o?.value) return;
      const f =
          ['error', 'hint', 'description', 'help']
            .filter((p) => o?.value?.[p])
            .map((p) => `${o?.value.ariaId}-${p}`) || [],
        d = { 'aria-invalid': !!o?.value.error };
      return f.length > 0 && (d['aria-describedby'] = f.join(' ')), d;
    }),
  };
}
function zs(e) {
  const t = Object.keys(e),
    n = t.filter((s) => s.startsWith('aria-')),
    r = t.filter((s) => s.startsWith('data-')),
    o = [
      'active',
      'activeClass',
      'ariaCurrentValue',
      'as',
      'disabled',
      'exact',
      'exactActiveClass',
      'exactHash',
      'exactQuery',
      'external',
      'href',
      'download',
      'inactiveClass',
      'noPrefetch',
      'noRel',
      'prefetch',
      'prefetchedClass',
      'rel',
      'replace',
      'target',
      'to',
      'type',
      'title',
      'onClick',
      ...n,
      ...r,
    ];
  return _n(e, ...o);
}
function LI(e, t) {
  const n = bR(e, t).reduce(
      (s, i) => (i.type === 'added' && s.add(i.key), s),
      new Set()
    ),
    r = Object.fromEntries(Object.entries(e).filter(([s]) => !n.has(s))),
    o = Object.fromEntries(Object.entries(t).filter(([s]) => !n.has(s)));
  return oo(r, o);
}
const DI = (...e) => e.find((t) => t !== void 0);
function qI(e) {
  const t = e.componentName || 'NuxtLink';
  function n(s) {
    return typeof s == 'string' && s.startsWith('#');
  }
  function r(s, i, a) {
    const l = a ?? e.trailingSlash;
    if (!s || (l !== 'append' && l !== 'remove')) return s;
    if (typeof s == 'string') return As(s, l);
    const u = 'path' in s && s.path !== void 0 ? s.path : i(s).path;
    return { ...s, name: void 0, path: As(u, l) };
  }
  function o(s) {
    const i = _t(),
      a = Ar(),
      l = S(() => !!s.target && s.target !== '_self'),
      u = S(() => {
        const _ = s.to || s.href || '';
        return typeof _ == 'string' && sn(_, { acceptRelative: !0 });
      }),
      c = mu('RouterLink'),
      f = c && typeof c != 'string' ? c.useLink : void 0,
      d = S(() => {
        if (s.external) return !0;
        const _ = s.to || s.href || '';
        return typeof _ == 'object' ? !1 : _ === '' || u.value;
      }),
      p = S(() => {
        const _ = s.to || s.href || '';
        return d.value ? _ : r(_, i.resolve, s.trailingSlash);
      }),
      h = d.value ? void 0 : f?.({ ...s, to: p }),
      g = S(() => {
        const _ = s.trailingSlash ?? e.trailingSlash;
        if (!p.value || u.value || n(p.value)) return p.value;
        if (d.value) {
          const x =
              typeof p.value == 'object' && 'path' in p.value
                ? il(p.value)
                : p.value,
            b = typeof x == 'object' ? i.resolve(x).href : x;
          return As(b, _);
        }
        return typeof p.value == 'object'
          ? i.resolve(p.value)?.href ?? null
          : As(kr(a.app.baseURL, p.value), _);
      });
    return {
      to: p,
      hasTarget: l,
      isAbsoluteUrl: u,
      isExternal: d,
      href: g,
      isActive: h?.isActive ?? S(() => p.value === i.currentRoute.value.path),
      isExactActive:
        h?.isExactActive ?? S(() => p.value === i.currentRoute.value.path),
      route: h?.route ?? S(() => i.resolve(p.value)),
      async navigate(_) {
        await m_(g.value, { replace: s.replace, external: d.value || l.value });
      },
    };
  }
  return J({
    name: t,
    props: {
      to: { type: [String, Object], default: void 0, required: !1 },
      href: { type: [String, Object], default: void 0, required: !1 },
      target: { type: String, default: void 0, required: !1 },
      rel: { type: String, default: void 0, required: !1 },
      noRel: { type: Boolean, default: void 0, required: !1 },
      prefetch: { type: Boolean, default: void 0, required: !1 },
      prefetchOn: { type: [String, Object], default: void 0, required: !1 },
      noPrefetch: { type: Boolean, default: void 0, required: !1 },
      activeClass: { type: String, default: void 0, required: !1 },
      exactActiveClass: { type: String, default: void 0, required: !1 },
      prefetchedClass: { type: String, default: void 0, required: !1 },
      replace: { type: Boolean, default: void 0, required: !1 },
      ariaCurrentValue: { type: String, default: void 0, required: !1 },
      external: { type: Boolean, default: void 0, required: !1 },
      custom: { type: Boolean, default: void 0, required: !1 },
      trailingSlash: { type: String, default: void 0, required: !1 },
    },
    useLink: o,
    setup(s, { slots: i }) {
      const a = _t(),
        {
          to: l,
          href: u,
          navigate: c,
          isExternal: f,
          hasTarget: d,
          isAbsoluteUrl: p,
        } = o(s),
        h = Pe(!1),
        g = j(null),
        _ = (v) => {
          g.value = s.custom ? v?.$el?.nextElementSibling : v?.$el;
        };
      function x(v) {
        return (
          !h.value &&
          (typeof s.prefetchOn == 'string'
            ? s.prefetchOn === v
            : s.prefetchOn?.[v] ?? e.prefetchOn?.[v]) &&
          (s.prefetch ?? e.prefetch) !== !1 &&
          s.noPrefetch !== !0 &&
          s.target !== '_blank' &&
          !BI()
        );
      }
      async function b(v = Le()) {
        if (h.value) return;
        h.value = !0;
        const m =
            typeof l.value == 'string'
              ? l.value
              : f.value
              ? il(l.value)
              : a.resolve(l.value).fullPath,
          w = f.value ? new URL(m, window.location.href).href : m;
        await Promise.all([
          v.hooks.callHook('link:prefetch', w).catch(() => {}),
          !f.value && !d.value && vg(l.value, a).catch(() => {}),
        ]);
      }
      if (x('visibility')) {
        const v = Le();
        let m,
          w = null;
        Ye(() => {
          const C = NI();
          Hi(() => {
            m = gl(() => {
              g?.value?.tagName &&
                (w = C.observe(g.value, async () => {
                  w?.(), (w = null), await b(v);
                }));
            });
          });
        }),
          Sr(() => {
            m && Ix(m), w?.(), (w = null);
          });
      }
      return () => {
        if (!f.value && !d.value && !n(l.value)) {
          const w = {
            ref: _,
            to: l.value,
            activeClass: s.activeClass || e.activeClass,
            exactActiveClass: s.exactActiveClass || e.exactActiveClass,
            replace: s.replace,
            ariaCurrentValue: s.ariaCurrentValue,
            custom: s.custom,
          };
          return (
            s.custom ||
              (x('interaction') &&
                ((w.onPointerenter = b.bind(null, void 0)),
                (w.onFocus = b.bind(null, void 0))),
              h.value && (w.class = s.prefetchedClass || e.prefetchedClass),
              (w.rel = s.rel || void 0)),
            Be(mu('RouterLink'), w, i.default)
          );
        }
        const v = s.target || null,
          m =
            DI(
              s.noRel ? '' : s.rel,
              e.externalRelAttribute,
              p.value || d.value ? 'noopener noreferrer' : ''
            ) || null;
        return s.custom
          ? i.default
            ? i.default({
                href: u.value,
                navigate: c,
                prefetch: b,
                get route() {
                  if (!u.value) return;
                  const w = new URL(u.value, window.location.href);
                  return {
                    path: w.pathname,
                    fullPath: w.pathname,
                    get query() {
                      return lc(w.search);
                    },
                    hash: w.hash,
                    params: {},
                    name: void 0,
                    matched: [],
                    redirectedFrom: void 0,
                    meta: {},
                    href: u.value,
                  };
                },
                rel: m,
                target: v,
                isExternal: f.value || d.value,
                isActive: !1,
                isExactActive: !1,
              })
            : null
          : Be(
              'a',
              {
                ref: g,
                href: u.value || null,
                rel: m,
                target: v,
                onClick: (w) => {
                  if (!(f.value || d.value))
                    return (
                      w.preventDefault(),
                      s.replace ? a.replace(u.value) : a.push(u.value)
                    );
                },
              },
              i.default?.()
            );
      };
    },
  });
}
const MI = qI(Z0);
function As(e, t) {
  const n = t === 'append' ? xh : to;
  return sn(e) && !e.startsWith('http') ? e : n(e, !0);
}
function NI() {
  const e = Le();
  if (e._observer) return e._observer;
  let t = null;
  const n = new Map(),
    r = (s, i) => (
      (t ||= new IntersectionObserver((a) => {
        for (const l of a) {
          const u = n.get(l.target);
          (l.isIntersecting || l.intersectionRatio > 0) && u && u();
        }
      })),
      n.set(s, i),
      t.observe(s),
      () => {
        n.delete(s),
          t?.unobserve(s),
          n.size === 0 && (t?.disconnect(), (t = null));
      }
    );
  return (e._observer = { observe: r });
}
const $I = /2g/;
function BI() {
  const e = navigator.connection;
  return !!(e && (e.saveData || $I.test(e.effectiveType)));
}
const hr = {
    __name: 'ULinkBase',
    props: {
      as: { type: String, required: !1, default: 'button' },
      type: { type: String, required: !1, default: 'button' },
      disabled: { type: Boolean, required: !1 },
      onClick: { type: [Function, Array], required: !1 },
      href: { type: String, required: !1 },
      navigate: { type: Function, required: !1 },
      target: { type: [String, Object, null], required: !1 },
      rel: { type: [String, Object, null], required: !1 },
      active: { type: Boolean, required: !1 },
      isExternal: { type: Boolean, required: !1 },
    },
    setup(e) {
      const t = e;
      function n(r) {
        if (t.disabled) {
          r.stopPropagation(), r.preventDefault();
          return;
        }
        if (t.onClick)
          for (const o of Array.isArray(t.onClick) ? t.onClick : [t.onClick])
            o(r);
        t.href && t.navigate && !t.isExternal && t.navigate(r);
      }
      return (r, o) => (
        T(),
        L(
          y(_e),
          te(
            e.href
              ? {
                  as: 'a',
                  href: e.disabled ? void 0 : e.href,
                  'aria-disabled': e.disabled ? 'true' : void 0,
                  role: e.disabled ? 'link' : void 0,
                  tabindex: e.disabled ? -1 : void 0,
                }
              : e.as === 'button'
              ? { as: e.as, type: e.type, disabled: e.disabled }
              : { as: e.as },
            { rel: e.rel, target: e.target, onClick: n }
          ),
          { default: O(() => [B(r.$slots, 'default')]), _: 3 },
          16,
          ['rel', 'target']
        )
      );
    },
  },
  VI = {
    base: 'focus-visible:outline-primary',
    variants: {
      active: { true: 'text-primary', false: 'text-muted' },
      disabled: { true: 'cursor-not-allowed opacity-75' },
    },
    compoundVariants: [
      {
        active: !1,
        disabled: !1,
        class: ['hover:text-default', 'transition-colors'],
      },
    ],
  },
  Hs = Object.assign(
    { inheritAttrs: !1 },
    {
      __name: 'ULink',
      props: {
        as: { type: null, required: !1, default: 'button' },
        type: { type: null, required: !1, default: 'button' },
        disabled: { type: Boolean, required: !1 },
        active: { type: Boolean, required: !1, default: void 0 },
        exact: { type: Boolean, required: !1 },
        exactQuery: { type: [Boolean, String], required: !1 },
        exactHash: { type: Boolean, required: !1 },
        inactiveClass: { type: String, required: !1 },
        custom: { type: Boolean, required: !1 },
        raw: { type: Boolean, required: !1 },
        class: { type: null, required: !1 },
        to: { type: null, required: !1 },
        href: { type: null, required: !1 },
        external: { type: Boolean, required: !1 },
        target: { type: [String, Object, null], required: !1 },
        rel: { type: [String, Object, null], required: !1 },
        noRel: { type: Boolean, required: !1 },
        prefetchedClass: { type: String, required: !1 },
        prefetch: { type: Boolean, required: !1 },
        prefetchOn: { type: [String, Object], required: !1 },
        noPrefetch: { type: Boolean, required: !1 },
        activeClass: { type: String, required: !1 },
        exactActiveClass: { type: String, required: !1 },
        ariaCurrentValue: { type: String, required: !1, default: 'page' },
        viewTransition: { type: Boolean, required: !1 },
        replace: { type: Boolean, required: !1 },
      },
      setup(e) {
        const t = e,
          n = rs(),
          r = Je(),
          o = Fn(
            YO(
              t,
              'as',
              'type',
              'disabled',
              'active',
              'exact',
              'exactQuery',
              'exactHash',
              'activeClass',
              'inactiveClass',
              'to',
              'href',
              'raw',
              'custom',
              'class'
            )
          ),
          s = S(() =>
            Ie({
              extend: Ie(VI),
              ...Mt(
                {
                  variants: {
                    active: {
                      true: xi(
                        r.ui?.link?.variants?.active?.true,
                        t.activeClass
                      ),
                      false: xi(
                        r.ui?.link?.variants?.active?.false,
                        t.inactiveClass
                      ),
                    },
                  },
                },
                r.ui?.link || {}
              ),
            })
          ),
          i = S(() => t.to ?? t.href);
        function a({ route: u, isActive: c, isExactActive: f }) {
          if (t.active !== void 0) return t.active;
          if (t.exactQuery === 'partial') {
            if (!LI(u.query, n.query)) return !1;
          } else if (t.exactQuery === !0 && !oo(u.query, n.query)) return !1;
          return t.exactHash && u.hash !== n.hash
            ? !1
            : !!((t.exact && f) || (!t.exact && c));
        }
        function l({ route: u, isActive: c, isExactActive: f }) {
          const d = a({ route: u, isActive: c, isExactActive: f });
          return t.raw
            ? [t.class, d ? t.activeClass : t.inactiveClass]
            : s.value({ class: t.class, active: d, disabled: t.disabled });
        }
        return (u, c) => {
          const f = MI;
          return (
            T(),
            L(
              f,
              te(y(o), { to: i.value, custom: '' }),
              {
                default: O(
                  ({
                    href: d,
                    navigate: p,
                    route: h,
                    rel: g,
                    target: _,
                    isExternal: x,
                    isActive: b,
                    isExactActive: v,
                  }) => [
                    e.custom
                      ? B(
                          u.$slots,
                          'default',
                          tt(
                            te(
                              { key: 0 },
                              {
                                ...u.$attrs,
                                ...(e.exact && v
                                  ? { 'aria-current': t.ariaCurrentValue }
                                  : {}),
                                as: e.as,
                                type: e.type,
                                disabled: e.disabled,
                                href: d,
                                navigate: p,
                                rel: g,
                                target: _,
                                isExternal: x,
                                active: a({
                                  route: h,
                                  isActive: b,
                                  isExactActive: v,
                                }),
                              }
                            )
                          )
                        )
                      : (T(),
                        L(
                          hr,
                          te(
                            { key: 1 },
                            {
                              ...u.$attrs,
                              ...(e.exact && v
                                ? { 'aria-current': t.ariaCurrentValue }
                                : {}),
                              as: e.as,
                              type: e.type,
                              disabled: e.disabled,
                              href: d,
                              navigate: p,
                              rel: g,
                              target: _,
                              isExternal: x,
                            },
                            {
                              class: l({
                                route: h,
                                isActive: b,
                                isExactActive: v,
                              }),
                            }
                          ),
                          {
                            default: O(() => [
                              B(u.$slots, 'default', {
                                active: a({
                                  route: h,
                                  isActive: b,
                                  isExactActive: v,
                                }),
                              }),
                            ]),
                            _: 2,
                          },
                          1040,
                          ['class']
                        )),
                  ]
                ),
                _: 3,
              },
              16,
              ['to']
            )
          );
        };
      },
    }
  ),
  jI = {
    slots: {
      base: [
        'rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75',
        'transition-colors',
      ],
      label: 'truncate',
      leadingIcon: 'shrink-0',
      leadingAvatar: 'shrink-0',
      leadingAvatarSize: '',
      trailingIcon: 'shrink-0',
    },
    variants: {
      fieldGroup: {
        horizontal:
          'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
        vertical:
          'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]',
      },
      color: {
        primary: '',
        secondary: '',
        success: '',
        info: '',
        warning: '',
        error: '',
        neutral: '',
      },
      variant: {
        solid: '',
        outline: '',
        soft: '',
        subtle: '',
        ghost: '',
        link: '',
      },
      size: {
        xs: {
          base: 'px-2 py-1 text-xs gap-1',
          leadingIcon: 'size-4',
          leadingAvatarSize: '3xs',
          trailingIcon: 'size-4',
        },
        sm: {
          base: 'px-2.5 py-1.5 text-xs gap-1.5',
          leadingIcon: 'size-4',
          leadingAvatarSize: '3xs',
          trailingIcon: 'size-4',
        },
        md: {
          base: 'px-2.5 py-1.5 text-sm gap-1.5',
          leadingIcon: 'size-5',
          leadingAvatarSize: '2xs',
          trailingIcon: 'size-5',
        },
        lg: {
          base: 'px-3 py-2 text-sm gap-2',
          leadingIcon: 'size-5',
          leadingAvatarSize: '2xs',
          trailingIcon: 'size-5',
        },
        xl: {
          base: 'px-3 py-2 text-base gap-2',
          leadingIcon: 'size-6',
          leadingAvatarSize: 'xs',
          trailingIcon: 'size-6',
        },
      },
      block: {
        true: { base: 'w-full justify-center', trailingIcon: 'ms-auto' },
      },
      square: { true: '' },
      leading: { true: '' },
      trailing: { true: '' },
      loading: { true: '' },
      active: { true: { base: '' }, false: { base: '' } },
    },
    compoundVariants: [
      {
        color: 'primary',
        variant: 'solid',
        class:
          'text-inverted bg-primary hover:bg-primary/75 active:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
      },
      {
        color: 'secondary',
        variant: 'solid',
        class:
          'text-inverted bg-secondary hover:bg-secondary/75 active:bg-secondary/75 disabled:bg-secondary aria-disabled:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
      },
      {
        color: 'success',
        variant: 'solid',
        class:
          'text-inverted bg-success hover:bg-success/75 active:bg-success/75 disabled:bg-success aria-disabled:bg-success focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success',
      },
      {
        color: 'info',
        variant: 'solid',
        class:
          'text-inverted bg-info hover:bg-info/75 active:bg-info/75 disabled:bg-info aria-disabled:bg-info focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info',
      },
      {
        color: 'warning',
        variant: 'solid',
        class:
          'text-inverted bg-warning hover:bg-warning/75 active:bg-warning/75 disabled:bg-warning aria-disabled:bg-warning focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning',
      },
      {
        color: 'error',
        variant: 'solid',
        class:
          'text-inverted bg-error hover:bg-error/75 active:bg-error/75 disabled:bg-error aria-disabled:bg-error focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error',
      },
      {
        color: 'primary',
        variant: 'outline',
        class:
          'ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
      },
      {
        color: 'secondary',
        variant: 'outline',
        class:
          'ring ring-inset ring-secondary/50 text-secondary hover:bg-secondary/10 active:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary',
      },
      {
        color: 'success',
        variant: 'outline',
        class:
          'ring ring-inset ring-success/50 text-success hover:bg-success/10 active:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-success',
      },
      {
        color: 'info',
        variant: 'outline',
        class:
          'ring ring-inset ring-info/50 text-info hover:bg-info/10 active:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-info',
      },
      {
        color: 'warning',
        variant: 'outline',
        class:
          'ring ring-inset ring-warning/50 text-warning hover:bg-warning/10 active:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-warning',
      },
      {
        color: 'error',
        variant: 'outline',
        class:
          'ring ring-inset ring-error/50 text-error hover:bg-error/10 active:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-error',
      },
      {
        color: 'primary',
        variant: 'soft',
        class:
          'text-primary bg-primary/10 hover:bg-primary/15 active:bg-primary/15 focus:outline-none focus-visible:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10',
      },
      {
        color: 'secondary',
        variant: 'soft',
        class:
          'text-secondary bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 focus:outline-none focus-visible:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10',
      },
      {
        color: 'success',
        variant: 'soft',
        class:
          'text-success bg-success/10 hover:bg-success/15 active:bg-success/15 focus:outline-none focus-visible:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10',
      },
      {
        color: 'info',
        variant: 'soft',
        class:
          'text-info bg-info/10 hover:bg-info/15 active:bg-info/15 focus:outline-none focus-visible:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10',
      },
      {
        color: 'warning',
        variant: 'soft',
        class:
          'text-warning bg-warning/10 hover:bg-warning/15 active:bg-warning/15 focus:outline-none focus-visible:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10',
      },
      {
        color: 'error',
        variant: 'soft',
        class:
          'text-error bg-error/10 hover:bg-error/15 active:bg-error/15 focus:outline-none focus-visible:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10',
      },
      {
        color: 'primary',
        variant: 'subtle',
        class:
          'text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 active:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
      },
      {
        color: 'secondary',
        variant: 'subtle',
        class:
          'text-secondary ring ring-inset ring-secondary/25 bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary',
      },
      {
        color: 'success',
        variant: 'subtle',
        class:
          'text-success ring ring-inset ring-success/25 bg-success/10 hover:bg-success/15 active:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-success',
      },
      {
        color: 'info',
        variant: 'subtle',
        class:
          'text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 active:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-info',
      },
      {
        color: 'warning',
        variant: 'subtle',
        class:
          'text-warning ring ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15 active:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-warning',
      },
      {
        color: 'error',
        variant: 'subtle',
        class:
          'text-error ring ring-inset ring-error/25 bg-error/10 hover:bg-error/15 active:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-error',
      },
      {
        color: 'primary',
        variant: 'ghost',
        class:
          'text-primary hover:bg-primary/10 active:bg-primary/10 focus:outline-none focus-visible:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
      },
      {
        color: 'secondary',
        variant: 'ghost',
        class:
          'text-secondary hover:bg-secondary/10 active:bg-secondary/10 focus:outline-none focus-visible:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
      },
      {
        color: 'success',
        variant: 'ghost',
        class:
          'text-success hover:bg-success/10 active:bg-success/10 focus:outline-none focus-visible:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
      },
      {
        color: 'info',
        variant: 'ghost',
        class:
          'text-info hover:bg-info/10 active:bg-info/10 focus:outline-none focus-visible:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
      },
      {
        color: 'warning',
        variant: 'ghost',
        class:
          'text-warning hover:bg-warning/10 active:bg-warning/10 focus:outline-none focus-visible:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
      },
      {
        color: 'error',
        variant: 'ghost',
        class:
          'text-error hover:bg-error/10 active:bg-error/10 focus:outline-none focus-visible:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
      },
      {
        color: 'primary',
        variant: 'link',
        class:
          'text-primary hover:text-primary/75 active:text-primary/75 disabled:text-primary aria-disabled:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary',
      },
      {
        color: 'secondary',
        variant: 'link',
        class:
          'text-secondary hover:text-secondary/75 active:text-secondary/75 disabled:text-secondary aria-disabled:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary',
      },
      {
        color: 'success',
        variant: 'link',
        class:
          'text-success hover:text-success/75 active:text-success/75 disabled:text-success aria-disabled:text-success focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success',
      },
      {
        color: 'info',
        variant: 'link',
        class:
          'text-info hover:text-info/75 active:text-info/75 disabled:text-info aria-disabled:text-info focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info',
      },
      {
        color: 'warning',
        variant: 'link',
        class:
          'text-warning hover:text-warning/75 active:text-warning/75 disabled:text-warning aria-disabled:text-warning focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning',
      },
      {
        color: 'error',
        variant: 'link',
        class:
          'text-error hover:text-error/75 active:text-error/75 disabled:text-error aria-disabled:text-error focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error',
      },
      {
        color: 'neutral',
        variant: 'solid',
        class:
          'text-inverted bg-inverted hover:bg-inverted/90 active:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted',
      },
      {
        color: 'neutral',
        variant: 'outline',
        class:
          'ring ring-inset ring-accented text-default bg-default hover:bg-elevated active:bg-elevated disabled:bg-default aria-disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted',
      },
      {
        color: 'neutral',
        variant: 'soft',
        class:
          'text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 focus:outline-none focus-visible:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated',
      },
      {
        color: 'neutral',
        variant: 'subtle',
        class:
          'ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted',
      },
      {
        color: 'neutral',
        variant: 'ghost',
        class:
          'text-default hover:bg-elevated active:bg-elevated focus:outline-none focus-visible:bg-elevated hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent',
      },
      {
        color: 'neutral',
        variant: 'link',
        class:
          'text-muted hover:text-default active:text-default disabled:text-muted aria-disabled:text-muted focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-inverted',
      },
      { size: 'xs', square: !0, class: 'p-1' },
      { size: 'sm', square: !0, class: 'p-1.5' },
      { size: 'md', square: !0, class: 'p-1.5' },
      { size: 'lg', square: !0, class: 'p-2' },
      { size: 'xl', square: !0, class: 'p-2' },
      { loading: !0, leading: !0, class: { leadingIcon: 'animate-spin' } },
      {
        loading: !0,
        leading: !1,
        trailing: !0,
        class: { trailingIcon: 'animate-spin' },
      },
    ],
    defaultVariants: { color: 'primary', variant: 'solid', size: 'md' },
  },
  Qr = {
    __name: 'UButton',
    props: {
      label: { type: String, required: !1 },
      color: { type: null, required: !1 },
      activeColor: { type: null, required: !1 },
      variant: { type: null, required: !1 },
      activeVariant: { type: null, required: !1 },
      size: { type: null, required: !1 },
      square: { type: Boolean, required: !1 },
      block: { type: Boolean, required: !1 },
      loadingAuto: { type: Boolean, required: !1 },
      onClick: { type: [Function, Array], required: !1 },
      class: { type: null, required: !1 },
      ui: { type: null, required: !1 },
      icon: { type: [String, Object], required: !1 },
      avatar: { type: Object, required: !1 },
      leading: { type: Boolean, required: !1 },
      leadingIcon: { type: [String, Object], required: !1 },
      trailing: { type: Boolean, required: !1 },
      trailingIcon: { type: [String, Object], required: !1 },
      loading: { type: Boolean, required: !1 },
      loadingIcon: { type: [String, Object], required: !1 },
      as: { type: null, required: !1 },
      type: { type: null, required: !1 },
      disabled: { type: Boolean, required: !1 },
      active: { type: Boolean, required: !1 },
      exact: { type: Boolean, required: !1 },
      exactQuery: { type: [Boolean, String], required: !1 },
      exactHash: { type: Boolean, required: !1 },
      inactiveClass: { type: String, required: !1 },
      to: { type: null, required: !1 },
      href: { type: null, required: !1 },
      external: { type: Boolean, required: !1 },
      target: { type: [String, Object, null], required: !1 },
      rel: { type: [String, Object, null], required: !1 },
      noRel: { type: Boolean, required: !1 },
      prefetchedClass: { type: String, required: !1 },
      prefetch: { type: Boolean, required: !1 },
      prefetchOn: { type: [String, Object], required: !1 },
      noPrefetch: { type: Boolean, required: !1 },
      activeClass: { type: String, required: !1 },
      exactActiveClass: { type: String, required: !1 },
      ariaCurrentValue: { type: String, required: !1 },
      viewTransition: { type: Boolean, required: !1 },
      replace: { type: Boolean, required: !1 },
    },
    setup(e) {
      const t = e,
        n = un(),
        r = Je(),
        { orientation: o, size: s } = nv(t),
        i = Fn(zs(t)),
        a = j(!1),
        l = $e(II, void 0);
      async function u(_) {
        a.value = !0;
        const x = Array.isArray(t.onClick) ? t.onClick : [t.onClick];
        try {
          await Promise.all(x.map((b) => b?.(_)));
        } finally {
          a.value = !1;
        }
      }
      const c = S(
          () =>
            t.loading ||
            (t.loadingAuto && (a.value || (l?.value && t.type === 'submit')))
        ),
        {
          isLeading: f,
          isTrailing: d,
          leadingIconName: p,
          trailingIconName: h,
        } = tv(S(() => ({ ...t, loading: c.value }))),
        g = S(() =>
          Ie({
            extend: Ie(jI),
            ...Mt(
              {
                variants: {
                  active: {
                    true: {
                      base: xi(
                        r.ui?.button?.variants?.active?.true?.base,
                        t.activeClass
                      ),
                    },
                    false: {
                      base: xi(
                        r.ui?.button?.variants?.active?.false?.base,
                        t.inactiveClass
                      ),
                    },
                  },
                },
              },
              r.ui?.button || {}
            ),
          })({
            color: t.color,
            variant: t.variant,
            size: s.value,
            loading: c.value,
            block: t.block,
            square: t.square || (!n.default && !t.label),
            leading: f.value,
            trailing: d.value,
            fieldGroup: o.value,
          })
        );
      return (_, x) => (
        T(),
        L(
          Hs,
          te(
            { type: e.type, disabled: e.disabled || c.value },
            y(Bm)(y(i), ['type', 'disabled', 'onClick']),
            { custom: '' }
          ),
          {
            default: O(({ active: b, ...v }) => [
              z(
                hr,
                te(v, {
                  class: g.value.base({
                    class: [t.ui?.base, t.class],
                    active: b,
                    ...(b && e.activeVariant
                      ? { variant: e.activeVariant }
                      : {}),
                    ...(b && e.activeColor ? { color: e.activeColor } : {}),
                  }),
                  onClick: u,
                }),
                {
                  default: O(() => [
                    B(_.$slots, 'leading', { ui: g.value }, () => [
                      y(f) && y(p)
                        ? (T(),
                          L(
                            qt,
                            {
                              key: 0,
                              name: y(p),
                              class: re(
                                g.value.leadingIcon({
                                  class: t.ui?.leadingIcon,
                                  active: b,
                                })
                              ),
                            },
                            null,
                            8,
                            ['name', 'class']
                          ))
                        : e.avatar
                        ? (T(),
                          L(
                            sa,
                            te(
                              {
                                key: 1,
                                size:
                                  t.ui?.leadingAvatarSize ||
                                  g.value.leadingAvatarSize(),
                              },
                              e.avatar,
                              {
                                class: g.value.leadingAvatar({
                                  class: t.ui?.leadingAvatar,
                                  active: b,
                                }),
                              }
                            ),
                            null,
                            16,
                            ['size', 'class']
                          ))
                        : fe('', !0),
                    ]),
                    B(_.$slots, 'default', { ui: g.value }, () => [
                      e.label !== void 0 && e.label !== null
                        ? (T(),
                          ge(
                            'span',
                            {
                              key: 0,
                              class: re(
                                g.value.label({ class: t.ui?.label, active: b })
                              ),
                            },
                            et(e.label),
                            3
                          ))
                        : fe('', !0),
                    ]),
                    B(_.$slots, 'trailing', { ui: g.value }, () => [
                      y(d) && y(h)
                        ? (T(),
                          L(
                            qt,
                            {
                              key: 0,
                              name: y(h),
                              class: re(
                                g.value.trailingIcon({
                                  class: t.ui?.trailingIcon,
                                  active: b,
                                })
                              ),
                            },
                            null,
                            8,
                            ['name', 'class']
                          ))
                        : fe('', !0),
                    ]),
                  ]),
                  _: 2,
                },
                1040,
                ['class']
              ),
            ]),
            _: 3,
          },
          16,
          ['type', 'disabled']
        )
      );
    },
  },
  FI = {
    slots: {
      root: 'gap-2',
      base: 'relative overflow-hidden rounded-full bg-accented',
      indicator:
        'rounded-full size-full transition-transform duration-200 ease-out',
      status: 'flex text-dimmed transition-[width] duration-200',
      steps: 'grid items-end',
      step: 'truncate text-end row-start-1 col-start-1 transition-opacity',
    },
    variants: {
      animation: {
        carousel: '',
        'carousel-inverse': '',
        swing: '',
        elastic: '',
      },
      color: {
        primary: { indicator: 'bg-primary', steps: 'text-primary' },
        secondary: { indicator: 'bg-secondary', steps: 'text-secondary' },
        success: { indicator: 'bg-success', steps: 'text-success' },
        info: { indicator: 'bg-info', steps: 'text-info' },
        warning: { indicator: 'bg-warning', steps: 'text-warning' },
        error: { indicator: 'bg-error', steps: 'text-error' },
        neutral: { indicator: 'bg-inverted', steps: 'text-inverted' },
      },
      size: {
        '2xs': { status: 'text-xs', steps: 'text-xs' },
        xs: { status: 'text-xs', steps: 'text-xs' },
        sm: { status: 'text-sm', steps: 'text-sm' },
        md: { status: 'text-sm', steps: 'text-sm' },
        lg: { status: 'text-sm', steps: 'text-sm' },
        xl: { status: 'text-base', steps: 'text-base' },
        '2xl': { status: 'text-base', steps: 'text-base' },
      },
      step: {
        active: { step: 'opacity-100' },
        first: { step: 'opacity-100 text-muted' },
        other: { step: 'opacity-0' },
        last: { step: '' },
      },
      orientation: {
        horizontal: {
          root: 'w-full flex flex-col',
          base: 'w-full',
          status: 'flex-row items-center justify-end min-w-fit',
        },
        vertical: {
          root: 'h-full flex flex-row-reverse',
          base: 'h-full',
          status: 'flex-col justify-end min-h-fit',
        },
      },
      inverted: { true: { status: 'self-end' } },
    },
    compoundVariants: [
      {
        inverted: !0,
        orientation: 'horizontal',
        class: { step: 'text-start', status: 'flex-row-reverse' },
      },
      {
        inverted: !0,
        orientation: 'vertical',
        class: { steps: 'items-start', status: 'flex-col-reverse' },
      },
      { orientation: 'horizontal', size: '2xs', class: 'h-px' },
      { orientation: 'horizontal', size: 'xs', class: 'h-0.5' },
      { orientation: 'horizontal', size: 'sm', class: 'h-1' },
      { orientation: 'horizontal', size: 'md', class: 'h-2' },
      { orientation: 'horizontal', size: 'lg', class: 'h-3' },
      { orientation: 'horizontal', size: 'xl', class: 'h-4' },
      { orientation: 'horizontal', size: '2xl', class: 'h-5' },
      { orientation: 'vertical', size: '2xs', class: 'w-px' },
      { orientation: 'vertical', size: 'xs', class: 'w-0.5' },
      { orientation: 'vertical', size: 'sm', class: 'w-1' },
      { orientation: 'vertical', size: 'md', class: 'w-2' },
      { orientation: 'vertical', size: 'lg', class: 'w-3' },
      { orientation: 'vertical', size: 'xl', class: 'w-4' },
      { orientation: 'vertical', size: '2xl', class: 'w-5' },
      {
        orientation: 'horizontal',
        animation: 'carousel',
        class: {
          indicator:
            'data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_ease-in-out_infinite]',
        },
      },
      {
        orientation: 'vertical',
        animation: 'carousel',
        class: {
          indicator:
            'data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite]',
        },
      },
      {
        orientation: 'horizontal',
        animation: 'carousel-inverse',
        class: {
          indicator:
            'data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]',
        },
      },
      {
        orientation: 'vertical',
        animation: 'carousel-inverse',
        class: {
          indicator:
            'data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite]',
        },
      },
      {
        orientation: 'horizontal',
        animation: 'swing',
        class: {
          indicator:
            'data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite]',
        },
      },
      {
        orientation: 'vertical',
        animation: 'swing',
        class: {
          indicator:
            'data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite]',
        },
      },
      {
        orientation: 'horizontal',
        animation: 'elastic',
        class: {
          indicator:
            'data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite]',
        },
      },
      {
        orientation: 'vertical',
        animation: 'elastic',
        class: {
          indicator:
            'data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite]',
        },
      },
    ],
    defaultVariants: { animation: 'carousel', color: 'primary', size: 'md' },
  },
  zI = {
    __name: 'UProgress',
    props: {
      as: { type: null, required: !1 },
      max: { type: [Number, Array], required: !1 },
      status: { type: Boolean, required: !1 },
      inverted: { type: Boolean, required: !1, default: !1 },
      size: { type: null, required: !1 },
      color: { type: null, required: !1 },
      orientation: { type: null, required: !1, default: 'horizontal' },
      animation: { type: null, required: !1 },
      class: { type: null, required: !1 },
      ui: { type: null, required: !1 },
      getValueLabel: { type: Function, required: !1 },
      getValueText: { type: Function, required: !1 },
      modelValue: { type: [Number, null], required: !1, default: null },
    },
    emits: ['update:modelValue', 'update:max'],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = un(),
        { dir: s } = Jc(),
        i = Je(),
        a = Gt(_n(n, 'getValueLabel', 'getValueText', 'modelValue'), r),
        l = S(() => a.value.modelValue === null),
        u = S(() => Array.isArray(n.max)),
        c = S(() => {
          if (!(l.value || !n.max))
            return Array.isArray(n.max) ? n.max.length - 1 : Number(n.max);
        }),
        f = S(() => {
          if (!l.value)
            switch (!0) {
              case a.value.modelValue < 0:
                return 0;
              case a.value.modelValue > (c.value ?? 100):
                return 100;
              default:
                return Math.round(
                  (a.value.modelValue / (c.value ?? 100)) * 100
                );
            }
        }),
        d = S(() => {
          if (f.value !== void 0)
            return n.orientation === 'vertical'
              ? {
                  transform: `translateY(${n.inverted ? '' : '-'}${
                    100 - f.value
                  }%)`,
                }
              : s.value === 'rtl'
              ? {
                  transform: `translateX(${n.inverted ? '-' : ''}${
                    100 - f.value
                  }%)`,
                }
              : {
                  transform: `translateX(${n.inverted ? '' : '-'}${
                    100 - f.value
                  }%)`,
                };
        }),
        p = S(() => {
          const v = `${Math.max(f.value ?? 0, 0)}%`;
          return n.orientation === 'vertical' ? { height: v } : { width: v };
        });
      function h(v) {
        return v === Number(n.modelValue);
      }
      function g(v) {
        return v === 0;
      }
      function _(v) {
        return v === c.value;
      }
      function x(v) {
        return (
          (v = Number(v)),
          h(v) && !g(v)
            ? 'active'
            : g(v) && h(v)
            ? 'first'
            : _(v) && h(v)
            ? 'last'
            : 'other'
        );
      }
      const b = S(() =>
        Ie({ extend: Ie(FI), ...(i.ui?.progress || {}) })({
          animation: n.animation,
          size: n.size,
          color: n.color,
          orientation: n.orientation,
          inverted: n.inverted,
        })
      );
      return (v, m) => (
        T(),
        L(
          y(_e),
          {
            as: e.as,
            'data-orientation': e.orientation,
            class: re(b.value.root({ class: [n.ui?.root, n.class] })),
          },
          {
            default: O(() => [
              !l.value && (e.status || o.status)
                ? (T(),
                  ge(
                    'div',
                    {
                      key: 0,
                      class: re(b.value.status({ class: n.ui?.status })),
                      style: nn(p.value),
                    },
                    [
                      B(v.$slots, 'status', { percent: f.value }, () => [
                        ft(et(f.value) + '% ', 1),
                      ]),
                    ],
                    6
                  ))
                : fe('', !0),
              z(
                y(JS),
                te(y(a), {
                  max: c.value,
                  class: b.value.base({ class: n.ui?.base }),
                  style: { transform: 'translateZ(0)' },
                }),
                {
                  default: O(() => [
                    z(
                      y(ZS),
                      {
                        class: re(
                          b.value.indicator({ class: n.ui?.indicator })
                        ),
                        style: nn(d.value),
                      },
                      null,
                      8,
                      ['class', 'style']
                    ),
                  ]),
                  _: 1,
                },
                16,
                ['max', 'class']
              ),
              u.value
                ? (T(),
                  ge(
                    'div',
                    {
                      key: 1,
                      class: re(b.value.steps({ class: n.ui?.steps })),
                    },
                    [
                      (T(!0),
                      ge(
                        Te,
                        null,
                        Ht(
                          e.max,
                          (w, C) => (
                            T(),
                            ge(
                              'div',
                              {
                                key: C,
                                class: re(
                                  b.value.step({
                                    class: n.ui?.step,
                                    step: x(C),
                                  })
                                ),
                              },
                              [
                                B(v.$slots, `step-${C}`, { step: w }, () => [
                                  ft(et(w), 1),
                                ]),
                              ],
                              2
                            )
                          )
                        ),
                        128
                      )),
                    ],
                    2
                  ))
                : fe('', !0),
            ]),
            _: 3,
          },
          8,
          ['as', 'data-orientation', 'class']
        )
      );
    },
  },
  HI = {
    slots: {
      root: 'relative group overflow-hidden bg-default shadow-lg rounded-lg ring ring-default p-4 flex gap-2.5 focus:outline-none',
      wrapper: 'w-0 flex-1 flex flex-col',
      title: 'text-sm font-medium text-highlighted',
      description: 'text-sm text-muted',
      icon: 'shrink-0 size-5',
      avatar: 'shrink-0',
      avatarSize: '2xl',
      actions: 'flex gap-1.5 shrink-0',
      progress: 'absolute inset-x-0 bottom-0',
      close: 'p-0',
    },
    variants: {
      color: {
        primary: {
          root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary',
          icon: 'text-primary',
        },
        secondary: {
          root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary',
          icon: 'text-secondary',
        },
        success: {
          root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success',
          icon: 'text-success',
        },
        info: {
          root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info',
          icon: 'text-info',
        },
        warning: {
          root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning',
          icon: 'text-warning',
        },
        error: {
          root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error',
          icon: 'text-error',
        },
        neutral: {
          root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted',
          icon: 'text-highlighted',
        },
      },
      orientation: {
        horizontal: { root: 'items-center', actions: 'items-center' },
        vertical: { root: 'items-start', actions: 'items-start mt-2.5' },
      },
      title: { true: { description: 'mt-1' } },
    },
    defaultVariants: { color: 'primary' },
  },
  UI = {
    __name: 'UToast',
    props: {
      as: { type: null, required: !1 },
      title: { type: [String, Object, Function], required: !1 },
      description: { type: [String, Object, Function], required: !1 },
      icon: { type: [String, Object], required: !1 },
      avatar: { type: Object, required: !1 },
      color: { type: null, required: !1 },
      orientation: { type: null, required: !1, default: 'vertical' },
      close: { type: [Boolean, Object], required: !1, default: !0 },
      closeIcon: { type: [String, Object], required: !1 },
      actions: { type: Array, required: !1 },
      progress: { type: [Boolean, Object], required: !1, default: !0 },
      class: { type: null, required: !1 },
      ui: { type: null, required: !1 },
      defaultOpen: { type: Boolean, required: !1 },
      open: { type: Boolean, required: !1 },
      type: { type: String, required: !1 },
      duration: { type: Number, required: !1 },
    },
    emits: [
      'escapeKeyDown',
      'pause',
      'resume',
      'swipeStart',
      'swipeMove',
      'swipeCancel',
      'swipeEnd',
      'update:open',
    ],
    setup(e, { expose: t, emit: n }) {
      const r = e,
        o = n,
        s = un(),
        { t: i } = Jc(),
        a = Je(),
        l = Gt(_n(r, 'as', 'defaultOpen', 'open', 'duration', 'type'), o),
        u = S(() =>
          Ie({ extend: Ie(HI), ...(a.ui?.toast || {}) })({
            color: r.color,
            orientation: r.orientation,
            title: !!r.title || !!s.title,
          })
        ),
        c = j(),
        f = j(0);
      return (
        Ye(() => {
          c.value &&
            Ze(() => {
              f.value = c.value?.$el?.getBoundingClientRect()?.height;
            });
        }),
        t({ height: f }),
        (d, p) => (
          T(),
          L(
            y(xA),
            te({ ref_key: 'el', ref: c }, y(l), {
              'data-orientation': e.orientation,
              class: u.value.root({ class: [r.ui?.root, r.class] }),
              style: { '--height': f.value },
            }),
            {
              default: O(({ remaining: h, duration: g, open: _ }) => [
                B(d.$slots, 'leading', { ui: u.value }, () => [
                  e.avatar
                    ? (T(),
                      L(
                        sa,
                        te(
                          {
                            key: 0,
                            size: r.ui?.avatarSize || u.value.avatarSize(),
                          },
                          e.avatar,
                          { class: u.value.avatar({ class: r.ui?.avatar }) }
                        ),
                        null,
                        16,
                        ['size', 'class']
                      ))
                    : e.icon
                    ? (T(),
                      L(
                        qt,
                        {
                          key: 1,
                          name: e.icon,
                          class: re(u.value.icon({ class: r.ui?.icon })),
                        },
                        null,
                        8,
                        ['name', 'class']
                      ))
                    : fe('', !0),
                ]),
                kt(
                  'div',
                  { class: re(u.value.wrapper({ class: r.ui?.wrapper })) },
                  [
                    e.title || s.title
                      ? (T(),
                        L(
                          y(CA),
                          {
                            key: 0,
                            class: re(u.value.title({ class: r.ui?.title })),
                          },
                          {
                            default: O(() => [
                              B(d.$slots, 'title', {}, () => [
                                typeof e.title == 'function'
                                  ? (T(), L(Tt(e.title()), { key: 0 }))
                                  : typeof e.title == 'object'
                                  ? (T(), L(Tt(e.title), { key: 1 }))
                                  : (T(),
                                    ge(
                                      Te,
                                      { key: 2 },
                                      [ft(et(e.title), 1)],
                                      64
                                    )),
                              ]),
                            ]),
                            _: 3,
                          },
                          8,
                          ['class']
                        ))
                      : fe('', !0),
                    e.description || s.description
                      ? (T(),
                        L(
                          y(yA),
                          {
                            key: 1,
                            class: re(
                              u.value.description({ class: r.ui?.description })
                            ),
                          },
                          {
                            default: O(() => [
                              B(d.$slots, 'description', {}, () => [
                                typeof e.description == 'function'
                                  ? (T(), L(Tt(e.description()), { key: 0 }))
                                  : typeof e.description == 'object'
                                  ? (T(), L(Tt(e.description), { key: 1 }))
                                  : (T(),
                                    ge(
                                      Te,
                                      { key: 2 },
                                      [ft(et(e.description), 1)],
                                      64
                                    )),
                              ]),
                            ]),
                            _: 3,
                          },
                          8,
                          ['class']
                        ))
                      : fe('', !0),
                    e.orientation === 'vertical' &&
                    (e.actions?.length || s.actions)
                      ? (T(),
                        ge(
                          'div',
                          {
                            key: 2,
                            class: re(
                              u.value.actions({ class: r.ui?.actions })
                            ),
                          },
                          [
                            B(d.$slots, 'actions', {}, () => [
                              (T(!0),
                              ge(
                                Te,
                                null,
                                Ht(
                                  e.actions,
                                  (x, b) => (
                                    T(),
                                    L(
                                      y(ud),
                                      {
                                        key: b,
                                        'alt-text': x.label || 'Action',
                                        'as-child': '',
                                        onClick:
                                          p[0] ||
                                          (p[0] = In(() => {}, ['stop'])),
                                      },
                                      {
                                        default: O(() => [
                                          z(
                                            Qr,
                                            te(
                                              { size: 'xs', color: e.color },
                                              { ref_for: !0 },
                                              x
                                            ),
                                            null,
                                            16,
                                            ['color']
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ['alt-text']
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                          ],
                          2
                        ))
                      : fe('', !0),
                  ],
                  2
                ),
                (e.orientation === 'horizontal' &&
                  (e.actions?.length || s.actions)) ||
                e.close
                  ? (T(),
                    ge(
                      'div',
                      {
                        key: 0,
                        class: re(
                          u.value.actions({
                            class: r.ui?.actions,
                            orientation: 'horizontal',
                          })
                        ),
                      },
                      [
                        e.orientation === 'horizontal' &&
                        (e.actions?.length || s.actions)
                          ? B(d.$slots, 'actions', { key: 0 }, () => [
                              (T(!0),
                              ge(
                                Te,
                                null,
                                Ht(
                                  e.actions,
                                  (x, b) => (
                                    T(),
                                    L(
                                      y(ud),
                                      {
                                        key: b,
                                        'alt-text': x.label || 'Action',
                                        'as-child': '',
                                        onClick:
                                          p[1] ||
                                          (p[1] = In(() => {}, ['stop'])),
                                      },
                                      {
                                        default: O(() => [
                                          z(
                                            Qr,
                                            te(
                                              { size: 'xs', color: e.color },
                                              { ref_for: !0 },
                                              x
                                            ),
                                            null,
                                            16,
                                            ['color']
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ['alt-text']
                                    )
                                  )
                                ),
                                128
                              )),
                            ])
                          : fe('', !0),
                        e.close || s.close
                          ? (T(),
                            L(
                              y(hm),
                              { key: 1, 'as-child': '' },
                              {
                                default: O(() => [
                                  B(d.$slots, 'close', { ui: u.value }, () => [
                                    e.close
                                      ? (T(),
                                        L(
                                          Qr,
                                          te(
                                            {
                                              key: 0,
                                              icon:
                                                e.closeIcon ||
                                                y(a).ui.icons.close,
                                              color: 'neutral',
                                              variant: 'link',
                                              'aria-label': y(i)('toast.close'),
                                            },
                                            typeof e.close == 'object'
                                              ? e.close
                                              : {},
                                            {
                                              class: u.value.close({
                                                class: r.ui?.close,
                                              }),
                                              onClick:
                                                p[2] ||
                                                (p[2] = In(() => {}, ['stop'])),
                                            }
                                          ),
                                          null,
                                          16,
                                          ['icon', 'aria-label', 'class']
                                        ))
                                      : fe('', !0),
                                  ]),
                                ]),
                                _: 3,
                              }
                            ))
                          : fe('', !0),
                      ],
                      2
                    ))
                  : fe('', !0),
                e.progress && _ && h > 0 && g
                  ? (T(),
                    L(
                      zI,
                      te(
                        {
                          key: 1,
                          'model-value': (h / g) * 100,
                          color: e.color,
                        },
                        typeof e.progress == 'object' ? e.progress : {},
                        {
                          size: 'sm',
                          class: u.value.progress({ class: r.ui?.progress }),
                        }
                      ),
                      null,
                      16,
                      ['model-value', 'color', 'class']
                    ))
                  : fe('', !0),
              ]),
              _: 3,
            },
            16,
            ['data-orientation', 'class', 'style']
          )
        )
      );
    },
  },
  WI = {
    slots: {
      viewport:
        'fixed flex flex-col w-[calc(100%-2rem)] sm:w-96 z-[100] data-[expanded=true]:h-(--height) focus:outline-none',
      base: 'pointer-events-auto absolute inset-x-0 z-(--index) transform-(--transform) data-[expanded=false]:data-[front=false]:h-(--front-height) data-[expanded=false]:data-[front=false]:*:opacity-0 data-[front=false]:*:transition-opacity data-[front=false]:*:duration-100 data-[state=closed]:animate-[toast-closed_200ms_ease-in-out] data-[state=closed]:data-[expanded=false]:data-[front=false]:animate-[toast-collapsed-closed_200ms_ease-in-out] data-[swipe=move]:transition-none transition-[transform,translate,height] duration-200 ease-out',
    },
    variants: {
      position: {
        'top-left': { viewport: 'left-4' },
        'top-center': { viewport: 'left-1/2 transform -translate-x-1/2' },
        'top-right': { viewport: 'right-4' },
        'bottom-left': { viewport: 'left-4' },
        'bottom-center': { viewport: 'left-1/2 transform -translate-x-1/2' },
        'bottom-right': { viewport: 'right-4' },
      },
      swipeDirection: {
        up: 'data-[swipe=end]:animate-[toast-slide-up_200ms_ease-out]',
        right: 'data-[swipe=end]:animate-[toast-slide-right_200ms_ease-out]',
        down: 'data-[swipe=end]:animate-[toast-slide-down_200ms_ease-out]',
        left: 'data-[swipe=end]:animate-[toast-slide-left_200ms_ease-out]',
      },
    },
    compoundVariants: [
      {
        position: ['top-left', 'top-center', 'top-right'],
        class: {
          viewport: 'top-4',
          base: 'top-0 data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out]',
        },
      },
      {
        position: ['bottom-left', 'bottom-center', 'bottom-right'],
        class: {
          viewport: 'bottom-4',
          base: 'bottom-0 data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out]',
        },
      },
      {
        swipeDirection: ['left', 'right'],
        class:
          'data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x) data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=cancel]:translate-x-0',
      },
      {
        swipeDirection: ['up', 'down'],
        class:
          'data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y) data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=cancel]:translate-y-0',
      },
    ],
    defaultVariants: { position: 'bottom-right' },
  },
  KI = { name: 'Toaster' },
  GI = Object.assign(KI, {
    props: {
      position: { type: null, required: !1 },
      expand: { type: Boolean, required: !1, default: !0 },
      progress: { type: Boolean, required: !1, default: !0 },
      portal: {
        type: [Boolean, String],
        required: !1,
        skipCheck: !0,
        default: !0,
      },
      max: { type: Number, required: !1, default: 5 },
      class: { type: null, required: !1 },
      ui: { type: null, required: !1 },
      label: { type: String, required: !1 },
      duration: { type: Number, required: !1, default: 5e3 },
      disableSwipe: { type: Boolean, required: !1 },
      swipeThreshold: { type: Number, required: !1 },
    },
    setup(e) {
      const t = e,
        { toasts: n, remove: r } = PR(),
        o = Je();
      bt(
        Fm,
        ot(() => t.max)
      );
      const s = Fn(
          _n(t, 'duration', 'label', 'swipeThreshold', 'disableSwipe')
        ),
        i = Qc(ot(() => t.portal)),
        a = S(() => {
          switch (t.position) {
            case 'top-center':
              return 'up';
            case 'top-right':
            case 'bottom-right':
              return 'right';
            case 'bottom-center':
              return 'down';
            case 'top-left':
            case 'bottom-left':
              return 'left';
          }
          return 'right';
        }),
        l = S(() =>
          Ie({ extend: Ie(WI), ...(o.ui?.toaster || {}) })({
            position: t.position,
            swipeDirection: a.value,
          })
        );
      function u(_, x) {
        _ || r(x);
      }
      const c = j(!1),
        f = S(() => t.expand || c.value),
        d = j([]),
        p = S(() => d.value.reduce((_, { height: x }) => _ + x + 16, 0)),
        h = S(() => d.value[d.value.length - 1]?.height || 0);
      function g(_) {
        return d.value.slice(_ + 1).reduce((x, { height: b }) => x + b + 16, 0);
      }
      return (_, x) => (
        T(),
        L(
          y(rA),
          te({ 'swipe-direction': a.value }, y(s)),
          {
            default: O(() => [
              B(_.$slots, 'default'),
              (T(!0),
              ge(
                Te,
                null,
                Ht(
                  y(n),
                  (b, v) => (
                    T(),
                    L(
                      UI,
                      te(
                        {
                          key: b.id,
                          ref_for: !0,
                          ref_key: 'refs',
                          ref: d,
                          progress: e.progress,
                        },
                        { ref_for: !0 },
                        y(Bm)(b, ['id', 'close']),
                        {
                          close: b.close,
                          'data-expanded': f.value,
                          'data-front': !f.value && v === y(n).length - 1,
                          style: {
                            '--index': v - y(n).length + y(n).length,
                            '--before': y(n).length - 1 - v,
                            '--offset': g(v),
                            '--scale': f.value
                              ? '1'
                              : 'calc(1 - var(--before) * var(--scale-factor))',
                            '--translate': f.value
                              ? 'calc(var(--offset) * var(--translate-factor))'
                              : 'calc(var(--before) * var(--gap))',
                            '--transform':
                              'translateY(var(--translate)) scale(var(--scale))',
                          },
                          class: l.value.base({
                            class: [
                              t.ui?.base,
                              b.onClick ? 'cursor-pointer' : void 0,
                            ],
                          }),
                          'onUpdate:open': (m) => u(m, b.id),
                          onClick: (m) => b.onClick && b.onClick(b),
                        }
                      ),
                      null,
                      16,
                      [
                        'progress',
                        'close',
                        'data-expanded',
                        'data-front',
                        'style',
                        'class',
                        'onUpdate:open',
                        'onClick',
                      ]
                    )
                  )
                ),
                128
              )),
              z(
                y(_A),
                tt(ut(y(i))),
                {
                  default: O(() => [
                    z(
                      y(TA),
                      {
                        'data-expanded': f.value,
                        class: re(
                          l.value.viewport({ class: [t.ui?.viewport, t.class] })
                        ),
                        style: nn({
                          '--scale-factor': '0.05',
                          '--translate-factor': e.position?.startsWith('top')
                            ? '1px'
                            : '-1px',
                          '--gap': e.position?.startsWith('top')
                            ? '16px'
                            : '-16px',
                          '--front-height': `${h.value}px`,
                          '--height': `${p.value}px`,
                        }),
                        onMouseenter: x[0] || (x[0] = (b) => (c.value = !0)),
                        onMouseleave: x[1] || (x[1] = (b) => (c.value = !1)),
                      },
                      null,
                      8,
                      ['data-expanded', 'class', 'style']
                    ),
                  ]),
                  _: 1,
                },
                16
              ),
            ]),
            _: 3,
          },
          16,
          ['swipe-direction']
        )
      );
    },
  }),
  rv = Object.assign(GI, { __name: 'UToaster' });
function YI() {
  const e = Zt([]),
    t = (u, c) => {
      const { props: f, defaultOpen: d, destroyOnClose: p } = c || {},
        h = dt({
          id: Symbol(''),
          isOpen: !!d,
          component: Jl(u),
          isMounted: !!d,
          destroyOnClose: !!p,
          originalProps: f || {},
          props: { ...f },
        });
      return (
        e.push(h),
        {
          ...h,
          open: (g) => n(h.id, g),
          close: (g) => r(h.id, g),
          patch: (g) => i(h.id, g),
        }
      );
    },
    n = (u, c) => {
      const f = a(u);
      c
        ? (f.props = { ...f.originalProps, ...c })
        : (f.props = { ...f.originalProps }),
        (f.isOpen = !0),
        (f.isMounted = !0);
      const d = new Promise((p) => (f.resolvePromise = p));
      return Object.assign(d, {
        id: u,
        isMounted: f.isMounted,
        isOpen: f.isOpen,
        result: d,
      });
    },
    r = (u, c) => {
      const f = a(u);
      (f.isOpen = !1),
        f.resolvePromise && (f.resolvePromise(c), (f.resolvePromise = void 0));
    },
    o = () => {
      e.forEach((u) => r(u.id));
    },
    s = (u) => {
      const c = a(u);
      if (((c.isMounted = !1), c.destroyOnClose)) {
        const f = e.findIndex((d) => d.id === u);
        e.splice(f, 1);
      }
    },
    i = (u, c) => {
      const f = a(u);
      f.props = { ...f.props, ...c };
    },
    a = (u) => {
      const c = e.find((f) => f.id === u);
      if (!c) throw new Error('Overlay not found');
      return c;
    };
  return {
    overlays: e,
    open: n,
    close: r,
    closeAll: o,
    create: t,
    patch: i,
    unmount: s,
    isOpen: (u) => a(u).isOpen,
  };
}
const XI = Yc(YI),
  JI = {
    __name: 'UOverlayProvider',
    setup(e) {
      const { overlays: t, unmount: n, close: r } = XI(),
        o = S(() => t.filter((a) => a.isMounted)),
        s = (a) => {
          r(a), n(a);
        },
        i = (a, l) => {
          r(a, l);
        };
      return (a, l) => (
        T(!0),
        ge(
          Te,
          null,
          Ht(
            o.value,
            (u) => (
              T(),
              L(
                Tt(u.component),
                te({ key: u.id }, { ref_for: !0 }, u.props, {
                  open: u.isOpen,
                  'onUpdate:open': (c) => (u.isOpen = c),
                  onClose: (c) => i(u.id, c),
                  'onAfter:leave': (c) => s(u.id),
                }),
                null,
                16,
                ['open', 'onUpdate:open', 'onClose', 'onAfter:leave']
              )
            )
          ),
          128
        )
      );
    },
  },
  QI = { name: 'App' },
  ZI = Object.assign(QI, {
    props: {
      tooltip: { type: Object, required: !1 },
      toaster: { type: [Object, null], required: !1 },
      locale: { type: Object, required: !1 },
      portal: {
        type: [Boolean, String],
        required: !1,
        skipCheck: !0,
        default: 'body',
      },
      scrollBody: { type: [Boolean, Object], required: !1 },
      nonce: { type: String, required: !1 },
    },
    setup(e) {
      const t = e,
        n = Fn(_n(t, 'scrollBody')),
        r = ot(() => t.tooltip),
        o = ot(() => t.toaster),
        s = ot(() => t.locale);
      bt(Vm, s);
      const i = ot(() => t.portal);
      return (
        bt(jm, i),
        (a, l) => (
          T(),
          L(
            y(Z1),
            te(
              {
                'use-id': () => xp(),
                dir: s.value?.dir,
                locale: s.value?.code,
              },
              y(n)
            ),
            {
              default: O(() => [
                z(
                  y(IA),
                  tt(ut(r.value)),
                  {
                    default: O(() => [
                      e.toaster !== null
                        ? (T(),
                          L(
                            rv,
                            tt(te({ key: 0 }, o.value)),
                            {
                              default: O(() => [B(a.$slots, 'default')]),
                              _: 3,
                            },
                            16
                          ))
                        : B(a.$slots, 'default', { key: 1 }),
                      z(JI),
                    ]),
                    _: 3,
                  },
                  16
                ),
              ]),
              _: 3,
            },
            16,
            ['use-id', 'dir', 'locale']
          )
        )
      );
    },
  }),
  eL = Object.assign(ZI, { __name: 'UApp' }),
  Bl = [
    { label: 'Home', icon: 'i-lucide-home', to: '/' },
    { label: 'Projects', icon: 'i-lucide-folder', to: '/projects' },
    { label: 'Blog', icon: 'i-lucide-file-text', to: '/blog' },
    { label: 'Speaking', icon: 'i-lucide-mic', to: '/speaking' },
    { label: 'About', icon: 'i-lucide-user', to: '/about' },
  ],
  ov = () => wc('color-mode').value,
  sv = {
    index: 'v3.5.0--ZXMxKZiRZMgbrRSavH4YGSKH_FM2ddtMWEFuxRFYkTE',
    projects: 'v3.5.0--c84TYsmk9kpX9qnl1jTBZw7bbOsXANC1T7uacIiniPU',
    blog: 'v3.5.0--6FM-MA2fMVS7v00dkHVZXb1h0GpndaNaIl6tc91V1B8',
    pages: 'v3.5.0--p7D_qc-RmQIcFO3_zeH13WoJ9YhhE8ZvOboF8nuJ2C4',
    speaking: 'v3.5.0--2HWhep5qS9cjXVUyrJ2JupERg2hdMuhqFjzvRaYOwAQ',
    about: 'v3.5.0--S2UAdv1IOmS-jLXsQtXX7ByJaTdWybpgsdhYaTJdPpU',
  },
  tL = {
    index: '_content_index',
    projects: '_content_projects',
    blog: '_content_blog',
    pages: '_content_pages',
    speaking: '_content_speaking',
    about: '_content_about',
    info: '_content_info',
  },
  fD = {
    index: {
      type: 'page',
      fields: {
        id: 'string',
        title: 'string',
        about: 'json',
        blog: 'json',
        body: 'json',
        description: 'string',
        experience: 'json',
        extension: 'string',
        faq: 'json',
        hero: 'json',
        meta: 'json',
        navigation: 'json',
        path: 'string',
        seo: 'json',
        stem: 'string',
        testimonials: 'json',
      },
    },
    projects: {
      type: 'data',
      fields: {
        id: 'string',
        title: 'string',
        date: 'date',
        description: 'string',
        extension: 'string',
        image: 'string',
        meta: 'json',
        stem: 'string',
        tags: 'json',
        url: 'string',
      },
    },
    blog: {
      type: 'page',
      fields: {
        id: 'string',
        title: 'string',
        author: 'json',
        body: 'json',
        date: 'date',
        description: 'string',
        extension: 'string',
        image: 'string',
        meta: 'json',
        minRead: 'number',
        navigation: 'json',
        path: 'string',
        seo: 'json',
        stem: 'string',
      },
    },
    pages: {
      type: 'page',
      fields: {
        id: 'string',
        title: 'string',
        body: 'json',
        description: 'string',
        extension: 'string',
        links: 'json',
        meta: 'json',
        navigation: 'json',
        path: 'string',
        seo: 'json',
        stem: 'string',
      },
    },
    speaking: {
      type: 'page',
      fields: {
        id: 'string',
        title: 'string',
        body: 'json',
        description: 'string',
        events: 'json',
        extension: 'string',
        links: 'json',
        meta: 'json',
        navigation: 'json',
        path: 'string',
        seo: 'json',
        stem: 'string',
      },
    },
    about: {
      type: 'page',
      fields: {
        id: 'string',
        title: 'string',
        body: 'json',
        content: 'json',
        description: 'string',
        extension: 'string',
        images: 'json',
        meta: 'json',
        navigation: 'json',
        path: 'string',
        seo: 'json',
        stem: 'string',
      },
    },
    info: { type: 'data', fields: {} },
  },
  ki = (e, t) => {
    const n = e._conditions;
    return n.length > 0 ? `(${n.join(` ${t} `)})` : '';
  },
  Ci = (e) => {
    const t = [],
      n = {
        _conditions: t,
        where(r, o, s) {
          let i;
          switch (o.toUpperCase()) {
            case 'IN':
            case 'NOT IN':
              if (Array.isArray(s)) {
                const a = s.map((l) => Eo(l)).join(', ');
                i = `"${String(r)}" ${o.toUpperCase()} (${a})`;
              } else throw new TypeError(`Value for ${o} must be an array`);
              break;
            case 'BETWEEN':
            case 'NOT BETWEEN':
              if (Array.isArray(s) && s.length === 2)
                i = `"${String(r)}" ${o.toUpperCase()} ${Eo(s[0])} AND ${Eo(
                  s[1]
                )}`;
              else
                throw new Error(
                  `Value for ${o} must be an array with two elements`
                );
              break;
            case 'IS NULL':
            case 'IS NOT NULL':
              i = `"${String(r)}" ${o.toUpperCase()}`;
              break;
            case 'LIKE':
            case 'NOT LIKE':
              i = `"${String(r)}" ${o.toUpperCase()} ${Eo(s)}`;
              break;
            default:
              i = `"${String(r)}" ${o} ${Eo(
                typeof s == 'boolean' ? Number(s) : s
              )}`;
          }
          return t.push(`${i}`), n;
        },
        andWhere(r) {
          const o = r(Ci());
          return t.push(ki(o, 'AND')), n;
        },
        orWhere(r) {
          const o = r(Ci());
          return t.push(ki(o, 'OR')), n;
        },
      };
    return n;
  },
  nL = (e, t) => {
    const n = {
        conditions: [],
        selectedFields: [],
        offset: 0,
        limit: 0,
        orderBy: [],
        count: { field: '', distinct: !1 },
      },
      r = {
        __params: n,
        andWhere(s) {
          const i = s(Ci());
          return n.conditions.push(ki(i, 'AND')), r;
        },
        orWhere(s) {
          const i = s(Ci());
          return n.conditions.push(ki(i, 'OR')), r;
        },
        path(s) {
          return r.where('path', '=', to(s));
        },
        skip(s) {
          return (n.offset = s), r;
        },
        where(s, i, a) {
          return r.andWhere((l) => l.where(String(s), i, a)), r;
        },
        limit(s) {
          return (n.limit = s), r;
        },
        select(...s) {
          return s.length && n.selectedFields.push(...s), r;
        },
        order(s, i) {
          return n.orderBy.push(`"${String(s)}" ${i}`), r;
        },
        async all() {
          return t(e, o()).then((s) => s || []);
        },
        async first() {
          return t(e, o({ limit: 1 })).then((s) => s[0] || null);
        },
        async count(s = '*', i = !1) {
          return t(e, o({ count: { field: String(s), distinct: i } })).then(
            (a) => a[0].count
          );
        },
      };
    function o(s = {}) {
      let i = 'SELECT ';
      if (s?.count)
        i += `COUNT(${s.count.distinct ? 'DISTINCT ' : ''}${
          s.count.field
        }) as count`;
      else {
        const l = Array.from(new Set(n.selectedFields));
        i += l.length > 0 ? l.map((u) => `"${String(u)}"`).join(', ') : '*';
      }
      (i += ` FROM ${tL[String(e)]}`),
        n.conditions.length > 0 &&
          (i += ` WHERE ${n.conditions.join(' AND ')}`),
        n.orderBy.length > 0
          ? (i += ` ORDER BY ${n.orderBy.join(', ')}`)
          : (i += ' ORDER BY stem ASC');
      const a = s?.limit || n.limit;
      return (
        a > 0 &&
          (n.offset > 0
            ? (i += ` LIMIT ${a} OFFSET ${n.offset}`)
            : (i += ` LIMIT ${a}`)),
        i
      );
    }
    return r;
  };
function Eo(e) {
  return `'${String(e).replace(/'/g, "''")}'`;
}
const rL = /\d/,
  oL = ['-', '_', '/', '.'];
function sL(e = '') {
  if (!rL.test(e)) return e !== e.toLowerCase();
}
function iv(e, t) {
  const n = oL,
    r = [];
  if (!e || typeof e != 'string') return r;
  let o = '',
    s,
    i;
  for (const a of e) {
    const l = n.includes(a);
    if (l === !0) {
      r.push(o), (o = ''), (s = void 0);
      continue;
    }
    const u = sL(a);
    if (i === !1) {
      if (s === !1 && u === !0) {
        r.push(o), (o = a), (s = u);
        continue;
      }
      if (s === !0 && u === !1 && o.length > 1) {
        const c = o.at(-1);
        r.push(o.slice(0, Math.max(0, o.length - 1))), (o = c + a), (s = u);
        continue;
      }
    }
    (o += a), (s = u), (i = l);
  }
  return r.push(o), r;
}
function iL(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : '';
}
function aL(e, t) {
  return e
    ? (Array.isArray(e) ? e : iv(e))
        .map((n) => iL(t?.normalize ? n.toLowerCase() : n))
        .join('')
    : '';
}
function dD(e, t) {
  return e
    ? (Array.isArray(e) ? e : iv(e)).map((n) => n.toLowerCase()).join('-')
    : '';
}
function Vl(e) {
  return (t) => (
    (t = t || {}),
    (e || [])
      .filter((n) => typeof t[n] < 'u')
      .reduce((n, r) => Object.assign(n, { [r]: t[r] }), {})
  );
}
async function av(e, t = []) {
  e.__params?.orderBy?.length || (e = e.order('stem', 'ASC'));
  const r = await e
      .orWhere((u) =>
        u.where('navigation', '<>', 'false').where('navigation', 'IS NULL')
      )
      .select('navigation', 'stem', 'path', 'title', 'meta', ...(t || []))
      .all(),
    { contents: o, configs: s } = r.reduce(
      (u, c) => {
        if (String(c.stem).split('/').pop() === '.navigation') {
          c.title = c.title?.toLowerCase() === 'navigation' ? '' : c.title;
          const f = c.path.split('/').slice(0, -1).join('/') || '/';
          u.configs[f] = { ...c, ...c.body };
        } else u.contents.push(c);
        return u;
      },
      { configs: {}, contents: [] }
    ),
    i = (u) => ({
      ...Vl(['title', ...t])(u),
      ...u.meta,
      ...(Rd(u?.navigation) ? u.navigation : {}),
    }),
    a = (u) => ({
      ...Vl(['title', ...t])(u),
      ...(Rd(u?.navigation) ? u.navigation : {}),
    }),
    l = o.reduce((u, c) => {
      const f = c.path.substring(1).split('/'),
        d = c.stem.split('/'),
        p = !!d[d.length - 1]?.match(/([1-9]\d*\.)?index/g),
        h = (b) => ({
          title: b.title,
          path: b.path,
          stem: b.stem,
          children: [],
          ...a(b),
        }),
        g = h(c);
      if (p) {
        const b = s[g.path];
        if (typeof b?.navigation < 'u' && b?.navigation === !1) return u;
        if (c.path !== '/') {
          const v = h(c);
          g.children.push(v);
        }
        b && Object.assign(g, i(b));
      }
      if (f.length === 1) {
        const b = u.find((v) => v.path === g.path && v.page === !1);
        return (
          p && b
            ? Object.assign(b, {
                page: void 0,
                children: [...(g.children || []), ...(b.children || [])],
              })
            : u.push(g),
          u
        );
      }
      const _ = f.slice(0, -1).reduce((b, v, m) => {
          const w = '/' + f.slice(0, m + 1).join('/'),
            C = s[w];
          if (typeof C?.navigation < 'u' && C.navigation === !1) return [];
          let E = b.find((A) => A.path === w);
          if (!E) {
            const A = C ? i(C) : {};
            (E = {
              ...A,
              title: A.title || lL(v),
              path: w,
              stem: d.slice(0, m + 1).join('/'),
              children: [],
              page: !1,
            }),
              b.push(E);
          }
          return E.children;
        }, u),
        x = _.find((b) => b.path === g.path && b.page === !1);
      return (
        x
          ? Object.assign(x, {
              ...g,
              page: void 0,
              children: [...(g.children || []), ...(x.children || [])],
            })
          : _.push(g),
        u
      );
    }, []);
  return lv(l);
}
function lv(e) {
  const t = e;
  for (const n of t) n.children?.length ? lv(n.children) : delete n.children;
  return e;
}
function Rd(e) {
  return e !== null && Object.prototype.toString.call(e) === '[object Object]';
}
const lL = (e) => e.split(/[\s-]/g).map(aL).join(' ');
async function cL(e, t, n) {
  const { before: r = 1, after: o = 1, fields: s = [] } = n || {},
    i = await av(e, s),
    a = cv(i),
    l = a.findIndex((f) => f.path === t),
    u = l === -1 ? [] : a.slice(l - r, l),
    c = l === -1 ? [] : a.slice(l + 1, l + o + 1);
  return [
    ...Array.from({ length: r }).fill(null).concat(u).slice(u.length),
    ...c.concat(Array.from({ length: o }).fill(null)).slice(0, o),
  ];
}
function cv(e) {
  return e.flatMap((n) => {
    const r = n.children ? cv(n.children) : [];
    return n.page === !1 || (r.length && r.find((o) => o.path === n.path))
      ? r
      : [{ ...n, children: void 0 }, ...r];
  });
}
function uL(e) {
  return { type: 'root', children: e.value.map(uv) };
}
function uv(e) {
  if (typeof e == 'string') return { type: 'text', value: e };
  const [t, n, ...r] = e;
  return { type: 'element', tag: t, props: n, children: r.map(uv) };
}
const fv = /^h([1-6])$/,
  fL = (e) => fv.test(e);
async function dL(e, t) {
  const { ignoredTags: n = [], extraFields: r = [] } = {};
  return (
    await e
      .where('extension', '=', 'md')
      .select('path', 'body', 'description', 'title', ...(r || []))
      .all()
  ).flatMap((s) => pL(s, { ignoredTags: n, extraFields: r }));
}
function pL(e, { ignoredTags: t, extraFields: n }) {
  const r = !e.body || e.body?.type === 'root' ? e.body : uL(e.body),
    o = e.path ?? '',
    s = Vl(n)(e),
    i = [
      {
        ...s,
        id: o,
        title: e.title || '',
        titles: [],
        content: (e.description || '').trim(),
        level: 1,
      },
    ];
  if (!r?.children) return i;
  let a = 1,
    l = 0;
  const u = [e.title ?? ''];
  for (const c of r.children) {
    const f = c.tag || '';
    if (fL(f)) {
      const d = Number(f.match(fv)?.[1] ?? 0),
        p = jl(c).trim();
      d === 1
        ? u.splice(0, u.length)
        : d < l
        ? u.splice(d - 1, u.length - 1)
        : d === l && u.pop(),
        i.push({
          ...s,
          id: `${o}#${c.props?.id}`,
          title: p,
          titles: [...u],
          content: '',
          level: d,
        }),
        u.push(p),
        (l = d),
        (a += 1);
    } else {
      const d = jl(c, t).trim();
      if (a === 1 && i[a - 1]?.content === d) continue;
      i[a - 1].content = `${i[a - 1].content} ${d}`.trim();
    }
  }
  return i;
}
function jl(e, t = []) {
  let n = '';
  return (
    e.type === 'text' && (n += e.value || ''),
    t.includes(e.tag ?? '')
      ? ''
      : (e.children?.length &&
          (n += e.children
            .map((r) => jl(r, t))
            .filter(Boolean)
            .join('')),
        n)
  );
}
async function pD(e, t) {
  return await $fetch(`/nuxtContent/${t}/sql_dump.txt`, {
    context: {},
    responseType: 'text',
    headers: { 'content-type': 'text/plain' },
    query: { v: sv[String(t)], t: void 0 },
  });
}
async function hL(e, t, n) {
  return await $fetch(`/nuxtContent/${t}/query`, {
    context: e ? { cloudflare: e.context.cloudflare } : {},
    headers: {
      'content-type': 'application/json',
      ...(e?.node?.req?.headers?.cookie
        ? { cookie: e.node.req.headers.cookie }
        : {}),
    },
    query: { v: sv[String(t)], t: void 0 },
    method: 'POST',
    body: { sql: n },
  });
}
const gL = (e) => {
  const t = Lh()?.ssrContext?.event;
  return nL(e, (n, r) => mL(t, n, r));
};
function dv(e, t) {
  return tu(e, (n) => av(n, t));
}
function hD(e, t, n) {
  return tu(e, (r) => cL(r, t, n));
}
function pv(e, t) {
  return tu(e, (n) => dL(n));
}
async function mL(e, t, n) {
  return window.WebAssembly ? vL(t, n) : hL(e, String(t), n);
}
async function vL(e, t) {
  return await F(() => import('./lYl1t4M_.js'), [], import.meta.url)
    .then((r) => r.loadDatabaseAdapter(e))
    .then((r) => r.all(t));
}
function tu(e, t) {
  const n = gL(e),
    r = {
      where(o, s, i) {
        return n.where(String(o), s, i), r;
      },
      andWhere(o) {
        return n.andWhere(o), r;
      },
      orWhere(o) {
        return n.orWhere(o), r;
      },
      order(o, s) {
        return n.order(String(o), s), r;
      },
      then(o, s) {
        return t(n).then(o, s);
      },
      catch(o) {
        return this.then(void 0, o);
      },
      finally(o) {
        return this.then(void 0, void 0).finally(o);
      },
      get [Symbol.toStringTag]() {
        return 'Promise';
      },
    };
  return r;
}
const yL = H(() =>
    F(
      () => import('./20Pt5jed.js'),
      __vite__mapDeps([38, 30, 27, 13]),
      import.meta.url
    ).then((e) => e.default || e)
  ),
  bL = J({
    __name: 'app',
    async setup(e) {
      let t, n;
      const r = ov(),
        o = S(() => (r.value === 'dark' ? '#020618' : 'white'));
      hc({
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { key: 'theme-color', name: 'theme-color', content: o },
        ],
        link: [{ rel: 'icon', href: '/favicon.ico' }],
        htmlAttrs: { lang: 'en' },
      }),
        Jh({
          titleTemplate: '%s - Nuxt Portfolio Template',
          ogImage:
            'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png',
          twitterImage:
            'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png',
          twitterCard: 'summary_large_image',
        });
      const [{ data: s }, { data: i }] =
        (([t, n] = Lp(() =>
          Promise.all([
            eu('navigation', () => Promise.all([dv('blog')]), {
              transform: (a) => a.flat(),
            }),
            Wm('search', () => Promise.all([pv('blog')]), {
              server: !1,
              transform: (a) => a.flat(),
            }),
          ])
        )),
        (t = await t),
        n(),
        t);
      return (a, l) => {
        const u = z1,
          c = Im,
          f = UO,
          d = yL,
          p = Gc,
          h = eL;
        return (
          T(),
          L(h, null, {
            default: O(() => [
              z(f, null, {
                default: O(() => [
                  z(
                    c,
                    { class: 'relative' },
                    { default: O(() => [z(u)]), _: 1 }
                  ),
                ]),
                _: 1,
              }),
              z(p, null, {
                default: O(() => [
                  z(
                    d,
                    {
                      files: y(i),
                      navigation: y(s),
                      shortcut: 'meta_k',
                      links: 'navLinks' in a ? a.navLinks : y(Bl),
                      fuse: { resultLimit: 42 },
                    },
                    null,
                    8,
                    ['files', 'navigation', 'links']
                  ),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          })
        );
      };
    },
  }),
  _L = J({
    __name: 'ColorModeButton',
    setup(e) {
      const t = ov(),
        n = S(() => (t.value === 'dark' ? 'light' : 'dark')),
        r = () => {
          t.preference = n.value;
        },
        o = (s) => {
          if (!document.startViewTransition) {
            r();
            return;
          }
          const i = s.clientX,
            a = s.clientY,
            l = Math.hypot(
              Math.max(i, window.innerWidth - i),
              Math.max(a, window.innerHeight - a)
            );
          document
            .startViewTransition(() => {
              r();
            })
            .ready.then(() => {
              document.documentElement.animate(
                {
                  clipPath: [
                    `circle(0px at ${i}px ${a}px)`,
                    `circle(${l}px at ${i}px ${a}px)`,
                  ],
                },
                {
                  duration: 600,
                  easing: 'cubic-bezier(.76,.32,.29,.99)',
                  pseudoElement: '::view-transition-new(root)',
                }
              );
            });
        };
      return (s, i) => {
        const a = Qr,
          l = Gc;
        return (
          T(),
          L(l, null, {
            fallback: O(() => [
              ...(i[0] || (i[0] = [kt('div', { class: 'size-4' }, null, -1)])),
            ]),
            default: O(() => [
              z(
                a,
                {
                  'aria-label': `Switch to ${y(n)} mode`,
                  icon: `i-lucide-${y(n) === 'dark' ? 'sun' : 'moon'}`,
                  color: 'neutral',
                  variant: 'ghost',
                  size: 'sm',
                  class: 'rounded-full',
                  onClick: o,
                },
                null,
                8,
                ['aria-label', 'icon']
              ),
            ]),
            _: 1,
          })
        );
      };
    },
  }),
  wL = Object.assign(_L, { __name: 'ColorModeButton' }),
  xL = {
    slots: {
      base: 'font-medium inline-flex items-center',
      label: 'truncate',
      leadingIcon: 'shrink-0',
      leadingAvatar: 'shrink-0',
      leadingAvatarSize: '',
      trailingIcon: 'shrink-0',
    },
    variants: {
      fieldGroup: {
        horizontal:
          'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
        vertical:
          'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]',
      },
      color: {
        primary: '',
        secondary: '',
        success: '',
        info: '',
        warning: '',
        error: '',
        neutral: '',
      },
      variant: { solid: '', outline: '', soft: '', subtle: '' },
      size: {
        xs: {
          base: 'text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm',
          leadingIcon: 'size-3',
          leadingAvatarSize: '3xs',
          trailingIcon: 'size-3',
        },
        sm: {
          base: 'text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm',
          leadingIcon: 'size-3',
          leadingAvatarSize: '3xs',
          trailingIcon: 'size-3',
        },
        md: {
          base: 'text-xs px-2 py-1 gap-1 rounded-md',
          leadingIcon: 'size-4',
          leadingAvatarSize: '3xs',
          trailingIcon: 'size-4',
        },
        lg: {
          base: 'text-sm px-2 py-1 gap-1.5 rounded-md',
          leadingIcon: 'size-5',
          leadingAvatarSize: '2xs',
          trailingIcon: 'size-5',
        },
        xl: {
          base: 'text-base px-2.5 py-1 gap-1.5 rounded-md',
          leadingIcon: 'size-6',
          leadingAvatarSize: '2xs',
          trailingIcon: 'size-6',
        },
      },
      square: { true: '' },
    },
    compoundVariants: [
      { color: 'primary', variant: 'solid', class: 'bg-primary text-inverted' },
      {
        color: 'secondary',
        variant: 'solid',
        class: 'bg-secondary text-inverted',
      },
      { color: 'success', variant: 'solid', class: 'bg-success text-inverted' },
      { color: 'info', variant: 'solid', class: 'bg-info text-inverted' },
      { color: 'warning', variant: 'solid', class: 'bg-warning text-inverted' },
      { color: 'error', variant: 'solid', class: 'bg-error text-inverted' },
      {
        color: 'primary',
        variant: 'outline',
        class: 'text-primary ring ring-inset ring-primary/50',
      },
      {
        color: 'secondary',
        variant: 'outline',
        class: 'text-secondary ring ring-inset ring-secondary/50',
      },
      {
        color: 'success',
        variant: 'outline',
        class: 'text-success ring ring-inset ring-success/50',
      },
      {
        color: 'info',
        variant: 'outline',
        class: 'text-info ring ring-inset ring-info/50',
      },
      {
        color: 'warning',
        variant: 'outline',
        class: 'text-warning ring ring-inset ring-warning/50',
      },
      {
        color: 'error',
        variant: 'outline',
        class: 'text-error ring ring-inset ring-error/50',
      },
      {
        color: 'primary',
        variant: 'soft',
        class: 'bg-primary/10 text-primary',
      },
      {
        color: 'secondary',
        variant: 'soft',
        class: 'bg-secondary/10 text-secondary',
      },
      {
        color: 'success',
        variant: 'soft',
        class: 'bg-success/10 text-success',
      },
      { color: 'info', variant: 'soft', class: 'bg-info/10 text-info' },
      {
        color: 'warning',
        variant: 'soft',
        class: 'bg-warning/10 text-warning',
      },
      { color: 'error', variant: 'soft', class: 'bg-error/10 text-error' },
      {
        color: 'primary',
        variant: 'subtle',
        class: 'bg-primary/10 text-primary ring ring-inset ring-primary/25',
      },
      {
        color: 'secondary',
        variant: 'subtle',
        class:
          'bg-secondary/10 text-secondary ring ring-inset ring-secondary/25',
      },
      {
        color: 'success',
        variant: 'subtle',
        class: 'bg-success/10 text-success ring ring-inset ring-success/25',
      },
      {
        color: 'info',
        variant: 'subtle',
        class: 'bg-info/10 text-info ring ring-inset ring-info/25',
      },
      {
        color: 'warning',
        variant: 'subtle',
        class: 'bg-warning/10 text-warning ring ring-inset ring-warning/25',
      },
      {
        color: 'error',
        variant: 'subtle',
        class: 'bg-error/10 text-error ring ring-inset ring-error/25',
      },
      {
        color: 'neutral',
        variant: 'solid',
        class: 'text-inverted bg-inverted',
      },
      {
        color: 'neutral',
        variant: 'outline',
        class: 'ring ring-inset ring-accented text-default bg-default',
      },
      { color: 'neutral', variant: 'soft', class: 'text-default bg-elevated' },
      {
        color: 'neutral',
        variant: 'subtle',
        class: 'ring ring-inset ring-accented text-default bg-elevated',
      },
      { size: 'xs', square: !0, class: 'p-0.5' },
      { size: 'sm', square: !0, class: 'p-1' },
      { size: 'md', square: !0, class: 'p-1' },
      { size: 'lg', square: !0, class: 'p-1' },
      { size: 'xl', square: !0, class: 'p-1' },
    ],
    defaultVariants: { color: 'primary', variant: 'solid', size: 'md' },
  },
  kL = {
    __name: 'UBadge',
    props: {
      as: { type: null, required: !1, default: 'span' },
      label: { type: [String, Number], required: !1 },
      color: { type: null, required: !1 },
      variant: { type: null, required: !1 },
      size: { type: null, required: !1 },
      square: { type: Boolean, required: !1 },
      class: { type: null, required: !1 },
      ui: { type: null, required: !1 },
      icon: { type: [String, Object], required: !1 },
      avatar: { type: Object, required: !1 },
      leading: { type: Boolean, required: !1 },
      leadingIcon: { type: [String, Object], required: !1 },
      trailing: { type: Boolean, required: !1 },
      trailingIcon: { type: [String, Object], required: !1 },
    },
    setup(e) {
      const t = e,
        n = un(),
        r = Je(),
        { orientation: o, size: s } = nv(t),
        {
          isLeading: i,
          isTrailing: a,
          leadingIconName: l,
          trailingIconName: u,
        } = tv(t),
        c = S(() =>
          Ie({ extend: Ie(xL), ...(r.ui?.badge || {}) })({
            color: t.color,
            variant: t.variant,
            size: s.value || t.size,
            square: t.square || (!n.default && !t.label),
            fieldGroup: o.value,
          })
        );
      return (f, d) => (
        T(),
        L(
          y(_e),
          {
            as: e.as,
            class: re(c.value.base({ class: [t.ui?.base, t.class] })),
          },
          {
            default: O(() => [
              B(f.$slots, 'leading', { ui: c.value }, () => [
                y(i) && y(l)
                  ? (T(),
                    L(
                      qt,
                      {
                        key: 0,
                        name: y(l),
                        class: re(
                          c.value.leadingIcon({ class: t.ui?.leadingIcon })
                        ),
                      },
                      null,
                      8,
                      ['name', 'class']
                    ))
                  : e.avatar
                  ? (T(),
                    L(
                      sa,
                      te(
                        {
                          key: 1,
                          size:
                            t.ui?.leadingAvatarSize ||
                            c.value.leadingAvatarSize(),
                        },
                        e.avatar,
                        {
                          class: c.value.leadingAvatar({
                            class: t.ui?.leadingAvatar,
                          }),
                        }
                      ),
                      null,
                      16,
                      ['size', 'class']
                    ))
                  : fe('', !0),
              ]),
              B(f.$slots, 'default', { ui: c.value }, () => [
                e.label !== void 0 && e.label !== null
                  ? (T(),
                    ge(
                      'span',
                      {
                        key: 0,
                        class: re(c.value.label({ class: t.ui?.label })),
                      },
                      et(e.label),
                      3
                    ))
                  : fe('', !0),
              ]),
              B(f.$slots, 'trailing', { ui: c.value }, () => [
                y(a) && y(u)
                  ? (T(),
                    L(
                      qt,
                      {
                        key: 0,
                        name: y(u),
                        class: re(
                          c.value.trailingIcon({ class: t.ui?.trailingIcon })
                        ),
                      },
                      null,
                      8,
                      ['name', 'class']
                    ))
                  : fe('', !0),
              ]),
            ]),
            _: 3,
          },
          8,
          ['as', 'class']
        )
      );
    },
  },
  CL = { Root: hS, Trigger: kS, Portal: wS, Content: bS, Arrow: fS },
  EL = {
    Root: WT,
    Trigger: cS,
    Portal: aS,
    Content: sS,
    Arrow: XT,
    Close: QT,
    Anchor: GT,
  },
  PL = {
    slots: {
      content:
        'bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto',
      arrow: 'fill-default',
    },
  },
  TL = {
    __name: 'UPopover',
    props: {
      mode: { type: null, required: !1, default: 'click' },
      content: { type: Object, required: !1 },
      arrow: { type: [Boolean, Object], required: !1 },
      portal: {
        type: [Boolean, String],
        required: !1,
        skipCheck: !0,
        default: !0,
      },
      reference: { type: null, required: !1 },
      dismissible: { type: Boolean, required: !1, default: !0 },
      class: { type: null, required: !1 },
      ui: { type: null, required: !1 },
      defaultOpen: { type: Boolean, required: !1 },
      open: { type: Boolean, required: !1 },
      modal: { type: Boolean, required: !1 },
      openDelay: { type: Number, required: !1, default: 0 },
      closeDelay: { type: Number, required: !1, default: 0 },
    },
    emits: ['close:prevent', 'update:open'],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = un(),
        s = Je(),
        i =
          n.mode === 'hover'
            ? _n(n, 'defaultOpen', 'open', 'openDelay', 'closeDelay')
            : _n(n, 'defaultOpen', 'open', 'modal'),
        a = Gt(i, r),
        l = Qc(ot(() => n.portal)),
        u = ot(() =>
          Mt(n.content, { side: 'bottom', sideOffset: 8, collisionPadding: 8 })
        ),
        c = S(() =>
          n.dismissible
            ? {}
            : ['pointerDownOutside', 'interactOutside', 'escapeKeyDown'].reduce(
                (g, _) => (
                  (g[_] = (x) => {
                    x.preventDefault(), r('close:prevent');
                  }),
                  g
                ),
                {}
              )
        ),
        f = ot(() => n.arrow),
        d = S(() =>
          Ie({ extend: Ie(PL), ...(s.ui?.popover || {}) })({
            side: u.value.side,
          })
        ),
        p = S(() => (n.mode === 'hover' ? CL : EL));
      return (h, g) => (
        T(),
        L(
          y(p).Root,
          tt(ut(y(a))),
          {
            default: O(({ open: _, close: x }) => [
              o.default || e.reference
                ? (T(),
                  L(
                    y(p).Trigger,
                    {
                      key: 0,
                      'as-child': '',
                      reference: e.reference,
                      class: re(n.class),
                    },
                    {
                      default: O(() => [B(h.$slots, 'default', { open: _ })]),
                      _: 2,
                    },
                    1032,
                    ['reference', 'class']
                  ))
                : fe('', !0),
              'Anchor' in p.value && o.anchor
                ? (T(),
                  L(
                    y(p).Anchor,
                    { key: 1, 'as-child': '' },
                    {
                      default: O(() => [
                        B(h.$slots, 'anchor', tt(ut(x ? { close: x } : {}))),
                      ]),
                      _: 2,
                    },
                    1024
                  ))
                : fe('', !0),
              z(
                y(p).Portal,
                tt(ut(y(l))),
                {
                  default: O(() => [
                    z(
                      y(p).Content,
                      te(
                        u.value,
                        {
                          class: d.value.content({
                            class: [!o.default && n.class, n.ui?.content],
                          }),
                        },
                        Rp(c.value)
                      ),
                      {
                        default: O(() => [
                          B(h.$slots, 'content', tt(ut(x ? { close: x } : {}))),
                          e.arrow
                            ? (T(),
                              L(
                                y(p).Arrow,
                                te({ key: 0 }, f.value, {
                                  class: d.value.arrow({ class: n.ui?.arrow }),
                                }),
                                null,
                                16,
                                ['class']
                              ))
                            : fe('', !0),
                        ]),
                        _: 2,
                      },
                      1040,
                      ['class']
                    ),
                  ]),
                  _: 2,
                },
                1040
              ),
            ]),
            _: 3,
          },
          16
        )
      );
    },
  },
  Os = {
    meta: '',
    ctrl: '',
    alt: '',
    win: '⊞',
    command: '⌘',
    shift: '⇧',
    control: '⌃',
    option: '⌥',
    enter: '↵',
    delete: '⌦',
    backspace: '⌫',
    escape: 'Esc',
    tab: '⇥',
    capslock: '⇪',
    arrowup: '↑',
    arrowright: '→',
    arrowdown: '↓',
    arrowleft: '←',
    pageup: '⇞',
    pagedown: '⇟',
    home: '↖',
    end: '↘',
  },
  SL = () => {
    const e = S(
        () =>
          navigator &&
          navigator.userAgent &&
          navigator.userAgent.match(/Macintosh;/)
      ),
      t = dt({ meta: ' ', alt: ' ', ctrl: ' ' });
    Ye(() => {
      (t.meta = e.value ? Os.command : 'Ctrl'),
        (t.ctrl = e.value ? Os.control : 'Ctrl'),
        (t.alt = e.value ? Os.option : 'Alt');
    });
    function n(r) {
      if (r) return ['meta', 'alt', 'ctrl'].includes(r) ? t[r] : Os[r] || r;
    }
    return { macOS: e, getKbdKey: n };
  },
  AL = Yc(SL),
  OL = {
    base: 'inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans uppercase',
    variants: {
      color: {
        primary: '',
        secondary: '',
        success: '',
        info: '',
        warning: '',
        error: '',
        neutral: '',
      },
      variant: { solid: '', outline: '', soft: '', subtle: '' },
      size: {
        sm: 'h-4 min-w-[16px] text-[10px]',
        md: 'h-5 min-w-[20px] text-[11px]',
        lg: 'h-6 min-w-[24px] text-[12px]',
      },
    },
    compoundVariants: [
      { color: 'primary', variant: 'solid', class: 'text-inverted bg-primary' },
      {
        color: 'secondary',
        variant: 'solid',
        class: 'text-inverted bg-secondary',
      },
      { color: 'success', variant: 'solid', class: 'text-inverted bg-success' },
      { color: 'info', variant: 'solid', class: 'text-inverted bg-info' },
      { color: 'warning', variant: 'solid', class: 'text-inverted bg-warning' },
      { color: 'error', variant: 'solid', class: 'text-inverted bg-error' },
      {
        color: 'primary',
        variant: 'outline',
        class: 'ring ring-inset ring-primary/50 text-primary',
      },
      {
        color: 'secondary',
        variant: 'outline',
        class: 'ring ring-inset ring-secondary/50 text-secondary',
      },
      {
        color: 'success',
        variant: 'outline',
        class: 'ring ring-inset ring-success/50 text-success',
      },
      {
        color: 'info',
        variant: 'outline',
        class: 'ring ring-inset ring-info/50 text-info',
      },
      {
        color: 'warning',
        variant: 'outline',
        class: 'ring ring-inset ring-warning/50 text-warning',
      },
      {
        color: 'error',
        variant: 'outline',
        class: 'ring ring-inset ring-error/50 text-error',
      },
      {
        color: 'primary',
        variant: 'soft',
        class: 'text-primary bg-primary/10',
      },
      {
        color: 'secondary',
        variant: 'soft',
        class: 'text-secondary bg-secondary/10',
      },
      {
        color: 'success',
        variant: 'soft',
        class: 'text-success bg-success/10',
      },
      { color: 'info', variant: 'soft', class: 'text-info bg-info/10' },
      {
        color: 'warning',
        variant: 'soft',
        class: 'text-warning bg-warning/10',
      },
      { color: 'error', variant: 'soft', class: 'text-error bg-error/10' },
      {
        color: 'primary',
        variant: 'subtle',
        class: 'text-primary ring ring-inset ring-primary/25 bg-primary/10',
      },
      {
        color: 'secondary',
        variant: 'subtle',
        class:
          'text-secondary ring ring-inset ring-secondary/25 bg-secondary/10',
      },
      {
        color: 'success',
        variant: 'subtle',
        class: 'text-success ring ring-inset ring-success/25 bg-success/10',
      },
      {
        color: 'info',
        variant: 'subtle',
        class: 'text-info ring ring-inset ring-info/25 bg-info/10',
      },
      {
        color: 'warning',
        variant: 'subtle',
        class: 'text-warning ring ring-inset ring-warning/25 bg-warning/10',
      },
      {
        color: 'error',
        variant: 'subtle',
        class: 'text-error ring ring-inset ring-error/25 bg-error/10',
      },
      {
        color: 'neutral',
        variant: 'solid',
        class: 'text-inverted bg-inverted',
      },
      {
        color: 'neutral',
        variant: 'outline',
        class: 'ring ring-inset ring-accented text-default bg-default',
      },
      { color: 'neutral', variant: 'soft', class: 'text-default bg-elevated' },
      {
        color: 'neutral',
        variant: 'subtle',
        class: 'ring ring-inset ring-accented text-default bg-elevated',
      },
    ],
    defaultVariants: { variant: 'outline', color: 'neutral', size: 'md' },
  },
  RL = {
    __name: 'UKbd',
    props: {
      as: { type: null, required: !1, default: 'kbd' },
      value: { type: null, required: !1 },
      color: { type: null, required: !1 },
      variant: { type: null, required: !1 },
      size: { type: null, required: !1 },
      class: { type: null, required: !1 },
    },
    setup(e) {
      const t = e,
        { getKbdKey: n } = AL(),
        r = Je(),
        o = S(() => Ie({ extend: Ie(OL), ...(r.ui?.kbd || {}) }));
      return (s, i) => (
        T(),
        L(
          y(_e),
          {
            as: e.as,
            class: re(
              o.value({
                class: t.class,
                color: t.color,
                variant: t.variant,
                size: t.size,
              })
            ),
          },
          {
            default: O(() => [
              B(s.$slots, 'default', {}, () => [ft(et(y(n)(e.value)), 1)]),
            ]),
            _: 3,
          },
          8,
          ['as', 'class']
        )
      );
    },
  },
  IL = {
    slots: {
      content:
        'flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto',
      arrow: 'fill-default',
      text: 'truncate',
      kbds: "hidden lg:inline-flex items-center shrink-0 gap-0.5 not-first-of-type:before:content-['·'] not-first-of-type:before:me-0.5",
      kbdsSize: 'sm',
    },
  },
  LL = {
    __name: 'UTooltip',
    props: {
      text: { type: String, required: !1 },
      kbds: { type: Array, required: !1 },
      content: { type: Object, required: !1 },
      arrow: { type: [Boolean, Object], required: !1 },
      portal: {
        type: [Boolean, String],
        required: !1,
        skipCheck: !0,
        default: !0,
      },
      reference: { type: null, required: !1 },
      class: { type: null, required: !1 },
      ui: { type: null, required: !1 },
      defaultOpen: { type: Boolean, required: !1 },
      open: { type: Boolean, required: !1 },
      delayDuration: { type: Number, required: !1 },
      disableHoverableContent: { type: Boolean, required: !1 },
      disableClosingTrigger: { type: Boolean, required: !1 },
      disabled: { type: Boolean, required: !1 },
      ignoreNonKeyboardFocus: { type: Boolean, required: !1 },
    },
    emits: ['update:open'],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = un(),
        s = Je(),
        i = Gt(
          _n(
            n,
            'defaultOpen',
            'open',
            'delayDuration',
            'disableHoverableContent',
            'disableClosingTrigger',
            'ignoreNonKeyboardFocus'
          ),
          r
        ),
        a = Qc(ot(() => n.portal)),
        l = ot(() =>
          Mt(n.content, { side: 'bottom', sideOffset: 8, collisionPadding: 8 })
        ),
        u = ot(() => n.arrow),
        c = S(() =>
          Ie({ extend: Ie(IL), ...(s.ui?.tooltip || {}) })({
            side: l.value.side,
          })
        );
      return (f, d) => (
        T(),
        L(
          y(qA),
          te(y(i), {
            disabled: !(e.text || e.kbds?.length || o.content) || n.disabled,
          }),
          {
            default: O(({ open: p }) => [
              o.default || e.reference
                ? (T(),
                  L(
                    y(HA),
                    te({ key: 0 }, f.$attrs, {
                      'as-child': '',
                      reference: e.reference,
                      class: n.class,
                    }),
                    {
                      default: O(() => [B(f.$slots, 'default', { open: p })]),
                      _: 2,
                    },
                    1040,
                    ['reference', 'class']
                  ))
                : fe('', !0),
              z(
                y(FA),
                tt(ut(y(a))),
                {
                  default: O(() => [
                    z(
                      y(VA),
                      te(l.value, {
                        class: c.value.content({
                          class: [!o.default && n.class, n.ui?.content],
                        }),
                      }),
                      {
                        default: O(() => [
                          B(f.$slots, 'content', { ui: c.value }, () => [
                            e.text
                              ? (T(),
                                ge(
                                  'span',
                                  {
                                    key: 0,
                                    class: re(
                                      c.value.text({ class: n.ui?.text })
                                    ),
                                  },
                                  et(e.text),
                                  3
                                ))
                              : fe('', !0),
                            e.kbds?.length
                              ? (T(),
                                ge(
                                  'span',
                                  {
                                    key: 1,
                                    class: re(
                                      c.value.kbds({ class: n.ui?.kbds })
                                    ),
                                  },
                                  [
                                    (T(!0),
                                    ge(
                                      Te,
                                      null,
                                      Ht(
                                        e.kbds,
                                        (h, g) => (
                                          T(),
                                          L(
                                            RL,
                                            te(
                                              {
                                                key: g,
                                                size:
                                                  n.ui?.kbdsSize ||
                                                  c.value.kbdsSize(),
                                              },
                                              { ref_for: !0 },
                                              typeof h == 'string'
                                                ? { value: h }
                                                : h
                                            ),
                                            null,
                                            16,
                                            ['size']
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ],
                                  2
                                ))
                              : fe('', !0),
                          ]),
                          e.arrow
                            ? (T(),
                              L(
                                y(AA),
                                te({ key: 0 }, u.value, {
                                  class: c.value.arrow({ class: n.ui?.arrow }),
                                }),
                                null,
                                16,
                                ['class']
                              ))
                            : fe('', !0),
                        ]),
                        _: 3,
                      },
                      16,
                      ['class']
                    ),
                  ]),
                  _: 3,
                },
                16
              ),
            ]),
            _: 3,
          },
          16,
          ['disabled']
        )
      );
    },
  },
  DL = {
    slots: {
      root: 'relative flex gap-1.5 [&>div]:min-w-0',
      list: 'isolate min-w-0',
      label:
        'w-full flex items-center gap-1.5 font-semibold text-xs/5 text-highlighted px-2.5 py-1.5',
      item: 'min-w-0',
      link: 'group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',
      linkLeadingIcon: 'shrink-0 size-5',
      linkLeadingAvatar: 'shrink-0',
      linkLeadingAvatarSize: '2xs',
      linkTrailing: 'group ms-auto inline-flex gap-1.5 items-center',
      linkTrailingBadge: 'shrink-0',
      linkTrailingBadgeSize: 'sm',
      linkTrailingIcon:
        'size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200',
      linkLabel: 'truncate',
      linkLabelExternalIcon: 'inline-block size-3 align-top text-dimmed',
      childList: 'isolate',
      childLabel: 'text-xs text-highlighted',
      childItem: '',
      childLink:
        'group relative size-full flex items-start text-start text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',
      childLinkWrapper: 'min-w-0',
      childLinkIcon: 'size-5 shrink-0',
      childLinkLabel: 'truncate',
      childLinkLabelExternalIcon: 'inline-block size-3 align-top text-dimmed',
      childLinkDescription: 'text-muted',
      separator: 'px-2 h-px bg-border',
      viewportWrapper: 'absolute top-full left-0 flex w-full',
      viewport:
        'relative overflow-hidden bg-default shadow-lg rounded-md ring ring-default h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] z-[1]',
      content: '',
      indicator:
        'absolute data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[2] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200',
      arrow:
        'relative top-[50%] size-2.5 rotate-45 border border-default bg-default z-[1] rounded-xs',
    },
    variants: {
      color: {
        primary: {
          link: 'focus-visible:before:ring-primary',
          childLink: 'focus-visible:before:ring-primary',
        },
        secondary: {
          link: 'focus-visible:before:ring-secondary',
          childLink: 'focus-visible:before:ring-secondary',
        },
        success: {
          link: 'focus-visible:before:ring-success',
          childLink: 'focus-visible:before:ring-success',
        },
        info: {
          link: 'focus-visible:before:ring-info',
          childLink: 'focus-visible:before:ring-info',
        },
        warning: {
          link: 'focus-visible:before:ring-warning',
          childLink: 'focus-visible:before:ring-warning',
        },
        error: {
          link: 'focus-visible:before:ring-error',
          childLink: 'focus-visible:before:ring-error',
        },
        neutral: {
          link: 'focus-visible:before:ring-inverted',
          childLink: 'focus-visible:before:ring-inverted',
        },
      },
      highlightColor: {
        primary: '',
        secondary: '',
        success: '',
        info: '',
        warning: '',
        error: '',
        neutral: '',
      },
      variant: { pill: '', link: '' },
      orientation: {
        horizontal: {
          root: 'items-center justify-between',
          list: 'flex items-center',
          item: 'py-2',
          link: 'px-2.5 py-1.5 before:inset-x-px before:inset-y-0',
          childList: 'grid p-2',
          childLink: 'px-3 py-2 gap-2 before:inset-x-px before:inset-y-0',
          childLinkLabel: 'font-medium',
          content: 'absolute top-0 left-0 w-full max-h-[70vh] overflow-y-auto',
        },
        vertical: {
          root: 'flex-col',
          link: 'flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0',
          childLabel: 'px-1.5 py-0.5',
          childLink: 'p-1.5 gap-1.5 before:inset-y-px before:inset-x-0',
        },
      },
      contentOrientation: {
        horizontal: {
          viewportWrapper: 'justify-center',
          content:
            'data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]',
        },
        vertical: {
          viewport:
            'sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left)',
        },
      },
      active: {
        true: {
          childLink: 'before:bg-elevated text-highlighted',
          childLinkIcon: 'text-default',
        },
        false: {
          link: 'text-muted',
          linkLeadingIcon: 'text-dimmed',
          childLink: [
            'hover:before:bg-elevated/50 text-default hover:text-highlighted',
            'transition-colors before:transition-colors',
          ],
          childLinkIcon: [
            'text-dimmed group-hover:text-default',
            'transition-colors',
          ],
        },
      },
      disabled: { true: { link: 'cursor-not-allowed opacity-75' } },
      highlight: { true: '' },
      level: { true: '' },
      collapsed: { true: '' },
    },
    compoundVariants: [
      {
        orientation: 'horizontal',
        contentOrientation: 'horizontal',
        class: { childList: 'grid-cols-2 gap-2' },
      },
      {
        orientation: 'horizontal',
        contentOrientation: 'vertical',
        class: { childList: 'gap-1', content: 'w-60' },
      },
      {
        orientation: 'vertical',
        collapsed: !1,
        class: {
          childList: 'ms-5 border-s border-default',
          childItem: 'ps-1.5 -ms-px',
          content:
            'data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden',
        },
      },
      {
        orientation: 'vertical',
        collapsed: !0,
        class: { link: 'px-1.5', content: 'shadow-sm rounded-sm min-h-6 p-1' },
      },
      {
        orientation: 'horizontal',
        highlight: !0,
        class: {
          link: [
            'after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full',
            'after:transition-colors',
          ],
        },
      },
      {
        orientation: 'vertical',
        highlight: !0,
        level: !0,
        class: {
          link: [
            'after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full',
            'after:transition-colors',
          ],
        },
      },
      {
        disabled: !1,
        active: !1,
        variant: 'pill',
        class: {
          link: [
            'hover:text-highlighted hover:before:bg-elevated/50',
            'transition-colors before:transition-colors',
          ],
          linkLeadingIcon: ['group-hover:text-default', 'transition-colors'],
        },
      },
      {
        disabled: !1,
        active: !1,
        variant: 'pill',
        orientation: 'horizontal',
        class: {
          link: 'data-[state=open]:text-highlighted',
          linkLeadingIcon: 'group-data-[state=open]:text-default',
        },
      },
      {
        disabled: !1,
        variant: 'pill',
        highlight: !0,
        orientation: 'horizontal',
        class: { link: 'data-[state=open]:before:bg-elevated/50' },
      },
      {
        disabled: !1,
        variant: 'pill',
        highlight: !1,
        active: !1,
        orientation: 'horizontal',
        class: { link: 'data-[state=open]:before:bg-elevated/50' },
      },
      {
        color: 'primary',
        variant: 'pill',
        active: !0,
        class: {
          link: 'text-primary',
          linkLeadingIcon: 'text-primary group-data-[state=open]:text-primary',
        },
      },
      {
        color: 'secondary',
        variant: 'pill',
        active: !0,
        class: {
          link: 'text-secondary',
          linkLeadingIcon:
            'text-secondary group-data-[state=open]:text-secondary',
        },
      },
      {
        color: 'success',
        variant: 'pill',
        active: !0,
        class: {
          link: 'text-success',
          linkLeadingIcon: 'text-success group-data-[state=open]:text-success',
        },
      },
      {
        color: 'info',
        variant: 'pill',
        active: !0,
        class: {
          link: 'text-info',
          linkLeadingIcon: 'text-info group-data-[state=open]:text-info',
        },
      },
      {
        color: 'warning',
        variant: 'pill',
        active: !0,
        class: {
          link: 'text-warning',
          linkLeadingIcon: 'text-warning group-data-[state=open]:text-warning',
        },
      },
      {
        color: 'error',
        variant: 'pill',
        active: !0,
        class: {
          link: 'text-error',
          linkLeadingIcon: 'text-error group-data-[state=open]:text-error',
        },
      },
      {
        color: 'neutral',
        variant: 'pill',
        active: !0,
        class: {
          link: 'text-highlighted',
          linkLeadingIcon:
            'text-highlighted group-data-[state=open]:text-highlighted',
        },
      },
      {
        variant: 'pill',
        active: !0,
        highlight: !1,
        class: { link: 'before:bg-elevated' },
      },
      {
        variant: 'pill',
        active: !0,
        highlight: !0,
        disabled: !1,
        class: {
          link: ['hover:before:bg-elevated/50', 'before:transition-colors'],
        },
      },
      {
        disabled: !1,
        active: !1,
        variant: 'link',
        class: {
          link: ['hover:text-highlighted', 'transition-colors'],
          linkLeadingIcon: ['group-hover:text-default', 'transition-colors'],
        },
      },
      {
        disabled: !1,
        active: !1,
        variant: 'link',
        orientation: 'horizontal',
        class: {
          link: 'data-[state=open]:text-highlighted',
          linkLeadingIcon: 'group-data-[state=open]:text-default',
        },
      },
      {
        color: 'primary',
        variant: 'link',
        active: !0,
        class: {
          link: 'text-primary',
          linkLeadingIcon: 'text-primary group-data-[state=open]:text-primary',
        },
      },
      {
        color: 'secondary',
        variant: 'link',
        active: !0,
        class: {
          link: 'text-secondary',
          linkLeadingIcon:
            'text-secondary group-data-[state=open]:text-secondary',
        },
      },
      {
        color: 'success',
        variant: 'link',
        active: !0,
        class: {
          link: 'text-success',
          linkLeadingIcon: 'text-success group-data-[state=open]:text-success',
        },
      },
      {
        color: 'info',
        variant: 'link',
        active: !0,
        class: {
          link: 'text-info',
          linkLeadingIcon: 'text-info group-data-[state=open]:text-info',
        },
      },
      {
        color: 'warning',
        variant: 'link',
        active: !0,
        class: {
          link: 'text-warning',
          linkLeadingIcon: 'text-warning group-data-[state=open]:text-warning',
        },
      },
      {
        color: 'error',
        variant: 'link',
        active: !0,
        class: {
          link: 'text-error',
          linkLeadingIcon: 'text-error group-data-[state=open]:text-error',
        },
      },
      {
        color: 'neutral',
        variant: 'link',
        active: !0,
        class: {
          link: 'text-highlighted',
          linkLeadingIcon:
            'text-highlighted group-data-[state=open]:text-highlighted',
        },
      },
      {
        highlightColor: 'primary',
        highlight: !0,
        level: !0,
        active: !0,
        class: { link: 'after:bg-primary' },
      },
      {
        highlightColor: 'secondary',
        highlight: !0,
        level: !0,
        active: !0,
        class: { link: 'after:bg-secondary' },
      },
      {
        highlightColor: 'success',
        highlight: !0,
        level: !0,
        active: !0,
        class: { link: 'after:bg-success' },
      },
      {
        highlightColor: 'info',
        highlight: !0,
        level: !0,
        active: !0,
        class: { link: 'after:bg-info' },
      },
      {
        highlightColor: 'warning',
        highlight: !0,
        level: !0,
        active: !0,
        class: { link: 'after:bg-warning' },
      },
      {
        highlightColor: 'error',
        highlight: !0,
        level: !0,
        active: !0,
        class: { link: 'after:bg-error' },
      },
      {
        highlightColor: 'neutral',
        highlight: !0,
        level: !0,
        active: !0,
        class: { link: 'after:bg-inverted' },
      },
    ],
    defaultVariants: {
      color: 'primary',
      highlightColor: 'primary',
      variant: 'pill',
    },
  },
  qL = Object.assign(
    { inheritAttrs: !1 },
    {
      __name: 'UNavigationMenu',
      props: {
        as: { type: null, required: !1 },
        trailingIcon: { type: [String, Object], required: !1 },
        externalIcon: {
          type: [Boolean, String, Object],
          required: !1,
          default: !0,
        },
        items: { type: null, required: !1 },
        color: { type: null, required: !1 },
        variant: { type: null, required: !1 },
        orientation: { type: null, required: !1, default: 'horizontal' },
        collapsed: { type: Boolean, required: !1 },
        tooltip: { type: [Boolean, Object], required: !1 },
        popover: { type: [Boolean, Object], required: !1 },
        highlight: { type: Boolean, required: !1 },
        highlightColor: { type: null, required: !1 },
        content: { type: Object, required: !1 },
        contentOrientation: { type: null, required: !1, default: 'horizontal' },
        arrow: { type: Boolean, required: !1 },
        labelKey: { type: null, required: !1, default: 'label' },
        class: { type: null, required: !1 },
        ui: { type: null, required: !1 },
        modelValue: { type: String, required: !1 },
        defaultValue: { type: String, required: !1 },
        delayDuration: { type: Number, required: !1, default: 0 },
        disableClickTrigger: { type: Boolean, required: !1 },
        disableHoverTrigger: { type: Boolean, required: !1 },
        skipDelayDuration: { type: Number, required: !1 },
        disablePointerLeaveClose: { type: Boolean, required: !1 },
        unmountOnHide: { type: Boolean, required: !1, default: !0 },
        disabled: { type: Boolean, required: !1 },
        type: { type: String, required: !1, default: 'multiple' },
        collapsible: { type: Boolean, required: !1, default: !0 },
      },
      emits: ['update:modelValue'],
      setup(e, { emit: t }) {
        const n = e,
          r = t,
          o = un(),
          s = Je(),
          i = Gt(
            S(() => ({
              as: n.as,
              modelValue: n.modelValue,
              defaultValue: n.defaultValue,
              delayDuration: n.delayDuration,
              skipDelayDuration: n.skipDelayDuration,
              orientation: n.orientation,
              disableClickTrigger: n.disableClickTrigger,
              disableHoverTrigger: n.disableHoverTrigger,
              disablePointerLeaveClose: n.disablePointerLeaveClose,
              unmountOnHide: n.unmountOnHide,
            })),
            r
          ),
          a = Gt(_n(n, 'collapsible', 'disabled', 'type', 'unmountOnHide'), r),
          l = ot(() => n.content),
          u = ot(() =>
            Mt(typeof n.tooltip == 'boolean' ? {} : n.tooltip, {
              delayDuration: 0,
              content: { side: 'right' },
            })
          ),
          c = ot(() =>
            Mt(typeof n.popover == 'boolean' ? {} : n.popover, {
              mode: 'hover',
              content: { side: 'right', align: 'start', alignOffset: 2 },
            })
          ),
          [f, d] = bd(),
          [p, h] = bd({
            props: { item: Object, index: Number, level: Number },
          }),
          g = S(() =>
            Ie({ extend: Ie(DL), ...(s.ui?.navigationMenu || {}) })({
              orientation: n.orientation,
              contentOrientation:
                n.orientation === 'vertical' ? void 0 : n.contentOrientation,
              collapsed: n.collapsed,
              color: n.color,
              variant: n.variant,
              highlight: n.highlight,
              highlightColor: n.highlightColor || n.color,
            })
          ),
          _ = S(() =>
            n.items?.length ? (_R(n.items) ? n.items : [n.items]) : []
          );
        function x(b, v = 0) {
          const m = b.reduce(
            (w, C, E) => (
              (C.defaultOpen || C.open) &&
                w.push(C.value || (v > 0 ? `item-${v}-${E}` : `item-${E}`)),
              w
            ),
            []
          );
          return n.type === 'single' ? m[0] : m;
        }
        return (b, v) => (
          T(),
          ge(
            Te,
            null,
            [
              z(y(f), null, {
                default: O(({ item: m, active: w, index: C }) => [
                  B(
                    b.$slots,
                    m.slot || 'item',
                    { item: m, index: C, active: w, ui: g.value },
                    () => [
                      B(
                        b.$slots,
                        m.slot ? `${m.slot}-leading` : 'item-leading',
                        { item: m, active: w, index: C, ui: g.value },
                        () => [
                          m.avatar
                            ? (T(),
                              L(
                                sa,
                                te(
                                  {
                                    key: 0,
                                    size:
                                      m.ui?.linkLeadingAvatarSize ||
                                      n.ui?.linkLeadingAvatarSize ||
                                      g.value.linkLeadingAvatarSize(),
                                  },
                                  m.avatar,
                                  {
                                    class: g.value.linkLeadingAvatar({
                                      class: [
                                        n.ui?.linkLeadingAvatar,
                                        m.ui?.linkLeadingAvatar,
                                      ],
                                      active: w,
                                      disabled: !!m.disabled,
                                    }),
                                  }
                                ),
                                null,
                                16,
                                ['size', 'class']
                              ))
                            : m.icon
                            ? (T(),
                              L(
                                qt,
                                {
                                  key: 1,
                                  name: m.icon,
                                  class: re(
                                    g.value.linkLeadingIcon({
                                      class: [
                                        n.ui?.linkLeadingIcon,
                                        m.ui?.linkLeadingIcon,
                                      ],
                                      active: w,
                                      disabled: !!m.disabled,
                                    })
                                  ),
                                },
                                null,
                                8,
                                ['name', 'class']
                              ))
                            : fe('', !0),
                        ]
                      ),
                      (!e.collapsed || e.orientation !== 'vertical') &&
                      (y(pr)(m, n.labelKey) ||
                        o[m.slot ? `${m.slot}-label` : 'item-label'])
                        ? (T(),
                          ge(
                            'span',
                            {
                              key: 0,
                              class: re(
                                g.value.linkLabel({
                                  class: [n.ui?.linkLabel, m.ui?.linkLabel],
                                })
                              ),
                            },
                            [
                              B(
                                b.$slots,
                                m.slot ? `${m.slot}-label` : 'item-label',
                                { item: m, active: w, index: C },
                                () => [ft(et(y(pr)(m, n.labelKey)), 1)]
                              ),
                              m.target === '_blank' && e.externalIcon !== !1
                                ? (T(),
                                  L(
                                    qt,
                                    {
                                      key: 0,
                                      name:
                                        typeof e.externalIcon == 'string'
                                          ? e.externalIcon
                                          : y(s).ui.icons.external,
                                      class: re(
                                        g.value.linkLabelExternalIcon({
                                          class: [
                                            n.ui?.linkLabelExternalIcon,
                                            m.ui?.linkLabelExternalIcon,
                                          ],
                                          active: w,
                                        })
                                      ),
                                    },
                                    null,
                                    8,
                                    ['name', 'class']
                                  ))
                                : fe('', !0),
                            ],
                            2
                          ))
                        : fe('', !0),
                      (!e.collapsed || e.orientation !== 'vertical') &&
                      (m.badge !== void 0 ||
                        (e.orientation === 'horizontal' &&
                          (m.children?.length ||
                            o[
                              m.slot ? `${m.slot}-content` : 'item-content'
                            ])) ||
                        (e.orientation === 'vertical' && m.children?.length) ||
                        m.trailingIcon ||
                        o[m.slot ? `${m.slot}-trailing` : 'item-trailing'])
                        ? (T(),
                          L(
                            Tt(
                              e.orientation === 'vertical' &&
                                m.children?.length &&
                                !e.collapsed
                                ? y(Kf)
                                : 'span'
                            ),
                            {
                              key: 1,
                              as: 'span',
                              class: re(
                                g.value.linkTrailing({
                                  class: [
                                    n.ui?.linkTrailing,
                                    m.ui?.linkTrailing,
                                  ],
                                })
                              ),
                              onClick:
                                v[0] ||
                                (v[0] = In(() => {}, ['stop', 'prevent'])),
                            },
                            {
                              default: O(() => [
                                B(
                                  b.$slots,
                                  m.slot
                                    ? `${m.slot}-trailing`
                                    : 'item-trailing',
                                  { item: m, active: w, index: C, ui: g.value },
                                  () => [
                                    m.badge !== void 0
                                      ? (T(),
                                        L(
                                          kL,
                                          te(
                                            {
                                              key: 0,
                                              color: 'neutral',
                                              variant: 'outline',
                                              size:
                                                m.ui?.linkTrailingBadgeSize ||
                                                n.ui?.linkTrailingBadgeSize ||
                                                g.value.linkTrailingBadgeSize(),
                                            },
                                            typeof m.badge == 'string' ||
                                              typeof m.badge == 'number'
                                              ? { label: m.badge }
                                              : m.badge,
                                            {
                                              class: g.value.linkTrailingBadge({
                                                class: [
                                                  n.ui?.linkTrailingBadge,
                                                  m.ui?.linkTrailingBadge,
                                                ],
                                              }),
                                            }
                                          ),
                                          null,
                                          16,
                                          ['size', 'class']
                                        ))
                                      : fe('', !0),
                                    (e.orientation === 'horizontal' &&
                                      (m.children?.length ||
                                        o[
                                          m.slot
                                            ? `${m.slot}-content`
                                            : 'item-content'
                                        ])) ||
                                    (e.orientation === 'vertical' &&
                                      m.children?.length)
                                      ? (T(),
                                        L(
                                          qt,
                                          {
                                            key: 1,
                                            name:
                                              m.trailingIcon ||
                                              e.trailingIcon ||
                                              y(s).ui.icons.chevronDown,
                                            class: re(
                                              g.value.linkTrailingIcon({
                                                class: [
                                                  n.ui?.linkTrailingIcon,
                                                  m.ui?.linkTrailingIcon,
                                                ],
                                                active: w,
                                              })
                                            ),
                                          },
                                          null,
                                          8,
                                          ['name', 'class']
                                        ))
                                      : m.trailingIcon
                                      ? (T(),
                                        L(
                                          qt,
                                          {
                                            key: 2,
                                            name: m.trailingIcon,
                                            class: re(
                                              g.value.linkTrailingIcon({
                                                class: [
                                                  n.ui?.linkTrailingIcon,
                                                  m.ui?.linkTrailingIcon,
                                                ],
                                                active: w,
                                              })
                                            ),
                                          },
                                          null,
                                          8,
                                          ['name', 'class']
                                        ))
                                      : fe('', !0),
                                  ]
                                ),
                              ]),
                              _: 2,
                            },
                            1032,
                            ['class']
                          ))
                        : fe('', !0),
                    ]
                  ),
                ]),
                _: 3,
              }),
              z(y(p), null, {
                default: O(({ item: m, index: w, level: C = 0 }) => [
                  (T(),
                  L(
                    Tt(
                      e.orientation === 'vertical' && !e.collapsed
                        ? y(iP)
                        : y(RS)
                    ),
                    {
                      as: 'li',
                      value:
                        m.value || (C > 0 ? `item-${C}-${w}` : `item-${w}`),
                    },
                    {
                      default: O(() => [
                        e.orientation === 'vertical' &&
                        m.type === 'label' &&
                        !e.collapsed
                          ? (T(),
                            ge(
                              'div',
                              {
                                key: 0,
                                class: re(
                                  g.value.label({
                                    class: [n.ui?.label, m.ui?.label, m.class],
                                  })
                                ),
                              },
                              [
                                z(y(d), { item: m, index: w }, null, 8, [
                                  'item',
                                  'index',
                                ]),
                              ],
                              2
                            ))
                          : m.type !== 'label'
                          ? (T(),
                            L(
                              Hs,
                              te(
                                { key: 1 },
                                e.orientation === 'vertical' &&
                                  m.children?.length &&
                                  !e.collapsed &&
                                  m.type === 'trigger'
                                  ? {}
                                  : y(zs)(m),
                                { custom: '' }
                              ),
                              {
                                default: O(({ active: E, ...A }) => [
                                  (T(),
                                  L(
                                    Tt(
                                      e.orientation === 'horizontal' &&
                                        (m.children?.length ||
                                          o[
                                            m.slot
                                              ? `${m.slot}-content`
                                              : 'item-content'
                                          ])
                                        ? y(zS)
                                        : e.orientation === 'vertical' &&
                                          m.children?.length &&
                                          !e.collapsed &&
                                          !A.href
                                        ? y(Kf)
                                        : y(qa)
                                    ),
                                    {
                                      'as-child': '',
                                      active: E || m.active,
                                      disabled: m.disabled,
                                      onSelect: m.onSelect,
                                    },
                                    {
                                      default: O(() => [
                                        e.orientation === 'vertical' &&
                                        e.collapsed &&
                                        m.children?.length &&
                                        (n.popover || m.popover)
                                          ? (T(),
                                            L(
                                              TL,
                                              te(
                                                { key: 0 },
                                                {
                                                  ...c.value,
                                                  ...(typeof m.popover ==
                                                  'boolean'
                                                    ? {}
                                                    : m.popover || {}),
                                                },
                                                {
                                                  ui: {
                                                    content: g.value.content({
                                                      class: [
                                                        n.ui?.content,
                                                        m.ui?.content,
                                                      ],
                                                    }),
                                                  },
                                                }
                                              ),
                                              {
                                                content: O(({ close: R }) => [
                                                  B(
                                                    b.$slots,
                                                    m.slot
                                                      ? `${m.slot}-content`
                                                      : 'item-content',
                                                    {
                                                      item: m,
                                                      active: E || m.active,
                                                      index: w,
                                                      ui: g.value,
                                                      close: R,
                                                    },
                                                    () => [
                                                      kt(
                                                        'ul',
                                                        {
                                                          class: re(
                                                            g.value.childList({
                                                              class: [
                                                                n.ui?.childList,
                                                                m.ui?.childList,
                                                              ],
                                                            })
                                                          ),
                                                        },
                                                        [
                                                          kt(
                                                            'li',
                                                            {
                                                              class: re(
                                                                g.value.childLabel(
                                                                  {
                                                                    class: [
                                                                      n.ui
                                                                        ?.childLabel,
                                                                      m.ui
                                                                        ?.childLabel,
                                                                    ],
                                                                  }
                                                                )
                                                              ),
                                                            },
                                                            et(
                                                              y(pr)(
                                                                m,
                                                                n.labelKey
                                                              )
                                                            ),
                                                            3
                                                          ),
                                                          (T(!0),
                                                          ge(
                                                            Te,
                                                            null,
                                                            Ht(
                                                              m.children,
                                                              (D, X) => (
                                                                T(),
                                                                ge(
                                                                  'li',
                                                                  {
                                                                    key: X,
                                                                    class: re(
                                                                      g.value.childItem(
                                                                        {
                                                                          class:
                                                                            [
                                                                              n
                                                                                .ui
                                                                                ?.childItem,
                                                                              m
                                                                                .ui
                                                                                ?.childItem,
                                                                            ],
                                                                        }
                                                                      )
                                                                    ),
                                                                  },
                                                                  [
                                                                    z(
                                                                      Hs,
                                                                      te(
                                                                        {
                                                                          ref_for:
                                                                            !0,
                                                                        },
                                                                        y(zs)(
                                                                          D
                                                                        ),
                                                                        {
                                                                          custom:
                                                                            '',
                                                                        }
                                                                      ),
                                                                      {
                                                                        default:
                                                                          O(
                                                                            ({
                                                                              active:
                                                                                M,
                                                                              ...Z
                                                                            }) => [
                                                                              z(
                                                                                y(
                                                                                  qa
                                                                                ),
                                                                                {
                                                                                  'as-child':
                                                                                    '',
                                                                                  active:
                                                                                    M,
                                                                                  onSelect:
                                                                                    D.onSelect,
                                                                                },
                                                                                {
                                                                                  default:
                                                                                    O(
                                                                                      () => [
                                                                                        z(
                                                                                          hr,
                                                                                          te(
                                                                                            {
                                                                                              ref_for:
                                                                                                !0,
                                                                                            },
                                                                                            Z,
                                                                                            {
                                                                                              class:
                                                                                                g.value.childLink(
                                                                                                  {
                                                                                                    class:
                                                                                                      [
                                                                                                        n
                                                                                                          .ui
                                                                                                          ?.childLink,
                                                                                                        m
                                                                                                          .ui
                                                                                                          ?.childLink,
                                                                                                        D.class,
                                                                                                      ],
                                                                                                    active:
                                                                                                      M,
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          ),
                                                                                          {
                                                                                            default:
                                                                                              O(
                                                                                                () => [
                                                                                                  D.icon
                                                                                                    ? (T(),
                                                                                                      L(
                                                                                                        qt,
                                                                                                        {
                                                                                                          key: 0,
                                                                                                          name: D.icon,
                                                                                                          class:
                                                                                                            re(
                                                                                                              g.value.childLinkIcon(
                                                                                                                {
                                                                                                                  class:
                                                                                                                    [
                                                                                                                      n
                                                                                                                        .ui
                                                                                                                        ?.childLinkIcon,
                                                                                                                      m
                                                                                                                        .ui
                                                                                                                        ?.childLinkIcon,
                                                                                                                    ],
                                                                                                                  active:
                                                                                                                    M,
                                                                                                                }
                                                                                                              )
                                                                                                            ),
                                                                                                        },
                                                                                                        null,
                                                                                                        8,
                                                                                                        [
                                                                                                          'name',
                                                                                                          'class',
                                                                                                        ]
                                                                                                      ))
                                                                                                    : fe(
                                                                                                        '',
                                                                                                        !0
                                                                                                      ),
                                                                                                  kt(
                                                                                                    'span',
                                                                                                    {
                                                                                                      class:
                                                                                                        re(
                                                                                                          g.value.childLinkLabel(
                                                                                                            {
                                                                                                              class:
                                                                                                                [
                                                                                                                  n
                                                                                                                    .ui
                                                                                                                    ?.childLinkLabel,
                                                                                                                  m
                                                                                                                    .ui
                                                                                                                    ?.childLinkLabel,
                                                                                                                ],
                                                                                                              active:
                                                                                                                M,
                                                                                                            }
                                                                                                          )
                                                                                                        ),
                                                                                                    },
                                                                                                    [
                                                                                                      ft(
                                                                                                        et(
                                                                                                          y(
                                                                                                            pr
                                                                                                          )(
                                                                                                            D,
                                                                                                            n.labelKey
                                                                                                          )
                                                                                                        ) +
                                                                                                          ' ',
                                                                                                        1
                                                                                                      ),
                                                                                                      D.target ===
                                                                                                        '_blank' &&
                                                                                                      e.externalIcon !==
                                                                                                        !1
                                                                                                        ? (T(),
                                                                                                          L(
                                                                                                            qt,
                                                                                                            {
                                                                                                              key: 0,
                                                                                                              name:
                                                                                                                typeof e.externalIcon ==
                                                                                                                'string'
                                                                                                                  ? e.externalIcon
                                                                                                                  : y(
                                                                                                                      s
                                                                                                                    )
                                                                                                                      .ui
                                                                                                                      .icons
                                                                                                                      .external,
                                                                                                              class:
                                                                                                                re(
                                                                                                                  g.value.childLinkLabelExternalIcon(
                                                                                                                    {
                                                                                                                      class:
                                                                                                                        [
                                                                                                                          n
                                                                                                                            .ui
                                                                                                                            ?.childLinkLabelExternalIcon,
                                                                                                                          m
                                                                                                                            .ui
                                                                                                                            ?.childLinkLabelExternalIcon,
                                                                                                                        ],
                                                                                                                      active:
                                                                                                                        M,
                                                                                                                    }
                                                                                                                  )
                                                                                                                ),
                                                                                                            },
                                                                                                            null,
                                                                                                            8,
                                                                                                            [
                                                                                                              'name',
                                                                                                              'class',
                                                                                                            ]
                                                                                                          ))
                                                                                                        : fe(
                                                                                                            '',
                                                                                                            !0
                                                                                                          ),
                                                                                                    ],
                                                                                                    2
                                                                                                  ),
                                                                                                ]
                                                                                              ),
                                                                                            _: 2,
                                                                                          },
                                                                                          1040,
                                                                                          [
                                                                                            'class',
                                                                                          ]
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  _: 2,
                                                                                },
                                                                                1032,
                                                                                [
                                                                                  'active',
                                                                                  'onSelect',
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        _: 2,
                                                                      },
                                                                      1040
                                                                    ),
                                                                  ],
                                                                  2
                                                                )
                                                              )
                                                            ),
                                                            128
                                                          )),
                                                        ],
                                                        2
                                                      ),
                                                    ]
                                                  ),
                                                ]),
                                                default: O(() => [
                                                  z(
                                                    hr,
                                                    te(A, {
                                                      class: g.value.link({
                                                        class: [
                                                          n.ui?.link,
                                                          m.ui?.link,
                                                          m.class,
                                                        ],
                                                        active: E || m.active,
                                                        disabled: !!m.disabled,
                                                        level: C > 0,
                                                      }),
                                                    }),
                                                    {
                                                      default: O(() => [
                                                        z(
                                                          y(d),
                                                          {
                                                            item: m,
                                                            active:
                                                              E || m.active,
                                                            index: w,
                                                          },
                                                          null,
                                                          8,
                                                          [
                                                            'item',
                                                            'active',
                                                            'index',
                                                          ]
                                                        ),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1040,
                                                    ['class']
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1040,
                                              ['ui']
                                            ))
                                          : e.orientation === 'vertical' &&
                                            e.collapsed &&
                                            (n.tooltip || m.tooltip)
                                          ? (T(),
                                            L(
                                              LL,
                                              te(
                                                {
                                                  key: 1,
                                                  text: y(pr)(m, n.labelKey),
                                                },
                                                {
                                                  ...u.value,
                                                  ...(typeof m.tooltip ==
                                                  'boolean'
                                                    ? {}
                                                    : m.tooltip || {}),
                                                }
                                              ),
                                              {
                                                default: O(() => [
                                                  z(
                                                    hr,
                                                    te(A, {
                                                      class: g.value.link({
                                                        class: [
                                                          n.ui?.link,
                                                          m.ui?.link,
                                                          m.class,
                                                        ],
                                                        active: E || m.active,
                                                        disabled: !!m.disabled,
                                                        level: C > 0,
                                                      }),
                                                    }),
                                                    {
                                                      default: O(() => [
                                                        z(
                                                          y(d),
                                                          {
                                                            item: m,
                                                            active:
                                                              E || m.active,
                                                            index: w,
                                                          },
                                                          null,
                                                          8,
                                                          [
                                                            'item',
                                                            'active',
                                                            'index',
                                                          ]
                                                        ),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1040,
                                                    ['class']
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1040,
                                              ['text']
                                            ))
                                          : (T(),
                                            L(
                                              hr,
                                              te({ key: 2 }, A, {
                                                class: g.value.link({
                                                  class: [
                                                    n.ui?.link,
                                                    m.ui?.link,
                                                    m.class,
                                                  ],
                                                  active: E || m.active,
                                                  disabled: !!m.disabled,
                                                  level:
                                                    e.orientation ===
                                                      'horizontal' || C > 0,
                                                }),
                                              }),
                                              {
                                                default: O(() => [
                                                  z(
                                                    y(d),
                                                    {
                                                      item: m,
                                                      active: E || m.active,
                                                      index: w,
                                                    },
                                                    null,
                                                    8,
                                                    ['item', 'active', 'index']
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1040,
                                              ['class']
                                            )),
                                      ]),
                                      _: 2,
                                    },
                                    1064,
                                    ['active', 'disabled', 'onSelect']
                                  )),
                                  e.orientation === 'horizontal' &&
                                  (m.children?.length ||
                                    o[
                                      m.slot
                                        ? `${m.slot}-content`
                                        : 'item-content'
                                    ])
                                    ? (T(),
                                      L(
                                        y(qS),
                                        te({ key: 0 }, l.value, {
                                          class: g.value.content({
                                            class: [
                                              n.ui?.content,
                                              m.ui?.content,
                                            ],
                                          }),
                                        }),
                                        {
                                          default: O(() => [
                                            B(
                                              b.$slots,
                                              m.slot
                                                ? `${m.slot}-content`
                                                : 'item-content',
                                              {
                                                item: m,
                                                active: E || m.active,
                                                index: w,
                                                ui: g.value,
                                              },
                                              () => [
                                                kt(
                                                  'ul',
                                                  {
                                                    class: re(
                                                      g.value.childList({
                                                        class: [
                                                          n.ui?.childList,
                                                          m.ui?.childList,
                                                        ],
                                                      })
                                                    ),
                                                  },
                                                  [
                                                    (T(!0),
                                                    ge(
                                                      Te,
                                                      null,
                                                      Ht(
                                                        m.children,
                                                        (R, D) => (
                                                          T(),
                                                          ge(
                                                            'li',
                                                            {
                                                              key: D,
                                                              class: re(
                                                                g.value.childItem(
                                                                  {
                                                                    class: [
                                                                      n.ui
                                                                        ?.childItem,
                                                                      m.ui
                                                                        ?.childItem,
                                                                    ],
                                                                  }
                                                                )
                                                              ),
                                                            },
                                                            [
                                                              z(
                                                                Hs,
                                                                te(
                                                                  {
                                                                    ref_for: !0,
                                                                  },
                                                                  y(zs)(R),
                                                                  { custom: '' }
                                                                ),
                                                                {
                                                                  default: O(
                                                                    ({
                                                                      active: X,
                                                                      ...M
                                                                    }) => [
                                                                      z(
                                                                        y(qa),
                                                                        {
                                                                          'as-child':
                                                                            '',
                                                                          active:
                                                                            X,
                                                                          onSelect:
                                                                            R.onSelect,
                                                                        },
                                                                        {
                                                                          default:
                                                                            O(
                                                                              () => [
                                                                                z(
                                                                                  hr,
                                                                                  te(
                                                                                    {
                                                                                      ref_for:
                                                                                        !0,
                                                                                    },
                                                                                    M,
                                                                                    {
                                                                                      class:
                                                                                        g.value.childLink(
                                                                                          {
                                                                                            class:
                                                                                              [
                                                                                                n
                                                                                                  .ui
                                                                                                  ?.childLink,
                                                                                                m
                                                                                                  .ui
                                                                                                  ?.childLink,
                                                                                                R.class,
                                                                                              ],
                                                                                            active:
                                                                                              X,
                                                                                          }
                                                                                        ),
                                                                                    }
                                                                                  ),
                                                                                  {
                                                                                    default:
                                                                                      O(
                                                                                        () => [
                                                                                          R.icon
                                                                                            ? (T(),
                                                                                              L(
                                                                                                qt,
                                                                                                {
                                                                                                  key: 0,
                                                                                                  name: R.icon,
                                                                                                  class:
                                                                                                    re(
                                                                                                      g.value.childLinkIcon(
                                                                                                        {
                                                                                                          class:
                                                                                                            [
                                                                                                              n
                                                                                                                .ui
                                                                                                                ?.childLinkIcon,
                                                                                                              m
                                                                                                                .ui
                                                                                                                ?.childLinkIcon,
                                                                                                            ],
                                                                                                          active:
                                                                                                            X,
                                                                                                        }
                                                                                                      )
                                                                                                    ),
                                                                                                },
                                                                                                null,
                                                                                                8,
                                                                                                [
                                                                                                  'name',
                                                                                                  'class',
                                                                                                ]
                                                                                              ))
                                                                                            : fe(
                                                                                                '',
                                                                                                !0
                                                                                              ),
                                                                                          kt(
                                                                                            'div',
                                                                                            {
                                                                                              class:
                                                                                                re(
                                                                                                  g.value.childLinkWrapper(
                                                                                                    {
                                                                                                      class:
                                                                                                        [
                                                                                                          n
                                                                                                            .ui
                                                                                                            ?.childLinkWrapper,
                                                                                                          m
                                                                                                            .ui
                                                                                                            ?.childLinkWrapper,
                                                                                                        ],
                                                                                                    }
                                                                                                  )
                                                                                                ),
                                                                                            },
                                                                                            [
                                                                                              kt(
                                                                                                'p',
                                                                                                {
                                                                                                  class:
                                                                                                    re(
                                                                                                      g.value.childLinkLabel(
                                                                                                        {
                                                                                                          class:
                                                                                                            [
                                                                                                              n
                                                                                                                .ui
                                                                                                                ?.childLinkLabel,
                                                                                                              m
                                                                                                                .ui
                                                                                                                ?.childLinkLabel,
                                                                                                            ],
                                                                                                          active:
                                                                                                            X,
                                                                                                        }
                                                                                                      )
                                                                                                    ),
                                                                                                },
                                                                                                [
                                                                                                  ft(
                                                                                                    et(
                                                                                                      y(
                                                                                                        pr
                                                                                                      )(
                                                                                                        R,
                                                                                                        n.labelKey
                                                                                                      )
                                                                                                    ) +
                                                                                                      ' ',
                                                                                                    1
                                                                                                  ),
                                                                                                  R.target ===
                                                                                                    '_blank' &&
                                                                                                  e.externalIcon !==
                                                                                                    !1
                                                                                                    ? (T(),
                                                                                                      L(
                                                                                                        qt,
                                                                                                        {
                                                                                                          key: 0,
                                                                                                          name:
                                                                                                            typeof e.externalIcon ==
                                                                                                            'string'
                                                                                                              ? e.externalIcon
                                                                                                              : y(
                                                                                                                  s
                                                                                                                )
                                                                                                                  .ui
                                                                                                                  .icons
                                                                                                                  .external,
                                                                                                          class:
                                                                                                            re(
                                                                                                              g.value.childLinkLabelExternalIcon(
                                                                                                                {
                                                                                                                  class:
                                                                                                                    [
                                                                                                                      n
                                                                                                                        .ui
                                                                                                                        ?.childLinkLabelExternalIcon,
                                                                                                                      m
                                                                                                                        .ui
                                                                                                                        ?.childLinkLabelExternalIcon,
                                                                                                                    ],
                                                                                                                  active:
                                                                                                                    X,
                                                                                                                }
                                                                                                              )
                                                                                                            ),
                                                                                                        },
                                                                                                        null,
                                                                                                        8,
                                                                                                        [
                                                                                                          'name',
                                                                                                          'class',
                                                                                                        ]
                                                                                                      ))
                                                                                                    : fe(
                                                                                                        '',
                                                                                                        !0
                                                                                                      ),
                                                                                                ],
                                                                                                2
                                                                                              ),
                                                                                              R.description
                                                                                                ? (T(),
                                                                                                  ge(
                                                                                                    'p',
                                                                                                    {
                                                                                                      key: 0,
                                                                                                      class:
                                                                                                        re(
                                                                                                          g.value.childLinkDescription(
                                                                                                            {
                                                                                                              class:
                                                                                                                [
                                                                                                                  n
                                                                                                                    .ui
                                                                                                                    ?.childLinkDescription,
                                                                                                                  m
                                                                                                                    .ui
                                                                                                                    ?.childLinkDescription,
                                                                                                                ],
                                                                                                              active:
                                                                                                                X,
                                                                                                            }
                                                                                                          )
                                                                                                        ),
                                                                                                    },
                                                                                                    et(
                                                                                                      R.description
                                                                                                    ),
                                                                                                    3
                                                                                                  ))
                                                                                                : fe(
                                                                                                    '',
                                                                                                    !0
                                                                                                  ),
                                                                                            ],
                                                                                            2
                                                                                          ),
                                                                                        ]
                                                                                      ),
                                                                                    _: 2,
                                                                                  },
                                                                                  1040,
                                                                                  [
                                                                                    'class',
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          _: 2,
                                                                        },
                                                                        1032,
                                                                        [
                                                                          'active',
                                                                          'onSelect',
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _: 2,
                                                                },
                                                                1040
                                                              ),
                                                            ],
                                                            2
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                  ],
                                                  2
                                                ),
                                              ]
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1040,
                                        ['class']
                                      ))
                                    : fe('', !0),
                                ]),
                                _: 2,
                              },
                              1040
                            ))
                          : fe('', !0),
                        e.orientation === 'vertical' &&
                        m.children?.length &&
                        !e.collapsed
                          ? (T(),
                            L(
                              y(lP),
                              {
                                key: 2,
                                class: re(
                                  g.value.content({
                                    class: [n.ui?.content, m.ui?.content],
                                  })
                                ),
                              },
                              {
                                default: O(() => [
                                  z(
                                    y(Wf),
                                    te(
                                      {
                                        ...y(a),
                                        defaultValue: x(m.children, C + 1),
                                      },
                                      {
                                        as: 'ul',
                                        class: g.value.childList({
                                          class: n.ui?.childList,
                                        }),
                                      }
                                    ),
                                    {
                                      default: O(() => [
                                        (T(!0),
                                        ge(
                                          Te,
                                          null,
                                          Ht(
                                            m.children,
                                            (E, A) => (
                                              T(),
                                              L(
                                                y(h),
                                                {
                                                  key: A,
                                                  item: E,
                                                  index: A,
                                                  level: C + 1,
                                                  class: re(
                                                    g.value.childItem({
                                                      class: [
                                                        n.ui?.childItem,
                                                        E.ui?.childItem,
                                                      ],
                                                    })
                                                  ),
                                                },
                                                null,
                                                8,
                                                [
                                                  'item',
                                                  'index',
                                                  'level',
                                                  'class',
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                      _: 2,
                                    },
                                    1040,
                                    ['class']
                                  ),
                                ]),
                                _: 2,
                              },
                              1032,
                              ['class']
                            ))
                          : fe('', !0),
                      ]),
                      _: 2,
                    },
                    1032,
                    ['value']
                  )),
                ]),
                _: 3,
              }),
              z(
                y(PS),
                te(
                  { ...y(i), ...b.$attrs },
                  {
                    'data-collapsed': e.collapsed,
                    class: g.value.root({ class: [n.ui?.root, n.class] }),
                  }
                ),
                {
                  default: O(() => [
                    B(b.$slots, 'list-leading'),
                    (T(!0),
                    ge(
                      Te,
                      null,
                      Ht(
                        _.value,
                        (m, w) => (
                          T(),
                          ge(
                            Te,
                            { key: `list-${w}` },
                            [
                              (T(),
                              L(
                                Tt(
                                  e.orientation === 'vertical' && !e.collapsed
                                    ? y(Wf)
                                    : y(VS)
                                ),
                                te(
                                  { ref_for: !0 },
                                  e.orientation === 'vertical' && !e.collapsed
                                    ? { ...y(a), defaultValue: x(m) }
                                    : {},
                                  {
                                    as: 'ul',
                                    class: g.value.list({ class: n.ui?.list }),
                                  }
                                ),
                                {
                                  default: O(() => [
                                    (T(!0),
                                    ge(
                                      Te,
                                      null,
                                      Ht(
                                        m,
                                        (C, E) => (
                                          T(),
                                          L(
                                            y(h),
                                            {
                                              key: `list-${w}-${E}`,
                                              item: C,
                                              index: E,
                                              class: re(
                                                g.value.item({
                                                  class: [
                                                    n.ui?.item,
                                                    C.ui?.item,
                                                  ],
                                                })
                                              ),
                                            },
                                            null,
                                            8,
                                            ['item', 'index', 'class']
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 2,
                                },
                                1040,
                                ['class']
                              )),
                              e.orientation === 'vertical' &&
                              w < _.value.length - 1
                                ? (T(),
                                  ge(
                                    'div',
                                    {
                                      key: 0,
                                      class: re(
                                        g.value.separator({
                                          class: n.ui?.separator,
                                        })
                                      ),
                                    },
                                    null,
                                    2
                                  ))
                                : fe('', !0),
                            ],
                            64
                          )
                        )
                      ),
                      128
                    )),
                    B(b.$slots, 'list-trailing'),
                    e.orientation === 'horizontal'
                      ? (T(),
                        ge(
                          'div',
                          {
                            key: 0,
                            class: re(
                              g.value.viewportWrapper({
                                class: n.ui?.viewportWrapper,
                              })
                            ),
                          },
                          [
                            e.arrow
                              ? (T(),
                                L(
                                  y(NS),
                                  {
                                    key: 0,
                                    class: re(
                                      g.value.indicator({
                                        class: n.ui?.indicator,
                                      })
                                    ),
                                  },
                                  {
                                    default: O(() => [
                                      kt(
                                        'div',
                                        {
                                          class: re(
                                            g.value.arrow({
                                              class: n.ui?.arrow,
                                            })
                                          ),
                                        },
                                        null,
                                        2
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['class']
                                ))
                              : fe('', !0),
                            z(
                              y(US),
                              {
                                class: re(
                                  g.value.viewport({ class: n.ui?.viewport })
                                ),
                              },
                              null,
                              8,
                              ['class']
                            ),
                          ],
                          2
                        ))
                      : fe('', !0),
                  ]),
                  _: 3,
                },
                16,
                ['data-collapsed', 'class']
              ),
            ],
            64
          )
        );
      },
    }
  ),
  ML = {
    class:
      'fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10',
  },
  NL = J({
    __name: 'AppHeader',
    props: { links: {} },
    setup(e) {
      return (t, n) => {
        const r = wL,
          o = qL;
        return (
          T(),
          ge('div', ML, [
            z(
              o,
              {
                items: e.links,
                variant: 'link',
                color: 'neutral',
                class:
                  'bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5',
                ui: { link: 'px-2 py-1', linkLeadingIcon: 'hidden' },
              },
              { 'list-trailing': O(() => [z(r)]), _: 1 },
              8,
              ['items']
            ),
          ])
        );
      };
    },
  }),
  $L = Object.assign(NL, { __name: 'AppHeader' }),
  BL = {
    slots: {
      root: 'min-h-[calc(100vh-var(--ui-header-height))] flex flex-col items-center justify-center text-center',
      statusCode: 'text-base font-semibold text-primary',
      statusMessage:
        'mt-2 text-4xl sm:text-5xl font-bold text-highlighted text-balance',
      message: 'mt-4 text-lg text-muted text-balance',
      links: 'mt-8 flex items-center justify-center gap-6',
    },
  },
  VL = {
    __name: 'UError',
    props: {
      as: { type: null, required: !1 },
      error: { type: Object, required: !1 },
      redirect: { type: String, required: !1, default: '/' },
      clear: { type: [Boolean, Object], required: !1, default: !0 },
      class: { type: null, required: !1 },
      ui: { type: null, required: !1 },
    },
    setup(e) {
      const t = e,
        n = un(),
        { t: r } = Jc(),
        o = Je(),
        s = S(() => Ie({ extend: Ie(BL), ...(o.ui?.error || {}) })());
      function i() {
        Vh({ redirect: t.redirect });
      }
      return (a, l) => (
        T(),
        L(
          y(_e),
          {
            as: e.as,
            class: re(s.value.root({ class: [t.ui?.root, t.class] })),
          },
          {
            default: O(() => [
              t.error?.statusCode || n.statusCode
                ? (T(),
                  ge(
                    'p',
                    {
                      key: 0,
                      class: re(
                        s.value.statusCode({ class: t.ui?.statusCode })
                      ),
                    },
                    [
                      B(a.$slots, 'statusCode', {}, () => [
                        ft(et(t.error?.statusCode), 1),
                      ]),
                    ],
                    2
                  ))
                : fe('', !0),
              t.error?.statusMessage || n.statusMessage
                ? (T(),
                  ge(
                    'h1',
                    {
                      key: 1,
                      class: re(
                        s.value.statusMessage({ class: t.ui?.statusMessage })
                      ),
                    },
                    [
                      B(a.$slots, 'statusMessage', {}, () => [
                        ft(et(t.error?.statusMessage), 1),
                      ]),
                    ],
                    2
                  ))
                : fe('', !0),
              (t.error?.message && t.error.message !== t.error.statusMessage) ||
              n.message
                ? (T(),
                  ge(
                    'p',
                    {
                      key: 2,
                      class: re(s.value.message({ class: t.ui?.message })),
                    },
                    [
                      B(a.$slots, 'message', {}, () => [
                        ft(et(t.error?.message), 1),
                      ]),
                    ],
                    2
                  ))
                : fe('', !0),
              e.clear || n.links
                ? (T(),
                  ge(
                    'div',
                    {
                      key: 3,
                      class: re(s.value.links({ class: t.ui?.links })),
                    },
                    [
                      B(a.$slots, 'links', {}, () => [
                        e.clear
                          ? (T(),
                            L(
                              Qr,
                              te(
                                {
                                  key: 0,
                                  size: 'lg',
                                  color: 'primary',
                                  variant: 'solid',
                                  label: y(r)('error.clear'),
                                },
                                typeof e.clear == 'object' ? e.clear : {},
                                { onClick: i }
                              ),
                              null,
                              16,
                              ['label']
                            ))
                          : fe('', !0),
                      ]),
                    ],
                    2
                  ))
                : fe('', !0),
            ]),
            _: 3,
          },
          8,
          ['as', 'class']
        )
      );
    },
  },
  jL = {
    slots: {
      root: 'flex flex-col lg:grid lg:grid-cols-10 lg:gap-10',
      left: 'lg:col-span-2',
      center: 'lg:col-span-8',
      right: 'lg:col-span-2 order-first lg:order-last',
    },
    variants: { left: { true: '' }, right: { true: '' } },
    compoundVariants: [
      { left: !0, right: !0, class: { center: 'lg:col-span-6' } },
      { left: !1, right: !1, class: { center: 'lg:col-span-10' } },
    ],
  },
  FL = {
    __name: 'UPage',
    props: {
      as: { type: null, required: !1 },
      class: { type: null, required: !1 },
      ui: { type: null, required: !1 },
    },
    setup(e) {
      const t = e,
        n = un(),
        r = Je(),
        o = S(() =>
          Ie({ extend: Ie(jL), ...(r.ui?.page || {}) })({
            left: !!n.left,
            right: !!n.right,
          })
        );
      return (s, i) => (
        T(),
        L(
          y(_e),
          {
            as: e.as,
            class: re(o.value.root({ class: [t.ui?.root, t.class] })),
          },
          {
            default: O(() => [
              n.left
                ? (T(),
                  L(
                    y(Pr),
                    { key: 0, class: re(o.value.left({ class: t.ui?.left })) },
                    { default: O(() => [B(s.$slots, 'left')]), _: 3 },
                    8,
                    ['class']
                  ))
                : fe('', !0),
              kt(
                'div',
                { class: re(o.value.center({ class: t.ui?.center })) },
                [B(s.$slots, 'default')],
                2
              ),
              n.right
                ? (T(),
                  L(
                    y(Pr),
                    {
                      key: 1,
                      class: re(o.value.right({ class: t.ui?.right })),
                    },
                    { default: O(() => [B(s.$slots, 'right')]), _: 3 },
                    8,
                    ['class']
                  ))
                : fe('', !0),
            ]),
            _: 3,
          },
          8,
          ['as', 'class']
        )
      );
    },
  },
  zL = { base: 'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8' },
  hv = {
    __name: 'UContainer',
    props: {
      as: { type: null, required: !1 },
      class: { type: null, required: !1 },
    },
    setup(e) {
      const t = e,
        n = Je(),
        r = S(() => Ie({ extend: Ie(zL), ...(n.ui?.container || {}) }));
      return (o, s) => (
        T(),
        L(
          y(_e),
          { as: e.as, class: re(r.value({ class: t.class })) },
          { default: O(() => [B(o.$slots, 'default')]), _: 3 },
          8,
          ['as', 'class']
        )
      );
    },
  },
  HL = {
    slots: {
      root: '',
      top: 'py-8 lg:py-12',
      bottom: 'py-8 lg:py-12',
      container:
        'py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3',
      left: 'flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1',
      center: 'mt-3 lg:mt-0 lg:order-2 flex items-center justify-center',
      right:
        'lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3',
    },
  },
  UL = {
    __name: 'UFooter',
    props: {
      as: { type: null, required: !1, default: 'footer' },
      class: { type: null, required: !1 },
      ui: { type: null, required: !1 },
    },
    setup(e) {
      const t = e,
        n = un(),
        r = Je(),
        o = S(() => Ie({ extend: Ie(HL), ...(r.ui?.footer || {}) })());
      return (s, i) => (
        T(),
        L(
          y(_e),
          {
            as: e.as,
            class: re(o.value.root({ class: [t.ui?.root, t.class] })),
          },
          {
            default: O(() => [
              n.top
                ? (T(),
                  ge(
                    'div',
                    { key: 0, class: re(o.value.top({ class: t.ui?.top })) },
                    [B(s.$slots, 'top')],
                    2
                  ))
                : fe('', !0),
              z(
                hv,
                { class: re(o.value.container({ class: t.ui?.container })) },
                {
                  default: O(() => [
                    kt(
                      'div',
                      { class: re(o.value.right({ class: t.ui?.right })) },
                      [B(s.$slots, 'right')],
                      2
                    ),
                    kt(
                      'div',
                      { class: re(o.value.center({ class: t.ui?.center })) },
                      [B(s.$slots, 'default')],
                      2
                    ),
                    kt(
                      'div',
                      { class: re(o.value.left({ class: t.ui?.left })) },
                      [B(s.$slots, 'left')],
                      2
                    ),
                  ]),
                  _: 3,
                },
                8,
                ['class']
              ),
              n.bottom
                ? (T(),
                  ge(
                    'div',
                    {
                      key: 1,
                      class: re(o.value.bottom({ class: t.ui?.bottom })),
                    },
                    [B(s.$slots, 'bottom')],
                    2
                  ))
                : fe('', !0),
            ]),
            _: 3,
          },
          8,
          ['as', 'class']
        )
      );
    },
  },
  WL = J({
    __name: 'AppFooter',
    setup(e) {
      const { footer: t } = Je();
      return (n, r) => {
        const o = Qr,
          s = UL;
        return (
          T(),
          L(
            s,
            { class: 'z-10 bg-default', ui: { left: 'text-muted text-xs' } },
            {
              left: O(() => [ft(et(y(t).credits), 1)]),
              right: O(() => [
                y(t)?.links
                  ? (T(!0),
                    ge(
                      Te,
                      { key: 0 },
                      Ht(
                        y(t)?.links,
                        (i, a) => (
                          T(),
                          L(
                            o,
                            te(
                              { key: a },
                              { ref_for: !0 },
                              {
                                size: 'xs',
                                color: 'neutral',
                                variant: 'ghost',
                                ...i,
                              }
                            ),
                            null,
                            16
                          )
                        )
                      ),
                      128
                    ))
                  : fe('', !0),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  }),
  KL = Object.assign(WL, { __name: 'AppFooter' }),
  GL = H(() =>
    F(
      () => import('./20Pt5jed.js'),
      __vite__mapDeps([38, 30, 27, 13]),
      import.meta.url
    ).then((e) => e.default || e)
  ),
  YL = J({
    __name: 'error',
    props: { error: { type: Object, required: !0 } },
    async setup(e) {
      let t, n;
      hc({ htmlAttrs: { lang: 'en' } }),
        Jh({
          title: 'Page not found',
          description: 'We are sorry but this page could not be found.',
        });
      const [{ data: r }, { data: o }] =
        (([t, n] = Lp(() =>
          Promise.all([
            eu('navigation', () => Promise.all([dv('blog')]), {
              transform: (s) => s.flat(),
            }),
            Wm('search', () => Promise.all([pv('blog')]), {
              server: !1,
              transform: (s) => s.flat(),
            }),
          ])
        )),
        (t = await t),
        n(),
        t);
      return (s, i) => {
        const a = $L,
          l = VL,
          u = FL,
          c = hv,
          f = Im,
          d = KL,
          p = GL,
          h = Gc,
          g = rv;
        return (
          T(),
          ge('div', null, [
            z(a, { links: 'navLinks' in s ? s.navLinks : y(Bl) }, null, 8, [
              'links',
            ]),
            z(f, null, {
              default: O(() => [
                z(c, null, {
                  default: O(() => [
                    z(u, null, {
                      default: O(() => [
                        z(l, { error: e.error }, null, 8, ['error']),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }),
            z(d),
            z(h, null, {
              default: O(() => [
                z(
                  p,
                  {
                    files: y(o),
                    shortcut: 'meta_k',
                    navigation: y(r),
                    links: 'navLinks' in s ? s.navLinks : y(Bl),
                    fuse: { resultLimit: 42 },
                  },
                  null,
                  8,
                  ['files', 'navigation', 'links']
                ),
              ]),
              _: 1,
            }),
            z(g),
          ])
        );
      };
    },
  }),
  XL = { key: 0 },
  Id = {
    __name: 'nuxt-root',
    setup(e) {
      const t = () => null,
        n = Le(),
        r = n.deferHydration();
      if (n.isHydrating) {
        const u = n.hooks.hookOnce('app:error', r);
        _t().beforeEach(u);
      }
      const o = !1;
      bt(Cr, rs()), n.hooks.callHookWith((u) => u.map((c) => c()), 'vue:setup');
      const s = ji(),
        i = !1,
        a = /bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;
      Pp((u, c, f) => {
        if (
          (n.hooks
            .callHook('vue:error', u, c, f)
            .catch((d) => console.error('[nuxt] Error in `vue:error` hook', d)),
          a.test(navigator.userAgent))
        )
          return (
            n.hooks.callHook('app:error', u),
            console.error(
              `[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,
              u
            ),
            !1
          );
        if (jh(u) && (u.fatal || u.unhandled))
          return n.runWithContext(() => dr(u)), !1;
      });
      const l = !1;
      return (u, c) => (
        T(),
        L(
          sc,
          { onResolve: y(r) },
          {
            default: O(() => [
              y(i)
                ? (T(), ge('div', XL))
                : y(s)
                ? (T(), L(y(YL), { key: 1, error: y(s) }, null, 8, ['error']))
                : y(l)
                ? (T(),
                  L(y(t), { key: 2, context: y(l) }, null, 8, ['context']))
                : y(o)
                ? (T(), L(Tt(y(o)), { key: 3 }))
                : (T(), L(y(bL), { key: 4 })),
            ]),
            _: 1,
          },
          8,
          ['onResolve']
        )
      );
    },
  };
let Ld;
{
  let e;
  (Ld = async function () {
    if (e) return e;
    const n = !!(
        window.__NUXT__?.serverRendered ??
        document.getElementById('__NUXT_DATA__')?.dataset.ssr === 'true'
      ),
      r = n ? Kb(Id) : Wb(Id),
      o = o_({ vueApp: r });
    async function s(i) {
      await o.callHook('app:error', i), (o.payload.error ||= er(i));
    }
    (r.config.errorHandler = s),
      o.hook('app:suspense:resolve', () => {
        r.config.errorHandler === s && (r.config.errorHandler = void 0);
      }),
      !n &&
        Yu.id &&
        o.hook('app:suspense:resolve', () => {
          document.getElementById(Yu.id)?.remove();
        });
    try {
      await a_(o, j1);
    } catch (i) {
      s(i);
    }
    try {
      await o.hooks.callHook('app:created', r),
        await o.hooks.callHook('app:beforeMount', r),
        r.mount(t_),
        await o.hooks.callHook('app:mounted', r),
        await Ze();
    } catch (i) {
      s(i);
    }
    return r;
  }),
    (e = Ld().catch((t) => {
      throw (console.error('Error while mounting app:', t), t);
    }));
}
export {
  Yc as $,
  oo as A,
  Rt as B,
  Ot as C,
  Ki as D,
  sr as E,
  CP as F,
  Ug as G,
  Mn as H,
  Ze as I,
  nE as J,
  Sc as K,
  ph as L,
  In as M,
  jy as N,
  wn as O,
  _e as P,
  ZL as Q,
  qg as R,
  Pe as S,
  JL as T,
  Ai as U,
  Yi as V,
  un as W,
  nD as X,
  on as Y,
  Tt as Z,
  nn as _,
  ve as a,
  Re as a$,
  Jc as a0,
  Je as a1,
  Gt as a2,
  _n as a3,
  Qc as a4,
  ot as a5,
  Ie as a6,
  re as a7,
  tt as a8,
  ut as a9,
  QL as aA,
  lR as aB,
  AL as aC,
  oD as aD,
  en as aE,
  ov as aF,
  cD as aG,
  ze as aH,
  Lp as aI,
  er as aJ,
  Jh as aK,
  FL as aL,
  eu as aM,
  gL as aN,
  CI as aO,
  hv as aP,
  Sr as aQ,
  F as aR,
  rD as aS,
  iD as aT,
  kd as aU,
  MI as aV,
  bt as aW,
  Ad as aX,
  kL as aY,
  uL as aZ,
  Ar as a_,
  Rp as aa,
  ft as ab,
  et as ac,
  kt as ad,
  Qr as ae,
  Ae as af,
  aD as ag,
  uD as ah,
  nv as ai,
  tv as aj,
  qt as ak,
  sa as al,
  lD as am,
  xy as an,
  zy as ao,
  Fn as ap,
  Mt as aq,
  bd as ar,
  iy as as,
  Bm as at,
  Hs as au,
  zs as av,
  hr as aw,
  PI as ax,
  pr as ay,
  RL as az,
  L as b,
  aL as b0,
  dD as b1,
  mu as b2,
  H as b3,
  PR as b4,
  rs as b5,
  $e as b6,
  Im as b7,
  hD as b8,
  Be as b9,
  kr as bA,
  xp as bB,
  sD as bC,
  $L as bD,
  Bl as bE,
  KL as bF,
  fD as bG,
  tL as bH,
  sv as bI,
  pD as bJ,
  Xe as ba,
  dt as bb,
  br as bc,
  rt as bd,
  si as be,
  gy as bf,
  Rc as bg,
  Yg as bh,
  iP as bi,
  Kf as bj,
  lP as bk,
  Wf as bl,
  wc as bm,
  Gi as bn,
  XO as bo,
  _y as bp,
  tc as bq,
  Mi as br,
  hi as bs,
  JE as bt,
  YE as bu,
  KE as bv,
  mb as bw,
  eD as bx,
  y0 as by,
  xh as bz,
  S as c,
  J as d,
  y as e,
  Rr as f,
  Ye as g,
  St as h,
  z as i,
  SE as j,
  VE as k,
  j as l,
  te as m,
  or as n,
  T as o,
  PE as p,
  fe as q,
  B as r,
  Uf as s,
  tD as t,
  Kt as u,
  we as v,
  O as w,
  ge as x,
  Te as y,
  Ht as z,
};
