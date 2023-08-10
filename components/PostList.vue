<template>
  <div>
    <p>Current route: {{ route.path }}</p>
  </div>
  <div v-for="(article, index) of articles" :key="index">
    <NuxtLink to="/{article.id}">
      {{ index }}
      {{ article.id }}
      {{ article.name }}
      {{ article.category }}
      {{ article.date }}
      {{ article.detail }}
    </NuxtLink>
  </div>
</template>

<script setup>
import { getPageTable } from "vue-notion";

const route = useRoute();

let articles = ref({});

getPageTable("Blog-ec018805f467435ab074c1b80c1f6e96").then((b) => {
  articles.value = b;
});
</script>
