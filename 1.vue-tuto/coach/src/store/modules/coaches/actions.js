export default {
  registerCoach(context, mutatedData) {
    const coachData = {
    //   id: new Date().toISOString(),
      id: context.rootGetters.userId,
      firstName: mutatedData.firstName,
      lastName: mutatedData.lastName,
      description: mutatedData.desc,
      hourlyRate: mutatedData.rate,
      areas: mutatedData.areas
    }
    context.commit('registerCoach', coachData)
  }
}
