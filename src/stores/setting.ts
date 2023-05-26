import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', () => {
  const isCollapse = ref(false)
  return { isCollapse }
})
