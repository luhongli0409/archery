function toast(e) {
    if ("string" == typeof e && (e = {
        msg: e
    }),
    e.msg) {
        var t = document.createElement("div");
        t.id = "toastId",
        t.classList.add("toast", "in"),
        t.innerHTML = `<p class="text">${e.msg}</p>`;
        var a = document.getElementById("toastId");
        if (null == a) {
            document.body.appendChild(t),
            (a = document.getElementById("toastId")).classList.add("in");
            var n = setTimeout( () => {
                a.classList.remove("in"),
                clearInterval(n),
                document.body.removeChild(t)
            }
            , e.time || 2e3)
        }
    } else
        console.error("text 不能为空!")
}
var __lastDownKey, __lastDKt;
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
}(this, function() {
    return t = {
        134: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return b
                }
            });
            t = a(279);
            var n = a.n(t)
              , r = (t = a(370),
            a.n(t))
              , o = (t = a(817),
            a.n(t));
            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function l(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            var c = function() {
                function e(t) {
                    !function(t) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this),
                    this.resolveOptions(t),
                    this.initSelection()
                }
                var t, a;
                return t = e,
                (a = [{
                    key: "resolveOptions",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = e.action,
                        this.container = e.container,
                        this.emitter = e.emitter,
                        this.target = e.target,
                        this.text = e.text,
                        this.trigger = e.trigger,
                        this.selectedText = ""
                    }
                }, {
                    key: "initSelection",
                    value: function() {
                        this.text ? this.selectFake() : this.target && this.selectTarget()
                    }
                }, {
                    key: "createFakeElement",
                    value: function() {
                        var e = "rtl" === document.documentElement.getAttribute("dir");
                        return this.fakeElem = document.createElement("textarea"),
                        this.fakeElem.style.fontSize = "12pt",
                        this.fakeElem.style.border = "0",
                        this.fakeElem.style.padding = "0",
                        this.fakeElem.style.margin = "0",
                        this.fakeElem.style.position = "absolute",
                        this.fakeElem.style[e ? "right" : "left"] = "-9999px",
                        e = window.pageYOffset || document.documentElement.scrollTop,
                        this.fakeElem.style.top = "".concat(e, "px"),
                        this.fakeElem.setAttribute("readonly", ""),
                        this.fakeElem.value = this.text,
                        this.fakeElem
                    }
                }, {
                    key: "selectFake",
                    value: function() {
                        var e = this
                          , t = this.createFakeElement();
                        this.fakeHandlerCallback = function() {
                            return e.removeFake()
                        }
                        ,
                        this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                        this.container.appendChild(t),
                        this.selectedText = o()(t),
                        this.copyText(),
                        this.removeFake()
                    }
                }, {
                    key: "removeFake",
                    value: function() {
                        this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                        this.fakeHandler = null,
                        this.fakeHandlerCallback = null),
                        this.fakeElem && (this.container.removeChild(this.fakeElem),
                        this.fakeElem = null)
                    }
                }, {
                    key: "selectTarget",
                    value: function() {
                        this.selectedText = o()(this.target),
                        this.copyText()
                    }
                }, {
                    key: "copyText",
                    value: function() {
                        var e;
                        try {
                            e = document.execCommand(this.action)
                        } catch (t) {
                            e = !1
                        }
                        this.handleResult(e)
                    }
                }, {
                    key: "handleResult",
                    value: function(e) {
                        this.emitter.emit(e ? "success" : "error", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        })
                    }
                }, {
                    key: "clearSelection",
                    value: function() {
                        this.trigger && this.trigger.focus(),
                        document.activeElement.blur(),
                        window.getSelection().removeAllRanges()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeFake()
                    }
                }, {
                    key: "action",
                    set: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                        if (this._action = e,
                        "copy" !== this._action && "cut" !== this._action)
                            throw new Error('Invalid "action" value, use either "copy" or "cut"')
                    },
                    get: function() {
                        return this._action
                    }
                }, {
                    key: "target",
                    set: function(e) {
                        if (void 0 !== e) {
                            if (!e || "object" !== i(e) || 1 !== e.nodeType)
                                throw new Error('Invalid "target" value, use a valid Element');
                            if ("copy" === this.action && e.hasAttribute("disabled"))
                                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                                throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                            this._target = e
                        }
                    },
                    get: function() {
                        return this._target
                    }
                }]) && l(t.prototype, a),
                e
            }();
            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function d(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function u(e, t) {
                return (u = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function p(e, t) {
                if (e = "data-clipboard-".concat(e),
                t.hasAttribute(e))
                    return t.getAttribute(e)
            }
            var b = function() {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && u(e, t)
                }(i, n());
                var e, t, a, o = function(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var a, n = f(e);
                        return a = t ? (a = f(this).constructor,
                        Reflect.construct(n, arguments, a)) : n.apply(this, arguments),
                        n = this,
                        !(a = a) || "object" !== s(a) && "function" != typeof a ? function(e) {
                            if (void 0 !== n)
                                return n;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }() : a
                    }
                }(i);
                function i(e, t) {
                    var a;
                    return function(e) {
                        if (!(e instanceof i))
                            throw new TypeError("Cannot call a class as a function")
                    }(this),
                    (a = o.call(this)).resolveOptions(t),
                    a.listenClick(e),
                    a
                }
                return e = i,
                a = [{
                    key: "isSupported",
                    value: function() {
                        var e = "string" == typeof (e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]) ? [e] : e
                          , t = !!document.queryCommandSupported;
                        return e.forEach(function(e) {
                            t = t && !!document.queryCommandSupported(e)
                        }),
                        t
                    }
                }],
                (t = [{
                    key: "resolveOptions",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                        this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                        this.text = "function" == typeof e.text ? e.text : this.defaultText,
                        this.container = "object" === s(e.container) ? e.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(e) {
                        var t = this;
                        this.listener = r()(e, "click", function(e) {
                            return t.onClick(e)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function(e) {
                        e = e.delegateTarget || e.currentTarget,
                        this.clipboardAction && (this.clipboardAction = null),
                        this.clipboardAction = new c({
                            action: this.action(e),
                            target: this.target(e),
                            text: this.text(e),
                            container: this.container,
                            trigger: e,
                            emitter: this
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(e) {
                        return p("action", e)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(e) {
                        if (e = p("target", e))
                            return document.querySelector(e)
                    }
                }, {
                    key: "defaultText",
                    value: function(e) {
                        return p("text", e)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy(),
                        this.clipboardAction && (this.clipboardAction.destroy(),
                        this.clipboardAction = null)
                    }
                }]) && d(e.prototype, t),
                a && d(e, a),
                i
            }()
        },
        828: function(e) {
            var t;
            "undefined" == typeof Element || Element.prototype.matches || ((t = Element.prototype).matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector),
            e.exports = function(e, t) {
                for (; e && 9 !== e.nodeType; ) {
                    if ("function" == typeof e.matches && e.matches(t))
                        return e;
                    e = e.parentNode
                }
            }
        },
        438: function(e, t, a) {
            var n = a(828);
            function r(e, t, a, r, o) {
                var i = function(e, t, a, r) {
                    return function(a) {
                        a.delegateTarget = n(a.target, t),
                        a.delegateTarget && r.call(e, a)
                    }
                }
                .apply(this, arguments);
                return e.addEventListener(a, i, o),
                {
                    destroy: function() {
                        e.removeEventListener(a, i, o)
                    }
                }
            }
            e.exports = function(e, t, a, n, o) {
                return "function" == typeof e.addEventListener ? r.apply(null, arguments) : "function" == typeof a ? r.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)),
                Array.prototype.map.call(e, function(e) {
                    return r(e, t, a, n, o)
                }))
            }
        },
        879: function(e, t) {
            t.node = function(e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }
            ,
            t.nodeList = function(e) {
                var a = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === a || "[object HTMLCollection]" === a) && "length"in e && (0 === e.length || t.node(e[0]))
            }
            ,
            t.string = function(e) {
                return "string" == typeof e || e instanceof String
            }
            ,
            t.fn = function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        },
        370: function(e, t, a) {
            var n = a(879)
              , r = a(438);
            e.exports = function(e, t, a) {
                if (!e && !t && !a)
                    throw new Error("Missing required arguments");
                if (!n.string(t))
                    throw new TypeError("Second argument must be a String");
                if (!n.fn(a))
                    throw new TypeError("Third argument must be a Function");
                if (n.node(e))
                    return s = t,
                    d = a,
                    (c = e).addEventListener(s, d),
                    {
                        destroy: function() {
                            c.removeEventListener(s, d)
                        }
                    };
                if (n.nodeList(e))
                    return o = e,
                    i = t,
                    l = a,
                    Array.prototype.forEach.call(o, function(e) {
                        e.addEventListener(i, l)
                    }),
                    {
                        destroy: function() {
                            Array.prototype.forEach.call(o, function(e) {
                                e.removeEventListener(i, l)
                            })
                        }
                    };
                if (n.string(e))
                    return e = e,
                    t = t,
                    a = a,
                    r(document.body, e, t, a);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                var o, i, l, c, s, d
            }
        },
        817: function(e) {
            e.exports = function(e) {
                var t, a = "SELECT" === e.nodeName ? (e.focus(),
                e.value) : "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName ? ((t = e.hasAttribute("readonly")) || e.setAttribute("readonly", ""),
                e.select(),
                e.setSelectionRange(0, e.value.length),
                t || e.removeAttribute("readonly"),
                e.value) : (e.hasAttribute("contenteditable") && e.focus(),
                a = window.getSelection(),
                (t = document.createRange()).selectNodeContents(e),
                a.removeAllRanges(),
                a.addRange(t),
                a.toString());
                return a
            }
        },
        279: function(e) {
            function t() {}
            t.prototype = {
                on: function(e, t, a) {
                    var n = this.e || (this.e = {});
                    return (n[e] || (n[e] = [])).push({
                        fn: t,
                        ctx: a
                    }),
                    this
                },
                once: function(e, t, a) {
                    var n = this;
                    function r() {
                        n.off(e, r),
                        t.apply(a, arguments)
                    }
                    return r._ = t,
                    this.on(e, r, a)
                },
                emit: function(e) {
                    for (var t = [].slice.call(arguments, 1), a = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, r = a.length; n < r; n++)
                        a[n].fn.apply(a[n].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var a = this.e || (this.e = {})
                      , n = a[e]
                      , r = [];
                    if (n && t)
                        for (var o = 0, i = n.length; o < i; o++)
                            n[o].fn !== t && n[o].fn._ !== t && r.push(n[o]);
                    return r.length ? a[e] = r : delete a[e],
                    this
                }
            },
            e.exports = t,
            e.exports.TinyEmitter = t
        }
    },
    a = {},
    e.n = function(t) {
        var a = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(a, {
            a: a
        }),
        a
    }
    ,
    e.d = function(t, a) {
        for (var n in a)
            e.o(a, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            })
    }
    ,
    e.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    e(134).default;
    function e(n) {
        if (a[n])
            return a[n].exports;
        var r = a[n] = {
            exports: {}
        };
        return t[n](r, r.exports, e),
        r.exports
    }
    var t, a
}),
function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "undefined" != typeof exports ? t() : (t(),
    e.FileSaver = {})
}(this, function() {
    "use strict";
    function e(e, t, a) {
        var n = new XMLHttpRequest;
        n.open("GET", e),
        n.responseType = "blob",
        n.onload = function() {
            o(n.response, t, a)
        }
        ,
        n.onerror = function() {
            console.error("could not download file")
        }
        ,
        n.send()
    }
    function t(e) {
        var t = new XMLHttpRequest;
        t.open("HEAD", e, !1);
        try {
            t.send()
        } catch (e) {}
        return 200 <= t.status && 299 >= t.status
    }
    function a(e) {
        try {
            e.dispatchEvent(new MouseEvent("click"))
        } catch (a) {
            var t = document.createEvent("MouseEvents");
            t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
            e.dispatchEvent(t)
        }
    }
    var n = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0
      , r = /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)
      , o = n.saveAs || ("object" != typeof window || window !== n ? function() {}
    : "download"in HTMLAnchorElement.prototype && !r ? function(r, o, i) {
        var l = n.URL || n.webkitURL
          , c = document.createElement("a");
        o = o || r.name || "download",
        c.download = o,
        c.rel = "noopener",
        "string" == typeof r ? (c.href = r,
        c.origin === location.origin ? a(c) : t(c.href) ? e(r, o, i) : a(c, c.target = "_blank")) : (c.href = l.createObjectURL(r),
        setTimeout(function() {
            l.revokeObjectURL(c.href)
        }, 4e4),
        setTimeout(function() {
            a(c)
        }, 0))
    }
    : "msSaveOrOpenBlob"in navigator ? function(n, r, o) {
        if (r = r || n.name || "download",
        "string" != typeof n)
            navigator.msSaveOrOpenBlob(function(e, t) {
                return void 0 === t ? t = {
                    autoBom: !1
                } : "object" != typeof t && (console.warn("Deprecated: Expected third argument to be a object"),
                t = {
                    autoBom: !t
                }),
                t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\ufeff", e],{
                    type: e.type
                }) : e
            }(n, o), r);
        else if (t(n))
            e(n, r, o);
        else {
            var i = document.createElement("a");
            i.href = n,
            i.target = "_blank",
            setTimeout(function() {
                a(i)
            })
        }
    }
    : function(t, a, o, i) {
        if ((i = i || open("", "_blank")) && (i.document.title = i.document.body.innerText = "downloading..."),
        "string" == typeof t)
            return e(t, a, o);
        var l = "application/octet-stream" === t.type
          , c = /constructor/i.test(n.HTMLElement) || n.safari
          , s = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((s || l && c || r) && "undefined" != typeof FileReader) {
            var d = new FileReader;
            d.onloadend = function() {
                var e = d.result;
                e = s ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"),
                i ? i.location.href = e : location = e,
                i = null
            }
            ,
            d.readAsDataURL(t)
        } else {
            var u = n.URL || n.webkitURL
              , f = u.createObjectURL(t);
            i ? i.location = f : location.href = f,
            i = null,
            setTimeout(function() {
                u.revokeObjectURL(f)
            }, 4e4)
        }
    }
    );
    n.saveAs = o.saveAs = o,
    "undefined" != typeof module && (module.exports = o)
}),
document.addEventListener("keydown", function(e) {
    13 === e.keyCode && (e.ctrlKey || e.metaKey) ? $("#btn-sqlquery").click() : 49 === e.keyCode && (e.ctrlKey || e.metaKey) ? colJoin(!0) : 50 === e.keyCode && (e.ctrlKey || e.metaKey) && colJoin(!1),
    __lastDownKey = e,
    __lastDKt && clearTimeout(__lastDKt),
    __lastDKt = setTimeout(function() {
        __lastDownKey = null
    }, 2e3)
}, !1);
var _editor = ace.edit("sql_content_editor");
function colJoin(e) {
    var t, a = _editor, n = a.session.getTextRange(a.getSelectionRange());
    if ("" != n) {
        var r, o, i = (t = n).indexOf("("), l = t.indexOf(")");
        i > -1 && l > -1 && i == t.lastIndexOf("(") && l == t.lastIndexOf(")") && i < l ? (r = t.substr(0, i + 1),
        o = t.substr(l),
        t = t.substr(i + 1, l - i - 1)) : (r = "",
        o = "");
        var c = "";
        t.split(/[,， \n]/).forEach(function(t) {
            "" != (t = t.trim()) && (t.startsWith("'") || (t = e ? "'" + t + "'" : t),
            "" != c && (c += ","),
            c += t)
        });
        var s = r + c + o;
        a.insert(s)
    }
}
_editor.resize(),
$(".panel-heading.form-inline").append('<input id="strJoin" type="button" class="btn btn-info" value="字符串拼接">'),
$.fn.single_double_click = function(e, t, a) {
    return this.each(function() {
        var n = 0
          , r = this;
        $(this).click(function(o) {
            1 == ++n && setTimeout(function() {
                1 == n ? e.call(r, o) : t.call(r, o),
                n = 0
            }, a || 300)
        })
    })
}
,
$("#strJoin").single_double_click(function() {
    colJoin(!0)
}, function() {
    colJoin(!1)
}),
$("#side-menu").append('\n<li>\n    <a href="#"><i class="fa fa-database fa-fw"></i> 常用数据库</a>\n    <ul class="nav nav-second-level " style="color: black">\n        <li id="starDbs"> \n            <a class="fav-db" data-db="core-fms-new-s">fms</a>\n        </li>\n    </ul>\n</li>\n'),
$("body").append('\n<span class="btn btn-default" title="点击收藏" id="starDbBtn" style="position: absolute;top: 7px;z-index: 9999;left: 235px;"><i class="fa fa-star fa-fw"></i></span>\n    ');
const defaultStarDbs = ["core-fms-new-s"];
var _dbs, webDB;
function refreshStarDbs() {
    var e = localStorage.getItem("sql_star_dbs");
    null != e ? _dbs = e.split(",") : (localStorage.setItem("sql_star_dbs", defaultStarDbs.join(",")),
    _dbs = defaultStarDbs);
    for (var t = "", a = 0; a < _dbs.length; a++)
        t = t + '<a class="fav-db" data-db="' + _dbs[a] + '">' + _dbs[a].split(".")[0] + "</a>";
    $("#starDbs").html(t),
    $(".fav-db").single_double_click(function(e) {
        var t = $(this).data("db");
        $("#instance_name").val(t),
        $("#instance_name").selectpicker("refresh"),
        get_instance(!0)
    }, function(e) {
        confirm("是的双击可以删除，确认删除吗？") && unStarDb($(this).data("db"))
    })
}
function starDb() {
    if ("" != $("#instance_name").val()) {
        for (var e = $("#instance_name").val(), t = !1, a = 0; a < _dbs.length; a++)
            _dbs[a] == e && (t = !0);
        t || (_dbs.push(e),
        localStorage.setItem("sql_star_dbs", _dbs.join(",")),
        refreshStarDbs(),
        toast("收藏成功"))
    }
}
function unStarDb(e) {
    for (var t = 0; t < _dbs.length; t++)
        _dbs[t] == e && _dbs.splice(t, 1);
    localStorage.setItem("sql_star_dbs", _dbs.join(",")),
    refreshStarDbs(),
    toast("取消收藏成功")
}
function initDb() {
    var e = localStorage.getItem("sql_query_instance_name");
    null != e && "" != e && ($("#instance_name").val(e),
    $("#instance_name").selectpicker("refresh"),
    get_instance(!0))
}
refreshStarDbs(),
$("#starDbBtn").click(starDb),
window.get_instance = function(e) {
    optgroup_control(!0),
    "" != $("#instance_name").val() && ($("#db_name").empty(),
    sessionStorage.setItem("sql_query_instance_name", $("#instance_name").val()),
    localStorage.setItem("sql_query_instance_name", $("#instance_name").val()),
    $.ajax({
        type: "get",
        url: "/instance/instance_resource/",
        dataType: "json",
        async: e,
        data: {
            instance_name: $("#instance_name").val(),
            resource_type: "database"
        },
        success: function(e) {
            if (0 === e.status) {
                for (var t = e.data, a = [], n = 0; n < t.length; n++) {
                    var r = '<option value="' + t[n] + '">' + t[n] + "</option>";
                    $("#db_name").append(r),
                    a.push({
                        name: t[n],
                        value: t[n],
                        caption: t[n],
                        meta: "databases",
                        score: "100"
                    })
                }
                $("#db_name").selectpicker("render"),
                a.length > 0 && $("#db_name").val(a[0].name),
                $("#db_name").selectpicker("refresh"),
                $("#db_name").selectpicker().trigger("change"),
                setCompleteData(a)
            } else
                alert(e.msg)
        },
        error: function(e, t, a) {
            alert(a)
        }
    }))
}
,
setTimeout(function() {
    initDb()
}, 600);
var request = window.indexedDB.open("XQXSQL");
request.onsuccess = (e => {
    webDB = e.target.result
}
);
const autoSwitchDbs = ["core-fms-new-s"]
  , initalTableData = [{
    server_id: "core-fms-new-s",
    ins_id: "fms",
    tables: ["valid_order", "repay_plan", "net_repay_plan"]
}];
function _getTableServer(e, t) {
    let a = webDB.transaction(["tables"]).objectStore("tables").get(e);
    a.onerror = function(e) {
        t()
    }
    ,
    a.onsuccess = function(e) {
        t(a.result)
    }
}
function _saveTableServer(e, t, a) {
    webDB.transaction("tables", "readwrite").objectStore("tables").add({
        name: a,
        sId: e,
        iId: t
    })
}
function _delTableServer(e) {
    webDB.transaction("tables", "readwrite").objectStore("tables").delete(e)
}
request.onupgradeneeded = (e => {
    (webDB = e.target.result).createObjectStore("tables", {
        keyPath: "name"
    }).transaction.oncomplete = (e => {
        let t = webDB.transaction("tables", "readwrite").objectStore("tables");
        initalTableData.forEach(e => {
            e.tables.length > 0 && e.tables.forEach(a => {
                t.add({
                    name: a,
                    sId: e.server_id,
                    iId: e.ins_id
                })
            }
            )
        }
        )
    }
    )
}
);
var tableMap = {
    repay_plan_: 30
}
  , autoSwitchDb = !0;
