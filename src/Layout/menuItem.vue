<template>
  <template v-for="item in props.menus">
    <!-- 没有子菜单 -->
    <el-menu-item v-if="!item.children" :key="item.path" :index="fullPath(item.path)">
      <el-icon><component :is="item.meta?.icon"></component></el-icon>
      <template #title>{{ item.meta?.title }}</template>
    </el-menu-item>
    <!-- 只有一个子菜单 -->
    <!-- 不是根路由，要拼/ -->
    <el-menu-item
      v-if="item.children?.length === 1"
      :key="item.path"
      :index="item.path === '/' ? item.path + fullPath(item.children[0].path) : item.path + '/' + fullPath(item.children[0].path)"
    >
      <el-icon><component :is="item.children[0].meta?.icon"></component></el-icon>
      <template #title>{{ item.children[0].meta?.title }}</template>
    </el-menu-item>
    <!-- 有大于1个子菜单 -->
    <el-sub-menu v-if="item.children && item.children?.length > 1" :key="item.path" :index="fullPath(item.path)">
      <template #title>
        <el-icon><component :is="item.meta?.icon"></component></el-icon>
        <span>{{ item?.meta?.title }}</span>
      </template>
      <!-- 递归 -->
      <menuItem :menus="item.children" :parentPath="fullPath(item.path)"></menuItem>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { type RouteRecordRaw } from 'vue-router';

const props = defineProps({
  menus: {
    type: Array<RouteRecordRaw>,
    required: true,
  },
  parentPath: {
    type: String,
    default: '',
  },
});

const fullPath = (thePath: string): string => {
  let path: string = '';
  if (props.parentPath === '') {
    path = thePath;
  } else if (props.parentPath === '/') {
    path = props.parentPath + thePath;
  } else {
    path = props.parentPath + '/' + thePath;
  }
  return path;
};

// 是否外链
const isExternal = function (url: String): Boolean {
  return url.indexOf('https://') || url.indexOf('http://') ? true : false;
};
</script>

<style scoped></style>
