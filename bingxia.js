f = function (a) {
		var b = function (b) {
			var d = null === a,
			d = "object" === typeof a && !d,
			e = !c() && d;
			return b ? d : e
		},
		c = function () {
			return a instanceof Array // 是不是数组
		},
		d = function (c, b) {
			if (a.length === +a.length)
				for (var d = 0, e = a.length; d < e; ++d)
					c(d, a[d]);
			else
				for (d in a)
					(a.hasOwnProperty(d) || b) && c(d, a[d])
		},
		e = function (a, c) {
			var b = [];
			d(function (d, e) {
				var h = a(d, e);
				if (void 0 !== h || c)
					b[b.length] = h
			});
			return b
		},
		h = function (a, c) {
			c = c || ",";
			var b = [];
			d(function (c, d) {
				var e = a(c, d);
				f.isDef(e) && b.push(e)
			});
			return b.join(c)
		},
		k = function (a, c, b) {
			for (var d in c)
				f.isDef(c[d]) && (b || c.hasOwnProperty(d)) && (a[d] = c[d]);
			return a
		},
		q = function (a) {
			var c = {};
			d(function (d, e) {
				var h = a(d, e);
				b(h) && k(c,
					h)
			});
			return c
		},
		t = function (a) {
			var c = [];
			d(function (a) {
				c.push(a)
			}, a);
			return c
		};
		return {
			each : d,
			isObj : b,
			isArray : c,
			isEmpty : function (a) {
				return 0 === t(a).length
			},
			invert : function () {
				return q(function (a, c) {
					var b = {};
					b[c] = a;
					return b
				})
			},
			mapToObj : q,
			map : e,
			keys : t,
			toParams : function (a) {
				return h(function (a, c) {
					return "string" === typeof a && -1 !== a.indexOf("NULL") ? c : a + ":" + c
				}, a)
			},
			stringify : h,
			toION : function (d, h) {
				var k,
				t = "[",
				q = "]";
				h = h || 0;
				d = d || {};
				if (4 < ++h)
					return "object";
				if (!b(!0) || a.hasOwnProperty("toString"))
					return "" + a;
				c() ? k = e(function (a,
							c) {
						return f(c).toION(d, h)
					}) : (t = "{", q = "}", k = e(function (a, c) {
								var b = "string" === typeof a && -1 !== a.indexOf("NULL"),
								e = f(c).toION(d, h);
								return b ? e : (d[a] || a) + ":" + e
							}));
				return t + k.join(",") + q
			}
		}
	}