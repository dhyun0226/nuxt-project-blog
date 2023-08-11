<script setup lang="ts">
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");
const { date } = defineProps<{ date: string }>();
</script>

<template>
  <time>
    {{ dayjs(date).format("YYYY년 M월 D일 ddd요일") }}
  </time>
</template>
