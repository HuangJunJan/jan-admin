<template>
  <el-drawer v-model="drawer" title="设置">
    <el-form :model="form" label-position="left">
      <el-form-item label="暗黑模式">
        <el-switch v-model="form.isDark" @change="toggleDark" inline-prompt active-icon="moon" inactive-icon="sunny" style="--el-switch-on-color: #333; --el-switch-off-color: #eee" />
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

// 打开抽屉
const drawer = ref<Boolean>(false);
const showDrawer = () => {
  drawer.value = true;
};

const form = reactive({
  isDark: useDark(),
});

// 暗黑模式
// form.isDark = useDark()  ;
const toggleDark = useToggle(form.isDark);

// 暴露数据或方法
defineExpose({
  showDrawer,
});
</script>

<style scoped></style>
