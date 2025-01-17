---
title: 使用 Docker 来安装 EasyBot 主程序 + QQ机器人框架
description:
published: true
date: 2024-08-18T06:54:36.360Z
editor: markdown
dateCreated: 2024-08-18T06:40:00.004Z
---

<script setup>
import GetPublicIP from '../../components/GetPublicIP.vue'
</script>


# 使用 Docker 来安装 EasyBot 主程序+QQ 机器人框架

> [!NOTE]
> 在此需要感谢“倒霉蛋花花”大佬为我们提供的 docker 镜像

> 注意，此教程仅适用于 Linux 上的 docker 如需在 windows 上使用 docker 请根据此教程的部分地方来进行改变    
> 此教程不推荐小白上手，如需上手，请确保您有一定的 Linux 基础 

### 1.我们将使用需要一键安装 docker 并更换源仓库进行加速

● 支持 Debian / Ubuntu / RHEL / CentOS / Fedora 等    

● 支持上述基于 Debian 与 Redhat 系的发行版和及其部分衍生版本，支持拥有相同底层核心的其它发行版    

使用此脚本请切换至 root 用户执行

```
bash <(curl -sSL https://cdn.jsdelivr.net/gh/SuperManito/LinuxMirrors@main/DockerInstallation.sh)
```

```
bash <(curl -sSL https://raw.githubusercontent.com/yangyzp/wikicc_collection/master/DockerInstallation.sh)
```

> [!WARNING]
> 两行脚本请选择任意一个使用如果不行再使用另一个，不得一起使用

**常见问题与解决方法：**

● 如果提示 则说明当前未安装 软件包

```shell
sudo yum install -y curl || sudo apt-get install -y curl    
```

### 2. Docker Compose 安装

### 方式一：直接下载安装

```shell
curl -L https://get.daocloud.io/docker/compose/releases/download/1.24.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

```shell
sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

注意，请根据您的服务器所处地区来选择使用哪一个安装脚本

### 方式二：使用 Python-pip 安装

##### 首先，安装 `python-pip`：

```shell
yum -y install epel-release
yum -y install python-pip
```

##### 然后，安装 `docker-compose`：

```shell
pip install docker-compose
docker-compose version
```

### 3.接下来使用 docker-compose 文件来部署 EasyBot

请注意这个镜像包含着 QQ 机器人框架所以你无需另外安装

> [!IMPORTANT]
> 如果你的服务器位于中国大陆内
> 可以查看这篇文章使用加速服务来拉取镜像
> [访问菜鸟教程](https://www.runoob.com/docker/docker-mirror-acceleration.html)

1.新建目录存放配置文件

```shell
mkdir /opt/EasyBot
cd /opt/EasyBot
```

2.请使用文件编辑器，新建一个名为 docker-compose.yml 纯文本文件，并填入下列信息

必须按需修改

```yml
version: '3'
services:
  easybot:
    image: xrcuor/easybot
    container_name: easybot
    environment:
      - ACCOUNT=123456 # 机器人qq
      - WS_ENABLE=true # 正向 WS
      - TOKEN=1234 # access_token，可以为空
      - WEBUI_TOKEN=wscc # 登录密钥，默认是自动生成的随机登录密码
      - SERVER_HOST=0.0.0.0 # WebSocket服务器地址
      - SERVER_PORT=26990 # WebSocket服务器端口
    restart: always
    volumes:
      - ./napcat/config:/app/napcat/config
      - ./napcat/qq:/root/.config/QQ
      - ./EasyBot:/data
    ports:
      - "6099:6099"
      - "5000:5000"
      - "26990:26990"

```

### 4.部署容器

确保你是在 /opt/EasyBot 目录中并且 docker-compose.yml 已经填入步骤三中的内容和保存

使用以下命令进行部署

```shell
docker-compose up
```

```shell
docker-compose up -d
```

> [!WARNING]
> 请根据您的需求来选择使用哪一条命令，不能同时使用
>
> 注意，如果你想直接在控制台上扫码登录 QQ，请使用前台部署
>
> 因为在返回的日志中会有 QQ 的扫码登录，如果无法扫码请看下一步

如果你在使用前台部署发现出现错误，请加入 QQ 群反馈

### 5.通过网页登录 QQ

1.确保你的服务器地址

> [!WARNING]
> 如果你是本机部署的话请访问 127.0.0.1:6099/webui/
> 如果你和服务器处于同一个内网，请访问:服务器内网 ip:6099/webui/
> 如果你的服务器位于公网，且你们不在同一个内网，请使用:服务器公网 ip:6099/webui/

<GetPublicIP/>

2.接下来您将会来到一个输入密码界面

如果你没有改动过 docker-compose.yml 文件中的登陆密钥

> 默认登录密码为 wscc
> {.is-info}

如您改改动过

`请前往这个文件 /opt/EasyBot/napcat/config/webui.json`

在其中找到 token，这个 token 就是你的登陆密钥

```json
{
  "host": "0.0.0.0", // WebUI 监听地址
  "port": 6099, // WebUI 端口
  "prefix": "", // WebUI 工作前缀，此项功能将在进阶配置中解释
  "token": "xxxx", //登录密钥，默认是自动生成的随机登录密码
  "loginRate": 3 //每分钟登录次数限制
}
```

3.登录进去后请使用手机扫码并完成登录，成功之后您将会来到一个配置页面

> [!IMPORTANT]
> 请使用手机对着屏幕扫码，不能截图扫码，否则会无法登陆

![](/attachments/使用Docker来安装EasyBot主程序+QQ机器人框架_001.png)请确保启动了 ws 正向请求

并且新信息的上报模式为消息段

### 6.登录 EasyBot

> [!WARNING]
> 如果你是本机部署的话请访问 127.0.0.1:5000
> 如果你和服务器处于同一个内网，请访问:服务器内网 ip:5000
> 如果你的服务器位于公网，且你们不在同一个内网，请使用:服务器公网 ip:5000

![](/attachments/使用Docker来安装EasyBot主程序+QQ机器人框架_002.png)请选择侧边栏的机器人管理的 2 级菜单中的适配器管理，并选择连接设置

![](/attachments/使用Docker来安装EasyBot主程序+QQ机器人框架_003.png)确保正确 ws 连接端口是正确和连接密钥

如果您不知道要到哪，请打开我们在第五步是使用网页登录 QQ 的那个网页

关于配置的都写在里面了

配置完成之后请点击上方的链接

> [!NOTE]
> 如连接成功了就已经代表大公告成

如果需要更多设置，请查看其他文章
