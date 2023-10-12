import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,onAuthStateChanged
} from "firebase/auth"
import { setDoc, doc } from "firebase/firestore";


const AuthContext = createContext()

export function AuthContextProvider ({children}) {

    const [user,setUser] = useState({})

    function singUp(email, password){
        createUserWithEmailAndPassword(auth,email,password)
        setDoc(doc(db,'users',email),{
            savedShows: {}
        })
    }

    function singIn(email, password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut (){
        return signOut(auth)
    }

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsuscribe
        }
    },[])

    return (
        <AuthContext.Provider value={{singUp, singIn, logOut, user}}>  
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth () {
    return useContext(AuthContext); 
}