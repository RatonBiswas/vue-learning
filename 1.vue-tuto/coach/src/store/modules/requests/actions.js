export default {
  addContact(context, mutedData) {
    const addNewContact = {
      id: new Date().toISOString(),
      coachId: mutedData.coachId,
      userEmail: mutedData.email,
      message: mutedData.message
    }
    context.commit('addRequests', addNewContact)
  }
}
