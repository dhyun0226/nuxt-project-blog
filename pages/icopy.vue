<script setup>
// https://stupendous-okra-b7e.notion.site/Blog-ec018805f467435ab074c1b80c1f6e96?pvs=4
import { ref, onMounted } from "vue";
import { useStorageTestStore } from "../stores/counter";

const storageTestStore = useStorageTestStore();

const { data, error } = useFetch(
  "http://localhost:8080/hello-world-internationalized",
  {
    headers: {
      "Accept-Language": "nl",
    },
  }
);

// create array with 10 random first names
const firstNames = [
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Charles",
  "Joseph",
  "Thomas",
];

const updateUser = () => {
  storageTestStore.setUser(
    firstNames[Math.floor(Math.random() * firstNames.length)]
  );
};

const items = [
  {
    label: "Getting Started",
    icon: "i-heroicons-information-circle",
    defaultOpen: true,
    slot: "getting-started",
  },
  {
    label: "Installation",
    icon: "i-heroicons-arrow-down-tray",
    defaultOpen: true,
    slot: "installation",
  },
  {
    label: "Theming",
    icon: "i-heroicons-eye-dropper",
    defaultOpen: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
];
</script>

<template>
  <pre>{{ data }}</pre>
  <div class="max-w-[1152px] mx-auto">
    <h1 class="text-xl">{{ storageTestStore.user }}</h1>
    <button
      class="text-lg bg-emerald-300 text-emerald-900 p-5 rounded-lg"
      @click="updateUser()"
    >
      Change User
    </button>
  </div>
  <UAccordion :items="items">
    <template #item="{ item }">
      <p class="italic text-gray-900 dark:text-white text-center">
        {{ item.description }}
      </p>
    </template>

    <template #getting-started>
      <div class="flex flex-col justify-center items-center gap-1">
        <NuxtLink
          to="/getting-started"
          class="flex items-end gap-1.5 font-bold text-xl text-gray-900 dark:text-white"
        >
          <!-- <Logo class="w-8 h-8 text-primary-500 dark:text-primary-400" /> -->

          <span class="hidden sm:block">NuxtLabs</span
          ><span class="sm:text-primary-500 dark:sm:text-primary-400">UI</span>
        </NuxtLink>

        <p class="text-sm text-gray-500 dark:text-gray-400">
          Fully styled and customizable components for Nuxt.
        </p>
      </div>
    </template>

    <template #installation="{ description }">
      <div class="flex flex-col justify-center items-center gap-1 mb-4">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">
          Installation
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Install <code>@nuxthq/ui</code> dependency to your project:
        </p>
        <p>
          {{ description }}
        </p>
      </div>

      <div class="flex flex-col items-center">
        <code>$ npm install @nuxtlabs/ui</code>
        <code>$ nnpm install -D @nuxthq/ui</code>
        <code>$ pnpm i -D @nuxthq/ui</code>
      </div>
    </template>
  </UAccordion>
</template>
