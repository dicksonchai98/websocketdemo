import { createApp } from "vue";
import { createPinia } from "pinia";
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp47TlsBeMK4hda-LfMQAQN5DFUiHVCFw",
  authDomain: "websocket-demo-5518f.firebaseapp.com",
  databaseURL:
    "https://websocket-demo-5518f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "websocket-demo-5518f",
  storageBucket: "websocket-demo-5518f.appspot.com",
  messagingSenderId: "501538508865",
  appId: "1:501538508865:web:b59d9cca304a855e0436c0",
};

// Initialize Firebase
const apps = initializeApp(firebaseConfig);

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
