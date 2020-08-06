import UserStore from "./UserStore";

class RootStore {
  constructor() {
    this.UserStore = new UserStore(this);
  }
}

export default RootStore;
