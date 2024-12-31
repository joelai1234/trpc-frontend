(()=>{var e={};e.id=454,e.ids=[454],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},29:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l});var s=r(260),o=r(8203),a=r(5155),n=r.n(a),i=r(7292),d={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);r.d(t,d);let l=["",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5753)),"/Users/joe.lai/Desktop/projects/test/trpg/frontend/src/app/register/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"/Users/joe.lai/Desktop/projects/test/trpg/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/joe.lai/Desktop/projects/test/trpg/frontend/src/app/register/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},1057:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},4209:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},3917:(e,t,r)=>{Promise.resolve().then(r.bind(r,7490))},5533:(e,t,r)=>{Promise.resolve().then(r.bind(r,2124))},4812:(e,t,r)=>{Promise.resolve().then(r.bind(r,5753))},4540:(e,t,r)=>{Promise.resolve().then(r.bind(r,2949))},2949:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(5512),o=r(1914),a=r(6868),n=r(6131),i=r(9334),d=r(8531),l=r.n(d),c=r(9400),u=r(2373),p=r(7722),m=r(5920),f=r(4716);let x=n.Ik({username:n.Yj().min(2,{message:"Username must be at least 2 characters."}),email:n.Yj().email({message:"Please enter a valid email address."}),password:n.Yj().min(6,{message:"Password must be at least 6 characters."})});function h(){let e=(0,i.useRouter)(),{toast:t}=(0,f.dj)(),r=(0,a.mN)({resolver:(0,o.u)(x),defaultValues:{username:"",email:"",password:""}});async function n(r){try{let s=await m.y.register(r);localStorage.setItem("token",s.access_token),t({title:"Success",description:"Registration successful!"}),e.push("/dashboard")}catch{t({variant:"destructive",title:"Error",description:"Failed to register. Please try again."})}}return(0,s.jsx)("div",{className:"container mx-auto flex h-screen items-center justify-center p-6 md:p-10",children:(0,s.jsxs)("div",{className:"w-full max-w-md space-y-6",children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold",children:"Create an account"}),(0,s.jsx)("p",{className:"text-muted-foreground",children:"Enter your details to register"})]}),(0,s.jsx)(u.lV,{...r,children:(0,s.jsxs)("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[(0,s.jsx)(u.zB,{control:r.control,name:"username",render:({field:e})=>(0,s.jsxs)(u.eI,{children:[(0,s.jsx)(u.lR,{children:"Username"}),(0,s.jsx)(u.MJ,{children:(0,s.jsx)(p.p,{placeholder:"Enter your username",...e})}),(0,s.jsx)(u.C5,{})]})}),(0,s.jsx)(u.zB,{control:r.control,name:"email",render:({field:e})=>(0,s.jsxs)(u.eI,{children:[(0,s.jsx)(u.lR,{children:"Email"}),(0,s.jsx)(u.MJ,{children:(0,s.jsx)(p.p,{type:"email",placeholder:"Enter your email",...e})}),(0,s.jsx)(u.C5,{})]})}),(0,s.jsx)(u.zB,{control:r.control,name:"password",render:({field:e})=>(0,s.jsxs)(u.eI,{children:[(0,s.jsx)(u.lR,{children:"Password"}),(0,s.jsx)(u.MJ,{children:(0,s.jsx)(p.p,{type:"password",placeholder:"Enter your password",...e})}),(0,s.jsx)(u.C5,{})]})}),(0,s.jsx)(c.$,{type:"submit",className:"w-full",children:"Register"})]})}),(0,s.jsxs)("div",{className:"text-center text-sm",children:["Already have an account?"," ",(0,s.jsx)(l(),{href:"/login",className:"text-primary hover:underline",children:"Login"})]})]})})}},9400:(e,t,r)=>{"use strict";r.d(t,{$:()=>l,r:()=>d});var s=r(5512),o=r(8009),a=r(2705),n=r(1643),i=r(4195);let d=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=o.forwardRef(({className:e,variant:t,size:r,asChild:o=!1,...n},l)=>{let c=o?a.DX:"button";return(0,s.jsx)(c,{className:(0,i.cn)(d({variant:t,size:r,className:e})),ref:l,...n})});l.displayName="Button"},2373:(e,t,r)=>{"use strict";r.d(t,{lV:()=>u,MJ:()=>g,zB:()=>m,eI:()=>h,lR:()=>v,C5:()=>b});var s=r(5512),o=r(8009),a=r(2705),n=r(6868),i=r(4195),d=r(2405);let l=(0,r(1643).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=o.forwardRef(({className:e,...t},r)=>(0,s.jsx)(d.b,{ref:r,className:(0,i.cn)(l(),e),...t}));c.displayName=d.b.displayName;let u=n.Op,p=o.createContext({}),m=({...e})=>(0,s.jsx)(p.Provider,{value:{name:e.name},children:(0,s.jsx)(n.xI,{...e})}),f=()=>{let e=o.useContext(p),t=o.useContext(x),{getFieldState:r,formState:s}=(0,n.xW)(),a=r(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:`${i}-form-item`,formDescriptionId:`${i}-form-item-description`,formMessageId:`${i}-form-item-message`,...a}},x=o.createContext({}),h=o.forwardRef(({className:e,...t},r)=>{let a=o.useId();return(0,s.jsx)(x.Provider,{value:{id:a},children:(0,s.jsx)("div",{ref:r,className:(0,i.cn)("space-y-2",e),...t})})});h.displayName="FormItem";let v=o.forwardRef(({className:e,...t},r)=>{let{error:o,formItemId:a}=f();return(0,s.jsx)(c,{ref:r,className:(0,i.cn)(o&&"text-destructive",e),htmlFor:a,...t})});v.displayName="FormLabel";let g=o.forwardRef(({...e},t)=>{let{error:r,formItemId:o,formDescriptionId:n,formMessageId:i}=f();return(0,s.jsx)(a.DX,{ref:t,id:o,"aria-describedby":r?`${n} ${i}`:`${n}`,"aria-invalid":!!r,...e})});g.displayName="FormControl",o.forwardRef(({className:e,...t},r)=>{let{formDescriptionId:o}=f();return(0,s.jsx)("p",{ref:r,id:o,className:(0,i.cn)("text-[0.8rem] text-muted-foreground",e),...t})}).displayName="FormDescription";let b=o.forwardRef(({className:e,children:t,...r},o)=>{let{error:a,formMessageId:n}=f(),d=a?String(a?.message):t;return d?(0,s.jsx)("p",{ref:o,id:n,className:(0,i.cn)("text-[0.8rem] font-medium text-destructive",e),...r,children:d}):null});b.displayName="FormMessage"},7722:(e,t,r)=>{"use strict";r.d(t,{p:()=>n});var s=r(5512),o=r(8009),a=r(4195);let n=o.forwardRef(({className:e,type:t,...r},o)=>(0,s.jsx)("input",{type:t,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:o,...r}));n.displayName="Input"},2124:(e,t,r)=>{"use strict";r.d(t,{Toaster:()=>v});var s=r(5512),o=r(4716),a=r(8009),n=r(8952),i=r(1643),d=r(4269),l=r(4195);let c=n.Kq,u=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(n.LM,{ref:r,className:(0,l.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));u.displayName=n.LM.displayName;let p=(0,i.F)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),m=a.forwardRef(({className:e,variant:t,...r},o)=>(0,s.jsx)(n.bL,{ref:o,className:(0,l.cn)(p({variant:t}),e),...r}));m.displayName=n.bL.displayName,a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(n.rc,{ref:r,className:(0,l.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=n.rc.displayName;let f=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(n.bm,{ref:r,className:(0,l.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:(0,s.jsx)(d.A,{className:"h-4 w-4"})}));f.displayName=n.bm.displayName;let x=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(n.hE,{ref:r,className:(0,l.cn)("text-sm font-semibold [&+div]:text-xs",e),...t}));x.displayName=n.hE.displayName;let h=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(n.VY,{ref:r,className:(0,l.cn)("text-sm opacity-90",e),...t}));function v(){let{toasts:e}=(0,o.dj)();return(0,s.jsxs)(c,{children:[e.map(function({id:e,title:t,description:r,action:o,...a}){return(0,s.jsxs)(m,{...a,children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[t&&(0,s.jsx)(x,{children:t}),r&&(0,s.jsx)(h,{children:r})]}),o,(0,s.jsx)(f,{})]},e)}),(0,s.jsx)(u,{})]})}h.displayName=n.VY.displayName},4716:(e,t,r)=>{"use strict";r.d(t,{dj:()=>m});var s=r(8009),o=function(e){return e.ADD_TOAST="ADD_TOAST",e.UPDATE_TOAST="UPDATE_TOAST",e.DISMISS_TOAST="DISMISS_TOAST",e.REMOVE_TOAST="REMOVE_TOAST",e}(o||{});let a=new Map,n=e=>{if(a.has(e))return;let t=setTimeout(()=>{a.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?n(r):e.toasts.forEach(e=>{n(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],l={toasts:[]};function c(e){l=i(l,e),d.forEach(e=>{e(l)})}function u({...e}){let t=(p=(p+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:t});return c({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:t}})}}let p=0;function m(){let[e,t]=s.useState(l);return s.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},4195:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var s=r(2281),o=r(4805);function a(...e){return(0,o.QP)((0,s.$)(e))}},5920:(e,t,r)=>{"use strict";r.d(t,{y:()=>a});var s=r(5998);let o="http://13.210.70.201:3000",a={async login(e){let t=await fetch(`${o}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error((await t.json().catch(()=>({}))).message||"Login failed");let r=await t.json();return s.A.set("token",r.access_token),localStorage.setItem("token",r.access_token),r},async register(e){let t=await fetch(`${o}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error("Registration failed");let r=await t.json();return s.A.set("token",r.access_token),r},logout(){s.A.remove("token")}}},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>l});var s=r(2740),o=r(2202),a=r.n(o),n=r(4988),i=r.n(n);r(1135);var d=r(7490);let l={title:"COC",description:"COC"};function c({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsxs)("body",{className:`${a().variable} ${i().variable} antialiased`,children:[e,(0,s.jsx)(d.Toaster,{})]})})}},5753:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/joe.lai/Desktop/projects/test/trpg/frontend/src/app/register/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/joe.lai/Desktop/projects/test/trpg/frontend/src/app/register/page.tsx","default")},7490:(e,t,r)=>{"use strict";r.d(t,{Toaster:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/joe.lai/Desktop/projects/test/trpg/frontend/src/components/ui/toaster.tsx","Toaster")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(8077);let o=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,22,77,581,310],()=>r(29));module.exports=s})();