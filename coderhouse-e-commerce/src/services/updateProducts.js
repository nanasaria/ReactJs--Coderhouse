import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import firebaseConfig from "../config/db.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const updateProducts = async (id, newQuantity) => {
  const product = doc(db, "produtos", id);

  try {
    await updateDoc(product, {
      quantidade: newQuantity,
    });
  } catch (error) {
    console.error("error:", error);
  }
};

export default updateProducts;
