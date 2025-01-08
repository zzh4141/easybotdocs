# 模板申明

模板申明是一个 JSON 对象，用来描述模板的元数据。

- `name` 模板名称，用于显示在模板列表中。
- `description` 模板的描述，用于显示在模板列表中。
- `id` 模板的唯一标识符(注意: 必须是纯小写,无中文,无特殊符号,且此模板ID是唯一的)
- `author` 模板的作者
- `version` 模板的版本
- `icon` 模板的图标
- `dependencies` 模板的依赖项 (目前没有做依赖判断,仅作为占位)
- `tag` 模板的标签
- `settings` 模板的设置
- `template` 模板的子模板
- `single_file_router` 单文件路由(所有404都会被重定向到index.html)

## settings

- `allow` 改模板是否有设置(是否允许设置)
- `path` 模板的设置路径（html）

## template

- `key` 子模板的唯一标识符(注意: 必须是纯小写,无中文,无特殊符号,且此子模板ID是当前模板内唯一的)
- `name` 子模板的名称
- `path` 子模板路径（html）
- `settings` 模板的设置
- `width` 模板的宽度(可不指定,浏览器自动调宽)
- `no_server` 指定该模板是否需要服务器支持(如果为true 则不管服务器在不在线都会执行模板)

## 例子

这是一个基本的例子:

```json
{
    "name": "图片模板套装",
    "description": "本模板包含了一些基础的图片模板，你可以根据需要选择使用。",
    "id": "easybot_image_template_1",
    "author": [
        "MiuxuE"
    ],
    "version": "1.0.0",
    "icon": "/assets/icon.png",
    "dependencies": [
        "papi",
        "papi-[Player]"
    ],
    "tag": [
        "信息"
    ],
    "settings": {
        "allow": true,
        "path": "index.html"
    },
    "template": [
        {
            "key": "info_1",
            "name": "信息模板",
            "path": "info.html",
            "settings": {
                "allow": true,
                "path": "info_settings.html"
            },
            "width": 503,
            "no_server": false
        }
    ]
}
```