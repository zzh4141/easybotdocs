// vitepress.config.js
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EasyBot wiki",
  description: "一个很棒的我的世界服务器互通机器人",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }
    ],
    sidebar: [
      {
        text: 'EasyBot介绍',
        items: [
          { text: 'EasyBot工作流程', link: '/woke' },
          { text: 'EasyBot下载地址', link: '/down' },
          { text: 'EasyBot支持的服务器', link: '/vies' }
        ]
      },
      {
        text: 'EasyBot安装',
        items: [
          { text: 'Docker+登陆框架', link: '/使用Docker来安装EasyBot主程序+QQ机器人框架' },
          { text: 'Liunx安装', link: '/在Linux上安装EasyBot主程序' },
          { text: 'Windows安装', link: '/ProgramInstallation' },
          { text: '机器人适配器管理', link: '/机器人适配器管理' },
          { text: '服务器插件安装', link: '/Plugins' }
        ]
      },
      {
        text: 'EasyBot功能',
        items: [
          { text: '消息同步', link: '/消息同步' },
          { text: '退群自动解绑和退群消息', link: '/退群自动解绑和退群消息' },
          { text: '群组管理', link: '/群组管理' },
          { text: '服务器列表', link: '/服务器列表' },
          { text: '绑定账号', link: '/绑定账号' },
          { text: '命令列表', link: '/命令列表' },
          { text: '远程命令', link: '/远程命令' }
        ]
      },
      {
        text: 'EasyBot小教程',
        items: [
          { text: '令牌登录', link: '/教程_令牌登录' },
          { text: '兼容器连接到LLOneBot', link: '/教程__兼容器连接到LLOneBot' },
          { text: '兼容器连接到Lagrange', link: '/教程__兼容器连接到Lagrange' },
          { text: '修改主程序端口', link: '/教程__修改主程序端口' },
          { text: '获取并启用群聊', link: '/教程__获取并启用群聊' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '崩溃以及常见问题解决方案', link: '/bug' },
          { text: 'PlaceholderApi变量', link: '/api' },
          { text: '赞助废物作者', link: '/money' }
        ] // 添加逗号来分隔项
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zzh4141/easybotwiki' }
    ]
  }
});