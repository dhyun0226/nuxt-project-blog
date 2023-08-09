<script setup>
// https://stupendous-okra-b7e.notion.site/Blog-ec018805f467435ab074c1b80c1f6e96?pvs=4

const route = useRoute();

let table = getPageTable("Blog-ec018805f467435ab074c1b80c1f6e96").then((b) => {
  console.log(b);
});

</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
  </div>
  <div>{{ table }}</div>
</template>
