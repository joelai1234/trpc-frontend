(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[736],{3060:(e,t,r)=>{Promise.resolve().then(r.bind(r,6423))},6046:(e,t,r)=>{"use strict";var a=r(6658);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}})},6423:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(5155),s=r(2115),n=r(6046),i=r(3312),o=r(2508),l=r(9749),d=r(3885);function c(){let[e]=(0,s.useState)(d.j.map(e=>({id:e.id,title:e.title,summary:e.summary}))),t=(0,n.useRouter)();return(0,a.jsx)("div",{className:"container mx-auto py-10",children:(0,a.jsxs)(l.Zp,{children:[(0,a.jsx)(l.aR,{children:(0,a.jsx)(l.ZB,{children:"Scripts"})}),(0,a.jsx)(l.Wu,{children:(0,a.jsxs)(o.XI,{children:[(0,a.jsx)(o.A0,{children:(0,a.jsxs)(o.Hj,{children:[(0,a.jsx)(o.nd,{children:"Title"}),(0,a.jsx)(o.nd,{children:"Summary"}),(0,a.jsx)(o.nd,{className:"text-right",children:"Actions"})]})}),(0,a.jsx)(o.BF,{children:e.map(e=>(0,a.jsxs)(o.Hj,{children:[(0,a.jsx)(o.nA,{className:"font-medium",children:e.title}),(0,a.jsx)(o.nA,{children:e.summary}),(0,a.jsx)(o.nA,{className:"text-right",children:(0,a.jsx)(i.$,{variant:"secondary",onClick:()=>t.push("/scripts/".concat(e.id)),children:"View"})})]},e.id))})]})})]})})}},3312:(e,t,r)=>{"use strict";r.d(t,{$:()=>d,r:()=>l});var a=r(5155),s=r(2115),n=r(2317),i=r(1027),o=r(1567);let l=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:d=!1,...c}=e,m=d?n.DX:"button";return(0,a.jsx)(m,{className:(0,o.cn)(l({variant:s,size:i,className:r})),ref:t,...c})});d.displayName="Button"},9749:(e,t,r)=>{"use strict";r.d(t,{BT:()=>d,Wu:()=>c,ZB:()=>l,Zp:()=>i,aR:()=>o});var a=r(5155),s=r(2115),n=r(1567);let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s})});i.displayName="Card";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",r),...s})});o.displayName="CardHeader";let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h3",{ref:t,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",r),...s})});l.displayName="CardTitle";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",r),...s})});d.displayName="CardDescription";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",r),...s})});c.displayName="CardContent",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",r),...s})}).displayName="CardFooter"},2508:(e,t,r)=>{"use strict";r.d(t,{A0:()=>o,BF:()=>l,Hj:()=>d,XI:()=>i,nA:()=>m,nd:()=>c});var a=r(5155),s=r(2115),n=r(1567);let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,n.cn)("w-full caption-bottom text-sm",r),...s})})});i.displayName="Table";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("thead",{ref:t,className:(0,n.cn)("[&_tr]:border-b",r),...s})});o.displayName="TableHeader";let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,n.cn)("[&_tr:last-child]:border-0",r),...s})});l.displayName="TableBody",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,n.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...s})}).displayName="TableFooter";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tr",{ref:t,className:(0,n.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...s})});d.displayName="TableRow";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("th",{ref:t,className:(0,n.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...s})});c.displayName="TableHead";let m=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("td",{ref:t,className:(0,n.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...s})});m.displayName="TableCell",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("caption",{ref:t,className:(0,n.cn)("mt-4 text-sm text-muted-foreground",r),...s})}).displayName="TableCaption"},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var a=r(3463),s=r(9795);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,a.$)(t))}},3885:(e,t,r)=>{"use strict";r.d(t,{j:()=>a});let a=[{id:"1",title:"跨年的詭異鐘聲",type:"短篇冒險",players:{recommended:4,range:"3-6"},duration:"4-5小時",setting:{time:"2024年12月31日",location:"一座偏僻的小鎮"},difficulty:"中等",summary:"跨年夜，玩家受邀參加一場神秘的倒數派對，然而午夜的鐘聲響起後，時間似乎陷入了停滯，而一股詭異的氣息籠罩整座小鎮。玩家必須揭開真相，阻止被封印的邪神從時間裂縫中復甦。",background:{history:"這座小鎮自古以來就流傳著一個詭異的傳說：每隔百年，跨年夜的鐘聲會喚醒沉睡於時光裂縫中的古老存在。",characters:[{name:"湯瑪斯\xb7布萊恩",profession:"鐘樓守護者",personality:"沉默寡言，但對鐘樓有著極度的執著",motivation:"保護鐘樓的秘密，不讓人接近鐘樓"},{name:"艾莉絲\xb7克羅斯",profession:"歷史學者",personality:"熱情，對傳說充滿興趣",motivation:"想破解鐘聲與傳說的關聯，寫成論文"}],locations:[{name:"中央鐘樓",description:"小鎮中心的高大鐘樓，鐘聲能傳遍整個小鎮，內部似乎隱藏著古老的機關。"},{name:"舊圖書館",description:"堆滿塵封書籍的小鎮圖書館，記載了許多與鐘樓相關的歷史。"}]},scenes:[{name:"第一幕：神秘的邀請",start:"玩家收到一封匿名邀請函，參加跨年派對。",objective:"前往小鎮並了解鐘樓的背景。"},{name:"第二幕：詭異的鐘聲",clues:["一份舊報紙提到過百年前鐘聲後的神秘失蹤事件。","鐘樓內部藏有古老的符文，似乎記錄了一種召喚儀式。"],challenges:[{type:"解謎",description:"解開鐘樓內機關的密碼鎖。"},{type:"戰鬥",description:"對抗由鐘聲喚醒的怪異存在。"}]},{name:"第三幕：時間裂縫",main_confrontation:"玩家發現鐘聲其實是封印的關鍵，但封印已經開始崩解。",outcomes:["成功阻止封印崩解，時間恢復正常，小鎮回歸平靜。","封印失敗，邪神復甦，小鎮被時間裂縫吞噬。"]}],character_suggestions:[{skill:"心理學",importance:"高"},{skill:"圖書館使用",importance:"高"},{skill:"神秘學",importance:"中"},{skill:"機械修理",importance:"中"}],appendix:{maps:["中央鐘樓的內部結構圖","小鎮的簡略地圖"],npc_stats:[{name:"湯瑪斯\xb7布萊恩",stats:{STR:65,CON:60,SIZ:55,DEX:50,POW:70,EDU:75,INT:65,SAN:40,LUCK:45,HP:12,MP:14}},{name:"艾莉絲\xb7克羅斯",stats:{STR:45,CON:50,SIZ:50,DEX:65,POW:75,EDU:85,INT:80,SAN:70,LUCK:60,HP:10,MP:15}}],mythos_elements:[{name:"時間裂縫",description:"由鐘聲引發的時空不穩定現象，與古老邪神的存在有關。"},{name:"裂縫生物",description:"由時間裂縫中出現的扭曲生物，攻擊一切接近裂縫的人。"}],additional_clues:["一枚鑰匙，能解開鐘樓內部的隱藏房間。","一本記載古老儀式的手抄本。"]}},{id:"2",title:"迷霧中的古堡",type:"短篇冒險",players:{recommended:5,range:"4-7"},duration:"5-6小時",setting:{time:"一個模糊的19世紀晚期冬季夜晚",location:"隱藏在深山中的一座神秘古堡"},difficulty:"困難",summary:"玩家被邀請到深山中的古堡參加一場神秘拍賣會，但隨著夜色加深，迷霧籠罩，古堡內部開始發生難以解釋的超自然事件。玩家必須解開古堡的秘密，並在失控的局勢中求生。",background:{history:"這座古堡在百年前由一位偏僻的貴族修建，但在某次拍賣會中，所有參與者神秘失蹤，古堡因此被廢棄，成為謠言的中心。",characters:[{name:"亨利\xb7拉斐特",profession:"拍賣官",personality:"狡猾且神秘，總是面帶假笑",motivation:"希望透過拍賣古堡中的秘密物品來賺取巨額財富"},{name:"維多利亞\xb7卡曼",profession:"收藏家",personality:"優雅且冷靜，擅長分析",motivation:"尋找傳說中的古物來完成自己的收藏"}],locations:[{name:"大廳",description:"裝飾華麗的寬大空間，用於舉辦拍賣，掛滿了神秘畫作與古董裝飾。"},{name:"地下室",description:"一個陰暗潮濕的地方，據說藏有古堡建造者的秘密。"}]},scenes:[{name:"第一幕：神秘的邀請",start:"玩家收到一封金邊邀請函，邀請他們參加古堡內的拍賣會。",objective:"抵達古堡並探索拍賣會的背景。"},{name:"第二幕：迷霧與謎團",clues:["一封破損的日記提到古堡內部曾舉行過神秘儀式。","一副破碎的畫框中似乎藏著某種線索。"],challenges:[{type:"解謎",description:"破解一個封鎖地下室入口的複雜機關。"},{type:"生存",description:"逃離古堡中被召喚出來的惡靈追擊。"}]},{name:"第三幕：古堡的秘密",main_confrontation:"玩家發現拍賣品之一是一件可以召喚遠古存在的詭異古物，隨著拍賣官的貪婪，儀式啟動。",outcomes:["成功阻止儀式，古堡恢復平靜，玩家安全逃出。","儀式完成，遠古存在降臨，玩家陷入無盡的恐怖之中。"]}],character_suggestions:[{skill:"隱匿",importance:"高"},{skill:"歷史",importance:"高"},{skill:"藝術/工藝",importance:"中"},{skill:"生存",importance:"中"}],appendix:{maps:["古堡內部平面圖","古堡周圍的山林路線圖"],npc_stats:[{name:"亨利\xb7拉斐特",stats:{STR:50,CON:55,SIZ:60,DEX:40,POW:70,EDU:65,INT:60,SAN:30,LUCK:50,HP:11,MP:14}},{name:"維多利亞\xb7卡曼",stats:{STR:45,CON:50,SIZ:55,DEX:55,POW:75,EDU:80,INT:85,SAN:60,LUCK:55,HP:10,MP:16}}],mythos_elements:[{name:"詭異古物",description:"拍賣的焦點之一，一個擁有召喚力量的詭異物品。"},{name:"惡靈",description:"儀式召喚出的扭曲存在，會攻擊任何入侵者。"}],additional_clues:["一張記載儀式細節的古老羊皮紙。","一個刻有奇異符號的金屬吊墜。"]}}]}},e=>{var t=t=>e(e.s=t);e.O(0,[365,441,517,358],()=>t(3060)),_N_E=e.O()}]);