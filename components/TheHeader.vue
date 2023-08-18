<template>
  <header class="border-b top-0 sticky bg-white dark:bg-black z-50">
    <UContainer>
      <nav class="flex items-center justify-between">
        <NuxtLink to="/" class="font-bold text-xl tracking-wide">
          <span>Lee DH</span>
        </NuxtLink>

        <ul class="flex items-center gap-5 font-semibold">
          <li>
            <NuxtLink to="/resume" class="py-3 block"> Résumé </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/icopy" target="_blank" class="py-3 block">
              GitHub
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/guestbook" class="py-3 block"> GuestBook </NuxtLink>
          </li>
          <li>
            <UButton
              :icon="
                isDark
                  ? 'i-heroicons-moon-20-solid'
                  : 'i-heroicons-sun-20-solid'
              "
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
            />
          </li>
        </ul>
      </nav>
    </UContainer>
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