function explainTableName(e) {
    if (!autoSwitchDb)
        return "";
    var t = e.replaceAll("\n", " ").match(/from +[\w\[\]]* /);
    return null != t && t.length > 0 ? t[0].replaceAll("from", "").replaceAll(" ", "").replaceAll(/(_[\d\[\]]+)+$/g, "") : ""
}
function explainSql(e) {
    var t = ""
      , a = e;
    try {
        var n = e.replaceAll("\n", " ").match("\\(#.*#\\)");
        null != n && n.length > 0 && (e = n[0].replaceAll("(#", "").replaceAll("#)", ""));
        var r = (e = e.replaceAll(";", "")).replaceAll("\n", "").match(/\[.*\]/);
        if (null != r && r.length > 0) {
            var o = r[0].replace(/[\[\]]/g, "")
              , i = []
              , l = 0
              , c = getSplitTableName(e);
            if ("" != c) {
                var s = tableMap[c];
                null != s && (l = s)
            }
            if ("" == o) {
                if (l > 0)
                    for (var d = 0; d < l; d++)
                        i.push(d)
            } else if (o.indexOf(",") > 0)
                i = o.split(",");
            else if (2 == o.split("-").length) {
                var u = parseInt(o.split("-")[0])
                  , f = parseInt(o.split("-")[1]);
                for (d = u; d <= f; d++)
                    i.push(d)
            } else if (!isNaN(o) && o > 0) {
                0 == l && (l = Number(o));
                for (d = 0; d < l; d++)
                    i.push(d)
            } else
                exitDefineSplitRule(o) && (autoSwitchDb = !1,
                t = trySplitTable(o, c, e, r[0]),
                i = []);
            if (i.length > 0) {
                var p = getUids(e)
                  , b = [];
                if (p.length > 0 && l > 0)
                    for (d = 0; d < i.length; d++) {
                        inTable(p, h = i[d], l) && b.push(h)
                    }
                b.length > 0 && (i = b);
                for (d = 0; d < i.length; d++) {
                    var h = i[d];
                    t += e.replace(r[0], "" + h),
                    d < i.length && (t += " union all ")
                }
            }
        }
        t = t.replace(/union all $/, "")
    } catch (e) {
        console.log(e)
    }
    return "" != t ? null != n && n.length > 0 ? a.replaceAll("\n", " ").replaceAll(n[0], " (" + t + ") ") : t : a
}
function inTable(e, t, a, n, r) {
    for (var o = 0; o < e.length; o++)
        if ((null == n || e[o] % r == n) && e[o] % a == t)
            return !0;
    return !1
}
function getUids(e) {
    var t = [];
    try {
        var a = e.replaceAll("\n", "").match(/otherpay_batch {0,}=['" ]{0,}[^\s]+/);
        if (null != a && a.length > 0) {
            var indexOfEqual = a[0].indexOf("=");
            var n = a[0].substring(indexOfEqual + 1).replaceAll(/['" ]/g, "").trim();
            // 在这里调用getAbsHashCodeValue函数对获取到的uid值进行处理
            t.push(getAbsHashCodeValue(n));
        }
    } catch (e) {}
    return t
}

function hashCode(str) {
    let hash = 0;
    if (str.length === 0) {
        return hash;
    }
    for (let i = 0; i < str.length; i++) {
        // charCodeAt获取字符的Unicode代码点
        let charCode = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + charCode;
        hash = hash & hash; // 转换为32位有符号整数，类似Java中的整型处理
    }
    return hash;
}

function getAbsHashCodeValue(str) {
    // 先获取类似Java中hashCode的结果
    let hash = hashCode(str);
    // 由于JavaScript中数字存储特点，模拟Java中取绝对值操作（其实JavaScript中Math.abs本身就可以做）
    hash = Math.abs(hash);
    return hash;
}
function getSplitTableName(e) {
    var t = e.replaceAll("\n", "").match(/ \w*\[/);
    return null != t && t.length > 0 ? t[0].replaceAll(" ", "").replaceAll("[", "") : ""
}
function splitMultiSql(e) {
    for (var t = [], a = e.split(";"), n = 0; n < a.length; n++) {
        var r = a[n]
          , o = r.replaceAll("\n", "").match(/\[.*\]/);
        if (null != o && o.length > 0) {
            var i = o[0].replace(/[\[\]]/g, "");
            if ("" != i && exitDefineSplitRule(i)) {
                var l = i.split("_");
                if (1 === l.length) {
                    var c = l[0]
                      , s = __DEFINE_SPLIT_RULE[c]
                      , d = r.replaceAll("\n", " ").match("\\(#.*#\\)")
                      , u = r;
                    if (null != d && d.length > 0 && (u = d[0].replaceAll("(#", "").replaceAll("#)", "")),
                    0 === getUids(u).length) {
                        for (var f = 0; f < s.num; f++)
                            t.push(r.replaceAll("[" + c + "]", "[" + c + "_" + f + "]"));
                        continue
                    }
                }
            }
        }
        "" != r.replace(/[\n ]/g, "") && t.push(r)
    }
    return t
}
function exeQuery(e, t, a) {
    var n = $("#instance_name :selected").parent().attr("label");
    autoSwitchDb = !0,
    t = explainSql(t),
    "Oracle" === n ? "explain" === e ? t = "explain plan for " + t : "show create table" === e && (t = "desc " + $("#table_name").val() + ";") : "MySQL" === n ? "explain" === e ? t = "explain " + t : "show create table" === e && (t = "show create table " + $("#table_name").val() + ";") : "Mongo" === n && "explain" === e && (t = "explain " + t),
    $("#autoSwitchDbBox").is(":checked") && -1 == $("#instance_name").val().indexOf("sit") || (autoSwitchDb = !1);
    var r = explainTableName(t)
      , o = {
        instance_name: $("#instance_name").val(),
        db_name: $("#db_name").val(),
        schema_name: $("#schema_name").val(),
        tb_name: $("#table_name").val(),
        sql_content: t,
        limit_num: $("#limit_num").val()
    };
    "" != r ? _getTableServer(r, function(e) {
        if (e) {
            $("#server_id").val() != e.sId && (o = {
                sql_content: t,
                instance_name: e.sId,
                db_name: e.iId,
                tb_name: "",
                limit_rows: $("#limit_rows").val()
            },
            !0),
            realQuery(o, a, function(e) {
                0 != e.status && _delTableServer(r)
            })
        } else
            realQuery(o, a, function(e) {
                0 == e.status && -1 != $.inArray($("#instance_name").val(), autoSwitchDbs) && _saveTableServer($("#instance_name").val(), $("#db_name").val(), r)
            })
    }) : realQuery(o, a)
}
function realQuery(e, t, a) {
    $.ajax({
        type: "post",
        url: "/query/",
        dataType: "json",
        data: e,
        complete: function() {
            $("input[type=button]").removeClass("disabled"),
            $("input[type=button]").prop("disabled", !1),
            optgroup_control()
        },
        success: function(e) {
            display_data(e, t),
            a && a(e)
        },
        error: function(e, t, a) {
            alert(a)
        }
    })
}
function display_data(e, t) {
    var a, n = e.data, r = sessionStorage.getItem("active_li_id"), o = sessionStorage.getItem("active_li_title");
    if (0 === e.status) {
        if (e.is_describe || n.full_sql.match(/^show\s+create\s+table\s+(.*)/)) {
            if (e.is_describe)
                var i = $("#table_name").val();
            else
                i = n.full_sql.match(/^show\s+create\s+table\s+(.*);/)[1];
            i !== o && tab_add(i),
            a = sessionStorage.getItem("tab_num")
        } else
            null != t && t > 0 ? (0 == $("#query_result" + t).length ? (tab_add("批量查询" + t),
            a = sessionStorage.getItem("tab_num")) : ($('a[href="#sqlquery_result' + t + '"]').text("批量查询" + t),
            a = t),
            $('a[href="#sqlquery_result' + a + '"]').click()) : o.match(/^执行结果\d$/) ? a = r.split("execute_result_tab")[1] : (tab_add(),
            a = sessionStorage.getItem("tab_num"));
        if (n.column_list) {
            var l = [];
            if ($.each(n.column_list, function(e, t) {
                var a = !0;
                "mongodballdata" == t && (a = !1),
                l.push({
                    field: e,
                    title: t,
                    visible: a,
                    sortable: !0,
                    cellStyle: function(e, t, a) {
                        return e || void 0 === e || 0 === e ? {
                            css: {}
                        } : {
                            css: {
                                color: "darkgrey"
                            }
                        }
                    },
                    formatter: function(e, t, a, n) {
                        if ("object" == typeof e && "[object object]" == Object.prototype.toString.call(e).toLowerCase() && !e.length)
                            return JSON.stringify(e);
                        var r = fDate(e);
                        return "" != r ? '<span data-toggle="tooltip" title="' + r + '">' + e + "</span>" : e
                    }
                })
            }),
            n.full_sql.match(/^show\s+create\s+table/))
                $("#query_result" + a).bootstrapTable("destroy").bootstrapTable({
                    escape: !1,
                    data: n.rows,
                    columns: [{
                        title: "Create Table",
                        field: 1,
                        formatter: function(e, t, a) {
                            let n = window.sqlFormatter.format(e);
                            return n = (n = (n = (n = (n = (n = n.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/"/g, "&quot;")).replace(/\r\n/g, "<br>")).replace(/\n/g, "<br>")
                        }
                    }],
                    locale: "zh-CN"
                });
            else {
                var c = !1;
                "Mongo" == $("#instance_name :selected").parent().attr("label") && (c = !0),
                $("#query_result" + a).bootstrapTable("destroy").bootstrapTable({
                    escape: !0,
                    data: n.rows,
                    columns: l,
                    showExport: !0,
                    exportDataType: "all",
                    exportTypes: ["json", "sql", "csv", "txt", "xml", "xlsx"],
                    exportOptions: {
                        fileName: "export_result"
                    },
                    undefinedText: "(null)",
                    detailView: c,
                    showColumns: !0,
                    showToggle: !0,
                    clickToSelect: !0,
                    striped: !0,
                    pagination: !0,
                    pageSize: 30,
                    pageList: [30, 50, 100, 500, 1e3],
                    search: !0,
                    strictSearch: !1,
                    detailFormatter: function(e, t) {
                        var a = [];
                        return $.each(t, function(e, t) {
                            if (0 === e) {
                                let e = t;
                                a.push("<pre>" + highLight(e) + "</pre>")
                            }
                        }),
                        a.join("")
                    },
                    locale: "zh-CN",
                    onDblClickRow: function(e) {
                        0 == window.getSelection().toString().length && showDetail(l, e)
                    },
                    onPostBody: function(e) {
                        setTimeout(function() {
                            $("[data-toggle='tooltip']").tooltip()
                        }, 500)
                    }
                })
            }
            $("#time" + a).text(n.query_time + " sec"),
            $("#masking_time" + a).text(n.mask_time + " sec"),
            n.seconds_behind_master && $("#seconds_behind_master").text("Seconds_Behind_Master:  " + n.seconds_behind_master),
            $("[data-toggle='tooltip']").tooltip(),
            showCopyBtn(a, l, n.rows)
        }
    } else
        o.match(/^执行结果\d$/) ? a = r.split("execute_result_tab")[1] : (tab_add(),
        a = sessionStorage.getItem("tab_num")),
        $("#query_result" + a).bootstrapTable("destroy").bootstrapTable({
            escape: !1,
            columns: [{
                field: "error",
                title: "Error",
                formatter: function(t, a, n) {
                    return 2 === e.status ? t + '<a href="/queryapplylist/">（提交申请）</a>' : t
                }
            }],
            data: [{
                error: e.msg
            }]
        })
}
window.sqlquery = function(e) {
    var t = editor.session.getTextRange(editor.getSelectionRange());
    if (t)
        a = t;
    else
        var a = editor.getValue();
    var n = splitMultiSql(a);
    if (n.length > 1)
        for (var r = 0; r < n.length; r++)
            exeQuery(e, n[r], r + 1);
    else
        exeQuery(e, a, -1)
}
;
var _tabData = {};
function showCopyBtn(e, t, a) {
    $("#query_result" + e + " th[data-field]").each(function() {
        var t = $(this).data("field")
          , a = $(this).text();
        $(this).find(".th-inner").prepend('<a name="column_name" column="' + a + '" field="' + t + '" tab="' + e + '" title="点我复制当前列" style="-webkit-user-select: none;font-size: 8px;cursor:pointer;text-decoration: none;padding-right:2px">ⓒ</a>')
    }),
    _tabData[e] = a,
    new ClipboardJS("#query_result" + e + " a[name=column_name]",{
        text: function(e) {
            var t = {}
              , a = []
              , n = e.getAttribute("field")
              , r = e.getAttribute("tab")
              , o = _tabData[r];
            for (i = 0; i < o.length; i++) {
                var l = o[i][n];
                "" != l && null == t[l] && (t[l] = 1,
                a.push(l))
            }
            var c = e.getAttribute("column")
              , s = "\n";
            if (__lastDownKey && (91 == __lastDownKey.keyCode || 18 == __lastDownKey.keyCode) && (s = ",",
            a.length > 0 && "uid" != c && "id" != c))
                for (var d = 0; d < a.length; d++)
                    a[d] = "'" + a[d] + "'";
            var u = 0 == a.length ? " " : a.join(s);
            return toast("复制成功。总数：" + a.length),
            u
        }
    })
}
function showDetail(e, t) {
    for (var a = [], n = 0; n < e.length; n++)
        a.push({
            key: e[n].title,
            value: t[n] + fTitle(t[n])
        });
    $("#detail_result").bootstrapTable("destroy").bootstrapTable({
        escape: !1,
        columns: [{
            field: "key",
            title: "字段"
        }, {
            field: "value",
            title: "值"
        }],
        data: a,
        search: !0,
        strictSearch: !1
    }),
    $("#myModal").modal("show").css({
        "margin-top": function() {
            return 40
        }
    })
}
function fDate(e) {
    return !isNaN(e) && 13 == ("" + e).length && e > 12622752e5 && e < 2840112e6 ? new Date(Number(e)).format("yyyy-MM-dd hh:mm:ss") : ""
}
function fTitle(e) {
    var t = fDate(e);
    return "" != t ? " <font color='#FF0000'>(" + t + ")</font>" : ""
}
function noteBtnClick() {
    var e = $(this)
      , t = e.attr("id");
    if (t == lastNoteId)
        return !1;
    var a = $("div#note-span span#" + lastNoteId)
      , n = localStorage.getItem(t);
    return a.removeClass("curNote"),
    t != lastNoteId && (e.addClass("curNote"),
    lastNoteId = t),
    localStorage.setItem("sqlnote_lastNoteId", lastNoteId),
    null != n && (_editor.setValue(n),
    _editor.clearSelection()),
    !1
}
Date.prototype.format = function(e) {
    var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    for (var a in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))),
    t)
        new RegExp("(" + a + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[a] : ("00" + t[a]).substr(("" + t[a]).length)));
    return e
}
,
$("body").append('\n    <style>\n#myModal .fixed-table-body{\nmax-height:500px;\n}\n#myModal .pull-right.search {\n    margin-top: -60px;\n    margin-right: 25px;\n}\n    </style>\n<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n    <div class="modal-dialog" style="width:800px;">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n                <h4 class="modal-title" id="myModalLabel">详情</h4>\n            </div>\n            <div class="modal-body"><table id="detail_result" data-toggle="table" class="table table-condensed" style="table-layout:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></table></div>\n            <div class="modal-footer">\n                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>\n            </div>\n        </div>\x3c!-- /.modal-content --\x3e\n    </div>\x3c!-- /.modal --\x3e\n</div>\n  '),
$(".panel-heading.form-inline").append('\n    <style>.curNote{color: #fff;\n    background-color: #f0ad4e;\n    border-color: #eea236;}</style>\n<div id="note-span" class="" style="display: inline-block;padding-left: 5px; border-left: 2px dashed #ccc;">\n    <span class="btn btn-default" id="xsql_content">默认</span>\n</div>\n<span class="btn btn-success" id="createNewNote"><i class="fa fa-plus fa-fw"></i></span>\n<span><input type="checkbox" id="autoSwitchDbBox" checked value="1"/>自动切换数据库<span>\n    ');
var lastNoteId = localStorage.getItem("sqlnote_lastNoteId");
null == lastNoteId && (lastNoteId = "xsql_content"),
_editor.getSession().on("change", function() {
    localStorage.setItem(lastNoteId, _editor.getValue())
});
var content = localStorage.getItem(lastNoteId);
content && (_editor.setValue(content),
_editor.clearSelection(),
_editor.session.setMode("ace/mode/mysql"));
var key_prefix = "sqlnote_key_"
  , title_prefix = "sqlnote_title_";
function getSqlnoteIndex(e) {
    for (var t = localStorage.length - 1; t >= 0; t--) {
        var a = localStorage.key(t);
        if (a.startsWith(title_prefix)) {
            var n = a.substr(title_prefix.length);
            if (/^\d+$/.test(n) && localStorage.getItem(a) == e)
                return n
        }
    }
    return -1
}
function getSqlnoteMaxIndex() {
    for (var e = 0, t = localStorage.length - 1; t >= 0; t--) {
        var a = localStorage.key(t);
        if (a.startsWith(key_prefix)) {
            var n = a.substr(key_prefix.length);
            if (/^\d+$/.test(n)) {
                var r = Number(n);
                r > e && (e = r)
            }
        }
    }
    return e
}
function createNewNote(e, t) {
    if ("-1" == getSqlnoteIndex(e)) {
        var a = getSqlnoteMaxIndex() + 1;
        localStorage.setItem(key_prefix + a, t),
        localStorage.setItem(title_prefix + a, e);
        var n = $("div#note-span");
        n.append("<span class='btn btn-default' id='" + key_prefix + a + "'>" + e + "</span>\n"),
        n.find("span#" + key_prefix + a).click(noteBtnClick),
        n.find("span#" + key_prefix + a).click()
    } else
        alert("该名称已存在")
}
function promptMsg(e, t) {
    var a = prompt(e, t);
    return null == a || "null" == a || "" == a ? "" : "null" == (a = a.trim()) || "" == a ? "" : a
}
function modifyNotTitle() {
    var e = $(this)
      , t = e.attr("id");
    if ("xsql_content" != t) {
        var a = promptMsg("修改SQL记事本名称", e.text());
        if ("" != a) {
            var n = t.substr(key_prefix.length);
            localStorage.setItem(title_prefix + n, a),
            e.text(a)
        }
    }
}
function initNote() {
    for (var e = [], t = localStorage.length - 1; t >= 0; t--) {
        var a = localStorage.key(t);
        if (a.startsWith(title_prefix)) {
            var n = a.substr(title_prefix.length);
            if (/^\d+$/.test(n)) {
                localStorage.getItem(a);
                e.push(Number(n))
            }
        }
    }
    if (e.length > 0) {
        var r = e.sort(function(e, t) {
            return e - t
        })
          , o = "";
        r.forEach(function(e) {
            o += "<span class='btn btn-default' id='" + key_prefix + e + "'>" + localStorage.getItem(title_prefix + e) + "</span>\n",
            0
        }),
        $("div#note-span").append(o)
    }
    $("#" + lastNoteId).addClass("curNote"),
    $("div#note-span span.btn").single_double_click(noteBtnClick, modifyNotTitle),
    $("div#note-span span.btn").contextmenu(function(e) {
        var t = $(this).attr("id");
        if ("xsql_content" != t && confirm("是的右键可以删除，确认删除吗？")) {
            var a = t.substr(key_prefix.length);
            localStorage.removeItem(title_prefix + a),
            localStorage.removeItem(t),
            $("#xsql_content").click(),
            $(this).remove()
        }
        return !1
    })
}
$("#createNewNote").click(function() {
    var e = promptMsg("请输入SQL记事本名称", "");
    "" != e && createNewNote(e, "")
}),
initNote(),
// 先注释掉这部分代码功能
// $("#seconds_behind_master").parents(".panel-heading").append('\n  <a id="exportConfig" class="btn btn-default btn-sm pull-right" style="margin-top:-5px;">导出配置</a>\n  <a id="importConfig" class="btn btn-default btn-sm pull-right" style="margin-top:-5px;">导入配置</a>\n  <a id="splitRule" class="btn btn-default btn-sm pull-right" style="margin-top: -5px;">分表规则</a>\n  <a id="ddlSql" class="btn btn-default btn-sm pull-right" style="margin-top: -5px;">生成SQL</a>\n\n  <input style="display:none;" type="file" id="loadsqlFile" accept=".txt,.sql">\n  '),
$("body").append('\n<div class="modal fade" id="splitRuleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n    <div class="modal-dialog" style="width:800px;">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n                <h4 class="modal-title" id="splitModalLabel">自定义分表规则</h4>\n            </div>\n            <div class="modal-body">\n<textarea rows="20" style="width:100%" id="splitContent">\n</textarea>\n            </div>\n            <div class="modal-footer">\n            <button type="button" class="btn btn-success" id="saveSplitRule">保存</button>\n                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>\n            </div>\n        </div>\x3c!-- /.modal-content --\x3e\n    </div>\x3c!-- /.modal --\x3e\n</div>\n'),
$("#exportConfig").click(function() {
    for (var e = "", t = localStorage.length - 1; t >= 0; t--) {
        var a = localStorage.key(t);
        e += "/*<<" + a + ">>*/\n" + localStorage.getItem(a) + "\n"
    }
    var n = new Blob([e],{
        type: "text/plain;charset=utf-8"
    })
      , r = new Date
      , o = String(r.getFullYear())
      , i = String(r.getMonth() + 1)
      , l = String(r.getDate())
      , c = "sqlnote-" + o + (1 == i.length ? "0" + i : i) + (1 == l.length ? "0" + l : l) + ".sql";
    saveAs(n, c, !0)
}),
$("#importConfig").click(function() {
    $("input#loadsqlFile").val(""),
    $("input#loadsqlFile").click()
}),
$("input#loadsqlFile").bind("change", function(e) {
    var t = $("input#loadsqlFile")[0].files[0];
    if (null != t) {
        var a = new FileReader;
        a.onload = function(e) {
            var t = e.target.result.split("\n")
              , a = []
              , n = void 0;
            for (idx in t) {
                var r = t[idx];
                if (/^\/\*\<\<(.+)\>\>\*\/$/.test(r)) {
                    var o = RegExp.$1;
                    "* " + o + "\n",
                    n = {
                        k: o,
                        v: ""
                    },
                    a.push(n)
                } else
                    null != n && (n.v += r + "\n")
            }
            a.length <= 0 ? alert("未找到有效配置") : confirm("确认覆盖导入配置?") && (a.forEach(function(e) {
                var t = e.v.replaceAll(/\n$/g, "");
                localStorage.setItem(e.k, t)
            }),
            alert("导入成功"),
            location.reload())
        }
        ,
        a.readAsText(t)
    }
}),
$("#splitRule").click(function() {
    var e = localStorage.getItem("defineSplitRule");
    null != e && $("#splitContent").val(e),
    $("#splitRuleModal").modal("show")
}),
$("#saveSplitRule").click(function() {
    var rule = $("#splitContent").val();
    try {
        eval("(" + rule + ")"),
        localStorage.setItem("defineSplitRule", rule),
        initSplitRule(),
        $("#splitRuleModal").modal("hide"),
        toast("保存成功！")
    } catch (e) {
        alert("JSON格式有误请检查")
    }
});
var __DEFINE_SPLIT_RULE = {};
function initSplitRule() {
    try {
        var rule = localStorage.getItem("defineSplitRule");
        null != rule && (__DEFINE_SPLIT_RULE = eval("(" + rule + ")"))
    } catch (e) {}
}
function exitDefineSplitRule(e) {
    var t = e.split("_");
    return t.length > 1 && (e = t[0]),
    null != __DEFINE_SPLIT_RULE[e]
}
function getSplitTableNum(e, t) {
    if (null != t[e])
        return t[e];
    for (var a in t)
        try {
            var n = new RegExp(a,"g");
            if (e.match(n))
                return t[a]
        } catch (e) {}
    return 0
}
function trySplitTable(e, t, a, n) {
    var r = e.split("_")
      , o = "";
    r.length > 1 && (e = r[0],
    o = r[1]);
    var i = __DEFINE_SPLIT_RULE[e]
      , l = getUids(a)
      , c = []
      , s = getSplitTableNum(t, i.tables)
      , d = "";
    if (s > 0) {
        if (l.length > 0 && "" == o && (o = l[0] % i.num),
        null != i.instance)
            $("#instance_name").val(i.instance),
            $("#instance_name").selectpicker("refresh"),
            get_instance(!1),
            $("#db_name").val(i.db + o),
            $("#db_name").selectpicker("refresh");
        else {
            var u = ".s";
            -1 != i.db.indexOf("sit") && (u = ""),
            1 == i.num ? $("#instance_name").val(i.db + u) : $("#instance_name").val(i.db + o + u),
            $("#instance_name").selectpicker("refresh"),
            get_instance(!1)
        }
        for (var f = 0; f < s; f++)
            l.length > 0 ? inTable(l, f, s, o, i.num) && c.push(f) : f % i.num == o && c.push(f);
        for (var p = 0; p < c.length; p++) {
            f = c[p];
            d += a.replace(n, "" + f),
            p < c.length && (d += " union all ")
        }
        return d
    }
    return a
}
function initTheme() {
    try {
        var e = localStorage.getItem("ACE_THEME");
        null != e && ("dark" == e ? (editor.setTheme("ace/theme/ace-vibrant-ink"),
        $("body").addClass("archery-dark")) : editor.setTheme("ace/theme/textmate"))
    } catch (e) {}
}
function setFuncCompleteData() {
    for (var e = ["CONCAT", "LENGTH", "UCASE", "LCASE", "SUBSTRING", "REPLACE", "TRIM", "LEFT", "RIGHT", "ABS", "CEIL", "FLOOR", "ROUND", "RAND", "MIN", "MAX", "AVG", "SUM", "NOW", "CURDATE", "CURTIME", "YEAR", "MONTH", "DAY", "HOUR", "MINUTE", "SECOND", "CASE", "COALESCE", "NULLIF", "COUNT", "GROUP_CONCAT", "HAVING", "DISTINCT", "SUM", "AVG", "MIN", "MAX", "STDDEV", "VARIANCE", "CONCAT_WS", "FIND_IN_SET"], t = [], a = 0; a < e.length; a++)
        t.push({
            name: e[a],
            value: e[a],
            caption: e[a],
            meta: "function",
            score: 100
        });
    setCompleteData(t)
}
initSplitRule(),
ace.define("ace/theme/ace-vibrant-ink.css", ["require", "exports", "module"], function(e, t, a) {
    a.exports = "\n.archery-dark .dropdown-menu>li>a:hover {\n    background: #333333\n}\n.light-switch{display:inline-block;margin:19px 5px 0px;opacity:.4;zoom:0.8;cursor:pointer;}.light-switch:hover{opacity:1;}.light-switch .white{display:inline-block;}.light-switch .black{display:none;}.archery-dark .light-switch .white{display:none}.archery-dark .light-switch .black{display:inline-block;}.archery-dark{background-color:#16161a;color:#fff;}.archery-dark a{color:#f96518;}.archery-dark .navbar-default{background-color:#16161a;border-color:#25252b;}.archery-dark .navbar-top-links li a{color:#f96518;}.archery-dark .sidebar ul li{border-bottom:1px solid #25252b;}.archery-dark .sidebar ul li a.active{background:linear-gradient(to right,#16161a 0%,#1A1C1F 90%,#1A1C1F 90%);color:#fff;}.archery-dark #page-wrapper{border-left:1px solid #25252b;background-color:#1A1C1F;}.archery-dark .panel-default{border-color:#1a1c1f;}.archery-dark .panel{background-color:#16161a;}.archery-dark .panel-default>.panel-heading{color:#fff;background-color:#25252b;border-color:#16161a;}.archery-dark pre{background-color:#0f0f0f;border:1px solid #1a1c1f;}.archery-dark .nav-tabs{border-bottom:1px solid #25252b;}.archery-dark .nav>li>a:focus,.archery-dark .nav>li>a:hover{background:linear-gradient(to right,#16161a 0%,#1A1C1F 90%,#1A1C1F 90%);color:#fff;}.archery-dark .table-hover > tbody > tr:hover{background:#333333}.archery-dark hr{border-top:1px solid #16161a;}.archery-dark .fixed-table-loading{background:#16161a;}.archery-dark .table-bordered>tbody>tr>td,.archery-dark  .table-bordered>tbody>tr>th,.archery-dark  .table-bordered>tfoot>tr>td,.archery-dark  .table-bordered>tfoot>tr>th,.archery-dark  .table-bordered>thead>tr>td,.archery-dark  .table-bordered>thead>tr>th{border:1px solid #303030;}.archery-dark .bootstrap-table .table>thead>tr>th,.archery-dark .fixed-table-container{border:1px solid #303030;}.archery-dark .modal-content{background-color:#212121;}.archery-dark .modal-header{border-bottom:1px solid #0b0b0d;}.archery-dark .modal-footer{border-top:1px solid #0b0b0d;}.archery-dark .close{color:#fff;opacity:.5;}.archery-dark .close:hover,.archery-dark .close:focus{color:#fff;opacity:.8;}.archery-dark .form-control{color:#fff;background-color:#16161a;border:1px solid #25252a;}.archery-dark .dropdown-menu{list-style:none;background-color:#6c6c6c;}.archery-dark .dropdown-header,.archery-dark .dropdown-menu>li>a{color:#fff;}.archery-dark .dropdown-menu>li>a:hover{background:#333333}.archery-dark .btn{background:#f96419;}.archery-dark .btn-default{color:#fff;background-color:#1a1c1f;border-color:#16161a;}.archery-dark .btn-info{background-color:#5bc0de;}.archery-dark .btn-warning{background-color:#f0ad4e;}.archery-dark .btn-success{background-color:#5cb85c;}.archery-dark .curNote{color:#fff;background-color:#f0ad4e;border-color:#eea236;}.archery-dark .nav-tabs>li.active>a,.archery-dark  .nav-tabs>li.active>a:focus,.archery-dark  .nav-tabs>li.active>a:hover{color:#fff;cursor:pointer;background-color:#202024;border:1px solid #16161a;}.archery-dark .nav-tabs>li>a:hover{border-color:#16161a;}.archery-dark textarea{background:#16161a;border-color:#0b0b0d;}.archery-dark .card-view:nth-of-type(odd){background-color:#25252a;}.archery-dark span.card-view-title{color:#fff!important;}.ace-vibrant-ink .ace_gutter{background:#1a1a1a;color:#BEBEBE}.ace-vibrant-ink .ace_print-margin{width:1px;background:#1a1a1a}.ace-vibrant-ink{background-color:#0F0F0F;color:#FFFFFF}.ace-vibrant-ink .ace_cursor{color:#FFFFFF}.ace-vibrant-ink .ace_marker-layer .ace_selection{background:#6699CC}.ace-vibrant-ink.ace_multiselect .ace_selection.ace_start{box-shadow:0 0 3px 0px #0F0F0F;}.ace-vibrant-ink .ace_marker-layer .ace_step{background:rgb(102,82,0)}.ace-vibrant-ink .ace_marker-layer .ace_bracket{margin:-1px 0 0 -1px;border:1px solid #404040}.ace-vibrant-ink .ace_marker-layer .ace_active-line{background:#333333}.ace-vibrant-ink .ace_gutter-active-line{background-color:#333333}.ace-vibrant-ink .ace_marker-layer .ace_selected-word{border:1px solid #6699CC}.ace-vibrant-ink .ace_invisible{color:#404040}.ace-vibrant-ink .ace_keyword,.ace-vibrant-ink .ace_meta{color:#FF6600}.ace-vibrant-ink .ace_constant,.ace-vibrant-ink .ace_constant.ace_character,.ace-vibrant-ink .ace_constant.ace_character.ace_escape,.ace-vibrant-ink .ace_constant.ace_other{color:#339999}.ace-vibrant-ink .ace_constant.ace_numeric{color:#99CC99}.ace-vibrant-ink .ace_invalid,.ace-vibrant-ink .ace_invalid.ace_deprecated{color:#CCFF33;background-color:#000000}.ace-vibrant-ink .ace_fold{background-color:#FFCC00;border-color:#FFFFFF}.ace-vibrant-ink .ace_entity.ace_name.ace_function,.ace-vibrant-ink .ace_support.ace_function,.ace-vibrant-ink .ace_variable{color:#FFCC00}.ace-vibrant-ink .ace_variable.ace_parameter{font-style:italic}.ace-vibrant-ink .ace_string{color:#66FF00}.ace-vibrant-ink .ace_string.ace_regexp{color:#44B4CC}.ace-vibrant-ink .ace_comment{color:#9933CC}.ace-vibrant-ink .ace_entity.ace_other.ace_attribute-name{font-style:italic;color:#99CC99}.ace-vibrant-ink .ace_indent-guide{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYNDTc/oPAALPAZ7hxlbYAAAAAElFTkSuQmCC) right repeat-y}\n"
}),
ace.define("ace/theme/ace-vibrant-ink", ["require", "exports", "module", "ace/theme/ace-vibrant-ink.css", "ace/lib/dom"], function(e, t, a) {
    t.isDark = !1,
    t.cssClass = "ace-vibrant-ink",
    t.cssText = e("./ace-vibrant-ink.css"),
    e("../lib/dom").importCssString(t.cssText, t.cssClass)
}),
ace.require(["ace/theme/ace-vibrant-ink"], function(e) {
    "object" == typeof module && "object" == typeof exports && module && (module.exports = e)
}),
$("nav .navbar-header").append('\n<a class="light-switch">\n<svg class="white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1356_5032)"><path d="M10 7C9.9998 8.39064 10.4138 9.74983 11.1892 10.9042C11.9646 12.0586 13.0663 12.9559 14.3538 13.4816C15.6412 14.0073 17.0561 14.1376 18.4179 13.8559C19.7797 13.5742 21.0268 12.8933 22 11.9V12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2H12.1C11.434 2.65113 10.9051 3.42896 10.5445 4.28768C10.1838 5.1464 9.99869 6.06862 10 7V7ZM4 12C3.99927 13.785 4.59553 15.5189 5.69389 16.926C6.79226 18.333 8.32963 19.3323 10.0614 19.7648C11.7932 20.1974 13.6199 20.0383 15.2508 19.313C16.8818 18.5876 18.2233 17.3377 19.062 15.762C17.5694 16.1136 16.0118 16.0781 14.5368 15.6587C13.0619 15.2394 11.7185 14.4501 10.6342 13.3658C9.54992 12.2815 8.76065 10.9381 8.34128 9.46318C7.92192 7.98821 7.88636 6.43056 8.238 4.938C6.95758 5.62014 5.88678 6.63766 5.14026 7.88164C4.39373 9.12562 3.99958 10.5492 4 12V12Z" fill="black"></path></g><defs><clipPath id="clip0_1356_5032"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>\n<svg class="black" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1356_5022)"><path d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95V16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" fill="#FFC700"></path></g><defs><clipPath id="clip0_1356_5022"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>\n</a>\n'),
$(".light-switch").click(function() {
    $("body").hasClass("archery-dark") ? (editor.setTheme("ace/theme/textmate"),
    localStorage.setItem("ACE_THEME", "")) : (editor.setTheme("ace/theme/ace-vibrant-ink"),
    localStorage.setItem("ACE_THEME", "dark")),
    $("body").toggleClass("archery-dark"),
    editor.clearSelection(),
    editor.session.setMode("ace/mode/mysql")
}),
$("#instance_name").change(function() {
    $("body").hasClass("archery-dark") ? editor.setTheme("ace/theme/ace-vibrant-ink") : editor.setTheme("ace/theme/textmate")
}),
initTheme(),
setFuncCompleteData(),
function() {
    Date.prototype.format = function(e) {
        var t = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        for (var a in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))),
        t)
            new RegExp("(" + a + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[a] : ("00" + t[a]).substr(("" + t[a]).length)));
        return e
    }
    ;
    var e;
    null != (e = function(e) {
        for (var t = document.cookie.split("; "), a = 0; a < t.length; a++) {
            var n = t[a].split("=");
            if (n[0] == e)
                return decodeURIComponent(n[1])
        }
        return ""
    }("username")) && null != e && "" != e || (e = $("nav .navbar-top-links li").first().text().replaceAll(/[ \n]/g, "").replaceAll("你好，", ""))
}(),
$("#ddlSql").click(function() {
    var e = editor.session.getTextRange(editor.getSelectionRange())
      , t = e.match(/\[.*\]/);
    if (null != t && t.length > 0) {
        var a = t[0].replace(/[\[\]]/g, "").split(",");
        if (a.length < 2)
            return;
        var n = a[0]
          , r = a[1]
          , o = 0;
        a.length > 2 && (o = a[2]);
        for (var i = "", l = 0; l < n; l++)
            for (var c = 1, s = 0, d = 0; d < r; d++) {
                if (d % n == l)
                    0 == s && (i = i + "\n\n-- ======第 " + l + " 个数据库，第 " + c + " 个工单。SQL：============\n\n"),
                    i = i + e.replace(t[0], "" + d) + ";\n\n",
                    s += 1,
                    o > 0 && s >= o && d < r - 1 && (c += 1,
                    s = 0)
            }
        editor.insert(i)
    }
});
