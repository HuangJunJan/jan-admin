<template>
  <div class="toolbar">
    <el-space>
      <el-button v-if="isCollapse" text @click="isCollapse = false"
        ><el-icon size="24"><Expand /></el-icon
      ></el-button>
      <el-button v-else text @click="isCollapse = true"
        ><el-icon size="24"><Fold /></el-icon
      ></el-button>

      <breadcrumb></breadcrumb>
    </el-space>

    <div class="right">
      <el-dropdown @command="handleCommand">
        <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="Setting">Setting</el-dropdown-item>
            <el-dropdown-item command="Mine">Mine</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <span>Jan</span>
    </div>
  </div>
  <SettingDrawer ref="SettingDrawerRef"></SettingDrawer>
</template>

<script setup lang="ts">
import { Setting } from '@element-plus/icons-vue';
import { storeToRefs } from 'pinia';
import { useSettingStore } from '@/stores/setting';
import { ref } from 'vue';
import SettingDrawer from './components/SettingDrawer.vue';
import breadcrumb from './components/breadcrumb.vue';

// 折叠菜单
const settingStore = useSettingStore();
const { isCollapse } = storeToRefs(settingStore);

const SettingDrawerRef: any = ref(null);
const handleCommand = (command: string | number | object) => {
  switch (command) {
    case 'Setting':
      SettingDrawerRef.value?.showDrawer();
      break;

    default:
      break;
  }
};
</script>

<style scoped lang="scss">
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  right: 20px;
  .left {
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    align-items: center;
    .avatar {
      margin-right: 8px;
      transition: all 2s;
      &:hover {
        transform: rotate(720deg);
      }
    }
  }
}
</style>
