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
  addItem(item, timeout) {
    return new Promise((resolve) => {
      const updateData = () => {
        this.data.push(item);
        resolve(item);
      };
      if (timeout) {
        setTimeout(
          () => {
            runInAction(updateData);
          },
          timeout
        );
      } else {
        runInAction(updateData);
      }
    });
  }
}
