import { createUserWithEmailAndPassword} from "firebase/auth"

const createUser = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const { uid } = userCredential.user;
            console.log("User successfully created with a userID of ", uid);
        });
    });
}