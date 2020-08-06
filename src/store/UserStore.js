import { observable, action } from "mobx";
import History from "../utils/history";

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  @observable
  username = "노성형";

  @action
  onChange() {
    History.push("/control");
    // window.location.reload();
  }
}

export default UserStore;
