! function() {
    "use strict";

    function t(t) {
        if (t)
            b[0] = b[16] = b[1] = b[2] = b[3] = b[4] = b[5] = b[6] = b[7] = b[8] = b[9] = b[10] = b[11] = b[12] = b[13] = b[14] = b[15] = 0,
            this.blocks = b,
            this.buffer8 = a;
        else if (u) {
            var r = new ArrayBuffer(68);
            this.buffer8 = new Uint8Array(r),
                this.blocks = new Uint32Array(r)
        } else
            this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0,
            this.finalized = this.hashed = !1,
            this.first = !0
    }

    function r(r, e) {
        var i, s = _(r);
        if (r = s[0],
            s[1]) {
            var h, n = [],
                a = r.length,
                o = 0;
            for (i = 0; i < a; ++i)
                (h = r.charCodeAt(i)) < 128 ? n[o++] = h : h < 2048 ? (n[o++] = 192 | h >>> 6,
                    n[o++] = 128 | 63 & h) : h < 55296 || h >= 57344 ? (n[o++] = 224 | h >>> 12,
                    n[o++] = 128 | h >>> 6 & 63,
                    n[o++] = 128 | 63 & h) : (h = 65536 + ((1023 & h) << 10 | 1023 & r.charCodeAt(++i)),
                    n[o++] = 240 | h >>> 18,
                    n[o++] = 128 | h >>> 12 & 63,
                    n[o++] = 128 | h >>> 6 & 63,
                    n[o++] = 128 | 63 & h);
            r = n
        }
        r.length > 64 && (r = new t(!0).update(r).array());
        var f = [],
            u = [];
        for (i = 0; i < 64; ++i) {
            var c = r[i] || 0;
            f[i] = 92 ^ c,
                u[i] = 54 ^ c
        }
        t.call(this, e),
            this.update(u),
            this.oKeyPad = f,
            this.inner = !0,
            this.sharedMemory = e
    }
    var e = "input is invalid type",
        i = "object" == typeof window,
        s = i ? window : {};
    s.JS_MD5_NO_WINDOW && (i = !1);
    var h = !i && "object" == typeof self,
        n = !s.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
    n ? s = global : h && (s = self);
    var a, o = !s.JS_MD5_NO_COMMON_JS && "object" == typeof module && module.exports,
        f = "function" == typeof define && define.amd,
        u = !s.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
        c = "0123456789abcdef".split(""),
        y = [128, 32768, 8388608, -2147483648],
        p = [0, 8, 16, 24],
        d = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
        l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
        b = [];
    if (u) {
        var v = new ArrayBuffer(68);
        a = new Uint8Array(v),
            b = new Uint32Array(v)
    }
    var w = Array.isArray;
    !s.JS_MD5_NO_NODE_JS && w || (w = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    });
    var A = ArrayBuffer.isView;
    !u || !s.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && A || (A = function(t) {
        return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
    });
    var _ = function(t) {
            var r = typeof t;
            if ("string" === r)
                return [t, !0];
            if ("object" !== r || null === t)
                throw new Error(e);
            if (u && t.constructor === ArrayBuffer)
                return [new Uint8Array(t), !1];
            if (!w(t) && !A(t))
                throw new Error(e);
            return [t, !1]
        },
        B = function(r) {
            return function(e) {
                return new t(!0).update(e)[r]()
            }
        },
        g = function(t) {
            var r, i = require("crypto"),
                h = require("buffer").Buffer;
            r = h.from && !s.JS_MD5_NO_BUFFER_FROM ? h.from : function(t) {
                return new h(t)
            };
            return function(s) {
                if ("string" == typeof s)
                    return i.createHash("md5").update(s, "utf8").digest("hex");
                if (null === s || void 0 === s)
                    throw new Error(e);
                return s.constructor === ArrayBuffer && (s = new Uint8Array(s)),
                    w(s) || A(s) || s.constructor === h ? i.createHash("md5").update(r(s)).digest("hex") : t(s)
            }
        },
        m = function(t) {
            return function(e, i) {
                return new r(e, !0).update(i)[t]()
            }
        };
    t.prototype.update = function(t) {
            if (this.finalized)
                throw new Error("finalize already called");
            var r = _(t);
            t = r[0];
            for (var e, i, s = r[1], h = 0, n = t.length, a = this.blocks, o = this.buffer8; h < n;) {
                if (this.hashed && (this.hashed = !1,
                        a[0] = a[16],
                        a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0),
                    s)
                    if (u)
                        for (i = this.start; h < n && i < 64; ++h)
                            (e = t.charCodeAt(h)) < 128 ? o[i++] = e : e < 2048 ? (o[i++] = 192 | e >>> 6,
                                o[i++] = 128 | 63 & e) : e < 55296 || e >= 57344 ? (o[i++] = 224 | e >>> 12,
                                o[i++] = 128 | e >>> 6 & 63,
                                o[i++] = 128 | 63 & e) : (e = 65536 + ((1023 & e) << 10 | 1023 & t.charCodeAt(++h)),
                                o[i++] = 240 | e >>> 18,
                                o[i++] = 128 | e >>> 12 & 63,
                                o[i++] = 128 | e >>> 6 & 63,
                                o[i++] = 128 | 63 & e);
                    else
                        for (i = this.start; h < n && i < 64; ++h)
                            (e = t.charCodeAt(h)) < 128 ? a[i >>> 2] |= e << p[3 & i++] : e < 2048 ? (a[i >>> 2] |= (192 | e >>> 6) << p[3 & i++],
                                a[i >>> 2] |= (128 | 63 & e) << p[3 & i++]) : e < 55296 || e >= 57344 ? (a[i >>> 2] |= (224 | e >>> 12) << p[3 & i++],
                                a[i >>> 2] |= (128 | e >>> 6 & 63) << p[3 & i++],
                                a[i >>> 2] |= (128 | 63 & e) << p[3 & i++]) : (e = 65536 + ((1023 & e) << 10 | 1023 & t.charCodeAt(++h)),
                                a[i >>> 2] |= (240 | e >>> 18) << p[3 & i++],
                                a[i >>> 2] |= (128 | e >>> 12 & 63) << p[3 & i++],
                                a[i >>> 2] |= (128 | e >>> 6 & 63) << p[3 & i++],
                                a[i >>> 2] |= (128 | 63 & e) << p[3 & i++]);
                else if (u)
                    for (i = this.start; h < n && i < 64; ++h)
                        o[i++] = t[h];
                else
                    for (i = this.start; h < n && i < 64; ++h)
                        a[i >>> 2] |= t[h] << p[3 & i++];
                this.lastByteIndex = i,
                    this.bytes += i - this.start,
                    i >= 64 ? (this.start = i - 64,
                        this.hash(),
                        this.hashed = !0) : this.start = i
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
                    this.bytes = this.bytes % 4294967296),
                this
        },
        t.prototype.finalize = function() {
            if (!this.finalized) {
                this.finalized = !0;
                var t = this.blocks,
                    r = this.lastByteIndex;
                t[r >>> 2] |= y[3 & r],
                    r >= 56 && (this.hashed || this.hash(),
                        t[0] = t[16],
                        t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0),
                    t[14] = this.bytes << 3,
                    t[15] = this.hBytes << 3 | this.bytes >>> 29,
                    this.hash()
            }
        },
        t.prototype.hash = function() {
            var t, r, e, i, s, h, n = this.blocks;
            this.first ? r = ((r = ((t = ((t = n[0] - 680876937) << 7 | t >>> 25) - 271733879 << 0) ^ (e = ((e = (-271733879 ^ (i = ((i = (-1732584194 ^ 2004318071 & t) + n[1] - 117830708) << 12 | i >>> 20) + t << 0) & (-271733879 ^ t)) + n[2] - 1126478375) << 17 | e >>> 15) + i << 0) & (i ^ t)) + n[3] - 1316259209) << 22 | r >>> 10) + e << 0 : (t = this.h0,
                    r = this.h1,
                    e = this.h2,
                    r = ((r += ((t = ((t += ((i = this.h3) ^ r & (e ^ i)) + n[0] - 680876936) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + n[1] - 389564586) << 12 | i >>> 20) + t << 0) & (t ^ r)) + n[2] + 606105819) << 17 | e >>> 15) + i << 0) & (i ^ t)) + n[3] - 1044525330) << 22 | r >>> 10) + e << 0),
                r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + n[4] - 176418897) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + n[5] + 1200080426) << 12 | i >>> 20) + t << 0) & (t ^ r)) + n[6] - 1473231341) << 17 | e >>> 15) + i << 0) & (i ^ t)) + n[7] - 45705983) << 22 | r >>> 10) + e << 0,
                r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + n[8] + 1770035416) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + n[9] - 1958414417) << 12 | i >>> 20) + t << 0) & (t ^ r)) + n[10] - 42063) << 17 | e >>> 15) + i << 0) & (i ^ t)) + n[11] - 1990404162) << 22 | r >>> 10) + e << 0,
                r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + n[12] + 1804603682) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + n[13] - 40341101) << 12 | i >>> 20) + t << 0) & (t ^ r)) + n[14] - 1502002290) << 17 | e >>> 15) + i << 0) & (i ^ t)) + n[15] + 1236535329) << 22 | r >>> 10) + e << 0,
                r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + n[1] - 165796510) << 5 | t >>> 27) + r << 0) ^ r)) + n[6] - 1069501632) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + n[11] + 643717713) << 14 | e >>> 18) + i << 0) ^ i)) + n[0] - 373897302) << 20 | r >>> 12) + e << 0,
                r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + n[5] - 701558691) << 5 | t >>> 27) + r << 0) ^ r)) + n[10] + 38016083) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + n[15] - 660478335) << 14 | e >>> 18) + i << 0) ^ i)) + n[4] - 405537848) << 20 | r >>> 12) + e << 0,
                r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + n[9] + 568446438) << 5 | t >>> 27) + r << 0) ^ r)) + n[14] - 1019803690) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + n[3] - 187363961) << 14 | e >>> 18) + i << 0) ^ i)) + n[8] + 1163531501) << 20 | r >>> 12) + e << 0,
                r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + n[13] - 1444681467) << 5 | t >>> 27) + r << 0) ^ r)) + n[2] - 51403784) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + n[7] + 1735328473) << 14 | e >>> 18) + i << 0) ^ i)) + n[12] - 1926607734) << 20 | r >>> 12) + e << 0,
                r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + n[5] - 378558) << 4 | t >>> 28) + r << 0)) + n[8] - 2022574463) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + n[11] + 1839030562) << 16 | e >>> 16) + i << 0)) + n[14] - 35309556) << 23 | r >>> 9) + e << 0,
                r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + n[1] - 1530992060) << 4 | t >>> 28) + r << 0)) + n[4] + 1272893353) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + n[7] - 155497632) << 16 | e >>> 16) + i << 0)) + n[10] - 1094730640) << 23 | r >>> 9) + e << 0,
                r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + n[13] + 681279174) << 4 | t >>> 28) + r << 0)) + n[0] - 358537222) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + n[3] - 722521979) << 16 | e >>> 16) + i << 0)) + n[6] + 76029189) << 23 | r >>> 9) + e << 0,
                r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + n[9] - 640364487) << 4 | t >>> 28) + r << 0)) + n[12] - 421815835) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + n[15] + 530742520) << 16 | e >>> 16) + i << 0)) + n[2] - 995338651) << 23 | r >>> 9) + e << 0,
                r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + n[0] - 198630844) << 6 | t >>> 26) + r << 0) | ~e)) + n[7] + 1126891415) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + n[14] - 1416354905) << 15 | e >>> 17) + i << 0) | ~t)) + n[5] - 57434055) << 21 | r >>> 11) + e << 0,
                r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + n[12] + 1700485571) << 6 | t >>> 26) + r << 0) | ~e)) + n[3] - 1894986606) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + n[10] - 1051523) << 15 | e >>> 17) + i << 0) | ~t)) + n[1] - 2054922799) << 21 | r >>> 11) + e << 0,
                r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + n[8] + 1873313359) << 6 | t >>> 26) + r << 0) | ~e)) + n[15] - 30611744) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + n[6] - 1560198380) << 15 | e >>> 17) + i << 0) | ~t)) + n[13] + 1309151649) << 21 | r >>> 11) + e << 0,
                r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + n[4] - 145523070) << 6 | t >>> 26) + r << 0) | ~e)) + n[11] - 1120210379) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + n[2] + 718787259) << 15 | e >>> 17) + i << 0) | ~t)) + n[9] - 343485551) << 21 | r >>> 11) + e << 0,
                this.first ? (this.h0 = t + 1732584193 << 0,
                    this.h1 = r - 271733879 << 0,
                    this.h2 = e - 1732584194 << 0,
                    this.h3 = i + 271733878 << 0,
                    this.first = !1) : (this.h0 = this.h0 + t << 0,
                    this.h1 = this.h1 + r << 0,
                    this.h2 = this.h2 + e << 0,
                    this.h3 = this.h3 + i << 0)
        },
        t.prototype.hex = function() {
            this.finalize();
            var t = this.h0,
                r = this.h1,
                e = this.h2,
                i = this.h3;
            return c[t >>> 4 & 15] + c[15 & t] + c[t >>> 12 & 15] + c[t >>> 8 & 15] + c[t >>> 20 & 15] + c[t >>> 16 & 15] + c[t >>> 28 & 15] + c[t >>> 24 & 15] + c[r >>> 4 & 15] + c[15 & r] + c[r >>> 12 & 15] + c[r >>> 8 & 15] + c[r >>> 20 & 15] + c[r >>> 16 & 15] + c[r >>> 28 & 15] + c[r >>> 24 & 15] + c[e >>> 4 & 15] + c[15 & e] + c[e >>> 12 & 15] + c[e >>> 8 & 15] + c[e >>> 20 & 15] + c[e >>> 16 & 15] + c[e >>> 28 & 15] + c[e >>> 24 & 15] + c[i >>> 4 & 15] + c[15 & i] + c[i >>> 12 & 15] + c[i >>> 8 & 15] + c[i >>> 20 & 15] + c[i >>> 16 & 15] + c[i >>> 28 & 15] + c[i >>> 24 & 15]
        },
        t.prototype.toString = t.prototype.hex,
        t.prototype.digest = function() {
            this.finalize();
            var t = this.h0,
                r = this.h1,
                e = this.h2,
                i = this.h3;
            return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & r, r >>> 8 & 255, r >>> 16 & 255, r >>> 24 & 255, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255, 255 & i, i >>> 8 & 255, i >>> 16 & 255, i >>> 24 & 255]
        },
        t.prototype.array = t.prototype.digest,
        t.prototype.arrayBuffer = function() {
            this.finalize();
            var t = new ArrayBuffer(16),
                r = new Uint32Array(t);
            return r[0] = this.h0,
                r[1] = this.h1,
                r[2] = this.h2,
                r[3] = this.h3,
                t
        },
        t.prototype.buffer = t.prototype.arrayBuffer,
        t.prototype.base64 = function() {
            for (var t, r, e, i = "", s = this.array(), h = 0; h < 15;)
                t = s[h++],
                r = s[h++],
                e = s[h++],
                i += l[t >>> 2] + l[63 & (t << 4 | r >>> 4)] + l[63 & (r << 2 | e >>> 6)] + l[63 & e];
            return t = s[h],
                i += l[t >>> 2] + l[t << 4 & 63] + "=="
        },
        (r.prototype = new t).finalize = function() {
            if (t.prototype.finalize.call(this),
                this.inner) {
                this.inner = !1;
                var r = this.array();
                t.call(this, this.sharedMemory),
                    this.update(this.oKeyPad),
                    this.update(r),
                    t.prototype.finalize.call(this)
            }
        };
    var O = function() {
        var r = B("hex");
        n && (r = g(r)),
            r.create = function() {
                return new t
            },
            r.update = function(t) {
                return r.create().update(t)
            };
        for (var e = 0; e < d.length; ++e) {
            var i = d[e];
            r[i] = B(i)
        }
        return r
    }();
    O.md5 = O,
        O.md5.hmac = function() {
            var t = m("hex");
            t.create = function(t) {
                    return new r(t)
                },
                t.update = function(r, e) {
                    return t.create(r).update(e)
                };
            for (var e = 0; e < d.length; ++e) {
                var i = d[e];
                t[i] = m(i)
            }
            return t
        }(),
        o ? module.exports = O : (s.md5 = O,
            f && define(function() {
                return O
            }))
}();

