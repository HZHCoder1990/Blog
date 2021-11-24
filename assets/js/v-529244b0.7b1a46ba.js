"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6681],{7808:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-529244b0",path:"/typescript/basic-types.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"基本数据类型",slug:"基本数据类型",children:[]}],filePathRelative:"typescript/basic-types.md",git:{updatedTime:1633942617e3,contributors:[{name:"peak",email:"peak@jiemogame.com",commits:1}]}}},2455:(e,n,a)=>{a.r(n),a.d(n,{default:()=>i});var s=a(6252);const r=(0,s.uE)('<h3 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h3><p align="right">2018-12-28</p><p><strong>TypeScript 支持：</strong><code>boolean</code>，<code>number</code>，<code>string</code>，<code>Array</code>，<code>Tuple</code>，<code>Enum</code>，<code>Any</code>， <code>Void</code>，<code>Never</code>，<code>Object</code>等类型。</p><h5 id="_1-boolean" tabindex="-1"><a class="header-anchor" href="#_1-boolean" aria-hidden="true">#</a> 1. Boolean</h5><p>基本数据类型，表示<code>true/false</code> 。</p><h5 id="_2-number" tabindex="-1"><a class="header-anchor" href="#_2-number" aria-hidden="true">#</a> 2. Number</h5><p>基本数据类型，支持10进制，16进制数值， 也支持二进制和八进制数值(<strong>ECMAScript 2015)</strong>.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let decimal: number = 6;\nlet hex: number = 0xf00d;\nlet binary: number = 0b1010;\nlet octal: number = 0o744;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="_3-string" tabindex="-1"><a class="header-anchor" href="#_3-string" aria-hidden="true">#</a> 3. String</h5><p>基本数据类型，使用双引号或者单引号表达。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let color: string = &quot;blue&quot;;\ncolor = &#39;red&#39;;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>支持模板字符串</strong> 使用反引号表达，可以跨行，也可以嵌入表达式 <code>${expr}</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let fullName: string = `Bob Bobbington`;\nlet age: number = 37;\nlet sentence: string = `Hello, my name is ${ fullName }.\n\nI&#39;ll be ${ age + 1 } years old next month.`;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h5 id="_4-array" tabindex="-1"><a class="header-anchor" href="#_4-array" aria-hidden="true">#</a> 4. Array</h5><p>基本数据类型， 用两种表达形式。</p><p>第一种：元素类型后面跟<code>[]</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let list: number[] = [1, 2, 3];\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>第二种： 使用模板类型</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let list: Array&lt;number&gt; = [1, 2, 3];\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="_5-tuple" tabindex="-1"><a class="header-anchor" href="#_5-tuple" aria-hidden="true">#</a> 5. Tuple</h5><p>元组，类似数组，表示一定数量的元素集合， 但是每个元素类型不必相同</p><h5 id="_6-enum" tabindex="-1"><a class="header-anchor" href="#_6-enum" aria-hidden="true">#</a> 6. Enum</h5><p>对Javascript的数据类型的补充， 使用<code>enum</code>关键字开头。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>enum Color {Red, Green, Blue}\nlet c: Color = Color.Green;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>默认开始的值是0， 但是可以手动的设置某一个或者所有的值。</p><p><strong>它可以从数值转换到该值值枚举中的名称</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>enum Color {Red = 1, Green, Blue}\nlet colorName: string = Color[2];\n\nconsole.log(colorName); // Displays &#39;Green&#39; as its value is 2 above\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="_7-any" tabindex="-1"><a class="header-anchor" href="#_7-any" aria-hidden="true">#</a> 7. Any</h5><p>表示任意类型，会忽略类型检查。</p><h5 id="_8-void" tabindex="-1"><a class="header-anchor" href="#_8-void" aria-hidden="true">#</a> 8. Void</h5><p>跟<code>Any</code>类型相反， 表示没有类型， 一般用作函数的返回值类型。</p><h5 id="_9-null-and-undefined" tabindex="-1"><a class="header-anchor" href="#_9-null-and-undefined" aria-hidden="true">#</a> 9. Null and Undefined</h5><p>在<code>TypeScript</code>中， <code>undefined</code>和<code>null</code> 实际上拥有自己的类型，分别叫做<code>undefined</code>和<code>null</code>。</p><p>默认<code>undefined</code>和<code>null</code>是其他类型的子类型， 可以把他们赋值给其他类型；</p><h5 id="_10-never" tabindex="-1"><a class="header-anchor" href="#_10-never" aria-hidden="true">#</a> 10. Never</h5><p><code>never</code>表示给类型的值从来不会出现， 一般用作函数返回值。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>The never type represents the type of values that never occur.\nFor instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns;\nVariables also acquire the type never when narrowed by any type guards that can never be true.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="_11-object" tabindex="-1"><a class="header-anchor" href="#_11-object" aria-hidden="true">#</a> 11. Object</h5><p><code>Object</code> 表示非基本类型，表示除<code>number</code>, <code>string</code>, <code>boolean</code>, <code>symbol</code>, <code>null</code>, <code>undefined</code>等之外的数据类型。 官网解释如下:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>object is a type that represents the non-primitive type, i.e.\nany thing that is not number, string, boolean, symbol, null, or undefined.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>Object</code> 允许任何变量的值给它赋值， 但是不能调用它其中的方法，即使该方法已经存在。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let prettySure: Object = 4;\nprettySure.toFixed(); // Error: Property &#39;toFixed&#39; doesn&#39;t exist on type &#39;Object&#39;.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="_12-类型转换" tabindex="-1"><a class="header-anchor" href="#_12-类型转换" aria-hidden="true">#</a> 12. 类型转换</h5><p>不执行数据检查，对运行时没有影响，只由编译器使用。 类型转换有两种表现形式。 第一种是尖括号的语法：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let someValue: any = &quot;this is a string&quot;;\nlet strLength: number = (&lt;string&gt;someValue).length;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>第二种是<code>as</code>语法(<strong>推荐使用该语法</strong>):</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let someValue: any = &quot;this is a string&quot;;\nlet strLength: number = (someValue as string).length;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h5>',48),t={href:"https://www.typescriptlang.org/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"},l=(0,s.Uk)("basic-types"),d={},i=(0,a(3744).Z)(d,[["render",function(e,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,(0,s._)("ol",null,[(0,s._)("li",null,[(0,s._)("a",t,[l,(0,s.Wm)(a)])])])],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[a,s]of n)e[a]=s;return e}}}]);