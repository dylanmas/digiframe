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
		client: {"start":"_app/immutable/entry/start.RU8o_wDi.js","app":"_app/immutable/entry/app.4rmD2xG5.js","imports":["_app/immutable/entry/start.RU8o_wDi.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/singletons.68GMU_Ch.js","_app/immutable/entry/app.4rmD2xG5.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.Tdekhdvl.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-u9ixztyT.js')),
			__memo(() => import('./chunks/1-xAkbX9D7.js')),
			__memo(() => import('./chunks/2-fQVn67Oz.js')),
			__memo(() => import('./chunks/3-7sFrfvEw.js')),
			__memo(() => import('./chunks/4-l3wbTfm8.js')),
			__memo(() => import('./chunks/5-yNREm7f3.js')),
			__memo(() => import('./chunks/6-4NViOK_m.js')),
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
