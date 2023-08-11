<template>
  <header class="border-t bg-white dark:bg-black bottom-0 sticky">
    <UContainer> © 2023. 이동현 All rights reserved. </UContainer>
  </header>
</template>
<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
