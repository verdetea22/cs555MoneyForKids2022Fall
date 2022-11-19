import { db, auth } from "./firebase-config";
import { setDoc, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { createUser } from "./auth";

const createParentAccount = async ({ name, email, username, uid }) => {
    try {
        const userRef = doc(db, "users", uid);

        await setDoc(userRef, { name, email, username, children: [] });
    } catch (error) {
        throw error;
    }
}

const getParentData = async () => {
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

const createChildAccount = async ({ childName, username, password,  balance }) => {
    return new Promise( async (resolve, reject) => {
        let parentId = null;

        const user = auth.currentUser;
        if (user && user.uid) {
            try {
                parentId = user.uid;
                await signOut(auth);
                const { uid } = await createUser({ email: `${username}@email.com`, password });

                const childRef = doc(db, "children", uid);
                await setDoc(childRef, { 
                    name: childName,
                    username, 
                    balance,
                    requests: [],
                    goals: [],
                    modules: [],
                    tasks: []
                });

                const userRef = doc(db, "users", user.uid);
                await updateDoc(userRef, { 
                    children: arrayUnion(uid)
                });
                resolve();
            } catch (error) {
                console.log(error);
                reject(error);
            } 
        } else {
            reject(new Error("User not found!"));
        }
        
    });
}

const requestChildAccountCreation = ({ name, username, password, balance }) => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            try {

                if (user && user.uid) {
                    const parentId = user.uid;

                    const requestRef = doc(db, "requests", parentId);

                    await setDoc(requestRef, {
                        name,
                        username,
                        password,
                        balance,
                        parentId
                    });

                    resolve();

                } else {
                    throw new Error("User or user id is not defined!");
                }
            } catch(error) {
                reject(error);
            }
        });
    });
}

export { createParentAccount, getParentData, createChildAccount, requestChildAccountCreation };