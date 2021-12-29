import { createStore } from 'vuex'
import{roadmapFile} from './models/datas.js'
export default createStore({
  state: {
    selectedUser: {},
    user: [],
    frontEnd:[],
    backEnd:[],
    publicity:[],
    roadmap:roadmapFile()
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
    setFrontEnd(state,frontEnd){
      localStorage.setItem("frontEnd",JSON.stringify(frontEnd));
      state.frontEnd = frontEnd
    },
    setBackEnd(state,backEnd){
      localStorage.setItem("backEnd",JSON.stringify(backEnd));
      state.backEnd = backEnd
    },
    setPublicity(state,publicity){
      localStorage.setItem("publicity",JSON.stringify(publicity));
      state.publicity = publicity
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