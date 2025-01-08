# 调用服务器的PlaceholderApi

EasyBot提供了一个简单的方法来调用服务器的PlaceholderApi。

```ts
/**
 * 调用上下文服务器的PlaceholderApi
 * @param query 含有PlaceholderApi变量的文本
 * @param player 如果不指定玩家,就是Papi默认的 --null
 * @returns 处理后的文本
 */
export async function placeholder(
  query: string,
  player?: string
): Promise<string>

/**
 * 在指定服务器调用PlaceholderApi
 * @param context 上下文
 * @param query 含有PlaceholderApi变量的文本
 * @param player 如果不指定玩家,就是Papi默认的 --null
 * @returns 处理后的文本
 */
export async function placeholderAt(
  context: CardContext,
  query: string,
  player?: string
): Promise<string>
```

## 例

```ts
import {
  placeholder,
  readContext,
} from "easybot-image-sdk/easybot";

const context = await readContext();
const name = await placeholder("%player_name%", context.first_player_name);
console.log(name);
```
