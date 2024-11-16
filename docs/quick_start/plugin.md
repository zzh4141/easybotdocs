---
title: 安装EasyBot服务器插件
description: 安装EasyBot服务器插件
published: true
date: 2024-08-17T12:49:04.442Z
tags: easybot服务器插件
editor: markdown
dateCreated: 2024-08-17T12:33:04.385Z
---

# 安装 EasyBot 服务器插件

1. 前往下载最新版本的服务器插件
2. 将插件添加到插件列表中
3. 在机器人服务器列表中添加一个服务器并且设置身份标识
4. 在服务器中配置 EasyBot 主程序地址以及身份标识

## 1.下载

[点我去下载页面](/down)

## 2.将插件添加到支持的服务器中

> [!IMPORTANT] 注意
> 演示用的服务器是 1.12.2 - CatServer   
> 想知道是否支持你的服务器? [请点击我去查看](/vies)
> {.is-info}

![img](/quick_start/img/Snipaste_2024-09-03_06-24-36.png)

## 3.在机器人服务器列表中添加一个服务器并设置身份标识

1. 打开主程序
2. 进入服务器管理 -> 服务器列表
3. 点击"+添加"并且设置名字和标识令牌即可
   ![i8mage.webp](/i8mage.webp)![i77mage.webp](/i77mage.webp)![ima44ge.webp](/ima44ge.webp)

## 4.在服务器中配置 EasyBot 主程序地址以及身份标识

1. 启动装载了插件的服务器(生成配置文件)
2. 打开插件配置文件 ./plugins/EasyBot/config.yml
3. 配置地址和身份标识

#### 1.启动服务器

> [!IMPORTANT] 注意
> 首次启动服务器会提示未设置Token的报错     
> 首次配置好后需要重启服务器    
> 后续更改配置可使用`/easybot reload`

#### 2.打开配置文件

> 打开EasyBot生成的配置文件`./plugins/EasyBot/config.yml`

#### 3.配置地址和身份标识

你可以通过服务器列表中的"查看标识"来获取服务器的身份标识
![im88age.webp](/im88age.webp)
打开文件后修改以下信息:

```yml {3}
...
service:
  token: "设置为你的Token"
...
```

## 关于服务器地址

![IMG](/migrate/imgs/Snipaste_2024-09-03_05-27-18.png)

## 验证

启动服务器后观察日志，出现`身份验证成功! 服务器名: xxx`表示插件正常工作!
![IMG](/quick_start/img/连接测试_服务器.png)
此时可以在主程序测试通讯
![IMG](/quick_start/img/连接测试_软件.png)

## 出现错误了怎么办?

别急，先看服务器报错信息，寻找报错信息，找不到就查机器人主程序日志
或加群获取帮助 [点击我去加群](https://qm.qq.com/q/4S1SohXFss)

## 确认 Token 正确但提示 Token 错误

检查你的配置 config.yml 确保 token 字段被双引号包裹！！
![im44e.webp](/im44e.webp)
