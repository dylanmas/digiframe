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
		client: {"start":"_app/immutable/entry/start.cfJYQMPX.js","app":"_app/immutable/entry/app.vYGZ7Xs7.js","imports":["_app/immutable/entry/start.cfJYQMPX.js","_app/immutable/chunks/scheduler.rFedCyd7.js","_app/immutable/entry/app.vYGZ7Xs7.js","_app/immutable/chunks/scheduler.rFedCyd7.js","_app/immutable/chunks/index.jIjof7i3.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DGXFYgVK.js')),
			__memo(() => import('./chunks/1-Jtq9lDIp.js')),
			__memo(() => import('./chunks/2-3kq4YrhT.js')),
			__memo(() => import('./chunks/3-dw5q93sj.js')),
			__memo(() => import('./chunks/4-O_mPqFj6.js')),
			__memo(() => import('./chunks/5-UPWaFU9q.js')),
			__memo(() => import('./chunks/6-FJKUSJ9x.js')),
			__memo(() => import('./chunks/7-UgzaWg9s.js')),
			__memo(() => import('./chunks/8-RjrC_x32.js')),
			__memo(() => import('./chunks/9-MHsk7Oqh.js'))
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
				endpoint: __memo(() => import('./chunks/_server-xCrm-kM0.js'))
			},
			{
				id: "/boot",
				pattern: /^\/boot\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/display",
				pattern: /^\/display\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
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
