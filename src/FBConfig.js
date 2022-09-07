import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB1Gyj2qlLIfM7gsH6CbZ6u_vj9MriJdDk",
  authDomain: "ss-app-88d7b.firebaseapp.com",
  databaseURL: "https://ss-app-88d7b-default-rtdb.firebaseio.com",
  projectId: "ss-app-88d7b",
  storageBucket: "ss-app-88d7b.appspot.com",
  messagingSenderId: "585910966990",
  appId: "1:585910966990:web:21edac42b576f674cfce9f",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
