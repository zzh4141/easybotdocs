import Theme from "vitepress/theme";
import "./style/var.css";
import { EnhanceAppContext } from "vitepress";
import { reinjectFooter } from "./beian";

import mediumZoom from "medium-zoom";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData } from 'vitepress';

export default {
  extends: Theme,

  enhanceApp: (ctx: EnhanceAppContext) => {
    if (typeof window == "undefined") {
      return;
    }

    // 调用 DefaultTheme 的增强应用逻辑（如果有的话）
    if (Theme.enhanceApp) {
      Theme.enhanceApp(ctx);
    }

    ctx.router.onAfterRouteChanged = (to: string) => {
      reinjectFooter();
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          if (to === window.location.pathname) {
            reinjectFooter();
          }
        }, 100 * i);
      }
    };
  },

  setup() {
    const route = useRoute();
    const { frontmatter } = useData();

    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };

    onMounted(() => {
      initZoom();

      // 初始化 Giscus 评论系统
      giscusTalk({
        repo: 'zzh4141/easybotdocs', 
        repoId: 'R_kgDOMlZ23w',   
        category: 'Announcements', // 或其他分类，默认: `General`
        categoryId: 'DIC_kwDOMlZ2384CiB3g', 
        mapping: 'pathname', // 默认: `pathname`
        inputPosition: 'top', // 默认: `top`
        lang: 'zh-CN', // 默认: `zh-CN`
        lightTheme: 'light', // 默认: `light`
        darkTheme: 'transparent_dark', // 默认: `transparent_dark`
      }, {
        frontmatter,
        route
      }, true); // 是否激活评论区，默认为 true
    });

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};