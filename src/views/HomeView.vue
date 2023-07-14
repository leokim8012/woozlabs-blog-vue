<template>
  <NotionRenderer v-if="data" :blockMap="data" fullPage />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { NotionRenderer, getPageBlocks, useGetPageBlocks } from "vue3-notion";

import "@/styles/notion/notion.css";

export default defineComponent({
  components: {
    NotionRenderer,
  },
  setup() {
    const { data } = useGetPageBlocks("4b2dc28a5df74034a943f8c8e639066a");
    onMounted(async () => {
      data.value = await getPageBlocks("4b2dc28a5df74034a943f8c8e639066a");
    });

    return { data };
  },
});
</script>

<style>
@import "prismjs/themes/prism.css";
@import "katex/dist/katex.min.css";
</style>
