import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("userStore")
@observer
class App extends Component {
  render() {
    return (
      <div>
        <div>테스트</div>
      </div>
    );
  }
}

export default App;
