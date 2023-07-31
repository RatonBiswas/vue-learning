export default {
  registerCoach(context, mutatedData) {
    const userId = context.rootGetters.userId
    // console.log(userId);
    const coachData = {
      firstName: mutatedData.firstName,
      lastName: mutatedData.lastName,
      description: mutatedData.desc,
      hourlyRate: mutatedData.rate,
      areas: mutatedData.areas
    }
    const response = fetch(
      `https://coaches-cc10e-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    )

    // const putingData = await fetch(`https://coach-45850-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
    //   method: 'PUT',
    //   body: JSON.stringify(coachData)
    // })
    // const responseData = await putingData.json
    if (!response.ok) {
      //console.log(response.json())
    }
    context.commit('registerCoach', {
      ...coachData,
      id: userId
    })
  },
  async loadCoaches(context) {
    const response =await fetch(`https://coaches-cc10e-default-rtdb.firebaseio.com/coaches.json`)
    // console.log(response)
    const responseData = await response.json()
    console.log(responseData)

    if (!response.ok) {
      //
    }

    const coaches = []
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      }
      coaches.push(coach)
    }
    context.commit('setCoaches', coaches)
  }
}
