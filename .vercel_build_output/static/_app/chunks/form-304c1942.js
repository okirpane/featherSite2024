import{S as d,i as h,s as b,e as n,j as f,c as i,a as _,l as v,d as p,b as t,f as w,E as u,F as m}from"./vendor-2345f34e.js";function y(c){let e,a,l,s;return{c(){e=n("form"),a=n("input"),l=f(),s=n("input"),this.h()},l(o){e=i(o,"FORM",{action:!0,method:!0,target:!0,onsubmit:!0,class:!0});var r=_(e);a=i(r,"INPUT",{class:!0,placeholder:!0,type:!0,name:!0,id:!0}),l=v(r),s=i(r,"INPUT",{class:!0,type:!0}),r.forEach(p),this.h()},h(){t(a,"class","email svelte-u1tq62"),t(a,"placeholder","Enter your email"),t(a,"type","email"),t(a,"name","email"),t(a,"id","bd-email"),t(s,"class","sub svelte-u1tq62"),t(s,"type","submit"),s.value="Subscribe",t(e,"action","https://buttondown.email/api/emails/embed-subscribe/feather"),t(e,"method","post"),t(e,"target","popupwindow"),t(e,"onsubmit","window.open('https://buttondown.email/feather', 'popupwindow')"),t(e,"class","embeddable-buttondown-form svelte-u1tq62")},m(o,r){w(o,e,r),u(e,a),u(e,l),u(e,s)},p:m,i:m,o:m,d(o){o&&p(e)}}}class q extends d{constructor(e){super();h(this,e,null,y,b,{})}}export{q as F};