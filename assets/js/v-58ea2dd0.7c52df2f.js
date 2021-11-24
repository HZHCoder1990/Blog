"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5944],{7049:(e,l,n)=>{n.r(l),n.d(l,{data:()=>t});const t={key:"v-58ea2dd0",path:"/iOS/UIScrollview.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"ScrollView 设置约束",slug:"scrollview-设置约束",children:[]},{level:3,title:"添加其他子元素",slug:"添加其他子元素",children:[]},{level:3,title:"删除 Content View 的高",slug:"删除-content-view-的高",children:[]},{level:3,title:"参考",slug:"参考",children:[]}],filePathRelative:"iOS/UIScrollview.md",git:{updatedTime:1633942617e3,contributors:[{name:"peak",email:"peak@jiemogame.com",commits:1}]}}},926:(e,l,n)=>{n.r(l),n.d(l,{default:()=>X});var t=n(6252),o=n(6542),i=n(1822),r=n(5004),a=n(7107),c=n(6599),u=n(3749),d=n(6916),s=n(6699);const _=(0,t._)("p",null,"ScrollView 通过可以其中的滚动区域来正确工作",-1),p=(0,t._)("p",null,[(0,t._)("img",{src:o,alt:"0"})],-1),h=(0,t._)("p",null,"为了使 ScrollView 在Auto Layout下能正确工作， ScrollView 必须知道它的可滚动区域的宽高和它自己相对于父视图的 frame（x, y, with, heigh）。",-1),w=(0,t._)("p",null,[(0,t.Uk)("从Xcode11开始，苹果引入了 "),(0,t._)("code",null,"Content Layout Guide"),(0,t.Uk)(" 和 "),(0,t._)("code",null,"Frame Layout Guide"),(0,t.Uk)(" ，它们使得 ScrollView 更加容易设计UI。")],-1),g=(0,t._)("p",null,"为了使 ScrollView 正确工作，必须设置两组约束。",-1),k=(0,t._)("ol",null,[(0,t._)("li",null,[(0,t._)("strong",null,"设置 ScrollVeiw 相对与父视图的约束")]),(0,t._)("li",null,[(0,t._)("strong",null,"设置 ScrollView 内可滚动区域的约束"),(0,t.Uk)("，以便ScrollView知道能够向什么方向滚动。")])],-1),U=(0,t._)("h3",{id:"scrollview-设置约束",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#scrollview-设置约束","aria-hidden":"true"},"#"),(0,t.Uk)(" ScrollView 设置约束")],-1),m=(0,t._)("h4",{id:"_1-添加-scrollview",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_1-添加-scrollview","aria-hidden":"true"},"#"),(0,t.Uk)(" 1. 添加 ScrollView")],-1),f=(0,t._)("p",null,"放一个 ScrollView 到一个 ViewController 中并设置约束， 一般设置为距离 safe area 的边距(top, leading, trailing, bottom) 为0",-1),V=(0,t._)("p",null,[(0,t._)("img",{src:i,alt:"1"})],-1),v=(0,t._)("h4",{id:"_2-添加-content-view-并设置约束",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_2-添加-content-view-并设置约束","aria-hidden":"true"},"#"),(0,t.Uk)(" 2. 添加 Content View 并设置约束")],-1),C=(0,t._)("p",null,[(0,t.Uk)("放一个 "),(0,t._)("code",null,"UIVeiw"),(0,t.Uk)(" 到 "),(0,t._)("code",null,"ScrollView"),(0,t.Uk)(" 内 (把该 UIView 的名称修改为 "),(0,t._)("code",null,"Content View"),(0,t.Uk)(" )， 选中 "),(0,t._)("code",null,"Content Veiw"),(0,t.Uk)(" 后按住 "),(0,t._)("code",null,"Control"),(0,t.Uk)(" 按键，鼠标箭头移动到 "),(0,t._)("code",null,"Content Layout Guide"),(0,t.Uk)(" 上， 在弹出的对话框中， 按住 "),(0,t._)("code",null,"Shift"),(0,t.Uk)(" 按键，分别勾选")],-1),S=(0,t._)("p",null,[(0,t._)("code",null,"Leading Sapce to Cotent Layout Guide"),(0,t.Uk)(" 、")],-1),b=(0,t._)("p",null,[(0,t._)("code",null,"Top Space to Content Layout Guide"),(0,t.Uk)(" 、")],-1),x=(0,t._)("p",null,[(0,t._)("code",null,"Trailing Space to Content Layout Guide"),(0,t.Uk)(" 、")],-1),y=(0,t._)("p",null,[(0,t._)("code",null,"Bottom Space to Content Layout Guide")],-1),L=(0,t._)("p",null,[(0,t.Uk)("当约束创建完毕之后，"),(0,t._)("strong",null,"把创建的约束的值设置为0")],-1),I=(0,t._)("p",null,[(0,t._)("img",{src:r,alt:"2"})],-1),G=(0,t._)("h4",{id:"_3-设置-content-view-的宽",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_3-设置-content-view-的宽","aria-hidden":"true"},"#"),(0,t.Uk)(" 3. 设置 Content View 的宽")],-1),B=(0,t._)("p",null,[(0,t.Uk)("选中 "),(0,t._)("code",null,"Content Veiw"),(0,t.Uk)(" 后按住 "),(0,t._)("code",null,"Control"),(0,t.Uk)(" 按键，鼠标箭头移动到 "),(0,t._)("code",null,"Frame Layout Guide"),(0,t.Uk)(" 上， 在弹出的对话框中勾选 "),(0,t._)("code",null,"Equal With")],-1),O=(0,t._)("p",null,[(0,t._)("img",{src:a,alt:"3"})],-1),T=(0,t._)("p",null,[(0,t.Uk)("把创建的约束 "),(0,t._)("code",null,"Multiplier"),(0,t.Uk)(" 修改为 "),(0,t._)("strong",null,"1")],-1),A=(0,t._)("p",null,[(0,t._)("img",{src:c,alt:"4"})],-1),F=(0,t._)("h4",{id:"_4-设置-content-view-的高",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_4-设置-content-view-的高","aria-hidden":"true"},"#"),(0,t.Uk)(" 4. 设置 Content View 的高")],-1),H=(0,t._)("p",null,[(0,t.Uk)("选中 "),(0,t._)("code",null,"Content View"),(0,t.Uk)(" 添加约束， 高度设置为一个比较大的值，例如 1000。（可以在之后删除）")],-1),W=(0,t._)("p",null,[(0,t._)("img",{src:u,alt:"5"})],-1),Z=(0,t._)("h3",{id:"添加其他子元素",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#添加其他子元素","aria-hidden":"true"},"#"),(0,t.Uk)(" 添加其他子元素")],-1),j=(0,t._)("p",null,"在 ScrollView 的 Content View 中添加所需要的元素（例如 UILabe、UIImageView、UIButton等等），并按照从上到下的顺序依次设置每个子元素的约束（约束相对与 Content View）",-1),q=(0,t._)("p",null,[(0,t._)("img",{src:d,alt:"7"})],-1),z=(0,t._)("h3",{id:"删除-content-view-的高",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#删除-content-view-的高","aria-hidden":"true"},"#"),(0,t.Uk)(" 删除 Content View 的高")],-1),D=(0,t._)("p",null,[(0,t.Uk)("当所有子元素的约束都设置完毕之后 "),(0,t._)("code",null,"Auto Layout"),(0,t.Uk)(" 会计算出 "),(0,t._)("code",null,"Content View"),(0,t.Uk)(" 的高度， 这时我们可以删除之前设置的固定高度。")],-1),E=(0,t._)("p",null,[(0,t._)("img",{src:s,alt:"6"})],-1),M=(0,t._)("h3",{id:"参考",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),(0,t.Uk)(" 参考")],-1),N={href:"https://fluffy.es/scrollview-storyboard-xcode-11/#structure",target:"_blank",rel:"noopener noreferrer"},P=(0,t.Uk)("How to use Scroll view in Interface Builer"),R={},X=(0,n(3744).Z)(R,[["render",function(e,l){const n=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[_,p,h,w,g,k,U,m,f,V,v,C,S,b,x,y,L,I,G,B,O,T,A,F,H,W,Z,j,q,z,D,E,M,(0,t._)("p",null,[(0,t._)("a",N,[P,(0,t.Wm)(n)])])],64)}]])},3744:(e,l)=>{l.Z=(e,l)=>{for(const[n,t]of l)e[n]=t;return e}},6542:(e,l,n)=>{e.exports=n.p+"assets/img/0.85b299dc.png"},1822:(e,l,n)=>{e.exports=n.p+"assets/img/1.e3da0cc1.png"},5004:(e,l,n)=>{e.exports=n.p+"assets/img/2.8b240edf.png"},7107:(e,l,n)=>{e.exports=n.p+"assets/img/3.f63172c3.png"},6599:(e,l,n)=>{e.exports=n.p+"assets/img/4.89603d3f.png"},3749:(e,l,n)=>{e.exports=n.p+"assets/img/5.cf4e91f1.png"},6699:(e,l,n)=>{e.exports=n.p+"assets/img/6.98fd6768.png"},6916:(e,l,n)=>{e.exports=n.p+"assets/img/7.c7a009bc.png"}}]);