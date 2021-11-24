"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8862],{2591:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-6d88c7b6",path:"/iOS/install-ipa-from-safari.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"iOS/install-ipa-from-safari.md",git:{updatedTime:1633942617e3,contributors:[{name:"peak",email:"peak@jiemogame.com",commits:1}]}}},1643:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});const t=(0,a(6252).uE)('<h5 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h5><ol><li>准备 plist 文件(文件名称无所谓)， 文件内容如下：</li></ol><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>\n<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">plist</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//Apple//DTD PLIST 1.0//EN&quot;</span> <span class="token string">&quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plist</span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>items<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>array</span><span class="token punctuation">&gt;</span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>assets<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>array</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>kind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>software-package<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>url<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>ipa下载地址<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>kind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>display-image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>url<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>icon地址<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>kind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>full-size-image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>url<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>icon地址<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>array</span><span class="token punctuation">&gt;</span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>metadata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>bundle-identifier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>包名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>bundle-version<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>版本号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>kind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>software<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>应用名称<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>array</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plist</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>该 plist 文件必须放在 https 服务器下， 其中：</p><p><code>ipa下载地址</code> 可以放在 <code>https</code> 或者 <code>http</code> 服务器下</p><p><code>icon地址</code> 可以放在 <code>https</code> 或者 <code>http</code> 服务器下</p><ol start="2"><li>访问 <code>itms-services://?action=download-manifest&amp;url=&lt;plist下载地址&gt;</code> 进行下载</li></ol>',7),p={},c=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,t]of s)n[a]=t;return n}}}]);