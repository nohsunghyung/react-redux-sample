import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";
import RootStore from "./store/RootStore";
import { HashRouter as Router } from "react-router-dom";

const rootStore = new RootStore();

ReactDOM.render(
  <Provider {...rootStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
