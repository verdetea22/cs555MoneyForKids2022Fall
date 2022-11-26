import React, { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { firebaseSignIn, firebaseSignOut, firebaseSignUp, firebaseChangeEmail, firebaseChangePassword, reauthenticate, onUserChanged } from "../services/firebase/auth";

const useProvideAuth = () => {

    const [user, setUser] = useState(null); 

    /**
     * Login into the website
     * @param {String} email 
     * @param {String} password 
     * @returns 
     */
    const login = async (email, password) => {
        return new Promise((resolve, reject) => {
            firebaseSignIn(email, password).then(({ user }) => {
                setUser(user);
                resolve(user);
            }).catch((error) => {
                reject(error);
            });
        });       
    };

    const logout = async () => {
        try {
            await firebaseSignOut();
            setUser(false);
        } catch (error) {
            throw error;
        }
    };

    const signUp = async (email, password) => {
        try {
            const { user } = await firebaseSignUp(email, password);
            setUser(user);
            return user;
        } catch (error) {
            throw error;
        }
    };

    const changeEmail = async (newEmail) => {
        try { 
            await firebaseChangeEmail(newEmail);
        } catch (error) {
            throw error;
        }
    };

    const changePassword = async (newPassword) => {
        try { 
            await firebaseChangePassword(newPassword);
        } catch (error) {
            throw error;
        }
    };


    useEffect(() => {
        const unsubscribe = onUserChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return {
        user,
        login,
        logout,
        signUp,
        changeEmail,
        changePassword,
        reauthenticate
    }
};

const authContext = createContext();

export function AuthContext({ children }) {
    const auth = useProvideAuth();

    return (
        <authContext.Provider value={auth}>{children}</authContext.Provider>
    );
}
export const useAuth = () => {
    return useContext(authContext);
};