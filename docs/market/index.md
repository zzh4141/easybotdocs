<script setup>
import ImageTemplate from '../components/ImageTemplate.vue'
import { Templates } from '../utils/StaticData'
</script>

# 模板市场

<div>
<ImageTemplate
    style="margin-top:15px;"
    v-for="(template, index) in Templates"
    :key="index"
    :templateInfo="template"
    :propsData="template.props"
/>
</div>
