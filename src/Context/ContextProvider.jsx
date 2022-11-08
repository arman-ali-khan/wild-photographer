import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';


const auth = getAuth(app)
export const UserContext = createContext()
const ContextProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState({name: 'Samrat'})


    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser=(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const githubLogin = ()=>{
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=> unsubscribe();
    },[])
    const info = {
        user, 
        createUser,
        logOut,
        loginUser,
        googleLogin,
        githubLogin,
        updateUser,
        logOut
    }
    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

export default ContextProvider;