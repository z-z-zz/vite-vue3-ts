<template>
  <section>
    <aside>
      <Menu />
    </aside>
    <main>
      <header>
        <Header />
      </header>
      <div class="wrap">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </main>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from './header.vue'
import Menu from './menu.vue'

export default defineComponent({
  components: {
    Header,
    Menu,
  },
  setup() {

    return {
    }
  },
})
</script>
<style lang="scss" scoped>
section {
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
section aside {
  height: 100%;
  flex-shrink: 0;
  position: relative;
  overflow-y: auto;
}
section main {
  width: 100%;
  height: 100%;
  header {
    height: 50px;
    width: 100%;
    padding: 0 20px;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    z-index: 1000;
  }
  .wrap {
    width: 100%;
    height: calc(100% - 50px);
    margin-top: 50px;
    padding: 10px;
    box-sizing: border-box;
    overflow-y: auto;
  }
}
</style>