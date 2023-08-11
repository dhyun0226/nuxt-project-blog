<template>
  <UCard class="mt-5 max-w-5xl mx-auto">
    <template #header>
      <div class="text-center">
        <h1
          class="text-5xl max-w-md mx-auto font-bold leading-tight tracking-[-0.01em] pb-3"
        >
          {{ article.title }}
        </h1>
        <div class="pb-4">
          <UBadge
            class="dark:font-bold"
            color="black"
            size="md"
            variant="solid"
            :ui="{ rounded: 'rounded-full' }"
            >{{ article.category }}</UBadge
          >
        </div>
        <div class="flex justify-center gap-1 pb-3">
          <Date
            :date="article.date"
            class="text-gray-900 dark:text-gray-100 text-lg"
          />
          <h3 class="text-xl">
            {{ article.weather }}
          </h3>
        </div>
        <h3
          class="text-lg text-left max-w-2xl mx-auto text-gray-600/90 dark:text-gray-400/90"
        >
          {{ article.description }}
        </h3>
      </div>
    </template>

    <NotionRenderer :blockMap="blockMap" class="max-w-2xl mx-auto" />

    <template #footer>
      하위페이지 경로
      {{ path }}
    </template>
  </UCard>
</template>

<script setup>
const { path } = useRoute();

import { ref } from "vue";
import { NotionRenderer, getPageBlocks } from "vue-notion";

const blockMap = ref(null);
const article = JSON.parse(localStorage.getItem("article"));
// console.log(article, "articlearticlearticlearticle");
getPageBlocks(path).then((b) => {
  blockMap.value = b;
  // console.log(b, "ssssssssssss");
});
</script>

<style>
@import "vue-notion/src/styles.css";

.notion-image-caption {
  font-size: 1rem;
  text-align: center;
}
/* .notion-asset-wrapper div {
  padding-bottom: 0%;
  position: unset;
} */

/* .notion-image-inset {
  max-width: 70%;
  max-height: 70%;
  margin: auto;
} */
</style>
