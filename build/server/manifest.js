const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.znkMhtsv.js","app":"_app/immutable/entry/app.X1FrTBQ8.js","imports":["_app/immutable/entry/start.znkMhtsv.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/singletons.3Dw2krxE.js","_app/immutable/entry/app.X1FrTBQ8.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.Tdekhdvl.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-70gMGE1h.js')),
			__memo(() => import('./chunks/1-9nP9WKe0.js')),
			__memo(() => import('./chunks/2-kS2aOqr7.js')),
			__memo(() => import('./chunks/3-sYpDFroZ.js')),
			__memo(() => import('./chunks/4-Lw12BuC1.js')),
			__memo(() => import('./chunks/5-yNREm7f3.js')),
			__memo(() => import('./chunks/6-eLKcwEUJ.js')),
			__memo(() => import('./chunks/7-czXzXT3F.js')),
			__memo(() => import('./chunks/8-Bq76h8lG.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/api/image",
				pattern: /^\/api\/image\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-ZBC0337W.js'))
			},
			{
				id: "/api/settings",
				pattern: /^\/api\/settings\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-LGPZFH0_.js'))
			},
			{
				id: "/display",
				pattern: /^\/display\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/info",
				pattern: /^\/info\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/webassets",
				pattern: /^\/webassets\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
