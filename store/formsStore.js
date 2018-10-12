import { observable, computed } from 'mobx';

export default class formsStore {
  @observable
  editState = false;

  @computed
  onPressCompletedEdit() {
    this.setState({ editState: true });
    console.log(true);
  }
}
