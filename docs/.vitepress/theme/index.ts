import Theme from "vitepress/theme";
import "./style/var.css";
import { EnhanceAppContext } from "vitepress";
import { reinjectFooter } from "./beian";

export default {
  ...Theme,
  enhanceApp: (ctx: EnhanceAppContext) => {
    if (typeof window == "undefined") {
      return;
    }
    ctx.router.onAfterRouteChanged = (to: string) => {
      reinjectFooter();
      for (let i = 0; i < 50; i++) { // 别tm问我为什么,网站重载的时候样式挂不上,就离谱
        setTimeout(() => {
          if (to === window.location.pathname) {
            reinjectFooter();
          }
        }, 100 * i);
      }
    };
  },
};
