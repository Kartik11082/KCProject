import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC63-LdWuOfiOHOd2fktLnUP38IRFouTE8",
  authDomain: "kcproject11.firebaseapp.com",
  databaseURL:
    "https://kcproject11-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kcproject11",
  storageBucket: "kcproject11.appspot.com",
  messagingSenderId: "290296969014",
  appId: "1:290296969014:web:d7d5a365d455530a596597",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
