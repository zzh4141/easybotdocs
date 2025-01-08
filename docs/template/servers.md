# 获取服务器列表

## 例
```ts
import { isRenderering } from "easybot-image-sdk/viewport.js";
import { getServerInfo, ServerInfo } from "easybot-image-sdk/server.js";
if(isRenderering()){
    const serverList = await getServerInfo();
    // TODO
}
```

## 服务器信息

```ts
export interface ServerInfo {
    token: string;
    server_name: string;
    /**
     * 服务端版本
     * 例: `1.19.3-R0.1-SNAPSHOT`
     */
    server_version: string;
    plugin_version: string;
    /** 该服务端是否安装了PlaceholderAPI */
    is_papi_supported: boolean;
    /** 该服务端是否支持运行命令 */
    is_command_supported: boolean;
    /** 该服务端是否安装了间歇泉 */
    has_geyser: boolean;
    /** 当前服务器是否启用正版验证 */
    is_online_mode: boolean;
    /** 当前服务器是否在线 */
    is_online: boolean;
    /** 服务器图标URL */
    icon_url: string;
}
```