import React, { Component } from "react";
import FirebaseService from "./service/FirebaseService";

//token값 알아내기
FirebaseService.requestPermission()
  .then(function () {
    // console.log("허가!");
    return FirebaseService.getToken(); //토큰을 받는 함수를 추가!
  })
  .then(function (token) {
    console.log(token); //토큰을 출력!
  })
  .catch(function (err) {
    console.log("fcm에러 : ", err);
  });

FirebaseService.onMessage(() => {
  console.log("asdfasdfasdf");
});

class App extends Component {
  render() {
    return <div></div>;
  }
}

export default App;
