import { GetterTree, MutationTree } from 'vuex'

export const state = () => ({
  isSetLanguage: false,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isSetLanguage: (state) => state.isSetLanguage,
}

export const mutations: MutationTree<RootState> = {
  SET_IS_SET_LANGUAGE: (state, value: boolean) => (state.isSetLanguage = value),
}
