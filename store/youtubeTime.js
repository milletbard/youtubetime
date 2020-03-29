const state = () => ({
  youtubeStepActive: 0
})

const mutations = {
  UPDATE_STEPS_ACTIVE: (state, active) => {
    state.youtubeStepActive = active
  }
}

const actions = {
  updateStepsActive: ({ commit }, active) => {
    commit('UPDATE_STEPS_ACTIVE', active)
  }
}

export default {
  state,
  mutations,
  actions
}
