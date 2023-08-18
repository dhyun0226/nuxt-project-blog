import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useStorageTestStore = defineStore('storageTest', {
  state: () => ({
    user: useLocalStorage('pinia/auth/login', 'bob'),
  }),

  actions: {
      setUser(user) {
          this.user = user
      }
  },
})