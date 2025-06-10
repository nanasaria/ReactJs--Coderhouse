import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseConfig from "../config/db.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getProducts = async () => {
  try {
    const query = await getDocs(collection(db, "products"));
    return query;
  } catch (error) {
    console.error("error:", error);
  }
};

export default getProducts;
