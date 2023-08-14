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
        <div class="flex justify-center gap-1 pb-3 text-lg">
          <Date :date="article.date" :dayTrue="true" />
          {{ article.weather }}
        </div>
        <h3
          class="text-lg text-left max-w-2xl mx-auto text-gray-600/90 dark:text-gray-400/90"
        >
          {{ article.description }}
        </h3>
      </div>
    </template>
    <div class="flex items-center space-x-4">
      <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
      <div class="space-y-2 flex-1">
        <USkeleton class="h-4 w-4/4" />
        <USkeleton class="h-4 w-2/4" />
        <USkeleton class="h-4 w-1/4" />
        <USkeleton class="h-4 w-3/4" />
      </div>
    </div>
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

.notion div input {
  margin-right: 0.5rem;
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
