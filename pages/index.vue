<template>
  <ul
    v-if="loading === true"
    class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 py-10"
  >
    <li v-for="(article, index) in 10" :key="index">
      <div class="flex items-center justify-between">
        <USkeleton class="h-8 w-2/4" />
        <USkeleton class="h-5 w-12" :ui="{ rounded: 'rounded-full' }" />
      </div>
      <div class="space-y-2 pt-2">
        <USkeleton class="h-4 w-4/4" />
        <USkeleton class="h-4 w-3/4" />
        <USkeleton class="h-4 w-3/4" />
      </div>

      <div class="flex items-center gap-1 pt-2">
        <USkeleton class="h-4 w-5/12" />
        <USkeleton class="h-4 w-6" />
      </div>
    </li>
  </ul>

  <ul
    v-if="loading === false"
    class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 py-10"
  >
    <li v-for="(article, index) of articles" :key="index">
      <NuxtLink
        :to="article.id"
        class="block hover:no-underline group"
        @click="saveArticle(article)"
      >
        <div class="flex items-center justify-between">
          <h3
            class="text-3xl line-clamp-1 text-gray-900 dark:text-gray-100 font-bold text-left leading-tight pb-2 group-hover:underline tracking-[-0.01em]"
          >
            {{ article.title }}
          </h3>
          <UBadge
            class="dark:font-bold"
            color="black"
            size="xs"
            variant="solid"
            :ui="{ rounded: 'rounded-full' }"
            >{{ article.category }}</UBadge
          >
        </div>
        <p
          class="line-clamp-3 text-gray-600/90 dark:text-gray-400/90 font-medium"
        >
          {{ article.description }}
        </p>

        <div class="flex items-center gap-1 pt-2">
          <Date :date="article.date" :dayTrue="true" />
          <h3 class="text-lg">
            {{ article.weather }}
          </h3>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { getPageTable } from "vue-notion";
import { useArticleStore } from "../stores/article";
import { ref } from "vue";

const store = useArticleStore();
const route = useRoute();

const loading = ref(true);

let articles = ref({});

// getPageTable("0c2d625d-825a-480d-813e-89fa78da1038").then((b) => {
//   console.log(b, "0c2d625d-825a-480d-813e-89fa78da1038");
// });

getPageTable("Blog-ec018805f467435ab074c1b80c1f6e96").then((item) => {
  articles.value = item;
  loading.value = false;
});

const saveArticle = (article) => {
  store.saveArticle(article);
  // localStorage.setItem("article", JSON.stringify(article));
};
</script>
