import { db, auth } from "./firebase-config";
import { setDoc, doc, getDoc, updateDoc, arrayUnion, query, collection, where, getDocs, addDoc, deleteDoc, documentId } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { createUser } from "./auth";

/**
 * Creates a parent account and stores parent information in a database
 * @param {String} name The name of the parent
 * @param {String} email The parent's email
 * @param {String} password A password which must be at least six digits long
 */
const createParentAccount = async ({ name, email, password }) => {
    try {

        const { uid } = await createUser({ email, password });

        const userRef = doc(db, "users", uid);

        await setDoc(userRef, { role: "parent", name, childIds: [], interest: 0.0 });
    } catch (error) {
        throw error;
    }
}

/**
 * Get current user information
 * @returns {Promise<Object>}
 */
const getCurrentUserData = async () => {
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

/**
 * Create child account and store child information
 * @param {String} name Name of the child
 * @param {String} username The username of the child
 * @param {String} password The password of the child
 * @param {Number} balance The initial balance of the child
 * @param {String} parentId The uid of the parent account
 */
const createChildAccount = async (name, username, password, balance, parentId) => {
    try {
        
        if (typeof balance !== "number") {
            throw new Error("Balance is not a number");
        }

        await signOut(auth);

        const { uid: childId } = await createUser({ email: `${username}@email.com`, password });

        const childRef = doc(db, "users", childId);

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
            childIds: arrayUnion(childId)
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
};

const getChildAccounts = async (childIds) => {
    try {
        const usersQuery = query(collection(db, "users"), where(documentId(), "in", childIds));

        const querySnapshot = await getDocs(usersQuery);

        let children = []

        querySnapshot.forEach(doc => {
            children.push({ id: doc.id ,...doc.data() });
        });

        return children
        
    } catch (error) {
        throw error;
    }
}

export { createParentAccount, getCurrentUserData, createChildAccount, requestChildAccountCreation, deleteRequest, findRequestByCredentials, getChildAccounts };