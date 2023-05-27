<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in routers" :key="index" :to="{ path: item.path }">{{ item.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const routers = computed(() => {
  // 过滤掉没有meta的
  return router.currentRoute.value.matched.filter(item => item.meta.title);
});
</script>

<style scoped></style>
