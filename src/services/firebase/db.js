import { db, auth } from "./firebase-config";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const setUser = async ({ name, email, username, uid }) => {
    const userRef = doc(db, "users", uid);

    await setDoc(userRef, { name, email, username, children: [] });
}

const getUser = async () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if (user && user.uid) {
                const userRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(userRef);

                if (docSnap.exists()) {
                    resolve(docSnap.data());
                }
            } else {
                reject(new Error("getUser - User not found!"));
            }
        });
    });
}

export { setUser, getUser };