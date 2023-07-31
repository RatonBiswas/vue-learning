export default{
    registerCoach(state,formdata){
        state.coaches.push(formdata);
    },
    setCoaches(state,payload){
        state.coaches = payload
    }
}