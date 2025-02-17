// vitepress.config.js
import { defineConfig } from "vitepress";
import mdItCustomAttrs from "markdown-it-custom-attrs";
import { Templates } from "../utils/StaticData";
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
    logo: "/easybot.png",
    outlineTitle: "文章首页",
    lastUpdated: {
      text: "最后更新",
    },
    editLink: {
      pattern: "https://github.com/zzh4141/easybotdocs/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
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
      { text: "赞助作者", link: "/money" },
      { text: "鸣谢", link: "/thanks" },
      { text: "QQ交流群", link: "/qq" },
    ],
    sidebar: [
      {
        text: "EasyBot 介绍",
        items: [
          { text: "EasyBot 工作流程", link: "/woke" },
          { text: "EasyBot 下载地址", link: "/down" },
          { text: "EasyBot 支持的服务器", link: "/vies" },
        ],
      },
      {
        text: "图片模板",
        items: [
          { text: "教程&概念", link: "/market/template" },
          { text: "模板市场", link: "/market/" },
          {
            text: "模板列表",
  
            items: Templates.filter((template) => template.manifest?.content)
            .map((item) => ({
              text: item.manifest.name,
              link: item.manifest.content,
            })),
          }
        ],
      },
      {
        text: "迁移教程",
        items: [{ text: "EasyBot 迁移教程", link: "/migrate/index" }],
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
              { text: "Docker", link: "/quick_start/install/docker" },
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
        text: "EasyBot 功能",
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
        text: "EasyBot 小技巧 & 常见问题",
        items: [
          { text: "常见问题", link: "/faq" },
          { text: "为后台设置密码", link: "/教程_令牌登录" },
          { text: "支持 CMI", link: "/cmi" },
          { text: "我的公网IP是什么?", link: "/faq/我的公网IP" },
          //{ text: "修改主程序端口", link: "/教程__修改主程序端口" },
        ],
      },
      {
        text: "图片模板开发教程",
        items: [
          { text: "概念", link: "/template/" },
          { text: "申明文件", link: "/template/manifest" },
          { text: "数据持久化", link: "/template/dp" },
          { text: "模板上下文", link: "/template/context" },
          { text: "调用服务器PAPI", link: "/template/placeholder" },
          { text: "设置渲染图片大小", link: "/template/viewport" },
          { text: "获取服务器列表", link: "/template/servers" },
          { text: "在服务器运行命令", link: "/template/command" },
          { text: "使用Vite+React开发模板", link: "/template/tutorial/vite-react" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "离线变量", link: "/offline-papi" },
          { text: "PAPI变量", link: "/api" },
          { text: "赞助作者", link: "/money" },
          { text: "备用地址", link: "/wiki" },
          { text: "QQ 交流群", link: "/qq" },
        ], // 添加逗号来分隔项
      },
      { text: "鸣谢", link: "/thanks" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/zzh4141/easybotdocs" },
    ],
  }
});
