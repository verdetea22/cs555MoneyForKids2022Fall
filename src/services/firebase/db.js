import { db, auth } from "./firebase-config";
import { setDoc, doc, getDoc, updateDoc, arrayUnion, query, collection, where, getDocs, addDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { createUser } from "./auth";

import { uuidv4 } from "@firebase/util";

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

const createChildAccount = async ({ name, username, password,  balance, parentId }) => {
    try {

        await signOut(auth);

        const { uid: childId } = await createUser({ email: `${username}@email.com`, password });

        const childRef = doc(db, "children", childId);

        await setDoc(childRef, { 
            role: "child",
            name,
            username, 
            balance,
            requests: [],
            goals: [],
            modules: [],
            tasks: []
        });

        const parentRef = doc(db, "users", parentId);
        await updateDoc(parentRef, { 
            children: arrayUnion(childId)
        });

    } catch (error) {
        throw error;
    } 
  
};

const requestChildAccountCreation = ({ name, username, password, balance }) => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            try {

                if (user && user.uid) {
                    const parentId = user.uid;

                    const requestRef = collection(db, "requests");

                    await addDoc(requestRef, {
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
};

const deleteRequest = async (id) => {
    try { 
        const deleteRef = doc(db, "requests", id);
        await deleteDoc(deleteRef);
    } catch (error) {
        throw error;
    }
}

const findRequestByCredentials = async ({ username, password }) => {
    try {
        const requestQuery = query(collection(db, "requests"), where("username", "==", username), where("password", "==", password));

        const querySnapshot = await getDocs(requestQuery);

        let request = []

        querySnapshot.forEach(doc => {
            request.push({ id: doc.id ,...doc.data() });
        });

        if (request.length > 1) {
            throw new Error("Duplicate requests!");
        }

        return request[0];

    } catch (error) {
        throw error;
    }
}

export { createParentAccount, getParentData, createChildAccount, requestChildAccountCreation, deleteRequest, findRequestByCredentials };