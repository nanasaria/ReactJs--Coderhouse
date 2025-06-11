import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebaseConfig from "../../config/db.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getPurchase = async (id) => {
  try {
    const purchases = doc(db, "productSelled", id);
    const docPurchase = await getDoc(purchases);

    return { id: docPurchase.id, ...docPurchase.data() };
  } catch (error) {
    console.error("error:", error);
  }
};

export default getPurchase;
