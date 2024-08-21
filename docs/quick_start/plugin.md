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

> 演示用的服务器是 1.20.4-Paper
> 想知道是否支持你的服务器? [请点击我去查看](/vies)
> {.is-info}

![imag25e.webp](/imag25e.webp)

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

#### 2.打开配置文件![image11.webp](/image11.webp)

#### 3.配置地址和身份标识

你可以通过服务器列表中的"查看标识"来获取服务器的身份标识
![im88age.webp](/im88age.webp)
打开文件后修改以下信息:

```js
service:
  # 运行EasyBot主程序电脑的地址
  host: "localhost"
  # EasyBot主程序启动的端口
  port: 5001
  # 身份标识,请在服务器生成
  # 身份标识请使用双引号包裹
  token: "这里修改为你的身份标识"
```

## 关于服务器地址

如果你的服务器和机器人主程序在同一台电脑,则无需修改

> 如果你机器人主程序和服务器恰好不在一台电脑，请将 IP 设置为运行 EasyBot 主程序电脑的地址
> 打开 CMD 输入 curl ipinfo.io 即可获取自己的 IP
> {.is-info}

## 验证

启动服务器后观察日志,出现这两行表示成功
![imag95e.webp](/imag95e.webp)
此时可以在主程序测试通讯
![im78age.webp](/im78age.webp)

## 出现错误了怎么办?

别急,先看服务器报错信息,寻找报错信息,找不到就查机器人主程序日志
或加群获取帮助 [点击我去加群](https://qm.qq.com/q/4S1SohXFss)

## 确认 Token 正确但提示 Token 错误

检查你的配置 config.yml 确保 token 字段被双引号包裹！！
![im44e.webp](/im44e.webp)
