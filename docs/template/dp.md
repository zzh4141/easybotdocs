# 数据持久化

> EasyBot图片模板API中提供了数据持久化功能,你可以将一个对象保存到某个键中,然后通过这个键获取这个对象

```ts
import {
  readOptions,
  writeOptions,
} from "easybot-image-sdk/easybot";

interface MyOptions {
  name: string;
  title: string;
}

const options: MyOptions = {
    name: "EasyBot",
    title: "EasyBot Image SDK",
}

await writeOptions("my-options", options); // 写入配置
const myOptions = await readOptions("my-options") as MyOptions; // 读取配置
```