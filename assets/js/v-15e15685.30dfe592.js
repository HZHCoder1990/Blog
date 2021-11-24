"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4143],{338:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-15e15685",path:"/iOS/method-forward.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"iOS/method-forward.md",git:{updatedTime:1633945792e3,contributors:[{name:"peak",email:"peak@jiemogame.com",commits:2}]}}},5492:(e,n,s)=>{s.r(n),s.d(n,{default:()=>f});var a=s(6252);const r=(0,a.uE)('<h4 id="消息转发" tabindex="-1"><a class="header-anchor" href="#消息转发" aria-hidden="true">#</a> 消息转发</h4><p align="right">2020-4-17</p><h5 id="objc-msgforward-和-objc-msgforward-stret" tabindex="-1"><a class="header-anchor" href="#objc-msgforward-和-objc-msgforward-stret" aria-hidden="true">#</a> <code>_objc_msgForward</code> 和 <code>_objc_msgForward_stret</code></h5><p><code>_objc_msgForward</code> 用于消息转发：向一个对象发送消息，但是它没有实现的时候，<code>_objc_msgForward</code> 会尝试走消息转发。</p>',4),o=(0,a._)("code",null,"_objc_msgForward",-1),l=(0,a.Uk)(" 和 "),t=(0,a._)("code",null,"_objc_msgForward_stret",-1),c=(0,a.Uk)(" 区别，引用自: "),i={href:"http://blog.cnbang.net/tech/2855/",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("JSPatch 实现原理详解"),d=(0,a.Uk)("对于某些架构某些 struct，必须使用 _objc_msgForward_stret 代替 _objc_msgForward。为什么要用 _objc_msgForward_stret 呢，找到一篇说明 objc_msgSend_stret 和 objc_msgSend 区别的"),b={href:"http://sealiesoftware.com/blog/archive/2008/10/30/objc_explain_objc_msgSend_stret.html",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("文章"),m=(0,a.Uk)("），说得比较清楚，原理是一样的，是C的一些底层机制的原因，简单复述一下："),h=(0,a.uE)('<blockquote><p>大多数 CPU 在执行 C 函数时会把前几个参数放进寄存器里，对 <code>obj_msgSend</code> 来说前两个参数固定是 <code>self</code> / <code>_cmd</code>，它们会放在寄存器上，在最后执行完后返回值也会保存在寄存器上，取这个寄存器的值就是返回值。</p></blockquote><h5 id="消息转发的三个阶段" tabindex="-1"><a class="header-anchor" href="#消息转发的三个阶段" aria-hidden="true">#</a> 消息转发的三个阶段</h5><h6 id="第一阶段-method-resolution" tabindex="-1"><a class="header-anchor" href="#第一阶段-method-resolution" aria-hidden="true">#</a> 第一阶段: Method resolution</h6><p>调用 <code>resolveInstanceMethod:</code>方法 (或 <code>resolveClassMethod:</code>)。允许用户在此时为该 Class 动态添加实现。如果有实现了，则调用并返回YES，那么重新开始 <code>objc_msgSend</code> 流程。如果仍没实现，继续转发。</p><p><strong>代码实例:</strong></p><p>为 <code>Test</code> 动态添加类方法<code>class_print</code> 和 实例方法<code>instance_print</code></p><div class="language-objective ext-objective line-numbers-mode"><pre class="language-objective"><code>void instance_print(id self, SEL _cmd, NSString *text)\n{\n    NSLog(@&quot;replaced instance method %@&quot;, text);\n}\n\nvoid class_print(id self, SEL _cmd, NSString *text)\n{\n    NSLog(@&quot;replaced resolve class method %@&quot;, text);\n}\n\n@implementation Test\n\n+ (BOOL)resolveClassMethod:(SEL)sel {\n    if (sel == @selector(classPrint:)) {\n        // 类方法列表在元类中查找\n        class_addMethod(object_getClass(self), sel, (IMP)class_print, &quot;v@:@&quot;);\n        return YES;\n    }\n    return [super resolveClassMethod:sel];\n}\n\n+ (BOOL)resolveInstanceMethod:(SEL)sel {\n    if (sel == @selector(instancePrint:)) {\n        class_addMethod([self class], sel, (IMP)instance_print, &quot;v@:@&quot;);\n        return YES;\n    }\n    return [super resolveInstanceMethod:sel];\n}\n@end\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h6 id="第二阶段-fast-forwarding" tabindex="-1"><a class="header-anchor" href="#第二阶段-fast-forwarding" aria-hidden="true">#</a> 第二阶段: Fast forwarding</h6><p>调用 <code>forwardingTargetForSelector:</code> 方法，找到一个能响应该消息的对象。如果获取到，则直接把消息转发给它，否则返回 nil ，继续转发。</p><p><strong>代码示例:</strong></p><p>把<code>Test</code>的实例方法<code>run</code>转发给<code>Person</code>对象去执行。</p><div class="language-objective ext-objective line-numbers-mode"><pre class="language-objective"><code>@implementation Test\n- (NSMethodSignature *)methodSignatureForSelector:(SEL)aSelector {\n    if (aSelector == @selector(read)) {\n        return [NSMethodSignature signatureWithObjCTypes:&quot;v@:&quot;];\n    } else {\n        return [super methodSignatureForSelector:aSelector];\n    }\n}\n@end\n\n@implementation Person\n- (void)run {\n    NSLog(@&quot;%@ run&quot;, [self class]);\n}\n@end\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h6 id="第三阶段-normal-forwarding" tabindex="-1"><a class="header-anchor" href="#第三阶段-normal-forwarding" aria-hidden="true">#</a> 第三阶段: Normal forwarding</h6><ol><li>调用 <code>methodSignatureForSelector:</code> 方法，尝试获得一个方法签名。如果获取不到，则直接调用 <code>doesNotRecognizeSelector</code> 抛出异常。如果能够获取，继续进行第2步:</li><li>调用 <code>forwardInvocation:</code> 方法，将第 1 步获取到的方法签名包装成<code>NSInvocation</code> 对象传入，处理消息转发。</li></ol><p><strong>示例代码:</strong></p><p>把<code>Test</code>的实例方法<code>read</code>转发给<code>Student</code>对象去执行。</p><div class="language-objective ext-objective line-numbers-mode"><pre class="language-objective"><code>@implementation Test\n- (NSMethodSignature *)methodSignatureForSelector:(SEL)aSelector {\n    if (aSelector == @selector(read)) {\n        return [NSMethodSignature signatureWithObjCTypes:&quot;v@:&quot;];\n    } else {\n        return [super methodSignatureForSelector:aSelector];\n    }\n}\n\n- (void)forwardInvocation:(NSInvocation *)anInvocation {\n    if (anInvocation.selector == @selector(read)) {\n        Student *s = [Student new];\n        [anInvocation invokeWithTarget:s];\n    } else {\n        [super forwardInvocation:anInvocation];\n    }\n}\n@end\n\n@implementation Student\n- (void)read {\n    NSLog(@&quot;%@ read&quot;, [self class]);\n}\n@end\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>',17),g={href:"https://github.com/chenxi141017/demo/blob/master/iOS/runtime/method_forward/method_forward/main.m",target:"_blank",rel:"noopener noreferrer"},S=(0,a.Uk)("文中代码位置"),_={},f=(0,s(3744).Z)(_,[["render",function(e,n){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[o,l,t,c,(0,a._)("a",i,[p,(0,a.Wm)(s)])]),(0,a._)("blockquote",null,[(0,a._)("p",null,[d,(0,a._)("a",b,[u,(0,a.Wm)(s)]),m])]),h,(0,a._)("p",null,[(0,a._)("a",g,[S,(0,a.Wm)(s)])])],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[s,a]of n)e[s]=a;return e}}}]);