import { auth } from "./firebase-config";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut,
    updatePassword,
    updateEmail,
    reauthenticateWithCredential,
    EmailAuthProvider,
    reauthenticateWithPopup,
    onAuthStateChanged
} from "firebase/auth"

const createUser = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const { uid } = userCredential.user;
            console.log("User successfully created with a userID of ", uid);
            resolve({ uid });
        }).catch((error) => {
            reject({ error });
        });
    });
}

const login = ({ email, password }) => {
    return new Promise((resolve, reject ) => { 
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            resolve({});
        }).catch((error) => {
            
            reject({ error });
        });
    });
};

const logout = () => {
    return new Promise((resolve, reject) => {
        signOut(auth).then(() => {
            resolve(true);
        }).catch((error) =>{
            reject(error);
        });
    });
    
}

const loginWithGoogle = () => {
    return new Promise((resolve, reject) => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            resolve(true);
        }).catch((error) => {
            const credential = GoogleAuthProvider.credentialFromError(error);
            reject(error);
        });
    });
}

const changePassword = async (newPassword) => {
    const user = auth.currentUser;

    if (typeof newPassword !== "string") {
        throw new Error("Password is not a string");
    }

    if (user !== null) {
        try {
            return await updatePassword(user, newPassword);
        } catch (error) {
            throw error;
        }
    } else {
        throw new Error("User is not signed in")
    }
};
const changeEmail = async (newEmail) => {
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



export { createUser, login, logout, changePassword, changeEmail, reauthenticate }