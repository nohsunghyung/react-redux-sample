import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Control from "./components/Control";
import Test from "./components/Test";

@inject("UserStore")
@observer
class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/control" component={Control}></Route>
          <Route path="/test" component={Test}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
