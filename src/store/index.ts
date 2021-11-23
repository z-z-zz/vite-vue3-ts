import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number,
  collapse: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    collapse: false,
  },
  getters: {
    getCout(state: State) {
      return state.count
    },
    getCollapse(state: State) {
      return state.collapse
    }
  },
  mutations: {
    setCount(state: State, count: number) {
      state.count = count
    },
    setCollapse(state: State, collapse: boolean) {
      state.collapse = collapse
    },
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key)
}