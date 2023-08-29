<template>
  <UCard class="my-5 max-w-5xl mx-auto">
    <template #header>
      <ClientOnly>
        <div class="text-center">
          <h1 class="text-5xl font-bold leading-tight tracking-[-0.01em] pb-2">
            {{ article.title }}
          </h1>
          <div class="pb-4">
            <UBadge
              class="dark:font-bold"
              :color="article.categoryColor"
              size="md"
              :variant="colorMode.value === 'dark' ? 'soft' : 'solid'"
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
      </ClientOnly>
    </template>
    <div v-if="loading === true">
      <div class="space-y-2 pt-2">
        <USkeleton class="h-4 w-4/4" />
        <USkeleton class="h-4 w-2/4" />
        <USkeleton class="h-4 w-3/4" />
        <USkeleton class="h-4 w-3/4" />
      </div>
    </div>
    <NotionRenderer
      v-if="loading === false"
      :blockMap="blockMap"
      class="max-w-2xl mx-auto"
    />

    <template #footer>
      <!-- 하위페이지 경로
      {{ path }} -->
    </template>
  </UCard>
</template>

<script setup>
const { path } = useRoute();

import { ref } from "vue";
import { NotionRenderer, getPageBlocks } from "vue-notion";
import { useArticleStore } from "../../stores/article";

onMounted(() => {
  const checkLocalStorage = localStorage.getItem("article");

  if (checkLocalStorage) {
    article.value = JSON.parse(checkLocalStorage);
  }
  
});
const colorMode = useColorMode();

const store = useArticleStore();

const blockMap = ref(null);

const loading = ref(true);

getPageBlocks(path).then((item) => {
  blockMap.value = item;
  loading.value = false;
});

const article = ref(store.article);
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

.notion-image-inset {
  position: unset;
  margin: auto;
}
</style>
