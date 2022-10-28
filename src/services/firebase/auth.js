import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

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

export { createUser, login }