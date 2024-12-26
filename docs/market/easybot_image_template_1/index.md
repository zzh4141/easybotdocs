<script setup>
import ImageTemplate from '../../components/ImageTemplate.vue'
import { Templates } from '../../utils/StaticData'
const template = Templates[0]
</script>

<ImageTemplate
    style="margin-top:15px;"
    :templateInfo="template"
    :propsData="template.props"
    :hideContent="true"
/>

## 设置

![设置](./assets/settings.png)

### 信息模板

![设置](./assets/info.png)