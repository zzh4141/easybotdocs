# 兼容器连接到LLOneBot

[TOC]::

## 1.安装LiteLoaderQQNT

> [!DANGER] 前置条件
> 安装前请确认你的环境符合要求
> - WindowsQQNT 版本 `~9.9.15-26909`
> - Max/Linux QQNT 版本 `~3.2.7_240428`

> [!TIP]
> **LiteLoaderQQNT**是一个 QQNT 插件加载器    
> 可以让你在 QQNT 中运行各种插件

> [!TIP] 自动安装器
> 从Github下载对应你的系统的安装程序,打开提示安装成功即可       
> 👉👉👉[点我下载](https://github.com/Mzdyl/LiteLoaderQQNT_Install/releases/latest)👈👈👈

### 1.1 打开NTQQ确认一下

![](/attachments/教程__兼容器连接到LLOneBot_001.png)

![](/attachments/教程__兼容器连接到LLOneBot_002.png)

![](/attachments/教程__兼容器连接到LLOneBot_003.png)

## 2.安装LLOneBot插件

你说得对, 但是LLOneBot是一款.. 后面全忘了

前往Github下载最新版的Release

<https://github.com/LLOneBot/LLOneBot/releases>![](/attachments/教程__兼容器连接到LLOneBot_004.png)

### 2.1 打开LiteLoaderQQNT插件路径

打开QQ设置,LiteloaderQQNT

![](/attachments/教程__兼容器连接到LLOneBot_005.png)

打开后,进入Plugins目录

![](/attachments/教程__兼容器连接到LLOneBot_006.png)

新建一个文件夹,叫LLOneBot

![](/attachments/教程__兼容器连接到LLOneBot_007.png)

进入目录

### 2.2 将LLOneBot解压到此目录

![](/attachments/教程__兼容器连接到LLOneBot_008.png)

**全部解压**

### 2.3 重启QQ

![](/attachments/教程__兼容器连接到LLOneBot_009.png)

重新打开QQ即可发现多了个LLOneBot

![](/attachments/教程__兼容器连接到LLOneBot_010.png)

## 3.设置正向WebSocket地址

你可以关闭一些无用的设置(如果你知道你在做什么的的话)

![](/attachments/教程__兼容器连接到LLOneBot_011.png)

## 4.在主程序设置

进入 机器人管理 -> 设配器管理 -> 连接设置

![](/attachments/教程__兼容器连接到LLOneBot_012.png)

正向WebSocket监听端口(哈哈 应该是监听地址 不过无所谓了) 设置Ws地址:LLOnebot正向端口:

ws://localhost:3001/

AccessToken设置为LLOnebot设置的值即可,我的LLOnebot设置如下:

![](/attachments/教程__兼容器连接到LLOneBot_013.png)

我的主程序就这样设置

![](/attachments/教程__兼容器连接到LLOneBot_014.png)

![](/attachments/教程__兼容器连接到LLOneBot_015.png)

## ok

至此你已完成LLOnebot的连接,以后启动主程序手动去连接就好了

