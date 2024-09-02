// vitepress.config.js
import { defineConfig } from "vitepress";
import mdItCustomAttrs from "markdown-it-custom-attrs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EasyBot wiki",
  description: "一个很棒的我的世界服务器互通机器人",
  head: [
    ["link", { rel: "stylesheet", href: "beian.css" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],
  ],
  markdown: {
    config(md) {
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/easybot.png",
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "备用地址", link: "/wiki" },
      { text: "赞助废物作者", link: "/money" },
      { text: "鸣谢", link: "/thanks" },
      { text: "QQ交流群", link: "/qq" },
    ],
    sidebar: [
      {
        text: "EasyBot介绍",
        items: [
          { text: "EasyBot工作流程", link: "/woke" },
          { text: "EasyBot下载地址", link: "/down" },
          { text: "EasyBot支持的服务器", link: "/vies" },
        ],
      },
      {
        text: "快速开始",
        items: [
          {
            text: "1.安装主程序",
            link: "/quick_start/download",
            items: [
              { text: "Windows", link: "/quick_start/install/windows" },
              { text: "Liunx安装", link: "/quick_start/install/linux" },
              { text: "部署到容器", link: "/quick_start/install/docker" },
            ],
          },
          {
            text: "2.安装服务器插件",
            link: "/quick_start/plugin",
            items: [{ text: "EasyBot下载地址", link: "/down" }],
          },
          {
            text: "3.安装机器人",
            link: "/quick_start/robot",
            items: [
              { text: "LLOnebot", link: "/quick_start/robots/LLOneBot" },
              { text: "Lagrange", link: "/quick_start/robots/Lagrange" },
            ],
          },
          {
            text: "4.启用群聊",
            link: "/quick_start/enable_group",
          },
        ],
      },
      {
        text: "EasyBot功能",
        items: [
          { text: "消息同步", link: "/消息同步" },
          { text: "退群自动解绑和退群消息", link: "/退群自动解绑和退群消息" },
          { text: "群组管理", link: "/群组管理" },
          { text: "服务器列表", link: "/服务器列表" },
          { text: "绑定账号", link: "/绑定账号" },
          { text: "命令列表", link: "/命令列表" },
          { text: "远程命令", link: "/远程命令" },
        ],
      },
      {
        text: "EasyBot小教程",
        items: [
          { text: "为后台设置密码", link: "/教程_令牌登录" },
          { text: "修改主程序端口", link: "/教程__修改主程序端口" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "崩溃以及常见问题解决方案", link: "/bug" },
          { text: "PlaceholderApi变量", link: "/api" },
          { text: "赞助废物作者", link: "/money" },
          { text: "备用地址", link: "/wiki" },
          { text: "QQ交流群", link: "/qq" },
        ], // 添加逗号来分隔项
      },
      { text: "鸣谢", link: "/thanks" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/zzh4141/easybotdocs" },
    ],
  },
});
