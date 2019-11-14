import { action, observable, runInAction } from "mobx";
import makeUuid from "uuid/v4";
import remoteDev from "mobx-remotedev";

export default @remoteDev class MainStore {
  @observable user = null;

  @observable data = [];

  @action authUser(login) {
    this.user = { login, token: makeUuid() };
  }

  @action
  async addUser() {
    const response = await fetch("https://randomuser.me/api/");
    const { results: [user] } = await response.json();
    runInAction(() => {
      this.data.push(user);
    });
    return user;
  }
}
