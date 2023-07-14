import { User } from "firebase/auth";

export class UserState {
  user: User | null = null;
  userData = null;
  token = "";
  claims = null;
  firebaseLoaded = false;
}
