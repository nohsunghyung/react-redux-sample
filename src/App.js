import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Control from "./components/Control";
import Test from "./components/Test";
import "./css/index.css";

@inject("UserStore")
@observer
class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="box">박스</div>
        <div className="box2">박스2</div>
        <Switch>
          <Route exact path="/control" component={Control}></Route>
          <Route path="/test" component={Test}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
