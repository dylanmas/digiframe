function M(){}function x(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function z(){return Object.create(null)}function j(t){t.forEach(w)}function F(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function S(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function U(t){return Object.keys(t).length===0}function A(t,n,e,r){if(t){const o=y(t,n,e,r);return t[0](o)}}function y(t,n,e,r){return t[1]&&r?x(e.ctx.slice(),t[1](r(n))):e.ctx}function B(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|o[s];return l}return n.dirty|o}return n.dirty}function C(t,n,e,r,o,l){if(o){const _=y(n,e,r,l);t.p(_,o)}}function D(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let f;function h(t){f=t}function b(){if(!f)throw new Error("Function called outside component initialization");return f}function G(t){b().$$.on_mount.push(t)}function H(t){b().$$.after_update.push(t)}const a=[],g=[];let u=[];const m=[],k=Promise.resolve();let p=!1;function E(){p||(p=!0,k.then(v))}function I(){return E(),k}function q(t){u.push(t)}const d=new Set;let c=0;function v(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,h(n),O(n.$$)}}catch(n){throw a.length=0,c=0,n}for(h(null),a.length=0,c=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(a.length);for(;m.length;)m.pop()();p=!1,d.clear(),h(t)}function O(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function J(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{H as a,g as b,A as c,B as d,q as e,S as f,D as g,z as h,v as i,F as j,U as k,J as l,f as m,M as n,G as o,h as p,w as q,j as r,P as s,I as t,C as u,a as v,E as w};
