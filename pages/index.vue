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
  <div class="mt-3 flex justify-end" v-if="loading === false">
    <UPopover>
      <UButton
        color="white"
        trailing-icon="i-heroicons-bars-3-center-left-20-solid"
      />

      <template #panel>
        <div class="flex p-2 gap-2">
          <div>
            <UBadge
              class="dark:font-bold cursor-pointer"
              color="black"
              size="xs"
              :variant="colorMode.value === 'dark' ? 'soft' : 'solid'"
              :ui="{ rounded: 'rounded-full' }"
              @click="filterArticle('전체')"
            >
              전체
            </UBadge>
          </div>
          <div v-for="(item, index) of filterItem" :key="index">
            <UBadge
              class="dark:font-bold cursor-pointer"
              :color="item.categoryColor"
              size="xs"
              :variant="colorMode.value === 'dark' ? 'soft' : 'solid'"
              :ui="{ rounded: 'rounded-full' }"
              @click="filterArticle(item)"
            >
              {{ item.category }}
            </UBadge>
          </div>
        </div>
      </template>
    </UPopover>
  </div>
  <ul
    v-if="loading === false"
    class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 py-3"
  >
    <li v-for="(article, index) of articles" :key="index">
      <NuxtLink
        :to="article.id"
        class="block hover:no-underline group"
        @click="saveArticle(article)"
        style="border: 0.2rem solid; border-radius: 0.5rem; padding: 20px"
      >
        <div class="flex items-center justify-between">
          <h3
            class="text-3xl text-gray-900 dark:text-gray-100 font-bold text-left leading-tight pb-2 group-hover:underline tracking-[-0.01em]"
          >
            {{ article.title }}
          </h3>
          <div class="min-w-fit">
            <UBadge
              class="dark:font-bold"
              :color="article.categoryColor"
              size="xs"
              :variant="colorMode.value === 'dark' ? 'soft' : 'solid'"
              :ui="{ rounded: 'rounded-full' }"
              >{{ article.category }}</UBadge
            >
          </div>
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
import { useArticleStore } from "../stores/article";
import { ref } from "vue";
import { getPageTable } from "vue-notion";
const colorMode = useColorMode();
const store = useArticleStore();
const loading = ref(true);

let articles = ref();
let firstArticles = ref();
let filterItem = ref();

getPageTable("Blog-ec018805f467435ab074c1b80c1f6e96").then((item) => {
  articles.value = useFilter(item, { show: true });

  articles.value = useSortBy(articles.value, "date").reverse();

  firstArticles.value = articles.value;

  filterItem.value = useUniqBy(articles.value, "category");

  loading.value = false;
});

const saveArticle = (article) => {
  store.saveArticle(article);
  localStorage.setItem("article", JSON.stringify(article));
};

const filterArticle = (item) => {
  if (item == "전체") {
    articles.value = firstArticles.value;
    return;
  }
  articles.value = firstArticles.value.filter(
    (x) => x.category == item.category
  );
};
</script>
