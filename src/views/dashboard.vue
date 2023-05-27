<template>
  <div>
    111 222 dashboard test test test hhh
    <el-button @click="sendHttp">请求</el-button>
    <span>{{ mockList }}</span>
  </div>
</template>

<script setup lang="ts">
import { getList } from '@/api/test';
import { reactive, ref } from 'vue';

const mockList = ref([])

const sendHttp = () => {
  getList().then(res => {
    console.log(res);
    mockList.value = res.data?.dataList
  });
};
</script>

<style scoped></style>
