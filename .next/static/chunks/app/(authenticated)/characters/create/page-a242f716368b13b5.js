(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921],{2285:(e,t,r)=>{Promise.resolve().then(r.bind(r,8977))},8977:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>T});var a=r(5155),s=r(2679),n=r(9606),i=r(3415),l=r(6046),c=r(3312),o=r(3886),d=r(3900),m=r(6754),u=r(5564),x=r(5231),p=r(9749),h=r(7080),f=r(3473),j=r(5686),b=r(2115),g=r(6352),v=r(8867),y=r(1567);let N=b.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(g.bL,{ref:t,className:(0,y.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...s,children:(0,a.jsx)(g.C1,{className:(0,y.cn)("flex items-center justify-center text-current"),children:(0,a.jsx)(v.A,{className:"h-4 w-4"})})})});N.displayName=g.bL.displayName;let w=i.Ik({name:i.Yj().min(2,"Name must be at least 2 characters"),occupation:i.Yj().min(2,"Occupation must be at least 2 characters"),age:i.au.number().min(15).max(90),str:i.au.number().min(15).max(90),con:i.au.number().min(15).max(90),siz:i.au.number().min(40).max(90),dex:i.au.number().min(15).max(90),app:i.au.number().min(15).max(90),int:i.au.number().min(40).max(90),pow:i.au.number().min(15).max(90),edu:i.au.number().min(40).max(90),luck:i.au.number().min(15).max(90),hp:i.au.number(),maxHp:i.au.number(),mp:i.au.number(),maxMp:i.au.number(),san:i.au.number(),maxSan:i.au.number(),mov:i.au.number(),background:i.Yj(),skills:i.YO(i.Ik({name:i.Yj(),value:i.ai(),isOccupational:i.zM().default(!1)})),equipment:i.YO(i.Yj())}),S=[{name:"str",label:"STR",description:"Strength (3D6 \xd7 5)",min:15,max:90,diceRule:"3d6x5"},{name:"con",label:"CON",description:"Constitution (3D6 \xd7 5)",min:15,max:90,diceRule:"3d6x5"},{name:"siz",label:"SIZ",description:"Size ((2D6 + 6) \xd7 5)",min:40,max:90,diceRule:"(2d6+6)x5"},{name:"dex",label:"DEX",description:"Dexterity (3D6 \xd7 5)",min:15,max:90,diceRule:"3d6x5"},{name:"app",label:"APP",description:"Appearance (3D6 \xd7 5)",min:15,max:90,diceRule:"3d6x5"},{name:"int",label:"INT",description:"Intelligence ((2D6 + 6) \xd7 5)",min:40,max:90,diceRule:"(2d6+6)x5"},{name:"pow",label:"POW",description:"Power (3D6 \xd7 5)",min:15,max:90,diceRule:"3d6x5"},{name:"edu",label:"EDU",description:"Education ((2D6 + 6) \xd7 5)",min:40,max:90,diceRule:"(2d6+6)x5"},{name:"luck",label:"LUK",description:"Luck (3D6 \xd7 5)",min:15,max:90,diceRule:"3d6x5"}];function T(){let e=(0,l.useRouter)(),{toast:t}=(0,u.dj)(),r=(0,n.mN)({resolver:(0,s.u)(w),defaultValues:{name:"",occupation:"",age:25,str:50,con:50,siz:50,dex:50,app:50,int:50,pow:50,edu:50,luck:50,skills:[],background:"",equipment:[],hp:0,maxHp:0,mp:0,maxMp:0,san:0,maxSan:0,mov:0}}),{fields:i,append:b,remove:g}=(0,n.jz)({name:"skills",control:r.control}),{fields:v,append:y,remove:T}=(0,n.jz)({name:"equipment",control:r.control}),k=(e,t)=>{let a=0;"3d6x5"===e?a=5*[,,,].fill(0).map(()=>Math.floor(6*Math.random())+1).reduce((e,t)=>e+t,0):"(2d6+6)x5"===e&&(a=([,,].fill(0).map(()=>Math.floor(6*Math.random())+1).reduce((e,t)=>e+t,0)+6)*5);let s=S.find(e=>e.name===t);s&&(a=Math.max(s.min,Math.min(s.max,a))),r.setValue(t,a)};async function A(r){try{let a=Math.floor((r.con+r.siz)/10),s=Math.floor(r.pow/5),n=r.pow,i=8;r.str<r.siz&&r.dex<r.siz&&(i=7),r.str>r.siz&&r.dex>r.siz&&(i=9);let l={...r,hp:a,maxHp:a,mp:s,maxMp:s,san:n,maxSan:n,mov:i},c=await x.b.create(l);t({title:"Success",description:"Character created successfully!"}),e.push("/characters/".concat(c.id))}catch(e){t({variant:"destructive",title:"Error",description:e instanceof Error?e.message:"Failed to create character"})}}return(0,a.jsx)("div",{className:"container mx-auto py-10",children:(0,a.jsxs)(p.Zp,{children:[(0,a.jsx)(p.aR,{children:(0,a.jsxs)(p.ZB,{className:"flex justify-between items-center",children:["Create Character",(0,a.jsxs)(c.$,{type:"button",variant:"outline",onClick:()=>{S.forEach(e=>{k(e.diceRule,e.name)}),t({title:"Success",description:"All characteristics have been rolled!"})},className:"flex items-center gap-2",children:[(0,a.jsx)(h.A,{className:"h-4 w-4"}),"Roll All Characteristics"]})]})}),(0,a.jsx)(p.Wu,{children:(0,a.jsx)(o.lV,{...r,children:(0,a.jsxs)("form",{onSubmit:r.handleSubmit(A),className:"space-y-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,a.jsx)(o.zB,{control:r.control,name:"name",render:e=>{let{field:t}=e;return(0,a.jsxs)(o.eI,{children:[(0,a.jsx)(o.lR,{children:"Character Name"}),(0,a.jsx)(o.MJ,{children:(0,a.jsx)(d.p,{placeholder:"Enter character name",...t})}),(0,a.jsx)(o.C5,{})]})}}),(0,a.jsx)(o.zB,{control:r.control,name:"occupation",render:e=>{let{field:t}=e;return(0,a.jsxs)(o.eI,{children:[(0,a.jsx)(o.lR,{children:"Occupation"}),(0,a.jsx)(o.MJ,{children:(0,a.jsx)(d.p,{placeholder:"Enter occupation",...t})}),(0,a.jsx)(o.C5,{})]})}}),(0,a.jsx)(o.zB,{control:r.control,name:"age",render:e=>{let{field:t}=e;return(0,a.jsxs)(o.eI,{children:[(0,a.jsx)(o.lR,{children:"Age"}),(0,a.jsx)(o.MJ,{children:(0,a.jsx)(d.p,{type:"number",min:15,max:90,...t})}),(0,a.jsx)(o.C5,{})]})}})]}),(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:S.map(e=>(0,a.jsx)(o.zB,{control:r.control,name:e.name,render:t=>{let{field:r}=t;return(0,a.jsxs)(o.eI,{children:[(0,a.jsxs)(o.lR,{children:[(0,a.jsx)("span",{className:"font-medium",children:e.label}),(0,a.jsx)("span",{className:"text-xs text-muted-foreground block",children:e.description})]}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)(o.MJ,{children:(0,a.jsx)(d.p,{type:"number",min:e.min,max:e.max,...r})}),(0,a.jsx)(c.$,{type:"button",variant:"outline",size:"icon",onClick:()=>k(e.diceRule,e.name),children:(0,a.jsx)(h.A,{className:"h-4 w-4"})})]}),(0,a.jsx)(o.C5,{})]})}},e.name))}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(o.lR,{children:"Skills"}),(0,a.jsxs)(c.$,{type:"button",variant:"outline",size:"sm",onClick:()=>b({name:"",value:50,isOccupational:!1}),children:[(0,a.jsx)(f.A,{className:"h-4 w-4 mr-2"}),"Add Skill"]})]}),i.map((e,t)=>(0,a.jsxs)("div",{className:"flex gap-4 items-start",children:[(0,a.jsx)(o.zB,{control:r.control,name:"skills.".concat(t,".name"),render:e=>{let{field:t}=e;return(0,a.jsxs)(o.eI,{className:"flex-1",children:[(0,a.jsx)(o.MJ,{children:(0,a.jsx)(d.p,{placeholder:"Skill name",...t})}),(0,a.jsx)(o.C5,{})]})}}),(0,a.jsx)(o.zB,{control:r.control,name:"skills.".concat(t,".value"),render:e=>{let{field:t}=e;return(0,a.jsxs)(o.eI,{className:"w-24",children:[(0,a.jsx)(o.MJ,{children:(0,a.jsx)(d.p,{type:"number",min:0,max:99,...t})}),(0,a.jsx)(o.C5,{})]})}}),(0,a.jsx)(o.zB,{control:r.control,name:"skills.".concat(t,".isOccupational"),render:e=>{let{field:t}=e;return(0,a.jsxs)(o.eI,{className:"flex items-center space-x-2",children:[(0,a.jsx)(o.MJ,{children:(0,a.jsx)(N,{checked:t.value,onCheckedChange:t.onChange})}),(0,a.jsx)(o.lR,{className:"text-sm font-normal",children:"Occupational"})]})}}),(0,a.jsx)(c.$,{type:"button",variant:"ghost",size:"icon",onClick:()=>g(t),children:(0,a.jsx)(j.A,{className:"h-4 w-4"})})]},e.id))]}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(o.lR,{children:"Equipment"}),(0,a.jsxs)(c.$,{type:"button",variant:"outline",size:"sm",onClick:()=>y(""),children:[(0,a.jsx)(f.A,{className:"h-4 w-4 mr-2"}),"Add Equipment"]})]}),v.map((e,t)=>(0,a.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,a.jsx)(o.zB,{control:r.control,name:"equipment.".concat(t),render:e=>{let{field:t}=e;return(0,a.jsxs)(o.eI,{className:"flex-1",children:[(0,a.jsx)(o.MJ,{children:(0,a.jsx)(d.p,{placeholder:"Equipment name",...t})}),(0,a.jsx)(o.C5,{})]})}}),(0,a.jsx)(c.$,{type:"button",variant:"ghost",size:"icon",onClick:()=>T(t),children:(0,a.jsx)(j.A,{className:"h-4 w-4"})})]},e.id))]}),(0,a.jsx)(o.zB,{control:r.control,name:"background",render:e=>{let{field:t}=e;return(0,a.jsxs)(o.eI,{children:[(0,a.jsx)(o.lR,{children:"Background Story"}),(0,a.jsx)(o.MJ,{children:(0,a.jsx)(m.T,{placeholder:"Enter character background story",className:"min-h-[100px]",...t})}),(0,a.jsx)(o.C5,{})]})}}),(0,a.jsxs)("div",{className:"flex justify-end space-x-4",children:[(0,a.jsx)(c.$,{type:"button",variant:"outline",onClick:()=>e.back(),children:"Cancel"}),(0,a.jsx)(c.$,{type:"submit",children:"Create Character"})]})]})})})]})})}},3312:(e,t,r)=>{"use strict";r.d(t,{$:()=>o,r:()=>c});var a=r(5155),s=r(2115),n=r(2317),i=r(1027),l=r(1567);let c=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:o=!1,...d}=e,m=o?n.DX:"button";return(0,a.jsx)(m,{className:(0,l.cn)(c({variant:s,size:i,className:r})),ref:t,...d})});o.displayName="Button"},9749:(e,t,r)=>{"use strict";r.d(t,{BT:()=>o,Wu:()=>d,ZB:()=>c,Zp:()=>i,aR:()=>l});var a=r(5155),s=r(2115),n=r(1567);let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s})});i.displayName="Card";let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",r),...s})});l.displayName="CardHeader";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h3",{ref:t,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",r),...s})});c.displayName="CardTitle";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",r),...s})});o.displayName="CardDescription";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",r),...s})});d.displayName="CardContent",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",r),...s})}).displayName="CardFooter"},3886:(e,t,r)=>{"use strict";r.d(t,{lV:()=>m,MJ:()=>b,zB:()=>x,eI:()=>f,lR:()=>j,C5:()=>g});var a=r(5155),s=r(2115),n=r(2317),i=r(9606),l=r(1567),c=r(6195);let o=(0,r(1027).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(c.b,{ref:t,className:(0,l.cn)(o(),r),...s})});d.displayName=c.b.displayName;let m=i.Op,u=s.createContext({}),x=e=>{let{...t}=e;return(0,a.jsx)(u.Provider,{value:{name:t.name},children:(0,a.jsx)(i.xI,{...t})})},p=()=>{let e=s.useContext(u),t=s.useContext(h),{getFieldState:r,formState:a}=(0,i.xW)(),n=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:l}=t;return{id:l,name:e.name,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...n}},h=s.createContext({}),f=s.forwardRef((e,t)=>{let{className:r,...n}=e,i=s.useId();return(0,a.jsx)(h.Provider,{value:{id:i},children:(0,a.jsx)("div",{ref:t,className:(0,l.cn)("space-y-2",r),...n})})});f.displayName="FormItem";let j=s.forwardRef((e,t)=>{let{className:r,...s}=e,{error:n,formItemId:i}=p();return(0,a.jsx)(d,{ref:t,className:(0,l.cn)(n&&"text-destructive",r),htmlFor:i,...s})});j.displayName="FormLabel";let b=s.forwardRef((e,t)=>{let{...r}=e,{error:s,formItemId:i,formDescriptionId:l,formMessageId:c}=p();return(0,a.jsx)(n.DX,{ref:t,id:i,"aria-describedby":s?"".concat(l," ").concat(c):"".concat(l),"aria-invalid":!!s,...r})});b.displayName="FormControl",s.forwardRef((e,t)=>{let{className:r,...s}=e,{formDescriptionId:n}=p();return(0,a.jsx)("p",{ref:t,id:n,className:(0,l.cn)("text-[0.8rem] text-muted-foreground",r),...s})}).displayName="FormDescription";let g=s.forwardRef((e,t)=>{let{className:r,children:s,...n}=e,{error:i,formMessageId:c}=p(),o=i?String(null==i?void 0:i.message):s;return o?(0,a.jsx)("p",{ref:t,id:c,className:(0,l.cn)("text-[0.8rem] font-medium text-destructive",r),...n,children:o}):null});g.displayName="FormMessage"},3900:(e,t,r)=>{"use strict";r.d(t,{p:()=>i});var a=r(5155),s=r(2115),n=r(1567);let i=s.forwardRef((e,t)=>{let{className:r,type:s,...i}=e;return(0,a.jsx)("input",{type:s,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...i})});i.displayName="Input"},6754:(e,t,r)=>{"use strict";r.d(t,{T:()=>i});var a=r(5155),s=r(2115),n=r(1567);let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("textarea",{className:(0,n.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...s})});i.displayName="Textarea"},5564:(e,t,r)=>{"use strict";r.d(t,{dj:()=>x});var a=r(2115),s=function(e){return e.ADD_TOAST="ADD_TOAST",e.UPDATE_TOAST="UPDATE_TOAST",e.DISMISS_TOAST="DISMISS_TOAST",e.REMOVE_TOAST="REMOVE_TOAST",e}(s||{});let n=new Map,i=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},l=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},c=[],o={toasts:[]};function d(e){o=l(o,e),c.forEach(e=>{e(o)})}function m(e){let{...t}=e,r=(u=(u+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>d({type:"DISMISS_TOAST",toastId:r});return d({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||a()}}}),{id:r,dismiss:a,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:r}})}}let u=0;function x(){let[e,t]=a.useState(o);return a.useEffect(()=>(c.push(t),()=>{let e=c.indexOf(t);e>-1&&c.splice(e,1)}),[e]),{...e,toast:m,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var a=r(3463),s=r(9795);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,a.$)(t))}},5231:(e,t,r)=>{"use strict";r.d(t,{b:()=>n});var a=r(9208);let s="http://13.210.70.201:3000",n={async create(e){let t=a.A.get("token"),r=await fetch("".concat(s,"/characters"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)});if(!r.ok)throw Error("Failed to create character");return r.json()},async findOne(e){let t=a.A.get("token"),r=await fetch("".concat(s,"/characters/").concat(e),{headers:{Authorization:"Bearer ".concat(t)}});if(!r.ok)throw Error("Failed to fetch character");return r.json()},async update(e,t){let r=a.A.get("token"),n=await fetch("".concat(s,"/characters/").concat(e),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(t)});if(!n.ok)throw Error("Failed to update character");return n.json()},async delete(e){let t=a.A.get("token");if(!(await fetch("".concat(s,"/characters/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}})).ok)throw Error("Failed to delete character")}}}},e=>{var t=t=>e(e.s=t);e.O(0,[365,757,775,441,517,358],()=>t(2285)),_N_E=e.O()}]);