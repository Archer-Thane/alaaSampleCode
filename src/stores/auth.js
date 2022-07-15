import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {},
    token: ""
  }),

  getters: {
  },

  actions: {
    setToken(t) {
      this.token = t;
      LocalStorage.set("token", this.token)
    },
  }
})
