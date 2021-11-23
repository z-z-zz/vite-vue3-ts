import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const Layout = () => import('@/layout/index.vue')
const BlankView = () => import('@/views/blankView.vue')
const NotFound = () => import('@/views/404/index.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'dashboard',
        meta: { title: 'Dashboard', icon: '' }
      },
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: { title: 'home', icon: '' }
      },
      {
        path: '/root',
        component: BlankView,
        meta: { title: '机房管理', icon: 'Monitor' },
        children: [
          {
            path: '/root/fixedIp',
            component: () => import('@/views/fixedIp/index.vue'),
            name: 'rootFixedIp',
            meta: { title: '固定IP', icon: '' }
          },
          {
            path: 'dynamicIp',
            component: () => import('@/views/dynamicIp/index.vue'),
            name: 'rootDynamicIp',
            meta: { title: '动态IP', icon: '' }
          },
          {
            path: '/idcIp',
            component: BlankView,
            name: 'rootIdcIp',
            meta: { title: '三级菜单', icon: '' },
            children: [
              {
                path: '/selfIp',
                component: () => import('@/views/selfIp/index.vue'),
                name: 'rootSelfIp',
                meta: { title: '三级-1', icon: '' }
              },
              {
                path: '/notEnabledIp',
                component: () => import('@/views/selfIp/index.vue'),
                name: 'rootNotEnabledIp',
                meta: { title: '三级-2', icon: '' }
              },
            ]
          },

        ]
      },
      {
        path: '/system',
        component: BlankView,
        meta: { title: '系统设置', icon: 'Setting' },
        children: [
          {
            path: '/user',
            component: () => import('@/views/user/index.vue'),
            name: 'user',
            meta: { title: '用户管理', icon: '' }
          },
          {
            path: '/config',
            component: () => import('@/views/config/index.vue'),
            name: 'config',
            meta: { title: '配置升级', icon: '' }
          },
        ]
      },
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;