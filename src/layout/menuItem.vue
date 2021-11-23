<template>
  <template v-for="item in menuList" :key="item.path">
    <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
      <template #title>
        <el-icon v-if="item.meta.icon">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <menuItem :menuList="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <el-icon v-if="item.meta.icon">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
import { PropType } from 'vue';

interface meta { title: string, icon: string }
interface menulistProps {
  path: string,
  component: string,
  meta: meta,
  children: Array<any>
}
defineProps({
  menuList: Array as unknown as PropType<menulistProps[]>
  // menuList: Array
})
</script>