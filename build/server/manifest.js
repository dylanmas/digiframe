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
		client: {"start":"_app/immutable/entry/start.emxMtF5p.js","app":"_app/immutable/entry/app.n0xdz2zd.js","imports":["_app/immutable/entry/start.emxMtF5p.js","_app/immutable/chunks/scheduler.rFedCyd7.js","_app/immutable/entry/app.n0xdz2zd.js","_app/immutable/chunks/scheduler.rFedCyd7.js","_app/immutable/chunks/index.jIjof7i3.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-GEqIhZl5.js')),
			__memo(() => import('./chunks/1-Jtq9lDIp.js')),
			__memo(() => import('./chunks/2-6b1Y_cq6.js')),
			__memo(() => import('./chunks/3-tZo6-RUq.js')),
			__memo(() => import('./chunks/4-V8sDO7b7.js')),
			__memo(() => import('./chunks/5-jup64ZuC.js')),
			__memo(() => import('./chunks/6-hA4Jy_br.js')),
			__memo(() => import('./chunks/7-kRsh77i-.js')),
			__memo(() => import('./chunks/8-r0MQxeHV.js'))
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
				endpoint: __memo(() => import('./chunks/_server-c7HIajLX.js'))
			},
			{
				id: "/api/settings",
				pattern: /^\/api\/settings\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-O57BEO3o.js'))
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
