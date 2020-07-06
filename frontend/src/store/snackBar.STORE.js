const state = {
  isSnackBarActive: false
}
const mutations = {
  setSnackBarStatus(state, payload) {
    state.isSnackBarActive = payload
  }
}
const getters = {
  getSnackBarStatus(state) {
    return state.isSnackBarActive
  }
}
const actions = {
  updateSnackBarStatus(context, payload) {
    context.commit('setSnackBarStatus', payload)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}