function PngToy(options) {
    this.doCRC = true;
    this.allowInvalid = false;
    this.beforeSend = noop;
    Object.assign(this, options);

    function noop() {}
    this.url = null;
    this.buffer = null;
    this.view = null;
    this.chunks = [];
    this.debug = {}
}
PngToy.prototype = {
    fetch: function(src) {
        var me = this;
        me.url = src;
        me.buffer = me.chunks = me.view = null;
        me._pos = 0;
        return new Promise(function(resolve, reject) {
            if (typeof src === "string") {
                try {
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", src, true);
                    xhr.responseType = "arraybuffer";
                    me.beforeSend(xhr);
                    xhr.onerror = function(e) {
                        reject("Network error. " + e.message)
                    };
                    xhr.onload = function() {
                        if (xhr.status === 200)
                            checkBuffer(xhr.response);
                        else
                            reject("Loading error:" + xhr.statusText)
                    };
                    xhr.send()
                } catch (err) {
                    reject(err.message)
                }
            } else {
                checkBuffer(ArrayBuffer.isView(src) ? src.buffer : src)
            }

            function checkBuffer(buffer) {
                var view, result;
                try {
                    view = new DataView(buffer);
                    if (buffer.byteLength > 66 && view.getUint32(0) === 2303741511 && view.getUint32(4) === 218765834) {
                        result = PngToy._getChunks(buffer, view, me.doCRC, me.allowInvalid);
                        me.buffer = buffer;
                        me.view = view;
                        me.chunks = result.chunks || [];
                        if (me.chunks || me.allowInvalid)
                            resolve();
                        else
                            reject(result.error)
                    } else
                        reject("Not a PNG file.")
                } catch (err) {
                    reject(err.message)
                }
            }
        })
    },
    getChunk: function(chunkName) {
        var chunks = ["IHDR", "IDAT", "PLTE", "sPLT", "tRNS", "iTXt", "tEXt", "zTXt", "iCCP", "gAMA", "cHRM", "sRGB", "hIST", "sBIT", "pHYs", "bKGD", "tIME", "oFFs", "sTER", "sCAL", "pCAL", "IEND"];
        if (chunks.indexOf(chunkName) > -1) {
            return chunkName === "IEND" ? !!PngToy._findChunk(this.chunks, "IEND") : PngToy["_" + chunkName](this)
        } else {
            return PngToy._findChunk(this.chunks, chunkName)
        }
    },
    toMinimal: function(forDownload) {
        if (this.chunks.length) {
            var chunkTypes = ["IHDR", "IDAT", "IEND", "PLTE", "tRNS", "gAMA"];
            var parts = [new Uint32Array([1196314761, 169478669])];
            this.chunks.forEach(function(chunk) {
                if (chunkTypes.indexOf(chunk.name) > -1)
                    parts.push(chunk.getRaw(true))
            });
            return new Blob(parts, {
                type: forDownload ? "application/octet-stream" : "image/png"
            })
        } else
            throw "No file loaded (see fetch())."
    },
    getGammaLUT: function(fileGamma, dispGamma, userGamma) {
        for (var buffer = new Uint8Array(256), gamma = 1 / ((fileGamma || 1) * (dispGamma || 2.2) * (userGamma || 1)), i = 0; i < 256; i++)
            buffer[i] = Math.round(Math.pow(i / 255, gamma) * 255);
        return buffer
    },
    guessDisplayGamma: function() {
        return navigator.userAgent.indexOf("Mac OS") > -1 ? 1.8 : 2.2
    }
};
PngToy._blockSize = 1 << 21;
PngToy._delay = 7;
if (typeof exports !== "undefined")
    exports.PngToy = PngToy;
