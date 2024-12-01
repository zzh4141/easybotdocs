import Theme from "vitepress/theme";
import "./style/var.css";
import { EnhanceAppContext } from "vitepress";
import { reinjectFooter } from "./beian";

import mediumZoom from "medium-zoom";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import Giscus from './components/Giscus.vue'; // 添加了缺失的右引号

export default {
  extends: Theme,
  
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Giscus)
    });
  }, // 添加了缺失的逗号

  enhanceApp: (ctx: EnhanceAppContext) => {
    if (typeof window == "undefined") {
      return;
    }
    ctx.router.onAfterRouteChanged = (to: string) => {
      reinjectFooter();
      for (let i = 0; i < 50; i++) {
        // 别tm问我为什么,网站重载的时候样式挂不上,就离谱
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
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };

    onMounted(() => {
      initZoom();
    });

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};