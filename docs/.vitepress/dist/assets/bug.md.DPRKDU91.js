import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.C94oF1kp.js";const x=JSON.parse('{"title":"崩溃以及常见问题解决方案","description":"崩溃以及常见问题解决方案","frontmatter":{"title":"崩溃以及常见问题解决方案","description":"崩溃以及常见问题解决方案","published":true,"date":"2024-08-18T05:47:04.029Z","tags":"崩溃以及常见问题解决方案","editor":"markdown","dateCreated":"2024-08-18T05:47:00.381Z"},"headers":[],"relativePath":"bug.md","filePath":"bug.md"}'),e={name:"bug.md"},t=p(`<h1 id="崩溃以及常见问题解决方案" tabindex="-1">崩溃以及常见问题解决方案 <a class="header-anchor" href="#崩溃以及常见问题解决方案" aria-label="Permalink to &quot;崩溃以及常见问题解决方案&quot;">​</a></h1><h2 id="程序经常崩溃-莫名其妙关闭怎么办" tabindex="-1">程序经常崩溃,莫名其妙关闭怎么办? <a class="header-anchor" href="#程序经常崩溃-莫名其妙关闭怎么办" aria-label="Permalink to &quot;程序经常崩溃,莫名其妙关闭怎么办?&quot;">​</a></h2><p>这是因为网络问题不稳定导致的程序崩溃,使用进程守护软件即可解决</p><p>唯一的缺点是,无法使用自动更新器更新程序,因为自动更新器更新时需要程序关闭,但进程守护会强制程序启动</p><p>或者你也可以尝试使用脚本</p><h3 id="widnows自动重启脚本" tabindex="-1">Widnows自动重启脚本 <a class="header-anchor" href="#widnows自动重启脚本" aria-label="Permalink to &quot;Widnows自动重启脚本&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 定义启动 Easybot.exe 的函数</span></span>
<span class="line"><span>function Start-Easybot {</span></span>
<span class="line"><span>    # 启动 Easybot.exe</span></span>
<span class="line"><span>    $process = Start-Process -FilePath &quot;.\\Easybot.exe&quot; -PassThru</span></span>
<span class="line"><span>    Write-Host &quot;Easybot.exe 已启动: $($process.Id)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 等待 Easybot.exe 进程结束</span></span>
<span class="line"><span>    $process.WaitForExit()</span></span>
<span class="line"><span>    Write-Host &quot;Easybot.exe $($process.Id) 已退出!&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 循环启动 Easybot.exe</span></span>
<span class="line"><span>while ($true) {</span></span>
<span class="line"><span>    Start-Easybot</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>将这个脚本保存到easybot.exe的目录下,重命名为.ps1 右键,使用Posershell运行</p><h2 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 定义启动 Easybot.exe 的函数</span></span>
<span class="line"><span>function start_easybot {</span></span>
<span class="line"><span>    # 启动 Easybot.exe</span></span>
<span class="line"><span>    ./Easybot.exe &amp;</span></span>
<span class="line"><span>    local pid=$!</span></span>
<span class="line"><span>    echo &quot;Easybot.exe 已启动: $pid&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 等待 Easybot.exe 进程结束</span></span>
<span class="line"><span>    wait $pid</span></span>
<span class="line"><span>    echo &quot;Easybot.exe $pid 已退出!&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 循环启动 Easybot.exe</span></span>
<span class="line"><span>while true; do</span></span>
<span class="line"><span>    start_easybot</span></span>
<span class="line"><span>done</span></span></code></pre></div>`,10),l=[t];function i(o,c,r,d,h,u){return n(),a("div",null,l)}const _=s(e,[["render",i]]);export{x as __pageData,_ as default};
