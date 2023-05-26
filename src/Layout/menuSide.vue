<template>
  <el-menu :default-active="route.fullPath" :collapse="isCollapse" @select="menuSelect">
    <menuItem :menus="routerList"></menuItem>
  </el-menu>
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
import { storeToRefs } from 'pinia';
import { useSettingStore } from '@/stores/setting';
import { useRouter, useRoute } from 'vue-router';
import { baseRouter as routerList } from '@/router/index';
import menuItem from './menuItem.vue';

const settingStore = useSettingStore();
const { isCollapse } = storeToRefs(settingStore);

const router = useRouter();
const route = useRoute();

const menuSelect = (index: string): void => {
  if (index.indexOf('https://') > -1 || index.indexOf('http://') > -1) {
    window.location.href = index;
  } else {
    router.push(index);
  }
};
</script>

<style scoped lang="scss">
.el-menu {
  border-right: none;
}
</style>
