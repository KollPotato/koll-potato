import{S as $,i as w,s as H,k as p,q as f,a as P,l as g,m as d,r as y,h as l,c as j,n as b,b as k,C as i,u as q,B as S,I as C}from"../../chunks/index-f5d4f9da.js";import{s as I}from"../../chunks/singletons-c85971a4.js";const Y=()=>{const s=I,e={page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated};return Object.defineProperties(e,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},enumerable:!1},session:{get(){return B(),{}},enumerable:!1}}),e},A={subscribe(s){return Y().page.subscribe(s)}};function B(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function D(s){let e,t,r,n=s[0].status+"",u,h,_,c,m;return{c(){e=p("div"),t=p("h1"),r=p("span"),u=f(n),h=f(" error"),_=P(),c=p("p"),m=f("Hey, stranger! You might be on a wrong page!"),this.h()},l(o){e=g(o,"DIV",{class:!0});var a=d(e);t=g(a,"H1",{class:!0});var v=d(t);r=g(v,"SPAN",{class:!0});var E=d(r);u=y(E,n),E.forEach(l),h=y(v," error"),v.forEach(l),_=j(a),c=g(a,"P",{class:!0});var x=d(c);m=y(x,"Hey, stranger! You might be on a wrong page!"),x.forEach(l),a.forEach(l),this.h()},h(){b(r,"class","text-primary"),b(t,"class","title svelte-1r0yhoc"),b(c,"class","tip svelte-1r0yhoc"),b(e,"class","center svelte-1r0yhoc")},m(o,a){k(o,e,a),i(e,t),i(t,r),i(r,u),i(t,h),i(e,_),i(e,c),i(c,m)},p(o,[a]){a&1&&n!==(n=o[0].status+"")&&q(u,n)},i:S,o:S,d(o){o&&l(e)}}}function N(s,e,t){let r;return C(s,A,n=>t(0,r=n)),[r]}class z extends ${constructor(e){super(),w(this,e,N,D,H,{})}}export{z as default};