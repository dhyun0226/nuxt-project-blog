<template>
  <UModal v-model="isOpen">
    <UAlert title="">
      <template #title>
        <UForm class="items-center gap-2" :state="state">
          <UInput
            v-model="state.comment"
            placeholder="방명록은 30자 제한이 있습니다."
          />
          <UButton
            label="작성"
            variant="outline"
            color="gray"
            size="xs"
            @click="submit()"
          />
        </UForm>
      </template>
    </UAlert>
  </UModal>

  <div class="mt-3 flex justify-between">
    <div class="self-end">
      <span class="text-lg font-medium">안녕하세요 OOO님, </span>
      <span class="text-sm text-end"> 여기는 방명록 공간입니다.</span>
    </div>
    <UButton
      icon="i-heroicons-pencil-square"
      size="sm"
      color="black"
      square
      variant="solid"
      @click="isOpen = true"
    />
  </div>
  <!-- <div>방명록 공간입니다.</div> -->
  <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
    <li v-for="(item, index) of items" :key="index">
      <UAlert
        :title="item.author"
        :avatar="{ src: item.avatar, size: 'lg', alt: item.author }"
        :description="item.comment"
      >
        <template #title="{ title }">
          {{ title }}
          <Date :date="item.date" :dayTrue="false" />
        </template>
      </UAlert>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const state = ref({
  comment: undefined,
});

const submit = () => {
  console.log(state);
  items.value.push({
    author: "이동현",
    comment: state.value.comment,
    date: new Date(),
    avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
  });
};

const loginCheck = () => {
  if ((login = true)) {
  }
};

const isOpen = ref(false);

const items = ref([
  {
    author: "이동현",
    comment: "30자 제한이 있습니다.",
    date: new Date(),
    avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
  },
  {
    author: "김우성",
    comment: "잘 안보고 갑니다.",
    date: new Date(),
    avatar: "",
  },
  {
    author: "박영민",
    comment: "잘 못보고 갑니다.",
    date: new Date(),
    avatar: "",
  },
]);
</script>

<style></style>
