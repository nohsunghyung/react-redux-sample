import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";
import RootStore from "./store/RootStore";
import { HashRouter as Router } from "react-router-dom";
import Control from "./components/Control";

const rootStore = new RootStore();

ReactDOM.render(
  <Provider {...rootStore}>
    <Router>
      <App path="/home" component={Control} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
