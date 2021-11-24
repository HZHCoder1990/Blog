"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1729],{1166:(e,l,a)=>{a.r(l),a.d(l,{data:()=>d});const d={key:"v-2edf71d7",path:"/shell/notes/variable.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"环境变量",slug:"环境变量",children:[]},{level:3,title:"创建变量",slug:"创建变量",children:[]},{level:3,title:"默认变量",slug:"默认变量",children:[]},{level:3,title:"declare 命令",slug:"declare-命令",children:[]},{level:3,title:"readonly 命令",slug:"readonly-命令",children:[]},{level:3,title:"let 命令",slug:"let-命令",children:[]},{level:3,title:"参考文章:",slug:"参考文章",children:[]}],filePathRelative:"shell/notes/variable.md",git:{updatedTime:1633942617e3,contributors:[{name:"peak",email:"peak@jiemogame.com",commits:1}]}}},546:(e,l,a)=>{a.r(l),a.d(l,{default:()=>s});var d=a(6252);const r=(0,d.uE)('<p align="right">Update: 2020-9-12</p><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h3><p>环境变量属于 Bash 环境自带的变量，通常由系统定义。 <code>env</code> 或者 <code>printenv</code> 命令可以显示所有环境变量。</p><p>函数内声明的变量属于全局变量， 整个脚本都可以读取。</p><p>函数内使用 <code>local</code> 修饰的变量属于局部变量，只在函数体内有效。</p><h3 id="创建变量" tabindex="-1"><a class="header-anchor" href="#创建变量" aria-hidden="true">#</a> 创建变量</h3><p>创建变量必须遵守的规则:</p><ul><li>字母、数字、下划线字符组成；</li><li>第一个字符必须是字母或下划线，不能是数字；</li><li>不允许出现空格和标点符号；</li></ul><p>使用变量需要注意的细节：</p><ul><li>Bash 没有数据类型的概念，所有的变量值都是字符串。</li><li>变量可以重复赋值，后面的赋值会覆盖前面的赋值。</li><li>定义的变量表示路径，但是路径里面包含空格。 <ul><li>使用该变量时需要使用双引号扩起来使用， 例如 <code>“${my_variable}&quot;</code></li></ul></li></ul><h3 id="默认变量" tabindex="-1"><a class="header-anchor" href="#默认变量" aria-hidden="true">#</a> 默认变量</h3><p><code>@{varname:-word}</code></p><ul><li>如果变量 <code>varname</code> 存在且不为空，则返回它的值，否则返回 <code>word</code> 。</li></ul><p><code>@{varname:=word}</code></p><ul><li>如果变量 <code>varname</code> 存在且不为空，则返回它的值，否则把它设置为 <code>wrod</code> 并返回 <code>word</code> 。</li></ul><p><code>@{varname:+word}</code></p><ul><li>如果变量 <code>varname</code> 存在且不为空，则返回 <code>word</code> ，否则返回空值。</li></ul><p><code>@{varname:?message}</code></p><ul><li>如果变量 <code>varname</code> 存在且不为空，则返回它的值，否则打印出 <code>varname: message</code> 并中断脚本的执行。</li></ul><h3 id="declare-命令" tabindex="-1"><a class="header-anchor" href="#declare-命令" aria-hidden="true">#</a> <code>declare</code> 命令</h3><p><code>declare</code> 命令可以声明一些特殊类型的变量，为变量设置一些限制。</p><p>语法形式:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">declare</span> OPTION <span class="token assign-left variable">VARIABLE</span><span class="token operator">=</span>value\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>OPTION 主要参数:</p><ul><li><code>-a</code> 声明数组变量。</li><li><code>f</code> 输出所有函数定义。</li><li><code>F</code> 输出或有函数名。</li><li><code>i</code> 声明整数变量。</li><li><code>r</code> 声明只读变量。</li><li><code>x</code> 为该变量输出为环境变量。</li></ul><h3 id="readonly-命令" tabindex="-1"><a class="header-anchor" href="#readonly-命令" aria-hidden="true">#</a> <code>readonly</code> 命令</h3><p><code>readonly </code>命令等同于 <code>declare -r</code>，用来声明只读变量。</p><h3 id="let-命令" tabindex="-1"><a class="header-anchor" href="#let-命令" aria-hidden="true">#</a> <code>let</code> 命令</h3><p><code>let </code>命令声明变量时，可以直接执行算术表达式。</p><h3 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章:</h3>',30),o={href:"https://wangdoc.com/bash/variable.html",target:"_blank",rel:"noopener noreferrer"},c=(0,d.Uk)("Bash 变量"),i={href:"https://wangdoc.com/bash/function.html",target:"_blank",rel:"noopener noreferrer"},n=(0,d.Uk)("函数"),t={},s=(0,a(3744).Z)(t,[["render",function(e,l){const a=(0,d.up)("OutboundLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[r,(0,d._)("ul",null,[(0,d._)("li",null,[(0,d._)("p",null,[(0,d._)("a",o,[c,(0,d.Wm)(a)])])]),(0,d._)("li",null,[(0,d._)("p",null,[(0,d._)("a",i,[n,(0,d.Wm)(a)])])])])],64)}]])},3744:(e,l)=>{l.Z=(e,l)=>{for(const[a,d]of l)e[a]=d;return e}}}]);