import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebaseConfig from "../../config/db.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const createUser = async (user) => {
  try {
    const newUser = await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      createdAt: new Date(),
    });

    return newUser;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default createUser;
