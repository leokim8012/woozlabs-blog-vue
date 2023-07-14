import { GetterTree } from "vuex";

import { UserState } from "./state";

export const FIREBASE_LOADED = "FIREBASE_LOADED";
export const GET_USER = "GET_USER";
export const GET_USER_DATA = "GET_USER_DATA";
export const GET_CLAIMS = "GET_CLAIMS";
export const GET_TOKEN = "GET_TOKEN";

const getters: GetterTree<UserState, any> = {
  [FIREBASE_LOADED](state: UserState) {
    return state.firebaseLoaded;
  },
  [GET_USER](state) {
    return state.user;
  },
  [GET_CLAIMS](state) {
    return state.claims;
  },
  [GET_TOKEN](state) {
    return state.token;
  },
};

export default getters;
