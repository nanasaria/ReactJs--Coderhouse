import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./db";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
