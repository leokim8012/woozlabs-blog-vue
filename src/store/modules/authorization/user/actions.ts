import { UserState } from "./state";
import { ActionTree, ActionContext } from "vuex";

import * as types from "./types";
const actions: ActionTree<UserState, any> = {
  async [types.SET_USER](
    context: ActionContext<UserState, any>,
    user: UserState
  ) {
    context.commit(types.SET_USER, user);
    if (!user) {
      context.commit(types.SET_FIREBASE_LOADED);
      return null;
    }
    try {
      //
    } catch (e) {
      console.error(e);
    }
    await context.dispatch(types.GET_TOKEN);
    context.commit(types.SET_FIREBASE_LOADED);
    return true;
  },

  async [types.GET_TOKEN](context: ActionContext<UserState, any>) {
    if (context.state.user) {
      const token = await context.state.user.getIdToken(true);
      context.commit(types.SET_TOKEN, token);
      const { claims } = await context.state.user.getIdTokenResult();
      context.commit(types.SET_CLAIMS, claims);
    }
  },
};

export default actions;
