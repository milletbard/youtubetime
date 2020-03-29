const state = () => ({
  youtubeStepActive: 0
})

const mutations = {
  UPDATE_STEPS_ACTIVE: (state, active) => {
    state.youtubeStepActive = active
  }
}

export default {
  state,
  mutations
}
