(()=>{var e={};e.id=768,e.ids=[768],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},7641:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d});var a=r(260),o=r(8203),s=r(5155),n=r.n(s),i=r(7292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["(authenticated)",{children:["rooms",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8951)),"/Users/joe.lai/Desktop/projects/test/trpg/frontend/src/app/(authenticated)/rooms/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,1395)),"/Users/joe.lai/Desktop/projects/test/trpg/frontend/src/app/(authenticated)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"/Users/joe.lai/Desktop/projects/test/trpg/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/joe.lai/Desktop/projects/test/trpg/frontend/src/app/(authenticated)/rooms/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/(authenticated)/rooms/page",pathname:"/rooms",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},412:(e,t,r)=>{Promise.resolve().then(r.bind(r,8951))},7260:(e,t,r)=>{Promise.resolve().then(r.bind(r,5635))},8741:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(1680).A)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},5635:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var a=r(5512),o=r(8009),s=r(9334),n=r(8741),i=r(9400),l=r(5249),d=r(8447),c=r(4716),u=r(9230),h=r(1877),m=r(9826);let p={[h.A.WAITING]:{label:"Waiting",variant:"secondary",className:"whitespace-nowrap bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-50"},[h.A.PLAYING]:{label:"Playing",variant:"default",className:"whitespace-nowrap bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50"},[h.A.ENDED]:{label:"Ended",variant:"destructive",className:"whitespace-nowrap bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-50"}};function f(){let[e,t]=(0,o.useState)([]),[r,f]=(0,o.useState)(!0),[x,g]=(0,o.useState)(null),b=(0,s.useRouter)(),{toast:j}=(0,c.dj)(),v=(0,o.useCallback)(e=>e.roomPlayers.some(e=>e.player.id===x),[x]),y=(0,o.useCallback)(e=>[...e].sort((e,t)=>{let r=e.status===h.A.PLAYING&&v(e),a=t.status===h.A.PLAYING&&v(t);return r&&!a?-1:!r&&a?1:e.status===h.A.WAITING&&t.status!==h.A.WAITING?-1:e.status!==h.A.WAITING&&t.status===h.A.WAITING?1:new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()}),[v]);(0,o.useCallback)(async()=>{try{let[e,r]=await Promise.all([m.y.getProfile(),u.w.findAll()]);g(e.id),t(y(r))}catch(e){j({variant:"destructive",title:"Error",description:e instanceof Error?e.message:"Failed to load data"})}finally{f(!1)}},[j,y]);let w=async t=>{let r=e.find(e=>e.id===t);if(r){if(r.status===h.A.PLAYING&&v(r)){b.push(`/rooms/${t}`);return}try{await u.w.join(t),j({title:"Success",description:"Successfully joined the room"}),b.push(`/rooms/${t}`)}catch(e){j({variant:"destructive",title:"Error",description:e instanceof Error?e.message:"Failed to join room"})}}};return(0,a.jsxs)("div",{className:"container mx-auto py-10",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold",children:"Game Rooms"}),(0,a.jsxs)(i.$,{onClick:()=>b.push("/rooms/create"),children:[(0,a.jsx)(n.A,{className:"mr-2 h-4 w-4"}),"Create Room"]})]}),r?(0,a.jsx)("div",{className:"text-center",children:"Loading..."}):(0,a.jsx)("div",{className:"border rounded-lg",children:(0,a.jsxs)(l.XI,{children:[(0,a.jsx)(l.A0,{children:(0,a.jsxs)(l.Hj,{children:[(0,a.jsx)(l.nd,{children:"Name"}),(0,a.jsx)(l.nd,{children:"Description"}),(0,a.jsx)(l.nd,{children:"Players"}),(0,a.jsx)(l.nd,{children:"Status"}),(0,a.jsx)(l.nd,{className:"text-right",children:"Actions"})]})}),(0,a.jsxs)(l.BF,{children:[e.map(e=>{let t=e.status===h.A.WAITING||e.status===h.A.PLAYING&&v(e),r=e.status===h.A.PLAYING&&v(e)?"Rejoin":"Join";return(0,a.jsxs)(l.Hj,{children:[(0,a.jsx)(l.nA,{className:"font-medium",children:e.name}),(0,a.jsx)(l.nA,{children:e.description}),(0,a.jsxs)(l.nA,{children:[e.roomPlayers?.length||0,"/",e.maxPlayers]}),(0,a.jsx)(l.nA,{className:"whitespace-nowrap",children:(0,a.jsx)(d.E,{variant:p[e.status].variant,className:p[e.status].className,children:p[e.status].label})}),(0,a.jsx)(l.nA,{className:"text-right",children:(0,a.jsx)(i.$,{variant:"secondary",onClick:()=>w(e.id),disabled:!t,children:r})})]},e.id)}),0===e.length&&(0,a.jsx)(l.Hj,{children:(0,a.jsx)(l.nA,{colSpan:5,className:"text-center text-muted-foreground",children:"No rooms available"})})]})]})})]})}},8447:(e,t,r)=>{"use strict";r.d(t,{E:()=>i});var a=r(5512);r(8009);var o=r(1643),s=r(4195);let n=(0,o.F)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i({className:e,variant:t,...r}){return(0,a.jsx)("div",{className:(0,s.cn)(n({variant:t}),e),...r})}},5249:(e,t,r)=>{"use strict";r.d(t,{A0:()=>i,BF:()=>l,Hj:()=>d,XI:()=>n,nA:()=>u,nd:()=>c});var a=r(5512),o=r(8009),s=r(4195);let n=o.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:r,className:(0,s.cn)("w-full caption-bottom text-sm",e),...t})}));n.displayName="Table";let i=o.forwardRef(({className:e,...t},r)=>(0,a.jsx)("thead",{ref:r,className:(0,s.cn)("[&_tr]:border-b",e),...t}));i.displayName="TableHeader";let l=o.forwardRef(({className:e,...t},r)=>(0,a.jsx)("tbody",{ref:r,className:(0,s.cn)("[&_tr:last-child]:border-0",e),...t}));l.displayName="TableBody",o.forwardRef(({className:e,...t},r)=>(0,a.jsx)("tfoot",{ref:r,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t})).displayName="TableFooter";let d=o.forwardRef(({className:e,...t},r)=>(0,a.jsx)("tr",{ref:r,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));d.displayName="TableRow";let c=o.forwardRef(({className:e,...t},r)=>(0,a.jsx)("th",{ref:r,className:(0,s.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...t}));c.displayName="TableHead";let u=o.forwardRef(({className:e,...t},r)=>(0,a.jsx)("td",{ref:r,className:(0,s.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...t}));u.displayName="TableCell",o.forwardRef(({className:e,...t},r)=>(0,a.jsx)("caption",{ref:r,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",e),...t})).displayName="TableCaption"},9826:(e,t,r)=>{"use strict";r.d(t,{y:()=>s});var a=r(5998);let o="http://3.107.26.3:3001",s={async getProfile(){let e=a.A.get("token"),t=await fetch(`${o}/auth/profile`,{headers:{Authorization:`Bearer ${e}`}});if(!t.ok)throw Error("Failed to fetch profile");return t.json()},async getCharacters(){let e=a.A.get("token"),t=await fetch(`${o}/characters`,{headers:{Authorization:`Bearer ${e}`}});if(!t.ok)throw Error("Failed to fetch characters");return t.json()}}},9230:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});let a="http://3.107.26.3:3001",o={async findAll(){let e=localStorage.getItem("token"),t=await fetch(`${a}/rooms`,{headers:{Authorization:`Bearer ${e}`}});if(!t.ok)throw Error("Failed to fetch rooms");return t.json()},async findOne(e){let t=localStorage.getItem("token"),r=await fetch(`${a}/rooms/${e}`,{headers:{Authorization:`Bearer ${t}`}});if(!r.ok)throw Error("Failed to fetch room");return r.json()},async join(e){let t=localStorage.getItem("token");if(!(await fetch(`${a}/rooms/${e}/join`,{method:"POST",headers:{Authorization:`Bearer ${t}`}})).ok)throw Error("Failed to join room")},async leave(e){let t=localStorage.getItem("token");if(!(await fetch(`${a}/rooms/${e}/leave`,{method:"POST",headers:{Authorization:`Bearer ${t}`}})).ok)throw Error("Failed to leave room")},async create(e){let t=localStorage.getItem("token"),r=await fetch(`${a}/rooms`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)});if(!r.ok)throw Error("Failed to create room");return r.json()},async startGame(e){let t=localStorage.getItem("token"),r=await fetch(`${a}/rooms/${e}/start`,{method:"POST",headers:{Authorization:`Bearer ${t}`}});if(!r.ok)throw Error("Failed to start game");return r.json()},async selectCharacter(e,t){let r=localStorage.getItem("token"),o=await fetch(`${a}/rooms/${e}/select-character`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({characterId:t})});if(!o.ok)throw Error("Failed to select character");return o.json()}}},1877:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=function(e){return e.WAITING="waiting",e.PLAYING="playing",e.ENDED="ended",e}({})},8951:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/joe.lai/Desktop/projects/test/trpg/frontend/src/app/(authenticated)/rooms/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/joe.lai/Desktop/projects/test/trpg/frontend/src/app/(authenticated)/rooms/page.tsx","default")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,22,77,581,541],()=>r(7641));module.exports=a})();