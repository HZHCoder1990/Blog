"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3264],{3438:(s,e,a)=>{a.r(e),a.d(e,{data:()=>n});const n={key:"v-23418661",path:"/others/svn.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"others/svn.md",git:{updatedTime:1633949964e3,contributors:[{name:"peak",email:"peak@jiemogame.com",commits:1}]}}},1571:(s,e,a)=>{a.r(e),a.d(e,{default:()=>i});const n=(0,a(6252).uE)('<p>SVN 常用命令总结：</p><h5 id="检出" tabindex="-1"><a class="header-anchor" href="#检出" aria-hidden="true">#</a> 检出</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>svn checkout <span class="token operator">&lt;</span>project-path<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="添加" tabindex="-1"><a class="header-anchor" href="#添加" aria-hidden="true">#</a> 添加</h5><ul><li>添加单个文件</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>svn <span class="token function">add</span> <span class="token operator">&lt;</span>file-path<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>添加所有文件</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>svn <span class="token function">add</span> <span class="token punctuation">\\</span><span class="token variable"><span class="token variable">`</span>svn st <span class="token operator">|</span> <span class="token function">grep</span> ? <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token punctuation">\\</span><span class="token variable">`</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="提交" tabindex="-1"><a class="header-anchor" href="#提交" aria-hidden="true">#</a> 提交</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>svn commit -m <span class="token string">&quot;add some file&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>svn update\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>svn delete <span class="token operator">&lt;</span>file-path<span class="token operator">&gt;</span> -m <span class="token string">&quot;delete a file&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="查看文件状态" tabindex="-1"><a class="header-anchor" href="#查看文件状态" aria-hidden="true">#</a> 查看文件状态</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>svn status\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>文件状态列表</strong></p><ul><li>A -&gt; 新增</li><li>C -&gt; 冲突问阿金</li><li>D -&gt; 删除文件</li><li>M -&gt; 修改</li><li>? -&gt; 不在版本控制范围内</li><li>U -&gt; 服务器更新</li><li>R -&gt; 服务器替换</li><li>i -&gt; 忽略文件</li></ul><h5 id="文件撤销" tabindex="-1"><a class="header-anchor" href="#文件撤销" aria-hidden="true">#</a> 文件撤销</h5><blockquote><ol><li>改动没有被提交</li></ol></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>svn revert <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> something\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>其中something可以是（目录或文件的）相对路径也可以是绝对路径;</li><li>当something为单个文件时，直接<code>svn revert something</code>就行了；</li><li>当something为目录时，需要加上参数-R(Recursive,递归)，否则只会将something这个目录的改动。</li></ul><blockquote><ol start="2"><li>改动已经提交</li></ol></blockquote><ol><li>保证我们拿到的是最新代码</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>svn update\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>假设最新版本号是28。</p><ol start="2"><li>然后找出要回滚的确切版本号</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>svn log <span class="token punctuation">[</span>something<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>假设根据<code>svn log</code>日志查出要回滚的版本号是25，此处的something可以是文件、目录或整个项目</p><p>如果想要更详细的了解情况，可以使用<code>svn diff -r 28:25 [something]</code></p><ol start="3"><li>回滚到版本号25：</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>svn merge -r <span class="token number">28</span>:25 something\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>为了保险起见，再次确认回滚的结果：<code>svn diff [something]</code> 发现正确无误，提交。</p><blockquote><p>4、提交回滚</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>svn commit -m <span class="token string">&quot;Revert revision from r28 to r25,because of ..&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="设置忽略文件" tabindex="-1"><a class="header-anchor" href="#设置忽略文件" aria-hidden="true">#</a> 设置忽略文件</h5><blockquote><ol><li>用户目录下打开 <code>.subversion/config</code> 文件</li></ol></blockquote><blockquote><ol start="2"><li><code>global-ignores</code> 字段取消注释， 并添加需要忽略的文件</li></ol></blockquote>',38),l={},i=(0,a(3744).Z)(l,[["render",function(s,e){return n}]])},3744:(s,e)=>{e.Z=(s,e)=>{for(const[a,n]of e)s[a]=n;return s}}}]);