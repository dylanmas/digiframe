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
		client: {"start":"_app/immutable/entry/start.c-JpW924.js","app":"_app/immutable/entry/app.ywavbYAZ.js","imports":["_app/immutable/entry/start.c-JpW924.js","_app/immutable/chunks/scheduler.q0GFaaJd.js","_app/immutable/chunks/singletons.gfL1zM5P.js","_app/immutable/entry/app.ywavbYAZ.js","_app/immutable/chunks/scheduler.q0GFaaJd.js","_app/immutable/chunks/index.rJXmzJGb.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-h7n5alie.js')),
			__memo(() => import('./chunks/1-S9mUtCA3.js')),
			__memo(() => import('./chunks/2-g3hDaJcQ.js')),
			__memo(() => import('./chunks/3--QJ38jc3.js')),
			__memo(() => import('./chunks/4-ffEuMfJX.js')),
			__memo(() => import('./chunks/5-P_-fUzOh.js')),
			__memo(() => import('./chunks/6-SjDRgU5c.js')),
			__memo(() => import('./chunks/7-uByUwZJQ.js')),
			__memo(() => import('./chunks/8-9K-_Q4Kg.js')),
			__memo(() => import('./chunks/9-GhdS-39Y.js'))
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
				endpoint: __memo(() => import('./chunks/_server-5jwTTLFh.js'))
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
				id: "/err",
				pattern: /^\/err\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/info",
				pattern: /^\/info\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/webassets",
				pattern: /^\/webassets\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 9 },
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
