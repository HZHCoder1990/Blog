"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9105],{4907:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-2a34392c",path:"/data-structure/RC4-C++&Python.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"data-structure/RC4-C++&Python.md",git:{updatedTime:1633942617e3,contributors:[{name:"peak",email:"peak@jiemogame.com",commits:1}]}}},9648:(n,s,e)=>{e.r(s),e.d(s,{default:()=>r});const a=(0,e(6252).uE)('<p>最近做日志模块的工作，有一个需求是需要把日志加密写进文件，然后读取文件的时候再解密。所以这个加解密方式就选择了RC4。</p><p>百度百科了一下RC4，介绍如下：</p><blockquote><p>RC4加密算法是大名鼎鼎的RSA三人组中的头号人物Ronald Rivest在1987年设计的密钥长度可变的流加密算法簇。 之所以称其为簇，是由于其核心部分的S-box长度可为任意，但一般为256字节。 该算法的速度可以达到DES加密的10倍左右，且具有很高级别的非线性。RC4起初是用于保护商业机密的。 但是在1994年9月，它的算法被发布在互联网上，也就不再有什么商业机密了。RC4也被叫做ARC4（Alleged RC4——所谓的RC4），因为RSA从来就没有正式发布过这个算法。</p></blockquote><p><strong>RC4 算法原理分为两步：初始化算法(KSA) 和 伪随机子密码生成算法(PRGA)两大部分。</strong></p><p>C++ 实现如下：</p><p>rc4.h 文件</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class RC4\n{\n\npublic:\n    RC4();\n    \n    void rc4_init(unsigned char *key, unsigned long Len);\n    \n    // 加/解 密\n    void do_crypt(unsigned char *Data, unsigned long Len);\n    \nprivate:\n   \n    int m_box[256]; // 对称加密中的置换盒 S盒\n    int m_index_i;\n    int m_index_j;\n};\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>rc4.cpp 文件</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>RC4::RC4()\n{\n    m_index_i = 0;\n    m_index_j = 0;\n}\n\n// 初始化算法\nvoid RC4::rc4_init(unsigned char *key, unsigned long Len)\n{\n    if (key == NULL || Len == 0)\n    {\n        printf(&quot;rc4 key or len is 0, return! &quot;);\n        return ;\n    }\n    \n    // for循环将0到255的互不重复的元素装入S盒\n    for (int i = 0; i &lt; 256 ; i++) {\n        m_box[i] = i;\n    }\n    \n    // for循环根据密钥打乱S盒\n    int j = 0;\n    unsigned char tmp;\n    for (int i = 0; i &lt; 256; i++)\n    {\n        j = ( j + m_box[i] + key[i % Len] ) % 256;\n        \n        tmp = m_box[i];\n        m_box[i] = m_box[j]; //交换m_box[i]和m_box[j]\n        m_box[j] = tmp;\n    }\n}\n    \nvoid RC4::do_crypt(unsigned char *Data, unsigned long Len)\n{\n    // 每收到一个字节，就进行while循环。通过一定的算法（(a),(b)）定位S盒中的一个元素，并与输入字节异或，得到k。循环中还改变了S盒（(c)）。如果输入的是明文，输出的就是密文；如果输入的是密文，输出的就是明文。\n    unsigned char tmp;\n    for(unsigned long k = 0 ; k &lt; Len ; k++)\n    {\n        m_index_i = (m_index_i + 1) % 256;    // a\n        m_index_j = (m_index_j + m_box[m_index_i] ) % 256; // b\n        \n        tmp = m_box[m_index_i];\n        m_box[m_index_i] = m_box[m_index_j]; //交换m_box[x]和m_box[y]\n        m_box[m_index_j] = tmp;\n        \n        // 生成伪随机数\n        int r = ( m_box[m_index_i] + m_box[m_index_j] ) % 256;\n        Data[k] ^= m_box[r];\n    }\n    \n}\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p>Python 实现方式如下：</p><p>rc4.py 文件</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># coding=utf-8\n\nclass RC4:\n\n    def __init__(self,public_key = None):\n        if not public_key:\n            public_key = &#39;none_public_key&#39;\n        self.public_key = public_key\n        self.index_i = 0;\n        self.index_j = 0;\n        self._init_box()\n \n    def _init_box(self):\n        &quot;&quot;&quot;\n        初始化 置换盒\n        &quot;&quot;&quot;\n\n        self.Box = range(256)\n        key_length = len(self.public_key)\n        j = 0\n        for i in range(256):\n            index = ord(self.public_key[(i % key_length)])\n            j = (j + self.Box[i] + index ) % 256\n            self.Box[i],self.Box[j] = self.Box[j],self.Box[i]\n\n    def do_crypt(self,string):\n        &quot;&quot;&quot;\n        加密/解密\n        string : 待加/解密的字符串\n        &quot;&quot;&quot;\n\n        out = []\n        for s in string:\n            self.index_i = (self.index_i + 1) % 256\n            self.index_j = (self.index_j + self.Box[self.index_i]) % 256\n            self.Box[self.index_i], self.Box[self.index_j] = self.Box[self.index_j],  self.Box[self.index_i]\n\n            r = (self.Box[self.index_i] + self.Box[self.index_j]) % 256\n            R = self.Box[r] # 生成伪随机数\n            out.append(chr(ord(s) ^ R))\n\n        return &#39;&#39;.join(out)\n        \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h4 id="遇到的坑" tabindex="-1"><a class="header-anchor" href="#遇到的坑" aria-hidden="true">#</a> 遇到的坑</h4><p>网上查了很多资料，不少人给出了rc4算法的实现，因为客户端会一直的写数据到文件中去，所以在RC4 初始化之后， 会连续多次调用 <strong>do_crypt</strong> 这个方法，最初遇到的坑是：C++ 加密之后，使用Python 解密的时候，往往只能够解密出最开始的一句，之后的就是乱码了。解决办法是： 把m_index_i 和 m_index_j 作为成员变量，这样连续多次调用之后，对称加密中的置换盒 S盒 中的数据就会不停的滚动， 解密才能全部完成。</p>',14),l={},r=(0,e(3744).Z)(l,[["render",function(n,s){return a}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[e,a]of s)n[e]=a;return n}}}]);