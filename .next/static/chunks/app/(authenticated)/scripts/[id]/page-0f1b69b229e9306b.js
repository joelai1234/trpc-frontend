(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[842],{7078:(e,t,s)=>{Promise.resolve().then(s.bind(s,9873))},3518:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(7401).A)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},767:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(7401).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},6046:(e,t,s)=>{"use strict";var a=s(6658);s.o(a,"usePathname")&&s.d(t,{usePathname:function(){return a.usePathname}}),s.o(a,"useRouter")&&s.d(t,{useRouter:function(){return a.useRouter}})},9873:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>C});var a=s(5155),r=s(2115),n=s(6046),i=s(3518),o=s(3885),l=s(9749),c=s(3312),d=s(6217),m=s(767),u=s(1567);let p=d.bL,h=d.l9,f=d.ZL;d.bm;let x=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(d.hJ,{ref:t,className:(0,u.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...r})});x.displayName=d.hJ.displayName;let g=r.forwardRef((e,t)=>{let{className:s,children:r,...n}=e;return(0,a.jsxs)(f,{children:[(0,a.jsx)(x,{}),(0,a.jsxs)(d.UC,{ref:t,className:(0,u.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s),...n,children:[r,(0,a.jsxs)(d.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(m.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});g.displayName=d.UC.displayName;let j=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,u.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...s})};j.displayName="DialogHeader";let y=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(d.hE,{ref:t,className:(0,u.cn)("text-lg font-semibold leading-none tracking-tight",s),...r})});y.displayName=d.hE.displayName,r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(d.VY,{ref:t,className:(0,u.cn)("text-sm text-muted-foreground",s),...r})}).displayName=d.VY.displayName;var v=s(3900),b=s(5564),N=s(7800);let S=[{title:"Basic Attributes",stats:["STR","CON","SIZ","DEX","POW"],bgColor:"bg-blue-50"},{title:"Knowledge Attributes",stats:["EDU","INT","LUCK"],bgColor:"bg-green-50"},{title:"Status Values",stats:["HP","MP","SAN"],bgColor:"bg-amber-50"}];function w(e){let{id:t}=e,s=(0,n.useRouter)(),{toast:d}=(0,b.dj)(),[m]=(0,r.useState)(()=>{let e=o.j.find(e=>e.id===t);if(!e)throw Error("Script with id ".concat(t," not found"));return e}),[u,f]=(0,r.useState)(()=>m.players.recommended||4),[x,w]=(0,r.useState)(!1),[C,T]=(0,r.useMemo)(()=>{let e=m.players.range.split("-").map(Number);return[e[0]||2,Math.min(e[1]||10,10)]},[m.players.range]),R=async()=>{if(u<C||u>T){d({variant:"destructive",title:"Error",description:"Number of players must be between ".concat(C,"-").concat(T)});return}w(!0);try{let e=await N.w.create({name:"".concat(m.title),description:m.summary,maxPlayers:u,script:JSON.stringify(m)});d({title:"Success",description:"Room created successfully! Redirecting to room..."}),s.push("/rooms/".concat(e.id))}catch(e){console.error("Create room error:",e),d({variant:"destructive",title:"Error",description:e instanceof Error?e.message:"Failed to create room, please try again later"})}finally{w(!1)}};return(0,a.jsxs)("div",{className:"container mx-auto py-10",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsxs)(c.$,{variant:"ghost",onClick:()=>s.push("/scripts"),children:[(0,a.jsx)(i.A,{className:"mr-2 h-4 w-4"}),"Back to Scripts"]}),(0,a.jsxs)(p,{children:[(0,a.jsx)(h,{asChild:!0,children:(0,a.jsx)(c.$,{children:"Start Game"})}),(0,a.jsxs)(g,{children:[(0,a.jsx)(j,{children:(0,a.jsx)(y,{children:"Create Game Room"})}),(0,a.jsxs)("div",{className:"space-y-4 py-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{className:"text-sm font-medium",children:["Maximum Players (",C,"-",T,")"]}),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)(v.p,{type:"number",min:C,max:T,value:u,onChange:e=>{f(Math.min(Math.max(Number(e.target.value),C),T))}}),(0,a.jsxs)("p",{className:"text-sm text-muted-foreground",children:["Recommended: ",m.players.recommended," players"]})]})]}),(0,a.jsxs)("div",{className:"flex justify-end space-x-2",children:[(0,a.jsx)(h,{asChild:!0,children:(0,a.jsx)(c.$,{variant:"outline",children:"Cancel"})}),(0,a.jsx)(c.$,{onClick:R,disabled:x||u<C||u>T,children:x?"Creating...":"Confirm"})]})]})]})]})]}),(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)(l.Zp,{children:[(0,a.jsx)(l.aR,{children:(0,a.jsx)(l.ZB,{children:"Basic Information"})}),(0,a.jsxs)(l.Wu,{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold mb-1",children:"Title"}),(0,a.jsx)("p",{children:m.title})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold mb-1",children:"Type"}),(0,a.jsx)("p",{children:m.type})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold mb-1",children:"Difficulty"}),(0,a.jsx)("p",{children:m.difficulty})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold mb-1",children:"Duration"}),(0,a.jsx)("p",{children:m.duration})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold mb-1",children:"Recommended Players"}),(0,a.jsxs)("p",{children:[m.players.recommended," players (",m.players.range,")"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold mb-1",children:"Setting"}),(0,a.jsxs)("p",{children:[m.setting.time,", ",m.setting.location]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold mb-1",children:"Summary"}),(0,a.jsx)("p",{className:"text-gray-700",children:m.summary})]})]})]}),(0,a.jsxs)(l.Zp,{className:"hidden",children:[(0,a.jsx)(l.aR,{children:(0,a.jsx)(l.ZB,{children:"Background"})}),(0,a.jsx)(l.Wu,{children:(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Historical Background"}),(0,a.jsx)("p",{className:"text-gray-700",children:m.background.history})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Key Characters"}),(0,a.jsx)("div",{className:"grid gap-4 md:grid-cols-2",children:m.background.characters.map((e,t)=>(0,a.jsxs)(l.Zp,{children:[(0,a.jsxs)(l.aR,{children:[(0,a.jsx)(l.ZB,{className:"text-md",children:e.name}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:e.profession})]}),(0,a.jsxs)(l.Wu,{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-semibold",children:"Personality: "}),e.personality]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-semibold",children:"Motivation: "}),e.motivation]})]})]},t))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Important Locations"}),(0,a.jsx)("div",{className:"grid gap-4 md:grid-cols-2",children:m.background.locations.map((e,t)=>(0,a.jsxs)(l.Zp,{children:[(0,a.jsx)(l.aR,{children:(0,a.jsx)(l.ZB,{className:"text-md",children:e.name})}),(0,a.jsx)(l.Wu,{children:(0,a.jsx)("p",{children:e.description})})]},t))})]})]})})]}),(0,a.jsxs)(l.Zp,{className:"hidden",children:[(0,a.jsx)(l.aR,{children:(0,a.jsx)(l.ZB,{children:"Scenes"})}),(0,a.jsx)(l.Wu,{children:(0,a.jsx)("div",{className:"space-y-4",children:m.scenes.map((e,t)=>(0,a.jsxs)(l.Zp,{children:[(0,a.jsx)(l.aR,{children:(0,a.jsx)(l.ZB,{className:"text-md",children:e.name})}),(0,a.jsxs)(l.Wu,{className:"space-y-2",children:[e.start&&(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-semibold",children:"Opening: "}),e.start]}),e.objective&&(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-semibold",children:"Objective: "}),e.objective]}),e.clues&&(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-semibold",children:"Clues:"}),(0,a.jsx)("ul",{className:"list-disc list-inside pl-4",children:e.clues.map((e,t)=>(0,a.jsx)("li",{children:e},t))})]}),e.challenges&&(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-semibold",children:"Challenges:"}),e.challenges.map((e,t)=>(0,a.jsx)("div",{className:"pl-4",children:(0,a.jsxs)("p",{children:[(0,a.jsxs)("span",{className:"font-semibold",children:[e.type,": "]}),e.description]})},t))]}),e.main_confrontation&&(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-semibold",children:"Main Conflict: "}),e.main_confrontation]}),e.outcomes&&(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-semibold",children:"Possible Outcomes:"}),(0,a.jsx)("ul",{className:"list-disc list-inside pl-4",children:e.outcomes.map((e,t)=>(0,a.jsx)("li",{children:e},t))})]})]})]},t))})})]}),(0,a.jsxs)(l.Zp,{className:"hidden",children:[(0,a.jsx)(l.aR,{children:(0,a.jsx)(l.ZB,{children:"Character Suggestions"})}),(0,a.jsx)(l.Wu,{children:(0,a.jsx)("div",{className:"grid gap-4 md:grid-cols-3",children:m.character_suggestions.map((e,t)=>(0,a.jsxs)("div",{className:"flex items-center justify-between p-4 border rounded-lg",children:[(0,a.jsx)("span",{children:e.skill}),(0,a.jsxs)("span",{className:"px-2 py-1 text-sm rounded-full bg-gray-100",children:["Importance: ",e.importance]})]},t))})})]}),(0,a.jsxs)(l.Zp,{className:"hidden",children:[(0,a.jsx)(l.aR,{children:(0,a.jsx)(l.ZB,{children:"Appendix"})}),(0,a.jsx)(l.Wu,{children:(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Maps"}),(0,a.jsx)("ul",{className:"list-disc list-inside pl-4",children:m.appendix.maps.map((e,t)=>(0,a.jsx)("li",{children:e},t))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"NPC Stats"}),(0,a.jsx)("div",{className:"grid gap-6 md:grid-cols-2",children:m.appendix.npc_stats.map((e,t)=>{var s;return(0,a.jsxs)(l.Zp,{className:"overflow-hidden",children:[(0,a.jsx)(l.aR,{className:"pb-2 border-b",children:(0,a.jsxs)(l.ZB,{className:"text-xl flex items-center gap-2",children:[e.name,(0,a.jsx)("span",{className:"text-sm font-normal text-gray-500",children:null===(s=m.background.characters.find(t=>t.name===e.name))||void 0===s?void 0:s.profession})]})}),(0,a.jsx)(l.Wu,{className:"space-y-4 pt-4",children:S.map((t,s)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"text-sm font-medium text-gray-500 mb-2",children:t.title}),(0,a.jsx)("div",{className:"grid grid-cols-3 gap-2",children:t.stats.map(s=>(0,a.jsxs)("div",{className:"".concat(t.bgColor," rounded-lg p-3 text-center transition-all hover:scale-105"),children:[(0,a.jsx)("div",{className:"text-sm font-semibold text-gray-600",children:s}),(0,a.jsx)("div",{className:"text-xl font-medium mt-1",children:e.stats[s]})]},s))})]},s))})]},t)})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Mythological Elements"}),(0,a.jsx)("div",{className:"grid gap-4 md:grid-cols-2",children:m.appendix.mythos_elements.map((e,t)=>(0,a.jsxs)(l.Zp,{children:[(0,a.jsx)(l.aR,{children:(0,a.jsx)(l.ZB,{className:"text-md",children:e.name})}),(0,a.jsx)(l.Wu,{children:(0,a.jsx)("p",{children:e.description})})]},t))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Additional Clues"}),(0,a.jsx)("ul",{className:"list-disc list-inside pl-4",children:m.appendix.additional_clues.map((e,t)=>(0,a.jsx)("li",{children:e},t))})]})]})})]})]})]})}function C(e){let{params:t}=e,s=(0,r.use)(t);return(0,a.jsx)(w,{id:s.id})}},3312:(e,t,s)=>{"use strict";s.d(t,{$:()=>c,r:()=>l});var a=s(5155),r=s(2115),n=s(2317),i=s(1027),o=s(1567);let l=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef((e,t)=>{let{className:s,variant:r,size:i,asChild:c=!1,...d}=e,m=c?n.DX:"button";return(0,a.jsx)(m,{className:(0,o.cn)(l({variant:r,size:i,className:s})),ref:t,...d})});c.displayName="Button"},9749:(e,t,s)=>{"use strict";s.d(t,{BT:()=>c,Wu:()=>d,ZB:()=>l,Zp:()=>i,aR:()=>o});var a=s(5155),r=s(2115),n=s(1567);let i=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",s),...r})});i.displayName="Card";let o=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",s),...r})});o.displayName="CardHeader";let l=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("h3",{ref:t,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",s),...r})});l.displayName="CardTitle";let c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",s),...r})});c.displayName="CardDescription";let d=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",s),...r})});d.displayName="CardContent",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",s),...r})}).displayName="CardFooter"},3900:(e,t,s)=>{"use strict";s.d(t,{p:()=>i});var a=s(5155),r=s(2115),n=s(1567);let i=r.forwardRef((e,t)=>{let{className:s,type:r,...i}=e;return(0,a.jsx)("input",{type:r,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:t,...i})});i.displayName="Input"},5564:(e,t,s)=>{"use strict";s.d(t,{dj:()=>p});var a=s(2115),r=function(e){return e.ADD_TOAST="ADD_TOAST",e.UPDATE_TOAST="UPDATE_TOAST",e.DISMISS_TOAST="DISMISS_TOAST",e.REMOVE_TOAST="REMOVE_TOAST",e}(r||{});let n=new Map,i=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?i(s):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],c={toasts:[]};function d(e){c=o(c,e),l.forEach(e=>{e(c)})}function m(e){let{...t}=e,s=(u=(u+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>d({type:"DISMISS_TOAST",toastId:s});return d({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||a()}}}),{id:s,dismiss:a,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:s}})}}let u=0;function p(){let[e,t]=a.useState(c);return a.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:m,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},1567:(e,t,s)=>{"use strict";s.d(t,{cn:()=>n});var a=s(3463),r=s(9795);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,r.QP)((0,a.$)(t))}},3885:(e,t,s)=>{"use strict";s.d(t,{j:()=>a});let a=[{id:"1",title:"跨年的詭異鐘聲",type:"短篇冒險",players:{recommended:4,range:"3-6"},duration:"4-5小時",setting:{time:"2024年12月31日",location:"一座偏僻的小鎮"},difficulty:"中等",summary:"跨年夜，玩家受邀參加一場神秘的倒數派對，然而午夜的鐘聲響起後，時間似乎陷入了停滯，而一股詭異的氣息籠罩整座小鎮。玩家必須揭開真相，阻止被封印的邪神從時間裂縫中復甦。",background:{history:"這座小鎮自古以來就流傳著一個詭異的傳說：每隔百年，跨年夜的鐘聲會喚醒沉睡於時光裂縫中的古老存在。",characters:[{name:"湯瑪斯\xb7布萊恩",profession:"鐘樓守護者",personality:"沉默寡言，但對鐘樓有著極度的執著",motivation:"保護鐘樓的秘密，不讓人接近鐘樓"},{name:"艾莉絲\xb7克羅斯",profession:"歷史學者",personality:"熱情，對傳說充滿興趣",motivation:"想破解鐘聲與傳說的關聯，寫成論文"}],locations:[{name:"中央鐘樓",description:"小鎮中心的高大鐘樓，鐘聲能傳遍整個小鎮，內部似乎隱藏著古老的機關。"},{name:"舊圖書館",description:"堆滿塵封書籍的小鎮圖書館，記載了許多與鐘樓相關的歷史。"}]},scenes:[{name:"第一幕：神秘的邀請",start:"玩家收到一封匿名邀請函，參加跨年派對。",objective:"前往小鎮並了解鐘樓的背景。"},{name:"第二幕：詭異的鐘聲",clues:["一份舊報紙提到過百年前鐘聲後的神秘失蹤事件。","鐘樓內部藏有古老的符文，似乎記錄了一種召喚儀式。"],challenges:[{type:"解謎",description:"解開鐘樓內機關的密碼鎖。"},{type:"戰鬥",description:"對抗由鐘聲喚醒的怪異存在。"}]},{name:"第三幕：時間裂縫",main_confrontation:"玩家發現鐘聲其實是封印的關鍵，但封印已經開始崩解。",outcomes:["成功阻止封印崩解，時間恢復正常，小鎮回歸平靜。","封印失敗，邪神復甦，小鎮被時間裂縫吞噬。"]}],character_suggestions:[{skill:"心理學",importance:"高"},{skill:"圖書館使用",importance:"高"},{skill:"神秘學",importance:"中"},{skill:"機械修理",importance:"中"}],appendix:{maps:["中央鐘樓的內部結構圖","小鎮的簡略地圖"],npc_stats:[{name:"湯瑪斯\xb7布萊恩",stats:{STR:65,CON:60,SIZ:55,DEX:50,POW:70,EDU:75,INT:65,SAN:40,LUCK:45,HP:12,MP:14}},{name:"艾莉絲\xb7克羅斯",stats:{STR:45,CON:50,SIZ:50,DEX:65,POW:75,EDU:85,INT:80,SAN:70,LUCK:60,HP:10,MP:15}}],mythos_elements:[{name:"時間裂縫",description:"由鐘聲引發的時空不穩定現象，與古老邪神的存在有關。"},{name:"裂縫生物",description:"由時間裂縫中出現的扭曲生物，攻擊一切接近裂縫的人。"}],additional_clues:["一枚鑰匙，能解開鐘樓內部的隱藏房間。","一本記載古老儀式的手抄本。"]}},{id:"2",title:"迷霧中的古堡",type:"短篇冒險",players:{recommended:5,range:"4-7"},duration:"5-6小時",setting:{time:"一個模糊的19世紀晚期冬季夜晚",location:"隱藏在深山中的一座神秘古堡"},difficulty:"困難",summary:"玩家被邀請到深山中的古堡參加一場神秘拍賣會，但隨著夜色加深，迷霧籠罩，古堡內部開始發生難以解釋的超自然事件。玩家必須解開古堡的秘密，並在失控的局勢中求生。",background:{history:"這座古堡在百年前由一位偏僻的貴族修建，但在某次拍賣會中，所有參與者神秘失蹤，古堡因此被廢棄，成為謠言的中心。",characters:[{name:"亨利\xb7拉斐特",profession:"拍賣官",personality:"狡猾且神秘，總是面帶假笑",motivation:"希望透過拍賣古堡中的秘密物品來賺取巨額財富"},{name:"維多利亞\xb7卡曼",profession:"收藏家",personality:"優雅且冷靜，擅長分析",motivation:"尋找傳說中的古物來完成自己的收藏"}],locations:[{name:"大廳",description:"裝飾華麗的寬大空間，用於舉辦拍賣，掛滿了神秘畫作與古董裝飾。"},{name:"地下室",description:"一個陰暗潮濕的地方，據說藏有古堡建造者的秘密。"}]},scenes:[{name:"第一幕：神秘的邀請",start:"玩家收到一封金邊邀請函，邀請他們參加古堡內的拍賣會。",objective:"抵達古堡並探索拍賣會的背景。"},{name:"第二幕：迷霧與謎團",clues:["一封破損的日記提到古堡內部曾舉行過神秘儀式。","一副破碎的畫框中似乎藏著某種線索。"],challenges:[{type:"解謎",description:"破解一個封鎖地下室入口的複雜機關。"},{type:"生存",description:"逃離古堡中被召喚出來的惡靈追擊。"}]},{name:"第三幕：古堡的秘密",main_confrontation:"玩家發現拍賣品之一是一件可以召喚遠古存在的詭異古物，隨著拍賣官的貪婪，儀式啟動。",outcomes:["成功阻止儀式，古堡恢復平靜，玩家安全逃出。","儀式完成，遠古存在降臨，玩家陷入無盡的恐怖之中。"]}],character_suggestions:[{skill:"隱匿",importance:"高"},{skill:"歷史",importance:"高"},{skill:"藝術/工藝",importance:"中"},{skill:"生存",importance:"中"}],appendix:{maps:["古堡內部平面圖","古堡周圍的山林路線圖"],npc_stats:[{name:"亨利\xb7拉斐特",stats:{STR:50,CON:55,SIZ:60,DEX:40,POW:70,EDU:65,INT:60,SAN:30,LUCK:50,HP:11,MP:14}},{name:"維多利亞\xb7卡曼",stats:{STR:45,CON:50,SIZ:55,DEX:55,POW:75,EDU:80,INT:85,SAN:60,LUCK:55,HP:10,MP:16}}],mythos_elements:[{name:"詭異古物",description:"拍賣的焦點之一，一個擁有召喚力量的詭異物品。"},{name:"惡靈",description:"儀式召喚出的扭曲存在，會攻擊任何入侵者。"}],additional_clues:["一張記載儀式細節的古老羊皮紙。","一個刻有奇異符號的金屬吊墜。"]}}]},7800:(e,t,s)=>{"use strict";s.d(t,{w:()=>r});let a="http://3.107.26.3:3001",r={async findAll(){let e=localStorage.getItem("token"),t=await fetch("".concat(a,"/rooms"),{headers:{Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Failed to fetch rooms");return t.json()},async findOne(e){let t=localStorage.getItem("token"),s=await fetch("".concat(a,"/rooms/").concat(e),{headers:{Authorization:"Bearer ".concat(t)}});if(!s.ok)throw Error("Failed to fetch room");return s.json()},async join(e){let t=localStorage.getItem("token");if(!(await fetch("".concat(a,"/rooms/").concat(e,"/join"),{method:"POST",headers:{Authorization:"Bearer ".concat(t)}})).ok)throw Error("Failed to join room")},async leave(e){let t=localStorage.getItem("token");if(!(await fetch("".concat(a,"/rooms/").concat(e,"/leave"),{method:"POST",headers:{Authorization:"Bearer ".concat(t)}})).ok)throw Error("Failed to leave room")},async create(e){let t=localStorage.getItem("token"),s=await fetch("".concat(a,"/rooms"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)});if(!s.ok)throw Error("Failed to create room");return s.json()},async startGame(e){let t=localStorage.getItem("token"),s=await fetch("".concat(a,"/rooms/").concat(e,"/start"),{method:"POST",headers:{Authorization:"Bearer ".concat(t)}});if(!s.ok)throw Error("Failed to start game");return s.json()},async selectCharacter(e,t){let s=localStorage.getItem("token"),r=await fetch("".concat(a,"/rooms/").concat(e,"/select-character"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify({characterId:t})});if(!r.ok)throw Error("Failed to select character");return r.json()}}},6217:(e,t,s)=>{"use strict";s.d(t,{G$:()=>X,Hs:()=>b,UC:()=>et,VY:()=>ea,ZL:()=>Q,bL:()=>q,bm:()=>er,hE:()=>es,hJ:()=>ee,l9:()=>Y});var a=s(2115),r=s(3610),n=s(8068),i=s(8166),o=s(7668),l=s(1488),c=s(9674),d=s(196),m=s(7323),u=s(7028),p=s(3360),h=s(2292),f=s(4065),x=s(5587),g=s(2317),j=s(5155),y="Dialog",[v,b]=(0,i.A)(y),[N,S]=v(y),w=e=>{let{__scopeDialog:t,children:s,open:r,defaultOpen:n,onOpenChange:i,modal:c=!0}=e,d=a.useRef(null),m=a.useRef(null),[u=!1,p]=(0,l.i)({prop:r,defaultProp:n,onChange:i});return(0,j.jsx)(N,{scope:t,triggerRef:d,contentRef:m,contentId:(0,o.B)(),titleId:(0,o.B)(),descriptionId:(0,o.B)(),open:u,onOpenChange:p,onOpenToggle:a.useCallback(()=>p(e=>!e),[p]),modal:c,children:s})};w.displayName=y;var C="DialogTrigger",T=a.forwardRef((e,t)=>{let{__scopeDialog:s,...a}=e,i=S(C,s),o=(0,n.s)(t,i.triggerRef);return(0,j.jsx)(p.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":H(i.open),...a,ref:o,onClick:(0,r.m)(e.onClick,i.onOpenToggle)})});T.displayName=C;var R="DialogPortal",[O,D]=v(R,{forceMount:void 0}),A=e=>{let{__scopeDialog:t,forceMount:s,children:r,container:n}=e,i=S(R,t);return(0,j.jsx)(O,{scope:t,forceMount:s,children:a.Children.map(r,e=>(0,j.jsx)(u.C,{present:s||i.open,children:(0,j.jsx)(m.Z,{asChild:!0,container:n,children:e})}))})};A.displayName=R;var E="DialogOverlay",_=a.forwardRef((e,t)=>{let s=D(E,e.__scopeDialog),{forceMount:a=s.forceMount,...r}=e,n=S(E,e.__scopeDialog);return n.modal?(0,j.jsx)(u.C,{present:a||n.open,children:(0,j.jsx)(k,{...r,ref:t})}):null});_.displayName=E;var k=a.forwardRef((e,t)=>{let{__scopeDialog:s,...a}=e,r=S(E,s);return(0,j.jsx)(f.A,{as:g.DX,allowPinchZoom:!0,shards:[r.contentRef],children:(0,j.jsx)(p.sG.div,{"data-state":H(r.open),...a,ref:t,style:{pointerEvents:"auto",...a.style}})})}),I="DialogContent",P=a.forwardRef((e,t)=>{let s=D(I,e.__scopeDialog),{forceMount:a=s.forceMount,...r}=e,n=S(I,e.__scopeDialog);return(0,j.jsx)(u.C,{present:a||n.open,children:n.modal?(0,j.jsx)(M,{...r,ref:t}):(0,j.jsx)(Z,{...r,ref:t})})});P.displayName=I;var M=a.forwardRef((e,t)=>{let s=S(I,e.__scopeDialog),i=a.useRef(null),o=(0,n.s)(t,s.contentRef,i);return a.useEffect(()=>{let e=i.current;if(e)return(0,x.Eq)(e)},[]),(0,j.jsx)(B,{...e,ref:o,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,r.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=s.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,r.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,s=0===t.button&&!0===t.ctrlKey;(2===t.button||s)&&e.preventDefault()}),onFocusOutside:(0,r.m)(e.onFocusOutside,e=>e.preventDefault())})}),Z=a.forwardRef((e,t)=>{let s=S(I,e.__scopeDialog),r=a.useRef(!1),n=a.useRef(!1);return(0,j.jsx)(B,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,i;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current||null===(i=s.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:t=>{var a,i;null===(a=e.onInteractOutside)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(n.current=!0));let o=t.target;(null===(i=s.triggerRef.current)||void 0===i?void 0:i.contains(o))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&n.current&&t.preventDefault()}})}),B=a.forwardRef((e,t)=>{let{__scopeDialog:s,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:o,...l}=e,m=S(I,s),u=a.useRef(null),p=(0,n.s)(t,u);return(0,h.Oh)(),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.n,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:o,children:(0,j.jsx)(c.qW,{role:"dialog",id:m.contentId,"aria-describedby":m.descriptionId,"aria-labelledby":m.titleId,"data-state":H(m.open),...l,ref:p,onDismiss:()=>m.onOpenChange(!1)})}),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)($,{titleId:m.titleId}),(0,j.jsx)(J,{contentRef:u,descriptionId:m.descriptionId})]})]})}),F="DialogTitle",W=a.forwardRef((e,t)=>{let{__scopeDialog:s,...a}=e,r=S(F,s);return(0,j.jsx)(p.sG.h2,{id:r.titleId,...a,ref:t})});W.displayName=F;var U="DialogDescription",z=a.forwardRef((e,t)=>{let{__scopeDialog:s,...a}=e,r=S(U,s);return(0,j.jsx)(p.sG.p,{id:r.descriptionId,...a,ref:t})});z.displayName=U;var G="DialogClose",L=a.forwardRef((e,t)=>{let{__scopeDialog:s,...a}=e,n=S(G,s);return(0,j.jsx)(p.sG.button,{type:"button",...a,ref:t,onClick:(0,r.m)(e.onClick,()=>n.onOpenChange(!1))})});function H(e){return e?"open":"closed"}L.displayName=G;var V="DialogTitleWarning",[X,K]=(0,i.q)(V,{contentName:I,titleName:F,docsSlug:"dialog"}),$=e=>{let{titleId:t}=e,s=K(V),r="`".concat(s.contentName,"` requires a `").concat(s.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(s.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(s.docsSlug);return a.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},J=e=>{let{contentRef:t,descriptionId:s}=e,r=K("DialogDescriptionWarning"),n="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return a.useEffect(()=>{var e;let a=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");s&&a&&!document.getElementById(s)&&console.warn(n)},[n,t,s]),null},q=w,Y=T,Q=A,ee=_,et=P,es=W,ea=z,er=L},3360:(e,t,s)=>{"use strict";s.d(t,{hO:()=>l,sG:()=>o});var a=s(2115),r=s(7650),n=s(2317),i=s(5155),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let s=a.forwardRef((e,s)=>{let{asChild:a,...r}=e,o=a?n.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(o,{...r,ref:s})});return s.displayName=`Primitive.${t}`,{...e,[t]:s}},{});function l(e,t){e&&r.flushSync(()=>e.dispatchEvent(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[365,199,978,441,517,358],()=>t(7078)),_N_E=e.O()}]);