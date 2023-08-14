<script setup lang="ts">
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");
const { date } = defineProps<{ date: string, dayTrue: boolean }>();
</script>

<template>
  <time v-if="dayTrue" class="text-gray-800 dark:text-gray-200 font-medium">
    {{ dayjs(date).format("YYYY년 M월 D일 ddd요일") }}
  </time>

  <time v-if="!dayTrue" class="text-gray-800 dark:text-gray-200 font-medium">
    {{ dayjs(date).format("YYYY년 M월 D일") }}
  </time>
</template>
