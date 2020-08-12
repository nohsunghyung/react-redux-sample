import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Control from "./components/Control";
import Test from "./components/Test";
import "./css/index.css";

function App({ component: Component, ...ddd }) {
  console.log(Component, ddd);
  return (
    <div>
      <Component></Component>
    </div>
  );
}

export default App;
