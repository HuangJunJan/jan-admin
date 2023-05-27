<template>
  <div ref="threejs" class="threejs"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ThreeJs from './cube';

const threejs: any = ref(null);
onMounted(() => {
  new ThreeJs(threejs.value);
});
</script>

<style scoped>
.threejs {
  width: 100px;
  height: 100px;
}
</style>
