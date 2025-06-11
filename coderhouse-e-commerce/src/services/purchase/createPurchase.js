import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import firebaseConfig from "../../config/db.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const createPurchase = async (id, product, value) => {
  try {
    const productSelled = await addDoc(collection(db, "productSelled"), {
      userId: id,
      products: product,
      value,
      date: serverTimestamp(),
    });

    return productSelled;
  } catch (error) {
    console.error("Error:", error);
  }
};

export default createPurchase;
