import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      todos: []
        // {
        //   userId: 1,
        //   id: 1,
        //   title: "delectus aut autem",
        //   completed: false
        // },
        // {
        //   userId: 2,
        //   id: 25,
        //   title: "voluptas quo tenetur perspiciatis explicabo natus",
        //   completed: true
        // },
        // {
        //   userId: 3,
        //   id: 50,
        //   title: "cupiditate necessitatibus ullam aut quis dolor voluptate",
        //   completed: true
        // }
      // ]
    };
  },
  mutations,
  actions,
  getters
};
