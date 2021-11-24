"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9405],{637:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-32c85a1a",path:"/others/laTeX.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"others/laTeX.md",git:{updatedTime:1633949964e3,contributors:[{name:"peak",email:"peak@jiemogame.com",commits:1}]}}},7806:(e,n,a)=>{a.r(n),a.d(n,{default:()=>ye});var s=a(6252);const c=(0,s._)("p",{align:"right"},"2019-6-1",-1),t=(0,s._)("strong",null,"LaTeX",-1),p=(0,s.Uk)("（/ˈlɑːtɛx/，常被读作/ˈlɑːtɛk/或/ˈleɪtɛk/），排版时通常使用"),o=(0,s._)("strong",null,"LATEX",-1),l=(0,s.Uk)("，是一种基于"),r={href:"https://zh.wikipedia.org/wiki/TeX",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("TeX"),d=(0,s.Uk)("的"),u={href:"https://zh.wikipedia.org/wiki/%E6%8E%92%E7%89%88",target:"_blank",rel:"noopener noreferrer"},b=(0,s.Uk)("排版"),k=(0,s.Uk)("系统，由"),h={href:"https://zh.wikipedia.org/wiki/%E7%BE%8E%E5%9B%BD",target:"_blank",rel:"noopener noreferrer"},m=(0,s.Uk)("美国"),g={href:"https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6",target:"_blank",rel:"noopener noreferrer"},f=(0,s.Uk)("计算机科学"),x=(0,s.Uk)("家"),w={href:"https://zh.wikipedia.org/wiki/%E8%8E%B1%E6%96%AF%E5%88%A9%C2%B7%E5%85%B0%E4%BC%AF%E7%89%B9",target:"_blank",rel:"noopener noreferrer"},_=(0,s.Uk)("莱斯利·兰伯特"),v=(0,s.Uk)("在20世纪80年代初期开发，利用这种格式系统的处理，即使用户没有排版和程序设计的知识也可以充分发挥由TeX所提供的强大功能，不必一一亲自去设计或校对，能在几天，甚至几小时内生成很多具有书籍质量的印刷品。对于生成复杂表格和"),U={href:"https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6",target:"_blank",rel:"noopener noreferrer"},y=(0,s.Uk)("数学"),E=(0,s.Uk)("公式，这一点表现得尤为突出。因此它非常适用于生成高印刷质量的"),T={href:"https://zh.wikipedia.org/wiki/%E7%A7%91%E6%8A%80",target:"_blank",rel:"noopener noreferrer"},A=(0,s.Uk)("科技"),X=(0,s.Uk)("和数学、物理文档。这个系统同样适用于生成从简单的信件到完整书籍的所有其他种类的文档。"),W=(0,s._)("p",{align:"right"},"维基百科",-1),q=(0,s.Uk)("Mac 使用使用 LaTeX 可以下载 "),z={href:"http://www.tug.org/mactex/",target:"_blank",rel:"noopener noreferrer"},L=(0,s.Uk)("MacTeX"),B=(0,s.Uk)(" ，也可使用 "),C=(0,s._)("code",null,"Sublime Text",-1),$=(0,s.Uk)(" 编辑器配合 "),F=(0,s._)("code",null,"LaTeXTools",-1),D=(0,s.Uk)(" 插件。"),I=(0,s.uE)('<h4 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h4><h5 id="序言" tabindex="-1"><a class="header-anchor" href="#序言" aria-hidden="true">#</a> 序言</h5><p>编写文档的序言部分，可以使用如下代码实例:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\\documentclass{article}\n\n\\title{标题}\n\\author{作者}\n\\date{February 2017} \n\n\\begin{document}\n\n% 显示序言部分内容\n\\maketitle\n\n\\end{document}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>\\documentclass{article}</code> 表明文档的类型是 <code>article</code> 类型，其他可供选择的值有：<code> article</code> 、<code>book</code>、<code>report</code> 等。</p><p><code>\\title{标题}</code> 表示文档的标题</p><p><code>\\author{作者}</code> 表示文档的作者</p><p><code>\\date{February 2017} </code> 表示文档的时间, 还可以用<code>\\today</code> 表示当前的时间。</p><p>文档的正文部分放在 <code>\\begin{document}</code> 和 <code>\\end{document}</code> 之间。</p><p><code>\\maketitle</code> 表示打印序言部分的内容。</p><p><code>%</code> 开头的内容表示注释</p><h5 id="粗体、斜体、下划线" tabindex="-1"><a class="header-anchor" href="#粗体、斜体、下划线" aria-hidden="true">#</a> 粗体、斜体、下划线</h5><p><code>\\textbf{}</code> 命令会把大括号里面的内容以粗体的方式显示。</p><p><code>\\textit{}</code> 命令会把大括号里面的内容以斜体的方式显示。</p><p><code>\\underline{}</code> 命令会把大括号里面的内容以添加写划线的方式显示。</p><h5 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h5><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code><span class="token function selector">\\documentclass</span><span class="token punctuation">{</span><span class="token keyword">article</span><span class="token punctuation">}</span>\n<span class="token function selector">\\usepackage</span><span class="token punctuation">{</span><span class="token keyword">graphicx</span><span class="token punctuation">}</span>\n<span class="token function selector">\\graphicspath</span><span class="token punctuation">{</span> <span class="token punctuation">{</span>images/<span class="token punctuation">}</span> <span class="token punctuation">}</span>\n \n<span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">document</span><span class="token punctuation">}</span>\nThe universe is immense and it seems to be homogeneous, \nin a large scale, everywhere we look at.\n \n<span class="token function selector">\\includegraphics</span><span class="token punctuation">{</span>universe<span class="token punctuation">}</span>\n \nThere&#39;s a picture of a galaxy above\n<span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">document</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',17),M=(0,s.Uk)("LaTeX 自己本身不能管理图片，需要引用 "),S=(0,s._)("strong",null,"graphicx",-1),j=(0,s.Uk)(),Z={href:"https://zhuanlan.zhihu.com/p/43981639",target:"_blank",rel:"noopener noreferrer"},H=(0,s.Uk)("宏包"),N=(0,s.Uk)(" (package), "),O=(0,s._)("code",null,"\\graphicspath{ {images/} }",-1),P=(0,s.Uk)(" 表示图片位于当前目录下的 "),R=(0,s._)("code",null,"images",-1),Y=(0,s.Uk)(" 文件夹下， "),G=(0,s._)("code",null,"\\includegraphics{universe}",-1),J=(0,s.Uk)(" 表示使用 "),K=(0,s._)("code",null,"universe",-1),Q=(0,s.Uk)(" 这样图片。"),V=(0,s.Uk)("更多图片用法，请参考 "),ee={href:"https://www.overleaf.com/learn/latex/Inserting_Images",target:"_blank",rel:"noopener noreferrer"},ne=(0,s.Uk)("insert-images"),ae=(0,s.Uk)("。"),se=(0,s.uE)('<h5 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h5><p>列表分为有序列表和无序列表，列表的每一个子项都使用 <code>\\item</code> 来表示。</p><p>无序列表通过 <code>itemsize</code> 环境变量来生成。</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code><span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">itemize</span><span class="token punctuation">}</span>\n  <span class="token function selector">\\item</span> The individual entries are indicated with a black dot, a so-called bullet.\n  <span class="token function selector">\\item</span> The text in the entries may be of any length.\n<span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">itemize</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>有序列表通过 <code>enumerate</code> 环境变量来生成。</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code><span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">enumerate</span><span class="token punctuation">}</span>\n  <span class="token function selector">\\item</span> This is the first entry in our list\n  <span class="token function selector">\\item</span> The list numbers increase with each entry we add\n<span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">enumerate</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>有序列表和无序列表还可以互相嵌套。</p>',7),ce=(0,s.Uk)("更多列表用法，请参考 "),te={href:"https://www.overleaf.com/learn/Lists",target:"_blank",rel:"noopener noreferrer"},pe=(0,s.Uk)("Lists"),oe=(0,s.Uk)(" 。"),le=(0,s.uE)('<h5 id="数学公式" tabindex="-1"><a class="header-anchor" href="#数学公式" aria-hidden="true">#</a> 数学公式</h5><p>数学公式有两种显示方式: 内联(<code>inline</code>) 和 展示(<code>display</code>)。</p><p>内联数学公式:</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code>In physics, the mass-energy equivalence is stated \nby the equation <span class="token equation string">$E=mc^2$</span>, discovered in 1905 by Albert Einstein.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>内联的数学公式可以使用: <code> \\( … \\)</code> 、<code>$ ... $</code> 、<code>\\begin{math} ... \\end{math}</code> 等三种命令来表示。</p><p>展示数学公式:</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code>The mass-energy equivalence is described by the famous equation\n \n<span class="token equation string">\\[E=mc^2\\]</span>\n \ndiscovered in 1905 by Albert Einstein. \nIn natural units (<span class="token equation string">$c = 1$</span>), the formula expresses the identity\n \n<span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">equation</span><span class="token punctuation">}</span><span class="token equation string">\nE=m\n</span><span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">equation</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>展示数学公式可以使用: <code>\\[ ... \\]</code> 、 <code>\\begin{equation} ... \\end{equation}</code> 、<code>\\begin{displaymath} ... \\end{displaymath}</code> 等三种命令来表示。</p><p>其他数学公式常用的宏包是: <strong>amsmath</strong>。</p>',9),re=(0,s.Uk)("更多数学公式的用法，请参考 "),ie={href:"https://www.overleaf.com/learn/latex/Mathematical_expressions",target:"_blank",rel:"noopener noreferrer"},de=(0,s.Uk)("Mathematical-expressions"),ue=(0,s.Uk)("。"),be=(0,s.uE)('<h5 id="章节片段" tabindex="-1"><a class="header-anchor" href="#章节片段" aria-hidden="true">#</a> 章节片段</h5><p>有如下常见章节片段:</p><p><code>\\part{part}</code> 只是适用于 <code>documentclass</code> 类型是 <code>book</code> 和 <code>reprot</code></p><p><code>\\chapter{chapter}</code> 只是适用于 <code>documentclass</code> 类型是 <code>book</code> 和 <code>reprot</code></p><p><code>\\section{section}</code></p><p><code>\\subsection{subsection}</code></p><p><code>\\paragraph{paragraph}</code></p><p><code>\\subparagraph{subparagraph}</code></p><h5 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h5><p>创建一个简单的表格</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code><span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">center</span><span class="token punctuation">}</span>\n<span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">tabular</span><span class="token punctuation">}</span><span class="token punctuation">{</span> |c| c| c| <span class="token punctuation">}</span>\n<span class="token function selector">\\hline</span>\ncell1 <span class="token punctuation">&amp;</span> cell2 <span class="token punctuation">&amp;</span> cell3 <span class="token function selector">\\\\</span> \n<span class="token function selector">\\hline</span>\ncell4 <span class="token punctuation">&amp;</span> cell5 <span class="token punctuation">&amp;</span> cell6 <span class="token function selector">\\\\</span>  \n<span class="token function selector">\\hline</span>\ncell7 <span class="token punctuation">&amp;</span> cell8 <span class="token punctuation">&amp;</span> cell9 <span class="token function selector">\\\\</span>\n<span class="token function selector">\\hline</span>\n<span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">tabular</span><span class="token punctuation">}</span>\n<span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">center</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>\\tabular</code> 环境变量表示创建表格。<code>{|c|c|c|}</code> 表示表格有 3 列，每一列都居中显示，每一列之间的分隔符是 <code>|</code> 。<code>c</code> 表示居中对齐，<code>l</code> 表示居左对齐，<code>r</code> 表示居右对齐。 <code>\\\\</code> 表示换行， <code>\\hline</code> 表示水平线。<code>\\center</code> 环境变量，表示列表居中对齐。</p>',12),ke=(0,s.Uk)("更多表格用法，请参考 "),he={href:"https://www.overleaf.com/learn/latex/Tables",target:"_blank",rel:"noopener noreferrer"},me=(0,s.Uk)("Tables"),ge=(0,s.Uk)(" 。"),fe=(0,s.uE)('<h4 id="常见宏包" tabindex="-1"><a class="header-anchor" href="#常见宏包" aria-hidden="true">#</a> 常见宏包</h4><p>数学 - <code>amsmath</code></p><p>图片- <code>graphicx</code></p><p>颜色 - <code>xcolor</code></p><p>表格 - <code>array</code></p><p>中文 - <code>ctex</code> 或 <code>xecjk</code></p><p>字体 - <code>fontspec</code></p><h4 id="支持中文" tabindex="-1"><a class="header-anchor" href="#支持中文" aria-hidden="true">#</a> 支持中文</h4><h5 id="_1-texshop-支持中文" tabindex="-1"><a class="header-anchor" href="#_1-texshop-支持中文" aria-hidden="true">#</a> 1. TeXShop 支持中文</h5><p><code>TexShow</code> 偏好设置 --&gt; <code>编码</code> --&gt; <code>Unicode(UTF-8)</code></p><p><code>排版</code> --&gt; <code> XeLaTeX</code></p><p>引入 <code>ctex</code> 包</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code><span class="token function selector">\\documentclass</span><span class="token punctuation">{</span><span class="token keyword">article</span><span class="token punctuation">}</span>\n<span class="token function selector">\\usepackage</span><span class="token punctuation">{</span><span class="token keyword">ctex</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>或者使用 <code>ctexart</code> 文档格式</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code><span class="token function selector">\\documentclass</span><span class="token punctuation">{</span><span class="token keyword">ctexart</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="_2-编译-tex-文件" tabindex="-1"><a class="header-anchor" href="#_2-编译-tex-文件" aria-hidden="true">#</a> 2. 编译 <code>tex</code> 文件</h5><p>引入 <code>ctex</code> 包，使用如下命令编译 <code>tex</code> 文件。</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code>xelatex xxx.tex\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h4>',19),xe={href:"https://www.overleaf.com/learn/Learn_LaTeX_in_30_minutes",target:"_blank",rel:"noopener noreferrer"},we=(0,s.Uk)("Lear LaTeX in 30 minutes"),_e={href:"https://www.overleaf.com/learn/latex/Chinese",target:"_blank",rel:"noopener noreferrer"},ve=(0,s.Uk)("Support Chinese"),Ue={},ye=(0,a(3744).Z)(Ue,[["render",function(e,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[c,(0,s._)("blockquote",null,[(0,s._)("p",null,[t,p,o,l,(0,s._)("a",r,[i,(0,s.Wm)(a)]),d,(0,s._)("a",u,[b,(0,s.Wm)(a)]),k,(0,s._)("a",h,[m,(0,s.Wm)(a)]),(0,s._)("a",g,[f,(0,s.Wm)(a)]),x,(0,s._)("a",w,[_,(0,s.Wm)(a)]),v,(0,s._)("a",U,[y,(0,s.Wm)(a)]),E,(0,s._)("a",T,[A,(0,s.Wm)(a)]),X]),W]),(0,s._)("p",null,[q,(0,s._)("a",z,[L,(0,s.Wm)(a)]),B,C,$,F,D]),I,(0,s._)("p",null,[M,S,j,(0,s._)("a",Z,[H,(0,s.Wm)(a)]),N,O,P,R,Y,G,J,K,Q]),(0,s._)("p",null,[V,(0,s._)("a",ee,[ne,(0,s.Wm)(a)]),ae]),se,(0,s._)("p",null,[ce,(0,s._)("a",te,[pe,(0,s.Wm)(a)]),oe]),le,(0,s._)("p",null,[re,(0,s._)("a",ie,[de,(0,s.Wm)(a)]),ue]),be,(0,s._)("p",null,[ke,(0,s._)("a",he,[me,(0,s.Wm)(a)]),ge]),fe,(0,s._)("p",null,[(0,s._)("a",xe,[we,(0,s.Wm)(a)])]),(0,s._)("p",null,[(0,s._)("a",_e,[ve,(0,s.Wm)(a)])])],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[a,s]of n)e[a]=s;return e}}}]);