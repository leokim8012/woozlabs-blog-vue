import { MutationTree } from "vuex";
import { UserState } from "./state";

import * as types from "./types";

const mutations: MutationTree<UserState> = {
  [types.SET_USER](state, user) {
    state.user = user;
  },
  [types.SET_USER_DATA](state, data) {
    state.userData = data;
  },
  [types.SET_TOKEN](state, token) {
    state.token = token;
  },

  [types.SET_CLAIMS](state, claims) {
    state.claims = claims;
  },

  [types.SET_FIREBASE_LOADED](state) {
    state.firebaseLoaded = true;
  },
};

export default mutations;
