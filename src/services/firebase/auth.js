import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const createUser = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const { uid } = userCredential.user;
            console.log("User successfully created with a userID of ", uid);
        });
    });
}

const login = ({ email, password }) => {
    return new Promise((resolve, reject ) => { 
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            resolve(true);
        }).catch((error) => {
            
            reject(error);
        });
    });
};

export { createUser, login }