import { auth } from "./firebase-config";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    updatePassword,
    updateEmail,
    reauthenticateWithCredential,
    EmailAuthProvider,
    onAuthStateChanged
} from "firebase/auth"

const firebaseSignUp = async (email, password) => {
    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        throw error;
    }
}

/**
 * Using Firebase authentication login into account
 * @param {String} email The users email address
 * @param {String} password Must be at least six characters
 * @returns Firebase user object
 */
const firebaseSignIn = async (email, password) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        throw error;
    }
};

const firebaseSignOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw error;
    }
    
}

const firebaseChangePassword = async (newPassword) => {
    const user = auth.currentUser;

    if (typeof newPassword !== "string") {
        throw new Error("Password is not a string");
    }

    if (user !== null) {
        try {
            await updatePassword(user, newPassword);
        } catch (error) {
            throw error;
        }
    } else {
        throw new Error("User is not signed in")
    }
};
const firebaseChangeEmail = async (newEmail) => {
    const user = auth.currentUser;

    if (typeof newEmail !== "string") {
        throw new Error("Password is not a string");
    }

    if (user !== null) {

        try {
            await updateEmail(user, newEmail);
        } catch (error) {
            throw error;
        }
    } else {
        throw new Error("User is not signed in")
    }
};

const reauthenticate = (password) => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            try {
                const credential = EmailAuthProvider.credential(user.email, password);

                await reauthenticateWithCredential(user, credential);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    });
};

const onUserChanged = (callback) => {
    return onAuthStateChanged(auth, callback);
} 

export { firebaseSignUp, firebaseSignIn, firebaseSignOut, firebaseChangeEmail, firebaseChangePassword, reauthenticate, onUserChanged }