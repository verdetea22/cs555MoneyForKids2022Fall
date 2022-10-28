import { db } from "./firebase-config";
import { setDoc, doc } from "firebase/firestore";

const setUser = async ({ name, email, username, uid }) => {
    const userRef = doc(db, "users", uid);

    await setDoc(userRef, { name, email, username });
}

export { setUser };