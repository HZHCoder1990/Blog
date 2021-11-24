"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[346],{3035:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-2ce592b5",path:"/iOS/interview/4-associated-object.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"iOS/interview/4-associated-object.md",git:{updatedTime:1633942617e3,contributors:[{name:"peak",email:"peak@jiemogame.com",commits:1}]}}},8529:(n,e,s)=>{s.r(e),s.d(e,{default:()=>u});var a=s(6252);const t=(0,a.uE)('<h4 id="关联对象" tabindex="-1"><a class="header-anchor" href="#关联对象" aria-hidden="true">#</a> 关联对象</h4><p>为什么使用关联对象？</p><p>在分类中 <code>@property</code> 并不会自动生成实例变量以及存取方法， 所以 <strong>一般使用关联对象为已经存在的类添加「属性」</strong>。</p><p>方法原型</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>id <span class="token function">objc_getAssociatedObject</span><span class="token punctuation">(</span>id object<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">void</span> <span class="token function">objc_setAssociatedObject</span><span class="token punctuation">(</span>id object<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>key<span class="token punctuation">,</span> id value<span class="token punctuation">,</span> objc_AssociationPolicy policy<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>objc_AssociationPolicy</code> 与修饰符</p><table><thead><tr><th>objc_AssociationPolicy</th><th>Modifier</th></tr></thead><tbody><tr><td>OBJC_ASSOCIATION_ASSIGN</td><td>assign</td></tr><tr><td>OBJC_ASSOCIATION_RETAIN_NONATOMIC</td><td>nonatomic, strong</td></tr><tr><td>OBJC_ASSOCIATION_COPY_NONATOMIC</td><td>nonatomic, copy</td></tr><tr><td>OBJC_ASSOCIATION_RETAIN</td><td>atomic, strong</td></tr><tr><td>OBJC_ASSOCIATION_COPY</td><td>atomic, copy</td></tr></tbody></table><h4 id="使用实例" tabindex="-1"><a class="header-anchor" href="#使用实例" aria-hidden="true">#</a> 使用实例</h4><div class="language-objective ext-objective line-numbers-mode"><pre class="language-objective"><code>#import &lt;objc/runtime.h&gt; \n     \nstatic void *EOCMyAlertViewKey = &quot;EOCMyAlertViewKey&quot;;  \n \n- (void)askUserAQuestion {  \n    UIAlertView *alert = [[UIAlertViewalloc]  \n                             initWithTitle:@&quot;Question&quot;  \n                               message:@&quot;What do you want to do?&quot;  \n                                  delegate:self  \n                        cancelButtonTitle:@&quot;Cancel&quot;  \n                        otherButtonTitles:@&quot;Continue&quot;, nil];  \n \n        void (^block)(NSInteger) = ^(NSInteger buttonIndex){  \n          if (buttonIndex == 0) {  \n              [self doCancel];  \n        } else {  \n            [self doContinue];  \n        }  \n    };  \n \n      objc_setAssociatedObject(alert,  \n                               EOCMyAlertViewKey,  \n                               block,  \nO                              BJC_ASSOCIATION_COPY);  \n \n      [alert show];  \n}  \n \n// UIAlertViewDelegate protocol method  \n- (void)alertView:(UIAlertView*)alertView  \n        clickedButtonAtIndex:(NSInteger)buttonIndex  \n{  \n    void (^block)(NSInteger) =  \n        objc_getAssociatedObject(alertView, EOCMyAlertViewKey);  \n    block(buttonIndex);  \n} \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h4 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h4>',10),r={href:"https://juejin.im/post/5af86b276fb9a07aa34a59e6",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Uk)("iOS底层原理总结 - 关联对象实现原理"),o={href:"https://www.jianshu.com/p/bf51e9d52188",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("关联对象详解"),p={href:"https://draveness.me/ao",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("关联对象 AssociatedObject 完全解析"),b={},u=(0,s(3744).Z)(b,[["render",function(n,e){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("a",r,[l,(0,a.Wm)(s)])]),(0,a._)("li",null,[(0,a._)("a",o,[i,(0,a.Wm)(s)])]),(0,a._)("li",null,[(0,a._)("a",p,[c,(0,a.Wm)(s)])])])],64)}]])},3744:(n,e)=>{e.Z=(n,e)=>{for(const[s,a]of e)n[s]=a;return n}}}]);