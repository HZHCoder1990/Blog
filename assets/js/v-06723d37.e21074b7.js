"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2014],{3962:(e,n,s)=>{s.r(n),s.d(n,{data:()=>i});const i={key:"v-06723d37",path:"/shell/vim.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"shell/vim.md",git:{updatedTime:1633942617e3,contributors:[{name:"peak",email:"peak@jiemogame.com",commits:1}]}}},6832:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});const i=(0,s(6252).uE)('<h4 id="区块选择" tabindex="-1"><a class="header-anchor" href="#区块选择" aria-hidden="true">#</a> 区块选择</h4><p>原始文件 <code>test</code> ,有4行，每行长度不一致</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2.3.4.5\n12.3.4.6\n99.3.44.55\n4.5.5.3\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="行首插入字符串" tabindex="-1"><a class="header-anchor" href="#行首插入字符串" aria-hidden="true">#</a> 行首插入字符串</h5><p>在每行前面插入字符串 <code>insert-</code>。</p><p>步骤如下:</p><ol><li>在终端输入 <code>vim test</code> ，进来会选中第一行第一列;</li><li>按下 <code>control</code> + <code>v</code> ，进入区块编辑模式;</li><li>按下 <code>shift</code> + <code>G</code> ，跳到最后一行第一列;</li><li>按下 <code>shift</code> + <code>I</code> ，表示在行首插入；</li><li>输入 <code>insert-</code> ， 需要插入的文本;</li><li>按下 <code>esc</code> , 退出区块选择模式.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>insert-2.3.4.5\ninsert-12.3.4.6\ninsert-99.3.44.55\ninsert-4.5.5.3\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="行尾插入字符串" tabindex="-1"><a class="header-anchor" href="#行尾插入字符串" aria-hidden="true">#</a> 行尾插入字符串</h5><p>在每行后面插入字符串 <code>insert-end.</code></p><p>步骤如下:</p><ol><li>在终端输入 <code>vim test</code> ，进来会选中第一行第一列;</li><li>按下 <code>control</code> + <code>v</code> ，进入区块编辑模式;</li><li>按下 <code>shift</code> + <code>G</code> ，跳到最后一行第一列;</li><li>按下 <code>shift</code> + <code>$</code> ，选中所有内容;</li><li>按下 <code>shift</code> + <code>A</code> ，表示在行尾插入；</li><li>输入 <code>insert-end.</code> ， 需要插入的文本;</li><li>按下 <code>esc</code> , 退出区块选择模式.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>insert-2.3.4.5insert-end.\ninsert-12.3.4.6insert-end.\ninsert-99.3.44.55insert-end.\ninsert-4.5.5.3insert-end.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',13),a={},d=(0,s(3744).Z)(a,[["render",function(e,n){return i}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[s,i]of n)e[s]=i;return e}}}]);