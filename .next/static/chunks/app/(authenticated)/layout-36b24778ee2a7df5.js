(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[340],{2708:(e,t,s)=>{Promise.resolve().then(s.bind(s,8715))},6046:(e,t,s)=>{"use strict";var r=s(6658);s.o(r,"usePathname")&&s.d(t,{usePathname:function(){return r.usePathname}}),s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}})},8715:(e,t,s)=>{"use strict";s.d(t,{Header:()=>l});var r=s(5155),o=s(8173),a=s.n(o),n=s(6046),i=s(3312),c=s(4144),d=s(5564),u=s(1567);function l(){let e=(0,n.useRouter)(),t=(0,n.usePathname)(),{toast:s}=(0,d.dj)();return(0,r.jsx)("header",{className:"border-b",children:(0,r.jsxs)("div",{className:"container mx-auto px-4 h-16 flex items-center justify-between",children:[(0,r.jsx)("nav",{className:"flex items-center gap-6",children:[{href:"/dashboard",label:"Dashboard"},{href:"/rooms",label:"Rooms"},{href:"/scripts",label:"Scripts"}].map(e=>(0,r.jsx)(a(),{href:e.href,className:(0,u.cn)("hover:text-primary transition-colors",t===e.href?"text-primary font-semibold":"text-muted-foreground",t.startsWith(e.href)&&"/"!==e.href?"text-primary font-semibold":""),children:e.label},e.href))}),(0,r.jsx)(i.$,{variant:"ghost",onClick:()=>{c.y.logout(),s({title:"Success",description:"Logged out successfully"}),e.push("/login")},children:"Logout"})]})})}},3312:(e,t,s)=>{"use strict";s.d(t,{$:()=>d,r:()=>c});var r=s(5155),o=s(2115),a=s(2317),n=s(1027),i=s(1567);let c=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=o.forwardRef((e,t)=>{let{className:s,variant:o,size:n,asChild:d=!1,...u}=e,l=d?a.DX:"button";return(0,r.jsx)(l,{className:(0,i.cn)(c({variant:o,size:n,className:s})),ref:t,...u})});d.displayName="Button"},5564:(e,t,s)=>{"use strict";s.d(t,{dj:()=>f});var r=s(2115),o=function(e){return e.ADD_TOAST="ADD_TOAST",e.UPDATE_TOAST="UPDATE_TOAST",e.DISMISS_TOAST="DISMISS_TOAST",e.REMOVE_TOAST="REMOVE_TOAST",e}(o||{});let a=new Map,n=e=>{if(a.has(e))return;let t=setTimeout(()=>{a.delete(e),u({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?n(s):e.toasts.forEach(e=>{n(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},c=[],d={toasts:[]};function u(e){d=i(d,e),c.forEach(e=>{e(d)})}function l(e){let{...t}=e,s=(h=(h+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>u({type:"DISMISS_TOAST",toastId:s});return u({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>u({type:"UPDATE_TOAST",toast:{...e,id:s}})}}let h=0;function f(){let[e,t]=r.useState(d);return r.useEffect(()=>(c.push(t),()=>{let e=c.indexOf(t);e>-1&&c.splice(e,1)}),[e]),{...e,toast:l,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},1567:(e,t,s)=>{"use strict";s.d(t,{cn:()=>a});var r=s(3463),o=s(9795);function a(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,o.QP)((0,r.$)(t))}},4144:(e,t,s)=>{"use strict";s.d(t,{y:()=>a});var r=s(9208);let o="http://13.210.70.201:3000",a={async login(e){let t=await fetch("".concat(o,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error((await t.json().catch(()=>({}))).message||"Login failed");let s=await t.json();return r.A.set("token",s.access_token),localStorage.setItem("token",s.access_token),s},async register(e){let t=await fetch("".concat(o,"/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error("Registration failed");let s=await t.json();return r.A.set("token",s.access_token),s},logout(){r.A.remove("token")}}}},e=>{var t=t=>e(e.s=t);e.O(0,[365,164,441,517,358],()=>t(2708)),_N_E=e.O()}]);