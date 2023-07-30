export default {
  coaches(state) {
    return state.coaches
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0
  },
  //   isCoach(state,getters,rootGetters,rootState) {
  isCoach(_1,getters, _2, rootGetters) {
    const coaches =  getters.coaches
    // const coaches = state.coaches
    const userId = rootGetters.userId
    return coaches.some((coache) => coache.id === userId)
  }
}
