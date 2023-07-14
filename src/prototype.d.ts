import { Router } from "vue-router";
import firebase from "firebase/compat/app";
import { Auth } from "firebase/auth";
import { Store, S } from "vuex";
import { BreakpointObject } from "./utils/useBreakpoint";
import { Ref } from "vue";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $router: Router;
    $store: Store<any>;
    $breakpoint: BreakpointObject;
    $firebase: typeof firebase;
    $firebaseAuth: typeof Auth;
  }
}
