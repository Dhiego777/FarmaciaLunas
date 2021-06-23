import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedUser: {},
    user: [],
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
    setUser(){
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
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