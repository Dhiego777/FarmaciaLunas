import { createStore } from 'vuex'



export default createStore({
  state: {
    selectedUser: {},
    users: [],
  },
  mutations: {
    setSelectedUser(state, user) {
      localStorage.setItem("selectedUser", JSON.stringify(user));
      state.selectedUser = user;
    },
    setUsers(state, users) {
      localStorage.setItem("users", JSON.stringify(users));
      state.users = users;
    },
    initialiseStore(state) {
      let localStorageSelectedUser = localStorage.getItem("selectedUser");
      if (localStorageSelectedUser) {
        state.selectedUser = JSON.parse(localStorageSelectedUser);
      }

      let localStorageUsers = localStorage.getItem("users");
      if (localStorageUsers) {
        state.users = JSON.parse(localStorageUsers);
      }
    }
  },
  actions: {}
});