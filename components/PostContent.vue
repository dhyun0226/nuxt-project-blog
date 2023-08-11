<template>
  <main class="post-content">
    <NotionRenderer :blockMap="blockMap" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import { NotionRenderer, getPageBlocks } from "vue-notion";
const blockMap = ref(null);
// getPageBlocks("0c2d625d825a480d813e89fa78da1038").then((b) => {
//   blockMap.value = b;
// });
</script>

<style>
@import "vue-notion/src/styles.css";
</style>