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
        <UVerticalNavigation :links="{links, click: filterArticle()}" class="w-full">
          <template #badge="{ link }">
            <UBadge
              class="dark:font-bold"
              :color="link.categoryColor"
              size="xs"
              :variant="colorMode.value === 'dark' ? 'soft' : 'solid'"
              :ui="{ rounded: 'rounded-full' }"
            >
              {{ link.category }}
            </UBadge>
          </template>
        </UVerticalNavigation>
      </template>
    </UPopover>
  </div>
  <ul
    v-if="loading === false"
    class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 py-5"
  >
    <li v-for="(article, index) of articles" :key="index">
      <NuxtLink
        :to="article.id"
        class="block hover:no-underline group"
        @click="saveArticle(article)"
      >
        <div class="flex items-center justify-between">
          <h3
            class="text-3xl text-gray-900 dark:text-gray-100 font-bold text-left leading-tight pb-2 group-hover:underline tracking-[-0.01em]"
          >
            {{ article.title }}
          </h3>
          <UBadge
            class="dark:font-bold"
            :color="article.categoryColor"
            size="xs"
            :variant="colorMode.value === 'dark' ? 'soft' : 'solid'"
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

const colorMode = useColorMode();
const store = useArticleStore();
const loading = ref(true);

let articles = ref();
let firstArticles = ref();
let filterItem = ref();

getPageTable("Blog-ec018805f467435ab074c1b80c1f6e96").then((item) => {
  console.log(item);

  articles.value = item.sort((a, b) => new Date(b.date) - new Date(a.date));
  firstArticles.value = articles.value;

  filterItem.value = item.map((s) => {
    console.log(s, "sssssssssssssssssssssssssssssssssssssssssssssssss");
    return { category: s.category, categoryColor: s.categoryColor };
  });

  loading.value = false;
  console.log(filterItem, "filterItemfilterItemfilterItemfilterItem");
});

const saveArticle = (article) => {
  store.saveArticle(article);
  localStorage.setItem("article", JSON.stringify(article));
};

const links = [
  {
    category: "전체",
    categoryColor: "black",
  },
  {
    category: "일상",
    categoryColor: "green",
  },
  {
    category: "Nuxt",
    categoryColor: "cyan",
  },
  {
    category: "주식",
    categoryColor: "red",
  },
];
const filterArticle = (item) => {
  articles.value = item.filter((param) => param.category == item.category);
  console.log(
    item,
    "itemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitem"
  );
  console.log(
    articles.value,
    "articles.valuearticles.valuearticles.valuearticles.value"
  );
};
</script>
