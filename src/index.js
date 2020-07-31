import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "mobx-react";
import UserStore from "./store/UserStore";

const userStore = new UserStore();

ReactDOM.render(
  <Provider store={userStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
