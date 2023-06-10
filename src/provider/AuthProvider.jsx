import React from 'react';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
   
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // const googleSignin = () => {
    //     setLoading(true)
    //     return signInWithPopup(auth, googleProvider)
    // }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser);
            console.log('current user', currentUser);

            // set token jwt
            // if (currentUser) {
            //     axios.post('https://bistro-boss-server-kamelmahmud0408.vercel.app/jwt', { email: currentUser.email })
            //         .then(data => {
            //             console.log(data.data.token)
            //             localStorage.setItem('access-token', data.data.token)
            //             setLoading(false);
            //         })
            // }
            // else {
            //     localStorage.removeItem('access-token')
            // }


        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        // googleSignin,
        logOut,
        updateUserProfile
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;