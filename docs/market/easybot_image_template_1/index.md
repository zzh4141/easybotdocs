<script setup>
import ImageTemplate from '../../components/ImageTemplate.vue'
import { Templates } from '../../utils/StaticData'
const template = Templates[1]
</script>

<ImageTemplate
    style="margin-top:15px;"
    :templateInfo="template"
    :propsData="template.props"
    :hideContent="true"
/>

> [!WARNING] 模板使用说明
> **注意** 此模板计算在线时间**存在严重BUG**,且不会修复。
> **代替** 建议使用[此模板](https://bbs.hualib.com/217.html)作为平替

> [!WARNING] 非原创申明
> **注意** 此模板**并非原创**,灵感来源于`NeoTcc社区`的[KiKi](https://github.com/KiKi-XC)同学

## 设置

![设置](./assets/settings.png)

### 信息模板

![设置](./assets/info.png)
