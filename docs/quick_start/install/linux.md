---
title: quick_start/install/linux
description:
published: true
date: 2024-08-18T06:57:15.138Z
editor: markdown
dateCreated: 2024-08-18T06:40:11.576Z
---

# quick_start/install/linux

众所周知.NET8 是一个跨平台的语言，我们的软件也支持 Linux 系统

# 步骤

1. 安装.net8 运行时和 web 运行时
2. 下载 Linux 版本
3. 启动!!!!

> [!TIP] 请注意
> 我们建议你使用 screen 命令来保证程序在您断开连接之后也能正常运行  
> 或者使用[docker](/quick_start/install/docker)安装

# 1.安装.NET8 运行时和 Web 运行时

```
sudo apt-get upgrade
sudo apt-get install -y dotnet-runtime-8.0
sudo apt-get install -y aspnetcore-runtime-8.0
```

参考: [微软: 在 Linux 上安装 .NET](https://learn.microsoft.com/zh-cn/dotnet/core/install/linux)

# 2.下载 Linux 版本并解压

[点击我跳转](/down)# 3.启动!

```
./EasyBot
```
