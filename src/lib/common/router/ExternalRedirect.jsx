//Реализовывает возможность декларативного перехода по внешней ссылке
import * as ReactRedux from "react-redux";
import { PureComponent } from "react";
import LocationActions from "actions/LocationActions";
import UiActions from "actions/UiActions";

class ExternalRedirect extends PureComponent {
  constructor(props) {
    super(props);
    this.props.dispatch(UiActions.togglePreloader(true));
    if (this.props.to === LocationActions.RELOAD) window.location.reload();
    else window.location.replace(this.props.to);
  }

  render() {
    return null;
  }
}

export default ReactRedux.connect(
  null,
  (dispatch) => ({ dispatch })
)(ExternalRedirect);
