# 视图API

### 设置渲染的图片大小

> [!DANGER] 注意
> 如果同时修改高宽必须使用`await`等待上一步设置完成

```ts
import { isRenderering, setViewportHeight, setViewportWidth } from "easybot-image-sdk/viewport.js";
if (isRenderering()) { // 判断是否是EasyBot渲染环境,因为只有在渲染环境才有用
    await setViewportWidth(660); // 设置宽度
    await setViewportHeight(100); // 设置高度
}
```


# 完整API

```ts
/**
 * 判断当前浏览器环境是否是EasyBot渲染环境
 */
export function isRenderering(): boolean

/**
 * 获取渲染配置 (仅在EasyBot渲染时有用)
 */
export async function getViewport(): Promise<Viewport>

/**
 * 设置渲染配置 (仅在EasyBot渲染时有用)
 * @param viewport 配置
 */
export async function setViewport(viewport: Viewport)

/**
 * 设置渲染宽度 (仅在EasyBot渲染时有用)
 * 注意: 同时设置高宽时必须异步等待,否则会出错
 * @param width 渲染宽度
 */
export async function setViewportWidth(width: number)

/**
 * 设置渲染高度 (仅在EasyBot渲染时有用)
 * 注意: 同时设置高宽时必须异步等待,否则会出错
 * @param height 渲染高度
 */
export async function setViewportHeight(height: number)

export interface Viewport {
  /**
   * 渲染宽度
   */
  width: number;
  /**
   * 渲染高度
   */
  height: number;
  /**
   * 是否是移动设备
   */
  is_mobile: boolean;
  /**
   * 设备缩放因子（可以视为dpr）。默认值为1。
   */
  device_scale_factor: number;
  /**
   * 视口是否处于横向模式。默认值为 <c>false</c>。
   */
  is_landscape: boolean;
  /**
   * 视口是否具有触控事件。默认值为 <c>false</c>。
   */
  has_touch: boolean;
}
```
