import {Component} from "react";
import {createHistory} from "history";
import {applyMiddleware, compose} from "redux";
import {Router, Route} from "react-router";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {createStore, renderDevTools} from "js/utils/devTools";
import reducers from "js/reducers";
import Game from "./Game";

const store = compose(
  applyMiddleware(thunk)
)(createStore)(reducers);

const history = createHistory();

export default class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={history}>
            <Route component={Game} path="/" />
          </Router>
        </Provider>
        {renderDevTools(store)}
      </div>
    );
  }
}