PngToy._getChunks = function(buffer, view, doCRC, allowInvalid) {
    var me = this,
        pos = 8,
        len = buffer.byteLength,
        chunks = [],
        chunk, length, fourCC, offset, crc, colorType, plteChunk, trnsChunk, histChunk, offsChunk, sterChunk, isIDAT = true,
        noConst = ["iTXT", "tIME", "tEXt", "zTXt"],
        fc = PngToy._findChunk,
        errNum = "Invalid number of ",
        errOrd = "Invalid chunk order for ";
    if (doCRC && !this.table) {
        this.table = new Uint32Array(256);
        for (var i = 0, j; i < 256; i++) {
            crc = i >>> 0;
            for (j = 0; j < 8; j++)
                crc = crc & 1 ? 3988292384 ^ crc >>> 1 : crc >>> 1;
            this.table[i] = crc
        }
    }
    while (pos < len) {
        length = getUint32();
        fourCC = getFourCC();
        if (length > 2147483647 && !allowInvalid)
            return {
                error: "Invalid chunk size."
            };
        offset = pos;
        pos = offset + length;
        crc = getUint32();
        chunk = new PngToy.Chunk(fourCC, offset, length, crc, buffer);
        if (doCRC) {
            checkCRC(chunk);
            if (!chunk.crcOk && !allowInvalid)
                return {
                    error: "Invalid CRC in chunk " + fourCC
                }
        }
        if (chunk.isReserved && !allowInvalid)
            return {
                error: "Invalid chunk name: " + fourCC
            };
        chunks.push(chunk)
    }
    if (!allowInvalid) {
        if (!chunksInRange("IHDR", 1, 1))
            return {
                error: errNum + "IHDR chunks."
            };
        if (!chunksInRange("tIME", 0, 1))
            return {
                error: errNum + "tIME chunks."
            };
        if (!chunksInRange("zTXt", 0, -1))
            return {
                error: errNum + "zTXt chunks."
            };
        if (!chunksInRange("tEXt", 0, -1))
            return {
                error: errNum + "tEXt chunks."
            };
        if (!chunksInRange("iTXt", 0, -1))
            return {
                error: errNum + "iTXt chunks."
            };
        if (!chunksInRange("pHYs", 0, 1))
            return {
                error: errNum + "pHYs chunks."
            };
        if (!chunksInRange("sPLT", 0, -1))
            return {
                error: errNum + "sPLT chunks."
            };
        if (!chunksInRange("iCCP", 0, 1))
            return {
                error: errNum + "iCCP chunks."
            };
        if (!chunksInRange("sRGB", 0, 1))
            return {
                error: errNum + "sRGB chunks."
            };
        if (!chunksInRange("sBIT", 0, 1))
            return {
                error: errNum + "sBIT chunks."
            };
        if (!chunksInRange("gAMA", 0, 1))
            return {
                error: errNum + "gAMA chunks."
            };
        if (!chunksInRange("cHRM", 0, 1))
            return {
                error: errNum + "cHRM chunks."
            };
        if (!chunksInRange("PLTE", 0, 1))
            return {
                error: errNum + "PLTE chunks."
            };
        if (!chunksInRange("tRNS", 0, 1))
            return {
                error: errNum + "tRNS chunks."
            };
        if (!chunksInRange("hIST", 0, 1))
            return {
                error: errNum + "hIST chunks."
            };
        if (!chunksInRange("bKGD", 0, 1))
            return {
                error: errNum + "bKGD chunks."
            };
        if (!chunksInRange("IDAT", 1, -1))
            return {
                error: errNum + "IDAT chunks."
            };
        if (!chunksInRange("IEND", 1, 1))
            return {
                error: errNum + "IEND chunks."
            };
        if (chunks[0].name !== "IHDR" || chunks[chunks.length - 1].name !== "IEND")
            return {
                error: "Invalid PNG chunk order."
            };
        colorType = view.getUint8(fc(chunks, "IHDR").offset + 9);
        plteChunk = fc(chunks, "PLTE");
        histChunk = fc(chunks, "hIST");
        trnsChunk = fc(chunks, "tRNS");
        offsChunk = fc(chunks, "oFFs");
        sterChunk = fc(chunks, "sTER");
        if (fc(chunks, "iCCP") && fc(chunks, "sRGB"))
            return {
                error: "Both iCCP and sRGB cannot be present."
            };
        if (colorType === 3 && !plteChunk)
            return {
                error: "Missing PLTE chunk."
            };
        if ((colorType === 0 || colorType === 4) && plteChunk)
            return {
                error: "PLTE chunk should not appear with this color type."
            };
        if ((colorType === 4 || colorType === 6) && trnsChunk)
            return {
                error: "tRNS chunk should not appear with this color type."
            };
        if (histChunk && !plteChunk)
            return {
                error: "hIST chunk can only appear if a PLTE chunk is present."
            };
        if (plteChunk) {
            if (!isBefore("PLTE", "IDAT"))
                return {
                    error: errOrd + "PLTE."
                };
            if (histChunk && !isBetween("PLTE", "hIST", "IDAT"))
                return {
                    error: errOrd + "hIST."
                };
            if (trnsChunk && !isBetween("PLTE", "tRNS", "IDAT"))
                return {
                    error: errOrd + "tRNS."
                };
            if (fc(chunks, "bKGD") && !isBetween("PLTE", "bKGD", "IDAT"))
                return {
                    error: errOrd + "bKGD."
                };
            if (!isBefore("cHRM", "PLTE"))
                return {
                    error: errOrd + "cHRM."
                };
            if (!isBefore("gAMA", "PLTE"))
                return {
                    error: errOrd + "gAMA."
                };
            if (!isBefore("iCCP", "PLTE"))
                return {
                    error: errOrd + "iCCP."
                };
            if (!isBefore("sRGB", "PLTE"))
                return {
                    error: errOrd + "sRGB."
                }
        }
        if (offsChunk && !isBefore("oFFs", "IDAT"))
            return {
                error: errOrd + "oFFs."
            };
        if (sterChunk && !isBefore("sTER", "IDAT"))
            return {
                error: errOrd + "sTER."
            };
        for (i = chunks.length - 2; i > 0; i--) {
            if (isIDAT && chunks[i].name !== "IDAT" && noConst.indexOf(chunks[i].name) < 0) {
                isIDAT = false
            } else if (!isIDAT && chunks[i].name === "IDAT") {
                return {
                    error: "Invalid chunk inside IDAT chunk sequence."
                }
            }
        }
    }
    return {
        chunks: chunks
    };

    function chunksInRange(chunk, min, max) {
        var lst = PngToy._findChunks(chunks, chunk);
        return max < 0 ? lst.length >= min : lst.length >= min && lst.length <= max
    }

    function isBetween(beforeChunk, chunk, afterChunk) {
        return isBefore(beforeChunk, chunk) && isBefore(chunk, afterChunk)
    }

    function isBefore(beforeChunk, chunk) {
        var bi = -1,
            ci = -1,
            i, l = chunks.length;
        for (i = 0; i < l; i++) {
            if (chunks[i].name === beforeChunk)
                bi = i;
            if (chunks[i].name === chunk)
                ci = i
        }
        return bi < ci
    }

    function checkCRC(chunk) {
        var crcBuffer = new Uint8Array(buffer, chunk.offset - 4, chunk.length + 4);
        chunk.crcOk = chunk.crc === calcCRC(crcBuffer);

        function calcCRC(buffer) {
            var crc = -1 >>> 0,
                len = buffer.length,
                i;
            for (i = 0; i < len; i++)
                crc = crc >>> 8 ^ me.table[(crc ^ buffer[i]) & 255];
            return (crc ^ -1) >>> 0
        }
    }

    function getFourCC() {
        var v = getUint32(),
            c = String.fromCharCode;
        return c(v >>> 24) + c(v >> 16 & 255) + c(v >> 8 & 255) + c(v & 255)
    }

    function getUint32() {
        var i = view.getUint32(pos);
        pos += 4;
        return i >>> 0
    }
};
PngToy._getChunks.table = null;
PngToy._findChunk = function(chunks, name) {
    for (var i = 0, chunk; chunk = chunks[i++];) {
        if (chunk.name === name)
            return chunk
    }
    return null
};
PngToy._findChunks = function(chunks, name) {
    var lst = [];
    chunks.forEach(function(chunk) {
        if (chunk.name === name)
            lst.push(chunk)
    });
    return lst
};
PngToy._getStr = function(view, offset, max) {
    var text = "",
        i = offset,
        ch = -1,
        v, warn = false,
        getChar = String.fromCharCode,
        san = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"%&'()*+,-./:;<=>?_";
    max += i;
    for (; i < max && ch;) {
        ch = view.getUint8(i++);
        if (ch) {
            v = getChar(ch);
            if (san.indexOf(v) > -1)
                text += v;
            else
                warn = true;
            continue
        }
        break
    }
    return {
        offset: i,
        text: text,
        warning: warn
    }
};
PngToy.Chunk = function(name, offset, length, crc, buffer) {
    this.name = name;
    this.offset = offset;
    this.length = length;
    this.crc = crc;
    this.crcOk = true;
    this.isCritical = !(name.charCodeAt(0) & 32);
    this.isPrivate = !!(name.charCodeAt(1) & 32);
    this.isReserved = !!(name.charCodeAt(2) & 32);
    this.isCopySafe = !!(name.charCodeAt(3) & 32);
    this.buffer = buffer
};
PngToy.Chunk.prototype = {
    getRaw: function(includeContainer) {
        return includeContainer ? new Uint8Array(this.buffer, this.offset - 8, this.length + 12) : new Uint8Array(this.buffer, this.offset, this.length)
    }
};
PngToy._bKGD = function(host) {
    var view = host.view,
        chunks = host.chunks,
        chunk = PngToy._findChunk(chunks, "bKGD"),
        ihdr = PngToy._IHDR(host);
    if (!chunk)
        return null;
    switch (ihdr.type) {
        case 0:
        case 4:
            return {
                background: [view.getUint16(chunk.offset)]
            };
        case 2:
        case 6:
            return {
                background: new Uint16Array(view.buffer, chunk.offset, 6)
            };
        default:
            return {
                index: view.getUint8(chunk.offset)
            }
    }
};
PngToy._cHRM = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "cHRM"),
        result, pos;
    if (!chunk)
        return null;
    pos = chunk.offset;
    result = {
        whiteX: view.getUint32(pos) / 1e5,
        whiteY: view.getUint32(pos + 4) / 1e5,
        redX: view.getUint32(pos + 8) / 1e5,
        redY: view.getUint32(pos + 12) / 1e5,
        greenX: view.getUint32(pos + 16) / 1e5,
        greenY: view.getUint32(pos + 20) / 1e5,
        blueX: view.getUint32(pos + 24) / 1e5,
        blueY: view.getUint32(pos + 28) / 1e5
    };
    if (!allowInvalid) {}
    return result
};
PngToy._oFFs = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "oFFs"),
        pos, result = {};
    if (!chunk)
        return null;
    pos = chunk.offset;
    result.x = view.getInt32(pos);
    result.y = view.getInt32(pos + 4);
    result.unit = view.getUint8(pos + 8);
    result.desc = ["Pixels", "Micrometers"][result.unit] || "Invalid";
    if (!allowInvalid) {
        if (result.unit < 0 || result.unit > 1)
            return {
                error: "Invalid unit for oFFs chunk."
            }
    }
    return result
};
PngToy._pCAL = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "pCAL"),
        warn = false,
        pos, o, result = {},
        params = [],
        i = 0,
        len;
    if (!chunk.length)
        return null;
    pos = chunk.offset;
    o = PngToy._getStr(view, pos, 80);
    result.calName = o.text;
    pos = o.offset;
    if (o.warn)
        warn = true;
    result.x0 = view.getInt32(pos);
    result.x1 = view.getInt32(pos + 4);
    result.eqType = view.getUint8(pos + 8);
    result.eqDesc = ["Linear mapping", "Base-e exponential mapping", "Arbitrary-base exponential mapping", "Hyperbolic mapping"][result.eqType] || null;
    result.paramCount = view.getUint8(pos + 9);
    pos += 10;
    o = PngToy._getStr(view, pos, 1e4);
    result.unitName = o.text;
    pos = o.offset;
    if (o.warn)
        warn = true;
    len = result.paramCount - 1;
    for (; i < len; i++) {
        o = PngToy._getStr(view, pos, 1e4);
        params.push(o.text);
        pos = o.offset;
        if (o.warn)
            warn = true
    }
    o = PngToy._getStr(view, pos, chunk.length - (pos - chunk.offset));
    params.push(o.text);
    if (o.warn)
        warn = true;
    result.parameters = params;
    if (!allowInvalid) {
        if (result.x0 === result.x1)
            return {
                error: "Invalid x0 or x1."
            };
        if (params.length !== result.paramCount)
            return {
                error: "Mismatching parameter count and number of parameters."
            };
        if (result.eqType < 0 || result.eqType > 3)
            return {
                error: "Invalid equation type."
            };
        if (warn)
            return {
                error: "One or more text field contains illegal chars."
            }
    }
    return result
};
PngToy._sCAL = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "sCAL"),
        pos, o, result = {};
    if (!chunk.length)
        return null;
    pos = chunk.offset;
    result.unit = view.getUint8(pos++);
    result.desc = ["meters", "radians"][result.unit] || null;
    o = PngToy._getStr(view, pos, 1e5);
    result.unitsX = o.text;
    pos = o.offset;
    o = PngToy._getStr(view, pos, chunk.length - (pos - chunk.offset));
    result.unitsY = o.text;
    if (!allowInvalid) {
        if (result.unit < 1 || result.unit > 2)
            return {
                error: "Invalid unit"
            }
    }
    return result
};
PngToy._sTER = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "sTER"),
        pos, result = {};
    if (!chunk)
        return null;
    pos = chunk.offset;
    result.mode = view.getUint8(pos);
    result.desc = ["Cross-fuse layout", "Diverging-fuse layout"][result.mode];
    if (!allowInvalid) {
        if (result.mode < 0 || result.mode > 1)
            return {
                error: "Invalid mode for sTER chunk."
            }
    }
    return result
};
PngToy._gAMA = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "gAMA"),
        gamma;
    if (!chunk)
        return null;
    gamma = view.getUint32(chunk.offset) / 1e5;
    if (!allowInvalid) {}
    return {
        gamma: gamma
    }
};
PngToy._hIST = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "hIST"),
        plte = PngToy._PLTE(host),
        hist = [],
        pos, max;
    if (!chunk)
        return null;
    if (!allowInvalid && chunk.length % 2)
        return {
            error: "Invalid length of hIST chunk."
        };
    pos = chunk.offset;
    max = pos + chunk.length;
    for (; pos < max; pos += 2)
        hist.push(view.getUint16(pos));
    if (!allowInvalid) {
        if (hist.length !== plte.length)
            return {
                error: "hIST chunk must have same number of entries as PLTE chunk."
            }
    }
    return {
        histogram: hist
    }
};
PngToy._IHDR = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "IHDR"),
        pos, result;
    if (!chunk)
        return {
            error: "Critical - IHDR chunk is missing."
        };
    pos = chunk.offset;
    result = {
        width: view.getUint32(pos),
        height: view.getUint32(pos + 4),
        depth: view.getUint8(pos + 8),
        type: view.getUint8(pos + 9),
        compression: view.getUint8(pos + 10),
        filter: view.getUint8(pos + 11),
        interlaced: view.getUint8(pos + 12)
    };
    if (!allowInvalid) {
        if ([0, 2, 3, 4, 6].indexOf(result.type) < 0)
            return {
                error: "Invalid color type."
            };
        switch (result.type) {
            case 0:
                if ([1, 2, 4, 8, 16].indexOf(result.depth) < 0)
                    return {
                        error: "Invalid color depth."
                    };
                break;
            case 3:
                if ([1, 2, 4, 8].indexOf(result.depth) < 0)
                    return {
                        error: "Invalid color depth."
                    };
                break;
            default:
                if ([8, 16].indexOf(result.depth) < 0)
                    return {
                        error: "Invalid color depth."
                    }
        }
        if (!result.width || !result.height)
            return {
                error: "Invalid dimension."
            };
        if (result.compression)
            return {
                error: "Invalid compression type."
            };
        if (result.filter)
            return {
                error: "Invalid filter type."
            };
        if (result.interlaced < 0 || result.interlaced > 1)
            return {
                error: "Invalid interlace mode " + result.interlaced
            }
    }
    return result
};
PngToy._pHYs = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "pHYs"),
        pos, result = {};
    if (!chunk)
        return null;
    pos = chunk.offset;
    result.ppuX = view.getUint32(pos);
    result.ppuY = view.getUint32(pos + 4);
    result.unit = view.getUint8(pos + 8);
    if (result.unit === 1) {
        result.desc = "Meters"
    } else {
        result.desc = "ratio"
    }
    if (!allowInvalid) {
        if (result.ppuX > 2147483647 || result.ppuY > 2147483647)
            return {
                error: "Invalid unit lengths."
            };
        if (result.unit < 0 || result.unit > 1)
            return {
                error: "Invalid unit for pHYs chunk."
            }
    } else {
        result.ppuX &= 2147483647;
        result.ppuY &= 2147483647;
        result.unit &= 1
    }
    return result
};
PngToy._PLTE = function(host) {
    var buffer = host.buffer,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "PLTE"),
        palette;
    if (!chunk)
        return null;
    palette = new Uint8Array(buffer, chunk.offset, chunk.length);
    if (!allowInvalid) {
        if (palette.length % 3)
            return {
                error: "Invalid palette size."
            };
        if (palette.length < 3 || palette.length > 3 * 256)
            return {
                error: "Invalid number of palette entries."
            }
    }
    return {
        palette: palette,
        length: palette.length / 3
    }
};
PngToy._sBIT = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "sBIT"),
        ihdr = PngToy._IHDR(host),
        pos, depth, hasError = false,
        result = {
            grey: null,
            alpha: null,
            red: null,
            green: null,
            blue: null
        };
    if (!chunk)
        return null;
    pos = chunk.offset;
    depth = ihdr.type === 3 ? 8 : ihdr.depth;
    switch (ihdr.type) {
        case 0:
            result.grey = view.getUint8(pos);
            break;
        case 2:
        case 3:
            result.red = view.getUint8(pos++);
            result.green = view.getUint8(pos++);
            result.blue = view.getUint8(pos);
            break;
        case 4:
            result.grey = view.getUint8(pos++);
            result.alpha = view.getUint8(pos);
            break;
        case 6:
            result.red = view.getUint8(pos++);
            result.green = view.getUint8(pos++);
            result.blue = view.getUint8(pos++);
            result.alpha = view.getUint8(pos);
            break
    }
    if (!allowInvalid) {
        if (null !== result.red)
            if (result.red > depth || result.red === 0)
                hasError = true;
        if (null !== result.green)
            if (result.green > depth || result.green === 0)
                hasError = true;
        if (null !== result.blue)
            if (result.blue > depth || result.blue === 0)
                hasError = true;
        if (null !== result.grey)
            if (result.grey > depth || result.grey === 0)
                hasError = true;
        if (null !== result.alpha)
            if (result.alpha > depth || result.alpha === 0)
                hasError = true;
        if (hasError)
            return {
                error: "Invalid sBIT chunk."
            }
    }
    return result
};
PngToy._sPLT = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunkLst = PngToy._findChunks(chunks, "sPLT"),
        lst = [];
    if (!chunkLst.length)
        return null;
    chunkLst.forEach(function(chunk) {
        var result = {
                depth: null,
                name: null,
                palette: [],
                entries: 0
            },
            nameO, pos, len, width, b, palette = [],
            i, func;
        pos = chunk.offset;
        nameO = PngToy._getStr(view, pos, 80);
        result.name = nameO.text;
        pos = nameO.offset;
        result.depth = view.getUint8(pos++);
        width = result.depth === 8 ? 6 : 10;
        b = result.depth === 8 ? 1 : 2;
        len = chunk.length - (pos - chunk.offset);
        func = width === 6 ? view.getUint8.bind(view) : view.getUint16.bind(view);
        for (i = 0; i < len; i += width) {
            palette.push(func(pos + i), func(pos + i + b), func(pos + i + b * 2), func(pos + i + b * 3), view.getUint16(pos + i + b * 4))
        }
        result.palette = palette;
        result.entries = palette.length / width;
        if (!allowInvalid) {
            if (result.depth === 8 && len % 6 || result.depth === 16 && len % 10)
                return {
                    error: "Invalid sPLT chunk."
                }
        }
        lst.push(result)
    });
    return lst
};
PngToy._sRGB = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "sRGB"),
        intent, intents = ["Perceptual", "Relative colorimetric", "Saturation", "Absolute colorimetric"];
    if (!chunk)
        return null;
    intent = view.getUint8(chunk.offset);
    if (!allowInvalid) {
        if (intent < 0 || intent > 3)
            return {
                error: "Invalid range for sRGB render intent."
            }
    }
    return {
        intent: intent,
        desc: intents[intent] || null
    }
};
PngToy._tEXt = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunkLst = PngToy._findChunks(chunks, "tEXt"),
        warn = false,
        abort = false,
        pos, txtBuff, o, i, lst = [];
    if (!chunkLst.length)
        return null;
    chunkLst.forEach(function(chunk) {
        if (abort)
            return;
        var result = {};
        pos = chunk.offset;
        o = PngToy._getStr(view, pos, 80);
        result.keyword = o.text;
        pos = o.offset;
        if (o.warn)
            warn = true;
        txtBuff = new Uint8Array(view.buffer, pos, chunk.length - (pos - chunk.offset));
        o = "";
        for (i = 0; i < txtBuff.length; i++)
            o += String.fromCharCode(txtBuff[i]);
        result.text = o;
        lst.push(result);
        if (!allowInvalid && warn) {
            abort = true;
            return {
                error: "One or more field contains illegal chars."
            }
        }
    });
    return lst
};
PngToy._tIME = function(host) {
    var view = host.view,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "tIME"),
        pos, result;
    if (!chunk)
        return null;
    pos = chunk.offset;
    result = {
        year: view.getUint16(pos),
        month: view.getUint8(pos + 2),
        day: view.getUint8(pos + 3),
        hour: view.getUint8(pos + 4),
        minute: view.getUint8(pos + 5),
        second: view.getUint8(pos + 6),
        date: null
    };
    if (!allowInvalid) {
        if (result.year < 0 || result.year > 65535 || result.month < 1 || result.month > 12 || result.day < 1 || result.day > 31 || result.hour < 0 || result.hour > 23 || result.minute < 0 || result.minute > 59 || result.second < 0 || result.second > 60)
            return {
                error: "Invalid timestamp."
            }
    }
    try {
        result.date = new Date(result.year, result.month - 1, result.day, result.hour, result.minute, Math.min(59, result.second))
    } catch (err) {
        if (!allowInvalid)
            return {
                error: err
            }
    }
    return result
};
PngToy._tRNS = function(host) {
    var buffer = host.buffer,
        chunks = host.chunks,
        allowInvalid = host.allowInvalid,
        chunk = PngToy._findChunk(chunks, "tRNS"),
        plte = PngToy._PLTE(host),
        ihdr = PngToy._IHDR(host),
        trans;
    if (!chunk)
        return null;
    if (!allowInvalid) {
        if (ihdr.type === 2 && chunk.length % 6)
            return {
                error: "Invalid tRNS length."
            }
    }
    switch (ihdr.type) {
        case 0:
            trans = {
                alphas: new Uint16Array(buffer.slice(chunk.offset, chunk.offset + chunk.length)),
                length: chunk.length >> 1
            };
            break;
        case 2:
            trans = {
                alphas: new Uint16Array(buffer.slice(chunk.offset, chunk.offset + chunk.length)),
                length: chunk.length / 6
            };
            break;
        case 3:
            trans = {
                alphas: new Uint8Array(buffer, chunk.offset, chunk.length),
                length: chunk.length
            };
            break;
        default:
            return allowInvalid ? {
                alphas: null,
                length: 0
            } : {
                error: "tRNS chunk is not valid for this color type."
            }
    }
    if (!allowInvalid && plte && trans.length > plte.length)
        return {
            error: "tRNS chunk contains more entries than palette entries."
        };
    return trans
};
! function() {
    if (!Object.assign) {
        Object.assign = function(e, t) {
            for (var n, r = arguments, o = 1; o < arguments.length; o++) {
                n = Object(r[o]);
                for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }
    }
}()

/*! canvas_fingerprint */
function get_canvas_fingerprint() {
    const result = {};
    var n, a, f, r = !0,
        s = false,
        i = false,
        t = false,
        o = "MyCanvasFingerPrint,!$ <canvas> 1.0";
    var iframe = document.createElement('iframe');
    iframe.id = 'canvas-iframe';
    iframe.setAttribute('sandbox', 'allow-same-origin');
    iframe.style.visibility = 'hidden';
    iframe.style.width = '0';
    iframe.style.height = '0';
    document.body.appendChild(iframe)
    if ((c = document.querySelector("#canvas-iframe").contentDocument.createElement("canvas")).getContext && (n = c.getContext("2d"))) {
        if (s = true,
            "function" == typeof c.getContext("2d").fillText) {
            i = true;
            try {
                c.setAttribute("width", 220),
                    c.setAttribute("height", 30),
                    n.textBaseline = "top",
                    n.font = "14px 'Arial'",
                    n.textBaseline = "alphabetic",
                    n.fillStyle = "#f60",
                    n.fillRect(125, 1, 62, 20),
                    n.fillStyle = "#069",
                    n.fillText(o, 2, 15),
                    n.fillStyle = "rgba(102, 204, 0, 0.7)",
                    n.fillText(o, 4, 17)
            } catch (t) {
                void 0 === (n = (c = document.createElement("canvas")).getContext("2d")) || "function" != typeof c.getContext("2d").fillText ? (s = false,
                    i = false,
                    r = !1) : (c.setAttribute("width", 220),
                    c.setAttribute("height", 30),
                    n.textBaseline = "top",
                    n.font = "14px 'Arial'",
                    n.textBaseline = "alphabetic",
                    n.fillStyle = "#f60",
                    n.fillRect(125, 1, 62, 20),
                    n.fillStyle = "#069",
                    n.fillText(o, 2, 15),
                    n.fillStyle = "rgba(102, 204, 0, 0.7)",
                    n.fillText(o, 4, 17))
            }
        } else
            r = !1;
        if (r && "function" == typeof c.toDataURL) {
            try {
                if ("boolean" == typeof(a = c.toDataURL("image/png")) || void 0 === a)
                    throw 1
            } catch (t) {
                a = ""
            }
            0 === a.indexOf("data:image/png") ? t = true : r = !1
        } else
            r = !1
    } else
        r = !1;
    result.canvas_support_2d = s;
    result.canvas_support_text = i;
    result.canvas_support_todataurl = t;
    var o = n,
        l = a,
        c = function() {
            var e = atob(l.split(",")[1]),
                n = new Uint8Array(e.length);
            for (let t = 0; t < e.length; t++)
                n[t] = e.charCodeAt(t);
            return n
        }(),
        s = md5(c),
        d = (result.canvas_fingerprint = s,
            f = s,
            0);
    try {
        for (var v = o.getImageData(0, 0, 220, 30), h = new Uint32Array(v.data.buffer), u = h.length, g = {}, p = 0; p < u; p++) {
            var m = "" + (16777215 & h[p]);
            g[m] || (d++,
                    g[m] = 0),
                g[m]++
        }
    } catch (t) {}
    d < 1 && (d = "n/a"),
        result.canvas_file_colors = d,
        result.canvas_file_size = c.length;
    var x = new PngToy([{
        doCRC: true
    }]);
    if (iframe) {
        iframe.parentNode.removeChild(iframe);
    }
    return result;
}
