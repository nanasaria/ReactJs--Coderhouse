import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebaseConfig from "../../config/db.js";
import itemsStock from "./data/itemsStock.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const postProducts = () => {
  try {
    itemsStock.forEach(async (item) => {
      await setDoc(doc(db, "products", String(item.id)), item);
    });
  } catch (error) {
    console.error("error:", error);
  }
};

export default postProducts;
