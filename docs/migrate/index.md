---
title: EasyBot 旧版本迁移教程
outline: [2,3]
---

# EasyBot 旧版本迁移教程

> [!WARNING] 此教程适用场景
> - `1.1.0`以下版本升级     
> - `1.9.0`以下插件升级

> [!DANGER] 注意事项
> - 升级后会影响数据库,届时将无法使用旧版主程序
> - 本次升级建议使用手动更新包

## 更新日志

> [!IMPORTANT] 请先看视频
> 建议您先观看教程，以了大概的步骤与版本的更新内容。

<iframe src="//player.bilibili.com/player.html?bvid=BV1jkHJeaE9U&high_quality=1&danmaku=1" allowfullscreen="allowfullscreen" width="100%" height="300px" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>

## 为何要更新？

> [!WARNING] 兼容性问题
> 插件因为兼容性问题非常难搞，1.8.0 以前的版本使用了一些与开发插件不太友好的库，导致与大多旧版或改版服务端冲突。

> [!WARNING] 性能问题
> 旧版本插件使用`GRPC`协议进行通信，这种协议速度慢且占内存，并且经常掉线，十分不稳定。

## 新版本解决了吗?

新版本不仅解决了兼容性问题，还解决了性能问题，并且使用`WebSocket`协议进行通信，速度更快，占用更少内存。

> [!DANGER] 1.9 以下的服务端兼容性问题
> 新版插件通过RCON调用命令执行功能  
> 众所周知: RCON是在1.9被引入的,所以插件的[命令执行]()功能不再支持1.9以下的服务端。
> 除了命令执行功能，其他功能都兼容1.9以下服务端。

## 升级软件

### 1.替换主程序

[下载](/down)1.2.0版本的主程序手动更新包,注意别下错了奥~

![下载](/migrate/imgs/c846c584637f4a9b6383f2f2668a168a.png)

下载后将更新包内的所有文件解压缩替换到`EasyBot`主程序目录下。

![下载](/migrate/imgs/Snipaste_2024-09-03_04-49-52.png)

### 2.迁移主程序配置文件

> [!IMPORTANT] 注意
> 如果你没有动过配置文件，则可以直接删除根目录下的`appsettings.json`文件,程序会创建默认配置。

1. 拷贝EasyBot根目录下的`appsettings.json`文件,保存到其他地方。    
2. 拷贝后删除EasyBot根目录下的`appsettings.json`文件。     
3. 删除后重启EasyBot主程序,等待主程序创建默认配置文件。

> [!IMPORTANT] 新版本配置变化
> ```json{5-7,}
> {
>   ...
>   "AllowedHosts": "*",
>   "ServerOptions": {
>     "Host": "127.0.0.1",                //WebSocket服务器地址
>     "Port": 26990,                      //WebSocket服务器端口
>     "HeartbeatInterval": "0.00:02:00"   //服务器心跳,格式: 天.小时:分:秒
>   },
>   "Kestrel": {
>     "Endpoints": {
>       "web_app": {
>         "Url": "http://localhost:5000", //面板地址
>         "Protocols": "Http1"            //别改就完事了
>       }
>     }
>   }
>   ...
> }
> 
> ```
> GRPC配置已删除，因为新版本不再使用GRPC协议。

之后你可以根据旧版本的配置文件，将配置迁移到新版本的配置文件。

至此主程序迁移完毕。

## 升级插件

### 1.备份旧版配置文件

将旧版插件替换为新版后,备份旧版的配置文件。

![IMG](/migrate/imgs/Snipaste_2024-09-03_05-18-00.png)

### 2.升级配置

![IMG](/migrate/imgs/Snipaste_2024-09-03_05-22-49.png)

<h1 style="color:red;">URL如何设置?</h1>

![IMG](/migrate/imgs/Snipaste_2024-09-03_05-27-18.png)

### OK

首次设置Token后需要重启服务器,之后的任何情况都可使用`/easybot reload`命令进行重载!