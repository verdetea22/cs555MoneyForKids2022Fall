import { db, auth } from "./firebase-config";
import { setDoc, doc, getDoc, updateDoc, arrayUnion, query, collection, where, getDocs, addDoc, deleteDoc, documentId } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseSignUp, firebaseSignOut } from "./auth";

/**
 * Creates a parent account and stores parent information in a database
 * @param {String} name The name of the parent
 * @param {String} uid The parent's user ID on authentication
 */
const createParentAccount = async (name, uid) => {
    try {

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
 * Update a data field for a document
 * @param {String} id The user id for the document to be updated
 * @param {*} field The field to be updated
 * @param {*} newData The new data to override the old data
 */
const updateUserData = async (id, field, newData) => {
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, {
       [field] : newData
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

        await firebaseSignOut();

        const { user } = await firebaseSignUp(`${username}@email.com`, password);

        const childRef = doc(db, "users", user.uid);

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
            childIds: arrayUnion(user.uid)
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

const getEmail = async () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                reject(new Error("User not logged in!"));
            }

            if (!user.email) {
                reject(new Error("User has no email!"));
            }

            resolve(user.email);
        });
    });
}

export { createParentAccount, getCurrentUserData, createChildAccount, requestChildAccountCreation, deleteRequest, findRequestByCredentials, getChildAccounts, getEmail, updateUserData };