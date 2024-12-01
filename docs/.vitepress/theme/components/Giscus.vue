<script setup>
import { ref, watch } from "vue";
import { useData } from "vitepress";
const { frontmatter } = useData();
const { app, theme, isDark } = useData();

import Giscus from "@giscus/vue";
</script>

<template>
  <Giscus v-if="frontmatter.comment != false"
    id="comments"
    repo="zzh4141/easybotdocs"
    repoId="R_kgDOMlZ23w"
    category="Announcements"
    categoryId="'DIC_kwDOMlZ2384CiB3g"
    mapping="pathname"
    strict="0"
    term="Welcome to @giscus/react component!"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="top"
    :theme="preferred_color_scheme"
    lang="zh-CN"
    loading="lazy"
  />
</template>
