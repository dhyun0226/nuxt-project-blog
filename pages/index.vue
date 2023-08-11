<template>
  <!-- <div>
    <p>Current route: {{ route.path }}</p>
  </div> -->
  <!-- <div v-for="(article, index) of articles" :key="index">
    <NuxtLink to="/0c2d625d825a480d813e89fa78da1038" v-model="articles">
      {{ index }}
      {{ article.id }}
      {{ article.title }}
      {{ article.category }}
      {{ article.date }}
      {{ article.detail }}
    </NuxtLink>
  </div> -->
  <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 py-10">
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
          <Date
            :date="article.date"
            class="text-gray-900 dark:text-gray-100 font-medium"
          />
          <h3 class="text-lg">
            {{ article.weather }}
          </h3>
        </div>
        <div></div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { getPageTable, getPageBlocks } from "vue-notion";

const route = useRoute();

let articles = ref({});

getPageTable("Blog-ec018805f467435ab074c1b80c1f6e96").then((b) => {
  articles.value = b;
  // console.log(b);
  // console.log(articles.value, "ddddddddddd");
});

const saveArticle = (article) => {
  localStorage.setItem("article", JSON.stringify(article));
  // console.log(article, "#event");
};
</script>
