# 在服务器运行命令

## 例

```ts
import { isRenderering } from "easybot-image-sdk/viewport.js";
import { command } from "easybot-image-sdk/server.js";

if(isRenderering()){
    await command("say 你们好");
}
```

### 完整API

```ts
export interface CommandResult {
    /**
     * 命令执行结果, 如果执行失败, 则为失败原因
     */
    text: string;
    /**
     * 是否执行成功(失败原因可能是服务器不在线之类的)
     */
    success: boolean;
}

/**
 * 运行命令
 * @param command 要运行的命令 
 * @param context 指定上下文
 */
export async function commandAt(
    command: string,
    context: CardContext
): Promise<CommandResult>

/**
 * 运行命令
 * @param command 要运行的命令 
 * @param context 指定上下文
 */
export async function command(
    command: string
)
```

