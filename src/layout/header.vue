<template>
  <div class="links">
    <el-icon :size="20" @click="changeCollapse">
      <component :is="isCollapse ? Expand : Fold"></component>
    </el-icon>

    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
          class="no-redirect"
        >{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch, Ref } from 'vue'
import { useStore } from '@/store/index'
import { useRouter, useRoute, RouteLocationMatched } from 'vue-router';
import { Fold, Expand } from '@element-plus/icons'

const store = useStore();
const isCollapse = computed(() => {
  return store.getters['getCollapse'];
})
const changeCollapse = () => {
  store.commit('setCollapse', !isCollapse.value)
}
// 获取面包屑导航数据
const route = useRoute();
const router = useRouter();
const levelList: Ref<RouteLocationMatched[]> = ref([]);

const getBreadcrumb = () => {
  let matched = route.matched.filter(
    (item) => item.meta && item.meta.title
  );

  const first = matched[0];
  if (first && first.path !== '/dashboard') {
    matched = [{ path: "/dashboard", meta: { title: "Dashboard" } } as any].concat(
      matched
    );
  }
  levelList.value = matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  );
};
getBreadcrumb();
const key = computed(() => route.path);
watch(
  () => route.path,
  () => getBreadcrumb()
);
const handleLink = (item: { redirect: any; path: any; }) => {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect.toString());
    return;
  }
  router.push(path);
};
</script>
<style lang="scss" scoped>
.links {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.el-icon {
  margin-right: 10px;
  vertical-align: middle;
  cursor: pointer;
}
</style>