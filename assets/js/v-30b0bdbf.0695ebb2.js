"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[771],{5443:(e,a,i)=>{i.r(a),i.d(a,{data:()=>l});const l={key:"v-30b0bdbf",path:"/iOS/app-launch.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"iOS/app-launch.md",git:{updatedTime:1633942617e3,contributors:[{name:"peak",email:"peak@jiemogame.com",commits:1}]}}},4247:(e,a,i)=>{i.r(a),i.d(a,{default:()=>o});var l=i(6252);const p=(0,l.uE)('<h4 id="app-启动分类" tabindex="-1"><a class="header-anchor" href="#app-启动分类" aria-hidden="true">#</a> App 启动分类</h4><ul><li><p>冷启动</p><blockquote><p>App 点击前，它的进程不在系统内，需要系统创建一个进程分配给它启动。</p></blockquote></li><li><p>热启动</p><blockquote><p>App 在冷启动后用户将App退后台，在 App 的进程还在系统内的情况下，用户重新启动进入 App 的过程。</p></blockquote></li></ul><h4 id="app-冷启动流程" tabindex="-1"><a class="header-anchor" href="#app-冷启动流程" aria-hidden="true">#</a> App 冷启动流程</h4><ol><li>main() 函数执行前；</li><li>main() 函数执行后；</li><li>首屏渲染完成后；</li></ol><h5 id="main-函数执行前" tabindex="-1"><a class="header-anchor" href="#main-函数执行前" aria-hidden="true">#</a> main() 函数执行前</h5><ul><li>加载可执行文件（App 的 .o 文件集合)</li><li>加载动态链接库，进行 rebase 指针调整和 bind 符号绑定；</li><li>Objc 运行时的初始化处理，包括 Objc 相关类的注册、category 注册、selector 唯一性检查；</li><li>初始化（执行 +load() 方法、 attribute((constructor)) 修饰的函数的调用、创建 C++ 静态全局变量</li></ul><h5 id="main-函数执行后" tabindex="-1"><a class="header-anchor" href="#main-函数执行后" aria-hidden="true">#</a> main() 函数执行后</h5><p>指的是从 main() 函数开始执行 到 appDelegate 的 didFinishLaunchingWithOptions 方法里 首屏渲染相关方法执行完成。</p><ul><li>首屏初始化所需配置文件的读写操作；</li><li>网络数据读取；</li><li>首屏渲染的大量计算；</li></ul><h5 id="首屏渲染完成后" tabindex="-1"><a class="header-anchor" href="#首屏渲染完成后" aria-hidden="true">#</a> 首屏渲染完成后</h5><p>值的是 从首屏渲染完成后开始到 didFinishLaunchingWithOptions 方法作用域结束。</p><h4 id="优化方法" tabindex="-1"><a class="header-anchor" href="#优化方法" aria-hidden="true">#</a> 优化方法</h4><p>减少动态库加载（多个动态库进行合并， 建议使用6个非系统动态库)</p><p>减少无用类</p><p>+load() 方法延后执行或者放到 +initialize() 方法内</p><p>控制 C++ 全局变量的数量</p><p>非首屏业务的初始化、监听、配置文件读取等都放到首屏渲染完成之后操作</p><p>定时抓取方法调用堆栈，计算一段时间里各个方法的耗时</p><p>对 objc_msgSend 方法进行 hook 来掌握所有方法的执行耗时</p><h4 id="objc-msgsend" tabindex="-1"><a class="header-anchor" href="#objc-msgsend" aria-hidden="true">#</a> objc_msgSend</h4><p>objc_msgSend 用汇编语言编写，主要原因：</p><ul><li>调用频次最高，汇编在性能上更优化；</li><li>能实现跳转到任意函数指针的功能；</li></ul>',22),n={href:"https://opensource.apple.com/source/objc4/objc4-723/runtime/Messengers.subproj/",target:"_blank",rel:"noopener noreferrer"},r=(0,l.Uk)("源代码位置"),t=(0,l._)("p",null,"objc_msgSend 执行逻辑： 先获取对象对应的类的信息，在获取该类的方法缓存，根据方法的 selector 查找函数指针，经过异常错误处理后跳转到对应函数的实现。",-1),h={},o=(0,i(3744).Z)(h,[["render",function(e,a){const i=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[p,(0,l._)("p",null,[(0,l._)("a",n,[r,(0,l.Wm)(i)])]),t],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{for(const[i,l]of a)e[i]=l;return e}}}]);