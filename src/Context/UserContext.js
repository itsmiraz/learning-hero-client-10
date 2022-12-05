import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../Firebase/firebase.init';

export const AuthContext = createContext()

const UserContext = ({ children }) => {

    const auth = getAuth(app)



    // User Data
    const [user, setuser] = useState(null)

    // Room data
    const [roomDetails, setRoomDetails] = useState('')

    // Reload Issu fixed
    const [loading, setLoading] = useState(true)

    // Providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Dark Mode
    const [theme, setTheme] = useState('light');



    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };



    // Sign up Method
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // Google Sign in
    const googleSginIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    // Email sign in
    const signIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Github sign in
    const githubSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // User profie set
    const setuserProfile = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    // On AUHT state Change
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setuser(currentUser)

        })

        return () => unsubscribe()

    },)

    // Log out
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
        googleSginIn,
        signIn,
        auth,
        setRoomDetails,
        roomDetails,
        handleThemeSwitch
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