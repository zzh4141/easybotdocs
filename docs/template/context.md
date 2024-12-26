# 模板上下文

模板上下文是模板包含模板本次渲染的数据。

```ts
import {
  readContext
} from "easybot-image-sdk/easybot";

const context = await readContext();
```

## 上下文都包含哪些数据?

```ts
interface CardContext {
  /**
   * 触发类型
   * @default "papi_query"
   * papi_query: 业务场景,如: 触发命令,开始查询
   * preview: 预览模式,用户在设置预览图片
   */
  type: "papi_query" | "preview";
  /**
   * 来自哪个服务器
   */
  from_server_token: string;
  /**
   * 发送人社交帐号ID
   */
  from_user_id: string;
  /**
   * 是否绑定了社交帐号
   */
  is_bind: boolean;
  /**
   * 绑定的第一个玩家的名字
   */
  first_player_name: string;
  /**
   * 绑定的所有玩家名字
   */
  player_name_list: string[];
}
```