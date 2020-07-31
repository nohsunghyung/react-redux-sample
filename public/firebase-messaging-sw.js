importScripts("https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js"
);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCoI2Kq8T_fbRSWMVqjpxETbHsXFmwYmh8",
  authDomain: "noh-test.firebaseapp.com",
  databaseURL: "https://noh-test.firebaseio.com",
  projectId: "noh-test",
  storageBucket: "noh-test.appspot.com",
  messagingSenderId: "1018860961722",
  appId: "1:1018860961722:web:fd15892032071fbd232783",
  measurementId: "G-VVQHW0FCM3",
};

firebase.initializeApp(config);

const messaging = firebase.messaging();
