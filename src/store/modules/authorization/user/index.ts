import { UserState } from "./state";

import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

import { Module } from "vuex";

const UserStore: Module<UserState, any> = {
  namespaced: true,
  state: new UserState(),
  getters,
  mutations,
  actions,
};

export default UserStore;
