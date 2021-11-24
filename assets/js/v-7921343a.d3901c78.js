"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5298],{6269:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-7921343a",path:"/shell/tr.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"shell/tr.md",git:{updatedTime:1633942617e3,contributors:[{name:"peak",email:"peak@jiemogame.com",commits:1}]}}},1998:(s,n,a)=>{a.r(n),a.d(n,{default:()=>l});const e=(0,a(6252).uE)('<p><code>tr</code> 用于替换或者删除字符串。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>The tr utility copies the standard input to the standard output with substitution or deletion of selected characters.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tr</span> <span class="token punctuation">[</span>-cdst<span class="token punctuation">]</span> <span class="token punctuation">[</span>第一字符集<span class="token punctuation">]</span><span class="token punctuation">[</span>第二字符集<span class="token punctuation">]</span>  \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h5><ul><li><p>-c, --complement：反选设定字符。也就是符合 SET1 的部份不做处理，不符合的剩余部份才进行转换</p></li><li><p>-d, --delete：删除指令字符</p></li><li><p>-s, --squeeze-repeats：缩减连续重复的字符成指定的单个字符</p></li><li><p>-t, --truncate-set1：削减 SET1 指定范围，使之与 SET2 设定长度相等</p></li><li><p>字符集1：指定要转换或删除的原字符集。当执行转换操作时，必须使用参数“字符集2”指定转换的目标字符集。但执行删除操作时，不需要参数“字符集2”；</p></li><li><p>字符集2：指定要转换成的目标字符集。</p></li></ul><h5 id="字符类" tabindex="-1"><a class="header-anchor" href="#字符类" aria-hidden="true">#</a> 字符类</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[:alnum:]：字母和数字\n[:alpha:]：字母\n[:cntrl:]：控制（非打印）字符\n[:digit:]：数字\n[:graph:]：图形字符\n[:lower:]：小写字母\n[:print:]：可打印字符\n[:punct:]：标点符号\n[:space:]：空白字符\n[:upper:]：大写字母\n[:xdigit:]：十六进制字符\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h5 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h5><ol><li>将输入字符由小写转换大写</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;first blood&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;a-z&#39;</span> <span class="token string">&#39;A-Z&#39;</span>\nFIRST BLOOD\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>或者使用字符集 <code>[:lower:]</code> <code>[:upper:]</code> 来转换大小写</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;first blood&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span> <span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span>\nFIRST BLOOD\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>删除</li></ol><p>删除所有的数字：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;first 123 blood 456&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> -d <span class="token string">&quot;0-9&quot;</span>\nfirst  blood \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>使用字符集 <code>[:digit:]</code> 删除所有的数字</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;first 123 blood 456&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> -d <span class="token punctuation">[</span>:digit:<span class="token punctuation">]</span>\nfirst  blood \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>补集</li></ol><p>把除数字，空格，换行符之外的所有字符串，都替换成 <code>&amp;</code> ：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;first 123 blood 456&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> -c <span class="token string">&#39;0-9 \\n&#39;</span> <span class="token string">&#39;&amp;&#39;</span>\n<span class="token operator">&amp;&amp;</span><span class="token operator">&amp;&amp;</span><span class="token operator">&amp;</span> <span class="token number">123</span> <span class="token operator">&amp;&amp;</span><span class="token operator">&amp;&amp;</span><span class="token operator">&amp;</span> <span class="token number">456</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>删除除数字，空格，换行符之外的所有字符串：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;first 123 blood 456&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> -dc <span class="token string">&#39;0-9 \\n&#39;</span>\n <span class="token number">123</span>  <span class="token number">456</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4"><li>压缩</li></ol><p>压缩重复的字符串 <code>s</code> 和 数字 <code>2</code> 。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;he&#39;sssss age issssss 12222222222.&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> -s <span class="token string">&#39;s2&#39;</span>\nhe&#39;s age is <span class="token number">12</span>.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',26),p={},l=(0,a(3744).Z)(p,[["render",function(s,n){return e}]])},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,e]of n)s[a]=e;return s}}}]);