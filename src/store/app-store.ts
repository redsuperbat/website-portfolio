import { defineStore } from 'pinia';

interface AppState {}

export const useAppStore = defineStore('app-store', {
  state: () => ({} as AppState),
  actions: {},
  getters: {},
});
