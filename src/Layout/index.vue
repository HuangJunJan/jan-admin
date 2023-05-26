<template>
  <el-container class="layout-container">
    <!-- <el-aside :width="isCollapse ? '64px' : '250px'"> -->
    <el-scrollbar>
      <!-- 侧边菜单 -->
      <menuSide></menuSide>
    </el-scrollbar>
    <!-- </el-aside> -->

    <el-container class="right-container">
      <el-header>
        <!-- 头部 -->
        <topBar></topBar>
      </el-header>

      <el-main>
        <!-- 修改滚动条样式 -->
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
      <!-- <el-footer>footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import menuSide from './menuSide.vue';
import topBar from './topBar.vue';
</script>

<style scoped lang="scss">
.layout-container {
  height: 100vh;
  .right-container {
    border-left: 1px solid var(--el-color-info-light-7);
  }
  .el-header {
    position: relative;
    color: var(--el-text-color-primary);
    padding: 0 20px 0 0;
  }

  .el-main {
    background-color: var(--el-color-info-light-9);
  }
}
</style>
