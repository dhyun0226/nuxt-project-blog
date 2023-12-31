import { defineStore } from "pinia";

export const useArticleStore = defineStore("article", () => {
  const article = ref({
    title: "",
    category: "",
    date: "",
    weather: "",
    description: "",
  });

  const saveArticle2 = computed((item) => (article.value = item));

  function saveArticle(item) {
    article.value = item;
  }

  return { article, saveArticle, saveArticle2 };
});
