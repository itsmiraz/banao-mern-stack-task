import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../Firebase/firebase.init.config';

export const AuthContext = createContext()

const UserContext = ({ children }) => {
    const [user, setuser] = useState(null)
    const auth = getAuth(app)
    const [roomDetails, setRoomDetails] = useState('')
    const [loading, setLoading] = useState(true)
    const [joinGroup, setJoinGroup] = useState(false)


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSginIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const signIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const githubSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const setuserProfile = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setuser(currentUser)

        })

        return () => unsubscribe()

    },)


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

   


    const authInfo = {
        user,
        signUp,
        githubSingIn,
        loading,
        setuserProfile,
        logOut,
        joinGroup,
        setJoinGroup,
        googleSginIn,
        signIn,
        auth,
        setRoomDetails,
        roomDetails
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>


    );
};

export default UserContext;