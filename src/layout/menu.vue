<template>
  <div class="menu" :style="{ width: isCollapse ? '64px' : '200px' }">
    <div class="logo" v-if="!isCollapse">
      <img src="@/assets/home.png" alt="logo" />
      <span class="title">vue3+typeScript</span>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical"
      background-color="#545c64"
      text-color="#fff"
      :router="true"
      :collapse="isCollapse"
    >
      <menuItem :menuList="menuList" />
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store/index'
import menuItem from './menuItem.vue'

const store = useStore();
const isCollapse = computed(() => {
  return store.getters['getCollapse'];
})
const route = useRoute();
const activeIndex = computed(() => {
  const { path } = route
  return path;
})
const menuList = reactive([
  // {
  //   path: '/dashboard',
  //   component: '',
  //   name: 'dashboard',
  //   meta: { title: 'Dashboard', icon: 'HomeFilled' }
  // },
  {
    path: '/home',
    component: 'Layout',
    meta: { title: '首页', icon: 'HomeFilled' },
    children: [],
  },
  {
    path: '/root',
    component: 'Layout',
    meta: { title: '机房管理', icon: 'Monitor' },
    children: [
      {
        path: '/root/fixedIp',
        component: '',
        name: 'rootFixedIp',
        meta: { title: '固定IP', icon: '' }
      },
      {
        path: '/idcIp',
        component: '',
        name: 'rootIdcIp',
        meta: { title: '三级菜单', icon: '' },
        children: [
          {
            path: '/selfIp',
            component: '',
            name: 'rootSelfIp',
            meta: { title: '三级-1', icon: '' }
          },
          {
            path: '/notEnabledIp',
            component: '',
            name: 'rootNotEnabledIp',
            meta: { title: '三级-2', icon: '' }
          },
        ]
      },

    ]
  },
  {
    path: '/system',
    component: 'Layout',
    meta: { title: '系统设置', icon: 'Setting' },
    children: [
      {
        path: '/user',
        component: '@/views/user/index.vue',
        name: 'user',
        meta: { title: '用户管理', icon: '' }
      },
      {
        path: '/config',
        component: '@/views/config/index.vue',
        name: 'config',
        meta: { title: '配置升级', icon: '' }
      },
    ]
  },
])
</script>
<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;
}
.logo {
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 15px;
  color: #fff;
  background-color: #2b2f3a;
  animation: logoAnimation 1s ease-out;
  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
  .title {
    font-weight: 600;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
}
@keyframes logoAnimation {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
.el-menu-vertical {
  height: 100%;
  border-right: none;
  overflow-y: auto;
}
</style>