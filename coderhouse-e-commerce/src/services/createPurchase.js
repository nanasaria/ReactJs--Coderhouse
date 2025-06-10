import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import firebaseConfig from "../config/db.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const createPurchase = async (product) => {
  try {
    const productSelled = await addDoc(
      collection(db, "productSelled"),
      product
    );
    return productSelled;
  } catch (error) {
    console.error("Error:", error);
  }
};

export default createPurchase;
