import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import firebaseConfig from "../../config/db.js";

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

const getPurchases = async (id) => {
  try {
    const purchases = await collection(db, "productSelled");
    const q = query(purchases, where("userId", "==", id));
    const purchasesByUser = await getDocs(q);
    return purchasesByUser;
  } catch (error) {
    console.error("error:", error);
  }
};

export default getPurchases;
