import React, { Component } from "react";
import Counter from "./components/Counter";

export class App extends Component {
  render() {
    return (
      <div>
        <div>이건은 마스터입니다</div>
        <Counter />
      </div>
    );
  }
}

export default App;
