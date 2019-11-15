
import { action, observable, runInAction } from "mobx";
import Config from "const/Config";
import Utils from "utils/Utils";
import makeUuid from "uuid/v4";
import remoteDev from "mobx-remotedev";

export default @remoteDev class MainStore {
  @observable user = null;

  @observable data = [];

  constructor() {
    try {
      this.user = JSON.parse(Utils.storageValue(Config.AUTH_LS_KEY));
    } catch (exception) {}
  }

  @action authUser(login) {
    this.user = { login, token: makeUuid() };
    Utils.storageValue(Config.AUTH_LS_KEY, JSON.stringify(this.user));
  }

  @action
  logoutUser() {
    this.user = null;
    Utils.storageValue(Config.AUTH_LS_KEY, null);
  }

  @action
  async addItem() {
    const response = await fetch(Config.DATA_API_URL);
    const { results: [user] } = await response.json();
    runInAction(() => {
      this.data.push(user);
    });
    return user;
  }
}
