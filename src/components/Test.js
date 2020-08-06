import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("UserStore")
@observer
class Test extends Component {
  onChange = () => {
    const { UserStore } = this.props;
    UserStore.onChange();
  };
  render() {
    return (
      <div>
        테스트
        <button onClick={this.onChange}>ddd</button>
      </div>
    );
  }
}

export default Test;
