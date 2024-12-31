(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{660:(e,t,r)=>{Promise.resolve().then(r.bind(r,6375))},7401:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var a=r(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,a.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:c,className:l="",children:d,iconNode:u,...h}=e;return(0,a.createElement)("svg",{ref:t,...s,width:o,height:o,stroke:r,strokeWidth:c?24*Number(i)/Number(o):i,className:n("lucide",l),...h},[...u.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),c=(e,t)=>{let r=(0,a.forwardRef)((r,s)=>{let{className:c,...l}=r;return(0,a.createElement)(i,{ref:s,iconNode:t,className:n("lucide-".concat(o(e)),c),...l})});return r.displayName="".concat(e),r}},3473:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(7401).A)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},6046:(e,t,r)=>{"use strict";var a=r(6658);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}})},6375:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var a=r(5155),o=r(2115),n=r(6046),s=r(3473),i=r(3312),c=r(2508),l=r(5121),d=r(5564),u=r(7800),h=r(4423),f=r(8496);let m={[h.A.WAITING]:{label:"Waiting",variant:"secondary",className:"whitespace-nowrap bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-50"},[h.A.PLAYING]:{label:"Playing",variant:"default",className:"whitespace-nowrap bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50"},[h.A.ENDED]:{label:"Ended",variant:"destructive",className:"whitespace-nowrap bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-50"}};function p(){let[e,t]=(0,o.useState)([]),[r,p]=(0,o.useState)(!0),[g,v]=(0,o.useState)(null),A=(0,n.useRouter)(),{toast:b}=(0,d.dj)(),x=(0,o.useCallback)(e=>e.roomPlayers.some(e=>e.player.id===g),[g]),y=(0,o.useCallback)(e=>[...e].sort((e,t)=>{let r=e.status===h.A.PLAYING&&x(e),a=t.status===h.A.PLAYING&&x(t);return r&&!a?-1:!r&&a?1:e.status===h.A.WAITING&&t.status!==h.A.WAITING?-1:e.status!==h.A.WAITING&&t.status===h.A.WAITING?1:new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()}),[x]),w=(0,o.useCallback)(async()=>{try{let[e,r]=await Promise.all([f.y.getProfile(),u.w.findAll()]);v(e.id),t(y(r))}catch(e){b({variant:"destructive",title:"Error",description:e instanceof Error?e.message:"Failed to load data"})}finally{p(!1)}},[b,y]);(0,o.useEffect)(()=>{w()},[w]);let j=async t=>{let r=e.find(e=>e.id===t);if(r){if(r.status===h.A.PLAYING&&x(r)){A.push("/rooms/".concat(t));return}try{await u.w.join(t),b({title:"Success",description:"Successfully joined the room"}),A.push("/rooms/".concat(t))}catch(e){b({variant:"destructive",title:"Error",description:e instanceof Error?e.message:"Failed to join room"})}}};return(0,a.jsxs)("div",{className:"container mx-auto py-10",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold",children:"Game Rooms"}),(0,a.jsxs)(i.$,{onClick:()=>A.push("/rooms/create"),children:[(0,a.jsx)(s.A,{className:"mr-2 h-4 w-4"}),"Create Room"]})]}),r?(0,a.jsx)("div",{className:"text-center",children:"Loading..."}):(0,a.jsx)("div",{className:"border rounded-lg",children:(0,a.jsxs)(c.XI,{children:[(0,a.jsx)(c.A0,{children:(0,a.jsxs)(c.Hj,{children:[(0,a.jsx)(c.nd,{children:"Name"}),(0,a.jsx)(c.nd,{children:"Description"}),(0,a.jsx)(c.nd,{children:"Players"}),(0,a.jsx)(c.nd,{children:"Status"}),(0,a.jsx)(c.nd,{className:"text-right",children:"Actions"})]})}),(0,a.jsxs)(c.BF,{children:[e.map(e=>{var t;let r=e.status===h.A.WAITING||e.status===h.A.PLAYING&&x(e),o=e.status===h.A.PLAYING&&x(e)?"Rejoin":"Join";return(0,a.jsxs)(c.Hj,{children:[(0,a.jsx)(c.nA,{className:"font-medium",children:e.name}),(0,a.jsx)(c.nA,{children:e.description}),(0,a.jsxs)(c.nA,{children:[(null===(t=e.roomPlayers)||void 0===t?void 0:t.length)||0,"/",e.maxPlayers]}),(0,a.jsx)(c.nA,{className:"whitespace-nowrap",children:(0,a.jsx)(l.E,{variant:m[e.status].variant,className:m[e.status].className,children:m[e.status].label})}),(0,a.jsx)(c.nA,{className:"text-right",children:(0,a.jsx)(i.$,{variant:"secondary",onClick:()=>j(e.id),disabled:!r,children:o})})]},e.id)}),0===e.length&&(0,a.jsx)(c.Hj,{children:(0,a.jsx)(c.nA,{colSpan:5,className:"text-center text-muted-foreground",children:"No rooms available"})})]})]})})]})}},5121:(e,t,r)=>{"use strict";r.d(t,{E:()=>i});var a=r(5155);r(2115);var o=r(1027),n=r(1567);let s=(0,o.F)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:t,variant:r,...o}=e;return(0,a.jsx)("div",{className:(0,n.cn)(s({variant:r}),t),...o})}},3312:(e,t,r)=>{"use strict";r.d(t,{$:()=>l,r:()=>c});var a=r(5155),o=r(2115),n=r(2317),s=r(1027),i=r(1567);let c=(0,s.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=o.forwardRef((e,t)=>{let{className:r,variant:o,size:s,asChild:l=!1,...d}=e,u=l?n.DX:"button";return(0,a.jsx)(u,{className:(0,i.cn)(c({variant:o,size:s,className:r})),ref:t,...d})});l.displayName="Button"},2508:(e,t,r)=>{"use strict";r.d(t,{A0:()=>i,BF:()=>c,Hj:()=>l,XI:()=>s,nA:()=>u,nd:()=>d});var a=r(5155),o=r(2115),n=r(1567);let s=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,n.cn)("w-full caption-bottom text-sm",r),...o})})});s.displayName="Table";let i=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("thead",{ref:t,className:(0,n.cn)("[&_tr]:border-b",r),...o})});i.displayName="TableHeader";let c=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,n.cn)("[&_tr:last-child]:border-0",r),...o})});c.displayName="TableBody",o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,n.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...o})}).displayName="TableFooter";let l=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("tr",{ref:t,className:(0,n.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...o})});l.displayName="TableRow";let d=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("th",{ref:t,className:(0,n.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...o})});d.displayName="TableHead";let u=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("td",{ref:t,className:(0,n.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...o})});u.displayName="TableCell",o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("caption",{ref:t,className:(0,n.cn)("mt-4 text-sm text-muted-foreground",r),...o})}).displayName="TableCaption"},5564:(e,t,r)=>{"use strict";r.d(t,{dj:()=>f});var a=r(2115),o=function(e){return e.ADD_TOAST="ADD_TOAST",e.UPDATE_TOAST="UPDATE_TOAST",e.DISMISS_TOAST="DISMISS_TOAST",e.REMOVE_TOAST="REMOVE_TOAST",e}(o||{});let n=new Map,s=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?s(r):e.toasts.forEach(e=>{s(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},c=[],l={toasts:[]};function d(e){l=i(l,e),c.forEach(e=>{e(l)})}function u(e){let{...t}=e,r=(h=(h+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>d({type:"DISMISS_TOAST",toastId:r});return d({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||a()}}}),{id:r,dismiss:a,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:r}})}}let h=0;function f(){let[e,t]=a.useState(l);return a.useEffect(()=>(c.push(t),()=>{let e=c.indexOf(t);e>-1&&c.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var a=r(3463),o=r(9795);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.QP)((0,a.$)(t))}},8496:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});var a=r(9208);let o="http://13.210.70.201:3000",n={async getProfile(){let e=a.A.get("token"),t=await fetch("".concat(o,"/auth/profile"),{headers:{Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Failed to fetch profile");return t.json()},async getCharacters(){let e=a.A.get("token"),t=await fetch("".concat(o,"/characters"),{headers:{Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Failed to fetch characters");return t.json()}}},7800:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});let a="http://13.210.70.201:3000",o={async findAll(){let e=localStorage.getItem("token"),t=await fetch("".concat(a,"/rooms"),{headers:{Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Failed to fetch rooms");return t.json()},async findOne(e){let t=localStorage.getItem("token"),r=await fetch("".concat(a,"/rooms/").concat(e),{headers:{Authorization:"Bearer ".concat(t)}});if(!r.ok)throw Error("Failed to fetch room");return r.json()},async join(e){let t=localStorage.getItem("token");if(!(await fetch("".concat(a,"/rooms/").concat(e,"/join"),{method:"POST",headers:{Authorization:"Bearer ".concat(t)}})).ok)throw Error("Failed to join room")},async leave(e){let t=localStorage.getItem("token");if(!(await fetch("".concat(a,"/rooms/").concat(e,"/leave"),{method:"POST",headers:{Authorization:"Bearer ".concat(t)}})).ok)throw Error("Failed to leave room")},async create(e){let t=localStorage.getItem("token"),r=await fetch("".concat(a,"/rooms"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)});if(!r.ok)throw Error("Failed to create room");return r.json()},async startGame(e){let t=localStorage.getItem("token"),r=await fetch("".concat(a,"/rooms/").concat(e,"/start"),{method:"POST",headers:{Authorization:"Bearer ".concat(t)}});if(!r.ok)throw Error("Failed to start game");return r.json()},async selectCharacter(e,t){let r=localStorage.getItem("token"),o=await fetch("".concat(a,"/rooms/").concat(e,"/select-character"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({characterId:t})});if(!o.ok)throw Error("Failed to select character");return o.json()}}},4423:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var a=function(e){return e.WAITING="waiting",e.PLAYING="playing",e.ENDED="ended",e}({})},9208:(e,t,r)=>{"use strict";function a(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)e[a]=r[a]}return e}r.d(t,{A:()=>o});var o=function e(t,r){function o(e,o,n){if("undefined"!=typeof document){"number"==typeof(n=a({},r,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var i in n)n[i]&&(s+="; "+i,!0!==n[i]&&(s+="="+n[i].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+s}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],a={},o=0;o<r.length;o++){var n=r[o].split("="),s=n.slice(1).join("=");try{var i=decodeURIComponent(n[0]);if(a[i]=t.read(s,i),e===i)break}catch(e){}}return e?a[e]:a}},remove:function(e,t){o(e,"",a({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,a({},this.attributes,t))},withConverter:function(t){return e(a({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},e=>{var t=t=>e(e.s=t);e.O(0,[365,441,517,358],()=>t(660)),_N_E=e.O()}]);